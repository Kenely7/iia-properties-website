"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const serviceOptions = [
  "Property Valuation",
  "Property & Estate Management",
  "Letting & Agency",
  "Land & Estate Development",
  "Professional Documentation",
  "Real Estate Advisory",
];

export default function InquiryForm({
  heading = "Send an Inquiry",
  context,
  showServiceDropdown = false,
  submitLabel = "Send Message",
}: {
  heading?: string;
  context?: string;
  showServiceDropdown?: boolean;
  submitLabel?: string;
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: serviceOptions[0],
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 700));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl bg-white p-10 text-center shadow-sm ring-1 ring-slate-100">
        <CheckCircle2 className="h-12 w-12 text-brand-green" />
        <h3 className="mt-4 font-heading text-xl font-bold text-slate-900">
          Thank you!
        </h3>
        <p className="mt-2 text-sm text-slate-600">
          Your message has been received. A member of our team will be in
          touch shortly.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-800 outline-none focus:border-brand-blue";
  const labelClass = "mb-1.5 block text-sm font-medium text-slate-700";

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-8">
      <h3 className="font-heading text-xl font-bold text-slate-900">{heading}</h3>
      {context && <p className="mt-1 text-sm text-slate-500">{context}</p>}

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className={labelClass}>Name</label>
            <input
              required
              className={inputClass}
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              placeholder="Jane Doe"
            />
          </div>
          <div>
            <label className={labelClass}>Phone</label>
            <input
              className={inputClass}
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              placeholder="(555) 555-0100"
            />
          </div>
        </div>

        <div>
          <label className={labelClass}>Email</label>
          <input
            required
            type="email"
            className={inputClass}
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="jane@example.com"
          />
        </div>

        {showServiceDropdown && (
          <div>
            <label className={labelClass}>Service Needed</label>
            <select
              className={inputClass}
              value={form.service}
              onChange={(e) => update("service", e.target.value)}
            >
              {serviceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        )}

        <div>
          <label className={labelClass}>Message</label>
          <textarea
            required
            rows={4}
            className={inputClass}
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            placeholder="Tell us what you're looking for..."
          />
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full rounded-xl bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-blue-dark disabled:opacity-50"
        >
          {status === "submitting" ? "Sending..." : submitLabel}
        </button>
      </form>
    </div>
  );
}
