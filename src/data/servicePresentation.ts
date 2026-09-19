export interface ServicePresentation {
  menuLabel: string;
  pageTitle: string;
  aliases: string[];
}

/**
 * Human-facing service names are deliberately separate from permanent slugs.
 * Updating a label must never create a new URL or change a canonical.
 */
export const servicePresentationBySlug: Record<string, ServicePresentation> = {
  "aluminium-windows": {
    menuLabel: "Aluminium Windows",
    pageTitle: "Custom Aluminium Windows",
    aliases: ["aluminium window frames"],
  },
  "aluminium-sliding-windows": {
    menuLabel: "Aluminium Sliding Windows",
    pageTitle: "Aluminium Sliding Windows",
    aliases: ["sliding aluminium windows"],
  },
  "aluminium-sliding-doors": {
    menuLabel: "Aluminium Sliding Doors",
    pageTitle: "Aluminium Sliding Patio Doors",
    aliases: ["patio sliding doors", "sliding aluminium doors"],
  },
  "aluminium-stacking-doors": {
    menuLabel: "Folding & Stacking Doors",
    pageTitle: "Aluminium Folding & Stacking Doors",
    aliases: ["stacker doors", "folding aluminium doors"],
  },
  "aluminium-front-doors": {
    menuLabel: "Entrance & Front Doors",
    pageTitle: "Aluminium Entrance & Front Doors",
    aliases: ["aluminium entrance doors", "aluminium pivot doors"],
  },
  "aluminium-french-doors": {
    menuLabel: "Aluminium French Doors",
    pageTitle: "Aluminium French Doors",
    aliases: ["aluminium double doors"],
  },
  "aluminium-garage-doors": {
    menuLabel: "Aluminium Garage Doors",
    pageTitle: "Aluminium Garage Doors",
    aliases: ["sectional aluminium garage doors"],
  },
  "aluminium-shopfronts": {
    menuLabel: "Commercial Shopfronts",
    pageTitle: "Commercial Aluminium Shopfronts",
    aliases: ["glass shopfronts", "aluminium storefronts"],
  },
  "double-glazed-windows": {
    menuLabel: "Double-Glazed Windows",
    pageTitle: "Double-Glazed & Acoustic Windows",
    aliases: ["sound-reducing windows", "acoustic glazing"],
  },
  "glass-balustrades": {
    menuLabel: "Glass Balustrades",
    pageTitle: "Glass Balustrades for Stairs & Balconies",
    aliases: ["glass railings", "frameless glass balustrades"],
  },
  "glass-patio-enclosures": {
    menuLabel: "Glass Patio Enclosures",
    pageTitle: "Glass Patio & Sunroom Enclosures",
    aliases: ["patio glass enclosures", "sunroom enclosures"],
  },
  "aluminium-skylights": {
    menuLabel: "Aluminium Skylights",
    pageTitle: "Aluminium Skylights & Roof Windows",
    aliases: ["glass roof windows"],
  },
  "aluminium-awnings": {
    menuLabel: "Aluminium Awnings",
    pageTitle: "Aluminium Awnings & Window Canopies",
    aliases: ["door canopies", "window canopies"],
  },
  "aluminium-pergolas": {
    menuLabel: "Aluminium Pergolas",
    pageTitle: "Aluminium Pergolas & Patio Covers",
    aliases: ["aluminium patio covers"],
  },
  "office-glass-partitions": {
    menuLabel: "Office Glass Partitions",
    pageTitle: "Office Glass Walls & Partitions",
    aliases: ["glass office walls", "boardroom glass partitions"],
  },
  "frameless-shower-doors": {
    menuLabel: "Frameless Shower Doors",
    pageTitle: "Frameless Glass Shower Doors",
    aliases: ["frameless shower enclosures"],
  },
  "custom-steam-rooms": {
    menuLabel: "Steam Rooms & Saunas",
    pageTitle: "Custom Glass Steam Rooms & Saunas",
    aliases: ["glass steam room enclosures"],
  },
  "burglar-bars": {
    menuLabel: "Steel Burglar Bars",
    pageTitle: "Custom Steel Burglar Bars",
    aliases: ["window security bars", "steel window bars"],
  },
  "clear-burglar-bars": {
    menuLabel: "Clear Burglar Bars",
    pageTitle: "Clear Polycarbonate Burglar Bars",
    aliases: ["transparent burglar bars", "clear security bars"],
  },
  "trellis-doors": {
    menuLabel: "Trellis Security Gates",
    pageTitle: "Retractable Trellis Security Gates",
    aliases: ["trellis doors", "slam-lock gates"],
  },
  "security-gates": {
    menuLabel: "Security Gates",
    pageTitle: "Steel & Aluminium Security Gates",
    aliases: ["burglar gates", "swing security gates"],
  },
  "driveway-gates": {
    menuLabel: "Driveway Gates",
    pageTitle: "Custom Sliding & Swing Driveway Gates",
    aliases: ["automated driveway gates"],
  },
  "gate-motors": {
    menuLabel: "Gate Motors",
    pageTitle: "Gate Motor Installation & Repairs",
    aliases: ["electric gate motor repairs", "gate automation"],
  },
  "palisade-fencing": {
    menuLabel: "Palisade Fencing",
    pageTitle: "Steel Palisade Fencing",
    aliases: ["security palisade fencing"],
  },
  "mesh-fencing": {
    menuLabel: "Anti-Climb Mesh Fencing",
    pageTitle: "Anti-Climb Security Mesh Fencing",
    aliases: ["high-visibility mesh fencing", "clear-view style fencing"],
  },
  "steel-to-aluminium-conversions": {
    menuLabel: "Steel Window Replacement",
    pageTitle: "Steel Window to Aluminium Window Replacement",
    aliases: ["steel to aluminium conversion", "replace steel windows"],
  },
  "steel-carports": {
    menuLabel: "Steel Carports",
    pageTitle: "Steel Carports & Shade Structures",
    aliases: ["steel shade ports"],
  },
  "steel-balustrades": {
    menuLabel: "Steel Balustrades",
    pageTitle: "Steel Balustrades & Railings",
    aliases: ["steel balcony railings", "stair railings"],
  },
  "steel-staircases": {
    menuLabel: "Steel Staircases",
    pageTitle: "Custom Steel Staircases",
    aliases: ["metal staircases", "steel stairs"],
  },
  "steel-sheds": {
    menuLabel: "Steel Sheds",
    pageTitle: "Steel Garden Sheds & Storage",
    aliases: ["metal storage sheds"],
  },
  "custom-welding": {
    menuLabel: "On-Site Welding",
    pageTitle: "On-Site & Custom Welding",
    aliases: ["mobile welder", "custom steel welding"],
  },
  "steel-repairs": {
    menuLabel: "Steel Gate & Fence Repairs",
    pageTitle: "Steel Gate & Fence Repairs",
    aliases: ["gate welding repairs", "palisade fence repairs"],
  },
  "steel-works": {
    menuLabel: "Steel Fabrication",
    pageTitle: "Custom Steel Fabrication",
    aliases: ["custom steel works", "metal fabrication"],
  },
  "seamless-aluminium-gutters": {
    menuLabel: "Seamless Aluminium Gutters",
    pageTitle: "Seamless Aluminium Gutters",
    aliases: ["continuous aluminium gutters"],
  },
  "aluminium-fly-screens": {
    menuLabel: "Fly & Mosquito Screens",
    pageTitle: "Aluminium Fly & Mosquito Screens",
    aliases: ["insect screens", "window fly screens"],
  },
  "aluminium-repairs": {
    menuLabel: "Door & Window Repairs",
    pageTitle: "Aluminium Door & Window Repairs",
    aliases: ["aluminium frame repairs", "window hardware repairs"],
  },
  "sliding-door-repairs": {
    menuLabel: "Sliding Door Repairs",
    pageTitle: "Sliding Door Track & Roller Repairs",
    aliases: ["patio door wheel repairs", "sliding door track repairs"],
  },
  "glass-replacement": {
    menuLabel: "Glass Replacement",
    pageTitle: "Window & Door Glass Replacement",
    aliases: ["broken window glass replacement", "door glass replacement"],
  },
};

export function getServicePresentation(slug: string): ServicePresentation {
  return (
    servicePresentationBySlug[slug] || {
      menuLabel: slug,
      pageTitle: slug,
      aliases: [],
    }
  );
}
