const sharp = require('sharp');
const dir = 'D:/Downloads/Australia/12 Nov 26 ACB Updated Home Images/Better packaging. Better future/';

async function inspect() {
  const { data, info } = await sharp(dir + 'EcoPack Natural Gift Box Set.webp').raw().toBuffer({ resolveWithObject: true });
  // check what pixels are at x=0..30
  for (let x = 0; x <= 20; x += 5) {
    const idx = (350 * info.width + x) * 3;
    console.log(`x=${x}, y=350: [${data[idx]}, ${data[idx+1]}, ${data[idx+2]}]`);
  }
}

inspect();
