"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import StatusBadge from "@/components/StatusBadge";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import { formatDate, formatPrice } from "@/lib/utils";
import type { Property } from "@/lib/types";

export default function AdminTable({
  properties,
  onDeleted,
}: {
  properties: Property[];
  onDeleted: (id: string) => void;
}) {
  const [pendingDelete, setPendingDelete] = useState<Property | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  async function handleConfirmDelete() {
    if (!pendingDelete) return;
    setIsDeleting(true);
    const res = await fetch(`/api/properties/${pendingDelete.id}`, {
      method: "DELETE",
    });
    setIsDeleting(false);
    if (res.ok) {
      onDeleted(pendingDelete.id);
      setPendingDelete(null);
    }
  }

  if (properties.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center text-slate-500">
        No listings yet. Add your first property to get started.
      </div>
    );
  }

  return (
    <>
      <div className="overflow-x-auto rounded-2xl bg-white shadow-sm ring-1 ring-slate-100">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="border-b border-slate-100 bg-brand-gray text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-5 py-3">Property</th>
              <th className="px-5 py-3">Status</th>
              <th className="px-5 py-3">Price</th>
              <th className="px-5 py-3">Date Added</th>
              <th className="px-5 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {properties.map((property) => (
              <tr key={property.id} className="hover:bg-slate-50">
                <td className="flex items-center gap-3 px-5 py-3">
                  <div className="relative h-12 w-16 shrink-0 overflow-hidden rounded-lg">
                    <Image
                      src={property.images[0]}
                      alt={property.title}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">{property.title}</p>
                    <p className="text-xs text-slate-500">
                      {property.address}, {property.city}
                    </p>
                  </div>
                </td>
                <td className="px-5 py-3">
                  <StatusBadge status={property.status} />
                </td>
                <td className="px-5 py-3 font-medium text-slate-700">
                  {formatPrice(property.price, property.status)}
                </td>
                <td className="px-5 py-3 text-slate-500">
                  {formatDate(property.dateAdded)}
                </td>
                <td className="px-5 py-3">
                  <div className="flex items-center justify-end gap-2">
                    <Link
                      href={`/admin/properties/${property.id}/edit`}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:border-brand-blue hover:text-brand-blue"
                      aria-label="Edit"
                    >
                      <Pencil className="h-4 w-4" />
                    </Link>
                    <button
                      onClick={() => setPendingDelete(property)}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:border-red-500 hover:text-red-600"
                      aria-label="Delete"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {pendingDelete && (
        <ConfirmDeleteModal
          propertyTitle={pendingDelete.title}
          isDeleting={isDeleting}
          onCancel={() => setPendingDelete(null)}
          onConfirm={handleConfirmDelete}
        />
      )}
    </>
  );
}
