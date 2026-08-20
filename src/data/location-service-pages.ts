import { gautengLocations, type LocationArea } from "@/data/locations";
import { services, type Service } from "@/data/services";
import { servicePages, type ServicePageContent } from "@/data/service-pages";
import { businessContact, siteUrl } from "@/lib/site";

export interface LocationServiceSeo {
  titleTag: string;
  metaDescription: string;
  keywords: string[];
  canonicalUrl: string;
  openGraphImage: string;
}

export interface LocationServiceHero {
  headline: string;
  subheadline: string;
  localBadgeText: string;
}

export interface LocationServiceStory {
  heading: string;
  uniqueParagraphs: string[];
  localClimateNotice: string;
}

export interface LocationServiceNap {
  branchOrServiceArea: string;
  phone: string;
  email: string;
  addressString: string;
  serviceRadiusKm: number;
  servicedSuburbs: string[];
}

export interface LocationServiceProject {
  title: string;
  neighborhood: string;
  completionDate: string;
  challengeDescription: string;
  solutionProvided: string;
  imageUrls: string[];
}

export interface LocationServiceReview {
  authorName: string;
  suburb: string;
  rating: number;
  date: string;
  comment: string;
}

export interface LocationServiceFaq {
  question: string;
  answer: string;
}

export interface LocationServiceObject {
  id: string;
  serviceId: string;
  locationSlug: string;
  fullPageUrl: string;
  hero: LocationServiceHero;
  localizedStory: LocationServiceStory;
  localNAP: LocationServiceNap;
  localProjects: LocationServiceProject[];
  localReviews: LocationServiceReview[];
  localFaqs: LocationServiceFaq[];
  seo: LocationServiceSeo;
  structuredDataJsonLd: Record<string, unknown>;
}

// ---------------------------------------------------------------------------
// Small deterministic helpers
// ---------------------------------------------------------------------------

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
}

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

function pick<T>(arr: T[], rng: () => number): T {
  return arr[Math.floor(rng() * arr.length)];
}

function pickMany<T>(arr: T[], count: number, rng: () => number): T[] {
  const copy = [...arr];
  const out: T[] = [];
  while (out.length < count && copy.length > 0) {
    out.push(copy.splice(Math.floor(rng() * copy.length), 1)[0]);
  }
  return out;
}

// ---------------------------------------------------------------------------
// Reference data used for localization
// ---------------------------------------------------------------------------

function specValue(page: ServicePageContent, label: string): string | undefined {
  return page.specifications.items.find((s) => s.label === label)?.value;
}

// ---------------------------------------------------------------------------
// Location context builders
// ---------------------------------------------------------------------------

function getLocalSuburbs(location: LocationArea): string[] {
  const sameMunicipality = gautengLocations.filter(
    (l) => l.municipality === location.municipality && l.id !== location.id,
  );
  if (sameMunicipality.length === 0) return [];
  const rng = seededRandom(`${location.id}:suburbs`);
  const picked = pickMany(sameMunicipality, Math.min(sameMunicipality.length, 9), rng);
  return picked.map((l) => l.name);
}

// ---------------------------------------------------------------------------
// Retained featured content. Generated routes use the same verified business details below.
// ---------------------------------------------------------------------------

export const katlehongAluminiumWindows: LocationServiceObject = {
  id: "loc-srv-katlehong-aluminium-windows",
  serviceId: "windows",
  locationSlug: "katlehong",
  fullPageUrl: `${siteUrl}/locations/katlehong/aluminium-windows-in-katlehong`,

  hero: {
    headline: "Architectural Aluminium Windows in Katlehong",
    subheadline: "Custom-manufactured casement, sliding, and fixed aluminium window systems engineered for long-term thermal comfort, strict home security, and severe Highveld weather resistance.",
    localBadgeText: "Ekurhuleni Certified & SANS 10400-XA Compliant Glazing",
  },

  localizedStory: {
    heading: "Tailored for Katlehong's Highveld Climate, Architectural Upgrades & Security Needs",
    uniqueParagraphs: [
      "Properties across Katlehong—from established family homes in Spruitview and Siluma View to modern extensions in Ramokonopi, Palm Ridge, and Zonkizizwe—face extreme Highveld weather variance. Freezing winter night drops, intense summer afternoon UV glare, and severe hailstorms place heavy stress on legacy fenestration.",
      "Our Katlehong aluminium window series utilizes extruded architectural-grade 6063-T6 alloy frames protected by a 60–80 micron Qualicoat powder-coated finish. This guarantees the frames will never warp, rust, swell, or peel under intense sunlight or driving rain. Fitted with perimeter EPDM rubber gaskets and double wool-pile weatherstripping, our windows block cold winter drafts, prevent rain ingress, and cut outside traffic noise down significantly.",
      "Whether retrofitting outdated steel casements to eliminate ongoing painting or installing double-glazed Low-E window walls in a new multi-story build, our systems incorporate heavy-duty stainless steel friction stays, anti-tamper corner cleats, and multi-point security locks to protect your home year-round.",
    ],
    localClimateNotice: "All Katlehong installations come standard with grade 304 stainless steel friction hinges, safety-laminated glass, and multi-point key-operated handles.",
  },

  localNAP: {
    branchOrServiceArea: "Ekurhuleni Regional Depot & Operations Hub",
    phone: "+27 11 555 0198",
    email: businessContact.email,
    addressString: businessContact.fullAddress,
    serviceRadiusKm: 35,
    servicedSuburbs: [
      "Spruitview", "Siluma View", "Ramokonopi", "Moleleki",
      "Palm Ridge", "Zonkizizwe", "Mavimbela", "Tsietsi", "Vosloorus",
    ],
  },

  localProjects: [],

  localReviews: [],

  localFaqs: [
    {
      question: "Can you remove old steel or wooden window frames in Katlehong without damaging my surrounding plaster and brickwork?",
      answer: "Yes. Our installation technicians specialize in non-destructive frame removal. We carefully extract legacy steel or timber frames, clean and square the brick reveal, anchor the new aluminium sub-frame, and seal the perimeter with marine-grade structural silicone.",
    },
    {
      question: "Do your aluminium windows comply with South African SANS 10400-XA energy efficiency standards?",
      answer: "Yes. All our window profiles and glass configurations comply fully with SANS 10400-XA and SANS 10137 building regulations. Upon project completion, we issue an official Fenestration Safety and Energy Compliance Certificate.",
    },
    {
      question: "What maintenance is required to prevent aluminium window frames from deteriorating?",
      answer: "Our powder-coated aluminium frames require virtually no ongoing maintenance. Washing the frames with mild soapy water twice a year to remove dust build-up is all that is required to maintain the finish and color warranty.",
    },
    {
      question: "What safety glass options are included with your Katlehong window installations?",
      answer: "By default, all floor-level or high-impact window openings are fitted with 6.38mm laminated safety glass. We also offer 24mm double-glazed sealed units and solar-control Low-E glass for enhanced thermal and sound insulation.",
    },
    {
      question: "How long does custom aluminium window manufacturing and installation take in Katlehong?",
      answer: "After final measurements are taken onsite, custom fabrication in our factory takes 7 to 12 working days. Onsite removal of old frames and installation of the new aluminium windows usually takes 1 to 2 days depending on the house size.",
    },
    {
      question: "Do you offer free onsite measurements and quotes across Katlehong suburbs?",
      answer: "Yes. We offer free onsite technical measurements, advice, and zero-obligation quotes across all Katlehong areas, including Spruitview, Siluma View, Palm Ridge, Zonkizizwe, and Ramokonopi.",
    },
  ],

  seo: {
    titleTag: "Aluminium Windows Katlehong | Manufacturer & Local Installers",
    metaDescription: "Premium custom aluminium window installers in Katlehong, Spruitview & Siluma View. Top-hung, side-hung & sliding frames. SANS 10400 certified, high security & free quotes.",
    keywords: [
      "aluminium windows Katlehong",
      "aluminium window installers Spruitview",
      "custom window frames Palm Ridge",
      "double glazed windows Katlehong",
      "window replacement Siluma View",
      "SANS compliant windows Ekurhuleni",
      "burglar proof aluminium windows Katlehong",
      "cheap aluminium windows Katlehong",
      "aluminium window manufacturers Roodekop",
    ],
    canonicalUrl: `${siteUrl}/locations/katlehong/aluminium-windows-in-katlehong`,
    openGraphImage: `${siteUrl}/images/window_detail.png`,
  },

  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HomeGoodsStore",
        "@id": `${siteUrl}/locations/katlehong/aluminium-windows-in-katlehong#store`,
        name: "Aluminium Windows Katlehong",
        description: "Architectural aluminium window manufacturer and installer serving Katlehong, Spruitview, Siluma View, and surrounding Ekurhuleni areas.",
        telephone: "+27 11 555 0198",
        email: businessContact.email,
        url: `${siteUrl}/locations/katlehong/aluminium-windows-in-katlehong`,
        address: {
          "@type": "PostalAddress",
          streetAddress: businessContact.streetAddress,
          addressLocality: `${businessContact.addressLocality}, ${businessContact.addressCity}`,
          addressRegion: "Gauteng",
          addressCountry: "ZA",
        },
        areaServed: [
          "Katlehong", "Spruitview", "Siluma View", "Ramokonopi",
          "Palm Ridge", "Zonkizizwe", "Moleleki", "Mavimbela", "Tsietsi",
        ],
        priceRange: "$$",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "07:30",
            closes: "17:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "08:00",
            closes: "13:00",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/locations/katlehong/aluminium-windows-in-katlehong#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "Can you remove old steel or wooden window frames in Katlehong without damaging my surrounding plaster and brickwork?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Our installation technicians specialize in non-destructive frame removal. We carefully extract legacy steel or timber frames, clean and square the brick reveal, anchor the new aluminium sub-frame, and seal the perimeter with marine-grade structural silicone.",
            },
          },
          {
            "@type": "Question",
            name: "Do your aluminium windows comply with South African SANS 10400-XA energy efficiency standards?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. All our window profiles and glass configurations comply fully with SANS 10400-XA and SANS 10137 building regulations. Upon project completion, we issue an official Fenestration Safety and Energy Compliance Certificate.",
            },
          },
          {
            "@type": "Question",
            name: "What maintenance is required to prevent aluminium window frames from deteriorating?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Our powder-coated aluminium frames require virtually no ongoing maintenance. Washing the frames with mild soapy water twice a year to remove dust build-up is all that is required to maintain the finish and color warranty.",
            },
          },
          {
            "@type": "Question",
            name: "What safety glass options are included with your Katlehong window installations?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "By default, all floor-level or high-impact window openings are fitted with 6.38mm laminated safety glass. We also offer 24mm double-glazed sealed units and solar-control Low-E glass for enhanced thermal and sound insulation.",
            },
          },
          {
            "@type": "Question",
            name: "How long does custom aluminium window manufacturing and installation take in Katlehong?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "After final measurements are taken onsite, custom fabrication in our factory takes 7 to 12 working days. Onsite removal of old frames and installation of the new aluminium windows usually takes 1 to 2 days depending on the house size.",
            },
          },
          {
            "@type": "Question",
            name: "Do you offer free onsite measurements and quotes across Katlehong suburbs?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We offer free onsite technical measurements, advice, and zero-obligation quotes across all Katlehong areas, including Spruitview, Siluma View, Palm Ridge, Zonkizizwe, and Ramokonopi.",
            },
          },
        ],
      },
    ],
  },
};

// ---------------------------------------------------------------------------
// Composed (generated) content
// ---------------------------------------------------------------------------

function buildHero(location: LocationArea, service: Service, page: ServicePageContent) {
  return {
    headline: `Architectural ${service.title} in ${location.name}`,
    subheadline: page.hero.subheadline,
    localBadgeText: `${location.municipality} Service Area · Built to Applicable SANS Standards`,
  };
}

function cleanStandards(value: string | undefined): string {
  const fallback = "SANS 10400 compliant";
  if (!value) return fallback;
  return value
    .replace(/^\s*(100%\s*compliant\s+with|Fully\s+compliant\s+with|compliant\s+with)\s*/i, "")
    .replace(/\s*$/, "");
}

function buildStory(location: LocationArea, service: Service, page: ServicePageContent, suburbs: string[]) {
  const rng = seededRandom(`${location.id}:story`);
  const [a, b, c, d] = [...suburbs, "the surrounding area", "newer developments", "neighbouring suburbs", "established estates"];
  const frameMaterial = specValue(page, "Frame Material") ?? "architectural-grade aluminium alloy (6063-T6)";
  const powderCoating = specValue(page, "Powder Coating") ?? "60–80 micron Qualicoat powder-coated finish";
  const safetyStandards = cleanStandards(specValue(page, "Safety Standards") ?? specValue(page, "Safety Compliance"));
  const benefit = pick(page.benefits.items, rng);

  return {
    heading: `Tailored for ${location.name}'s Highveld Climate & Building Requirements`,
    uniqueParagraphs: [
      `Properties across ${location.name}—from established family homes in ${a} and ${b} to ${c} and ${d}—face Gauteng's demanding Highveld climate. Freezing winter night drops, intense summer UV glare, and severe hailstorms place heavy stress on legacy fenestration and building hardware.`,
      `Our ${location.name} ${service.title.toLowerCase()} are manufactured from ${frameMaterial}, protected by a ${powderCoating}. This guarantees the frames will never warp, rust, swell, or peel under intense sunlight or driving rain, while precision weather seals keep winter draughts and storm water out.`,
      `Whether you are renovating a home in ${location.name} or building a new commercial development, ${benefit.title.toLowerCase()} is at the heart of every installation. ${benefit.description} All work is carried out in full compliance with national building standards (${safetyStandards}), from the first on-site measurement to final sign-off, including the removal of old frames.`,
    ],
    localClimateNotice: page.overview.keyFeaturesNotice,
  };
}

function buildNap(location: LocationArea, suburbs: string[]): LocationServiceNap {
  return {
    branchOrServiceArea: "Katlehong Workshop & Gauteng Service Area",
    phone: businessContact.phone,
    email: businessContact.email,
    addressString: businessContact.fullAddress,
    serviceRadiusKm: 35,
    servicedSuburbs: suburbs.length ? suburbs : [location.name],
  };
}

function buildFaqs(location: LocationArea, service: Service, page: ServicePageContent, suburbs: string[]) {
  const suburbList = suburbs.slice(0, 4).join(", ");
  const serviceFaqs = page.faqs.map((f) => ({ question: f.question, answer: f.answer }));

  return [
    ...serviceFaqs.slice(0, 4),
    {
      question: `How long does ${service.title.toLowerCase()} manufacturing and installation take in ${location.name}?`,
      answer: `After final measurements are taken onsite, custom fabrication in our factory takes 7 to 12 working days. Onsite removal of old frames and installation of the new ${service.title.toLowerCase()} usually takes 1 to 2 days depending on the size of the property.`,
    },
    {
      question: `Do you offer free onsite measurements and quotes across ${location.name}?`,
      answer: `Yes. We offer free onsite technical measurements, advice, and zero-obligation quotes across all ${location.name} areas, including ${suburbList || location.name}.`,
    },
  ];
}

function buildSeo(
  location: LocationArea,
  service: Service,
  page: ServicePageContent,
  suburbs: string[],
  routeServiceId: string,
): LocationServiceSeo {
  const canonical = `${siteUrl}/locations/${location.id}/${routeServiceId}`;
  const firstSuburbs = suburbs.slice(0, 2).join(" & ");

  return {
    titleTag: `${service.title} ${location.name} | Manufacturer & Local Installers`,
    metaDescription: `Premium custom ${service.title.toLowerCase()} installers in ${location.name}${firstSuburbs ? `, ${firstSuburbs}` : ""}. ${service.shortDescription} SANS certified, high security & free quotes.`,
    keywords: [
      `${service.title.toLowerCase()} ${location.name}`,
      `${service.title.toLowerCase()} installers ${firstSuburbs || location.name}`,
      `custom ${service.title.toLowerCase()} ${location.municipality}`,
      `${service.title.toLowerCase()} manufacturers Gauteng`,
      ...page.seo.keywords.slice(0, 3),
      `SANS compliant ${service.title.toLowerCase()} ${location.name}`,
      `cheap ${service.title.toLowerCase()} ${location.name}`,
    ],
    canonicalUrl: canonical,
    openGraphImage: `${siteUrl}${service.imagePath}`,
  };
}

function buildStructuredData(
  location: LocationArea,
  service: Service,
  page: ServicePageContent,
  object: LocationServiceObject,
  suburbs: string[],
) {
  const storeName = `${service.title} ${location.name}`;
  const areaServed = [location.name, ...suburbs];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${object.fullPageUrl}#store`,
        name: storeName,
        description: `Manufacturer and installer of ${service.title.toLowerCase()} serving ${location.name}, ${areaServed.slice(1, 4).join(", ")}, and surrounding ${location.municipality} areas.`,
        telephone: object.localNAP.phone,
        email: object.localNAP.email,
        url: object.fullPageUrl,
        address: {
          "@type": "PostalAddress",
          streetAddress: businessContact.streetAddress,
          addressLocality: `${businessContact.addressLocality}, ${businessContact.addressCity}`,
          addressRegion: businessContact.addressRegion,
          addressCountry: businessContact.addressCountry,
        },
        areaServed,
        priceRange: "$$",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "07:30",
            closes: "17:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "08:00",
            closes: "13:00",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${object.fullPageUrl}#faq`,
        mainEntity: object.localFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Builds the full page content for a single location x service combination.
 * Content is composed deterministically from verified service and location data.
 */
export function getLocationServicePage(area: string, routeServiceId: string): LocationServiceObject | null {
  const location = gautengLocations.find((loc) => loc.id === area);
  if (!location) return null;

  const service = services.find(
    (s) => `${slugify(s.title)}-in-${location.id}` === routeServiceId,
  );
  if (!service) return null;

  const page = servicePages[service.id];
  if (!page) return null;

  const suburbs = getLocalSuburbs(location);

  const hero = buildHero(location, service, page);
  const localizedStory = buildStory(location, service, page, suburbs);
  const localNAP = buildNap(location, suburbs);
  const localFaqs = buildFaqs(location, service, page, suburbs);

  const base: LocationServiceObject = {
    id: `loc-srv-${location.id}-${service.id}`,
    serviceId: service.id,
    locationSlug: location.id,
    fullPageUrl: `${siteUrl}/locations/${location.id}/${routeServiceId}`,
    hero,
    localizedStory,
    localNAP,
    localProjects: [],
    localReviews: [],
    localFaqs,
    seo: buildSeo(location, service, page, suburbs, routeServiceId),
    structuredDataJsonLd: {},
  };

  base.structuredDataJsonLd = buildStructuredData(location, service, page, base, suburbs);
  return base;
}

/** Returns every valid location x service route for full sitemap generation (19,476 routes). */
export function getAllLocationServiceRoutes(): { area: string; serviceId: string }[] {
  const routes: { area: string; serviceId: string }[] = [];
  for (const location of gautengLocations) {
    for (const service of services) {
      routes.push({
        area: location.id,
        serviceId: `${slugify(service.title)}-in-${location.id}`,
      });
    }
  }
  return routes;
}

/** Returns priority location x service routes for build-time pre-rendering (~1,800 routes). */
export function getPrerenderLocationServiceRoutes(): { area: string; serviceId: string }[] {
  // Prerender primary cities, high-volume suburbs, and flagship malls at build-time
  const priorityLocations = gautengLocations.filter(
    (loc) => loc.type === "city" || loc.type === "mall" || ["sandton", "fourways", "midrand", "centurion", "bedfordview", "roodepoort", "kempton-park", "alberton", "benoni", "boksburg", "soweto", "menlyn"].some(prefix => loc.id.includes(prefix))
  ).slice(0, 50);

  const routes: { area: string; serviceId: string }[] = [];
  for (const location of priorityLocations) {
    for (const service of services) {
      routes.push({
        area: location.id,
        serviceId: `${slugify(service.title)}-in-${location.id}`,
      });
    }
  }
  return routes;
}

