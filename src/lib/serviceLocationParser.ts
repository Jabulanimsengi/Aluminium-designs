import { gautengLocations, type LocationArea } from "@/data/locations";
import {
  getTaxonomyServiceBySlug,
  type ServiceTaxonomyItem,
} from "@/data/serviceTaxonomy";
import { services, type Service } from "@/data/services";
import { slugify } from "@/lib/site";

export interface ParsedServiceLocation {
  slug: string;
  canonicalSlug: string;
  serviceSlug: string;
  serviceTitle: string;
  locationSlug: string;
  locationName: string;
  location: LocationArea;
  preposition: "in" | "near";
  isInstallation: boolean;
  h1: string;
  taxonomyService?: ServiceTaxonomyItem;
  coreService?: Service;
}

export function isRepairService(serviceSlugOrTitle: string): boolean {
  const lower = serviceSlugOrTitle.toLowerCase();
  return (
    lower.includes("repair") ||
    lower.includes("replacement") ||
    lower === "glass-replacement"
  );
}

export function toSingularServiceSlug(serviceSlugOrTitle: string): string {
  const slug = slugify(serviceSlugOrTitle);
  if (isRepairService(slug)) {
    return slug;
  }
  return slug
    .replace(/-windows$/, "-window")
    .replace(/-doors$/, "-door")
    .replace(/-gates$/, "-gate")
    .replace(/-motors$/, "-motor")
    .replace(/-bars$/, "-bar")
    .replace(/-carports$/, "-carport")
    .replace(/-balustrades$/, "-balustrade")
    .replace(/-staircases$/, "-staircase")
    .replace(/-sheds$/, "-shed")
    .replace(/-skylights$/, "-skylight")
    .replace(/-awnings$/, "-awning")
    .replace(/-pergolas$/, "-pergola")
    .replace(/-shopfronts$/, "-shopfront")
    .replace(/-gutters$/, "-gutter")
    .replace(/-partitions$/, "-partition")
    .replace(/-screens$/, "-screen")
    .replace(/-enclosures$/, "-enclosure")
    .replace(/-conversions$/, "-conversion")
    .replace(/-rooms-saunas$/, "-room")
    .replace(/-rooms$/, "-room");
}

export function toSingularServiceTitle(title: string): string {
  if (isRepairService(title)) return title;
  return title
    .replace(/Windows$/i, "Window")
    .replace(/Doors$/i, "Door")
    .replace(/Gates$/i, "Gate")
    .replace(/Motors$/i, "Motor")
    .replace(/Bars$/i, "Bar")
    .replace(/Carports$/i, "Carport")
    .replace(/Balustrades$/i, "Balustrade")
    .replace(/Staircases$/i, "Staircase")
    .replace(/Sheds$/i, "Shed")
    .replace(/Skylights$/i, "Skylight")
    .replace(/Awnings$/i, "Awning")
    .replace(/Pergolas$/i, "Pergola")
    .replace(/Shopfronts$/i, "Shopfront")
    .replace(/Gutters$/i, "Gutter")
    .replace(/Partitions$/i, "Partition")
    .replace(/Screens$/i, "Screen")
    .replace(/Enclosures$/i, "Enclosure")
    .replace(/Conversions$/i, "Conversion")
    .replace(/Rooms & Saunas$/i, "Room")
    .replace(/Rooms$/i, "Room");
}

export function getCanonicalServiceLocationSlug(
  serviceSlugOrTitle: string,
  locationSlug: string,
): string {
  const locSlug = locationSlug.toLowerCase();
  const slug = slugify(serviceSlugOrTitle);

  if (isRepairService(slug)) {
    return `${slug}-near-${locSlug}`;
  }

  const singular = toSingularServiceSlug(slug);
  return `${singular}-installation-near-${locSlug}`;
}

const aliasServiceMap: Record<string, string> = {
  "windows": "aluminium-windows",
  "window": "aluminium-windows",
  "aluminium-window": "aluminium-windows",
  "aluminium-windows": "aluminium-windows",
  "doors": "aluminium-sliding-doors",
  "door": "aluminium-sliding-doors",
  "aluminium-door": "aluminium-sliding-doors",
  "aluminium-doors": "aluminium-sliding-doors",
  "sliding-door": "aluminium-sliding-doors",
  "sliding-doors": "aluminium-sliding-doors",
  "aluminium-sliding-door": "aluminium-sliding-doors",
  "aluminium-sliding-doors": "aluminium-sliding-doors",
  "stacking-door": "aluminium-stacking-doors",
  "stacking-doors": "aluminium-stacking-doors",
  "aluminium-stacking-door": "aluminium-stacking-doors",
  "aluminium-stacking-doors": "aluminium-stacking-doors",
  "folding-doors": "aluminium-stacking-doors",
  "folding-door": "aluminium-stacking-doors",
  "french-doors": "aluminium-french-doors",
  "french-door": "aluminium-french-doors",
  "front-doors": "aluminium-front-doors",
  "front-door": "aluminium-front-doors",
  "garage-doors": "aluminium-garage-doors",
  "garage-door": "aluminium-garage-doors",
  "shopfront": "aluminium-shopfronts",
  "shopfronts": "aluminium-shopfronts",
  "commercial-shopfront": "aluminium-shopfronts",
  "commercial-shopfronts": "aluminium-shopfronts",
  "steam-room": "custom-steam-rooms",
  "steam-rooms": "custom-steam-rooms",
  "custom-steam-room": "custom-steam-rooms",
  "custom-steam-rooms": "custom-steam-rooms",
  "shower-door": "frameless-shower-doors",
  "shower-doors": "frameless-shower-doors",
  "frameless-shower": "frameless-shower-doors",
  "frameless-showers": "frameless-shower-doors",
  "glass-balustrade": "glass-balustrades",
  "glass-balustrades": "glass-balustrades",
  "patio-enclosure": "glass-patio-enclosures",
  "patio-enclosures": "glass-patio-enclosures",
  "double-glazed-window": "double-glazed-windows",
  "double-glazed-windows": "double-glazed-windows",
  "gutter": "seamless-aluminium-gutters",
  "gutters": "seamless-aluminium-gutters",
  "seamless-aluminium-gutter": "seamless-aluminium-gutters",
  "security-gate": "security-gates",
  "security-gates": "security-gates",
  "trellis-door": "trellis-doors",
  "trellis-doors": "trellis-doors",
  "trellis-security-gates": "trellis-doors",
  "trellis-security-gate": "trellis-doors",
  "trellis-gates": "trellis-doors",
  "trellis-gate": "trellis-doors",
  "burglar-bar": "burglar-bars",
  "burglar-bars": "burglar-bars",
  "clear-burglar-bar": "clear-burglar-bars",
  "clear-burglar-bars": "clear-burglar-bars",
  "driveway-gate": "driveway-gates",
  "driveway-gates": "driveway-gates",
  "gate-motor": "gate-motors",
  "gate-motors": "gate-motors",
  "steel-carport": "steel-carports",
  "steel-carports": "steel-carports",
  "palisade-fencing": "palisade-fencing",
  "steel-balustrade": "steel-balustrades",
  "steel-balustrades": "steel-balustrades",
  "steel-staircase": "steel-staircases",
  "steel-staircases": "steel-staircases",
  "steel-shed": "steel-sheds",
  "steel-sheds": "steel-sheds",
  "steel-works": "steel-works",
  "steel-fabrication": "steel-works",
  "clearview-fencing": "mesh-fencing",
};

function titleCaseWords(str: string): string {
  return str
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}

/**
 * Parses any incoming slug (e.g. "aluminium-window-installation-near-sandton" or "aluminium-windows-in-centurion")
 * into its constituent service, location, preposition, exact matching H1, and canonical URL.
 */
export function parseServiceLocationSlug(rawSlug: string): ParsedServiceLocation | null {
  const slug = rawSlug.toLowerCase().trim().replace(/^\//, "").replace(/\/$/, "");

  if (!slug.includes("-in-") && !slug.includes("-near-")) {
    return null;
  }

  // Sort locations by slug length descending to prevent sub-string prefix collisions
  const sortedLocations = [...gautengLocations].sort((a, b) => {
    const lenA = (a.slug || a.id).length;
    const lenB = (b.slug || b.id).length;
    return lenB - lenA;
  });

  let matchedLocation: LocationArea | null = null;
  let matchedPreposition: "in" | "near" = "in";
  let isInstallation = false;
  let rawServicePart = "";

  for (const loc of sortedLocations) {
    const locSlug = loc.slug?.toLowerCase();
    const locId = loc.id?.toLowerCase();

    const checkPatterns: { suffix: string; prep: "in" | "near"; inst: boolean }[] = [
      { suffix: `-installation-in-${locSlug}`, prep: "in", inst: true },
      { suffix: `-installation-near-${locSlug}`, prep: "near", inst: true },
      { suffix: `-in-${locSlug}`, prep: "in", inst: false },
      { suffix: `-near-${locSlug}`, prep: "near", inst: false },
    ];

    if (locId && locId !== locSlug) {
      checkPatterns.push(
        { suffix: `-installation-in-${locId}`, prep: "in", inst: true },
        { suffix: `-installation-near-${locId}`, prep: "near", inst: true },
        { suffix: `-in-${locId}`, prep: "in", inst: false },
        { suffix: `-near-${locId}`, prep: "near", inst: false },
      );
    }

    for (const p of checkPatterns) {
      if (slug.endsWith(p.suffix)) {
        matchedLocation = loc;
        matchedPreposition = p.prep;
        isInstallation = p.inst;
        rawServicePart = slug.slice(0, slug.length - p.suffix.length);
        break;
      }
    }

    if (matchedLocation) break;
  }

  if (!matchedLocation || !rawServicePart) {
    return null;
  }

  // Resolve service
  const resolvedServiceSlug = aliasServiceMap[rawServicePart] || rawServicePart;

  const taxonomyItem =
    getTaxonomyServiceBySlug(resolvedServiceSlug) ||
    getTaxonomyServiceBySlug(rawServicePart);

  const coreService = services.find((s) => {
    const sSlug = slugify(s.title);
    const sSingular = toSingularServiceSlug(sSlug);
    const sIdSingular = toSingularServiceSlug(s.id);
    return (
      s.id === resolvedServiceSlug ||
      s.id === rawServicePart ||
      sSlug === resolvedServiceSlug ||
      sSlug === rawServicePart ||
      sSingular === rawServicePart ||
      sSingular === resolvedServiceSlug ||
      sIdSingular === rawServicePart ||
      sIdSingular === resolvedServiceSlug
    );
  });

  if (!taxonomyItem && !coreService && !aliasServiceMap[rawServicePart]) {
    // If it doesn't match any known service or alias, reject it
    return null;
  }

  // Determine Service Title preserving the slug vocabulary for exact 1:1 H1 matching
  let serviceTitle: string;
  if (rawServicePart.includes("-")) {
    serviceTitle = titleCaseWords(rawServicePart);
  } else if (taxonomyItem) {
    serviceTitle = taxonomyItem.name;
  } else if (coreService) {
    serviceTitle = coreService.title;
  } else {
    serviceTitle = titleCaseWords(rawServicePart);
  }

  // Ensure title case formatting: "Aluminium windows" -> "Aluminium Windows"
  serviceTitle = serviceTitle
    .split(" ")
    .map((word) => {
      const lower = word.toLowerCase();
      if (["and", "&", "of", "for", "in", "with", "to"].includes(lower)) return lower;
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");

  // Exact H1 formula matching the URL structure
  const prepWord = matchedPreposition === "in" ? "in" : "Near";
  const h1 = isInstallation
    ? `${serviceTitle} Installation ${prepWord} ${matchedLocation.name}`
    : `${serviceTitle} ${prepWord} ${matchedLocation.name}`;

  const canonicalLocationSlug = matchedLocation.slug || matchedLocation.id;
  const canonicalServiceSlug = coreService?.id || taxonomyItem?.slug || resolvedServiceSlug;
  const canonicalSlug = getCanonicalServiceLocationSlug(canonicalServiceSlug, canonicalLocationSlug);

  return {
    slug,
    canonicalSlug,
    serviceSlug: taxonomyItem?.slug || coreService?.id || resolvedServiceSlug,
    serviceTitle,
    locationSlug: canonicalLocationSlug,
    locationName: matchedLocation.name,
    location: matchedLocation,
    preposition: matchedPreposition,
    isInstallation,
    h1,
    taxonomyService: taxonomyItem,
    coreService,
  };
}
