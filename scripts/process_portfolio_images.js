const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function processPortfolioImages() {
  const dir = 'D:/Downloads/Australia/12 Nov 26 ACB Updated Home Images/Packaging made for brands like yours/';
  const dir2 = 'D:/Downloads/Australia/12 Nov 26 ACB Updated Home Images/SIlder/';
  const outDir = 'public/images/portfolio/';
  const artifactDir = 'C:/Users/moeed/.gemini/antigravity/brain/b9fc67d0-38ee-43ff-aad3-08033ee44f6e/';

  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  // ─────────────────────────────────────────────────────────────
  // 1. Hero Mailer: 1016 x 300 (Canvas: 2032 x 600)
  // ─────────────────────────────────────────────────────────────
  const raw1 = sharp(dir + 'ACB Custom Packaging Studio Scene.webp');
  const meta1 = await raw1.metadata();
  // Target aspect: 2032 / 600 = 3.3867
  // Crop from 1500w: height = 1500 / 3.3867 = 443
  // Center Y is 375, so top = 375 - 221 = 154
  const buf1 = await sharp(dir + 'ACB Custom Packaging Studio Scene.webp')
    .extract({ left: 0, top: 154, width: 1500, height: 443 })
    .resize(2032, 600)
    .png()
    .toBuffer();

  // ─────────────────────────────────────────────────────────────
  // 2. Cufflink Box: 328 x 616 (Canvas: 656 x 1232)
  // ─────────────────────────────────────────────────────────────
  // Raw is 800x800 square. Cufflink box width is 762px.
  // Scale raw to 640x640 so the box is ~610px wide.
  const raw2Scaled = await sharp(dir + 'Australian Kangaroo Cufflink Gift Set.webp')
    .resize(656, 656, { fit: 'inside' })
    .png()
    .toBuffer();

  // Dark navy background: rgb(26, 36, 56)
  const buf2 = await sharp({
    create: {
      width: 656,
      height: 1232,
      channels: 4,
      background: { r: 26, g: 36, b: 56, alpha: 1 }
    }
  })
  .composite([{
    input: raw2Scaled,
    left: 0,
    top: 360 // Sits in lower-middle half with dark navy above and below
  }])
  .png()
  .toBuffer();

  // ─────────────────────────────────────────────────────────────
  // 3. Popcorn Box: 328 x 616 (Canvas: 656 x 1232)
  // ─────────────────────────────────────────────────────────────
  const buf3 = await sharp(dir + 'Australian Navy Gold Popcorn Box.webp')
    .resize(656, 1232, { fit: 'cover', position: 'center' })
    .png()
    .toBuffer();

  // ─────────────────────────────────────────────────────────────
  // 4. Gable Box: 672 x 300 (Canvas: 1344 x 600)
  // ─────────────────────────────────────────────────────────────
  // Raw is 650x650 square. Resize to 580x580 so handle & bottom fit nicely.
  const raw4Scaled = await sharp(dir2 + 'ACB Premium Custom Gable Box.webp')
    .resize(580, 580)
    .png()
    .toBuffer();

  // Soft feathering around raw4 to blend into beige background rgb(238, 214, 202)
  const feather4Svg = Buffer.from(
    '<svg width="580" height="580"><rect x="0" y="0" width="580" height="580" rx="30" ry="30" fill="white"/></svg>'
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

  // ─────────────────────────────────────────────────────────────
  // 5. Display Box: 328 x 300 (Canvas: 656 x 600)
  // ─────────────────────────────────────────────────────────────
  const buf5 = await sharp(dir + 'ACB Packaging Solutions Display Box.webp')
    .resize(656, 600, { fit: 'cover', position: 'center' })
    .png()
    .toBuffer();

  // ─────────────────────────────────────────────────────────────
  // 6. Mailer Window Boxes: 672 x 300 (Canvas: 1344 x 600)
  // ─────────────────────────────────────────────────────────────
  // Target aspect: 1344 / 600 = 2.24
  // Raw is 1500 x 750. Height to crop = 1500 / 2.24 = 670.
  // Center Y is 415. Top = 415 - 335 = 80.
  const buf6 = await sharp(dir + 'ACB Australia Packaging Box Mockup.webp')
    .extract({ left: 0, top: 75, width: 1500, height: 670 })
    .resize(1344, 600)
    .png()
    .toBuffer();

  // Save all to public/images/portfolio/ as both JPG and WEBP
  const saves = [
    ['hero-mailer', buf1],
    ['cufflink-box', buf2],
    ['popcorn-box', buf3],
    ['gable-box', buf4],
    ['display-box', buf5],
    ['mailer-window-boxes', buf6]
  ];

  for (const [name, buf] of saves) {
    await sharp(buf).jpeg({ quality: 95 }).toFile(path.join(outDir, name + '.jpg'));
    await sharp(buf).webp({ quality: 95 }).toFile(path.join(outDir, name + '.webp'));
  }

  console.log('Successfully saved all 6 portfolio images in public/images/portfolio/');

  // ─────────────────────────────────────────────────────────────
  // Generate a Full Grid Composite Preview matching Figma
  // 1400w x 932h
  // Col 1: 338, Col 2: 338, Col 3: 338, Col 4: 338, Gap: 16
  // Row 1: 300, Row 2: 300, Row 3: 300, Gap: 16
  // ─────────────────────────────────────────────────────────────
  const t1 = await sharp(buf1).resize(1016, 300).png().toBuffer();
  const t2 = await sharp(buf2).resize(328, 616).png().toBuffer();
  const t3 = await sharp(buf3).resize(328, 616).png().toBuffer();
  const t4 = await sharp(buf4).resize(672, 300).png().toBuffer();
  const t5 = await sharp(buf5).resize(328, 300).png().toBuffer();
  const t6 = await sharp(buf6).resize(672, 300).png().toBuffer();

  await sharp({
    create: {
      width: 1360,
      height: 932,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    }
  })
  .composite([
    { input: t1, left: 0, top: 0 },
    { input: t2, left: 1032, top: 0 },
    { input: t3, left: 0, top: 316 },
    { input: t4, left: 344, top: 316 },
    { input: t5, left: 344, top: 632 },
    { input: t6, left: 688, top: 632 }
  ])
  .png()
  .toFile(path.join(artifactDir, 'portfolio_grid_reconstructed.png'));

  console.log('Saved preview artifact: portfolio_grid_reconstructed.png');
}

processPortfolioImages().catch(console.error);
