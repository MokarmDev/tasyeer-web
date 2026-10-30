import { ArrowUpLeft, Mail } from "lucide-react";

import { FaqList } from "@/components/sections/faq";
import { ContactForm } from "@/components/site/contact-form";
import { WhatsAppIcon } from "@/components/site/icons";
import { FaqJsonLd } from "@/components/site/json-ld";
import { Reveal } from "@/components/site/reveal";
import { PageHero, SectionHeading } from "@/components/site/section-heading";
import { Toaster } from "@/components/ui/sonner";
import { faqs } from "@/content/faq";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "الدعم الفني",
  description:
    "تواصل مع فريق تسيير عبر واتساب أو البريد أو نموذج التواصل، واقرأ الأسئلة الشائعة عن التطبيق.",
  path: "/support/",
});

const beforeYouWrite = [
  "خذ نسخة احتياطية الآن: «المزيد ← النسخ الاحتياطي والاستعادة ← نسخ الآن».",
  "صدّر تلك النسخة واحفظها خارج الجوال، حتى لا تخسر شيئًا مهما حدث.",
  "اكتب لنا ما الذي حاولت فعله، وما الذي ظهر لك، ويُفضّل أن ترفق صورة للشاشة.",
  "لا ترسل رمز PIN أبدًا. وملف النسخة الاحتياطية فيه كل بيانات مغسلتك وهو غير مشفّر، فلا ترسله لأحد.",
];

export default function SupportPage() {
  return (
    <>
      <FaqJsonLd />
      <Toaster position="top-center" dir="rtl" />
      <PageHero
        tag="الدعم الفني"
        title="نحن هنا لمساعدتك"
        lead="اختر الطريقة الأسهل لك. نرد بالعربية، ونحاول أن نرد في أقرب وقت."
      />

      <div className="container-page py-14 md:py-20">
        <div className="grid gap-4 md:grid-cols-2">
          <Reveal>
            <a
              href={site.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full items-start gap-4 rounded-xl border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <span aria-hidden className="grid size-12 shrink-0 place-items-center rounded-full bg-whatsapp text-white">
                <WhatsAppIcon className="size-6" />
              </span>
              <span className="flex-1">
                <span className="flex items-center justify-between gap-2 text-xl font-bold">
                  واتساب
                  <ArrowUpLeft className="size-5 text-muted-foreground transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                </span>
                <span className="mt-1 block text-muted-foreground">الأسرع للأسئلة القصيرة والمشكلات العاجلة.</span>
                <span className="ltr-iso mt-3 block text-start font-medium text-primary">{site.whatsapp.display}</span>
              </span>
            </a>
          </Reveal>
          <Reveal delay={0.06}>
            <a
              href={site.email.href}
              className="group flex h-full items-start gap-4 rounded-xl border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <span aria-hidden className="grid size-12 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                <Mail className="size-6" strokeWidth={1.75} />
              </span>
              <span className="flex-1">
                <span className="flex items-center justify-between gap-2 text-xl font-bold">
                  البريد الإلكتروني
                  <ArrowUpLeft className="size-5 text-muted-foreground transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                </span>
                <span className="mt-1 block text-muted-foreground">للتفاصيل الطويلة والصور والاقتراحات.</span>
                <span className="ltr-iso mt-3 block text-start font-medium text-primary">{site.email.address}</span>
              </span>
            </a>
          </Reveal>
        </div>

        <section aria-labelledby="form-title" className="mt-16 grid gap-10 md:mt-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div>
            <SectionHeading id="form-title" title="اكتب لنا من هنا" />
            <div className="mt-8 rounded-xl bg-muted p-6">
              <h3 className="text-lg font-bold">قبل أن تراسلنا</h3>
              <ol className="mt-4 space-y-3">
                {beforeYouWrite.map((item, i) => (
                  <li key={item} className="flex gap-3">
                    <span className="ltr-iso grid size-7 shrink-0 place-items-center rounded-full bg-card text-sm font-bold text-primary">
                      {i + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <ContactForm />
        </section>

        <section id="faq" aria-labelledby="faq-all-title" className="mt-16 scroll-mt-24 md:mt-20">
          <SectionHeading id="faq-all-title" title="أجوبة سريعة" />
          <div className="mt-8">
            <FaqList items={faqs} />
          </div>
        </section>
      </div>
    </>
  );
}
