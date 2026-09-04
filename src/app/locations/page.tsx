import React from "react";
import Link from "next/link";
import { MapPin, ChevronRight, Map } from "lucide-react";
import { gautengLocations } from "@/data/locations";
import CTASection from "@/components/CTASection";

import type { Metadata } from "next";
import { absoluteUrl, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service Areas in Gauteng | Aluminium Designs",
  description:
    "View our list of service areas across Gauteng. We manufacture and install custom aluminium windows, doors, and security gates in Johannesburg, Pretoria, and surrounding areas.",
  alternates: { canonical: `${siteUrl}/locations` },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: `${siteUrl}/locations`,
    siteName: "Aluminium Designs",
    title: "Service Areas in Gauteng | Aluminium Designs",
    description:
      "Custom aluminium windows, sliding doors, and security gates across Johannesburg, Pretoria, East Rand, and West Rand.",
    images: [
      {
        url: absoluteUrl("/images/hero_exterior.png"),
        width: 1200,
        height: 630,
        alt: "Aluminium Designs Gauteng Service Locations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Service Areas in Gauteng | Aluminium Designs",
    description:
      "Custom aluminium windows, sliding doors, and security gates across Johannesburg, Pretoria, East Rand, and West Rand.",
    images: [absoluteUrl("/images/hero_exterior.png")],
  },
};

export default function LocationsDirectory() {
  // Group locations by municipality
  const groupedLocations = gautengLocations.reduce((acc, loc) => {
    if (!acc[loc.municipality]) {
      acc[loc.municipality] = [];
    }
    acc[loc.municipality].push(loc);
    return acc;
  }, {} as Record<string, typeof gautengLocations>);

  // Sort municipalities alphabetically
  const municipalities = Object.keys(groupedLocations).sort();

  return (
    <div className="bg-surface text-on-surface">
      {/* Header Section */}
      <section className="relative py-20 lg:py-32 bg-surface-container-low border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 border border-outline-variant bg-surface-container text-accent mb-2 shadow-sm">
            <Map className="w-8 h-8" />
          </div>
          <h1 className="font-sans font-bold uppercase tracking-tight text-4xl sm:text-5xl text-primary">
            Our Gauteng Service Areas
          </h1>
          <p className="font-sans text-on-surface-variant text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            We manufacture and install custom aluminium windows, patio doors, and security gates across all 5 municipalities in Gauteng. Find your suburb or town below.
          </p>
        </div>
      </section>

      {/* Directory Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {municipalities.map((municipality) => {
            const locations = groupedLocations[municipality];
            
            // Sort locations alphabetically within the municipality
            const sortedLocations = [...locations].sort((a, b) => a.name.localeCompare(b.name));

            return (
              <div key={municipality} className="space-y-8">
                <div className="flex items-center space-x-4 border-b border-outline-variant pb-4">
                  <h2 className="font-sans font-bold uppercase tracking-tight text-2xl sm:text-3xl text-primary">
                    {municipality}
                  </h2>
                  <span className="bg-surface-container text-accent font-mono text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-outline-variant">
                    {locations.length} Areas
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {sortedLocations.map((loc) => (
                    <Link
                      key={loc.id}
                      href={`/locations/${loc.id}`}
                      className="group flex items-center justify-between p-4 border border-outline-variant bg-surface-container-lowest hover:border-accent hover:bg-surface-container transition-all shadow-sm"
                    >
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-4 h-4 text-outline group-hover:text-accent transition-colors" />
                        <span className="font-sans font-medium text-sm text-on-surface-variant group-hover:text-primary transition-colors">
                          {loc.name}
                        </span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-outline group-hover:text-accent transition-transform group-hover:translate-x-1" />
                    </Link>
                  ))}
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
