const sharp = require('sharp');
const p = 'C:\\Users\\moeed\\.gemini\\antigravity\\brain\\b9fc67d0-38ee-43ff-aad3-08033ee44f6e\\.user_uploaded\\media_1795373210943_33de6fb0.jpg';

async function locateBox() {
  const { data, info } = await sharp(p).raw().toBuffer({ resolveWithObject: true });
  // Find plant at top-left: plant has green pixels (G > R and G > B)
  let boxLeft = 999, boxTop = 999, boxRight = 0, boxBottom = 0;
  for (let y = 30; y < 270; y++) {
    for (let x = 80; x < 350; x++) {
      const idx = (y * info.width + x) * info.channels;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      // if not background (ice bg ~246, 249, 255)
      if (Math.abs(r - 246) > 8 || Math.abs(g - 249) > 8 || Math.abs(b - 255) > 8) {
        if (x < boxLeft) boxLeft = x;
        if (x > boxRight) boxRight = x;
        if (y < boxTop) boxTop = y;
        if (y > boxBottom) boxBottom = y;
      }
    }
  }
  console.log('Presentation Photo bounds:', { boxLeft, boxTop, boxRight, boxBottom, w: boxRight - boxLeft, h: boxBottom - boxTop });
}

locateBox().catch(console.error);
