import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "@/components/icons/SocialIcons";

const footerLinks = [
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "The 2030 Project", href: "/2030-project" },
      { label: "Contact", href: "/contact" },
      { label: "Admin Login", href: "/admin/login" },
    ],
  },
  {
    heading: "Properties",
    links: [
      { label: "For Sale", href: "/properties?status=for-sale" },
      { label: "For Rent", href: "/properties?status=for-rent" },
      { label: "All Listings", href: "/properties" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="mb-4 inline-block rounded-lg bg-white p-2">
              <Image
                src="/iia-logo.jpg"
                alt="Iwuba Ifediora & Associates"
                width={603}
                height={603}
                className="h-14 w-14"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              A registered firm of Estate Surveyors &amp; Valuers versed in
              valuation for all purposes, property management, agency, and
              property development consulting.
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { Icon: FacebookIcon, href: "https://www.facebook.com/iiaproperties/" },
                { Icon: InstagramIcon, href: "https://instagram.com/iiaproperties" },
                { Icon: TwitterIcon, href: "https://twitter.com/iiaproperties1" },
                {
                  Icon: LinkedinIcon,
                  href: "https://ng.linkedin.com/company/iwuba-ifediora-&-associates",
                },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition-colors hover:bg-brand-blue hover:text-white"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.heading}>
              <h4 className="font-heading font-bold text-white">
                {group.heading}
              </h4>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 transition-colors hover:text-brand-blue-light"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-heading font-bold text-white">Get in Touch</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue-light" />
                Suite 2N Purity Plaza, Abakaliki Road, GRA Enugu, Nigeria
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-brand-blue-light" />
                0811 545 3020 / 0803 550 2100
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-brand-blue-light" />
                iwuba.ifediora@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <InstagramIcon className="h-4 w-4 shrink-0 text-brand-blue-light" />
                <a
                  href="https://instagram.com/iiaproperties"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-brand-blue-light"
                >
                  @iiaproperties
                </a>
              </li>
            </ul>

            <form className="mt-5 flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white placeholder:text-slate-500 outline-none focus:border-brand-blue-light"
              />
              <button
                type="submit"
                className="shrink-0 rounded-lg bg-brand-blue px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-blue-dark"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          {`© ${new Date().getFullYear()} Iwuba Ifediora & Associates (IIA Properties). All rights reserved.`}
        </div>
      </div>
    </footer>
  );
}
