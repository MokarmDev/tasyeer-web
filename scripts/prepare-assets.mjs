// Copies brand assets and app screenshots from the sibling tasyeer-app repo
// (read-only) into public/. Screenshots lose the status bar (it carries the
// debug "DEV" ribbon) and are converted to webp for the static export.
//
// Usage: node scripts/prepare-assets.mjs [path/to/tasyeer-app]
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const app = path.resolve(process.argv[2] ?? "../tasyeer-app");
const pub = path.resolve("public");

const shots = {
  "home": "p3-05-home.png",
  "home-dark": "p3-dark-05-home.png",
  "orders": "p3-14-orders-list.png",
  "orders-dark": "dark-14-orders-list.png",
  "order-detail": "p3-13-order-detail.png",
  "order-detail-dark": "dark-13-order-detail.png",
  "new-order-items": "p3-11-new-order-items.png",
  "invoice-payments": "p4-order-invoice-payments.png",
  "expenses": "p4-expenses-list.png",
  "reports": "p4-reports-hub.png",
  "reports-dark": "p4-dark-textscale-reports-hub.png",
  "cashflow": "p4-report-cashflow.png",
  "invoice-template": "p6-invoice-template.png",
};

// Status bar height in the 1080x2400 captures.
const STATUS_BAR = 160;

fs.mkdirSync(path.join(pub, "screens"), { recursive: true });
fs.mkdirSync(path.join(pub, "brand"), { recursive: true });

for (const [name, file] of Object.entries(shots)) {
  const src = path.join(app, "docs/screenshots/after", file);
  const { width, height } = await sharp(src).metadata();
  await sharp(src)
    .extract({ left: 0, top: STATUS_BAR, width, height: height - STATUS_BAR })
    .resize({ width: 720 })
    .webp({ quality: 82 })
    .toFile(path.join(pub, "screens", `${name}.webp`));
  console.log("screen", name);
}

await sharp(path.join(app, "docs/screenshots/after/pdf-sar-paid.png"))
  .resize({ width: 800 })
  .webp({ quality: 85 })
  .toFile(path.join(pub, "screens", "invoice-pdf.webp"));

const brand = {
  "logo.png": "assets/icons/logo/tasyeer_logo_primary_transparent.png",
  "logo-dark.png": "assets/icons/logo/tasyeer_logo_dark_background_transparent.png",
  "logo-white.png": "assets/icons/logo/tasyeer_logo_monochrome_white.png",
  "app-icon-512.png": "assets/icons/app_icon/tasyeer_app_icon_petrol_512.png",
  "app-icon-192.png": "assets/icons/app_icon/tasyeer_app_icon_petrol_192.png",
  "app-icon-cream-512.png": "assets/icons/app_icon/tasyeer_app_icon_cream_512.png",
};
for (const [out, src] of Object.entries(brand)) {
  fs.copyFileSync(path.join(app, src), path.join(pub, "brand", out));
}
// The mark alone (left part of the wordmark) for compact spots.
const markArea = await sharp(path.join(app, brand["logo.png"]))
  .extract({ left: 0, top: 0, width: 360, height: 237 })
  .toBuffer();
await sharp(markArea)
  .trim()
  .toFile(path.join(pub, "brand", "mark.png"));

await sharp(path.join(app, "assets/icons/app_icon/tasyeer_app_icon_petrol_180.png"))
  .toFile(path.resolve("app/apple-icon.png"));
fs.copyFileSync(path.join(pub, "brand", "app-icon-192.png"), path.resolve("app/icon.png"));
console.log("brand done");
