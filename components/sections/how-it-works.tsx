import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { steps } from "@/content/features";

export function HowItWorks() {
  return (
    <section aria-labelledby="how-title" className="border-y bg-card py-14 md:py-20">
      <div className="container-page">
        <SectionHeading id="how-title" title="أربع خطوات من الاستلام إلى التسليم" />
        <Reveal className="relative mt-12">
          {/* The thread joining the steps. */}
          <span aria-hidden className="absolute inset-x-6 top-6 hidden h-px bg-border md:block" />
          <ol className="relative grid gap-10 md:grid-cols-4 md:gap-6">
            {steps.map((step, i) => (
              <li key={step.title} className="relative flex gap-4 md:flex-col">
                <span className="ltr-iso relative grid size-12 shrink-0 place-items-center rounded-full border-2 border-primary bg-card text-lg font-bold text-primary">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                  <p className="mt-1.5 text-muted-foreground">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
