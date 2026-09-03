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
    (l) => l.municipality === location.municipality && l.slug !== location.slug,
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

function buildHero(location: LocationArea, service: Service, page: ServicePageContent, isNear: boolean) {
  const isSteel = service.category === "steel";
  const isMall = location.type === "mall";
  const preposition = (isNear || isMall) ? "Near" : "in";
  const prefix = isSteel ? "Custom Steel" : "Architectural";
  return {
    headline: `${prefix} ${service.title} ${preposition} ${location.name}`,
    subheadline: isMall
      ? `Precision ${service.title.toLowerCase()} manufactured and installed for homes, residential estates, and commercial properties throughout the ${location.name} precinct.`
      : page.hero.subheadline,
    localBadgeText: isMall
      ? `Serving Homes & Businesses in the ${location.name} Precinct · Free Consultations`
      : isSteel
      ? `${location.municipality} Service Area · SANS Physical Barrier Security & Free Quotes`
      : `${location.municipality} Service Area · Built to Applicable SANS Standards`,
  };
}

function cleanStandards(value: string | undefined): string {
  const fallback = "SANS 10400 compliant";
  if (!value) return fallback;
  return value
    .replace(/^\s*(100%\s*compliant\s+with|Fully\s+compliant\s+with|compliant\s+with)\s*/i, "")
    .replace(/\s*$/, "");
}

function buildStory(
  location: LocationArea,
  service: Service,
  page: ServicePageContent,
  suburbs: string[],
  isNear: boolean,
) {
  const rng = seededRandom(`${location.id}:${service.id}:story`);
  const [a, b, c, d] = [...suburbs, "the surrounding area", "newer developments", "neighbouring suburbs", "established estates"];
  const isSteel = service.category === "steel";
  const isMall = location.type === "mall";
  const benefit = pick(page.benefits.items, rng);

  if (isMall) {
    return {
      heading: `${isSteel ? "Heavy-Duty Steel" : "Custom Aluminium"} Solutions Near ${location.name}`,
      uniqueParagraphs: [
        `Homeowners, residential security estates, and commercial facilities throughout the precinct surrounding ${location.name} in ${location.region} (${location.municipality}) require dependable physical security and architectural installations. Properties situated near this major retail and commercial landmark benefit from our prompt on-site laser measurements, engineering precision, and full turnkey installation services.`,
        isSteel
          ? `Our custom steel ${service.title.toLowerCase()} near ${location.name} are manufactured in our Gauteng workshop using solid mild steel square bar, heavy-wall structural tubing, and industrial cold-rolled sections. Each unit receives multi-stage zinc phosphate anti-rust primer and UV-stabilized baked epoxy powder coating, with full hot-dip galvanizing available for long-term outdoor weather resistance.`
          : `Our architectural aluminium ${service.title.toLowerCase()} near ${location.name} are crafted from architectural-grade 6063-T6 alloy with a 60–80 micron Qualicoat powder-coated finish. They will never warp, rust, or corrode under Gauteng's harsh Highveld UV glare or summer hailstorms, while precision perimeter EPDM rubber seals ensure total draught and storm-water exclusion.`,
        `Whether upgrading a residential property near ${location.name} or outfitting commercial tenant facilities, ${benefit.title.toLowerCase()} is at the heart of our craftsmanship. ${benefit.description} All work is carried out in full compliance with national building and safety regulations, with heavy-duty anchors and professional handover.`,
      ],
      localClimateNotice: isSteel
        ? `Manufactured from solid mild steel and galvanized components with tamper-proof security wall fasteners.`
        : page.overview.keyFeaturesNotice,
    };
  }

  if (isSteel) {
    return {
      heading: `Heavy-Duty Steel & Physical Security Solutions Near ${location.name}`,
      uniqueParagraphs: [
        `Homeowners and commercial property managers across ${location.name}—from established properties in ${a} and ${b} to business premises in ${c} and ${d}—require dependable physical security barriers to protect perimeter gates, driveways, and window openings against break-ins.`,
        `Our ${location.name} custom steel ${service.title.toLowerCase()} are manufactured in our Gauteng workshop using solid mild steel square bar, heavy-gauge structural tubing, and industrial cold-rolled sections. Every fixture receives comprehensive anti-rust protection: multi-stage zinc phosphate primer and UV-stabilized baked epoxy powder coating, with full hot-dip galvanizing available for long-term outdoor weather resistance.`,
        `Whether installing custom-welded security gates, burglar bars, or automated driveway access near ${location.name}, ${benefit.title.toLowerCase()} is built into every job. ${benefit.description} Our certified technicians anchor directly into solid brickwork with tamper-proof shear-head security bolts, ensuring maximum structural strength and peace of mind.`,
      ],
      localClimateNotice: "Manufactured from solid mild steel and galvanized components with tamper-proof snap-off wall fasteners.",
    };
  }

  const frameMaterial = specValue(page, "Frame Material") ?? "architectural-grade aluminium alloy (6063-T6)";
  const powderCoating = specValue(page, "Powder Coating") ?? "60–80 micron Qualicoat powder-coated finish";
  const safetyStandards = cleanStandards(specValue(page, "Safety Standards") ?? specValue(page, "Safety Compliance"));

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

function buildFaqs(
  location: LocationArea,
  service: Service,
  page: ServicePageContent,
  suburbs: string[],
  isNear: boolean,
) {
  const suburbList = suburbs.slice(0, 4).join(", ");
  const serviceFaqs = page.faqs.map((f) => ({ question: f.question, answer: f.answer }));
  const isSteel = service.category === "steel";
  const isMall = location.type === "mall";

  if (isMall) {
    return [
      ...serviceFaqs.slice(0, 2),
      {
        question: `Do you install ${service.title.toLowerCase()} for residential homes and complexes near ${location.name}?`,
        answer: `Yes. Our mobile technical teams service private homes, townhouse complexes, and residential estates located near ${location.name} in ${location.region}. We bring material samples, take laser measurements, and supply zero-obligation written quotes.`,
      },
      {
        question: `Can you fabricate custom shopfronts, doors, or security gates for retail tenants at ${location.name}?`,
        answer: `Yes. We provide commercial aluminium shopfronts, frameless glass entries, heavy-duty slamlock security gates, and emergency repairs for retail stores, restaurants, and commercial offices located in and around ${location.name}.`,
      },
      {
        question: `How quickly can you measure and install near ${location.name}?`,
        answer: `We offer prompt on-site visits across the ${location.region} area. Once measurements and custom specifications are confirmed, fabrication takes 7 to 12 working days, with on-site installation taking 1 to 2 days.`,
      },
    ];
  }

  return [
    ...serviceFaqs.slice(0, 3),
    {
      question: `Do you provide ${service.title.toLowerCase()} and steel services near me in ${location.name}?`,
      answer: `Yes. Our mobile measurement and installation team operates directly in ${location.name} and neighbouring areas like ${suburbList || location.name}. We conduct laser on-site measurements, provide itemized written quotes, and consultation callout fees are credited back 100% against your invoice.`,
    },
    {
      question: `How long does ${service.title.toLowerCase()} manufacturing and installation take in ${location.name}?`,
      answer: `After final measurements are taken onsite in ${location.name}, custom fabrication in our workshop takes 7 to 12 working days. Onsite installation usually takes 1 to 2 days depending on the property size.`,
    },
    {
      question: isSteel
        ? `What anti-rust warranty and coatings are included with steel installations in ${location.name}?`
        : `Do you offer free onsite measurements and quotes across ${location.name}?`,
      answer: isSteel
        ? `All steel fixtures receive multi-stage zinc phosphate anti-rust primer and UV-stabilized epoxy powder coating or hot-dip galvanizing, engineered to withstand Johannesburg highveld rains and temperature extremes.`
        : `Yes. We offer free onsite technical measurements, advice, and zero-obligation quotes across all ${location.name} areas, including ${suburbList || location.name}.`,
    },
  ];
}

function buildSeo(
  location: LocationArea,
  service: Service,
  page: ServicePageContent,
  suburbs: string[],
  routeServiceId: string,
  isNear: boolean,
): LocationServiceSeo {
  const canonical = `${siteUrl}/locations/${location.id}/${routeServiceId}`;
  const firstSuburbs = suburbs.slice(0, 2).join(" & ");
  const isSteel = service.category === "steel";
  const isMall = location.type === "mall";

  const titleTag = isMall || isNear || isSteel
    ? `${service.title} Near ${location.name} | Local Installers & Free Quotes`
    : `${service.title} ${location.name} | Manufacturer & Local Installers`;

  const metaDescription = isMall
    ? `Looking for ${service.title.toLowerCase()} near ${location.name}? Professional custom aluminium and steel installations for homes, estates, and businesses in the ${location.name} precinct (${location.region}). Free quotes.`
    : isNear || isSteel
    ? `Looking for ${service.title.toLowerCase()} near ${location.name}? Custom-welded heavy-duty security gates, burglar bars, carports & steel works near you in ${location.name}${firstSuburbs ? ` and ${firstSuburbs}` : ""}. Free quotes & fast installation.`
    : `Premium custom ${service.title.toLowerCase()} installers in ${location.name}${firstSuburbs ? `, ${firstSuburbs}` : ""}. ${service.shortDescription} SANS certified, high security & free quotes.`;

  const keywords = [
    `${service.title.toLowerCase()} near ${location.name}`,
    `${service.title.toLowerCase()} near me`,
    isMall ? `custom ${service.title.toLowerCase()} ${location.region}` : `${service.title.toLowerCase()} ${location.name}`,
    `steel works near ${location.name}`,
    `security gates near ${location.name}`,
    `burglar bars near ${location.name}`,
    `aluminium windows near ${location.name}`,
    `sliding doors near ${location.name}`,
    isSteel ? `welders near ${location.name}` : `glaziers near ${location.name}`,
    `best ${service.title.toLowerCase()} near ${location.name}`,
    `cheap ${service.title.toLowerCase()} near ${location.name}`,
    ...page.seo.keywords.slice(0, 2),
  ];

  return {
    titleTag,
    metaDescription,
    keywords,
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
  isNear: boolean,
) {
  const storeName = isNear || location.type === "mall"
    ? `${service.title} Near ${location.name}`
    : `${service.title} ${location.name}`;
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
 * Supports both "[service]-near-[location]" and legacy "[service]-in-[location]" route patterns.
 */
export function getLocationServicePage(area: string, routeServiceId: string): LocationServiceObject | null {
  const location = gautengLocations.find((loc) => loc.slug === area);
  if (!location) return null;

  const isNear = location.type === "mall" || routeServiceId.includes("-near-");

  const service = services.find(
    (s) =>
      `${slugify(s.title)}-near-${location.slug}` === routeServiceId ||
      `${slugify(s.title)}-in-${location.slug}` === routeServiceId,
  );
  if (!service) return null;

  const page = servicePages[service.id];
  if (!page) return null;

  const suburbs = getLocalSuburbs(location);

  const hero = buildHero(location, service, page, isNear);
  const localizedStory = buildStory(location, service, page, suburbs, isNear);
  const localNAP = buildNap(location, suburbs);
  const localFaqs = buildFaqs(location, service, page, suburbs, isNear);

  const base: LocationServiceObject = {
    id: `loc-srv-${location.slug}-${service.id}`,
    serviceId: service.id,
    locationSlug: location.slug,
    fullPageUrl: `${siteUrl}/locations/${location.slug}/${routeServiceId}`,
    hero,
    localizedStory,
    localNAP,
    localProjects: [],
    localReviews: [],
    localFaqs,
    seo: buildSeo(location, service, page, suburbs, routeServiceId, isNear),
    structuredDataJsonLd: {},
  };

  base.structuredDataJsonLd = buildStructuredData(location, service, page, base, suburbs, isNear);
  return base;
}

/** Returns every valid location x service route for full sitemap generation. */
export function getAllLocationServiceRoutes(): { area: string; serviceId: string }[] {
  const routes: { area: string; serviceId: string }[] = [];
  for (const location of gautengLocations) {
    for (const service of services) {
      const slug = slugify(service.title);
      // For malls, the natural user query is always "-near-"
      if (location.type === "mall") {
        routes.push({
          area: location.slug,
          serviceId: `${slug}-near-${location.slug}`,
        });
        routes.push({
          area: location.slug,
          serviceId: `${slug}-in-${location.slug}`,
        });
      } else {
        // Cities & Suburbs
        routes.push({
          area: location.slug,
          serviceId: `${slug}-in-${location.slug}`,
        });
        if (service.category === "steel") {
          routes.push({
            area: location.slug,
            serviceId: `${slug}-near-${location.slug}`,
          });
        }
      }
    }
  }
  return routes;
}

/** Returns priority location x service routes for build-time pre-rendering. */
export function getPrerenderLocationServiceRoutes(): { area: string; serviceId: string }[] {
  // Prerender primary cities, flagship malls, and high-volume hubs
  const priorityLocations = gautengLocations.filter(
    (loc) =>
      loc.type === "city" ||
      (loc.type === "mall" && [
        "sandton-city", "mall-of-africa", "menlyn-park", "eastgate", "fourways-mall",
        "cresta", "clearwater", "the-glen", "east-rand-mall", "centurion-mall",
        "brooklyn-mall", "woodlands-boulevard", "cradlestone", "rosebank-mall",
        "hyde-park", "greenstone", "sam-ntuli-mall", "chris-hani-crossing",
        "maponya-mall", "festival-mall", "carnival", "westgate", "southgate",
        "wonderpark", "kolonnade", "bedford-centre", "nicolway"
      ].some(k => loc.slug.includes(k))) ||
      ["sandton", "fourways", "midrand", "centurion", "bedfordview", "roodepoort", "kempton-park", "alberton", "benoni", "boksburg", "soweto", "menlyn", "katlehong"].some(prefix => loc.id.includes(prefix))
  ).slice(0, 60);

  const routes: { area: string; serviceId: string }[] = [];
  for (const location of priorityLocations) {
    for (const service of services) {
      const slug = slugify(service.title);
      if (location.type === "mall") {
        routes.push({
          area: location.id,
          serviceId: `${slug}-near-${location.id}`,
        });
      } else {
        routes.push({
          area: location.id,
          serviceId: `${slug}-in-${location.id}`,
        });
        if (service.category === "steel") {
          routes.push({
            area: location.id,
            serviceId: `${slug}-near-${location.id}`,
          });
        }
      }
    }
  }
  return routes;
}

