import { cn } from "@/lib/utils";
import type { PropertyStatus } from "@/lib/types";

export type BadgeStatus = PropertyStatus;

const styles: Record<BadgeStatus, string> = {
  "for-sale": "bg-brand-blue text-white",
  "for-rent": "bg-brand-green text-white",
  "joint-venture": "bg-brand-gold text-white",
  "private-treaty": "bg-brand-blue-dark text-white",
  sold: "bg-slate-600 text-white",
  rented: "bg-slate-600 text-white",
};

const labels: Record<BadgeStatus, string> = {
  "for-sale": "For Sale",
  "for-rent": "For Rent",
  "joint-venture": "Joint Venture",
  "private-treaty": "Full Closure (Private Treaty)",
  sold: "Sold",
  rented: "Rented",
};

export default function StatusBadge({
  status,
  className,
}: {
  status: BadgeStatus;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-lg px-3 py-1 text-xs font-semibold tracking-wide shadow-sm",
        styles[status],
        className
      )}
    >
      {labels[status]}
    </span>
  );
}
