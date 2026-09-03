import React from "react";
import { Metadata } from "next";
import { Tag, Info, Phone, ArrowRight, ShieldCheck, Wrench } from "lucide-react";
import Link from "next/link";
import { windowPricing, doorPricing, specialtyPricing } from "@/data/pricing";
import { absoluteUrl, siteUrl, whatsappQuoteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aluminium Product Prices & Cost Guide | Aluminium Designs",
  description:
    "Clear, transparent starting prices for aluminium windows, doors, conversions, and glazing in South African Rands (ZAR). Includes professional installation across Gauteng.",
  alternates: { canonical: `${siteUrl}/prices` },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: `${siteUrl}/prices`,
    siteName: "Aluminium Designs",
    title: "Aluminium Product Prices & Cost Guide | Aluminium Designs",
    description:
      "Clear, transparent starting prices for custom aluminium windows, doors, conversions, and glazing across Gauteng.",
    images: [
      {
        url: absoluteUrl("/images/hero_exterior.png"),
        width: 1200,
        height: 630,
        alt: "Aluminium Designs Pricing Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aluminium Product Prices & Cost Guide | Aluminium Designs",
    description:
      "Clear, transparent starting prices for custom aluminium windows, doors, conversions, and glazing across Gauteng.",
    images: [absoluteUrl("/images/hero_exterior.png")],
  },
};

export default function PricesPage() {
  return (
    <div className="relative bg-surface text-on-surface">
      {/* Header */}
      <section className="py-24 bg-surface-container-low border-b border-outline-variant">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 bg-surface border border-outline-variant px-3.5 py-1 font-mono text-[10px] font-bold tracking-widest uppercase rounded-full">
            <Tag className="w-3.5 h-3.5 text-secondary" />
            <span className="text-secondary">Transparent Home Pricing</span>
          </div>
          <h1 className="font-sans text-4xl sm:text-5xl font-bold uppercase tracking-tight text-primary">
            Product Pricing Guide
          </h1>
          <p className="text-on-surface-variant text-base leading-relaxed max-w-2xl mx-auto">
            All prices in South African Rands (ZAR). Every guide price represents starting figures including custom manufacturing, certified safety glass, and neat installation by our polite team.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href={whatsappQuoteUrl}
              className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-on-primary border border-primary hover:border-secondary px-6 py-3 font-mono text-[11px] font-bold uppercase tracking-widest transition-colors rounded-full shadow-sm"
            >
              Request Free Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+27716122439"
              className="inline-flex items-center gap-2 border border-outline-variant bg-surface hover:bg-surface-container px-6 py-3 font-mono text-[11px] font-bold uppercase tracking-widest text-secondary transition-colors rounded-full"
            >
              <Phone className="w-4 h-4" />
              071 612 2439
            </a>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-surface border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-outline-variant bg-surface-container p-4 flex items-start gap-3 shadow-sm">
            <Info className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs">
              <p className="font-bold text-primary">How our pricing works</p>
              <p className="text-on-surface-variant leading-relaxed">
                Prices shown are starting guide figures based on standard residential openings with clear SANS 10400 safety glass.
                Final custom pricing is confirmed after a <strong className="text-primary">professional on-site measurement</strong> (R250 consultation fee in Johannesburg, R350 outside Johannesburg — credited back in full against your installation invoice).
                Popular powder-coated colours (Matte Black, Charcoal Grey, Bronze, White) and energy-efficient double glazing can be tailored to any home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Windows Section */}
      <section className="py-20 bg-surface border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
              Windows Guide
            </span>
            <h2 className="mt-2 font-sans text-3xl sm:text-4xl font-bold uppercase tracking-tight text-primary">
              Aluminium Windows &amp; Frames
            </h2>
            <p className="mt-3 text-sm text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              Durable aluminium window frames with safety toughened glass. Custom manufactured to your exact wall openings.
            </p>
          </div>

          {/* Desktop table */}
          <div className="hidden lg:block border border-outline-variant bg-surface-container-lowest overflow-hidden shadow-sm">
            <div className="grid grid-cols-6 gap-0">
              <div className="col-span-2 bg-surface-container border-b border-outline-variant p-4 font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
                Product Type
              </div>
              <div className="bg-surface-container border-b border-outline-variant p-4 font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
                Standard Size
              </div>
              <div className="bg-surface-container border-b border-outline-variant p-4 font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
                Frame (from)
              </div>
              <div className="bg-surface-container border-b border-outline-variant p-4 font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
                Glass (from)
              </div>
              <div className="bg-surface-container border-b border-outline-variant p-4 font-mono text-[10px] font-bold uppercase tracking-widest text-secondary text-right">
                Starting Total
              </div>
            </div>
            {windowPricing.map((p, i) => (
              <div
                key={p.name}
                className={`grid grid-cols-6 gap-0 ${
                  i < windowPricing.length - 1 ? "border-b border-outline-variant" : ""
                }`}
              >
                <div className="col-span-2 p-4">
                  <p className="font-sans font-bold text-sm text-primary">{p.name}</p>
                  <p className="font-mono text-[10px] text-outline uppercase tracking-wider mt-0.5">
                    {p.note}
                  </p>
                </div>
                <div className="p-4 font-mono text-xs text-on-surface-variant self-center">
                  {p.size}
                </div>
                <div className="p-4 font-mono text-xs text-on-surface-variant self-center">
                  {p.framePrice}
                </div>
                <div className="p-4 font-mono text-xs text-on-surface-variant self-center">
                  {p.glazingPrice}
                </div>
                <div className="p-4 font-mono text-sm font-bold text-primary text-right self-center">
                  {p.totalFrom}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile cards */}
          <div className="lg:hidden space-y-4">
            {windowPricing.map((p) => (
              <div key={p.name} className="border border-outline-variant bg-surface-container-lowest p-5 space-y-3 shadow-sm">
                <div>
                  <h3 className="font-sans font-bold text-sm uppercase text-primary">{p.name}</h3>
                  <p className="font-mono text-[10px] text-outline uppercase tracking-wider mt-1">{p.note}</p>
                </div>
                <div className="grid grid-cols-2 gap-y-2 text-xs">
                  <span className="text-outline uppercase font-mono text-[10px]">Standard Size:</span>
                  <span className="text-primary font-mono font-bold">{p.size}</span>
                  <span className="text-outline uppercase font-mono text-[10px]">Frame:</span>
                  <span className="text-primary font-mono">{p.framePrice}</span>
                  <span className="text-outline uppercase font-mono text-[10px]">Glass:</span>
                  <span className="text-primary font-mono">{p.glazingPrice}</span>
                </div>
                <div className="border-t border-outline-variant pt-3 flex justify-between items-center">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
                    Starting From
                  </span>
                  <span className="font-sans font-bold text-lg text-primary">{p.totalFrom}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doors Section */}
      <section className="py-20 bg-surface-container-low border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
              Doors Guide
            </span>
            <h2 className="mt-2 font-sans text-3xl sm:text-4xl font-bold uppercase tracking-tight text-primary">
              Aluminium Doors &amp; Frames
            </h2>
            <p className="mt-3 text-sm text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              Strong, weatherproof door systems with security locks. Hinge, pivot, sliding, and stacking patio doors.
            </p>
          </div>

          {/* Desktop table */}
          <div className="hidden lg:block border border-outline-variant bg-surface-container-lowest overflow-hidden shadow-sm">
            <div className="grid grid-cols-6 gap-0">
              <div className="col-span-2 bg-surface-container border-b border-outline-variant p-4 font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
                Product Type
              </div>
              <div className="bg-surface-container border-b border-outline-variant p-4 font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
                Standard Size
              </div>
              <div className="bg-surface-container border-b border-outline-variant p-4 font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
                Frame (from)
              </div>
              <div className="bg-surface-container border-b border-outline-variant p-4 font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
                Glass (from)
              </div>
              <div className="bg-surface-container border-b border-outline-variant p-4 font-mono text-[10px] font-bold uppercase tracking-widest text-secondary text-right">
                Starting Total
              </div>
            </div>
            {doorPricing.map((p, i) => (
              <div
                key={p.name}
                className={`grid grid-cols-6 gap-0 ${
                  i < doorPricing.length - 1 ? "border-b border-outline-variant" : ""
                }`}
              >
                <div className="col-span-2 p-4">
                  <p className="font-sans font-bold text-sm text-primary">{p.name}</p>
                  <p className="font-mono text-[10px] text-outline uppercase tracking-wider mt-0.5">
                    {p.note}
                  </p>
                </div>
                <div className="p-4 font-mono text-xs text-on-surface-variant self-center">
                  {p.size}
                </div>
                <div className="p-4 font-mono text-xs text-on-surface-variant self-center">
                  {p.framePrice}
                </div>
                <div className="p-4 font-mono text-xs text-on-surface-variant self-center">
                  {p.glazingPrice}
                </div>
                <div className="p-4 font-mono text-sm font-bold text-primary text-right self-center">
                  {p.totalFrom}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile cards */}
          <div className="lg:hidden space-y-4">
            {doorPricing.map((p) => (
              <div key={p.name} className="border border-outline-variant bg-surface-container-lowest p-5 space-y-3 shadow-sm">
                <div>
                  <h3 className="font-sans font-bold text-sm uppercase text-primary">{p.name}</h3>
                  <p className="font-mono text-[10px] text-outline uppercase tracking-wider mt-1">{p.note}</p>
                </div>
                <div className="grid grid-cols-2 gap-y-2 text-xs">
                  <span className="text-outline uppercase font-mono text-[10px]">Standard Size:</span>
                  <span className="text-primary font-mono font-bold">{p.size}</span>
                  <span className="text-outline uppercase font-mono text-[10px]">Frame:</span>
                  <span className="text-primary font-mono">{p.framePrice}</span>
                  <span className="text-outline uppercase font-mono text-[10px]">Glass:</span>
                  <span className="text-primary font-mono">{p.glazingPrice}</span>
                </div>
                <div className="border-t border-outline-variant pt-3 flex justify-between items-center">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
                    Starting From
                  </span>
                  <span className="font-sans font-bold text-lg text-primary">{p.totalFrom}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Services & Conversions Section */}
      <section className="py-20 bg-surface border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-surface-container-low border border-outline-variant px-3 py-1 font-mono text-[10px] font-bold tracking-widest uppercase rounded-full text-secondary mb-2">
              <Wrench className="w-3.5 h-3.5" />
              Specialty Services &amp; Repairs
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl font-bold uppercase tracking-tight text-primary">
              Conversions, Enclosures &amp; Repairs
            </h2>
            <p className="mt-3 text-sm text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              Transparent starting guide rates for steel-to-aluminium conversions, glass patio enclosures, frameless showers, and on-site sliding door repairs.
            </p>
          </div>

          {/* Desktop table */}
          <div className="hidden lg:block border border-outline-variant bg-surface-container-lowest overflow-hidden shadow-sm">
            <div className="grid grid-cols-5 gap-0">
              <div className="col-span-2 bg-surface-container border-b border-outline-variant p-4 font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
                Service Category
              </div>
              <div className="bg-surface-container border-b border-outline-variant p-4 font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
                Pricing Scope
              </div>
              <div className="bg-surface-container border-b border-outline-variant p-4 font-mono text-[10px] font-bold uppercase tracking-widest text-secondary text-right">
                Starting Rate
              </div>
              <div className="bg-surface-container border-b border-outline-variant p-4 font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
                Specification Notes
              </div>
            </div>
            {specialtyPricing.map((p, i) => (
              <div
                key={p.name}
                className={`grid grid-cols-5 gap-0 ${
                  i < specialtyPricing.length - 1 ? "border-b border-outline-variant" : ""
                }`}
              >
                <div className="col-span-2 p-4">
                  <p className="font-sans font-bold text-sm text-primary">{p.name}</p>
                </div>
                <div className="p-4 font-mono text-xs text-on-surface-variant self-center">
                  {p.unitOrScope}
                </div>
                <div className="p-4 font-mono text-sm font-bold text-primary text-right self-center">
                  {p.totalFrom}
                </div>
                <div className="p-4 font-mono text-[11px] text-outline self-center">
                  {p.note}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile cards */}
          <div className="lg:hidden space-y-4">
            {specialtyPricing.map((p) => (
              <div key={p.name} className="border border-outline-variant bg-surface-container-lowest p-5 space-y-3 shadow-sm">
                <div>
                  <h3 className="font-sans font-bold text-sm uppercase text-primary">{p.name}</h3>
                  <p className="font-mono text-[10px] text-outline uppercase tracking-wider mt-1">{p.note}</p>
                </div>
                <div className="grid grid-cols-2 gap-y-2 text-xs">
                  <span className="text-outline uppercase font-mono text-[10px]">Pricing Scope:</span>
                  <span className="text-primary font-mono">{p.unitOrScope}</span>
                </div>
                <div className="border-t border-outline-variant pt-3 flex justify-between items-center">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
                    Starting From
                  </span>
                  <span className="font-sans font-bold text-lg text-primary">{p.totalFrom}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-surface-container-low border-b border-outline-variant">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <ShieldCheck className="w-10 h-10 text-secondary mx-auto" />
          <h2 className="font-sans text-2xl sm:text-3xl font-bold uppercase tracking-tight text-primary">
            Every Quote Includes a Professional Home Visit
          </h2>
          <p className="text-on-surface-variant text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Our technician comes to your home to take accurate measurements. The R250 (Johannesburg) or R350 (outside Johannesburg) consultation fee is credited back in full against your installation invoice.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href={whatsappQuoteUrl}
              className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-on-primary border border-primary hover:border-secondary px-6 py-3.5 font-mono text-[11px] font-bold uppercase tracking-widest transition-colors rounded-full shadow-sm"
            >
              Request Free Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+27716122439"
              className="inline-flex items-center gap-2 border border-outline-variant bg-surface hover:bg-surface-container text-secondary hover:text-primary px-6 py-3.5 font-mono text-[11px] font-bold uppercase tracking-widest transition-colors rounded-full"
            >
              <Phone className="w-4 h-4" />
              071 612 2439
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
