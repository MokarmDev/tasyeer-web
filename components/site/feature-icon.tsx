import {
  Bell,
  ChartColumn,
  Coins,
  DatabaseBackup,
  ReceiptText,
  Shirt,
  UserCog,
  Users,
  Wallet,
  WalletCards,
  type LucideIcon,
} from "lucide-react";

import type { FeatureIcon as FeatureIconName } from "@/content/features";
import { cn } from "@/lib/utils";

const icons: Record<FeatureIconName, LucideIcon> = {
  orders: Shirt,
  invoice: ReceiptText,
  payments: Wallet,
  customers: Users,
  expenses: WalletCards,
  reports: ChartColumn,
  staff: UserCog,
  notify: Bell,
  backup: DatabaseBackup,
  currency: Coins,
};

export function FeatureIcon({ name, className }: { name: FeatureIconName; className?: string }) {
  const Icon = icons[name];
  return (
    <span
      aria-hidden
      className={cn("grid size-11 shrink-0 place-items-center rounded-lg bg-secondary-container text-primary", className)}
    >
      <Icon className="size-5" strokeWidth={1.75} />
    </span>
  );
}
