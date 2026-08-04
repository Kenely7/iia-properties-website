import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Bath,
  BedDouble,
  Calendar,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Ruler,
  Trees,
} from "lucide-react";
import Section from "@/components/Section";
import StatusBadge from "@/components/StatusBadge";
import ImageGallery from "@/components/ImageGallery";
import InquiryForm from "@/components/InquiryForm";
import { getPropertyById } from "@/lib/properties.server";
import { formatPrice } from "@/lib/utils";

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const property = await getPropertyById(id);

  if (!property) notFound();

  const keyDetails = [
    { icon: BedDouble, label: "Bedrooms", value: property.beds },
    { icon: Bath, label: "Bathrooms", value: property.baths },
    { icon: Ruler, label: "Square Feet", value: property.sqft.toLocaleString() },
    { icon: Trees, label: "Lot Size", value: property.lotSize },
    { icon: Calendar, label: "Year Built", value: property.yearBuilt },
  ];

  return (
    <Section containerClassName="max-w-7xl">
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/properties" className="hover:text-brand-blue">
          Properties
        </Link>{" "}
        / <span className="text-slate-700">{property.title}</span>
      </nav>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px]">
        <div>
          <ImageGallery images={property.images} alt={property.title} />

          <div className="mt-8">
            <div className="flex flex-wrap items-center gap-3">
              <StatusBadge status={property.status} />
              <span className="text-sm text-slate-500">{property.propertyType}</span>
            </div>
            <h1 className="mt-3 font-heading text-3xl font-bold text-slate-900 sm:text-4xl">
              {property.title}
            </h1>
            <p className="mt-2 flex items-center gap-1.5 text-slate-500">
              <MapPin className="h-4 w-4" />
              {property.address}, {property.city}, {property.state} {property.zip}
            </p>
            <p className="mt-4 font-heading text-3xl font-bold text-brand-blue">
              {formatPrice(property.price, property.status)}
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 rounded-2xl bg-brand-gray p-6 sm:grid-cols-5">
            {keyDetails.map((detail) => (
              <div key={detail.label} className="text-center">
                <detail.icon className="mx-auto h-5 w-5 text-brand-blue" />
                <p className="mt-2 text-sm font-semibold text-slate-900">
                  {detail.value}
                </p>
                <p className="text-xs text-slate-500">{detail.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <h2 className="font-heading text-xl font-bold text-slate-900">
              Description
            </h2>
            <p className="mt-3 leading-relaxed text-slate-600">
              {property.description}
            </p>
          </div>

          <div className="mt-10">
            <h2 className="font-heading text-xl font-bold text-slate-900">
              Amenities
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {property.amenities.map((amenity) => (
                <div key={amenity} className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-green" />
                  {amenity}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h2 className="font-heading text-xl font-bold text-slate-900">
              Location
            </h2>
            <div className="mt-4 flex h-64 flex-col items-center justify-center gap-2 rounded-2xl bg-brand-gray text-slate-400">
              <MapPin className="h-8 w-8" />
              <p className="text-sm">
                Map view of {property.address}, {property.city} coming soon
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-full">
                <Image
                  src={property.agent.photo}
                  alt={property.agent.name}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-heading font-bold text-slate-900">
                  {property.agent.name}
                </p>
                <p className="text-sm text-slate-500">Listing Agent</p>
              </div>
            </div>

            <div className="mt-5 space-y-2 text-sm text-slate-600">
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand-blue" />
                {property.agent.phone}
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand-blue" />
                {property.agent.email}
              </p>
            </div>

            <a
              href={`mailto:${property.agent.email}`}
              className="mt-5 block w-full rounded-xl bg-brand-blue px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-blue-dark"
            >
              Contact Agent
            </a>
          </div>

          <InquiryForm
            heading="Interested in this property?"
            context={`Regarding: ${property.title}`}
          />
        </div>
      </div>
    </Section>
  );
}
