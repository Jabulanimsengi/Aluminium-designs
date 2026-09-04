import React from "react";
import Link from "next/link";
import { Phone, ArrowRight, ShieldCheck } from "lucide-react";
import { whatsappQuoteUrl } from "@/lib/site";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

export default function CTASection({
  title = "Ready to Start Your Project?",
  subtitle = "Contact our team to book a professional on-site measurement, or request a quick price quote on WhatsApp.",
}: CTASectionProps) {
  return (
    <section className="bg-surface py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-inverse-surface px-5 py-7 shadow-lg sm:px-8 sm:py-10">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/10" />
            <div className="absolute -bottom-20 -left-16 h-52 w-52 rounded-full border border-white/10" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-4 text-center sm:space-y-5">
            <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 px-3 py-1 font-mono text-[9px] font-bold tracking-widest uppercase rounded-full">
              <ShieldCheck className="w-3 h-3 text-accent" />
              <span className="text-accent">Professional Workmanship Guaranteed</span>
            </div>

            <h2 className="font-sans text-xl sm:text-2xl lg:text-3xl font-bold uppercase tracking-tight text-white">
              {title}
            </h2>

            <p className="text-white/70 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1">
              <a
                href="tel:+27716122439"
                className="flex items-center justify-center gap-2 bg-white hover:bg-surface-container-low text-primary px-5 py-2.5 font-mono text-[11px] font-bold uppercase tracking-widest transition-colors w-full sm:w-auto rounded-full"
              >
                <Phone className="w-3.5 h-3.5" />
                071 612 2439
              </a>
              <Link
                href={whatsappQuoteUrl}
                className="flex items-center justify-center gap-2 border border-accent bg-accent hover:bg-accent-hover text-white px-5 py-2.5 font-mono text-[11px] font-bold uppercase tracking-widest transition-all shadow-md hover:shadow-lg w-full sm:w-auto rounded-full"
              >
                Request Free Quote
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 text-[9px] font-mono uppercase tracking-wider text-white/50 sm:gap-3 sm:text-[10px] pt-1">
              <span>SANS Compliant</span>
              <span className="w-1 h-1 bg-white/30 rounded-full" />
              <span>Fully Insured</span>
              <span className="w-1 h-1 bg-white/30 rounded-full" />
              <span>No Obligation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
