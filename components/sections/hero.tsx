"use client";

import { ArrowLeft, Check } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

import { PhoneFrame } from "@/components/site/phone-frame";
import { PlayBadge } from "@/components/site/play-badge";
import { Tag } from "@/components/site/tag";
import { Button } from "@/components/ui/button";
import { heroFacts, screenTabs } from "@/content/features";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div
        aria-hidden
        className="bg-dots absolute inset-0 [mask-image:radial-gradient(ellipse_at_30%_40%,black_20%,transparent_70%)]"
      />
      <div className="container-page relative grid items-center gap-12 pt-10 pb-16 md:grid-cols-[1.1fr_0.9fr] md:pt-16 md:pb-24">
        <div>
          <Tag className="mb-6">لمغاسل اليمن والسعودية</Tag>
          <h1
            id="hero-title"
            className="text-[clamp(2.4rem,6.5vw,4.5rem)] leading-[1.2] font-bold text-foreground"
          >
            إدارة أبسط
            <br />
            <span className="text-primary">لمغسلتك، كل يوم</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
            سجّل الطلبات وأماكن حفظ الملابس، وأصدر فاتورة PDF، وتابع الدفعات والمصروفات. بالعربية، بدون إنترنت،
            وبياناتك تبقى على جوالك.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <PlayBadge />
            <Button asChild variant="outline" size="lg" className="h-14 bg-transparent px-6">
              <Link href="/features/">
                شاهد المميزات
                <ArrowLeft data-icon="inline-end" />
              </Link>
            </Button>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[0.95rem] text-foreground">
            {heroFacts.map((fact) => (
              <li key={fact} className="flex items-center gap-2">
                <Check className="size-4 text-success" aria-hidden />
                {fact}
              </li>
            ))}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          className="relative mx-auto w-full max-w-[19rem]"
        >
          <PhoneFrame screen={screenTabs[0].screen} priority />
          {/* Storage tags, as the app writes them on orders. */}
          <Tag className="absolute top-[18%] -start-6 shadow-sm md:-start-14">رف ٢</Tag>
          <Tag className="absolute bottom-[22%] -end-4 shadow-sm md:-end-12">كيس ١٥</Tag>
        </motion.div>
      </div>
    </section>
  );
}
