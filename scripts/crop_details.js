const sharp = require('sharp');
const path = require('path');
const artDir = 'C:\\Users\\moeed\\.gemini\\antigravity\\brain\\b9fc67d0-38ee-43ff-aad3-08033ee44f6e';

async function cropDetails() {
  const f1 = path.join(artDir, 'Embossed Australian Custom Boxes Logo.webp');
  const f2 = path.join(artDir, 'Embossed and Debossed Australian Box Logos.webp');
  const f3 = path.join(artDir, 'Luxury Australian Custom Boxes Packaging.webp');

  // Let's inspect f1: what does f1 show?
  // Let's crop center 400x300 of f1, f2, f3
  await sharp(f1).extract({ left: 300, top: 180, width: 400, height: 300 }).toFile(path.join(artDir, 'detail_f1.png'));
  await sharp(f2).extract({ left: 300, top: 180, width: 400, height: 300 }).toFile(path.join(artDir, 'detail_f2.png'));
  await sharp(f3).extract({ left: 300, top: 180, width: 400, height: 300 }).toFile(path.join(artDir, 'detail_f3.png'));
  console.log('Details cropped');
}

cropDetails().catch(console.error);
