# Tasyeer web design system (MASTER)

Generated with `ui-ux-pro-max` (`search.py "laundry management SaaS arabic offline" --design-system --persist -p "Tasyeer"`), then rewritten to match the app. The generator proposed a trust-blue + orange palette and Plus Jakarta Sans; both were rejected because the brand already exists in `tasyeer-app/docs/design-system.md`. Kept from the generator: its pre-delivery checklist.

## Direction

Reading this as: a product site for small-laundry owners in Yemen and Saudi Arabia (mostly on phones, not technical), in a calm, warm-paper, trustworthy language, built on IBM Plex Sans Arabic + petrol/cream + one signature detail: **the laundry tag** (the storage label «رف ٢ / كيس ١٥» the app prints on items), used for section markers and a few highlights.

Dials (1–10): variance 5, motion 4, density 4.

## Color (CSS variables in `app/globals.css`)

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `--background` | `#F6F1E7` cream | `#121A19` | page |
| `--card` | `#FFFFFF` | `#1C2624` | cards, sheets |
| `--foreground` | `#263936` | `#E8EFEC` | text |
| `--muted-foreground` | `#4C5C59` | `#B9C7C3` | secondary text (7:1 on white) |
| `--primary` | `#164E49` petrol | `#A7C9B5` sage | actions, emphasis |
| `--primary-container` | `#CFE3D7` | `#2C5A53` | soft fills |
| `--secondary` | `#527E72` | `#2A3B38` | secondary buttons |
| `--support` | `#527E72` | `#A7C9B5` | icons and large text only |
| `--muted` | `#ECE5D6` | `#283431` | quiet panels |
| `--border` | `#DDD6C8` | `#34423F` | hairlines, dot grid |
| `--outline` / `--input` | `#7A8784` | `#8A9A96` | field borders (3:1+) |
| success / info / warning / error | `#2E7D4F` / `#2C6694` / `#9A5B00` / `#B3261E` | `#86D3A3` / `#93C5EC` / `#F0B860` / `#F2B8B5` | status, from `AppStatusColors` |

Rules: brand color marks actions, not decoration. Status is never color alone (label + icon). No gradients on text, no glow, no purple.

## Type

IBM Plex Sans Arabic 400/500/700 (Thmanyah pending license). Body 16–18px, line-height 1.7. Display: 700, tight 1.2–1.35, sizes `clamp(2.25rem, 6vw, 4rem)` for the hero. Never request 600. Never letter-split Arabic.

## Shape and space

Radii 8 (chips) · 12 (cards, inputs, buttons) · 16 (large panels) · 28+ only for the phone frame. Spacing on a 4px grid: 4/8/12/16/24/32/48/64/96. Depth from cream vs white, plus 1px borders; shadows only on the phone frame.

## Motion

Motion (`motion/react`) with `MotionConfig reducedMotion="user"`. Reveal on scroll (opacity + 12px), stagger ≤ 60ms, ease-out `[0.22, 1, 0.36, 1]`, 300–500ms. Screenshot cross-fade on tab change. Default state is visible (no content hidden behind JS).

## Components

shadcn/ui (radix base, RTL): Button, Accordion, Tabs, Sheet, Input, Textarea, Label, Sonner. Site components: Header (sheet on mobile), Footer, PhoneFrame, ThemeToggle, WhatsAppFab, Tag (signature).

## Pre-delivery checklist

- [ ] No emojis as icons (Lucide only, one stroke weight)
- [ ] cursor-pointer on clickable elements
- [ ] Hover/focus/active states, 150–300ms transitions
- [ ] Text contrast ≥ 4.5:1 in both themes
- [ ] Visible focus ring, full keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] 375 / 768 / 1280 widths, no horizontal scroll, correct RTL
- [ ] Numbers isolated LTR
