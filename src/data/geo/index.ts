import { gautengLocations } from "./hubs";
import { gautengTargetLocations } from "./sections";
import { gautengTargetMalls } from "./malls";
import { extraSections, extraMalls } from "./expansion";

export type GeoNodeType = "city" | "suburb" | "mall";

export interface GeoNode {
  id: string;
  slug: string;
  name: string;
  type: GeoNodeType;
  municipality: string;
  region: string;
  priority: number;
}

const cityHubs: GeoNode[] = gautengLocations.map((loc) => ({
  id: loc.id,
  slug: loc.slug,
  name: loc.name,
  type: "city" as const,
  municipality: loc.metroOrDistrict || loc.province,
  region: loc.name,
  priority: 0.9,
}));

const suburbAreas: GeoNode[] = [...gautengTargetLocations, ...extraSections].map((loc) => ({
  id: loc.id,
  slug: loc.slug,
  name: loc.name,
  type: "suburb" as const,
  municipality: loc.municipality,
  region: loc.region,
  priority: 0.8,
}));

const mallAreas: GeoNode[] = [...gautengTargetMalls, ...extraMalls].map((loc) => ({
  id: loc.id,
  slug: loc.slug,
  name: loc.name,
  type: "mall" as const,
  municipality: loc.municipality,
  region: loc.region,
  priority: 0.8,
}));

function dedupeBySlug(nodes: GeoNode[]): GeoNode[] {
  const seen = new Set<string>();
  const out: GeoNode[] = [];
  for (const node of nodes) {
    if (seen.has(node.slug)) continue;
    seen.add(node.slug);
    out.push(node);
  }
  return out;
}

// Hubs take priority, then sections, then malls. Duplicate slugs are dropped.
export const geoNodes: GeoNode[] = dedupeBySlug([...cityHubs, ...suburbAreas, ...mallAreas]);

export const cityHubNodes = geoNodes.filter((n) => n.type === "city");
export const suburbNodes = geoNodes.filter((n) => n.type === "suburb");
export const mallNodes = geoNodes.filter((n) => n.type === "mall");

export function getGeoNodeBySlug(slug: string): GeoNode | undefined {
  return geoNodes.find((n) => n.slug === slug);
}
