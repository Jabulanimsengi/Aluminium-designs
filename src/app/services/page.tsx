import React from "react";
import { Metadata } from "next";
import ServiceTaxonomyGrid from "@/components/ServiceTaxonomyGrid";
import CTASection from "@/components/CTASection";
import { PenTool, Tag, ChevronRight } from "lucide-react";
import Link from "next/link";
import { services } from "@/data/services";
import { absoluteUrl, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "38 Architectural Aluminium, Glass & Steel Services",
  description:
    "Browse our complete 38-service catalogue across 5 specialised divisions: Aluminium & Doors, Glass & Enclosures, Security & Fencing, Steel Works, and Maintenance.",
  alternates: { canonical: `${siteUrl}/services` },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: `${siteUrl}/services`,
    siteName: "Aluminium Designs",
    title: "38 Architectural Aluminium, Glass & Steel Services | Aluminium Designs",
    description:
      "Browse our complete 38-service catalogue across 5 specialised divisions: Aluminium & Doors, Glass & Enclosures, Security & Fencing, Steel Works, and Maintenance.",
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
    title: "38 Architectural Aluminium, Glass & Steel Services | Aluminium Designs",
    description:
      "Browse our complete 38-service catalogue across 5 specialised divisions: Aluminium & Doors, Glass & Enclosures, Security & Fencing, Steel Works, and Maintenance.",
    images: [absoluteUrl("/images/hero_exterior.png")],
  },
};

export default function ServicesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${siteUrl}/services#webpage`,
        url: `${siteUrl}/services`,
        name: "38 Architectural Aluminium, Glass & Steel Services | Aluminium Designs",
        description:
          "Browse our complete 38-service catalogue across 5 specialised divisions: Aluminium & Doors, Glass & Enclosures, Security & Fencing, Steel Works, and Maintenance.",
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: services.length,
          itemListElement: services.map((srv, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: srv.title,
            url: `${siteUrl}/services/${srv.id}`,
            description: srv.shortDescription,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}/services#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: `${siteUrl}/services`,
          },
        ],
      },
    ],
  };

  return (
    <div className="relative bg-surface text-on-surface">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Header */}
      <section className="py-16 sm:py-20 lg:py-24 bg-surface-container-low border-b border-outline-variant">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center justify-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-outline">
              <li>
                <Link href="/" className="text-secondary hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3 h-3 text-outline" />
              </li>
              <li className="text-accent font-semibold" aria-current="page">
                Services
              </li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 bg-surface border border-outline-variant px-3.5 py-1 font-mono text-[10px] font-bold tracking-widest uppercase rounded-full">
            <PenTool className="w-3.5 h-3.5 text-accent" />
            <span className="text-accent">Complete 38-Product Architecture</span>
          </div>

          <h1 className="font-sans text-4xl sm:text-5xl font-bold uppercase tracking-tight text-primary">
            Aluminium, Glass &amp; Steel Services
          </h1>

          <p className="text-on-surface-variant text-base leading-relaxed max-w-2xl mx-auto">
            Organized across 5 specialized divisions: custom architectural windows &amp; doors, frameless glass &amp; enclosures, high-security barriers, structural steel, and professional maintenance.
          </p>

          <div className="pt-2">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 bg-surface border border-outline-variant hover:border-accent px-5 py-2.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider text-primary hover:text-accent transition-colors shadow-xs"
            >
              <Tag className="w-3.5 h-3.5 text-accent" />
              View Centralized Pricing Hub
            </Link>
          </div>
        </div>
      </section>

      {/* 38-Service Grouped Taxonomy Grid */}
      <section className="py-16 sm:py-20 lg:py-24 bg-surface border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceTaxonomyGrid />
        </div>
      </section>

      <CTASection />
    </div>
  );
}
