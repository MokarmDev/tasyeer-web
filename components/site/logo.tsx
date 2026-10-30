import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

/** The wordmark, swapped for the light-on-dark artwork in dark mode. */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="تسيير، الصفحة الرئيسية"
      className={cn("inline-flex shrink-0 items-center rounded-md", className)}
    >
      <Image
        src="/brand/logo.png"
        alt=""
        width={733}
        height={237}
        priority
        className="h-full w-auto dark:hidden"
      />
      <Image
        src="/brand/logo-dark.png"
        alt=""
        width={733}
        height={237}
        priority
        className="hidden h-full w-auto dark:block"
      />
    </Link>
  );
}
