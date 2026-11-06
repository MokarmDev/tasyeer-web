// Site-wide facts. Values marked TODO are placeholders until the owner
// confirms them; `isPlaceholder` lets the UI say so instead of failing quietly.

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tasyeer.example"; // TODO: real domain
const WHATSAPP = "967770584849"; // digits only, with country code
const EMAIL = "mokarmdev@gmail.com";
const FORMSPREE = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? ""; // e.g. https://formspree.io/f/xxxxxxx

export const site = {
  name: "تسيير",
  nameLatin: "Tasyeer",
  tagline: "إدارة أبسط، كل يوم",
  description:
    "تطبيق عربي لإدارة المغاسل الصغيرة في اليمن والسعودية: الطلبات والقطع ومواقع الحفظ، الفواتير PDF، الدفعات والذمم، المصروفات والتقارير. يعمل بدون إنترنت وبياناتك على جوالك.",
  url: SITE_URL.replace(/\/$/, ""),
  locale: "ar",
  playStatus: "قريبًا على Google Play",
  whatsapp: {
    number: WHATSAPP,
    href: `https://wa.me/${WHATSAPP}`,
    display: "+967 770 584 849",
  },
  email: {
    address: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  developer: {
    name: "MokarmDev",
    href: "https://github.com/MokarmDev",
  },
  formEndpoint: FORMSPREE,
  isPlaceholder: {
    url: !process.env.NEXT_PUBLIC_SITE_URL,
    whatsapp: false,
    email: false,
    form: !FORMSPREE,
  },
  // Dates shown on the legal pages (ISO, Gregorian).
  privacyUpdated: "2026-10-30",
  termsUpdated: "2026-10-30",
} as const;

export const nav = [
  { href: "/", label: "الرئيسية" },
  { href: "/features/", label: "المميزات" },
  { href: "/guide/", label: "دليل الاستخدام" },
  { href: "/privacy/", label: "الخصوصية" },
  { href: "/support/", label: "الدعم" },
] as const;
