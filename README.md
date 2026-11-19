# 3D Web FPS — Tarayıcı İçi Canlı Yapay Zeka (Self-Play) Eğitim Arenası

Tamamen tarayıcı üzerinde çalışan, harici hiçbir 3D model, doku veya ses dosyası gerektirmeyen **gerçek zamanlı yapay zeka eğitim arenası** ve **1v1 P2P tarayıcı FPS oyunu**.

**Vite + Vanilla JS + Three.js + PeerJS + Web Audio API** ile sıfırdan geliştirilmiş olup backend sunucusu olmadan tamamen statik olarak çalışır.

- **Canlı Demo:** [https://fps.hamzafpv.com.tr](https://fps.hamzafpv.com.tr)
- **Yedek Link:** [https://0dayfpv.github.io/web-fps-1v1/](https://0dayfpv.github.io/web-fps-1v1/)

---

## Yapay Zeka Eğitimi (AI vs AI — Self-Play Neuroevolution)

Projenin ana odağı, iki yapay zeka ajanının **hiçbir önceden tanımlı nişan veya hareket kuralı olmadan**, tamamen rastgele ağırlıklarla başlayıp 3D arena içinde birbirine karşı oynayarak sıfırdan öğrenmesini canlı olarak gözlemlemektir.

### Nasıl Çalışır?
- **Sinir Ağı Mimarisi (`src/ai.js`):** Her ajan, saf `Float32Array` tabanlı **2 katmanlı MLP (`18 → 24 tanh → 7 tanh`)** sinir ağına sahiptir.
- **Gözlem Uzayı (18 Girdi):** Kendi hız/can/cephane/çömelme durumu, rakibin göreli yatay/dikey açısı ve mesafesi, gerçek AABB raycast ile görüş hattı (`Line-of-Sight`) ve engelleri algılamak için **7 yönlü yatay lidar sensörü**.
- **Eylem Uzayı (7 Çıktı):** İleri/geri, sağ/sol hareket, zıplama, çömelme, yumuşatılmış yatay/dikey bakış kontrolü ve ateş etme.
- **Evrimsel Öğrenme (Self-Play):** Her jenerasyonda **16 sinir ağı** 1v1 maçlarda eşleşir; hasar, headshot, kill, görüş hattında sakin nişan takibi ve hareket keşfi üzerinden fitness puanı toplar. En başarılı elit beyinler korunur, diğerleri çaprazlama (`crossover`) ve mutasyonla yeni jenerasyonu oluşturur.

### Canlı Eğitim Araçları
- **Hız Kontrolü (`1x` / `10x` / `50x` / `100x`):** `1x` modda ajanları gerçek zamanlı izleyebilir, `50x` veya `100x` turbo modda her karede onlarca simülasyon adımı koşturarak eğitimi saniyeler içinde ileri sarabilirsin *(tüm hızlarda birebir aynı `1/30 sn` sabit fizik adımı çalışır)*.
- **Canlı Telemetri & Fitness Grafiği:** Jenerasyon numarası, en iyi/ortalama fitness eğrisi, toplam kill ve **Bot Alpha vs Bot Beta** kümülatif skor/HP takibi.
- **Kamera Modları:** `Genel` (arenayı takip eden izleyici kamerası), `Bot A` gözünden POV ve `Bot B` gözünden POV.
- **Bot A Yetenek Maskeleme (Curriculum Learning):** Sol üst panelden Bot Alpha için `1. Ateş`, `2. Nişan`, `3. Koşma`, `4. Zıplama`, `5. Çömelme` yeteneklerini canlı açıp kapatabilir, adım adım eğitim veya asimetrik deneyler yapabilirsin *(Bot Beta her zaman tüm yetenekleriyle sabit kalır)*.
- **Model Dışa & İçe Aktarma (`.json`):** Eğittiğin popülasyonu, en iyi şampiyon sinir ağını, jenerasyon geçmişini ve skill profilini tek tıkla `.json` olarak bilgisayarına indirebilir; daha sonra yükleyerek eğitime kaldığın yerden devam edebilirsin.

---

## 1v1 P2P Tarayıcı Oyunu

Yapay zeka arenasına ek olarak arkadaşınla doğrudan tarayıcı üzerinden 1v1 oynayabilirsin:

- **Sunucusuz Multiplayer (PeerJS / WebRTC):** Tek tıkla **6 haneli oda kodu** oluşturup paylaşarak doğrudan tarayıcılar arası 1v1 maç.
- **Gelişmiş Hareket & Silah Fiziği:** Air-strafing, bunnyhop, counter-strafing, havada çömelerek yüksek kutulara çıkma (`crouch-jump`), silah bazlı hareket hızları, deterministik geri tepme (recoil) deseni ve duvar/sandıklarda kalıcı mermi izleri.
- **3 Prosedürel Silah (`1` / `2` / `3`):** Otomatik tüfek (red-dot ADS), keskin nişancı tüfeği (dürbünlü ADS) ve yakın dövüş bıçağı (sol tık hızlı kesme / sağ tık ağır saplama); tüm silahlarda `F` tuşuyla inceleme animasyonu.
- **Özelleştirilebilir HUD & Kalıcı Ayarlar:** Canlı hız göstergesi (`u/s`), sağ üst kompakt FPS sayacı, canlı önizlemeli **Crosshair özelleştirici** (renk, uzunluk, kalınlık, boşluk, opaklık, dış çizgi, orta nokta, dinamik/statik) ve `localStorage` ile kaydedilen hassasiyet/FOV/ses ayarları.
- **Prosedürel Görsel & Ses:** Tamamen kodla üretilmiş PBR arena dokuları, çevresel yansıma haritası (`PMREMGenerator`) ve Web Audio API ile sentezlenmiş ses efektleri.

---

## Kontroller

| Tuş / Giriş | İşlev |
| :--- | :--- |
| `W` `A` `S` `D` | Hareket / Air-Strafing / Counter-Strafing |
| `Space` | Zıplama / Bunnyhop |
| `Ctrl` / `C` | Çömelme / Havada Crouch-Jump |
| `Sol Tık` | Ateş Et / Bıçak Hızlı Kesme |
| `Sağ Tık` | ADS / Dürbün / Bıçak Ağır Saplama |
| `1` / `2` / `3` | Otomatik Tüfek / Keskin Nişancı / Bıçak |
| `R` | Şarjör Değiştir |
| `F` | Silah & Bıçak İnceleme |
| `ESC` | Ayarlar & Crosshair Menüsü |

---

## Proje Mimarisi

```text
web-fps-1v1/
├── index.html          # Uygulama kabuğu (#game-canvas, #ui-root)
├── package.json        # Vite, Three.js, PeerJS bağımlılıkları
├── vite.config.js      # Statik deploy yapılandırması
├── vercel.json         # Vercel build/output ayarları
└── src/
    ├── ai.js           # MLP sinir ağı, Self-Play Neuroevolution, skill maskeleme, JSON dışa/içe aktarma
    ├── physics.js      # Saf 3D hareket, air-strafe, bunnyhop, crouch-jump ve AABB çarpışma motoru
    ├── constants.js    # Fizik, silah, sprey deseni, hitbox ve varsayılan ayar sabitleri
    ├── map.js          # Prosedürel PBR 3D arena, IBL yansımalar, çarpışma kutuları ve spawn noktaları
    ├── player.js       # Yerel oyuncu, silah/el modelleri, inceleme, recoil, mermi izleri, rakip modeli
    ├── network.js      # PeerJS WebRTC DataChannel bağlantısı ve JSON paket doğrulama
    ├── audio.js        # Web Audio API prosedürel ses sentezleyicisi
    ├── ui.js           # Lobi, AI eğitim paneli, canlı grafik, HUD, FPS ve Crosshair özelleştirici
    ├── style.css       # Arayüz, HUD ve telemetri stilleri
    └── main.js         # Three.js sahne/render döngüsü ve tüm modüllerin orkestratörü
```

---

## Yerel Kurulum

```bash
git clone https://github.com/0dayfpv/web-fps-1v1.git
cd web-fps-1v1
npm install
npm run dev
```

Statik üretim derlemesi almak için:

```bash
npm run build
```

> Tüm 3D grafikler, fizik hesaplamaları ve yapay zeka eğitimi tamamen kullanıcının kendi tarayıcısında çalışır; sunucu maliyeti veya harici API gerektirmez.
