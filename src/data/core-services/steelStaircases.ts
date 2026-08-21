import { ServiceObject } from '../../types/service';

export const steelStaircasesService: ServiceObject = {
  id: "srv-steel-staircases",
  slug: "steel-staircases",
  serviceName: "Steel Staircases",
  tagline: "Custom Straight, Spiral & Industrial Steel Staircases",
  category: "Steel Structures",
  hero: {
    badge: "Custom Steel Staircases & Fire Escapes",
    headline: "Custom Steel Staircases",
    subheadline: "Upgrade your residential loft, outdoor deck, or commercial building with durable, space-saving steel staircases and custom spiral stairs.",
    primaryCtaText: "Get a Staircase Quote",
    primaryCtaLink: "/contact",
    secondaryCtaText: "View Staircase Styles",
    secondaryCtaLink: "#specs",
    heroImage: "/images/services/steel-staircases-hero.webp"
  },
  overview: {
    heading: "Engineered Steel Stairs for Homes, Lofts & Commercial Properties",
    paragraphs: [
      "Steel staircases offer exceptional load capacity, minimal floor footprint, and a striking modern industrial aesthetic that timber or concrete stairs cannot match.",
      "We design, fabricate, and install straight flight stairs, L-shape stairs with landing platforms, space-saving spiral staircases, and external fire escapes."
    ],
    specifications: [
      { label: "Staircase Styles", value: "Straight Flights, Spiral Stairs, Floating Central Spine, and External Fire Escapes" },
      { label: "Stringer Framework", value: "Heavy-Gauge Steel Channel, Box Spine Beams, or Laser-Cut Plate Stringers" },
      { label: "Tread Materials", value: "Non-Slip Checkered Steel Plate, Expanded Metal Grating, or Hardwood Timber Insets" },
      { label: "Finishes", value: "Powder Coated Charcoal/Black, Hot-Dip Galvanized for Outdoors, or Industrial Enamel" },
      { label: "Handrails & Balusters", value: "Integrated Steel Safety Handrails and Balustrades Compliant with Building Codes" },
      { label: "Load Capacity", value: "Engineered for Heavy Foot Traffic and Structural Rigidity" }
    ]
  },
  features: [
    {
      id: "feat-space-spiral",
      title: "Space-Saving Spiral Designs",
      description: "Spiral stairs take up a fraction of floor area, perfect for lofts, mezzanine floors, and roof access.",
      icon: "refresh-outline"
    },
    {
      id: "feat-non-slip",
      title: "Non-Slip Safety Treads",
      description: "Diamond plate steel and non-slip grating treads provide secure footing in wet outdoor conditions.",
      icon: "shield-checkmark-outline"
    },
    {
      id: "feat-heavy-duty",
      title: "Indestructible Strength",
      description: "Welded heavy-duty steel structure will never creak, bow, or rot over decades of daily use.",
      icon: "hardware-chip-outline"
    }
  ],
  process: {
    sectionHeading: "Our 4-Step Staircase Build & Installation",
    steps: [
      {
        stepNumber: 1,
        title: "Site Survey & Height Calculation",
        description: "We measure floor-to-floor heights, check headroom clearances, and calculate tread rise/run."
      },
      {
        stepNumber: 2,
        title: "Workshop Fabrication & Jigging",
        description: "Stringers and step treads are welded accurately to ensure consistent, comfortable step heights."
      },
      {
        stepNumber: 3,
        title: "On-Site Rigging & Bolting",
        description: "Our installers anchor the base to the ground slab and securely bolt top brackets to the upper floor."
      },
      {
        stepNumber: 4,
        title: "Balustrade Fitting & Final Inspection",
        description: "Handrails are fitted, welds inspected, and the staircase signed off for safe use."
      }
    ]
  },
  faqs: [
    {
      question: "Are spiral staircases easy to walk up and down?",
      answer: "Yes, our custom spiral staircases are designed with comfortable tread widths and continuous smooth outer handrails for safe, comfortable footing."
    },
    {
      question: "Can an external steel staircase be installed to access a second-floor flatlet?",
      answer: "Yes, outdoor external access stairs and fire escapes with weather-resistant galvanized steel are one of our most popular installations."
    }
  ],
  relatedServices: [
    {
      serviceId: "srv-steel-balustrades",
      title: "Steel Balustrades & Handrails",
      slug: "steel-balustrades",
      shortDescription: "Custom matching steel handrails.",
      thumbnailImage: "/images/services/balustrades-thumb.webp"
    },
    {
      serviceId: "srv-custom-welding",
      title: "Custom Welding & Steel Fabrication",
      slug: "custom-welding",
      shortDescription: "Custom steel beams and structural welding.",
      thumbnailImage: "/images/services/welding-thumb.webp"
    }
  ],
  seo: {
    titleTag: "Steel Staircases & Spiral Stairs | South Africa",
    metaDescription: "Custom steel staircases, spiral stairs, and external fire escapes. Solid welded steel construction, non-slip treads, and professional installation across South Africa.",
    keywords: ["steel staircases", "spiral stairs", "external steel stairs", "staircase builders SA"],
    canonicalUrl: "https://example.com/services/steel-staircases",
    openGraphImage: "https://example.com/images/og/steel-staircases.jpg"
  },
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Steel Staircases Installation",
    "provider": {
      "@type": "Organization",
      "name": "Steel Structures SA"
    }
  }
};
