const sharp = require('sharp');
const path = require('path');
const artDir = 'C:\\Users\\moeed\\.gemini\\antigravity\\brain\\b9fc67d0-38ee-43ff-aad3-08033ee44f6e';

async function check() {
  const p = path.resolve('public/images/customisation/soft-touch-magnetic.webp');
  await sharp(p).resize(300).toFile(path.join(artDir, 'magnetic_thumb.png'));
  console.log('Magnetic thumb created');
}

check().catch(console.error);
