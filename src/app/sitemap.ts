import type { MetadataRoute } from "next";
import { gautengLocations } from "@/data/locations";
import { services } from "@/data/services";
import {
  getLocationSeoEligibility,
  getServiceLocationSeoEligibility,
} from "@/lib/seoEligibility";
import { getCanonicalServiceLocationSlug } from "@/lib/serviceLocationParser";
import { siteUrl } from "@/lib/site";

const coreRoutes = [
  "",
  "/about",
  "/services",
  "/steel-works",
  "/gallery",
  "/pricing",
  "/faq",
  "/contact",
  "/locations",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const coreEntries: MetadataRoute.Sitemap = coreRoutes.map((path) => {
    let priority = 0.6;
    let changeFrequency: "weekly" | "monthly" = "monthly";

    if (path === "") {
      priority = 1.0;
      changeFrequency = "weekly";
    } else if (path === "/services" || path === "/steel-works") {
      priority = 0.8;
      changeFrequency = "weekly";
    } else if (path === "/pricing" || path === "/gallery" || path === "/contact") {
      priority = 0.7;
    }

    return {
      url: `${siteUrl}${path}`,
      changeFrequency,
      priority,
    };
  });

  const serviceEntries: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteUrl}${service.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const locationEntries: MetadataRoute.Sitemap = gautengLocations
    .filter((location) => getLocationSeoEligibility(location).includeInSitemap)
    .map((location) => ({
      url: `${siteUrl}/locations/${location.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  const localServiceEntries: MetadataRoute.Sitemap = [];
  for (const location of gautengLocations) {
    for (const service of services) {
      if (!getServiceLocationSeoEligibility(service.id, location).includeInSitemap) {
        continue;
      }

      localServiceEntries.push({
        url: `${siteUrl}/${getCanonicalServiceLocationSlug(service.id, location.slug)}`,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return [
    ...coreEntries,
    ...serviceEntries,
    ...locationEntries,
    ...localServiceEntries,
  ];
}
