"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import StatusBadge from "./StatusBadge";
import { cn, formatPrice } from "@/lib/utils";
import type { Property } from "@/lib/types";

export default function FeaturedSlideshow({
  properties,
}: {
  properties: Property[];
}) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || properties.length <= 1) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % properties.length);
    }, 6000);
    return () => clearInterval(id);
  }, [paused, properties.length]);

  if (properties.length === 0) return null;

  const property = properties[active];

  function next() {
    setActive((i) => (i + 1) % properties.length);
  }
  function prev() {
    setActive((i) => (i - 1 + properties.length) % properties.length);
  }

  return (
    <div
      className="relative h-[420px] w-full overflow-hidden rounded-3xl shadow-xl ring-1 ring-slate-100 sm:h-[480px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={property.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Link
            href={`/properties/${property.id}`}
            className="group block h-full w-full"
          >
            <Image
              src={property.images[0]}
              alt={property.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            <div className="absolute left-4 top-4">
              <StatusBadge status={property.status} />
            </div>

            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <p className="font-heading text-2xl font-bold">
                {formatPrice(property.price, property.status)}
              </p>
              <h3 className="mt-1 text-lg font-semibold">{property.title}</h3>
              <p className="mt-1 text-sm text-white/80">
                {property.address}, {property.city}, {property.state}
              </p>
              <span className="mt-4 inline-flex items-center justify-center rounded-lg bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur transition-colors group-hover:bg-white group-hover:text-brand-blue">
                View This Property
              </span>
            </div>
          </Link>
        </motion.div>
      </AnimatePresence>

      {properties.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-md hover:bg-white"
            aria-label="Previous featured property"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-md hover:bg-white"
            aria-label="Next featured property"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="absolute right-4 top-4 flex gap-1.5">
            {properties.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActive(i)}
                aria-label={`Show featured property ${i + 1}`}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  i === active ? "w-6 bg-white" : "w-1.5 bg-white/50"
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
