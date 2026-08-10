import {
  Award,
  Briefcase,
  Building2,
  FileCheck2,
  Key,
  Lightbulb,
  Map,
  Scale,
  ShieldCheck,
  Smile,
  TrendingUp,
} from "lucide-react";
import Section, { SectionHeading } from "@/components/Section";
import SearchBar from "@/components/SearchBar";
import PropertyCard from "@/components/PropertyCard";
import Testimonials from "@/components/Testimonials";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";
import { getAllProperties } from "@/lib/properties.server";

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

const coreValues = [
  { icon: ShieldCheck, title: "Professionalism" },
  { icon: Scale, title: "Integrity" },
  { icon: Award, title: "Excellence" },
  { icon: Briefcase, title: "Accountability" },
  { icon: TrendingUp, title: "Results" },
];

const FOUNDING_YEAR = 2012;
const yearsInBusiness = new Date().getFullYear() - FOUNDING_YEAR;

const stats = [
  { label: "Established", value: `${FOUNDING_YEAR}` },
  { label: "Years in Business", value: `${yearsInBusiness}+` },
  { label: "Core Service Areas", value: "6" },
  { label: "Head Office", value: "Enugu, NG" },
];

export default async function HomePage() {
  const properties = await getAllProperties();
  const featured = properties.filter((p) => p.featured).slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-blue-dark via-brand-blue to-slate-800 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=60')] bg-cover bg-center opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-20 sm:px-6 sm:pb-28 sm:pt-28 lg:px-8">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Welcome to IIA Properties
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
              Iwuba Ifediora & Associates is fully committed to helping you
              find and secure the best real estate deals to meet your need.
              No need to sweat — let us help you today.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/contact" variant="outline" size="lg">
                Request a Valuation
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} className="mx-auto mt-10 max-w-4xl">
            <SearchBar />
          </FadeIn>
        </div>
      </section>

      {/* Featured Properties */}
      <Section>
        <FadeIn>
          <SectionHeading
            eyebrow="Handpicked Listings"
            title="Featured Properties"
            description="A curated mix of homes for sale and for rent, updated regularly by our team."
          />
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((property, i) => (
            <FadeIn key={property.id} delay={i * 0.05}>
              <PropertyCard property={property} />
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-12 text-center">
          <Button href="/properties" size="lg">
            View All Properties
          </Button>
        </FadeIn>
      </Section>

      {/* Services Overview */}
      <Section className="bg-brand-gray">
        <FadeIn>
          <SectionHeading
            eyebrow="What We Do"
            title="IIA Properties Offers the Following Services"
            description="Registered Estate Surveyors & Valuers serving property sales, rentals, and the full range of estate services below."
          />
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.08}>
              <div className="h-full rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition-shadow hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10">
                  <service.icon className="h-6 w-6 text-brand-blue" />
                </div>
                <h3 className="mt-4 font-heading font-bold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{service.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-10 text-center">
          <Button href="/services" variant="secondary" size="lg">
            Learn More About Our Services
          </Button>
        </FadeIn>
      </Section>

      {/* Core Values */}
      <Section>
        <FadeIn>
          <SectionHeading eyebrow="Why Choose Us" title="Our Core Values" />
        </FadeIn>

        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {coreValues.map((value, i) => (
            <FadeIn key={value.title} delay={i * 0.08} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue text-white">
                <value.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-heading font-bold text-slate-900">
                {value.title}
              </h3>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Stats */}
      <Section className="bg-brand-blue text-white">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.08} className="text-center">
              <p className="font-heading text-4xl font-bold sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-white/80">{stat.label}</p>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-brand-gray">
        <FadeIn>
          <SectionHeading eyebrow="Testimonials" title="What Our Clients Say" />
        </FadeIn>
        <FadeIn delay={0.1} className="mt-12">
          <Testimonials />
        </FadeIn>
      </Section>

      {/* CTA */}
      <Section className="bg-slate-900 text-white">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <Smile className="mx-auto mb-4 h-10 w-10 text-brand-blue-light" />
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">
            Ready to Find Your Dream Home?
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            No need to sweat. Let us help you today — whether you&apos;re
            buying, renting, or managing property.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/properties" size="lg">
              Browse Properties
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
