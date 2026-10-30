// Builds app/opengraph-image.png (1200x630) from the wordmark and a home
// screenshot. No text is rendered here: the Arabic comes from the logo art,
// so there is no shaping or font dependency.
//
// Usage: node scripts/make-og.mjs
import sharp from "sharp";

const W = 1200;
const H = 630;
const cream = "#F6F1E7";
const border = "#DDD6C8";

const dots = [];
for (let y = 11; y < H; y += 22) for (let x = 11; x < W; x += 22) dots.push(`<circle cx="${x}" cy="${y}" r="1.3"/>`);
const background = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
    <defs>
      <radialGradient id="fade" cx="0.3" cy="0.5" r="0.7">
        <stop offset="0" stop-color="${cream}" stop-opacity="0"/>
        <stop offset="1" stop-color="${cream}" stop-opacity="1"/>
      </radialGradient>
    </defs>
    <rect width="100%" height="100%" fill="${cream}"/>
    <g fill="${border}">${dots.join("")}</g>
    <rect width="100%" height="100%" fill="url(#fade)"/>
  </svg>`,
);

// Phone: bezel + screen, placed on the left (the end side in RTL).
const phoneW = 300;
const screenW = phoneW - 18;
const screenH = 560;
// Cream strip on top stands in for the status bar, as in the site's PhoneFrame.
const padded = await sharp("public/screens/home.webp")
  .resize({ width: screenW })
  .extend({ top: 28, background: cream })
  .toBuffer();
const screen = await sharp(padded)
  .extract({ left: 0, top: 0, width: screenW, height: screenH })
  .composite([
    {
      input: Buffer.from(
        `<svg width="${screenW}" height="${screenH}"><rect width="${screenW}" height="${screenH}" rx="34" fill="#fff"/></svg>`,
      ),
      blend: "dest-in",
    },
  ])
  .png()
  .toBuffer();
const bezel = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="${phoneW}" height="${screenH + 18}">
    <rect width="${phoneW}" height="${screenH + 120}" rx="42" fill="#1b2624"/>
  </svg>`,
);

const logo = await sharp("public/brand/logo.png").resize({ width: 600 }).toBuffer();
const logoMeta = await sharp(logo).metadata();

await sharp(background)
  .composite([
    { input: bezel, left: 110, top: 70 },
    { input: screen, left: 119, top: 79 },
    { input: logo, left: W - 600 - 70, top: Math.round((H - logoMeta.height) / 2) - 10 },
  ])
  .png({ compressionLevel: 9 })
  .toFile("app/opengraph-image.png");

console.log("wrote app/opengraph-image.png");
