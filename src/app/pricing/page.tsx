import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  Tag,
  Phone,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
  FileCheck,
} from "lucide-react";
import {
  allTaxonomyServices,
  rawServiceTaxonomy,
} from "@/data/serviceTaxonomy";
import { siteUrl, businessContact, getWhatsAppQuoteUrl, absoluteUrl } from "@/lib/site";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Aluminium & Steel Prices Gauteng",
  description:
    "Guide prices for aluminium windows, sliding doors, burglar bars, gates, repairs and steel works across Gauteng. Request a written quote.",
  keywords: [
    "aluminium windows price near Johannesburg",
    "sliding doors price near Sandton",
    "aluminium window repairs price near Katlehong",
    "clear view fencing price near Midrand",
    "frameless shower price near Pretoria",
    "security gates price near Centurion",
    "seamless aluminium gutters price near Gauteng",
    "steel carport price near East Rand",
  ],
  alternates: { canonical: `${siteUrl}/pricing` },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: `${siteUrl}/pricing`,
    siteName: "Aluminium Designs",
    title: "Aluminium & Steel Prices Gauteng | Aluminium Designs",
    description:
      "Transparent starting guide prices for custom aluminium windows, sliding doors, security gates, and steel works across Gauteng.",
    images: [
      {
        url: absoluteUrl("/images/hero_exterior.png"),
        width: 1200,
        height: 630,
        alt: "Aluminium Designs Central Pricing Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aluminium & Steel Prices Gauteng | Aluminium Designs",
    description:
      "Transparent starting guide prices for custom aluminium windows, sliding doors, security gates, and steel works across Gauteng.",
    images: [absoluteUrl("/images/hero_exterior.png")],
  },
};

export default function PricingPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/pricing#webpage`,
        url: `${siteUrl}/pricing`,
        name: "Centralized Pricing Hub | Aluminium Designs",
        description: "Official 2026 pricing schedule for architectural aluminium and steel services across Gauteng.",
      },
      {
        "@type": "OfferCatalog",
        "@id": `${siteUrl}/pricing#catalog`,
        name: "Aluminium & Steel Services Price Matrix",
        itemListElement: allTaxonomyServices.map((service, index) => ({
          "@type": "Offer",
          position: index + 1,
          name: `${service.name} Starting Price`,
          price: service.startingPriceZar,
          priceCurrency: "ZAR",
          description: `${service.name} starting from ${service.startingPriceDisplay} (${service.priceUnit})`,
          url: `${siteUrl}/services/${service.slug}`,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/pricing#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "What is the price per metre for seamless aluminium gutters in Johannesburg?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Seamless aluminium gutters in Johannesburg typically range from R140 to R180 per linear metre. This includes on-site mobile roll-forming, mounting brackets, standard downpipes, and professional fitment.",
            },
          },
          {
            "@type": "Question",
            name: "Why does my aluminium window not stay open and what does it cost to repair?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "When an aluminium casement or top-hung window drops or fails to stay open, the internal stainless steel friction stays (hinges) have worn out. Replacement starts from R450 per window, restoring smooth friction and tight weather sealing.",
            },
          },
          {
            "@type": "Question",
            name: "Do I need a glazing certificate for my new shopfront or folding doors?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. In accordance with South African National Standard SANS 10400 Part N, all low-level glass installations, shopfronts, and patio doors must use toughened or laminated safety glass. We issue SAGGA Glazing Safety Certificates for council occupancy approval.",
            },
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

      {/* 1. HERO SECTION */}
      <section className="py-20 sm:py-24 bg-surface-container-low border-b border-outline-variant">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 bg-surface border border-outline-variant px-3.5 py-1.5 font-mono text-[10px] font-bold tracking-widest uppercase rounded-full">
            <Tag className="w-3.5 h-3.5 text-accent" />
            <span className="text-accent">2026 Price Schedule · All 38 Services</span>
          </div>

          <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-primary leading-tight">
            Centralized Pricing Hub
          </h1>

          <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Transparent guide pricing for custom aluminium windows, folding doors, security gates, and repairs near you in Gauteng. All figures in South African Rands (ZAR).
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href={getWhatsAppQuoteUrl("Hi Aluminium Designs, I would like to request an itemized price quotation.")}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 font-mono text-[11px] font-bold uppercase tracking-widest rounded-full transition-colors shadow-sm"
            >
              Request Custom Quote
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`tel:${businessContact.phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-2 border border-outline-variant bg-surface hover:bg-surface-container px-6 py-3 font-mono text-[11px] font-bold uppercase tracking-widest text-primary rounded-full transition-colors"
            >
              <Phone className="w-4 h-4 text-accent" />
              {businessContact.phone}
            </a>
          </div>
        </div>
      </section>

      {/* 2. PRICING DISCLOSURE & TRUST BANNER */}
      <section className="py-8 bg-surface border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-outline-variant bg-surface-container-lowest p-6 rounded-lg shadow-xs grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div>
                <h4 className="font-sans font-bold text-xs uppercase text-primary">
                  Turnkey Installation Included
                </h4>
                <p className="text-[11px] text-on-surface-variant mt-0.5 leading-relaxed">
                  Guide prices include precision fabrication, on-site installation, and weather-seal silicone waterproofing.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FileCheck className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div>
                <h4 className="font-sans font-bold text-xs uppercase text-primary">
                  SANS 10400 Certified Safety
                </h4>
                <p className="text-[11px] text-on-surface-variant mt-0.5 leading-relaxed">
                  Every unit is fitted with certified toughened or laminated glass complying with national building codes.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div>
                <h4 className="font-sans font-bold text-xs uppercase text-primary">
                  No Hidden Call-Out Fees
                </h4>
                <p className="text-[11px] text-on-surface-variant mt-0.5 leading-relaxed">
                  On-site technical consultations are 100% credited against your installation invoice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TIERED PRICING TABLES GROUPED BY THE 5 CATEGORIES */}
      <section className="py-16 bg-surface border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {rawServiceTaxonomy.map((categoryGroup) => {
            const categoryServices = allTaxonomyServices.filter(
              (s) => s.category === categoryGroup.category
            );

            return (
              <div
                key={categoryGroup.category}
                id={categoryGroup.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                className="space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-outline-variant pb-3 gap-2">
                  <div>
                    <h2 className="font-sans text-xl sm:text-2xl font-bold uppercase tracking-tight text-primary">
                      {categoryGroup.category}
                    </h2>
                    <p className="text-xs text-on-surface-variant mt-0.5">
                      {categoryGroup.description}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-accent font-bold uppercase">
                    {categoryServices.length} Services
                  </span>
                </div>

                <div className="overflow-x-auto border border-outline-variant bg-surface-container-lowest rounded-sm shadow-xs">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-surface-container-low border-b border-outline-variant font-mono text-[10px] uppercase tracking-wider text-on-surface">
                        <th className="p-3.5 sm:p-4 font-bold">Service / Product Name</th>
                        <th className="p-3.5 sm:p-4 font-bold">Base / Starting Price</th>
                        <th className="p-3.5 sm:p-4 font-bold hidden md:table-cell">Unit Metric</th>
                        <th className="p-3.5 sm:p-4 font-bold hidden lg:table-cell">Scope &amp; Inclusions</th>
                        <th className="p-3.5 sm:p-4 font-bold text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant">
                      {categoryServices.map((service) => (
                        <tr key={service.slug} className="hover:bg-surface-container/50 transition-colors">
                          <td className="p-3.5 sm:p-4 font-sans font-bold text-primary">
                            <Link
                              href={`/services/${service.slug}`}
                              className="hover:text-accent transition-colors inline-flex items-center gap-1.5"
                            >
                              {service.name}
                              {service.popular && (
                                <span className="bg-accent/10 text-accent font-mono text-[9px] px-1.5 py-0.2 rounded font-bold uppercase">
                                  Popular
                                </span>
                              )}
                            </Link>
                            <span className="block text-[11px] text-on-surface-variant font-normal mt-0.5 md:hidden">
                              {service.priceUnit}
                            </span>
                          </td>

                          <td className="p-3.5 sm:p-4 font-mono font-bold text-primary text-sm whitespace-nowrap">
                            {service.startingPriceDisplay}
                          </td>

                          <td className="p-3.5 sm:p-4 font-mono text-on-surface-variant hidden md:table-cell">
                            {service.priceUnit}
                          </td>

                          <td className="p-3.5 sm:p-4 text-on-surface-variant leading-relaxed hidden lg:table-cell max-w-xs">
                            {service.shortDescription}
                          </td>

                          <td className="p-3.5 sm:p-4 text-right whitespace-nowrap space-x-2">
                            <Link
                              href={`/services/${service.slug}`}
                              className="inline-block py-1.5 px-2.5 border border-outline-variant bg-surface hover:bg-surface-container text-[10px] font-mono font-bold uppercase tracking-wider text-primary rounded transition-colors"
                            >
                              Specs
                            </Link>
                            <Link
                              href={getWhatsAppQuoteUrl(`Hi, I would like to get a quote for ${service.name} (${service.startingPriceDisplay}).`)}
                              className="inline-block py-1.5 px-3 bg-primary hover:bg-primary/90 text-white text-[10px] font-mono font-bold uppercase tracking-wider rounded transition-colors"
                            >
                              Quote
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. ATOMIC ANSWER FAQS (AEO) */}
      <section className="py-16 bg-surface-container-low border-b border-outline-variant">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
              Pricing FAQs &amp; Clarifications
            </span>
            <h3 className="mt-2 font-sans text-2xl sm:text-3xl font-bold uppercase tracking-tight text-primary">
              Frequently Asked Pricing Questions
            </h3>
          </div>

          <div className="space-y-4">
            <div className="border border-outline-variant bg-surface-container-lowest p-5 rounded-md">
              <h4 className="font-sans text-sm font-bold text-primary flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                What is the price per metre for seamless aluminium gutters in Johannesburg?
              </h4>
              <p className="mt-2 text-xs sm:text-sm text-on-surface-variant leading-relaxed pl-6">
                In Johannesburg and Pretoria, seamless aluminium gutters start from R140 to R180 per linear metre. This includes on-site mobile factory extrusion, internal hanger brackets, stop-ends, outlets, and professional fitment to your fascia boards.
              </p>
            </div>

            <div className="border border-outline-variant bg-surface-container-lowest p-5 rounded-md">
              <h4 className="font-sans text-sm font-bold text-primary flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                Why does my aluminium window not stay open, and how much is the repair?
              </h4>
              <p className="mt-2 text-xs sm:text-sm text-on-surface-variant leading-relaxed pl-6">
                When a window will not remain propped open or sags, the internal friction stay hinges have worn out. We replace friction stays starting from R450 per window, using heavy-duty 304 stainless steel mechanisms with adjustable friction brass calipers.
              </p>
            </div>

            <div className="border border-outline-variant bg-surface-container-lowest p-5 rounded-md">
              <h4 className="font-sans text-sm font-bold text-primary flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                Do I need a glazing compliance certificate for new doors or windows?
              </h4>
              <p className="mt-2 text-xs sm:text-sm text-on-surface-variant leading-relaxed pl-6">
                Yes. Under South African National Standards (SANS 10400 Part N), any glass installed within 300mm of floor level (doors, sidelights, full-length windows) must be certified safety glass. Aluminium Designs supplies a formal Glazing Compliance Certificate upon completion.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
