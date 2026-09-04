"use client";

import React, { useState } from "react";
import { Check, ShieldCheck, Tag, Sparkles, ArrowRight } from "lucide-react";
import { getWhatsAppQuoteUrl } from "@/lib/site";
import WhatsAppIcon from "./WhatsAppIcon";

interface ServicePricingAndFinishesProps {
  serviceTitle: string;
  startingPrice?: string;
  priceUnit?: string;
  priceFactors?: string[];
}

const standardFinishes = [
  {
    id: "charcoal",
    name: "Matte Charcoal Grey",
    hex: "#374151",
    border: "border-gray-500",
    description: "South Africa's most popular modern home finish. Blends effortlessly with contemporary concrete and neutral brickwork.",
    badge: "Most Popular",
  },
  {
    id: "black",
    name: "Matte Black",
    hex: "#18181b",
    border: "border-zinc-700",
    description: "Bold, clean lines offering strong contrast for modern, farmhouse, or minimalist home interiors.",
    badge: "Modern",
  },
  {
    id: "white",
    name: "Pure White",
    hex: "#f9fafb",
    border: "border-gray-300",
    description: "Clean, timeless, and bright. Ideal for traditional, coastal, and bright open-plan residential homes.",
    badge: "Timeless",
  },
  {
    id: "bronze",
    name: "Classic Bronze",
    hex: "#4a3728",
    border: "border-amber-900",
    description: "Warm earthy tone ideal for face-brick homes, residential estates with strict color guidelines, and natural stone styles.",
    badge: "Estate Approved",
  },
  {
    id: "silver",
    name: "Natural Anodised Silver",
    hex: "#d1d5db",
    border: "border-gray-400",
    description: "Class 25 micron anodised coating providing maximum corrosion and salt-spray resistance.",
    badge: "High Durability",
  },
];

export default function ServicePricingAndFinishes({
  serviceTitle,
  startingPrice = "Custom Quote",
  priceUnit = "per unit fitted",
  priceFactors = [
    "Custom opening dimensions & configuration",
    "Choice of safety glass (clear laminate, Low-E, or tinted)",
    "Hardware specification & multipoint deadbolts",
    "Professional on-site installation & clean-up",
  ],
}: ServicePricingAndFinishesProps) {
  const [selectedFinish, setSelectedFinish] = useState(standardFinishes[0]);

  const quoteUrl = getWhatsAppQuoteUrl(
    `Hi Aluminium Designs, I am interested in a quote for ${serviceTitle} in ${selectedFinish.name}.`
  );

  return (
    <section className="border-b border-outline-variant bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
            Pricing Guide &amp; Custom Finishes
          </span>
          <h2 className="mt-2 font-sans text-3xl font-bold uppercase tracking-tight text-primary sm:text-4xl">
            Transparent Estimates &amp; Colour Options
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">
            Every installation is custom-built to your exact opening measurements. Preview standard powder-coating finishes and understand the factors that shape your quotation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
          {/* PRICING CARD */}
          <div className="lg:col-span-6 border border-outline-variant bg-surface-container-lowest p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between border-b border-outline-variant pb-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-container text-primary">
                    <Tag className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-sans text-base font-bold uppercase tracking-tight text-primary">
                      Estimated Cost Guide
                    </h3>
                    <p className="text-[11px] font-mono text-secondary uppercase tracking-wider">
                      {serviceTitle}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="font-mono text-xl font-bold text-primary">
                    {startingPrice.startsWith("from") || startingPrice.startsWith("From")
                      ? startingPrice
                      : `From ${startingPrice}`}
                  </span>
                  <span className="block font-mono text-[10px] text-secondary">
                    {priceUnit}
                  </span>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-secondary font-mono">
                  What Determines Your Final Price:
                </p>
                <ul className="space-y-3">
                  {priceFactors.map((factor, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-on-surface leading-relaxed">
                      <Check className="h-4 w-4 shrink-0 text-accent mt-0.5" />
                      <span>{factor}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 border border-outline-variant/60 bg-surface-container-low p-4 rounded-sm">
                <div className="flex items-center gap-2 font-mono text-[11px] font-bold text-primary">
                  <ShieldCheck className="h-4 w-4 text-accent shrink-0" />
                  <span>SABS Glass &amp; AAAMSA Frame Warranty Included</span>
                </div>
                <p className="mt-1 text-[11px] text-on-surface-variant leading-relaxed">
                  All work carries our comprehensive installation guarantee against leaks, sagging, and hardware defects.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-outline-variant">
              <a
                href={quoteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-3.5 px-6 font-mono text-xs font-bold uppercase tracking-widest text-black transition-all hover:bg-[#20bd5a] shadow-xs active:scale-98"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Request Itemised WhatsApp Quote
              </a>
            </div>
          </div>

          {/* COLOUR FINISHES SELECTOR */}
          <div className="lg:col-span-6 border border-outline-variant bg-surface-container-lowest p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between border-b border-outline-variant pb-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-container text-primary">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-sans text-base font-bold uppercase tracking-tight text-primary">
                      Durable Powder-Coated Colours
                    </h3>
                    <p className="text-[11px] font-mono text-secondary uppercase tracking-wider">
                      Weather-Resistant Home Finishes
                    </p>
                  </div>
                </div>

                <span className="rounded-full bg-surface-container px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-secondary">
                  5 Popular Colours
                </span>
              </div>

              {/* Finish Swatch Chips */}
              <div className="mt-6">
                <label className="block font-mono text-xs font-semibold uppercase tracking-wider text-secondary mb-3">
                  Click to Preview Finish:
                </label>
                <div className="grid grid-cols-5 gap-2 sm:gap-3">
                  {standardFinishes.map((finish) => {
                    const isSelected = selectedFinish.id === finish.id;
                    return (
                      <button
                        key={finish.id}
                        type="button"
                        onClick={() => setSelectedFinish(finish)}
                        className={`group relative flex flex-col items-center gap-1.5 rounded-md p-2 transition-all cursor-pointer ${
                          isSelected
                            ? "bg-surface-container-high ring-2 ring-accent"
                            : "hover:bg-surface-container"
                        }`}
                        title={finish.name}
                      >
                        <div
                          className={`h-8 w-8 sm:h-10 sm:w-10 rounded-full border shadow-xs transition-transform group-hover:scale-105 ${
                            finish.border
                          } ${isSelected ? "scale-105" : ""}`}
                          style={{ backgroundColor: finish.hex }}
                        />
                        <span className="font-mono text-[9px] font-semibold text-primary truncate max-w-full text-center">
                          {finish.id.charAt(0).toUpperCase() + finish.id.slice(1)}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Active Finish Details */}
              <div className="mt-6 border border-outline-variant/80 bg-surface-container-low p-5 rounded-md">
                <div className="flex items-center justify-between">
                  <h4 className="font-sans text-sm font-bold uppercase tracking-tight text-primary">
                    {selectedFinish.name}
                  </h4>
                  <span className="rounded-full bg-accent-soft px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-accent">
                    {selectedFinish.badge}
                  </span>
                </div>
                <p className="mt-2.5 text-xs leading-relaxed text-on-surface-variant">
                  {selectedFinish.description}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-3 font-mono text-[10px] text-secondary border-t border-outline-variant/60 pt-3">
                  <span>✓ 10-Year Anti-Fading Guarantee</span>
                  <span>✓ Scratch Resistant</span>
                  <span>✓ UV-Stabilized</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-outline-variant">
              <a
                href={quoteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full border border-accent bg-accent py-3.5 px-6 font-mono text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-accent-hover"
              >
                Inquire With {selectedFinish.name}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
