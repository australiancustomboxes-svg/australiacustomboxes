const sharp = require('sharp');
const p = 'C:\\Users\\moeed\\.gemini\\antigravity\\brain\\b9fc67d0-38ee-43ff-aad3-08033ee44f6e\\.user_uploaded\\media_1795373210943_33de6fb0.jpg';

sharp(p).raw().toBuffer({ resolveWithObject: true }).then(({ data, info }) => {
  console.log('Top-left of section:', data[0], data[1], data[2]); // (0,0)
  // Let's check around x=300, y=50
  const idx = (50 * info.width + 300) * info.channels;
  console.log('Main content background:', data[idx], data[idx+1], data[idx+2]);
});
