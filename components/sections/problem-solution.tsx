import { CornerDownLeft } from "lucide-react";

import { RevealGroup, RevealItem } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { problems } from "@/content/features";

export function ProblemSolution() {
  return (
    <section aria-labelledby="problems-title" className="container-page py-14 md:py-20">
      <SectionHeading
        id="problems-title"
        title="أسئلة كل يوم في المغسلة، وجوابها في تسيير"
      />
      <RevealGroup className="mt-10 divide-y border-y">
        {problems.map((p) => (
          <RevealItem key={p.pain} className="grid gap-2 py-6 md:grid-cols-[1fr_1.3fr] md:gap-10">
            <p className="text-xl font-medium text-foreground md:text-2xl">{p.pain}</p>
            <p className="flex gap-3 text-lg text-muted-foreground">
              <CornerDownLeft className="mt-1.5 size-5 shrink-0 text-support" aria-hidden />
              <span>{p.answer}</span>
            </p>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
