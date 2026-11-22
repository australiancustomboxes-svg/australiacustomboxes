const sharp = require('sharp');
const p = 'C:\\Users\\moeed\\.gemini\\antigravity\\brain\\b9fc67d0-38ee-43ff-aad3-08033ee44f6e\\.user_uploaded\\media_1795373210943_33de6fb0.jpg';

async function findPins() {
  const { data, info } = await sharp(p).raw().toBuffer({ resolveWithObject: true });
  // The left box image is located roughly between x: 96 and x: 313, y: 55 and y: 245
  console.log('Image dims:', info.width, info.height);
}

findPins().catch(console.error);
