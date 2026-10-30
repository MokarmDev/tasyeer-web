import { Check, Minus } from "lucide-react";

import { Cta } from "@/components/sections/cta";
import { FeatureIcon } from "@/components/site/feature-icon";
import { PhoneFrame } from "@/components/site/phone-frame";
import { Reveal } from "@/components/site/reveal";
import { PageHero } from "@/components/site/section-heading";
import { features, notInFirstRelease, type Feature } from "@/content/features";
import { pageMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "المميزات",
  description:
    "مميزات تسيير بالتفصيل: الطلبات ومواقع الحفظ، فواتير PDF، الدفعات والذمم، المصروفات، التقارير، الموظفون وPIN، التذكيرات، النسخ الاحتياطي، والريال اليمني والسعودي.",
  path: "/features/",
});

function Points({ points }: { points: string[] }) {
  return (
    <ul className="mt-5 space-y-3">
      {points.map((p) => (
        <li key={p} className="flex gap-3">
          <Check className="mt-1.5 size-4 shrink-0 text-success" aria-hidden />
          <span>{p}</span>
        </li>
      ))}
    </ul>
  );
}

function FeatureRow({ feature, flip }: { feature: Feature; flip: boolean }) {
  return (
    <section
      id={feature.id}
      aria-labelledby={`${feature.id}-title`}
      className="grid scroll-mt-24 items-center gap-10 border-t py-14 md:grid-cols-[1.25fr_0.75fr] md:gap-16 md:py-20"
    >
      <Reveal className={cn(flip && "md:order-2")}>
        <FeatureIcon name={feature.icon} />
        <h2 id={`${feature.id}-title`} className="mt-4 text-[clamp(1.6rem,3.5vw,2.25rem)] font-bold">
          {feature.title}
        </h2>
        <p className="mt-2 text-lg text-muted-foreground">{feature.summary}</p>
        <Points points={feature.points} />
      </Reveal>
      {feature.screen && (
        <Reveal delay={0.1} className={cn("w-full max-w-[16rem] justify-self-center", flip && "md:order-1")}>
          <PhoneFrame screen={feature.screen} />
        </Reveal>
      )}
    </section>
  );
}

export default function FeaturesPage() {
  const withScreen = features.filter((f) => f.screen);
  const rest = features.filter((f) => !f.screen);

  return (
    <>
      <PageHero
        tag="المميزات"
        title="كل ما في تسيير، بالتفصيل"
        lead="من استلام الملابس إلى تسليمها، ومن أول دفعة إلى تقرير آخر الشهر. كل ميزة هنا موجودة في الإصدار الأول."
      >
        <nav aria-label="أقسام المميزات" className="mt-8">
          <ul className="flex flex-wrap gap-2">
            {features.map((f) => (
              <li key={f.id}>
                <a
                  href={`#${f.id}`}
                  className="inline-flex min-h-10 items-center rounded-full border bg-card px-4 text-sm transition-colors hover:border-primary/40 hover:text-primary"
                >
                  {f.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHero>

      <div className="container-page">
        {withScreen.map((f, i) => (
          <FeatureRow key={f.id} feature={f} flip={i % 2 === 1} />
        ))}

        <div className="grid gap-4 border-t py-14 md:grid-cols-2 md:py-20">
          {rest.map((f) => (
            <Reveal
              key={f.id}
              id={f.id}
              className="scroll-mt-24 rounded-xl border bg-card p-6"
              aria-labelledby={`${f.id}-title`}
              role="region"
            >
              <FeatureIcon name={f.icon} />
              <h2 id={`${f.id}-title`} className="mt-4 text-xl font-bold">
                {f.title}
              </h2>
              <p className="mt-2 text-muted-foreground">{f.summary}</p>
              <Points points={f.points} />
            </Reveal>
          ))}
        </div>

        <section aria-labelledby="scope-title" className="border-t py-14 md:py-20">
          <div className="grid gap-8 rounded-xl bg-muted p-6 md:grid-cols-[0.8fr_1.2fr] md:p-10">
            <div>
              <h2 id="scope-title" className="text-2xl font-bold">
                ليس في الإصدار الأول
              </h2>
              <p className="mt-2 text-muted-foreground">نفضّل أن نقولها بوضوح الآن، بدل أن تكتشفها لاحقًا.</p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {notInFirstRelease.map((item) => (
                <li key={item} className="flex gap-3">
                  <Minus className="mt-1.5 size-4 shrink-0 text-muted-foreground" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
      <Cta />
    </>
  );
}
