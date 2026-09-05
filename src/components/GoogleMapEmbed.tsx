"use client";

import React, { useState, useEffect, useRef } from "react";
import { MapPin, Navigation } from "lucide-react";
import { businessContact } from "@/lib/site";

interface GoogleMapEmbedProps {
  mapUrl: string;
  directionsUrl: string;
  title: string;
  className?: string;
  minHeightClass?: string;
}

export default function GoogleMapEmbed({
  mapUrl,
  directionsUrl,
  title,
  className = "",
  minHeightClass = "min-h-[280px] sm:min-h-[420px]",
}: GoogleMapEmbedProps) {
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Pre-warm 800px before scrolling into viewport
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "800px 0px",
        threshold: 0,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // 2. Idle timeout fallback: pre-warm after 2.5s if browser is idle
    const timer = setTimeout(() => {
      setShouldLoad(true);
    }, 2500);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden bg-[#e8ebed] ${minHeightClass} ${className}`}
    >
      {/* 1. INSTANT MAP FACADE (Visible immediately at 0ms with zero blank screen) */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center p-6 text-center transition-opacity duration-700 ease-out ${
          isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {/* Subtle cartographic grid */}
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-200/80 via-transparent to-slate-100/60" />

        {/* Stylized road vectors for instant map preview */}
        <svg
          className="absolute inset-0 h-full w-full opacity-35"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 400 300"
        >
          <path
            d="M-20,155 Q120,135 200,165 T420,145"
            stroke="#64748b"
            strokeWidth="16"
            fill="none"
          />
          <path
            d="M185,-20 L210,320"
            stroke="#94a3b8"
            strokeWidth="12"
            fill="none"
          />
          <path
            d="M60,-10 L340,310"
            stroke="#cbd5e1"
            strokeWidth="8"
            fill="none"
          />
          <circle cx="205" cy="160" r="42" fill="#cbd5e1" opacity="0.6" />
        </svg>

        {/* Workshop pin & informative card */}
        <div className="relative z-10 flex flex-col items-center max-w-xs">
          <div className="relative flex items-center justify-center mb-3">
            <span className="absolute h-12 w-12 rounded-full bg-accent/20 animate-ping" />
            <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white shadow-lg">
              <MapPin className="h-5 w-5" />
            </span>
          </div>

          <div className="rounded-xl bg-white/95 backdrop-blur-md px-4 py-2.5 shadow-md border border-outline-variant/60">
            <p className="font-sans text-xs font-bold text-primary">
              Aluminium Designs Workshop
            </p>
            <p className="text-[11px] text-on-surface-variant mt-0.5">
              {businessContact.addressLocality}, {businessContact.addressCity}
            </p>
          </div>

          <div className="mt-3 inline-flex items-center gap-2 text-[10px] font-mono font-medium text-secondary">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            <span>Loading interactive map...</span>
          </div>

          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-white shadow-sm hover:bg-brand-hover transition-colors"
          >
            <Navigation className="h-3 w-3 text-accent" />
            Open in Google Maps
          </a>
        </div>
      </div>

      {/* 2. REAL GOOGLE MAP IFRAME (Pre-warmed and fades in smoothly once ready) */}
      {shouldLoad && (
        <iframe
          title={title}
          src={mapUrl}
          onLoad={() => setIsLoaded(true)}
          className={`absolute inset-0 h-full w-full border-0 transition-opacity duration-700 ease-out ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      )}
    </div>
  );
}
