import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/site/reveal";
import { PageHero } from "@/components/site/section-heading";
import { guideIntro, guideTopics } from "@/content/guide";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "دليل الاستخدام",
  description:
    "دليل استخدام تسيير خطوة بخطوة: تجهيز المغسلة، تسجيل أول طلب، الدفع والفواتير، المصروفات، التقارير، الموظفون، والنسخ الاحتياطي.",
  path: "/guide/",
});

/** The first day with the app, in the order an owner meets it. */
const quickPath = [
  { id: "start", label: "الإعداد الأول" },
  { id: "order", label: "أول طلب" },
  { id: "pay", label: "الدفعة والفاتورة" },
  { id: "follow", label: "المتابعة والتسليم" },
  { id: "backup", label: "النسخ الاحتياطي" },
];

export default function GuidePage() {
  return (
    <>
      <PageHero
        tag={guideIntro.title}
        title={guideIntro.headline}
        lead="الشرح نفسه الموجود داخل التطبيق، مرتبًا بالترتيب الذي ستحتاجه. ابدأ بالمسار السريع إذا كانت هذه أول مرة."
      >
        <nav aria-label="المسار السريع" className="mt-8">
          <ol className="flex flex-wrap items-center gap-2">
            {quickPath.map((step, i) => (
              <li key={step.id} className="flex items-center gap-2">
                <a
                  href={`#${step.id}`}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border bg-card ps-2 pe-4 text-[0.95rem] transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <span className="ltr-iso grid size-7 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  {step.label}
                </a>
                {i < quickPath.length - 1 && <ArrowLeft className="size-4 text-muted-foreground" aria-hidden />}
              </li>
            ))}
          </ol>
        </nav>
      </PageHero>

      <div className="container-page grid gap-10 py-14 md:py-20 lg:grid-cols-[16rem_1fr] lg:gap-16">
        <nav aria-label="محتويات الدليل" className="hidden lg:block">
          <div className="sticky top-24">
            <h2 className="text-sm font-medium text-muted-foreground">المحتويات</h2>
            <ol className="mt-3 space-y-1 border-s">
              {guideTopics.map((t) => (
                <li key={t.id}>
                  <a
                    href={`#${t.id}`}
                    className="-ms-px block border-s-2 border-transparent py-1.5 ps-4 text-[0.95rem] text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                  >
                    {t.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        <div className="min-w-0 space-y-6">
          {guideTopics.map((topic, n) => (
            <Reveal key={topic.id}>
              <section
                id={topic.id}
                aria-labelledby={`${topic.id}-title`}
                className="scroll-mt-24 rounded-xl border bg-card p-6 md:p-8"
              >
                <p className="text-sm font-medium text-support">
                  <span className="ltr-iso">{String(n + 1).padStart(2, "0")}</span>
                </p>
                <h2 id={`${topic.id}-title`} className="text-2xl font-bold">
                  {topic.title}
                </h2>
                <p className="mt-2 text-lg text-muted-foreground">{topic.intro}</p>
                <ol className="mt-6 space-y-4">
                  {topic.steps.map((step, i) => (
                    <li key={step} className="flex gap-4">
                      <span className="ltr-iso mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-secondary-container text-sm font-bold text-primary">
                        {i + 1}
                      </span>
                      <span className="text-[1.05rem]">{step}</span>
                    </li>
                  ))}
                </ol>
                {topic.id === "backup" && (
                  <Link
                    href="/privacy/"
                    className="mt-6 inline-flex min-h-11 items-center gap-2 font-medium text-primary underline-offset-8 hover:underline"
                  >
                    اقرأ كيف نحمي بياناتك
                    <ArrowLeft className="size-4" aria-hidden />
                  </Link>
                )}
              </section>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
