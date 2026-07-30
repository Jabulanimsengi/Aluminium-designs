import React from "react";
import Link from "next/link";
import { Phone, ArrowRight, ShieldCheck } from "lucide-react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

export default function CTASection({
  title = "Ready to Start Your Project?",
  subtitle = "Contact our team for a free on-site home measurement, or request a quick price quote online.",
}: CTASectionProps) {
  return (
    <section className="py-24 bg-primary border-b border-outline-variant">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 px-3.5 py-1 font-mono text-[10px] font-bold tracking-widest uppercase rounded-full">
          <ShieldCheck className="w-3.5 h-3.5 text-white/70" />
          <span className="text-white/80">Professional Workmanship Guaranteed</span>
        </div>

        <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white">
          {title}
        </h2>

        <p className="text-white/70 text-sm max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href="tel:+27871234567"
            className="flex items-center justify-center gap-2 bg-white hover:bg-surface-container-low text-primary px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-widest transition-colors w-full sm:w-auto rounded-full"
          >
            <Phone className="w-4 h-4" />
            +27 87 123 4567
          </a>
          <Link
            href="/quote"
            className="flex items-center justify-center gap-2 bg-on-tertiary-container hover:bg-[#92400e] text-white px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-widest transition-colors w-full sm:w-auto rounded-full"
          >
            Request Free Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="flex items-center justify-center gap-4 text-[10px] font-mono uppercase tracking-wider text-white/50">
          <span>SANS Compliant</span>
          <span className="w-1 h-1 bg-white/30" />
          <span>Fully Insured</span>
          <span className="w-1 h-1 bg-white/30" />
          <span>No Obligation</span>
        </div>
      </div>
    </section>
  );
}
