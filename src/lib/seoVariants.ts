export type TitleModifier =
  | "Custom"
  | "Made-to-Measure"
  | "Local"
  | "Professional"
  | "Specialist";

export const TITLE_MODIFIERS: TitleModifier[] = [
  "Custom",
  "Made-to-Measure",
  "Local",
  "Professional",
  "Specialist",
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
 * Rotates descriptive modifiers without unverifiable superlatives.
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

function trimDescriptionAtWordBoundary(value: string, maxLength = 160): string {
  if (value.length <= maxLength) return value;
  const shortened = value.slice(0, maxLength - 1);
  const lastSpace = shortened.lastIndexOf(" ");
  return `${shortened.slice(0, lastSpace > 120 ? lastSpace : maxLength - 1).replace(/[.,;:]$/, "")}…`;
}

/** Generates a readable search description without padding or mid-word cuts. */
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
  const cleanPrice = priceDisplay.replace(/^from\s+/i, "").trim();
  const pricePhrase = cleanPrice.toLowerCase() === "competitive rates"
    ? "at competitive rates"
    : `from ${cleanPrice}`;
  const desc = `${serviceName} ${prep} ${locationName}: custom ${actionWord} ${pricePhrase}. ${trustSignal1}. ${trustSignal2}. ${cta}`;

  return trimDescriptionAtWordBoundary(desc);
}
