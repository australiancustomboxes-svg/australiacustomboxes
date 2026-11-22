const sharp = require('sharp');
const p = 'C:\\Users\\moeed\\.gemini\\antigravity\\brain\\b9fc67d0-38ee-43ff-aad3-08033ee44f6e\\.user_uploaded\\media_1795373210943_33de6fb0.jpg';

async function findCircles() {
  const { data, info } = await sharp(p).raw().toBuffer({ resolveWithObject: true });
  const boxLeft = 80, boxTop = 48, w = 269, h = 207;

  // Let's find white circular pins (near pure white RGB > 245)
  // that have dark border or text
  const candidates = [];
  for (let y = boxTop; y < boxTop + h; y++) {
    for (let x = boxLeft; x < boxLeft + w; x++) {
      const idx = (y * info.width + x) * info.channels;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      if (r > 248 && g > 248 && b > 248) {
        candidates.push({ x, y });
      }
    }
  }

  // Cluster candidates
  const clusters = [];
  for (const pt of candidates) {
    let found = false;
    for (const c of clusters) {
      const dist = Math.hypot(c.cx - pt.x, c.cy - pt.y);
      if (dist < 12) {
        c.points.push(pt);
        c.cx = c.points.reduce((sum, p) => sum + p.x, 0) / c.points.length;
        c.cy = c.points.reduce((sum, p) => sum + p.y, 0) / c.points.length;
        found = true;
        break;
      }
    }
    if (!found) {
      clusters.push({ cx: pt.x, cy: pt.y, points: [pt] });
    }
  }

  // Filter clusters by point count (pins are small circles)
  const pins = clusters.filter(c => c.points.length >= 8 && c.points.length <= 80);
  console.log(`Found ${pins.length} pin clusters:`);
  pins.forEach((pin, idx) => {
    const relX = ((pin.cx - boxLeft) / w * 100).toFixed(1);
    const relY = ((pin.cy - boxTop) / h * 100).toFixed(1);
    console.log(`Pin ${idx+1}: relX: ${relX}%, relY: ${relY}% (abs: ${pin.cx.toFixed(0)}, ${pin.cy.toFixed(0)})`);
  });
}

findCircles().catch(console.error);
