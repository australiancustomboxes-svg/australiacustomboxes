const sharp = require('sharp');
const dir = 'D:/Downloads/Australia/12 Nov 26 ACB Updated Home Images/Better packaging. Better future/';

async function inspectLumora() {
  const { data, info } = await sharp(dir + 'Lumora Cedar & Vanilla Candle Box.webp').raw().toBuffer({ resolveWithObject: true });
  let minX = 1000, maxX = 0, minY = 750, maxY = 0;
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const idx = (y * info.width + x) * 3;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      // Lavender background: ~ [206, 190, 231]. Diff > 40
      if (Math.abs(r - 206) + Math.abs(g - 190) + Math.abs(b - 231) > 40) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  console.log('True Lumora Box:', { minX, maxX, minY, maxY, width: maxX - minX, height: maxY - minY });
}

inspectLumora();
