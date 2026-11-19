import * as THREE from 'three';
import {
  DEFAULT_SETTINGS,
  NETWORK_CONFIG,
  PLAYER_CONFIG,
  WEAPONS,
  WEAPON_IDS,
} from './constants.js';
import { NetworkManager } from './network.js';
import { createArena } from './map.js';
import { LocalPlayer, RemotePlayer } from './player.js';
import { SoundEngine } from './audio.js';
import { UIManager } from './ui.js';
import { AIArenaTrainer } from './ai.js';

// --- Three.js Core Setup ---
const canvas = document.getElementById('game-canvas');
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  powerPreference: 'high-performance',
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  DEFAULT_SETTINGS.fov,
  window.innerWidth / window.innerHeight,
  0.08,
  160
);
scene.add(camera);

// --- Module Initialization ---
const arena = createArena(scene, renderer);
const localPlayer = new LocalPlayer(camera, scene);
const remotePlayer = new RemotePlayer(scene);
const sound = new SoundEngine();
const network = new NetworkManager();
const ui = new UIManager();
const aiTrainer = new AIArenaTrainer(
  scene,
  arena,
  (origin, endPoint, weaponId) => {
    localPlayer.spawnTracer(origin, endPoint, weaponId);
  },
  (point, normal) => {
    localPlayer.spawnBulletImpact(point, normal);
  },
  (type, data) => {
    if (type === 'shoot') {
      sound.playRemoteShoot(10, data?.weaponId || WEAPON_IDS.AR);
    } else if (type === 'hit') {
      sound.playHitmarker(Boolean(data?.isHeadshot));
    } else if (type === 'kill') {
      sound.playKill();
    } else if (type === 'jump') {
      sound.playJump(Boolean(data?.isBhop));
    }
  }
);

remotePlayer.setVisible(false);
localPlayer.setInputEnabled(false);
if (localPlayer.weaponGroup) {
  localPlayer.weaponGroup.visible = false;
}

// --- Game State ---
let settings = ui.getSettings();
localPlayer.setBaseFov(settings.fov);
sound.setVolume(settings.volume);

let inMatch = false;
let inAIMode = false;
let aiSpeed = 1;
let aiCamMode = 'overview';
let isPaused = false;
let isDead = false;
let isFiring = false;
let localHP = PLAYER_CONFIG.MAX_HP;
let remoteHP = PLAYER_CONFIG.MAX_HP;
let myScore = 0;
let enemyScore = 0;
let creditedKillLocally = false;
let respawnTimer = 0;
let lastStateSentMs = 0;
let lobbyOrbitAngle = 0;

const remoteRaycaster = new THREE.Raycaster();
const tempOrigin = new THREE.Vector3();
const tempDir = new THREE.Vector3();

// --- Helpers ---
function requestLock() {
  if (document.pointerLockElement === canvas || !canvas.requestPointerLock) {
    return;
  }
  try {
    // Request OS-unadjusted raw mouse input to prevent acceleration/hysteresis axis stickiness
    const maybePromise = canvas.requestPointerLock({ unadjustedMovement: true });
    if (maybePromise && typeof maybePromise.catch === 'function') {
      maybePromise.catch((err) => {
        if (err && err.name === 'NotSupportedError') {
          try {
            const fallback = canvas.requestPointerLock();
            if (fallback && typeof fallback.catch === 'function') {
              fallback.catch(() => {});
            }
          } catch {
            // Ignore
          }
        }
      });
    }
  } catch {
    try {
      canvas.requestPointerLock();
    } catch {
      // Pointer lock requires a direct user gesture in some browsers
    }
  }
}

function exitLock() {
  if (document.pointerLockElement) {
    try {
      document.exitPointerLock?.();
    } catch {
      // Ignore
    }
  }
}

function sendCurrentState() {
  const state = localPlayer.getState();
  network.sendState(
    state.pos,
    state.yaw,
    state.pitch,
    state.isCrouching,
    state.weaponId,
    state.isADS
  );
}

function startMatch() {
  if (inAIMode) {
    inAIMode = false;
    aiTrainer.setActive(false);
  }
  inMatch = true;
  if (localPlayer.weaponGroup) {
    localPlayer.weaponGroup.visible = true;
  }
  isDead = false;
  isFiring = false;
  localHP = PLAYER_CONFIG.MAX_HP;
  remoteHP = PLAYER_CONFIG.MAX_HP;
  myScore = 0;
  enemyScore = 0;
  creditedKillLocally = false;
  respawnTimer = 0;

  const initialSpawn = network.isHost()
    ? arena.spawnPoints[0]
    : arena.spawnPoints[1];
  localPlayer.respawnAt(initialSpawn.pos, initialSpawn.yaw);
  localPlayer.setADS(false);

  remotePlayer.setVisible(true);
  ui.updateHP(localHP);
  ui.updateScore(myScore, enemyScore);
  ui.showRespawnCountdown(0);
  ui.setScopeVisible(false);
  ui.updateSpeedometer(0, false);
  ui.showGame();

  sendCurrentState();

  requestLock();
  const locked = document.pointerLockElement === canvas;
  isPaused = !locked;
  localPlayer.setInputEnabled(locked);
  ui.showPauseMenu(!locked);
}

function leaveMatch(statusMessage = '', isError = false) {
  inMatch = false;
  inAIMode = false;
  aiTrainer.setActive(false);
  isPaused = false;
  isDead = false;
  isFiring = false;
  respawnTimer = 0;

  localPlayer.setADS(false);
  localPlayer.setInputEnabled(false);
  if (localPlayer.weaponGroup) {
    localPlayer.weaponGroup.visible = false;
  }
  remotePlayer.setVisible(false);
  exitLock();

  network.disconnect();
  ui.setScopeVisible(false);
  ui.showRespawnCountdown(0);
  ui.showPauseMenu(false);
  ui.setRoomCode(null);
  ui.showLobby();
  ui.setLobbyStatus(statusMessage, isError);
}

function attemptShot(isHeavy = false) {
  if (!inMatch || isPaused || isDead || document.pointerLockElement !== canvas) {
    return;
  }

  const result = localPlayer.tryShoot(
    arena.mapMeshes,
    remotePlayer.getHitboxes(),
    isHeavy
  );
  if (!result) return;

  sound.playShoot(result.weaponId);
  ui.pulseCrosshair();
  network.sendShoot(result.origin, result.dir, result.weaponId);

  if (result.hit) {
    const { damage, isHeadshot, isMidAir } = result.hit;
    sound.playHitmarker(isHeadshot);
    ui.showHitmarker(isHeadshot);
    network.sendHit(damage, isHeadshot, isMidAir);

    remoteHP = Math.max(0, remoteHP - damage);
    if (remoteHP <= 0) {
      remotePlayer.setVisible(false);
      if (!creditedKillLocally) {
        myScore += 1;
        creditedKillLocally = true;
        ui.updateScore(myScore, enemyScore);
        sound.playKill();

        ui.pushScorePopup('+100 KILL', 'kill');
        if (isHeadshot) {
          ui.pushScorePopup('+50 HEADSHOT', 'headshot');
        }
        if (isMidAir) {
          ui.pushScorePopup('+25 MID-AIR', 'midair');
        }
      }
    }
  }
}

function handleLocalRespawn() {
  const opponentPos = remotePlayer.getPosition();
  const spawn = arena.getFarthestSpawn(opponentPos);

  localHP = PLAYER_CONFIG.MAX_HP;
  isDead = false;
  respawnTimer = 0;

  localPlayer.respawnAt(spawn.pos, spawn.yaw);
  localPlayer.setADS(false);
  localPlayer.setInputEnabled(!isPaused && document.pointerLockElement === canvas);

  ui.updateHP(localHP);
  ui.showRespawnCountdown(0);
  ui.setScopeVisible(false);
  sound.playRespawn();

  network.sendRespawn(spawn.pos, spawn.yaw, localHP, true);
  sendCurrentState();
}

// --- UI Callbacks ---
ui.onCreateRoom(async () => {
  sound.unlock();
  ui.setRoomCode(null);
  ui.setLobbyStatus('Oda oluşturuluyor...');
  try {
    const code = await network.createRoom();
    ui.setRoomCode(code);
    ui.setLobbyStatus('Rakip bekleniyor... Oda kodunu arkadaşına gönder.');
  } catch (err) {
    ui.setLobbyStatus(err?.message || 'Oda oluşturulamadı.', true);
  }
});

ui.onJoinRoom(async (roomCode) => {
  sound.unlock();
  ui.setRoomCode(null);
  ui.setLobbyStatus(`"${roomCode}" odasına bağlanılıyor...`);
  try {
    await network.joinRoom(roomCode);
  } catch (err) {
    ui.setLobbyStatus(err?.message || 'Odaya bağlanılamadı.', true);
  }
});

ui.onResume(() => {
  sound.unlock();
  if (!inMatch) return;
  requestLock();
});

ui.onLeaveRoom(() => {
  leaveMatch('Odadan ayrıldın.');
});

ui.onSettingsChange((nextSettings) => {
  settings = nextSettings;
  localPlayer.setBaseFov(settings.fov);
  sound.setVolume(settings.volume);
});

ui.onStartAI(() => {
  sound.unlock();
  network.disconnect();
  inMatch = false;
  isPaused = false;
  isDead = false;
  isFiring = false;
  exitLock();

  remotePlayer.setVisible(false);
  localPlayer.setInputEnabled(false);
  if (localPlayer.weaponGroup) {
    localPlayer.weaponGroup.visible = false;
  }

  inAIMode = true;
  aiTrainer.setActive(true);
  ui.showAIMode();
  ui.updateAIStats(aiTrainer.getStats());
});

ui.onExitAI(() => {
  inAIMode = false;
  aiTrainer.setActive(false);
  ui.showLobby();
  ui.setLobbyStatus('');
});

ui.onAISpeedChange((speed) => {
  aiSpeed = speed;
});

ui.onAICameraChange((mode) => {
  aiCamMode = mode;
});

ui.onAIReset(() => {
  aiTrainer.reset();
  ui.updateAIStats(aiTrainer.getStats());
});

// --- Network Events ---
network.on('connected', () => {
  startMatch();
});

network.on('disconnected', () => {
  if (inMatch) {
    leaveMatch('Rakip bağlantıyı kesti.', true);
  } else {
    ui.setLobbyStatus('Bağlantı kesildi.', true);
  }
});

network.on('error', (err) => {
  if (!inMatch) {
    ui.setLobbyStatus(err?.message || 'Ağ hatası oluştu.', true);
  }
});

network.on('state', ({ pos, yaw, pitch, isCrouching, weaponId, isADS }) => {
  if (!inMatch) return;
  remotePlayer.pushState(pos, yaw, pitch, isCrouching, weaponId, isADS);
});

network.on('shoot', ({ origin, dir, weaponId }) => {
  if (!inMatch) return;

  const wId = WEAPONS[weaponId] ? weaponId : WEAPON_IDS.AR;
  const weaponDef = WEAPONS[wId];

  if (!weaponDef.isMelee) {
    const maxRange = weaponDef.maxRange;

    tempOrigin.set(origin[0], origin[1], origin[2]);
    tempDir.set(dir[0], dir[1], dir[2]).normalize();
    remoteRaycaster.set(tempOrigin, tempDir);
    remoteRaycaster.near = 0;
    remoteRaycaster.far = maxRange;

    const hits = remoteRaycaster.intersectObjects(arena.mapMeshes, false);
    const distToHit = hits.length > 0 ? hits[0].distance : maxRange;
    const endPoint = [
      origin[0] + tempDir.x * distToHit,
      origin[1] + tempDir.y * distToHit,
      origin[2] + tempDir.z * distToHit,
    ];
    localPlayer.spawnTracer(origin, endPoint, wId);

    if (hits.length > 0 && hits[0].face) {
      const worldNormal = hits[0].face.normal
        .clone()
        .transformDirection(hits[0].object.matrixWorld)
        .normalize();
      localPlayer.spawnBulletImpact(hits[0].point, worldNormal);
    }
  }

  const myPos = localPlayer.getPosition();
  const distance = Math.hypot(
    origin[0] - myPos[0],
    origin[1] - myPos[1],
    origin[2] - myPos[2]
  );
  sound.playRemoteShoot(distance, wId);
});

network.on('hit', ({ damage }) => {
  if (!inMatch || isDead) return;

  localHP = Math.max(0, localHP - damage);
  ui.updateHP(localHP);
  ui.flashDamage();
  sound.playDamage();

  if (localHP <= 0) {
    isDead = true;
    isFiring = false;
    localPlayer.setADS(false);
    localPlayer.setInputEnabled(false);
    ui.setScopeVisible(false);

    enemyScore += 1;
    ui.updateScore(myScore, enemyScore);
    respawnTimer = PLAYER_CONFIG.RESPAWN_DELAY_SEC;
    ui.showRespawnCountdown(respawnTimer);
  }
});

network.on('respawn', ({ pos, yaw, hp, killerScored }) => {
  if (!inMatch) return;

  if (killerScored && !creditedKillLocally) {
    myScore += 1;
    ui.updateScore(myScore, enemyScore);
    sound.playKill();
    ui.pushScorePopup('+100 KILL', 'kill');
  }
  creditedKillLocally = false;
  remoteHP = hp;
  remotePlayer.setVisible(true);
  remotePlayer.pushState(pos, yaw, 0, false, WEAPON_IDS.AR, false);
});

// --- Pointer Lock, Mouse & Wheel Listeners ---
document.addEventListener('pointerlockchange', () => {
  const locked = document.pointerLockElement === canvas;
  if (!inMatch) return;

  isPaused = !locked;
  isFiring = false;
  if (!locked) {
    localPlayer.setADS(false);
    ui.setScopeVisible(false);
  }
  localPlayer.setInputEnabled(locked && !isDead);
  ui.showPauseMenu(!locked);
});

document.addEventListener('mousemove', (e) => {
  if (!inMatch || isPaused || isDead) return;
  if (document.pointerLockElement !== canvas) return;
  localPlayer.handleMouseMove(
    e.movementX,
    e.movementY,
    settings.sensitivity,
    settings.adsSensitivity
  );
});

window.addEventListener('contextmenu', (e) => {
  if (inMatch) {
    e.preventDefault();
  }
});

window.addEventListener('mousedown', (e) => {
  if (!inMatch || document.pointerLockElement !== canvas) return;
  if (isDead || isPaused) return;

  sound.unlock();
  if (e.button === 0) {
    isFiring = true;
    attemptShot(false);
  } else if (e.button === 2) {
    if (localPlayer.isMeleeWeapon()) {
      attemptShot(true);
    } else {
      localPlayer.setADS(true);
    }
  }
});

window.addEventListener('mouseup', (e) => {
  if (e.button === 0) {
    isFiring = false;
  } else if (e.button === 2) {
    localPlayer.setADS(false);
  }
});

window.addEventListener('blur', () => {
  isFiring = false;
  localPlayer.setADS(false);
  ui.setScopeVisible(false);
});

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// --- Main Loop ---
let prevTime = performance.now();
let fpsFrameCount = 0;
let fpsSampleStartMs = prevTime;

function animate(now) {
  requestAnimationFrame(animate);

  const dt = Math.min((now - prevTime) / 1000, 0.05);
  prevTime = now;

  fpsFrameCount += 1;
  const fpsElapsed = now - fpsSampleStartMs;
  if (fpsElapsed >= 250) {
    const fps = Math.round((fpsFrameCount * 1000) / fpsElapsed);
    ui.updateFPS(fps);
    fpsFrameCount = 0;
    fpsSampleStartMs = now;
  }

  if (inMatch) {
    if (isDead) {
      respawnTimer -= dt;
      if (respawnTimer <= 0) {
        handleLocalRespawn();
      } else {
        ui.showRespawnCountdown(respawnTimer);
      }
    } else if (isFiring && !isPaused && localPlayer.isAutomaticWeapon()) {
      attemptShot();
    }

    const frame = localPlayer.update(dt, arena.colliders);
    remotePlayer.update(dt);

    if (frame.justJumped) sound.playJump(frame.justBhopped);
    if (frame.justLanded) sound.playLand();
    if (frame.weaponChanged) sound.playWeaponSwitch();
    if (frame.reloadStarted) sound.playReload();

    ui.updateSpeedometer(frame.speedUnits, frame.isBhopSpeed);
    ui.setCrosshairSpread(frame.spreadNormalized);
    ui.setScopeVisible(frame.isScoped && !isPaused && !isDead);
    ui.updateWeaponHUD(frame.weaponHUD);

    if (now - lastStateSentMs >= NETWORK_CONFIG.STATE_SEND_INTERVAL_MS) {
      lastStateSentMs = now;
      sendCurrentState();
    }
  } else if (inAIMode) {
    aiTrainer.step(dt, aiSpeed);
    aiTrainer.applyCamera(camera, aiCamMode);
    localPlayer.updateEffects(dt);
    ui.updateAIStats(aiTrainer.getStats());
  } else {
    lobbyOrbitAngle += dt * 0.16;
    camera.position.set(
      Math.sin(lobbyOrbitAngle) * 16,
      8.5,
      Math.cos(lobbyOrbitAngle) * 18
    );
    camera.lookAt(0, 1.4, 0);
  }

  renderer.render(scene, camera);
}

requestAnimationFrame(animate);
