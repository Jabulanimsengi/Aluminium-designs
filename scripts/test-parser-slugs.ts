import { services } from "../src/data/services";
import { gautengLocations } from "../src/data/locations";
import { slugify } from "../src/lib/site";
import { getTaxonomyServiceBySlug } from "../src/data/serviceTaxonomy";

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
  locationSlug: string
): string {
  const locSlug = locationSlug.toLowerCase();
  const isKatlehong = locSlug === "katlehong";
  const prep = isKatlehong ? "in" : "near";
  const slug = slugify(serviceSlugOrTitle);

  if (isRepairService(slug)) {
    return `${slug}-${prep}-${locSlug}`;
  }

  const singular = toSingularServiceSlug(slug);
  return `${singular}-installation-${prep}-${locSlug}`;
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
  "aluminium-stacking-doors": "aluminium-folding-stacking-doors",
  "folding-doors": "aluminium-folding-stacking-doors",
  "french-doors": "aluminium-french-doors",
  "front-doors": "aluminium-front-entrance-doors",
  "garage-doors": "aluminium-garage-doors",
  "shopfront": "commercial-aluminium-shopfronts",
  "shopfronts": "commercial-aluminium-shopfronts",
  "commercial-shopfronts": "commercial-aluminium-shopfronts",
  "steam-room": "custom-glass-steam-rooms-saunas",
  "steam-rooms": "custom-glass-steam-rooms-saunas",
  "custom-steam-rooms": "custom-glass-steam-rooms-saunas",
  "shower-doors": "frameless-glass-shower-doors",
  "frameless-showers": "frameless-glass-shower-doors",
  "glass-balustrades": "glass-stair-balcony-railings",
  "patio-enclosures": "glass-patio-sunroom-enclosures",
  "double-glazed-windows": "soundproof-double-glazed-windows",
  "gutters": "seamless-aluminium-gutters",
  "security-gates": "security-gates",
  "trellis-doors": "trellis-doors",
  "trellis-security-gates": "trellis-doors",
  "trellis-gates": "trellis-doors",
  "burglar-bars": "burglar-bars-window-fixtures",
  "driveway-gates": "driveway-gates-automation",
  "steel-carports": "steel-carports-shade-ports",
  "palisade-fencing": "palisade-fencing-spikes",
  "steel-works": "custom-steel-fabrication",
  "steel-fabrication": "custom-steel-fabrication",
  "clearview-fencing": "anti-climb-clear-view-fencing",
};

function titleCaseWords(str: string): string {
  return str
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}

export function parseServiceLocationSlug(rawSlug: string) {
  const slug = rawSlug.toLowerCase().trim().replace(/^\//, "").replace(/\/$/, "");

  if (!slug.includes("-in-") && !slug.includes("-near-")) {
    return null;
  }

  const sortedLocations = [...gautengLocations].sort((a, b) => {
    const lenA = (a.slug || a.id).length;
    const lenB = (b.slug || b.id).length;
    return lenB - lenA;
  });

  let matchedLocation: any = null;
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

  if ((matchedLocation.slug || matchedLocation.id).toLowerCase() === "katlehong") {
    matchedPreposition = "in";
  }

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
    return null;
  }

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

  serviceTitle = serviceTitle
    .split(" ")
    .map((word) => {
      const lower = word.toLowerCase();
      if (["and", "&", "of", "for", "in", "with", "to"].includes(lower)) return lower;
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");

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

console.log("Testing parsing of all 38 canonical Sandton and Katlehong slugs:\n");

let parseErrors = 0;
for (const srv of services) {
  const sandtonCanonical = getCanonicalServiceLocationSlug(srv.id, "sandton");
  const katlehongCanonical = getCanonicalServiceLocationSlug(srv.id, "katlehong");

  const parsedSandton = parseServiceLocationSlug(sandtonCanonical);
  if (!parsedSandton) {
    console.error(`FAILED to parse Sandton canonical: ${sandtonCanonical}`);
    parseErrors++;
  } else if (parsedSandton.canonicalSlug !== sandtonCanonical) {
    console.error(`Mismatch for Sandton: input=${sandtonCanonical}, canonical=${parsedSandton.canonicalSlug}`);
    parseErrors++;
  }

  const parsedKatlehong = parseServiceLocationSlug(katlehongCanonical);
  if (!parsedKatlehong) {
    console.error(`FAILED to parse Katlehong canonical: ${katlehongCanonical}`);
    parseErrors++;
  } else if (parsedKatlehong.canonicalSlug !== katlehongCanonical) {
    console.error(`Mismatch for Katlehong: input=${katlehongCanonical}, canonical=${parsedKatlehong.canonicalSlug}`);
    parseErrors++;
  }

  // Also test legacy URL redirect to canonical
  const legacySandton = `${slugify(srv.title)}-near-sandton`;
  const parsedLegacy = parseServiceLocationSlug(legacySandton);
  if (!parsedLegacy) {
    console.error(`FAILED to parse legacy: ${legacySandton}`);
    parseErrors++;
  } else if (parsedLegacy.canonicalSlug !== sandtonCanonical) {
    console.error(`Legacy ${legacySandton} did not resolve to canonical ${sandtonCanonical}! Got: ${parsedLegacy.canonicalSlug}`);
    parseErrors++;
  }
}

console.log(`\nParse test finished! Total services: ${services.length}, Total Parse Errors: ${parseErrors}`);
