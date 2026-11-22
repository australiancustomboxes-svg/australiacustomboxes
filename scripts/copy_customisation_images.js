const fs = require('fs');
const path = require('path');

const srcDir = 'D:\\Downloads\\Australia\\Homepage IMAGES 7 Nov 26\\Make your packaging uniquely yours';
const destDir = path.resolve('public/images/customisation');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const map = {
  'Veloria Luxury Gift Packaging Set.webp': 'presentation-box.webp',
  'Luxury Australian Custom Boxes Packaging.webp': 'foil-stamping.webp',
  'Embossed Australian Custom Boxes Logo.webp': 'emboss-deboss.webp',
  'Glossy Australian Box Logo on Navy Paper.webp': 'spot-uv.webp',
  'Embossed and Debossed Australian Box Logos.webp': 'soft-touch.webp',
};

for (const [srcFile, destFile] of Object.entries(map)) {
  const src = path.join(srcDir, srcFile);
  const dest = path.join(destDir, destFile);
  fs.copyFileSync(src, dest);
  console.log(`Copied ${srcFile} -> ${destFile}`);
}
