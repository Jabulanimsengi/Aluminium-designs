import React from "react";
import { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { businessContact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch for aluminium measurements, quotes, and advice. Call, email, or visit Aluminium Designs at 755 Sontonga Road, Moleleki Ext 1, Katlehong.",
};

export default function ContactPage() {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    businessContact.fullAddress,
  )}`;
  const contactDetails = [
    {
      title: "Our Address",
      value: businessContact.fullAddress,
      icon: MapPin,
      action: directionsUrl,
      actionText: "Get Directions",
      target: "_blank",
    },
    {
      title: "Phone Line",
      value: businessContact.phone,
      icon: Phone,
      action: `tel:${businessContact.phoneE164}`,
      actionText: "Call Us Now",
    },
    {
      title: "Email",
      value: businessContact.email,
      icon: Mail,
      action: "mailto:info@aluminiumdesigns.co.za",
      actionText: "Send Email",
    },
  ];

  return (
    <div className="relative bg-surface min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-surface-container-lowest border border-outline-variant px-3.5 py-1 font-mono text-[10px] font-bold tracking-widest uppercase rounded-full">
            <MapPin className="w-3.5 h-3.5 text-secondary" />
            <span className="text-secondary">We Service All Of Gauteng</span>
          </div>
          <h1 className="mt-4 font-sans text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-primary">
            Get in Touch With Our Team
          </h1>
          <p className="mt-4 text-on-surface-variant text-sm sm:text-base leading-relaxed">
            Have questions about prices, product options, or booking a home measurement? We&apos;re friendly and ready to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Contact Cards */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              {contactDetails.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="border border-outline-variant bg-surface-container-lowest p-6 flex items-start gap-4 hover:border-primary transition-colors shadow-sm"
                  >
                    <div className="w-10 h-10 border border-outline-variant bg-surface-container flex items-center justify-center text-secondary shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
                        {item.title}
                      </h4>
                      <p className="text-sm text-primary leading-relaxed font-sans font-semibold">
                        {item.value}
                      </p>
                      {item.action && (
                        <a
                          href={item.action}
                          target={item.target}
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-[10px] font-mono font-bold uppercase tracking-widest text-secondary hover:text-primary transition-colors mt-1"
                        >
                          {item.actionText}
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Hours */}
            <div className="border border-outline-variant bg-surface-container-lowest p-6 space-y-4 shadow-sm">
              <h4 className="font-sans font-bold text-sm uppercase text-primary flex items-center gap-2">
                <Clock className="w-4 h-4 text-secondary shrink-0" />
                Working Hours
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-outline">Monday - Friday</p>
                  <p className="font-sans font-bold text-primary mt-0.5">08:00 - 17:00</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-outline">Sat - Sun</p>
                  <p className="font-sans font-bold text-outline mt-0.5">Closed</p>
                </div>
              </div>
              <div className="border-t border-outline-variant pt-3 font-mono text-[9px] uppercase tracking-wider text-outline">
                Home measurements available by appointment
              </div>
            </div>
          </div>

          {/* Styled Map */}
          <div className="lg:col-span-7">
            <div className="border border-outline-variant bg-surface-container-lowest h-full min-h-[400px] flex flex-col justify-between p-6 relative overflow-hidden shadow-sm">
              <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
                <svg className="w-full h-full text-primary" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="map-grid-2" width="40" height="40" patternUnits="userSpaceOnUse">
                      <rect width="40" height="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#map-grid-2)" />
                </svg>
              </div>

              <div className="absolute inset-0 opacity-10 flex items-center justify-center p-8 pointer-events-none">
                <svg className="w-full h-full text-primary" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                  <line x1="50" y1="0" x2="50" y2="400" stroke="currentColor" strokeWidth="15" />
                  <line x1="250" y1="0" x2="250" y2="400" stroke="currentColor" strokeWidth="25" />
                  <line x1="0" y1="180" x2="600" y2="180" stroke="currentColor" strokeWidth="20" />
                  <line x1="0" y1="320" x2="600" y2="320" stroke="currentColor" strokeWidth="15" />
                  <path d="M 450,0 Q 400,200 550,400" fill="none" stroke="currentColor" strokeWidth="40" />
                  <text x="70" y="50" fill="currentColor" fontSize="12" fontFamily="monospace" fontWeight="bold">
                    SONTONGA ROAD
                  </text>
                  <text x="270" y="220" fill="currentColor" fontSize="12" fontFamily="monospace" fontWeight="bold">
                    MOLELEKI EXT 1
                  </text>
                </svg>
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <span className="absolute w-12 h-12 bg-on-tertiary-container/20 animate-ping rounded-full" />
                <span className="w-6 h-6 bg-on-tertiary-container border-2 border-white flex items-center justify-center relative z-10 rounded-full">
                  <span className="w-2 h-2 bg-white rounded-full" />
                </span>
                <div className="mt-2.5 bg-primary border border-outline-variant font-mono text-[9px] font-bold uppercase tracking-widest px-3 py-1 text-white relative z-10 rounded-full shadow-sm">
                  Katlehong Workshop
                </div>
              </div>

              <div className="mt-auto relative z-10 border border-outline-variant bg-surface p-4 flex items-center justify-between text-xs">
                <div>
                  <p className="font-sans font-bold text-primary">755 Sontonga Road, Katlehong</p>
                  <p className="font-mono text-[9px] uppercase tracking-wider text-outline mt-0.5">
                    Secure visitor parking inside
                  </p>
                </div>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-outline-variant bg-surface-container hover:border-primary font-mono text-[10px] font-bold uppercase tracking-widest text-secondary transition-colors rounded-full"
                >
                  View on Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
