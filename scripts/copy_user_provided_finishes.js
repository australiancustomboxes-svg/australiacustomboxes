const fs = require('fs');
const path = require('path');

const destDir = path.resolve('public/images/customisation');

const mappings = [
  { src: 'D:\\Downloads\\foilstamping.webp', dest: 'foil-stamping.webp' },
  { src: 'D:\\Downloads\\emboss & deboss.webp', dest: 'emboss-deboss.webp' },
  { src: 'D:\\Downloads\\spot uv.webp', dest: 'spot-uv.webp' },
  { src: 'D:\\Downloads\\soft touch coating.webp', dest: 'soft-touch.webp' },
];

for (const m of mappings) {
  const destPath = path.join(destDir, m.dest);
  fs.copyFileSync(m.src, destPath);
  console.log(`Copied ${m.src} -> ${destPath}`);
}
