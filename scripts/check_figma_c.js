const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const artDir = 'C:\\Users\\moeed\\.gemini\\antigravity\\brain\\b9fc67d0-38ee-43ff-aad3-08033ee44f6e';

async function check() {
  for (let i = 1; i <= 4; i++) {
    const meta = await sharp(path.join(artDir, `figma_c${i}.png`)).metadata();
    console.log(`figma_c${i}:`, meta.width, 'x', meta.height);
  }
}

check().catch(console.error);
