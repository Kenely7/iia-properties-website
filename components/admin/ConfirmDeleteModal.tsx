"use client";

import { AlertTriangle } from "lucide-react";

export default function ConfirmDeleteModal({
  propertyTitle,
  onConfirm,
  onCancel,
  isDeleting,
}: {
  propertyTitle: string;
  onConfirm: () => void;
  onCancel: () => void;
  isDeleting?: boolean;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4">
      <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
          <AlertTriangle className="h-6 w-6 text-red-600" />
        </div>
        <h3 className="mt-4 font-heading text-lg font-bold text-slate-900">
          Remove this listing?
        </h3>
        <p className="mt-2 text-sm text-slate-600">
          This will permanently remove <strong>{propertyTitle}</strong> from
          the site. Use this once a property is sold or rented out.
        </p>

        <div className="mt-6 flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={isDeleting}
            className="flex-1 rounded-xl bg-red-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-700 disabled:opacity-50"
          >
            {isDeleting ? "Removing..." : "Remove"}
          </button>
        </div>
      </div>
    </div>
  );
}
