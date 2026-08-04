import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone } from "lucide-react";
import type { SVGProps } from "react";

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  );
}

function TwitterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 5.9c-.72.32-1.5.53-2.3.63a4 4 0 0 0 1.76-2.22 8 8 0 0 1-2.54.97 4 4 0 0 0-6.9 3.65A11.34 11.34 0 0 1 3.9 4.6a4 4 0 0 0 1.24 5.34 4 4 0 0 1-1.81-.5v.05a4 4 0 0 0 3.2 3.92 4 4 0 0 1-1.8.07 4 4 0 0 0 3.73 2.78A8.03 8.03 0 0 1 2 18.4a11.32 11.32 0 0 0 6.13 1.8c7.35 0 11.37-6.09 11.37-11.37l-.01-.52A8.1 8.1 0 0 0 22 5.9Z" />
    </svg>
  );
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.94 5a2 2 0 1 1-4-.02 2 2 0 0 1 4 .02ZM3.5 8.75h3.9V21h-3.9V8.75Zm6.63 0h3.74v1.68h.05c.52-.98 1.8-2.02 3.7-2.02 3.96 0 4.69 2.6 4.69 6V21h-3.9v-5.72c0-1.37-.02-3.12-1.9-3.12-1.9 0-2.2 1.49-2.2 3.02V21h-3.9V8.75Z" />
    </svg>
  );
}

const footerLinks = [
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/services" },
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
                3rd Floor, Right Wing, Enterprise Building (Former ACB
                Building), #9 Ogui Road, Enugu, Nigeria
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-brand-blue-light" />
                0811 545 3020
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
          © 2012–{new Date().getFullYear()} Iwuba Ifediora &amp; Associates
          (IIA Properties). All rights reserved.
        </div>
      </div>
    </footer>
  );
}
