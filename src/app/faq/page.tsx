import React from "react";
import { Metadata } from "next";
import { HelpCircle, Info, Construction, Banknote, type LucideIcon } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";

type FaqCategory = "general" | "installation" | "pricing";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to questions about lead times, custom measurements, glass safety, and pricing estimates.",
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
      title: "General Inquiries",
      description: "Profile colours, custom sizing options, and design limitations.",
      icon: Info,
    },
    {
      id: "installation",
      title: "Installation & Regulations",
      description: "SANS safety codes, double glazing, and site fittings.",
      icon: Construction,
    },
    {
      id: "pricing",
      title: "Quotations & Pricing",
      description: "Deposit structures, structural warranties, and on-site measurements.",
      icon: Banknote,
    },
  ];

  return (
    <div className="relative bg-surface text-on-surface">
      {/* Header */}
      <section className="py-24 bg-surface-container-low border-b border-outline-variant">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 bg-surface border border-outline-variant px-3.5 py-1 font-mono text-[10px] font-bold tracking-widest uppercase rounded-full">
            <HelpCircle className="w-3.5 h-3.5 text-secondary" />
            <span className="text-secondary">Help Centre</span>
          </div>
          <h1 className="font-sans text-4xl sm:text-5xl font-bold uppercase tracking-tight text-primary">
            Frequently Asked Questions
          </h1>
          <p className="text-on-surface-variant text-base leading-relaxed max-w-2xl mx-auto">
            Browse our compiled FAQ database to learn more about custom size manufacturing, safety
            regulations, and lead times.
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
                  <div className="w-10 h-10 border border-outline-variant bg-surface-container flex items-center justify-center text-secondary rounded-xl">
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
