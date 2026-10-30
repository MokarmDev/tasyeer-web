# خطة بناء موقع «تسيير» التعريفي

## Context
تطبيق «تسيير» (Flutter، Android أولًا، يعمل دون إنترنت، عربي RTL) مخصص لإدارة المغاسل الصغيرة في اليمن والسعودية، ووصل إلى المرحلة 9. المطلوب موقع تعريفي احترافي يشرح المميزات وطريقة الاستخدام وسياسة الخصوصية والدعم الفني، ويُبنى بأحدث المهارات. مراجع التصميم تُستخدم لاستخراج الأنماط فقط دون نسخ أي موقع.

القرارات المعتمدة:
- مستودع مستقل باسم `tasyeer-web`.
- التقنية: Next.js مع shadcn وMotion.
- التطبيق لم يُنشر بعد، لذلك يكون الزر «قريبًا على Google Play».
- الدعم عبر واتساب والبريد ونموذج تواصل وصفحة أسئلة شائعة.

## 0. المستودع والمهارات (قبل كتابة أي كود)
- إنشاء `C:\Users\Mokarm\Desktop\tasyeer-web`، ثم `git init` وفرع `main`. العمل في جلسة جديدة على ذلك المجلد.
- المهارات (داخل `.claude/skills` للمشروع الجديد):
  - **ui-ux-pro-max**: `npx ui-ux-pro-max-cli init --ai claude`. تولّد نظام التصميم عبر `search.py "laundry management SaaS arabic offline" --design-system --persist -p "Tasyeer"`، فيُكتب `design-system/tasyeer/MASTER.md`. نعدّله بعد ذلك ليطابق ألوان التطبيق، ولا نعتمد لوحة ألوان مولّدة.
  - **frontend-design**: مثبتة الآن في tasyeer-app، ونسخها إلى المستودع الجديد عبر `skills-lock.json`.
  - من agentic-awesome-skills: `web-design-guidelines` و`react-best-practices` من vercel-labs، ومهارات Emil Kowalski للحركة، و`tastegate` و`anti-slop-design` لبوابة الجودة، و`frontend-lighthouse`. نتحقق من كل معرّف في `CATALOG.md` ثم نثبّته بالأمر `npx agentic-awesome-skills --release 20.2.0 --path .claude/skills --skills <ids> --dry-run`، ثم نحذف `--dry-run`.
- أضيف `CLAUDE.md` يوضح للمشروع: اللغة العربية وRTL، والتوكنات من نظام التصميم، وعدم وجود تحليلات أو كوكيز.

## 1. التقنية
- Next.js 15 (App Router) مع `output: 'export'` لموقع ثابت يُنشر على Vercel. TypeScript وTailwind v4 وshadcn/ui (Button وAccordion وTabs وSheet وForm وInput وTextarea وSonner).
- Motion (`motion/react`) للحركة: ظهور عند التمرير، تتابع العناصر، `layout` للتبويبات. كلها تحترم `prefers-reduced-motion`.
- React Bits: مكوّن أو اثنان كحد أقصى، مثل خلفية خفيفة في الـ Hero أو عدّاد أرقام. لا نستخدم أي تأثير يضر القراءة بالعربية، مثل تقطيع الحروف لأنه يكسر وصل الحروف.
- الخط Thmanyah Sans بأوزان 400 و500 و700، يُحمَّل محليًا عبر `next/font/local` من `tasyeer-app/assets/fonts/thmanyah/`. **تنبيه:** ملف الترخيص غير موجود (D-2)، ويجب التأكد أن الترخيص يسمح بالاستخدام على الويب كما هو بصيغة TTF/OTF، لأن تحويله إلى woff2 ممنوع. البديل: IBM Plex Sans Arabic من Google Fonts.
- النموذج: Formspree (endpoint يُضاف في `.env`، بلا خادم). وواتساب عبر `https://wa.me/<رقم>`.
- لا Google Analytics ولا كوكيز، اتساقًا مع قاعدة الخصوصية في التطبيق. وإن احتجنا مستقبلًا فـ Vercel Analytics بلا كوكيز، بعد موافقتك.

## 2. نظام التصميم (من التطبيق لا من الصفر)
المصدر هو `tasyeer-app/docs/design-system.md` و`lib/config/theme/app_colors.dart`. تُنقل إلى متغيرات CSS في `app/globals.css` بنمط shadcn:
| token | فاتح | داكن |
|---|---|---|
| `--background` | `#F6F1E7` cream | `#121A19` |
| `--card` | `#FFFFFF` | `#1C2624` |
| `--foreground` | `#263936` | `#E8EFEC` |
| `--primary` | `#164E49` petrol | `#A7C9B5` sage |
| `--secondary` | `#527E72` | `#2A3B38` |
| `--muted` | `#ECE5D6` | `#283431` |
| `--border` | `#DDD6C8` | `#34423F` |
| حالات success/warning/error/info | من جدول AppStatusColors | |
- نصف القطر 8 و12 و16، والمسافات على شبكة 4 مثل التطبيق. العمق يأتي من تباين الكريمي مع الأبيض وليس من الظلال.
- الأصول: الشعار والأيقونات من `tasyeer-app/assets/icons/logo` و`app_icon`، واللقطات من `docs/screenshots/after/` (لقطات p3 وp4 وp6 وp8 ونسخ dark) وتوضع داخل إطار جوال مرسوم بـ CSS.

## 3. الأنماط المستخرجة من المراجع
- **patterncraft**: خلفيات نقطية أو شبكية خفيفة بلون `--border` في الـ Hero وفواصل الأقسام.
- **shadcn**: مكوّنات متاحة للوصول وبتصميم هادئ.
- **reactbits** و**motion.dev**: حركة هادفة فقط، مثل الظهور التدريجي وتبديل لقطات الشاشة.
- **colorhunt** و**coolors**: التحقق من تباين اللوحة الحالية وتوليد درجات Tailwind 50 إلى 950 من petrol وsage، دون تغيير هوية العلامة.
- **rayat-heroes** و**quran-radio** و**qafila-card**: أفكار لمواقع عربية مثل الطباعة العربية الكبيرة في الـ Hero، والبطاقات ذات الإطار الدقيق، والأقسام الطويلة الهادئة، وتصميم بالجوال أولًا. أراجعها في المتصفح أثناء التنفيذ وأدوّن الأنماط في `docs/patterns.md` دون نسخ بنية أو نص.

## 4. خريطة الموقع والمحتوى
| المسار | المحتوى | المصدر |
|---|---|---|
| `/` | Hero بشعار «إدارة أبسط، كل يوم» وإطار جوال، ثم المشكلة والحل، وشبكة مميزات Bento، ثم «كيف يعمل» في 4 خطوات، وشريط «بياناتك على جوالك»، وتبويبات لقطات الشاشة، ولمن التطبيق (المالك والموظف)، وأسئلة شائعة مختصرة، ودعوة «قريبًا على Google Play» | PRD §1 إلى §9 |
| `/features` | تفصيل المميزات: الطلبات والقطع ومواقع الحفظ، والفواتير PDF، والدفعات والذمم، والمصروفات، والتقارير، والموظفين والصلاحيات وPIN، والتنبيهات، والنسخ الاحتياطي محليًا وعلى Drive، وعملتا YER وSAR | PRD |
| `/guide` | دليل الاستخدام خطوة بخطوة: الإعداد الأول، ثم أول طلب، ثم الدفعة، ثم الفاتورة، ثم النسخ الاحتياطي | `user_guide_page.dart` ومفاتيح `guide_*` في `ar.json` |
| `/privacy` | سياسة الخصوصية بالأقسام الخمسة: أين تُحفظ البيانات، ومن يراها، وكيف نحميها، ومتى تغادر الجهاز، ونصائح. نضيف إليها: لا تحليلات، والنسخ إلى Drive اختياري، وملف النسخة غير مشفّر، وتاريخ آخر تحديث، وجهة التواصل | `privacy_page.dart` ومفاتيح `privacy_*` في `ar.json`، مع مطابقة الكود |
| `/support` | قنوات واتساب والبريد والنموذج، ثم الأسئلة الشائعة كاملة باستخدام Accordion، ثم «قبل أن تراسلنا» بخطوات النسخ الاحتياطي | |
| `/terms` | شروط استخدام مختصرة. **مسودة تحتاج مراجعتك**، ولن أخترع التزامات قانونية | |
| `not-found` | صفحة 404 بهوية الموقع | |
- المحتوى كله في `content/*.ts` بملفات منظمة، مع `lang="ar" dir="rtl"`. الأرقام المالية في الأمثلة معزولة باتجاه LTR.
- SEO: `metadata` لكل صفحة، وصور OG مولّدة بـ `opengraph-image`، و`sitemap.ts` و`robots.ts`، وJSON-LD من نوع `SoftwareApplication` و`FAQPage`.

## 5. هيكل المستودع
```
tasyeer-web/
  app/(site)/{page,features,guide,privacy,support,terms}/page.tsx
  app/layout.tsx  globals.css  sitemap.ts  robots.ts  opengraph-image.tsx
  components/ui/        (shadcn)
  components/sections/  hero, feature-bento, how-it-works, screenshots-tabs, privacy-band, faq, cta
  components/site/      header (Sheet للجوال), footer, phone-frame, theme-toggle, whatsapp-fab
  content/              features.ts, guide.ts, faq.ts, privacy.ts, site.ts (روابط ورقم وبريد)
  public/brand/ public/screens/ fonts/
  design-system/tasyeer/MASTER.md
  docs/patterns.md
```

## 6. مراحل التنفيذ (كل مرحلة commit مستقل بأسلوب Conventional Commits)
1. **الإعداد:** إنشاء Next.js وTailwind وshadcn وMotion، وتثبيت المهارات وكتابة `CLAUDE.md`، وتجهيز التوكنات والخط والوضعين الفاتح والداكن.
2. **الهيكل:** الترويسة والتذييل وقائمة الجوال، و`PhoneFrame`، وزر واتساب العائم، ومبدّل السمة.
3. **الصفحة الرئيسية** بأقسامها كاملة.
4. **صفحتا المميزات والدليل.**
5. **صفحات الخصوصية والدعم والشروط**، مع النموذج عبر Formspree وتحقق المدخلات وحالات النجاح والخطأ.
6. **SEO والأداء:** الصور عبر `next/image` بإعداد unoptimized للتصدير الثابت مع webp مسبق، والـ metadata وOG وsitemap.
7. **بوابة الجودة:** مراجعة tastegate وanti-slop وweb-design-guidelines، ثم الإصلاح.
8. **النشر:** ربط Vercel، **فقط بعد موافقتك** لأن النشر خطوة خارجية.

## 7. ما أحتاجه منك أثناء التنفيذ
- رقم واتساب وبريد الدعم.
- حساب Formspree أو endpoint جاهز.
- النطاق، أم يكفي `*.vercel.app`؟
- تأكيد أن ترخيص خط ثمانية يسمح باستخدامه على الويب.

## 8. التحقق
- `npm run lint` و`npm run build`، ويجب أن ينجح التصدير الثابت دون أخطاء.
- معاينة محلية عبر `preview_start` في المتصفح المدمج: عرض 375 و768 و1280، والوضعان الفاتح والداكن، وتمرير كامل، والتأكد من عدم وجود تمرير أفقي، ومن صحة RTL.
- Lighthouse بهدف Performance ≥ 90، وAccessibility ≥ 95، وSEO = 100.
- تباين AA للنصوص، وتنقل كامل بلوحة المفاتيح، وتحقق من `prefers-reduced-motion`.
- إرسال تجريبي للنموذج على endpoint اختبار.
- مطابقة نص الخصوصية مع سلوك التطبيق الفعلي (`privacy_page.dart`، ولا شبكة إلا Drive).
