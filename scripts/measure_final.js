const sharp = require('sharp');

async function measureFiles() {
  const dir = 'public/images/sustainability/';
  const files = [
    { name: 'natural-kraft.jpg', bg: [209, 215, 195] },
    { name: 'paperboard.jpg', bg: [210, 196, 237] },
    { name: 'corrugated.jpg', bg: [222, 240, 227] }
  ];

  for (const f of files) {
    const { data, info } = await sharp(dir + f.name).raw().toBuffer({ resolveWithObject: true });
    let minX = info.width, maxX = 0, minY = info.height, maxY = 0;
    for (let y = 0; y < info.height; y++) {
      for (let x = 0; x < info.width; x++) {
        const idx = (y * info.width + x) * 3;
        const r = data[idx], g = data[idx+1], b = data[idx+2];
        const diff = Math.abs(r - f.bg[0]) + Math.abs(g - f.bg[1]) + Math.abs(b - f.bg[2]);
        if (diff > 45) {
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
        }
      }
    }
    console.log(f.name, {
      canvas: info.width + 'x' + info.height,
      box: (maxX - minX) + 'x' + (maxY - minY),
      boxPctW: Math.round(((maxX - minX) / info.width) * 100) + '%',
      boxPctH: Math.round(((maxY - minY) / info.height) * 100) + '%',
      marginL: minX,
      marginR: info.width - maxX,
      headroom: minY,
      footroom: info.height - maxY
    });
  }
}

measureFiles();
