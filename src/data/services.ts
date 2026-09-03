import { allCoreServices } from "@/data/core-services";

export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  features: string[];
  imagePath: string;
  iconName?: string;
  category?: "aluminium" | "steel";
  featured?: boolean;
}

export const steelSlugs = new Set([
  "burglar-bars",
  "clear-burglar-bars",
  "trellis-doors",
  "trellis-security-gates",
  "security-gates",
  "driveway-gates",
  "gate-motors",
  "palisade-fencing",
  "mesh-fencing",
  "steel-carports",
  "steel-balustrades",
  "steel-staircases",
  "steel-sheds",
  "custom-welding",
  "steel-repairs",
  "steel-works",
]);

export const services: Service[] = allCoreServices.map((srv, index) => {
  const isSteel = steelSlugs.has(srv.slug) || srv.category.toLowerCase().includes("steel");
  return {
    id: srv.slug,
    title: srv.serviceName,
    slug: `/services/${srv.slug}`,
    shortDescription: srv.tagline,
    longDescription: srv.overview.paragraphs.join(" "),
    features: srv.features.map((f) => f.title),
    imagePath: srv.hero.heroImage,
    iconName: "Sparkles",
    category: isSteel ? "steel" : "aluminium",
    featured: index < 6,
  };
});

export const aluminiumServices = services.filter((s) => s.category === "aluminium");
export const steelServices = services.filter((s) => s.category === "steel");
