import React from "react";
import { Metadata } from "next";
import { Tag, Info, Phone, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { windowPricing, doorPricing } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Product Prices | Aluminium Windows & Doors",
  description:
    "Transparent pricing for aluminium windows, frames, doors, and frames. All prices in South African Rands (ZAR).",
};

export default function PricesPage() {
  return (
    <div className="relative bg-surface text-on-surface">
      {/* Header */}
      <section className="py-24 bg-surface-container-low border-b border-outline-variant">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 bg-surface border border-outline-variant px-3.5 py-1 font-mono text-[10px] font-bold tracking-widest uppercase rounded-full">
            <Tag className="w-3.5 h-3.5 text-secondary" />
            <span className="text-secondary">Transparent Pricing</span>
          </div>
          <h1 className="font-sans text-4xl sm:text-5xl font-bold uppercase tracking-tight text-primary">
            Product Prices
          </h1>
          <p className="text-on-surface-variant text-base leading-relaxed max-w-2xl mx-auto">
            All prices in South African Rands (ZAR). Final quotation depends on site measurements,
            glass specification, and finish selection. Every price includes standard installation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-on-primary border border-primary hover:border-secondary px-6 py-3 font-mono text-[11px] font-bold uppercase tracking-widest transition-colors rounded-full"
            >
              Request Custom Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+27871234567"
              className="inline-flex items-center gap-2 border border-outline-variant bg-surface hover:bg-surface-container px-6 py-3 font-mono text-[11px] font-bold uppercase tracking-widest text-secondary transition-colors rounded-full"
            >
              <Phone className="w-4 h-4" />
              +27 87 123 4567
            </a>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-surface border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-outline-variant bg-surface-container p-4 flex items-start gap-3 rounded-2xl">
            <Info className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs">
              <p className="font-bold text-primary">How our pricing works</p>
              <p className="text-on-surface-variant leading-relaxed">
                All prices are estimates based on standard residential sizes with clear toughened
                safety glass and standard silver anodized finish. Final pricing is confirmed after a
                <strong className="text-primary"> free on-site measurement</strong>. Powder coating,
                double glazing, acoustic glass, and custom sizes affect the final quote. All prices
                include professional installation and 10-year workmanship warranty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Windows Section */}
      <section className="py-20 bg-surface border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
              Product Pricing
            </span>
            <h2 className="mt-2 font-sans text-3xl sm:text-4xl font-bold uppercase tracking-tight text-primary">
              Aluminium Windows &amp; Frames
            </h2>
            <p className="mt-3 text-sm text-on-surface-variant max-w-2xl leading-relaxed">
              Powder-coated aluminium window frames with toughened safety glass. Standard finish is
              silver anodized. Custom colours and double glazing quoted separately.
            </p>
          </div>

          {/* Desktop table */}
          <div className="hidden lg:block border border-outline-variant bg-surface-container-lowest overflow-hidden rounded-2xl">
            <div className="grid grid-cols-6 gap-0">
              <div className="col-span-2 bg-surface-container border-b border-outline-variant p-4 font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
                Product
              </div>
              <div className="bg-surface-container border-b border-outline-variant p-4 font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
                Standard Size
              </div>
              <div className="bg-surface-container border-b border-outline-variant p-4 font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
                Frame Price
              </div>
              <div className="bg-surface-container border-b border-outline-variant p-4 font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
                Glass Price
              </div>
              <div className="bg-surface-container border-b border-outline-variant p-4 font-mono text-[10px] font-bold uppercase tracking-widest text-secondary text-right">
                From
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
              <div key={p.name} className="border border-outline-variant bg-surface-container-lowest p-5 space-y-3 rounded-2xl">
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
                    From
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
          <div className="mb-10">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
              Product Pricing
            </span>
            <h2 className="mt-2 font-sans text-3xl sm:text-4xl font-bold uppercase tracking-tight text-primary">
              Aluminium Doors &amp; Frames
            </h2>
            <p className="mt-3 text-sm text-on-surface-variant max-w-2xl leading-relaxed">
              Heavy-duty aluminium door frames with multi-point locking and weather seals. Hinge
              doors, pivot doors, sliding, and folding stacker configurations.
            </p>
          </div>

          {/* Desktop table */}
          <div className="hidden lg:block border border-outline-variant bg-surface-container-lowest overflow-hidden rounded-2xl">
            <div className="grid grid-cols-6 gap-0">
              <div className="col-span-2 bg-surface-container border-b border-outline-variant p-4 font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
                Product
              </div>
              <div className="bg-surface-container border-b border-outline-variant p-4 font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
                Standard Size
              </div>
              <div className="bg-surface-container border-b border-outline-variant p-4 font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
                Frame Price
              </div>
              <div className="bg-surface-container border-b border-outline-variant p-4 font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
                Glass Price
              </div>
              <div className="bg-surface-container border-b border-outline-variant p-4 font-mono text-[10px] font-bold uppercase tracking-widest text-secondary text-right">
                From
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
              <div key={p.name} className="border border-outline-variant bg-surface-container-lowest p-5 space-y-3 rounded-2xl">
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
                    From
                  </span>
                  <span className="font-sans font-bold text-lg text-primary">{p.totalFrom}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-primary border-b border-outline-variant">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <ShieldCheck className="w-10 h-10 text-on-tertiary-container mx-auto" />
          <h2 className="font-sans text-2xl sm:text-3xl font-bold uppercase tracking-tight text-on-primary">
            Every Order Includes a Free On-Site Measurement
          </h2>
          <p className="text-on-primary-container/90 text-sm max-w-xl mx-auto leading-relaxed">
            Our expert team comes to your property to take precise measurements at no cost. You
            receive a final, itemized quotation before any work begins.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 bg-on-tertiary-container hover:bg-[#92400e] text-white px-6 py-3.5 font-mono text-[11px] font-bold uppercase tracking-widest transition-colors rounded-full"
            >
              Request Free Quotation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+27871234567"
              className="inline-flex items-center gap-2 bg-on-primary hover:bg-surface-container-low text-primary border border-on-primary hover:border-outline-variant px-6 py-3.5 font-mono text-[11px] font-bold uppercase tracking-widest transition-colors rounded-full"
            >
              <Phone className="w-4 h-4" />
              +27 87 123 4567
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
