import { TriangleAlert } from "lucide-react";

import { PageHero } from "@/components/site/section-heading";
import { site } from "@/content/site";
import { termsMissing, termsSections } from "@/content/terms";
import { formatDate } from "@/lib/format";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "شروط الاستخدام (مسودة)",
  description:
    "مسودة شروط استخدام تطبيق تسيير.",
  path: "/terms/",
  noindex: true,
});

export default function TermsPage() {
  return (
    <>
      <PageHero tag="مسودة" title="شروط الاستخدام" lead="نسخة أولية مختصرة، بلغة واضحة. ستُراجع قبل صدور التطبيق." />
      <div className="container-page max-w-3xl py-14 md:py-20">
        <div role="note" className="flex gap-3 rounded-xl border border-warning/50 bg-warning/10 p-5">
          <TriangleAlert className="mt-1 size-5 shrink-0 text-warning" aria-hidden />
          <div>
            <p className="font-bold">هذه مسودة وليست الشروط النهائية.</p>
            <p className="mt-1 text-muted-foreground">
              تنقصها البنود التالية، وستضاف بعد المراجعة:
            </p>
            <ul className="mt-2 list-disc space-y-1 ps-5 text-muted-foreground">
              {termsMissing.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          تاريخ المسودة: <time dateTime={site.termsUpdated}>{formatDate(site.termsUpdated)}</time>
        </p>

        <div className="mt-6 space-y-10">
          {termsSections.map((s, i) => (
            <section key={s.title} aria-labelledby={`terms-${i}`}>
              <h2 id={`terms-${i}`} className="text-xl font-bold md:text-2xl">
                <span className="ltr-iso me-3 inline-grid size-8 place-items-center rounded-full bg-secondary-container align-middle text-base text-primary">
                  {i + 1}
                </span>
                {s.title}
              </h2>
              <div className="mt-3 space-y-3 text-[1.05rem]">
                {s.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
