const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const artDir = 'C:\\Users\\moeed\\.gemini\\antigravity\\brain\\b9fc67d0-38ee-43ff-aad3-08033ee44f6e';

async function analyze() {
  const files = [
    'Embossed and Debossed Australian Box Logos.webp',
    'Embossed Australian Custom Boxes Logo.webp',
    'Glossy Australian Box Logo on Navy Paper.webp',
    'Luxury Australian Custom Boxes Packaging.webp'
  ];

  for (const f of files) {
    const { data, info } = await sharp(path.join(artDir, f)).raw().toBuffer({ resolveWithObject: true });
    // Count pixels that are gold-ish (R > 160, G > 120, B < 80)
    let goldCount = 0;
    // Count pixels that are glossy/bright white (R > 200, G > 200, B > 200)
    let brightWhite = 0;
    // Count pixels that are navy (R < 30, G < 60, B > 60)
    let navyCount = 0;

    for (let i = 0; i < data.length; i += info.channels) {
      const r = data[i], g = data[i+1], b = data[i+2];
      if (r > 160 && g > 120 && b < 100) goldCount++;
      if (r > 210 && g > 210 && b > 210) brightWhite++;
      if (r < 40 && g < 70 && b > 70) navyCount++;
    }

    console.log(f, {
      goldPixels: goldCount,
      brightWhitePixels: brightWhite,
      navyPixels: navyCount
    });
  }
}

analyze().catch(console.error);
