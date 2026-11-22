const fs = require('fs');
const path = require('path');

const src = 'D:\\Downloads\\Australia\\Homepage IMAGES 7 Nov 26\\Custom Box Types For Every Product\\Luxury Magnetic Closure Boxes.webp';
const dest = path.resolve('public/images/customisation/soft-touch-magnetic.webp');

fs.copyFileSync(src, dest);
console.log('Copied magnetic box to customisation folder');
