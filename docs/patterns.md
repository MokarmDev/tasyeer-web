# Patterns taken from the references

The references were read for patterns only. No layout, copy, artwork or code was copied.

| Reference | Pattern kept | How it shows up here |
| --- | --- | --- |
| rayat-heroes, quran-radio, qafila-card | Large Arabic display type in the hero (≈ 64–72px on desktop), a short context line above it, plain sentences instead of slogans | Hero: `text-[clamp(2.4rem,6.5vw,4.5rem)]`, tag line above the H1 |
| quran-radio | Long, calm sections; numbered steps (٠١، ٠٢) that read as a sequence | «كيف يعمل» and the guide use numbered steps |
| qafila-card | Mobile-first: one column that widens, never the reverse | Every grid declares its phone layout first |
| patterncraft | Faint dot or grid backgrounds in a border color | `.bg-dots` behind the hero and the privacy band |
| shadcn | Accessible primitives, quiet styling | Accordion (FAQ, guide), Tabs (screens), Sheet (mobile menu) |
| motion.dev, reactbits | Motion with a job: reveal on scroll, cross-fade between screenshots, shared tab indicator | `Reveal`, `ScreenTabs`; no letter-split text (breaks Arabic joining) |
| colorhunt, coolors | Contrast checks on the existing palette, not a new palette | Brand tokens unchanged; muted text `#4C5C59` (7:1 on white) |

Signature detail (our own): the **laundry tag**, from the storage labels the app attaches to orders («رف ٢»، «كيس ١٥»). Used for section markers and the hero chips.
