const sharp = require('sharp');
const p = 'C:\\Users\\moeed\\.gemini\\antigravity\\brain\\b9fc67d0-38ee-43ff-aad3-08033ee44f6e\\.user_uploaded\\media_1795373210943_33de6fb0.jpg';

async function locate() {
  const { data, info } = await sharp(p).raw().toBuffer({ resolveWithObject: true });
  // Find where the white background begins and where the image is
  // Let's sample along y=100
  let minX = 999, maxX = 0;
  for (let x = 0; x < info.width; x++) {
    const idx = (100 * info.width + x) * info.channels;
    const r = data[idx], g = data[idx+1], b = data[idx+2];
    // if not ice background (~246, 249, 255)
    if (Math.abs(r - 246) > 10 || Math.abs(g - 249) > 10 || Math.abs(b - 255) > 10) {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
    }
  }
  console.log('Image X range at y=100:', minX, maxX);
}

locate().catch(console.error);
