import { Mail } from "lucide-react";
import Link from "next/link";

import { WhatsAppIcon } from "@/components/site/icons";
import { Logo } from "@/components/site/logo";
import { nav, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t bg-card">
      <div className="container-page grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-sm">
          <Logo className="h-11" />
          <p className="mt-4 text-muted-foreground">
            تطبيق عربي لإدارة المغاسل الصغيرة، يعمل بدون إنترنت، وبياناتك تبقى على جوالك.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            هذا الموقع بلا إحصاءات ولا ملفات تعريف ارتباط (كوكيز).
          </p>
        </div>

        <nav aria-label="روابط التذييل">
          <h2 className="text-sm font-medium text-foreground">الموقع</h2>
          <ul className="mt-3 space-y-1">
            {[...nav, { href: "/terms/", label: "شروط الاستخدام" }].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-9 items-center text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-medium text-foreground">تواصل معنا</h2>
          <ul className="mt-3 space-y-1">
            <li>
              <a
                href={site.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-9 items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
              >
                <WhatsAppIcon className="size-4" />
                واتساب
              </a>
            </li>
            <li>
              <a
                href={site.email.href}
                className="inline-flex min-h-9 items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="size-4" aria-hidden />
                <span className="ltr-iso">{site.email.address}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container-page flex flex-col gap-1 pt-5 pb-24 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <span className="ltr-iso">2026</span> {site.name}. جميع الحقوق محفوظة. تطوير{" "}
            <a
              href={site.developer.href}
              target="_blank"
              rel="noopener noreferrer"
              className="ltr-iso inline-block py-1 font-medium text-foreground underline underline-offset-4 transition-colors hover:text-primary"
            >
              {site.developer.name}
            </a>
          </p>
          <p>مجاني في الإصدار الأول. {site.playStatus}.</p>
        </div>
      </div>
    </footer>
  );
}
