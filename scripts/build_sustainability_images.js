const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function buildImages() {
  const rawDir = 'D:/Downloads/Australia/12 Nov 26 ACB Updated Home Images/Better packaging. Better future/';
  const outDir = 'E:/Australia Custom Boxes/australiacustomboxes/public/images/sustainability/';
  const artifactDir = 'C:/Users/moeed/.gemini/antigravity/brain/b9fc67d0-38ee-43ff-aad3-08033ee44f6e/';

  // ═══════════════════════════════════════════════════════════════════
  // Card 1: Natural Kraft (EcoPack)
  // Arch aspect: 302w x 305h. Canvas: 750w x 750h.
  // Raw: 1000x750. Box width is 874px.
  // We want the box width to be ~420px on the 750px canvas (56% width).
  // Scale factor: 420 / 874 = ~0.48.
  // Raw resized: 1000 * 0.48 = 480w, 750 * 0.48 = 360h.
  // Box inside resized raw: width ~ 420px, height ~ 340px.
  // ═══════════════════════════════════════════════════════════════════
  const raw1Resized = await sharp(rawDir + 'EcoPack Natural Gift Box Set.webp')
    .resize(480, 360)
    .png()
    .toBuffer();

  // Create soft feather mask for the raw overlay (so any subtle background difference blends seamlessly)
  // 480 x 360 with a 15px transparent border
  const feather1Svg = Buffer.from(
    '<svg width="480" height="360">' +
    '<rect x="0" y="0" width="480" height="360" rx="15" ry="15" fill="white"/>' +
    '</svg>'
  );
  const feather1 = await sharp(feather1Svg).resize(480, 360).png().toBuffer();

  const raw1Feathered = await sharp(raw1Resized)
    .composite([{ input: feather1, blend: 'dest-in' }])
    .png()
    .toBuffer();

  // Background for Natural Kraft canvas: rgb(209, 215, 195)
  const c1Canvas = await sharp({
    create: {
      width: 750,
      height: 750,
      channels: 4,
      background: { r: 209, g: 215, b: 195, alpha: 1 }
    }
  })
  .composite([{
    input: raw1Feathered,
    left: Math.round((750 - 480) / 2), // 135
    top: 260 // sits in middle-lower area: from 260 to 620. 260px headroom under the arch!
  }])
  .png()
  .toBuffer();

  // ═══════════════════════════════════════════════════════════════════
  // Card 2: Paperboard (Lumora Candle Box)
  // Arch aspect: 280w x 360h (taller). Canvas: 584w x 750h.
  // Raw: 1000x750. Box width is 589px, height is 676px, center at (500, 375).
  // We want the candle box width to be ~310px on the 584px canvas (53% width).
  // Scale factor: 310 / 589 = 0.526.
  // Raw resized: 1000 * 0.526 = 526w, 750 * 0.526 = 395h.
  // Box inside resized raw: width ~ 310px, height ~ 355px.
  // ═══════════════════════════════════════════════════════════════════
  const raw2Resized = await sharp(rawDir + 'Lumora Cedar & Vanilla Candle Box.webp')
    .resize(526, 395)
    .png()
    .toBuffer();

  const feather2Svg = Buffer.from(
    '<svg width="526" height="395">' +
    '<rect x="0" y="0" width="526" height="395" rx="15" ry="15" fill="white"/>' +
    '</svg>'
  );
  const feather2 = await sharp(feather2Svg).resize(526, 395).png().toBuffer();

  const raw2Feathered = await sharp(raw2Resized)
    .composite([{ input: feather2, blend: 'dest-in' }])
    .png()
    .toBuffer();

  // Lavender background: rgb(210, 196, 237)
  const c2Canvas = await sharp({
    create: {
      width: 584,
      height: 750,
      channels: 4,
      background: { r: 210, g: 196, b: 237, alpha: 1 }
    }
  })
  .composite([{
    input: raw2Feathered,
    left: Math.round((584 - 526) / 2), // 29
    top: 250 // sits from 250 to 645. 250px headroom under the taller arch!
  }])
  .png()
  .toBuffer();

  // ═══════════════════════════════════════════════════════════════════
  // Card 3: Corrugated (EcoWrap)
  // Arch aspect: 311w x 305h. Canvas: 750w x 750h.
  // Raw: 1000x750. Box width is 460px, height is 477px, center at (478, 383).
  // We want the box width to be ~410px on the 750px canvas (55% width).
  // Scale factor: 410 / 460 = 0.89.
  // Raw resized: 1000 * 0.89 = 890w, 750 * 0.89 = 668h.
  // Box center inside resized: 478 * 0.89 = 425.
  // Extract 750w: left = 425 - 375 = 50.
  // ═══════════════════════════════════════════════════════════════════
  const raw3Cropped = await sharp(rawDir + 'EcoWrap Sustainable Gift Box.webp')
    .resize(890, 668)
    .extract({ left: 50, top: 0, width: 750, height: 668 })
    .png()
    .toBuffer();

  // Mint background: rgb(222, 240, 227)
  const c3Canvas = await sharp({
    create: {
      width: 750,
      height: 750,
      channels: 4,
      background: { r: 222, g: 240, b: 227, alpha: 1 }
    }
  })
  .composite([{
    input: raw3Cropped,
    left: 0,
    top: 40 // sits from 40 + (144*0.89=128) = 168 to 168 + 424 = 592. Headroom ~ 170px.
  }])
  .png()
  .toBuffer();

  // Save to public directory as both JPG and WEBP
  await sharp(c1Canvas).jpeg({ quality: 95 }).toFile(path.join(outDir, 'natural-kraft.jpg'));
  await sharp(c1Canvas).webp({ quality: 95 }).toFile(path.join(outDir, 'natural-kraft.webp'));

  await sharp(c2Canvas).jpeg({ quality: 95 }).toFile(path.join(outDir, 'paperboard.jpg'));
  await sharp(c2Canvas).webp({ quality: 95 }).toFile(path.join(outDir, 'paperboard.webp'));

  await sharp(c3Canvas).jpeg({ quality: 95 }).toFile(path.join(outDir, 'corrugated.jpg'));
  await sharp(c3Canvas).webp({ quality: 95 }).toFile(path.join(outDir, 'corrugated.webp'));

  console.log('Successfully saved JPG and WEBP to public/images/sustainability/');

  // ═══════════════════════════════════════════════════════════════════
  // Generate Arch Masked Preview for visual inspection
  // Arch 1: 302w x 305h, rx=151
  // Arch 2: 280w x 360h, rx=140
  // Arch 3: 311w x 305h, rx=155
  // ═══════════════════════════════════════════════════════════════════
  const mask1Svg = Buffer.from(
    '<svg width="302" height="305"><rect x="0" y="0" width="302" height="305" rx="151" ry="151" fill="white"/><rect x="0" y="151" width="302" height="154" fill="white"/></svg>'
  );
  const mask2Svg = Buffer.from(
    '<svg width="280" height="360"><rect x="0" y="0" width="280" height="360" rx="140" ry="140" fill="white"/><rect x="0" y="140" width="280" height="220" fill="white"/></svg>'
  );
  const mask3Svg = Buffer.from(
    '<svg width="311" height="305"><rect x="0" y="0" width="311" height="305" rx="155" ry="155" fill="white"/><rect x="0" y="155" width="311" height="150" fill="white"/></svg>'
  );

  const m1 = await sharp(mask1Svg).resize(302, 305).png().toBuffer();
  const m2 = await sharp(mask2Svg).resize(280, 360).png().toBuffer();
  const m3 = await sharp(mask3Svg).resize(311, 305).png().toBuffer();

  const arch1 = await sharp(c1Canvas)
    .resize(302, 305, { fit: 'cover' })
    .composite([{ input: m1, blend: 'dest-in' }])
    .png()
    .toBuffer();

  const arch2 = await sharp(c2Canvas)
    .resize(280, 360, { fit: 'cover' })
    .composite([{ input: m2, blend: 'dest-in' }])
    .png()
    .toBuffer();

  const arch3 = await sharp(c3Canvas)
    .resize(311, 305, { fit: 'cover' })
    .composite([{ input: m3, blend: 'dest-in' }])
    .png()
    .toBuffer();

  // Combine into a side-by-side preview with bottom alignment
  // Total width: 302 + 16 + 280 + 16 + 311 = 925
  // Height: 400
  // Arch 1 sits at bottom: top = 400 - 305 = 95
  // Arch 2 sits at bottom: top = 400 - 360 = 40
  // Arch 3 sits at bottom: top = 400 - 305 = 95
  await sharp({
    create: {
      width: 925,
      height: 420,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    }
  })
  .composite([
    { input: arch1, left: 0, top: 115 },
    { input: arch2, left: 318, top: 60 },
    { input: arch3, left: 614, top: 115 }
  ])
  .png()
  .toFile(path.join(artifactDir, 'sustainability_arches_final_preview.png'));

  console.log('Saved preview artifact: sustainability_arches_final_preview.png');
}

buildImages().catch(console.error);
