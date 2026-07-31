import React from "react";
import { gautengLocations } from "@/data/locations";
import { services } from "@/data/services";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, CheckCircle2 } from "lucide-react";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}

export async function generateStaticParams() {
  const params: { area: string; serviceId: string }[] = [];
  
  for (const location of gautengLocations) {
    for (const service of services) {
      params.push({
        area: location.id,
        serviceId: `${slugify(service.title)}-in-${location.id}`,
      });
    }
  }
  
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ area: string; serviceId: string }> }) {
  const { area, serviceId } = await params;
  const location = gautengLocations.find((loc) => loc.id === area);
  
  if (!location) return { title: "Not Found" };
  
  const service = services.find((s) => `${slugify(s.title)}-in-${location.id}` === serviceId);
  
  if (!location || !service) {
    return { title: "Not Found" };
  }

  return {
    title: `${service.title} in ${location.name} | Aluminium Designs`,
    description: `Expert installation of ${service.title.toLowerCase()} in ${location.name}. ${service.shortDescription} Get a free on-site quote in ${location.municipality} today.`,
  };
}

export default async function LocationServicePage({ params }: { params: Promise<{ area: string; serviceId: string }> }) {
  const { area, serviceId } = await params;
  const location = gautengLocations.find((loc) => loc.id === area);
  
  if (!location) notFound();
  
  const service = services.find((s) => `${slugify(s.title)}-in-${location.id}` === serviceId);

  if (!service) {
    notFound();
  }

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    provider: {
      "@type": "LocalBusiness",
      name: `Aluminium Designs ${location.name}`,
      telephone: "+27-87-123-4567",
      image: "https://www.apexaluminium.co.za/images/hero_exterior.png",
      address: {
        "@type": "PostalAddress",
        addressRegion: "Gauteng",
        addressCountry: "ZA",
      }
    },
    areaServed: {
      "@type": "Place",
      name: location.name
    },
    url: `https://www.apexaluminium.co.za/locations/${location.id}/${slugify(service.title)}-in-${location.id}`,
  };

  return (
    <div className="bg-surface text-on-surface">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-surface-container-low border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-surface-container border border-outline-variant px-3.5 py-1.5 rounded-full">
                <MapPin className="w-4 h-4 text-on-tertiary-container" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-on-tertiary-container">
                  {location.name} Service Area
                </span>
              </div>

              <h1 className="font-sans font-bold uppercase tracking-tight text-4xl sm:text-5xl lg:text-6xl text-primary leading-[1.1]">
                {service.title} in <span className="text-on-tertiary-container">{location.name}</span>
              </h1>

              <p className="font-sans text-on-surface-variant text-lg leading-relaxed max-w-xl">
                Aluminium Designs specializes in custom-manufactured {service.title.toLowerCase()} for residential and commercial properties in {location.name}. {service.longDescription}
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4">
                <Link
                  href="/quote"
                  className="flex items-center justify-center gap-2 bg-on-tertiary-container hover:bg-primary text-white px-6 py-3.5 font-mono text-[11px] font-bold uppercase tracking-widest transition-colors w-full sm:w-auto rounded-full"
                >
                  Request a Quote in {location.name}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href={`/locations/${location.id}`}
                  className="flex items-center justify-center gap-2 bg-surface text-secondary px-6 py-3.5 font-mono text-[11px] font-bold uppercase tracking-widest rounded-full border border-outline-variant hover:border-primary hover:bg-surface-container transition-colors w-full sm:w-auto"
                >
                  View All {location.name} Services
                </Link>
              </div>
            </div>

            {/* Feature Image */}
            <div className="relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden border border-outline-variant">
              <Image
                src={service.imagePath}
                alt={`${service.title} in ${location.name}`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURES SECTION */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="font-sans font-bold uppercase tracking-tight text-3xl sm:text-4xl text-primary">
                Why choose our {service.title.toLowerCase()} in {location.name}?
              </h2>
              <p className="font-sans text-on-surface-variant text-base leading-relaxed">
                Whether you are renovating a home in {location.name} or building a new commercial development in {location.municipality}, our {service.title.toLowerCase()} are engineered to deliver unmatched durability, aesthetic appeal, and weather resistance.
              </p>
               
              <ul className="space-y-4 pt-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 shrink-0 border border-outline-variant bg-surface-container rounded-xl text-secondary">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-on-surface-variant leading-relaxed font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-surface-container-low rounded-2xl p-8 lg:p-12 border border-outline-variant relative overflow-hidden">
               
                <div className="relative z-10 space-y-8">
                  <div>
                    <h3 className="font-sans font-bold text-2xl text-primary mb-2">Our Process in {location.name}</h3>
                    <p className="text-on-surface-variant text-sm">We handle everything from the initial measurement to the final installation.</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-sm shrink-0">1</div>
                        <div className="w-px h-full bg-outline-variant mt-2"></div>
                      </div>
                      <div className="pb-4">
                        <h4 className="font-bold text-primary text-base">Free On-Site Measurement</h4>
                        <p className="text-on-surface-variant text-sm mt-1">We send a technician to your property in {location.name} to take precise measurements.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-sm shrink-0">2</div>
                        <div className="w-px h-full bg-outline-variant mt-2"></div>
                      </div>
                      <div className="pb-4">
                        <h4 className="font-bold text-primary text-base">Custom Fabrication</h4>
                        <p className="text-on-surface-variant text-sm mt-1">Your {service.title.toLowerCase()} are custom-built to the exact dimensions in our factory.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-on-tertiary-container text-white flex items-center justify-center font-bold text-sm shrink-0">3</div>
                      </div>
                      <div>
                        <h4 className="font-bold text-primary text-base">Professional Installation</h4>
                        <p className="text-on-surface-variant text-sm mt-1">Our certified fitters install the product, ensuring weather sealing and flawless operation.</p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FAQ */}
      <section className="py-24 bg-surface-container-low border-t border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-sans font-bold uppercase tracking-tight text-3xl sm:text-4xl text-primary">
              Frequently Asked Questions
            </h2>
          </div>
          <FAQAccordion limit={4} locationName={location.name} />
        </div>
      </section>

      <CTASection />
    </div>
  );
}
