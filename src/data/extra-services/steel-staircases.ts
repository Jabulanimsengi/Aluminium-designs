import type { Service } from "@/data/services";
import type { ServicePageContent } from "@/data/service-pages";
import { siteUrl } from "@/lib/site";

export const service: Service = {
  id: "steel-staircases",
  title: "Steel Staircases",
  slug: "/services/steel-staircases",
  shortDescription: "Custom straight, spiral & industrial steel staircases for homes and businesses.",
  longDescription:
    "Upgrade your residential loft, outdoor deck, or commercial building with durable, space-saving steel staircases and custom spiral stairs. Engineered from heavy-gauge steel channel and box spine beams with non-slip treads, and finished with powder coating or hot-dip galvanising.",
  features: [
    "Straight, spiral, floating & external fire escape designs",
    "Non-slip checkered plate or grating treads",
    "Heavy-gauge steel stringers that never creak or bow",
    "Integrated safety handrails and balustrades",
    "Space-saving spiral stairs for lofts and mezzanines",
    "Powder coated, galvanised, or industrial enamel finishes",
  ],
  imagePath: "/images/glass_balustrade.png",
  iconName: "Layers",
  featured: true,
};

export const page: ServicePageContent = {
  id: "steel-staircases",
  slug: "steel-staircases",
  fullPageUrl: `${siteUrl}/services/steel-staircases`,
  seo: {
    titleTag: "Steel Staircases & Spiral Stairs | Gauteng",
    metaDescription:
      "Custom steel staircases, spiral stairs, and external fire escapes. Solid welded steel construction, non-slip treads, and professional installation across Gauteng.",
    keywords: [
      "steel staircases",
      "spiral stairs",
      "external steel stairs",
      "staircase builders",
      "steel stairs gauteng",
    ],
    canonicalUrl: `${siteUrl}/services/steel-staircases`,
    openGraphImage: `${siteUrl}/images/glass_balustrade.png`,
  },
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Steel Staircases Installation",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Aluminium Designs",
    },
  },
  hero: {
    headline: "Custom Steel Staircases",
    subheadline:
      "Upgrade your residential loft, outdoor deck, or commercial building with durable, space-saving steel staircases and custom spiral stairs.",
    badgeText: "Custom Steel Staircases & Fire Escapes",
    primaryCtaText: "Get a Staircase Quote",
    secondaryCtaText: "View Staircase Styles",
  },
  overview: {
    heading: "Engineered Steel Stairs for Homes, Lofts & Commercial Properties",
    paragraphs: [
      "Steel staircases offer exceptional load capacity, minimal floor footprint, and a striking modern industrial aesthetic that timber or concrete stairs cannot match.",
      "We design, fabricate, and install straight flight stairs, L-shape stairs with landing platforms, space-saving spiral staircases, and external fire escapes.",
    ],
    keyFeaturesNotice:
      "All staircases include integrated steel safety handrails and balustrades compliant with building codes.",
  },
  benefits: {
    title: "Why Choose Our Steel Staircases",
    items: [
      {
        icon: "RefreshCw",
        title: "Space-Saving Spiral Designs",
        description:
          "Spiral stairs take up a fraction of the floor area, perfect for lofts, mezzanine floors, and roof access.",
      },
      {
        icon: "ShieldCheck",
        title: "Non-Slip Safety Treads",
        description:
          "Diamond plate steel and non-slip grating treads provide secure footing in wet outdoor conditions.",
      },
      {
        icon: "Wrench",
        title: "Indestructible Strength",
        description:
          "Welded heavy-duty steel structure will never creak, bow, or rot over decades of daily use.",
      },
      {
        icon: "Building",
        title: "Built for Commercial Loads",
        description:
          "Engineered for heavy foot traffic and structural rigidity in commercial and industrial settings.",
      },
    ],
  },
  productTypes: {
    title: "Choose the Right Staircase for Your Space",
    description:
      "Every site has different floor heights and space constraints. We manufacture all major staircase configurations.",
    items: [
      {
        name: "Straight Flight Stairs",
        tagline: "Simple, strong, and efficient",
        description:
          "A single straight run ideal for standard floor-to-floor heights.",
        idealFor: "Lofts, mezzanines, and single-level changes.",
      },
      {
        name: "Spiral Staircases",
        tagline: "Compact access with a modern twist",
        description:
          "A rotating stair that fits into tight corners and small floor plates.",
        idealFor: "Lofts, rooftop access, and space-constrained interiors.",
      },
      {
        name: "Floating Central Spine Stairs",
        tagline: "Minimalist, architectural statement",
        description:
          "Treads cantilever off a central steel spine for a clean, open look.",
        idealFor: "Modern homes and feature staircases.",
      },
      {
        name: "External Fire Escapes",
        tagline: "Code-compliant emergency access",
        description:
          "Galvanised external stairs with non-slip treads and safety handrails.",
        idealFor: "Commercial buildings, flats, and second-storey access.",
      },
    ],
  },
  glazingOptions: {
    title: "Material & Finish Options",
    description:
      "The material and finish you choose determine durability, slip resistance, and overall appearance.",
    options: [
      {
        name: "Powder Coated Steel",
        description:
          "Durable Charcoal or Black finish for indoor and sheltered staircases.",
      },
      {
        name: "Hot-Dip Galvanised Steel",
        description:
          "Long-lasting corrosion protection for outdoor and coastal stairs.",
      },
      {
        name: "Checkered Plate & Grating Treads",
        description:
          "Non-slip steel treads for wet or industrial environments.",
      },
    ],
  },
  specifications: {
    title: "Technical Specifications & Hardware",
    items: [
      { label: "Staircase Styles", value: "Straight flights, spiral stairs, floating central spine, and external fire escapes" },
      { label: "Stringer Framework", value: "Heavy-gauge steel channel, box spine beams, or laser-cut plate stringers" },
      { label: "Tread Materials", value: "Non-slip checkered steel plate, expanded metal grating, or hardwood timber insets" },
      { label: "Finishes", value: "Powder coated Charcoal/Black, hot-dip galvanised for outdoors, or industrial enamel" },
      { label: "Handrails & Balusters", value: "Integrated steel safety handrails and balustrades compliant with building codes" },
      { label: "Load Capacity", value: "Engineered for heavy foot traffic and structural rigidity" },
    ],
  },
  installationProcess: {
    title: "Our Simple 4-Step Staircase Build & Installation Process",
    steps: [
      {
        stepNumber: "01",
        title: "Site Survey & Height Calculation",
        description:
          "We measure floor-to-floor heights, check headroom clearances, and calculate tread rise and run.",
      },
      {
        stepNumber: "02",
        title: "Workshop Fabrication & Jigging",
        description:
          "Stringers and step treads are welded accurately to ensure consistent, comfortable step heights.",
      },
      {
        stepNumber: "03",
        title: "On-Site Rigging & Bolting",
        description:
          "Our installers anchor the base to the ground slab and securely bolt top brackets to the upper floor.",
      },
      {
        stepNumber: "04",
        title: "Balustrade Fitting & Final Inspection",
        description:
          "Handrails are fitted, welds inspected, and the staircase signed off for safe use.",
      },
    ],
  },
  reviews: [
    {
      authorName: "Kagiso M.",
      location: "Homeowner, Sandton",
      rating: 5,
      date: "2025-11-15",
      comment:
        "The spiral staircase to our loft is a real feature piece. It's solid, quiet, and the space it saved in our lounge is remarkable.",
    },
    {
      authorName: "Riaan B.",
      location: "Business Owner, Germiston",
      rating: 5,
      date: "2025-12-09",
      comment:
        "We had a galvanised external fire escape installed at our warehouse. Neat work, non-slip treads, and it passed the building inspection first time.",
    },
  ],
  faqs: [
    {
      question: "Are spiral staircases easy to walk up and down?",
      answer:
        "Yes. Our custom spiral staircases are designed with comfortable tread widths and continuous smooth outer handrails for safe, comfortable footing.",
    },
    {
      question: "Can an external steel staircase be installed to access a second-floor flatlet?",
      answer:
        "Yes. Outdoor external access stairs and fire escapes with weather-resistant galvanised steel are one of our most popular installations.",
    },
    {
      question: "Will a steel staircase creak or sag over time?",
      answer:
        "No. Our staircases are welded from heavy-gauge steel and engineered for structural rigidity, so they remain silent and stable for decades.",
    },
    {
      question: "Do you supply matching handrails and balustrades?",
      answer:
        "Yes. Every staircase includes integrated steel handrails and balustrades, and we can match the finish to existing balustrades or gates on your property.",
    },
  ],
};
