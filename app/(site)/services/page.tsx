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
      "We tell you what your property is really worth. Whether it's for a bank loan, insurance, a court matter, tax, or an investment decision, our valuations are accurate, independent, and carried out to recognised professional standards.",
  },
  {
    icon: Building2,
    title: "Property & Estate Management",
    description:
      "Own a property but don't have the time to run it day-to-day? We manage it for you — finding and handling tenants, collecting rent, keeping up with repairs, and keeping you updated — so you can enjoy the returns without the stress.",
  },
  {
    icon: Key,
    title: "Letting & Agency",
    description:
      "Looking to buy, sell, or rent a property in Enugu State? We connect you with the right buyers, tenants, or homes. Every property and every client is properly checked first, so you can go ahead with confidence.",
  },
  {
    icon: Map,
    title: "Land & Estate Development",
    description:
      "Planning to develop land or build an estate? We guide you through the whole journey — checking if the project makes good sense, planning the layout, and seeing it through from start to finish.",
  },
  {
    icon: FileCheck2,
    title: "Professional Documentation",
    description:
      "Property paperwork can be confusing. We help you obtain your Certificate of Occupancy, register your deed, and properly perfect your title — done the right way, and fully in line with the law.",
  },
  {
    icon: Lightbulb,
    title: "Real Estate Advisory",
    description:
      "Making a big property or investment decision? Banks, companies, and government bodies trust us for clear, practical advice that helps them decide with confidence.",
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
          title="Need Any of Our Services?"
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
