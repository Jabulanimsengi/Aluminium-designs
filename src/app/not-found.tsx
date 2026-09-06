import React from "react";
import Link from "next/link";
import { ArrowRight, Home, Layers, MapPin, Tag, ShieldCheck, Phone } from "lucide-react";
import { whatsappQuoteUrl, businessContact } from "@/lib/site";

export const metadata = {
  title: "Page Not Found (404) | Aluminium Designs",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  const quickLinks = [
    {
      title: "All Products & Services",
      description: "Explore our complete 38-service catalogue for aluminium and steel.",
      href: "/services",
      icon: Layers,
    },
    {
      title: "Gauteng Service Areas",
      description: "Find local installation teams near your suburb or municipality.",
      href: "/locations",
      icon: MapPin,
    },
    {
      title: "2026 Pricing Guide",
      description: "Review transparent base prices and custom sizing estimates.",
      href: "/pricing",
      icon: Tag,
    },
    {
      title: "Steel Works & Security",
      description: "Heavy-duty security gates, burglar bars, and steel carports.",
      href: "/steel-works",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="min-h-[75vh] bg-surface flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full text-center space-y-8">
        <div className="space-y-3">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-3.5 py-1.5 rounded-full border border-accent/20">
            Error 404 · Resource Moved or Missing
          </span>
          <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-primary">
            Page Not Found
          </h1>
          <p className="font-sans text-on-surface-variant text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            The page, installation route, or specifications document you requested could not be located. Use the verified directories below to navigate our site.
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 font-mono text-[11px] font-bold uppercase tracking-widest rounded-full transition-colors"
          >
            <Home className="w-4 h-4" />
            Return Home
          </Link>
          <Link
            href={whatsappQuoteUrl}
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3 font-mono text-[11px] font-bold uppercase tracking-widest rounded-full transition-colors"
          >
            <Phone className="w-4 h-4" />
            Instant WhatsApp Help
          </Link>
        </div>

        {/* Recovery Link Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 text-left">
          {quickLinks.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group p-5 bg-surface-container-low hover:bg-surface border border-outline-variant hover:border-accent rounded-xl transition-all flex items-start gap-4 shadow-xs"
              >
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-accent shrink-0 group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h2 className="font-sans text-sm font-bold text-primary group-hover:text-accent transition-colors flex items-center gap-1">
                    {item.title}
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h2>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
