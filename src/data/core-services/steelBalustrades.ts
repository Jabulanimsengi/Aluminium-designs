import { ServiceObject } from '../../types/service';

export const steelBalustradesService: ServiceObject = {
  id: "srv-steel-balustrades",
  slug: "steel-balustrades",
  serviceName: "Steel Balustrades",
  tagline: "Strong, Stylish Steel Safety Railings for Balconies, Stairs & Decks",
  category: "Steel Structures",
  hero: {
    badge: "Custom Steel Balustrades & Handrails",
    headline: "Custom Steel Balustrades & Handrails",
    subheadline: "Ensure family safety and upgrade your staircase or balcony aesthetics with custom-welded steel balustrades and stainless steel wire railings.",
    primaryCtaText: "Get a Balustrade Quote",
    primaryCtaLink: "/contact",
    secondaryCtaText: "Explore Steel Designs",
    secondaryCtaLink: "#specs",
    heroImage: "/images/glass_balustrade.png"
  },
  overview: {
    heading: "Sturdy Steel Railings & Handrails Built to Last",
    paragraphs: [
      "Whether for an internal loft staircase, an outdoor raised balcony, or a commercial ramp handrail, our steel balustrades deliver unmatched strength and modern design.",
      "Custom welded from tubular steel, horizontal square slats, wrought iron scrolls, or stainless steel tension cable infills, finished with durable powder coating."
    ],
    specifications: [
      { label: "Balustrade Styles", value: "Horizontal Slat Railings, Vertical Picket Rails, Wrought Iron, and Stainless Cable Railings" },
      { label: "Material", value: "Heavy-Gauge Mild Steel Tubing, Solid Square Bar, or Stainless Steel 304/316" },
      { label: "Height Standards", value: "Standard 1.0m to 1.2m Safety Heights Compliant with Building Codes" },
      { label: "Finishes", value: "Electro-Galvanized and Powder Coated Matte Black, Charcoal, White, or Bronze" },
      { label: "Mounting Options", value: "Top Mounted Base Plates or Side Fascia Mounted Brackets with Heavy Expansion Bolts" },
      { label: "Applications", value: "Indoor & Outdoor Staircases, Balconies, Decks, Ramps, and Mezzanine Floors" }
    ]
  },
  features: [
    {
      id: "feat-rock-solid",
      title: "Solid Steel Safety",
      description: "Rigid welded steel posts and handrails provide firm, rock-solid support when leaned against.",
      icon: "shield-checkmark-outline"
    },
    {
      id: "feat-custom-styles",
      title: "Modern & Classic Styles",
      description: "Choose from minimalist horizontal black steel bars or decorative wrought iron patterns.",
      icon: "color-palette-outline"
    },
    {
      id: "feat-rust-protection",
      title: "Outdoor Weather Resistance",
      description: "Treated with anti-corrosion primer and baked powder coating to prevent rust outdoors.",
      icon: "sunny-outline"
    }
  ],
  process: {
    sectionHeading: "4 Steps to Your Custom Steel Balustrade",
    steps: [
      {
        stepNumber: 1,
        title: "Measurement & Stair Angle Check",
        description: "We measure your staircase rise and run or balcony perimeter to ensure proper handrail height."
      },
      {
        stepNumber: 2,
        title: "Workshop Fabrication",
        description: "Steel posts, infill bars, and top handrails are welded and ground smooth before coating."
      },
      {
        stepNumber: 3,
        title: "On-Site Core Drilling & Bolting",
        description: "Our installers anchor base plates into concrete or timber stringers with heavy-duty fasteners."
      },
      {
        stepNumber: 4,
        title: "Stiffness Check & Handover",
        description: "We stress test all post connections, clean up mounting points, and hand over your warranty."
      }
    ]
  },
  faqs: [
    {
      question: "Are steel balustrades suitable for coastal outdoor balconies?",
      answer: "Yes, for coastal areas we hot-dip galvanize the steel before powder coating, or use marine-grade stainless steel cables to prevent salt corrosion."
    },
    {
      question: "Can you match the balustrades to my existing security gates?",
      answer: "Yes, we can fabricate matching steel designs and paint finishes to create a cohesive look across your whole home."
    }
  ],
  relatedServices: [
    {
      serviceId: "srv-steel-staircases",
      title: "Steel Staircases",
      slug: "steel-staircases",
      shortDescription: "Custom steel internal and external staircases.",
      thumbnailImage: "/images/glass_balustrade.png"
    },
    {
      serviceId: "srv-glass-balustrades",
      title: "Glass Balustrades",
      slug: "glass-balustrades",
      shortDescription: "Frameless glass railings and pool fencing.",
      thumbnailImage: "/images/glass_balustrade.png"
    }
  ],
  seo: {
    titleTag: "Steel Balustrades & Stair Handrails | South Africa",
    metaDescription: "Custom steel balustrades and handrails for stairs, balconies, and decks. Solid welded steel, modern powder coating, and professional installation across South Africa.",
    keywords: ["steel balustrades", "stair handrails", "balcony steel railings", "wrought iron balustrades SA"],
    canonicalUrl: "https://example.com/services/steel-balustrades",
    openGraphImage: "https://example.com/images/og/steel-balustrades.jpg"
  },
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Steel Balustrades Installation",
    "provider": {
      "@type": "Organization",
      "name": "Steel Structures SA"
    }
  }
};
