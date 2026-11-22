const sharp = require('sharp');
const path = require('path');

async function generate() {
  const dir = 'D:/Downloads/Australia/12 Nov 26 ACB Updated Home Images/Better packaging. Better future/';
  const base = 'C:/Users/moeed/.gemini/antigravity/brain/b9fc67d0-38ee-43ff-aad3-08033ee44f6e/';

  // 1. EcoPack (Natural Kraft)
  // Raw is 1000x750. Box width is 892px.
  // We want box width to be ~410px on a 750x750 canvas (55% width).
  // 410 / 892 = 0.46
  // Resized raw: 460w x 345h
  const raw1 = await sharp(dir + 'EcoPack Natural Gift Box Set.webp')
    .resize(470, 353)
    .png()
    .toBuffer();

  const c1 = await sharp({
    create: {
      width: 750,
      height: 750,
      channels: 4,
      background: { r: 209, g: 215, b: 195, alpha: 1 }
    }
  })
  .composite([{
    input: raw1,
    left: Math.round((750 - 470) / 2),
    top: 360
  }])
  .png()
  .toBuffer();

  // 2. Lumora (Paperboard)
  // Raw is 1000x750. Box width is 999px.
  // Canvas is 584x750.
  // We want box width to be ~340px (58% width).
  // 340 / 999 = 0.34
  // Resized raw: 380w x 285h
  const raw2 = await sharp(dir + 'Lumora Cedar & Vanilla Candle Box.webp')
    .resize(380, 285)
    .png()
    .toBuffer();

  const c2 = await sharp({
    create: {
      width: 584,
      height: 750,
      channels: 4,
      background: { r: 214, g: 200, b: 240, alpha: 1 }
    }
  })
  .composite([{
    input: raw2,
    left: Math.round((584 - 380) / 2),
    top: 410
  }])
  .png()
  .toBuffer();

  // 3. EcoWrap (Corrugated)
  // Raw is 1000x750. Box width is 460px.
  // We want box width to be ~410px on 750x750 canvas (55% width).
  // Scale factor: 410 / 460 = 0.89
  // Resized raw: 890w x 668h
  // Extract 750w centered: left = (890 - 750)/2 = 70.
  const raw3 = await sharp(dir + 'EcoWrap Sustainable Gift Box.webp')
    .resize(890, 668)
    .extract({ left: 70, top: 0, width: 750, height: 668 })
    .png()
    .toBuffer();

  const c3 = await sharp({
    create: {
      width: 750,
      height: 750,
      channels: 4,
      background: { r: 222, g: 240, b: 227, alpha: 1 }
    }
  })
  .composite([{
    input: raw3,
    left: 0,
    top: 750 - 668
  }])
  .png()
  .toBuffer();

  await sharp(c1).webp({ quality: 95 }).toFile(base + 'cand_c1.webp');
  await sharp(c2).webp({ quality: 95 }).toFile(base + 'cand_c2.webp');
  await sharp(c3).webp({ quality: 95 }).toFile(base + 'cand_c3.webp');

  console.log('Saved cand_c1, cand_c2, cand_c3');
}

generate().catch(console.error);
