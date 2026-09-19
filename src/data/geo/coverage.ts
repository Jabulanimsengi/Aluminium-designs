export interface CoverageLocationInput {
  slug: string;
  name: string;
  municipality: string;
  region: string;
  parentLocationSlug?: string;
}

const CORE_LOCAL_SERVICES = [
  "aluminium-windows",
  "aluminium-sliding-doors",
  "aluminium-repairs",
] as const;

const PREMIUM_HUBS = new Set([
  "johannesburg",
  "sandton",
  "fourways",
  "randburg",
  "rosebank",
  "midrand",
  "pretoria",
  "pretoria-east",
  "centurion",
  "bedfordview",
  "edenvale",
  "alberton",
]);

const SECURITY_HUBS = new Set([
  "katlehong",
  "johannesburg",
  "roodepoort",
  "soweto",
  "alexandra",
  "johannesburg-south",
  "lenasia",
  "pretoria-north",
  "mamelodi",
  "soshanguve",
  "kempton-park",
  "boksburg",
  "germiston",
  "tembisa",
  "krugersdorp",
  "vanderbijlpark",
]);

const GLASS_REPAIR_HUBS = new Set([
  "katlehong",
  "johannesburg",
  "sandton",
  "randburg",
  "rosebank",
  "midrand",
  "pretoria",
  "pretoria-east",
  "centurion",
  "kempton-park",
  "bedfordview",
]);

/**
 * The established Gauteng hubs form the indexable coverage layer. Smaller
 * places belong to one of these hubs instead of becoming independent SEO
 * landing pages by default.
 */
export const GAUTENG_HUB_SLUGS = [
  "katlehong",
  "johannesburg",
  "sandton",
  "fourways",
  "randburg",
  "rosebank",
  "roodepoort",
  "midrand",
  "soweto",
  "alexandra",
  "johannesburg-south",
  "lenasia",
  "pretoria",
  "pretoria-east",
  "centurion",
  "pretoria-north",
  "mamelodi",
  "soshanguve",
  "cullinan",
  "kempton-park",
  "boksburg",
  "benoni",
  "germiston",
  "bedfordview",
  "edenvale",
  "alberton",
  "brakpan",
  "springs",
  "nigel",
  "tembisa",
  "krugersdorp",
  "randfontein",
  "westonaria",
  "carletonville",
  "vanderbijlpark",
  "vereeniging",
  "meyerton",
  "heidelberg",
] as const;

export type GautengHubSlug = (typeof GAUTENG_HUB_SLUGS)[number];

const hubSlugSet = new Set<string>(GAUTENG_HUB_SLUGS);

/**
 * This is intentionally an explicit matrix, not a services × locations
 * cross-product. Expand it only after search demand or real project evidence
 * justifies another local page.
 */
export const GAUTENG_HUB_SERVICE_MAP: Readonly<Record<GautengHubSlug, readonly string[]>> =
  Object.fromEntries(
    GAUTENG_HUB_SLUGS.map((hubSlug) => {
      const services = new Set<string>(CORE_LOCAL_SERVICES);
      if (PREMIUM_HUBS.has(hubSlug)) services.add("aluminium-stacking-doors");
      if (SECURITY_HUBS.has(hubSlug)) services.add("security-gates");
      if (GLASS_REPAIR_HUBS.has(hubSlug)) services.add("glass-replacement");
      return [hubSlug, [...services]];
    }),
  ) as unknown as Record<GautengHubSlug, readonly string[]>;

const HUB_REGION_ALIASES: ReadonlyArray<{
  hub: GautengHubSlug;
  aliases: readonly string[];
}> = [
  { hub: "katlehong", aliases: ["katlehong", "spruitview", "vosloorus", "thokoza", "palm ridge"] },
  { hub: "pretoria-east", aliases: ["pretoria east", "east pretoria", "east tshwane", "silver lakes", "menlyn", "waterkloof"] },
  { hub: "pretoria-north", aliases: ["pretoria north", "north pretoria", "north tshwane", "montana", "sinoville"] },
  { hub: "johannesburg-south", aliases: ["johannesburg south", "jhb south", "deep south jhb", "south jhb", "bassonia", "oakdene", "suideroord", "mondeor"] },
  { hub: "cullinan", aliases: ["cullinan", "bronkhorstspruit"] },
  { hub: "carletonville", aliases: ["carletonville", "fochville", "merafong"] },
  { hub: "kempton-park", aliases: ["kempton park", "norkem park", "bonaero"] },
  { hub: "vanderbijlpark", aliases: ["vanderbijlpark"] },
  { hub: "vereeniging", aliases: ["vereeniging", "vaal triangle", "three rivers", "sebokeng", "evaton"] },
  { hub: "krugersdorp", aliases: ["krugersdorp", "mogale city"] },
  { hub: "randfontein", aliases: ["randfontein"] },
  { hub: "westonaria", aliases: ["westonaria"] },
  { hub: "roodepoort", aliases: ["roodepoort", "ruimsig", "honeydew", "weltevreden park", "strubens valley"] },
  { hub: "randburg", aliases: ["randburg", "northern suburbs", "north west jhb", "north-west jhb", "randpark ridge", "north riding", "northriding"] },
  { hub: "fourways", aliases: ["fourways", "dainfern", "chartwell"] },
  { hub: "sandton", aliases: ["sandton", "bryanston", "rivonia"] },
  { hub: "rosebank", aliases: ["rosebank"] },
  { hub: "midrand", aliases: ["midrand", "waterfall"] },
  { hub: "soweto", aliases: ["soweto", "diepkloof"] },
  { hub: "alexandra", aliases: ["alexandra"] },
  { hub: "lenasia", aliases: ["lenasia"] },
  { hub: "johannesburg", aliases: ["johannesburg", "central jhb", "johannesburg cbd", "jhb cbd", "east jhb", "central east jhb", "west central jhb", "newtown", "norwood", "linksfield", "highlands north"] },
  { hub: "centurion", aliases: ["centurion", "raslouw"] },
  { hub: "mamelodi", aliases: ["mamelodi"] },
  { hub: "soshanguve", aliases: ["soshanguve"] },
  { hub: "pretoria", aliases: ["pretoria", "pretoria cbd", "pretoria central", "central pretoria", "pretoria west", "west pretoria", "west tshwane", "pretoria moot", "sunnyside"] },
  { hub: "boksburg", aliases: ["boksburg", "sunward park"] },
  { hub: "benoni", aliases: ["benoni", "northmead", "farrarmere", "farramere", "daveyton"] },
  { hub: "bedfordview", aliases: ["bedfordview"] },
  { hub: "edenvale", aliases: ["edenvale", "greenstone", "edenglen"] },
  { hub: "alberton", aliases: ["alberton", "meyersdal", "new redruth"] },
  { hub: "brakpan", aliases: ["brakpan", "tsakane"] },
  { hub: "springs", aliases: ["springs"] },
  { hub: "nigel", aliases: ["nigel"] },
  { hub: "tembisa", aliases: ["tembisa"] },
  { hub: "germiston", aliases: ["germiston", "primrose", "east rand"] },
  { hub: "meyerton", aliases: ["meyerton", "midvaal"] },
  { hub: "heidelberg", aliases: ["heidelberg", "lesedi"] },
];

const MUNICIPALITY_FALLBACKS: ReadonlyArray<{
  match: string;
  hub: GautengHubSlug;
}> = [
  { match: "johannesburg", hub: "johannesburg" },
  { match: "tshwane", hub: "pretoria" },
  { match: "ekurhuleni", hub: "germiston" },
  { match: "west rand", hub: "krugersdorp" },
  { match: "mogale", hub: "krugersdorp" },
  { match: "merafong", hub: "carletonville" },
  { match: "rand west", hub: "randfontein" },
  { match: "sedibeng", hub: "vereeniging" },
  { match: "midvaal", hub: "meyerton" },
  { match: "lesedi", hub: "heidelberg" },
];

function normalize(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

export function isGautengHubSlug(slug: string): slug is GautengHubSlug {
  return hubSlugSet.has(slug);
}

export function getHubServices(hubSlug: string): readonly string[] {
  return isGautengHubSlug(hubSlug) ? GAUTENG_HUB_SERVICE_MAP[hubSlug] : [];
}

export function resolveParentHubSlug(location: CoverageLocationInput): GautengHubSlug {
  if (isGautengHubSlug(location.slug)) return location.slug;
  if (location.parentLocationSlug && isGautengHubSlug(location.parentLocationSlug)) {
    return location.parentLocationSlug;
  }

  const locationText = normalize(`${location.region} ${location.name}`);
  for (const entry of HUB_REGION_ALIASES) {
    if (entry.aliases.some((alias) => locationText.includes(normalize(alias)))) {
      return entry.hub;
    }
  }

  const municipality = normalize(location.municipality);
  return (
    MUNICIPALITY_FALLBACKS.find((entry) => municipality.includes(entry.match))?.hub ||
    "johannesburg"
  );
}
