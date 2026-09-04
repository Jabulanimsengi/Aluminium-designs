import React from "react";
import { Star, Quote, CheckCircle } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  content: string;
  rating: number;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: "t1",
      name: "Sarah & Mark Davies",
      role: "Homeowner",
      location: "Fourways, Johannesburg",
      content:
        "Replacing our old drafty wooden windows with black aluminium frames changed our whole house! It looks brand new, stays warm during cold winters, and we never have to paint them.",
      rating: 5,
    },
    {
      id: "t2",
      name: "Thabo Mokoena",
      role: "Homeowner",
      location: "Sandton, Johannesburg",
      content:
        "The sliding patio doors glide so smoothly even my kids can open them with one finger. The installation team was clean, polite, and left my house completely spotless.",
      rating: 5,
    },
    {
      id: "t3",
      name: "Michelle Botha",
      role: "Homeowner",
      location: "Centurion, Pretoria",
      content:
        "We got new windows and a slatted security gate installed. Our home feels quiet, looks modern, and gives us complete peace of mind. The best home improvement we've made!",
      rating: 5,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((t) => (
        <div
          key={t.id}
          className="border border-outline-variant bg-surface-container-lowest p-6 sm:p-8 flex flex-col justify-between relative hover:border-accent transition-colors shadow-sm"
        >
          <div className="absolute top-6 right-6 text-surface-container-high opacity-80 pointer-events-none">
            <Quote className="w-10 h-10" />
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-1">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed italic">
              &quot;{t.content}&quot;
            </p>
          </div>

          <div className="border-t border-outline-variant pt-5 mt-6 flex items-center gap-3">
            <div className="w-10 h-10 border border-outline-variant bg-surface-container flex items-center justify-center font-sans font-bold text-xs text-primary">
              {t.name.split(" ")[0].charAt(0)}
              {t.name.split(" ")[1]?.charAt(0) || ""}
            </div>
            <div>
              <h4 className="font-sans font-bold text-xs text-primary flex items-center">
                {t.name}
                <CheckCircle className="w-3.5 h-3.5 text-accent ml-1.5 shrink-0" />
              </h4>
              <p className="text-[10px] font-mono text-secondary uppercase tracking-wider">
                {t.role} | {t.location}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
