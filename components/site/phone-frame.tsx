import Image from "next/image";

import { cn } from "@/lib/utils";

/** Screens are 1080x2240 captures (status bar cropped) scaled to 720 wide. */
const SCREEN_W = 720;
const SCREEN_H = 1493;

export type Screen = {
  /** File name in public/screens without extension. */
  src: string;
  /** Optional dark-theme capture, shown when the site is in dark mode. */
  darkSrc?: string;
  alt: string;
};

/**
 * A phone drawn in CSS around an app screenshot. The bezel and status strip
 * are decorative; the screenshot carries the alt text.
 */
export function PhoneFrame({
  screen,
  priority,
  className,
}: {
  screen: Screen;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-[18rem] rounded-[2.75rem] border border-black/10 bg-[#1b2624] p-[9px] shadow-[0_30px_60px_-30px_rgb(22_78_73/0.45)] dark:border-white/10 dark:bg-[#0b1110] dark:shadow-[0_30px_60px_-30px_rgb(0_0_0/0.8)]",
        className,
      )}
    >
      <div className="relative overflow-hidden rounded-[2.2rem] bg-background">
        {/* Status strip with the camera punch-hole. */}
        <div aria-hidden className="relative flex h-7 items-center justify-center bg-[#f6f1e7] dark:bg-[#121a19]">
          <span className="size-2.5 rounded-full bg-[#1b2624]" />
        </div>
        <ScreenImage src={screen.src} alt={screen.alt} priority={priority} className={screen.darkSrc ? "dark:hidden" : undefined} />
        {screen.darkSrc && (
          <ScreenImage src={screen.darkSrc} alt={screen.alt} priority={priority} className="hidden dark:block" />
        )}
      </div>
    </div>
  );
}

function ScreenImage({
  src,
  alt,
  priority,
  className,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Image
      src={`/screens/${src}.webp`}
      alt={alt}
      width={SCREEN_W}
      height={SCREEN_H}
      priority={priority}
      sizes="(min-width: 768px) 288px, 70vw"
      className={cn("block h-auto w-full", className)}
    />
  );
}
