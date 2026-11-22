const sharp = require('sharp');
const dir = 'D:/Downloads/Australia/12 Nov 26 ACB Updated Home Images/Better packaging. Better future/';

async function inspectCandleBox() {
  const { data, info } = await sharp(dir + 'Lumora Cedar & Vanilla Candle Box.webp').raw().toBuffer({ resolveWithObject: true });
  let minX = 1000, maxX = 0, minY = 750, maxY = 0;
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const idx = (y * info.width + x) * 3;
      const r = data[idx], g = data[idx+1], b = data[idx+2];
      // Dark navy or cream box surface (not lavender background [206, 190, 231])
      // Dark navy: r < 60 && g < 80 && b < 120
      // Cream front panel: r > 210 && g > 200 && b > 180 && r > b + 15
      const isNavy = r < 70 && g < 90 && b < 130;
      const isCream = r > 200 && g > 190 && b < 190 && (r - b) > 25;
      if (isNavy || isCream) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  console.log('Navy & Cream Candle Box:', { minX, maxX, minY, maxY, width: maxX - minX, height: maxY - minY, center: [(minX+maxX)/2, (minY+maxY)/2] });
}

inspectCandleBox();
