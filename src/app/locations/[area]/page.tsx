import React from "react";
import {
  gautengLocations,
  getChildLocationsForHub,
  getHubForLocation,
  type LocationArea,
} from "@/data/locations";
import { notFound, permanentRedirect, RedirectType } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChevronRight, MapPin, ShieldCheck, Layers, Paintbrush, Hammer } from "lucide-react";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";
import { absoluteUrl, siteUrl, whatsappQuoteUrl } from "@/lib/site";
import {
  getCanonicalServiceLocationSlug,
  isRepairService,
  toSingularServiceTitle,
} from "@/lib/serviceLocationParser";
import {
  getLocationSeoEligibility,
  getServiceLocationSeoEligibility,
} from "@/lib/seoEligibility";

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

function buildLocationTargetPhrase(locationName: string) {
  return `Aluminium, Glass & Steel Services Near ${locationName}`;
}

function buildLocationMetaDescription(location: LocationArea) {
  const targetPhrase = buildLocationTargetPhrase(location.name);
  const raw = `${targetPhrase}: custom measurement, fabrication, installation, repairs, and written quotes across ${location.municipality}.`;
  if (raw.length <= 160) return raw;
  return `${raw.slice(0, 156).replace(/\s+\S*$/, "").replace(/[.,;:]$/, "")}…`;
}

export const dynamicParams = true;

export async function generateStaticParams() {
  return gautengLocations
    .filter((location) => getLocationSeoEligibility(location).index)
    .map((location) => ({
      area: location.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ area: string }> }) {
  const { area } = await params;
  const location = gautengLocations.find((loc) => loc.slug === area || loc.id === area);
  
  if (!location) {
    return { title: "Location Not Found" };
  }

  const targetPhrase = buildLocationTargetPhrase(location.name);
  const desc = buildLocationMetaDescription(location);
  const socialImg = absoluteUrl("/images/hero_exterior.png");
  const eligibility = getLocationSeoEligibility(location);

  return {
    title: { absolute: targetPhrase },
    description: desc,
    keywords: [
      targetPhrase.toLowerCase(),
      `aluminium services near ${location.name}`,
      `glass services near ${location.name}`,
      `steel works near ${location.name}`,
      `aluminium installers near me`,
    ],
    robots: {
      index: eligibility.index,
      follow: true,
      googleBot: {
        index: eligibility.index,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    alternates: { canonical: `${siteUrl}/locations/${location.slug}` },
    openGraph: {
      type: "website",
      locale: "en_ZA",
      url: `${siteUrl}/locations/${location.slug}`,
      siteName: "Aluminium Designs",
      title: targetPhrase,
      description: desc,
      images: [
        {
          url: socialImg,
          width: 1200,
          height: 630,
          alt: targetPhrase,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: targetPhrase,
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

  const eligibility = getLocationSeoEligibility(location);
  if (!eligibility.index) {
    const parentHub = getHubForLocation(location);
    permanentRedirect(
      parentHub ? `/locations/${parentHub.slug}` : "/locations",
      RedirectType.replace,
    );
  }

  const prep = "Near";
  const prepLower = "near";
  const h1Title = buildLocationTargetPhrase(location.name);

  // Rotating Hero Paragraphs
  const heroVariations = [
    `Brighten your home with clean, modern aluminium windows and smooth-sliding doors. We measure, make, and install high-quality aluminium frames for homes and residential estates ${prepLower} ${location.name}.`,
    `Looking for quality aluminium doors or windows ${prepLower} ${location.name}? We provide custom-made sliding doors, folding stackers, and window frames designed to fit your home and lifestyle.`,
    `Aluminium Designs brings durable, easy-to-clean aluminium windows, doors, and security gates to ${location.name} homeowners. Explore our range of custom designs made to fit your property perfectly.`
  ];
  const random = seededRandom(location.id);
  const genericHeroDescription = heroVariations[Math.floor(random() * heroVariations.length)];
  const heroDescription = location.context
    ? `${location.context}. We measure, manufacture, and install aluminium, glass, and steel systems for properties across ${location.name} and the wider ${location.region} area.`
    : genericHeroDescription;

  // Shuffle services deterministically based on location
  const shuffledServices = deterministicShuffle(services, location.id);
  const orderedServices = [
    ...shuffledServices.filter((service) =>
      getServiceLocationSeoEligibility(service.id, location).index,
    ),
    ...shuffledServices.filter((service) =>
      !getServiceLocationSeoEligibility(service.id, location).index,
    ),
  ];

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

  const coveredLocations = getChildLocationsForHub(location.slug);
  const localServiceNames = services
    .filter((service) => getServiceLocationSeoEligibility(service.id, location).index)
    .map((service) => service.menuLabel || service.title);
  const coveredAreaNames = coveredLocations.map((area) => area.name);
  const coveredAreaPreview = coveredAreaNames.slice(0, 10).join(", ");
  const remainingAreaCount = Math.max(coveredAreaNames.length - 10, 0);
  const locationFaqs = [
    {
      question: `Do you provide ${h1Title.toLowerCase()}?`,
      answer: `Yes. ${location.name} is one of our established Gauteng service hubs. We arrange site measurements and project visits at residential and commercial addresses in the hub and its assigned surrounding areas.`,
    },
    {
      question: `Which suburbs and townships do your aluminium, glass, and steel services near ${location.name} cover?`,
      answer: coveredAreaNames.length > 0
        ? `Coverage includes ${coveredAreaPreview}${remainingAreaCount > 0 ? ` and ${remainingAreaCount} additional listed areas` : ""}. The full coverage list is shown on this page. Confirm the project address when requesting a quote so we can verify travel and scheduling.`
        : `We cover ${location.name} and nearby addresses within ${location.municipality}. Confirm the exact project address when requesting a quote so we can verify travel and scheduling.`,
    },
    {
      question: `Which aluminium, glass, and steel services are available near ${location.name}?`,
      answer: `The main locally targeted services for this hub are ${localServiceNames.join(", ")}. Our broader aluminium, glass, security, and steel catalogue is also available subject to the project specification and site location.`,
    },
    {
      question: `How much do aluminium, glass, and steel installations near ${location.name} cost?`,
      answer: `Pricing depends on measurements, product type, glass or steel specification, hardware, finish, access, removal work, and installation conditions. We provide a written quote after confirming the scope instead of applying one generic area price.`,
    },
    {
      question: `What information is needed to quote services near ${location.name}?`,
      answer: `Send the project address, approximate opening dimensions, photographs, the product or repair required, preferred finish, and any estate or site-access requirements. A site measurement can then confirm the final manufacturing dimensions and installation scope.`,
    },
    {
      question: `How long do aluminium, glass, and steel projects near ${location.name} take?`,
      answer: `Timing depends on the product, quantity, selected materials, current workshop schedule, and site readiness. Your written quote should distinguish the measurement appointment, fabrication lead time, and expected installation duration.`,
    },
    {
      question: `Can your services near ${location.name} include repairs or removal of existing products?`,
      answer: `Yes, where the existing opening and product condition allow it. Photographs help with an initial assessment, but an on-site inspection may be needed to decide whether repair, component replacement, or full replacement is the safer and more economical option.`,
    },
    {
      question: `Are aluminium, glass, and steel services near ${location.name} available for homes and businesses?`,
      answer: `Yes. We assess houses, residential estates, complexes, shops, offices, and other commercial properties. Please disclose security procedures, working-hour restrictions, landlord approvals, parking, lifting, or access constraints before scheduling the visit.`,
    },
  ];

  // Regional Hubs & Suburbs in Municipality
  const neighboringInMunicipality = gautengLocations.filter(
    (candidate) =>
      (candidate.slug || candidate.id) !== location.slug &&
      candidate.municipality === location.municipality &&
      getLocationSeoEligibility(candidate).index,
  );
  const additionalLocations = gautengLocations.filter(
    (candidate) =>
      (candidate.slug || candidate.id) !== location.slug &&
      candidate.municipality !== location.municipality &&
      getLocationSeoEligibility(candidate).index,
  );
  const neighboringAreas = [...neighboringInMunicipality, ...additionalLocations].slice(0, 18);

  // Schema generation
  const serviceAreaJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/locations/${location.slug}#service-area`,
    name: h1Title,
    serviceType: "Custom aluminium, glass, security, and steel fabrication",
    provider: {
      "@id": `${siteUrl}#business`,
    },
    ...(absoluteUrl("/images/hero_exterior.png")
      ? { image: absoluteUrl("/images/hero_exterior.png") }
      : {}),
    areaServed: [location, ...coveredLocations].map((area) => ({
      "@type": "Place",
      name: area.name,
      containedInPlace: {
        "@type": "Place",
        name: area.municipality,
      },
    })),
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

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteUrl}/locations/${location.slug}#faq`,
    mainEntity: locationFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="relative w-full bg-surface text-on-surface">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([serviceAreaJsonLd, breadcrumbJsonLd, faqJsonLd]),
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
            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="mb-2">
              <ol className="flex flex-wrap items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-outline">
                <li>
                  <Link href="/" className="text-secondary hover:text-accent transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <ChevronRight className="w-3 h-3 text-outline" />
                </li>
                <li>
                  <Link href="/locations" className="text-secondary hover:text-accent transition-colors">
                    Locations
                  </Link>
                </li>
                <li>
                  <ChevronRight className="w-3 h-3 text-outline" />
                </li>
                <li className="text-accent font-semibold" aria-current="page">
                  {location.name}
                </li>
              </ol>
            </nav>

            <div className="inline-flex items-center space-x-2 bg-surface-container-low border border-outline-variant px-3.5 py-1.5 rounded-full">
              <MapPin className="w-4 h-4 text-on-tertiary-container" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                Serving {location.name}, {location.municipality}
              </span>
            </div>

            <h1 className="font-sans font-bold uppercase tracking-tight text-4xl sm:text-5xl lg:text-6xl text-primary leading-[1.1]">
              {h1Title}
            </h1>

            <p className="font-sans text-on-surface-variant text-lg leading-relaxed max-w-2xl">
              {heroDescription}
            </p>

            <p className="font-mono text-xs leading-relaxed text-on-surface-variant max-w-2xl border-l-2 border-accent pl-4">
              Area coverage: {location.type === "mall" ? `properties in the precinct surrounding ${location.name}` : location.name}, {location.region}, {location.municipality}. Visits are arranged to the project address; this page does not represent a walk-in branch at the location.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-4">
              <Link
                href={whatsappQuoteUrl}
                className="flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3.5 font-mono text-[11px] font-bold uppercase tracking-widest transition-colors w-full sm:w-auto rounded-full"
              >
                Get a Free Quote {prep} {location.name}
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
              Popular Installations {prep} {location.name}
            </h2>
            <p className="font-sans text-on-surface-variant text-base max-w-xl mx-auto leading-relaxed">
              Explore our core product lines built for residential homes, office fit-outs, and commercial structures in the area.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {orderedServices.map((service) => {
              const serviceEligibility = getServiceLocationSeoEligibility(
                service.id,
                location,
              );
              const localizedSlug = serviceEligibility.index
                ? `/${getCanonicalServiceLocationSlug(service.id, location.slug)}`
                : service.slug;
              const isRep = isRepairService(service.id);
              const cardTitle = isRep
                ? service.menuLabel || service.title
                : `${toSingularServiceTitle(service.menuLabel || service.title)} Installation`;
              return (
                <ServiceCard
                  key={service.id}
                  title={cardTitle}
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
              Why Choose Us {prep} {location.name}?
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
              Questions About {h1Title}?
            </h2>
          </div>
          <FAQAccordion limit={8} items={locationFaqs} />
        </div>
      </section>

      {/* 5. COVERED SUBURBS */}
      {coveredLocations.length > 0 && (
        <section className="py-20 bg-surface-container-low border-t border-outline-variant">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-3 mb-10">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
                Local Coverage
              </span>
              <h2 className="font-sans font-bold uppercase tracking-tight text-3xl sm:text-4xl text-primary">
                Areas We Serve Around {location.name}
              </h2>
              <p className="font-sans text-on-surface-variant text-sm max-w-2xl mx-auto leading-relaxed">
                Our mobile measurement and installation teams serve {location.name} and the following surrounding suburbs and townships. Visits are arranged to your project address.
              </p>
            </div>

            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3" aria-label={`Areas served around ${location.name}`}>
              {coveredLocations.map((area) => (
                <li
                  key={area.slug}
                  className="flex items-center gap-2 rounded-lg border border-outline-variant bg-surface px-3 py-2.5 text-sm text-on-surface-variant"
                >
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-accent" />
                  <span>{area.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* 6. REGIONAL HUBS IN MUNICIPALITY */}
      {neighboringAreas.length > 0 && (
        <section className="py-20 bg-surface-container-low border-t border-outline-variant">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-3 mb-12">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
                Regional Coverage Network
              </span>
              <h2 className="font-sans font-bold uppercase tracking-tight text-3xl sm:text-4xl text-primary">
                Other Service Areas in {location.municipality}
              </h2>
              <p className="font-sans text-on-surface-variant text-sm max-w-xl mx-auto leading-relaxed">
                We dispatch mobile measurement and fitting crews throughout {location.name}, {location.municipality}, and across greater Gauteng.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {neighboringAreas.map((nearArea) => {
                const nearSlug = nearArea.slug || nearArea.id;
                return (
                  <Link
                    key={nearSlug}
                    href={`/locations/${nearSlug}`}
                    className="group p-3.5 bg-surface border border-outline-variant hover:border-accent rounded-xl transition-all text-center flex flex-col items-center justify-center space-y-1.5 shadow-xs"
                  >
                    <MapPin className="w-3.5 h-3.5 text-accent group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-semibold text-primary group-hover:text-accent transition-colors line-clamp-1">
                      {nearArea.name}
                    </span>
                    <span className="text-[9px] text-on-surface-variant font-mono uppercase tracking-wider">
                      {nearArea.type || "Area"}
                    </span>
                  </Link>
                );
              })}
            </div>

            <div className="mt-8 flex justify-center">
              <Link
                href="/locations"
                className="inline-flex items-center gap-2 rounded-full border border-outline-variant bg-surface px-5 py-3 font-mono text-[10px] font-bold uppercase tracking-widest text-primary transition-colors hover:border-accent hover:bg-accent hover:text-white"
              >
                View All Gauteng Locations
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* 7. CTA SECTION */}
      <CTASection />
    </div>
  );
}
