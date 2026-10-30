import { cn } from "@/lib/utils";

/**
 * The signature detail: a laundry tag, like the storage labels («رف ٢»،
 * «كيس ١٥») the app attaches to items. Used as a quiet section marker.
 */
export function Tag({
  children,
  className,
  tone = "default",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "inverse";
}) {
  return (
    <span
      className={cn(
        "relative inline-flex items-center gap-2 rounded-e-md rounded-s-[999px] border py-1 ps-3 pe-3 text-sm font-medium",
        tone === "default" && "border-primary/25 bg-card text-primary",
        tone === "inverse" && "border-white/25 bg-white/10 text-white",
        className,
      )}
    >
      {/* The punched hole of the tag. */}
      <span
        aria-hidden
        className={cn(
          "size-2 rounded-full border",
          tone === "default" ? "border-primary/40 bg-background" : "border-white/50 bg-transparent",
        )}
      />
      {children}
    </span>
  );
}
