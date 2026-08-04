"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

const propertyTypes = [
  "Any Type",
  "House",
  "Apartment",
  "Villa",
  "Townhouse",
  "Penthouse",
  "Condo",
  "Land",
];

const priceRanges = [
  { label: "Any Price", value: "" },
  { label: "Under ₦800M / ₦2.5M mo", value: "0-800000000" },
  { label: "₦800M - ₦1.5B / ₦2.5M - ₦5M mo", value: "800000000-1500000000" },
  { label: "₦1.5B+ / ₦5M+ mo", value: "1500000000-999999999999" },
];

export default function SearchBar({ className }: { className?: string }) {
  const router = useRouter();
  const [status, setStatus] = useState<"for-sale" | "for-rent">("for-sale");
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState(propertyTypes[0]);
  const [priceRange, setPriceRange] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    params.set("status", status);
    if (location) params.set("location", location);
    if (propertyType !== "Any Type") params.set("type", propertyType);
    if (priceRange) params.set("price", priceRange);
    router.push(`/properties?${params.toString()}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "w-full rounded-2xl bg-white p-4 shadow-xl sm:p-5",
        className
      )}
    >
      <div className="mb-4 flex gap-2">
        {(["for-sale", "for-rent"] as const).map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setStatus(option)}
            className={cn(
              "rounded-lg px-5 py-2 text-sm font-semibold transition-colors",
              status === option
                ? "bg-brand-blue text-white"
                : "bg-brand-gray text-slate-600 hover:bg-slate-200"
            )}
          >
            {option === "for-sale" ? "For Sale" : "For Rent"}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <input
          type="text"
          placeholder="Location (city, zip...)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none focus:border-brand-blue"
        />

        <select
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
          className="rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none focus:border-brand-blue"
        >
          {propertyTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        <select
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          className="rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none focus:border-brand-blue"
        >
          {priceRanges.map((range) => (
            <option key={range.label} value={range.value}>
              {range.label}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="flex items-center justify-center gap-2 rounded-lg bg-brand-blue px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-blue-dark"
        >
          <Search className="h-4 w-4" />
          Search
        </button>
      </div>
    </form>
  );
}
