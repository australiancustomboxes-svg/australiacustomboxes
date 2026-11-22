const sharp = require('sharp');
const dir = 'D:/Downloads/Australia/12 Nov 26 ACB Updated Home Images/Better packaging. Better future/';

async function inspectLumoraSides() {
  const { data, info } = await sharp(dir + 'Lumora Cedar & Vanilla Candle Box.webp').raw().toBuffer({ resolveWithObject: true });
  // find which rows have non-background at x=0 and x=999
  let x0Rows = [];
  let x999Rows = [];
  for (let y = 0; y < info.height; y++) {
    const idx0 = (y * info.width + 0) * 3;
    const idx999 = (y * info.width + 999) * 3;
    if (Math.abs(data[idx0] - 206) + Math.abs(data[idx0+1] - 190) + Math.abs(data[idx0+2] - 231) > 40) {
      x0Rows.push(y);
    }
    if (Math.abs(data[idx999] - 206) + Math.abs(data[idx999+1] - 190) + Math.abs(data[idx999+2] - 231) > 40) {
      x999Rows.push(y);
    }
  }
  console.log('x0Rows count:', x0Rows.length, 'range:', [x0Rows[0], x0Rows[x0Rows.length-1]]);
  console.log('x999Rows count:', x999Rows.length, 'range:', [x999Rows[0], x999Rows[x999Rows.length-1]]);
}

inspectLumoraSides();
