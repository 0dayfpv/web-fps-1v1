import './style.css';
import {
  DEFAULT_CROSSHAIR,
  DEFAULT_SETTINGS,
  NETWORK_CONFIG,
  PLAYER_CONFIG,
  WEAPON_IDS,
  WEAPONS,
} from './constants.js';

const SETTINGS_STORAGE_KEY = 'web_fps_1v1_settings_v1';

const CROSSHAIR_SWATCHES = Object.freeze([
  '#00ff66',
  '#00e5ff',
  '#ffe600',
  '#ff3b5c',
  '#ffffff',
  '#ff44ff',
]);

function clampNum(val, min, max, fallback) {
  const n = Number(val);
  if (!Number.isFinite(n)) return fallback;
  return Math.max(min, Math.min(max, n));
}

function sanitizeHexColor(val, fallback) {
  if (typeof val === 'string' && /^#[0-9a-fA-F]{6}$/.test(val.trim())) {
    return val.trim().toLowerCase();
  }
  return fallback;
}

function sanitizeCrosshair(raw) {
  const src = raw && typeof raw === 'object' ? raw : {};
  return {
    color: sanitizeHexColor(src.color, DEFAULT_CROSSHAIR.color),
    size: Math.round(clampNum(src.size, 2, 20, DEFAULT_CROSSHAIR.size)),
    thickness:
      Math.round(clampNum(src.thickness, 1, 6, DEFAULT_CROSSHAIR.thickness) * 2) / 2,
    gap: Math.round(clampNum(src.gap, -4, 14, DEFAULT_CROSSHAIR.gap)),
    outline:
      typeof src.outline === 'boolean' ? src.outline : DEFAULT_CROSSHAIR.outline,
    dot: typeof src.dot === 'boolean' ? src.dot : DEFAULT_CROSSHAIR.dot,
    dynamic:
      typeof src.dynamic === 'boolean' ? src.dynamic : DEFAULT_CROSSHAIR.dynamic,
    alpha: clampNum(src.alpha, 0.2, 1.0, DEFAULT_CROSSHAIR.alpha),
  };
}

export class UIManager {
  constructor() {
    this.root = document.getElementById('ui-root');
    if (!this.root) {
      throw new Error('#ui-root elementi bulunamadı.');
    }

    this._callbacks = {
      createRoom: null,
      joinRoom: null,
      resume: null,
      leaveRoom: null,
      settingsChange: null,
      startAI: null,
      exitAI: null,
      aiSpeedChange: null,
      aiCameraChange: null,
      aiReset: null,
    };

    this._settings = this._loadSettings();

    this._currentRoomCode = '';
    this._copyFeedbackTimer = null;
    this._crosshairTimer = null;
    this._hitmarkerTimer = null;
    this._damageTimer = null;

    // Cached HUD states to avoid redundant DOM writes on per-frame updates
    this._lastSpeedInt = -1;
    this._lastBhopState = false;
    this._lastCrosshairSpread = '';
    this._lastFpsInt = -1;
    this._lastFpsTier = '';
    this._scopeVisible = false;
    this._lastWeaponKey = '';
    this._activePauseTab = 'general';

    // Cached AI Training HUD states
    this._aiSpeed = 1;
    this._aiCamera = 'overview';
    this._lastAIHistoryLen = -1;
    this._lastAIStatsKey = '';

    this._render();
    this._bindElements();
    this._bindEvents();
    this._applyCrosshairStyles();
    this._syncFpsVisibility();
    this.showLobby();
  }

  _loadSettings() {
    const defaults = {
      sensitivity: DEFAULT_SETTINGS.sensitivity,
      adsSensitivity: DEFAULT_SETTINGS.adsSensitivity,
      fov: DEFAULT_SETTINGS.fov,
      volume: DEFAULT_SETTINGS.volume,
      showFps: Boolean(DEFAULT_SETTINGS.showFps),
      crosshair: sanitizeCrosshair(DEFAULT_CROSSHAIR),
    };

    try {
      const raw = window.localStorage?.getItem(SETTINGS_STORAGE_KEY);
      if (!raw) return defaults;
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== 'object') return defaults;

      return {
        sensitivity: clampNum(parsed.sensitivity, 0.2, 3.0, defaults.sensitivity),
        adsSensitivity: clampNum(parsed.adsSensitivity, 0.2, 1.5, defaults.adsSensitivity),
        fov: Math.round(clampNum(parsed.fov, 60, 110, defaults.fov)),
        volume: clampNum(parsed.volume, 0, 1, defaults.volume),
        showFps:
          typeof parsed.showFps === 'boolean' ? parsed.showFps : defaults.showFps,
        crosshair: sanitizeCrosshair(parsed.crosshair),
      };
    } catch {
      return defaults;
    }
  }

  _saveSettings() {
    try {
      window.localStorage?.setItem(
        SETTINGS_STORAGE_KEY,
        JSON.stringify(this._settings)
      );
    } catch {
      // Ignore storage quota / private-browsing errors
    }
  }

  _render() {
    const defaultVolPct = Math.round(this._settings.volume * 100);
    const maxLen = NETWORK_CONFIG.ROOM_CODE_LENGTH;
    const defaultWeapon = WEAPONS[WEAPON_IDS.AR];
    const ch = this._settings.crosshair;
    const chAlphaPct = Math.round(ch.alpha * 100);

    const swatchesHtml = CROSSHAIR_SWATCHES.map(
      (hex) => `
        <button
          type="button"
          class="ch-swatch${ch.color === hex ? ' active' : ''}"
          data-color="${hex}"
          style="background-color: ${hex};"
          aria-label="Renk ${hex}"
          title="${hex}"
        ></button>`
    ).join('');

    this.root.innerHTML = `
      <!-- Lobby Overlay -->
      <div id="lobby-overlay">
        <div class="lobby-card">
          <div class="lobby-header">
            <div class="lobby-badge">P2P ARENA</div>
            <h1 class="lobby-title">1v1 ARENA FPS</h1>
            <p class="lobby-subtitle">WASD + Space • Ctrl Crouch-Jump • 1/2/3 Silah • Sağ Tık ADS/Bıçak • R Reload • F İncele</p>
          </div>

          <div class="lobby-sections">
            <section class="lobby-section">
              <h2 class="section-title">Oda Kur</h2>
              <button type="button" id="btn-create-room" class="btn btn-primary">
                Yeni Oda Oluştur
              </button>
              <div id="room-code-box" class="room-code-box hidden">
                <span id="room-code-value" class="room-code-value">------</span>
                <button type="button" id="btn-copy-code" class="btn btn-copy">
                  Kopyala
                </button>
              </div>
            </section>

            <section class="lobby-section">
              <h2 class="section-title">Odaya Katıl</h2>
              <input
                type="text"
                id="join-code-input"
                class="text-input"
                maxlength="${maxLen}"
                placeholder="ODA KODU"
                autocomplete="off"
                autocorrect="off"
                autocapitalize="characters"
                spellcheck="false"
              />
              <button type="button" id="btn-join-room" class="btn btn-secondary">
                Katıl
              </button>
            </section>
          </div>

          <div class="lobby-ai-entry">
            <button type="button" id="btn-ai-mode" class="btn btn-ai-mode">
              🤖 AI vs AI — Canlı Makine Öğrenmesi (Sıfırdan Eğitim)
            </button>
          </div>

          <div id="lobby-status" class="lobby-status hidden" role="status"></div>

          <div style="margin-top: 16px; padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.08); text-align: center; font-size: 11px; color: rgba(255,255,255,0.55); font-family: monospace;">
            © 2025–${Math.max(2026, new Date().getFullYear())} <a href="https://hamzafpv.com.tr" target="_blank" rel="noopener noreferrer" style="color: #00e5ff; text-decoration: none; font-weight: 700;">hamzafpv.com.tr</a> • Tüm hakları saklıdır.
          </div>
        </div>
      </div>

      <!-- In-Game HUD -->
      <div id="hud" class="hidden">
        <!-- Sniper Scope Overlay -->
        <div id="sniper-scope" class="sniper-scope hidden" aria-hidden="true">
          <div class="scope-lens">
            <div class="scope-line scope-line-h"></div>
            <div class="scope-line scope-line-v"></div>
            <div class="scope-mildots scope-mildots-h">
              <span></span><span></span><span></span><span></span>
              <span></span><span></span><span></span><span></span>
            </div>
            <div class="scope-mildots scope-mildots-v">
              <span></span><span></span><span></span><span></span>
              <span></span><span></span><span></span><span></span>
            </div>
            <div class="scope-center-dot"></div>
          </div>
        </div>

        <div id="damage-vignette" class="damage-vignette"></div>

        <div id="crosshair" class="crosshair">
          <span class="ch-line ch-top"></span>
          <span class="ch-line ch-bottom"></span>
          <span class="ch-line ch-left"></span>
          <span class="ch-line ch-right"></span>
          <span class="ch-dot"></span>
        </div>

        <div id="hitmarker" class="hitmarker">
          <svg viewBox="0 0 28 28" aria-hidden="true">
            <line x1="4" y1="4" x2="10.5" y2="10.5" />
            <line x1="24" y1="4" x2="17.5" y2="10.5" />
            <line x1="4" y1="24" x2="10.5" y2="17.5" />
            <line x1="24" y1="24" x2="17.5" y2="17.5" />
          </svg>
        </div>

        <!-- Krunker Score Pop-up Feed -->
        <div id="score-popup-feed" class="score-popup-feed" aria-live="off"></div>

        <!-- Top-Center Scoreboard -->
        <div class="scoreboard">
          <div class="score-side me">
            <span class="score-label">SEN</span>
            <span id="score-me" class="score-num">0</span>
          </div>
          <span class="score-divider">:</span>
          <div class="score-side enemy">
            <span id="score-enemy" class="score-num">0</span>
            <span class="score-label">RAKİP</span>
          </div>
        </div>

        <!-- Top-Right Status (FPS + ESC Hint) -->
        <div class="hud-top-right">
          <div id="fps-counter" class="fps-counter${this._settings.showFps ? '' : ' hidden'}">-- FPS</div>
          <div class="hud-hint">ESC: Ayarlar</div>
        </div>

        <!-- Bottom-Left HP Panel -->
        <div id="hp-panel" class="hp-panel">
          <div class="hp-top">
            <span class="hp-label">CAN</span>
            <span id="hp-value" class="hp-value">${PLAYER_CONFIG.MAX_HP}</span>
          </div>
          <div class="hp-bar-track">
            <div id="hp-bar-fill" class="hp-bar-fill"></div>
          </div>
        </div>

        <!-- Bottom-Center Live Speedometer -->
        <div id="speedometer" class="speedometer">
          <span id="speed-value" class="speed-value">0</span>
          <span class="speed-unit">u/s</span>
        </div>

        <!-- Bottom-Right Weapon, Ammo & Reload Panel -->
        <div id="weapon-panel" class="weapon-panel">
          <div class="weapon-slots">
            <span id="slot-ar" class="weapon-slot active" data-weapon="${WEAPON_IDS.AR}">
              <span class="slot-key">1</span> AR
            </span>
            <span id="slot-sniper" class="weapon-slot" data-weapon="${WEAPON_IDS.SNIPER}">
              <span class="slot-key">2</span> SNIPER
            </span>
            <span id="slot-knife" class="weapon-slot" data-weapon="${WEAPON_IDS.KNIFE}">
              <span class="slot-key">3</span> BIÇAK
            </span>
          </div>
          <div class="weapon-main">
            <span id="weapon-name" class="weapon-name">${defaultWeapon.name}</span>
            <div class="ammo-readout">
              <span id="ammo-current" class="ammo-current">${defaultWeapon.magSize}</span>
              <span id="ammo-sep" class="ammo-sep">/</span>
              <span id="ammo-mag" class="ammo-mag">${defaultWeapon.magSize}</span>
            </div>
          </div>
          <div id="reload-container" class="reload-container hidden">
            <div class="reload-header">
              <span class="reload-label">ŞARJÖR DEĞİŞTİRİLİYOR</span>
            </div>
            <div class="reload-bar-track">
              <div id="reload-bar-fill" class="reload-bar-fill"></div>
            </div>
          </div>
        </div>

        <div id="respawn-overlay" class="respawn-overlay hidden">
          <div id="respawn-text" class="respawn-text"></div>
        </div>
      </div>

      <!-- AI vs AI Live Training HUD Overlay -->
      <div id="ai-hud" class="hidden">
        <!-- Top-Left Compact ML Telemetry Card -->
        <aside class="ai-telemetry-card" aria-label="AI Eğitim Telemetrisi">
          <div class="ai-card-header">
            <span class="ai-card-title">AI SELF-PLAY EĞİTİMİ</span>
            <span id="ai-gen" class="ai-gen-badge">GEN #1</span>
          </div>

          <div class="ai-stats-grid">
            <div class="ai-stat-cell">
              <span class="ai-stat-label">Maç</span>
              <span id="ai-match" class="ai-stat-value">1/8</span>
            </div>
            <div class="ai-stat-cell">
              <span class="ai-stat-label">En İyi Fitness</span>
              <span id="ai-best-fit" class="ai-stat-value ai-stat-value--gold">0.0</span>
            </div>
            <div class="ai-stat-cell">
              <span class="ai-stat-label">Ort. Fitness</span>
              <span id="ai-avg-fit" class="ai-stat-value ai-stat-value--cyan">0.0</span>
            </div>
            <div class="ai-stat-cell">
              <span class="ai-stat-label">Toplam Kill</span>
              <span id="ai-kills" class="ai-stat-value">0</span>
            </div>
          </div>

          <div class="ai-chart-wrap">
            <div class="ai-chart-header">
              <span class="ai-chart-label">Fitness Gelişimi</span>
              <span class="ai-chart-legend">
                <span class="ai-legend-dot ai-legend-dot--best"></span>En İyi
                <span class="ai-legend-dot ai-legend-dot--avg"></span>Ort.
              </span>
            </div>
            <canvas id="ai-chart" class="ai-chart-canvas" width="240" height="64"></canvas>
          </div>

          <div class="ai-skills-wrap">
            <div class="ai-skills-header">
              <span class="ai-skills-title">BOT A SKİLLERİ</span>
              <span class="ai-skills-hint">Bot B: Tam Açık</span>
            </div>
            <div id="ai-bota-skills" class="ai-skills-grid">
              <button type="button" class="ai-skill-btn active" data-ai-skill="shoot">1. Ateş</button>
              <button type="button" class="ai-skill-btn active" data-ai-skill="aim">2. Nişan</button>
              <button type="button" class="ai-skill-btn active" data-ai-skill="move">3. Koşma</button>
              <button type="button" class="ai-skill-btn active" data-ai-skill="jump">4. Zıplama</button>
              <button type="button" class="ai-skill-btn active" data-ai-skill="crouch">5. Çömelme</button>
            </div>
          </div>
        </aside>

        <!-- Top-Center Bot Scoreboard -->
        <div class="ai-scoreboard" aria-label="Bot Skor Tablosu">
          <div class="ai-bot-side ai-bot-alpha">
            <div class="ai-bot-meta">
              <div class="ai-bot-name-row">
                <span class="ai-bot-name">BOT ALPHA</span>
                <span id="ai-hp-a-val" class="ai-bot-hp-text">${PLAYER_CONFIG.MAX_HP} HP</span>
              </div>
              <div class="ai-bot-hp-track">
                <div id="ai-hp-a-bar" class="ai-bot-hp-fill" style="width: 100%;"></div>
              </div>
            </div>
            <span id="ai-score-a" class="ai-bot-score">0</span>
          </div>

          <span class="ai-score-vs">:</span>

          <div class="ai-bot-side ai-bot-beta">
            <span id="ai-score-b" class="ai-bot-score">0</span>
            <div class="ai-bot-meta">
              <div class="ai-bot-name-row">
                <span id="ai-hp-b-val" class="ai-bot-hp-text">${PLAYER_CONFIG.MAX_HP} HP</span>
                <span class="ai-bot-name">BOT BETA</span>
              </div>
              <div class="ai-bot-hp-track">
                <div id="ai-hp-b-bar" class="ai-bot-hp-fill" style="width: 100%;"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom-Center Interactive Control Bar -->
        <div class="ai-control-bar" role="toolbar" aria-label="AI Eğitim Kontrolleri">
          <div class="ai-ctrl-group">
            <span class="ai-ctrl-label">Hız</span>
            <div class="ai-btn-group" id="ai-speed-group">
              <button type="button" class="ai-ctrl-btn active" data-ai-speed="1">1x</button>
              <button type="button" class="ai-ctrl-btn" data-ai-speed="10">10x</button>
              <button type="button" class="ai-ctrl-btn" data-ai-speed="50">50x</button>
              <button type="button" class="ai-ctrl-btn" data-ai-speed="100">100x</button>
            </div>
          </div>

          <div class="ai-ctrl-divider"></div>

          <div class="ai-ctrl-group">
            <span class="ai-ctrl-label">Kamera</span>
            <div class="ai-btn-group" id="ai-camera-group">
              <button type="button" class="ai-ctrl-btn active" data-ai-camera="overview">Genel</button>
              <button type="button" class="ai-ctrl-btn" data-ai-camera="botA">Bot A</button>
              <button type="button" class="ai-ctrl-btn" data-ai-camera="botB">Bot B</button>
            </div>
          </div>

          <div class="ai-ctrl-divider"></div>

          <div class="ai-ctrl-actions">
            <button type="button" id="btn-ai-export" class="ai-ctrl-btn">Dışa Aktar</button>
            <button type="button" id="btn-ai-import" class="ai-ctrl-btn">İçe Aktar</button>
            <input type="file" id="ai-import-input" accept=".json,application/json" class="hidden" />
            <button type="button" id="btn-ai-reset" class="ai-ctrl-btn ai-ctrl-btn--warn">Sıfırla</button>
            <button type="button" id="btn-ai-exit" class="ai-ctrl-btn ai-ctrl-btn--danger">Lobiye Dön</button>
          </div>
        </div>
        <div id="ai-toast" class="ai-toast hidden" role="status"></div>
      </div>

      <!-- ESC Pause Menu -->
      <div id="pause-menu" class="hidden">
        <div class="pause-card">
          <h2 class="pause-title">Ayarlar</h2>

          <div class="pause-tabs" role="tablist">
            <button
              type="button"
              id="tab-btn-general"
              class="pause-tab active"
              role="tab"
              aria-selected="true"
              data-tab="general"
            >
              Genel
            </button>
            <button
              type="button"
              id="tab-btn-crosshair"
              class="pause-tab"
              role="tab"
              aria-selected="false"
              data-tab="crosshair"
            >
              Crosshair
            </button>
          </div>

          <!-- General Settings Tab -->
          <div id="tab-panel-general" class="pause-tab-panel">
            <div class="settings-list">
              <label class="setting-row" for="slider-sensitivity">
                <div class="setting-header">
                  <span>Mouse Hassasiyeti</span>
                  <span id="val-sensitivity" class="setting-value">${this._settings.sensitivity.toFixed(1)}</span>
                </div>
                <input
                  type="range"
                  id="slider-sensitivity"
                  class="setting-slider"
                  min="0.2"
                  max="3.0"
                  step="0.1"
                  value="${this._settings.sensitivity}"
                />
              </label>

              <label class="setting-row" for="slider-ads-sensitivity">
                <div class="setting-header">
                  <span>ADS Hassasiyeti</span>
                  <span id="val-ads-sensitivity" class="setting-value">${this._settings.adsSensitivity.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  id="slider-ads-sensitivity"
                  class="setting-slider"
                  min="0.2"
                  max="1.5"
                  step="0.05"
                  value="${this._settings.adsSensitivity}"
                />
              </label>

              <label class="setting-row" for="slider-fov">
                <div class="setting-header">
                  <span>Görüş Açısı (FOV)</span>
                  <span id="val-fov" class="setting-value">${this._settings.fov}°</span>
                </div>
                <input
                  type="range"
                  id="slider-fov"
                  class="setting-slider"
                  min="60"
                  max="110"
                  step="1"
                  value="${this._settings.fov}"
                />
              </label>

              <label class="setting-row" for="slider-volume">
                <div class="setting-header">
                  <span>Ses Seviyesi</span>
                  <span id="val-volume" class="setting-value">${defaultVolPct}%</span>
                </div>
                <input
                  type="range"
                  id="slider-volume"
                  class="setting-slider"
                  min="0"
                  max="100"
                  step="5"
                  value="${defaultVolPct}"
                />
              </label>

              <label class="setting-toggle-row" for="toggle-show-fps">
                <span class="setting-toggle-label">FPS Göstergesi</span>
                <span class="toggle-switch">
                  <input
                    type="checkbox"
                    id="toggle-show-fps"
                    ${this._settings.showFps ? 'checked' : ''}
                  />
                  <span class="toggle-track">
                    <span class="toggle-thumb"></span>
                  </span>
                </span>
              </label>
            </div>
          </div>

          <!-- Crosshair Customizer Tab -->
          <div id="tab-panel-crosshair" class="pause-tab-panel hidden">
            <div class="crosshair-preview-box" aria-label="Crosshair Önizleme">
              <div class="crosshair-preview-sky"></div>
              <div class="crosshair-preview-wall"></div>
              <div id="crosshair-preview" class="crosshair crosshair-preview">
                <span class="ch-line ch-top"></span>
                <span class="ch-line ch-bottom"></span>
                <span class="ch-line ch-left"></span>
                <span class="ch-line ch-right"></span>
                <span class="ch-dot"></span>
              </div>
            </div>

            <div class="ch-color-row">
              <span class="ch-color-label">Renk</span>
              <div id="ch-swatches" class="ch-swatches">
                ${swatchesHtml}
                <label class="ch-picker-wrap" title="Özel Renk">
                  <input
                    type="color"
                    id="ch-color-picker"
                    class="ch-color-picker"
                    value="${ch.color}"
                    aria-label="Özel Crosshair Rengi"
                  />
                  <span class="ch-picker-icon">+</span>
                </label>
              </div>
            </div>

            <div class="ch-sliders-grid">
              <label class="setting-row setting-row--compact" for="slider-ch-size">
                <div class="setting-header">
                  <span>Uzunluk</span>
                  <span id="val-ch-size" class="setting-value setting-value--sm">${ch.size}px</span>
                </div>
                <input
                  type="range"
                  id="slider-ch-size"
                  class="setting-slider"
                  min="2"
                  max="20"
                  step="1"
                  value="${ch.size}"
                />
              </label>

              <label class="setting-row setting-row--compact" for="slider-ch-thickness">
                <div class="setting-header">
                  <span>Kalınlık</span>
                  <span id="val-ch-thickness" class="setting-value setting-value--sm">${ch.thickness}px</span>
                </div>
                <input
                  type="range"
                  id="slider-ch-thickness"
                  class="setting-slider"
                  min="1"
                  max="6"
                  step="0.5"
                  value="${ch.thickness}"
                />
              </label>

              <label class="setting-row setting-row--compact" for="slider-ch-gap">
                <div class="setting-header">
                  <span>Boşluk</span>
                  <span id="val-ch-gap" class="setting-value setting-value--sm">${ch.gap}px</span>
                </div>
                <input
                  type="range"
                  id="slider-ch-gap"
                  class="setting-slider"
                  min="-4"
                  max="14"
                  step="1"
                  value="${ch.gap}"
                />
              </label>

              <label class="setting-row setting-row--compact" for="slider-ch-alpha">
                <div class="setting-header">
                  <span>Opaklık</span>
                  <span id="val-ch-alpha" class="setting-value setting-value--sm">${chAlphaPct}%</span>
                </div>
                <input
                  type="range"
                  id="slider-ch-alpha"
                  class="setting-slider"
                  min="20"
                  max="100"
                  step="5"
                  value="${chAlphaPct}"
                />
              </label>
            </div>

            <div class="ch-toggles-grid">
              <label class="setting-toggle-row setting-toggle-row--compact" for="toggle-ch-outline">
                <span class="setting-toggle-label">Dış Çizgi</span>
                <span class="toggle-switch toggle-switch--sm">
                  <input
                    type="checkbox"
                    id="toggle-ch-outline"
                    ${ch.outline ? 'checked' : ''}
                  />
                  <span class="toggle-track">
                    <span class="toggle-thumb"></span>
                  </span>
                </span>
              </label>

              <label class="setting-toggle-row setting-toggle-row--compact" for="toggle-ch-dot">
                <span class="setting-toggle-label">Orta Nokta</span>
                <span class="toggle-switch toggle-switch--sm">
                  <input
                    type="checkbox"
                    id="toggle-ch-dot"
                    ${ch.dot ? 'checked' : ''}
                  />
                  <span class="toggle-track">
                    <span class="toggle-thumb"></span>
                  </span>
                </span>
              </label>

              <label class="setting-toggle-row setting-toggle-row--compact" for="toggle-ch-dynamic">
                <span class="setting-toggle-label">Dinamik</span>
                <span class="toggle-switch toggle-switch--sm">
                  <input
                    type="checkbox"
                    id="toggle-ch-dynamic"
                    ${ch.dynamic ? 'checked' : ''}
                  />
                  <span class="toggle-track">
                    <span class="toggle-thumb"></span>
                  </span>
                </span>
              </label>
            </div>

            <div class="ch-reset-row">
              <button type="button" id="btn-ch-reset" class="btn btn-reset">
                Varsayılana Sıfırla
              </button>
            </div>
          </div>

          <div class="pause-actions">
            <button type="button" id="btn-resume" class="btn btn-primary">
              Oyuna Dön
            </button>
            <button type="button" id="btn-leave-room" class="btn btn-danger">
              Odadan Ayrıl
            </button>
          </div>
        </div>
      </div>
    `;
  }

  _bindElements() {
    const q = (id) => document.getElementById(id);

    this.els = {
      lobbyOverlay: q('lobby-overlay'),
      btnCreateRoom: q('btn-create-room'),
      roomCodeBox: q('room-code-box'),
      roomCodeValue: q('room-code-value'),
      btnCopyCode: q('btn-copy-code'),
      joinCodeInput: q('join-code-input'),
      btnJoinRoom: q('btn-join-room'),
      btnAiMode: q('btn-ai-mode'),
      lobbyStatus: q('lobby-status'),

      hud: q('hud'),
      sniperScope: q('sniper-scope'),
      damageVignette: q('damage-vignette'),
      crosshair: q('crosshair'),
      hitmarker: q('hitmarker'),
      scorePopupFeed: q('score-popup-feed'),
      scoreMe: q('score-me'),
      scoreEnemy: q('score-enemy'),
      fpsCounter: q('fps-counter'),
      hpPanel: q('hp-panel'),
      hpValue: q('hp-value'),
      hpBarFill: q('hp-bar-fill'),

      speedometer: q('speedometer'),
      speedValue: q('speed-value'),

      weaponPanel: q('weapon-panel'),
      slotAr: q('slot-ar'),
      slotSniper: q('slot-sniper'),
      slotKnife: q('slot-knife'),
      weaponName: q('weapon-name'),
      ammoCurrent: q('ammo-current'),
      ammoSep: q('ammo-sep'),
      ammoMag: q('ammo-mag'),
      reloadContainer: q('reload-container'),
      reloadBarFill: q('reload-bar-fill'),

      respawnOverlay: q('respawn-overlay'),
      respawnText: q('respawn-text'),

      pauseMenu: q('pause-menu'),
      tabBtnGeneral: q('tab-btn-general'),
      tabBtnCrosshair: q('tab-btn-crosshair'),
      tabPanelGeneral: q('tab-panel-general'),
      tabPanelCrosshair: q('tab-panel-crosshair'),

      sliderSensitivity: q('slider-sensitivity'),
      valSensitivity: q('val-sensitivity'),
      sliderAdsSensitivity: q('slider-ads-sensitivity'),
      valAdsSensitivity: q('val-ads-sensitivity'),
      sliderFov: q('slider-fov'),
      valFov: q('val-fov'),
      sliderVolume: q('slider-volume'),
      valVolume: q('val-volume'),
      toggleShowFps: q('toggle-show-fps'),

      crosshairPreview: q('crosshair-preview'),
      chSwatches: q('ch-swatches'),
      chSwatchButtons: Array.from(document.querySelectorAll('#ch-swatches .ch-swatch')),
      chColorPicker: q('ch-color-picker'),
      sliderChSize: q('slider-ch-size'),
      valChSize: q('val-ch-size'),
      sliderChThickness: q('slider-ch-thickness'),
      valChThickness: q('val-ch-thickness'),
      sliderChGap: q('slider-ch-gap'),
      valChGap: q('val-ch-gap'),
      sliderChAlpha: q('slider-ch-alpha'),
      valChAlpha: q('val-ch-alpha'),
      toggleChOutline: q('toggle-ch-outline'),
      toggleChDot: q('toggle-ch-dot'),
      toggleChDynamic: q('toggle-ch-dynamic'),
      btnChReset: q('btn-ch-reset'),

      btnResume: q('btn-resume'),
      btnLeaveRoom: q('btn-leave-room'),

      aiHud: q('ai-hud'),
      aiGen: q('ai-gen'),
      aiMatch: q('ai-match'),
      aiBestFit: q('ai-best-fit'),
      aiAvgFit: q('ai-avg-fit'),
      aiKills: q('ai-kills'),
      aiChart: q('ai-chart'),
      aiScoreA: q('ai-score-a'),
      aiScoreB: q('ai-score-b'),
      aiHpAVal: q('ai-hp-a-val'),
      aiHpBVal: q('ai-hp-b-val'),
      aiHpABar: q('ai-hp-a-bar'),
      aiHpBBar: q('ai-hp-b-bar'),
      aiSpeedButtons: Array.from(document.querySelectorAll('#ai-speed-group [data-ai-speed]')),
      aiCameraButtons: Array.from(document.querySelectorAll('#ai-camera-group [data-ai-camera]')),
      aiSkillButtons: Array.from(document.querySelectorAll('#ai-bota-skills [data-ai-skill]')),
      btnAiExport: q('btn-ai-export'),
      btnAiImport: q('btn-ai-import'),
      aiImportInput: q('ai-import-input'),
      aiToast: q('ai-toast'),
      btnAiReset: q('btn-ai-reset'),
      btnAiExit: q('btn-ai-exit'),
    };
  }

  _bindEvents() {
    this.els.btnCreateRoom.addEventListener('click', () => {
      if (this._callbacks.createRoom) {
        this._callbacks.createRoom();
      }
    });

    this.els.btnCopyCode.addEventListener('click', () => {
      if (!this._currentRoomCode) return;
      this._copyToClipboard(this._currentRoomCode);
    });

    this.els.joinCodeInput.addEventListener('input', () => {
      const cleaned = this.els.joinCodeInput.value
        .toUpperCase()
        .replace(/[^A-Z0-9]/g, '')
        .slice(0, NETWORK_CONFIG.ROOM_CODE_LENGTH);
      this.els.joinCodeInput.value = cleaned;
    });

    const submitJoin = () => {
      const code = this.els.joinCodeInput.value.trim().toUpperCase();
      if (this._callbacks.joinRoom) {
        this._callbacks.joinRoom(code);
      }
    };

    this.els.btnJoinRoom.addEventListener('click', submitJoin);
    this.els.joinCodeInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        submitJoin();
      }
    });

    this.els.btnResume.addEventListener('click', () => {
      if (this._callbacks.resume) {
        this._callbacks.resume();
      }
    });

    this.els.btnLeaveRoom.addEventListener('click', () => {
      if (this._callbacks.leaveRoom) {
        this._callbacks.leaveRoom();
      }
    });

    // Pause menu tabs
    this.els.tabBtnGeneral.addEventListener('click', () => {
      this._setActivePauseTab('general');
    });
    this.els.tabBtnCrosshair.addEventListener('click', () => {
      this._setActivePauseTab('crosshair');
    });

    const emitSettingsChange = () => {
      this._saveSettings();
      if (this._callbacks.settingsChange) {
        this._callbacks.settingsChange(this.getSettings());
      }
    };

    // General settings
    const handleGeneralInput = () => {
      const sensitivity = parseFloat(this.els.sliderSensitivity.value);
      const adsSensitivity = parseFloat(this.els.sliderAdsSensitivity.value);
      const fov = parseInt(this.els.sliderFov.value, 10);
      const volumePct = parseInt(this.els.sliderVolume.value, 10);

      this._settings.sensitivity = sensitivity;
      this._settings.adsSensitivity = adsSensitivity;
      this._settings.fov = fov;
      this._settings.volume = Math.max(0, Math.min(1, volumePct / 100));

      this.els.valSensitivity.textContent = sensitivity.toFixed(1);
      this.els.valAdsSensitivity.textContent = adsSensitivity.toFixed(2);
      this.els.valFov.textContent = `${fov}°`;
      this.els.valVolume.textContent = `${volumePct}%`;

      emitSettingsChange();
    };

    this.els.sliderSensitivity.addEventListener('input', handleGeneralInput);
    this.els.sliderAdsSensitivity.addEventListener('input', handleGeneralInput);
    this.els.sliderFov.addEventListener('input', handleGeneralInput);
    this.els.sliderVolume.addEventListener('input', handleGeneralInput);

    this.els.toggleShowFps.addEventListener('change', () => {
      this._settings.showFps = Boolean(this.els.toggleShowFps.checked);
      this._syncFpsVisibility();
      emitSettingsChange();
    });

    // Crosshair color swatches
    for (const btn of this.els.chSwatchButtons) {
      btn.addEventListener('click', () => {
        const hex = sanitizeHexColor(btn.dataset.color, DEFAULT_CROSSHAIR.color);
        this._settings.crosshair.color = hex;
        this.els.chColorPicker.value = hex;
        this._updateActiveSwatch(hex);
        this._applyCrosshairStyles();
        emitSettingsChange();
      });
    }

    // Custom color picker
    this.els.chColorPicker.addEventListener('input', () => {
      const hex = sanitizeHexColor(
        this.els.chColorPicker.value,
        DEFAULT_CROSSHAIR.color
      );
      this._settings.crosshair.color = hex;
      this._updateActiveSwatch(hex);
      this._applyCrosshairStyles();
      emitSettingsChange();
    });

    // Crosshair sliders & toggles
    const handleCrosshairInput = () => {
      const size = parseInt(this.els.sliderChSize.value, 10);
      const thickness = parseFloat(this.els.sliderChThickness.value);
      const gap = parseInt(this.els.sliderChGap.value, 10);
      const alphaPct = parseInt(this.els.sliderChAlpha.value, 10);

      this._settings.crosshair.size = Math.round(clampNum(size, 2, 20, DEFAULT_CROSSHAIR.size));
      this._settings.crosshair.thickness =
        Math.round(clampNum(thickness, 1, 6, DEFAULT_CROSSHAIR.thickness) * 2) / 2;
      this._settings.crosshair.gap = Math.round(clampNum(gap, -4, 14, DEFAULT_CROSSHAIR.gap));
      this._settings.crosshair.alpha = clampNum(alphaPct / 100, 0.2, 1.0, DEFAULT_CROSSHAIR.alpha);
      this._settings.crosshair.outline = Boolean(this.els.toggleChOutline.checked);
      this._settings.crosshair.dot = Boolean(this.els.toggleChDot.checked);
      this._settings.crosshair.dynamic = Boolean(this.els.toggleChDynamic.checked);

      this.els.valChSize.textContent = `${this._settings.crosshair.size}px`;
      this.els.valChThickness.textContent = `${this._settings.crosshair.thickness}px`;
      this.els.valChGap.textContent = `${this._settings.crosshair.gap}px`;
      this.els.valChAlpha.textContent = `${Math.round(this._settings.crosshair.alpha * 100)}%`;

      this._applyCrosshairStyles();
      emitSettingsChange();
    };

    this.els.sliderChSize.addEventListener('input', handleCrosshairInput);
    this.els.sliderChThickness.addEventListener('input', handleCrosshairInput);
    this.els.sliderChGap.addEventListener('input', handleCrosshairInput);
    this.els.sliderChAlpha.addEventListener('input', handleCrosshairInput);
    this.els.toggleChOutline.addEventListener('change', handleCrosshairInput);
    this.els.toggleChDot.addEventListener('change', handleCrosshairInput);
    this.els.toggleChDynamic.addEventListener('change', handleCrosshairInput);

    // Crosshair reset button
    this.els.btnChReset.addEventListener('click', () => {
      this._settings.crosshair = sanitizeCrosshair(DEFAULT_CROSSHAIR);
      this._syncCrosshairControls();
      this._applyCrosshairStyles();
      emitSettingsChange();
    });

    // AI vs AI Training Mode controls
    this.els.btnAiMode.addEventListener('click', () => {
      if (this._callbacks.startAI) {
        this._callbacks.startAI();
      }
    });

    for (const btn of this.els.aiSpeedButtons) {
      btn.addEventListener('click', () => {
        const speed = Number(btn.dataset.aiSpeed) || 1;
        this._aiSpeed = speed;
        for (const b of this.els.aiSpeedButtons) {
          b.classList.toggle('active', b === btn);
        }
        if (this._callbacks.aiSpeedChange) {
          this._callbacks.aiSpeedChange(speed);
        }
      });
    }

    for (const btn of this.els.aiCameraButtons) {
      btn.addEventListener('click', () => {
        const mode = btn.dataset.aiCamera || 'overview';
        this._aiCamera = mode;
        for (const b of this.els.aiCameraButtons) {
          b.classList.toggle('active', b === btn);
        }
        if (this._callbacks.aiCameraChange) {
          this._callbacks.aiCameraChange(mode);
        }
      });
    }

    this._botASkills = {
      shoot: true,
      aim: true,
      move: true,
      jump: true,
      crouch: true,
    };

    for (const btn of this.els.aiSkillButtons) {
      btn.addEventListener('click', () => {
        const key = btn.dataset.aiSkill;
        if (!key || !(key in this._botASkills)) return;
        this._botASkills[key] = !this._botASkills[key];
        btn.classList.toggle('active', this._botASkills[key]);
        if (this._callbacks.botASkillsChange) {
          this._callbacks.botASkillsChange({ ...this._botASkills });
        }
      });
    }

    this.els.btnAiExport.addEventListener('click', () => {
      if (!this._callbacks.aiExport) return;
      try {
        const model = this._callbacks.aiExport();
        if (!model) return;
        const json = JSON.stringify(model, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `fps-ai-gen${model.generation || 1}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        this._showAIToast(`Model indirildi (Gen #${model.generation || 1})`, false);
      } catch (err) {
        this._showAIToast(err?.message || 'Dışa aktarma başarısız.', true);
      }
    });

    this.els.btnAiImport.addEventListener('click', () => {
      this.els.aiImportInput.value = '';
      this.els.aiImportInput.click();
    });

    this.els.aiImportInput.addEventListener('change', (e) => {
      const file = e.target.files?.[0];
      if (!file || !this._callbacks.aiImport) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const parsed = JSON.parse(String(reader.result || ''));
          this._lastAIHistoryLen = -1;
          this._lastAIStatsKey = '';
          const info = this._callbacks.aiImport(parsed);
          const gen = info?.generation || parsed?.generation || 1;
          this._showAIToast(`Model yüklendi (Gen #${gen})`, false);
        } catch (err) {
          this._showAIToast(err?.message || 'Geçersiz model dosyası.', true);
        }
      };
      reader.readAsText(file);
    });

    this.els.btnAiReset.addEventListener('click', () => {
      this._lastAIHistoryLen = -1;
      this._lastAIStatsKey = '';
      this._drawAISparkline([]);
      if (this._callbacks.aiReset) {
        this._callbacks.aiReset();
      }
    });

    this.els.btnAiExit.addEventListener('click', () => {
      if (this._callbacks.exitAI) {
        this._callbacks.exitAI();
      }
    });
  }

  _setActivePauseTab(tabName) {
    const isCrosshair = tabName === 'crosshair';
    this._activePauseTab = isCrosshair ? 'crosshair' : 'general';

    this.els.tabBtnGeneral.classList.toggle('active', !isCrosshair);
    this.els.tabBtnGeneral.setAttribute('aria-selected', String(!isCrosshair));
    this.els.tabBtnCrosshair.classList.toggle('active', isCrosshair);
    this.els.tabBtnCrosshair.setAttribute('aria-selected', String(isCrosshair));

    this.els.tabPanelGeneral.classList.toggle('hidden', isCrosshair);
    this.els.tabPanelCrosshair.classList.toggle('hidden', !isCrosshair);
  }

  _syncFpsVisibility() {
    const show = Boolean(this._settings.showFps);
    this.els.fpsCounter.classList.toggle('hidden', !show);
  }

  _updateActiveSwatch(hex) {
    for (const btn of this.els.chSwatchButtons) {
      btn.classList.toggle('active', btn.dataset.color === hex);
    }
  }

  _syncCrosshairControls() {
    const ch = this._settings.crosshair;
    const alphaPct = Math.round(ch.alpha * 100);

    this.els.chColorPicker.value = ch.color;
    this._updateActiveSwatch(ch.color);

    this.els.sliderChSize.value = String(ch.size);
    this.els.valChSize.textContent = `${ch.size}px`;

    this.els.sliderChThickness.value = String(ch.thickness);
    this.els.valChThickness.textContent = `${ch.thickness}px`;

    this.els.sliderChGap.value = String(ch.gap);
    this.els.valChGap.textContent = `${ch.gap}px`;

    this.els.sliderChAlpha.value = String(alphaPct);
    this.els.valChAlpha.textContent = `${alphaPct}%`;

    this.els.toggleChOutline.checked = ch.outline;
    this.els.toggleChDot.checked = ch.dot;
    this.els.toggleChDynamic.checked = ch.dynamic;
  }

  _applyCrosshairStyles() {
    const ch = this._settings.crosshair;
    const targets = [this.els.crosshair, this.els.crosshairPreview];

    for (const el of targets) {
      if (!el) continue;
      el.style.setProperty('--ch-color', ch.color);
      el.style.setProperty('--ch-length', `${ch.size}px`);
      el.style.setProperty('--ch-thickness', `${ch.thickness}px`);
      el.style.setProperty('--ch-base-gap', `${ch.gap}px`);
      el.style.setProperty('--ch-alpha', String(ch.alpha));
      el.classList.toggle('has-outline', ch.outline);
      el.classList.toggle('has-dot', ch.dot);
    }

    // If dynamic spread is disabled, immediately zero out any active movement spread/pulse
    if (!ch.dynamic && this.els.crosshair) {
      this._lastCrosshairSpread = '0px';
      this.els.crosshair.style.setProperty('--ch-spread', '0px');
      this.els.crosshair.classList.remove('pulsing');
    }
  }

  _copyToClipboard(text) {
    const showCopiedFeedback = () => {
      this.els.btnCopyCode.textContent = 'Kopyalandı!';
      this.els.btnCopyCode.classList.add('copied');
      if (this._copyFeedbackTimer) {
        clearTimeout(this._copyFeedbackTimer);
      }
      this._copyFeedbackTimer = setTimeout(() => {
        this.els.btnCopyCode.textContent = 'Kopyala';
        this.els.btnCopyCode.classList.remove('copied');
        this._copyFeedbackTimer = null;
      }, 1500);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(showCopiedFeedback).catch(() => {
        this._fallbackCopy(text);
        showCopiedFeedback();
      });
    } else {
      this._fallbackCopy(text);
      showCopiedFeedback();
    }
  }

  _fallbackCopy(text) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
    } catch {
      // Ignore copy failure
    }
    document.body.removeChild(ta);
  }

  // ---------------------------------------------------------------------------
  // Callback Registrations
  // ---------------------------------------------------------------------------

  onCreateRoom(cb) {
    this._callbacks.createRoom = cb;
  }

  onJoinRoom(cb) {
    this._callbacks.joinRoom = cb;
  }

  onResume(cb) {
    this._callbacks.resume = cb;
  }

  onLeaveRoom(cb) {
    this._callbacks.leaveRoom = cb;
  }

  onSettingsChange(cb) {
    this._callbacks.settingsChange = cb;
  }

  onStartAI(cb) {
    this._callbacks.startAI = cb;
  }

  onExitAI(cb) {
    this._callbacks.exitAI = cb;
  }

  onAISpeedChange(cb) {
    this._callbacks.aiSpeedChange = cb;
  }

  onAICameraChange(cb) {
    this._callbacks.aiCameraChange = cb;
  }

  onAIReset(cb) {
    this._callbacks.aiReset = cb;
  }

  onAIExport(cb) {
    this._callbacks.aiExport = cb;
  }

  onAIImport(cb) {
    this._callbacks.aiImport = cb;
  }

  onBotASkillsChange(cb) {
    this._callbacks.botASkillsChange = cb;
  }

  setBotASkillsUI(skills) {
    if (!skills || typeof skills !== 'object') return;
    for (const btn of this.els.aiSkillButtons) {
      const key = btn.dataset.aiSkill;
      if (key && typeof skills[key] === 'boolean') {
        this._botASkills[key] = skills[key];
        btn.classList.toggle('active', skills[key]);
      }
    }
  }

  _showAIToast(message, isError = false) {
    if (!this.els.aiToast) return;
    this.els.aiToast.textContent = message;
    this.els.aiToast.classList.toggle('error', Boolean(isError));
    this.els.aiToast.classList.remove('hidden');
    if (this._aiToastTimer) {
      clearTimeout(this._aiToastTimer);
    }
    this._aiToastTimer = setTimeout(() => {
      this.els.aiToast.classList.add('hidden');
      this._aiToastTimer = null;
    }, 2800);
  }

  // ---------------------------------------------------------------------------
  // Screen & Overlay Controls
  // ---------------------------------------------------------------------------

  showLobby() {
    this.els.lobbyOverlay.classList.remove('hidden');
    this.els.hud.classList.add('hidden');
    this.els.pauseMenu.classList.add('hidden');
    this.els.aiHud.classList.add('hidden');
    this.setScopeVisible(false);
    this.showRespawnCountdown(0);
    this.els.scorePopupFeed.innerHTML = '';
  }

  showGame() {
    this.els.lobbyOverlay.classList.add('hidden');
    this.els.hud.classList.remove('hidden');
    this.els.pauseMenu.classList.add('hidden');
    this.els.aiHud.classList.add('hidden');
  }

  showAIMode() {
    this.els.lobbyOverlay.classList.add('hidden');
    this.els.hud.classList.add('hidden');
    this.els.pauseMenu.classList.add('hidden');
    this.els.aiHud.classList.remove('hidden');
    this.setScopeVisible(false);
    this.showRespawnCountdown(0);
    this._lastAIHistoryLen = -1;
    this._lastAIStatsKey = '';
    this._drawAISparkline([]);
  }

  showPauseMenu(visible) {
    this.els.pauseMenu.classList.toggle('hidden', !visible);
  }

  setRoomCode(code) {
    if (!code) {
      this._currentRoomCode = '';
      this.els.roomCodeValue.textContent = '------';
      this.els.roomCodeBox.classList.add('hidden');
      return;
    }

    this._currentRoomCode = String(code).trim().toUpperCase();
    this.els.roomCodeValue.textContent = this._currentRoomCode;
    this.els.roomCodeBox.classList.remove('hidden');
  }

  setLobbyStatus(msg, isError = false) {
    if (!msg) {
      this.els.lobbyStatus.textContent = '';
      this.els.lobbyStatus.classList.add('hidden');
      this.els.lobbyStatus.classList.remove('error');
      return;
    }

    this.els.lobbyStatus.textContent = msg;
    this.els.lobbyStatus.classList.remove('hidden');
    this.els.lobbyStatus.classList.toggle('error', Boolean(isError));
  }

  // ---------------------------------------------------------------------------
  // HUD Updates
  // ---------------------------------------------------------------------------

  updateHP(hp) {
    const maxHp = PLAYER_CONFIG.MAX_HP;
    const clamped = Math.max(0, Math.min(maxHp, Math.round(hp)));
    const pct = (clamped / maxHp) * 100;

    this.els.hpValue.textContent = String(clamped);
    this.els.hpBarFill.style.width = `${pct}%`;

    this.els.hpPanel.classList.remove('hp-mid', 'hp-low');
    if (clamped <= 25) {
      this.els.hpPanel.classList.add('hp-low');
    } else if (clamped <= 50) {
      this.els.hpPanel.classList.add('hp-mid');
    }
  }

  updateScore(myScore, enemyScore) {
    this.els.scoreMe.textContent = String(myScore ?? 0);
    this.els.scoreEnemy.textContent = String(enemyScore ?? 0);
  }

  updateSpeedometer(speedUnits, isBhopSpeed = false) {
    const rounded = Math.max(0, Math.round(Number(speedUnits) || 0));
    const bhopActive = Boolean(isBhopSpeed);

    if (rounded !== this._lastSpeedInt) {
      this._lastSpeedInt = rounded;
      this.els.speedValue.textContent = String(rounded);
    }

    if (bhopActive !== this._lastBhopState) {
      this._lastBhopState = bhopActive;
      this.els.speedometer.classList.toggle('bhop-active', bhopActive);
    }
  }

  updateFPS(fps) {
    if (!this._settings.showFps) return;
    const rounded = Math.max(0, Math.round(Number(fps) || 0));
    if (rounded === this._lastFpsInt) return;

    this._lastFpsInt = rounded;
    const el = this.els.fpsCounter;
    el.textContent = `${rounded} FPS`;

    const tier = rounded >= 55 ? 'good' : rounded >= 30 ? 'mid' : 'low';
    if (tier !== this._lastFpsTier) {
      this._lastFpsTier = tier;
      el.classList.remove('fps-good', 'fps-mid', 'fps-low');
      el.classList.add(`fps-${tier}`);
    }
  }

  updateWeaponHUD({
    weaponId = WEAPON_IDS.AR,
    weaponName,
    ammo = 0,
    magSize = 30,
    isReloading = false,
    reloadProgress = 0,
  } = {}) {
    const fallbackDef = WEAPONS[weaponId] || WEAPONS[WEAPON_IDS.AR];
    const resolvedName = weaponName || fallbackDef.name;
    const isMelee = Boolean(fallbackDef.isMelee || magSize === 0);
    const safeMag = isMelee ? 0 : Math.max(1, Math.round(Number(magSize) || fallbackDef.magSize));
    const safeAmmo = isMelee ? 0 : Math.max(0, Math.min(safeMag, Math.round(Number(ammo) || 0)));
    const reloading = !isMelee && Boolean(isReloading);
    const progressPct = Math.max(0, Math.min(1, Number(reloadProgress) || 0)) * 100;

    const key = `${weaponId}|${resolvedName}|${safeAmmo}|${safeMag}|${reloading}|${progressPct.toFixed(1)}`;
    if (key === this._lastWeaponKey) {
      return;
    }
    this._lastWeaponKey = key;

    this.els.weaponName.textContent = resolvedName;
    if (isMelee) {
      this.els.ammoCurrent.textContent = '∞';
      this.els.ammoSep.classList.add('hidden');
      this.els.ammoMag.classList.add('hidden');
    } else {
      this.els.ammoCurrent.textContent = String(safeAmmo);
      this.els.ammoSep.classList.remove('hidden');
      this.els.ammoMag.classList.remove('hidden');
      this.els.ammoMag.textContent = String(safeMag);
    }

    this.els.slotAr.classList.toggle('active', weaponId === WEAPON_IDS.AR);
    this.els.slotSniper.classList.toggle('active', weaponId === WEAPON_IDS.SNIPER);
    this.els.slotKnife.classList.toggle('active', weaponId === WEAPON_IDS.KNIFE);

    const isLowAmmo = !isMelee && (safeAmmo === 0 || safeAmmo / safeMag <= 0.25);
    this.els.weaponPanel.classList.toggle('ammo-low', isLowAmmo && !reloading);
    this.els.weaponPanel.classList.toggle('reloading', reloading);

    this.els.reloadContainer.classList.toggle('hidden', !reloading);
    if (reloading) {
      this.els.reloadBarFill.style.width = `${progressPct.toFixed(1)}%`;
    } else {
      this.els.reloadBarFill.style.width = '0%';
    }
  }

  setScopeVisible(visible) {
    const show = Boolean(visible);
    if (show === this._scopeVisible) return;
    this._scopeVisible = show;

    this.els.sniperScope.classList.toggle('hidden', !show);
    this.els.crosshair.classList.toggle('scope-hidden', show);
  }

  setCrosshairSpread(spreadNormalized) {
    if (!this._settings.crosshair.dynamic) {
      if (this._lastCrosshairSpread !== '0px') {
        this._lastCrosshairSpread = '0px';
        this.els.crosshair.style.setProperty('--ch-spread', '0px');
      }
      return;
    }

    const clamped = Math.max(0, Math.min(1, Number(spreadNormalized) || 0));
    const spreadPx = `${(clamped * 18).toFixed(1)}px`;
    if (spreadPx === this._lastCrosshairSpread) return;

    this._lastCrosshairSpread = spreadPx;
    this.els.crosshair.style.setProperty('--ch-spread', spreadPx);
  }

  pushScorePopup(label, variant = 'kill') {
    if (!label) return;

    const feed = this.els.scorePopupFeed;
    const item = document.createElement('div');
    const safeVariant =
      variant === 'headshot' || variant === 'midair' || variant === 'kill'
        ? variant
        : 'kill';

    item.className = `score-popup score-popup--${safeVariant}`;
    item.textContent = String(label);

    feed.appendChild(item);

    // Keep stack tidy during rapid multi-bonuses
    while (feed.children.length > 6) {
      feed.removeChild(feed.firstElementChild);
    }

    let removed = false;
    const cleanup = () => {
      if (removed) return;
      removed = true;
      if (item.parentNode === feed) {
        feed.removeChild(item);
      }
    };

    item.addEventListener('animationend', cleanup, { once: true });
    setTimeout(cleanup, 1250);
  }

  showHitmarker(isHeadshot = false) {
    const el = this.els.hitmarker;
    el.classList.remove('active', 'headshot');
    // Force reflow so rapid consecutive hits restart the fade animation cleanly
    void el.offsetWidth;
    if (isHeadshot) {
      el.classList.add('headshot');
    }
    el.classList.add('active');

    if (this._hitmarkerTimer) {
      clearTimeout(this._hitmarkerTimer);
    }
    this._hitmarkerTimer = setTimeout(() => {
      el.classList.remove('active', 'headshot');
      this._hitmarkerTimer = null;
    }, 170);
  }

  flashDamage() {
    const el = this.els.damageVignette;
    el.classList.remove('flash');
    void el.offsetWidth;
    el.classList.add('flash');

    if (this._damageTimer) {
      clearTimeout(this._damageTimer);
    }
    this._damageTimer = setTimeout(() => {
      el.classList.remove('flash');
      this._damageTimer = null;
    }, 400);
  }

  pulseCrosshair() {
    if (!this._settings.crosshair.dynamic) return;
    const el = this.els.crosshair;
    el.classList.add('pulsing');
    if (this._crosshairTimer) {
      clearTimeout(this._crosshairTimer);
    }
    this._crosshairTimer = setTimeout(() => {
      el.classList.remove('pulsing');
      this._crosshairTimer = null;
    }, 95);
  }

  showRespawnCountdown(seconds) {
    if (seconds == null || seconds <= 0) {
      this.els.respawnOverlay.classList.add('hidden');
      this.els.respawnText.textContent = '';
      return;
    }

    const formatted = Number(seconds).toFixed(1);
    this.els.respawnText.textContent = `ELİMİNE EDİLDİN — ${formatted}s içinde doğuluyor...`;
    this.els.respawnOverlay.classList.remove('hidden');
  }

  updateAIStats(stats = {}) {
    if (!stats || typeof stats !== 'object') return;

    const maxHp = PLAYER_CONFIG.MAX_HP;
    const generation = Math.max(1, Math.round(Number(stats.generation) || 1));
    const matchNum =
      stats.match != null
        ? Math.max(1, Math.round(Number(stats.match) || 1))
        : stats.matchIndex != null
          ? Math.max(1, Math.round(Number(stats.matchIndex) || 0) + 1)
          : 1;
    const totalMatches = Math.max(
      1,
      Math.round(Number(stats.totalMatches ?? stats.matchesPerGen) || 8)
    );
    const bestFitNum = Number(stats.bestFitness ?? stats.bestFit);
    const avgFitNum = Number(stats.avgFitness ?? stats.avgFit);
    const bestFitStr = Number.isFinite(bestFitNum) ? bestFitNum.toFixed(1) : '0.0';
    const avgFitStr = Number.isFinite(avgFitNum) ? avgFitNum.toFixed(1) : '0.0';
    const kills = Math.max(0, Math.round(Number(stats.totalKills ?? stats.kills) || 0));

    const scoreA = Math.max(
      0,
      Math.round(Number(stats.botAScore ?? stats.scoreA ?? stats.botA?.score) || 0)
    );
    const scoreB = Math.max(
      0,
      Math.round(Number(stats.botBScore ?? stats.scoreB ?? stats.botB?.score) || 0)
    );
    const hpA = Math.max(
      0,
      Math.min(
        maxHp,
        Math.round(Number(stats.botAHP ?? stats.hpA ?? stats.botA?.hp ?? maxHp) || 0)
      )
    );
    const hpB = Math.max(
      0,
      Math.min(
        maxHp,
        Math.round(Number(stats.botBHP ?? stats.hpB ?? stats.botB?.hp ?? maxHp) || 0)
      )
    );

    const key = `${generation}|${matchNum}/${totalMatches}|${bestFitStr}|${avgFitStr}|${kills}|${scoreA}:${scoreB}|${hpA}|${hpB}`;
    if (key !== this._lastAIStatsKey) {
      this._lastAIStatsKey = key;

      this.els.aiGen.textContent = `GEN #${generation}`;
      this.els.aiMatch.textContent = `${matchNum}/${totalMatches}`;
      this.els.aiBestFit.textContent = bestFitStr;
      this.els.aiAvgFit.textContent = avgFitStr;
      this.els.aiKills.textContent = String(kills);

      this.els.aiScoreA.textContent = String(scoreA);
      this.els.aiScoreB.textContent = String(scoreB);
      this.els.aiHpAVal.textContent = `${hpA} HP`;
      this.els.aiHpBVal.textContent = `${hpB} HP`;

      const pctA = (hpA / maxHp) * 100;
      const pctB = (hpB / maxHp) * 100;
      this.els.aiHpABar.style.width = `${pctA}%`;
      this.els.aiHpBBar.style.width = `${pctB}%`;
      this.els.aiHpABar.classList.toggle('hp-low', hpA <= 30);
      this.els.aiHpBBar.classList.toggle('hp-low', hpB <= 30);
    }

    const history = Array.isArray(stats.history) ? stats.history : [];
    if (history.length !== this._lastAIHistoryLen) {
      this._lastAIHistoryLen = history.length;
      this._drawAISparkline(history);
    }
  }

  _drawAISparkline(history) {
    const canvas = this.els.aiChart;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    // Subtle background horizontal grid
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.14)';
    ctx.lineWidth = 1;
    for (let i = 1; i <= 3; i++) {
      const y = Math.round((h * i) / 4) + 0.5;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    if (!history || history.length === 0) {
      ctx.fillStyle = 'rgba(148, 163, 184, 0.58)';
      ctx.font = '600 10px ui-monospace, SFMono-Regular, Menlo, monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('İlk jenerasyon bekleniyor...', w / 2, h / 2);
      return;
    }

    const bestVals = [];
    const avgVals = [];
    let hasAvg = false;

    for (const item of history) {
      if (typeof item === 'number' && Number.isFinite(item)) {
        bestVals.push(item);
        avgVals.push(null);
      } else if (item && typeof item === 'object') {
        const b = Number(item.best ?? item.bestFitness ?? item.max ?? 0);
        bestVals.push(Number.isFinite(b) ? b : 0);
        const aRaw = item.avg ?? item.avgFitness;
        if (aRaw != null && Number.isFinite(Number(aRaw))) {
          avgVals.push(Number(aRaw));
          hasAvg = true;
        } else {
          avgVals.push(null);
        }
      }
    }

    if (bestVals.length === 0) return;

    let minVal = Infinity;
    let maxVal = -Infinity;
    for (let i = 0; i < bestVals.length; i++) {
      if (bestVals[i] < minVal) minVal = bestVals[i];
      if (bestVals[i] > maxVal) maxVal = bestVals[i];
      if (avgVals[i] != null) {
        if (avgVals[i] < minVal) minVal = avgVals[i];
        if (avgVals[i] > maxVal) maxVal = avgVals[i];
      }
    }

    if (maxVal === minVal) {
      minVal -= 1;
      maxVal += 1;
    }

    const padX = 6;
    const padTop = 8;
    const padBottom = 8;
    const plotW = w - padX * 2;
    const plotH = h - padTop - padBottom;
    const range = maxVal - minVal;

    const getX = (idx) =>
      bestVals.length === 1
        ? w / 2
        : padX + (idx / (bestVals.length - 1)) * plotW;
    const getY = (val) => padTop + (1 - (val - minVal) / range) * plotH;

    // Optional average fitness dashed line
    if (hasAvg && bestVals.length >= 2) {
      ctx.save();
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.55)';
      ctx.lineWidth = 1.4;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      let started = false;
      for (let i = 0; i < avgVals.length; i++) {
        if (avgVals[i] == null) continue;
        const x = getX(i);
        const y = getY(avgVals[i]);
        if (!started) {
          ctx.moveTo(x, y);
          started = true;
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
      ctx.restore();
    }

    // Area gradient fill under best fitness curve
    if (bestVals.length >= 2) {
      const fillGrad = ctx.createLinearGradient(0, padTop, 0, h);
      fillGrad.addColorStop(0, 'rgba(0, 229, 255, 0.28)');
      fillGrad.addColorStop(0.65, 'rgba(255, 209, 102, 0.1)');
      fillGrad.addColorStop(1, 'rgba(0, 229, 255, 0.0)');

      ctx.beginPath();
      ctx.moveTo(getX(0), h - 2);
      for (let i = 0; i < bestVals.length; i++) {
        ctx.lineTo(getX(i), getY(bestVals[i]));
      }
      ctx.lineTo(getX(bestVals.length - 1), h - 2);
      ctx.closePath();
      ctx.fillStyle = fillGrad;
      ctx.fill();

      // Main bright cyan -> gold line
      const strokeGrad = ctx.createLinearGradient(padX, 0, w - padX, 0);
      strokeGrad.addColorStop(0, '#00e5ff');
      strokeGrad.addColorStop(1, '#ffd166');

      ctx.beginPath();
      for (let i = 0; i < bestVals.length; i++) {
        const x = getX(i);
        const y = getY(bestVals[i]);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = strokeGrad;
      ctx.lineWidth = 2.1;
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';
      ctx.stroke();
    }

    // Highlight latest point with subtle glow
    const lastIdx = bestVals.length - 1;
    const lx = getX(lastIdx);
    const ly = getY(bestVals[lastIdx]);
    ctx.beginPath();
    ctx.arc(lx, ly, 4.5, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 209, 102, 0.28)';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(lx, ly, 2.3, 0, Math.PI * 2);
    ctx.fillStyle = '#ffd166';
    ctx.fill();

    // Subtle peak value label in top-right
    ctx.fillStyle = 'rgba(226, 232, 240, 0.65)';
    ctx.font = '700 9px ui-monospace, SFMono-Regular, Menlo, monospace';
    ctx.textAlign = 'right';
    ctx.textBaseline = 'top';
    ctx.fillText(`max ${maxVal.toFixed(1)}`, w - 4, 2);
  }

  getSettings() {
    return {
      sensitivity: this._settings.sensitivity,
      adsSensitivity: this._settings.adsSensitivity,
      fov: this._settings.fov,
      volume: this._settings.volume,
      showFps: this._settings.showFps,
      crosshair: { ...this._settings.crosshair },
    };
  }
}
