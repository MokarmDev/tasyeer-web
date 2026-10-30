import Image from "next/image";

import { WhatsAppIcon } from "@/components/site/icons";
import { PlayBadge } from "@/components/site/play-badge";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";

const notifyText = encodeURIComponent("السلام عليكم، أريد أن أعرف عند صدور تطبيق تسيير.");

export function Cta() {
  return (
    <section aria-labelledby="cta-title" className="container-page pt-8 pb-8">
      <Reveal className="relative flex flex-col items-center overflow-hidden rounded-2xl border bg-card px-6 py-14 text-center md:py-20">
        <div aria-hidden className="bg-dots absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <Image
          src="/brand/app-icon-192.png"
          alt=""
          width={192}
          height={192}
          className="relative size-20 rounded-[1.4rem] md:size-24"
        />
        <h2 id="cta-title" className="relative mt-6 text-[clamp(1.9rem,4.5vw,3rem)] font-bold text-foreground">
          {site.tagline}
        </h2>
        <p className="relative mt-3 max-w-lg text-lg text-muted-foreground">
          تسيير مجاني في الإصدار الأول، وسيصدر قريبًا على Google Play. اترك لنا رسالة لنخبرك عند صدوره.
        </p>
        <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
          <PlayBadge />
          <Button asChild size="lg" variant="outline" className="h-14 bg-card px-6">
            <a href={`${site.whatsapp.href}?text=${notifyText}`} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="size-5 text-whatsapp" />
              أخبرني عند الإصدار
            </a>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
