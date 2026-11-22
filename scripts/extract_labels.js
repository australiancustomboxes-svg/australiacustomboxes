const sharp = require('sharp');
const p = 'C:\\Users\\moeed\\.gemini\\antigravity\\brain\\b9fc67d0-38ee-43ff-aad3-08033ee44f6e\\.user_uploaded\\media_1795373210943_33de6fb0.jpg';
const artDir = 'C:\\Users\\moeed\\.gemini\\antigravity\\brain\\b9fc67d0-38ee-43ff-aad3-08033ee44f6e';

// Extract the text below the 4 cards: roughly y: 440 to 480
sharp(p)
  .extract({ left: 80, top: 435, width: 480, height: 45 })
  .toFile(artDir + '\\figma_labels.png')
  .then(() => console.log('Extracted labels'));
