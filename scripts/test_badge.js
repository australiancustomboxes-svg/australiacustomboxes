const sharp = require('sharp');

const svg = `
<svg width="230" height="230" viewBox="0 0 230 230" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <path id="quote-badge-path" d="M 33.3,162.2 A 94.3,94.3 0 1,1 196.7,162.2" fill="none" />
  </defs>
  <circle cx="115" cy="115" r="52.9" fill="#041F49" />
  <g transform="translate(115,115) rotate(-45) translate(-115,-115)">
    <path d="M103 115h24M120 108l7 7-7 7" stroke="#F2B329" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  </g>
  <text font-family="'Libre Franklin', sans-serif" font-size="11" font-weight="600" fill="#041F49" letter-spacing="0.22em">
    <textPath href="#quote-badge-path" startOffset="50%" text-anchor="middle">
      SINCE 2019 · MADE IN AUSTRALIA ·
    </textPath>
  </text>
</svg>
`;

sharp(Buffer.from(svg))
  .png()
  .toFile('C:/Users/moeed/.gemini/antigravity/brain/b9fc67d0-38ee-43ff-aad3-08033ee44f6e/test_badge.png')
  .then(() => console.log('Saved test_badge.png'));
