export const PEER_PREFIX = 'fps1v1-';

export const PACKET_TYPES = Object.freeze({
  STATE: 'state',
  SHOOT: 'shoot',
  HIT: 'hit',
  RESPAWN: 'respawn',
});

export const NETWORK_CONFIG = Object.freeze({
  STATE_SEND_RATE_HZ: 30,
  STATE_SEND_INTERVAL_MS: 1000 / 30,
  ROOM_CODE_LENGTH: 6,
  ROOM_CODE_CHARS: 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789',
});

export const PLAYER_CONFIG = Object.freeze({
  MAX_HP: 100,
  EYE_HEIGHT: 1.62,
  CROUCH_EYE_HEIGHT: 1.12,
  HEIGHT: 1.80,
  CROUCH_HEIGHT: 1.30,
  CROUCH_FEET_LIFT: 0.42,
  RADIUS: 0.38,
  PITCH_LIMIT: 1.50,
  RESPAWN_DELAY_SEC: 2.0,
  INTERP_SPEED: 16,
});

export const PHYSICS_CONFIG = Object.freeze({
  UNIT_SCALE: 36.7647, // 6.8 m/s === 250 u/s (CS2 knife base run speed)
  RUN_SPEED: 6.8,
  CROUCH_SPEED: 2.4,
  ADS_SPEED_MULT: 0.72,
  GROUND_ACCEL: 5.6,
  GROUND_FRICTION: 5.4,
  STOP_SPEED: 2.7,
  AIR_ACCEL: 9.5,
  AIR_WISH_SPEED: 0.78, // Slightly tighter Source air wishspeed cap
  JUMP_VELOCITY: 7.65,
  GRAVITY: 20.5,
  JUMP_BUFFER_SEC: 0.09,
  BHOP_SOFT_CAP: 7.75, // ~285 u/s CS2-style bhop soft cap (scales with weapon speedMult)
  BHOP_CAP_DAMPING: 0.82,
  BHOP_SPEED_HIGHLIGHT_UNITS: 255,
  COUNTER_STRAFE_SPEED_THRESHOLD: 1.2,
  CROUCH_LERP_SPEED: 14,
});

export const HITBOX_CONFIG = Object.freeze({
  BODY: Object.freeze({
    width: 0.68,
    height: 1.24,
    depth: 0.42,
    centerY: 0.68,
    crouchHeight: 0.86,
    crouchCenterY: 0.46,
  }),
  HEAD: Object.freeze({
    width: 0.44,
    height: 0.44,
    depth: 0.44,
    centerY: 1.54,
    crouchCenterY: 1.10,
  }),
});

export const WEAPON_IDS = Object.freeze({
  AR: 'ar',
  SNIPER: 'sniper',
  KNIFE: 'knife',
});

export const WEAPON_ORDER = Object.freeze([
  WEAPON_IDS.AR,
  WEAPON_IDS.SNIPER,
  WEAPON_IDS.KNIFE,
]);

export const WEAPONS = Object.freeze({
  [WEAPON_IDS.AR]: Object.freeze({
    id: WEAPON_IDS.AR,
    name: 'ASSAULT RIFLE',
    shortName: 'AR',
    isMelee: false,
    automatic: true,
    speedMult: 0.88, // ~220 u/s (CS2 rifle speed)
    fireCooldownMs: 105, // ~570 RPM (CS2 AK/M4 cadence)
    magSize: 30,
    reloadTimeMs: 1450,
    bodyDamage: 24,
    headDamage: 48,
    maxRange: 90,
    adsFovMult: 0.78,
    adsSpeed: 14,
    hasScope: false,
    recoilPitch: 0.016,
    recoilYawSpread: 0.002,
    recoilRecovery: 9.5,
    recoilResetDelayMs: 180,
    recoilDecayRate: 11.0, // shots/sec decay when not firing
    viewpunchRatio: 0.55, // CS2 camera punch vs full bullet recoil climb
    // CS2 AK/M4-inspired deterministic spray pattern [pitchRad, yawRad] offsets per shot
    sprayPattern: Object.freeze([
      [0.000, 0.000],
      [0.009, 0.001],
      [0.021, -0.002],
      [0.036, 0.003],
      [0.052, 0.005],
      [0.068, 0.002],
      [0.082, -0.006],
      [0.094, -0.015],
      [0.102, -0.024],
      [0.106, -0.028],
      [0.108, -0.018],
      [0.110, -0.004],
      [0.111, 0.012],
      [0.112, 0.025],
      [0.112, 0.033],
      [0.113, 0.036],
      [0.113, 0.028],
      [0.112, 0.014],
      [0.111, -0.002],
      [0.110, -0.016],
      [0.110, -0.026],
      [0.111, -0.030],
      [0.112, -0.022],
      [0.113, -0.008],
      [0.114, 0.008],
      [0.114, 0.022],
      [0.113, 0.028],
      [0.112, 0.018],
      [0.111, 0.004],
      [0.111, -0.010],
    ]),
    spreadBase: 0.0022,
    spreadAds: 0.0007,
    spreadMove: 0.024,
    spreadAir: 0.052,
    spreadCrouchMult: 0.6,
    tracerColor: 0xffd166,
    tracerRadius: 0.011,
    tracerDurationMs: 95,
    muzzleFlashMs: 42,
  }),
  [WEAPON_IDS.SNIPER]: Object.freeze({
    id: WEAPON_IDS.SNIPER,
    name: 'SNIPER',
    shortName: 'SNIPER',
    isMelee: false,
    automatic: false,
    speedMult: 0.80, // ~200 u/s (CS2 AWP speed)
    fireCooldownMs: 950,
    magSize: 3,
    reloadTimeMs: 1850,
    bodyDamage: 75,
    headDamage: 100,
    maxRange: 120,
    adsFovMult: 0.42,
    adsSpeed: 12,
    hasScope: true,
    recoilPitch: 0.068,
    recoilYawSpread: 0.004,
    recoilRecovery: 9,
    spreadBase: 0.022,
    spreadAds: 0.0002,
    spreadMove: 0.048,
    spreadAir: 0.078,
    spreadCrouchMult: 0.6,
    tracerColor: 0x7df9ff,
    tracerRadius: 0.02,
    tracerDurationMs: 165,
    muzzleFlashMs: 65,
  }),
  [WEAPON_IDS.KNIFE]: Object.freeze({
    id: WEAPON_IDS.KNIFE,
    name: 'BIÇAK',
    shortName: 'BIÇAK',
    isMelee: true,
    automatic: false,
    speedMult: 1.0, // 250 u/s (CS2 knife max speed)
    fireCooldownMs: 420,
    heavyCooldownMs: 760,
    magSize: 0,
    reloadTimeMs: 0,
    bodyDamage: 55,
    headDamage: 100,
    heavyDamage: 100,
    maxRange: 2.6,
    adsFovMult: 1.0,
    adsSpeed: 14,
    hasScope: false,
    recoilPitch: 0.0,
    recoilYawSpread: 0.0,
    recoilRecovery: 16,
    spreadBase: 0.0,
    spreadAds: 0.0,
    spreadMove: 0.0,
    spreadAir: 0.0,
    spreadCrouchMult: 1.0,
    tracerColor: 0xffffff,
    tracerRadius: 0.0,
    tracerDurationMs: 0,
    muzzleFlashMs: 0,
  }),
});

export const MAP_CONFIG = Object.freeze({
  WIDTH: 26,
  LENGTH: 40,
  WALL_HEIGHT: 7,
});

export const DEFAULT_CROSSHAIR = Object.freeze({
  color: '#00ff66',
  size: 8,
  thickness: 2,
  gap: 4,
  outline: true,
  dot: false,
  dynamic: true,
  alpha: 0.95,
});

export const DEFAULT_SETTINGS = Object.freeze({
  sensitivity: 1.0,
  adsSensitivity: 0.6,
  fov: 85,
  volume: 0.7,
  showFps: false,
  crosshair: DEFAULT_CROSSHAIR,
});
