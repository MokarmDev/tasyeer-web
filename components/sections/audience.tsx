import { Check, ShieldCheck, UserRound } from "lucide-react";

import { RevealGroup, RevealItem } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { audiences } from "@/content/features";
import { cn } from "@/lib/utils";

export function Audience() {
  return (
    <section aria-labelledby="audience-title" className="container-page py-14 md:py-20">
      <SectionHeading
        id="audience-title"
        title="جهاز واحد في المغسلة، ولكل شخص دوره"
        lead="المالك وموظفوه على الجهاز نفسه، وكل واحد يدخل برمز PIN خاص به."
      />
      <RevealGroup className="mt-10 grid gap-4 md:grid-cols-2">
        {audiences.map((a, i) => {
          const owner = i === 0;
          const Icon = owner ? ShieldCheck : UserRound;
          return (
            <RevealItem
              key={a.role}
              className={cn(
                "rounded-xl border p-6 md:p-8",
                owner ? "border-transparent bg-primary-container text-foreground" : "bg-card",
              )}
            >
              <div className="flex items-center gap-3">
                <span
                  aria-hidden
                  className={cn(
                    "grid size-11 place-items-center rounded-lg",
                    owner ? "bg-primary text-primary-foreground" : "bg-secondary-container text-primary",
                  )}
                >
                  <Icon className="size-5" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="text-xl font-bold">{a.role}</h3>
                  <p className={owner ? "text-foreground" : "text-muted-foreground"}>{a.body}</p>
                </div>
              </div>
              <ul className="mt-6 space-y-3">
                {a.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <Check className="mt-1.5 size-4 shrink-0 text-success" aria-hidden />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </section>
  );
}
