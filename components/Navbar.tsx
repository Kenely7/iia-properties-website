"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Properties",
    href: "/properties",
    children: [
      { label: "For Sale", href: "/properties?status=for-sale" },
      { label: "For Rent", href: "/properties?status=for-rent" },
      { label: "All Listings", href: "/properties" },
    ],
  },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "2030 Project", href: "/2030-project" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/iia-logo.jpg"
            alt="Iwuba Ifediora & Associates"
            width={603}
            height={603}
            className="h-12 w-12"
            priority
          />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-slate-700 hover:bg-brand-gray hover:text-brand-blue"
                >
                  {link.label}
                  <ChevronDown className="h-4 w-4" />
                </Link>
                {dropdownOpen && (
                  <div className="absolute left-0 top-full w-44 rounded-xl bg-white p-2 shadow-lg ring-1 ring-slate-100">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-brand-gray hover:text-brand-blue"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-slate-700 hover:bg-brand-gray hover:text-brand-blue"
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-brand-blue px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-blue-dark"
          >
            Contact Us
          </Link>
        </div>

        <button
          className="p-2 text-slate-700 lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-slate-100 transition-all duration-300 lg:hidden",
          mobileOpen ? "max-h-[28rem]" : "max-h-0 border-t-0"
        )}
      >
        <div className="flex flex-col gap-1 px-4 py-3">
          {navLinks.map((link) => (
            <div key={link.label}>
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-3 py-2 font-medium text-slate-700 hover:bg-brand-gray hover:text-brand-blue"
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="ml-3 flex flex-col border-l border-slate-100 pl-3">
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="rounded-lg px-3 py-2 text-sm text-slate-500 hover:bg-brand-gray hover:text-brand-blue"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-xl bg-brand-blue px-6 py-2.5 text-sm font-semibold text-white"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
