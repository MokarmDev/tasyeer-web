import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { FeatureIcon } from "@/components/site/feature-icon";
import { RevealGroup, RevealItem } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { Tag } from "@/components/site/tag";
import { Button } from "@/components/ui/button";
import { featureById, type Feature } from "@/content/features";
import { cn } from "@/lib/utils";

function Tile({ feature, className, children }: { feature: Feature; className?: string; children?: React.ReactNode }) {
  return (
    <RevealItem
      className={cn("flex flex-col overflow-hidden rounded-xl border bg-card p-6 text-card-foreground", className)}
    >
      <FeatureIcon name={feature.icon} />
      <h3 className="mt-4 text-xl font-bold">{feature.title}</h3>
      <p className="mt-2 text-muted-foreground">{feature.summary}</p>
      {children}
    </RevealItem>
  );
}

export function FeatureBento() {
  return (
    <section aria-labelledby="features-title" className="container-page py-14 md:py-20">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          id="features-title"
          tag="المميزات"
          title="كل ما تحتاجه المغسلة، ولا شيء زائد"
          lead="مبني لتدفق العمل الحقيقي: استلام، حفظ، غسيل وكوي، دفع، تسليم."
        />
        <Button asChild variant="outline" className="self-start bg-transparent md:self-auto">
          <Link href="/features/">
            كل المميزات
            <ArrowLeft data-icon="inline-end" />
          </Link>
        </Button>
      </div>

      <RevealGroup className="mt-10 grid gap-4 md:grid-cols-6">
        <Tile feature={featureById("orders")} className="md:col-span-4 md:row-span-2">
          <div className="mt-5 flex flex-wrap gap-2">
            <Tag>رف ٢</Tag>
            <Tag>كيس ١٥</Tag>
            <Tag>علاقة ٤</Tag>
          </div>
          <div className="relative mt-6 -mb-6 h-56 overflow-hidden rounded-t-xl border border-b-0 bg-background md:h-72">
            <Image
              src="/screens/new-order-items.webp"
              alt="شاشة إضافة الأصناف: الكمية والخدمة وموقع البند وتتبع القطع"
              width={720}
              height={1493}
              sizes="(min-width: 768px) 420px, 90vw"
              className="absolute inset-x-0 top-0 mx-auto w-[min(100%,26rem)] -translate-y-[32%]"
            />
          </div>
        </Tile>

        <Tile feature={featureById("invoice")} className="md:col-span-2 md:row-span-2">
          <div className="relative mt-6 -mb-6 h-56 overflow-hidden rounded-t-lg border border-b-0 bg-white md:h-auto md:flex-1">
            <Image
              src="/screens/invoice-pdf.webp"
              alt="مثال فاتورة PDF من تسيير: الأصناف والخدمات والإجمالي والمدفوع والمتبقي"
              width={800}
              height={1131}
              sizes="(min-width: 768px) 300px, 90vw"
              className="absolute inset-x-0 top-0 w-full"
            />
          </div>
        </Tile>

        <Tile feature={featureById("payments")} className="md:col-span-2" />
        <Tile feature={featureById("reports")} className="md:col-span-2" />
        <Tile feature={featureById("staff")} className="md:col-span-2" />
        <Tile feature={featureById("notify")} className="md:col-span-3" />
        <Tile feature={featureById("backup")} className="md:col-span-3" />
      </RevealGroup>
    </section>
  );
}
