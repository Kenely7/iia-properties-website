"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { NewProperty, Property, PropertyStatus } from "@/lib/types";

const propertyTypes = [
  "House",
  "Apartment",
  "Villa",
  "Townhouse",
  "Penthouse",
  "Condo",
  "Land",
  "Commercial",
];

interface PropertyFormProps {
  initialData?: Property;
}

function toFormState(data?: Property) {
  return {
    title: data?.title ?? "",
    description: data?.description ?? "",
    status: data?.status ?? ("for-sale" as PropertyStatus),
    price: data?.price?.toString() ?? "",
    address: data?.address ?? "",
    city: data?.city ?? "",
    state: data?.state ?? "",
    zip: data?.zip ?? "",
    propertyType: data?.propertyType ?? propertyTypes[0],
    beds: data?.beds?.toString() ?? "",
    baths: data?.baths?.toString() ?? "",
    sqft: data?.sqft?.toString() ?? "",
    lotSize: data?.lotSize ?? "",
    yearBuilt: data?.yearBuilt?.toString() ?? "",
    amenities: data?.amenities?.join(", ") ?? "",
    images: data?.images?.join("\n") ?? "",
    agentName: data?.agent?.name ?? "",
    agentPhone: data?.agent?.phone ?? "",
    agentEmail: data?.agent?.email ?? "",
    agentPhoto: data?.agent?.photo ?? "https://i.pravatar.cc/300?img=5",
    featured: data?.featured ?? false,
  };
}

export default function PropertyForm({ initialData }: PropertyFormProps) {
  const router = useRouter();
  const isEdit = Boolean(initialData);
  const [form, setForm] = useState(toFormState(initialData));
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!form.title || !form.address || !form.price) {
      setError("Title, address, and price are required.");
      return;
    }

    const payload: NewProperty = {
      title: form.title,
      description: form.description,
      status: form.status,
      price: Number(form.price),
      address: form.address,
      city: form.city,
      state: form.state,
      zip: form.zip,
      propertyType: form.propertyType,
      beds: Number(form.beds) || 0,
      baths: Number(form.baths) || 0,
      sqft: Number(form.sqft) || 0,
      lotSize: form.lotSize || "N/A",
      yearBuilt: Number(form.yearBuilt) || new Date().getFullYear(),
      amenities: form.amenities
        .split(",")
        .map((a) => a.trim())
        .filter(Boolean),
      images: form.images
        .split("\n")
        .map((i) => i.trim())
        .filter(Boolean),
      agent: {
        name: form.agentName,
        phone: form.agentPhone,
        email: form.agentEmail,
        photo: form.agentPhoto,
      },
      featured: form.featured,
    };

    if (payload.images.length === 0) {
      payload.images = [
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
      ];
    }

    setSubmitting(true);
    const res = await fetch(
      isEdit ? `/api/properties/${initialData!.id}` : "/api/properties",
      {
        method: isEdit ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );
    setSubmitting(false);

    if (!res.ok) {
      setError("Something went wrong saving this listing.");
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  const inputClass =
    "w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-800 outline-none focus:border-brand-blue";
  const labelClass = "mb-1.5 block text-sm font-medium text-slate-700";

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {error && (
        <div className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <section className="grid grid-cols-1 gap-5 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className={labelClass}>Title</label>
          <input
            className={inputClass}
            value={form.title}
            onChange={(e) => update("title", e.target.value)}
            placeholder="Modern Hillside Villa"
          />
        </div>

        <div className="sm:col-span-2">
          <label className={labelClass}>Description</label>
          <textarea
            className={inputClass}
            rows={4}
            value={form.description}
            onChange={(e) => update("description", e.target.value)}
            placeholder="Describe the property..."
          />
        </div>

        <div>
          <label className={labelClass}>Status</label>
          <select
            className={inputClass}
            value={form.status}
            onChange={(e) => update("status", e.target.value as PropertyStatus)}
          >
            <option value="for-sale">For Sale</option>
            <option value="for-rent">For Rent</option>
          </select>
        </div>

        <div>
          <label className={labelClass}>
            Price {form.status === "for-rent" && "(per month)"}
          </label>
          <input
            type="number"
            className={inputClass}
            value={form.price}
            onChange={(e) => update("price", e.target.value)}
            placeholder="500000"
          />
        </div>

        <div>
          <label className={labelClass}>Property Type</label>
          <select
            className={inputClass}
            value={form.propertyType}
            onChange={(e) => update("propertyType", e.target.value)}
          >
            {propertyTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2 pt-6">
          <input
            id="featured"
            type="checkbox"
            checked={form.featured}
            onChange={(e) => update("featured", e.target.checked)}
            className="h-4 w-4 rounded border-slate-300 text-brand-blue focus:ring-brand-blue"
          />
          <label htmlFor="featured" className="text-sm text-slate-700">
            Show in Featured Properties on Home page
          </label>
        </div>
      </section>

      <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
        <h3 className="mb-4 font-heading font-bold text-slate-900">Location</h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <label className={labelClass}>Address</label>
            <input
              className={inputClass}
              value={form.address}
              onChange={(e) => update("address", e.target.value)}
              placeholder="482 Ridgeview Drive"
            />
          </div>
          <div>
            <label className={labelClass}>City</label>
            <input
              className={inputClass}
              value={form.city}
              onChange={(e) => update("city", e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>State</label>
            <input
              className={inputClass}
              value={form.state}
              onChange={(e) => update("state", e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>Zip</label>
            <input
              className={inputClass}
              value={form.zip}
              onChange={(e) => update("zip", e.target.value)}
            />
          </div>
        </div>
      </section>

      <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
        <h3 className="mb-4 font-heading font-bold text-slate-900">Details</h3>
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          <div>
            <label className={labelClass}>Beds</label>
            <input
              type="number"
              className={inputClass}
              value={form.beds}
              onChange={(e) => update("beds", e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>Baths</label>
            <input
              type="number"
              className={inputClass}
              value={form.baths}
              onChange={(e) => update("baths", e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>Sqft</label>
            <input
              type="number"
              className={inputClass}
              value={form.sqft}
              onChange={(e) => update("sqft", e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>Lot Size</label>
            <input
              className={inputClass}
              value={form.lotSize}
              onChange={(e) => update("lotSize", e.target.value)}
              placeholder="0.5 acres"
            />
          </div>
          <div>
            <label className={labelClass}>Year Built</label>
            <input
              type="number"
              className={inputClass}
              value={form.yearBuilt}
              onChange={(e) => update("yearBuilt", e.target.value)}
            />
          </div>
        </div>

        <div className="mt-5">
          <label className={labelClass}>Amenities (comma-separated)</label>
          <input
            className={inputClass}
            value={form.amenities}
            onChange={(e) => update("amenities", e.target.value)}
            placeholder="Swimming Pool, Home Theater, Smart Home System"
          />
        </div>

        <div className="mt-5">
          <label className={labelClass}>Image URLs (one per line)</label>
          <textarea
            className={inputClass}
            rows={3}
            value={form.images}
            onChange={(e) => update("images", e.target.value)}
            placeholder="https://images.unsplash.com/..."
          />
        </div>
      </section>

      <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
        <h3 className="mb-4 font-heading font-bold text-slate-900">
          Listing Agent
        </h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label className={labelClass}>Name</label>
            <input
              className={inputClass}
              value={form.agentName}
              onChange={(e) => update("agentName", e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>Phone</label>
            <input
              className={inputClass}
              value={form.agentPhone}
              onChange={(e) => update("agentPhone", e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>Email</label>
            <input
              className={inputClass}
              value={form.agentEmail}
              onChange={(e) => update("agentEmail", e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>Photo URL</label>
            <input
              className={inputClass}
              value={form.agentPhoto}
              onChange={(e) => update("agentPhoto", e.target.value)}
            />
          </div>
        </div>
      </section>

      <div className="flex gap-3">
        <button
          type="submit"
          disabled={submitting}
          className="rounded-xl bg-brand-blue px-8 py-3 text-sm font-semibold text-white hover:bg-brand-blue-dark disabled:opacity-50"
        >
          {submitting ? "Saving..." : isEdit ? "Save Changes" : "Add Property"}
        </button>
        <button
          type="button"
          onClick={() => router.push("/admin")}
          className="rounded-xl border border-slate-200 px-8 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
