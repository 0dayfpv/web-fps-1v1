import { Peer } from 'peerjs';
import { PEER_PREFIX, PACKET_TYPES, NETWORK_CONFIG, WEAPON_IDS } from './constants.js';

const CONNECTION_TIMEOUT_MS = 15000;

function isFiniteNumber(value) {
  return typeof value === 'number' && Number.isFinite(value);
}

function isValidWeaponId(weaponId) {
  return (
    weaponId === WEAPON_IDS.AR ||
    weaponId === WEAPON_IDS.SNIPER ||
    weaponId === WEAPON_IDS.KNIFE
  );
}

function isVec3Array(value) {
  return (
    Array.isArray(value) &&
    value.length === 3 &&
    isFiniteNumber(value[0]) &&
    isFiniteNumber(value[1]) &&
    isFiniteNumber(value[2])
  );
}

function generateRoomCode() {
  const chars = NETWORK_CONFIG.ROOM_CODE_CHARS;
  const length = NETWORK_CONFIG.ROOM_CODE_LENGTH;
  let code = '';

  if (typeof crypto !== 'undefined' && typeof crypto.getRandomValues === 'function') {
    const bytes = new Uint32Array(length);
    crypto.getRandomValues(bytes);
    for (let i = 0; i < length; i++) {
      code += chars[bytes[i] % chars.length];
    }
  } else {
    for (let i = 0; i < length; i++) {
      code += chars[Math.floor(Math.random() * chars.length)];
    }
  }

  return code;
}

export class NetworkManager {
  constructor() {
    this._peer = null;
    this._conn = null;
    this._isHost = false;
    this._connected = false;
    this._roomCode = null;
    this._listeners = new Map();
  }

  /**
   * Subscribe to a network event.
   * Events: 'connected', 'disconnected', 'error', 'state', 'shoot', 'hit', 'respawn'
   * @param {string} event
   * @param {Function} handler
   * @returns {Function} Unsubscribe function
   */
  on(event, handler) {
    if (typeof event !== 'string' || typeof handler !== 'function') {
      return () => {};
    }

    let handlers = this._listeners.get(event);
    if (!handlers) {
      handlers = new Set();
      this._listeners.set(event, handlers);
    }
    handlers.add(handler);

    return () => {
      handlers.delete(handler);
      if (handlers.size === 0) {
        this._listeners.delete(event);
      }
    };
  }

  _emit(event, payload) {
    const handlers = this._listeners.get(event);
    if (!handlers || handlers.size === 0) {
      return;
    }

    for (const handler of Array.from(handlers)) {
      try {
        handler(payload);
      } catch (err) {
        console.error(`[NetworkManager] Error in "${event}" listener:`, err);
      }
    }
  }

  /**
   * Create a new room as host and wait for a single opponent to connect.
   * @returns {Promise<string>} Resolves with the generated room code once Peer opens.
   */
  createRoom() {
    this._cleanup(false);
    this._isHost = true;

    const code = generateRoomCode();
    const peerId = PEER_PREFIX + code;

    return new Promise((resolve, reject) => {
      let settled = false;
      const peer = new Peer(peerId);
      this._peer = peer;

      const timer = setTimeout(() => {
        if (settled) return;
        settled = true;
        this._cleanup(false);
        reject(new Error('Timed out while creating room'));
      }, CONNECTION_TIMEOUT_MS);

      peer.on('open', () => {
        if (settled || this._peer !== peer) return;
        settled = true;
        clearTimeout(timer);
        this._roomCode = code;

        peer.on('connection', (conn) => {
          if (this._peer !== peer) {
            try {
              conn.close();
            } catch {
              // Ignore close errors on stale peer
            }
            return;
          }

          // Only accept 1 opponent at a time; reject/close extras.
          if (this._conn) {
            conn.on('open', () => {
              try {
                conn.close();
              } catch {
                // Ignore close errors
              }
            });
            try {
              conn.close();
            } catch {
              // Ignore close errors
            }
            return;
          }

          this._setupConnection(conn);
        });

        resolve(code);
      });

      peer.on('error', (err) => {
        if (!settled) {
          settled = true;
          clearTimeout(timer);
          this._cleanup(false);
          reject(err);
          return;
        }
        this._emit('error', err);
      });

      peer.on('close', () => {
        if (this._peer === peer) {
          this._cleanup(true);
        }
      });
    });
  }

  /**
   * Join an existing room by its room code.
   * @param {string} roomCode
   * @returns {Promise<void>} Resolves once the DataChannel opens.
   */
  joinRoom(roomCode) {
    const cleanCode = typeof roomCode === 'string' ? roomCode.trim().toUpperCase() : '';
    if (cleanCode.length !== NETWORK_CONFIG.ROOM_CODE_LENGTH) {
      return Promise.reject(
        new Error(`Invalid room code: must be ${NETWORK_CONFIG.ROOM_CODE_LENGTH} characters`)
      );
    }

    this._cleanup(false);
    this._isHost = false;
    this._roomCode = cleanCode;

    return new Promise((resolve, reject) => {
      let settled = false;
      const peer = new Peer();
      this._peer = peer;

      const fail = (err) => {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        this._cleanup(false);
        reject(err instanceof Error ? err : new Error(String(err)));
      };

      const succeed = () => {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        resolve();
      };

      const timer = setTimeout(() => {
        fail(new Error('Connection timed out after 15 seconds'));
      }, CONNECTION_TIMEOUT_MS);

      peer.on('open', () => {
        if (settled || this._peer !== peer) return;

        const conn = peer.connect(PEER_PREFIX + cleanCode, {
          reliable: true,
          serialization: 'json',
        });

        if (!conn) {
          fail(new Error('Failed to initiate peer connection'));
          return;
        }

        this._setupConnection(conn, succeed, fail);
      });

      peer.on('error', (err) => {
        if (!settled) {
          fail(err);
          return;
        }
        this._emit('error', err);
      });

      peer.on('close', () => {
        if (!settled) {
          fail(new Error('Peer closed before connection opened'));
          return;
        }
        if (this._peer === peer) {
          this._cleanup(true);
        }
      });
    });
  }

  _setupConnection(conn, onOpen, onBeforeOpenError) {
    this._conn = conn;
    let opened = false;

    const handleOpen = () => {
      if (opened || this._conn !== conn) return;
      opened = true;
      this._connected = true;
      this._emit('connected', {
        peerId: conn.peer,
        isHost: this._isHost,
        roomCode: this._roomCode,
      });
      if (typeof onOpen === 'function') {
        onOpen();
      }
    };

    conn.on('open', handleOpen);

    conn.on('data', (data) => {
      if (this._conn !== conn) return;
      this._handleIncomingData(data);
    });

    conn.on('close', () => {
      if (this._conn !== conn) return;
      const wasConnected = this._connected;
      this._connected = false;
      this._conn = null;

      if (!opened && typeof onBeforeOpenError === 'function') {
        onBeforeOpenError(new Error('Connection closed before opening'));
      }
      if (wasConnected) {
        this._emit('disconnected');
      }
    });

    conn.on('error', (err) => {
      if (this._conn !== conn) return;
      if (!opened && typeof onBeforeOpenError === 'function') {
        onBeforeOpenError(err);
      }
      this._emit('error', err);
    });

    if (conn.open) {
      handleOpen();
    }
  }

  _handleIncomingData(data) {
    if (!data || typeof data !== 'object' || Array.isArray(data)) {
      return;
    }

    const timestamp = isFiniteNumber(data.t) ? data.t : Date.now();

    switch (data.type) {
      case PACKET_TYPES.STATE: {
        if (
          !isVec3Array(data.pos) ||
          !isFiniteNumber(data.yaw) ||
          !isFiniteNumber(data.pitch)
        ) {
          return;
        }
        this._emit('state', {
          type: PACKET_TYPES.STATE,
          t: timestamp,
          pos: [data.pos[0], data.pos[1], data.pos[2]],
          yaw: data.yaw,
          pitch: data.pitch,
          isCrouching: typeof data.isCrouching === 'boolean' ? data.isCrouching : false,
          weaponId: isValidWeaponId(data.weaponId) ? data.weaponId : WEAPON_IDS.AR,
          isADS: typeof data.isADS === 'boolean' ? data.isADS : false,
        });
        break;
      }

      case PACKET_TYPES.SHOOT: {
        if (!isVec3Array(data.origin) || !isVec3Array(data.dir)) {
          return;
        }
        this._emit('shoot', {
          type: PACKET_TYPES.SHOOT,
          t: timestamp,
          origin: [data.origin[0], data.origin[1], data.origin[2]],
          dir: [data.dir[0], data.dir[1], data.dir[2]],
          weaponId: isValidWeaponId(data.weaponId) ? data.weaponId : WEAPON_IDS.AR,
        });
        break;
      }

      case PACKET_TYPES.HIT: {
        if (
          !isFiniteNumber(data.damage) ||
          data.damage < 0 ||
          typeof data.isHeadshot !== 'boolean'
        ) {
          return;
        }
        this._emit('hit', {
          type: PACKET_TYPES.HIT,
          t: timestamp,
          target: typeof data.target === 'string' ? data.target : 'remote',
          damage: data.damage,
          isHeadshot: data.isHeadshot,
          isMidAir: typeof data.isMidAir === 'boolean' ? data.isMidAir : false,
        });
        break;
      }

      case PACKET_TYPES.RESPAWN: {
        if (
          !isVec3Array(data.pos) ||
          !isFiniteNumber(data.yaw) ||
          !isFiniteNumber(data.hp) ||
          (data.killerScored !== undefined && typeof data.killerScored !== 'boolean')
        ) {
          return;
        }
        this._emit('respawn', {
          type: PACKET_TYPES.RESPAWN,
          t: timestamp,
          pos: [data.pos[0], data.pos[1], data.pos[2]],
          yaw: data.yaw,
          hp: data.hp,
          killerScored: Boolean(data.killerScored),
        });
        break;
      }

      default:
        // Unknown packet type; ignore safely.
        break;
    }
  }

  _send(packet) {
    if (!this.isConnected()) {
      return;
    }
    try {
      this._conn.send(packet);
    } catch (err) {
      this._emit('error', err);
    }
  }

  sendState(pos, yaw, pitch, isCrouching = false, weaponId = WEAPON_IDS.AR, isADS = false) {
    if (!this.isConnected()) return;
    this._send({
      type: PACKET_TYPES.STATE,
      t: Date.now(),
      pos,
      yaw,
      pitch,
      isCrouching: Boolean(isCrouching),
      weaponId: isValidWeaponId(weaponId) ? weaponId : WEAPON_IDS.AR,
      isADS: Boolean(isADS),
    });
  }

  sendShoot(origin, dir, weaponId = WEAPON_IDS.AR) {
    if (!this.isConnected()) return;
    this._send({
      type: PACKET_TYPES.SHOOT,
      t: Date.now(),
      origin,
      dir,
      weaponId: isValidWeaponId(weaponId) ? weaponId : WEAPON_IDS.AR,
    });
  }

  sendHit(damage, isHeadshot, isMidAir = false) {
    if (!this.isConnected()) return;
    this._send({
      type: PACKET_TYPES.HIT,
      t: Date.now(),
      target: 'remote',
      damage,
      isHeadshot: Boolean(isHeadshot),
      isMidAir: Boolean(isMidAir),
    });
  }

  sendRespawn(pos, yaw, hp = 100, killerScored = false) {
    if (!this.isConnected()) return;
    this._send({
      type: PACKET_TYPES.RESPAWN,
      t: Date.now(),
      pos,
      yaw,
      hp,
      killerScored: Boolean(killerScored),
    });
  }

  isConnected() {
    return Boolean(this._connected && this._conn && this._conn.open);
  }

  isHost() {
    return this._isHost;
  }

  disconnect() {
    this._cleanup(true);
  }

  _cleanup(emitDisconnected) {
    const wasConnected = this._connected;
    const conn = this._conn;
    const peer = this._peer;

    this._connected = false;
    this._conn = null;
    this._peer = null;
    this._isHost = false;
    this._roomCode = null;

    if (conn) {
      try {
        conn.close();
      } catch {
        // Ignore close errors
      }
    }

    if (peer) {
      try {
        peer.destroy();
      } catch {
        // Ignore destroy errors
      }
    }

    if (wasConnected && emitDisconnected) {
      this._emit('disconnected');
    }
  }
}
