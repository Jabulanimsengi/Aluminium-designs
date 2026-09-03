import type { MetadataRoute } from "next";
import { gautengLocations } from "@/data/locations";
import { services } from "@/data/services";
import { getAllLocationServiceRoutes } from "@/data/location-service-pages";
import { siteUrl } from "@/lib/site";

const coreRoutes = [
  "",
  "/about",
  "/services",
  "/steel-works",
  "/gallery",
  "/prices",
  "/faq",
  "/contact",
  "/locations",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const entries: MetadataRoute.Sitemap = coreRoutes.map((path) => {
    let priority = 0.6;
    let changeFrequency: "weekly" | "monthly" = "monthly";

    if (path === "") {
      priority = 1.0;
      changeFrequency = "weekly";
    } else if (path === "/services" || path === "/steel-works") {
      priority = 0.8;
      changeFrequency = "weekly";
    } else if (path === "/prices" || path === "/gallery" || path === "/contact") {
      priority = 0.7;
    }

    return {
      url: `${siteUrl}${path}`,
      lastModified,
      changeFrequency,
      priority,
    };
  });

  const serviceEntries: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteUrl}${service.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const locationEntries: MetadataRoute.Sitemap = gautengLocations.map((location) => ({
    url: `${siteUrl}/locations/${location.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const locationServiceEntries: MetadataRoute.Sitemap = getAllLocationServiceRoutes().map((route) => ({
    url: `${siteUrl}/locations/${route.area}/${route.serviceId}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...entries, ...serviceEntries, ...locationEntries, ...locationServiceEntries];
}
