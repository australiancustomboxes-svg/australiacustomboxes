const sharp = require('sharp');

async function createMaskedPreviews() {
  const base = 'C:/Users/moeed/.gemini/antigravity/brain/b9fc67d0-38ee-43ff-aad3-08033ee44f6e/';

  const maskC1 = Buffer.from('<svg width="750" height="750"><rect x="0" y="0" width="750" height="750" rx="375" ry="375" fill="white"/><rect x="0" y="375" width="750" height="375" fill="white"/></svg>');
  const c1 = await sharp(base + 'preview_scaled_c1.webp')
    .composite([{ input: maskC1, blend: 'dest-in' }])
    .png()
    .resize(300, 300)
    .toBuffer();

  const maskC2 = Buffer.from('<svg width="584" height="750"><rect x="0" y="0" width="584" height="750" rx="292" ry="292" fill="white"/><rect x="0" y="292" width="584" height="458" fill="white"/></svg>');
  const c2 = await sharp(base + 'preview_scaled_c2.webp')
    .composite([{ input: maskC2, blend: 'dest-in' }])
    .png()
    .resize(234, 300)
    .toBuffer();

  const maskC3 = Buffer.from('<svg width="750" height="750"><rect x="0" y="0" width="750" height="750" rx="375" ry="375" fill="white"/><rect x="0" y="375" width="750" height="375" fill="white"/></svg>');
  const c3 = await sharp(base + 'preview_scaled_c3.webp')
    .composite([{ input: maskC3, blend: 'dest-in' }])
    .png()
    .resize(300, 300)
    .toBuffer();

  await sharp({
    create: {
      width: 874,
      height: 340,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    }
  })
  .composite([
    { input: c1, top: 40, left: 0 },
    { input: c2, top: 0, left: 320 },
    { input: c3, top: 40, left: 574 }
  ])
  .png()
  .toFile(base + 'sustainability_3arches_scaled.png');

  console.log('Side by side preview generated');
}

createMaskedPreviews().catch(console.error);
