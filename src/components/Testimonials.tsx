import React from "react";
import { Star, Quote, CheckCircle } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  content: string;
  rating: number;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: "t1",
      name: "Marcus van der Merwe",
      role: "Lead Architect",
      company: "VDM Studio Architects",
      content:
        "Aluminium Designs is our go-to contractor for custom glazed facades. Their attention to detail during site measurements and drawing reviews ensures a perfect fit. They understand the structural demands of high-end architectural projects.",
      rating: 5,
    },
    {
      id: "t2",
      name: "Sarah Jenkins",
      role: "Homeowner",
      company: "Steyn City Estate",
      content:
        "We replaced all our old steel windows and sliding patio doors with their double-glazed charcoal systems. The thermal isolation is incredible. Our home is quieter, looks extremely modern, and the sliding doors glide effortlessly.",
      rating: 5,
    },
    {
      id: "t3",
      name: "David Ndlovu",
      role: "Project Manager",
      company: "Lefika Construction",
      content:
        "We contracted them for a commercial development in Rosebank. They installed 1,200 square meters of structural glass shopfronts and office partitions under tight schedules. Exceptional safety compliance and workmanship.",
      rating: 5,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((t) => (
        <div
          key={t.id}
          className="border border-outline-variant bg-surface-container-lowest p-6 sm:p-8 flex flex-col justify-between relative hover:border-primary transition-colors rounded-2xl"
        >
          <div className="absolute top-6 right-6 text-surface-container-high opacity-80 pointer-events-none">
            <Quote className="w-10 h-10" />
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-1">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-on-tertiary-container text-on-tertiary-container" />
              ))}
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed italic">
              &quot;{t.content}&quot;
            </p>
          </div>

          <div className="border-t border-outline-variant pt-5 mt-6 flex items-center gap-3">
            <div className="w-10 h-10 border border-outline-variant bg-surface-container flex items-center justify-center font-sans font-bold text-xs text-primary rounded-xl">
              {t.name.split(" ")[0].charAt(0)}
              {t.name.split(" ")[1]?.charAt(0) || ""}
            </div>
            <div>
              <h4 className="font-sans font-bold text-xs text-primary flex items-center">
                {t.name}
                <CheckCircle className="w-3 h-3 text-emerald-600 ml-1.5 shrink-0" />
              </h4>
              <p className="text-[10px] font-mono text-secondary uppercase tracking-wider">
                {t.role}
                {t.company && <span className="text-outline-variant"> | {t.company}</span>}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
