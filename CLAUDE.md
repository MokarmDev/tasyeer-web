# Tasyeer website

Marketing site for «تسيير», an offline-first Android app for small laundries in Yemen and Saudi Arabia. The app lives in `../tasyeer-app` (read-only from here).

## Stack

- Next.js 15 App Router, `output: "export"` (static HTML in `out/`), `trailingSlash: true`.
- TypeScript, Tailwind v4 (tokens in `app/globals.css`, no `tailwind.config`), shadcn/ui (radix, RTL on), Motion (`motion/react`).
- Commands: `npm run dev`, `npm run lint`, `npm run build`. Assets: `node scripts/prepare-assets.mjs` re-copies logos and screenshots from the app.

## Rules

- **Arabic only, RTL.** `<html lang="ar" dir="rtl">`. Use logical utilities (`ms-`, `pe-`, `start-`, `end-`, `text-start`), never `left`/`right`. Wrap numbers, prices, codes and Latin terms in `.ltr-iso` (or `<bdi>`).
- **Copy comes from the product.** Every claim must match `../tasyeer-app/docs/PRD.md`, the app code, or `assets/translations/ar.json` (`guide_*`, `privacy_*`). Do not invent features, prices, store availability or legal commitments. The app is free in the MVP and not yet on Google Play: the CTA is «قريبًا على Google Play».
- **Content lives in `content/*.ts`**, not in components. Placeholders (WhatsApp, email, Formspree, domain) are in `content/site.ts` and flagged in `site.isPlaceholder`.
- **Tokens, not hex.** Colors come from CSS variables in `globals.css` (petrol `#164E49`, sage `#A7C9B5`, cream `#F6F1E7`, dark text `#263936`, status colors from the app). Light and dark themes both ship. Depth comes from cream page vs white card, not shadows. Radii 8/12/16, spacing on a 4px grid.
- **Font:** IBM Plex Sans Arabic (400/500/700) via `next/font/google`. Thmanyah Sans is the app font but its web license is unconfirmed; do not ship it until the owner confirms. It must not be converted to woff2.
- **Motion:** purposeful only (reveal on scroll, screenshot switching, tab indicator). Always respect `prefers-reduced-motion` (`useReducedMotion` / `MotionConfig reducedMotion="user"`). Never split Arabic text into letters: it breaks joining.
- **Privacy:** no analytics, no cookies, no third-party scripts. The theme choice is stored in `localStorage` by next-themes. The only outbound request is the support form to Formspree.
- **Design system:** `design-system/tasyeer/MASTER.md`. Pattern notes from references: `docs/patterns.md`.
- No deploy and no `git push` without the owner's explicit approval.

## Layout

```
app/layout.tsx            html, font, theme, header/footer
app/(site)/…/page.tsx     pages: home, features, guide, privacy, support, terms
components/ui/            shadcn primitives
components/site/          header, footer, phone-frame, theme-toggle, whatsapp-fab
components/sections/      page sections
content/                  site.ts, features.ts, guide.ts, faq.ts, privacy.ts, terms.ts
public/brand, public/screens
```
