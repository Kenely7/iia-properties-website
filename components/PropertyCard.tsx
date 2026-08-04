"use client";

import Image from "next/image";
import Link from "next/link";
import { Bath, BedDouble, MapPin, Ruler } from "lucide-react";
import StatusBadge from "./StatusBadge";
import { formatPrice } from "@/lib/utils";
import type { Property } from "@/lib/types";
import { motion } from "framer-motion";

export default function PropertyCard({
  property,
  className,
}: {
  property: Property;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className={className}
    >
      <Link
        href={`/properties/${property.id}`}
        className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-md ring-1 ring-slate-100 transition-shadow hover:shadow-xl"
      >
        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src={property.images[0]}
            alt={property.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute left-3 top-3">
            <StatusBadge status={property.status} />
          </div>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <p className="font-heading text-xl font-bold text-brand-blue">
            {formatPrice(property.price, property.status)}
          </p>
          <h3 className="mt-1 line-clamp-1 text-lg font-semibold text-slate-900">
            {property.title}
          </h3>
          <p className="mt-1 flex items-center gap-1 text-sm text-slate-500">
            <MapPin className="h-4 w-4 shrink-0" />
            <span className="line-clamp-1">
              {property.address}, {property.city}, {property.state}
            </span>
          </p>

          <div className="mt-4 flex items-center gap-4 border-t border-slate-100 pt-4 text-sm text-slate-600">
            <span className="flex items-center gap-1.5">
              <BedDouble className="h-4 w-4 text-brand-blue" />
              {property.beds} Beds
            </span>
            <span className="flex items-center gap-1.5">
              <Bath className="h-4 w-4 text-brand-blue" />
              {property.baths} Baths
            </span>
            <span className="flex items-center gap-1.5">
              <Ruler className="h-4 w-4 text-brand-blue" />
              {property.sqft.toLocaleString()} sqft
            </span>
          </div>

          <span className="mt-5 inline-flex items-center justify-center rounded-lg bg-brand-gray px-4 py-2 text-sm font-semibold text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-white">
            View Details
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
