export type TitleModifier = "Affordable" | "Custom" | "Top-Rated" | "Contractors" | "Fast";

export const TITLE_MODIFIERS: TitleModifier[] = [
  "Custom",
  "Affordable",
  "Top-Rated",
  "Contractors",
  "Fast",
];

export interface TitleVariantOptions {
  serviceName: string;
  locationName: string;
  locationSlug: string;
  preposition?: "in" | "near";
  brandName?: string;
  category?: string;
  priceDisplay?: string;
  variantIndex?: number;
  isInstallation?: boolean;
}

export interface DescriptionVariantOptions {
  serviceName: string;
  locationName: string;
  locationSlug: string;
  preposition?: "in" | "near";
  priceDisplay?: string;
  trustSignal1?: string;
  trustSignal2?: string;
  cta?: string;
  isInstallation?: boolean;
}

/**
 * Deterministic hash to pick consistent modifiers or templates per (service, location)
 */
function hashString(input: string): number {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

/**
 * Generates a high-CTR meta title tag strictly under 60 characters for mobile SERPs.
 * Rotates semantic modifiers ("Affordable", "Custom", "Top-Rated", "Contractors", "Fast")
 * and respects the Katlehong strict location rule (omitting "Near").
 *
 * Example Output: "Custom Aluminium Window | Installation Near Sandton"
 * Katlehong Output: "Custom Aluminium Window | Installation in Katlehong"
 */
export function generateMetaTitleVariant(options: TitleVariantOptions): string {
  const {
    serviceName,
    locationName,
    locationSlug,
    brandName = "Aluminium Designs",
    category = "",
    priceDisplay,
    variantIndex,
    isInstallation = true,
  } = options;

  const isKatlehong = locationSlug.toLowerCase() === "katlehong";
  const prep = isKatlehong ? "in" : (options.preposition || "near");
  const locationPhrase = prep === "in" ? `in ${locationName}` : `Near ${locationName}`;

  const seed = `${serviceName}:${locationSlug}`;
  const index = variantIndex !== undefined ? variantIndex : hashString(seed);
  const modifier = TITLE_MODIFIERS[index % TITLE_MODIFIERS.length];

  // Primary intent title formulas
  const candidates: string[] = [];

  const cat = category.toLowerCase();
  let uvp = "SANS 10400";
  if (cat.includes("repair") || serviceName.toLowerCase().includes("repair")) {
    uvp = priceDisplay ? `${priceDisplay}` : "Same-Day Fix";
  } else if (cat.includes("window") || cat.includes("door")) {
    uvp = "AAAMSA Certified";
  } else if (cat.includes("security") || cat.includes("fencing")) {
    uvp = "High Security";
  } else if (cat.includes("gutter")) {
    uvp = priceDisplay ? `${priceDisplay}` : "10-Yr Guarantee";
  } else if (cat.includes("glass") || cat.includes("shower")) {
    uvp = "Toughened Glass";
  }

  if (isInstallation) {
    // Template A (Exact Spec Example): Custom [Service] | Installation Near [Location]
    candidates.push(`${modifier} ${serviceName} | Installation ${locationPhrase}`);
    candidates.push(`${serviceName} Installation ${locationPhrase} | ${brandName}`);
    candidates.push(`${modifier} ${serviceName} Installation ${locationPhrase}`);
    candidates.push(`${serviceName} ${locationPhrase} | ${uvp} | ${brandName}`);
    candidates.push(`${modifier} ${serviceName} ${locationPhrase} | ${brandName}`);
    candidates.push(`${modifier} ${serviceName} | ${locationName}`);
  } else {
    // Repairs or non-installation services
    candidates.push(`${modifier} ${serviceName} ${locationPhrase} | ${brandName}`);
    candidates.push(`${serviceName} ${locationPhrase} | ${uvp} | ${brandName}`);
    candidates.push(`${modifier} ${serviceName} | ${locationPhrase}`);
    candidates.push(`${serviceName} ${locationPhrase} | ${brandName}`);
    candidates.push(`${modifier} ${serviceName} | ${locationName}`);
  }

  // Find first candidate under 60 chars
  for (const title of candidates) {
    if (title.length <= 60) {
      return title;
    }
  }

  // Fallback trimmed strictly to <= 60 chars without cutting in half awkwardly
  const fallback = isInstallation
    ? `${serviceName} Installation ${locationPhrase}`
    : `${serviceName} ${locationPhrase}`;
  if (fallback.length <= 60) {
    return fallback;
  }

  const shortFallback = `${serviceName} ${locationPhrase}`;
  if (shortFallback.length <= 60) {
    return shortFallback;
  }

  return shortFallback.slice(0, 57) + "...";
}

/**
 * Generates a psychological trigger meta description strictly between 140 and 155 characters.
 * Includes starting price, trust signals, and clear call to action.
 */
export function generateMetaDescriptionVariant(options: DescriptionVariantOptions): string {
  const {
    serviceName,
    locationName,
    locationSlug,
    priceDisplay = "competitive rates",
    trustSignal1 = "No Call-Out Fee",
    trustSignal2 = "SANS 10400 Compliant",
    cta = "Get a free quote today!",
  } = options;

  const isKatlehong = locationSlug.toLowerCase() === "katlehong";
  const prep = isKatlehong ? "in" : (options.preposition || "near");

  const actionWord = options.isInstallation === false ? "repairs" : "installation";

  // Programmatic formula:
  // "Looking for {Service} {in/near} {Location}? Professional {actionWord} from {Price}. {Trust1} & {Trust2}. {CTA}"
  let desc = `Looking for ${serviceName.toLowerCase()} ${prep} ${locationName}? Professional ${actionWord} starting from ${priceDisplay}. ${trustSignal1} & ${trustSignal2}. ${cta}`;

  if (desc.length > 155) {
    // Shorter variant
    desc = `Need ${serviceName.toLowerCase()} ${prep} ${locationName}? Expert ${actionWord} starting from ${priceDisplay}. ${trustSignal1}. ${cta}`;
  }

  if (desc.length < 140) {
    // Pad slightly to satisfy the strict 140-155 character window
    desc = `Looking for professional ${serviceName.toLowerCase()} ${prep} ${locationName}? Custom ${actionWord} starting from ${priceDisplay}. ${trustSignal1} & ${trustSignal2}. ${cta}`;
  }

  // Ensure strict bounds [140, 155] if possible, or <= 155
  if (desc.length > 155) {
    desc = desc.slice(0, 152) + "...";
  }

  return desc;
}
