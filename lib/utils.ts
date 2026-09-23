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
