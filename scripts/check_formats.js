const sharp = require('sharp');
const path = require('path');
const artDir = 'C:\\Users\\moeed\\.gemini\\antigravity\\brain\\b9fc67d0-38ee-43ff-aad3-08033ee44f6e';

async function check() {
  const files = [
    'Embossed and Debossed Australian Box Logos.webp',
    'Embossed Australian Custom Boxes Logo.webp',
    'Glossy Australian Box Logo on Navy Paper.webp',
    'Luxury Australian Custom Boxes Packaging.webp'
  ];

  for (const f of files) {
    const meta = await sharp(path.join(artDir, f)).metadata();
    console.log(f, meta.width, 'x', meta.height, 'format:', meta.format);
  }
}

check().catch(console.error);
