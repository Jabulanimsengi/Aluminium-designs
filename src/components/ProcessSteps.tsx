import React from "react";
import { MessageSquare, Ruler, FileSpreadsheet, Hammer, Drill, Award, type LucideIcon } from "lucide-react";

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
      title: "First Chat",
      description: "Tell us what you need — new windows, patio doors, or security gates for your home.",
      icon: MessageSquare,
    },
    {
      number: "02",
      title: "Free Home Visit",
      description: "We visit your home to take exact measurements so everything fits perfectly.",
      icon: Ruler,
    },
    {
      number: "03",
      title: "Clear Pricing",
      description: "You get a simple, upfront quote with no hidden fees or extra costs.",
      icon: FileSpreadsheet,
    },
    {
      number: "04",
      title: "Custom Making",
      description: "We manufacture your frames and glass from scratch in our factory.",
      icon: Hammer,
    },
    {
      number: "05",
      title: "Neat Installation",
      description: "Our friendly team fits your frames neatly and cleans up before leaving.",
      icon: Drill,
    },
    {
      number: "06",
      title: "Final Check",
      description: "We test all locks, handles, and sliding doors with you to ensure you are 100% happy.",
      icon: Award,
    },
  ];

  return (
    <div className="relative">
      {/* Connector line */}
      <div className="absolute top-7 left-12 right-12 h-px bg-outline-variant hidden xl:block z-0" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-8 relative z-10">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div key={step.number} className="flex flex-col items-center text-center group">
              <div className="w-14 h-14 border border-outline-variant bg-surface-container-lowest flex items-center justify-center text-secondary group-hover:border-primary group-hover:scale-105 transition-all relative rounded-xl shadow-sm">
                <Icon className="w-5 h-5" />
                <span className="absolute -top-2.5 -right-2.5 font-mono text-[9px] font-bold bg-primary text-on-primary border border-primary px-2 py-0.5 rounded-full">
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
