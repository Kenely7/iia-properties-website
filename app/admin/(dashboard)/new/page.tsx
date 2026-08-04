import PropertyForm from "@/components/admin/PropertyForm";

export default function AddPropertyPage() {
  return (
    <div>
      <h1 className="font-heading text-2xl font-bold text-slate-900">
        Add New Property
      </h1>
      <p className="mt-1 text-sm text-slate-500">
        This listing will appear immediately on the public Properties page.
      </p>

      <div className="mt-6">
        <PropertyForm />
      </div>
    </div>
  );
}
