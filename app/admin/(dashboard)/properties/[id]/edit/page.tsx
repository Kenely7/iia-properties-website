import { notFound } from "next/navigation";
import PropertyForm from "@/components/admin/PropertyForm";
import { getPropertyById } from "@/lib/properties.server";

export default async function EditPropertyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const property = await getPropertyById(id);

  if (!property) notFound();

  return (
    <div>
      <h1 className="font-heading text-2xl font-bold text-slate-900">
        Edit Property
      </h1>
      <p className="mt-1 text-sm text-slate-500">
        Update details for &ldquo;{property.title}&rdquo;.
      </p>

      <div className="mt-6">
        <PropertyForm initialData={property} />
      </div>
    </div>
  );
}
