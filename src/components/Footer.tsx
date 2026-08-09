import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { services } from "@/data/services";
import { businessContact, whatsappQuoteUrl } from "@/lib/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Service Areas", href: "/locations" },
    { name: "Gallery", href: "/gallery" },
    { name: "Prices", href: "/prices" },
    { name: "FAQ", href: "/faq" },
    { name: "Quote", href: whatsappQuoteUrl },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-black text-white border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-12 border-b border-white/15">

          {/* Brand */}
          <div className="space-y-5">
            <Link
              href="/"
              className="relative inline-flex h-14 w-[162px] overflow-hidden select-none"
            >
              <Image
                src="/images/real_images/logo/logo.png"
                alt="Aluminium Designs"
                fill
                sizes="162px"
                className="object-cover brightness-0 invert"
                unoptimized
              />
            </Link>
            <p className="text-xs leading-relaxed text-outline-variant">
              Specialist designers, manufacturers, and installers of architectural aluminium systems.
              SABS &amp; AAAMSA conformant.
            </p>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="font-mono text-[10px] font-bold tracking-widest uppercase text-outline">
              Company
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs text-outline-variant hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="font-mono text-[10px] font-bold tracking-widest uppercase text-outline">
              Products
            </h3>
            <ul className="space-y-2.5">
              {services.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <Link
                    href={s.slug}
                    className="text-xs text-outline-variant hover:text-white transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-mono text-[10px] font-bold tracking-widest uppercase text-outline">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-outline shrink-0 mt-0.5" />
                <span className="text-outline-variant leading-relaxed">
                  {businessContact.fullAddress}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-outline shrink-0" />
                <a href="tel:+27716122439" className="text-outline-variant hover:text-white font-mono">
                  071 612 2439
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-outline shrink-0" />
                <a href="mailto:info@aluminiumdesigns.co.za" className="text-outline-variant hover:text-white font-mono">
                  info@aluminiumdesigns.co.za
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-outline shrink-0 mt-0.5" />
                <span className="text-outline-variant">Mon - Fri: 08:00 - 17:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-outline-variant">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1.5">
            <Link href="/locations" className="font-mono font-bold uppercase tracking-widest text-outline hover:text-white transition-colors cursor-pointer">
              Service Areas:
            </Link>
            <span className="text-outline-variant text-xs leading-relaxed">
              Sandton & Bryanston, Randburg & Fourways, Midrand & Waterfall, Centurion & Pretoria, Johannesburg South, East & West Rand
            </span>
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
