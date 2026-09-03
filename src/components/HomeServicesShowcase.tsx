"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { aluminiumServices, steelServices } from "@/data/services";
import ServiceCard from "./ServiceCard";

export default function HomeServicesShowcase() {
  const [activeTab, setActiveTab] = useState<"aluminium" | "steel">("aluminium");

  // Select top 4 high-demand products for each category
  const topAluminium = aluminiumServices.slice(0, 4);
  const topSteel = steelServices.slice(0, 4);

  return (
    <div>
      {/* Category Toggle Tabs */}
      <div className="mb-10 flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={() => setActiveTab("aluminium")}
          className={`flex items-center gap-2 rounded-full px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
            activeTab === "aluminium"
              ? "bg-primary text-white shadow-md ring-2 ring-primary/20"
              : "bg-surface-container border border-outline-variant text-secondary hover:text-primary hover:bg-surface-container-high"
          }`}
        >
          <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
          Aluminium Windows &amp; Doors
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("steel")}
          className={`flex items-center gap-2 rounded-full px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
            activeTab === "steel"
              ? "bg-primary text-white shadow-md ring-2 ring-primary/20"
              : "bg-surface-container border border-outline-variant text-secondary hover:text-primary hover:bg-surface-container-high"
          }`}
        >
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
          Steel Security &amp; Gates
        </button>
      </div>

      {/* Dynamic Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {activeTab === "aluminium"
          ? topAluminium.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                shortDescription={service.shortDescription}
                slug={service.slug}
                imagePath={service.imagePath}
                category="aluminium"
                features={service.features}
              />
            ))
          : topSteel.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                shortDescription={service.shortDescription}
                slug={service.slug}
                imagePath={service.imagePath}
                category="steel"
                features={service.features}
              />
            ))}
      </div>

      {/* Category Footers */}
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border border-outline-variant/60 bg-surface-container-lowest p-5 sm:p-6">
        <div className="text-center sm:text-left">
          <p className="font-sans text-sm font-bold uppercase tracking-tight text-primary">
            {activeTab === "aluminium"
              ? "Looking for glass enclosures, shopfronts, or shower doors?"
              : "Need automated driveway gates, burglar bars, or strong carports?"}
          </p>
          <p className="mt-1 text-xs text-on-surface-variant">
            {activeTab === "aluminium"
              ? "We custom-build over 25 styles of sliding doors, folding stackers, windows, and patio enclosures."
              : "Browse all 15 custom steel security products, gates, fences, and carports made in Gauteng."}
          </p>
        </div>

        <Link
          href={activeTab === "aluminium" ? "/services" : "/steel-works"}
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-mono text-[11px] font-bold uppercase tracking-wider text-white transition-all hover:bg-secondary"
        >
          {activeTab === "aluminium" ? "View All Aluminium" : "Explore Steel Products"}
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
