import React from "react";
import { Ruler, Hammer, Award, type LucideIcon } from "lucide-react";

interface Step {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function ProcessSteps() {
  const steps: Step[] = [
    {
      number: "01",
      title: "Consult & Measure",
      description:
        "Tell us what you need, then we visit your property to assess the space and take accurate measurements.",
      icon: Ruler,
    },
    {
      number: "02",
      title: "Quote & Manufacture",
      description:
        "You receive a clear quote. Once approved, we custom-manufacture your aluminium frames and glass.",
      icon: Hammer,
    },
    {
      number: "03",
      title: "Install & Final Check",
      description:
        "We install everything neatly, test all locks and moving parts, and clean the work area before handover.",
      icon: Award,
    },
  ];

  return (
    <div className="relative">
      {/* Connector line */}
      <div className="absolute top-7 left-12 right-12 h-px bg-outline-variant hidden md:block z-0" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 relative z-10">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div key={step.number} className="flex flex-col items-center text-center group">
              <div className="w-14 h-14 border border-outline-variant bg-surface-container-lowest flex items-center justify-center text-secondary group-hover:border-accent group-hover:text-accent group-hover:scale-105 transition-all relative shadow-sm">
                <Icon className="w-5 h-5" />
                <span className="absolute -top-2.5 -right-2.5 font-mono text-[9px] font-bold bg-accent text-white border border-accent px-2 py-0.5 rounded-full">
                  {step.number}
                </span>
              </div>
              <h4 className="font-sans font-bold text-sm uppercase text-primary mt-5 group-hover:text-accent transition-colors">
                {step.title}
              </h4>
              <p className="text-xs text-on-surface-variant leading-relaxed mt-2 max-w-xs">
                {step.description}
              </p>
              {idx < steps.length - 1 && (
                <div className="w-px h-6 bg-outline-variant my-4 md:hidden" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
