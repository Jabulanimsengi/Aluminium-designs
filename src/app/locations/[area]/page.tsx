import React from "react";
import { gautengLocations } from "@/data/locations";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, MapPin, ShieldCheck, Layers, Paintbrush, Hammer } from "lucide-react";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";
import { absoluteUrl, businessContact, siteUrl, whatsappQuoteUrl } from "@/lib/site";

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}

// === DETERMINISTIC SHUFFLE LOGIC ===
function seededRandom(seed: string) {
  let h = 1779033703 ^ seed.length;
  for (let i = 0; i < seed.length; i++) {
    h = Math.imul(h ^ seed.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return function () {
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
}

function deterministicShuffle<T>(array: T[], seed: string): T[] {
  const random = seededRandom(seed);
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export const dynamicParams = true;

export async function generateStaticParams() {
  return gautengLocations.map((location) => ({
    area: location.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ area: string }> }) {
  const { area } = await params;
  const location = gautengLocations.find((loc) => loc.slug === area || loc.id === area);
  
  if (!location) {
    return { title: "Location Not Found" };
  }

  const variations = [
    `Premium custom aluminium windows, doors, and glass installations in ${location.name}, ${location.municipality}. Contact Aluminium Designs for a free quote in your area.`,
    `Top-rated aluminium installations in ${location.name}. Custom sizing, sleek finishes, and professional fitting. Get a free quote today!`,
    `Upgrade your ${location.name} home with modern aluminium windows and doors. Expert manufacturing and flawless installation by Aluminium Designs.`
  ];
  
  const random = seededRandom(location.id);
  const desc = variations[Math.floor(random() * variations.length)];
  const socialImg = absoluteUrl("/images/hero_exterior.png");

  return {
    title: `Aluminium Windows & Doors in ${location.name} | Aluminium Designs`,
    description: desc,
    robots: { index: true, follow: true },
    alternates: { canonical: `${siteUrl}/locations/${location.slug}` },
    openGraph: {
      type: "website",
      locale: "en_ZA",
      url: `${siteUrl}/locations/${location.slug}`,
      siteName: "Aluminium Designs",
      title: `Aluminium Windows & Doors in ${location.name} | Aluminium Designs`,
      description: desc,
      images: [
        {
          url: socialImg,
          width: 1200,
          height: 630,
          alt: `Aluminium Designs in ${location.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Aluminium Windows & Doors in ${location.name} | Aluminium Designs`,
      description: desc,
      images: [socialImg],
    },
  };
}

export default async function LocationPage({ params }: { params: Promise<{ area: string }> }) {
  const { area } = await params;
  const location = gautengLocations.find((loc) => loc.slug === area || loc.id === area);

  if (!location) {
    notFound();
  }

  // Rotating Hero Paragraphs
  const heroVariations = [
    `Brighten your home with clean, modern aluminium windows and smooth-sliding doors. We measure, make, and install high-quality aluminium frames for homes and residential estates across ${location.name}.`,
    `Looking for quality aluminium doors or windows in ${location.name}? We provide custom-made sliding doors, folding stackers, and window frames designed to fit your home and lifestyle.`,
    `Aluminium Designs brings durable, easy-to-clean aluminium windows, doors, and security gates to ${location.name} homeowners. Explore our range of custom designs made to fit your property perfectly.`
  ];
  const random = seededRandom(location.id);
  const heroDescription = heroVariations[Math.floor(random() * heroVariations.length)];

  // Shuffle services deterministically based on location
  const shuffledServices = deterministicShuffle(services, location.id);

  // Benefits logic - Shuffle the content but KEEP the layout spans consistent
  const rawBenefits = [
    {
      title: "Clean Minimalist Look",
      description: "Ultra-slim frames designed to sit flush, maximizing natural sunlight and offering uninterrupted views of your property.",
      icon: Layers,
    },
    {
      title: "Weather & Noise Protection",
      description: "Fully sealed double-rubber joints and double glazing keep drafts out, retain winter heat, and block street noise.",
      icon: ShieldCheck,
    },
    {
      title: `Custom Tailored for ${location.name} Homes`,
      description: "Every window, door, and patio screen is fabricated from scratch to fit your openings, ensuring a seamless and smart finish.",
      icon: Hammer,
    },
    {
      title: "Sleek Colour Finishes",
      description: "Choose from durable powder-coated colours including Matte Black, Charcoal Grey, and Satin Silver that never rust or need painting.",
      icon: Paintbrush,
    },
  ];

  const shuffledRawBenefits = deterministicShuffle(rawBenefits, location.id);
  const layoutSpans = [
    "md:col-span-2 bg-surface",
    "md:col-span-1 bg-surface",
    "md:col-span-1 bg-surface",
    "md:col-span-2 bg-primary text-on-primary"
  ];
  
  const benefits = shuffledRawBenefits.map((benefit, index) => ({
    ...benefit,
    span: layoutSpans[index]
  }));

  // Schema generation
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${siteUrl}#business`,
    name: businessContact.name,
    ...(absoluteUrl("/images/hero_exterior.png")
      ? { image: absoluteUrl("/images/hero_exterior.png") }
      : {}),
    telephone: businessContact.phoneE164,
    email: businessContact.email,
    areaServed: {
      "@type": "Place",
      name: location.name,
      containedInPlace: {
        "@type": "Place",
        name: location.municipality,
      },
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: businessContact.streetAddress,
      addressLocality: businessContact.addressCity,
      addressRegion: businessContact.addressRegion,
      addressCountry: businessContact.addressCountry,
    },
    url: `${siteUrl}/locations/${location.slug}`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Locations",
        item: `${siteUrl}/locations`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: location.name,
        item: `${siteUrl}/locations/${location.slug}`,
      },
    ],
  };

  return (
    <div className="relative w-full bg-surface text-on-surface">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([localBusinessJsonLd, breadcrumbJsonLd]),
        }}
      />
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center pt-20 pb-16 overflow-hidden bg-surface border-b border-outline-variant">
        <div className="absolute inset-0 opacity-5 pointer-events-none mix-blend-multiply">
          <svg className="w-full h-full text-outline" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-surface-container-low border border-outline-variant px-3.5 py-1.5 rounded-full">
              <MapPin className="w-4 h-4 text-on-tertiary-container" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                Serving {location.name}, {location.municipality}
              </span>
            </div>

            <h1 className="font-sans font-bold uppercase tracking-tight text-4xl sm:text-5xl lg:text-6xl text-primary leading-[1.1]">
              Aluminium Windows, Doors &amp; Steel Works {location.type === "mall" ? "Near" : "in"}{" "}
              <span className="text-accent">{location.name}</span>
            </h1>

            <p className="font-sans text-on-surface-variant text-lg leading-relaxed max-w-2xl">
              {heroDescription}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-4">
              <Link
                href={whatsappQuoteUrl}
                className="flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3.5 font-mono text-[11px] font-bold uppercase tracking-widest transition-colors w-full sm:w-auto rounded-full"
              >
                Get a Free Quote in {location.name}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-sans font-bold uppercase tracking-tight text-3xl sm:text-4xl text-primary">
              Popular Installations in {location.name}
            </h2>
            <p className="font-sans text-on-surface-variant text-base max-w-xl mx-auto leading-relaxed">
              Explore our core product lines built for residential homes, office fit-outs, and commercial structures in the area.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {shuffledServices.map((service) => {
              const localizedSlug = `/locations/${location.slug}/${slugify(service.title)}-in-${location.slug}`;
              return (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  shortDescription={service.shortDescription}
                  slug={localizedSlug}
                  imagePath={service.imagePath}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. BENTO GRID */}
      <section className="py-24 bg-surface-container-low border-t border-outline-variant relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-sans font-bold uppercase tracking-tight text-3xl sm:text-4xl text-primary">
              Why Choose Us in {location.name}?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={i}
                  className={`p-8 border border-outline-variant flex flex-col justify-between min-h-[200px] hover:border-accent transition-all duration-300 ${benefit.span}`}
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 border border-outline-variant bg-surface-container flex items-center justify-center text-accent">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-2 text-left">
                      <h3 className="font-sans font-bold text-lg">
                        {benefit.title}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm opacity-90 leading-relaxed font-normal">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. FAQ */}
      <section className="py-24 bg-surface border-t border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-sans font-bold uppercase tracking-tight text-3xl sm:text-4xl text-primary">
              Questions About Installations in {location.name}?
            </h2>
          </div>
          <FAQAccordion limit={4} locationName={location.name} />
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <CTASection />
    </div>
  );
}
