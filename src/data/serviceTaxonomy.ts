import { getServicePresentation } from "@/data/servicePresentation";

export interface ServiceTaxonomyItem {
  name: string;
  menuLabel?: string;
  slug: string;
  category: ServiceCategory;
  shortDescription: string;
  startingPriceZar: number;
  startingPriceDisplay: string;
  priceUnit: string;
  popular?: boolean;
  featured?: boolean;
}

export interface ServiceCategoryGroup {
  category: ServiceCategory;
  description: string;
  services: string[];
}

export type ServiceCategory =
  | "Aluminium & Doors"
  | "Glass & Enclosures"
  | "Security & Fencing"
  | "Steel & Custom Works"
  | "Maintenance & Repairs";

/**
 * Exact SEO-optimized service taxonomy requested for programmatic architecture.
 */
export const rawServiceTaxonomy: ServiceCategoryGroup[] = [
  {
    category: "Aluminium & Doors",
    description: "Made-to-measure aluminium window and door systems with glazing and hardware specified for the opening and intended use.",
    services: [
      "Aluminium windows",
      "Aluminium sliding windows",
      "Aluminium sliding doors",
      "Aluminium folding & stacking doors",
      "Aluminium front & entrance doors",
      "Aluminium French doors",
      "Aluminium garage doors",
      "Commercial aluminium shopfronts"
    ]
  },
  {
    category: "Glass & Enclosures",
    description: "Frameless glazing, architectural balustrades, acoustic insulation, and bespoke glass enclosure solutions for Gauteng properties.",
    services: [
      "Soundproof & double glazed windows",
      "Glass stair & balcony railings",
      "Glass patio & sunroom enclosures",
      "Aluminium skylights & roof windows",
      "Aluminium awnings & window canopies",
      "Aluminium pergolas & patio covers",
      "Office glass walls & partitions",
      "Frameless glass shower doors",
      "Custom glass steam rooms & saunas"
    ]
  },
  {
    category: "Security & Fencing",
    description: "Physical barrier security systems, anti-climb fencing, custom security gates, and automated access control solutions.",
    services: [
      "Aluminium burglar bars",
      "Polycarbonate clear burglar bars",
      "Expandable trellis security gates",
      "Steel & aluminium security gates",
      "Custom driveway gates",
      "Gate motor installation & repairs",
      "Steel palisade fencing",
      "Wire mesh & Clearview-style fencing"
    ]
  },
  {
    category: "Steel & Custom Works",
    description: "Heavy-duty mild steel and galvanized fabrication, carports, custom staircases, conversions, and structural welding.",
    services: [
      "Replace steel windows with aluminium",
      "Steel carports & shade structures",
      "Steel staircases & balcony railings",
      "Custom steel staircases",
      "Steel garden sheds & storage",
      "Custom steel welding services",
      "Steel gate & fence repairs",
      "Custom steel works & fabrication"
    ]
  },
  {
    category: "Maintenance & Repairs",
    description: "Emergency glazier repairs, sliding door roller replacements, seamless gutter installations, and window maintenance.",
    services: [
      "Seamless aluminium gutters",
      "Aluminium fly & mosquito screens",
      "Aluminium door & window repairs",
      "Sliding door track & wheel repairs",
      "Window & door glass replacement"
    ]
  }
];

const baseTaxonomyServices: ServiceTaxonomyItem[] = [
  // 1. Aluminium & Doors
  {
    name: "Aluminium windows",
    slug: "aluminium-windows",
    category: "Aluminium & Doors",
    shortDescription: "Custom casement, top-hung, and side-hung aluminium windows built to SANS 10400 standards.",
    startingPriceZar: 1850,
    startingPriceDisplay: "From R1,850",
    priceUnit: "per window opening",
    popular: true,
    featured: true,
  },
  {
    name: "Aluminium sliding windows",
    slug: "aluminium-sliding-windows",
    category: "Aluminium & Doors",
    shortDescription: "Smooth horizontal sliding aluminium window systems ideal for modern rooms and serveries.",
    startingPriceZar: 2200,
    startingPriceDisplay: "From R2,200",
    priceUnit: "per unit fitted",
  },
  {
    name: "Aluminium sliding doors",
    slug: "aluminium-sliding-doors",
    category: "Aluminium & Doors",
    shortDescription: "Heavy-duty 2-pane, 3-pane, and 4-pane patio sliding doors with smooth ball-bearing rollers.",
    startingPriceZar: 6800,
    startingPriceDisplay: "From R6,800",
    priceUnit: "per sliding door unit",
    popular: true,
    featured: true,
  },
  {
    name: "Aluminium folding & stacking doors",
    slug: "aluminium-stacking-doors",
    category: "Aluminium & Doors",
    shortDescription: "Concertina folding-stacking door walls opening entire rooms to patios and outdoor entertainment areas.",
    startingPriceZar: 16500,
    startingPriceDisplay: "From R16,500",
    priceUnit: "per complete opening",
    popular: true,
    featured: true,
  },
  {
    name: "Aluminium front & entrance doors",
    slug: "aluminium-front-doors",
    category: "Aluminium & Doors",
    shortDescription: "High-impact pivot and hinged modern entrance doors with multipoint security locks.",
    startingPriceZar: 8500,
    startingPriceDisplay: "From R8,500",
    priceUnit: "per entrance door",
  },
  {
    name: "Aluminium French doors",
    slug: "aluminium-french-doors",
    category: "Aluminium & Doors",
    shortDescription: "Classic double hinged French doors with SANS safety glass and master locksets.",
    startingPriceZar: 7800,
    startingPriceDisplay: "From R7,800",
    priceUnit: "per double door set",
  },
  {
    name: "Aluminium garage doors",
    slug: "aluminium-garage-doors",
    category: "Aluminium & Doors",
    shortDescription: "Lightweight, rust-free sectional aluminium and glass overhead garage door installations.",
    startingPriceZar: 14500,
    startingPriceDisplay: "From R14,500",
    priceUnit: "per single/double door",
  },
  {
    name: "Commercial aluminium shopfronts",
    slug: "aluminium-shopfronts",
    category: "Aluminium & Doors",
    shortDescription: "SANS 10400-N compliant retail store facades, commercial office glazing, and entrance systems.",
    startingPriceZar: 12500,
    startingPriceDisplay: "From R12,500",
    priceUnit: "per shopfront section",
    featured: true,
  },

  // 2. Glass & Enclosures
  {
    name: "Soundproof & double glazed windows",
    slug: "double-glazed-windows",
    category: "Glass & Enclosures",
    shortDescription: "Acoustic laminated and argon gas double-glazed units for thermal insulation and noise cancellation.",
    startingPriceZar: 3400,
    startingPriceDisplay: "From R3,400",
    priceUnit: "per m² fitted",
    popular: true,
  },
  {
    name: "Glass stair & balcony railings",
    slug: "glass-balustrades",
    category: "Glass & Enclosures",
    shortDescription: "Frameless and spigot-mounted 12mm toughened safety glass balustrades for stairs, balconies & pools.",
    startingPriceZar: 2600,
    startingPriceDisplay: "From R2,600",
    priceUnit: "per linear metre",
    featured: true,
  },
  {
    name: "Glass patio & sunroom enclosures",
    slug: "glass-patio-enclosures",
    category: "Glass & Enclosures",
    shortDescription: "Year-round weather-sealed patio conversions turning verandas into all-season entertainment rooms.",
    startingPriceZar: 18500,
    startingPriceDisplay: "From R18,500",
    priceUnit: "per enclosure system",
  },
  {
    name: "Aluminium skylights & roof windows",
    slug: "aluminium-skylights",
    category: "Glass & Enclosures",
    shortDescription: "Custom waterproof architectural skylights and pyramid roof glass for optimal natural lighting.",
    startingPriceZar: 7200,
    startingPriceDisplay: "From R7,200",
    priceUnit: "per roof opening",
  },
  {
    name: "Aluminium awnings & window canopies",
    slug: "aluminium-awnings",
    category: "Glass & Enclosures",
    shortDescription: "Durable fixed louvre and polycarbonate weather canopies protecting doors and window heads.",
    startingPriceZar: 2800,
    startingPriceDisplay: "From R2,800",
    priceUnit: "per awning unit",
  },
  {
    name: "Aluminium pergolas & patio covers",
    slug: "aluminium-pergolas",
    category: "Glass & Enclosures",
    shortDescription: "Modern architectural aluminium pergola structures with optional shade screens and glass canopies.",
    startingPriceZar: 15000,
    startingPriceDisplay: "From R15,000",
    priceUnit: "per custom structure",
  },
  {
    name: "Office glass walls & partitions",
    slug: "office-glass-partitions",
    category: "Glass & Enclosures",
    shortDescription: "Floor-to-ceiling acoustic glass demountable partition systems with hinged or sliding glass doors.",
    startingPriceZar: 2100,
    startingPriceDisplay: "From R2,100",
    priceUnit: "per m² installed",
  },
  {
    name: "Frameless glass shower doors",
    slug: "frameless-shower-doors",
    category: "Glass & Enclosures",
    shortDescription: "Custom 8mm–10mm toughened safety glass shower enclosures with matte black, chrome or brass hardware.",
    startingPriceZar: 3200,
    startingPriceDisplay: "From R3,200",
    priceUnit: "per shower door set",
    popular: true,
  },
  {
    name: "Custom glass steam rooms & saunas",
    slug: "custom-steam-rooms",
    category: "Glass & Enclosures",
    shortDescription: "Heavy-duty vapor-sealed thermal safety glass enclosures for luxury home and gym steam facilities.",
    startingPriceZar: 19500,
    startingPriceDisplay: "From R19,500",
    priceUnit: "per custom cabin build",
  },

  // 3. Security & Fencing
  {
    name: "Aluminium burglar bars",
    slug: "burglar-bars",
    category: "Security & Fencing",
    shortDescription: "Corrosion-proof aluminium window security fixtures anchored with anti-tamper security fasteners.",
    startingPriceZar: 650,
    startingPriceDisplay: "From R650",
    priceUnit: "per window panel",
    popular: true,
  },
  {
    name: "Polycarbonate clear burglar bars",
    slug: "clear-burglar-bars",
    category: "Security & Fencing",
    shortDescription: "High-tensile optical clear polycarbonate security bars offering unobstructed views and high impact resistance.",
    startingPriceZar: 850,
    startingPriceDisplay: "From R850",
    priceUnit: "per opening fitted",
    popular: true,
  },
  {
    name: "Expandable trellis security gates",
    slug: "trellis-doors",
    category: "Security & Fencing",
    shortDescription: "Slam-lock retractable trellis steel barriers for sliding doors, passages, and patio security.",
    startingPriceZar: 3600,
    startingPriceDisplay: "From R3,600",
    priceUnit: "per door opening",
    popular: true,
  },
  {
    name: "Steel & aluminium security gates",
    slug: "security-gates",
    category: "Security & Fencing",
    shortDescription: "Custom welded steel and architectural aluminium security swing gates for front and back doors.",
    startingPriceZar: 2950,
    startingPriceDisplay: "From R2,950",
    priceUnit: "per fitted gate",
  },
  {
    name: "Custom driveway gates",
    slug: "driveway-gates",
    category: "Security & Fencing",
    shortDescription: "Automated sliding and swing driveway gates in slatted aluminium, laser-cut steel, and palisade styles.",
    startingPriceZar: 11800,
    startingPriceDisplay: "From R11,800",
    priceUnit: "per gate system",
    featured: true,
  },
  {
    name: "Gate motor installation & repairs",
    slug: "gate-motors",
    category: "Security & Fencing",
    shortDescription: "Centurion and ET Nice motor installations, battery backups, rack-and-pinion repairs, and remote coding.",
    startingPriceZar: 4800,
    startingPriceDisplay: "From R4,800",
    priceUnit: "per motor kit installed",
  },
  {
    name: "Steel palisade fencing",
    slug: "palisade-fencing",
    category: "Security & Fencing",
    shortDescription: "Hot-rolled hot-dip galvanized and painted 3-spike palisade fencing panels and posts for perimeter defense.",
    startingPriceZar: 420,
    startingPriceDisplay: "From R420",
    priceUnit: "per linear metre",
  },
  {
    name: "Wire mesh & Clearview-style fencing",
    slug: "mesh-fencing",
    category: "Security & Fencing",
    shortDescription: "Anti-climb, high-visibility welded mesh perimeter fencing with tamper-proof clamps and razor toppings.",
    startingPriceZar: 660,
    startingPriceDisplay: "From R660",
    priceUnit: "per linear metre",
    featured: true,
  },

  // 4. Steel & Custom Works
  {
    name: "Replace steel windows with aluminium",
    slug: "steel-to-aluminium-conversions",
    category: "Steel & Custom Works",
    shortDescription: "Turnkey removal of rusted steel frames and clean installation of powder-coated aluminium windows.",
    startingPriceZar: 2450,
    startingPriceDisplay: "From R2,450",
    priceUnit: "per window opening",
    popular: true,
  },
  {
    name: "Steel carports & shade structures",
    slug: "steel-carports",
    category: "Steel & Custom Works",
    shortDescription: "Engineered single, double, and 4-post steel shade carports with IBR or corrugated galvanised sheeting.",
    startingPriceZar: 9500,
    startingPriceDisplay: "From R9,500",
    priceUnit: "per single carport",
  },
  {
    name: "Steel staircases & balcony railings",
    slug: "steel-balustrades",
    category: "Steel & Custom Works",
    shortDescription: "Architectural mild steel balustrades with vertical pickets, horizontal wire ropes, and powder coating.",
    startingPriceZar: 1450,
    startingPriceDisplay: "From R1,450",
    priceUnit: "per linear metre",
  },
  {
    name: "Custom steel staircases",
    slug: "steel-staircases",
    category: "Steel & Custom Works",
    shortDescription: "Industrial spine beams, floating stringer stairs, spiral staircases, and fire escape steps.",
    startingPriceZar: 18000,
    startingPriceDisplay: "From R18,000",
    priceUnit: "per flight custom built",
  },
  {
    name: "Steel garden sheds & storage",
    slug: "steel-sheds",
    category: "Steel & Custom Works",
    shortDescription: "Heavy-duty custom steel frame garden storage sheds and utility lockers built to size.",
    startingPriceZar: 12500,
    startingPriceDisplay: "From R12,500",
    priceUnit: "per custom structure",
  },
  {
    name: "Custom steel welding services",
    slug: "custom-welding",
    category: "Steel & Custom Works",
    shortDescription: "MIG, TIG, and MMA welding on-site or in our workshop for brackets, structural lintels, and framework.",
    startingPriceZar: 850,
    startingPriceDisplay: "From R850",
    priceUnit: "per job / hour rate",
  },
  {
    name: "Steel gate & fence repairs",
    slug: "steel-repairs",
    category: "Steel & Custom Works",
    shortDescription: "Re-hinging sagging gates, rust cutting, weld repairs, post stabilization, and corrosion treatment.",
    startingPriceZar: 950,
    startingPriceDisplay: "From R950",
    priceUnit: "service call & repair",
  },
  {
    name: "Custom steel works & fabrication",
    slug: "steel-works",
    category: "Steel & Custom Works",
    shortDescription: "Bespoke architectural steel fabrication for residential, commercial, and industrial architectural briefs.",
    startingPriceZar: 1500,
    startingPriceDisplay: "From R1,500",
    priceUnit: "custom fabrication quote",
  },

  // 5. Maintenance & Repairs
  {
    name: "Seamless aluminium gutters",
    slug: "seamless-aluminium-gutters",
    category: "Maintenance & Repairs",
    shortDescription: "Continuous roll-formed seamless aluminium guttering extruded on-site with matching downpipes.",
    startingPriceZar: 140,
    startingPriceDisplay: "From R140",
    priceUnit: "per linear metre fitted",
    popular: true,
  },
  {
    name: "Aluminium fly & mosquito screens",
    slug: "aluminium-fly-screens",
    category: "Maintenance & Repairs",
    shortDescription: "Insect, fly, and mosquito mesh screens custom fabricated for sliding, casement, and sash openings.",
    startingPriceZar: 550,
    startingPriceDisplay: "From R550",
    priceUnit: "per window panel",
  },
  {
    name: "Aluminium door & window repairs",
    slug: "aluminium-repairs",
    category: "Maintenance & Repairs",
    shortDescription: "Replacement of worn handles, friction stays, corner brackets, draft seals, and door locks.",
    startingPriceZar: 450,
    startingPriceDisplay: "From R450",
    priceUnit: "per repair / stay replacement",
    popular: true,
  },
  {
    name: "Sliding door track & wheel repairs",
    slug: "sliding-door-repairs",
    category: "Maintenance & Repairs",
    shortDescription: "Heavy-duty stainless steel ball-bearing roller replacement, bottom track realignments, and lock servicing.",
    startingPriceZar: 750,
    startingPriceDisplay: "From R750",
    priceUnit: "per sliding door",
    popular: true,
  },
  {
    name: "Window & door glass replacement",
    slug: "glass-replacement",
    category: "Maintenance & Repairs",
    shortDescription: "Fast glazing replacement for cracked, shattered, or misted glass using SANS 10400 safety laminate.",
    startingPriceZar: 850,
    startingPriceDisplay: "From R850",
    priceUnit: "per glass panel",
    popular: true,
  }
];

export const allTaxonomyServices: ServiceTaxonomyItem[] =
  baseTaxonomyServices.map((service) => ({
    ...service,
    name: getServicePresentation(service.slug).pageTitle,
    menuLabel: getServicePresentation(service.slug).menuLabel,
  }));

export const taxonomyBySlug = new Map<string, ServiceTaxonomyItem>(
  allTaxonomyServices.map((srv) => [srv.slug, srv])
);

// Map common alias slugs back to official taxonomy items
const slugAliases: Record<string, string> = {
  "windows": "aluminium-windows",
  "sliding-doors": "aluminium-sliding-doors",
  "doors": "aluminium-sliding-doors",
  "stacking-doors": "aluminium-stacking-doors",
  "aluminium-folding-stacking-doors": "aluminium-stacking-doors",
  "shopfronts": "aluminium-shopfronts",
  "gutters": "seamless-aluminium-gutters",
  "patio-enclosures": "glass-patio-enclosures",
  "balustrades": "glass-balustrades",
  "showers": "frameless-shower-doors",
  "repairs": "aluminium-repairs",
  "clearview": "mesh-fencing",
  "clearview-fencing": "mesh-fencing",
  "trellis-security-gates": "trellis-doors",
  "trellis-doors-security-gates": "trellis-doors"
};

export function getTaxonomyServiceBySlug(slug: string): ServiceTaxonomyItem | undefined {
  const normalized = slug.toLowerCase().replace(/^\/services\//, "").replace(/^\//, "");
  const targetSlug = slugAliases[normalized] || normalized;
  return taxonomyBySlug.get(targetSlug);
}

export function getTaxonomyServicesByCategory(category: ServiceCategory): ServiceTaxonomyItem[] {
  return allTaxonomyServices.filter((s) => s.category === category);
}
