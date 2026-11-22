const sharp = require('sharp');
const dir = 'D:/Downloads/Australia/12 Nov 26 ACB Updated Home Images/Better packaging. Better future/';

async function inspectExactBox() {
  const { data, info } = await sharp(dir + 'EcoPack Natural Gift Box Set.webp').raw().toBuffer({ resolveWithObject: true });
  // Find where lid is (lid is brownish kraft, RGB ~ [190, 150, 110])
  let minX = 1000, maxX = 0, minY = 750, maxY = 0;
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const idx = (y * info.width + x) * 3;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      // Kraft lid or box interior
      // Background is green-tinted grey: r < g. Kraft is reddish brown: r > g + 15
      if (r > g + 12 || Math.abs(r - 209) + Math.abs(g - 215) + Math.abs(b - 195) > 40) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  console.log('True EcoPack Box:', { minX, maxX, minY, maxY, width: maxX - minX, height: maxY - minY });
}

inspectExactBox();
