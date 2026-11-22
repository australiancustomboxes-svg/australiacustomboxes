const sharp = require('sharp');
const path = require('path');
const dir = 'D:\\Downloads\\Australia\\Homepage IMAGES 7 Nov 26\\Make your packaging uniquely yours';

async function inspectAll() {
  const files = [
    'Luxury Australian Custom Boxes Packaging.webp',
    'Embossed Australian Custom Boxes Logo.webp',
    'Glossy Australian Box Logo on Navy Paper.webp',
    'Embossed and Debossed Australian Box Logos.webp',
    'Veloria Luxury Gift Packaging Set.webp'
  ];

  for (const f of files) {
    const p = path.join(dir, f);
    const meta = await sharp(p).metadata();
    console.log(f, ':', meta.width, 'x', meta.height);
  }
}

inspectAll().catch(console.error);
