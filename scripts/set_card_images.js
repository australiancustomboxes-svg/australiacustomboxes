const fs = require('fs');
const path = require('path');

const srcDir = 'D:\\Downloads\\Australia\\Homepage IMAGES 7 Nov 26\\Make your packaging uniquely yours';
const destDir = path.resolve('public/images/customisation');

// 1. Foil Stamping
fs.copyFileSync(
  path.join(srcDir, 'Luxury Australian Custom Boxes Packaging.webp'),
  path.join(destDir, 'foil-stamping.webp')
);

// 2. Emboss & Deboss (Shows both Raised and Pressed!)
fs.copyFileSync(
  path.join(srcDir, 'Embossed and Debossed Australian Box Logos.webp'),
  path.join(destDir, 'emboss-deboss.webp')
);

// 3. Spot UV (Gloss on Matte)
fs.copyFileSync(
  path.join(srcDir, 'Glossy Australian Box Logo on Navy Paper.webp'),
  path.join(destDir, 'spot-uv.webp')
);

// 4. Soft Touch Coating (Luxury Magnetic Box)
const magSrc = 'D:\\Downloads\\Australia\\Homepage IMAGES 7 Nov 26\\Custom Box Types For Every Product\\Luxury Magnetic Closure Boxes.webp';
fs.copyFileSync(
  magSrc,
  path.join(destDir, 'soft-touch.webp')
);

console.log('Images successfully set and matched!');
