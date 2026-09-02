import { ServiceObject } from '../../types/service';

export const doubleGlazedWindowsService: ServiceObject = {
  id: "srv-double-glazed-windows",
  slug: "double-glazed-windows",
  serviceName: "Double Glazed Windows",
  tagline: "Cut Electricity Bills and Block Outside Noise with Insulated Glass",
  category: "Windows & Glass",
  hero: {
    badge: "Energy Saving & Noise Reducing Windows",
    headline: "Custom Double Glazed Windows",
    subheadline: "Keep your home warm in winter, cool in summer, and peacefully quiet with high-performance double insulated glass windows.",
    primaryCtaText: "Get an Energy Quote",
    primaryCtaLink: "/contact",
    secondaryCtaText: "Explore Glass Benefits",
    secondaryCtaLink: "#specs",
    heroImage: "/images/services/double-glazed-windows-hero.webp"
  },
  overview: {
    heading: "Energy-Efficient Double Glazing for South African Homes",
    paragraphs: [
      "Double glazed windows use two panes of sealed glass separated by an insulating air gap to dramatically reduce heat transfer and block annoying street noise.",
      "By keeping indoor temperatures stable throughout all four seasons, double glazing significantly cuts your heating and air-conditioning electricity costs."
    ],
    specifications: [
      { label: "Glass Construction", value: "Dual Glass Panes with Sealed Argon or Dry Air Gap" },
      { label: "Frame Material", value: "Deep Pocket Aluminium Frame with Insulated Seals" },
      { label: "Noise Reduction", value: "Blocks up to 60-70% of Outside Traffic and Street Noise" },
      { label: "Finishes", value: "Matte Black, Charcoal, Pure White, Bronze, or Anodised Silver" },
      { label: "Safety Glass", value: "Toughened Safety Glass or Acoustic Laminated Glass" },
      { label: "Warranty", value: "Comprehensive Seal Integrity and Installation Guarantee" }
    ]
  },
  features: [
    {
      id: "feat-energy-savings",
      title: "Lower Power Bills",
      description: "Traps indoor warmth during chilly winters and deflects blistering summer sun heat.",
      icon: "trending-down-outline"
    },
    {
      id: "feat-noise-block",
      title: "Peaceful & Quiet",
      description: "Dual glass layers effectively muffle neighborhood noise, dogs barking, and street traffic.",
      icon: "volume-mute-outline"
    },
    {
      id: "feat-no-condensation",
      title: "Reduces Condensation",
      description: "Insulated inner pane stays closer to room temperature, preventing water drops and mold on glass.",
      icon: "shield-checkmark-outline"
    }
  ],
  process: {
    sectionHeading: "Our Double Glazing Installation Process",
    steps: [
      {
        stepNumber: 1,
        title: "Energy & Sound Assessment",
        description: "We evaluate your window locations, sun exposure, and noise levels to recommend glass thickness."
      },
      {
        stepNumber: 2,
        title: "Factory Sealed Manufacturing",
        description: "Your double glazed glass units are sealed hermetically to prevent any internal fogging."
      },
      {
        stepNumber: 3,
        title: "Clean Window Fitting",
        description: "We install the deep frame profiles, fit the insulated glass units, and seal thoroughly."
      },
      {
        stepNumber: 4,
        title: "Quality Check & Handover",
        description: "We inspect all perimeter seals, test handles, and provide your energy warranty certificate."
      }
    ]
  },
  faqs: [
    {
      question: "Will double glazed windows reduce traffic noise in my bedroom?",
      answer: "Yes, double glazing can reduce intrusive outside street and traffic noise by up to 70%, creating a much quieter sleeping environment."
    },
    {
      question: "Do double glazed windows really help lower electricity costs?",
      answer: "Yes. By preventing heat from escaping in winter and keeping hot sun out in summer, you run air conditioners and heaters much less."
    }
  ],
  relatedServices: [
    {
      serviceId: "srv-aluminium-windows",
      title: "Aluminium Windows",
      slug: "aluminium-windows",
      shortDescription: "Custom aluminium window frames and installation.",
      thumbnailImage: "/images/services/windows-thumb.webp"
    },
    {
      serviceId: "srv-patio-enclosures",
      title: "Patio Enclosures & Sunrooms",
      slug: "patio-enclosures",
      shortDescription: "Insulated glass patio and sunroom enclosures.",
      thumbnailImage: "/images/services/patio-thumb.webp"
    }
  ],
  seo: {
    titleTag: "Double Glazed Windows & Insulated Glass | South Africa",
    metaDescription: "Install energy-saving double glazed aluminium windows. Superior soundproofing, lower electricity bills, and professional installation across South Africa.",
    keywords: ["double glazed windows", "soundproof windows", "energy efficient windows", "insulated glass SA"],
    canonicalUrl: "https://example.com/services/double-glazed-windows",
    openGraphImage: "https://example.com/images/og/double-glazed-windows.jpg"
  },
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Double Glazed Windows Installation",
    "provider": {
      "@type": "Organization",
      "name": "Aluminium Windows & Doors SA"
    }
  }
};
