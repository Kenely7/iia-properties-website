import { cn } from "@/lib/utils";

export type BadgeStatus = "for-sale" | "for-rent" | "sold" | "rented";

const styles: Record<BadgeStatus, string> = {
  "for-sale": "bg-brand-blue text-white",
  "for-rent": "bg-brand-green text-white",
  sold: "bg-slate-600 text-white",
  rented: "bg-brand-gold text-white",
};

const labels: Record<BadgeStatus, string> = {
  "for-sale": "For Sale",
  "for-rent": "For Rent",
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
