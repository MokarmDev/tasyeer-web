"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

import { PhoneFrame } from "@/components/site/phone-frame";
import { SectionHeading } from "@/components/site/section-heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { screenTabs } from "@/content/features";

const EASE = [0.22, 1, 0.36, 1] as const;

export function ScreenshotsTabs() {
  const [active, setActive] = useState<string>(screenTabs[0].id);
  const current = screenTabs.find((t) => t.id === active) ?? screenTabs[0];

  return (
    <section aria-labelledby="screens-title" className="overflow-hidden py-14 md:py-20">
      <div className="container-page grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <div className="min-w-0">
          <SectionHeading id="screens-title" title="شاشات واضحة، بالعربية من أولها" />
          <Tabs value={active} onValueChange={setActive} dir="rtl" className="mt-8 gap-6">
            <TabsList
              aria-label="شاشات التطبيق"
              className="h-auto w-full justify-start gap-1 overflow-x-auto rounded-xl border bg-card p-1 [scrollbar-width:none]"
            >
              {screenTabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="relative h-11 flex-none border-0 bg-transparent px-4 text-[0.95rem] data-[state=active]:bg-transparent data-[state=active]:shadow-none dark:data-[state=active]:bg-transparent"
                >
                  {active === tab.id && (
                    <motion.span
                      layoutId="screen-tab"
                      transition={{ duration: 0.3, ease: EASE }}
                      className="absolute inset-0 rounded-md bg-primary"
                    />
                  )}
                  {/* Color on the label itself: the trigger's own dark: text color would win otherwise. */}
                  <span className={active === tab.id ? "relative text-primary-foreground" : "relative"}>{tab.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            {screenTabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.id} className="min-h-36">
                <h3 className="text-2xl font-bold text-foreground">{tab.title}</h3>
                <p className="mt-3 max-w-lg text-lg text-muted-foreground">{tab.body}</p>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="relative mx-auto w-full max-w-[19rem]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: EASE }}
            >
              <PhoneFrame screen={current.screen} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
