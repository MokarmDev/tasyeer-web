import { Tag } from "@/components/site/tag";
import { cn } from "@/lib/utils";

export function SectionHeading({
  id,
  tag,
  title,
  lead,
  className,
  align = "start",
}: {
  id?: string;
  tag?: string;
  title: string;
  lead?: string;
  className?: string;
  align?: "start" | "center";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {tag && <Tag className="mb-4">{tag}</Tag>}
      <h2 id={id} className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-normal text-foreground">
        {title}
      </h2>
      {lead && <p className="mt-3 text-lg text-muted-foreground">{lead}</p>}
    </div>
  );
}

/** Page-level title block for inner pages. */
export function PageHero({
  tag,
  title,
  lead,
  children,
}: {
  tag?: string;
  title: string;
  lead?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b">
      <div aria-hidden className="bg-dots absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="container-page relative py-14 md:py-20">
        {tag && <Tag className="mb-5">{tag}</Tag>}
        <h1 className="max-w-3xl text-[clamp(2.1rem,5.5vw,3.5rem)] font-bold leading-[1.25] text-foreground">{title}</h1>
        {lead && <p className="mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl">{lead}</p>}
        {children}
      </div>
    </section>
  );
}
