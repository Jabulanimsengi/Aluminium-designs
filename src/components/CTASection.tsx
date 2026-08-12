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
    <section className="bg-surface py-10 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-inverse-surface px-5 py-9 shadow-xl sm:px-10 sm:py-16 lg:px-16">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-white/10" />
            <div className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full border border-white/10" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto space-y-5 text-center sm:space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 px-3.5 py-1 font-mono text-[10px] font-bold tracking-widest uppercase rounded-full">
              <ShieldCheck className="w-3.5 h-3.5 text-white/70" />
              <span className="text-white/80">Professional Workmanship Guaranteed</span>
            </div>

            <h2 className="font-sans text-2xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white">
              {title}
            </h2>

            <p className="text-white/70 text-sm max-w-xl mx-auto leading-relaxed">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1 sm:pt-2">
              <a
                href="tel:+27716122439"
                className="flex items-center justify-center gap-2 bg-white hover:bg-surface-container-low text-primary px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-widest transition-colors w-full sm:w-auto rounded-full"
              >
                <Phone className="w-4 h-4" />
                071 612 2439
              </a>
              <Link
                href={whatsappQuoteUrl}
                className="flex items-center justify-center gap-2 border border-white/25 bg-white/10 hover:bg-white/20 text-white px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-widest transition-colors w-full sm:w-auto rounded-full"
              >
                Request Free Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 text-[9px] font-mono uppercase tracking-wider text-white/50 sm:gap-4 sm:text-[10px]">
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
