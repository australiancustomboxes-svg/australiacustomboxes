const sharp = require('sharp');
const path = require('path');

async function generateGableV2() {
  const dir2 = 'D:/Downloads/Australia/12 Nov 26 ACB Updated Home Images/SIlder/';
  const outDir = 'public/images/portfolio/';
  const artifactDir = 'C:/Users/moeed/.gemini/antigravity/brain/b9fc67d0-38ee-43ff-aad3-08033ee44f6e/';

  // Raw is 650x650 square.
  // Box is 649w x 593h. Starts at Y=56.
  // Resize raw to 500x500
  const scaled = await sharp(path.join(dir2, 'ACB Premium Custom Gable Box.webp'))
    .resize(500, 500)
    .png()
    .toBuffer();

  // Create soft feather mask for 500x500 with 30px corner radius
  const maskSvg = Buffer.from(
    '<svg width="500" height="500"><rect x="0" y="0" width="500" height="500" rx="30" ry="30" fill="white"/></svg>'
  );
  const mask = await sharp(maskSvg).resize(500, 500).png().toBuffer();
  const feathered = await sharp(scaled)
    .composite([{ input: mask, blend: 'dest-in' }])
    .png()
    .toBuffer();

  // Gradient background: from rgb(227,197,185) at top to rgb(236,210,199) at bottom
  const bgSvg = Buffer.from(
    '<svg width="1344" height="600" xmlns="http://www.w3.org/2000/svg">' +
    '<defs>' +
    '<linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">' +
    '<stop offset="0%" stop-color="rgb(227,197,185)"/>' +
    '<stop offset="100%" stop-color="rgb(236,210,199)"/>' +
    '</linearGradient>' +
    '</defs>' +
    '<rect width="1344" height="600" fill="url(#bgGrad)"/>' +
    '</svg>'
  );
  const bg = await sharp(bgSvg).resize(1344, 600).png().toBuffer();

  // Exactly centered: left = (1344 - 500) / 2 = 422, top = 55
  const finalGable = await sharp(bg)
    .composite([{
      input: feathered,
      left: 422,
      top: 55
    }])
    .png()
    .toBuffer();

  // Save with cache-busting filename
  await sharp(finalGable).jpeg({ quality: 95 }).toFile(path.join(outDir, 'custom-gable-box.jpg'));
  await sharp(finalGable).webp({ quality: 95 }).toFile(path.join(outDir, 'custom-gable-box.webp'));

  // Also overwrite existing gable-box.jpg and gable-box.webp
  await sharp(finalGable).jpeg({ quality: 95 }).toFile(path.join(outDir, 'gable-box.jpg'));
  await sharp(finalGable).webp({ quality: 95 }).toFile(path.join(outDir, 'gable-box.webp'));

  await sharp(finalGable).toFile(path.join(artifactDir, 'custom_gable_v2_preview.png'));

  console.log('Successfully saved custom-gable-box.jpg and gable-box.jpg');
}

generateGableV2().catch(console.error);
