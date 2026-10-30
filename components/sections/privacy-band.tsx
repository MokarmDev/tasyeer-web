import { ArrowLeft, CloudUpload, EyeOff, Smartphone } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/site/reveal";
import { Tag } from "@/components/site/tag";

const points = [
  {
    icon: Smartphone,
    title: "على جوالك فقط",
    body: "الطلبات والعملاء والفواتير والدفعات في قاعدة بيانات داخل جوالك. لا حساب ولا خادم عندنا.",
  },
  {
    icon: EyeOff,
    title: "لا إحصاءات ولا تتبع",
    body: "لا يجمع التطبيق أي بيانات عن استخدامك، ولا نستطيع رؤية بياناتك.",
  },
  {
    icon: CloudUpload,
    title: "تخرج بقرارك أنت",
    body: "فاتورة تشاركها، أو نسخة تصدّرها، أو رفع اختياري إلى Google Drive في حسابك أنت.",
  },
];

export function PrivacyBand() {
  return (
    <section aria-labelledby="privacy-band-title" className="container-page py-14 md:py-20">
      <Reveal className="relative overflow-hidden rounded-2xl bg-primary px-6 py-12 text-primary-foreground md:px-12 md:py-16">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.12] [background-image:radial-gradient(currentColor_1.2px,transparent_1.2px)] [background-size:22px_22px] [mask-image:linear-gradient(to_left,black,transparent_70%)]"
        />
        <div className="relative grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-14">
          <div>
            <Tag tone="inverse" className="dark:border-black/20 dark:bg-black/5 dark:text-primary-foreground">
              الخصوصية
            </Tag>
            <h2 id="privacy-band-title" className="mt-5 text-[clamp(1.9rem,4.5vw,3rem)] leading-tight font-bold">
              بياناتك ملكك، ومحفوظة على جوالك
            </h2>
            <Link
              href="/privacy/"
              className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-md font-medium underline decoration-current/40 underline-offset-8 hover:decoration-current focus-visible:outline-current"
            >
              اقرأ سياسة الخصوصية
              <ArrowLeft className="size-4" aria-hidden />
            </Link>
          </div>
          <ul className="grid gap-6">
            {points.map(({ icon: Icon, title, body }) => (
              <li key={title} className="flex gap-4">
                <span
                  aria-hidden
                  className="grid size-11 shrink-0 place-items-center rounded-lg bg-white/12 dark:bg-black/10"
                >
                  <Icon className="size-5" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="text-lg font-bold">{title}</h3>
                  <p className="mt-1 opacity-90">{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
