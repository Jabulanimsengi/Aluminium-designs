import React from "react";
import { Metadata } from "next";
import { ShieldCheck, Award, Ruler, Users, Hammer, CheckCircle } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn how Aluminium Designs delivers precision craftsmanship, clean installations, and reliable aluminium windows, doors, and gates for homes across Gauteng.",
  alternates: { canonical: "/about" },
};

export default function About() {
  const values = [
    {
      title: "Accurate Measurement",
      description:
        "We measure your openings carefully so everything fits tightly with zero gaps, drafts, or water leaks.",
      icon: Ruler,
    },
    {
      title: "Strong & Safe Glass",
      description:
        "All glass panels use toughened or laminated safety glass designed to protect your home and handle strong wind storms.",
      icon: ShieldCheck,
    },
    {
      title: "100% Custom Made",
      description:
        "No generic forced sizes. We build every single window, door, and gate from scratch to fit your home's exact layout.",
      icon: Hammer,
    },
    {
      title: "Neat Installation Crews",
      description:
        "Our friendly, experienced team fits your frames neatly, seals all joints properly, and leaves your home spotless.",
      icon: Users,
    },
  ];

  return (
    <div className="relative bg-surface text-on-surface">
      {/* Header */}
      <section className="py-24 bg-surface-container-low border-b border-outline-variant">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 bg-surface border border-outline-variant px-3.5 py-1 font-mono text-[10px] font-bold tracking-widest uppercase rounded-full">
            <Award className="w-3.5 h-3.5 text-secondary" />
            <span className="text-secondary">The Aluminium Designs Standard</span>
          </div>
          <h1 className="font-sans text-4xl sm:text-5xl font-bold uppercase tracking-tight text-primary">
            Crafting Quality Windows &amp; Doors Since 2011
          </h1>
          <p className="text-on-surface-variant text-base leading-relaxed max-w-2xl mx-auto">
            Founded to give homeowners durable, beautiful, and maintenance-free aluminium solutions built to last a lifetime.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-surface border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="h-[360px] sm:h-[420px] border border-outline-variant bg-surface-container-lowest p-8 flex flex-col justify-between relative overflow-hidden shadow-sm">
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <svg className="w-full h-full text-primary" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="10,10" />
                  <circle cx="50%" cy="50%" r="40%" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5,5" />
                </svg>
              </div>
              <div className="flex items-center justify-between border-b border-outline-variant pb-4 relative z-10">
                <span className="font-mono text-[10px] font-bold text-secondary uppercase tracking-wider">
                  Factory Specifications
                </span>
                <span className="font-mono text-[10px] font-bold text-on-tertiary-container uppercase">Est. 2011</span>
              </div>
              <div className="my-auto text-left space-y-4 relative z-10">
                <h4 className="font-sans font-bold text-lg uppercase text-primary">Custom Made in Sandton</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Every window, door, and gate is crafted in our Sandton workshop using high-grade architectural aluminium alloy, chosen for its strength, rust resistance, and smooth powder-coated finish.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["100% Rust Proof", "Durable Powder Finish", "Weather Sealed"].map((tag) => (
                    <span key={tag} className="font-mono text-[9px] font-bold uppercase tracking-wider border border-outline-variant bg-surface-container px-2.5 py-1 text-secondary rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="border-t border-outline-variant pt-4 flex items-center justify-between font-mono text-[9px] uppercase tracking-wider text-outline relative z-10">
                <span>Facility: Sandton, Gauteng</span>
                <span>Quality Tested Materials</span>
              </div>
            </div>

            <div className="space-y-5">
              <h2 className="font-sans font-bold text-3xl uppercase tracking-tight text-primary">
                Beautiful Windows &amp; Clean Finishes
              </h2>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                We believe your windows and doors should do more than just close an opening — they should make your home look stylish, keep cold winter drafts out, and give you total peace of mind.
              </p>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Whether you are updating a family home in Fourways, enclosing a patio in Centurion, or fitting security doors in Midrand, we handle every job with care and attention to detail.
              </p>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                By managing the entire process — from measuring your space to manufacturing and final fitting — we ensure a clean, neat installation with no messy surprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-surface-container-low border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
              Our Promises
            </span>
            <h2 className="mt-2 font-sans text-3xl font-bold uppercase tracking-tight text-primary">
              Core Homeowner Guarantees
            </h2>
            <p className="mt-3 text-sm text-on-surface-variant max-w-xl mx-auto leading-relaxed">
              Every job is handled with care, attention to detail, and a commitment to neat workmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="border border-outline-variant bg-surface-container-lowest p-6 flex flex-col justify-between h-[260px] hover:border-primary transition-colors shadow-sm"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 border border-outline-variant bg-surface-container flex items-center justify-center text-secondary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-sans font-bold text-sm uppercase text-primary tracking-tight">{val.title}</h3>
                    <p className="text-xs text-on-surface-variant leading-relaxed">{val.description}</p>
                  </div>
                  <div className="border-t border-outline-variant pt-3 flex items-center justify-between font-mono text-[9px] uppercase tracking-wider text-outline">
                    <span>Guaranteed</span>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
