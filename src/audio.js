/**
 * Procedural Web Audio API sound engine for the 1v1 Web FPS.
 * Zero external audio assets — all SFX are synthesized on the fly.
 */
export class SoundEngine {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.noiseBuffer = null;
    this.volume = 0.7;
  }

  /**
   * Lazily initializes the AudioContext, master GainNode, and reusable
   * white noise buffer. Returns true if context exists, false otherwise.
   */
  _initContext() {
    if (this.ctx) return true;

    try {
      const AudioCtx =
        typeof window !== 'undefined' &&
        (window.AudioContext || window.webkitAudioContext);
      if (!AudioCtx) return false;

      const ctx = new AudioCtx();
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(this.volume, ctx.currentTime);
      masterGain.connect(ctx.destination);

      // Pre-generate 1 second of reusable white noise to avoid per-shot allocations.
      const sampleRate = ctx.sampleRate || 44100;
      const noiseBuffer = ctx.createBuffer(1, sampleRate, sampleRate);
      const data = noiseBuffer.getChannelData(0);
      for (let i = 0; i < data.length; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      this.ctx = ctx;
      this.masterGain = masterGain;
      this.noiseBuffer = noiseBuffer;
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Returns true only when AudioContext is initialized and actively running.
   */
  _isReady() {
    return Boolean(
      this.ctx && this.masterGain && this.ctx.state === 'running'
    );
  }

  /**
   * Safely initializes or resumes the AudioContext on a user gesture.
   */
  unlock() {
    try {
      if (!this._initContext()) return;
      if (this.ctx.state === 'suspended') {
        const result = this.ctx.resume();
        if (result && typeof result.catch === 'function') {
          result.catch(() => {});
        }
      }
    } catch {
      // Fail silently if audio cannot be unlocked.
    }
  }

  /**
   * Clamps volume to [0, 1] and smoothly updates master gain.
   * @param {number} value
   */
  setVolume(value) {
    try {
      const numeric = Number(value);
      if (!Number.isFinite(numeric)) return;

      const clamped = Math.max(0, Math.min(1, numeric));
      this.volume = clamped;

      if (this.ctx && this.masterGain) {
        const now = this.ctx.currentTime;
        this.masterGain.gain.cancelScheduledValues(now);
        this.masterGain.gain.setTargetAtTime(clamped, now, 0.015);
      }
    } catch {
      // Fail silently.
    }
  }

  /**
   * Weapon fire SFX.
   * - 'ar': crisp, snappy Triggerman rifle pop (tight bandpass noise ~1600Hz, 65ms + punchy 200Hz->55Hz sine thump).
   * - 'sniper': heavy, thunderous Krunker Hunter sniper crack (wide high-impact noise burst + deep resonant 140Hz->32Hz sub boom + crisp metallic bolt-tail ~260ms).
   * @param {string} [weaponId='ar']
   */
  playShoot(weaponId = 'ar') {
    try {
      if (!this._isReady() || !this.noiseBuffer) return;

      const ctx = this.ctx;
      const now = ctx.currentTime;

      if (weaponId === 'knife') {
        // Crisp metallic blade whoosh / slash
        const whoosh = ctx.createBufferSource();
        whoosh.buffer = this.noiseBuffer;

        const bp = ctx.createBiquadFilter();
        bp.type = 'bandpass';
        bp.frequency.setValueAtTime(1900, now);
        bp.frequency.exponentialRampToValueAtTime(520, now + 0.11);
        bp.Q.setValueAtTime(1.4, now);

        const wGain = ctx.createGain();
        wGain.gain.setValueAtTime(0.001, now);
        wGain.gain.linearRampToValueAtTime(0.45, now + 0.015);
        wGain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

        whoosh.connect(bp);
        bp.connect(wGain);
        wGain.connect(this.masterGain);

        whoosh.start(now);
        whoosh.stop(now + 0.13);

        // Subtle steel shimmer
        const ring = ctx.createOscillator();
        ring.type = 'triangle';
        ring.frequency.setValueAtTime(2600, now);
        ring.frequency.exponentialRampToValueAtTime(1400, now + 0.065);

        const rGain = ctx.createGain();
        rGain.gain.setValueAtTime(0.001, now);
        rGain.gain.linearRampToValueAtTime(0.11, now + 0.008);
        rGain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);

        ring.connect(rGain);
        rGain.connect(this.masterGain);

        ring.start(now);
        ring.stop(now + 0.075);
        return;
      }

      if (weaponId === 'sniper') {
        // Layer 1: Wide high-impact noise burst (crack + body)
        const noise = ctx.createBufferSource();
        noise.buffer = this.noiseBuffer;

        const wideBand = ctx.createBiquadFilter();
        wideBand.type = 'bandpass';
        wideBand.frequency.setValueAtTime(1150, now);
        wideBand.frequency.exponentialRampToValueAtTime(420, now + 0.19);
        wideBand.Q.setValueAtTime(0.55, now);

        const noiseGain = ctx.createGain();
        noiseGain.gain.setValueAtTime(0.001, now);
        noiseGain.gain.linearRampToValueAtTime(0.72, now + 0.002);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.195);

        noise.connect(wideBand);
        wideBand.connect(noiseGain);
        noiseGain.connect(this.masterGain);

        noise.start(now);
        noise.stop(now + 0.2);

        // Layer 1b: Sharp high-frequency whip-crack transient
        const crack = ctx.createBufferSource();
        crack.buffer = this.noiseBuffer;

        const highpass = ctx.createBiquadFilter();
        highpass.type = 'highpass';
        highpass.frequency.setValueAtTime(2200, now);

        const crackGain = ctx.createGain();
        crackGain.gain.setValueAtTime(0.001, now);
        crackGain.gain.linearRampToValueAtTime(0.42, now + 0.0015);
        crackGain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

        crack.connect(highpass);
        highpass.connect(crackGain);
        crackGain.connect(this.masterGain);

        crack.start(now);
        crack.stop(now + 0.045);

        // Layer 2: Deep resonant sub boom (140Hz -> 32Hz)
        const sub = ctx.createOscillator();
        sub.type = 'sine';
        sub.frequency.setValueAtTime(140, now);
        sub.frequency.exponentialRampToValueAtTime(32, now + 0.22);

        const subGain = ctx.createGain();
        subGain.gain.setValueAtTime(0.001, now);
        subGain.gain.linearRampToValueAtTime(0.68, now + 0.003);
        subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.23);

        sub.connect(subGain);
        subGain.connect(this.masterGain);

        sub.start(now);
        sub.stop(now + 0.24);

        // Layer 3: Crisp metallic bolt-tail (~260ms)
        const boltStart = now + 0.125;
        const boltNoise = ctx.createBufferSource();
        boltNoise.buffer = this.noiseBuffer;

        const boltFilter = ctx.createBiquadFilter();
        boltFilter.type = 'bandpass';
        boltFilter.frequency.setValueAtTime(3200, boltStart);
        boltFilter.Q.setValueAtTime(3.8, boltStart);

        const boltNoiseGain = ctx.createGain();
        boltNoiseGain.gain.setValueAtTime(0.001, boltStart);
        boltNoiseGain.gain.linearRampToValueAtTime(0.18, boltStart + 0.008);
        boltNoiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.26);

        boltNoise.connect(boltFilter);
        boltFilter.connect(boltNoiseGain);
        boltNoiseGain.connect(this.masterGain);

        boltNoise.start(boltStart);
        boltNoise.stop(now + 0.265);

        const boltPing = ctx.createOscillator();
        boltPing.type = 'triangle';
        boltPing.frequency.setValueAtTime(1950, boltStart);
        boltPing.frequency.exponentialRampToValueAtTime(1250, now + 0.255);

        const boltPingGain = ctx.createGain();
        boltPingGain.gain.setValueAtTime(0.001, boltStart);
        boltPingGain.gain.linearRampToValueAtTime(0.11, boltStart + 0.004);
        boltPingGain.gain.exponentialRampToValueAtTime(0.001, now + 0.26);

        boltPing.connect(boltPingGain);
        boltPingGain.connect(this.masterGain);

        boltPing.start(boltStart);
        boltPing.stop(now + 0.265);
        return;
      }

      // Default 'ar': crisp, snappy Triggerman rifle pop
      const jitter = 0.97 + Math.random() * 0.06;

      // Layer 1: Tight bandpass-filtered white noise burst (~1600Hz, 65ms)
      const noise = ctx.createBufferSource();
      noise.buffer = this.noiseBuffer;

      const bandpass = ctx.createBiquadFilter();
      bandpass.type = 'bandpass';
      bandpass.frequency.setValueAtTime(1600 * jitter, now);
      bandpass.Q.setValueAtTime(1.4, now);

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.001, now);
      noiseGain.gain.linearRampToValueAtTime(0.56, now + 0.0025);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.065);

      noise.connect(bandpass);
      bandpass.connect(noiseGain);
      noiseGain.connect(this.masterGain);

      noise.start(now);
      noise.stop(now + 0.07);

      // Layer 2: Punchy low-end sine thump (200Hz -> 55Hz)
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(200 * jitter, now);
      osc.frequency.exponentialRampToValueAtTime(55, now + 0.072);

      const oscGain = ctx.createGain();
      oscGain.gain.setValueAtTime(0.001, now);
      oscGain.gain.linearRampToValueAtTime(0.52, now + 0.002);
      oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.075);

      osc.connect(oscGain);
      oscGain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 0.08);
    } catch {
      // Fail silently.
    }
  }

  /**
   * Attenuated, low-pass filtered remote gunshot scaled by distance for both AR and Sniper.
   * @param {number} [distance=10]
   * @param {string} [weaponId='ar']
   */
  playRemoteShoot(distance = 10, weaponId = 'ar') {
    try {
      if (!this._isReady() || !this.noiseBuffer) return;

      const d = Math.max(0, Number.isFinite(distance) ? distance : 10);
      const attenuation = 1 / (1 + d * 0.075);
      if (attenuation < 0.015) return;

      const ctx = this.ctx;
      const now = ctx.currentTime;

      const lowpass = ctx.createBiquadFilter();
      lowpass.type = 'lowpass';
      lowpass.frequency.setValueAtTime(420 + 2100 * attenuation, now);
      lowpass.Q.setValueAtTime(0.8, now);
      lowpass.connect(this.masterGain);

      if (weaponId === 'knife') {
        const whoosh = ctx.createBufferSource();
        whoosh.buffer = this.noiseBuffer;

        const wGain = ctx.createGain();
        wGain.gain.setValueAtTime(0.001, now);
        wGain.gain.linearRampToValueAtTime(0.28 * attenuation, now + 0.014);
        wGain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

        whoosh.connect(wGain);
        wGain.connect(lowpass);

        whoosh.start(now);
        whoosh.stop(now + 0.11);
        return;
      }

      if (weaponId === 'sniper') {
        // Distant heavy sniper crack
        const noise = ctx.createBufferSource();
        noise.buffer = this.noiseBuffer;

        const noiseGain = ctx.createGain();
        noiseGain.gain.setValueAtTime(0.001, now);
        noiseGain.gain.linearRampToValueAtTime(0.6 * attenuation, now + 0.003);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.17);

        noise.connect(noiseGain);
        noiseGain.connect(lowpass);

        noise.start(now);
        noise.stop(now + 0.18);

        // Distant deep resonant boom
        const sub = ctx.createOscillator();
        sub.type = 'sine';
        sub.frequency.setValueAtTime(135, now);
        sub.frequency.exponentialRampToValueAtTime(34, now + 0.2);

        const subGain = ctx.createGain();
        subGain.gain.setValueAtTime(0.001, now);
        subGain.gain.linearRampToValueAtTime(0.52 * attenuation, now + 0.004);
        subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.21);

        sub.connect(subGain);
        subGain.connect(lowpass);

        sub.start(now);
        sub.stop(now + 0.22);
        return;
      }

      // Remote AR crack
      const noise = ctx.createBufferSource();
      noise.buffer = this.noiseBuffer;

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.001, now);
      noiseGain.gain.linearRampToValueAtTime(0.45 * attenuation, now + 0.004);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.068);

      noise.connect(noiseGain);
      noiseGain.connect(lowpass);

      noise.start(now);
      noise.stop(now + 0.072);

      // Muffled low-end thump
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(185, now);
      osc.frequency.exponentialRampToValueAtTime(50, now + 0.075);

      const oscGain = ctx.createGain();
      oscGain.gain.setValueAtTime(0.001, now);
      oscGain.gain.linearRampToValueAtTime(0.36 * attenuation, now + 0.003);
      oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.078);

      osc.connect(oscGain);
      oscGain.connect(lowpass);

      osc.start(now);
      osc.stop(now + 0.082);
    } catch {
      // Fail silently.
    }
  }

  /**
   * Hitmarker feedback:
   * - Body: ultra-crisp Krunker-style short high-mid tick (1550Hz -> 900Hz, 38ms).
   * - Headshot: bright metallic "dink" chime (2400Hz + 3600Hz triangle/sine harmonic ping, 110ms).
   * @param {boolean} [isHeadshot=false]
   */
  playHitmarker(isHeadshot = false) {
    try {
      if (!this._isReady()) return;

      const ctx = this.ctx;
      const now = ctx.currentTime;

      if (isHeadshot) {
        const osc1 = ctx.createOscillator();
        osc1.type = 'triangle';
        osc1.frequency.setValueAtTime(2400, now);

        const osc2 = ctx.createOscillator();
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(3600, now);

        const gain1 = ctx.createGain();
        gain1.gain.setValueAtTime(0.001, now);
        gain1.gain.linearRampToValueAtTime(0.34, now + 0.0015);
        gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.11);

        const gain2 = ctx.createGain();
        gain2.gain.setValueAtTime(0.001, now);
        gain2.gain.linearRampToValueAtTime(0.26, now + 0.0015);
        gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.11);

        osc1.connect(gain1);
        gain1.connect(this.masterGain);
        osc2.connect(gain2);
        gain2.connect(this.masterGain);

        osc1.start(now);
        osc2.start(now);
        osc1.stop(now + 0.115);
        osc2.stop(now + 0.115);

        // Crisp metallic strike transient
        if (this.noiseBuffer) {
          const strike = ctx.createBufferSource();
          strike.buffer = this.noiseBuffer;

          const hp = ctx.createBiquadFilter();
          hp.type = 'highpass';
          hp.frequency.setValueAtTime(3200, now);

          const strikeGain = ctx.createGain();
          strikeGain.gain.setValueAtTime(0.001, now);
          strikeGain.gain.linearRampToValueAtTime(0.16, now + 0.001);
          strikeGain.gain.exponentialRampToValueAtTime(0.001, now + 0.016);

          strike.connect(hp);
          hp.connect(strikeGain);
          strikeGain.connect(this.masterGain);

          strike.start(now);
          strike.stop(now + 0.02);
        }
      } else {
        const osc = ctx.createOscillator();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(1550, now);
        osc.frequency.exponentialRampToValueAtTime(900, now + 0.038);

        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.38, now + 0.0015);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.038);

        osc.connect(gain);
        gain.connect(this.masterGain);

        osc.start(now);
        osc.stop(now + 0.042);

        if (this.noiseBuffer) {
          const tick = ctx.createBufferSource();
          tick.buffer = this.noiseBuffer;

          const hp = ctx.createBiquadFilter();
          hp.type = 'highpass';
          hp.frequency.setValueAtTime(2400, now);

          const tickGain = ctx.createGain();
          tickGain.gain.setValueAtTime(0.001, now);
          tickGain.gain.linearRampToValueAtTime(0.14, now + 0.001);
          tickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.018);

          tick.connect(hp);
          hp.connect(tickGain);
          tickGain.connect(this.masterGain);

          tick.start(now);
          tick.stop(now + 0.022);
        }
      }
    } catch {
      // Fail silently.
    }
  }

  /**
   * Short 2-click mechanical mag-out / mag-in reload cue.
   */
  playReload() {
    try {
      if (!this._isReady()) return;

      const ctx = this.ctx;
      const now = ctx.currentTime;

      const clicks = [
        {
          start: now,
          startFreq: 620,
          endFreq: 340,
          noiseFreq: 2100,
          dur: 0.032,
          peak: 0.2,
        },
        {
          start: now + 0.21,
          startFreq: 480,
          endFreq: 880,
          noiseFreq: 3000,
          dur: 0.038,
          peak: 0.24,
        },
      ];

      for (const c of clicks) {
        const osc = ctx.createOscillator();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(c.startFreq, c.start);
        osc.frequency.exponentialRampToValueAtTime(c.endFreq, c.start + c.dur);

        const oscGain = ctx.createGain();
        oscGain.gain.setValueAtTime(0.001, c.start);
        oscGain.gain.linearRampToValueAtTime(c.peak, c.start + 0.002);
        oscGain.gain.exponentialRampToValueAtTime(0.001, c.start + c.dur);

        osc.connect(oscGain);
        oscGain.connect(this.masterGain);

        osc.start(c.start);
        osc.stop(c.start + c.dur + 0.005);

        if (this.noiseBuffer) {
          const noise = ctx.createBufferSource();
          noise.buffer = this.noiseBuffer;

          const bp = ctx.createBiquadFilter();
          bp.type = 'bandpass';
          bp.frequency.setValueAtTime(c.noiseFreq, c.start);
          bp.Q.setValueAtTime(3.2, c.start);

          const nGain = ctx.createGain();
          nGain.gain.setValueAtTime(0.001, c.start);
          nGain.gain.linearRampToValueAtTime(c.peak * 0.9, c.start + 0.002);
          nGain.gain.exponentialRampToValueAtTime(0.001, c.start + c.dur);

          noise.connect(bp);
          bp.connect(nGain);
          nGain.connect(this.masterGain);

          noise.start(c.start);
          noise.stop(c.start + c.dur + 0.005);
        }
      }
    } catch {
      // Fail silently.
    }
  }

  /**
   * Quick subtle crisp click-swoosh for weapon switching (~55ms).
   */
  playWeaponSwitch() {
    try {
      if (!this._isReady()) return;

      const ctx = this.ctx;
      const now = ctx.currentTime;

      // Subtle upward noise swoosh (~55ms)
      if (this.noiseBuffer) {
        const noise = ctx.createBufferSource();
        noise.buffer = this.noiseBuffer;

        const bp = ctx.createBiquadFilter();
        bp.type = 'bandpass';
        bp.frequency.setValueAtTime(850, now);
        bp.frequency.exponentialRampToValueAtTime(2400, now + 0.055);
        bp.Q.setValueAtTime(1.6, now);

        const nGain = ctx.createGain();
        nGain.gain.setValueAtTime(0.001, now);
        nGain.gain.linearRampToValueAtTime(0.16, now + 0.014);
        nGain.gain.exponentialRampToValueAtTime(0.001, now + 0.055);

        noise.connect(bp);
        bp.connect(nGain);
        nGain.connect(this.masterGain);

        noise.start(now);
        noise.stop(now + 0.06);
      }

      // Crisp mechanical click accent
      const clickTime = now + 0.022;
      const osc = ctx.createOscillator();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(1150, clickTime);
      osc.frequency.exponentialRampToValueAtTime(680, clickTime + 0.025);

      const oscGain = ctx.createGain();
      oscGain.gain.setValueAtTime(0.001, clickTime);
      oscGain.gain.linearRampToValueAtTime(0.13, clickTime + 0.002);
      oscGain.gain.exponentialRampToValueAtTime(0.001, clickTime + 0.028);

      osc.connect(oscGain);
      oscGain.connect(this.masterGain);

      osc.start(clickTime);
      osc.stop(clickTime + 0.032);
    } catch {
      // Fail silently.
    }
  }

  /**
   * CS2-style jump cue: light upward air-whoosh/pop.
   * When isBhop is true, layers a subtle crisp high-pitched rhythmic accent tick.
   * @param {boolean} [isBhop=false]
   */
  playJump(isBhop = false) {
    try {
      if (!this._isReady()) return;

      const ctx = this.ctx;
      const now = ctx.currentTime;

      // Light upward air-whoosh
      if (this.noiseBuffer) {
        const noise = ctx.createBufferSource();
        noise.buffer = this.noiseBuffer;

        const bp = ctx.createBiquadFilter();
        bp.type = 'bandpass';
        bp.frequency.setValueAtTime(450, now);
        bp.frequency.exponentialRampToValueAtTime(1400, now + 0.065);
        bp.Q.setValueAtTime(1.4, now);

        const nGain = ctx.createGain();
        nGain.gain.setValueAtTime(0.001, now);
        nGain.gain.linearRampToValueAtTime(0.14, now + 0.012);
        nGain.gain.exponentialRampToValueAtTime(0.001, now + 0.065);

        noise.connect(bp);
        bp.connect(nGain);
        nGain.connect(this.masterGain);

        noise.start(now);
        noise.stop(now + 0.07);
      }

      // Light upward pop
      const pop = ctx.createOscillator();
      pop.type = 'sine';
      pop.frequency.setValueAtTime(160, now);
      pop.frequency.exponentialRampToValueAtTime(320, now + 0.052);

      const popGain = ctx.createGain();
      popGain.gain.setValueAtTime(0.001, now);
      popGain.gain.linearRampToValueAtTime(0.12, now + 0.005);
      popGain.gain.exponentialRampToValueAtTime(0.001, now + 0.055);

      pop.connect(popGain);
      popGain.connect(this.masterGain);

      pop.start(now);
      pop.stop(now + 0.06);

      // Rhythmic high-pitched accent tick for chaining bhops
      if (isBhop) {
        const tick = ctx.createOscillator();
        tick.type = 'triangle';
        tick.frequency.setValueAtTime(1850, now);
        tick.frequency.exponentialRampToValueAtTime(2450, now + 0.042);

        const tickGain = ctx.createGain();
        tickGain.gain.setValueAtTime(0.001, now);
        tickGain.gain.linearRampToValueAtTime(0.15, now + 0.002);
        tickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.045);

        tick.connect(tickGain);
        tickGain.connect(this.masterGain);

        tick.start(now);
        tick.stop(now + 0.05);
      }
    } catch {
      // Fail silently.
    }
  }

  /**
   * Subtle low muffled foot-thud on landing (~55ms).
   */
  playLand() {
    try {
      if (!this._isReady()) return;

      const ctx = this.ctx;
      const now = ctx.currentTime;

      // Low muffled thud
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(95, now);
      osc.frequency.exponentialRampToValueAtTime(42, now + 0.055);

      const oscGain = ctx.createGain();
      oscGain.gain.setValueAtTime(0.001, now);
      oscGain.gain.linearRampToValueAtTime(0.22, now + 0.004);
      oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.055);

      osc.connect(oscGain);
      oscGain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 0.06);

      // Soft low-passed foot scuff
      if (this.noiseBuffer) {
        const noise = ctx.createBufferSource();
        noise.buffer = this.noiseBuffer;

        const lp = ctx.createBiquadFilter();
        lp.type = 'lowpass';
        lp.frequency.setValueAtTime(380, now);

        const nGain = ctx.createGain();
        nGain.gain.setValueAtTime(0.001, now);
        nGain.gain.linearRampToValueAtTime(0.12, now + 0.004);
        nGain.gain.exponentialRampToValueAtTime(0.001, now + 0.048);

        noise.connect(lp);
        lp.connect(nGain);
        nGain.connect(this.masterGain);

        noise.start(now);
        noise.stop(now + 0.052);
      }
    } catch {
      // Fail silently.
    }
  }

  /**
   * Local player damage feedback: low dull impact thud (110Hz -> 48Hz, ~110ms)
   * layered with a subtle low-passed noise pop.
   */
  playDamage() {
    try {
      if (!this._isReady()) return;

      const ctx = this.ctx;
      const now = ctx.currentTime;

      // Dull low-end impact thud
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(110, now);
      osc.frequency.exponentialRampToValueAtTime(48, now + 0.11);

      const oscGain = ctx.createGain();
      oscGain.gain.setValueAtTime(0.001, now);
      oscGain.gain.linearRampToValueAtTime(0.55, now + 0.004);
      oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.11);

      osc.connect(oscGain);
      oscGain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 0.115);

      // Subtle noise pop
      if (this.noiseBuffer) {
        const noise = ctx.createBufferSource();
        noise.buffer = this.noiseBuffer;

        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(520, now);

        const noiseGain = ctx.createGain();
        noiseGain.gain.setValueAtTime(0.001, now);
        noiseGain.gain.linearRampToValueAtTime(0.22, now + 0.003);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.055);

        noise.connect(filter);
        filter.connect(noiseGain);
        noiseGain.connect(this.masterGain);

        noise.start(now);
        noise.stop(now + 0.06);
      }
    } catch {
      // Fail silently.
    }
  }

  /**
   * Kill confirmation: clean ascending 2-note synthetic chime.
   */
  playKill() {
    try {
      if (!this._isReady()) return;

      const ctx = this.ctx;
      const now = ctx.currentTime;

      const notes = [
        { freq: 880, start: now, duration: 0.095, peak: 0.28 },
        { freq: 1320, start: now + 0.075, duration: 0.16, peak: 0.32 },
      ];

      for (const note of notes) {
        const osc = ctx.createOscillator();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(note.freq, note.start);

        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.001, note.start);
        gain.gain.linearRampToValueAtTime(note.peak, note.start + 0.006);
        gain.gain.exponentialRampToValueAtTime(
          0.001,
          note.start + note.duration
        );

        osc.connect(gain);
        gain.connect(this.masterGain);

        osc.start(note.start);
        osc.stop(note.start + note.duration + 0.005);
      }
    } catch {
      // Fail silently.
    }
  }

  /**
   * Respawn sound: subtle sci-fi power-up sweep (320Hz -> 640Hz, ~180ms).
   */
  playRespawn() {
    try {
      if (!this._isReady()) return;

      const ctx = this.ctx;
      const now = ctx.currentTime;

      const osc = ctx.createOscillator();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(640, now + 0.18);

      const harmonic = ctx.createOscillator();
      harmonic.type = 'sine';
      harmonic.frequency.setValueAtTime(640, now);
      harmonic.frequency.exponentialRampToValueAtTime(1280, now + 0.18);

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1600, now);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.24, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

      const harmGain = ctx.createGain();
      harmGain.gain.setValueAtTime(0.001, now);
      harmGain.gain.linearRampToValueAtTime(0.08, now + 0.02);
      harmGain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

      osc.connect(gain);
      gain.connect(filter);

      harmonic.connect(harmGain);
      harmGain.connect(filter);

      filter.connect(this.masterGain);

      osc.start(now);
      harmonic.start(now);
      osc.stop(now + 0.19);
      harmonic.stop(now + 0.19);
    } catch {
      // Fail silently.
    }
  }
}
