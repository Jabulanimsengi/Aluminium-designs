"use client";

import React, { useState, useEffect, useRef } from "react";
import { MapPin, Navigation } from "lucide-react";
import { businessContact, googleMapsDirectionsUrl, googleMapsEmbedUrl } from "@/lib/site";

interface GoogleMapEmbedProps {
  mapUrl?: string;
  directionsUrl?: string;
  title?: string;
  className?: string;
  minHeightClass?: string;
}

export default function GoogleMapEmbed({
  mapUrl = googleMapsEmbedUrl,
  directionsUrl = googleMapsDirectionsUrl,
  title = "Google Map showing Aluminium Designs Katlehong Workshop",
  className = "",
  minHeightClass = "min-h-[280px] sm:min-h-[420px]",
}: GoogleMapEmbedProps) {
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Pre-warm Google Maps 800px before scrolling into viewport
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
      className={`relative w-full h-full overflow-hidden bg-surface-container ${minHeightClass} ${className}`}
    >
      {/* Clean Google Maps Loading Placeholder */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center p-6 text-center transition-opacity duration-500 ease-out ${
          isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="relative z-10 flex flex-col items-center max-w-xs">
          <div className="relative flex items-center justify-center mb-3">
            <span className="absolute h-10 w-10 rounded-full bg-accent/20 animate-ping" />
            <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white shadow-md">
              <MapPin className="h-5 w-5" />
            </span>
          </div>

          <div className="rounded-xl bg-surface-container-lowest/95 backdrop-blur-sm px-4 py-2.5 shadow-sm border border-outline-variant/60">
            <p className="font-sans text-xs font-bold text-primary">
              Aluminium Designs Workshop
            </p>
            <p className="text-[11px] text-on-surface-variant mt-0.5">
              {businessContact.addressLocality}, {businessContact.addressCity}
            </p>
          </div>

          <div className="mt-3 inline-flex items-center gap-2 text-[10px] font-mono font-medium text-secondary">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            <span>Loading Google Maps...</span>
          </div>

          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-white shadow-sm hover:bg-brand-hover transition-colors"
          >
            <Navigation className="h-3 w-3 text-accent" />
            Get Directions
          </a>
        </div>
      </div>

      {/* Official Google Maps Embed Iframe */}
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
