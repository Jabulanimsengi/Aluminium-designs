import { ServiceObject } from '../../types/service';

export const steelShedsService: ServiceObject = {
  id: "srv-steel-sheds",
  slug: "steel-sheds",
  serviceName: "Steel Sheds",
  tagline: "Secure, Weatherproof Metal Garden Sheds, Tool Rooms & Workshops",
  category: "Steel Structures",
  hero: {
    badge: "Custom Metal Sheds & Outdoor Storage",
    headline: "Custom Steel Sheds & Storage Units",
    subheadline: "Clear clutter from your home and protect garden tools, generators, and equipment with heavy-duty weatherproof steel sheds and lockable storage units.",
    primaryCtaText: "Get a Steel Shed Quote",
    primaryCtaLink: "/contact",
    secondaryCtaText: "View Shed Sizes",
    secondaryCtaLink: "#specs",
    heroImage: "/images/patio_enclosure.png"
  },
  overview: {
    heading: "Durable Steel Outdoor Storage Rooms & Tool Sheds",
    paragraphs: [
      "Wooden Wendy houses can rot, attract termites, and require continuous sealing, while plastic sheds can become brittle in intense sun. Our all-steel sheds offer a maintenance-free, fireproof, and ultra-secure alternative.",
      "Manufactured from galvanized steel framing and Chromadek or IBR color sheeting, with solid lockable steel doors and waterproof pitched roofs."
    ],
    specifications: [
      { label: "Standard Sizes", value: "Small (2m x 2m), Medium (3m x 3m), Large (3m x 6m), and Custom Dimensions" },
      { label: "Steel Framework", value: "Galvanized Steel Box Tubing and Heavy-Duty Angle Base Frame" },
      { label: "Wall & Roof Cladding", value: "Corrosion-Resistant Chromadek or Galvanized IBR Steel Sheeting" },
      { label: "Color Options", value: "Charcoal, Dark Dolphin Grey, Pure White, Olive Green, or Beige" },
      { label: "Doors & Windows", value: "Padlockable Single/Double Steel Doors with Optional Louvred Windows" },
      { label: "Floor Options", value: "Directly Anchored to Concrete Slab or Raised Marine Plywood/Steel Floor" }
    ]
  },
  features: [
    {
      id: "feat-fireproof-rotproof",
      title: "Rot & Termite Proof",
      description: "100% immune to wood rot, termites, and pests, and non-combustible for fire safety.",
      icon: "shield-checkmark-outline"
    },
    {
      id: "feat-secure-storage",
      title: "Padlockable Security",
      description: "Steel doors with reinforced hasp-and-staple locks keep tools, mowers, and generators safe.",
      icon: "lock-closed-outline"
    },
    {
      id: "feat-weatherproof",
      title: "Waterproof & Windproof",
      description: "Interlocking steel panels and sealed ridge caps keep your stored belongings completely dry.",
      icon: "rainy-outline"
    }
  ],
  process: {
    sectionHeading: "4-Step Steel Shed Installation",
    steps: [
      {
        stepNumber: 1,
        title: "Site Check & Size Selection",
        description: "We help you choose the best shed dimensions and confirm ground level or concrete slab."
      },
      {
        stepNumber: 2,
        title: "Prefabricated Steel Construction",
        description: "Wall frames, roof trusses, and door panels are built and quality checked in our workshop."
      },
      {
        stepNumber: 3,
        title: "Fast On-Site Erection",
        description: "Our installers bolt the steel base, erect wall sections, fit roof sheets, and hang doors."
      },
      {
        stepNumber: 4,
        title: "Weather Flashing & Handover",
        description: "We seal ridge caps, test door locks, and provide your product guarantee."
      }
    ]
  },
  faqs: [
    {
      question: "Do I need a concrete slab before installing a steel shed?",
      answer: "A level concrete slab is recommended for best stability, but we can also supply raised steel sub-floors for placement directly on compacted soil or pavers."
    },
    {
      question: "Are steel sheds hot inside during summer?",
      answer: "We can install roof insulation blankets, whirlybird roof vents, and louvred windows to keep airflow moving and reduce internal heat."
    }
  ],
  relatedServices: [
    {
      serviceId: "srv-steel-carports",
      title: "Steel Carports & Shadeports",
      slug: "steel-carports",
      shortDescription: "Custom vehicle shade and hail protection.",
      thumbnailImage: "/images/patio_enclosure.png"
    },
    {
      serviceId: "srv-custom-welding",
      title: "Custom Welding & Steel Fabrication",
      slug: "custom-welding",
      shortDescription: "Custom steel welding and metal fabrication.",
      thumbnailImage: "/images/slatted_gate.png"
    }
  ],
  seo: {
    titleTag: "Steel Sheds, Tool Rooms & Wendy House Alternatives | South Africa",
    metaDescription: "Custom steel sheds and garden storage units. Fireproof, termite-proof Chromadek metal tool sheds with professional installation across South Africa.",
    keywords: ["steel sheds", "metal garden sheds", "steel tool rooms", "Chromadek sheds SA"],
    canonicalUrl: "https://example.com/services/steel-sheds",
    openGraphImage: "https://example.com/images/og/steel-sheds.jpg"
  },
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Steel Sheds Installation",
    "provider": {
      "@type": "Organization",
      "name": "Steel Structures SA"
    }
  }
};
