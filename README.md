# 3D Web FPS — In-Browser Live AI Self-Play Training Arena

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-fps.hamzafpv.com.tr-brightgreen)](https://fps.hamzafpv.com.tr)

A zero-asset, browser-based **real-time AI Self-Play Neuroevolution training arena** and **1v1 P2P Web FPS** — requiring no external 3D models, textures, or audio files.

Built from scratch with **Vite + Vanilla JS + Three.js + PeerJS (WebRTC) + Web Audio API**, running 100% statically with zero backend server required.

- **Live Demo:** [https://fps.hamzafpv.com.tr](https://fps.hamzafpv.com.tr)
- **Backup Mirror:** [https://0dayfpv.github.io/web-fps-1v1/](https://0dayfpv.github.io/web-fps-1v1/)

---

## AI Training (AI vs AI — Self-Play Neuroevolution)

The core focus of this project is watching two AI agents start from completely random weights — with **zero hardcoded aiming or movement rules** — and learn to aim, move, take cover, and duel each other from scratch inside a 3D arena.

### How It Works
- **Neural Network Architecture (`src/ai.js`):** Each agent uses a pure `Float32Array` **short-term memory Elman RNN (`28 → 32 recurrent tanh → 7 tanh`)** with a recurrent feedback matrix (`Wh`) that carries hidden state across simulation steps.
- **Observation Space (28 Inputs):** Self velocity, health, ammo, reload/crouch state, and arena coordinates; live relative opponent angle & distance when Line-of-Sight is clear; **last-seen enemy position memory** (5s freshness); **incoming damage direction sensor**; and a **2-tier lidar (5 low + 2 high rays)** to distinguish jumpable cover crates from full walls.
- **Action Space (7 Outputs):** Forward/backward movement, strafing, jumping, crouching, smoothed horizontal/vertical aiming, and firing.
- **Evolutionary Self-Play:** Every generation pairs **16 neural networks** in 1v1 matches, scoring fitness on damage, headshots, kills, calm Line-of-Sight tracking, and movement exploration. Top elites are preserved while the rest of the population evolves via crossover and mutation.

### Live Training Tools
- **Speed Controls (`1x` / `10x` / `50x` / `100x`):** Watch agents duel in real time at `1x`, or run dozens of headless physics & neural steps per frame at `50x` / `100x` to fast-forward generations in seconds *(all speeds run the exact same fixed `1/30 s` physics step)*.
- **Live Telemetry & Fitness Chart:** Real-time generation counter, best/average fitness curve, total kills, and **Bot Alpha vs Bot Beta** cumulative score & HP tracking.
- **Camera Modes:** `Overview` (arena spectator camera), `Bot A` first-person POV, and `Bot B` first-person POV.
- **Bot A Skill Masking (Curriculum Learning):** Toggle `1. Fire`, `2. Aim`, `3. Move`, `4. Jump`, and `5. Crouch` live for Bot Alpha from the top-left panel for staged curriculum training or asymmetric experiments *(Bot Beta always retains full capabilities)*.
- **Model Export & Import (`.json`):** Download the entire trained population, champion brain, generation history, and skill profile as a `.json` file, then reload it anytime to resume training right where you left off.

---

## 1v1 P2P Browser Gameplay

In addition to the AI training arena, you can play 1v1 directly against a friend in the browser:

- **Serverless Multiplayer (PeerJS / WebRTC):** Create a **6-character room code** in one click and share it for direct browser-to-browser 1v1 matches.
- **Responsive Movement & Weapon Physics:** Air-strafing, bunnyhopping, counter-strafing, mid-air crouch-jumping onto elevated crates, weapon-specific movement speeds, deterministic recoil patterns, and persistent bullet decals on walls and cover.
- **3 Procedural Weapons (`1` / `2` / `3`):** Automatic Rifle (red-dot ADS), Sniper Rifle (full-screen scope ADS), and Melee Knife (left-click fast slash / right-click heavy stab), all with `F` inspect animations.
- **Customizable HUD & Persistent Settings:** Live speedometer (`u/s`), compact FPS counter, live-preview **Crosshair Customizer** (color, length, thickness, gap, opacity, outline, center dot, dynamic/static), and `localStorage`-saved sensitivity, FOV, and volume settings.
- **Procedural Visuals & Audio:** Code-generated PBR arena textures, environment reflection maps (`PMREMGenerator`), and Web Audio API synthesized sound effects.

---

## Controls

| Key / Input | Action |
| :--- | :--- |
| `W` `A` `S` `D` | Move / Air-Strafe / Counter-Strafe |
| `Space` | Jump / Bunnyhop |
| `Ctrl` / `C` | Crouch / Mid-Air Crouch-Jump |
| `Left Click` | Fire / Knife Fast Slash |
| `Right Click` | ADS / Scope / Knife Heavy Stab |
| `1` / `2` / `3` | Rifle / Sniper / Knife |
| `R` | Reload |
| `F` | Weapon & Knife Inspect |
| `ESC` | Settings & Crosshair Menu |

---

## Project Architecture

```text
web-fps-1v1/
├── index.html          # Application shell (#game-canvas, #ui-root)
├── package.json        # Vite, Three.js, PeerJS dependencies
├── vite.config.js      # Static deployment config
├── vercel.json         # Vercel build/output config
└── src/
    ├── ai.js           # Elman RNN, Self-Play Neuroevolution, skill masking, JSON export/import
    ├── physics.js      # Pure 3D movement, air-strafe, bunnyhop, crouch-jump & AABB collision engine
    ├── constants.js    # Physics, weapon, recoil, hitbox & default settings constants
    ├── map.js          # Procedural PBR 3D arena, IBL reflections, colliders & spawn points
    ├── player.js       # Local player, procedural weapons/hands, inspect, recoil, decals & remote player
    ├── network.js      # PeerJS WebRTC DataChannel connection & JSON packet validation
    ├── audio.js        # Web Audio API procedural sound synthesizer
    ├── ui.js           # Lobby, AI training dashboard, live chart, HUD, FPS & Crosshair customizer
    ├── style.css       # UI, HUD & telemetry styles
    └── main.js         # Three.js scene/render loop & module orchestrator
```

---

## Local Development

```bash
git clone https://github.com/0dayfpv/web-fps-1v1.git
cd web-fps-1v1
npm install
npm run dev
```

To create a static production build:

```bash
npm run build
```

> All 3D rendering, physics calculations, and AI training run entirely in the user's browser — zero server cost and no external API keys required.

---

## License & Copyright

The source code is licensed under the [MIT License](LICENSE). All personal content, visuals, and branding remain All Rights Reserved.

© 2025–2026 [hamzafpv.com.tr](https://hamzafpv.com.tr) • All rights reserved.
