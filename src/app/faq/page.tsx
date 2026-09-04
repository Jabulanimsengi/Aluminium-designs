import React from "react";
import { Metadata } from "next";
import { HelpCircle, Info, Construction, Banknote, type LucideIcon } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import { absoluteUrl, siteUrl } from "@/lib/site";
import { faqs } from "@/data/faqs";

type FaqCategory = "general" | "installation" | "pricing";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Aluminium Designs",
  description:
    "Find clear answers about aluminium windows, sliding doors, steel security gates, delivery times, custom sizing, warranties, and free home quotes.",
  alternates: { canonical: `${siteUrl}/faq` },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: `${siteUrl}/faq`,
    siteName: "Aluminium Designs",
    title: "Frequently Asked Questions | Aluminium Designs",
    description:
      "Find clear answers about aluminium windows, doors, security gates, delivery times, custom sizes, safety glass, warranties, and pricing across Gauteng.",
    images: [
      {
        url: absoluteUrl("/images/hero_exterior.png"),
        width: 1200,
        height: 630,
        alt: "Aluminium Designs Frequently Asked Questions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions | Aluminium Designs",
    description:
      "Find clear answers about aluminium windows, doors, security gates, delivery times, custom sizes, safety glass, warranties, and pricing across Gauteng.",
    images: [absoluteUrl("/images/hero_exterior.png")],
  },
};

export default function FAQPage() {
  const sections: Array<{
    id: FaqCategory;
    title: string;
    description: string;
    icon: LucideIcon;
  }> = [
    {
      id: "general",
      title: "Products & Colours",
      description: "Frame finishes, custom sizing, and glass options for your home.",
      icon: Info,
    },
    {
      id: "installation",
      title: "Fitting & Installation",
      description: "Delivery lead times, home visits, and clean fitting procedures.",
      icon: Construction,
    },
    {
      id: "pricing",
      title: "Pricing & Warranties",
      description: "Payment terms, itemized quotes, and long-term frame guarantees.",
      icon: Banknote,
    },
  ];

  return (
    <div className="relative bg-surface text-on-surface">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
      {/* Header */}
      <section className="py-24 bg-surface-container-low border-b border-outline-variant">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 bg-surface border border-outline-variant px-3.5 py-1 font-mono text-[10px] font-bold tracking-widest uppercase rounded-full">
            <HelpCircle className="w-3.5 h-3.5 text-accent" />
            <span className="text-accent">Homeowner Help Centre</span>
          </div>
          <h1 className="font-sans text-4xl sm:text-5xl font-bold uppercase tracking-tight text-primary">
            Frequently Asked Questions
          </h1>
          <p className="text-on-surface-variant text-base leading-relaxed max-w-2xl mx-auto">
            Have questions about ordering windows, delivery times, or guarantees? Find quick, simple answers below.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="py-24 bg-surface space-y-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <div
                key={section.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-b border-outline-variant pb-16 last:border-b-0 last:pb-0"
              >
                <div className="lg:col-span-4 space-y-4">
                  <div className="w-10 h-10 border border-outline-variant bg-surface-container flex items-center justify-center text-accent shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-sans font-bold text-2xl uppercase tracking-tight text-primary">
                    {section.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed max-w-sm">
                    {section.description}
                  </p>
                </div>
                <div className="lg:col-span-8">
                  <FAQAccordion category={section.id} />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
