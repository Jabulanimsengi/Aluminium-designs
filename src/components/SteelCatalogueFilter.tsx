"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Wrench, Lock, Fence, Warehouse } from "lucide-react";
import { steelServices } from "@/data/services";
import { getWhatsAppQuoteUrl } from "@/lib/site";
import WhatsAppIcon from "./WhatsAppIcon";

const subCategories = [
  { id: "all", label: "All Steel Works (15)", icon: null },
  {
    id: "gates",
    label: "Gates & Automation",
    icon: Lock,
    serviceIds: ["security-gates", "driveway-gates", "trellis-doors", "trellis-security-gates", "gate-motors"],
  },
  {
    id: "burglar-bars",
    label: "Burglar Bars",
    icon: ShieldCheck,
    serviceIds: ["burglar-bars", "clear-burglar-bars"],
  },
  {
    id: "fencing",
    label: "Fencing & Balustrades",
    icon: Fence,
    serviceIds: ["palisade-fencing", "mesh-fencing", "steel-balustrades"],
  },
  {
    id: "structures",
    label: "Carports & Structures",
    icon: Warehouse,
    serviceIds: ["steel-carports", "steel-sheds", "steel-staircases"],
  },
  {
    id: "repairs",
    label: "Welding & Repairs",
    icon: Wrench,
    serviceIds: ["custom-welding", "steel-repairs", "steel-works"],
  },
];

export default function SteelCatalogueFilter() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices = steelServices.filter((service) => {
    if (activeCategory === "all") return true;
    const cat = subCategories.find((c) => c.id === activeCategory);
    return cat?.serviceIds?.includes(service.id);
  });

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="mb-10 flex flex-wrap justify-center gap-2 sm:gap-2.5">
        {subCategories.map((cat) => {
          const isSelected = activeCategory === cat.id;
          const Icon = cat.icon;

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-1.5 rounded-full px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                isSelected
                  ? "bg-primary text-white shadow-md ring-2 ring-primary/20"
                  : "bg-surface-container border border-outline-variant text-secondary hover:text-primary hover:bg-surface-container-high"
              }`}
            >
              {Icon && <Icon className="h-3.5 w-3.5" />}
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Grid of Steel Products */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => {
          const quoteUrl = getWhatsAppQuoteUrl(
            `Hi Aluminium Designs, I would like an estimate for ${service.title}.`
          );

          return (
            <article
              key={service.id}
              className="group border border-outline-variant bg-surface-container-lowest overflow-hidden flex flex-col justify-between shadow-xs hover:border-accent transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div>
                <div className="relative h-56 w-full overflow-hidden bg-surface-container">
                  <Image
                    src={service.imagePath}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 bg-black/80 text-white font-mono text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-xs border border-white/20 flex items-center gap-1">
                    <ShieldCheck className="h-3 w-3 text-accent" />
                    Steel Security
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <h3 className="font-sans font-bold text-lg uppercase text-primary group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed line-clamp-3">
                    {service.shortDescription}
                  </p>

                  {service.features && service.features.length > 0 && (
                    <div className="flex flex-wrap gap-1 pt-1">
                      {service.features.slice(0, 2).map((feat, i) => (
                        <span
                          key={i}
                          className="rounded-sm bg-surface-container px-2 py-0.5 font-mono text-[9px] font-medium text-secondary"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-outline-variant/40 mt-4">
                <div className="pt-4 flex items-center justify-between gap-2">
                  <Link
                    href={service.slug}
                    className="inline-flex items-center gap-1 font-mono text-[10px] font-bold uppercase tracking-widest text-primary hover:text-accent transition-colors"
                  >
                    View Specs
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <a
                    href={quoteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-black px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-wider transition-colors"
                  >
                    <WhatsAppIcon className="h-3 w-3" />
                    Quote
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
