import * as THREE from 'three';
import {
  PLAYER_CONFIG,
  PHYSICS_CONFIG,
  HITBOX_CONFIG,
  WEAPON_IDS,
  WEAPONS,
  DEFAULT_SETTINGS,
} from './constants.js';
import { CS2PhysicsController } from './physics.js';

const UP_AXIS = new THREE.Vector3(0, 1, 0);
const CENTER_NDC = new THREE.Vector2(0, 0);
const HELD_KEYS = new Set([
  'KeyW',
  'KeyA',
  'KeyS',
  'KeyD',
  'Space',
  'ControlLeft',
  'ControlRight',
  'KeyC',
]);

const HIP_POS = new THREE.Vector3(0.26, -0.22, -0.45);
const ADS_POS = new THREE.Vector3(0.0, -0.14, -0.34);

function toVector3(pos, target = new THREE.Vector3()) {
  if (Array.isArray(pos)) {
    return target.set(pos[0] ?? 0, pos[1] ?? 0, pos[2] ?? 0);
  }
  return target.set(pos.x ?? 0, pos.y ?? 0, pos.z ?? 0);
}

function normalizeAngleDelta(delta) {
  let d = delta;
  while (d > Math.PI) d -= Math.PI * 2;
  while (d < -Math.PI) d += Math.PI * 2;
  return d;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function smoothstep(t) {
  const c = clamp(t, 0, 1);
  return c * c * (3 - 2 * c);
}

/**
 * Helper: extrude a 2D silhouette in the (X=forward/-Z, Y=up) plane,
 * centered on thickness and rotated so +X maps to -Z (forward).
 */
function createProfileGeometry(shape, depth, bevelThickness = 0.003, bevelSize = 0.0025, bevelSegments = 2) {
  const geo = new THREE.ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: bevelThickness > 0 && bevelSize > 0,
    bevelThickness,
    bevelSize,
    bevelSegments,
    curveSegments: 10,
  });
  geo.translate(0, 0, -depth / 2);
  geo.rotateY(Math.PI / 2);
  return geo;
}

/**
 * Procedural curved Bowie / clip-point blade geometry (in tKnife local space: -Z forward, +Y spine).
 */
function createBowieBladeGeometry(scale = 1.0) {
  const s = new THREE.Shape();
  s.moveTo(0.048 * scale, 0.021 * scale);
  s.lineTo(0.194 * scale, 0.021 * scale);
  // Concave clip-point swedge to upturned sharp tip
  s.quadraticCurveTo(0.242 * scale, 0.009 * scale, 0.302 * scale, 0.015 * scale);
  // Sweeping curved Bowie belly
  s.bezierCurveTo(
    0.272 * scale, -0.024 * scale,
    0.205 * scale, -0.037 * scale,
    0.122 * scale, -0.032 * scale
  );
  s.lineTo(0.068 * scale, -0.027 * scale);
  // Ricasso choil notch
  s.lineTo(0.060 * scale, -0.016 * scale);
  s.lineTo(0.048 * scale, -0.016 * scale);
  s.closePath();

  return createProfileGeometry(
    s,
    0.0036 * scale,
    0.0028 * scale,
    0.0024 * scale,
    3
  );
}

/**
 * Procedural beveled ballistic SAPI armor plate (front/back of plate carrier).
 */
function createSapiPlateGeometry(width, height, thickness) {
  const hw = width * 0.5;
  const hh = height * 0.5;
  const cut = width * 0.22;
  const s = new THREE.Shape();
  s.moveTo(-hw + cut, hh);
  s.lineTo(hw - cut, hh);
  s.lineTo(hw, hh - cut * 0.9);
  s.lineTo(hw, -hh);
  s.lineTo(-hw, -hh);
  s.lineTo(-hw, hh - cut * 0.9);
  s.closePath();

  const geo = new THREE.ExtrudeGeometry(s, {
    depth: thickness,
    bevelEnabled: true,
    bevelThickness: 0.012,
    bevelSize: 0.01,
    bevelSegments: 2,
  });
  geo.translate(0, 0, -thickness / 2);
  return geo;
}

const FORWARD_Z = new THREE.Vector3(0, 0, 1);

/**
 * Shared PBR materials for CS2-style first-person tactical sleeves, fingerless gloves,
 * carbon knuckle guards, velcro wrist straps, tactical watch, and exposed fingertips.
 */
function createTacticalArmMaterials() {
  return {
    sleeveMat: new THREE.MeshStandardMaterial({
      color: 0x313830, // Matte tactical olive-charcoal jacket sleeve
      roughness: 0.87,
      metalness: 0.05,
    }),
    cuffMat: new THREE.MeshStandardMaterial({
      color: 0x242923,
      roughness: 0.90,
      metalness: 0.04,
    }),
    strapMat: new THREE.MeshStandardMaterial({
      color: 0x17191d,
      roughness: 0.86,
      metalness: 0.10,
    }),
    buckleMat: new THREE.MeshStandardMaterial({
      color: 0x525a66,
      roughness: 0.34,
      metalness: 0.78,
    }),
    watchCaseMat: new THREE.MeshStandardMaterial({
      color: 0x181b20,
      roughness: 0.36,
      metalness: 0.68,
    }),
    watchFaceMat: new THREE.MeshStandardMaterial({
      color: 0x0b1620,
      emissive: 0x0a2530,
      emissiveIntensity: 0.45,
      roughness: 0.12,
      metalness: 0.85,
    }),
    watchDialMat: new THREE.MeshBasicMaterial({
      color: 0x7be0c3,
    }),
    gloveMat: new THREE.MeshStandardMaterial({
      color: 0x1a1d22, // Dark leather / kevlar tactical glove
      roughness: 0.72,
      metalness: 0.14,
    }),
    glovePalmMat: new THREE.MeshStandardMaterial({
      color: 0x22252b,
      roughness: 0.78,
      metalness: 0.10,
    }),
    knuckleMat: new THREE.MeshStandardMaterial({
      color: 0x2c323c, // Subtle metallic / carbon-fiber knuckle guard
      roughness: 0.36,
      metalness: 0.54,
    }),
    skinMat: new THREE.MeshStandardMaterial({
      color: 0xc99672, // Realistic warm skin tone for exposed fingertips & thumb
      roughness: 0.66,
      metalness: 0.02,
    }),
  };
}

/**
 * Helper: oriented tapered cylinder connecting two 3D points seamlessly.
 */
function createLimbSegment(start, end, rStart, rEnd, material, radialSegments = 14) {
  const dir = new THREE.Vector3().subVectors(end, start);
  const len = dir.length();
  if (len < 1e-5) return new THREE.Group();
  const mesh = new THREE.Mesh(
    new THREE.CylinderGeometry(rEnd, rStart, len, radialSegments),
    material
  );
  mesh.position.copy(start).add(end).multiplyScalar(0.5);
  mesh.quaternion.setFromUnitVectors(UP_AXIS, dir.normalize());
  return mesh;
}

/**
 * Helper: oriented torus ring seated coaxially around a limb axis.
 */
function createLimbRing(center, axisDir, radius, tube, material, radialSegments = 8, tubularSegments = 16) {
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments),
    material
  );
  ring.position.copy(center);
  ring.quaternion.setFromUnitVectors(FORWARD_Z, axisDir.clone().normalize());
  return ring;
}

/**
 * Reusable procedural CS2 forearm: exposed skin wrist, velcro wrist strap + metallic buckle,
 * optional dark tactical watch, rolled sleeve cuff, and matte tactical jacket sleeve.
 */
function createTacticalForearm(wristPos, elbowPos, mats, options = {}) {
  const group = new THREE.Group();
  const axis = new THREE.Vector3().subVectors(elbowPos, wristPos);
  const totalLen = axis.length();
  const dir = axis.clone().normalize();

  const wristR = options.wristRadius ?? 0.030;
  const elbowR = options.elbowRadius ?? 0.047;
  const sleeveStartFrac = options.sleeveStartFrac ?? 0.20;
  const strapFrac = options.strapFrac ?? 0.08;

  const sleeveStart = wristPos.clone().addScaledVector(dir, totalLen * sleeveStartFrac);
  const strapPos = wristPos.clone().addScaledVector(dir, totalLen * strapFrac);

  // Exposed wrist skin transition into glove
  const wristStubEnd = wristPos.clone().addScaledVector(dir, totalLen * (sleeveStartFrac + 0.03));
  group.add(createLimbSegment(wristPos, wristStubEnd, wristR * 0.96, wristR * 1.04, mats.skinMat, 12));

  // Velcro wrist strap band + metallic clasp
  group.add(createLimbRing(strapPos, dir, wristR * 1.02, 0.0052, mats.strapMat, 8, 16));
  const upHint = (options.watchUp ?? UP_AXIS).clone().normalize();
  const sideAxis = new THREE.Vector3().crossVectors(dir, upHint);
  if (sideAxis.lengthSq() < 1e-4) sideAxis.set(1, 0, 0);
  sideAxis.normalize();
  const normalUp = new THREE.Vector3().crossVectors(sideAxis, dir).normalize();

  const buckle = new THREE.Mesh(
    new THREE.BoxGeometry(0.014, 0.005, 0.018),
    mats.buckleMat
  );
  buckle.position.copy(strapPos).addScaledVector(normalUp, wristR * 1.06);
  buckle.lookAt(buckle.position.clone().add(dir));
  group.add(buckle);

  // Optional dark tactical watch on the wrist
  if (options.hasWatch) {
    const watchPos = wristPos.clone().addScaledVector(dir, totalLen * (strapFrac + 0.075));
    const watchBand = createLimbRing(watchPos, dir, wristR * 1.04, 0.0042, mats.strapMat, 8, 16);
    group.add(watchBand);

    const watchGroup = new THREE.Group();
    watchGroup.position.copy(watchPos).addScaledVector(normalUp, wristR * 1.07);
    watchGroup.quaternion.setFromUnitVectors(UP_AXIS, normalUp);

    const bezel = new THREE.Mesh(
      new THREE.CylinderGeometry(0.0165, 0.0175, 0.0075, 16),
      mats.watchCaseMat
    );
    watchGroup.add(bezel);

    const glass = new THREE.Mesh(
      new THREE.CircleGeometry(0.0135, 16),
      mats.watchFaceMat
    );
    glass.rotation.x = -Math.PI / 2;
    glass.position.y = 0.0040;
    watchGroup.add(glass);

    // Subtle tactical watch hands
    const handA = new THREE.Mesh(
      new THREE.BoxGeometry(0.0018, 0.0008, 0.0085),
      mats.watchDialMat
    );
    handA.position.set(0.0015, 0.0044, -0.0025);
    handA.rotation.y = 0.45;
    watchGroup.add(handA);

    const handB = new THREE.Mesh(
      new THREE.BoxGeometry(0.0015, 0.0008, 0.0062),
      mats.watchDialMat
    );
    handB.position.set(-0.0022, 0.0044, 0.0012);
    handB.rotation.y = -1.15;
    watchGroup.add(handB);

    group.add(watchGroup);
  }

  // Rolled tactical jacket cuff + tapered forearm sleeve
  const cuffRadius = lerp(wristR, elbowR, sleeveStartFrac) * 1.08;
  group.add(createLimbRing(sleeveStart, dir, cuffRadius, 0.0085, mats.cuffMat, 8, 16));
  group.add(createLimbSegment(sleeveStart, elbowPos, cuffRadius * 0.98, elbowR, mats.sleeveMat, 14));

  return group;
}

/**
 * Reusable articulated 2-phalanx fingerless tactical glove finger:
 * gloved proximal segment + rounded knuckle joint + exposed skin distal fingertip.
 */
function createArticulatedFinger(basePos, midPos, tipPos, radius, mats) {
  const group = new THREE.Group();

  // Base knuckle bump (carbon/kevlar)
  const baseKnuckle = new THREE.Mesh(
    new THREE.SphereGeometry(radius * 1.08, 8, 8),
    mats.knuckleMat
  );
  baseKnuckle.position.copy(basePos);
  group.add(baseKnuckle);

  // Gloved proximal phalanx
  group.add(createLimbSegment(basePos, midPos, radius * 1.02, radius * 0.94, mats.gloveMat, 10));

  // Mid-joint sphere (transition from fingerless glove to skin)
  const midJoint = new THREE.Mesh(
    new THREE.SphereGeometry(radius * 0.92, 8, 8),
    mats.gloveMat
  );
  midJoint.position.copy(midPos);
  group.add(midJoint);

  // Exposed skin distal phalanx + rounded fingertip
  group.add(createLimbSegment(midPos, tipPos, radius * 0.88, radius * 0.76, mats.skinMat, 10));
  const tipCap = new THREE.Mesh(
    new THREE.SphereGeometry(radius * 0.78, 8, 8),
    mats.skinMat
  );
  tipCap.position.copy(tipPos);
  group.add(tipCap);

  return group;
}

/**
 * Procedural CS2 First-Person Hands & Arms for the Assault Rifle (AR).
 * Keeps all fingers/thumbs strictly below the top rail & red-dot ADS sightline.
 */
function buildARHands(mats) {
  const group = new THREE.Group();

  // --- RIGHT HAND & FOREARM (Pistol Grip + Trigger Finger) ---
  group.add(
    createTacticalForearm(
      new THREE.Vector3(0.038, -0.088, 0.172),
      new THREE.Vector3(0.155, -0.225, 0.445),
      mats,
      { wristRadius: 0.029, elbowRadius: 0.046, hasWatch: false }
    )
  );

  const rPalm = new THREE.Mesh(
    new THREE.CapsuleGeometry(0.026, 0.042, 8, 12),
    mats.gloveMat
  );
  rPalm.scale.set(0.86, 1.02, 1.12);
  rPalm.position.set(0.024, -0.074, 0.128);
  rPalm.rotation.set(0.42, -0.22, -0.18);
  group.add(rPalm);

  const rKnuckleGuard = new THREE.Mesh(
    new THREE.CapsuleGeometry(0.0085, 0.040, 6, 10),
    mats.knuckleMat
  );
  rKnuckleGuard.position.set(0.032, -0.068, 0.106);
  rKnuckleGuard.rotation.set(-0.34, 0.08, -0.08);
  group.add(rKnuckleGuard);

  // Right trigger finger resting naturally along receiver/trigger guard
  group.add(
    createArticulatedFinger(
      new THREE.Vector3(0.026, -0.048, 0.106),
      new THREE.Vector3(0.024, -0.041, 0.074),
      new THREE.Vector3(0.010, -0.036, 0.049),
      0.0076,
      mats
    )
  );

  // Middle, ring, pinky fingers wrapped cleanly around angled pistol grip
  const rGripFingers = [
    [new THREE.Vector3(0.025, -0.068, 0.108), new THREE.Vector3(0.011, -0.068, 0.088), new THREE.Vector3(-0.014, -0.069, 0.095), 0.0078],
    [new THREE.Vector3(0.025, -0.084, 0.114), new THREE.Vector3(0.011, -0.084, 0.094), new THREE.Vector3(-0.014, -0.085, 0.101), 0.0074],
    [new THREE.Vector3(0.024, -0.100, 0.120), new THREE.Vector3(0.010, -0.100, 0.102), new THREE.Vector3(-0.013, -0.100, 0.108), 0.0068],
  ];
  for (const [b, m, t, r] of rGripFingers) {
    group.add(createArticulatedFinger(b, m, t, r, mats));
  }

  // Right thumb wrapped over left side of upper pistol grip
  group.add(
    createArticulatedFinger(
      new THREE.Vector3(0.012, -0.050, 0.140),
      new THREE.Vector3(-0.016, -0.044, 0.130),
      new THREE.Vector3(-0.023, -0.048, 0.104),
      0.0086,
      mats
    )
  );

  // --- LEFT SUPPORT HAND & FOREARM (M-LOK Handguard & Foregrip) ---
  group.add(
    createTacticalForearm(
      new THREE.Vector3(-0.062, -0.082, -0.178),
      new THREE.Vector3(-0.285, -0.245, 0.135),
      mats,
      {
        wristRadius: 0.029,
        elbowRadius: 0.047,
        hasWatch: true,
        watchUp: new THREE.Vector3(-0.32, 0.90, -0.20),
      }
    )
  );

  const lPalm = new THREE.Mesh(
    new THREE.CapsuleGeometry(0.027, 0.044, 8, 12),
    mats.glovePalmMat
  );
  lPalm.scale.set(0.92, 0.88, 1.15);
  lPalm.position.set(-0.024, -0.048, -0.236);
  lPalm.rotation.set(Math.PI / 2 - 0.12, 0.34, 0.38);
  group.add(lPalm);

  const lKnuckleGuard = new THREE.Mesh(
    new THREE.CapsuleGeometry(0.0085, 0.042, 6, 10),
    mats.knuckleMat
  );
  lKnuckleGuard.position.set(-0.036, -0.056, -0.242);
  lKnuckleGuard.rotation.set(Math.PI / 2, 0.18, 0.25);
  group.add(lKnuckleGuard);

  // 4 support fingers cradling under the handguard & foregrip (well below optic line)
  for (let i = 0; i < 4; i++) {
    const z = -0.214 - i * 0.0165;
    const r = i === 3 ? 0.0068 : 0.0076;
    group.add(
      createArticulatedFinger(
        new THREE.Vector3(-0.016, -0.060, z),
        new THREE.Vector3(0.016, -0.048, z - 0.004),
        new THREE.Vector3(0.026, -0.020, z - 0.006),
        r,
        mats
      )
    );
  }

  // Left support thumb along left M-LOK rail (kept strictly left & below top rail)
  group.add(
    createArticulatedFinger(
      new THREE.Vector3(-0.034, -0.032, -0.210),
      new THREE.Vector3(-0.036, -0.008, -0.238),
      new THREE.Vector3(-0.032, 0.004, -0.270),
      0.0086,
      mats
    )
  );

  return group;
}

/**
 * Procedural CS2 First-Person Hands & Arms for the AWP Sniper.
 * Right hand grips the thumbhole stock; left hand supports the olive-drab forend.
 */
function buildSniperHands(mats) {
  const group = new THREE.Group();

  // --- RIGHT HAND & FOREARM (AWP Thumbhole Stock Grip) ---
  group.add(
    createTacticalForearm(
      new THREE.Vector3(0.044, -0.090, 0.182),
      new THREE.Vector3(0.165, -0.230, 0.455),
      mats,
      { wristRadius: 0.029, elbowRadius: 0.047, hasWatch: false }
    )
  );

  const rPalm = new THREE.Mesh(
    new THREE.CapsuleGeometry(0.027, 0.042, 8, 12),
    mats.gloveMat
  );
  rPalm.scale.set(0.88, 1.02, 1.12);
  rPalm.position.set(0.027, -0.074, 0.136);
  rPalm.rotation.set(0.38, -0.20, -0.15);
  group.add(rPalm);

  const rKnuckleGuard = new THREE.Mesh(
    new THREE.CapsuleGeometry(0.0085, 0.040, 6, 10),
    mats.knuckleMat
  );
  rKnuckleGuard.position.set(0.036, -0.068, 0.116);
  rKnuckleGuard.rotation.set(-0.28, 0.08, -0.08);
  group.add(rKnuckleGuard);

  // Trigger finger along AWP receiver/chassis (clear of bolt handle)
  group.add(
    createArticulatedFinger(
      new THREE.Vector3(0.028, -0.052, 0.114),
      new THREE.Vector3(0.026, -0.044, 0.084),
      new THREE.Vector3(0.015, -0.040, 0.058),
      0.0076,
      mats
    )
  );

  // 3 lower fingers wrapped around front of AWP thumbhole pistol grip
  const rGripFingers = [
    [new THREE.Vector3(0.028, -0.068, 0.116), new THREE.Vector3(0.014, -0.068, 0.096), new THREE.Vector3(-0.014, -0.069, 0.100), 0.0078],
    [new THREE.Vector3(0.028, -0.085, 0.120), new THREE.Vector3(0.014, -0.085, 0.100), new THREE.Vector3(-0.014, -0.086, 0.104), 0.0074],
    [new THREE.Vector3(0.026, -0.101, 0.125), new THREE.Vector3(0.013, -0.101, 0.106), new THREE.Vector3(-0.013, -0.101, 0.110), 0.0068],
  ];
  for (const [b, m, t, r] of rGripFingers) {
    group.add(createArticulatedFinger(b, m, t, r, mats));
  }

  // Right thumb seated naturally inside AWP thumbhole cutout
  group.add(
    createArticulatedFinger(
      new THREE.Vector3(0.016, -0.048, 0.152),
      new THREE.Vector3(-0.010, -0.044, 0.156),
      new THREE.Vector3(-0.024, -0.046, 0.134),
      0.0086,
      mats
    )
  );

  // --- LEFT SUPPORT HAND & FOREARM (Olive-Drab Chassis Forend) ---
  group.add(
    createTacticalForearm(
      new THREE.Vector3(-0.064, -0.080, -0.160),
      new THREE.Vector3(-0.285, -0.245, 0.150),
      mats,
      {
        wristRadius: 0.029,
        elbowRadius: 0.047,
        hasWatch: true,
        watchUp: new THREE.Vector3(-0.32, 0.90, -0.20),
      }
    )
  );

  const lPalm = new THREE.Mesh(
    new THREE.CapsuleGeometry(0.027, 0.044, 8, 12),
    mats.glovePalmMat
  );
  lPalm.scale.set(0.94, 0.86, 1.15);
  lPalm.position.set(-0.022, -0.046, -0.222);
  lPalm.rotation.set(Math.PI / 2 - 0.10, 0.32, 0.36);
  group.add(lPalm);

  const lKnuckleGuard = new THREE.Mesh(
    new THREE.CapsuleGeometry(0.0085, 0.042, 6, 10),
    mats.knuckleMat
  );
  lKnuckleGuard.position.set(-0.035, -0.052, -0.226);
  lKnuckleGuard.rotation.set(Math.PI / 2, 0.18, 0.24);
  group.add(lKnuckleGuard);

  // 4 fingers cradling under and up the right side of the olive-drab forend
  for (let i = 0; i < 4; i++) {
    const z = -0.195 - i * 0.0165;
    const r = i === 3 ? 0.0068 : 0.0076;
    group.add(
      createArticulatedFinger(
        new THREE.Vector3(-0.014, -0.056, z),
        new THREE.Vector3(0.019, -0.044, z - 0.004),
        new THREE.Vector3(0.028, -0.016, z - 0.006),
        r,
        mats
      )
    );
  }

  // Left thumb resting along the left flank of the olive-drab chassis
  group.add(
    createArticulatedFinger(
      new THREE.Vector3(-0.032, -0.028, -0.196),
      new THREE.Vector3(-0.034, -0.008, -0.224),
      new THREE.Vector3(-0.030, 0.002, -0.256),
      0.0086,
      mats
    )
  );

  return group;
}

/**
 * Upgraded CS2 T-Side Knife Right Hand & Forearm:
 * Matte olive/charcoal tactical sleeve, velcro wrist strap + dark tactical watch,
 * fingerless glove palm, carbon knuckle guard with individual knuckles,
 * and 4 curled fingers + articulated thumb gripping the leather Bowie handle.
 */
function buildKnifeHand(mats) {
  const group = new THREE.Group();

  // Detailed forearm entering from bottom-right with velcro strap & dark tactical watch
  group.add(
    createTacticalForearm(
      new THREE.Vector3(0.030, -0.044, 0.072),
      new THREE.Vector3(0.132, -0.128, 0.305),
      mats,
      {
        wristRadius: 0.031,
        elbowRadius: 0.047,
        sleeveStartFrac: 0.24,
        strapFrac: 0.07,
        hasWatch: true,
        watchUp: new THREE.Vector3(-0.22, 0.92, -0.18),
      }
    )
  );

  // Sculpted Fingerless Tactical Glove Palm
  const palm = new THREE.Mesh(
    new THREE.CapsuleGeometry(0.030, 0.042, 8, 14),
    mats.gloveMat
  );
  palm.scale.set(1.06, 0.90, 1.15);
  palm.rotation.set(Math.PI / 2 + 0.08, -0.18, 0.15);
  palm.position.set(0.015, -0.032, 0.034);
  group.add(palm);

  // Carbon/metallic reinforced knuckle guard bar + 4 individual knuckle ridges
  const knuckleBar = new THREE.Mesh(
    new THREE.CapsuleGeometry(0.010, 0.046, 6, 10),
    mats.knuckleMat
  );
  knuckleBar.rotation.set(0.05, 0.18, Math.PI / 2);
  knuckleBar.position.set(0.006, -0.008, 0.022);
  group.add(knuckleBar);

  // 4 Curled Articulated Fingers gripping the leather handle (individual knuckles + skin fingertips)
  for (let i = 0; i < 4; i++) {
    const zOff = 0.005 + i * 0.0165;
    const yOff = -0.032 - i * 0.0032;
    const r = i === 3 ? 0.0072 : 0.0080;
    group.add(
      createArticulatedFinger(
        new THREE.Vector3(0.004, yOff + 0.016, zOff + 0.004),
        new THREE.Vector3(-0.014, yOff - 0.002, zOff),
        new THREE.Vector3(-0.026, yOff - 0.012, zOff - 0.006),
        r,
        mats
      )
    );
  }

  // Articulated Thumb gripping the top-side of the handle
  group.add(
    createArticulatedFinger(
      new THREE.Vector3(0.002, -0.012, 0.036),
      new THREE.Vector3(-0.014, -0.005, 0.020),
      new THREE.Vector3(-0.026, -0.001, -0.002),
      0.0092,
      mats
    )
  );

  return group;
}

const MAX_BULLET_HOLES = 60;

/**
 * Procedurally generate a crisp reusable bullet hole decal texture
 * (charred dark center crater, jagged concrete/wood radial cracks, soft scorch halo, transparent edges).
 */
function createBulletHoleTexture() {
  const size = 128;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  const cx = size * 0.5;
  const cy = size * 0.5;

  ctx.clearRect(0, 0, size, size);

  // 1. Soft outer scorch halo
  const haloGrad = ctx.createRadialGradient(cx, cy, 8, cx, cy, 56);
  haloGrad.addColorStop(0.0, 'rgba(12, 10, 8, 0.85)');
  haloGrad.addColorStop(0.32, 'rgba(24, 20, 16, 0.55)');
  haloGrad.addColorStop(0.62, 'rgba(38, 34, 28, 0.22)');
  haloGrad.addColorStop(1.0, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = haloGrad;
  ctx.beginPath();
  ctx.arc(cx, cy, 56, 0, Math.PI * 2);
  ctx.fill();

  // 2. Jagged concrete/wood radial cracks
  const crackCount = 11;
  for (let i = 0; i < crackCount; i++) {
    const baseAngle = (i / crackCount) * Math.PI * 2 + Math.sin(i * 3.7) * 0.22;
    const maxLen = 30 + ((i * 19) % 24);
    const segments = 4;

    ctx.strokeStyle = 'rgba(175, 166, 152, 0.32)';
    ctx.lineWidth = 2.0;
    ctx.beginPath();
    let x = cx + Math.cos(baseAngle) * 11;
    let y = cy + Math.sin(baseAngle) * 11;
    ctx.moveTo(x + 0.8, y + 0.8);
    const pts = [[x, y]];
    for (let s = 1; s <= segments; s++) {
      const r = 11 + ((maxLen - 11) * s) / segments;
      const jitter = Math.sin(i * 5.3 + s * 2.9) * 0.16;
      x = cx + Math.cos(baseAngle + jitter) * r;
      y = cy + Math.sin(baseAngle + jitter) * r;
      pts.push([x, y]);
      ctx.lineTo(x + 0.8, y + 0.8);
    }
    ctx.stroke();

    ctx.strokeStyle = 'rgba(14, 12, 10, 0.82)';
    ctx.lineWidth = 1.35;
    ctx.beginPath();
    ctx.moveTo(pts[0][0], pts[0][1]);
    for (let s = 1; s < pts.length; s++) {
      ctx.lineTo(pts[s][0], pts[s][1]);
    }
    ctx.stroke();
  }

  // 3. Chipped pale rim around the entry crater
  ctx.fillStyle = 'rgba(148, 138, 124, 0.58)';
  ctx.beginPath();
  const rimPts = 18;
  for (let i = 0; i <= rimPts; i++) {
    const a = (i / rimPts) * Math.PI * 2;
    const r = 16.5 + Math.sin(i * 2.7) * 2.8 + Math.cos(i * 4.3) * 1.6;
    const px = cx + Math.cos(a) * r;
    const py = cy + Math.sin(a) * r;
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.closePath();
  ctx.fill();

  // 4. Charred dark center crater
  ctx.fillStyle = 'rgba(12, 11, 10, 0.96)';
  ctx.beginPath();
  for (let i = 0; i <= rimPts; i++) {
    const a = (i / rimPts) * Math.PI * 2;
    const r = 11.2 + Math.cos(i * 3.1) * 1.9 + Math.sin(i * 5.2) * 1.1;
    const px = cx + Math.cos(a) * r;
    const py = cy + Math.sin(a) * r;
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.closePath();
  ctx.fill();

  // 5. Deep pitch-black inner bore
  const coreGrad = ctx.createRadialGradient(cx, cy, 1, cx, cy, 10);
  coreGrad.addColorStop(0.0, 'rgba(0, 0, 0, 1.0)');
  coreGrad.addColorStop(0.65, 'rgba(8, 7, 7, 0.95)');
  coreGrad.addColorStop(1.0, 'rgba(20, 18, 16, 0.0)');
  ctx.fillStyle = coreGrad;
  ctx.beginPath();
  ctx.arc(cx, cy, 10, 0, Math.PI * 2);
  ctx.fill();

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}

export class LocalPlayer {
  constructor(camera, scene) {
    this.camera = camera;
    this.scene = scene;

    this.camera.rotation.order = 'YXZ';
    if (!this.camera.parent) {
      this.scene.add(this.camera);
    }

    this.physics = new CS2PhysicsController();

    this.position = new THREE.Vector3(0, 0, 0);
    this.velocity = new THREE.Vector3(0, 0, 0);
    this.eyeHeight = PLAYER_CONFIG.EYE_HEIGHT;
    this.yaw = 0;
    this.pitch = 0;

    this.recoilPitch = 0;
    this.recoilYaw = 0;
    this.sprayShotIndex = 0;
    this.sprayRecoilPitch = 0;
    this.sprayRecoilYaw = 0;
    this.grounded = false;
    this.isCrouching = false;
    this.horizSpeed = 0;
    this.speedUnits = 0;
    this.isCounterStrafed = true;

    this.inputEnabled = true;
    this.keys = new Set();

    // Weapon, ADS, and reload state
    this.weaponId = WEAPON_IDS.AR;
    this.ammo = {
      [WEAPON_IDS.AR]: WEAPONS[WEAPON_IDS.AR].magSize,
      [WEAPON_IDS.SNIPER]: WEAPONS[WEAPON_IDS.SNIPER].magSize,
      [WEAPON_IDS.KNIFE]: 0,
    };
    this.isReloading = false;
    this.reloadElapsedMs = 0;
    this.isADS = false;
    this.adsProgress = 0;
    this.baseFov = DEFAULT_SETTINGS.fov;
    this.knifeSwingTimer = 0;
    this.knifeSwingDuration = 220;
    this.knifeSwingHeavy = false;

    this._weaponChangedFlag = false;
    this._reloadStartedFlag = false;

    this.lastFireTime = -Infinity;
    this.raycaster = new THREE.Raycaster();
    this.tracers = [];

    // Bullet impact decals (capped ring pool) & impact spark/dust particles
    this.bulletHoles = [];
    this.impactParticles = [];
    this._bulletHoleTexture = createBulletHoleTexture();
    this._bulletHoleGeo = new THREE.PlaneGeometry(0.14, 0.14);
    this._bulletHoleMat = new THREE.MeshBasicMaterial({
      map: this._bulletHoleTexture,
      transparent: true,
      depthWrite: false,
      polygonOffset: true,
      polygonOffsetFactor: -2,
      polygonOffsetUnits: -2,
    });
    this._impactParticleGeo = new THREE.OctahedronGeometry(0.016, 0);

    // Reusable scratch vectors for hitscan spread
    this._camRight = new THREE.Vector3();
    this._camUp = new THREE.Vector3();
    this._camForward = new THREE.Vector3();

    // Viewmodel animation state
    this.weaponKickZ = 0;
    this.weaponKickPitch = 0;
    this.bobTime = 0;
    this.bobAmount = 0;
    this.muzzleFlashTimer = 0;
    this.isInspecting = false;
    this.inspectElapsed = 0;
    this.inspectDuration = 2.8;

    this.viewmodels = {};
    this.muzzleAnchors = {};
    this.muzzleFlashes = {};
    this._buildViewmodels();

    this._onKeyDown = (e) => {
      if (!this.inputEnabled) return;
      if (
        e.target &&
        (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')
      ) {
        return;
      }

      if (HELD_KEYS.has(e.code)) {
        this.keys.add(e.code);
        if (e.code === 'Space') {
          e.preventDefault();
          if (!e.repeat) {
            this.physics.queueJump();
          }
        }
        return;
      }

      if (e.repeat) return;

      if (e.code === 'Digit1') {
        this.switchWeapon(WEAPON_IDS.AR);
      } else if (e.code === 'Digit2') {
        this.switchWeapon(WEAPON_IDS.SNIPER);
      } else if (e.code === 'Digit3') {
        this.switchWeapon(WEAPON_IDS.KNIFE);
      } else if (e.code === 'KeyR') {
        this.startReload();
      } else if (e.code === 'KeyF') {
        this.startInspect();
      }
    };

    this._onKeyUp = (e) => {
      if (HELD_KEYS.has(e.code)) {
        this.keys.delete(e.code);
      }
    };

    this._onBlur = () => {
      this.keys.clear();
      this.isADS = false;
      this.cancelInspect();
    };

    window.addEventListener('keydown', this._onKeyDown);
    window.addEventListener('keyup', this._onKeyUp);
    window.addEventListener('blur', this._onBlur);

    this._syncCamera();
  }

  _createMuzzleFlash(colorHex, scale = 1.0) {
    const group = new THREE.Group();
    const flashMat = new THREE.MeshBasicMaterial({
      color: colorHex,
      transparent: true,
      opacity: 0.92,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const flashCore = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.042 * scale, 0),
      flashMat
    );
    flashCore.scale.set(1, 1, 1.8);
    const flashCrossA = new THREE.Mesh(
      new THREE.BoxGeometry(0.14 * scale, 0.022 * scale, 0.022 * scale),
      flashMat
    );
    const flashCrossB = new THREE.Mesh(
      new THREE.BoxGeometry(0.022 * scale, 0.14 * scale, 0.022 * scale),
      flashMat
    );
    group.add(flashCore, flashCrossA, flashCrossB);
    group.visible = false;
    return group;
  }

  _buildViewmodels() {
    this.weaponGroup = new THREE.Group();
    this.weaponGroup.position.copy(HIP_POS);

    // Shared CS2 first-person tactical arm/glove PBR materials across all 3 weapons
    const armMats = createTacticalArmMaterials();

    // =========================================================================
    // 1. TACTICAL ASSAULT RIFLE (M4A1 / Carbine Viewmodel)
    // =========================================================================
    const arGroup = new THREE.Group();

    const arGunmetalMat = new THREE.MeshStandardMaterial({
      color: 0x2b3038,
      roughness: 0.34,
      metalness: 0.78,
    });
    const arAnodizedMat = new THREE.MeshStandardMaterial({
      color: 0x1b1f26,
      roughness: 0.42,
      metalness: 0.68,
    });
    const arPolymerMat = new THREE.MeshStandardMaterial({
      color: 0x1e2024,
      roughness: 0.78,
      metalness: 0.12,
    });
    const arBarrelSteelMat = new THREE.MeshStandardMaterial({
      color: 0x23272e,
      roughness: 0.28,
      metalness: 0.86,
    });
    const arChromeMat = new THREE.MeshStandardMaterial({
      color: 0x9aa4b0,
      roughness: 0.22,
      metalness: 0.92,
    });
    const arLensMat = new THREE.MeshStandardMaterial({
      color: 0x1a354d,
      emissive: 0x0b1f33,
      emissiveIntensity: 0.35,
      roughness: 0.08,
      metalness: 0.9,
      transparent: true,
      opacity: 0.42,
    });
    const arReticleMat = new THREE.MeshBasicMaterial({
      color: 0xff2b1f,
    });

    // Sculpted Upper + Lower Receiver (beveled side profile)
    const arRecvShape = new THREE.Shape();
    arRecvShape.moveTo(-0.155, -0.022); // rear lower
    arRecvShape.lineTo(-0.155, 0.044);  // rear upper
    arRecvShape.lineTo(0.145, 0.044);   // front upper
    arRecvShape.lineTo(0.145, -0.008);  // front handguard collar
    arRecvShape.lineTo(0.095, -0.012);  // magwell front top
    arRecvShape.lineTo(0.088, -0.046);  // magwell front bottom
    arRecvShape.lineTo(0.012, -0.044);  // magwell rear bottom
    arRecvShape.lineTo(-0.004, -0.022); // trigger area front
    arRecvShape.lineTo(-0.088, -0.022); // trigger area rear
    arRecvShape.lineTo(-0.105, -0.036); // grip tang
    arRecvShape.lineTo(-0.142, -0.034);
    arRecvShape.closePath();

    const arReceiver = new THREE.Mesh(
      createProfileGeometry(arRecvShape, 0.048, 0.0045, 0.004, 2),
      arGunmetalMat
    );
    arGroup.add(arReceiver);

    // Rounded upper receiver dome & brass deflector / ejection port detail
    const arUpperDome = new THREE.Mesh(
      new THREE.CylinderGeometry(0.024, 0.026, 0.295, 14),
      arGunmetalMat
    );
    arUpperDome.rotation.x = Math.PI / 2;
    arUpperDome.position.set(0, 0.028, 0.005);
    arGroup.add(arUpperDome);

    const arEjectionPort = new THREE.Mesh(
      new THREE.BoxGeometry(0.006, 0.018, 0.068),
      arChromeMat
    );
    arEjectionPort.position.set(0.026, 0.024, -0.02);
    arGroup.add(arEjectionPort);

    const arForwardAssist = new THREE.Mesh(
      new THREE.CylinderGeometry(0.006, 0.008, 0.032, 10),
      arAnodizedMat
    );
    arForwardAssist.rotation.x = Math.PI / 2;
    arForwardAssist.rotation.z = -0.35;
    arForwardAssist.position.set(0.028, 0.014, 0.082);
    arGroup.add(arForwardAssist);

    // Charging handle at rear of upper receiver
    const arChargingHandle = new THREE.Mesh(
      new THREE.BoxGeometry(0.036, 0.01, 0.022),
      arAnodizedMat
    );
    arChargingHandle.position.set(0, 0.04, 0.158);
    arGroup.add(arChargingHandle);

    // Buffer tube + tactical collapsible buttstock (extending behind camera/shoulder)
    const arBufferTube = new THREE.Mesh(
      new THREE.CylinderGeometry(0.016, 0.016, 0.18, 12),
      arAnodizedMat
    );
    arBufferTube.rotation.x = Math.PI / 2;
    arBufferTube.position.set(0, 0.02, 0.24);
    arGroup.add(arBufferTube);

    const arStock = new THREE.Mesh(
      new THREE.BoxGeometry(0.042, 0.095, 0.14),
      arPolymerMat
    );
    arStock.position.set(0, -0.008, 0.29);
    arGroup.add(arStock);

    // Vented Free-Float Tactical Handguard (octagonal profile + side vents)
    const arHandguard = new THREE.Mesh(
      new THREE.CylinderGeometry(0.029, 0.031, 0.235, 8),
      arAnodizedMat
    );
    arHandguard.rotation.x = Math.PI / 2;
    arHandguard.rotation.y = Math.PI / 8;
    arHandguard.position.set(0, 0.012, -0.26);
    arGroup.add(arHandguard);

    // Handguard cooling vents (M-LOK slots on both sides)
    for (let i = 0; i < 4; i++) {
      const ventZ = -0.18 - i * 0.048;
      for (const side of [-1, 1]) {
        const vent = new THREE.Mesh(
          new THREE.CapsuleGeometry(0.0042, 0.022, 4, 6),
          arPolymerMat
        );
        vent.rotation.x = Math.PI / 2;
        vent.position.set(side * 0.028, 0.012, ventZ);
        arGroup.add(vent);
      }
    }

    // Gas block + gas tube peeking at front of handguard
    const arGasBlock = new THREE.Mesh(
      new THREE.BoxGeometry(0.022, 0.034, 0.028),
      arBarrelSteelMat
    );
    arGasBlock.position.set(0, 0.018, -0.382);
    arGroup.add(arGasBlock);

    // Cylindrical Free-Float Barrel (16 segments)
    const arBarrel = new THREE.Mesh(
      new THREE.CylinderGeometry(0.0105, 0.012, 0.26, 16),
      arBarrelSteelMat
    );
    arBarrel.rotation.x = Math.PI / 2;
    arBarrel.position.set(0, 0.012, -0.40);
    arGroup.add(arBarrel);

    // Realistic Birdcage Flash Hider / Muzzle Brake
    const arFlashHider = new THREE.Mesh(
      new THREE.CylinderGeometry(0.0145, 0.0135, 0.056, 14),
      arAnodizedMat
    );
    arFlashHider.rotation.x = Math.PI / 2;
    arFlashHider.position.set(0, 0.012, -0.525);
    arGroup.add(arFlashHider);

    for (let i = 0; i < 2; i++) {
      const portRing = new THREE.Mesh(
        new THREE.TorusGeometry(0.0145, 0.0022, 6, 14),
        arBarrelSteelMat
      );
      portRing.position.set(0, 0.012, -0.512 - i * 0.022);
      arGroup.add(portRing);
    }

    // Full-Length Picatinny Top Rail with machined cross-slots
    const arRailBase = new THREE.Mesh(
      new THREE.BoxGeometry(0.026, 0.009, 0.46),
      arAnodizedMat
    );
    arRailBase.position.set(0, 0.052, -0.11);
    arGroup.add(arRailBase);

    for (let i = 0; i < 16; i++) {
      const tooth = new THREE.Mesh(
        new THREE.BoxGeometry(0.028, 0.004, 0.012),
        arGunmetalMat
      );
      tooth.position.set(0, 0.058, 0.10 - i * 0.028);
      arGroup.add(tooth);
    }

    // Cylindrical Red-Dot Optic (Aimpoint-style tube + riser mount + tinted lens + reticle dot)
    const opticRiser = new THREE.Mesh(
      new THREE.BoxGeometry(0.028, 0.022, 0.052),
      arAnodizedMat
    );
    opticRiser.position.set(0, 0.068, 0.01);
    arGroup.add(opticRiser);

    const opticClamp = new THREE.Mesh(
      new THREE.CylinderGeometry(0.0235, 0.0235, 0.032, 16),
      arGunmetalMat
    );
    opticClamp.rotation.x = Math.PI / 2;
    opticClamp.position.set(0, 0.094, 0.01);
    arGroup.add(opticClamp);

    // Hollow-look optic tube (outer housing + front/rear rings)
    const opticTube = new THREE.Mesh(
      new THREE.CylinderGeometry(0.021, 0.021, 0.096, 18, 1, true),
      arAnodizedMat
    );
    opticTube.material = arAnodizedMat.clone();
    opticTube.material.side = THREE.DoubleSide;
    opticTube.rotation.x = Math.PI / 2;
    opticTube.position.set(0, 0.094, 0.01);
    arGroup.add(opticTube);

    const opticFrontHood = new THREE.Mesh(
      new THREE.TorusGeometry(0.021, 0.0032, 8, 18),
      arGunmetalMat
    );
    opticFrontHood.position.set(0, 0.094, -0.038);
    arGroup.add(opticFrontHood);

    const opticRearHood = new THREE.Mesh(
      new THREE.TorusGeometry(0.021, 0.0032, 8, 18),
      arGunmetalMat
    );
    opticRearHood.position.set(0, 0.094, 0.058);
    arGroup.add(opticRearHood);

    // Optic adjustment turret caps (top & right)
    const opticTopCap = new THREE.Mesh(
      new THREE.CylinderGeometry(0.0065, 0.0065, 0.012, 10),
      arGunmetalMat
    );
    opticTopCap.position.set(0, 0.118, 0.01);
    arGroup.add(opticTopCap);

    const opticSideCap = new THREE.Mesh(
      new THREE.CylinderGeometry(0.0065, 0.0065, 0.012, 10),
      arGunmetalMat
    );
    opticSideCap.rotation.z = Math.PI / 2;
    opticSideCap.position.set(0.024, 0.094, 0.01);
    arGroup.add(opticSideCap);

    // Tinted reflective optic glass lens + glowing red reticle dot
    const opticLens = new THREE.Mesh(
      new THREE.CircleGeometry(0.019, 18),
      arLensMat
    );
    opticLens.position.set(0, 0.094, -0.022);
    arGroup.add(opticLens);

    const opticReticle = new THREE.Mesh(
      new THREE.SphereGeometry(0.0022, 8, 8),
      arReticleMat
    );
    opticReticle.position.set(0, 0.094, 0.005);
    arGroup.add(opticReticle);

    // Curved Segmented 30-Round Magazine (PMAG / STANAG)
    const arMagShape = new THREE.Shape();
    arMagShape.moveTo(0.018, -0.028);
    arMagShape.lineTo(0.082, -0.028);
    arMagShape.quadraticCurveTo(0.090, -0.102, 0.115, -0.172);
    arMagShape.lineTo(0.052, -0.186);
    arMagShape.quadraticCurveTo(0.028, -0.112, 0.018, -0.028);
    arMagShape.closePath();

    const arMag = new THREE.Mesh(
      createProfileGeometry(arMagShape, 0.030, 0.003, 0.0025, 2),
      arPolymerMat
    );
    arGroup.add(arMag);

    // Molded magazine grip ribs & floorplate
    for (let i = 0; i < 3; i++) {
      const rib = new THREE.Mesh(
        new THREE.BoxGeometry(0.038, 0.008, 0.068),
        arAnodizedMat
      );
      rib.position.set(0, -0.072 - i * 0.036, -0.056 - i * 0.011);
      rib.rotation.x = 0.24;
      arGroup.add(rib);
    }

    const arMagFloor = new THREE.Mesh(
      new THREE.BoxGeometry(0.040, 0.012, 0.072),
      arAnodizedMat
    );
    arMagFloor.position.set(0, -0.180, -0.086);
    arMagFloor.rotation.x = 0.26;
    arGroup.add(arMagFloor);

    // Angled Ergonomic Pistol Grip + Trigger Guard + Curved Trigger
    const arGrip = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.020, 0.078, 6, 12),
      arPolymerMat
    );
    arGrip.scale.set(0.88, 1.0, 1.15);
    arGrip.position.set(0, -0.078, 0.118);
    arGrip.rotation.x = -0.34;
    arGroup.add(arGrip);

    const arTriggerGuard = new THREE.Mesh(
      new THREE.BoxGeometry(0.014, 0.006, 0.068),
      arAnodizedMat
    );
    arTriggerGuard.position.set(0, -0.048, 0.042);
    arGroup.add(arTriggerGuard);

    const arTrigger = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.003, 0.018, 4, 6),
      arChromeMat
    );
    arTrigger.position.set(0, -0.034, 0.048);
    arTrigger.rotation.x = 0.35;
    arGroup.add(arTrigger);

    // Angled vertical foregrip under handguard
    const arForegrip = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.013, 0.048, 6, 10),
      arPolymerMat
    );
    arForegrip.position.set(0, -0.042, -0.25);
    arForegrip.rotation.x = 0.18;
    arGroup.add(arForegrip);

    const arMuzzleAnchor = new THREE.Object3D();
    arMuzzleAnchor.position.set(0, 0.012, -0.56);
    arGroup.add(arMuzzleAnchor);

    const arMuzzleFlash = this._createMuzzleFlash(0xffcc55, 1.0);
    arMuzzleFlash.position.copy(arMuzzleAnchor.position);
    arGroup.add(arMuzzleFlash);

    // CS2 first-person tactical hands & forearms (right grip + left handguard support)
    arGroup.add(buildARHands(armMats));

    this.viewmodels[WEAPON_IDS.AR] = arGroup;
    this.muzzleAnchors[WEAPON_IDS.AR] = arMuzzleAnchor;
    this.muzzleFlashes[WEAPON_IDS.AR] = arMuzzleFlash;
    this.weaponGroup.add(arGroup);

    // =========================================================================
    // 2. BOLT-ACTION PRECISION SNIPER (AWP Viewmodel)
    // =========================================================================
    const sniperGroup = new THREE.Group();

    const awpStockMat = new THREE.MeshStandardMaterial({
      color: 0x3b4a34, // Olive-drab tactical matte dark-green
      roughness: 0.76,
      metalness: 0.08,
    });
    const awpReceiverMat = new THREE.MeshStandardMaterial({
      color: 0x1e2228,
      roughness: 0.36,
      metalness: 0.80,
    });
    const awpBarrelMat = new THREE.MeshStandardMaterial({
      color: 0x1b1f25,
      roughness: 0.28,
      metalness: 0.86,
    });
    const awpScopeMat = new THREE.MeshStandardMaterial({
      color: 0x16191e,
      roughness: 0.38,
      metalness: 0.72,
    });
    const awpRubberMat = new THREE.MeshStandardMaterial({
      color: 0x141619,
      roughness: 0.90,
      metalness: 0.05,
    });
    const awpBoltSteelMat = new THREE.MeshStandardMaterial({
      color: 0xaab3be,
      roughness: 0.22,
      metalness: 0.92,
    });
    const awpLensMat = new THREE.MeshStandardMaterial({
      color: 0x0d2847,
      emissive: 0x0a2b4d,
      emissiveIntensity: 0.42,
      roughness: 0.08,
      metalness: 0.92,
    });

    // Iconic AWP Olive-Drab Synthetic Thumbhole Stock & Chassis
    const awpChassisShape = new THREE.Shape();
    awpChassisShape.moveTo(-0.28, 0.026);  // buttpad top
    awpChassisShape.lineTo(-0.15, 0.032);  // cheek riser top
    awpChassisShape.lineTo(-0.085, 0.012); // grip neck
    awpChassisShape.lineTo(0.14, 0.018);   // chassis under receiver
    awpChassisShape.lineTo(0.36, 0.015);   // forend top tip
    awpChassisShape.lineTo(0.36, -0.026);  // forend front face
    awpChassisShape.lineTo(0.15, -0.036);  // forend underside
    awpChassisShape.lineTo(0.02, -0.040);  // magwell area
    awpChassisShape.lineTo(-0.068, -0.044);
    awpChassisShape.lineTo(-0.105, -0.114); // pistol grip front bottom
    awpChassisShape.lineTo(-0.145, -0.108); // pistol grip rear bottom
    awpChassisShape.lineTo(-0.28, -0.086);  // lower buttstock rail
    awpChassisShape.closePath();

    // Thumbhole cutout in AWP stock
    const thumbhole = new THREE.Path();
    thumbhole.moveTo(-0.23, -0.014);
    thumbhole.lineTo(-0.145, -0.014);
    thumbhole.lineTo(-0.135, -0.072);
    thumbhole.lineTo(-0.23, -0.060);
    thumbhole.closePath();
    awpChassisShape.holes.push(thumbhole);

    const awpChassis = new THREE.Mesh(
      createProfileGeometry(awpChassisShape, 0.048, 0.005, 0.0045, 2),
      awpStockMat
    );
    sniperGroup.add(awpChassis);

    // Rubber recoil buttpad + adjustable cheek rest pad
    const awpButtpad = new THREE.Mesh(
      new THREE.BoxGeometry(0.052, 0.116, 0.022),
      awpRubberMat
    );
    awpButtpad.position.set(0, -0.030, 0.29);
    sniperGroup.add(awpButtpad);

    const awpCheekPad = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.025, 0.072, 6, 10),
      awpRubberMat
    );
    awpCheekPad.rotation.x = Math.PI / 2;
    awpCheekPad.scale.set(1.05, 1.0, 0.65);
    awpCheekPad.position.set(0, 0.030, 0.205);
    sniperGroup.add(awpCheekPad);

    // Steel Cylindrical Bolt-Action Receiver seated on top of chassis
    const awpReceiver = new THREE.Mesh(
      new THREE.CylinderGeometry(0.024, 0.025, 0.25, 14),
      awpReceiverMat
    );
    awpReceiver.rotation.x = Math.PI / 2;
    awpReceiver.position.set(0, 0.024, -0.01);
    sniperGroup.add(awpReceiver);

    // Top Picatinny scope rail
    const awpRail = new THREE.Mesh(
      new THREE.BoxGeometry(0.024, 0.01, 0.23),
      awpScopeMat
    );
    awpRail.position.set(0, 0.048, -0.015);
    sniperGroup.add(awpRail);

    // Long Heavy Cylindrical Fluted Barrel (16 segments)
    const awpBarrel = new THREE.Mesh(
      new THREE.CylinderGeometry(0.0125, 0.0165, 0.54, 16),
      awpBarrelMat
    );
    awpBarrel.rotation.x = Math.PI / 2;
    awpBarrel.position.set(0, 0.022, -0.40);
    sniperGroup.add(awpBarrel);

    // Subtle longitudinal fluting accents along barrel
    for (let i = 0; i < 4; i++) {
      const a = (i * Math.PI) / 2 + Math.PI / 4;
      const flute = new THREE.Mesh(
        new THREE.CylinderGeometry(0.0022, 0.0022, 0.36, 6),
        awpScopeMat
      );
      flute.rotation.x = Math.PI / 2;
      flute.position.set(
        Math.cos(a) * 0.0135,
        0.022 + Math.sin(a) * 0.0135,
        -0.44
      );
      sniperGroup.add(flute);
    }

    // Multi-Baffle Tactical Muzzle Brake
    const brakeCore = new THREE.Mesh(
      new THREE.CylinderGeometry(0.016, 0.015, 0.082, 12),
      awpReceiverMat
    );
    brakeCore.rotation.x = Math.PI / 2;
    brakeCore.position.set(0, 0.022, -0.705);
    sniperGroup.add(brakeCore);

    for (let i = 0; i < 3; i++) {
      const baffle = new THREE.Mesh(
        new THREE.BoxGeometry(0.042, 0.032, 0.012),
        awpBarrelMat
      );
      baffle.position.set(0, 0.022, -0.678 - i * 0.025);
      sniperGroup.add(baffle);
    }

    // Dual Scope Mount Rings
    for (const mountZ of [0.035, -0.105]) {
      const pedestal = new THREE.Mesh(
        new THREE.BoxGeometry(0.026, 0.026, 0.026),
        awpScopeMat
      );
      pedestal.position.set(0, 0.062, mountZ);
      sniperGroup.add(pedestal);

      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(0.021, 0.0045, 8, 16),
        awpScopeMat
      );
      ring.position.set(0, 0.088, mountZ);
      sniperGroup.add(ring);
    }

    // Realistic Cylindrical Telescopic Scope
    // Main tube
    const scopeMainTube = new THREE.Mesh(
      new THREE.CylinderGeometry(0.0195, 0.0195, 0.24, 16),
      awpScopeMat
    );
    scopeMainTube.rotation.x = Math.PI / 2;
    scopeMainTube.position.set(0, 0.088, -0.04);
    sniperGroup.add(scopeMainTube);

    // Flared Objective Bell (front)
    const scopeObjectiveTaper = new THREE.Mesh(
      new THREE.CylinderGeometry(0.029, 0.0195, 0.068, 18),
      awpScopeMat
    );
    scopeObjectiveTaper.rotation.x = Math.PI / 2;
    scopeObjectiveTaper.position.set(0, 0.088, -0.19);
    sniperGroup.add(scopeObjectiveTaper);

    const scopeObjectiveHood = new THREE.Mesh(
      new THREE.CylinderGeometry(0.030, 0.029, 0.045, 18),
      awpReceiverMat
    );
    scopeObjectiveHood.rotation.x = Math.PI / 2;
    scopeObjectiveHood.position.set(0, 0.088, -0.245);
    sniperGroup.add(scopeObjectiveHood);

    // Front dark blue-tinted objective lens
    const scopeFrontLens = new THREE.Mesh(
      new THREE.CircleGeometry(0.027, 18),
      awpLensMat
    );
    scopeFrontLens.rotation.y = Math.PI;
    scopeFrontLens.position.set(0, 0.088, -0.268);
    sniperGroup.add(scopeFrontLens);

    // Ocular Eyepiece (rear) + rubber eye-cup + rear tinted lens
    const scopeOcular = new THREE.Mesh(
      new THREE.CylinderGeometry(0.020, 0.0245, 0.068, 18),
      awpScopeMat
    );
    scopeOcular.rotation.x = Math.PI / 2;
    scopeOcular.position.set(0, 0.088, 0.112);
    sniperGroup.add(scopeOcular);

    const scopeEyeRing = new THREE.Mesh(
      new THREE.TorusGeometry(0.0245, 0.0038, 8, 18),
      awpRubberMat
    );
    scopeEyeRing.position.set(0, 0.088, 0.146);
    sniperGroup.add(scopeEyeRing);

    const scopeRearLens = new THREE.Mesh(
      new THREE.CircleGeometry(0.022, 18),
      awpLensMat
    );
    scopeRearLens.position.set(0, 0.088, 0.145);
    sniperGroup.add(scopeRearLens);

    // Elevation (top), Windage (right), and Parallax (left) Turrets
    const turretBox = new THREE.Mesh(
      new THREE.BoxGeometry(0.044, 0.044, 0.044),
      awpScopeMat
    );
    turretBox.position.set(0, 0.088, -0.035);
    sniperGroup.add(turretBox);

    const elevTurret = new THREE.Mesh(
      new THREE.CylinderGeometry(0.011, 0.012, 0.022, 14),
      awpReceiverMat
    );
    elevTurret.position.set(0, 0.118, -0.035);
    sniperGroup.add(elevTurret);

    const windTurret = new THREE.Mesh(
      new THREE.CylinderGeometry(0.010, 0.011, 0.020, 14),
      awpReceiverMat
    );
    windTurret.rotation.z = Math.PI / 2;
    windTurret.position.set(0.028, 0.088, -0.035);
    sniperGroup.add(windTurret);

    const parallaxTurret = new THREE.Mesh(
      new THREE.CylinderGeometry(0.010, 0.011, 0.018, 14),
      awpReceiverMat
    );
    parallaxTurret.rotation.z = Math.PI / 2;
    parallaxTurret.position.set(-0.027, 0.088, -0.035);
    sniperGroup.add(parallaxTurret);

    // Metallic Bolt Action Assembly + Angled Bolt Handle + Spherical Bolt Knob (right side)
    const boltBody = new THREE.Mesh(
      new THREE.CylinderGeometry(0.012, 0.012, 0.10, 12),
      awpBoltSteelMat
    );
    boltBody.rotation.x = Math.PI / 2;
    boltBody.position.set(0.008, 0.024, 0.072);
    sniperGroup.add(boltBody);

    const boltStem = new THREE.Mesh(
      new THREE.CylinderGeometry(0.0045, 0.0055, 0.056, 10),
      awpBoltSteelMat
    );
    boltStem.rotation.z = -1.18;
    boltStem.rotation.y = -0.22;
    boltStem.position.set(0.040, 0.014, 0.074);
    sniperGroup.add(boltStem);

    const boltKnob = new THREE.Mesh(
      new THREE.SphereGeometry(0.0115, 14, 12),
      awpBoltSteelMat
    );
    boltKnob.position.set(0.066, 0.002, 0.080);
    sniperGroup.add(boltKnob);

    // Detachable Box Magazine + Folded Bipod Legs
    const awpMag = new THREE.Mesh(
      new THREE.BoxGeometry(0.036, 0.078, 0.082),
      awpScopeMat
    );
    awpMag.position.set(0, -0.066, -0.065);
    sniperGroup.add(awpMag);

    for (const side of [-1, 1]) {
      const bipodLeg = new THREE.Mesh(
        new THREE.CylinderGeometry(0.0055, 0.0055, 0.19, 8),
        awpScopeMat
      );
      bipodLeg.rotation.x = Math.PI / 2;
      bipodLeg.position.set(side * 0.028, -0.030, -0.27);
      sniperGroup.add(bipodLeg);
    }

    const sniperMuzzleAnchor = new THREE.Object3D();
    sniperMuzzleAnchor.position.set(0, 0.022, -0.76);
    sniperGroup.add(sniperMuzzleAnchor);

    const sniperMuzzleFlash = this._createMuzzleFlash(0x7df9ff, 1.35);
    sniperMuzzleFlash.position.copy(sniperMuzzleAnchor.position);
    sniperGroup.add(sniperMuzzleFlash);

    // CS2 first-person tactical hands & forearms (right thumbhole grip + left forend support)
    sniperGroup.add(buildSniperHands(armMats));

    sniperGroup.visible = false;
    this.viewmodels[WEAPON_IDS.SNIPER] = sniperGroup;
    this.muzzleAnchors[WEAPON_IDS.SNIPER] = sniperMuzzleAnchor;
    this.muzzleFlashes[WEAPON_IDS.SNIPER] = sniperMuzzleFlash;
    this.weaponGroup.add(sniperGroup);

    // =========================================================================
    // 3. CS2 TERRORIST-SIDE KNIFE (Curved Bowie Blade + Sculpted Gloved Hand)
    //    Preserves exact CS2 T-side inward-angled diagonal grip & slash/stab!
    // =========================================================================
    const knifeGroup = new THREE.Group();

    const tHandleMat = new THREE.MeshStandardMaterial({
      color: 0x281f18,
      roughness: 0.84,
      metalness: 0.10,
    });
    const tWrapMat = new THREE.MeshStandardMaterial({
      color: 0x453528,
      roughness: 0.88,
      metalness: 0.08,
    });
    const tGuardMat = new THREE.MeshStandardMaterial({
      color: 0x252a32,
      roughness: 0.38,
      metalness: 0.82,
    });
    const tBladeMat = new THREE.MeshStandardMaterial({
      color: 0x76828f,
      roughness: 0.26,
      metalness: 0.88,
    });
    const tEdgeMat = new THREE.MeshStandardMaterial({
      color: 0xe3ecf5,
      roughness: 0.14,
      metalness: 0.96,
    });

    // Upgraded CS2 T-side tactical glove, carbon knuckle guard, velcro strap, watch & articulated fingers
    knifeGroup.add(buildKnifeHand(armMats));

    // Knife sub-assembly held in exact CS2 T-side inward-angled horizontal/diagonal stance
    const tKnife = new THREE.Group();
    tKnife.position.set(-0.015, -0.018, 0.01);
    tKnife.rotation.set(0.28, 0.92, 0.68);

    // Dark Leather-Wrapped Cylindrical Handle (ovalized) + Stacked Grip Rings + Forged Pommel
    const kHandle = new THREE.Mesh(
      new THREE.CylinderGeometry(0.016, 0.0175, 0.128, 14),
      tHandleMat
    );
    kHandle.rotation.x = Math.PI / 2;
    kHandle.scale.set(0.78, 1.0, 1.18);
    kHandle.position.set(0, 0, 0.026);
    tKnife.add(kHandle);

    for (let i = 0; i < 4; i++) {
      const kRing = new THREE.Mesh(
        new THREE.TorusGeometry(0.0165, 0.0032, 7, 14),
        tWrapMat
      );
      kRing.scale.set(0.80, 1.18, 1.0);
      kRing.position.set(0, 0, -0.020 + i * 0.028);
      tKnife.add(kRing);
    }

    const kPommel = new THREE.Mesh(
      new THREE.CylinderGeometry(0.0185, 0.015, 0.024, 14),
      tGuardMat
    );
    kPommel.rotation.x = Math.PI / 2;
    kPommel.scale.set(0.82, 1.0, 1.2);
    kPommel.position.set(0, 0, 0.098);
    tKnife.add(kPommel);

    // Forged Steel Crossguard (beveled/rounded double quillon)
    const kGuard = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.011, 0.056, 6, 12),
      tGuardMat
    );
    kGuard.scale.set(1.25, 1.0, 0.85);
    kGuard.position.set(0, -0.003, -0.044);
    tKnife.add(kGuard);

    // ExtrudeGeometry Curved Bowie / Clip-Point Steel Blade with Beveled Edges
    const kBlade = new THREE.Mesh(createBowieBladeGeometry(1.0), tBladeMat);
    tKnife.add(kBlade);

    // Honed Silver Cutting Edge Highlight along the curved belly
    const kEdgeShape = new THREE.Shape();
    kEdgeShape.moveTo(0.072, -0.025);
    kEdgeShape.lineTo(0.124, -0.030);
    kEdgeShape.bezierCurveTo(0.204, -0.035, 0.270, -0.022, 0.300, 0.014);
    kEdgeShape.bezierCurveTo(0.268, -0.015, 0.200, -0.026, 0.124, -0.022);
    kEdgeShape.lineTo(0.072, -0.019);
    kEdgeShape.closePath();

    const kHonedEdge = new THREE.Mesh(
      createProfileGeometry(kEdgeShape, 0.0022, 0.0014, 0.0012, 2),
      tEdgeMat
    );
    tKnife.add(kHonedEdge);

    // Milled Fuller Groove along upper blade flat
    const kFuller = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.0032, 0.105, 4, 8),
      tGuardMat
    );
    kFuller.rotation.x = Math.PI / 2;
    kFuller.scale.set(1.55, 1.0, 1.0);
    kFuller.position.set(0, 0.008, -0.125);
    tKnife.add(kFuller);

    knifeGroup.add(tKnife);
    knifeGroup.position.set(0.02, -0.015, 0.02);
    knifeGroup.visible = false;
    this.viewmodels[WEAPON_IDS.KNIFE] = knifeGroup;
    this.weaponGroup.add(knifeGroup);

    this.camera.add(this.weaponGroup);
  }

  setInputEnabled(enabled) {
    this.inputEnabled = Boolean(enabled);
    if (!this.inputEnabled) {
      this.keys.clear();
      this.isADS = false;
      this.cancelInspect();
    }
  }

  queueJump() {
    if (!this.inputEnabled) return;
    this.physics.queueJump();
  }

  startInspect() {
    if (this.isReloading || this.isADS || this.knifeSwingTimer > 0) return;
    const duration = WEAPONS[this.weaponId].isMelee ? 2.4 : 2.8;
    if (this.isInspecting) {
      // If already in the blend-out tail, restart smoothly; otherwise continue cleanly
      if (this.inspectElapsed >= this.inspectDuration * 0.78) {
        this.inspectElapsed = 0;
        this.inspectDuration = duration;
      }
      return;
    }
    this.isInspecting = true;
    this.inspectElapsed = 0;
    this.inspectDuration = duration;
  }

  cancelInspect() {
    this.isInspecting = false;
    this.inspectElapsed = 0;
  }

  setADS(active) {
    const next = Boolean(active);
    if (next && (this.isReloading || WEAPONS[this.weaponId].isMelee)) {
      return;
    }
    if (next) {
      this.cancelInspect();
    }
    this.isADS = next;
  }

  switchWeapon(weaponId) {
    if (!WEAPONS[weaponId] || weaponId === this.weaponId) return;

    this.cancelInspect();

    // Hide any active muzzle flash on the outgoing weapon
    const prevFlash = this.muzzleFlashes[this.weaponId];
    if (prevFlash) prevFlash.visible = false;
    this.muzzleFlashTimer = 0;

    this.weaponId = weaponId;
    this.isReloading = false;
    this.reloadElapsedMs = 0;
    this.isADS = false;
    this.adsProgress = 0;
    this.sprayShotIndex = 0;
    this.sprayRecoilPitch = 0;
    this.sprayRecoilYaw = 0;

    // Snappy weapon draw kick
    this.weaponKickZ = 0.04;
    this.weaponKickPitch = -0.14;

    for (const id of Object.keys(this.viewmodels)) {
      this.viewmodels[id].visible = id === this.weaponId;
    }
    this.weaponGroup.visible = true;
    this._weaponChangedFlag = true;
  }

  startReload() {
    const weapon = WEAPONS[this.weaponId];
    if (weapon.isMelee || this.isReloading) return;
    if (this.ammo[this.weaponId] >= weapon.magSize) return;

    this.cancelInspect();
    this.isReloading = true;
    this.reloadElapsedMs = 0;
    this.isADS = false;
    this.sprayShotIndex = 0;
    this.sprayRecoilPitch = 0;
    this.sprayRecoilYaw = 0;
    this._reloadStartedFlag = true;
  }

  setBaseFov(fov) {
    if (typeof fov === 'number' && Number.isFinite(fov)) {
      this.baseFov = fov;
      const weapon = WEAPONS[this.weaponId];
      const targetFov = this.baseFov * lerp(1, weapon.adsFovMult, this.adsProgress);
      if (Math.abs(this.camera.fov - targetFov) > 0.01) {
        this.camera.fov = targetFov;
        this.camera.updateProjectionMatrix();
      }
    }
  }

  isScoped() {
    const weapon = WEAPONS[this.weaponId];
    return Boolean(weapon.hasScope && this.adsProgress > 0.85);
  }

  isAutomaticWeapon() {
    return Boolean(WEAPONS[this.weaponId].automatic);
  }

  isMeleeWeapon() {
    return Boolean(WEAPONS[this.weaponId].isMelee);
  }

  handleMouseMove(
    dx,
    dy,
    sensitivity = DEFAULT_SETTINGS.sensitivity,
    adsSensitivity = DEFAULT_SETTINGS.adsSensitivity
  ) {
    const adsScale = lerp(1, adsSensitivity, this.adsProgress);
    const effectiveSens = sensitivity * adsScale;
    this.yaw -= dx * 0.0022 * effectiveSens;
    this.pitch -= dy * 0.0022 * effectiveSens;
    this.pitch = clamp(
      this.pitch,
      -PLAYER_CONFIG.PITCH_LIMIT,
      PLAYER_CONFIG.PITCH_LIMIT
    );
  }

  _computeCurrentSpread() {
    const weapon = WEAPONS[this.weaponId];
    const baseSpread = lerp(
      weapon.spreadBase,
      weapon.spreadAds,
      this.adsProgress
    );

    let spread;
    if (!this.grounded) {
      spread = weapon.spreadAir;
    } else if (this.isCounterStrafed || this.adsProgress >= 0.95) {
      spread = baseSpread;
    } else {
      const threshold = PHYSICS_CONFIG.COUNTER_STRAFE_SPEED_THRESHOLD;
      const moveFrac = clamp(
        (this.horizSpeed - threshold) /
          Math.max(0.01, PHYSICS_CONFIG.RUN_SPEED - threshold),
        0,
        1
      );
      const moveBlend = moveFrac * (1 - this.adsProgress);
      spread = lerp(baseSpread, Math.max(baseSpread, weapon.spreadMove), moveBlend);
    }

    if (this.isCrouching) {
      spread *= weapon.spreadCrouchMult;
    }

    return spread;
  }

  update(dt, colliders = []) {
    const clampedDt = Math.min(dt, 0.05);
    const dtMs = clampedDt * 1000;
    const weapon = WEAPONS[this.weaponId];

    // Step CS2 physics
    const forward =
      (this.keys.has('KeyW') ? 1 : 0) - (this.keys.has('KeyS') ? 1 : 0);
    const right =
      (this.keys.has('KeyD') ? 1 : 0) - (this.keys.has('KeyA') ? 1 : 0);
    const crouch =
      this.keys.has('ControlLeft') ||
      this.keys.has('ControlRight') ||
      this.keys.has('KeyC');
    const adsMult = lerp(1, PHYSICS_CONFIG.ADS_SPEED_MULT, this.adsProgress);

    const stepResult = this.physics.step(
      clampedDt,
      {
        forward,
        right,
        yaw: this.yaw,
        crouch,
        adsMult,
        weaponSpeedMult: weapon.speedMult ?? 1,
      },
      colliders
    );

    this.position.set(stepResult.pos.x, stepResult.pos.y, stepResult.pos.z);
    this.velocity.set(stepResult.vel.x, stepResult.vel.y, stepResult.vel.z);
    this.eyeHeight = stepResult.eyeHeight;
    this.grounded = stepResult.grounded;
    this.isCrouching = stepResult.isCrouching;
    this.horizSpeed = stepResult.horizSpeed;
    this.speedUnits = stepResult.speedUnits;
    this.isCounterStrafed = stepResult.isCounterStrafed;

    // Reload timer
    let reloadFinished = false;
    if (this.isReloading) {
      this.reloadElapsedMs += dtMs;
      if (this.reloadElapsedMs >= weapon.reloadTimeMs) {
        this.ammo[this.weaponId] = weapon.magSize;
        this.isReloading = false;
        this.reloadElapsedMs = 0;
        reloadFinished = true;
      }
    }

    // ADS interpolation
    const adsTarget = this.isADS && !this.isReloading ? 1 : 0;
    const adsAlpha = 1 - Math.exp(-weapon.adsSpeed * clampedDt);
    this.adsProgress += (adsTarget - this.adsProgress) * adsAlpha;
    if (Math.abs(adsTarget - this.adsProgress) < 0.002) {
      this.adsProgress = adsTarget;
    }

    // Camera FOV lerp for ADS zoom
    const targetFov = this.baseFov * lerp(1, weapon.adsFovMult, this.adsProgress);
    if (Math.abs(this.camera.fov - targetFov) > 0.01) {
      this.camera.fov = targetFov;
      this.camera.updateProjectionMatrix();
    }

    // Recoil, CS2 spray pattern decay, & viewmodel kickback recovery
    const recoilDecay = Math.exp(-weapon.recoilRecovery * clampedDt);
    this.recoilPitch *= recoilDecay;
    this.recoilYaw *= recoilDecay;

    const resetDelayMs = weapon.recoilResetDelayMs || 180;
    if (performance.now() - this.lastFireTime > resetDelayMs) {
      if (this.sprayShotIndex > 0) {
        const decayRate = weapon.recoilDecayRate ?? 11.0;
        this.sprayShotIndex = Math.max(
          0,
          this.sprayShotIndex - decayRate * clampedDt
        );
      }
      this.sprayRecoilPitch *= recoilDecay;
      this.sprayRecoilYaw *= recoilDecay;
      if (Math.abs(this.sprayRecoilPitch) < 0.0001) this.sprayRecoilPitch = 0;
      if (Math.abs(this.sprayRecoilYaw) < 0.0001) this.sprayRecoilYaw = 0;
    }

    const kickDecay = Math.exp(-16 * clampedDt);
    this.weaponKickZ *= kickDecay;
    this.weaponKickPitch *= kickDecay;

    // Weapon walk bob (damped during ADS)
    const targetBob =
      this.grounded && this.horizSpeed > 0.25
        ? Math.min(this.horizSpeed / PHYSICS_CONFIG.RUN_SPEED, 1)
        : 0;
    this.bobAmount += (targetBob - this.bobAmount) * Math.min(1, 12 * clampedDt);
    if (this.bobAmount > 0.001) {
      this.bobTime += clampedDt * 11;
    }

    const bobScale = 1 - this.adsProgress * 0.85;
    const bobX = Math.cos(this.bobTime) * 0.008 * this.bobAmount * bobScale;
    const bobY =
      Math.abs(Math.sin(this.bobTime)) * 0.009 * this.bobAmount * bobScale;

    // Reload tilt animation envelope
    const reloadProgress = this.isReloading
      ? clamp(this.reloadElapsedMs / weapon.reloadTimeMs, 0, 1)
      : 0;
    const reloadEnv = this.isReloading ? Math.sin(reloadProgress * Math.PI) : 0;

    // Knife melee swing animation
    let swingX = 0;
    let swingY = 0;
    let swingZ = 0;
    let swingPitch = 0;
    let swingYaw = 0;
    let swingRoll = 0;
    if (this.knifeSwingTimer > 0) {
      this.knifeSwingTimer = Math.max(0, this.knifeSwingTimer - dtMs);
      const t = 1 - this.knifeSwingTimer / this.knifeSwingDuration;
      const env = Math.sin(t * Math.PI);
      if (this.knifeSwingHeavy) {
        // CS2 T-side heavy downward-forward stab arc
        swingX = -0.16 * env;
        swingY = -0.08 * env;
        swingZ = -0.22 * env;
        swingPitch = -0.52 * env;
        swingYaw = 0.28 * env;
        swingRoll = 0.32 * env;
      } else {
        // CS2 T-side crisp horizontal right-to-left slash
        swingX = -0.28 * env;
        swingY = 0.02 * env;
        swingZ = -0.12 * env;
        swingYaw = 0.78 * env;
        swingRoll = 0.42 * env;
      }
    }

    // CS2 F-key weapon & knife inspect animation
    let inspectX = 0;
    let inspectY = 0;
    let inspectZ = 0;
    let inspectPitch = 0;
    let inspectYaw = 0;
    let inspectRoll = 0;
    if (this.isInspecting) {
      if (this.isReloading || this.isADS || this.knifeSwingTimer > 0) {
        this.cancelInspect();
      } else {
        this.inspectElapsed += clampedDt;
        if (this.inspectElapsed >= this.inspectDuration) {
          this.cancelInspect();
        } else {
          const p = clamp(this.inspectElapsed / this.inspectDuration, 0, 1);
          if (weapon.isMelee) {
            // Iconic CS2 T-side curved Bowie knife inspect (2.4s)
            if (p < 0.20) {
              const u = smoothstep(p / 0.20);
              inspectX = lerp(0, -0.075, u);
              inspectY = lerp(0, 0.052, u);
              inspectZ = lerp(0, 0.075, u);
              inspectPitch = lerp(0, 0.32, u);
              inspectYaw = lerp(0, 0.38, u);
              inspectRoll = lerp(0, -0.52, u);
            } else if (p < 0.52) {
              const u = smoothstep((p - 0.20) / 0.32);
              inspectX = lerp(-0.075, -0.088, u);
              inspectY = lerp(0.052, 0.060, u);
              inspectZ = lerp(0.075, 0.082, u);
              inspectPitch = lerp(0.32, 0.38, u);
              inspectYaw = lerp(0.38, 0.50, u);
              inspectRoll = lerp(-0.52, -0.84, u);
            } else if (p < 0.82) {
              const u = smoothstep((p - 0.52) / 0.30);
              const arc = Math.sin(u * Math.PI);
              inspectX = lerp(-0.088, -0.052, u);
              inspectY = lerp(0.060, 0.040, u) + arc * 0.016;
              inspectZ = lerp(0.082, 0.064, u);
              inspectPitch = lerp(0.38, 0.16, u);
              inspectYaw = lerp(0.50, -0.46, u);
              inspectRoll = lerp(-0.84, 0.72, u);
            } else {
              const u = smoothstep((p - 0.82) / 0.18);
              inspectX = lerp(-0.052, 0, u);
              inspectY = lerp(0.040, 0, u);
              inspectZ = lerp(0.064, 0, u);
              inspectPitch = lerp(0.16, 0, u);
              inspectYaw = lerp(-0.46, 0, u);
              inspectRoll = lerp(0.72, 0, u);
            }
          } else {
            // CS2 AR & AWP rifle inspect (2.8s): left profile -> gentle sway -> right side flip -> ready
            if (p < 0.22) {
              const u = smoothstep(p / 0.22);
              inspectX = lerp(0, -0.12, u);
              inspectY = lerp(0, 0.046, u);
              inspectZ = lerp(0, 0.04, u);
              inspectPitch = lerp(0, 0.14, u);
              inspectYaw = lerp(0, 0.62, u);
              inspectRoll = lerp(0, -0.34, u);
            } else if (p < 0.55) {
              const u = (p - 0.22) / 0.33;
              const s = Math.sin(u * Math.PI);
              inspectX = -0.12 - 0.014 * s;
              inspectY = 0.046 + 0.008 * s;
              inspectZ = 0.04 + 0.012 * s;
              inspectPitch = 0.14 + 0.055 * s;
              inspectYaw = 0.62 + 0.095 * s;
              inspectRoll = -0.34 - 0.11 * s;
            } else if (p < 0.82) {
              const u = smoothstep((p - 0.55) / 0.27);
              const arc = Math.sin(u * Math.PI);
              inspectX = lerp(-0.12, -0.04, u);
              inspectY = lerp(0.046, 0.032, u) + arc * 0.014;
              inspectZ = lerp(0.04, 0.025, u);
              inspectPitch = lerp(0.14, 0.10, u);
              inspectYaw = lerp(0.62, -0.34, u);
              inspectRoll = lerp(-0.34, 0.58, u);
            } else {
              const u = smoothstep((p - 0.82) / 0.18);
              inspectX = lerp(-0.04, 0, u);
              inspectY = lerp(0.032, 0, u);
              inspectZ = lerp(0.025, 0, u);
              inspectPitch = lerp(0.10, 0, u);
              inspectYaw = lerp(-0.34, 0, u);
              inspectRoll = lerp(0.58, 0, u);
            }
          }
        }
      }
    }

    // Interpolate weapon position from hip-fire to centered ADS
    const baseX = lerp(HIP_POS.x, ADS_POS.x, this.adsProgress);
    const baseY = lerp(HIP_POS.y, ADS_POS.y, this.adsProgress);
    const baseZ = lerp(HIP_POS.z, ADS_POS.z, this.adsProgress);

    this.weaponGroup.position.set(
      baseX + bobX + swingX + inspectX,
      baseY - bobY - reloadEnv * 0.11 + swingY + inspectY,
      baseZ + this.weaponKickZ + swingZ + inspectZ
    );
    this.weaponGroup.rotation.set(
      this.weaponKickPitch - reloadEnv * 0.36 + swingPitch + inspectPitch,
      swingYaw + inspectYaw,
      reloadEnv * 0.42 + swingRoll + inspectRoll
    );

    const scoped = this.isScoped();
    this.weaponGroup.visible = !scoped;

    // Muzzle flash timer
    if (this.muzzleFlashTimer > 0) {
      this.muzzleFlashTimer -= dtMs;
      if (this.muzzleFlashTimer <= 0) {
        this.muzzleFlashTimer = 0;
        const activeFlash = this.muzzleFlashes[this.weaponId];
        if (activeFlash) activeFlash.visible = false;
      }
    }

    this.updateEffects(clampedDt);

    this._syncCamera();

    const currentSpread = this._computeCurrentSpread();
    const spreadNormalized = clamp(
      currentSpread / Math.max(weapon.spreadAir, 0.001),
      0,
      1
    );

    const weaponChanged = this._weaponChangedFlag;
    const reloadStarted = this._reloadStartedFlag;
    this._weaponChangedFlag = false;
    this._reloadStartedFlag = false;

    return {
      speedUnits: stepResult.speedUnits,
      isBhopSpeed:
        stepResult.speedUnits >= PHYSICS_CONFIG.BHOP_SPEED_HIGHLIGHT_UNITS,
      grounded: stepResult.grounded,
      isCrouching: stepResult.isCrouching,
      justJumped: stepResult.justJumped,
      justBhopped: stepResult.justBhopped,
      justLanded: stepResult.justLanded,
      weaponChanged,
      reloadStarted,
      reloadFinished,
      spreadNormalized,
      isScoped: scoped,
      weaponHUD: {
        weaponId: this.weaponId,
        weaponName: weapon.name,
        ammo: this.ammo[this.weaponId],
        magSize: weapon.magSize,
        isReloading: this.isReloading,
        reloadProgress,
      },
    };
  }

  updateEffects(dt) {
    const clampedDt = Math.min(dt, 0.05);
    const dtMs = clampedDt * 1000;

    for (let i = this.tracers.length - 1; i >= 0; i--) {
      const tracer = this.tracers[i];
      tracer.ageMs += dtMs;
      if (tracer.ageMs >= tracer.durationMs) {
        this.scene.remove(tracer.mesh);
        tracer.mesh.geometry.dispose();
        tracer.mesh.material.dispose();
        this.tracers.splice(i, 1);
      } else {
        tracer.mesh.material.opacity =
          0.9 * (1 - tracer.ageMs / tracer.durationMs);
      }
    }

    for (let i = this.impactParticles.length - 1; i >= 0; i--) {
      const p = this.impactParticles[i];
      p.ageMs += dtMs;
      if (p.ageMs >= p.durationMs) {
        this.scene.remove(p.mesh);
        p.mesh.material.dispose();
        this.impactParticles.splice(i, 1);
      } else {
        p.vel.y -= 9.8 * clampedDt;
        p.mesh.position.addScaledVector(p.vel, clampedDt);
        const life = 1 - p.ageMs / p.durationMs;
        p.mesh.material.opacity = life * (p.isSpark ? 0.95 : 0.72);
        p.mesh.scale.setScalar(p.initialScale * (0.2 + 0.8 * life));
      }
    }
  }

  _syncCamera() {
    this.camera.position.set(
      this.position.x,
      this.position.y + this.eyeHeight,
      this.position.z
    );
    this.camera.rotation.set(
      this.pitch + this.recoilPitch,
      this.yaw + this.recoilYaw,
      0,
      'YXZ'
    );
  }

  tryShoot(mapMeshes = [], remoteHitboxes = [], isHeavy = false) {
    this.cancelInspect();
    const weapon = WEAPONS[this.weaponId];
    const isMelee = Boolean(weapon.isMelee);
    if (!isMelee && this.isReloading) return null;

    if (!isMelee && this.ammo[this.weaponId] <= 0) {
      this.startReload();
      return null;
    }

    const now = performance.now();
    const cooldown =
      isMelee && isHeavy && weapon.heavyCooldownMs
        ? weapon.heavyCooldownMs
        : weapon.fireCooldownMs;
    if (now - this.lastFireTime < cooldown) {
      return null;
    }
    this.lastFireTime = now;

    // Ensure camera matrix reflects current aim before raycasting
    this._syncCamera();
    this.camera.updateMatrixWorld(true);

    // Raycast from screen center with CS2 deterministic spray pattern + dynamic spread cone (melee has 0 spread)
    this.raycaster.setFromCamera(CENTER_NDC, this.camera);
    const hasSprayPattern =
      !isMelee &&
      Array.isArray(weapon.sprayPattern) &&
      weapon.sprayPattern.length > 0;
    if (hasSprayPattern) {
      const pattern = weapon.sprayPattern;
      const idx = Math.min(Math.floor(this.sprayShotIndex), pattern.length - 1);
      const [patPitch, patYaw] = pattern[idx];
      const crouchScale = this.isCrouching ? 0.78 : 1.0;
      this.sprayRecoilPitch = patPitch * crouchScale;
      this.sprayRecoilYaw = patYaw * crouchScale;
    } else {
      this.sprayRecoilPitch = 0;
      this.sprayRecoilYaw = 0;
    }

    const spread = isMelee ? 0 : this._computeCurrentSpread();
    if (
      spread > 0 ||
      this.sprayRecoilPitch !== 0 ||
      this.sprayRecoilYaw !== 0
    ) {
      this.camera.matrixWorld.extractBasis(
        this._camRight,
        this._camUp,
        this._camForward
      );
      if (this.sprayRecoilPitch !== 0 || this.sprayRecoilYaw !== 0) {
        this.raycaster.ray.direction
          .addScaledVector(this._camUp, this.sprayRecoilPitch)
          .addScaledVector(this._camRight, this.sprayRecoilYaw);
      }
      if (spread > 0) {
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.sqrt(Math.random()) * spread;
        this.raycaster.ray.direction
          .addScaledVector(this._camRight, Math.cos(angle) * radius)
          .addScaledVector(this._camUp, Math.sin(angle) * radius);
      }
      this.raycaster.ray.direction.normalize();
    }

    this.raycaster.near = 0;
    this.raycaster.far = weapon.maxRange;

    const mapHits =
      mapMeshes && mapMeshes.length > 0
        ? this.raycaster.intersectObjects(mapMeshes, true)
        : [];
    const wallDistance =
      mapHits.length > 0 ? mapHits[0].distance : weapon.maxRange;

    const playerHits =
      remoteHitboxes && remoteHitboxes.length > 0
        ? this.raycaster.intersectObjects(remoteHitboxes, false)
        : [];

    const isMidAir = !this.grounded;
    let hit = null;
    let hitPoint;

    if (playerHits.length > 0 && playerHits[0].distance < wallDistance) {
      const playerHit = playerHits[0];
      const isHeadshot = playerHit.object.userData.hitbox === 'head';
      const damage = isMelee && isHeavy
        ? weapon.heavyDamage
        : isHeadshot
          ? weapon.headDamage
          : weapon.bodyDamage;
      hit = {
        damage,
        isHeadshot,
        isMidAir,
      };
      hitPoint = playerHit.point.clone();
    } else if (mapHits.length > 0) {
      hitPoint = mapHits[0].point.clone();
      if (!isMelee && mapHits[0].face) {
        const worldNormal = mapHits[0].face.normal
          .clone()
          .transformDirection(mapHits[0].object.matrixWorld)
          .normalize();
        this.spawnBulletImpact(mapHits[0].point, worldNormal);
      }
    } else {
      hitPoint = this.raycaster.ray.origin
        .clone()
        .addScaledVector(this.raycaster.ray.direction, weapon.maxRange);
    }

    if (isMelee) {
      this.knifeSwingHeavy = Boolean(isHeavy);
      this.knifeSwingDuration = isHeavy ? 280 : 210;
      this.knifeSwingTimer = this.knifeSwingDuration;
    } else {
      // Decrement ammo and auto-reload when empty
      this.ammo[this.weaponId] = Math.max(0, this.ammo[this.weaponId] - 1);
      if (this.ammo[this.weaponId] === 0) {
        this.startReload();
      }

      // Spawn weapon-colored tracer from active weapon muzzle
      const muzzleWorldPos = new THREE.Vector3();
      const activeAnchor = this.muzzleAnchors[this.weaponId];
      if (activeAnchor) {
        activeAnchor.getWorldPosition(muzzleWorldPos);
        this.spawnTracer(
          [muzzleWorldPos.x, muzzleWorldPos.y, muzzleWorldPos.z],
          [hitPoint.x, hitPoint.y, hitPoint.z],
          this.weaponId
        );
      }

      // Apply recoil, kickback, and muzzle flash
      if (hasSprayPattern) {
        const vpRatio = weapon.viewpunchRatio ?? 0.55;
        this.recoilPitch = Math.max(
          this.recoilPitch + weapon.recoilPitch * vpRatio,
          this.sprayRecoilPitch * vpRatio
        );
        this.recoilYaw =
          -this.sprayRecoilYaw * vpRatio +
          (Math.random() * 2 - 1) * weapon.recoilYawSpread;
        if (!this.isReloading) {
          this.sprayShotIndex = Math.min(
            this.sprayShotIndex + 1,
            weapon.sprayPattern.length - 1
          );
        }
      } else {
        this.recoilPitch += weapon.recoilPitch;
        this.recoilYaw += (Math.random() * 2 - 1) * weapon.recoilYawSpread;
      }

      const isSniper = this.weaponId === WEAPON_IDS.SNIPER;
      this.weaponKickZ = isSniper ? 0.11 : 0.055;
      this.weaponKickPitch = isSniper ? 0.14 : 0.075;

      const activeFlash = this.muzzleFlashes[this.weaponId];
      if (activeFlash && !this.isScoped()) {
        activeFlash.visible = true;
        activeFlash.rotation.z = Math.random() * Math.PI * 2;
        this.muzzleFlashTimer = weapon.muzzleFlashMs;
      }
    }

    const { origin, direction } = this.raycaster.ray;
    return {
      origin: [origin.x, origin.y, origin.z],
      dir: [direction.x, direction.y, direction.z],
      hitPoint: [hitPoint.x, hitPoint.y, hitPoint.z],
      weaponId: this.weaponId,
      isMidAir,
      hit,
    };
  }

  spawnTracer(origin, endPoint, weaponId = WEAPON_IDS.AR) {
    const weapon = WEAPONS[weaponId] || WEAPONS[WEAPON_IDS.AR];
    const start = toVector3(origin);
    const end = toVector3(endPoint);
    const dir = end.clone().sub(start);
    const length = dir.length();
    if (length < 0.01) return;

    const geometry = new THREE.CylinderGeometry(
      weapon.tracerRadius,
      weapon.tracerRadius,
      length,
      6,
      1,
      true
    );
    const material = new THREE.MeshBasicMaterial({
      color: weapon.tracerColor,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.copy(start).add(end).multiplyScalar(0.5);
    mesh.quaternion.setFromUnitVectors(UP_AXIS, dir.normalize());
    this.scene.add(mesh);

    this.tracers.push({
      mesh,
      ageMs: 0,
      durationMs: weapon.tracerDurationMs,
    });
  }

  spawnBulletImpact(point, normal) {
    const p = toVector3(point);
    const n = toVector3(normal);
    if (n.lengthSq() < 1e-6) {
      n.set(0, 1, 0);
    } else {
      n.normalize();
    }

    // 1. Place flush bullet hole decal (capped ring pool of MAX_BULLET_HOLES)
    const decal = new THREE.Mesh(this._bulletHoleGeo, this._bulletHoleMat);
    decal.position.copy(p).addScaledVector(n, 0.006);
    decal.lookAt(p.x + n.x, p.y + n.y, p.z + n.z);
    decal.rotateZ(Math.random() * Math.PI * 2);

    if (this.bulletHoles.length >= MAX_BULLET_HOLES) {
      const oldest = this.bulletHoles.shift();
      this.scene.remove(oldest);
      if (oldest.geometry && oldest.geometry !== this._bulletHoleGeo) {
        oldest.geometry.dispose();
      }
      if (oldest.material && oldest.material !== this._bulletHoleMat) {
        oldest.material.dispose();
      }
    }
    this.scene.add(decal);
    this.bulletHoles.push(decal);

    // 2. Spawn brief crisp impact dust/spark puff (3–5 tiny particles along normal)
    const tangentA = new THREE.Vector3();
    if (Math.abs(n.y) < 0.9) {
      tangentA.set(0, 1, 0).cross(n).normalize();
    } else {
      tangentA.set(1, 0, 0).cross(n).normalize();
    }
    const tangentB = new THREE.Vector3().crossVectors(n, tangentA).normalize();

    const count = 3 + Math.floor(Math.random() * 3); // 3 to 5 particles
    for (let i = 0; i < count; i++) {
      const isSpark = i < 2;
      const color = isSpark
        ? Math.random() < 0.5
          ? 0xffd27a
          : 0xff9f38
        : Math.random() < 0.5
          ? 0xc8bfb0
          : 0x9c9487;
      const mat = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: isSpark ? 0.95 : 0.72,
        blending: isSpark ? THREE.AdditiveBlending : THREE.NormalBlending,
        depthWrite: false,
      });
      const mesh = new THREE.Mesh(this._impactParticleGeo, mat);
      const initialScale = isSpark
        ? 0.55 + Math.random() * 0.45
        : 0.9 + Math.random() * 0.7;
      mesh.scale.setScalar(initialScale);
      mesh.position.copy(p).addScaledVector(n, 0.015);

      const angle = Math.random() * Math.PI * 2;
      const spreadSpeed = (isSpark ? 1.4 : 0.9) + Math.random() * 1.4;
      const normalSpeed = (isSpark ? 2.2 : 1.1) + Math.random() * 1.8;
      const vel = new THREE.Vector3()
        .addScaledVector(n, normalSpeed)
        .addScaledVector(tangentA, Math.cos(angle) * spreadSpeed)
        .addScaledVector(tangentB, Math.sin(angle) * spreadSpeed);
      if (isSpark) vel.y += 0.7;

      this.scene.add(mesh);
      this.impactParticles.push({
        mesh,
        vel,
        ageMs: 0,
        durationMs: 150 + Math.random() * 60, // ~180 ms
        initialScale,
        isSpark,
      });
    }
  }

  respawnAt(pos, yaw = 0) {
    toVector3(pos, this.position);
    this.physics.reset({
      x: this.position.x,
      y: this.position.y,
      z: this.position.z,
    });
    this.velocity.set(0, 0, 0);
    this.eyeHeight = PLAYER_CONFIG.EYE_HEIGHT;
    this.grounded = false;
    this.isCrouching = false;
    this.horizSpeed = 0;
    this.speedUnits = 0;
    this.isCounterStrafed = true;

    this.ammo[WEAPON_IDS.AR] = WEAPONS[WEAPON_IDS.AR].magSize;
    this.ammo[WEAPON_IDS.SNIPER] = WEAPONS[WEAPON_IDS.SNIPER].magSize;
    this.isReloading = false;
    this.reloadElapsedMs = 0;
    this.isADS = false;
    this.adsProgress = 0;
    this.cancelInspect();
    this.lastFireTime = -Infinity;

    this.recoilPitch = 0;
    this.recoilYaw = 0;
    this.sprayShotIndex = 0;
    this.sprayRecoilPitch = 0;
    this.sprayRecoilYaw = 0;
    this.weaponKickZ = 0;
    this.weaponKickPitch = 0;
    this.muzzleFlashTimer = 0;
    for (const id of Object.keys(this.muzzleFlashes)) {
      this.muzzleFlashes[id].visible = false;
    }
    this.weaponGroup.visible = true;

    this.yaw = yaw;
    this.pitch = 0;

    if (Math.abs(this.camera.fov - this.baseFov) > 0.01) {
      this.camera.fov = this.baseFov;
      this.camera.updateProjectionMatrix();
    }

    this._syncCamera();
  }

  getState() {
    return {
      pos: [this.position.x, this.position.y, this.position.z],
      yaw: this.yaw,
      pitch: this.pitch,
      isCrouching: this.isCrouching,
      weaponId: this.weaponId,
      isADS: this.isADS,
    };
  }

  getPosition() {
    return [this.position.x, this.position.y, this.position.z];
  }

  dispose() {
    window.removeEventListener('keydown', this._onKeyDown);
    window.removeEventListener('keyup', this._onKeyUp);
    window.removeEventListener('blur', this._onBlur);
    this.keys.clear();

    for (let i = 0; i < this.tracers.length; i++) {
      const tracer = this.tracers[i];
      this.scene.remove(tracer.mesh);
      tracer.mesh.geometry.dispose();
      tracer.mesh.material.dispose();
    }
    this.tracers.length = 0;

    for (let i = 0; i < this.bulletHoles.length; i++) {
      this.scene.remove(this.bulletHoles[i]);
    }
    this.bulletHoles.length = 0;
    if (this._bulletHoleGeo) this._bulletHoleGeo.dispose();
    if (this._bulletHoleMat) this._bulletHoleMat.dispose();
    if (this._bulletHoleTexture) this._bulletHoleTexture.dispose();

    for (let i = 0; i < this.impactParticles.length; i++) {
      const p = this.impactParticles[i];
      this.scene.remove(p.mesh);
      p.mesh.material.dispose();
    }
    this.impactParticles.length = 0;
    if (this._impactParticleGeo) this._impactParticleGeo.dispose();

    if (this.weaponGroup) {
      this.camera.remove(this.weaponGroup);
      const disposedMaterials = new Set();
      this.weaponGroup.traverse((child) => {
        if (child.isMesh) {
          child.geometry.dispose();
          if (child.material && !disposedMaterials.has(child.material)) {
            disposedMaterials.add(child.material);
            child.material.dispose();
          }
        }
      });
    }
  }
}

export class RemotePlayer {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.scene.add(this.group);

    this.currentPos = new THREE.Vector3();
    this.targetPos = new THREE.Vector3();
    this.prevPos = new THREE.Vector3();
    this.currentYaw = 0;
    this.targetYaw = 0;
    this.currentPitch = 0;
    this.targetPitch = 0;

    this.crouchFactor = 0;
    this.targetCrouch = 0;
    this.adsFactor = 0;
    this.targetADS = 0;
    this.weaponId = WEAPON_IDS.AR;
    this.walkPhase = 0;
    this.walkAmount = 0;

    this.hasState = false;
    this.weaponMeshes = {};

    this._buildCharacter();
  }

  _buildCharacter() {
    const bodyCfg = HITBOX_CONFIG.BODY;
    const headCfg = HITBOX_CONFIG.HEAD;

    // Realistic Tactical Operative PBR Materials
    const hitboxGhostMat = new THREE.MeshBasicMaterial({
      transparent: true,
      opacity: 0,
      depthWrite: false,
    });
    const combatShirtMat = new THREE.MeshStandardMaterial({
      color: 0x8f2929, // Tactical muted crimson-rust for crisp opponent contrast
      emissive: 0x240707,
      emissiveIntensity: 0.22,
      roughness: 0.78,
      metalness: 0.06,
    });
    const plateCarrierMat = new THREE.MeshStandardMaterial({
      color: 0x22262e,
      roughness: 0.72,
      metalness: 0.16,
    });
    const armorPlateMat = new THREE.MeshStandardMaterial({
      color: 0x1a1d24,
      roughness: 0.52,
      metalness: 0.32,
    });
    const pouchMat = new THREE.MeshStandardMaterial({
      color: 0x2d323b,
      roughness: 0.82,
      metalness: 0.10,
    });
    const patchMat = new THREE.MeshStandardMaterial({
      color: 0xd9363e,
      emissive: 0x4d0d10,
      emissiveIntensity: 0.35,
      roughness: 0.45,
      metalness: 0.12,
    });
    const pantsMat = new THREE.MeshStandardMaterial({
      color: 0x272c34,
      roughness: 0.84,
      metalness: 0.06,
    });
    const kneePadMat = new THREE.MeshStandardMaterial({
      color: 0x16191f,
      roughness: 0.45,
      metalness: 0.28,
    });
    const bootMat = new THREE.MeshStandardMaterial({
      color: 0x181716,
      roughness: 0.76,
      metalness: 0.14,
    });
    const balaclavaMat = new THREE.MeshStandardMaterial({
      color: 0x20232a,
      roughness: 0.85,
      metalness: 0.05,
    });
    const helmetMat = new THREE.MeshStandardMaterial({
      color: 0x2a2f38,
      roughness: 0.48,
      metalness: 0.26,
    });
    const visorMat = new THREE.MeshStandardMaterial({
      color: 0x0b1018,
      emissive: 0x1a090c,
      emissiveIntensity: 0.28,
      roughness: 0.10,
      metalness: 0.90,
    });
    const visorAccentMat = new THREE.MeshBasicMaterial({
      color: 0xff464d,
    });
    const gloveMat = new THREE.MeshStandardMaterial({
      color: 0x191b20,
      roughness: 0.78,
      metalness: 0.12,
    });

    // =========================================================================
    // 1. BODY HITBOX + SCULPTED TACTICAL TORSO & PLATE CARRIER
    // =========================================================================
    this.bodyMesh = new THREE.Mesh(
      new THREE.BoxGeometry(bodyCfg.width, bodyCfg.height, bodyCfg.depth),
      hitboxGhostMat
    );
    this.bodyMesh.position.set(0, bodyCfg.centerY, 0);
    this.bodyMesh.castShadow = false;
    this.bodyMesh.receiveShadow = false;
    this.bodyMesh.userData.hitbox = 'body';

    // Sculpted upper torso core (spanned from waist y=-0.04 to neck y=+0.58 in local space)
    const torsoCore = new THREE.Mesh(
      new THREE.CylinderGeometry(0.24, 0.195, 0.54, 14),
      combatShirtMat
    );
    torsoCore.scale.set(1.16, 1.0, 0.76);
    torsoCore.position.set(0, 0.27, 0);
    torsoCore.castShadow = true;
    torsoCore.receiveShadow = true;
    this.bodyMesh.add(torsoCore);

    // Tactical neck collar
    const collar = new THREE.Mesh(
      new THREE.CylinderGeometry(0.115, 0.145, 0.09, 12),
      balaclavaMat
    );
    collar.position.set(0, 0.56, 0);
    collar.castShadow = true;
    this.bodyMesh.add(collar);

    // Tactical Plate-Carrier Vest (front & back beveled SAPI plates + cummerbund)
    const plateGeo = createSapiPlateGeometry(0.38, 0.42, 0.045);
    const frontPlate = new THREE.Mesh(plateGeo, armorPlateMat);
    frontPlate.position.set(0, 0.30, -0.175);
    frontPlate.castShadow = true;
    frontPlate.receiveShadow = true;
    this.bodyMesh.add(frontPlate);

    const backPlate = new THREE.Mesh(plateGeo, armorPlateMat);
    backPlate.position.set(0, 0.30, 0.175);
    backPlate.castShadow = true;
    backPlate.receiveShadow = true;
    this.bodyMesh.add(backPlate);

    const cummerbund = new THREE.Mesh(
      new THREE.CylinderGeometry(0.255, 0.235, 0.28, 14),
      plateCarrierMat
    );
    cummerbund.scale.set(1.14, 1.0, 0.80);
    cummerbund.position.set(0, 0.24, 0);
    cummerbund.castShadow = true;
    this.bodyMesh.add(cummerbund);

    // Padded shoulder straps over trapezius
    for (const side of [-1, 1]) {
      const strap = new THREE.Mesh(
        new THREE.CapsuleGeometry(0.042, 0.16, 5, 8),
        plateCarrierMat
      );
      strap.rotation.x = Math.PI / 2;
      strap.position.set(side * 0.145, 0.51, 0);
      strap.castShadow = true;
      this.bodyMesh.add(strap);

      // Sculpted tactical shoulder pads (deltoid pauldrons)
      const shoulderPad = new THREE.Mesh(
        new THREE.SphereGeometry(0.125, 12, 10),
        armorPlateMat
      );
      shoulderPad.scale.set(0.85, 1.05, 1.0);
      shoulderPad.position.set(side * 0.295, 0.44, 0);
      shoulderPad.castShadow = true;
      this.bodyMesh.add(shoulderPad);
    }

    // Triple rifle magazine pouches across lower front of plate carrier
    for (let i = -1; i <= 1; i++) {
      const pouch = new THREE.Mesh(
        new THREE.BoxGeometry(0.092, 0.14, 0.06),
        pouchMat
      );
      pouch.position.set(i * 0.105, 0.18, -0.222);
      pouch.castShadow = true;
      this.bodyMesh.add(pouch);
    }

    // Crimson tactical IFF chest & back patch for clear silhouette readability
    const frontPatch = new THREE.Mesh(
      new THREE.BoxGeometry(0.15, 0.052, 0.014),
      patchMat
    );
    frontPatch.position.set(0, 0.41, -0.212);
    this.bodyMesh.add(frontPatch);

    const backPatch = new THREE.Mesh(
      new THREE.BoxGeometry(0.17, 0.055, 0.014),
      patchMat
    );
    backPatch.position.set(0, 0.41, 0.212);
    this.bodyMesh.add(backPatch);

    // Tactical Utility Belt + Pelvis / Hips block transitioning cleanly into leg pivots
    const belt = new THREE.Mesh(
      new THREE.CylinderGeometry(0.235, 0.235, 0.075, 14),
      kneePadMat
    );
    belt.scale.set(1.16, 1.0, 0.80);
    belt.position.set(0, 0.03, 0);
    belt.castShadow = true;
    this.bodyMesh.add(belt);

    const pelvis = new THREE.Mesh(
      new THREE.CylinderGeometry(0.225, 0.20, 0.15, 14),
      pantsMat
    );
    pelvis.scale.set(1.15, 1.0, 0.78);
    pelvis.position.set(0, -0.055, 0);
    pelvis.castShadow = true;
    this.bodyMesh.add(pelvis);

    this.group.add(this.bodyMesh);

    // =========================================================================
    // 2. HEAD HITBOX + TACTICAL DOME HELMET & CURVED BALLISTIC VISOR
    // =========================================================================
    this.headMesh = new THREE.Mesh(
      new THREE.SphereGeometry(headCfg.width * 0.48, 18, 14),
      balaclavaMat
    );
    this.headMesh.scale.set(0.95, 1.05, 1.0);
    this.headMesh.position.set(0, headCfg.centerY, 0);
    this.headMesh.castShadow = true;
    this.headMesh.receiveShadow = true;
    this.headMesh.userData.hitbox = 'head';

    // Ops-Core / FAST Tactical Dome Helmet Shell
    const helmetDome = new THREE.Mesh(
      new THREE.SphereGeometry(
        headCfg.width * 0.545,
        20,
        14,
        0,
        Math.PI * 2,
        0,
        Math.PI * 0.58
      ),
      helmetMat
    );
    helmetDome.position.set(0, 0.015, 0.006);
    helmetDome.castShadow = true;
    this.headMesh.add(helmetDome);

    // Crimson helmet identification stripe / trim on rear & top
    const helmetTrim = new THREE.Mesh(
      new THREE.BoxGeometry(0.06, 0.02, 0.22),
      patchMat
    );
    helmetTrim.position.set(0, headCfg.height * 0.54, 0.02);
    this.headMesh.add(helmetTrim);

    // Front NVG Shroud Mount + Side ARC Accessory Rails
    const nvgMount = new THREE.Mesh(
      new THREE.BoxGeometry(0.072, 0.064, 0.036),
      armorPlateMat
    );
    nvgMount.position.set(0, 0.12, -headCfg.depth * 0.52);
    nvgMount.rotation.x = -0.25;
    this.headMesh.add(nvgMount);

    for (const side of [-1, 1]) {
      const arcRail = new THREE.Mesh(
        new THREE.BoxGeometry(0.022, 0.038, 0.16),
        armorPlateMat
      );
      arcRail.position.set(side * (headCfg.width * 0.52), 0.055, 0.01);
      this.headMesh.add(arcRail);

      // Tactical comms headset earcups
      const earcup = new THREE.Mesh(
        new THREE.CylinderGeometry(0.058, 0.058, 0.042, 12),
        kneePadMat
      );
      earcup.rotation.z = Math.PI / 2;
      earcup.position.set(side * (headCfg.width * 0.49), -0.025, 0.01);
      this.headMesh.add(earcup);
    }

    // Curved Dark Ballistic Visor / Tactical Goggles wrapping the -Z front face
    const visorArc = new THREE.Mesh(
      new THREE.CylinderGeometry(
        headCfg.width * 0.515,
        headCfg.width * 0.515,
        0.115,
        16,
        1,
        true,
        Math.PI * 0.74,
        Math.PI * 0.52
      ),
      visorMat
    );
    visorArc.position.set(0, 0.018, 0.008);
    this.headMesh.add(visorArc);

    // Subtle glowing tactical optic HUD slit inside visor
    const visorSlit = new THREE.Mesh(
      new THREE.CylinderGeometry(
        headCfg.width * 0.522,
        headCfg.width * 0.522,
        0.016,
        14,
        1,
        true,
        Math.PI * 0.82,
        Math.PI * 0.36
      ),
      visorAccentMat
    );
    visorSlit.position.set(0, 0.022, 0.008);
    this.headMesh.add(visorSlit);

    this.group.add(this.headMesh);

    // =========================================================================
    // 3. ARTICULATED TACTICAL LEGS (Capsule Thighs/Shins + Knee Pads + Boots)
    // =========================================================================
    const buildTacticalLeg = () => {
      const legGroup = new THREE.Group();

      // Upper thigh (tucked into pelvis at y=+0.15 down to knee y=-0.16)
      const thigh = new THREE.Mesh(
        new THREE.CapsuleGeometry(0.095, 0.20, 6, 12),
        pantsMat
      );
      thigh.position.set(0, 0.01, 0);
      thigh.castShadow = true;
      legGroup.add(thigh);

      // Hard-shell tactical knee pad on front (-Z)
      const kneePad = new THREE.Mesh(
        new THREE.SphereGeometry(0.072, 10, 8),
        kneePadMat
      );
      kneePad.scale.set(0.95, 1.15, 0.65);
      kneePad.position.set(0, -0.145, -0.075);
      kneePad.castShadow = true;
      legGroup.add(kneePad);

      // Tapered shin
      const shin = new THREE.Mesh(
        new THREE.CylinderGeometry(0.078, 0.066, 0.24, 12),
        pantsMat
      );
      shin.position.set(0, -0.27, 0.01);
      shin.castShadow = true;
      legGroup.add(shin);

      // Combat boot ankle + treaded sole + rounded toe cap (bottom at y=-0.46 -> floor y=0)
      const bootAnkle = new THREE.Mesh(
        new THREE.CylinderGeometry(0.070, 0.074, 0.10, 12),
        bootMat
      );
      bootAnkle.position.set(0, -0.39, 0.01);
      bootAnkle.castShadow = true;
      legGroup.add(bootAnkle);

      const bootFoot = new THREE.Mesh(
        new THREE.CapsuleGeometry(0.062, 0.13, 6, 10),
        bootMat
      );
      bootFoot.rotation.x = Math.PI / 2;
      bootFoot.scale.set(1.08, 1.0, 0.78);
      bootFoot.position.set(0, -0.415, -0.045);
      bootFoot.castShadow = true;
      legGroup.add(bootFoot);

      return legGroup;
    };

    this.leftLegPivot = new THREE.Group();
    this.leftLegPivot.position.set(-0.165, 0.46, 0);
    this.leftLegPivot.add(buildTacticalLeg());
    this.group.add(this.leftLegPivot);

    this.rightLegPivot = new THREE.Group();
    this.rightLegPivot.position.set(0.165, 0.46, 0);
    this.rightLegPivot.add(buildTacticalLeg());
    this.group.add(this.rightLegPivot);

    // =========================================================================
    // 4. ROUNDED TACTICAL ARMS (Capsule Upper/Forearm + Elbow Pad + Gloves)
    // =========================================================================
    this.leftArmPivot = new THREE.Group();
    this.leftArmPivot.position.set(-(bodyCfg.width * 0.5 + 0.06), 1.18, 0);

    const leftUpperArm = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.070, 0.17, 6, 10),
      combatShirtMat
    );
    leftUpperArm.position.set(0, -0.10, 0);
    leftUpperArm.castShadow = true;
    this.leftArmPivot.add(leftUpperArm);

    const leftElbow = new THREE.Mesh(
      new THREE.SphereGeometry(0.056, 8, 8),
      kneePadMat
    );
    leftElbow.position.set(0, -0.23, 0.03);
    this.leftArmPivot.add(leftElbow);

    const leftForearm = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.058, 0.17, 6, 10),
      combatShirtMat
    );
    leftForearm.position.set(0, -0.35, -0.03);
    leftForearm.rotation.x = 0.22;
    leftForearm.castShadow = true;
    this.leftArmPivot.add(leftForearm);

    const leftHand = new THREE.Mesh(
      new THREE.SphereGeometry(0.056, 10, 8),
      gloveMat
    );
    leftHand.position.set(0, -0.47, -0.06);
    this.leftArmPivot.add(leftHand);
    this.group.add(this.leftArmPivot);

    // Right arm + swappable weapon pivot
    this.gunPivot = new THREE.Group();
    this.gunPivot.position.set(bodyCfg.width * 0.5 + 0.1, 1.14, -0.06);

    const rightUpperArm = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.068, 0.18, 6, 10),
      combatShirtMat
    );
    rightUpperArm.rotation.x = Math.PI / 2 - 0.25;
    rightUpperArm.position.set(-0.02, -0.04, -0.06);
    rightUpperArm.castShadow = true;
    this.gunPivot.add(rightUpperArm);

    const rightForearm = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.056, 0.18, 6, 10),
      combatShirtMat
    );
    rightForearm.rotation.x = Math.PI / 2;
    rightForearm.position.set(-0.01, -0.04, -0.22);
    rightForearm.castShadow = true;
    this.gunPivot.add(rightForearm);

    const rightHand = new THREE.Mesh(
      new THREE.SphereGeometry(0.054, 10, 8),
      gloveMat
    );
    rightHand.position.set(0, -0.035, -0.33);
    this.gunPivot.add(rightHand);

    // =========================================================================
    // 5. REALISTIC WORLD-MODEL WEAPONS (AR, AWP Sniper, Curved Bowie Knife)
    // =========================================================================
    const wGunmetalMat = new THREE.MeshStandardMaterial({
      color: 0x282d35,
      roughness: 0.36,
      metalness: 0.78,
    });
    const wDarkMetalMat = new THREE.MeshStandardMaterial({
      color: 0x171a20,
      roughness: 0.42,
      metalness: 0.70,
    });
    const wPolymerMat = new THREE.MeshStandardMaterial({
      color: 0x1d1f24,
      roughness: 0.80,
      metalness: 0.12,
    });
    const wAwpGreenMat = new THREE.MeshStandardMaterial({
      color: 0x3b4a34,
      roughness: 0.76,
      metalness: 0.08,
    });
    const wSteelMat = new THREE.MeshStandardMaterial({
      color: 0x9aa6b4,
      roughness: 0.22,
      metalness: 0.90,
    });
    const wLensMat = new THREE.MeshStandardMaterial({
      color: 0x0e2a4a,
      emissive: 0x0b2a4d,
      emissiveIntensity: 0.4,
      roughness: 0.1,
      metalness: 0.9,
    });

    // --- World AR (Tactical M4A1 Carbine) ---
    const arWorld = new THREE.Group();
    const wArReceiver = new THREE.Mesh(
      new THREE.BoxGeometry(0.068, 0.088, 0.32),
      wGunmetalMat
    );
    wArReceiver.position.set(0, 0.02, -0.36);
    arWorld.add(wArReceiver);

    const wArStock = new THREE.Mesh(
      new THREE.BoxGeometry(0.052, 0.105, 0.18),
      wPolymerMat
    );
    wArStock.position.set(0, 0.005, -0.14);
    arWorld.add(wArStock);

    const wArHandguard = new THREE.Mesh(
      new THREE.CylinderGeometry(0.036, 0.038, 0.26, 8),
      wDarkMetalMat
    );
    wArHandguard.rotation.x = Math.PI / 2;
    wArHandguard.position.set(0, 0.028, -0.62);
    arWorld.add(wArHandguard);

    const wArBarrel = new THREE.Mesh(
      new THREE.CylinderGeometry(0.015, 0.016, 0.24, 12),
      wDarkMetalMat
    );
    wArBarrel.rotation.x = Math.PI / 2;
    wArBarrel.position.set(0, 0.030, -0.82);
    arWorld.add(wArBarrel);

    const wArFlashHider = new THREE.Mesh(
      new THREE.CylinderGeometry(0.020, 0.019, 0.065, 10),
      wGunmetalMat
    );
    wArFlashHider.rotation.x = Math.PI / 2;
    wArFlashHider.position.set(0, 0.030, -0.95);
    arWorld.add(wArFlashHider);

    const wArOptic = new THREE.Mesh(
      new THREE.CylinderGeometry(0.024, 0.024, 0.11, 12),
      wDarkMetalMat
    );
    wArOptic.rotation.x = Math.PI / 2;
    wArOptic.position.set(0, 0.092, -0.36);
    arWorld.add(wArOptic);

    const wArMag = new THREE.Mesh(
      new THREE.BoxGeometry(0.044, 0.16, 0.075),
      wPolymerMat
    );
    wArMag.position.set(0, -0.095, -0.43);
    wArMag.rotation.x = 0.22;
    arWorld.add(wArMag);

    const wArGrip = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.024, 0.075, 4, 8),
      wPolymerMat
    );
    wArGrip.position.set(0, -0.065, -0.26);
    wArGrip.rotation.x = -0.3;
    arWorld.add(wArGrip);

    this.weaponMeshes[WEAPON_IDS.AR] = arWorld;
    this.gunPivot.add(arWorld);

    // --- World Sniper (Olive-Drab AWP Precision Rifle) ---
    const sniperWorld = new THREE.Group();
    const wAwpChassis = new THREE.Mesh(
      new THREE.BoxGeometry(0.064, 0.09, 0.68),
      wAwpGreenMat
    );
    wAwpChassis.position.set(0, 0.01, -0.38);
    sniperWorld.add(wAwpChassis);

    const wAwpReceiver = new THREE.Mesh(
      new THREE.CylinderGeometry(0.028, 0.030, 0.30, 12),
      wGunmetalMat
    );
    wAwpReceiver.rotation.x = Math.PI / 2;
    wAwpReceiver.position.set(0, 0.045, -0.38);
    sniperWorld.add(wAwpReceiver);

    const wAwpBarrel = new THREE.Mesh(
      new THREE.CylinderGeometry(0.016, 0.020, 0.56, 12),
      wDarkMetalMat
    );
    wAwpBarrel.rotation.x = Math.PI / 2;
    wAwpBarrel.position.set(0, 0.045, -0.82);
    sniperWorld.add(wAwpBarrel);

    const wAwpBrake = new THREE.Mesh(
      new THREE.BoxGeometry(0.048, 0.038, 0.085),
      wGunmetalMat
    );
    wAwpBrake.position.set(0, 0.045, -1.12);
    sniperWorld.add(wAwpBrake);

    const wAwpScope = new THREE.Mesh(
      new THREE.CylinderGeometry(0.024, 0.024, 0.30, 12),
      wDarkMetalMat
    );
    wAwpScope.rotation.x = Math.PI / 2;
    wAwpScope.position.set(0, 0.115, -0.40);
    sniperWorld.add(wAwpScope);

    const wAwpBell = new THREE.Mesh(
      new THREE.CylinderGeometry(0.034, 0.024, 0.09, 12),
      wDarkMetalMat
    );
    wAwpBell.rotation.x = Math.PI / 2;
    wAwpBell.position.set(0, 0.115, -0.58);
    sniperWorld.add(wAwpBell);

    const wAwpLens = new THREE.Mesh(
      new THREE.CircleGeometry(0.031, 12),
      wLensMat
    );
    wAwpLens.rotation.y = Math.PI;
    wAwpLens.position.set(0, 0.115, -0.626);
    sniperWorld.add(wAwpLens);

    const wAwpBoltKnob = new THREE.Mesh(
      new THREE.SphereGeometry(0.016, 10, 8),
      wSteelMat
    );
    wAwpBoltKnob.position.set(0.06, 0.038, -0.28);
    sniperWorld.add(wAwpBoltKnob);

    sniperWorld.visible = false;
    this.weaponMeshes[WEAPON_IDS.SNIPER] = sniperWorld;
    this.gunPivot.add(sniperWorld);

    // --- World Knife (Curved Bowie Steel Blade + Leather Handle) ---
    const knifeWorld = new THREE.Group();
    const wKnifeHandle = new THREE.Mesh(
      new THREE.CylinderGeometry(0.020, 0.022, 0.15, 10),
      wPolymerMat
    );
    wKnifeHandle.rotation.x = Math.PI / 2;
    wKnifeHandle.position.set(0, -0.02, -0.32);
    knifeWorld.add(wKnifeHandle);

    const wKnifeGuard = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.014, 0.07, 4, 8),
      wDarkMetalMat
    );
    wKnifeGuard.position.set(0, -0.02, -0.40);
    knifeWorld.add(wKnifeGuard);

    const wKnifeBlade = new THREE.Mesh(
      createBowieBladeGeometry(1.18),
      wSteelMat
    );
    wKnifeBlade.position.set(0, -0.02, -0.35);
    knifeWorld.add(wKnifeBlade);

    knifeWorld.visible = false;
    this.weaponMeshes[WEAPON_IDS.KNIFE] = knifeWorld;
    this.gunPivot.add(knifeWorld);

    this.group.add(this.gunPivot);
  }

  pushState(
    pos,
    yaw,
    pitch,
    isCrouching = false,
    weaponId = WEAPON_IDS.AR,
    isADS = false
  ) {
    toVector3(pos, this.targetPos);
    this.targetYaw = yaw;
    this.targetPitch = pitch;
    this.targetCrouch = isCrouching ? 1 : 0;
    this.targetADS = isADS ? 1 : 0;

    const validWeaponId = WEAPONS[weaponId] ? weaponId : WEAPON_IDS.AR;
    if (validWeaponId !== this.weaponId) {
      this.weaponId = validWeaponId;
      for (const id of Object.keys(this.weaponMeshes)) {
        this.weaponMeshes[id].visible = id === this.weaponId;
      }
    }

    if (!this.hasState || this.currentPos.distanceTo(this.targetPos) > 6) {
      this.currentPos.copy(this.targetPos);
      this.prevPos.copy(this.targetPos);
      this.currentYaw = this.targetYaw;
      this.currentPitch = this.targetPitch;
      this.crouchFactor = this.targetCrouch;
      this.adsFactor = this.targetADS;
      this.hasState = true;
      this._applyTransform();
    }
  }

  update(dt) {
    if (!this.hasState) return;
    const clampedDt = Math.min(dt, 0.05);
    const alpha = 1 - Math.exp(-PLAYER_CONFIG.INTERP_SPEED * clampedDt);

    this.prevPos.copy(this.currentPos);
    this.currentPos.lerp(this.targetPos, alpha);
    this.currentYaw +=
      normalizeAngleDelta(this.targetYaw - this.currentYaw) * alpha;
    this.currentPitch += (this.targetPitch - this.currentPitch) * alpha;

    const crouchAlpha = 1 - Math.exp(-PHYSICS_CONFIG.CROUCH_LERP_SPEED * clampedDt);
    this.crouchFactor += (this.targetCrouch - this.crouchFactor) * crouchAlpha;
    this.adsFactor += (this.targetADS - this.adsFactor) * alpha;

    // Walk-cycle animation from horizontal movement speed
    const horizDist = Math.hypot(
      this.currentPos.x - this.prevPos.x,
      this.currentPos.z - this.prevPos.z
    );
    const horizSpeed = clampedDt > 0.0001 ? horizDist / clampedDt : 0;
    const targetWalk = clamp(horizSpeed / PHYSICS_CONFIG.RUN_SPEED, 0, 1);
    this.walkAmount += (targetWalk - this.walkAmount) * Math.min(1, 14 * clampedDt);
    if (this.walkAmount > 0.02) {
      this.walkPhase += clampedDt * (9 + horizSpeed * 0.6);
    }

    this._applyTransform();
  }

  _applyTransform() {
    const bodyCfg = HITBOX_CONFIG.BODY;
    const headCfg = HITBOX_CONFIG.HEAD;

    this.group.position.copy(this.currentPos);
    this.group.rotation.y = this.currentYaw;

    // Smoothly adjust head & body hitboxes to match crouch state
    const bodyHeight = lerp(bodyCfg.height, bodyCfg.crouchHeight, this.crouchFactor);
    const bodyCenterY = lerp(
      bodyCfg.centerY,
      bodyCfg.crouchCenterY,
      this.crouchFactor
    );
    this.bodyMesh.scale.y = bodyHeight / bodyCfg.height;
    this.bodyMesh.position.y = bodyCenterY;

    const headCenterY = lerp(
      headCfg.centerY,
      headCfg.crouchCenterY,
      this.crouchFactor
    );
    this.headMesh.position.y = headCenterY;
    this.headMesh.rotation.x = this.currentPitch;

    // Adjust decorative legs & arms for crouch + walk cycle
    const legScaleY = lerp(1.0, 0.66, this.crouchFactor);
    const legPivotY = lerp(0.46, 0.30, this.crouchFactor);
    const legSwing = Math.sin(this.walkPhase) * 0.55 * this.walkAmount;

    this.leftLegPivot.position.y = legPivotY;
    this.leftLegPivot.scale.y = legScaleY;
    this.leftLegPivot.rotation.x = legSwing;

    this.rightLegPivot.position.y = legPivotY;
    this.rightLegPivot.scale.y = legScaleY;
    this.rightLegPivot.rotation.x = -legSwing;

    const leftArmY = lerp(1.18, 0.80, this.crouchFactor);
    this.leftArmPivot.position.y = leftArmY;
    this.leftArmPivot.rotation.x = -legSwing * 0.65;

    // Raise & center gun pivot when opponent is ADS
    const gunBaseX = bodyCfg.width * 0.5 + 0.1;
    const gunBaseY = lerp(1.14, 0.78, this.crouchFactor);
    this.gunPivot.position.set(
      gunBaseX - 0.1 * this.adsFactor,
      gunBaseY + 0.1 * this.adsFactor,
      -0.06 - 0.04 * this.adsFactor
    );
    this.gunPivot.rotation.x = this.currentPitch;
  }

  getHitboxes() {
    return this.group.visible ? [this.headMesh, this.bodyMesh] : [];
  }

  setVisible(visible) {
    this.group.visible = Boolean(visible);
  }

  getPosition() {
    return [this.currentPos.x, this.currentPos.y, this.currentPos.z];
  }
}
