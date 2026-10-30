import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { SectionHeading } from "@/components/site/section-heading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs, type Faq } from "@/content/faq";

export function FaqList({ items }: { items: Faq[] }) {
  return (
    <Accordion type="single" collapsible className="rounded-xl border bg-card px-5 md:px-6">
      {items.map((item, i) => (
        <AccordionItem key={item.q} value={`q${i}`}>
          <AccordionTrigger className="items-center py-5 text-start text-base font-medium hover:no-underline md:text-lg">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="pb-5 text-base text-muted-foreground">{item.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function FaqSection() {
  return (
    <section aria-labelledby="faq-title" className="container-page py-14 md:py-20">
      <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeading id="faq-title" title="قبل أن تسأل" />
          <Link
            href="/support/#faq"
            className="mt-6 inline-flex min-h-11 items-center gap-2 font-medium text-primary underline-offset-8 hover:underline"
          >
            كل الأسئلة والدعم
            <ArrowLeft className="size-4" aria-hidden />
          </Link>
        </div>
        <FaqList items={faqs.filter((f) => f.home)} />
      </div>
    </section>
  );
}
