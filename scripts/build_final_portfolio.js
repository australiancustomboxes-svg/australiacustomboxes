const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function buildFinalPortfolio() {
  const dir = 'D:/Downloads/Australia/12 Nov 26 ACB Updated Home Images/Packaging made for brands like yours/';
  const dir2 = 'D:/Downloads/Australia/12 Nov 26 ACB Updated Home Images/SIlder/';
  const outDir = 'public/images/portfolio/';

  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  // 1. Hero Mailer: 1016 x 300 (Canvas: 2032 x 600, aspect 3.387)
  // Raw is 1500 x 742. Center is around Y = 370.
  const buf1 = await sharp(dir + 'ACB Custom Packaging Studio Scene.webp')
    .extract({ left: 0, top: 150, width: 1500, height: 442 })
    .resize(2032, 600)
    .png()
    .toBuffer();

  // 2. Cufflink Box: 328 x 616 (Canvas: 656 x 1232, aspect 0.5325)
  // Raw is 800 x 800.
  const buf2 = await sharp(dir + 'Australian Kangaroo Cufflink Gift Set.webp')
    .resize(656, 1232, { fit: 'cover', position: 'center' })
    .png()
    .toBuffer();

  // 3. Popcorn Box: 328 x 616 (Canvas: 656 x 1232, aspect 0.5325)
  // Raw is 780 x 520.
  const buf3 = await sharp(dir + 'Australian Navy Gold Popcorn Box.webp')
    .resize(656, 1232, { fit: 'cover', position: 'center' })
    .png()
    .toBuffer();

  // 4. Gable Box: 672 x 300 (Canvas: 1344 x 600, aspect 2.24)
  // Raw is 650 x 650 square.
  // In raw, the box with handle is from Y = 25 to Y = 620 (height ~ 595).
  // In a 2.24:1 tile, direct cover chops off handle and bottom.
  // We fit the box cleanly (height 580) centered horizontally on matching beige surface rgb(238, 214, 202).
  const raw4Scaled = await sharp(dir2 + 'ACB Premium Custom Gable Box.webp')
    .resize(580, 580)
    .png()
    .toBuffer();

  const feather4Svg = Buffer.from(
    '<svg width="580" height="580"><rect x="0" y="0" width="580" height="580" rx="35" ry="35" fill="white"/></svg>'
  );
  const feather4 = await sharp(feather4Svg).resize(580, 580).png().toBuffer();
  const raw4Feathered = await sharp(raw4Scaled)
    .composite([{ input: feather4, blend: 'dest-in' }])
    .png()
    .toBuffer();

  const buf4 = await sharp({
    create: {
      width: 1344,
      height: 600,
      channels: 4,
      background: { r: 238, g: 214, b: 202, alpha: 1 }
    }
  })
  .composite([{
    input: raw4Feathered,
    left: Math.round((1344 - 580) / 2),
    top: 10
  }])
  .png()
  .toBuffer();

  // 5. Display Box: 328 x 300 (Canvas: 656 x 600, aspect 1.093)
  const buf5 = await sharp(dir + 'ACB Packaging Solutions Display Box.webp')
    .resize(656, 600, { fit: 'cover', position: 'center' })
    .png()
    .toBuffer();

  // 6. Mailer Window Boxes / Tuck Top: 672 x 300 (Canvas: 1344 x 600, aspect 2.24)
  // Raw is 1500 x 750. Extract 1500 x 670 centered around Y = 415.
  const buf6 = await sharp(dir + 'ACB Australia Packaging Box Mockup.webp')
    .extract({ left: 0, top: 75, width: 1500, height: 670 })
    .resize(1344, 600)
    .png()
    .toBuffer();

  const tiles = [
    ['hero-mailer', buf1],
    ['cufflink-box', buf2],
    ['popcorn-box', buf3],
    ['gable-box', buf4],
    ['display-box', buf5],
    ['mailer-window-boxes', buf6]
  ];

  for (const [name, buf] of tiles) {
    await sharp(buf).jpeg({ quality: 95 }).toFile(path.join(outDir, name + '.jpg'));
    await sharp(buf).webp({ quality: 95 }).toFile(path.join(outDir, name + '.webp'));
    console.log('Saved', name);
  }

  console.log('All portfolio assets successfully generated!');
}

buildFinalPortfolio().catch(console.error);
