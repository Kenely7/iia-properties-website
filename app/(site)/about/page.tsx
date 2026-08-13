import {
  Award,
  BookOpen,
  Briefcase,
  Building2,
  CheckCircle2,
  Compass,
  FileCheck2,
  Key,
  Lightbulb,
  Map,
  Quote,
  Rocket,
  Scale,
  ShieldCheck,
  Target,
  TrendingUp,
} from "lucide-react";
import Section, { SectionHeading } from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";

export const metadata = {
  title: "About Us | IIA Properties",
};

const foundation = [
  {
    icon: Target,
    eyebrow: "Purpose",
    title: "Why We Exist",
    body: "To help individuals, businesses, institutions and governments make confident property and real estate decisions through trusted professional advice, innovative solutions and exceptional service.",
  },
  {
    icon: Compass,
    eyebrow: "Vision",
    title: "Where We're Going",
    body: "To become Africa's most trusted and innovative real estate advisory institution, setting the benchmark for professional excellence, intelligent solutions and enduring client value.",
  },
  {
    icon: Rocket,
    eyebrow: "Mission",
    title: "How We Deliver",
    body: "We provide world-class estate surveying, valuation, property management, advisory and real estate solutions through exceptional people, intelligent systems and innovative practices that create lasting value for our clients, communities and stakeholders.",
  },
  {
    icon: BookOpen,
    eyebrow: "Philosophy",
    title: "What We Believe",
    body: "We believe that trust is earned through competence, integrity, consistency and service. Therefore, every assignment, every client and every decision matters.",
  },
];

const principles = [
  "People before Profit.",
  "Systems before Scale.",
  "Trust before Transactions.",
  "Quality before Quantity.",
  "Innovation without compromising Professionalism.",
  "Learning never stops.",
  "Leave everything better than you found it.",
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
  { label: "Head Office", value: "Enugu, NG" },
  { label: "Core Service Areas", value: "6" },
];

const aspirations = [
  "Nigeria's most respected valuation practice",
  "The benchmark for property management in South-East Nigeria",
  "A nationally recognized advisory firm",
  "A technology-enabled professional practice",
  "A trusted advisor to governments, banks and corporations",
  "A destination employer for young professionals",
  "A respected industry thought leader",
  "The foundation of a diversified real estate group",
];

const mantra = [
  "Think Professionally.",
  "Serve Exceptionally.",
  "Innovate Continuously.",
  "Execute Relentlessly.",
];

const services = [
  { icon: TrendingUp, title: "Property Valuation" },
  { icon: Building2, title: "Property & Estate Management" },
  { icon: Key, title: "Letting & Agency" },
  { icon: Map, title: "Land & Estate Development" },
  { icon: FileCheck2, title: "Professional Documentation" },
  { icon: Lightbulb, title: "Real Estate Advisory" },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-blue-dark to-brand-blue py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <FadeIn>
            <h1 className="font-heading text-4xl font-bold sm:text-5xl">
              About IIA Properties
            </h1>
            <p className="mt-4 text-lg text-white/80">
              A registered firm of Estate Surveyors & Valuers, growing
              outward from our head office in Enugu, Nigeria.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Company Profile */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-blue">
              IIA Company Profile
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-slate-900">
              Iwuba Ifediora & Associates
            </h2>
            <p className="mt-4 text-slate-600">
              IWUBA IFEDIORA &amp; ASSOCIATES (IIA) is a firm of Estate
              Surveyors &amp; Valuers registered with NIESV and ESVARBON,
              versed in arrays of specializations across valuation for all
              purposes, property management, estate agency, land development
              and professional advisory. IIA has built a reputation on
              professional expertise, trusted relationships and disciplined
              practice.
            </p>
            <p className="mt-4 text-slate-600">
              We employ the doctrinal motto of honesty and devotion in the
              field of Estate Surveying and Valuation towards exceeding the
              expectations of every client, by offering outstanding
              professional services aimed at satisfying their every interest
              in land and landed property.
            </p>
            <p className="mt-4 text-slate-600">
              We take on functional and technical expertise combined with
              hands-on experience, thereby ensuring that our clients receive
              the most effective and professional service. The company was
              established on the 18th of September 2012, with head office at
              Enugu and speedily growing outward to other regions.
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* Purpose / Vision / Mission / Philosophy */}
      <Section className="bg-brand-gray">
        <SectionHeading
          eyebrow="Our Foundation"
          title="Purpose, Vision, Mission & Philosophy"
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {foundation.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10">
                  <item.icon className="h-6 w-6 text-brand-blue" />
                </div>
                <span className="mt-4 block text-sm font-semibold uppercase tracking-wider text-brand-blue">
                  {item.eyebrow}
                </span>
                <h3 className="mt-1 font-heading text-xl font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600">{item.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Our Promise */}
      <Section className="bg-brand-blue text-white">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <Quote className="mx-auto mb-4 h-10 w-10 text-white/60" />
          <span className="text-sm font-semibold uppercase tracking-wider text-white/70">
            Our Promise
          </span>
          <p className="mt-4 font-heading text-2xl font-bold sm:text-3xl">
            &ldquo;Every interaction with IIA will reflect professionalism,
            integrity, competence, innovation and exceptional client
            care.&rdquo;
          </p>
        </FadeIn>
      </Section>

      {/* Guiding Principles */}
      <Section>
        <SectionHeading
          eyebrow="Our Guiding Principles"
          title="What Governs Every Decision"
        />
        <div className="mx-auto mt-12 max-w-2xl space-y-4">
          {principles.map((principle, i) => (
            <FadeIn key={principle} delay={i * 0.05}>
              <div className="flex items-center gap-4 rounded-xl bg-brand-gray p-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-blue font-heading text-sm font-bold text-white">
                  {i + 1}
                </span>
                <p className="font-medium text-slate-700">{principle}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Core Values & Stats */}
      <Section>
        <SectionHeading eyebrow="What We Stand For" title="Our Core Values" />
        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
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

        <div className="mt-16 grid grid-cols-2 gap-8 rounded-2xl bg-brand-gray p-10 ring-1 ring-slate-100 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.08} className="text-center">
              <p className="font-heading text-3xl font-bold text-brand-blue sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-slate-500">{stat.label}</p>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* By 2030 */}
      <Section className="bg-brand-gray">
        <SectionHeading eyebrow="By 2030" title="Our Aspiration" />
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
          {aspirations.map((aspiration, i) => (
            <FadeIn key={aspiration} delay={i * 0.05}>
              <div className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
                <p className="text-sm font-medium text-slate-700">
                  {aspiration}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Mantra */}
      <Section className="bg-slate-900 text-white">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-white/60">
            Our Mantra
          </span>
          <div className="mt-4 space-y-1">
            {mantra.map((line) => (
              <p key={line} className="font-heading text-2xl font-bold sm:text-3xl">
                {line}
              </p>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* Services recap */}
      <Section className="bg-brand-gray">
        <SectionHeading eyebrow="What We Do" title="Our Services" />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.08}>
              <div className="flex h-full flex-col items-center rounded-xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10">
                  <service.icon className="h-6 w-6 text-brand-blue" />
                </div>
                <h3 className="mt-4 font-heading font-bold text-slate-900">
                  {service.title}
                </h3>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="mt-10 text-center">
          <Button href="/services" size="lg">
            Explore Our Services
          </Button>
        </FadeIn>
      </Section>
    </>
  );
}
