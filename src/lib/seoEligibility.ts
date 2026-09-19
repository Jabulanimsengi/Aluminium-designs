import type { LocationArea } from "@/data/locations";
import { getHubServices, isGautengHubSlug } from "@/data/geo/coverage";

export type SeoPageTier =
  | "primary-location"
  | "commercial-mall"
  | "expansion";

export interface SeoEligibility {
  generate: boolean;
  index: boolean;
  includeInSitemap: boolean;
  tier: SeoPageTier;
  reason: string;
}

function eligible(
  tier: SeoPageTier,
  reason: string,
): SeoEligibility {
  return {
    generate: true,
    index: true,
    includeInSitemap: true,
    tier,
    reason,
  };
}

function discoverableOnly(
  tier: SeoPageTier,
  reason: string,
): SeoEligibility {
  return {
    generate: true,
    index: false,
    includeInSitemap: false,
    tier,
    reason,
  };
}

/**
 * Only established geographic hubs are standalone organic landing pages.
 * Granular suburbs and landmarks remain usable for visitors, but are kept out
 * of the index until the page has its own project evidence and local content.
 */
export function getLocationSeoEligibility(
  location: Pick<LocationArea, "type" | "slug" | "isHub">,
): SeoEligibility {
  if (location.isHub && isGautengHubSlug(location.slug)) {
    return eligible(
      "primary-location",
      "Established Gauteng city, town, township, or regional hub.",
    );
  }

  return discoverableOnly(
    location.type === "mall" ? "commercial-mall" : "expansion",
    location.type === "mall"
      ? "Verified Gauteng landmark service-area page."
      : "Verified Gauteng suburb or township service-area page.",
  );
}

/**
 * Local landing pages are restricted to high-intent services in established
 * hubs. Core service pages remain indexable independently under /services/.
 */
export function getServiceLocationSeoEligibility(
  serviceSlug: string,
  location: Pick<LocationArea, "type" | "slug" | "isHub">,
): SeoEligibility {
  if (location.isHub && isGautengHubSlug(location.slug)) {
    return getHubServices(location.slug).includes(serviceSlug)
      ? eligible(
          "primary-location",
          "Curated high-intent service page for an established Gauteng geographic hub.",
        )
      : discoverableOnly(
          "primary-location",
          "Core service remains indexable; this hub variant is not in the evidence-led local page matrix.",
        );
  }

  if (location.type === "mall") {
    return discoverableOnly(
      "commercial-mall",
      "Service has credible commercial or urgent-maintenance intent near a mall.",
    );
  }

  return discoverableOnly(
    "expansion",
    `Verified Gauteng service-area combination for ${serviceSlug}.`,
  );
}
