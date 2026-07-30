import React from "react";
import { Metadata } from "next";
import { ClipboardList, ShieldCheck, Clock, FileText } from "lucide-react";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Request a Free Quote",
  description:
    "Get an accurate, professional quote for your aluminium windows, doors, shopfronts, or custom fabrication projects.",
};

export default function QuotePage() {
  const steps = [
    {
      title: "1. Submit Your Request",
      description: "Tell us what you need, pick your preferences, and attach any plans or photos.",
      icon: ClipboardList,
    },
    {
      title: "2. Technical Review",
      description: "Our team reviews your requirements and prepares a detailed, itemized quotation.",
      icon: ShieldCheck,
    },
    {
      title: "3. Free Site Measurement",
      description: "We visit your property at no cost to take precise measurements and finalize the quote.",
      icon: FileText,
    },
  ];

  return (
    <div className="relative bg-surface min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-surface-container-lowest border border-outline-variant px-3.5 py-1 font-mono text-[10px] font-bold tracking-widest uppercase rounded-full">
            <Clock className="w-3.5 h-3.5 text-secondary" />
            <span className="text-secondary">Quick Turnaround</span>
          </div>
          <h1 className="mt-4 font-sans text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-primary">
            Request a Quotation
          </h1>
          <p className="mt-4 text-on-surface-variant text-sm leading-relaxed">
            No measurements needed. Just tell us what you want and we&apos;ll handle everything else.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form */}
          <div className="lg:col-span-8">
            <QuoteForm />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="border border-outline-variant bg-surface-container-lowest p-6 space-y-5 rounded-2xl">
              <h3 className="font-sans font-bold text-sm uppercase tracking-tight text-primary">
                How We Quote Your Project
              </h3>
              <div className="space-y-5">
                {steps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.title} className="flex gap-4">
                      <div className="w-8 h-8 border border-outline-variant bg-surface-container flex items-center justify-center text-secondary shrink-0 rounded-xl">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="font-sans font-bold text-xs text-primary uppercase">
                          {step.title}
                        </h4>
                        <p className="text-[11px] text-on-surface-variant leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="border border-outline-variant bg-surface-container-lowest p-6 space-y-3 rounded-2xl">
              <h4 className="font-sans font-bold text-sm uppercase tracking-tight text-primary">
                Need Immediate Help?
              </h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                If you have architectural drawings ready and prefer to submit them directly, or
                require an urgent site evaluation, contact our team.
              </p>
              <div className="pt-2 space-y-1.5">
                <p className="font-mono text-[10px] text-secondary uppercase tracking-wider">
                  Email:{" "}
                  <a
                    href="mailto:estimates@aluminiumdesigns.co.za"
                    className="text-primary hover:text-on-tertiary-container font-bold"
                  >
                    estimates@aluminiumdesigns.co.za
                  </a>
                </p>
                <p className="font-mono text-[10px] text-secondary uppercase tracking-wider">
                  Office:{" "}
                  <a href="tel:+27871234567" className="text-primary hover:text-on-tertiary-container font-bold">
                    +27 87 123 4567
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
