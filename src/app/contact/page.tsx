import React from "react";
import { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, ArrowRight, ExternalLink } from "lucide-react";
import { absoluteUrl, businessContact, businessHours, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us | Aluminium Designs Gauteng",
  description:
    "Get in touch for custom aluminium and steel quotes, site visits, and advice. Call 071 612 2439 or visit us in Katlehong, Gauteng.",
  alternates: { canonical: `${siteUrl}/contact` },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: `${siteUrl}/contact`,
    siteName: "Aluminium Designs",
    title: "Contact Us | Aluminium Designs Gauteng",
    description:
      "Get in touch for custom aluminium and steel quotes, measurements, and advice across Gauteng.",
    images: [
      {
        url: absoluteUrl("/images/hero_exterior.png"),
        width: 1200,
        height: 630,
        alt: "Contact Aluminium Designs Gauteng",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Aluminium Designs Gauteng",
    description:
      "Get in touch for custom aluminium and steel quotes, measurements, and advice across Gauteng.",
    images: [absoluteUrl("/images/hero_exterior.png")],
  },
};

export default function ContactPage() {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    businessContact.fullAddress,
  )}`;
  const googleMapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    businessContact.fullAddress,
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

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
                  <p className="font-sans font-bold text-primary mt-0.5">{businessHours.weekdays}</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-outline">Sat - Sun</p>
                  <p className="font-sans font-bold text-outline mt-0.5">{businessHours.weekends}</p>
                </div>
              </div>
              <div className="border-t border-outline-variant pt-3 font-mono text-[9px] uppercase tracking-wider text-outline">
                {businessHours.appointmentNote}
              </div>
            </div>
          </div>

          {/* Interactive Google Map */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="border border-outline-variant bg-surface-container-lowest h-full min-h-[460px] flex flex-col justify-between overflow-hidden shadow-sm">
              <div className="relative w-full flex-1 min-h-[380px] bg-surface-container">
                <iframe
                  title="Google Map showing Aluminium Designs Katlehong Workshop"
                  src={googleMapEmbedUrl}
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 z-10 inline-flex items-center gap-2 bg-on-tertiary-container hover:bg-primary text-white px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-widest shadow-md transition-colors rounded-full"
                >
                  Get Directions
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="border-t border-outline-variant bg-surface p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <p className="font-sans font-bold text-primary">
                    {businessContact.streetAddress}, {businessContact.addressLocality}, {businessContact.addressCity}
                  </p>
                  <p className="font-mono text-[9px] uppercase tracking-wider text-outline mt-0.5">
                    Secure visitor parking inside &bull; Workshop visits &amp; collections welcome
                  </p>
                </div>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-outline-variant bg-surface-container hover:border-primary font-mono text-[10px] font-bold uppercase tracking-widest text-secondary transition-colors rounded-full text-center shrink-0"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
