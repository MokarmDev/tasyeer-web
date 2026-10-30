import { PlayIcon } from "@/components/site/icons";
import { cn } from "@/lib/utils";

/**
 * Not a link: the app is not on Google Play yet. Styled like a store badge
 * so the promise is clear, but announced as a status, not a control.
 */
export function PlayBadge({ className, tone = "default" }: { className?: string; tone?: "default" | "inverse" }) {
  return (
    <span
      role="status"
      className={cn(
        "inline-flex h-14 items-center gap-3 rounded-xl border ps-4 pe-5",
        tone === "default" && "border-foreground/15 bg-foreground text-background",
        tone === "inverse" && "border-white/20 bg-white text-[#164e49]",
        className,
      )}
    >
      <PlayIcon className="size-6 shrink-0" />
      <span className="flex flex-col leading-tight">
        <span className="text-xs opacity-80">قريبًا على</span>
        <span className="ltr-iso text-start text-lg font-medium" lang="en">
          Google Play
        </span>
      </span>
    </span>
  );
}
