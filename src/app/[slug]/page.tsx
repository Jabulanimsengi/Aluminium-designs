import React from "react";
import { Metadata } from "next";
import { notFound, permanentRedirect, RedirectType } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  ShieldCheck,
  Tag,
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Layers,
  Clock,
  HelpCircle,
  FileCheck,
} from "lucide-react";
import {
  gautengLocations,
  getChildLocationsForHub,
  getHubForLocation,
} from "@/data/locations";
import { services } from "@/data/services";
import { getLocationServicePage } from "@/data/location-service-pages";
import {
  parseServiceLocationSlug,
  getCanonicalServiceLocationSlug,
  isRepairService,
  toSingularServiceTitle,
} from "@/lib/serviceLocationParser";
import { getServiceLocationSeoEligibility } from "@/lib/seoEligibility";
import { absoluteUrl, siteUrl, getWhatsAppQuoteUrl } from "@/lib/site";
import CTASection from "@/components/CTASection";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = true;

/**
 * Pre-render primary flagship commercial hubs at build time.
 * All remaining combinations render on demand via dynamicParams = true.
 */
export async function generateStaticParams() {
  const params: { slug: string }[] = [];
  for (const location of gautengLocations) {
    for (const service of services) {
      if (!getServiceLocationSeoEligibility(service.id, location).index) continue;
      params.push({
        slug: getCanonicalServiceLocationSlug(service.id, location.slug),
      });
    }
  }
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const parsed = parseServiceLocationSlug(slug);

  if (!parsed) {
    return { title: "Page Not Found" };
  }

  const title = parsed.h1;
  const action = parsed.isInstallation
    ? "made-to-measure fabrication and professional installation"
    : "site assessment, repair options, and replacement guidance";
  const rawDescription = `${title}: ${action}, written specifications, and clear quotes for homes and businesses across ${parsed.location.municipality}.`;
  const description = rawDescription.length <= 160
    ? rawDescription
    : `${rawDescription.slice(0, 156).replace(/\s+\S*$/, "").replace(/[.,;:]$/, "")}…`;
  const keywordStem = parsed.serviceTitle.toLowerCase();
  const keywords = [
    title.toLowerCase(),
    `${keywordStem} near ${parsed.locationName}`,
    `${keywordStem} near me`,
    parsed.isInstallation
      ? `${keywordStem} installers near ${parsed.locationName}`
      : `${keywordStem} services near ${parsed.locationName}`,
  ];

  const canonicalUrl = `${siteUrl}/${parsed.canonicalSlug}`;
  const eligibility = getServiceLocationSeoEligibility(
    parsed.coreService?.id || parsed.serviceSlug,
    parsed.location,
  );
  const socialImage = absoluteUrl(
    parsed.coreService?.imagePath || "/images/window_detail.png",
  );

  return {
    title: { absolute: title },
    description,
    keywords,
    alternates: { canonical: canonicalUrl },
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
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "website",
      locale: "en_ZA",
      siteName: "Aluminium Designs",
      images: [
        {
          url: socialImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function FlatServiceLocationPage({ params }: PageProps) {
  const { slug } = await params;
  const parsed = parseServiceLocationSlug(slug);

  if (!parsed) {
    notFound();
  }

  const eligibility = getServiceLocationSeoEligibility(
    parsed.coreService?.id || parsed.serviceSlug,
    parsed.location,
  );
  if (!eligibility.index) {
    const parentHub = getHubForLocation(parsed.location);
    const serviceId = parsed.coreService?.id;
    if (
      parentHub &&
      serviceId &&
      getServiceLocationSeoEligibility(serviceId, parentHub).index
    ) {
      permanentRedirect(
        `/${getCanonicalServiceLocationSlug(serviceId, parentHub.slug)}`,
        RedirectType.replace,
      );
    }

    permanentRedirect(parsed.coreService?.slug || "/services", RedirectType.replace);
  }

  if (parsed.slug !== parsed.canonicalSlug) {
    permanentRedirect(`/${parsed.canonicalSlug}`, RedirectType.replace);
  }

  const {
    serviceTitle,
    locationName,
    location,
    preposition,
    h1: h1Title,
    taxonomyService,
    coreService,
  } = parsed;

  const prepWord = preposition === "in" ? "in" : "near";
  const locationContextPhrase = `${prepWord} ${locationName} and across ${location.municipality}`;

  const whatsappMessage = `Hi Aluminium Designs, I would like to enquire about ${serviceTitle.toLowerCase()} ${prepWord} ${locationName}.`;
  const whatsappUrl = getWhatsAppQuoteUrl(whatsappMessage);

  const pageUrl = `${siteUrl}/${parsed.canonicalSlug}`;
  const priceDisplay = taxonomyService?.startingPriceDisplay || "Competitive Pricing";
  const priceUnit = taxonomyService?.priceUnit || "custom sized";
  const startingPriceZar = taxonomyService?.startingPriceZar || 1500;

  const locContent = getLocationServicePage(parsed.locationSlug, parsed.canonicalSlug);
  const targetPhraseLower = h1Title.toLowerCase();

  const defaultFaqs = [
    {
      question: `How much does ${targetPhraseLower} cost?`,
      answer: `Indicative pricing begins at ${priceDisplay} (${priceUnit}), but the written quote depends on confirmed dimensions, materials, hardware, finish, access, removal work, and installation conditions.`,
    },
    {
      question: `What information do you need to quote ${targetPhraseLower}?`,
      answer: `Send the project address, photographs, approximate dimensions, the required product or repair, preferred finish, and any access restrictions. Final manufacturing dimensions may require an on-site measurement.`,
    },
    {
      question: `How long does ${targetPhraseLower} take?`,
      answer: `Timing depends on the confirmed specification, material availability, quantity, workshop schedule, and site readiness. The written quote should separate the expected fabrication lead time from the on-site work duration.`,
    },
    {
      question: `Which areas do you cover for ${serviceTitle.toLowerCase()} near ${locationName}?`,
      answer: `We serve project addresses across the ${locationName} hub and its listed surrounding suburbs and townships. Confirm the exact address when enquiring so we can verify coverage and appointment availability.`,
    },
    {
      question: `Can ${targetPhraseLower} include removal of an existing product?`,
      answer: `Yes, where the existing condition and opening allow it. We assess the frames or structure, glazing, seals, hardware, alignment, and compatible parts before recommending repair, component replacement, or full replacement.`,
    },
    {
      question: `How do you specify ${serviceTitle.toLowerCase()} near ${locationName}?`,
      answer: `The specification is based on dimensions, intended use, security, ventilation, glazing or steel requirements, weather exposure, finish, hardware, and the condition of the supporting opening or structure.`,
    },
    {
      question: `Is ${targetPhraseLower} available for homes and commercial properties?`,
      answer: `Yes. Tell us about estate rules, landlord approvals, working-hour restrictions, parking, lifting, security induction, or other access requirements before the site visit is scheduled.`,
    },
    {
      question: `What warranty and aftercare apply to ${targetPhraseLower}?`,
      answer: `Coverage depends on the chosen product, components, finish, and work scope. The written quote should identify the applicable warranty, exclusions, maintenance requirements, and issue-reporting process.`,
    },
  ];

  const faqsToRender =
    locContent?.localFaqs && locContent.localFaqs.length >= 8
      ? locContent.localFaqs
      : defaultFaqs;

  const nearbyServiceAreas = getChildLocationsForHub(location.slug)
    .slice(0, 8)
    .map((area) => area.name);
  const localAreaPhrase = nearbyServiceAreas.length > 0
    ? `including ${nearbyServiceAreas.join(", ")}`
    : `across the wider ${location.region} area`;
  const defaultStoryParagraphs = [
    `${location.context ? `${location.context}. ` : ""}${locationName} sits within ${location.region} and ${location.municipality}. Properties ${localAreaPhrase} experience strong Highveld sun, summer storms, and cold winter mornings, so the material, coating, hardware, drainage, and sealing for ${serviceTitle.toLowerCase()} are selected for the measured opening and exposure.`,
    `${coreService?.shortDescription || `${serviceTitle} is specified for the measured site conditions.`} For projects ${prepWord} ${locationName}, the work scope covers measurement, specification, fabrication or ordering, installation, testing, and the handover items identified in the written quote.`,
  ];

  const storyParagraphs =
    locContent?.localizedStory?.uniqueParagraphs && locContent.localizedStory.uniqueParagraphs.length > 0
      ? locContent.localizedStory.uniqueParagraphs
      : defaultStoryParagraphs;

  const storyHeading =
    locContent?.localizedStory?.heading ||
    `Engineered Glazing & Architectural Security ${prepWord} ${locationName}`;
  const climateNotice = locContent?.localizedStory?.localClimateNotice;
  const servicedSuburbs = locContent?.localNAP?.servicedSuburbs?.length
    ? locContent.localNAP.servicedSuburbs
    : nearbyServiceAreas;

  // Structured Data (JSON-LD): Service / FAQPage / Breadcrumbs linked to root #business
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: h1Title,
        serviceType: serviceTitle,
        provider: {
          "@id": `${siteUrl}#business`,
        },
        areaServed: {
          "@type": "AdministrativeArea",
          name: locationName,
        },
        description: `Custom ${serviceTitle.toLowerCase()} services ${locationContextPhrase}, specified for the measured site conditions and applicable safety requirements.`,
        offers: {
          "@type": "Offer",
          priceCurrency: "ZAR",
          price: startingPriceZar,
          description: `Starting from ${priceDisplay} ${priceUnit}`,
          url: pageUrl,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: faqsToRender.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
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
            name: "Services",
            item: `${siteUrl}/services`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: locationName,
            item: `${siteUrl}/locations/${parsed.locationSlug}`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: h1Title,
            item: pageUrl,
          },
        ],
      },
    ],
  };

  const currentServiceId = coreService?.id || parsed.serviceSlug;
  const isCurrentSteel = coreService?.category === "steel";

  const sameMunicipalityLocations = gautengLocations
    .filter(
      (candidate) =>
        (candidate.slug || candidate.id) !== parsed.locationSlug &&
        candidate.municipality === location.municipality &&
        getServiceLocationSeoEligibility(currentServiceId, candidate).index,
    );
  const otherEligibleLocations = gautengLocations.filter(
    (candidate) =>
      (candidate.slug || candidate.id) !== parsed.locationSlug &&
      candidate.municipality !== location.municipality &&
      getServiceLocationSeoEligibility(currentServiceId, candidate).index,
  );
  const nearbyLocations = [
    ...sameMunicipalityLocations,
    ...otherEligibleLocations,
  ].slice(0, 6);

  const sameCategoryServices = services
    .filter(
      (s) =>
        s.id !== currentServiceId &&
        (isCurrentSteel ? s.category === "steel" : s.category === "aluminium") &&
        !isRepairService(s.id)
    )
    .slice(0, 4);

  const oppositeCategoryServices = services
    .filter(
      (s) =>
        s.id !== currentServiceId &&
        (isCurrentSteel ? s.category === "aluminium" : s.category === "steel") &&
        !isRepairService(s.id)
    )
    .slice(0, 3);

  const repairServiceItem = services.find(
    (s) => s.id !== currentServiceId && isRepairService(s.id)
  );

  const complementaryServices = [
    ...sameCategoryServices,
    ...oppositeCategoryServices,
    ...(repairServiceItem ? [repairServiceItem] : []),
  ]
    .filter((service) =>
      getServiceLocationSeoEligibility(service.id, location).index,
    )
    .slice(0, 8);

  return (
    <div className="bg-surface text-on-surface">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* 1. HERO SECTION */}
      <section className="relative pt-20 pb-16 lg:pt-24 lg:pb-20 overflow-hidden bg-surface-container-low border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
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
                    <Link
                      href={coreService?.category === "steel" ? "/steel-works" : "/services"}
                      className="text-secondary hover:text-accent transition-colors"
                    >
                      {coreService?.category === "steel" ? "Steel Works" : "Services"}
                    </Link>
                  </li>
                  <li>
                    <ChevronRight className="w-3 h-3 text-outline" />
                  </li>
                  {coreService?.id && (
                    <>
                      <li>
                        <Link
                          href={`/services/${coreService.id}`}
                          className="text-secondary hover:text-accent transition-colors"
                        >
                          {serviceTitle}
                        </Link>
                      </li>
                      <li>
                        <ChevronRight className="w-3 h-3 text-outline" />
                      </li>
                    </>
                  )}
                  <li className="text-accent font-semibold" aria-current="page">
                    {locationName}
                  </li>
                </ol>
              </nav>

              <div className="inline-flex items-center space-x-2 bg-surface-container border border-outline-variant px-3.5 py-1.5 rounded-full">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-on-surface">
                  {locationName}, {location.municipality}
                </span>
              </div>

              {/* Exact matching H1 */}
              <h1 className="font-sans font-bold uppercase tracking-tight text-3xl sm:text-4xl lg:text-5xl text-primary leading-[1.1]">
                {h1Title}
              </h1>

              <p className="font-sans text-on-surface-variant text-base sm:text-lg leading-relaxed max-w-2xl">
              Custom manufacturing and professional installation of{" "}
                <strong className="text-primary font-semibold">
                  {serviceTitle}
                </strong>{" "}
              {locationContextPhrase}. Measured for the property, specified for the application, and supplied with the warranty terms stated in the written quote.
              </p>

              {/* Pricing Callout */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <div className="border border-accent/40 bg-accent/5 px-4 py-2.5 rounded-lg">
                  <span className="block font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
                    Estimated Base Rate
                  </span>
                  <span className="font-sans text-xl font-extrabold text-primary">
                    {priceDisplay}{" "}
                    <span className="text-xs font-normal text-on-surface-variant">
                      ({priceUnit})
                    </span>
                  </span>
                </div>
                <div className="border border-outline-variant bg-surface px-4 py-2.5 rounded-lg flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-accent shrink-0" />
                  <div>
                    <span className="block font-mono text-[10px] font-bold uppercase tracking-widest text-primary">
                      Compliance Assured
                    </span>
                    <span className="text-xs text-on-surface-variant">
                  Safety Glazing Specified by Application
                    </span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4">
                <Link
                  href={whatsappUrl}
                  className="flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white px-7 py-3.5 font-mono text-[11px] font-bold uppercase tracking-widest transition-colors w-full sm:w-auto rounded-full shadow-sm"
                >
                  Instant WhatsApp Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/pricing"
                  className="flex items-center justify-center gap-2 bg-surface text-secondary px-6 py-3.5 font-mono text-[11px] font-bold uppercase tracking-widest rounded-full border border-outline-variant hover:border-accent hover:bg-surface-container transition-colors w-full sm:w-auto"
                >
                  <Tag className="w-4 h-4" />
                  View All Rates &amp; Pricing
                </Link>
              </div>

              {/* Fast Trust Indicators */}
              <div className="pt-4 flex flex-wrap gap-6 text-xs text-on-surface-variant">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-accent" />
                  Free On-Site Laser Measurements
                </span>
                <span className="flex items-center gap-1.5">
                  <FileCheck className="w-4 h-4 text-accent" />
                  No Hidden Call-Out Charges
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-accent" />
                  AAAMSA &amp; Qualicoat Finishes
                </span>
              </div>
            </div>

            {/* Feature Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden border border-outline-variant bg-surface-container shadow-sm group">
                <Image
                  src={coreService?.imagePath || "/images/window_detail.png"}
                  alt={`${serviceTitle} custom fitted in ${locationName}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="inline-block bg-black/75 backdrop-blur-md px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-white border border-white/20 rounded-full">
                    {taxonomyService?.category || "Architectural Systems"}
                  </span>
                  <span className="font-mono text-[10px] text-white/90 uppercase font-semibold">
                    {locationName}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LOCALIZED STORY */}
      <section className="py-20 bg-surface border-b border-outline-variant">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
            Built for {locationName}&apos;s Climate &amp; Architecture
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-bold uppercase tracking-tight text-primary">
            {storyHeading}
          </h2>
          {storyParagraphs.map((paragraph, idx) => (
            <p key={idx} className="font-sans text-on-surface-variant text-base sm:text-lg leading-relaxed text-left">
              {paragraph}
            </p>
          ))}

          {climateNotice && (
            <div className="mt-6 border border-outline-variant bg-surface-container-low p-5 flex items-start gap-3 rounded-lg text-left">
              <ShieldCheck className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <p className="text-sm text-on-surface font-medium leading-relaxed">
                {climateNotice}
              </p>
            </div>
          )}

          {servicedSuburbs.length > 0 && (
            <div className="pt-6 border-t border-outline-variant text-left">
              <span className="block font-mono text-[10px] font-bold uppercase tracking-widest text-accent mb-3">
                Suburbs Serviced in {locationName}
              </span>
              <div className="flex flex-wrap gap-2">
                {servicedSuburbs.map((suburb) => (
                  <span
                    key={suburb}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-container border border-outline-variant rounded-full text-xs font-medium text-on-surface-variant"
                  >
                    <MapPin className="w-3 h-3 text-accent" />
                    {suburb}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="pt-4 flex justify-center">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 border border-outline-variant bg-surface-container-low hover:bg-surface-container px-6 py-3 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-primary transition-colors"
            >
              Compare All Pricing Tiers for {locationName}
              <ArrowRight className="w-4 h-4 text-accent" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. SPECIFICATIONS & COMPLIANCE */}
      <section className="py-20 bg-surface-container-low border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
              Engineering Excellence
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-bold uppercase tracking-tight text-primary">
              Standards &amp; Manufacturing Specs
            </h2>
            <p className="text-sm text-on-surface-variant">
              Every system supplied to {locationName} meets strict national codes for structural durability and security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-outline-variant bg-surface p-6 rounded-lg space-y-3">
              <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-accent">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-sans text-base font-bold uppercase tracking-tight text-primary">
                  Application-Appropriate Safety Glazing
              </h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                6.38mm laminated safety glass or toughened safety glass fitted to all critical high-impact zones, meeting national building regulations.
              </p>
            </div>

            <div className="border border-outline-variant bg-surface p-6 rounded-lg space-y-3">
              <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-accent">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="font-sans text-base font-bold uppercase tracking-tight text-primary">
                Qualicoat Powder Coating
              </h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                UV-stabilized exterior powder coating (60–80 microns) in Matt Charcoal, Matt Black, Pure White, or Bronze that withstands harsh Gauteng UV without fading.
              </p>
            </div>

            <div className="border border-outline-variant bg-surface p-6 rounded-lg space-y-3">
              <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-accent">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-sans text-base font-bold uppercase tracking-tight text-primary">
                Precision Turnkey Fitment
              </h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Clean installation by insured technicians with direct perimeter structural anchoring, draught-excluding weather seals, and complete rubble clearance.
              </p>
            </div>
          </div>

          {/* 2-Way Pillar Cross-Links */}
          <div className="mt-12 pt-8 border-t border-outline-variant flex flex-col sm:flex-row items-center justify-between gap-4 bg-surface p-6 rounded-xl">
            <div className="space-y-1 text-center sm:text-left">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
                Master Product Guides &amp; Regional Hub
              </span>
              <p className="text-sm font-semibold text-primary">
                Explore comprehensive design specifications or browse all solutions in {locationName}.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {coreService?.id && (
                <Link
                  href={`/services/${coreService.id}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-surface-container border border-outline-variant rounded-full text-xs font-mono font-bold uppercase tracking-wider text-secondary hover:text-accent hover:border-accent transition-colors"
                >
                  <Layers className="w-3.5 h-3.5 text-accent" />
                  {serviceTitle} Master Guide
                  <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
                </Link>
              )}
              <Link
                href={`/locations/${parsed.locationSlug}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-surface-container border border-outline-variant rounded-full text-xs font-mono font-bold uppercase tracking-wider text-secondary hover:text-accent hover:border-accent transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-accent" />
                All Services in {locationName}
                <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LOCALIZED FAQS */}
      <section className="py-20 bg-surface border-b border-outline-variant">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-2">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
              Frequently Asked Questions
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-bold uppercase tracking-tight text-primary">
              Got Questions About {serviceTitle} {prepWord} {locationName}?
            </h2>
          </div>

          <div className="space-y-4">
            {faqsToRender.map((faq, i) => (
              <div key={i} className="border border-outline-variant bg-surface-container-low p-6 rounded-lg space-y-2">
                <h3 className="font-sans text-base font-bold text-primary flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-accent shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3 border-t border-outline-variant pt-8">
            {coreService?.id && (
              <Link
                href={`/services/${coreService.id}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-outline-variant bg-surface-container-low px-4 py-2 text-xs font-medium text-secondary transition-colors hover:border-accent hover:text-accent"
              >
                Compare {serviceTitle} specifications
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            )}
            <Link
              href={`/locations/${parsed.locationSlug}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-outline-variant bg-surface-container-low px-4 py-2 text-xs font-medium text-secondary transition-colors hover:border-accent hover:text-accent"
            >
              Browse all services near {locationName}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-1.5 rounded-full border border-outline-variant bg-surface-container-low px-4 py-2 text-xs font-medium text-secondary transition-colors hover:border-accent hover:text-accent"
            >
              Review pricing guidance
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="/quote"
              className="inline-flex items-center gap-1.5 rounded-full border border-outline-variant bg-surface-container-low px-4 py-2 text-xs font-medium text-secondary transition-colors hover:border-accent hover:text-accent"
            >
              Prepare a project quote
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. OTHER SERVICES IN THIS LOCATION (HORIZONTAL CLUSTER) */}
      {complementaryServices.length > 0 && (
        <section className="py-20 bg-surface border-b border-outline-variant">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 space-y-2">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
                Complementary Solutions
              </span>
              <h2 className="font-sans text-3xl sm:text-4xl font-bold uppercase tracking-tight text-primary">
                Other Installations &amp; Services {prepWord} {locationName}
              </h2>
              <p className="text-sm text-on-surface-variant max-w-2xl mx-auto">
                Pair your {serviceTitle.toLowerCase()} with our full range of architectural aluminium and structural steel solutions in {locationName}.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {complementaryServices.map((comp) => {
                const compSlug = getCanonicalServiceLocationSlug(comp.id, parsed.locationSlug);
                const isCompRep = isRepairService(comp.id);
                const compLabel = isCompRep
                  ? `${comp.title} ${prepWord} ${locationName}`
                  : `${toSingularServiceTitle(comp.title)} Installation ${prepWord} ${locationName}`;

                return (
                  <Link
                    key={comp.id}
                    href={`/${compSlug}`}
                    className="group p-5 bg-surface-container-low hover:bg-surface border border-outline-variant hover:border-accent rounded-xl transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-accent">
                          {comp.category === "steel" ? "Structural Steel" : "Architectural Aluminium"}
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-secondary group-hover:text-accent transition-colors" />
                      </div>
                      <h3 className="font-sans text-sm font-bold text-primary group-hover:text-accent transition-colors line-clamp-2">
                        {compLabel}
                      </h3>
                      <p className="text-xs text-on-surface-variant line-clamp-2 leading-relaxed">
                        {comp.shortDescription}
                      </p>
                    </div>
                    <div className="pt-4 flex items-center text-[11px] font-mono font-bold uppercase tracking-wider text-secondary group-hover:text-accent">
                      <span>View Details</span>
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 6. NEARBY REGIONS */}
      {nearbyLocations.length > 0 && (
        <section className="py-14 bg-surface-container-low border-b border-outline-variant">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
                Nearby Service Areas in {location.municipality}
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {nearbyLocations.map((nearLoc) => {
                const isKat = (nearLoc.slug || nearLoc.id).toLowerCase() === "katlehong";
                const nearPrepTitle = isKat ? "in" : "Near";
                const nearSlug = getCanonicalServiceLocationSlug(parsed.serviceSlug, nearLoc.slug || nearLoc.id);
                const isRep = isRepairService(parsed.serviceSlug);
                const linkLabel = isRep
                  ? `${parsed.serviceTitle} ${nearPrepTitle} ${nearLoc.name}`
                  : `${toSingularServiceTitle(parsed.serviceTitle)} Installation ${nearPrepTitle} ${nearLoc.name}`;
                return (
                  <Link
                    key={nearLoc.slug}
                    href={`/${nearSlug}`}
                    className="bg-surface-container-low hover:bg-surface-container border border-outline-variant px-3.5 py-2 rounded-full text-xs font-medium text-secondary hover:text-accent transition-colors"
                  >
                    {linkLabel}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </div>
  );
}
