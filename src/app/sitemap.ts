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
  const entries: MetadataRoute.Sitemap = coreRoutes.map((path, index) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: index === 0 ? 1 : 0.7,
  }));

  const serviceEntries: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteUrl}${service.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const locationEntries: MetadataRoute.Sitemap = gautengLocations.map((location) => ({
      url: `${siteUrl}/locations/${location.id}`,
      changeFrequency: "monthly",
      priority: 0.6,
    }));

  const locationServiceEntries: MetadataRoute.Sitemap = getAllLocationServiceRoutes().map((route) => ({
      url: `${siteUrl}/locations/${route.area}/${route.serviceId}`,
      changeFrequency: "monthly",
      priority: 0.5,
    }));

  return [...entries, ...serviceEntries, ...locationEntries, ...locationServiceEntries];
}
