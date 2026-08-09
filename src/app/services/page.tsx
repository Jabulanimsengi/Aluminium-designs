import React from "react";
import { Metadata } from "next";
import { services } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { PenTool } from "lucide-react";

export const metadata: Metadata = {
  title: "Aluminium Windows, Doors & Security",
  description:
    "Explore our full range of home products: aluminium windows, sliding patio doors, security gates, burglar bars, and patio enclosures.",
};

export default function ServicesPage() {
  return (
    <div className="relative bg-surface text-on-surface">
      {/* Header */}
      <section className="py-16 sm:py-20 lg:py-24 bg-surface-container-low border-b border-outline-variant">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 bg-surface border border-outline-variant px-3.5 py-1 font-mono text-[10px] font-bold tracking-widest uppercase rounded-full">
            <PenTool className="w-3.5 h-3.5 text-secondary" />
            <span className="text-secondary">Products &amp; Services</span>
          </div>
          <h1 className="font-sans text-4xl sm:text-5xl font-bold uppercase tracking-tight text-primary">
            Aluminium Windows, Doors &amp; Security
          </h1>
          <p className="text-on-surface-variant text-base leading-relaxed max-w-2xl mx-auto">
            Explore our full range of clean, rust-proof aluminium solutions custom-made to elevate your home.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 sm:py-20 lg:py-24 bg-surface border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                shortDescription={service.shortDescription}
                slug={service.slug}
                iconName={service.iconName}
                imagePath={service.imagePath}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
