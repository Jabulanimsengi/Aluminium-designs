import { ServiceObject } from '../../types/service';

export const aluminiumSkylightsService: ServiceObject = {
  id: "srv-aluminium-skylights",
  slug: "aluminium-skylights",
  serviceName: "Aluminium Skylights",
  tagline: "Custom Glass Skylights, Roof Windows & Architectural Sunrooms",
  category: "Windows & Glass",
  isCommercial: true,
  pricingGuide: {
    estimatedStartingPrice: "R4,500",
    priceUnit: "per custom unit / m²",
    priceFactors: [
      "Fixed vs opening / venting skylight mechanism",
      "Laminated safety glass, double glazing, or solar-tinted UV glass",
      "Custom roof pitch flashing & waterproofing requirements",
      "Frame size and powder coat finish (Charcoal, Black, Bronze, White)"
    ]
  },
  hero: {
    badge: "Custom Glass Skylights & Roof Windows",
    headline: "Custom Aluminium Skylights & Roof Glazing",
    subheadline: "Flood your interior spaces with natural daylight. Precision-manufactured waterproof aluminium skylights, glass pyramid roofs, and sunroom enclosures across Gauteng.",
    primaryCtaText: "Request Skylight Quote",
    primaryCtaLink: "/contact",
    secondaryCtaText: "View Skylight Styles",
    secondaryCtaLink: "#specs",
    heroImage: "/images/services/aluminium-skylights-hero.webp"
  },
  overview: {
    heading: "Custom Aluminium Skylights & Roof Windows for Homes and Buildings",
    paragraphs: [
      "Our custom aluminium skylights bring bright natural sunlight and architectural elegance into dark hallways, kitchens, living rooms, and commercial atriums.",
      "Engineered with 100% weather-sealed aluminium profiles, heavy-duty leak-proof flashing, and high-performance laminated safety glass or double glazing to prevent heat build-up while keeping rain and hail out."
    ],
    specifications: [
      { label: "Skylight Styles", value: "Flat Roof Lights, Pyramid Skylights, Ridge Skylights, Domes & Opening Roof Windows" },
      { label: "Frame Material", value: "Corrosion-Proof Heavy-Duty Architectural Aluminium" },
      { label: "Glass Types", value: "6.38mm-10.76mm Laminated Safety Glass, Double Glazed Low-E, Tinted Solar Control Glass" },
      { label: "Waterproofing", value: "Engineered Integrated Roof Flashing & UV-Resistant EPDM Gaskets" },
      { label: "Ventilation Options", value: "Fixed Sealed Glass or Manual / Electric Motorized Opening" },
      { label: "Compliance", value: "Compliant with SANS 10400-N Safety Glazing & SANS 204 Energy Efficiency Standards" }
    ]
  },
  features: [
    {
      id: "feat-natural-light",
      title: "Maximum Natural Light",
      description: "Delivers up to 300% more natural daylight than standard vertical wall windows.",
      icon: "sunny-outline"
    },
    {
      id: "feat-waterproof",
      title: "100% Leak-Proof Guarantee",
      description: "Custom-formed aluminium flashing and multi-tier silicone seals withstand extreme highveld thunderstorms.",
      icon: "water-outline"
    },
    {
      id: "feat-thermal-control",
      title: "Heat & UV Blocking",
      description: "Solar-reflective glass blocks harsh ultraviolet rays and prevents excessive greenhouse overheating.",
      icon: "shield-checkmark-outline"
    }
  ],
  process: {
    sectionHeading: "Our 4-Step Skylight Installation Process",
    steps: [
      {
        stepNumber: 1,
        title: "Roof Inspection & Measurement",
        description: "We evaluate your roof structure, pitch, tile or corrugated sheeting type, and take exact opening measurements."
      },
      {
        stepNumber: 2,
        title: "Custom Workshop Fabrication",
        description: "Aluminium frames are welded, powder-coated, and fitted with impact-resistant safety glass."
      },
      {
        stepNumber: 3,
        title: "Precision Roof Fitting & Flashing",
        description: "Our certified roof installers securely anchor the frame and seal waterproof flashing directly into your roofline."
      },
      {
        stepNumber: 4,
        title: "Water Testing & Warranty Sign-Off",
        description: "We conduct a thorough water hose test to verify total seal integrity and issue your workmanship warranty."
      }
    ]
  },
  faqs: [
    {
      question: "Do aluminium skylights leak during heavy South African rains?",
      answer: "No. When installed professionally, our custom aluminium skylights utilize engineered roof flashings tailored specifically to your roof material (IBR, corrugated, concrete tile, or flat slab) with high-grade UV-stable waterproofing."
    },
    {
      question: "Will a glass skylight make the room too hot in summer?",
      answer: "We recommend Low-E solar shield or tinted double glazed safety glass that reflects infrared solar heat while allowing natural visible daylight to pass through."
    },
    {
      question: "Can skylights be installed on flat concrete roofs?",
      answer: "Yes, we construct custom angled aluminium upstands to ensure proper rainwater run-off and drainage on flat roofs."
    }
  ],
  relatedServices: [
    {
      serviceId: "srv-patio-enclosures",
      title: "Patio Enclosures",
      slug: "patio-enclosures",
      shortDescription: "Glass patio enclosures and custom sunrooms.",
      thumbnailImage: "/images/services/patio-thumb.webp"
    },
    {
      serviceId: "srv-aluminium-windows",
      title: "Aluminium Windows",
      slug: "aluminium-windows",
      shortDescription: "Custom energy-saving aluminium windows.",
      thumbnailImage: "/images/services/windows-thumb.webp"
    }
  ],
  seo: {
    titleTag: "Custom Aluminium Skylights & Roof Windows | Gauteng & SA",
    metaDescription: "Custom aluminium skylights, glass pyramid roofs, and sunroom enclosures. Leak-proof flashing, solar-shield safety glass, and expert installation across Gauteng.",
    keywords: [
      "aluminium skylights",
      "skylights gauteng",
      "skylights pretoria",
      "skylights johannesburg",
      "roof windows",
      "custom glass skylight prices",
      "sunroom enclosures"
    ],
    canonicalUrl: "https://aluminiumandsteelsa.co.za/services/aluminium-skylights",
    openGraphImage: "https://aluminiumandsteelsa.co.za/images/og/aluminium-skylights.jpg"
  },
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Aluminium Skylights Installation",
    "provider": {
      "@type": "Organization",
      "name": "Aluminium Designs SA"
    }
  }
};
