import clsx, { type ClassValue } from "clsx";
import type { PropertyStatus } from "./types";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatPrice(price: number, status: PropertyStatus) {
  const formatted = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(price);

  return status === "for-rent" || status === "rented"
    ? `${formatted} per annum`
    : formatted;
}

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(iso));
}

// Converts a Google Drive "share" link (the one Drive's Share dialog
// copies, e.g. .../file/d/<id>/view?usp=sharing, or .../open?id=<id>)
// into the direct-image URL format Next/Image needs. Non-Drive URLs,
// and anything that isn't a valid absolute URL, pass through unchanged.
export function normalizeImageUrl(url: string): string {
  const trimmed = url.trim();

  try {
    const parsed = new URL(trimmed);
    if (parsed.hostname === "drive.google.com") {
      const fileMatch = parsed.pathname.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
      const fileId = fileMatch?.[1] || parsed.searchParams.get("id");
      if (fileId) {
        return `https://drive.google.com/uc?export=view&id=${fileId}`;
      }
    }
  } catch {
    // Not a valid absolute URL — leave it as-is.
  }

  return trimmed;
}
