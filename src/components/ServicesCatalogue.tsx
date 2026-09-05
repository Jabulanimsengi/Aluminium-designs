"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Hammer, ShieldCheck, ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";

interface ServicesCatalogueProps {
  services: Service[];
}

type FilterCategory = "all" | "aluminium" | "steel";

export default function ServicesCatalogue({ services }: ServicesCatalogueProps) {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("all");

  const aluminiumCount = useMemo(
    () => services.filter((s) => s.category === "aluminium").length,
    [services]
  );
  const steelCount = useMemo(
    () => services.filter((s) => s.category === "steel").length,
    [services]
  );

  const filteredServices = useMemo(() => {
    if (activeCategory === "all") return services;
    return services.filter((s) => s.category === activeCategory);
  }, [services, activeCategory]);

  return (
    <div className="space-y-10">
      {/* Category Filter Tabs */}
      <div className="flex flex-col items-center justify-center gap-4 border-b border-outline-variant pb-6 text-center">
        <div className="flex items-center justify-center gap-2 overflow-x-auto no-scrollbar max-w-full pb-1 flex-wrap">
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={`rounded-full px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-wider transition-colors shrink-0 ${
              activeCategory === "all"
                ? "bg-primary text-white shadow-xs"
                : "bg-surface-container-lowest border border-outline-variant text-secondary hover:border-accent"
            }`}
          >
            All Products ({services.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory("aluminium")}
            className={`rounded-full px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-wider transition-colors shrink-0 ${
              activeCategory === "aluminium"
                ? "bg-primary text-white shadow-xs"
                : "bg-surface-container-lowest border border-outline-variant text-secondary hover:border-accent"
            }`}
          >
            Aluminium &amp; Glass ({aluminiumCount})
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory("steel")}
            className={`rounded-full px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-wider transition-colors shrink-0 ${
              activeCategory === "steel"
                ? "bg-primary text-white shadow-xs"
                : "bg-surface-container-lowest border border-outline-variant text-secondary hover:border-accent"
            }`}
          >
            Steel Works &amp; Security ({steelCount})
          </button>
        </div>

        <Link
          href="/steel-works"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-secondary hover:text-accent transition-colors"
        >
          <Hammer className="w-3.5 h-3.5" />
          Dedicated Steel Works Hub
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Steel Highlight Banner */}
      {activeCategory === "steel" && (
        <div className="border border-outline-variant bg-surface-container-low p-6 sm:p-8 flex flex-col md:flex-row items-center text-center md:text-left justify-between gap-6 shadow-xs max-w-5xl mx-auto">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
              <ShieldCheck className="w-4 h-4 text-accent" />
              Heavy-Duty Security Division
            </div>
            <h2 className="font-sans text-xl sm:text-2xl font-bold uppercase tracking-tight text-primary">
              Custom Steel Works &amp; Security Barriers
            </h2>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              We manufacture and install custom mild steel and galvanized security gates, burglar bars, automated driveway gates, and palisade fencing across all of Gauteng.
            </p>
          </div>
          <Link
            href="/steel-works"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-5 py-2.5 font-mono text-[10px] font-bold uppercase tracking-widest transition-colors rounded-full shrink-0 shadow-sm"
          >
            Explore Steel Division
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}

      {/* Grid of Services */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredServices.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            shortDescription={service.shortDescription}
            slug={service.slug}
            imagePath={service.imagePath}
            category={service.category}
            features={service.features}
          />
        ))}
      </div>
    </div>
  );
}
