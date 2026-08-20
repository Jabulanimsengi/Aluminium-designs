import type { Service } from "@/data/services";
import type { ServicePageContent } from "@/data/service-pages";
import { siteUrl } from "@/lib/site";

export const service: Service = {
  id: "steel-sheds",
  title: "Steel Sheds",
  slug: "/services/steel-sheds",
  shortDescription: "Secure, weatherproof metal garden sheds, tool rooms & workshops.",
  longDescription:
    "Clear clutter from your home and protect garden tools, generators, and equipment with heavy-duty weatherproof steel sheds and lockable storage units. Manufactured from galvanised steel framing and Chromadek or IBR color sheeting, with solid lockable steel doors and waterproof pitched roofs.",
  features: [
    "100% immune to wood rot, termites, and pests",
    "Non-combustible steel construction for fire safety",
    "Padlockable steel doors with reinforced hasp-and-staple locks",
    "Interlocking panels and sealed ridge caps keep contents dry",
    "Chromadek or galvanised IBR wall and roof cladding",
    "Standard and custom sizes from 2m x 2m to 3m x 6m",
  ],
  imagePath: "/images/patio_enclosure.png",
  iconName: "Home",
  featured: true,
};

export const page: ServicePageContent = {
  id: "steel-sheds",
  slug: "steel-sheds",
  fullPageUrl: `${siteUrl}/services/steel-sheds`,
  seo: {
    titleTag: "Steel Sheds, Tool Rooms & Garden Storage | Gauteng",
    metaDescription:
      "Custom steel sheds and garden storage units. Fireproof, termite-proof Chromadek metal tool sheds with professional installation across Gauteng.",
    keywords: [
      "steel sheds",
      "metal garden sheds",
      "steel tool rooms",
      "chromadek sheds",
      "garden storage gauteng",
    ],
    canonicalUrl: `${siteUrl}/services/steel-sheds`,
    openGraphImage: `${siteUrl}/images/patio_enclosure.png`,
  },
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Steel Sheds Installation",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Aluminium Designs",
    },
  },
  hero: {
    headline: "Custom Steel Sheds & Storage Units",
    subheadline:
      "Clear clutter from your home and protect garden tools, generators, and equipment with heavy-duty weatherproof steel sheds and lockable storage units.",
    badgeText: "Custom Metal Sheds & Outdoor Storage",
    primaryCtaText: "Get a Steel Shed Quote",
    secondaryCtaText: "View Shed Sizes",
  },
  overview: {
    heading: "Durable Steel Outdoor Storage Rooms & Tool Sheds",
    paragraphs: [
      "Wooden Wendy houses can rot, attract termites, and require continuous sealing, while plastic sheds can become brittle in intense sun. Our all-steel sheds offer a maintenance-free, fireproof, and ultra-secure alternative.",
      "Manufactured from galvanised steel framing and Chromadek or IBR color sheeting, with solid lockable steel doors and waterproof pitched roofs.",
    ],
    keyFeaturesNotice:
      "All sheds include solid lockable steel doors, sealed ridge caps, and optional louvred windows or roof ventilation.",
  },
  benefits: {
    title: "Why Choose Our Steel Sheds",
    items: [
      {
        icon: "ShieldCheck",
        title: "Rot & Termite Proof",
        description:
          "100% immune to wood rot, termites, and pests, and non-combustible for fire safety.",
      },
      {
        icon: "Lock",
        title: "Padlockable Security",
        description:
          "Steel doors with reinforced hasp-and-staple locks keep tools, mowers, and generators safe.",
      },
      {
        icon: "Droplets",
        title: "Waterproof & Windproof",
        description:
          "Interlocking steel panels and sealed ridge caps keep your stored belongings completely dry.",
      },
      {
        icon: "Flame",
        title: "Fireproof & Non-Combustible",
        description:
          "All-steel construction will not burn, protecting your tools and equipment from fire spread.",
      },
    ],
  },
  productTypes: {
    title: "Choose the Right Steel Shed Size & Style",
    description:
      "From compact tool rooms to large workshops, we build sheds to suit your storage needs.",
    items: [
      {
        name: "Small Tool Shed (2m x 2m)",
        tagline: "Compact storage for garden essentials",
        description:
          "A small lockable steel shed for spades, rakes, and garden chemicals.",
        idealFor: "Small gardens and limited side-yard spaces.",
      },
      {
        name: "Medium Storage Shed (3m x 3m)",
        tagline: "Room for mowers and bikes",
        description:
          "A spacious shed with single or double doors for larger equipment.",
        idealFor: "Family homes needing general garden storage.",
      },
      {
        name: "Large Workshop (3m x 6m)",
        tagline: "A full lockable workroom",
        description:
          "A generous steel unit big enough for a workbench, tools, and machinery.",
        idealFor: "DIY enthusiasts and home-based businesses.",
      },
      {
        name: "Custom Dimensions",
        tagline: "Built to your exact footprint",
        description:
          "Bespoke sizes and layouts to fit awkward or unusually shaped spaces.",
        idealFor: "Generators, pump rooms, and specialised storage needs.",
      },
    ],
  },
  glazingOptions: {
    title: "Material & Finish Options",
    description:
      "The cladding and colour you choose determine durability, heat reflection, and appearance.",
    options: [
      {
        name: "Chromadek Color Sheeting",
        description:
          "Pre-painted steel cladding in a range of colours that resists corrosion.",
      },
      {
        name: "Galvanised IBR Steel Sheeting",
        description:
          "Strong, economical corrugated sheeting for walls and roofing.",
      },
      {
        name: "Insulated Roof Blankets",
        description:
          "Optional insulation that reduces internal heat build-up in summer.",
      },
    ],
  },
  specifications: {
    title: "Technical Specifications & Hardware",
    items: [
      { label: "Standard Sizes", value: "Small (2m x 2m), Medium (3m x 3m), Large (3m x 6m), and custom dimensions" },
      { label: "Steel Framework", value: "Galvanised steel box tubing and heavy-duty angle base frame" },
      { label: "Wall & Roof Cladding", value: "Corrosion-resistant Chromadek or galvanised IBR steel sheeting" },
      { label: "Color Options", value: "Charcoal, Dark Dolphin Grey, Pure White, Olive Green, or Beige" },
      { label: "Doors & Windows", value: "Padlockable single/double steel doors with optional louvred windows" },
      { label: "Floor Options", value: "Directly anchored to concrete slab or raised marine plywood/steel floor" },
    ],
  },
  installationProcess: {
    title: "Our Simple 4-Step Steel Shed Installation Process",
    steps: [
      {
        stepNumber: "01",
        title: "Site Check & Size Selection",
        description:
          "We help you choose the best shed dimensions and confirm ground level or concrete slab.",
      },
      {
        stepNumber: "02",
        title: "Prefabricated Steel Construction",
        description:
          "Wall frames, roof trusses, and door panels are built and quality checked in our workshop.",
      },
      {
        stepNumber: "03",
        title: "Fast On-Site Erection",
        description:
          "Our installers bolt the steel base, erect wall sections, fit roof sheets, and hang doors.",
      },
      {
        stepNumber: "04",
        title: "Weather Flashing & Handover",
        description:
          "We seal ridge caps, test door locks, and provide your product guarantee.",
      },
    ],
  },
  reviews: [
    {
      authorName: "Thandiwe N.",
      location: "Homeowner, Pretoria",
      rating: 5,
      date: "2025-10-30",
      comment:
        "Our steel tool room replaced an old wooden Wendy house that was falling apart. It's dry, secure, and looks so much neater in the garden.",
    },
    {
      authorName: "Jaco D.",
      location: "Homeowner, Benoni",
      rating: 5,
      date: "2025-11-21",
      comment:
        "We store our generator and ride-on mower in the new shed. The double doors and padlock hardware feel really solid, and installation was done in a day.",
    },
  ],
  faqs: [
    {
      question: "Do I need a concrete slab before installing a steel shed?",
      answer:
        "A level concrete slab is recommended for best stability, but we can also supply raised steel sub-floors for placement directly on compacted soil or pavers.",
    },
    {
      question: "Are steel sheds hot inside during summer?",
      answer:
        "We can install roof insulation blankets, whirlybird roof vents, and louvred windows to keep airflow moving and reduce internal heat.",
    },
    {
      question: "Will a steel shed rust?",
      answer:
        "No. The galvanised steel framing and Chromadek or IBR cladding are corrosion-resistant, so the shed stands up to Gauteng's Highveld weather for many years.",
    },
    {
      question: "Can I install the shed myself?",
      answer:
        "For safety and a watertight result we recommend our professional installation team, who erect the prefabricated sections quickly and seal all joints.",
    },
  ],
};
