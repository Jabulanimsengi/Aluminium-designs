import React from "react";
import { Metadata } from "next";
import { Layers } from "lucide-react";
import GalleryGrid from "@/components/GalleryGrid";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Aluminium Installation Portfolio",
  description:
    "Browse our completed residential, commercial, and retail projects. Precision fabrication and installation gallery.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <div className="relative bg-surface text-on-surface">
      {/* Header */}
      <section className="py-16 sm:py-20 lg:py-24 bg-surface-container-low border-b border-outline-variant">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 bg-surface border border-outline-variant px-3.5 py-1 font-mono text-[10px] font-bold tracking-widest uppercase rounded-full">
            <Layers className="w-3.5 h-3.5 text-secondary" />
            <span className="text-secondary">Completed Installations</span>
          </div>
          <h1 className="font-sans text-4xl sm:text-5xl font-bold uppercase tracking-tight text-primary">
            Our Aluminium Installation Portfolio
          </h1>
          <p className="text-on-surface-variant text-base leading-relaxed max-w-2xl mx-auto">
            Browse completed contracts showing precision engineering, clean lines, and professional
            glass fitting across residential and commercial developments.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 sm:py-20 lg:py-24 bg-surface border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid />
        </div>
      </section>

      <CTASection />
    </div>
  );
}
