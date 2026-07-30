import React from "react";
import { Metadata } from "next";
import { ShieldCheck, Award, Ruler, Users, Hammer, CheckCircle } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Us | Premium Aluminium Fabricators",
  description:
    "Learn how Aluminium Designs delivers precision engineering, reliable craftsmanship, and professional glass/aluminium installations for homes and developments.",
};

export default function About() {
  const values = [
    {
      title: "Precision Engineering",
      description:
        "We work to exact millimeter tolerances, ensuring all joints, sliders, and tracks operate flawlessly with zero-draught sealing.",
      icon: Ruler,
    },
    {
      title: "Structural Safety",
      description:
        "Every installation is engineered for wind-load ratings and impact safety, complying fully with SANS and local building regulations.",
      icon: ShieldCheck,
    },
    {
      title: "Custom Workmanship",
      description:
        "We design, cut, and weld every window, door, and shopfront from scratch to fit your specific openings.",
      icon: Hammer,
    },
    {
      title: "Certified Installation",
      description:
        "Our in-house, safety-certified installation crews ensure structural anchors and weather seals are applied correctly.",
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
            Built on Precision Since 2011
          </h1>
          <p className="text-on-surface-variant text-base leading-relaxed max-w-2xl mx-auto">
            Founded to elevate architectural metalwork and glazing through engineered aluminium
            systems and flawless custom fabrication.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-surface border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="h-[360px] sm:h-[420px] border border-outline-variant bg-surface-container-lowest p-8 flex flex-col justify-between relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <svg className="w-full h-full text-primary" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="10,10" />
                  <circle cx="50%" cy="50%" r="40%" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5,5" />
                </svg>
              </div>
              <div className="flex items-center justify-between border-b border-outline-variant pb-4 relative z-10">
                <span className="font-mono text-[10px] font-bold text-secondary uppercase tracking-wider">
                  Workshop Specifications
                </span>
                <span className="font-mono text-[10px] font-bold text-on-tertiary-container uppercase">Est. 2011</span>
              </div>
              <div className="my-auto text-left space-y-4 relative z-10">
                <h4 className="font-sans font-bold text-lg uppercase text-primary">Advanced Custom Extrusions</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Our raw architectural profiles utilize premium 6063-T6 aluminium alloy, chosen
                  for its superior tensile strength, smooth surface finish, and excellent
                  responsiveness to high-durability powder coating.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["T6 Heat Treated", "RAL Powder Coated", "Weather-Stripped"].map((tag) => (
                    <span key={tag} className="font-mono text-[9px] font-bold uppercase tracking-wider border border-outline-variant bg-surface-container px-2.5 py-1 text-secondary rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="border-t border-outline-variant pt-4 flex items-center justify-between font-mono text-[9px] uppercase tracking-wider text-outline relative z-10">
                <span>Facility: Sandton, JHB</span>
                <span>ISO 9001 Sourced Alloys</span>
              </div>
            </div>

            <div className="space-y-5">
              <h2 className="font-sans font-bold text-3xl uppercase tracking-tight text-primary">
                Premium Architectural Glazing
              </h2>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                We believe windows and doors are not merely functional partitions; they define
                structural aesthetic, secure assets, block environmental elements, and regulate
                lighting and climate control.
              </p>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Whether retrofitting a private residence in Sandton or installing frameless glass
                office walls in Pretoria, our focus remains on professional execution and complete
                code compliance.
              </p>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                By maintaining in-house control over the entire supply chain -- from site
                measurement to manufacturing and final fitment -- we deliver custom-built products
                engineered to last.
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
              Our Commitments
            </span>
            <h2 className="mt-2 font-sans text-3xl font-bold uppercase tracking-tight text-primary">
              Core Guarantees
            </h2>
            <p className="mt-3 text-sm text-on-surface-variant max-w-xl mx-auto leading-relaxed">
              Every project is handled with the same dedication to quality, safety, and timing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="border border-outline-variant bg-surface-container-lowest p-6 flex flex-col justify-between h-[260px] hover:border-primary transition-colors rounded-2xl"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 border border-outline-variant bg-surface-container flex items-center justify-center text-secondary rounded-xl">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-sans font-bold text-sm uppercase text-primary tracking-tight">{val.title}</h3>
                    <p className="text-xs text-on-surface-variant leading-relaxed">{val.description}</p>
                  </div>
                  <div className="border-t border-outline-variant pt-3 flex items-center justify-between font-mono text-[9px] uppercase tracking-wider text-outline">
                    <span>Verified</span>
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
