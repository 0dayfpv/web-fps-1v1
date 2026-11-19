import * as THREE from 'three';
import {
  HITBOX_CONFIG,
  PLAYER_CONFIG,
  WEAPON_IDS,
  WEAPONS,
} from './constants.js';
import { CS2PhysicsController } from './physics.js';
import { RemotePlayer } from './player.js';

const SIM_DT = 1 / 30;
const POPULATION_SIZE = 16;
const ELITE_COUNT = 3;
const MATCHES_PER_GEN = POPULATION_SIZE / 2; // 8
const MATCH_MAX_TIME_SEC = 12;
const MATCH_KILL_LIMIT = 3;
const MAX_HISTORY_POINTS = 60;

const INPUT_SIZE = 18;
const HIDDEN_SIZE = 24;
const OUTPUT_SIZE = 7;

const LIDAR_MAX_DIST = 16;
const LIDAR_ANGLES = new Float32Array([
  0,
  (30 * Math.PI) / 180,
  (-30 * Math.PI) / 180,
  (65 * Math.PI) / 180,
  (-65 * Math.PI) / 180,
  (120 * Math.PI) / 180,
  (-120 * Math.PI) / 180,
]);

const MUTATION_RATE = 0.18;
const BASE_MUTATION_SIGMA = 0.28;
const MIN_MUTATION_SIGMA = 0.10;
const WEIGHT_CLAMP = 5.0;
const PITCH_CLAMP = 1.2;

const AR_WEAPON = WEAPONS[WEAPON_IDS.AR];
const AR_COOLDOWN_SEC = AR_WEAPON.fireCooldownMs / 1000;
const AR_RELOAD_SEC = AR_WEAPON.reloadTimeMs / 1000;

// Box-Muller Gaussian RNG with cached spare value (zero GC)
let _hasSpareGauss = false;
let _spareGauss = 0;

function gaussianRandom() {
  if (_hasSpareGauss) {
    _hasSpareGauss = false;
    return _spareGauss;
  }
  let u = 0;
  let v = 0;
  let s = 0;
  do {
    u = Math.random() * 2 - 1;
    v = Math.random() * 2 - 1;
    s = u * u + v * v;
  } while (s >= 1 || s === 0);
  const mul = Math.sqrt((-2.0 * Math.log(s)) / s);
  _spareGauss = v * mul;
  _hasSpareGauss = true;
  return u * mul;
}

function normalizeAngle(a) {
  let d = a;
  while (d > Math.PI) d -= Math.PI * 2;
  while (d < -Math.PI) d += Math.PI * 2;
  return d;
}

function clamp(v, min, max) {
  return v < min ? min : v > max ? max : v;
}

/**
 * Pure Float32Array 2-layer MLP (18 -> 24 tanh -> 7 tanh) with Xavier init,
 * zero-allocation forward pass, crossover, and Gaussian mutation.
 */
export class NeuralNet {
  constructor(
    inputSize = INPUT_SIZE,
    hiddenSize = HIDDEN_SIZE,
    outputSize = OUTPUT_SIZE,
    skipInit = false
  ) {
    this.inputSize = inputSize;
    this.hiddenSize = hiddenSize;
    this.outputSize = outputSize;

    this.w1 = new Float32Array(hiddenSize * inputSize);
    this.b1 = new Float32Array(hiddenSize);
    this.w2 = new Float32Array(outputSize * hiddenSize);
    this.b2 = new Float32Array(outputSize);
    this._hidden = new Float32Array(hiddenSize);

    if (!skipInit) {
      this._initXavier();
    }
  }

  _initXavier() {
    const scale1 = Math.sqrt(2.0 / (this.inputSize + this.hiddenSize));
    for (let i = 0; i < this.w1.length; i++) {
      this.w1[i] = gaussianRandom() * scale1;
    }
    this.b1.fill(0);

    const scale2 = Math.sqrt(2.0 / (this.hiddenSize + this.outputSize));
    for (let i = 0; i < this.w2.length; i++) {
      this.w2[i] = gaussianRandom() * scale2;
    }
    this.b2.fill(0);
  }

  forward(inputs, out) {
    const inSize = this.inputSize;
    const hidSize = this.hiddenSize;
    const outSize = this.outputSize;
    const w1 = this.w1;
    const b1 = this.b1;
    const w2 = this.w2;
    const b2 = this.b2;
    const hidden = this._hidden;

    for (let h = 0; h < hidSize; h++) {
      let sum = b1[h];
      const rowOffset = h * inSize;
      for (let i = 0; i < inSize; i++) {
        sum += w1[rowOffset + i] * inputs[i];
      }
      hidden[h] = Math.tanh(sum);
    }

    for (let o = 0; o < outSize; o++) {
      let sum = b2[o];
      const rowOffset = o * hidSize;
      for (let h = 0; h < hidSize; h++) {
        sum += w2[rowOffset + h] * hidden[h];
      }
      out[o] = Math.tanh(sum);
    }

    return out;
  }

  clone() {
    const copy = new NeuralNet(
      this.inputSize,
      this.hiddenSize,
      this.outputSize,
      true
    );
    copy.w1.set(this.w1);
    copy.b1.set(this.b1);
    copy.w2.set(this.w2);
    copy.b2.set(this.b2);
    return copy;
  }

  toJSON() {
    return {
      inputSize: this.inputSize,
      hiddenSize: this.hiddenSize,
      outputSize: this.outputSize,
      w1: Array.from(this.w1, (v) => Math.round(v * 1e5) / 1e5),
      b1: Array.from(this.b1, (v) => Math.round(v * 1e5) / 1e5),
      w2: Array.from(this.w2, (v) => Math.round(v * 1e5) / 1e5),
      b2: Array.from(this.b2, (v) => Math.round(v * 1e5) / 1e5),
    };
  }

  static fromJSON(data) {
    if (!data || typeof data !== 'object') {
      throw new Error('Geçersiz sinir ağı verisi.');
    }
    const inSize = Number(data.inputSize);
    const hidSize = Number(data.hiddenSize);
    const outSize = Number(data.outputSize);
    if (inSize !== INPUT_SIZE || hidSize !== HIDDEN_SIZE || outSize !== OUTPUT_SIZE) {
      throw new Error(
        `Uyumsuz model boyutu (${inSize}x${hidSize}x${outSize}, beklenen ${INPUT_SIZE}x${HIDDEN_SIZE}x${OUTPUT_SIZE}).`
      );
    }
    if (
      !Array.isArray(data.w1) || data.w1.length !== hidSize * inSize ||
      !Array.isArray(data.b1) || data.b1.length !== hidSize ||
      !Array.isArray(data.w2) || data.w2.length !== outSize * hidSize ||
      !Array.isArray(data.b2) || data.b2.length !== outSize
    ) {
      throw new Error('Model ağırlık dizileri eksik veya bozuk.');
    }

    const net = new NeuralNet(inSize, hidSize, outSize, true);
    for (let i = 0; i < net.w1.length; i++) {
      const v = Number(data.w1[i]);
      if (!Number.isFinite(v)) throw new Error('Geçersiz ağırlık değeri (w1).');
      net.w1[i] = v;
    }
    for (let i = 0; i < net.b1.length; i++) {
      const v = Number(data.b1[i]);
      if (!Number.isFinite(v)) throw new Error('Geçersiz ağırlık değeri (b1).');
      net.b1[i] = v;
    }
    for (let i = 0; i < net.w2.length; i++) {
      const v = Number(data.w2[i]);
      if (!Number.isFinite(v)) throw new Error('Geçersiz ağırlık değeri (w2).');
      net.w2[i] = v;
    }
    for (let i = 0; i < net.b2.length; i++) {
      const v = Number(data.b2[i]);
      if (!Number.isFinite(v)) throw new Error('Geçersiz ağırlık değeri (b2).');
      net.b2[i] = v;
    }
    return net;
  }

  static crossover(a, b) {
    const child = new NeuralNet(
      a.inputSize,
      a.hiddenSize,
      a.outputSize,
      true
    );
    for (let i = 0; i < child.w1.length; i++) {
      child.w1[i] = Math.random() < 0.5 ? a.w1[i] : b.w1[i];
    }
    for (let i = 0; i < child.b1.length; i++) {
      child.b1[i] = Math.random() < 0.5 ? a.b1[i] : b.b1[i];
    }
    for (let i = 0; i < child.w2.length; i++) {
      child.w2[i] = Math.random() < 0.5 ? a.w2[i] : b.w2[i];
    }
    for (let i = 0; i < child.b2.length; i++) {
      child.b2[i] = Math.random() < 0.5 ? a.b2[i] : b.b2[i];
    }
    return child;
  }

  mutate(rate = MUTATION_RATE, sigma = BASE_MUTATION_SIGMA) {
    const mutateArr = (arr) => {
      for (let i = 0; i < arr.length; i++) {
        if (Math.random() < rate) {
          arr[i] = clamp(
            arr[i] + gaussianRandom() * sigma,
            -WEIGHT_CLAMP,
            WEIGHT_CLAMP
          );
        }
      }
    };
    mutateArr(this.w1);
    mutateArr(this.b1);
    mutateArr(this.w2);
    mutateArr(this.b2);
  }
}

/**
 * Fast slab-method ray-vs-AABB intersection (zero GC allocations).
 * Returns hit distance t in [0, maxDist], or -1 if no intersection.
 */
export function rayIntersectsBox3(ox, oy, oz, dx, dy, dz, maxDist, box) {
  let tMin = 0;
  let tMax = maxDist;

  // X slab
  if (Math.abs(dx) < 1e-9) {
    if (ox < box.min.x || ox > box.max.x) return -1;
  } else {
    const invD = 1 / dx;
    let t1 = (box.min.x - ox) * invD;
    let t2 = (box.max.x - ox) * invD;
    if (t1 > t2) {
      const tmp = t1;
      t1 = t2;
      t2 = tmp;
    }
    if (t1 > tMin) tMin = t1;
    if (t2 < tMax) tMax = t2;
    if (tMin > tMax) return -1;
  }

  // Y slab
  if (Math.abs(dy) < 1e-9) {
    if (oy < box.min.y || oy > box.max.y) return -1;
  } else {
    const invD = 1 / dy;
    let t1 = (box.min.y - oy) * invD;
    let t2 = (box.max.y - oy) * invD;
    if (t1 > t2) {
      const tmp = t1;
      t1 = t2;
      t2 = tmp;
    }
    if (t1 > tMin) tMin = t1;
    if (t2 < tMax) tMax = t2;
    if (tMin > tMax) return -1;
  }

  // Z slab
  if (Math.abs(dz) < 1e-9) {
    if (oz < box.min.z || oz > box.max.z) return -1;
  } else {
    const invD = 1 / dz;
    let t1 = (box.min.z - oz) * invD;
    let t2 = (box.max.z - oz) * invD;
    if (t1 > t2) {
      const tmp = t1;
      t1 = t2;
      t2 = tmp;
    }
    if (t1 > tMin) tMin = t1;
    if (t2 < tMax) tMax = t2;
    if (tMin > tMax) return -1;
  }

  return tMin >= 0 && tMin <= maxDist ? tMin : -1;
}

/**
 * Fast slab-method ray-vs-AABB returning distance + outward face normal (zero GC).
 */
function rayIntersectsBox3WithNormal(ox, oy, oz, dx, dy, dz, maxDist, box, outNormal) {
  let tMin = 0;
  let tMax = maxDist;
  let nx = 0;
  let ny = 1;
  let nz = 0;

  // X slab
  if (Math.abs(dx) < 1e-9) {
    if (ox < box.min.x || ox > box.max.x) return -1;
  } else {
    const invD = 1 / dx;
    let t1 = (box.min.x - ox) * invD;
    let t2 = (box.max.x - ox) * invD;
    let sign = -1;
    if (t1 > t2) {
      const tmp = t1;
      t1 = t2;
      t2 = tmp;
      sign = 1;
    }
    if (t1 > tMin) {
      tMin = t1;
      nx = sign;
      ny = 0;
      nz = 0;
    }
    if (t2 < tMax) tMax = t2;
    if (tMin > tMax) return -1;
  }

  // Y slab
  if (Math.abs(dy) < 1e-9) {
    if (oy < box.min.y || oy > box.max.y) return -1;
  } else {
    const invD = 1 / dy;
    let t1 = (box.min.y - oy) * invD;
    let t2 = (box.max.y - oy) * invD;
    let sign = -1;
    if (t1 > t2) {
      const tmp = t1;
      t1 = t2;
      t2 = tmp;
      sign = 1;
    }
    if (t1 > tMin) {
      tMin = t1;
      nx = 0;
      ny = sign;
      nz = 0;
    }
    if (t2 < tMax) tMax = t2;
    if (tMin > tMax) return -1;
  }

  // Z slab
  if (Math.abs(dz) < 1e-9) {
    if (oz < box.min.z || oz > box.max.z) return -1;
  } else {
    const invD = 1 / dz;
    let t1 = (box.min.z - oz) * invD;
    let t2 = (box.max.z - oz) * invD;
    let sign = -1;
    if (t1 > t2) {
      const tmp = t1;
      t1 = t2;
      t2 = tmp;
      sign = 1;
    }
    if (t1 > tMin) {
      tMin = t1;
      nx = 0;
      ny = 0;
      nz = sign;
    }
    if (t2 < tMax) tMax = t2;
    if (tMin > tMax) return -1;
  }

  if (tMin >= 0 && tMin <= maxDist) {
    outNormal.x = nx;
    outNormal.y = ny;
    outNormal.z = nz;
    return tMin;
  }
  return -1;
}

/**
 * Raycast against all arena AABB colliders (+ floor plane y = 0).
 * Returns closest hit distance in [0, maxDist], or maxDist if unobstructed.
 */
function raycastArenaDist(ox, oy, oz, dx, dy, dz, maxDist, colliders) {
  let best = maxDist;

  if (dy < -1e-6 && oy > 0) {
    const tFloor = -oy / dy;
    if (tFloor >= 0 && tFloor < best) {
      best = tFloor;
    }
  }

  for (let i = 0; i < colliders.length; i++) {
    const t = rayIntersectsBox3(ox, oy, oz, dx, dy, dz, best, colliders[i]);
    if (t >= 0 && t < best) {
      best = t;
    }
  }

  return best;
}

const _tmpNormal = { x: 0, y: 1, z: 0 };

/**
 * Raycast against arena colliders + floor, writing closest hit normal into outNormal.
 * Returns closest hit distance, or -1 if no hit within maxDist.
 */
function raycastArenaWithNormal(ox, oy, oz, dx, dy, dz, maxDist, colliders, outNormal) {
  let best = maxDist;
  let hit = false;

  if (dy < -1e-6 && oy > 0) {
    const tFloor = -oy / dy;
    if (tFloor >= 0 && tFloor < best) {
      best = tFloor;
      outNormal.x = 0;
      outNormal.y = 1;
      outNormal.z = 0;
      hit = true;
    }
  }

  for (let i = 0; i < colliders.length; i++) {
    const t = rayIntersectsBox3WithNormal(
      ox,
      oy,
      oz,
      dx,
      dy,
      dz,
      best,
      colliders[i],
      _tmpNormal
    );
    if (t >= 0 && t < best) {
      best = t;
      outNormal.x = _tmpNormal.x;
      outNormal.y = _tmpNormal.y;
      outNormal.z = _tmpNormal.z;
      hit = true;
    }
  }

  return hit ? best : -1;
}

/**
 * Fast Line-of-Sight check between two 3D points against arena colliders (zero GC).
 */
function hasLineOfSight(ax, ay, az, bx, by, bz, colliders) {
  const rx = bx - ax;
  const ry = by - ay;
  const rz = bz - az;
  const dist = Math.hypot(rx, ry, rz);
  if (dist < 1e-4) return true;
  const inv = 1 / dist;
  const dx = rx * inv;
  const dy = ry * inv;
  const dz = rz * inv;
  const maxD = dist - 0.08;
  for (let i = 0; i < colliders.length; i++) {
    const t = rayIntersectsBox3(ax, ay, az, dx, dy, dz, maxD, colliders[i]);
    if (t >= 0) return false;
  }
  return true;
}

// Reusable scratch AABB for opponent head/body hitbox checks (zero GC)
const _hitboxScratch = {
  min: { x: 0, y: 0, z: 0 },
  max: { x: 0, y: 0, z: 0 },
};

/**
 * Exact ray-vs-opponent hitbox check (head & body matching HITBOX_CONFIG, standing & crouched).
 * Transforms ray into opponent's local yaw frame for accurate oriented-box hit detection.
 */
function raycastOpponentHitbox(ox, oy, oz, dx, dy, dz, maxDist, target, outHit) {
  outHit.hit = false;
  outHit.isHead = false;
  outHit.dist = maxDist;

  const px = target.physics.pos.x;
  const py = target.physics.pos.y;
  const pz = target.physics.pos.z;

  // Quick bounding-sphere reject
  const cx = px - ox;
  const cy = py + 0.9 - oy;
  const cz = pz - oz;
  const proj = cx * dx + cy * dy + cz * dz;
  if (proj < -1.2 || proj > maxDist + 1.2) return false;

  // Rotate ray origin & direction into opponent local space (-target.yaw around Y)
  const cosY = Math.cos(target.yaw);
  const sinY = Math.sin(target.yaw);

  const relOx = ox - px;
  const relOy = oy - py;
  const relOz = oz - pz;

  const lox = relOx * cosY - relOz * sinY;
  const loy = relOy;
  const loz = relOx * sinY + relOz * cosY;

  const ldx = dx * cosY - dz * sinY;
  const ldy = dy;
  const ldz = dx * sinY + dz * cosY;

  const crouched = target.physics.isCrouching;
  const headCfg = HITBOX_CONFIG.HEAD;
  const bodyCfg = HITBOX_CONFIG.BODY;

  // 1. Head hitbox
  const headCy = crouched ? headCfg.crouchCenterY : headCfg.centerY;
  const headHW = headCfg.width * 0.5;
  const headHH = headCfg.height * 0.5;
  const headHD = headCfg.depth * 0.5;
  _hitboxScratch.min.x = -headHW;
  _hitboxScratch.max.x = headHW;
  _hitboxScratch.min.y = headCy - headHH;
  _hitboxScratch.max.y = headCy + headHH;
  _hitboxScratch.min.z = -headHD;
  _hitboxScratch.max.z = headHD;

  const tHead = rayIntersectsBox3(lox, loy, loz, ldx, ldy, ldz, maxDist, _hitboxScratch);

  // 2. Body hitbox
  const bodyH = crouched ? bodyCfg.crouchHeight : bodyCfg.height;
  const bodyCy = crouched ? bodyCfg.crouchCenterY : bodyCfg.centerY;
  const bodyHW = bodyCfg.width * 0.5;
  const bodyHH = bodyH * 0.5;
  const bodyHD = bodyCfg.depth * 0.5;
  _hitboxScratch.min.x = -bodyHW;
  _hitboxScratch.max.x = bodyHW;
  _hitboxScratch.min.y = bodyCy - bodyHH;
  _hitboxScratch.max.y = bodyCy + bodyHH;
  _hitboxScratch.min.z = -bodyHD;
  _hitboxScratch.max.z = bodyHD;

  const tBody = rayIntersectsBox3(lox, loy, loz, ldx, ldy, ldz, maxDist, _hitboxScratch);

  if (tHead >= 0 && (tBody < 0 || tHead <= tBody + 0.06)) {
    outHit.hit = true;
    outHit.isHead = true;
    outHit.dist = tHead;
    return true;
  }
  if (tBody >= 0) {
    outHit.hit = true;
    outHit.isHead = false;
    outHit.dist = tBody;
    return true;
  }
  return false;
}

/**
 * Tint a RemotePlayer's accent materials so Bot Alpha (blue/cyan) and Bot Beta (red/orange)
 * are clearly distinguishable in the live 3D arena.
 */
function tintRemotePlayer(remotePlayer, theme) {
  const visited = new Set();
  remotePlayer.group.traverse((obj) => {
    if (!obj.isMesh || !obj.material) return;
    const mat = obj.material;
    if (visited.has(mat)) return;
    visited.add(mat);
    if (!mat.color) return;

    const hex = mat.color.getHex();
    if (theme === 'blue') {
      if (hex === 0x8f2929) {
        mat.color.setHex(0x1f5f8b);
        if (mat.emissive) mat.emissive.setHex(0x061d2e);
      } else if (hex === 0xd9363e) {
        mat.color.setHex(0x22d3ee);
        if (mat.emissive) mat.emissive.setHex(0x083344);
      } else if (hex === 0xff464d) {
        mat.color.setHex(0x38bdf8);
      }
    } else if (theme === 'red') {
      if (hex === 0x8f2929) {
        mat.color.setHex(0xa83228);
        if (mat.emissive) mat.emissive.setHex(0x2e0906);
      } else if (hex === 0xd9363e) {
        mat.color.setHex(0xf97316);
        if (mat.emissive) mat.emissive.setHex(0x4a1804);
      } else if (hex === 0xff464d) {
        mat.color.setHex(0xff6b35);
      }
    }
  });
}

function createAgentState(id) {
  return {
    id,
    physics: new CS2PhysicsController(),
    yaw: 0,
    pitch: 0,
    yawVel: 0,
    pitchVel: 0,
    jumpCooldown: 0,
    hp: PLAYER_CONFIG.MAX_HP,
    ammo: AR_WEAPON.magSize,
    fireCooldown: 0,
    reloadTimer: 0,
    kills: 0,
    fitness: 0,
    brainIndex: 0,
    obs: new Float32Array(INPUT_SIZE),
    out: new Float32Array(OUTPUT_SIZE),
    physInput: {
      forward: 0,
      right: 0,
      yaw: 0,
      crouch: false,
      weaponSpeedMult: AR_WEAPON.speedMult,
    },
  };
}

/**
 * In-Browser Self-Play Neuroevolution AI Arena running on CS2PhysicsController
 * and arena AABB colliders.
 */
export class AIArenaTrainer {
  constructor(scene, arena, onTracer, onImpact, onSound) {
    this.scene = scene;
    this.arena = arena;
    this.colliders = arena?.colliders || [];
    this.spawnPoints = arena?.spawnPoints || [
      { pos: [0, 0, 17.5], yaw: 0 },
      { pos: [0, 0, -17.5], yaw: Math.PI },
    ];

    this.onTracer = typeof onTracer === 'function' ? onTracer : null;
    this.onImpact = typeof onImpact === 'function' ? onImpact : null;
    this.onSound = typeof onSound === 'function' ? onSound : null;

    // Two live 3D tactical operatives
    this.visualA = new RemotePlayer(scene);
    this.visualB = new RemotePlayer(scene);
    tintRemotePlayer(this.visualA, 'blue');
    tintRemotePlayer(this.visualB, 'red');
    this.visualA.setVisible(false);
    this.visualB.setVisible(false);

    this.agentA = createAgentState('botA');
    this.agentB = createAgentState('botB');

    // Toggleable skills for Bot Alpha (Bot Beta keeps all abilities enabled)
    this.botASkills = {
      shoot: true,
      aim: true,
      move: true,
      jump: true,
      crouch: true,
    };

    this.active = false;
    this._accumulator = 0;
    this._orbitAngle = 0.6;
    this._camTarget = new THREE.Vector3(0, 1.4, 0);
    this._camDesiredPos = new THREE.Vector3(16, 12, 16);
    this._camDesiredTarget = new THREE.Vector3(0, 1.4, 0);
    this._lastCameraMode = 'overview';

    // Reusable scratch structs for zero-GC simulation
    this._hitScratch = { hit: false, isHead: false, dist: 0 };
    this._wallNormalScratch = { x: 0, y: 1, z: 0 };

    // Neuroevolution state
    this.population = new Array(POPULATION_SIZE);
    this.fitnesses = new Float32Array(POPULATION_SIZE);
    this.pairOrder = new Int32Array(POPULATION_SIZE);

    this.generation = 1;
    this.matchIndex = 0;
    this.matchTime = 0;
    this.bestFitness = 0;
    this.avgFitness = 0;
    this.currentBestFitness = 0;
    this.totalKills = 0;
    this.totalKillsA = 0;
    this.totalKillsB = 0;
    this.killsInGen = 0;
    this.history = [];

    this.reset();
  }

  reset() {
    for (let i = 0; i < POPULATION_SIZE; i++) {
      this.population[i] = new NeuralNet(INPUT_SIZE, HIDDEN_SIZE, OUTPUT_SIZE);
      this.fitnesses[i] = 0;
      this.pairOrder[i] = i;
    }

    this.generation = 1;
    this.matchIndex = 0;
    this.matchTime = 0;
    this.bestFitness = 0;
    this.avgFitness = 0;
    this.currentBestFitness = 0;
    this.totalKills = 0;
    this.totalKillsA = 0;
    this.totalKillsB = 0;
    this.killsInGen = 0;
    this.history = [];
    this._accumulator = 0;

    this._shufflePairs();
    this._startMatch(0);
    this._syncVisuals(0.016, true);
  }

  setActive(active) {
    this.active = Boolean(active);
    if (!this.active) {
      this.visualA.setVisible(false);
      this.visualB.setVisible(false);
    } else {
      this._updateBotVisibility(this._lastCameraMode);
      this._syncVisuals(0.016, true);
    }
  }

  _updateBotVisibility(mode) {
    if (!this.active) {
      this.visualA.setVisible(false);
      this.visualB.setVisible(false);
      return;
    }
    this.visualA.setVisible(mode !== 'botA');
    this.visualB.setVisible(mode !== 'botB');
  }

  _shufflePairs() {
    for (let i = 0; i < POPULATION_SIZE; i++) {
      this.pairOrder[i] = i;
    }
    for (let i = POPULATION_SIZE - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = this.pairOrder[i];
      this.pairOrder[i] = this.pairOrder[j];
      this.pairOrder[j] = tmp;
    }
  }

  _pickOppositeSpawns() {
    const sp = this.spawnPoints;
    if (sp.length < 2) {
      return [
        { pos: [0, 0, 17.5], yaw: 0 },
        { pos: [0, 0, -17.5], yaw: Math.PI },
      ];
    }
    const idxA = Math.floor(Math.random() * sp.length);
    const spawnA = sp[idxA];
    const spawnB =
      typeof this.arena?.getFarthestSpawn === 'function'
        ? this.arena.getFarthestSpawn(spawnA.pos)
        : sp[(idxA + 1) % sp.length];
    return [spawnA, spawnB];
  }

  _spawnAgent(agent, spawn) {
    agent.physics.reset(spawn.pos);
    agent.yaw = spawn.yaw;
    agent.pitch = 0;
    agent.yawVel = 0;
    agent.pitchVel = 0;
    agent.jumpCooldown = 0;
    agent.hp = PLAYER_CONFIG.MAX_HP;
    agent.ammo = AR_WEAPON.magSize;
    agent.fireCooldown = 0;
    agent.reloadTimer = 0;
  }

  _startMatch(matchIdx) {
    this.matchIndex = matchIdx;
    this.matchTime = 0;

    const idxA = this.pairOrder[matchIdx * 2];
    const idxB = this.pairOrder[matchIdx * 2 + 1];

    this.agentA.brainIndex = idxA;
    this.agentB.brainIndex = idxB;
    this.agentA.kills = 0;
    this.agentB.kills = 0;
    this.agentA.fitness = 0;
    this.agentB.fitness = 0;

    const [spawnA, spawnB] = this._pickOppositeSpawns();
    this._spawnAgent(this.agentA, spawnA);
    this._spawnAgent(this.agentB, spawnB);
  }

  _finishMatch() {
    this.fitnesses[this.agentA.brainIndex] = this.agentA.fitness;
    this.fitnesses[this.agentB.brainIndex] = this.agentB.fitness;

    const matchMax = Math.max(this.agentA.fitness, this.agentB.fitness);
    if (matchMax > this.currentBestFitness) {
      this.currentBestFitness = matchMax;
    }

    const nextMatch = this.matchIndex + 1;
    if (nextMatch >= MATCHES_PER_GEN) {
      this._evolveGeneration();
      this._startMatch(0);
    } else {
      this._startMatch(nextMatch);
    }
  }

  _tournamentSelect(sortedIndices, k = 3) {
    let bestRank = POPULATION_SIZE;
    for (let i = 0; i < k; i++) {
      const rank = Math.floor(Math.random() * POPULATION_SIZE);
      if (rank < bestRank) {
        bestRank = rank;
      }
    }
    return this.population[sortedIndices[bestRank]];
  }

  _evolveGeneration() {
    const indices = new Array(POPULATION_SIZE);
    let sumFit = 0;
    for (let i = 0; i < POPULATION_SIZE; i++) {
      indices[i] = i;
      sumFit += this.fitnesses[i];
    }

    indices.sort((a, b) => this.fitnesses[b] - this.fitnesses[a]);

    const genBest = this.fitnesses[indices[0]];
    const genAvg = sumFit / POPULATION_SIZE;

    if (this.history.length === 0 || genBest > this.bestFitness) {
      this.bestFitness = genBest;
    }
    this.avgFitness = genAvg;
    this.currentBestFitness = genBest;

    this.history.push(Math.round(genBest * 10) / 10);
    if (this.history.length > MAX_HISTORY_POINTS) {
      this.history.shift();
    }

    // Adaptive mutation sigma gently decays as fitness improves
    const adaptiveSigma = Math.max(
      MIN_MUTATION_SIGMA,
      BASE_MUTATION_SIGMA * Math.exp(-Math.max(0, genBest) / 1200)
    );

    const nextPop = new Array(POPULATION_SIZE);

    // Keep top 3 elites unchanged
    for (let i = 0; i < ELITE_COUNT; i++) {
      nextPop[i] = this.population[indices[i]].clone();
    }

    // Fill remaining 13 via tournament selection + crossover + mutation
    for (let i = ELITE_COUNT; i < POPULATION_SIZE; i++) {
      const parentA = this._tournamentSelect(indices, 3);
      const parentB = this._tournamentSelect(indices, 3);
      const child = NeuralNet.crossover(parentA, parentB);
      child.mutate(MUTATION_RATE, adaptiveSigma);
      nextPop[i] = child;
    }

    this.population = nextPop;
    this.fitnesses.fill(0);
    this.generation += 1;
    this.killsInGen = 0;
    this.currentBestFitness = 0;
    this._shufflePairs();
  }

  _buildObservations(agent, enemy) {
    const obs = agent.obs;
    const phys = agent.physics;
    const ePhys = enemy.physics;

    const ax = phys.pos.x;
    const ay = phys.pos.y + phys.eyeHeight;
    const az = phys.pos.z;

    const ex = ePhys.pos.x;
    const eHeadY =
      ePhys.pos.y +
      (ePhys.isCrouching
        ? HITBOX_CONFIG.HEAD.crouchCenterY
        : HITBOX_CONFIG.HEAD.centerY);
    const ez = ePhys.pos.z;

    const tx = ex - ax;
    const ty = eHeadY - ay;
    const tz = ez - az;
    const horizDist = Math.hypot(tx, tz);
    const dist3D = Math.hypot(tx, ty, tz);

    const targetYaw = Math.atan2(-tx, -tz);
    const yawDiff = normalizeAngle(targetYaw - agent.yaw);
    const sinYawDiff = Math.sin(yawDiff);
    const cosYawDiff = Math.cos(yawDiff);

    const targetPitch = Math.atan2(ty, Math.max(horizDist, 0.01));
    const pitchDiff = clamp(targetPitch - agent.pitch, -1, 1);

    const los = hasLineOfSight(ax, ay, az, ex, eHeadY, ez, this.colliders);

    // 1–2: velocity normalized
    obs[0] = clamp(phys.vel.x / 8, -1, 1);
    obs[1] = clamp(phys.vel.z / 8, -1, 1);
    // 3: grounded
    obs[2] = phys.grounded ? 1 : -1;
    // 4: hp
    obs[3] = agent.hp / PLAYER_CONFIG.MAX_HP;
    // 5: ammo
    obs[4] = agent.ammo / AR_WEAPON.magSize;
    // 6: crouch
    obs[5] = phys.isCrouching ? 1 : -1;
    // 7–8: enemy bearing in agent's facing frame
    obs[6] = sinYawDiff;
    obs[7] = cosYawDiff;
    // 9: enemy head pitch diff
    obs[8] = pitchDiff;
    // 10: distance to enemy
    obs[9] = Math.min(dist3D / 40, 1);
    // 11: real raycast Line-of-Sight
    obs[10] = los ? 1 : -1;

    // 12–18: 7 horizontal lidar rays at 0°, ±30°, ±65°, ±120°
    const lidarY = phys.pos.y + Math.min(phys.eyeHeight * 0.72, 1.15);
    for (let i = 0; i < 7; i++) {
      const rayYaw = agent.yaw + LIDAR_ANGLES[i];
      const rdx = -Math.sin(rayYaw);
      const rdz = -Math.cos(rayYaw);
      const d = raycastArenaDist(
        ax,
        lidarY,
        az,
        rdx,
        0,
        rdz,
        LIDAR_MAX_DIST,
        this.colliders
      );
      obs[11 + i] = d / LIDAR_MAX_DIST;
    }

    return { los, cosYawDiff };
  }

  _stepAgent(agent, enemy, dt, emitFX) {
    const { los, cosYawDiff } = this._buildObservations(agent, enemy);

    const brain = this.population[agent.brainIndex];
    const out = brain.forward(agent.obs, agent.out);

    // Decode 7 continuous outputs (apply Bot Alpha skill mask; Bot Beta untouched)
    const skills = agent === this.agentA ? this.botASkills : null;
    const canMove = !skills || skills.move;
    const canAim = !skills || skills.aim;
    const forward = canMove ? (out[0] > 0.25 ? 1 : out[0] < -0.25 ? -1 : 0) : 0;
    const right = canMove ? (out[1] > 0.25 ? 1 : out[1] < -0.25 ? -1 : 0) : 0;
    const wantsJump =
      (!skills || skills.jump) && out[2] > 0.62 && agent.jumpCooldown <= 0;
    const wantsCrouch = (!skills || skills.crouch) && out[3] > 0.55;
    const wantsShoot = (!skills || skills.shoot) && out[6] > 0.25;

    // Smooth human-like angular velocity with deadzone (prevents high-sens screen jitter)
    const rawYaw = canAim && Math.abs(out[4]) > 0.08 ? out[4] : 0;
    const rawPitch = canAim && Math.abs(out[5]) > 0.08 ? out[5] : 0;
    const targetYawVel = rawYaw * 2.8;
    const targetPitchVel = rawPitch * 1.45;
    const prevYawVel = agent.yawVel;
    const aimSmooth = 1 - Math.exp(-11 * dt);
    agent.yawVel += (targetYawVel - agent.yawVel) * aimSmooth;
    agent.pitchVel += (targetPitchVel - agent.pitchVel) * aimSmooth;

    agent.yaw = normalizeAngle(agent.yaw + agent.yawVel * dt);
    agent.pitch = clamp(agent.pitch + agent.pitchVel * dt, -PITCH_CLAMP, PITCH_CLAMP);

    if (agent.jumpCooldown > 0) {
      agent.jumpCooldown = Math.max(0, agent.jumpCooldown - dt);
    }
    if (wantsJump) {
      agent.physics.queueJump();
    }

    agent.physInput.forward = forward;
    agent.physInput.right = right;
    agent.physInput.yaw = agent.yaw;
    agent.physInput.crouch = wantsCrouch;
    agent.physInput.weaponSpeedMult = AR_WEAPON.speedMult;

    const physResult = agent.physics.step(dt, agent.physInput, this.colliders);

    if (physResult.justJumped) {
      agent.jumpCooldown = 0.65;
      // Discourage pointless pogo-stick jumping in place
      if (physResult.horizSpeed < 2.2) {
        agent.fitness -= 0.5;
      }
      if (emitFX && this.onSound) {
        this.onSound('jump', { bot: agent.id });
      }
    }

    // Weapon cooldown & auto-reload timers
    if (agent.fireCooldown > 0) {
      agent.fireCooldown = Math.max(0, agent.fireCooldown - dt);
    }
    if (agent.reloadTimer > 0) {
      agent.reloadTimer -= dt;
      if (agent.reloadTimer <= 0) {
        agent.reloadTimer = 0;
        agent.ammo = AR_WEAPON.magSize;
      }
    }

    // --- Fitness Shaping ---
    // Line-of-Sight aim alignment shaping (reward steady tracking on target)
    if (los && cosYawDiff > 0.7) {
      agent.fitness += 0.045 * cosYawDiff;
      if (cosYawDiff > 0.94 && Math.abs(agent.yawVel) < 0.8) {
        agent.fitness += 0.025;
      }
    }

    // Penalize excessive spinning in circles and high-frequency aim jitter
    const absYawVel = Math.abs(agent.yawVel);
    if (absYawVel > 1.8) {
      agent.fitness -= 0.018 * (absYawVel - 1.8);
    }
    const yawAccel = Math.abs(agent.yawVel - prevYawVel);
    if (yawAccel > 0.6) {
      agent.fitness -= 0.012 * yawAccel;
    }

    // Movement exploration + anti-camping stall penalty
    const horizSpeed = physResult.horizSpeed;
    agent.fitness += 0.008 * Math.min(horizSpeed / 6, 1);
    if (!los && horizSpeed < 0.35) {
      agent.fitness -= 0.01;
    }

    // --- Hitscan Shooting ---
    let matchEnded = false;
    if (wantsShoot && agent.fireCooldown <= 0 && agent.reloadTimer <= 0 && agent.ammo > 0) {
      agent.ammo -= 1;
      agent.fireCooldown = AR_COOLDOWN_SEC;
      if (agent.ammo <= 0) {
        agent.reloadTimer = AR_RELOAD_SEC;
      }

      // Firing shaping reward / wall-spam penalty
      if (los && cosYawDiff > 0.92) {
        agent.fitness += 0.3;
      } else if (!los) {
        agent.fitness -= 0.08;
      }

      // Compute aim ray + realistic CS2 movement spread
      let spread = AR_WEAPON.spreadBase;
      if (!agent.physics.grounded) {
        spread += AR_WEAPON.spreadAir;
      } else if (horizSpeed > 1.2) {
        spread += AR_WEAPON.spreadMove * Math.min(horizSpeed / 6.0, 1);
      }
      if (agent.physics.isCrouching) {
        spread *= AR_WEAPON.spreadCrouchMult;
      }

      const shotYaw = agent.yaw + gaussianRandom() * spread;
      const shotPitch = clamp(
        agent.pitch + gaussianRandom() * spread,
        -PLAYER_CONFIG.PITCH_LIMIT,
        PLAYER_CONFIG.PITCH_LIMIT
      );

      const cosP = Math.cos(shotPitch);
      const dx = -Math.sin(shotYaw) * cosP;
      const dy = Math.sin(shotPitch);
      const dz = -Math.cos(shotYaw) * cosP;

      const ox = agent.physics.pos.x;
      const oy = agent.physics.pos.y + agent.physics.eyeHeight;
      const oz = agent.physics.pos.z;

      const maxRange = AR_WEAPON.maxRange;
      const wallDist = emitFX
        ? raycastArenaWithNormal(
            ox,
            oy,
            oz,
            dx,
            dy,
            dz,
            maxRange,
            this.colliders,
            this._wallNormalScratch
          )
        : raycastArenaDist(ox, oy, oz, dx, dy, dz, maxRange, this.colliders);

      const effectiveWallDist = wallDist >= 0 ? wallDist : maxRange;
      const hitEnemy = raycastOpponentHitbox(
        ox,
        oy,
        oz,
        dx,
        dy,
        dz,
        effectiveWallDist,
        enemy,
        this._hitScratch
      );

      let endDist = effectiveWallDist;
      if (hitEnemy) {
        endDist = this._hitScratch.dist;
        const isHead = this._hitScratch.isHead;
        const damage = isHead ? AR_WEAPON.headDamage : AR_WEAPON.bodyDamage;

        enemy.hp -= damage;
        agent.fitness += 1.8 * damage + (isHead ? 25 : 0);

        if (emitFX && this.onSound) {
          this.onSound('hit', {
            bot: agent.id,
            isHead,
            damage,
          });
        }

        if (enemy.hp <= 0) {
          agent.fitness += 140;
          enemy.fitness -= 70;
          agent.kills += 1;
          this.totalKills += 1;
          if (agent === this.agentA) {
            this.totalKillsA += 1;
          } else {
            this.totalKillsB += 1;
          }
          this.killsInGen += 1;

          if (emitFX && this.onSound) {
            this.onSound('kill', {
              bot: agent.id,
              isHead,
            });
          }

          if (agent.kills >= MATCH_KILL_LIMIT) {
            matchEnded = true;
          } else {
            const respawn =
              typeof this.arena?.getFarthestSpawn === 'function'
                ? this.arena.getFarthestSpawn(agent.physics.pos)
                : this.spawnPoints[0];
            this._spawnAgent(enemy, respawn);
          }
        }
      }

      if (emitFX) {
        if (this.onSound) {
          this.onSound('shoot', { bot: agent.id, weaponId: WEAPON_IDS.AR });
        }
        const ex = ox + dx * endDist;
        const ey = oy + dy * endDist;
        const ez = oz + dz * endDist;
        if (this.onTracer) {
          this.onTracer(
            new THREE.Vector3(ox, oy - 0.08, oz),
            new THREE.Vector3(ex, ey, ez),
            WEAPON_IDS.AR
          );
        }
        if (!hitEnemy && wallDist >= 0 && this.onImpact) {
          this.onImpact(
            new THREE.Vector3(ex, ey, ez),
            new THREE.Vector3(
              this._wallNormalScratch.x,
              this._wallNormalScratch.y,
              this._wallNormalScratch.z
            )
          );
        }
      }
    }

    return matchEnded;
  }

  _stepSimTick(emitFX) {
    this.matchTime += SIM_DT;

    // Alternate tick order slightly to prevent first-mover bias
    const aFirst = ((this.matchTime * 30) | 0) % 2 === 0;
    let ended = false;

    if (aFirst) {
      ended = this._stepAgent(this.agentA, this.agentB, SIM_DT, emitFX);
      if (!ended) {
        ended = this._stepAgent(this.agentB, this.agentA, SIM_DT, emitFX);
      }
    } else {
      ended = this._stepAgent(this.agentB, this.agentA, SIM_DT, emitFX);
      if (!ended) {
        ended = this._stepAgent(this.agentA, this.agentB, SIM_DT, emitFX);
      }
    }

    const liveMax = Math.max(this.agentA.fitness, this.agentB.fitness);
    if (liveMax > this.currentBestFitness) {
      this.currentBestFitness = liveMax;
    }

    if (ended || this.matchTime >= MATCH_MAX_TIME_SEC) {
      this._finishMatch();
    }
  }

  _syncVisuals(dt, snap = false) {
    const a = this.agentA;
    const b = this.agentB;

    if (snap) {
      this.visualA.hasState = false;
      this.visualB.hasState = false;
    }

    this.visualA.pushState(
      a.physics.pos,
      a.yaw,
      a.pitch,
      a.physics.isCrouching,
      WEAPON_IDS.AR,
      false
    );
    this.visualB.pushState(
      b.physics.pos,
      b.yaw,
      b.pitch,
      b.physics.isCrouching,
      WEAPON_IDS.AR,
      false
    );

    this.visualA.update(dt);
    this.visualB.update(dt);
  }

  step(dt, speedMultiplier = 1) {
    if (!this.active) return;

    const clampedDt = Math.min(Math.max(dt || 0, 0), 0.1);
    const speed = Math.max(1, Math.floor(speedMultiplier || 1));

    this._orbitAngle += Math.min(clampedDt, 0.05) * 0.22;

    if (speed === 1) {
      this._accumulator += clampedDt;
      let steps = 0;
      while (this._accumulator >= SIM_DT && steps < 4) {
        this._accumulator -= SIM_DT;
        this._stepSimTick(true);
        steps++;
      }
      this._syncVisuals(clampedDt, false);
    } else {
      this._accumulator = 0;
      const ticks = Math.min(speed, 120);
      for (let i = 0; i < ticks; i++) {
        this._stepSimTick(false);
      }
      this._syncVisuals(Math.min(clampedDt, 0.05), false);
    }
  }

  applyCamera(camera, mode = 'overview') {
    if (!camera) return;
    if (mode !== this._lastCameraMode) {
      this._lastCameraMode = mode;
      this._updateBotVisibility(mode);
    }

    camera.rotation.order = 'YXZ';

    if (mode === 'botA') {
      const p = this.visualA.currentPos;
      camera.position.set(p.x, p.y + this.agentA.physics.eyeHeight, p.z);
      camera.rotation.set(
        this.visualA.currentPitch,
        this.visualA.currentYaw,
        0,
        'YXZ'
      );
      return;
    }

    if (mode === 'botB') {
      const p = this.visualB.currentPos;
      camera.position.set(p.x, p.y + this.agentB.physics.eyeHeight, p.z);
      camera.rotation.set(
        this.visualB.currentPitch,
        this.visualB.currentYaw,
        0,
        'YXZ'
      );
      return;
    }

    // 'overview': smooth orbiting/tracking overview framing both bots
    const pa = this.visualA.currentPos;
    const pb = this.visualB.currentPos;
    const midX = (pa.x + pb.x) * 0.5;
    const midZ = (pa.z + pb.z) * 0.5;
    const sep = Math.hypot(pa.x - pb.x, pa.z - pb.z);

    this._camDesiredTarget.set(midX * 0.42, 1.35, midZ * 0.42);
    this._camTarget.lerp(this._camDesiredTarget, 0.08);

    const orbitRadius = clamp(15.5 + sep * 0.25, 16, 24);
    const camHeight = clamp(10.5 + sep * 0.14, 10.5, 15.5);

    this._camDesiredPos.set(
      this._camTarget.x + Math.cos(this._orbitAngle) * orbitRadius,
      camHeight,
      this._camTarget.z + Math.sin(this._orbitAngle) * orbitRadius
    );
    camera.position.lerp(this._camDesiredPos, 0.08);
    camera.lookAt(this._camTarget);
  }

  getStats() {
    return {
      generation: this.generation,
      matchIndex: this.matchIndex,
      totalMatches: MATCHES_PER_GEN,
      bestFitness: Math.round(this.bestFitness * 10) / 10,
      avgFitness: Math.round(this.avgFitness * 10) / 10,
      currentBestFitness: Math.round(this.currentBestFitness * 10) / 10,
      botAHP: Math.max(0, Math.round(this.agentA.hp)),
      botBHP: Math.max(0, Math.round(this.agentB.hp)),
      botAScore: this.totalKillsA,
      botBScore: this.totalKillsB,
      totalKills: this.totalKills,
      history: this.history.slice(),
    };
  }

  setBotASkills(nextSkills) {
    if (!nextSkills || typeof nextSkills !== 'object') return;
    for (const key of ['shoot', 'aim', 'move', 'jump', 'crouch']) {
      if (typeof nextSkills[key] === 'boolean') {
        this.botASkills[key] = nextSkills[key];
      }
    }
  }

  getBotASkills() {
    return { ...this.botASkills };
  }

  exportModel() {
    // Pick best brain from current fitnesses (index 0 is always top elite after Gen 1)
    let bestIdx = 0;
    let bestFit = -Infinity;
    for (let i = 0; i < POPULATION_SIZE; i++) {
      if (this.fitnesses[i] > bestFit) {
        bestFit = this.fitnesses[i];
        bestIdx = i;
      }
    }

    return {
      format: 'web-fps-1v1-ai-v1',
      exportedAt: new Date().toISOString(),
      generation: this.generation,
      bestFitness: Math.round(this.bestFitness * 10) / 10,
      avgFitness: Math.round(this.avgFitness * 10) / 10,
      totalKills: this.totalKills,
      architecture: {
        inputSize: INPUT_SIZE,
        hiddenSize: HIDDEN_SIZE,
        outputSize: OUTPUT_SIZE,
      },
      bestBrain: this.population[bestIdx].toJSON(),
      population: this.population.map((net) => net.toJSON()),
      history: this.history.slice(),
      botASkills: { ...this.botASkills },
    };
  }

  importModel(data) {
    if (!data || typeof data !== 'object') {
      throw new Error('Geçersiz JSON dosyası.');
    }

    let nextPopulation = null;
    if (Array.isArray(data.population) && data.population.length > 0) {
      const parsed = data.population.map((item) => NeuralNet.fromJSON(item));
      nextPopulation = new Array(POPULATION_SIZE);
      for (let i = 0; i < POPULATION_SIZE; i++) {
        if (i < parsed.length) {
          nextPopulation[i] = parsed[i];
        } else {
          const clone = parsed[i % parsed.length].clone();
          clone.mutate(0.12, 0.18);
          nextPopulation[i] = clone;
        }
      }
    } else if (data.bestBrain) {
      const champion = NeuralNet.fromJSON(data.bestBrain);
      nextPopulation = new Array(POPULATION_SIZE);
      for (let i = 0; i < POPULATION_SIZE; i++) {
        const clone = champion.clone();
        if (i >= 2) {
          clone.mutate(0.14, 0.2);
        }
        nextPopulation[i] = clone;
      }
    } else {
      throw new Error('Dosyada "population" veya "bestBrain" bulunamadı.');
    }

    this.population = nextPopulation;
    this.fitnesses.fill(0);
    this.generation = Math.max(1, Math.round(Number(data.generation) || 1));
    this.bestFitness = Number.isFinite(Number(data.bestFitness))
      ? Number(data.bestFitness)
      : 0;
    this.avgFitness = Number.isFinite(Number(data.avgFitness))
      ? Number(data.avgFitness)
      : 0;
    this.currentBestFitness = this.bestFitness;
    this.totalKills = Math.max(0, Math.round(Number(data.totalKills) || 0));
    this.history = Array.isArray(data.history)
      ? data.history
          .map((v) => Number(v))
          .filter((v) => Number.isFinite(v))
          .slice(-HISTORY_LIMIT)
      : [];
    this.accumulator = 0;

    // Pair top brains first so user immediately sees the loaded champions fight
    for (let i = 0; i < POPULATION_SIZE; i++) {
      this.pairOrder[i] = i;
    }
    this._startMatch(0);
    this._syncVisuals(true);

    if (data.botASkills && typeof data.botASkills === 'object') {
      this.setBotASkills(data.botASkills);
    }

    return {
      generation: this.generation,
      bestFitness: Math.round(this.bestFitness * 10) / 10,
      botASkills: this.getBotASkills(),
    };
  }

  dispose() {
    this.active = false;
    const disposeGroup = (group) => {
      if (!group) return;
      this.scene.remove(group);
      const mats = new Set();
      group.traverse((child) => {
        if (child.isMesh) {
          if (child.geometry) child.geometry.dispose();
          if (child.material && !mats.has(child.material)) {
            mats.add(child.material);
            child.material.dispose();
          }
        }
      });
    };
    disposeGroup(this.visualA?.group);
    disposeGroup(this.visualB?.group);
  }
}
