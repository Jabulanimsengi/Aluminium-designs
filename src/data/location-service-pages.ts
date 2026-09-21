import { gautengLocations, type LocationArea } from "@/data/locations";
import { services, type Service } from "@/data/services";
import { servicePages, type ServicePageContent } from "@/data/service-pages";
import { businessContact, siteUrl } from "@/lib/site";
import {
  getCanonicalServiceLocationSlug,
  isRepairService,
  parseServiceLocationSlug,
  toSingularServiceTitle,
} from "@/lib/serviceLocationParser";
import { getServiceLocationSeoEligibility } from "@/lib/seoEligibility";

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
  if (location.nearbyNames?.length) {
    return location.nearbyNames.slice(0, 9);
  }

  const sameRegion = gautengLocations.filter(
    (candidate) =>
      candidate.slug !== location.slug &&
      candidate.type !== "mall" &&
      candidate.region === location.region,
  );
  const sameMunicipality = gautengLocations.filter(
    (candidate) =>
      candidate.slug !== location.slug &&
      candidate.type !== "mall" &&
      candidate.municipality === location.municipality,
  );
  const candidates = sameRegion.length > 0 ? sameRegion : sameMunicipality;
  if (candidates.length === 0) return [location.region];
  const rng = seededRandom(`${location.id}:suburbs`);
  const picked = pickMany(candidates, Math.min(candidates.length, 9), rng);
  return picked.map((l) => l.name);
}

function getServiceUseCase(service: Service): string {
  const slug = service.id;

  if (slug.includes("repair") || slug === "glass-replacement") {
    return "fault diagnosis, safe removal, replacement parts, and restoring reliable day-to-day operation";
  }
  if (slug.includes("shopfront") || slug.includes("office-glass")) {
    return "retail and office fit-outs, controlled access, clear sightlines, and durable high-traffic entrances";
  }
  if (slug.includes("gate") || slug.includes("burglar") || slug.includes("trellis")) {
    return "layered property security, controlled access, ventilation, and practical everyday use";
  }
  if (slug.includes("carport") || slug.includes("pergola")) {
    return "weather protection, outdoor living, vehicle cover, drainage, and a finish suited to the existing building";
  }
  if (slug.includes("gutter")) {
    return "roofline drainage, correct falls, controlled downpipe discharge, and protection from summer storm water";
  }
  if (slug.includes("balustrade") || slug.includes("staircase")) {
    return "safe circulation, edge protection, accurate site dimensions, and a finish coordinated with the property";
  }
  if (slug.includes("steam")) {
    return "moisture-resistant detailing, ventilation, safe glazing, and a layout sized for the available room";
  }
  return "opening size, security, ventilation, natural light, weather sealing, and the way the space is used";
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
    headline: "Aluminium Windows Installation in Katlehong",
    subheadline: "Custom-manufactured casement, sliding, and fixed aluminium window systems engineered for long-term thermal comfort, strict home security, and severe Highveld weather resistance.",
    localBadgeText: "Ekurhuleni Certified & SANS 10400-XA Compliant Glazing",
  },

  localizedStory: {
    heading: "Built for Katlehong Homes, Weather & Family Security",
    uniqueParagraphs: [
      "Properties across Katlehong—from established family homes in Spruitview and Siluma View to modern extensions in Ramokonopi, Palm Ridge, and Zonkizizwe—face extreme Highveld weather variance. Freezing winter night drops, intense summer afternoon UV glare, and severe hailstorms place heavy stress on older timber and steel window frames.",
      "Our Katlehong aluminium window series utilizes extruded heavy-duty 6063-T6 alloy frames protected by a 60–80 micron Qualicoat powder-coated finish. This guarantees the frames will never warp, rust, swell, or peel under intense sunlight or driving rain. Fitted with perimeter EPDM rubber gaskets and double wool-pile weatherstripping, our windows block cold winter drafts, prevent rain ingress, and cut outside traffic noise down significantly.",
      "Whether retrofitting outdated steel casements to eliminate ongoing painting or installing double-glazed Low-E window walls in a new multi-story build, our systems incorporate heavy-duty stainless steel friction stays, anti-tamper corner cleats, and multi-point security locks to protect your home year-round.",
    ],
    localClimateNotice: "All Katlehong installations come standard with grade 304 stainless steel friction hinges, safety-laminated glass, and multi-point key-operated handles.",
  },

  localNAP: {
    branchOrServiceArea: "Ekurhuleni Regional Depot & Operations Hub",
    phone: businessContact.phone,
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
      answer: "Yes. All our window profiles and glass configurations comply fully with SANS 10400-XA and SANS 10137 building regulations. Upon project completion, we issue an official Glazing Safety and Energy Compliance Certificate (SANS 10400).",
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
        description: "Custom aluminium window manufacturer and installer serving Katlehong, Spruitview, Siluma View, and surrounding Ekurhuleni areas.",
        telephone: businessContact.phone,
        email: businessContact.email,
        url: `${siteUrl}/locations/katlehong/aluminium-windows-in-katlehong`,
        address: {
          "@type": "PostalAddress",
          streetAddress: businessContact.streetAddress,
          addressLocality: businessContact.addressCity,
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
              text: "Yes. All our window profiles and glass configurations comply fully with SANS 10400-XA and SANS 10137 building regulations. Upon project completion, we issue an official Glazing Safety and Energy Compliance Certificate (SANS 10400).",
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

function buildHero(
  location: LocationArea,
  service: Service,
  page: ServicePageContent,
  isNear: boolean,
  isInstallation: boolean = false,
  customHeadline?: string,
) {
  const isSteel = service.category === "steel";
  const isMall = location.type === "mall";

  // URL-to-H1 matching formula:
  // - If customHeadline is supplied, use directly.
  // - If route includes installation: [Service] Installation in/Near [Location]
  // - If route includes near or mall: [Service] Near [Location]
  // - Default (e.g. aluminium-windows-in-centurion): [Service] in [Location]
  let headline = customHeadline;
  if (!headline) {
    const prep = isNear ? "Near" : "in";
    if (isInstallation) {
      const displayTitle = toSingularServiceTitle(service.title);
      headline = `${displayTitle} Installation ${prep} ${location.name}`;
    } else if (isNear) {
      headline = `${service.title} Near ${location.name}`;
    } else {
      headline = `${service.title} in ${location.name}`;
    }
  }

  return {
    headline,
    subheadline: isMall
      ? `Precision ${service.title.toLowerCase()} manufactured and installed for homes, residential estates, and commercial properties throughout the ${location.name} precinct.`
      : page.hero.subheadline,
    localBadgeText: isMall
      ? `Serving Homes & Businesses in the ${location.name} Precinct · Free Consultations`
      : isSteel
      ? `${location.municipality} Service Area · Site-Specific Security Specifications`
      : `${location.municipality} Service Area · Specified for the Application`,
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
) {
  const rng = seededRandom(`${location.id}:${service.id}:story`);
  const [a, b] = [...suburbs, "the surrounding area", "neighbouring suburbs"];
  const isSteel = service.category === "steel";
  const isMall = location.type === "mall";
  const isGlazingSystem = /(window|door|glass|shopfront|partition)/.test(service.id);
  const benefit = pick(page.benefits.items, rng);
  const useCase = getServiceUseCase(service);
  const localContext = location.context || `${location.name} in ${location.region}`;
  const serviceDetail = page.overview.paragraphs[0] || service.longDescription;

  if (isMall) {
    return {
      heading: `${isSteel ? "Heavy-Duty Steel" : "Custom Aluminium"} Solutions Near ${location.name}`,
      uniqueParagraphs: [
        `${location.name} is used here as a clear service-area landmark for the surrounding ${location.region} precinct in ${location.municipality}. ${localContext}. We assess each enquiry by the actual property address and intended application; this page does not imply that we operate a branch inside, or are affiliated with, the centre.`,
        isSteel
          ? `For ${service.title.toLowerCase()}, the site assessment focuses on ${useCase}. Units are made to measured openings in our Gauteng workshop, with the steel section, anchoring method, corrosion protection, and hardware specified for the installation rather than selected as an off-the-shelf fit.`
          : `For ${service.title.toLowerCase()}, the site assessment focuses on ${useCase}. ${serviceDetail} Dimensions, finishes, interfaces, and installation access are confirmed for the actual building before manufacture or ordering.`,
        `Homes, offices, and retail premises near ${location.name} have different access and installation constraints. Before quoting, we confirm the address, opening dimensions, access windows, removal requirements, and whether work must be coordinated with an estate, landlord, or centre-management process. ${benefit.title} remains a key design consideration: ${benefit.description}`,
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
        `${location.name} forms part of ${location.region} in ${location.municipality}. ${localContext}. For ${service.title.toLowerCase()}, we consider ${useCase}, along with the opening, wall construction, access, and daily operating pattern.`,
        `Our ${location.name} custom steel ${service.title.toLowerCase()} are manufactured in our Gauteng workshop using solid mild steel square bar, heavy-gauge structural tubing, and industrial cold-rolled sections. Every fixture receives comprehensive anti-rust protection: multi-stage zinc phosphate primer and UV-stabilized baked epoxy powder coating, with full hot-dip galvanizing available for long-term outdoor weather resistance.`,
        `For work around ${location.name}, ${benefit.title.toLowerCase()} is considered alongside access, fixing points, corrosion exposure, and safe operation. ${benefit.description} The final fabrication and anchoring method is confirmed against the measured site conditions.`,
      ],
      localClimateNotice: "Manufactured from solid mild steel and galvanized components with tamper-proof snap-off wall fasteners.",
    };
  }

  const frameMaterial = specValue(page, "Frame Material") ?? "durable 6063-T6 aluminium alloy";
  const powderCoating = specValue(page, "Powder Coating") ?? "60–80 micron Qualicoat powder-coated finish";
  const safetyStandards = cleanStandards(specValue(page, "Safety Standards") ?? specValue(page, "Safety Compliance"));

  return {
    heading: `Tailored for ${location.name}'s Highveld Climate & Building Requirements`,
    uniqueParagraphs: [
      `${location.name} forms part of ${location.region} in ${location.municipality}. ${localContext}. Our survey for ${service.title.toLowerCase()} considers ${useCase}, rather than assuming that every property in the area needs the same configuration.`,
      isGlazingSystem
        ? `Our ${location.name} ${service.title.toLowerCase()} are specified around ${frameMaterial} and ${powderCoating}. Profile depth, glass or infill, hardware, drainage, and perimeter sealing are matched to the measured opening and exposure.`
        : `${serviceDetail} For a ${location.name} project, dimensions, materials, finishes, interfaces with the existing structure, drainage where relevant, and installation access are confirmed during the survey.`,
      `Whether the project is in ${a}, ${b}, or elsewhere around ${location.name}, ${benefit.title.toLowerCase()} is considered alongside access, removal of existing work, finishing, and handover. ${benefit.description} Applicable work is specified to relevant national building standards (${safetyStandards}) from measurement through final sign-off.`,
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
  suburbs: string[],
  targetPhrase?: string,
) {
  const suburbList = suburbs.slice(0, 6).join(", ");
  const useCase = getServiceUseCase(service);
  const repair = isRepairService(service.id);
  const displayTitle = repair ? service.title : toSingularServiceTitle(service.title);
  const resolvedTargetPhrase = targetPhrase || (repair
    ? `${displayTitle} near ${location.name}`
    : `${displayTitle} installation near ${location.name}`);
  const targetPhraseLower = resolvedTargetPhrase.toLowerCase();

  return [
    {
      question: `Do you provide ${targetPhraseLower}?`,
      answer: `Yes. Our mobile team serves project addresses near ${location.name}${suburbList ? `, including ${suburbList}` : ""}. Share the exact address when enquiring so we can confirm coverage, access, and appointment availability.`,
    },
    {
      question: `How much does ${targetPhraseLower} cost?`,
      answer: `The quote is based on ${useCase}, opening dimensions, materials, hardware, finish, access, removal work, quantity, and installation conditions. Photographs and approximate measurements help with an initial estimate, while final dimensions may require an on-site visit.`,
    },
    {
      question: `What information is needed to quote ${targetPhraseLower}?`,
      answer: `Send the project address, photographs, approximate dimensions, the required product or repair, preferred finish, and any estate or site-access requirements. We use those details to prepare the initial scope and confirm whether an on-site measurement is required.`,
    },
    {
      question: `How long does ${targetPhraseLower} take?`,
      answer: `Timing depends on the confirmed scope, material availability, workshop schedule, quantity, and site readiness. Your written quote should state whether fabrication is required and separate the expected lead time from the on-site work duration.`,
    },
    {
      question: repair
        ? `How do you assess ${targetPhraseLower} before recommending replacement?`
        : `What happens during ${targetPhraseLower}?`,
      answer: repair
        ? `We assess the frame or structure, moving parts, glazing, seals, alignment, and the availability of compatible replacement components. We recommend replacement only when a repair would be unsafe, unreliable, or poor value.`
        : `We confirm the opening, specification, finish, hardware, access, and any removal work before manufacture. During installation, the team fits and aligns the product, completes the agreed sealing or fixing work, tests its operation, and clears the work area.`,
    },
    {
      question: `Which suburbs and townships do you cover for ${service.title.toLowerCase()} near ${location.name}?`,
      answer: `We cover the ${location.name} service hub and its listed surrounding areas${suburbList ? `, including ${suburbList}` : ""}. Confirm the exact project address when requesting a quote so travel and scheduling can be checked.`,
    },
    {
      question: `Is ${targetPhraseLower} available for homes, estates, and commercial properties?`,
      answer: `Yes. We assess houses, residential estates, complexes, shops, offices, and other commercial properties. Tell us about landlord approvals, working-hour restrictions, parking, lifting, security induction, or access constraints before the visit is scheduled.`,
    },
    {
      question: `What warranty and aftercare apply to ${targetPhraseLower}?`,
      answer: `Warranty coverage depends on the selected product, components, finish, and scope of work. The written quote should identify the applicable coverage, exclusions, maintenance requirements, and the process for reporting an installation or component issue.`,
    },
  ];
}

function buildSeo(
  location: LocationArea,
  service: Service,
  page: ServicePageContent,
  _suburbs: string[],
  routeServiceId: string,
  isInstallation: boolean = false,
  targetPhrase?: string,
): LocationServiceSeo {
  const canonical = `${siteUrl}/${routeServiceId}`;
  const displayTitle = isInstallation ? toSingularServiceTitle(service.title) : service.title;
  const titleTag = targetPhrase || (isInstallation
    ? `${displayTitle} Installation Near ${location.name}`
    : `${displayTitle} Near ${location.name}`);
  const rawMetaDescription = `${titleTag}: custom measurement, written specifications, professional ${isInstallation ? "installation" : "service"}, and clear quotes across ${location.municipality}.`;
  const metaDescription = rawMetaDescription.length <= 160
    ? rawMetaDescription
    : `${rawMetaDescription.slice(0, 156).replace(/\s+\S*$/, "").replace(/[.,;:]$/, "")}…`;

  const singularService = toSingularServiceTitle(service.title).toLowerCase();

  const keywords = [
    titleTag.toLowerCase(),
    `${service.title.toLowerCase()} near ${location.name}`,
    `${service.title.toLowerCase()} near me`,
    isInstallation
      ? `${singularService} installers near ${location.name}`
      : `${service.title.toLowerCase()} services near ${location.name}`,
    `${service.title.toLowerCase()} cost near ${location.name}`,
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
          addressLocality: businessContact.addressCity,
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

const aliasServiceMap: Record<string, string> = {
  "aluminium-door": "aluminium-sliding-doors",
  "aluminium-doors": "aluminium-sliding-doors",
  "aluminium-window": "aluminium-windows",
  "aluminium-windows": "aluminium-windows",
  "steam-room": "custom-steam-rooms",
  "steam-rooms": "custom-steam-rooms",
  "sauna": "custom-steam-rooms",
  "saunas": "custom-steam-rooms",
  "custom-steam-room": "custom-steam-rooms",
  "custom-steam-rooms": "custom-steam-rooms",
  "sliding-door": "aluminium-sliding-doors",
  "sliding-doors": "aluminium-sliding-doors",
  "stacking-door": "aluminium-stacking-doors",
  "stacking-doors": "aluminium-stacking-doors",
  "security-gate": "security-gates",
  "burglar-bar": "burglar-bars",
};

/**
 * Builds the full page content for a single location x service combination.
 * Content is composed deterministically from verified service and location data.
 * Supports "[service]-near-[location]", "[service]-in-[location]",
 * and dedicated "[service]-installation-in-[location]" keyword routes.
 */
export function getLocationServicePage(area: string, routeServiceId: string): LocationServiceObject | null {
  const location = gautengLocations.find((loc) => loc.slug === area || loc.id === area);
  if (!location) return null;

  const isInstallation = routeServiceId.includes("-installation-");
  const isNear = location.type === "mall" || routeServiceId.includes("-near-");
  const parsedRoute = parseServiceLocationSlug(routeServiceId);

  // Extract service identifier part from the route
  let parsedServiceKey = routeServiceId;
  const locSuffixPatterns = [
    `-installation-in-${location.slug}`,
    `-installation-near-${location.slug}`,
    `-in-${location.slug}`,
    `-near-${location.slug}`,
    `-installation-in-${location.id}`,
    `-installation-near-${location.id}`,
    `-in-${location.id}`,
    `-near-${location.id}`,
  ];

  for (const suffix of locSuffixPatterns) {
    if (parsedServiceKey.endsWith(suffix)) {
      parsedServiceKey = parsedServiceKey.slice(0, -suffix.length);
      break;
    }
  }

  const resolvedKey = aliasServiceMap[parsedServiceKey] || parsedServiceKey;

  const service = parsedRoute?.coreService || services.find((s) => {
    const slug = slugify(s.title);
    const singularSlug = slug.replace(/s$/, "").replace(/doors$/, "door").replace(/windows$/, "window");
    return (
      s.id === resolvedKey ||
      slug === resolvedKey ||
      singularSlug === resolvedKey ||
      s.id === parsedServiceKey ||
      slug === parsedServiceKey
    );
  });
  if (!service) return null;

  const page = servicePages[service.id];
  if (!page) return null;

  const suburbs = getLocalSuburbs(location);

  const targetPhrase = parsedRoute?.h1;
  const hero = buildHero(location, service, page, isNear, isInstallation, targetPhrase);
  const localizedStory = buildStory(location, service, page, suburbs);
  const localNAP = buildNap(location, suburbs);
  const localFaqs = buildFaqs(location, service, suburbs, targetPhrase);

  const base: LocationServiceObject = {
    id: `loc-srv-${location.slug}-${service.id}${isInstallation ? "-inst" : ""}`,
    serviceId: service.id,
    locationSlug: location.slug,
    fullPageUrl: `${siteUrl}/${routeServiceId}`,
    hero,
    localizedStory,
    localNAP,
    localProjects: [],
    localReviews: [],
    localFaqs,
    seo: buildSeo(
      location,
      service,
      page,
      suburbs,
      routeServiceId,
      isInstallation,
      targetPhrase,
    ),
    structuredDataJsonLd: {},
  };

  base.structuredDataJsonLd = buildStructuredData(location, service, page, base, suburbs, isNear);
  return base;
}

/** Returns only the service/location routes approved for organic indexing. */
export function getAllLocationServiceRoutes(): { area: string; serviceId: string }[] {
  const routes: { area: string; serviceId: string }[] = [];
  for (const location of gautengLocations) {
    const locSlug = location.slug || location.id;
    for (const service of services) {
      if (!getServiceLocationSeoEligibility(service.id, location).includeInSitemap) {
        continue;
      }
      routes.push({
        area: locSlug,
        serviceId: getCanonicalServiceLocationSlug(service.id, locSlug),
      });
    }
  }
  return routes;
}

/** Returns priority location x service routes for build-time pre-rendering. */
export function getPrerenderLocationServiceRoutes(): { area: string; serviceId: string }[] {
  // Prerender primary strategic commercial nodes (including Katlehong, Sandton, Midrand)
  // All other combinations are generated on-demand at runtime via dynamicParams = true.
  const priorityLocationSlugs = ["katlehong", "sandton", "midrand", "pretoria", "fourways"];
  const priorityLocations = gautengLocations.filter((loc) =>
    priorityLocationSlugs.includes(loc.slug) || priorityLocationSlugs.includes(loc.id)
  );

  const priorityServiceSlugs = [
    "aluminium-windows",
    "aluminium-sliding-doors",
    "aluminium-stacking-doors",
    "trellis-doors",
    "trellis-security-gates",
  ];
  const targetServices = services.filter((s) => priorityServiceSlugs.includes(s.id));

  const routes: { area: string; serviceId: string }[] = [];
  for (const location of priorityLocations) {
    const locId = location.slug || location.id;
    for (const service of targetServices) {
      routes.push({
        area: locId,
        serviceId: getCanonicalServiceLocationSlug(service.id, locId),
      });
    }
  }
  return routes;
}

