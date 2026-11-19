import { PLAYER_CONFIG, PHYSICS_CONFIG } from './constants.js';

const COLLISION_EPS = 1e-4;
const VERTICAL_SKIN = 1e-3;
const MAX_STEP_DT = 0.05;

/**
 * Pure CS2 / Source 2 movement physics controller.
 * Supports air-strafing, bunnyhopping with jump buffer and soft speed cap,
 * counter-strafing with Source ground friction, and crouch-jumping.
 */
export class CS2PhysicsController {
  constructor() {
    this.pos = { x: 0, y: 0, z: 0 };
    this.vel = { x: 0, y: 0, z: 0 };
    this.grounded = false;
    this.isCrouching = false;
    this.jumpBufferTimer = 0;
    this.eyeHeight = PLAYER_CONFIG.EYE_HEIGHT;
    this.feetOffset = 0;
    this._justLandedPrevTick = false;
  }

  /**
   * Reset player physics state to a spawn position.
   * @param {number[] | { x: number, y: number, z: number }} [pos]
   */
  reset(pos) {
    if (Array.isArray(pos)) {
      this.pos.x = pos[0] ?? 0;
      this.pos.y = pos[1] ?? 0;
      this.pos.z = pos[2] ?? 0;
    } else if (pos && typeof pos === 'object') {
      this.pos.x = pos.x ?? 0;
      this.pos.y = pos.y ?? 0;
      this.pos.z = pos.z ?? 0;
    } else {
      this.pos.x = 0;
      this.pos.y = 0;
      this.pos.z = 0;
    }

    this.vel.x = 0;
    this.vel.y = 0;
    this.vel.z = 0;
    this.grounded = false;
    this.isCrouching = false;
    this.jumpBufferTimer = 0;
    this.eyeHeight = PLAYER_CONFIG.EYE_HEIGHT;
    this.feetOffset = 0;
    this._justLandedPrevTick = false;
  }

  /**
   * Buffer a jump input (Space or Mouse Wheel) for clean bunnyhop timing.
   */
  queueJump() {
    this.jumpBufferTimer = PHYSICS_CONFIG.JUMP_BUFFER_SEC;
  }

  /**
   * Advance the physics simulation by dt seconds.
   * @param {number} dt
   * @param {{ forward?: number, right?: number, yaw?: number, crouch?: boolean, adsMult?: number }} input
   * @param {Array<{ min: { x: number, y: number, z: number }, max: { x: number, y: number, z: number } }>} [colliders]
   */
  step(dt, input = {}, colliders = []) {
    const stepDt = Math.min(Math.max(dt || 0, 0), MAX_STEP_DT);
    if (stepDt <= 0) {
      return this._buildResult(false, false, false);
    }

    const forward = input.forward ?? 0;
    const right = input.right ?? 0;
    const yaw = input.yaw ?? 0;
    const wantsCrouch = Boolean(input.crouch);
    const adsMult = input.adsMult ?? 1;

    const wasGrounded = this.grounded;
    let justJumped = false;
    let justBhopped = false;
    let justLanded = false;

    // 1. Update crouch state & air crouch feet lift
    this._updateCrouchState(wantsCrouch, colliders);

    // 2. Compute horizontal wish direction from yaw
    const fwdX = -Math.sin(yaw);
    const fwdZ = -Math.cos(yaw);
    const rightX = Math.cos(yaw);
    const rightZ = -Math.sin(yaw);

    let wishX = fwdX * forward + rightX * right;
    let wishZ = fwdZ * forward + rightZ * right;
    const wishLen = Math.hypot(wishX, wishZ);
    if (wishLen > 1e-6) {
      wishX /= wishLen;
      wishZ /= wishLen;
    } else {
      wishX = 0;
      wishZ = 0;
    }

    const baseSpeed = this.isCrouching
      ? PHYSICS_CONFIG.CROUCH_SPEED
      : PHYSICS_CONFIG.RUN_SPEED;
    const weaponSpeedMult =
      typeof input.weaponSpeedMult === 'number' && Number.isFinite(input.weaponSpeedMult)
        ? input.weaponSpeedMult
        : 1;
    const maxSpeed = baseSpeed * weaponSpeedMult * adsMult;

    // 3. Check buffered jump / bunnyhop (skips ground friction when triggered)
    if (this.grounded && this.jumpBufferTimer > 0) {
      const preJumpHorizSpeed = Math.hypot(this.vel.x, this.vel.z);

      // Apply CS2-style soft speed cap damping on bhop (scaled by active weapon speedMult)
      const cap = PHYSICS_CONFIG.BHOP_SOFT_CAP * weaponSpeedMult;
      if (preJumpHorizSpeed > cap) {
        const excess = preJumpHorizSpeed - cap;
        const newSpeed = cap + excess * (1 - PHYSICS_CONFIG.BHOP_CAP_DAMPING);
        const scale = newSpeed / preJumpHorizSpeed;
        this.vel.x *= scale;
        this.vel.z *= scale;
      }

      this.vel.y = PHYSICS_CONFIG.JUMP_VELOCITY;
      this.grounded = false;
      this.jumpBufferTimer = 0;
      justJumped = true;
      justBhopped =
        this._justLandedPrevTick ||
        preJumpHorizSpeed > PHYSICS_CONFIG.RUN_SPEED * weaponSpeedMult * 1.02;

      // If jumping while crouched, lift feet if ceiling clearance allows
      if (this.isCrouching) {
        this._tryApplyAirFeetLift(colliders);
      }
    } else if (this.jumpBufferTimer > 0) {
      this.jumpBufferTimer = Math.max(0, this.jumpBufferTimer - stepDt);
    }

    // 4. Horizontal acceleration (Source Ground Friction + Counter-Strafing OR Source Air-Strafing)
    if (this.grounded) {
      this._applyGroundFriction(stepDt);
      if (wishLen > 1e-6) {
        this._accelerateGround(wishX, wishZ, maxSpeed, stepDt);
      }
    } else {
      if (wishLen > 1e-6) {
        this._accelerateAir(wishX, wishZ, maxSpeed, stepDt);
      }
    }

    // 5. Separate-axis AABB sliding collision: X, Z, then Y
    const height = this.isCrouching
      ? PLAYER_CONFIG.CROUCH_HEIGHT
      : PLAYER_CONFIG.HEIGHT;

    this._moveAxisX(stepDt, height, colliders);
    this._moveAxisZ(stepDt, height, colliders);

    const surfaceTop = this._moveAxisY(stepDt, height, colliders);
    justLanded = !wasGrounded && this.grounded;

    // 6. Settle crouch-jump landing cleanly onto surface top without clipping or camera pop
    if (this.grounded && this.feetOffset > 0) {
      const settledLift = this.feetOffset;
      this.pos.y = surfaceTop;
      this.feetOffset = 0;
      this.eyeHeight = Math.max(0.4, this.eyeHeight - settledLift);
    }

    // 7. Smooth eye height transition
    const targetEyeHeight = this.isCrouching
      ? PLAYER_CONFIG.CROUCH_EYE_HEIGHT + (this.grounded ? 0 : this.feetOffset)
      : PLAYER_CONFIG.EYE_HEIGHT;
    const lerpAlpha = 1 - Math.exp(-PHYSICS_CONFIG.CROUCH_LERP_SPEED * stepDt);
    this.eyeHeight += (targetEyeHeight - this.eyeHeight) * lerpAlpha;

    this._justLandedPrevTick = justLanded;

    return this._buildResult(justJumped, justBhopped, justLanded);
  }

  _updateCrouchState(wantsCrouch, colliders) {
    if (wantsCrouch) {
      this.isCrouching = true;
      if (!this.grounded) {
        this._tryApplyAirFeetLift(colliders);
      } else {
        this.feetOffset = 0;
      }
    } else if (this.isCrouching) {
      if (this._canUncrouch(colliders)) {
        this.isCrouching = false;
        this.feetOffset = 0;
      } else if (!this.grounded) {
        this._tryApplyAirFeetLift(colliders);
      }
    }
  }

  _tryApplyAirFeetLift(colliders) {
    const targetLift = PLAYER_CONFIG.CROUCH_FEET_LIFT;
    if (this.feetOffset >= targetLift) return;

    const minY = this.pos.y + targetLift;
    const maxY = minY + PLAYER_CONFIG.CROUCH_HEIGHT;
    if (!this._intersectsAny(this.pos.x, this.pos.z, minY, maxY, colliders)) {
      this.feetOffset = targetLift;
    }
  }

  _canUncrouch(colliders) {
    // Check standing AABB [pos.y, pos.y + HEIGHT] against floor and all colliders
    if (this.pos.y < -COLLISION_EPS) {
      return false;
    }
    const minY = this.pos.y;
    const maxY = this.pos.y + PLAYER_CONFIG.HEIGHT;
    return !this._intersectsAny(this.pos.x, this.pos.z, minY, maxY, colliders);
  }

  _intersectsAny(x, z, minY, maxY, colliders) {
    const r = PLAYER_CONFIG.RADIUS - COLLISION_EPS;
    const minX = x - r;
    const maxX = x + r;
    const minZ = z - r;
    const maxZ = z + r;

    for (let i = 0; i < colliders.length; i++) {
      const box = colliders[i];
      if (
        minX < box.max.x &&
        maxX > box.min.x &&
        minY < box.max.y &&
        maxY > box.min.y &&
        minZ < box.max.z &&
        maxZ > box.min.z
      ) {
        return true;
      }
    }
    return false;
  }

  _applyGroundFriction(dt) {
    const speed = Math.hypot(this.vel.x, this.vel.z);
    if (speed <= 1e-6) {
      this.vel.x = 0;
      this.vel.z = 0;
      return;
    }

    const control = Math.max(speed, PHYSICS_CONFIG.STOP_SPEED);
    const drop = control * PHYSICS_CONFIG.GROUND_FRICTION * dt;
    const newSpeed = Math.max(0, speed - drop);
    const scale = newSpeed / speed;
    this.vel.x *= scale;
    this.vel.z *= scale;
  }

  _accelerateGround(wishX, wishZ, wishSpeed, dt) {
    const currentSpeed = this.vel.x * wishX + this.vel.z * wishZ;
    const addSpeed = wishSpeed - currentSpeed;
    if (addSpeed <= 0) return;

    let accelSpeed = PHYSICS_CONFIG.GROUND_ACCEL * dt * wishSpeed;
    if (accelSpeed > addSpeed) {
      accelSpeed = addSpeed;
    }

    this.vel.x += accelSpeed * wishX;
    this.vel.z += accelSpeed * wishZ;
  }

  _accelerateAir(wishX, wishZ, maxSpeed, dt) {
    const wishSpeed = Math.min(maxSpeed, PHYSICS_CONFIG.AIR_WISH_SPEED);
    const currentSpeed = this.vel.x * wishX + this.vel.z * wishZ;
    const addSpeed = wishSpeed - currentSpeed;
    if (addSpeed <= 0) return;

    let accelSpeed = PHYSICS_CONFIG.AIR_ACCEL * dt * PHYSICS_CONFIG.RUN_SPEED;
    if (accelSpeed > addSpeed) {
      accelSpeed = addSpeed;
    }

    this.vel.x += accelSpeed * wishX;
    this.vel.z += accelSpeed * wishZ;
  }

  _moveAxisX(dt, height, colliders) {
    const dx = this.vel.x * dt;
    if (dx === 0) return;

    this.pos.x += dx;

    const r = PLAYER_CONFIG.RADIUS;
    const minY = this.pos.y + this.feetOffset + VERTICAL_SKIN;
    const maxY = this.pos.y + this.feetOffset + height - VERTICAL_SKIN;
    const minZ = this.pos.z - r;
    const maxZ = this.pos.z + r;

    for (let i = 0; i < colliders.length; i++) {
      const box = colliders[i];
      if (
        this.pos.x - r < box.max.x &&
        this.pos.x + r > box.min.x &&
        minY < box.max.y &&
        maxY > box.min.y &&
        minZ < box.max.z &&
        maxZ > box.min.z
      ) {
        if (dx > 0) {
          this.pos.x = box.min.x - r - COLLISION_EPS;
        } else {
          this.pos.x = box.max.x + r + COLLISION_EPS;
        }
        this.vel.x = 0;
      }
    }
  }

  _moveAxisZ(dt, height, colliders) {
    const dz = this.vel.z * dt;
    if (dz === 0) return;

    this.pos.z += dz;

    const r = PLAYER_CONFIG.RADIUS;
    const minX = this.pos.x - r;
    const maxX = this.pos.x + r;
    const minY = this.pos.y + this.feetOffset + VERTICAL_SKIN;
    const maxY = this.pos.y + this.feetOffset + height - VERTICAL_SKIN;

    for (let i = 0; i < colliders.length; i++) {
      const box = colliders[i];
      if (
        minX < box.max.x &&
        maxX > box.min.x &&
        minY < box.max.y &&
        maxY > box.min.y &&
        this.pos.z - r < box.max.z &&
        this.pos.z + r > box.min.z
      ) {
        if (dz > 0) {
          this.pos.z = box.min.z - r - COLLISION_EPS;
        } else {
          this.pos.z = box.max.z + r + COLLISION_EPS;
        }
        this.vel.z = 0;
      }
    }
  }

  _moveAxisY(dt, height, colliders) {
    // Midpoint vertical integration for frame-rate-independent jump apex height
    if (!this.grounded) {
      const dy = this.vel.y * dt - 0.5 * PHYSICS_CONFIG.GRAVITY * dt * dt;
      this.vel.y -= PHYSICS_CONFIG.GRAVITY * dt;
      this.pos.y += dy;
    } else {
      // Small downward step to detect walking off ledges cleanly
      this.vel.y = -PHYSICS_CONFIG.GRAVITY * dt;
      this.pos.y += this.vel.y * dt;
    }

    const r = PLAYER_CONFIG.RADIUS;
    const minX = this.pos.x - r;
    const maxX = this.pos.x + r;
    const minZ = this.pos.z - r;
    const maxZ = this.pos.z + r;

    let landed = false;
    let surfaceTop = -Infinity;

    for (let i = 0; i < colliders.length; i++) {
      const box = colliders[i];
      const minY = this.pos.y + this.feetOffset;
      const maxY = minY + height;

      if (
        minX < box.max.x &&
        maxX > box.min.x &&
        minY < box.max.y &&
        maxY > box.min.y &&
        minZ < box.max.z &&
        maxZ > box.min.z
      ) {
        if (this.vel.y <= 0) {
          this.pos.y = box.max.y - this.feetOffset;
          this.vel.y = 0;
          landed = true;
          if (box.max.y > surfaceTop) {
            surfaceTop = box.max.y;
          }
        } else {
          this.pos.y = box.min.y - height - this.feetOffset - COLLISION_EPS;
          this.vel.y = 0;
        }
      }
    }

    // World floor clamp (y >= 0)
    if (this.pos.y + this.feetOffset <= 0) {
      this.pos.y = -this.feetOffset;
      if (this.vel.y <= 0) {
        this.vel.y = 0;
        landed = true;
        if (0 > surfaceTop) {
          surfaceTop = 0;
        }
      }
    }

    this.grounded = landed;
    return surfaceTop;
  }

  _buildResult(justJumped, justBhopped, justLanded) {
    const horizSpeed = Math.hypot(this.vel.x, this.vel.z);
    return {
      pos: { x: this.pos.x, y: this.pos.y, z: this.pos.z },
      vel: { x: this.vel.x, y: this.vel.y, z: this.vel.z },
      eyeHeight: this.eyeHeight,
      grounded: this.grounded,
      isCrouching: this.isCrouching,
      horizSpeed,
      speedUnits: Math.round(horizSpeed * PHYSICS_CONFIG.UNIT_SCALE),
      isCounterStrafed:
        this.grounded &&
        horizSpeed < PHYSICS_CONFIG.COUNTER_STRAFE_SPEED_THRESHOLD,
      justJumped,
      justBhopped,
      justLanded,
    };
  }
}
