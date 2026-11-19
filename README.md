# 1v1 Arena FPS — CS2 Fizik + P2P Multiplayer + Canlı AI Self-Play

Harici hiçbir 3D model (`.glb`/`.obj`), doku veya ses dosyası gerektirmeyen; **Vite + Vanilla JS + Three.js + PeerJS + Web Audio API** ile sıfırdan prosedürel olarak üretilmiş, tamamen statik deploy edilebilen tarayıcı tabanlı 1v1 FPS oyunu ve **tarayıcı içi canlı Makine Öğrenmesi (Self-Play Neuroevolution)** arenası.

- **Canlı Demo (Vercel):** [https://fps.hamzafpv.com.tr](https://fps.hamzafpv.com.tr)
- **Yedek Demo (GitHub Pages):** [https://0dayfpv.github.io/web-fps-1v1/](https://0dayfpv.github.io/web-fps-1v1/)

---

## Öne Çıkan Özellikler

### 1. CS2 (Source 2) Hareket & Silah Fiziği
- **Source Air-Strafing & Bunnyhop:** Havada `W` basmadan `A`/`D` + fare dönüşüyle `dot(vel, wishdir)` üzerinden hız kazanımı, `90 ms` zıplama tamponu ve CS2 tarzı soft speed cap (`~285 u/s`).
- **Silah Bazlı Hareket Hızı:** Bıçak (`250 u/s` en hızlı), Assault Rifle (`~220 u/s`), Sniper (`~200 u/s`).
- **Counter-Strafing & Crouch-Jump:** Ters yön tuşuna dokununca anında durma ve keskin isabet; havada `Ctrl` ile `1.55 m` sandıklara crouch-jump.
- **CS2 Deterministik Recoil & Sprey Deseni:** AR için 30 mermilik sprey eğrisi, kamera viewpunch ayrımı, duvar/sandık **mermi izleri (decal)** ve çarpma kıvılcım/toz partikülleri.

### 2. Silahlar, İnceleme & Görsel Stil
- **3 Silah (`1` / `2` / `3`):**
  - **Assault Rifle (`1`):** Otomatik karabina, red-dot ADS, 30 mermi, deterministik sprey.
  - **Sniper (`2`):** Zeytin yeşili AWP şasisi, tam ekran dürbün (scope) ADS, `100 HP` tek atan headshot.
  - **CS2 Terrorist-Side Bıçak (`3`):** İçe açılı Bowie tutuşu, sol tık hızlı savurma (`55 HP` / `100 HP` HS), sağ tık ağır saplama (`100 HP`).
- **Gerçekçi Birinci Şahıs Eller & `F` İnceleme (Inspect):** Tüm 3 silaha özel taktiksel eldivenli kollar ve `F` tuşuyla CS2 tarzı silah/bıçak inceleme animasyonu.
- **Source 2 Tarzı Prosedürel PBR Grafikler:** `PMREMGenerator` IBL yansıma haritası, Dust2/Mirage esintili kumtaşı/beton dokular, ahşap & zeytin yeşili mühimmat sandıkları ve yumuşak gün ışığı gölgeleri.

### 3. Sunucusuz 1v1 P2P Multiplayer (PeerJS / WebRTC)
- Tek tıkla **6 haneli oda kodu** oluşturup arkadaşınla doğrudan tarayıcılar arası (WebRTC DataChannel) 1v1 maç.
- `state`, `shoot`, `hit` ve `respawn` JSON paketleriyle 30 Hz konum, çömelme, aktif silah, ADS, tracer ve mermi izi senkronizasyonu.
- `100 HP`, ölüm sonrası `2.0 sn` geri sayım ve rakibe en uzak noktada respawn.

### 4. HUD, Ayarlar & Prosedürel Ses
- Canlı **Speedometer (`u/s`)**, dinamik/statik crosshair, beyaz/kırmızı hitmarker, `+100 KILL` / `+50 HEADSHOT` / `+25 MID-AIR` skor pop-up'ları, sağ üst kompakt **FPS Göstergesi**.
- **ESC Ayarlar Menüsü (`localStorage` ile kalıcı):**
  - **Genel:** Mouse Hassasiyeti, ADS Hassasiyeti, FOV, Ses Seviyesi, FPS Göstergesi.
  - **Crosshair:** Canlı önizleme kutusu, renk paleti + özel renk seçici, uzunluk, kalınlık, boşluk, opaklık, dış çizgi (outline), orta nokta ve dinamik/statik geçişi.
- **Web Audio API Sentezleyici:** Harici ses dosyası olmadan AR/Sniper/Bıçak, hitmarker, headshot çınlaması, reload, zıplama/bhop ve iniş sesleri.

### 5. AI vs AI — Tarayıcı İçi Canlı Makine Öğrenmesi
- Lobideki **AI vs AI** moduyla sıfırdan rastgele ağırlıklarla başlayan **16 adet sinir ağı** (`18 → 24 → 7` MLP) gerçek `CS2PhysicsController` ve 7 ışınlı lidar sensörleriyle Self-Play Neuroevolution yöntemiyle birbirine karşı eğitilir.
- **`1x` / `10x` / `50x` / `100x` Hız Kontrolü:** `100x` turbo modda dakikalar içinde onlarca jenerasyon eğitip `1x`'te canlı izleyebilirsin.
- **Kamera Modları:** `Genel` (arena takibi), `Bot A` gözünden POV, `Bot B` gözünden POV.
- **Bot A Skilleri (Action Masking):** `Ateş`, `Nişan`, `Koşma`, `Zıplama`, `Çömelme` yeteneklerini canlı açıp kapatarak adım adım müfredat eğitimi veya asimetrik deneyler yapabilirsin *(Bot B her zaman tam açık kalır)*.
- **Model Dışa / İçe Aktarma (JSON):** Eğittiğin popülasyonu ve şampiyon sinir ağını `.json` olarak indirip daha sonra kaldığın jenerasyondan geri yükleyebilirsin.

---

## Kontroller

| Tuş / Giriş | İşlev |
| :--- | :--- |
| `W` `A` `S` `D` | Hareket / Air-Strafing / Counter-Strafing |
| `Space` | Zıplama / Bunnyhop |
| `Ctrl` / `C` | Çömelme / Havada Crouch-Jump |
| `Sol Tık` | Ateş Et / Bıçak Hızlı Kesme |
| `Sağ Tık` | ADS / Sniper Dürbünü / Bıçak Ağır Saplama |
| `1` / `2` / `3` | Assault Rifle / Sniper / Bıçak |
| `R` | Şarjör Değiştir (Reload) |
| `F` | Silah & Bıçak İnceleme (Inspect) |
| `ESC` | Ayarlar & Crosshair Menüsü |

---

## Proje Mimarisi

```text
web-fps-1v1/
├── index.html          # Uygulama kabuğu (#game-canvas, #ui-root)
├── package.json        # Vite, Three.js, PeerJS bağımlılıkları
├── vite.config.js      # Statik deploy için base: './' yapılandırması
├── vercel.json         # Vercel build/output ayarları
└── src/
    ├── constants.js    # Fizik, silah, sprey deseni, hitbox ve varsayılan ayarlar
    ├── physics.js      # Saf CS2 Source 2 hareket, air-strafe, bhop, crouch-jump motoru
    ├── network.js      # PeerJS WebRTC DataChannel bağlantısı ve paket doğrulayıcı
    ├── map.js          # Prosedürel PBR CS2 arenası, PMREM IBL yansımalar, collider & spawnlar
    ├── player.js       # Yerel oyuncu, silah/el viewmodel'leri, inspect, recoil, mermi izi, rakip modeli
    ├── ai.js           # Tarayıcı içi MLP sinir ağı, Self-Play Neuroevolution, JSON export/import
    ├── audio.js        # Web Audio API prosedürel ses sentezleyicisi
    ├── ui.js           # Lobi, HUD, FPS, Crosshair özelleştirici ve AI eğitim paneli
    ├── style.css       # HUD, menü ve AI telemetri stilleri
    └── main.js         # Three.js sahne/render döngüsü ve tüm modüllerin orkestratörü
```

---

## Yerel Kurulum ve Geliştirme

```bash
# Depoyu klonla
git clone https://github.com/0dayfpv/web-fps-1v1.git
cd web-fps-1v1

# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Statik üretim derlemesi oluştur (dist/)
npm run build
```

> **Not:** Tüm oyun ve AI eğitimi tamamen tarayıcı tarafında (client-side) çalışır; herhangi bir backend sunucusu gerektirmez.
