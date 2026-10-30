"use client";

import { motion } from "motion/react";

import { WhatsAppIcon } from "@/components/site/icons";
import { site } from "@/content/site";

export function WhatsAppFab() {
  return (
    <motion.a
      href={site.whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="راسلنا على واتساب (يفتح في نافذة جديدة)"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-5 end-5 z-30 grid size-14 place-items-center rounded-full bg-whatsapp text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 active:scale-95 print:hidden"
    >
      <WhatsAppIcon className="size-7" />
    </motion.a>
  );
}
