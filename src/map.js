import * as THREE from 'three';
import { MAP_CONFIG } from './constants.js';

/**
 * Deterministic PRNG (Mulberry32) so procedural textures are consistent across runs.
 */
function createRng(seed) {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Fast tileable 2D value noise grid for smooth multi-octave sandstone/stucco/wood variation.
 */
function createTileableNoise(gridSize, seed) {
  const rng = createRng(seed);
  const grid = new Float32Array(gridSize * gridSize);
  for (let i = 0; i < grid.length; i++) {
    grid[i] = rng();
  }

  return function sample(u, v) {
    const x = (((u % 1) + 1) % 1) * gridSize;
    const y = (((v % 1) + 1) % 1) * gridSize;
    const x0 = Math.floor(x) % gridSize;
    const y0 = Math.floor(y) % gridSize;
    const x1 = (x0 + 1) % gridSize;
    const y1 = (y0 + 1) % gridSize;
    const fx = x - Math.floor(x);
    const fy = y - Math.floor(y);
    const sx = fx * fx * (3 - 2 * fx);
    const sy = fy * fy * (3 - 2 * fy);

    const n00 = grid[y0 * gridSize + x0];
    const n10 = grid[y0 * gridSize + x1];
    const n01 = grid[y1 * gridSize + x0];
    const n11 = grid[y1 * gridSize + x1];

    const nx0 = n00 + (n10 - n00) * sx;
    const nx1 = n01 + (n11 - n01) * sx;
    return nx0 + (nx1 - nx0) * sy;
  };
}

/**
 * Configures a high-resolution realistic PBR CanvasTexture with smooth trilinear
 * mipmapping and anisotropic filtering.
 */
function configurePbrTexture(
  canvas,
  { repeatX = 1, repeatY = 1, clampY = false, isColor = true } = {}
) {
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = clampY ? THREE.ClampToEdgeWrapping : THREE.RepeatWrapping;
  texture.repeat.set(repeatX, repeatY);
  texture.magFilter = THREE.LinearFilter;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.generateMipmaps = true;
  texture.anisotropy = 8;
  texture.colorSpace = isColor ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  texture.needsUpdate = true;
  return texture;
}

function clampByte(v) {
  return v < 0 ? 0 : v > 255 ? 255 : v | 0;
}

/**
 * Generates sun-baked CS2 Mirage/Dust2 courtyard sandstone & weathered concrete
 * paving slab textures (512x512 albedo + bump + roughness) for a 4m x 4m (2x2 slab) tile.
 */
function createFloorTextures(repeatX, repeatY) {
  const size = 512;
  const half = size / 2;

  const albedoCanvas = document.createElement('canvas');
  albedoCanvas.width = size;
  albedoCanvas.height = size;
  const ctx = albedoCanvas.getContext('2d');

  const bumpCanvas = document.createElement('canvas');
  bumpCanvas.width = size;
  bumpCanvas.height = size;
  const bCtx = bumpCanvas.getContext('2d');

  const roughCanvas = document.createElement('canvas');
  roughCanvas.width = size;
  roughCanvas.height = size;
  const rCtx = roughCanvas.getContext('2d');

  const albedoImg = ctx.createImageData(size, size);
  const bumpImg = bCtx.createImageData(size, size);
  const roughImg = rCtx.createImageData(size, size);

  const aData = albedoImg.data;
  const bData = bumpImg.data;
  const rData = roughImg.data;

  const macroNoise = createTileableNoise(8, 101);
  const midNoise = createTileableNoise(24, 202);
  const wearNoise = createTileableNoise(10, 303);
  const dustNoise = createTileableNoise(16, 405);
  const rng = createRng(404);

  // Subtle warm Dust2/Mirage per-slab sandstone/concrete tonal offsets
  const slabOffsets = [
    [5, 3, 0],
    [-4, -3, -2],
    [-2, -2, -4],
    [3, 2, -1],
  ];

  for (let y = 0; y < size; y++) {
    const v = y / size;
    const sy = y < half ? 0 : 1;
    // Distance to nearest horizontal expansion joint (0 or half)
    const distY = Math.min(y, Math.abs(y - half), size - y);

    for (let x = 0; x < size; x++) {
      const u = x / size;
      const sx = x < half ? 0 : 1;
      const slab = slabOffsets[sy * 2 + sx];
      const distX = Math.min(x, Math.abs(x - half), size - x);
      const jointDist = Math.min(distX, distY);

      const nMacro = macroNoise(u, v) - 0.5;
      const nMid = midNoise(u, v) - 0.5;
      const nWear = wearNoise(u, v);
      const nDust = dustNoise(u, v);
      const grain = (rng() - 0.5) * 13;

      // Worn foot-traffic scuff patches (slightly brighter & smoother)
      const scuffFactor = nWear > 0.64 ? (nWear - 0.64) / 0.36 : 0;
      // Subtle sandy dust settled near expansion joints
      const jointDust = jointDist < 22 ? Math.pow(1 - jointDist / 22, 1.8) * (0.55 + nDust * 0.45) : 0;

      // Sun-baked Mirage/Dust2 sandstone-concrete base (~#cabaa0)
      const baseDelta = nMacro * 16 + nMid * 10 + grain + scuffFactor * 9;
      let r = 204 + slab[0] + baseDelta;
      let g = 190 + slab[1] + baseDelta * 0.94;
      let b = 165 + slab[2] + baseDelta * 0.85;

      // Blend warm ochre desert dust toward joints
      if (jointDust > 0) {
        const dMix = jointDust * 0.42;
        r = r * (1 - dMix) + 174 * dMix;
        g = g * (1 - dMix) + 152 * dMix;
        b = b * (1 - dMix) + 118 * dMix;
      }

      const idx = (y * size + x) * 4;
      aData[idx] = clampByte(r);
      aData[idx + 1] = clampByte(g);
      aData[idx + 2] = clampByte(b);
      aData[idx + 3] = 255;

      // Fine sandstone aggregate bump
      const bv = clampByte(132 + nMid * 26 + grain * 2.1 - jointDust * 14);
      bData[idx] = bv;
      bData[idx + 1] = bv;
      bData[idx + 2] = bv;
      bData[idx + 3] = 255;

      // Matte sandstone roughness (~0.76 - 0.95), smoother on worn scuffs, rougher in dusty joints
      const rv = clampByte(220 - scuffFactor * 36 + jointDust * 26 - nMacro * 18 + (rng() - 0.5) * 8);
      rData[idx] = rv;
      rData[idx + 1] = rv;
      rData[idx + 2] = rv;
      rData[idx + 3] = 255;
    }
  }

  ctx.putImageData(albedoImg, 0, 0);
  bCtx.putImageData(bumpImg, 0, 0);
  rCtx.putImageData(roughImg, 0, 0);

  // Fine mineral aggregate speckles & warm sand grit
  for (let i = 0; i < 850; i++) {
    const px = rng() * size;
    const py = rng() * size;
    const rad = 0.6 + rng() * 1.5;
    ctx.fillStyle = rng() > 0.35 ? 'rgba(116, 102, 82, 0.19)' : 'rgba(236, 224, 200, 0.18)';
    ctx.fillRect(px, py, rad, rad);
  }

  // Subtle worn scuff streaks across slabs
  ctx.save();
  for (let i = 0; i < 22; i++) {
    const sx = rng() * size;
    const sy = rng() * size;
    const len = 18 + rng() * 44;
    const ang = (rng() - 0.5) * Math.PI;
    ctx.translate(sx, sy);
    ctx.rotate(ang);
    ctx.fillStyle = rng() > 0.5 ? 'rgba(130, 118, 98, 0.08)' : 'rgba(232, 221, 202, 0.09)';
    ctx.fillRect(-len * 0.5, -2.5, len, 4 + rng() * 4);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  }
  ctx.restore();

  // Subtle hairline weathering crack on one slab for natural realism
  ctx.save();
  ctx.strokeStyle = 'rgba(104, 92, 74, 0.38)';
  ctx.lineWidth = 1.2;
  bCtx.strokeStyle = 'rgb(72, 72, 72)';
  bCtx.lineWidth = 1.4;
  ctx.beginPath();
  bCtx.beginPath();
  let cx = 64;
  let cy = 178;
  ctx.moveTo(cx, cy);
  bCtx.moveTo(cx, cy);
  const crackPts = [
    [82, 171],
    [104, 176],
    [122, 165],
    [144, 169],
    [164, 158],
  ];
  for (const [nx, ny] of crackPts) {
    ctx.lineTo(nx, ny);
    bCtx.lineTo(nx, ny);
  }
  ctx.stroke();
  bCtx.stroke();
  ctx.restore();

  // Recessed expansion joints with sand accumulation & sunlit chamfer edge
  const drawJoints = (targetCtx, mainColor, shadowColor, highlightColor, mainW) => {
    const positions = [0, half];
    for (const pos of positions) {
      targetCtx.fillStyle = shadowColor;
      targetCtx.fillRect(0, pos - 2.5, size, mainW + 5);
      targetCtx.fillRect(pos - 2.5, 0, mainW + 5, size);

      targetCtx.fillStyle = mainColor;
      targetCtx.fillRect(0, pos, size, mainW);
      targetCtx.fillRect(pos, 0, mainW, size);

      targetCtx.fillStyle = highlightColor;
      targetCtx.fillRect(0, pos + mainW, size, 1.5);
      targetCtx.fillRect(pos + mainW, 0, 1.5, size);
    }
  };

  drawJoints(
    ctx,
    'rgba(104, 90, 70, 0.86)',
    'rgba(154, 134, 104, 0.32)',
    'rgba(236, 224, 202, 0.48)',
    2.5
  );
  drawJoints(bCtx, 'rgb(34, 34, 34)', 'rgb(96, 96, 96)', 'rgb(172, 172, 172)', 3);
  drawJoints(rCtx, 'rgb(248, 248, 248)', 'rgb(238, 238, 238)', 'rgb(202, 202, 202)', 3);

  return {
    map: configurePbrTexture(albedoCanvas, { repeatX, repeatY, clampY: false, isColor: true }),
    bumpMap: configurePbrTexture(bumpCanvas, { repeatX, repeatY, clampY: false, isColor: false }),
    roughnessMap: configurePbrTexture(roughCanvas, { repeatX, repeatY, clampY: false, isColor: false }),
  };
}

/**
 * Generates a weathered, faded painted tactical floor line texture with subtle
 * edge wear and concrete grain bleed-through.
 */
function createPaintedLineTexture(rgb, seed) {
  const w = 256;
  const h = 64;
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');
  const img = ctx.createImageData(w, h);
  const data = img.data;

  const wearNoise = createTileableNoise(14, seed);
  const fineNoise = createTileableNoise(32, seed + 17);
  const rng = createRng(seed + 31);

  for (let y = 0; y < h; y++) {
    const v = y / h;
    // Soft feathered edges along top/bottom of stripe
    const edgeMask = Math.min(1, Math.min(v * 7, (1 - v) * 7));
    for (let x = 0; x < w; x++) {
      const u = x / w;
      const nWear = wearNoise(u * 2, v);
      const nFine = fineNoise(u * 4, v * 2);
      const chip = nWear * 0.65 + nFine * 0.35;
      const alpha = chip > 0.24 ? Math.min(1, (chip - 0.22) * 1.45) * edgeMask : 0;
      const shade = (rng() - 0.5) * 16;

      const idx = (y * w + x) * 4;
      data[idx] = clampByte(rgb[0] + shade);
      data[idx + 1] = clampByte(rgb[1] + shade);
      data[idx + 2] = clampByte(rgb[2] + shade);
      data[idx + 3] = clampByte(alpha * 255);
    }
  }

  ctx.putImageData(img, 0, 0);
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.repeat.set(6, 1);
  tex.anisotropy = 8;
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.needsUpdate = true;
  return tex;
}

/**
 * Generates classic CS2/CS:GO weathered Mediterranean stucco & concrete perimeter
 * wall textures (512x512 albedo + bump + roughness) with darker concrete base plinth,
 * weathering/staining, exposed mortar/panel joints, top concrete cornice, and faded
 * stenciled tactical bands (#a8322d red / #2c5b8c CT-blue).
 */
function createWallTextures(accentColor, repeatX) {
  const size = 512;

  const albedoCanvas = document.createElement('canvas');
  albedoCanvas.width = size;
  albedoCanvas.height = size;
  const ctx = albedoCanvas.getContext('2d');

  const bumpCanvas = document.createElement('canvas');
  bumpCanvas.width = size;
  bumpCanvas.height = size;
  const bCtx = bumpCanvas.getContext('2d');

  const roughCanvas = document.createElement('canvas');
  roughCanvas.width = size;
  roughCanvas.height = size;
  const rCtx = roughCanvas.getContext('2d');

  const albedoImg = ctx.createImageData(size, size);
  const bumpImg = bCtx.createImageData(size, size);
  const roughImg = rCtx.createImageData(size, size);
  const aData = albedoImg.data;
  const bData = bumpImg.data;
  const rData = roughImg.data;

  const macroNoise = createTileableNoise(8, 505);
  const stuccoNoise = createTileableNoise(28, 606);
  const streakNoise = createTileableNoise(36, 655);
  const rng = createRng(707);

  for (let y = 0; y < size; y++) {
    const v = y / size;
    // Ground dust & splash weathering near bottom of wall
    const groundWeather = v > 0.72 ? Math.pow((v - 0.72) / 0.28, 1.55) * 34 : 0;
    // Soft underside shadow below top concrete cornice
    const topShadow = v > 0.05 && v < 0.14 ? Math.pow(1 - (v - 0.05) / 0.09, 1.8) * 26 : 0;

    for (let x = 0; x < size; x++) {
      const u = x / size;
      const nMacro = macroNoise(u, v) - 0.5;
      const nStucco = stuccoNoise(u, v) - 0.5;
      // Subtle vertical rain/dust weathering streaks
      const nStreak = streakNoise(u * 2.5, v * 0.18) - 0.5;
      const streakMask = v < 0.45 ? (0.45 - v) * 0.9 : 0.15;
      const grain = (rng() - 0.5) * 11;

      const panelShift = x < size / 2 ? 2.5 : -2.5;
      const delta =
        panelShift +
        nMacro * 18 +
        nStucco * 11 +
        nStreak * 12 * streakMask +
        grain -
        groundWeather -
        topShadow;

      // Warm sun-bleached Mediterranean Mirage/Dust2 stucco (~#d5c5ab)
      const idx = (y * size + x) * 4;
      aData[idx] = clampByte(214 + delta);
      aData[idx + 1] = clampByte(198 + delta * 0.94);
      aData[idx + 2] = clampByte(172 + delta * 0.85);
      aData[idx + 3] = 255;

      // Fine troweled stucco micro-relief
      const bv = clampByte(130 + nStucco * 30 + nMacro * 14 + grain * 1.9);
      bData[idx] = bv;
      bData[idx + 1] = bv;
      bData[idx + 2] = bv;
      bData[idx + 3] = 255;

      // Matte sun-baked stucco roughness (~0.82 - 0.95)
      const rv = clampByte(226 - nMacro * 18 + groundWeather * 0.5 + (rng() - 0.5) * 8);
      rData[idx] = rv;
      rData[idx + 1] = rv;
      rData[idx + 2] = rv;
      rData[idx + 3] = 255;
    }
  }

  ctx.putImageData(albedoImg, 0, 0);
  bCtx.putImageData(bumpImg, 0, 0);
  rCtx.putImageData(roughImg, 0, 0);

  // Subtle exposed weathered stucco/plaster patches
  for (let i = 0; i < 14; i++) {
    const px = rng() * size;
    const py = 54 + rng() * (size - 160);
    const rx = 14 + rng() * 34;
    const ry = 8 + rng() * 20;
    const grad = ctx.createRadialGradient(px, py, 2, px, py, Math.max(rx, ry));
    grad.addColorStop(0, 'rgba(164, 146, 120, 0.22)');
    grad.addColorStop(1, 'rgba(164, 146, 120, 0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.ellipse(px, py, rx, ry, (rng() - 0.5) * 0.5, 0, Math.PI * 2);
    ctx.fill();
  }

  // Horizontal subtle mortar/pour lift lines
  const liftYs = [138, 272, 398];
  for (const ly of liftYs) {
    ctx.fillStyle = 'rgba(116, 102, 84, 0.34)';
    ctx.fillRect(0, ly, size, 1.5);
    ctx.fillStyle = 'rgba(242, 232, 214, 0.26)';
    ctx.fillRect(0, ly + 1.5, size, 1);

    bCtx.fillStyle = 'rgb(84, 84, 84)';
    bCtx.fillRect(0, ly, size, 2);
  }

  // Vertical exposed panel/mortar seams (2 panels per 512px tile)
  const panelXs = [0, size / 2];
  for (const px of panelXs) {
    ctx.fillStyle = 'rgba(98, 88, 74, 0.72)';
    ctx.fillRect(px, 26, 3, size - 26);
    ctx.fillStyle = 'rgba(242, 232, 214, 0.35)';
    ctx.fillRect(px + 3, 26, 1.5, size - 26);

    bCtx.fillStyle = 'rgb(34, 34, 34)';
    bCtx.fillRect(px, 26, 3, size - 26);
    bCtx.fillStyle = 'rgb(166, 166, 166)';
    bCtx.fillRect(px + 3, 26, 1.5, size - 26);
  }

  // Subtle architectural weep/form-tie holes with weathered rainwater streaks
  const tieXs = [64, 192, 320, 448];
  const tieYs = [82, 206, 336];
  for (const ty of tieYs) {
    for (const tx of tieXs) {
      const dripGrad = ctx.createLinearGradient(tx, ty + 4, tx, ty + 38);
      dripGrad.addColorStop(0, 'rgba(102, 88, 70, 0.24)');
      dripGrad.addColorStop(1, 'rgba(102, 88, 70, 0)');
      ctx.fillStyle = dripGrad;
      ctx.fillRect(tx - 2.5, ty + 4, 5, 34);

      ctx.beginPath();
      ctx.arc(tx, ty, 4, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(84, 76, 66, 0.8)';
      ctx.fill();

      bCtx.beginPath();
      bCtx.arc(tx, ty, 4, 0, Math.PI * 2);
      bCtx.fillStyle = 'rgb(44, 44, 44)';
      bCtx.fill();
    }
  }

  // Darker weathered cast-concrete base plinth along bottom (~1m / 78px)
  const plinthY = size - 78;
  ctx.fillStyle = 'rgba(102, 96, 86, 0.42)';
  ctx.fillRect(0, plinthY, size, 78);
  // Subtle sand dust accumulation right along floor contact
  const baseDust = ctx.createLinearGradient(0, size - 28, 0, size);
  baseDust.addColorStop(0, 'rgba(150, 132, 104, 0)');
  baseDust.addColorStop(1, 'rgba(128, 112, 88, 0.48)');
  ctx.fillStyle = baseDust;
  ctx.fillRect(0, size - 28, size, 28);

  // Plinth chamfer ledge
  ctx.fillStyle = 'rgba(70, 66, 60, 0.72)';
  ctx.fillRect(0, plinthY, size, 3);
  ctx.fillStyle = 'rgba(232, 222, 204, 0.42)';
  ctx.fillRect(0, plinthY + 3, size, 2);

  bCtx.fillStyle = 'rgb(62, 62, 62)';
  bCtx.fillRect(0, plinthY, size, 3);
  bCtx.fillStyle = 'rgb(168, 168, 168)';
  bCtx.fillRect(0, plinthY + 3, size, 2);

  // Top weathered cast-concrete cornice ledge (26px)
  ctx.fillStyle = '#aba08e';
  ctx.fillRect(0, 0, size, 22);
  ctx.fillStyle = 'rgba(244, 236, 222, 0.48)';
  ctx.fillRect(0, 2, size, 3);
  ctx.fillStyle = '#7d7466';
  ctx.fillRect(0, 19, size, 4);
  ctx.fillStyle = 'rgba(54, 48, 40, 0.62)';
  ctx.fillRect(0, 23, size, 5);

  bCtx.fillStyle = 'rgb(196, 196, 196)';
  bCtx.fillRect(0, 0, size, 22);
  bCtx.fillStyle = 'rgb(44, 44, 44)';
  bCtx.fillRect(0, 22, size, 5);
  rCtx.fillStyle = 'rgb(218, 218, 218)';
  rCtx.fillRect(0, 0, size, 22);

  // Faded stenciled tactical identification band (#a8322d red or #2c5b8c CT-blue)
  const bandY = 266;
  const bandH = 34;

  // Faded dark stencil trim borders
  ctx.fillStyle = 'rgba(48, 46, 44, 0.68)';
  ctx.fillRect(0, bandY - 4, size, 3);
  ctx.fillRect(0, bandY + bandH + 1, size, 3);

  // Main weathered stenciled paint band
  ctx.save();
  ctx.globalAlpha = 0.78;
  ctx.fillStyle = accentColor;
  ctx.fillRect(0, bandY, size, bandH);
  ctx.restore();

  // Subtle paint weathering/scuffing over the tactical band so stucco grain bleeds through
  for (let i = 0; i < 420; i++) {
    const wx = rng() * size;
    const wy = bandY - 3 + rng() * (bandH + 6);
    const rw = 1.5 + rng() * 5;
    const rh = 1 + rng() * 2.5;
    ctx.fillStyle = 'rgba(212, 197, 173, 0.32)';
    ctx.fillRect(wx, wy, rw, rh);
  }

  // Subtle faded white tactical stencil ticks along the band
  ctx.save();
  ctx.fillStyle = 'rgba(238, 232, 220, 0.42)';
  for (const sx of [118, 374]) {
    ctx.fillRect(sx, bandY + 11, 18, 3);
    ctx.fillRect(sx + 22, bandY + 11, 6, 3);
    ctx.fillRect(sx, bandY + 18, 12, 2.5);
  }
  ctx.restore();

  // Keep vertical panel seams visible over the painted stripe
  for (const px of panelXs) {
    ctx.fillStyle = 'rgba(52, 48, 42, 0.65)';
    ctx.fillRect(px, bandY - 4, 3, bandH + 8);
  }

  // Secondary faded tactical accent line near base plinth
  ctx.save();
  ctx.globalAlpha = 0.7;
  ctx.fillStyle = accentColor;
  ctx.fillRect(0, size - 15, size, 5);
  ctx.restore();

  return {
    map: configurePbrTexture(albedoCanvas, { repeatX, repeatY: 1, clampY: true, isColor: true }),
    bumpMap: configurePbrTexture(bumpCanvas, { repeatX, repeatY: 1, clampY: true, isColor: false }),
    roughnessMap: configurePbrTexture(roughCanvas, { repeatX, repeatY: 1, clampY: true, isColor: false }),
  };
}

/**
 * Generates iconic CS:GO/CS2 weathered timber & olive-drab military ammo crate
 * PBR textures (512x512 albedo + bump + roughness + metalness) with wood grain,
 * dark steel straps, corner brackets, rivets, and crisp white stenciled markings
 * ("7.62" / "A" / hazard ticks).
 *
 * @param {'timber' | 'olive'} variant
 */
function createCrateTextures(variant = 'timber') {
  const isOlive = variant === 'olive';
  const size = 512;
  const frameW = 34;

  const albedoCanvas = document.createElement('canvas');
  albedoCanvas.width = size;
  albedoCanvas.height = size;
  const ctx = albedoCanvas.getContext('2d');

  const bumpCanvas = document.createElement('canvas');
  bumpCanvas.width = size;
  bumpCanvas.height = size;
  const bCtx = bumpCanvas.getContext('2d');

  const roughCanvas = document.createElement('canvas');
  roughCanvas.width = size;
  roughCanvas.height = size;
  const rCtx = roughCanvas.getContext('2d');

  const metalCanvas = document.createElement('canvas');
  metalCanvas.width = size;
  metalCanvas.height = size;
  const mCtx = metalCanvas.getContext('2d');

  const albedoImg = ctx.createImageData(size, size);
  const bumpImg = bCtx.createImageData(size, size);
  const roughImg = rCtx.createImageData(size, size);
  const aData = albedoImg.data;
  const bData = bumpImg.data;
  const rData = roughImg.data;

  const seedOffset = isOlive ? 2400 : 0;
  const grainNoise = createTileableNoise(32, 808 + seedOffset);
  const warpNoise = createTileableNoise(10, 909 + seedOffset);
  const grimeNoise = createTileableNoise(12, 955 + seedOffset);
  const rng = createRng(1010 + seedOffset);

  const plankCount = isOlive ? 4 : 5;
  const innerSize = size - frameW * 2;
  const plankH = innerSize / plankCount;

  // Authentic Dust2 weathered pine timber vs CS:GO olive-drab military ammo crate
  const plankTones = isOlive
    ? [
        [94, 102, 74],
        [86, 94, 67],
        [99, 107, 79],
        [89, 97, 70],
      ]
    : [
        [178, 141, 96],
        [165, 129, 85],
        [185, 148, 103],
        [170, 134, 90],
        [174, 138, 94],
      ];

  for (let y = 0; y < size; y++) {
    const v = y / size;
    const innerY = Math.max(0, Math.min(innerSize - 1, y - frameW));
    const plankIdx = Math.min(plankCount - 1, Math.floor(innerY / plankH));
    const tone = plankTones[plankIdx];
    const plankSeedOffset = plankIdx * 0.29;

    for (let x = 0; x < size; x++) {
      const u = x / size;
      const warp = warpNoise(u * 0.8 + plankSeedOffset, v * 1.6) * 0.14;
      const fiber = grainNoise(u * 0.35 + plankSeedOffset, (v + warp) * 7.5);
      const fineFiber = grainNoise(u * 1.2, v * 16.0);
      const ring = Math.sin((v * 26 + warp * 14 + plankIdx * 1.7) * Math.PI) * 0.5 + 0.5;
      const grime = grimeNoise(u, v);
      const micro = (rng() - 0.5) * 8;

      const grimeDarken = grime > 0.65 ? (grime - 0.65) * 28 : 0;
      const woodScale = isOlive ? 0.68 : 1.0;
      const woodDelta =
        ((fiber - 0.5) * 28 + (fineFiber - 0.5) * 14 + (ring - 0.5) * 13 + micro) * woodScale -
        grimeDarken;

      const idx = (y * size + x) * 4;
      aData[idx] = clampByte(tone[0] + woodDelta);
      aData[idx + 1] = clampByte(tone[1] + woodDelta * (isOlive ? 0.96 : 0.87));
      aData[idx + 2] = clampByte(tone[2] + woodDelta * (isOlive ? 0.82 : 0.71));
      aData[idx + 3] = 255;

      const bv = clampByte(126 + (fiber - 0.5) * 44 + (fineFiber - 0.5) * 24 + micro * 1.5);
      bData[idx] = bv;
      bData[idx + 1] = bv;
      bData[idx + 2] = bv;
      bData[idx + 3] = 255;

      // Matte weathered wood / olive paint roughness (~0.78 - 0.92)
      const rv = clampByte(218 + (0.5 - fiber) * 24 + grimeDarken * 0.4 + (rng() - 0.5) * 8);
      rData[idx] = rv;
      rData[idx + 1] = rv;
      rData[idx + 2] = rv;
      rData[idx + 3] = 255;
    }
  }

  ctx.putImageData(albedoImg, 0, 0);
  bCtx.putImageData(bumpImg, 0, 0);
  rCtx.putImageData(roughImg, 0, 0);

  // Base metalness = 0 for timber/painted wood
  mCtx.fillStyle = 'rgb(0, 0, 0)';
  mCtx.fillRect(0, 0, size, size);

  // Recessed horizontal plank seams
  for (let i = 1; i < plankCount; i++) {
    const py = Math.round(frameW + i * plankH);
    ctx.fillStyle = isOlive ? 'rgba(24, 28, 18, 0.82)' : 'rgba(42, 27, 14, 0.8)';
    ctx.fillRect(frameW, py - 1, innerSize, 3);
    ctx.fillStyle = isOlive ? 'rgba(136, 146, 112, 0.24)' : 'rgba(222, 188, 144, 0.28)';
    ctx.fillRect(frameW, py + 2, innerSize, 1.5);

    bCtx.fillStyle = 'rgb(26, 26, 26)';
    bCtx.fillRect(frameW, py - 1, innerSize, 3);
    rCtx.fillStyle = 'rgb(246, 246, 246)';
    rCtx.fillRect(frameW, py - 1, innerSize, 3);
  }

  // Subtle diagonal timber brace shadow on timber crates (classic Dust2 look)
  if (!isOlive) {
    ctx.save();
    ctx.strokeStyle = 'rgba(72, 50, 28, 0.22)';
    ctx.lineWidth = 28;
    ctx.beginPath();
    ctx.moveTo(frameW + 14, size - frameW - 14);
    ctx.lineTo(size - frameW - 14, frameW + 14);
    ctx.stroke();

    // Olive-drab painted military identification band across upper-mid plank
    ctx.fillStyle = 'rgba(76, 86, 62, 0.72)';
    ctx.fillRect(frameW, frameW + plankH * 0.98, innerSize, plankH * 0.62);
    ctx.restore();
  }

  // Recessed inner shadow along outer frame
  ctx.strokeStyle = 'rgba(22, 17, 12, 0.45)';
  ctx.lineWidth = 8;
  ctx.strokeRect(frameW + 4, frameW + 4, innerSize - 8, innerSize - 8);

  // Clean weathered white military stenciled markings ("7.62" / "A" / hazard ticks)
  ctx.save();
  ctx.fillStyle = isOlive ? 'rgba(236, 232, 218, 0.76)' : 'rgba(242, 238, 228, 0.78)';
  ctx.font = 'bold 42px monospace';
  ctx.fillText('7.62', frameW + 28, frameW + 132);

  ctx.font = 'bold 16px monospace';
  ctx.fillText(isOlive ? 'NATO BALL // 200 RDS' : 'MIL-SPEC // AMMO', frameW + 28, frameW + 156);

  // Crisp stenciled "A" site/crate badge in upper-right corner
  const badgeX = size - frameW - 86;
  const badgeY = frameW + 26;
  ctx.strokeStyle = 'rgba(240, 236, 224, 0.72)';
  ctx.lineWidth = 3;
  ctx.strokeRect(badgeX, badgeY, 56, 56);
  ctx.font = 'bold 38px monospace';
  ctx.fillText('A', badgeX + 16, badgeY + 42);

  // Hazard ticks / stencil bar along lower-right corner
  const tickBaseX = size - frameW - 134;
  const tickBaseY = size - frameW - 44;
  for (let i = 0; i < 6; i++) {
    ctx.beginPath();
    ctx.moveTo(tickBaseX + i * 18, tickBaseY + 18);
    ctx.lineTo(tickBaseX + i * 18 + 9, tickBaseY);
    ctx.lineTo(tickBaseX + i * 18 + 16, tickBaseY);
    ctx.lineTo(tickBaseX + i * 18 + 7, tickBaseY + 18);
    ctx.closePath();
    ctx.fill();
  }
  ctx.font = 'bold 13px monospace';
  ctx.fillText('HANDLE WITH CARE', tickBaseX - 8, tickBaseY - 8);
  ctx.restore();

  // Subtle scuffing over white stencil so it looks authentically sprayed on wood
  for (let i = 0; i < 160; i++) {
    const sx = frameW + 20 + rng() * (innerSize - 40);
    const sy = frameW + 20 + rng() * (innerSize - 40);
    ctx.fillStyle = isOlive ? 'rgba(88, 96, 68, 0.35)' : 'rgba(168, 134, 92, 0.32)';
    ctx.fillRect(sx, sy, 2 + rng() * 5, 1.5);
  }

  // Dark steel reinforcement straps across crate face
  const strapPositions = [152, size - 166];
  const strapW = 16;
  for (const sx of strapPositions) {
    ctx.fillStyle = '#2d3238';
    ctx.fillRect(sx, frameW, strapW, innerSize);
    ctx.fillStyle = 'rgba(168, 180, 192, 0.28)';
    ctx.fillRect(sx + 2, frameW, 2, innerSize);
    ctx.fillStyle = 'rgba(14, 16, 18, 0.55)';
    ctx.fillRect(sx - 2, frameW, 2, innerSize);
    ctx.fillRect(sx + strapW, frameW, 2, innerSize);

    bCtx.fillStyle = 'rgb(202, 202, 202)';
    bCtx.fillRect(sx, frameW, strapW, innerSize);
    rCtx.fillStyle = 'rgb(96, 96, 96)';
    rCtx.fillRect(sx, frameW, strapW, innerSize);
    mCtx.fillStyle = 'rgb(218, 218, 218)';
    mCtx.fillRect(sx, frameW, strapW, innerSize);

    // Strap rivets along plank intersections
    for (let rIdx = 0; rIdx < plankCount; rIdx++) {
      const ry = Math.round(frameW + (rIdx + 0.5) * plankH);
      const rx = sx + strapW / 2;
      ctx.beginPath();
      ctx.arc(rx, ry, 3.6, 0, Math.PI * 2);
      ctx.fillStyle = '#181b1f';
      ctx.fill();
      ctx.beginPath();
      ctx.arc(rx - 0.6, ry - 0.6, 2.3, 0, Math.PI * 2);
      ctx.fillStyle = '#606a74';
      ctx.fill();

      bCtx.beginPath();
      bCtx.arc(rx, ry, 3.6, 0, Math.PI * 2);
      bCtx.fillStyle = 'rgb(245, 245, 245)';
      bCtx.fill();
    }
  }

  // Beveled dark gunmetal steel outer framing
  const drawFrameRect = (targetCtx, fillStyle) => {
    targetCtx.fillStyle = fillStyle;
    targetCtx.fillRect(0, 0, size, frameW);
    targetCtx.fillRect(0, size - frameW, size, frameW);
    targetCtx.fillRect(0, 0, frameW, size);
    targetCtx.fillRect(size - frameW, 0, frameW, size);
  };

  drawFrameRect(ctx, '#353b42');
  drawFrameRect(bCtx, 'rgb(190, 190, 190)');
  drawFrameRect(rCtx, 'rgb(104, 104, 104)');
  drawFrameRect(mCtx, 'rgb(212, 212, 212)');

  // Subtle metallic edge wear scratches on steel frame
  for (let i = 0; i < 420; i++) {
    const onHoriz = rng() > 0.5;
    const px = onHoriz
      ? rng() * size
      : rng() > 0.5
        ? rng() * frameW
        : size - frameW + rng() * frameW;
    const py = onHoriz
      ? rng() > 0.5
        ? rng() * frameW
        : size - frameW + rng() * frameW
      : rng() * size;
    ctx.fillStyle = rng() > 0.5 ? 'rgba(150, 162, 174, 0.16)' : 'rgba(18, 20, 24, 0.18)';
    ctx.fillRect(px, py, 2 + rng() * 5, 1.5);
  }

  // Crisp steel bevel highlights & outer shadow edge
  ctx.strokeStyle = '#1f2328';
  ctx.lineWidth = 4;
  ctx.strokeRect(2, 2, size - 4, size - 4);

  ctx.strokeStyle = 'rgba(164, 176, 188, 0.45)';
  ctx.lineWidth = 2;
  ctx.strokeRect(6, 6, size - 12, size - 12);

  ctx.strokeStyle = '#1b1f24';
  ctx.lineWidth = 3;
  ctx.strokeRect(frameW, frameW, innerSize, innerSize);

  bCtx.strokeStyle = 'rgb(228, 228, 228)';
  bCtx.lineWidth = 3;
  bCtx.strokeRect(5, 5, size - 10, size - 10);
  bCtx.strokeStyle = 'rgb(38, 38, 38)';
  bCtx.lineWidth = 3;
  bCtx.strokeRect(frameW, frameW, innerSize, innerSize);

  // Heavy dark steel corner L-brackets with countersunk rivets
  const bracketLen = 90;
  const bracketThick = 42;
  const corners = [
    [0, 0, 1, 1],
    [size, 0, -1, 1],
    [0, size, 1, -1],
    [size, size, -1, -1],
  ];

  for (const [cx, cy, dx, dy] of corners) {
    const drawBracket = (targetCtx, color) => {
      targetCtx.fillStyle = color;
      targetCtx.fillRect(
        dx > 0 ? cx : cx - bracketLen,
        dy > 0 ? cy : cy - bracketThick,
        bracketLen,
        bracketThick
      );
      targetCtx.fillRect(
        dx > 0 ? cx : cx - bracketThick,
        dy > 0 ? cy : cy - bracketLen,
        bracketThick,
        bracketLen
      );
    };

    drawBracket(ctx, '#282d33');
    drawBracket(bCtx, 'rgb(218, 218, 218)');
    drawBracket(rCtx, 'rgb(88, 88, 88)');
    drawBracket(mCtx, 'rgb(232, 232, 232)');

    // Metallic highlight along bracket edge
    ctx.strokeStyle = 'rgba(170, 182, 194, 0.38)';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(
      (dx > 0 ? cx : cx - bracketLen) + 1.5,
      (dy > 0 ? cy : cy - bracketThick) + 1.5,
      bracketLen - 3,
      bracketThick - 3
    );

    const rivetOffsets = [
      [19, 19],
      [66, 19],
      [19, 66],
    ];
    for (const [rxOff, ryOff] of rivetOffsets) {
      const rx = cx + dx * rxOff;
      const ry = cy + dy * ryOff;

      ctx.beginPath();
      ctx.arc(rx, ry, 5.5, 0, Math.PI * 2);
      ctx.fillStyle = '#171a1e';
      ctx.fill();

      ctx.beginPath();
      ctx.arc(rx - 0.8, ry - 0.8, 3.6, 0, Math.PI * 2);
      ctx.fillStyle = '#5c6670';
      ctx.fill();

      bCtx.beginPath();
      bCtx.arc(rx, ry, 5.5, 0, Math.PI * 2);
      bCtx.fillStyle = 'rgb(248, 248, 248)';
      bCtx.fill();
    }
  }

  return {
    map: configurePbrTexture(albedoCanvas, { repeatX: 1, repeatY: 1, clampY: false, isColor: true }),
    bumpMap: configurePbrTexture(bumpCanvas, { repeatX: 1, repeatY: 1, clampY: false, isColor: false }),
    roughnessMap: configurePbrTexture(roughCanvas, { repeatX: 1, repeatY: 1, clampY: false, isColor: false }),
    metalnessMap: configurePbrTexture(metalCanvas, { repeatX: 1, repeatY: 1, clampY: false, isColor: false }),
  };
}

/**
 * Generates realistic 512x512 cast CS2 architectural concrete textures
 * (albedo + bump + roughness) for tactical pillars and spawn peek walls,
 * with subtle grit, chamfered precast joints, form-tie dimples, dark steel
 * top trim band, and optional faded stenciled team accent stripe.
 */
function createConcreteTextures(accentColor = null) {
  const size = 512;

  const albedoCanvas = document.createElement('canvas');
  albedoCanvas.width = size;
  albedoCanvas.height = size;
  const ctx = albedoCanvas.getContext('2d');

  const bumpCanvas = document.createElement('canvas');
  bumpCanvas.width = size;
  bumpCanvas.height = size;
  const bCtx = bumpCanvas.getContext('2d');

  const roughCanvas = document.createElement('canvas');
  roughCanvas.width = size;
  roughCanvas.height = size;
  const rCtx = roughCanvas.getContext('2d');

  const albedoImg = ctx.createImageData(size, size);
  const bumpImg = bCtx.createImageData(size, size);
  const roughImg = rCtx.createImageData(size, size);
  const aData = albedoImg.data;
  const bData = bumpImg.data;
  const rData = roughImg.data;

  const macroNoise = createTileableNoise(8, 1111);
  const aggNoise = createTileableNoise(28, 1212);
  const rng = createRng(1313);

  for (let y = 0; y < size; y++) {
    const v = y / size;
    // Subtle dusty ground weathering toward bottom
    const groundGrime = v > 0.76 ? Math.pow((v - 0.76) / 0.24, 1.55) * 28 : 0;

    for (let x = 0; x < size; x++) {
      const u = x / size;
      const nMacro = macroNoise(u, v) - 0.5;
      const nAgg = aggNoise(u, v) - 0.5;
      const grain = (rng() - 0.5) * 12;

      const delta = nMacro * 15 + nAgg * 11 + grain - groundGrime;
      const idx = (y * size + x) * 4;
      // Warm-neutral cast CS2 concrete (~#c6bfb3)
      aData[idx] = clampByte(199 + delta);
      aData[idx + 1] = clampByte(193 + delta * 0.96);
      aData[idx + 2] = clampByte(183 + delta * 0.92);
      aData[idx + 3] = 255;

      const bv = clampByte(130 + nAgg * 28 + grain * 2.1);
      bData[idx] = bv;
      bData[idx + 1] = bv;
      bData[idx + 2] = bv;
      bData[idx + 3] = 255;

      const rv = clampByte(222 - nMacro * 20 + groundGrime * 0.5 + (rng() - 0.5) * 8);
      rData[idx] = rv;
      rData[idx + 1] = rv;
      rData[idx + 2] = rv;
      rData[idx + 3] = 255;
    }
  }

  ctx.putImageData(albedoImg, 0, 0);
  bCtx.putImageData(bumpImg, 0, 0);
  rCtx.putImageData(roughImg, 0, 0);

  // Fine mineral grit speckles
  for (let i = 0; i < 600; i++) {
    ctx.fillStyle = rng() > 0.3 ? 'rgba(94, 90, 84, 0.2)' : 'rgba(232, 226, 216, 0.16)';
    ctx.fillRect(rng() * size, rng() * size, 1 + rng() * 1.5, 1 + rng() * 1.5);
  }

  // Chamfered architectural precast reveal joints (2x2 panels)
  const seamPos = size / 2;
  ctx.fillStyle = 'rgba(130, 124, 114, 0.35)';
  ctx.fillRect(0, seamPos - 4, size, 9);
  ctx.fillRect(seamPos - 4, 0, 9, size);

  ctx.fillStyle = 'rgba(76, 72, 66, 0.82)';
  ctx.fillRect(0, seamPos - 1, size, 3);
  ctx.fillRect(seamPos - 1, 0, 3, size);

  ctx.fillStyle = 'rgba(238, 232, 222, 0.48)';
  ctx.fillRect(0, seamPos + 2, size, 2);
  ctx.fillRect(seamPos + 2, 0, 2, size);

  bCtx.fillStyle = 'rgb(30, 30, 30)';
  bCtx.fillRect(0, seamPos - 1, size, 3);
  bCtx.fillRect(seamPos - 1, 0, 3, size);
  bCtx.fillStyle = 'rgb(176, 176, 176)';
  bCtx.fillRect(0, seamPos + 2, size, 2);
  bCtx.fillRect(seamPos + 2, 0, 2, size);

  // Precast form-tie dimples with faint weathering drips
  const dimples = [
    [128, 128],
    [384, 128],
    [128, 384],
    [384, 384],
  ];
  for (const [dx, dy] of dimples) {
    const drip = ctx.createLinearGradient(dx, dy + 4, dx, dy + 28);
    drip.addColorStop(0, 'rgba(96, 90, 82, 0.2)');
    drip.addColorStop(1, 'rgba(96, 90, 82, 0)');
    ctx.fillStyle = drip;
    ctx.fillRect(dx - 2, dy + 4, 4, 24);

    ctx.beginPath();
    ctx.arc(dx, dy, 4.5, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(78, 76, 72, 0.78)';
    ctx.fill();
    bCtx.beginPath();
    bCtx.arc(dx, dy, 4.5, 0, Math.PI * 2);
    bCtx.fillStyle = 'rgb(42, 42, 42)';
    bCtx.fill();
  }

  // Optional faded stenciled team-side tactical stripe
  if (accentColor) {
    const bandY = 104;
    const bandH = 38;
    ctx.fillStyle = 'rgba(42, 44, 46, 0.72)';
    ctx.fillRect(0, bandY - 4, size, 3.5);
    ctx.fillRect(0, bandY + bandH + 0.5, size, 3.5);

    ctx.save();
    ctx.globalAlpha = 0.78;
    ctx.fillStyle = accentColor;
    ctx.fillRect(0, bandY, size, bandH);
    ctx.restore();

    // Subtle paint wear chips over team stripe
    for (let i = 0; i < 260; i++) {
      const wx = rng() * size;
      const wy = bandY - 2 + rng() * (bandH + 4);
      ctx.fillStyle = 'rgba(198, 192, 182, 0.34)';
      ctx.fillRect(wx, wy, 1.5 + rng() * 4, 1.2 + rng() * 2);
    }

    // Keep chamfered vertical seam visible across painted stripe
    ctx.fillStyle = 'rgba(42, 40, 38, 0.68)';
    ctx.fillRect(seamPos - 1, bandY - 4, 3, bandH + 8);
  }

  // Dark steel top trim cap band
  ctx.fillStyle = '#343a42';
  ctx.fillRect(0, 0, size, 24);
  ctx.fillStyle = 'rgba(180, 190, 200, 0.34)';
  ctx.fillRect(0, 2, size, 2);
  ctx.fillStyle = '#1e2228';
  ctx.fillRect(0, 24, size, 3);

  bCtx.fillStyle = 'rgb(190, 190, 190)';
  bCtx.fillRect(0, 0, size, 24);
  bCtx.fillStyle = 'rgb(42, 42, 42)';
  bCtx.fillRect(0, 24, size, 3);
  rCtx.fillStyle = 'rgb(112, 112, 112)';
  rCtx.fillRect(0, 0, size, 24);

  // Ground-contact concrete chamfer shadow at bottom edge
  ctx.fillStyle = 'rgba(64, 58, 50, 0.52)';
  ctx.fillRect(0, size - 14, size, 14);

  return {
    map: configurePbrTexture(albedoCanvas, { repeatX: 1, repeatY: 1, clampY: true, isColor: true }),
    bumpMap: configurePbrTexture(bumpCanvas, { repeatX: 1, repeatY: 1, clampY: true, isColor: false }),
    roughnessMap: configurePbrTexture(roughCanvas, { repeatX: 1, repeatY: 1, clampY: true, isColor: false }),
  };
}

/**
 * Creates a warm golden-afternoon CS2 sky dome texture (#8cbce0 zenith ->
 * #d8e7f2 horizon -> subtle warm haze near sun) aligned with the primary sun light.
 */
function createSkyDomeTexture(width = 1024, height = 512) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  // Vertical sky gradient: CS2 zenith -> crisp daytime horizon -> warm sandstone bounce
  const grad = ctx.createLinearGradient(0, 0, 0, height);
  grad.addColorStop(0.0, '#8cbce0');
  grad.addColorStop(0.24, '#a7cde8');
  grad.addColorStop(0.44, '#c7dfef');
  grad.addColorStop(0.51, '#d8e7f2');
  grad.addColorStop(0.56, '#e3ded2');
  grad.addColorStop(0.66, '#d0c2ab');
  grad.addColorStop(1.0, '#baa78b');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, width, height);

  // Sun UV aligned with DirectionalLight at (18, 32, 16)
  // SphereGeometry: phi = atan2(z, -x) => u ≈ 0.384, theta = acos(y / len) => y ≈ 0.205 * height
  const sunX = width * 0.384;
  const sunY = height * 0.205;

  // Subtle warm golden atmospheric haze spreading toward the horizon beneath the sun
  const horizonHaze = ctx.createRadialGradient(
    sunX,
    height * 0.48,
    width * 0.02,
    sunX,
    height * 0.48,
    width * 0.34
  );
  horizonHaze.addColorStop(0.0, 'rgba(255, 232, 194, 0.32)');
  horizonHaze.addColorStop(0.5, 'rgba(252, 234, 206, 0.14)');
  horizonHaze.addColorStop(1.0, 'rgba(252, 234, 206, 0)');
  ctx.fillStyle = horizonHaze;
  ctx.fillRect(0, 0, width, height);

  // Soft wispy high-altitude Mediterranean cirrus clouds
  const rng = createRng(9191);
  for (let i = 0; i < 24; i++) {
    const cx = rng() * width;
    const cy = height * (0.14 + rng() * 0.3);
    const rx = width * (0.04 + rng() * 0.09);
    const ry = height * (0.008 + rng() * 0.018);
    const alpha = 0.05 + rng() * 0.08;
    const cloudGrad = ctx.createRadialGradient(cx, cy, 2, cx, cy, rx);
    cloudGrad.addColorStop(0, `rgba(255, 250, 240, ${alpha.toFixed(3)})`);
    cloudGrad.addColorStop(1, 'rgba(255, 250, 240, 0)');
    ctx.save();
    ctx.translate(cx, cy);
    ctx.scale(1, ry / rx);
    ctx.fillStyle = cloudGrad;
    ctx.beginPath();
    ctx.arc(0, 0, rx, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  // Golden sun atmospheric bloom & crisp solar core
  const sunGlow = ctx.createRadialGradient(sunX, sunY, 4, sunX, sunY, width * 0.18);
  sunGlow.addColorStop(0.0, 'rgba(255, 252, 240, 0.92)');
  sunGlow.addColorStop(0.12, 'rgba(255, 244, 218, 0.56)');
  sunGlow.addColorStop(0.36, 'rgba(255, 236, 200, 0.2)');
  sunGlow.addColorStop(1.0, 'rgba(255, 236, 200, 0)');
  ctx.fillStyle = sunGlow;
  ctx.fillRect(0, 0, width, height);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.magFilter = THREE.LinearFilter;
  texture.minFilter = THREE.LinearFilter;
  texture.needsUpdate = true;
  return texture;
}

/**
 * Bakes a crisp procedural Source 2 PBR reflection environment map using
 * THREE.PMREMGenerator from an offscreen sky + bright sun disc + warm sandstone
 * bounce floor scene. Disposes all temporary resources after baking.
 *
 * @param {THREE.WebGLRenderer} renderer
 * @returns {THREE.Texture}
 */
function bakeEnvironmentMap(renderer) {
  const pmremGenerator = new THREE.PMREMGenerator(renderer);
  const envScene = new THREE.Scene();

  const envSkyTex = createSkyDomeTexture(512, 256);
  const envSkyGeo = new THREE.SphereGeometry(50, 24, 16);
  const envSkyMat = new THREE.MeshBasicMaterial({
    map: envSkyTex,
    side: THREE.BackSide,
  });
  envScene.add(new THREE.Mesh(envSkyGeo, envSkyMat));

  // Bright HDR-intensity sun disc aligned with primary DirectionalLight (18, 32, 16)
  const sunDir = new THREE.Vector3(18, 32, 16).normalize();
  const sunDiscGeo = new THREE.SphereGeometry(3.2, 16, 12);
  const sunDiscMat = new THREE.MeshBasicMaterial({
    color: new THREE.Color(4.5, 4.0, 3.1),
  });
  const sunDisc = new THREE.Mesh(sunDiscGeo, sunDiscMat);
  sunDisc.position.copy(sunDir).multiplyScalar(42);
  envScene.add(sunDisc);

  // Soft warm solar halo for broad specular sheen on brushed metal
  const sunHaloGeo = new THREE.SphereGeometry(7.2, 16, 12);
  const sunHaloMat = new THREE.MeshBasicMaterial({
    color: new THREE.Color(1.7, 1.5, 1.2),
    transparent: true,
    opacity: 0.45,
  });
  const sunHalo = new THREE.Mesh(sunHaloGeo, sunHaloMat);
  sunHalo.position.copy(sunDir).multiplyScalar(43);
  envScene.add(sunHalo);

  // Warm sandstone courtyard bounce floor
  const envFloorGeo = new THREE.CircleGeometry(48, 24);
  const envFloorMat = new THREE.MeshBasicMaterial({
    color: 0xc8b493,
  });
  const envFloor = new THREE.Mesh(envFloorGeo, envFloorMat);
  envFloor.rotation.x = -Math.PI / 2;
  envFloor.position.y = -4;
  envScene.add(envFloor);

  // Subtle sunlit stucco courtyard horizon bounce ring
  const envRingGeo = new THREE.CylinderGeometry(36, 36, 10, 24, 1, true);
  const envRingMat = new THREE.MeshBasicMaterial({
    color: 0xd2c1a4,
    side: THREE.BackSide,
  });
  const envRing = new THREE.Mesh(envRingGeo, envRingMat);
  envRing.position.y = 0.5;
  envScene.add(envRing);

  const envRT = pmremGenerator.fromScene(envScene, 0.035);

  // Dispose temporary baking resources (keep envRT.texture alive on scene.environment)
  envSkyTex.dispose();
  envSkyGeo.dispose();
  envSkyMat.dispose();
  sunDiscGeo.dispose();
  sunDiscMat.dispose();
  sunHaloGeo.dispose();
  sunHaloMat.dispose();
  envFloorGeo.dispose();
  envFloorMat.dispose();
  envRingGeo.dispose();
  envRingMat.dispose();
  pmremGenerator.dispose();

  return envRT.texture;
}

/**
 * Creates the realistic CS2 / CS:GO Dust2 + Mirage inspired Source 2 PBR
 * 1v1 aim arena designed for bunnyhop lanes and crouch-jump crates.
 *
 * @param {THREE.Scene} scene
 * @param {THREE.WebGLRenderer | null} [renderer=null]
 * @returns {{
 *   colliders: THREE.Box3[],
 *   mapMeshes: THREE.Mesh[],
 *   spawnPoints: Array<{ pos: [number, number, number], yaw: number }>,
 *   getFarthestSpawn: (opponentPos: number[] | { x: number, y?: number, z: number } | null) => { pos: [number, number, number], yaw: number }
 * }}
 */
export function createArena(scene, renderer = null) {
  const { WIDTH, LENGTH, WALL_HEIGHT } = MAP_CONFIG;
  const halfW = WIDTH / 2;   // 13
  const halfL = LENGTH / 2;  // 20

  // --- Source 2 PBR Environment Reflections ---
  if (renderer) {
    scene.environment = bakeEnvironmentMap(renderer);
  }

  // --- Golden-Afternoon CS2 Atmosphere & Lighting ---
  scene.background = new THREE.Color(0xcbd7e0);
  scene.fog = new THREE.FogExp2(0xcbd7e0, 0.0068);

  // Non-colliding golden-afternoon CS2 sky gradient dome
  const skyDome = new THREE.Mesh(
    new THREE.SphereGeometry(140, 28, 18),
    new THREE.MeshBasicMaterial({
      map: createSkyDomeTexture(1024, 512),
      side: THREE.BackSide,
      fog: false,
      depthWrite: false,
    })
  );
  skyDome.raycast = () => {};
  scene.add(skyDome);

  // Subtle warm-neutral ambient fill so shadowed faces remain readable with strong contrast
  const ambientLight = new THREE.AmbientLight(0xe6dfd4, 0.16);
  scene.add(ambientLight);

  // Cool CS2 daytime sky / warm Dust2 sandstone bounce HemisphereLight
  const hemiLight = new THREE.HemisphereLight(0xcbe3f8, 0xc7ad86, 0.86);
  hemiLight.position.set(0, 26, 0);
  scene.add(hemiLight);

  // Primary crisp golden sun DirectionalLight with 2048x2048 soft shadows
  const dirLight = new THREE.DirectionalLight(0xfff0d4, 2.4);
  dirLight.position.set(18, 32, 16);
  dirLight.castShadow = true;
  dirLight.shadow.mapSize.set(2048, 2048);
  dirLight.shadow.camera.near = 2;
  dirLight.shadow.camera.far = 90;
  dirLight.shadow.camera.left = -24;
  dirLight.shadow.camera.right = 24;
  dirLight.shadow.camera.top = 28;
  dirLight.shadow.camera.bottom = -28;
  dirLight.shadow.bias = -0.0004;
  dirLight.shadow.normalBias = 0.022;
  dirLight.shadow.radius = 2.4;
  scene.add(dirLight);

  // Subtle cool sky bounce fill from opposite hemisphere
  const rimLight = new THREE.DirectionalLight(0xb2d0ec, 0.34);
  rimLight.position.set(-18, 16, -20);
  rimLight.castShadow = false;
  scene.add(rimLight);

  // --- Collections ---
  const colliders = [];
  const mapMeshes = [];

  // Helper to add a solid box mesh (wall, pillar, or crate) to scene, mapMeshes, and colliders
  function addSolidBox(w, h, d, x, y, z, material) {
    const geo = new THREE.BoxGeometry(w, h, d);
    const mesh = new THREE.Mesh(geo, material);
    mesh.position.set(x, y, z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.updateMatrixWorld(true);
    scene.add(mesh);

    mapMeshes.push(mesh);
    colliders.push(new THREE.Box3().setFromObject(mesh));
    return mesh;
  }

  // Shared dark gunmetal steel trim cap material for concrete pillars and spawn peek walls
  const steelCapMat = new THREE.MeshStandardMaterial({
    color: 0x394048,
    roughness: 0.36,
    metalness: 0.78,
  });

  // Adds a flush decorative dark steel top trim cap without altering colliders or height
  function addConcreteWithCap(w, h, d, x, y, z, material) {
    const mesh = addSolidBox(w, h, d, x, y, z, material);
    const capH = 0.06;
    const capGeo = new THREE.BoxGeometry(w + 0.04, capH, d + 0.04);
    const capMesh = new THREE.Mesh(capGeo, steelCapMat);
    capMesh.position.set(x, y + h / 2 - capH / 2 + 0.002, z);
    capMesh.castShadow = true;
    capMesh.receiveShadow = true;
    capMesh.updateMatrixWorld(true);
    scene.add(capMesh);
    mapMeshes.push(capMesh);
    return mesh;
  }

  // --- Floor (top surface at y = 0) ---
  const floorMaps = createFloorTextures(WIDTH / 4, LENGTH / 4);
  const floorMat = new THREE.MeshStandardMaterial({
    map: floorMaps.map,
    bumpMap: floorMaps.bumpMap,
    bumpScale: 0.018,
    roughnessMap: floorMaps.roughnessMap,
    roughness: 1.0,
    metalness: 0.02,
  });
  const floorGeo = new THREE.BoxGeometry(WIDTH, 0.5, LENGTH);
  const floorMesh = new THREE.Mesh(floorGeo, floorMat);
  floorMesh.position.set(0, -0.25, 0);
  floorMesh.receiveShadow = true;
  floorMesh.updateMatrixWorld(true);
  scene.add(floorMesh);
  mapMeshes.push(floorMesh);

  // Realistic faded painted tactical center divider at z = 0
  const midLineMat = new THREE.MeshStandardMaterial({
    map: createPaintedLineTexture([74, 70, 64], 1501),
    roughness: 0.9,
    metalness: 0.02,
    transparent: true,
    opacity: 0.62,
    depthWrite: false,
    polygonOffset: true,
    polygonOffsetFactor: -1,
    polygonOffsetUnits: -1,
  });
  const midLineMesh = new THREE.Mesh(new THREE.PlaneGeometry(WIDTH - 0.6, 0.14), midLineMat);
  midLineMesh.rotation.x = -Math.PI / 2;
  midLineMesh.position.set(0, 0.003, 0);
  midLineMesh.receiveShadow = true;
  scene.add(midLineMesh);

  // Subtle faded painted tactical bhop side lane guide lines at x = ±8.8
  const laneLineTex = createPaintedLineTexture([234, 224, 204], 1601);
  laneLineTex.repeat.set(9, 1);
  const laneGuideMat = new THREE.MeshStandardMaterial({
    map: laneLineTex,
    roughness: 0.88,
    metalness: 0.02,
    transparent: true,
    opacity: 0.48,
    depthWrite: false,
    polygonOffset: true,
    polygonOffsetFactor: -1,
    polygonOffsetUnits: -1,
  });
  for (const xSign of [-1, 1]) {
    const laneLine = new THREE.Mesh(new THREE.PlaneGeometry(0.1, LENGTH - 2.4), laneGuideMat);
    laneLine.rotation.x = -Math.PI / 2;
    laneLine.position.set(xSign * 8.8, 0.003, 0);
    laneLine.receiveShadow = true;
    scene.add(laneLine);
  }

  // --- Outer Perimeter Walls ---
  // +Z half = faded stenciled T-red (#a8322d), -Z half = faded stenciled CT-blue (#2c5b8c)
  const RED = '#a8322d';
  const BLUE = '#2c5b8c';
  const wallThickness = 1.0;

  const endWallRedMaps = createWallTextures(RED, WIDTH / 4);
  const endWallBlueMaps = createWallTextures(BLUE, WIDTH / 4);
  const sideWallRedMaps = createWallTextures(RED, halfL / 4);
  const sideWallBlueMaps = createWallTextures(BLUE, halfL / 4);

  const endWallRedMat = new THREE.MeshStandardMaterial({
    map: endWallRedMaps.map,
    bumpMap: endWallRedMaps.bumpMap,
    bumpScale: 0.022,
    roughnessMap: endWallRedMaps.roughnessMap,
    roughness: 1.0,
    metalness: 0.02,
  });
  const endWallBlueMat = new THREE.MeshStandardMaterial({
    map: endWallBlueMaps.map,
    bumpMap: endWallBlueMaps.bumpMap,
    bumpScale: 0.022,
    roughnessMap: endWallBlueMaps.roughnessMap,
    roughness: 1.0,
    metalness: 0.02,
  });
  const sideWallRedMat = new THREE.MeshStandardMaterial({
    map: sideWallRedMaps.map,
    bumpMap: sideWallRedMaps.bumpMap,
    bumpScale: 0.022,
    roughnessMap: sideWallRedMaps.roughnessMap,
    roughness: 1.0,
    metalness: 0.02,
  });
  const sideWallBlueMat = new THREE.MeshStandardMaterial({
    map: sideWallBlueMaps.map,
    bumpMap: sideWallBlueMaps.bumpMap,
    bumpScale: 0.022,
    roughnessMap: sideWallBlueMaps.roughnessMap,
    roughness: 1.0,
    metalness: 0.02,
  });

  // +Z and -Z end walls
  addSolidBox(
    WIDTH + wallThickness * 2,
    WALL_HEIGHT,
    wallThickness,
    0,
    WALL_HEIGHT / 2,
    halfL + wallThickness / 2,
    endWallRedMat
  );
  addSolidBox(
    WIDTH + wallThickness * 2,
    WALL_HEIGHT,
    wallThickness,
    0,
    WALL_HEIGHT / 2,
    -(halfL + wallThickness / 2),
    endWallBlueMat
  );

  // -X and +X side walls (split at z = 0 so +Z half is red, -Z half is blue)
  for (const xSign of [-1, 1]) {
    const wx = xSign * (halfW + wallThickness / 2);
    addSolidBox(wallThickness, WALL_HEIGHT, halfL, wx, WALL_HEIGHT / 2, halfL / 2, sideWallRedMat);
    addSolidBox(wallThickness, WALL_HEIGHT, halfL, wx, WALL_HEIGHT / 2, -halfL / 2, sideWallBlueMat);
  }

  // --- Cover & Military Crate Materials ---
  const timberCrateMaps = createCrateTextures('timber');
  const timberCrateMat = new THREE.MeshStandardMaterial({
    map: timberCrateMaps.map,
    bumpMap: timberCrateMaps.bumpMap,
    bumpScale: 0.024,
    roughnessMap: timberCrateMaps.roughnessMap,
    roughness: 1.0,
    metalnessMap: timberCrateMaps.metalnessMap,
    metalness: 1.0,
  });

  const oliveCrateMaps = createCrateTextures('olive');
  const oliveCrateMat = new THREE.MeshStandardMaterial({
    map: oliveCrateMaps.map,
    bumpMap: oliveCrateMaps.bumpMap,
    bumpScale: 0.024,
    roughnessMap: oliveCrateMaps.roughnessMap,
    roughness: 1.0,
    metalnessMap: oliveCrateMaps.metalnessMap,
    metalness: 1.0,
  });

  const concreteMaps = createConcreteTextures();
  const concreteRedMaps = createConcreteTextures(RED);
  const concreteBlueMaps = createConcreteTextures(BLUE);

  const concreteMat = new THREE.MeshStandardMaterial({
    map: concreteMaps.map,
    bumpMap: concreteMaps.bumpMap,
    bumpScale: 0.02,
    roughnessMap: concreteMaps.roughnessMap,
    roughness: 1.0,
    metalness: 0.04,
  });
  const concreteRedMat = new THREE.MeshStandardMaterial({
    map: concreteRedMaps.map,
    bumpMap: concreteRedMaps.bumpMap,
    bumpScale: 0.02,
    roughnessMap: concreteRedMaps.roughnessMap,
    roughness: 1.0,
    metalness: 0.04,
  });
  const concreteBlueMat = new THREE.MeshStandardMaterial({
    map: concreteBlueMaps.map,
    bumpMap: concreteBlueMaps.bumpMap,
    bumpScale: 0.02,
    roughnessMap: concreteBlueMaps.roughnessMap,
    roughness: 1.0,
    metalness: 0.04,
  });

  // --- Center Tactical Block Structure (x = 0, z = 0) ---
  // Tall 3.2m central pillar (2.6m x 3.2m x 2.6m)
  addConcreteWithCap(2.6, 3.2, 2.6, 0, 1.6, 0, concreteMat);

  // Flanked on ±X sides by 1.55m crouch-jump weathered timber crates for high-ground peeks
  for (const xSign of [-1, 1]) {
    addSolidBox(1.5, 1.55, 1.5, xSign * 2.05, 0.775, 0, timberCrateMat);
  }

  // --- Mid-Lane Boundary Pillars (x = ±7.6, z = 0) ---
  // Keeps x ≈ ±8.5 to ±13.0 completely open as wide, clean CS2 bhop lanes
  for (const xSign of [-1, 1]) {
    addConcreteWithCap(1.6, 2.6, 2.2, xSign * 7.6, 1.3, 0, concreteMat);
  }

  // --- Symmetric Quadrant Layout (mirror-symmetric across Z = 0 and X = 0) ---
  for (const zSign of [-1, 1]) {
    const teamConcreteMat = zSign > 0 ? concreteRedMat : concreteBlueMat;

    for (const xSign of [-1, 1]) {
      // Crouch-jump weathered timber crates (height = 1.55m) at mid-flanks (x = ±5.5, z = ±5.5)
      addSolidBox(1.6, 1.55, 1.6, xSign * 5.5, 0.775, zSign * 5.5, timberCrateMat);

      // Crouch-jump weathered timber crates (height = 1.55m) near spawn flanks (x = ±6.5, z = ±12.5)
      addSolidBox(1.6, 1.55, 1.6, xSign * 6.5, 0.775, zSign * 12.5, timberCrateMat);

      // Standard jumpable olive-drab military ammo crates (height = 1.0m) at (x = ±3.8, z = ±9.5)
      addSolidBox(1.5, 1.0, 1.5, xSign * 3.8, 0.5, zSign * 9.5, oliveCrateMat);

      // Spawn peek cover walls (z = ±14.2, x = ±4.2, height = 2.4m)
      // Leaves center lane (x ∈ [-2.6, 2.6]) open for Sniper/AR duels while shielding spawns
      addConcreteWithCap(3.2, 2.4, 0.9, xSign * 4.2, 1.2, zSign * 14.2, teamConcreteMat);
    }
  }

  // --- 6 Unobstructed Symmetric Spawn Points ---
  // In Three.js, camera forward at pitch=0 is (-sin(yaw), 0, -cos(yaw)).
  // To face arena center (0, 0, 0) from (x, 0, z), yaw = Math.atan2(x, z).
  const rawSpawns = [
    [0, 0, 17.5],
    [0, 0, -17.5],
    [-10.5, 0, 16.5],
    [10.5, 0, 16.5],
    [-10.5, 0, -16.5],
    [10.5, 0, -16.5],
  ];

  const spawnPoints = rawSpawns.map(([x, y, z]) => ({
    pos: [x, y, z],
    yaw: Math.atan2(x, z),
  }));

  function getFarthestSpawn(opponentPos) {
    if (!opponentPos) {
      const pick = spawnPoints[Math.floor(Math.random() * spawnPoints.length)];
      return { pos: [...pick.pos], yaw: pick.yaw };
    }

    const ox = Array.isArray(opponentPos) ? opponentPos[0] : opponentPos.x;
    const oy = Array.isArray(opponentPos) ? (opponentPos[1] ?? 0) : (opponentPos.y ?? 0);
    const oz = Array.isArray(opponentPos) ? opponentPos[2] : opponentPos.z;

    let best = spawnPoints[0];
    let bestDistSq = -1;

    for (const sp of spawnPoints) {
      const dx = sp.pos[0] - ox;
      const dy = sp.pos[1] - oy;
      const dz = sp.pos[2] - oz;
      const distSq = dx * dx + dy * dy + dz * dz;
      if (distSq > bestDistSq) {
        bestDistSq = distSq;
        best = sp;
      }
    }

    return { pos: [...best.pos], yaw: best.yaw };
  }

  return {
    colliders,
    mapMeshes,
    spawnPoints,
    getFarthestSpawn,
  };
}
