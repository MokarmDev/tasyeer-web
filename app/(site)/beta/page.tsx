import { CalendarClock, ExternalLink, Info, Star } from "lucide-react";

import { WhatsAppIcon } from "@/components/site/icons";
import { Reveal } from "@/components/site/reveal";
import { PageHero } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";
import { betaHelp, betaIntro, betaSteps } from "@/content/beta";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

// Temporary and shared by direct link: kept out of the nav and the sitemap.
export const metadata = pageMetadata({
  title: "الاختبار المغلق",
  description: "خطوات المشاركة في الاختبار المغلق لتطبيق تسيير على Google Play.",
  path: "/beta/",
  noindex: true,
});

/** Isolates Latin words and numbers inside Arabic copy. */
function isolated(text: string) {
  return text.split(/([A-Za-z0-9]+(?: [A-Za-z0-9]+)*)/).map((part, i) => (i % 2 ? <bdi key={i} className="whitespace-nowrap">{part}</bdi> : part));
}

function FiveStars() {
  return (
    <p className="mt-5 flex w-fit items-center gap-3 rounded-lg bg-muted px-4 py-3">
      <span className="flex gap-1" aria-hidden>
        {Array.from({ length: 5 }, (_, i) => (
          <Star key={i} className="size-6 fill-warning text-warning" />
        ))}
      </span>
      <span className="font-medium">
        <bdi>5</bdi> نجوم
      </span>
    </p>
  );
}

export default function BetaPage() {
  return (
    <>
      <PageHero tag={betaIntro.tag} title={betaIntro.title}>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl">{isolated(betaIntro.lead)}</p>
      </PageHero>

      <div className="container-page max-w-3xl py-14 md:py-20">
        <div role="note" className="flex gap-3 rounded-xl border border-info/50 bg-info/10 p-5">
          <Info className="mt-1 size-5 shrink-0 text-info" aria-hidden />
          <p className="text-[1.05rem]">{isolated(betaIntro.note)}</p>
        </div>

        <ol className="mt-10">
          {betaSteps.map((step, i) => (
            <li key={step.id} className="relative flex gap-4 pb-10 last:pb-0 md:gap-6">
              {/* The thread joining the steps. */}
              {i < betaSteps.length - 1 && (
                <span aria-hidden className="absolute start-6 top-12 bottom-0 w-px bg-border" />
              )}
              <span className="ltr-iso relative grid size-12 shrink-0 place-items-center rounded-full border-2 border-primary bg-card text-lg font-bold text-primary">
                {i + 1}
              </span>
              <Reveal className="min-w-0 flex-1">
                <section aria-labelledby={`${step.id}-title`} className="rounded-xl border bg-card p-6 md:p-8">
                  <h2 id={`${step.id}-title`} className="text-xl font-bold md:text-2xl">
                    {step.title}
                  </h2>
                  <p className="mt-2 text-[1.05rem] text-muted-foreground">{isolated(step.body)}</p>
                  {"note" in step && (
                    <p role="note" className="mt-5 flex gap-3 rounded-lg border border-warning/50 bg-warning/10 p-4">
                      <CalendarClock className="mt-1 size-5 shrink-0 text-warning" aria-hidden />
                      <span className="font-medium">{isolated(step.note)}</span>
                    </p>
                  )}
                  {"showStars" in step && <FiveStars />}
                  <Button asChild size="lg" className="mt-6 h-12 w-full px-6 sm:w-auto">
                    <a href={step.action.href} target="_blank" rel="noopener noreferrer">
                      {step.action.label}
                      <ExternalLink className="size-4 shrink-0" aria-hidden />
                    </a>
                  </Button>
                </section>
              </Reveal>
            </li>
          ))}
        </ol>

        <section
          aria-labelledby="help-title"
          className="mt-12 flex flex-col gap-4 border-t pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <h2 id="help-title" className="text-lg font-bold">
              {betaHelp.title}
            </h2>
            <p className="mt-1 text-muted-foreground">{betaHelp.body}</p>
          </div>
          <Button asChild size="lg" variant="outline" className="h-12 shrink-0 bg-card px-5">
            <a
              href={`${site.whatsapp.href}?text=${encodeURIComponent(betaHelp.message)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="size-5 text-whatsapp" />
              {betaHelp.action}
            </a>
          </Button>
        </section>
      </div>
    </>
  );
}
