"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  Tag,
  ShieldCheck,
  Layers,
  Wrench,
  Lock,
  Flame,
  HelpCircle,
} from "lucide-react";
import {
  allTaxonomyServices,
  rawServiceTaxonomy,
  ServiceCategory,
  ServiceTaxonomyItem,
} from "@/data/serviceTaxonomy";

const categoryIcons: Record<ServiceCategory, React.ReactNode> = {
  "Aluminium & Doors": <Layers className="w-4 h-4 text-accent" />,
  "Glass & Enclosures": <Flame className="w-4 h-4 text-accent" />,
  "Security & Fencing": <Lock className="w-4 h-4 text-accent" />,
  "Steel & Custom Works": <ShieldCheck className="w-4 h-4 text-accent" />,
  "Maintenance & Repairs": <Wrench className="w-4 h-4 text-accent" />,
};

export default function ServiceTaxonomyGrid() {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | "All">("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = useMemo(() => {
    let list = allTaxonomyServices;

    if (selectedCategory !== "All") {
      list = list.filter((s) => s.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.shortDescription.toLowerCase().includes(q) ||
          s.category.toLowerCase().includes(q)
      );
    }

    return list;
  }, [selectedCategory, searchQuery]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: allTaxonomyServices.length };
    for (const group of rawServiceTaxonomy) {
      counts[group.category] = group.services.length;
    }
    return counts;
  }, []);

  return (
    <div className="space-y-10">
      {/* 1. CONTROLS: Category Pills + Search Filter */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-outline-variant pb-6">
        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar max-w-full pb-1 flex-wrap">
          <button
            type="button"
            onClick={() => setSelectedCategory("All")}
            className={`rounded-full px-3.5 py-1.5 font-mono text-[11px] font-bold uppercase tracking-wider transition-colors shrink-0 ${
              selectedCategory === "All"
                ? "bg-primary text-white shadow-xs"
                : "bg-surface-container-lowest border border-outline-variant text-secondary hover:border-accent"
            }`}
          >
            All Services ({categoryCounts["All"]})
          </button>

          {rawServiceTaxonomy.map((group) => (
            <button
              key={group.category}
              type="button"
              onClick={() => setSelectedCategory(group.category)}
              className={`rounded-full px-3.5 py-1.5 font-mono text-[11px] font-bold uppercase tracking-wider transition-colors shrink-0 flex items-center gap-1.5 ${
                selectedCategory === group.category
                  ? "bg-primary text-white shadow-xs"
                  : "bg-surface-container-lowest border border-outline-variant text-secondary hover:border-accent"
              }`}
            >
              {group.category} ({categoryCounts[group.category]})
            </button>
          ))}
        </div>

        {/* Search Box */}
        <div className="relative w-full md:w-72 shrink-0">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant/60" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search all 38 services..."
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-surface-container-lowest border border-outline-variant rounded-full text-on-surface focus:outline-none focus:border-accent"
          />
        </div>
      </div>

      {/* 2. GROUPED PRESENTATION (When 'All' and no search filter) */}
      {selectedCategory === "All" && !searchQuery ? (
        <div className="space-y-16">
          {rawServiceTaxonomy.map((group) => {
            const groupServices = allTaxonomyServices.filter(
              (s) => s.category === group.category
            );

            return (
              <section key={group.category} className="space-y-6">
                {/* Modern Bordered Header Container for Subtitle */}
                <div className="border border-outline-variant bg-surface-container-low p-5 sm:p-6 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xs">
                  <div className="space-y-1.5 max-w-3xl">
                    <div className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
                      {categoryIcons[group.category]}
                      <span>Division &middot; {groupServices.length} Products</span>
                    </div>

                    <h2 className="font-sans text-2xl sm:text-3xl font-bold uppercase tracking-tight text-primary">
                      {group.category}
                    </h2>

                    <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                      {group.description}
                    </p>
                  </div>

                  <Link
                    href="/pricing"
                    className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-primary hover:text-accent bg-surface border border-outline-variant hover:border-accent px-4 py-2.5 rounded-full transition-colors shrink-0 shadow-2xs self-start md:self-center"
                  >
                    <Tag className="w-3.5 h-3.5 text-accent" />
                    View Rates &rarr;
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                  {groupServices.map((service) => (
                    <ServiceCardItem key={service.slug} service={service} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      ) : (
        /* 3. FILTERED GRID VIEW (When category selected or search active) */
        <div className="space-y-6">
          {/* If a specific category is selected, display its standout bordered subtitle container */}
          {selectedCategory !== "All" && (() => {
            const activeGroup = rawServiceTaxonomy.find(
              (g) => g.category === selectedCategory
            );
            if (!activeGroup) return null;
            return (
              <div className="border border-outline-variant bg-surface-container-low p-5 sm:p-6 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xs">
                <div className="space-y-1.5 max-w-3xl">
                  <div className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
                    {categoryIcons[activeGroup.category]}
                    <span>Division &middot; {filteredServices.length} Products</span>
                  </div>

                  <h2 className="font-sans text-2xl sm:text-3xl font-bold uppercase tracking-tight text-primary">
                    {activeGroup.category}
                  </h2>

                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    {activeGroup.description}
                  </p>
                </div>

                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-primary hover:text-accent bg-surface border border-outline-variant hover:border-accent px-4 py-2.5 rounded-full transition-colors shrink-0 shadow-2xs self-start md:self-center"
                >
                  <Tag className="w-3.5 h-3.5 text-accent" />
                  View Rates &rarr;
                </Link>
              </div>
            );
          })()}

          {/* Search bar status indicator */}
          {searchQuery && (
            <div className="border border-outline-variant bg-surface-container-low p-4 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs">
              <div className="border border-outline-variant bg-surface px-3.5 py-1.5 rounded-md shadow-2xs inline-block">
                <span className="font-mono text-xs uppercase font-bold text-primary">
                  Showing {filteredServices.length} services
                  {selectedCategory !== "All" && ` in ${selectedCategory}`}
                  {searchQuery && ` matching "${searchQuery}"`}
                </span>
              </div>

              <Link
                href="/pricing"
                className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-accent hover:text-accent-hover bg-surface border border-outline-variant hover:border-accent px-3.5 py-1.5 rounded-md transition-colors shadow-2xs shrink-0"
              >
                <Tag className="w-3.5 h-3.5 text-accent" />
                Central Pricing Hub &rarr;
              </Link>
            </div>
          )}

          {filteredServices.length === 0 ? (
            <div className="text-center py-16 border border-outline-variant bg-surface-container-lowest p-8 rounded-lg">
              <HelpCircle className="w-8 h-8 text-on-surface-variant mx-auto mb-3" />
              <p className="font-sans font-bold text-primary">No services found</p>
              <p className="text-xs text-on-surface-variant mt-1">
                Try a different keyword or reset your filter.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-4 px-4 py-2 bg-primary text-white font-mono text-[11px] font-bold uppercase tracking-wider rounded-full"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {filteredServices.map((service) => (
                <ServiceCardItem key={service.slug} service={service} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function ServiceCardItem({ service }: { service: ServiceTaxonomyItem }) {
  return (
    <div className="border border-outline-variant bg-surface-container-lowest p-5 flex flex-col justify-between hover:border-accent hover:shadow-sm transition-all rounded-sm group">
      <div className="space-y-3">
        {/* Category badge + starting price */}
        <div className="flex items-center justify-between gap-2">
          <span className="inline-block bg-surface-container px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider text-on-surface-variant">
            {service.category}
          </span>
          {service.popular && (
            <span className="bg-accent/10 border border-accent/20 text-accent px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase tracking-wider">
              Popular
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-sans text-base font-bold uppercase tracking-tight text-primary group-hover:text-accent transition-colors leading-snug">
          {service.name}
        </h3>

        {/* Short description */}
        <p className="text-xs text-on-surface-variant leading-relaxed line-clamp-3">
          {service.shortDescription}
        </p>
      </div>

      {/* Pricing and Action Links */}
      <div className="pt-4 mt-4 border-t border-outline-variant space-y-3">
        <div className="flex items-center justify-between text-xs">
          <span className="text-[11px] font-mono text-on-surface-variant uppercase">Starting:</span>
          <div className="text-right">
            <span className="font-mono font-bold text-primary text-sm">
              {service.startingPriceDisplay}
            </span>
            <span className="block text-[10px] text-on-surface-variant">
              {service.priceUnit}
            </span>
          </div>
        </div>

        <div className="pt-1">
          <Link
            href={`/services/${service.slug}`}
            className="block text-center py-2 px-3 border border-outline-variant bg-surface hover:bg-surface-container font-mono text-[10px] font-bold uppercase tracking-wider text-primary hover:text-accent rounded transition-colors"
          >
            Specs &amp; Details &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
