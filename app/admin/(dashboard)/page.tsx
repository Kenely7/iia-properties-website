"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Home, Key, Plus, Tag, Clock } from "lucide-react";
import AdminTable from "@/components/admin/AdminTable";
import type { Property } from "@/lib/types";

export default function AdminDashboardPage() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  function loadProperties() {
    return fetch("/api/admin/properties")
      .then((res) => res.json())
      .then((data) => {
        setProperties(data);
        setLoading(false);
      });
  }

  useEffect(() => {
    loadProperties();
  }, []);

  function handleDeleted(id: string) {
    setProperties((prev) => prev.filter((p) => p.id !== id));
  }

  function handleUpdated(updated: Property) {
    setProperties((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
  }

  const pending = properties.filter((p) => !p.published);
  const published = properties.filter((p) => p.published);

  const forSaleCount = properties.filter((p) => p.status === "for-sale").length;
  const forRentCount = properties.filter((p) => p.status === "for-rent").length;

  const stats = [
    { label: "Total Listings", value: properties.length, icon: Tag },
    { label: "Pending Approval", value: pending.length, icon: Clock },
    { label: "For Sale", value: forSaleCount, icon: Home },
    { label: "For Rent", value: forRentCount, icon: Key },
  ];

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-2xl font-bold text-slate-900">
            Property Listings
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Manage all current listings on the public site.
          </p>
        </div>
        <Link
          href="/admin/new"
          className="flex items-center gap-2 rounded-xl bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-blue-dark"
        >
          <Plus className="h-4 w-4" />
          Add New Property
        </Link>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/10">
              <stat.icon className="h-5 w-5 text-brand-blue" />
            </div>
            <div>
              <p className="font-heading text-2xl font-bold text-slate-900">
                {stat.value}
              </p>
              <p className="text-xs text-slate-500">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        {loading ? (
          <div className="rounded-2xl bg-white p-12 text-center text-slate-400 shadow-sm ring-1 ring-slate-100">
            Loading listings...
          </div>
        ) : (
          <div className="space-y-10">
            {pending.length > 0 && (
              <div>
                <h2 className="flex items-center gap-2 font-heading text-lg font-bold text-slate-900">
                  <Clock className="h-5 w-5 text-brand-gold" />
                  Pending Approval ({pending.length})
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  These listings are not visible on the public site until
                  approved and published.
                </p>
                <div className="mt-4">
                  <AdminTable
                    properties={pending}
                    onDeleted={handleDeleted}
                    onUpdated={handleUpdated}
                  />
                </div>
              </div>
            )}

            <div>
              <h2 className="font-heading text-lg font-bold text-slate-900">
                Published Listings ({published.length})
              </h2>
              <div className="mt-4">
                <AdminTable
                  properties={published}
                  onDeleted={handleDeleted}
                  onUpdated={handleUpdated}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
