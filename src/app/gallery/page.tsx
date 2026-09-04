import React from "react";
import { Metadata } from "next";
import { Layers } from "lucide-react";
import GalleryGrid from "@/components/GalleryGrid";
import CTASection from "@/components/CTASection";
import { absoluteUrl, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aluminium Installation Portfolio",
  description:
    "Browse our completed residential, commercial, and retail projects. Precision fabrication and installation gallery across Gauteng.",
  alternates: { canonical: `${siteUrl}/gallery` },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: `${siteUrl}/gallery`,
    siteName: "Aluminium Designs",
    title: "Aluminium Installation Portfolio | Aluminium Designs",
    description:
      "Browse our completed residential, commercial, and retail aluminium & steel installations across Gauteng.",
    images: [
      {
        url: absoluteUrl("/images/hero_exterior.png"),
        width: 1200,
        height: 630,
        alt: "Aluminium Designs Installation Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aluminium Installation Portfolio | Aluminium Designs",
    description:
      "Browse our completed residential, commercial, and retail aluminium & steel installations across Gauteng.",
    images: [absoluteUrl("/images/hero_exterior.png")],
  },
};

export default function GalleryPage() {
  return (
    <div className="relative bg-surface text-on-surface">
      {/* Header */}
      <section className="border-b border-outline-variant bg-surface-container-low py-10 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl space-y-4 px-4 text-center sm:space-y-5 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-surface border border-outline-variant px-3.5 py-1 font-mono text-[10px] font-bold tracking-widest uppercase rounded-full">
            <Layers className="w-3.5 h-3.5 text-accent" />
            <span className="text-accent">Completed Installations</span>
          </div>
          <h1 className="font-sans text-3xl font-bold uppercase leading-[1.05] tracking-tight text-primary sm:text-5xl">
            Our Aluminium Installation Portfolio
          </h1>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-on-surface-variant sm:text-base">
            Browse completed contracts showing precision engineering, clean lines, and professional
            glass fitting across residential and commercial developments.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="border-b border-outline-variant bg-surface py-8 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
          <GalleryGrid />
        </div>
      </section>

      <CTASection />
    </div>
  );
}
