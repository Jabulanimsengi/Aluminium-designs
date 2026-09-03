import React from "react";
import { Metadata } from "next";
import { services } from "@/data/services";
import ServicesCatalogue from "@/components/ServicesCatalogue";
import CTASection from "@/components/CTASection";
import { PenTool } from "lucide-react";
import { absoluteUrl, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aluminium & Steel Windows, Doors, Gates & Security",
  description:
    "Explore our full range of products: aluminium windows, sliding patio doors, steel carports, security gates, burglar bars, palisade fencing, and patio enclosures across Gauteng.",
  alternates: { canonical: `${siteUrl}/services` },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: `${siteUrl}/services`,
    siteName: "Aluminium Designs",
    title: "Aluminium & Steel Windows, Doors, Gates & Security | Aluminium Designs",
    description:
      "Explore custom aluminium windows, sliding patio doors, steel carports, security gates, burglar bars, and palisade fencing across Gauteng.",
    images: [
      {
        url: absoluteUrl("/images/hero_exterior.png"),
        width: 1200,
        height: 630,
        alt: "Aluminium Designs Products & Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aluminium & Steel Windows, Doors, Gates & Security | Aluminium Designs",
    description:
      "Explore custom aluminium windows, sliding patio doors, steel carports, security gates, burglar bars, and palisade fencing across Gauteng.",
    images: [absoluteUrl("/images/hero_exterior.png")],
  },
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
            Aluminium Windows, Doors &amp; Steel Works
          </h1>
          <p className="text-on-surface-variant text-base leading-relaxed max-w-2xl mx-auto">
            Explore our full range of custom aluminium windows, sliding doors, patio enclosures, and strong steel security gates made right here in Gauteng.
          </p>
        </div>
      </section>

      {/* Grid with Category Filters */}
      <section className="py-16 sm:py-20 lg:py-24 bg-surface border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServicesCatalogue services={services} />
        </div>
      </section>

      <CTASection />
    </div>
  );
}
