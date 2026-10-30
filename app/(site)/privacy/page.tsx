import { Bell, CircleCheck, EyeOff, Globe, Lightbulb, Share2, ShieldCheck, Smartphone, type LucideIcon } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/site/reveal";
import { Tag } from "@/components/site/tag";
import {
  appPrivacySections,
  extraPrivacySections,
  privacyIntro,
  websitePrivacy,
  type PrivacyIcon,
  type PrivacySection,
} from "@/content/privacy";
import { site } from "@/content/site";
import { formatDate } from "@/lib/format";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "سياسة الخصوصية",
  description:
    "بيانات مغسلتك محفوظة على جوالك فقط. تسيير لا يجمع إحصاءات ولا يرسل بياناتك إلينا، والنسخ إلى Google Drive اختياري وفي حسابك أنت.",
  path: "/privacy/",
});

const icons: Record<PrivacyIcon, LucideIcon> = {
  smartphone: Smartphone,
  eyeOff: EyeOff,
  shield: ShieldCheck,
  share: Share2,
  lightbulb: Lightbulb,
  bell: Bell,
  globe: Globe,
};

function Section({ section }: { section: PrivacySection }) {
  const Icon = icons[section.icon];
  return (
    <Reveal>
      <section
        id={section.id}
        aria-labelledby={`${section.id}-title`}
        className="scroll-mt-24 rounded-xl border bg-card p-6 md:p-8"
      >
        <div className="flex items-center gap-3">
          <span aria-hidden className="grid size-11 shrink-0 place-items-center rounded-full bg-secondary-container text-primary">
            <Icon className="size-5" strokeWidth={1.75} />
          </span>
          <h2 id={`${section.id}-title`} className="text-xl font-bold md:text-2xl">
            {section.title}
          </h2>
        </div>
        <ul className="mt-5 space-y-3">
          {section.points.map((p) => (
            <li key={p} className="flex gap-3 text-[1.05rem]">
              <CircleCheck className="mt-1.5 size-4 shrink-0 text-success" aria-hidden />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </section>
    </Reveal>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.12] [background-image:radial-gradient(currentColor_1.2px,transparent_1.2px)] [background-size:22px_22px] [mask-image:linear-gradient(to_bottom,black,transparent)]"
        />
        <div className="container-page relative py-14 md:py-20">
          <Tag tone="inverse" className="dark:border-black/20 dark:bg-black/5 dark:text-primary-foreground">
            {privacyIntro.title}
          </Tag>
          <h1 className="mt-5 max-w-3xl text-[clamp(2.1rem,5.5vw,3.5rem)] leading-[1.25] font-bold">
            {privacyIntro.headline}
          </h1>
          <p className="mt-4 max-w-2xl text-lg opacity-90 md:text-xl">{privacyIntro.intro}</p>
          <p className="mt-6 text-sm opacity-80">
            آخر تحديث: <time dateTime={site.privacyUpdated}>{formatDate(site.privacyUpdated)}</time>
          </p>
        </div>
      </section>

      <div className="container-page grid gap-6 py-14 md:py-20 lg:grid-cols-[1fr_20rem] lg:gap-12">
        <div className="min-w-0 space-y-6">
          <h2 className="sr-only">التطبيق</h2>
          {[...appPrivacySections.slice(0, 4), ...extraPrivacySections, appPrivacySections[4]].map((s) => (
            <Section key={s.id} section={s} />
          ))}
          <div className="pt-6">
            <Section section={websitePrivacy} />
          </div>
        </div>

        <aside aria-label="ملخص" className="lg:order-none">
          <div className="sticky top-24 space-y-4 rounded-xl border bg-muted p-6">
            <h2 className="text-lg font-bold">باختصار</h2>
            <ul className="space-y-2 text-[0.95rem]">
              <li>• بياناتك على جوالك، لا عندنا.</li>
              <li>• لا إحصاءات ولا تتبع، في التطبيق ولا في هذا الموقع.</li>
              <li>• الإنترنت فقط لـ Google Drive، وإن اخترت ذلك.</li>
              <li>• ملفات النسخ الاحتياطي غير مشفّرة؛ احفظها بأمان.</li>
            </ul>
            <div className="border-t pt-4">
              <h2 className="text-base font-bold">أسئلة عن الخصوصية؟</h2>
              <p className="mt-1 text-[0.95rem] text-muted-foreground">
                راسلنا على{" "}
                <a href={site.email.href} className="ltr-iso font-medium text-primary underline underline-offset-4">
                  {site.email.address}
                </a>{" "}
                أو من{" "}
                <Link href="/support/" className="font-medium text-primary underline underline-offset-4">
                  صفحة الدعم
                </Link>
                .
              </p>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
