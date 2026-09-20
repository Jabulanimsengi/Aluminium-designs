export interface CoverageLocationInput {
  slug: string;
  name: string;
  municipality: string;
  region: string;
  parentLocationSlug?: string;
}

/**
 * Established Gauteng cities, towns, and major townships form the indexable
 * coverage layer. Smaller suburbs and landmarks belong to one of these hubs
 * instead of becoming independent SEO landing pages by default.
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
  // Major townships previously represented only as non-indexable child areas.
  "vosloorus",
  "thokoza",
  "daveyton",
  "etwatwa",
  "kwathema",
  "tsakane",
  "duduza",
  "reiger-park",
  "wattville",
  "ivory-park",
  "atteridgeville",
  "hammanskraal",
  "ga-rankuwa",
  "mabopane",
  "refilwe",
  "kagiso",
  "mohlakeng",
  "bekkersdal",
  "khutsong",
  "kokosi",
  "sebokeng",
  "evaton",
  "sharpeville",
  "boipatong",
  "bophelong",
  "ratanda",
  "lawley",
  "eldorado-park",
] as const;

export type GautengHubSlug = (typeof GAUTENG_HUB_SLUGS)[number];

const hubSlugSet = new Set<string>(GAUTENG_HUB_SLUGS);

/**
 * Search-intent groups deliberately broaden local coverage without creating a
 * thin services x 805-location cross-product. Every core service is assigned
 * to at least one substantial group of Gauteng hubs.
 */
const PREMIUM_HUBS: readonly GautengHubSlug[] = [
  "johannesburg", "sandton", "fourways", "randburg", "rosebank", "midrand",
  "pretoria", "pretoria-east", "centurion", "bedfordview", "edenvale", "alberton",
];

const RESIDENTIAL_HUBS: readonly GautengHubSlug[] = [
  ...PREMIUM_HUBS,
  "roodepoort", "soweto", "johannesburg-south", "lenasia", "pretoria-north",
  "mamelodi", "soshanguve", "kempton-park", "boksburg", "benoni", "germiston",
  "brakpan", "springs", "tembisa", "krugersdorp", "vanderbijlpark", "vereeniging",
  "vosloorus", "thokoza", "daveyton", "ivory-park", "atteridgeville", "sebokeng",
];

const COMMERCIAL_HUBS: readonly GautengHubSlug[] = [
  "johannesburg", "sandton", "fourways", "randburg", "rosebank", "roodepoort",
  "midrand", "johannesburg-south", "pretoria", "pretoria-east", "centurion",
  "kempton-park", "boksburg", "benoni", "germiston", "bedfordview", "edenvale",
  "alberton", "springs", "krugersdorp", "vanderbijlpark", "vereeniging",
];

const SECURITY_HUBS: readonly GautengHubSlug[] = [
  "katlehong", "johannesburg", "roodepoort", "soweto", "alexandra",
  "johannesburg-south", "lenasia", "pretoria", "pretoria-north", "mamelodi",
  "soshanguve", "kempton-park", "boksburg", "benoni", "germiston", "alberton",
  "brakpan", "springs", "tembisa", "krugersdorp", "randfontein", "westonaria",
  "carletonville", "vanderbijlpark", "vereeniging", "meyerton", "heidelberg",
  "vosloorus", "thokoza", "daveyton", "etwatwa", "kwathema", "tsakane",
  "duduza", "reiger-park", "wattville", "ivory-park", "atteridgeville",
  "hammanskraal", "ga-rankuwa", "mabopane", "refilwe", "kagiso", "mohlakeng",
  "bekkersdal", "khutsong", "kokosi", "sebokeng", "evaton", "sharpeville",
  "boipatong", "bophelong", "ratanda", "lawley", "eldorado-park",
];

const REGIONAL_HUBS: readonly GautengHubSlug[] = [
  ...COMMERCIAL_HUBS,
  "katlehong", "soweto", "lenasia", "pretoria-north", "mamelodi", "soshanguve",
  "cullinan", "brakpan", "nigel", "tembisa", "randfontein", "westonaria",
  "carletonville", "meyerton", "heidelberg", "vosloorus", "daveyton", "tsakane",
  "atteridgeville", "hammanskraal", "ga-rankuwa", "kagiso", "sebokeng",
];

const ALL_HUBS: readonly GautengHubSlug[] = GAUTENG_HUB_SLUGS;

export const SERVICE_TARGET_HUBS: Readonly<Record<string, readonly GautengHubSlug[]>> = {
  "aluminium-windows": ALL_HUBS,
  "steel-to-aluminium-conversions": RESIDENTIAL_HUBS,
  "aluminium-sliding-doors": ALL_HUBS,
  "aluminium-stacking-doors": PREMIUM_HUBS,
  "aluminium-front-doors": RESIDENTIAL_HUBS,
  "aluminium-french-doors": RESIDENTIAL_HUBS,
  "aluminium-garage-doors": RESIDENTIAL_HUBS,
  "aluminium-sliding-windows": RESIDENTIAL_HUBS,
  "double-glazed-windows": PREMIUM_HUBS,
  "glass-balustrades": PREMIUM_HUBS,
  "glass-patio-enclosures": PREMIUM_HUBS,
  "aluminium-skylights": RESIDENTIAL_HUBS,
  "aluminium-awnings": RESIDENTIAL_HUBS,
  "aluminium-pergolas": PREMIUM_HUBS,
  "aluminium-shopfronts": COMMERCIAL_HUBS,
  "seamless-aluminium-gutters": REGIONAL_HUBS,
  "office-glass-partitions": COMMERCIAL_HUBS,
  "frameless-shower-doors": RESIDENTIAL_HUBS,
  "custom-steam-rooms": PREMIUM_HUBS,
  "aluminium-fly-screens": RESIDENTIAL_HUBS,
  "aluminium-repairs": ALL_HUBS,
  "sliding-door-repairs": ALL_HUBS,
  "glass-replacement": ALL_HUBS,
  "burglar-bars": SECURITY_HUBS,
  "clear-burglar-bars": SECURITY_HUBS,
  "trellis-doors": SECURITY_HUBS,
  "security-gates": SECURITY_HUBS,
  "driveway-gates": SECURITY_HUBS,
  "gate-motors": SECURITY_HUBS,
  "palisade-fencing": SECURITY_HUBS,
  "mesh-fencing": SECURITY_HUBS,
  "steel-carports": REGIONAL_HUBS,
  "steel-balustrades": RESIDENTIAL_HUBS,
  "steel-staircases": RESIDENTIAL_HUBS,
  "steel-sheds": REGIONAL_HUBS,
  "custom-welding": REGIONAL_HUBS,
  "steel-repairs": ALL_HUBS,
  "steel-works": REGIONAL_HUBS,
};

export const GAUTENG_HUB_SERVICE_MAP: Readonly<Record<GautengHubSlug, readonly string[]>> =
  Object.fromEntries(
    GAUTENG_HUB_SLUGS.map((hubSlug) => [
      hubSlug,
      Object.entries(SERVICE_TARGET_HUBS)
        .filter(([, targetHubs]) => targetHubs.includes(hubSlug))
        .map(([serviceSlug]) => serviceSlug),
    ]),
  ) as unknown as Record<GautengHubSlug, readonly string[]>;

const HUB_REGION_ALIASES: ReadonlyArray<{
  hub: GautengHubSlug;
  aliases: readonly string[];
}> = [
  // Promoted township hubs come first so their surrounding sections attach to
  // the township rather than falling through to a broader metro hub.
  { hub: "vosloorus", aliases: ["vosloorus"] },
  { hub: "thokoza", aliases: ["thokoza"] },
  { hub: "daveyton", aliases: ["daveyton"] },
  { hub: "etwatwa", aliases: ["etwatwa"] },
  { hub: "kwathema", aliases: ["kwathema", "kwa thema"] },
  { hub: "tsakane", aliases: ["tsakane"] },
  { hub: "duduza", aliases: ["duduza"] },
  { hub: "reiger-park", aliases: ["reiger park"] },
  { hub: "wattville", aliases: ["wattville"] },
  { hub: "ivory-park", aliases: ["ivory park"] },
  { hub: "atteridgeville", aliases: ["atteridgeville"] },
  { hub: "hammanskraal", aliases: ["hammanskraal"] },
  { hub: "ga-rankuwa", aliases: ["ga rankuwa"] },
  { hub: "mabopane", aliases: ["mabopane"] },
  { hub: "refilwe", aliases: ["refilwe"] },
  { hub: "kagiso", aliases: ["kagiso"] },
  { hub: "mohlakeng", aliases: ["mohlakeng"] },
  { hub: "bekkersdal", aliases: ["bekkersdal"] },
  { hub: "khutsong", aliases: ["khutsong"] },
  { hub: "kokosi", aliases: ["kokosi"] },
  { hub: "sebokeng", aliases: ["sebokeng"] },
  { hub: "evaton", aliases: ["evaton"] },
  { hub: "sharpeville", aliases: ["sharpeville"] },
  { hub: "boipatong", aliases: ["boipatong"] },
  { hub: "bophelong", aliases: ["bophelong"] },
  { hub: "ratanda", aliases: ["ratanda"] },
  { hub: "lawley", aliases: ["lawley"] },
  { hub: "eldorado-park", aliases: ["eldorado park"] },
  { hub: "katlehong", aliases: ["katlehong", "spruitview", "palm ridge"] },
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
