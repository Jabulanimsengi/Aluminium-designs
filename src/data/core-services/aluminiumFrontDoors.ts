import { ServiceObject } from '../../types/service';

export const aluminiumFrontDoorsService: ServiceObject = {
  id: "srv-aluminium-front-doors",
  slug: "aluminium-front-doors",
  serviceName: "Aluminium Front Doors",
  tagline: "Bold, Secure, and Elegant Entrance Doors for Modern Homes",
  category: "Aluminium Doors",
  hero: {
    badge: "Custom Front Entrance & Pivot Doors",
    headline: "Custom Aluminium Front Doors",
    subheadline: "Create a striking first impression with custom aluminium pivot and hinged entrance doors built for top security and lasting beauty.",
    primaryCtaText: "Get a Free Quote",
    primaryCtaLink: "/contact",
    secondaryCtaText: "Explore Front Door Designs",
    secondaryCtaLink: "#specs",
    heroImage: "/images/cards/card_aluminium_front_doors.jpg"
  },
  overview: {
    heading: "Grand Aluminium Entrance Doors Built for Security & Style",
    paragraphs: [
      "Your front door sets the tone for your entire home. Our custom aluminium front doors and oversized pivot doors combine modern aesthetics with high-strength security.",
      "Engineered to withstand harsh sun, wind, and rain without warping, swelling, or rotting like traditional wood doors."
    ],
    specifications: [
      { label: "Door Types", value: "Modern Pivot Doors, Heavy-Duty Hinged Doors, and Glass Panel Inserts" },
      { label: "Material", value: "Reinforced High-Grade Aluminium Frame & Core" },
      { label: "Finish Options", value: "Powder Coated Charcoal, Matte Black, White, or Wood-Grain Look" },
      { label: "Handles & Locks", value: "Stainless Steel Long Pull Handles with Multi-Point Security Locks" },
      { label: "Glass Inserts", value: "Frosted, Tinted, or Clear Safety Glass Strips" },
      { label: "Weather Sealing", value: "Heavy-Duty Perimeter Rubber Draft Seals" }
    ]
  },
  features: [
    {
      id: "feat-pivot-action",
      title: "Smooth Pivot Mechanism",
      description: "Heavy-duty pivot hinges carry wide, oversized doors with effortless balance.",
      icon: "swap-horizontal-outline"
    },
    {
      id: "feat-no-warp",
      title: "Weather & Sun Resistant",
      description: "Unlike timber, aluminium will never warp, shrink, or require endless repainting.",
      icon: "sunny-outline"
    },
    {
      id: "feat-security",
      title: "High-Security Locking",
      description: "Fitted with multi-point slam locks and deadbolts for maximum protection.",
      icon: "shield-checkmark-outline"
    }
  ],
  process: {
    sectionHeading: "How We Build & Install Your Front Door",
    steps: [
      {
        stepNumber: 1,
        title: "Design Consultation & Measuring",
        description: "We help you select styles, handles, and glass inserts, and take exact measurements."
      },
      {
        stepNumber: 2,
        title: "Custom Fabrication",
        description: "Your entrance door is built in our workshop with high-strength corner joints."
      },
      {
        stepNumber: 3,
        title: "Removal & Secure Fitting",
        description: "We take out your old door, securely anchor the new frame, and fit the door panel."
      },
      {
        stepNumber: 4,
        title: "Lock Testing & Handover",
        description: "We check lock alignment, test handle operation, and provide keys and warranty."
      }
    ]
  },
  faqs: [
    {
      question: "Are aluminium front doors more durable than wooden doors?",
      answer: "Yes, aluminium doors do not rot, swell during rainy seasons, or crack in intense summer sun, making them far easier to maintain than wood."
    },
    {
      question: "Can I choose custom handles and frosted glass panels?",
      answer: "Absolutely. You can customize handle lengths (up to 1.8m pull handles), lock setups, and frosted or tinted safety glass inserts."
    }
  ],
  relatedServices: [
    {
      serviceId: "srv-aluminium-sliding-doors",
      title: "Aluminium Sliding Doors",
      slug: "aluminium-sliding-doors",
      shortDescription: "Smooth sliding glass patio doors.",
      thumbnailImage: "/images/sliding_doors.png"
    },
    {
      serviceId: "srv-security-gates",
      title: "Security Gates",
      slug: "security-gates",
      shortDescription: "Strong steel security gates for front entrances.",
      thumbnailImage: "/images/real_images/products/gates/aluminium_gate_one.jpeg"
    }
  ],
  seo: {
    titleTag: "Aluminium Front Doors & Pivot Doors | South Africa",
    metaDescription: "Upgrade to modern aluminium front doors and pivot doors. Custom designs, stainless steel pull handles, high security, and expert installation.",
    keywords: ["aluminium front doors", "aluminium pivot doors", "modern entrance doors", "aluminium front doors SA"],
    canonicalUrl: "https://example.com/services/aluminium-front-doors",
    openGraphImage: "https://example.com/images/og/aluminium-front-doors.jpg"
  },
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Aluminium Front Doors Installation",
    "provider": {
      "@type": "Organization",
      "name": "Aluminium Windows & Doors SA"
    }
  }
};
