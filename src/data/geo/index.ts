import { gautengLocations } from "./hubs";
import { gautengTargetLocations } from "./sections";
import { gautengTargetMalls } from "./malls";
import { extraSections, extraMalls } from "./expansion";
import {
  GAUTENG_HUB_SLUGS,
  isGautengHubSlug,
  resolveParentHubSlug,
} from "./coverage";

export type GeoNodeType = "city" | "suburb" | "mall";

export interface GeoNode {
  id: string;
  slug: string;
  name: string;
  type: GeoNodeType;
  municipality: string;
  region: string;
  priority: number;
  category?: string;
  context?: string;
  parentLocationSlug?: string;
  parentHubSlug: string;
  isHub: boolean;
  nearbyNames?: string[];
}

type UnresolvedGeoNode = Omit<GeoNode, "parentHubSlug" | "isHub">;

const cityHubs: UnresolvedGeoNode[] = gautengLocations.map((loc) => ({
  id: loc.id,
  slug: loc.slug,
  name: loc.name,
  type: "city" as const,
  municipality: loc.metroOrDistrict || loc.province,
  region: loc.name,
  priority: 0.9,
  category: loc.type,
  context: loc.seoDescription,
  parentLocationSlug: loc.parentLocationSlug,
  nearbyNames: loc.suburbsOrAreas,
}));

const suburbAreas: UnresolvedGeoNode[] = [...gautengTargetLocations, ...extraSections].map((loc) => ({
  id: loc.id,
  slug: loc.slug,
  name: loc.name,
  type: "suburb" as const,
  municipality: loc.municipality,
  region: loc.region,
  priority: 0.8,
  category: loc.category,
  context: loc.notes,
}));

const mallAreas: UnresolvedGeoNode[] = [...gautengTargetMalls, ...extraMalls].map((loc) => ({
  id: loc.id,
  slug: loc.slug,
  name: loc.name,
  type: "mall" as const,
  municipality: loc.municipality,
  region: loc.region,
  priority: 0.8,
  category: loc.category,
  context: loc.notes,
}));

export interface DuplicateGeoSlug {
  slug: string;
  keptId: string;
  discardedId: string;
}

function dedupeBySlug(nodes: UnresolvedGeoNode[]): {
  nodes: UnresolvedGeoNode[];
  duplicates: DuplicateGeoSlug[];
} {
  const seen = new Set<string>();
  const out: UnresolvedGeoNode[] = [];
  const duplicates: DuplicateGeoSlug[] = [];
  for (const node of nodes) {
    if (seen.has(node.slug)) {
      const kept = out.find((candidate) => candidate.slug === node.slug);
      duplicates.push({
        slug: node.slug,
        keptId: kept?.id || node.slug,
        discardedId: node.id,
      });
      continue;
    }
    seen.add(node.slug);
    out.push(node);
  }
  return { nodes: out, duplicates };
}

// Hubs take priority, then sections, then malls. Collisions are retained as
// diagnostics rather than disappearing without an audit trail.
const deduped = dedupeBySlug([...cityHubs, ...suburbAreas, ...mallAreas]);
export const duplicateGeoSlugs = deduped.duplicates;

export const geoNodes: GeoNode[] = deduped.nodes.map((node) => ({
  ...node,
  isHub: isGautengHubSlug(node.slug),
  parentHubSlug: resolveParentHubSlug(node),
}));

export interface GautengCoverageSummary {
  totalLocations: number;
  hubs: number;
  cities: number;
  suburbs: number;
  malls: number;
  duplicateSlugs: number;
  unmappedLocations: number;
}

export function getGautengCoverageSummary(): GautengCoverageSummary {
  const availableSlugs = new Set(geoNodes.map((node) => node.slug));
  const unmappedLocations = geoNodes.filter(
    (node) => !availableSlugs.has(node.parentHubSlug) || !isGautengHubSlug(node.parentHubSlug),
  );

  return {
    totalLocations: geoNodes.length,
    hubs: geoNodes.filter((node) => node.isHub).length,
    cities: geoNodes.filter((node) => node.type === "city").length,
    suburbs: geoNodes.filter((node) => node.type === "suburb").length,
    malls: geoNodes.filter((node) => node.type === "mall").length,
    duplicateSlugs: duplicateGeoSlugs.length,
    unmappedLocations: unmappedLocations.length,
  };
}

function validateGeoCoverage(): void {
  const availableSlugs = new Set(geoNodes.map((node) => node.slug));
  const missingHubs = GAUTENG_HUB_SLUGS.filter((slug) => !availableSlugs.has(slug));
  const invalidParents = geoNodes.filter(
    (node) => !availableSlugs.has(node.parentHubSlug) || !isGautengHubSlug(node.parentHubSlug),
  );

  if (missingHubs.length || invalidParents.length) {
    throw new Error(
      `Invalid Gauteng coverage hierarchy. Missing hubs: ${missingHubs.join(", ") || "none"}; invalid parents: ${invalidParents.map((node) => node.slug).join(", ") || "none"}.`,
    );
  }
}

validateGeoCoverage();

export const cityHubNodes = geoNodes.filter((n) => n.type === "city");
export const suburbNodes = geoNodes.filter((n) => n.type === "suburb");
export const mallNodes = geoNodes.filter((n) => n.type === "mall");

export function getGeoNodeBySlug(slug: string): GeoNode | undefined {
  return geoNodes.find((n) => n.slug === slug);
}

export function getHubForLocation(location: Pick<GeoNode, "parentHubSlug">): GeoNode | undefined {
  return geoNodes.find((node) => node.isHub && node.slug === location.parentHubSlug);
}

export function getChildLocationsForHub(
  hubSlug: string,
  options: { includeMalls?: boolean } = {},
): GeoNode[] {
  return geoNodes
    .filter(
      (node) =>
        !node.isHub &&
        node.parentHubSlug === hubSlug &&
        (options.includeMalls || node.type !== "mall"),
    )
    .sort((a, b) => a.name.localeCompare(b.name));
}
