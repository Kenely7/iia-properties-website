import { Mail, MapPin, Phone } from "lucide-react";
import Section, { SectionHeading } from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import InquiryForm from "@/components/InquiryForm";

export const metadata = {
  title: "Contact Us | IIA Properties",
};

const office = {
  address: "Suite 2N Purity Plaza, Abakaliki Road, GRA Enugu, Nigeria",
  phones: ["0811 545 3020", "0803 550 2100"],
  email: "iwuba.ifediora@gmail.com",
};

export default function ContactPage() {
  return (
    <Section containerClassName="max-w-7xl">
      <SectionHeading
        eyebrow="Contact"
        title="We'd Love to Hear From You"
        description="Kindly use the contact form below to send us a message. Questions about a listing, our services, or just getting started? Reach out any time."
      />

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr]">
        <FadeIn className="space-y-6">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
            <h3 className="font-heading font-bold text-slate-900">Get in Touch</h3>
            <ul className="mt-4 space-y-4 text-sm text-slate-600">
              {office.phones.map((phone) => (
                <li key={phone} className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-brand-blue" />
                  {phone}
                </li>
              ))}
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-brand-blue" />
                {office.email}
              </li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
            <h4 className="flex items-center gap-2 font-heading font-bold text-slate-900">
              <MapPin className="h-5 w-5 text-brand-blue" />
              Head Office — Enugu, Nigeria
            </h4>
            <p className="mt-2 text-sm text-slate-600">{office.address}</p>
            <p className="mt-1 text-sm text-slate-600">{office.phones.join(" / ")}</p>
          </div>

          <div className="flex h-56 flex-col items-center justify-center gap-2 rounded-2xl bg-brand-gray text-slate-400">
            <MapPin className="h-8 w-8" />
            <p className="text-sm">Map view coming soon</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <InquiryForm heading="Send Us a Message" submitLabel="Send Message" />
        </FadeIn>
      </div>
    </Section>
  );
}
