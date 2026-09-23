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
import Testimonials from "@/components/Testimonials";
import FeaturedSlideshow from "@/components/FeaturedSlideshow";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";
import { getAllProperties } from "@/lib/properties.server";

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
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              Iwuba Ifediora &amp; Associates
            </span>
            <h1 className="mt-3 font-heading text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Property Solutions You Can Trust
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
              A registered firm of Estate Surveyors &amp; Valuers, helping you
              buy, sell, rent and invest in property across Enugu State with
              confidence — backed by over a decade of professional integrity.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/services#service-inquiry" variant="outline" size="lg">
                Request a Valuation
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} className="mx-auto mt-10 max-w-4xl">
            <SearchBar />
          </FadeIn>
        </div>
      </section>

      {/* Company Summary + Featured Properties Slideshow */}
      <Section>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-blue">
              Who We Are
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-slate-900 sm:text-4xl">
              Iwuba Ifediora &amp; Associates
            </h2>

            <div className="mt-6 space-y-4 text-slate-600">
              <p>
                Iwuba Ifediora &amp; Associates (IIA) is a registered firm of
                Estate Surveyors &amp; Valuers, proudly accredited by NIESV
                and ESVARBON. Since our founding on the 18th of September
                2012, we have grown from a dedicated practice in Enugu into a
                trusted name across the South-East, built entirely on
                professional expertise, honest dealing, and long-standing
                relationships with the clients we serve.
              </p>
              <p>
                Our work spans property valuation for mortgage, insurance,
                litigation, taxation and investment purposes; full-service
                property and estate management; sales and letting agency;
                land and estate development advisory; professional
                documentation including Certificate of Occupancy processing
                and title perfection; and strategic real estate advisory for
                institutions, banks, corporations and government bodies.
                Whatever stage of the property journey you are on, there is a
                dedicated team behind you at IIA.
              </p>
              <p>
                We operate on a simple doctrine: honesty and devotion in
                every assignment, and outstanding professional service
                towards every client&apos;s interest in land and landed
                property. It is this discipline — technical expertise paired
                with genuine hands-on experience — that has shaped our
                reputation, and it is the same standard we bring to every
                property listed on this site.
              </p>
              <p>
                Looking ahead, our vision is to become Africa&apos;s most
                trusted and innovative real estate advisory institution — a
                benchmark for professional excellence and enduring value, not
                just in Enugu, but across the continent.
              </p>
            </div>

            <div className="mt-8">
              <Button href="/about" variant="secondary" size="lg">
                Read More About Us
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <FeaturedSlideshow properties={featured} />
            <div className="mt-6 text-center lg:text-left">
              <Button href="/properties" size="lg">
                View All Properties
              </Button>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Services Overview */}
      <Section className="bg-brand-gray">
        <FadeIn>
          <SectionHeading
            eyebrow="What We Do"
            title="We Offer the Following Services"
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
            Search no further. Let us help you today — whether you&apos;re
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
