const sharp = require('sharp');
const base = 'C:/Users/moeed/.gemini/antigravity/brain/b9fc67d0-38ee-43ff-aad3-08033ee44f6e/';

async function inspectFigma4Details() {
  const { data, info } = await sharp(base + 'figma_tile4.png').raw().toBuffer({ resolveWithObject: true });
  console.log('Row 50 across x:');
  for (let x = 0; x < info.width; x += 15) {
    const idx = (50 * info.width + x) * 3;
    console.log('x=' + x + ': [' + data[idx] + ', ' + data[idx+1] + ', ' + data[idx+2] + ']');
  }
}

inspectFigma4Details();
