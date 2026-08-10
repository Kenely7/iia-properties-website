"use client";

import { useMemo, useState } from "react";
import { LayoutGrid, List, SlidersHorizontal } from "lucide-react";
import PropertyCard from "./PropertyCard";
import { cn, formatPrice } from "@/lib/utils";
import type { Property, PropertyStatus } from "@/lib/types";

type StatusFilter = PropertyStatus | "all";
type SortOption = "newest" | "price-asc" | "price-desc";

const propertyTypes = [
  "Duplex",
  "Bungalow",
  "Terrace",
  "Semi-Detached",
  "Flat",
  "Self-Contain",
  "Penthouse",
  "Land",
  "Commercial",
];

const bedOptions = [1, 2, 3, 4];

const priceRanges = [
  { label: "Any Price", min: 0, max: Infinity },
  { label: "Under ₦800M / ₦2.5M p.a.", min: 0, max: 800000000 },
  { label: "₦800M - ₦1.5B / ₦2.5M - ₦5M p.a.", min: 800000000, max: 1500000000 },
  { label: "₦1.5B+ / ₦5M+ p.a.", min: 1500000000, max: Infinity },
];

const PAGE_SIZE = 6;

export default function PropertiesExplorer({
  properties,
  initialStatus = "all",
  initialLocation = "",
}: {
  properties: Property[];
  initialStatus?: StatusFilter;
  initialLocation?: string;
}) {
  const [status, setStatus] = useState<StatusFilter>(initialStatus);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [location, setLocation] = useState(initialLocation);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [minBeds, setMinBeds] = useState<number | null>(null);
  const [priceRangeIndex, setPriceRangeIndex] = useState(0);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    const range = priceRanges[priceRangeIndex];

    let result = properties.filter((p) => {
      if (status !== "all" && p.status !== status) return false;
      if (
        location &&
        !`${p.city} ${p.state} ${p.address}`
          .toLowerCase()
          .includes(location.toLowerCase())
      )
        return false;
      if (selectedTypes.length > 0 && !selectedTypes.includes(p.propertyType))
        return false;
      if (minBeds && p.beds < minBeds) return false;
      if (p.price < range.min || p.price > range.max) return false;
      return true;
    });

    result = [...result].sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
    });

    return result;
  }, [properties, status, location, selectedTypes, minBeds, priceRangeIndex, sortBy]);

  const visible = filtered.slice(0, visibleCount);

  function toggleType(type: string) {
    setVisibleCount(PAGE_SIZE);
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  }

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
      {/* Filter Sidebar */}
      <aside className="lg:sticky lg:top-24 lg:self-start">
        <button
          onClick={() => setFiltersOpen((v) => !v)}
          className="mb-4 flex w-full items-center justify-between rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 lg:hidden"
        >
          <span className="flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </span>
        </button>

        <div
          className={cn(
            "space-y-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100",
            !filtersOpen && "hidden lg:block"
          )}
        >
          <div>
            <h4 className="font-heading font-bold text-slate-900">Status</h4>
            <div className="mt-3 space-y-2">
              {(["all", "for-sale", "for-rent"] as StatusFilter[]).map((option) => (
                <label
                  key={option}
                  className="flex cursor-pointer items-center gap-2 text-sm text-slate-600"
                >
                  <input
                    type="radio"
                    name="status"
                    checked={status === option}
                    onChange={() => {
                      setStatus(option);
                      setVisibleCount(PAGE_SIZE);
                    }}
                    className="h-4 w-4 text-brand-blue focus:ring-brand-blue"
                  />
                  {option === "all"
                    ? "All Listings"
                    : option === "for-sale"
                    ? "For Sale"
                    : "For Rent"}
                </label>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-100 pt-6">
            <h4 className="font-heading font-bold text-slate-900">Location</h4>
            <input
              type="text"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
                setVisibleCount(PAGE_SIZE);
              }}
              placeholder="Area, city, or zip"
              className="mt-3 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-brand-blue"
            />
          </div>

          <div className="border-t border-slate-100 pt-6">
            <h4 className="font-heading font-bold text-slate-900">Price Range</h4>
            <div className="mt-3 space-y-2">
              {priceRanges.map((range, i) => (
                <label
                  key={range.label}
                  className="flex cursor-pointer items-center gap-2 text-sm text-slate-600"
                >
                  <input
                    type="radio"
                    name="price"
                    checked={priceRangeIndex === i}
                    onChange={() => {
                      setPriceRangeIndex(i);
                      setVisibleCount(PAGE_SIZE);
                    }}
                    className="h-4 w-4 text-brand-blue focus:ring-brand-blue"
                  />
                  {range.label}
                </label>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-100 pt-6">
            <h4 className="font-heading font-bold text-slate-900">Bedrooms</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {bedOptions.map((n) => (
                <button
                  key={n}
                  onClick={() => {
                    setMinBeds(minBeds === n ? null : n);
                    setVisibleCount(PAGE_SIZE);
                  }}
                  className={cn(
                    "rounded-lg border px-3 py-1.5 text-sm",
                    minBeds === n
                      ? "border-brand-blue bg-brand-blue text-white"
                      : "border-slate-200 text-slate-600 hover:border-brand-blue"
                  )}
                >
                  {n}+
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-100 pt-6">
            <h4 className="font-heading font-bold text-slate-900">Property Type</h4>
            <div className="mt-3 space-y-2">
              {propertyTypes.map((type) => (
                <label
                  key={type}
                  className="flex cursor-pointer items-center gap-2 text-sm text-slate-600"
                >
                  <input
                    type="checkbox"
                    checked={selectedTypes.includes(type)}
                    onChange={() => toggleType(type)}
                    className="h-4 w-4 rounded text-brand-blue focus:ring-brand-blue"
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* Results */}
      <div>
        <div className="mb-6 flex gap-2 border-b border-slate-200">
          {(["all", "for-sale", "for-rent"] as StatusFilter[]).map((option) => (
            <button
              key={option}
              onClick={() => {
                setStatus(option);
                setVisibleCount(PAGE_SIZE);
              }}
              className={cn(
                "-mb-px border-b-2 px-4 py-3 text-sm font-semibold transition-colors",
                status === option
                  ? "border-brand-blue text-brand-blue"
                  : "border-transparent text-slate-500 hover:text-slate-700"
              )}
            >
              {option === "all" ? "All" : option === "for-sale" ? "For Sale" : "For Rent"}
            </button>
          ))}
        </div>

        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            Showing <span className="font-semibold text-slate-900">{visible.length}</span> of{" "}
            <span className="font-semibold text-slate-900">{filtered.length}</span> properties
          </p>

          <div className="flex items-center gap-3">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 outline-none focus:border-brand-blue"
            >
              <option value="newest">Newest First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>

            <div className="flex overflow-hidden rounded-lg border border-slate-200">
              <button
                onClick={() => setViewMode("grid")}
                className={cn(
                  "flex h-9 w-9 items-center justify-center",
                  viewMode === "grid" ? "bg-brand-blue text-white" : "text-slate-500"
                )}
                aria-label="Grid view"
              >
                <LayoutGrid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={cn(
                  "flex h-9 w-9 items-center justify-center",
                  viewMode === "list" ? "bg-brand-blue text-white" : "text-slate-500"
                )}
                aria-label="List view"
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {visible.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-16 text-center text-slate-500">
            No properties match your filters. Try adjusting your search.
          </div>
        ) : (
          <div
            className={cn(
              "grid gap-8",
              viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"
            )}
          >
            {visible.map((property) =>
              viewMode === "grid" ? (
                <PropertyCard key={property.id} property={property} />
              ) : (
                <ListRow key={property.id} property={property} />
              )
            )}
          </div>
        )}

        {visibleCount < filtered.length && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setVisibleCount((v) => v + PAGE_SIZE)}
              className="rounded-xl bg-brand-blue px-8 py-3 text-sm font-semibold text-white hover:bg-brand-blue-dark"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function ListRow({ property }: { property: Property }) {
  return (
    <a
      href={`/properties/${property.id}`}
      className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-100 transition-shadow hover:shadow-lg sm:flex-row"
    >
      <div
        className="h-56 w-full shrink-0 bg-cover bg-center sm:h-auto sm:w-72"
        style={{ backgroundImage: `url(${property.images[0]})` }}
      />
      <div className="flex flex-1 flex-col justify-center p-6">
        <p className="font-heading text-xl font-bold text-brand-blue">
          {formatPrice(property.price, property.status)}
        </p>
        <h3 className="mt-1 text-lg font-semibold text-slate-900">{property.title}</h3>
        <p className="mt-1 text-sm text-slate-500">
          {property.address}, {property.city}, {property.state}
        </p>
        <div className="mt-3 flex gap-4 text-sm text-slate-600">
          <span>{property.beds} Beds</span>
          <span>{property.baths} Baths</span>
        </div>
      </div>
    </a>
  );
}
