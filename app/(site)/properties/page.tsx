import Section, { SectionHeading } from "@/components/Section";
import PropertiesExplorer from "@/components/PropertiesExplorer";
import { getAllProperties } from "@/lib/properties.server";
import type { PropertyStatus } from "@/lib/types";

export const metadata = {
  title: "Properties | IIA Properties",
};

export default async function PropertiesPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string; location?: string }>;
}) {
  const params = await searchParams;
  const properties = await getAllProperties();

  const validStatuses: PropertyStatus[] = [
    "for-sale",
    "for-rent",
    "joint-venture",
    "private-treaty",
    "sold",
    "rented",
  ];
  const initialStatus: PropertyStatus | "all" = validStatuses.includes(
    params.status as PropertyStatus
  )
    ? (params.status as PropertyStatus)
    : "all";

  return (
    <Section containerClassName="max-w-7xl">
      <SectionHeading
        eyebrow="Listings"
        title="Explore Our Properties"
        description="Browse current homes for sale and rent. Listings update automatically as properties are added or sold."
        center={false}
      />

      <div className="mt-10">
        <PropertiesExplorer
          properties={properties}
          initialStatus={initialStatus}
          initialLocation={params.location ?? ""}
        />
      </div>
    </Section>
  );
}
