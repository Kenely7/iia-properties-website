"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

// Placeholder quotes — swap in real client testimonials when available.
const testimonials = [
  {
    quote:
      "IIA Properties made selling our home effortless. Their team handled everything professionally from valuation to closing.",
    name: "Property Seller",
    role: "Enugu, Nigeria",
  },
  {
    quote:
      "As a first-time tenant, I had a lot of questions. The team was patient, responsive, and found me the right apartment within my budget.",
    name: "Tenant",
    role: "Enugu, Nigeria",
  },
  {
    quote:
      "Their property management service has been reliable and transparent, and always on top of maintenance and rent collection.",
    name: "Property Investor",
    role: "Enugu, Nigeria",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  function next() {
    setIndex((i) => (i + 1) % testimonials.length);
  }
  function prev() {
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  }

  const current = testimonials[index];

  return (
    <div className="relative mx-auto max-w-3xl">
      <Quote className="mx-auto mb-4 h-10 w-10 text-brand-blue/30" />
      <div className="relative min-h-[180px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35 }}
            className="text-center"
          >
            <p className="text-xl font-medium leading-relaxed text-slate-700">
              &ldquo;{current.quote}&rdquo;
            </p>
            <p className="mt-6 font-heading font-bold text-slate-900">
              {current.name}
            </p>
            <p className="text-sm text-slate-500">{current.role}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          onClick={prev}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:border-brand-blue hover:text-brand-blue"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-brand-blue" : "w-2 bg-slate-300"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:border-brand-blue hover:text-brand-blue"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
