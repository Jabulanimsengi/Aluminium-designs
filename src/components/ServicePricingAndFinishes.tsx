"use client";

import React from "react";
import Link from "next/link";
import { Check, ShieldCheck, Tag } from "lucide-react";
import { getWhatsAppQuoteUrl } from "@/lib/site";
import WhatsAppIcon from "./WhatsAppIcon";

interface ServicePricingAndFinishesProps {
  serviceTitle: string;
  startingPrice?: string;
  priceUnit?: string;
  priceFactors?: string[];
}

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
  const quoteUrl = getWhatsAppQuoteUrl(
    `Hi Aluminium Designs, I am interested in an itemised quote for ${serviceTitle}.`
  );

  return (
    <section className="border-b border-outline-variant bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
            Pricing Guide
          </span>
          <h2 className="mt-2 font-sans text-3xl font-bold uppercase tracking-tight text-primary sm:text-4xl">
            Transparent Estimates &amp; Cost Guide
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">
            Every installation is custom-built to your exact opening measurements. Understand the key factors that shape your quotation.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* PRICING CARD */}
          <div className="border border-outline-variant bg-surface-container-lowest p-6 sm:p-8 flex flex-col justify-between shadow-xs rounded-lg">
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

            <div className="mt-8 pt-4 border-t border-outline-variant space-y-2.5">
              <a
                href={quoteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-3.5 px-6 font-mono text-xs font-bold uppercase tracking-widest text-black transition-all hover:bg-[#20bd5a] shadow-xs active:scale-98"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Request Itemised WhatsApp Quote
              </a>
              <Link
                href="/pricing"
                className="flex w-full items-center justify-center gap-2 rounded-full border border-outline-variant bg-surface hover:bg-surface-container py-3 px-6 font-mono text-[11px] font-bold uppercase tracking-widest text-primary hover:text-accent transition-all shadow-xs"
              >
                <Tag className="h-3.5 w-3.5 text-accent" />
                View Central Pricing Hub &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
