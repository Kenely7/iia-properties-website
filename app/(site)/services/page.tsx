import {
  Briefcase,
  Building2,
  CheckCircle2,
  HandCoins,
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
    title: "Valuations",
    tagline: "Valuation for all purposes",
    description:
      "Our valuation services cover the gamut of business and finance, accounting, investment decisions, litigation, taxation, and insurance.",
    points: [
      "Business & Finance — sale and purchase of property, mortgage, mergers and privatization, sale-leaseback",
      "Accounting — balance sheets, liquidation, partnership",
      "Investment Decision — rental valuation, redevelopment, feasibility and viability",
      "Litigation — compulsory acquisition, injurious affection, fraud and damage cases, division of property",
      "Taxation — valuation for rating",
      "Insurance — fire, theft, and loss insurance",
    ],
  },
  {
    icon: Building2,
    title: "Property Management",
    tagline: "Residential and commercial property management",
    description:
      "We offer management services for a broad range of properties — residential rental apartments (town homes, detached houses, duplexes) to commercial properties (retail outlets, high-rise buildings) — aiming for the maximum return while maintaining your investment at a high standard.",
    points: [
      "Property maintenance and services",
      "Rent collection and lease management",
      "Agency/brokerage — sales, leasing, marketing",
      "Administration and dispute resolution",
      "Hand-over and inspection procedures",
      "Reporting and financial management",
    ],
  },
  {
    icon: Briefcase,
    title: "Property Development",
    tagline: "Development advisory services",
    description:
      "Our vast experience in market trends for landed property — open market value, demand and supply forces, value prospects, and land use — equips us to guide clients toward an eventual success in developing needed shelter for varying purposes.",
    points: [
      "Advisory on new property development",
      "Redevelopment and refurbishment of existing accommodation",
      "Guidance through change-of-purpose and related legislation",
      "Guidance toward the highest and best use of an investment",
    ],
  },
  {
    icon: HandCoins,
    title: "Business Development",
    tagline: "Coordinating the pillars of real estate business",
    description:
      "We deal with the pillars of real estate business that require better coordination and cooperation among developers, real estate promoters, brokers and middlemen, financiers, and property owners.",
    points: [],
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
              Iwuba Ifediora & Associates (IIA) is a registered firm of
              Estate Surveyors & Valuers versed in valuation for all
              purposes, property management, agency, and property
              development consulting.
            </p>
          </FadeIn>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10">
                  <service.icon className="h-6 w-6 text-brand-blue" />
                </div>
                <span className="mt-4 block text-sm font-semibold uppercase tracking-wider text-brand-blue">
                  {service.tagline}
                </span>
                <h2 className="mt-1 font-heading text-2xl font-bold text-slate-900">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm text-slate-600">{service.description}</p>

                {service.points.length > 0 && (
                  <ul className="mt-5 space-y-2">
                    {service.points.map((point) => (
                      <li key={point} className="flex gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Inquiry Form */}
      <Section className="bg-brand-gray">
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
