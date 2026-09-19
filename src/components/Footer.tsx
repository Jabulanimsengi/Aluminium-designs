import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { aluminiumServices, steelServices } from "@/data/services";
import { businessContact, businessHours, whatsappQuoteUrl } from "@/lib/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Steel Works Hub", href: "/steel-works" },
    { name: "Service Areas", href: "/locations" },
    { name: "Gallery", href: "/gallery" },
    { name: "Pricing", href: "/pricing" },
    { name: "FAQ", href: "/faq" },
    { name: "Quote", href: whatsappQuoteUrl },
    { name: "Contact", href: "/contact" },
    { name: "Privacy", href: "/privacy" },
  ];

  const targetLocations = [
    { name: "Johannesburg", slug: "johannesburg" },
    { name: "Alberton", slug: "alberton" },
    { name: "Germiston", slug: "germiston" },
    { name: "Boksburg", slug: "boksburg" },
    { name: "Benoni", slug: "benoni" },
    { name: "Kempton Park", slug: "kempton-park" },
    { name: "Bedfordview", slug: "bedfordview" },
    { name: "Sandton", slug: "sandton" },
    { name: "Soweto", slug: "soweto" },
    { name: "Rosebank", slug: "rosebank" },
    { name: "Randburg", slug: "randburg" },
    { name: "Fourways", slug: "fourways" },
    { name: "Midrand", slug: "midrand" },
    { name: "Pretoria East", slug: "pretoria-east" },
    { name: "Centurion", slug: "centurion" },
    { name: "Pretoria", slug: "pretoria" },
    { name: "Roodepoort", slug: "roodepoort" },
    { name: "Vereeniging", slug: "vereeniging" },
  ];

  const popularInstallations = [
    { label: "Aluminium Windows Near Johannesburg", href: "/aluminium-window-installation-near-johannesburg" },
    { label: "Aluminium Repairs Near Johannesburg", href: "/aluminium-repairs-near-johannesburg" },
    { label: "Aluminium Window Installation Near Sandton", href: "/aluminium-window-installation-near-sandton" },
    { label: "Aluminium Sliding Door Installation Near Sandton", href: "/aluminium-sliding-door-installation-near-sandton" },
    { label: "Aluminium Stacking Door Installation Near Sandton", href: "/aluminium-stacking-door-installation-near-sandton" },
    { label: "Glass Replacement Near Sandton", href: "/glass-replacement-near-sandton" },
    { label: "Aluminium Sliding Door Installation Near Centurion", href: "/aluminium-sliding-door-installation-near-centurion" },
    { label: "Aluminium Window Installation Near Centurion", href: "/aluminium-window-installation-near-centurion" },
    { label: "Aluminium Sliding Door Installation Near Alberton", href: "/aluminium-sliding-door-installation-near-alberton" },
    { label: "Aluminium Window Installation Near Randburg", href: "/aluminium-window-installation-near-randburg" },
    { label: "Aluminium Stacking Door Installation Near Fourways", href: "/aluminium-stacking-door-installation-near-fourways" },
    { label: "Security Gate Installation Near Boksburg", href: "/security-gate-installation-near-boksburg" },
    { label: "Security Gate Installation Near Soweto", href: "/security-gate-installation-near-soweto" },
  ];

  return (
    <footer className="bg-brand text-white border-t border-white/10 pt-16 pb-24 md:pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6 pb-12 border-b border-white/15">

          {/* Brand */}
          <div className="space-y-5 lg:col-span-1">
            <Link
              href="/#hero"
              aria-label="Aluminium Designs — home"
              className="relative inline-flex h-14 w-[144px] overflow-hidden select-none"
            >
              <Image
                src="/images/real_images/logo/logo.png"
                alt="Aluminium Designs"
                fill
                sizes="144px"
                className="object-contain brightness-0 invert drop-shadow-sm"
                unoptimized
              />
            </Link>
            <p className="text-xs leading-relaxed text-outline-variant">
              Custom manufacturers and installers of quality aluminium windows, sliding doors, and strong steel security gates across Gauteng. Built to SABS standards.
            </p>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="font-mono text-[10px] font-bold tracking-widest uppercase text-accent">
              Company
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs text-outline-variant hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Aluminium Products */}
          <div className="space-y-4">
            <h3 className="font-mono text-[10px] font-bold tracking-widest uppercase text-accent">
              Aluminium Systems
            </h3>
            <ul className="space-y-2.5">
              {aluminiumServices.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <Link
                    href={s.slug}
                    className="text-xs text-outline-variant hover:text-accent transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-xs font-mono font-bold text-accent hover:text-accent-hover transition-colors"
                >
                  All Aluminium &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Steel Works */}
          <div className="space-y-4">
            <h3 className="font-mono text-[10px] font-bold tracking-widest uppercase text-accent">
              Steel Works
            </h3>
            <ul className="space-y-2.5">
              {steelServices.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <Link
                    href={s.slug}
                    className="text-xs text-outline-variant hover:text-accent transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/steel-works"
                  className="text-xs font-mono font-bold text-accent hover:text-accent-hover transition-colors"
                >
                  Steel Works Hub &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-mono text-[10px] font-bold tracking-widest uppercase text-accent">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span className="text-outline-variant leading-relaxed">
                  {businessContact.fullAddress}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a href="tel:+27716122439" className="text-outline-variant hover:text-accent font-mono">
                  071 612 2439
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a href="mailto:info@aluminiumdesigns.co.za" className="text-outline-variant hover:text-accent font-mono">
                  info@aluminiumdesigns.co.za
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span className="text-outline-variant">Mon - Fri: {businessHours.weekdays}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Areas We Serve & Local Installation Directory */}
        <div className="pt-10 pb-10 border-b border-white/15">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="font-mono text-[11px] font-bold tracking-widest uppercase text-accent">
                Areas We Serve &amp; Local Installations
              </h3>
              <p className="text-xs text-outline-variant mt-1">
                Fast mobile measurement and fitting across Ekurhuleni, Johannesburg, Tshwane &amp; West Rand.
              </p>
            </div>
            <Link
              href="/locations"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-accent hover:text-white transition-colors shrink-0"
            >
              All 37 Hubs &amp; 800+ Covered Areas &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-2.5 text-xs">
            {targetLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="text-outline-variant hover:text-accent transition-colors truncate"
                title={`Aluminium & Steel Installations in ${loc.name}`}
              >
                {loc.name}
              </Link>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-outline mb-3">
              Popular Local Installation Services:
            </p>
            <div className="flex flex-wrap gap-2 text-[11px]">
              {popularInstallations.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-sm bg-white/5 border border-white/10 px-2.5 py-1 text-outline-variant hover:border-accent hover:text-accent transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-outline-variant">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1.5">
            <Link href="/locations" className="font-mono font-bold uppercase tracking-widest text-outline hover:text-white transition-colors cursor-pointer">
              Service Areas:
            </Link>
            <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-outline-variant">
              <Link href="/locations/sandton" className="hover:text-accent transition-colors">Sandton</Link>
              <span>&middot;</span>
              <Link href="/locations/johannesburg" className="hover:text-accent transition-colors">Johannesburg</Link>
              <span>&middot;</span>
              <Link href="/locations/centurion" className="hover:text-accent transition-colors">Centurion</Link>
              <span>&middot;</span>
              <Link href="/locations/pretoria" className="hover:text-accent transition-colors">Pretoria</Link>
              <span>&middot;</span>
              <Link href="/locations/alberton" className="hover:text-accent transition-colors">Alberton</Link>
              <span>&middot;</span>
              <Link href="/locations/midrand" className="hover:text-accent transition-colors">Midrand</Link>
              <span>&middot;</span>
              <Link href="/locations/randburg" className="hover:text-accent transition-colors">Randburg</Link>
              <span>&middot;</span>
              <Link href="/locations/boksburg" className="hover:text-accent transition-colors">Boksburg</Link>
            </div>
          </div>
          <p className="font-mono text-[10px] uppercase text-outline text-center md:text-right shrink-0 leading-relaxed">
            &copy; {currentYear} Aluminium Designs. All rights reserved. <br className="sm:hidden" />
            SABS &amp; AAAMSA Conformance Standards
          </p>
        </div>
      </div>
    </footer>
  );
}
