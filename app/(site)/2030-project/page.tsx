import {
  BookOpen,
  CheckCircle2,
  Compass,
  Quote,
  Rocket,
  Target,
} from "lucide-react";
import Section, { SectionHeading } from "@/components/Section";
import FadeIn from "@/components/FadeIn";

export const metadata = {
  title: "The 2030 Project | IIA Properties",
};

const foundation = [
  {
    icon: Target,
    number: "01",
    eyebrow: "Purpose",
    title: "Why We Exist",
    body: "To help individuals, businesses, institutions and governments make confident property and real estate decisions through trusted professional advice, innovative solutions and exceptional service.",
  },
  {
    icon: Compass,
    number: "02",
    eyebrow: "Vision",
    title: "Where We're Going",
    body: "To become Africa's most trusted and innovative real estate advisory institution, setting the benchmark for professional excellence, intelligent solutions and enduring client value.",
  },
  {
    icon: Rocket,
    number: "03",
    eyebrow: "Mission",
    title: "How We Deliver",
    body: "We provide world-class estate surveying, valuation, property management, advisory and real estate solutions through exceptional people, intelligent systems and innovative practices that create lasting value for our clients, communities and stakeholders.",
  },
  {
    icon: BookOpen,
    number: "05",
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

export default function TheProjectPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-blue-dark to-brand-blue py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <FadeIn>
            <span className="text-sm font-semibold uppercase tracking-wider text-white/70">
              The IIA 2030 Project — Phase 1
            </span>
            <h1 className="mt-3 font-heading text-4xl font-bold sm:text-5xl">
              The Foundation
            </h1>
            <p className="mt-4 text-lg text-white/80">
              Building a trusted institution — the purpose, vision, mission
              and principles guiding IIA toward 2030.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Purpose / Vision / Mission / Philosophy */}
      <Section>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {foundation.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10">
                    <item.icon className="h-6 w-6 text-brand-blue" />
                  </div>
                  <span className="font-heading text-sm font-bold text-slate-300">
                    {item.number}
                  </span>
                </div>
                <span className="mt-4 block text-sm font-semibold uppercase tracking-wider text-brand-blue">
                  {item.eyebrow}
                </span>
                <h2 className="mt-1 font-heading text-xl font-bold text-slate-900">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm text-slate-600">{item.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Promise */}
      <Section className="bg-brand-blue text-white">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <Quote className="mx-auto mb-4 h-10 w-10 text-white/60" />
          <span className="text-sm font-semibold uppercase tracking-wider text-white/70">
            04 · Our Promise
          </span>
          <p className="mt-4 font-heading text-2xl font-bold sm:text-3xl">
            &ldquo;Every interaction with IIA will reflect professionalism,
            integrity, competence, innovation and exceptional client
            care.&rdquo;
          </p>
        </FadeIn>
      </Section>

      {/* Guiding Principles */}
      <Section className="bg-brand-gray">
        <SectionHeading
          eyebrow="07 · Our Guiding Principles"
          title="What Governs Every Decision"
        />
        <div className="mx-auto mt-12 max-w-2xl space-y-4">
          {principles.map((principle, i) => (
            <FadeIn key={principle} delay={i * 0.05}>
              <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-blue font-heading text-sm font-bold text-white">
                  {toRoman(i + 1)}
                </span>
                <p className="font-medium text-slate-700">{principle}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* By 2030 */}
      <Section>
        <SectionHeading eyebrow="By 2030" title="Our Aspiration" />
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
          {aspirations.map((aspiration, i) => (
            <FadeIn key={aspiration} delay={i * 0.05}>
              <div className="flex items-start gap-3 rounded-xl bg-brand-gray p-4">
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
    </>
  );
}

function toRoman(num: number): string {
  const numerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
  return numerals[num - 1] ?? String(num);
}
