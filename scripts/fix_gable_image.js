const sharp = require('sharp');
const path = require('path');

async function fixGable() {
  const dir2 = 'D:/Downloads/Australia/12 Nov 26 ACB Updated Home Images/SIlder/';
  const outDir = 'public/images/portfolio/';
  const artifactDir = 'C:/Users/moeed/.gemini/antigravity/brain/b9fc67d0-38ee-43ff-aad3-08033ee44f6e/';

  // Raw is 650x650 square.
  // Box is 649w x 593h. Starts at Y=56.
  // Target: scaled to 450x450 so box is 450w x 411h.
  const scaled = await sharp(path.join(dir2, 'ACB Premium Custom Gable Box.webp'))
    .resize(450, 450)
    .png()
    .toBuffer();

  // Create soft feather mask for 450x450 with 25px radius
  const maskSvg = Buffer.from(
    '<svg width="450" height="450"><rect x="0" y="0" width="450" height="450" rx="25" ry="25" fill="white"/></svg>'
  );
  const mask = await sharp(maskSvg).resize(450, 450).png().toBuffer();
  const feathered = await sharp(scaled)
    .composite([{ input: mask, blend: 'dest-in' }])
    .png()
    .toBuffer();

  // Background linear gradient SVG: from rgb(227,197,185) at top to rgb(236,210,199) at bottom
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

  // Sits vertically centered: top = (600 - 450) / 2 = 75
  // Left = (1344 - 450) / 2 = 447
  const finalGable = await sharp(bg)
    .composite([{
      input: feathered,
      left: Math.round((1344 - 450) / 2),
      top: 75
    }])
    .png()
    .toBuffer();

  // Save to public/images/portfolio/ as both JPG and WEBP
  await sharp(finalGable).jpeg({ quality: 95 }).toFile(path.join(outDir, 'gable-box.jpg'));
  await sharp(finalGable).webp({ quality: 95 }).toFile(path.join(outDir, 'gable-box.webp'));
  await sharp(finalGable).toFile(path.join(artifactDir, 'fixed_gable_preview.png'));

  console.log('Successfully saved fixed gable-box.jpg and gable-box.webp');
}

fixGable().catch(console.error);
