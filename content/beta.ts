// Temporary: the closed test on Google Play. Once the app is public, delete
// this file and app/(site)/beta/.

const GROUP_URL = "https://groups.google.com/g/mokarm-beta-testers";
const STORE_URL = "https://play.google.com/store/apps/details?id=com.tasyeer.laundry";

export const betaIntro = {
  tag: "اختبار مغلق",
  title: "جرّب تسيير قبل إطلاقه",
  lead: "تسيير الآن في مرحلة الاختبار المغلق على Google Play. اتبع هذه الخطوات الثلاث بالترتيب لتحصل على التطبيق وتشاركنا رأيك.",
  note: "استخدم حساب Google نفسه في المجموعة وفي المتجر، فالتطبيق لا يظهر إلا للحساب المنضم إلى المجموعة.",
};

export const betaSteps = [
  {
    id: "join",
    title: "انضم إلى مجموعة المختبرين",
    body: "افتح صفحة المجموعة، وسجّل الدخول بحسابك في Google إن طُلب منك، ثم اضغط «الانضمام إلى المجموعة».",
    action: { label: "الانضمام إلى المجموعة", href: GROUP_URL },
  },
  {
    id: "install",
    title: "حمّل التطبيق من المتجر",
    body: "بعد الانضمام، افتح صفحة تسيير على Google Play واضغط «تثبيت». إذا ظهر أن التطبيق غير متاح، فانتظر بضع دقائق ثم افتح الرابط من جديد.",
    note: "لا تغادر المجموعة ولا تحذف التطبيق لمدة 14 يومًا متواصلة على الأقل، حتى تُحتسب مشاركتك في الاختبار.",
    action: { label: "فتح صفحة التطبيق في المتجر", href: STORE_URL },
  },
  {
    id: "rate",
    title: "قيّم التطبيق واكتب تعليقك",
    body: "جرّب التطبيق في عملك، ثم ارجع إلى صفحته في المتجر. إذا أعجبك، فامنحه 5 نجوم واكتب تعليقًا إيجابيًا تذكر فيه ما أفادك.",
    action: { label: "تقييم التطبيق في المتجر", href: STORE_URL },
    showStars: true,
  },
] as const;

export const betaHelp = {
  title: "تعثرت في إحدى الخطوات؟",
  body: "راسلنا على واتساب وسنساعدك.",
  action: "مراسلتنا على واتساب",
  message: "السلام عليكم، أحتاج إلى مساعدة في اختبار تطبيق تسيير.",
};
