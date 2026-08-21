import { ServiceObject } from '../../types/service';

export const glassBalustradesService: ServiceObject = {
  id: "srv-glass-balustrades",
  slug: "glass-balustrades",
  serviceName: "Glass Balustrades",
  tagline: "Clear, Elegant, and Safe Glass Railings for Balconies, Stairs & Pools",
  category: "Outdoor & Enclosures",
  hero: {
    badge: "Frameless & Semi-Frameless Glass Railings",
    headline: "Custom Glass Balustrades",
    subheadline: "Enjoy unobstructed panoramic views while ensuring total safety for balconies, staircases, decking, and swimming pool enclosures.",
    primaryCtaText: "Get Balustrade Quote",
    primaryCtaLink: "/contact",
    secondaryCtaText: "View Balustrade Styles",
    secondaryCtaLink: "#specs",
    heroImage: "/images/services/glass-balustrades-hero.webp"
  },
  overview: {
    heading: "Sleek Glass Railings for Homes & Commercial Buildings",
    paragraphs: [
      "Glass balustrades add a luxurious, open feel to your property by replacing bulky metal railings with crystal-clear safety glass.",
      "Manufactured with heavy-duty toughened laminated safety glass and rustproof aluminium or stainless steel base spigots, our balustrades meet all safety requirements without blocking your views."
    ],
    specifications: [
      { label: "Balustrade Types", value: "Frameless Base Channel, Stainless Spigots, or Aluminium Post Systems" },
      { label: "Glass Specification", value: "10mm to 15mm Toughened & Laminated Safety Glass" },
      { label: "Handrail Options", value: "Top Slotted Aluminium Rail, Stainless Tube, or Minimalist Frameless" },
      { label: "Finish Options", value: "Matte Black, Charcoal, Pure White, or Polished/Brushed Stainless" },
      { label: "Corrosion Resistance", value: "Salt-Resistant Base Channels for Coastal & Inland Environments" },
      { label: "Applications", value: "Balconies, Staircases, Pool Fencing, Mezzanines, and Raised Decks" }
    ]
  },
  features: [
    {
      id: "feat-views",
      title: "Unbroken Clear Views",
      description: "Enjoy your garden, ocean, or mountain views without metal bars getting in the way.",
      icon: "eye-outline"
    },
    {
      id: "feat-safety",
      title: "Toughened Safety Glass",
      description: "Heavy-duty impact-tested glass panels ensure safety for children and pets.",
      icon: "shield-checkmark-outline"
    },
    {
      id: "feat-modern-look",
      title: "Increases Property Value",
      description: "Gives your home, balcony, or pool area an instant modern, high-end look.",
      icon: "trending-up-outline"
    }
  ],
  process: {
    sectionHeading: "How We Install Glass Balustrades in 4 Steps",
    steps: [
      {
        stepNumber: 1,
        title: "Site Survey & Core Drilling Check",
        description: "We measure your balcony or pool perimeter and check floor concrete solidness."
      },
      {
        stepNumber: 2,
        title: "Custom Glass Cutting & Toughening",
        description: "Safety glass panels are cut to precise lengths with polished smooth edges."
      },
      {
        stepNumber: 3,
        title: "Base Channel & Spigot Anchoring",
        description: "We securely bolt the heavy-duty mounting channels or stainless spigots into the floor."
      },
      {
        stepNumber: 4,
        title: "Glass Fitting & Safety Check",
        description: "Panels are locked in place with rubber pressure gaskets and handrails fitted."
      }
    ]
  },
  faqs: [
    {
      question: "Are glass balustrades safe for young children and pets?",
      answer: "Yes. We use thick toughened laminated safety glass that cannot be climbed easily and will not shatter under normal impact."
    },
    {
      question: "Can glass balustrades be used around swimming pools?",
      answer: "Yes, our glass pool fencing complies with safety pool regulations, featuring self-closing safety gates and magnetic latches."
    }
  ],
  relatedServices: [
    {
      serviceId: "srv-steel-balustrades",
      title: "Steel Balustrades & Handrails",
      slug: "steel-balustrades",
      shortDescription: "Custom steel handrails and stair railings.",
      thumbnailImage: "/images/services/balustrades-thumb.webp"
    },
    {
      serviceId: "srv-patio-enclosures",
      title: "Patio Enclosures & Sunrooms",
      slug: "patio-enclosures",
      shortDescription: "Custom glass and aluminium patio enclosures.",
      thumbnailImage: "/images/services/patio-thumb.webp"
    }
  ],
  seo: {
    titleTag: "Glass Balustrades & Frameless Pool Fencing | South Africa",
    metaDescription: "Custom glass balustrades for balconies, staircases, and pool fencing. Frameless safety glass, corrosion-resistant fittings, and expert installation.",
    keywords: ["glass balustrades", "frameless glass railings", "glass pool fencing", "balcony glass balustrade"],
    canonicalUrl: "https://example.com/services/glass-balustrades",
    openGraphImage: "https://example.com/images/og/glass-balustrades.jpg"
  },
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Glass Balustrades Installation",
    "provider": {
      "@type": "Organization",
      "name": "Aluminium Windows & Doors SA"
    }
  }
};
