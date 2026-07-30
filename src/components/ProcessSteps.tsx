import React from "react";
import { MessageSquare, Ruler, Layers, FileSpreadsheet, Hammer, Drill, Award, type LucideIcon } from "lucide-react";

interface Step {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function ProcessSteps() {
  const steps: Step[] = [
    { number: "01", title: "Consultation", description: "We review your requirements, design drawings, or vision to identify the best profiles and layouts.", icon: MessageSquare },
    { number: "02", title: "Site Measurement", description: "Our installers perform millimeter-precise physical site measurements to ensure perfect fitments.", icon: Ruler },
    { number: "03", title: "CAD & Technical Design", description: "We draft detailed structural layouts and glass specifications for approval before fabrication.", icon: Layers },
    { number: "04", title: "Quotations", description: "You receive an itemized, transparent pricing quotation outlining hardware, glass, and profile choices.", icon: FileSpreadsheet },
    { number: "05", title: "Custom Fabrication", description: "Our technicians cut, mill, weld, and assemble the profiles from scratch in our Sandton workshop.", icon: Hammer },
    { number: "06", title: "Professional Installation", description: "Our certified crews secure, weather-seal, and anchor the frames, ensuring flawless opening actions.", icon: Drill },
    { number: "07", title: "Final Inspection", description: "We perform strict safety checks and double-check rollers, seals, and lock alignment for sign-off.", icon: Award },
  ];

  return (
    <div className="relative">
      {/* Connector line -- positioned through icon centres, not text */}
      <div className="absolute top-7 left-12 right-12 h-px bg-outline-variant hidden xl:block z-0" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-7 gap-8 relative z-10">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div key={step.number} className="flex flex-col items-center text-center group">
              <div className="w-14 h-14 border border-outline-variant bg-surface-container-lowest flex items-center justify-center text-secondary group-hover:border-primary group-hover:scale-105 transition-all relative rounded-xl">
                <Icon className="w-5 h-5" />
                <span className="absolute -top-2.5 -right-2.5 font-mono text-[9px] font-bold bg-surface border border-outline-variant text-primary px-2 py-0.5 rounded-full">
                  {step.number}
                </span>
              </div>
              <h4 className="font-sans font-bold text-sm uppercase text-primary mt-5 group-hover:text-on-tertiary-container transition-colors">
                {step.title}
              </h4>
              <p className="text-xs text-on-surface-variant leading-relaxed mt-2 max-w-[200px] md:max-w-none">
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
