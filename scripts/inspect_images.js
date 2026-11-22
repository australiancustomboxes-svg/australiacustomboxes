const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const artDir = 'C:\\Users\\moeed\\.gemini\\antigravity\\brain\\b9fc67d0-38ee-43ff-aad3-08033ee44f6e';

async function main() {
  const files = [
    'Embossed and Debossed Australian Box Logos.webp',
    'Embossed Australian Custom Boxes Logo.webp',
    'Glossy Australian Box Logo on Navy Paper.webp',
    'Luxury Australian Custom Boxes Packaging.webp',
    'Veloria Luxury Gift Packaging Set.webp'
  ];

  for (let i = 0; i < files.length; i++) {
    const f = files[i];
    const srcPath = path.join(artDir, f);
    const meta = await sharp(srcPath).metadata();
    console.log(`[${i}] ${f} (${meta.width}x${meta.height})`);
  }
}

main().catch(console.error);
