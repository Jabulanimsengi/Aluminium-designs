import { allCoreServices } from "@/data/core-services";

export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  features: string[];
  imagePath: string;
  iconName: string;
  featured?: boolean;
}

export const services: Service[] = allCoreServices.map((srv, index) => ({
  id: srv.slug,
  title: srv.serviceName,
  slug: `/services/${srv.slug}`,
  shortDescription: srv.tagline,
  longDescription: srv.overview.paragraphs.join(" "),
  features: srv.features.map((f) => f.title),
  imagePath: srv.hero.heroImage,
  iconName: "Sparkles",
  featured: index < 6,
}));
