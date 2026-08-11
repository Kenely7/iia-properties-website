import {
  Building2,
  FileCheck2,
  Key,
  Lightbulb,
  Map,
  TrendingUp,
} from "lucide-react";
import Section, { SectionHeading } from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import InquiryForm from "@/components/InquiryForm";

export const metadata = {
  title: "Services | IIA Properties",
};

const services = [
  {
    icon: TrendingUp,
    title: "Property Valuation",
    description:
      "Independent valuations for mortgage, insurance, litigation, taxation and investment purposes, delivered to IVS and NIESV/ESVARBON professional standards.",
  },
  {
    icon: Building2,
    title: "Property & Estate Management",
    description:
      "Full-service management of residential, commercial and mixed-use assets — tenancy administration, rent collection, maintenance oversight and reporting.",
  },
  {
    icon: Key,
    title: "Letting & Agency",
    description:
      "Sales and letting brokerage across Enugu State, connecting verified property with qualified buyers and tenants.",
  },
  {
    icon: Map,
    title: "Land & Estate Development",
    description:
      "Feasibility studies, layout planning and advisory support for land development and estate schemes from acquisition to delivery.",
  },
  {
    icon: FileCheck2,
    title: "Professional Documentation",
    description:
      "Certificate of Occupancy processing, deed registration and title perfection support in line with the Land Use Act 1978 and Enugu State lands administration.",
  },
  {
    icon: Lightbulb,
    title: "Real Estate Advisory",
    description:
      "Strategic advice to institutions, banks, corporations and governments on property and investment decisions.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-blue-dark to-brand-blue py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <FadeIn>
            <h1 className="font-heading text-4xl font-bold sm:text-5xl">
              Our Services
            </h1>
            <p className="mt-4 text-lg text-white/80">
              Registered with NIESV and ESVARBON, IIA has built a reputation
              on professional expertise, trusted relationships and
              disciplined practice — across valuation, property management,
              estate agency, land development and professional advisory.
            </p>
          </FadeIn>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10">
                  <service.icon className="h-6 w-6 text-brand-blue" />
                </div>
                <h2 className="mt-4 font-heading text-xl font-bold text-slate-900">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm text-slate-600">{service.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Inquiry Form */}
      <Section id="service-inquiry" className="bg-brand-gray">
        <SectionHeading
          eyebrow="Get Started"
          title="Request a Quote"
          description="Tell us a bit about your property and which service you're interested in — we'll follow up within one business day."
        />
        <div className="mx-auto mt-10 max-w-xl">
          <InquiryForm
            heading="Service Inquiry"
            showServiceDropdown
            submitLabel="Submit Inquiry"
          />
        </div>
      </Section>
    </>
  );
}
