import { ServiceObject } from '../../types/service';

export const glassReplacementService: ServiceObject = {
  id: "srv-glass-replacement",
  slug: "glass-replacement",
  serviceName: "Glass Replacement",
  tagline: "Fast, Safe Window & Door Glass Repairs for Homes and Businesses",
  category: "Repairs & Maintenance",
  hero: {
    badge: "Fast On-Site Glazing & Glass Replacement",
    headline: "Broken Glass Replacement",
    subheadline: "Restore security and safety with fast replacement of cracked, shattered, or misted glass panes for windows, doors, and shopfronts.",
    primaryCtaText: "Request Emergency Glazing",
    primaryCtaLink: "/contact",
    secondaryCtaText: "Explore Glass Types",
    secondaryCtaLink: "#specs",
    heroImage: "/images/window_detail.png"
  },
  overview: {
    heading: "Emergency Glass Replacement for Windows & Doors",
    paragraphs: [
      "A cracked or broken window pane compromises your home security and creates a dangerous hazard for children and pets.",
      "Our qualified mobile glaziers respond promptly to measure, supply, and install brand new clear float glass, laminated safety glass, or double glazed units in aluminium, steel, and timber frames."
    ],
    specifications: [
      { label: "Glass Options", value: "Clear Float Glass, Obscure Patterned Glass, and Laminated Safety Glass" },
      { label: "Safety Standards", value: "Impact-Resistant Laminated & Toughened Safety Glazing" },
      { label: "Frame Compatibility", value: "Aluminium Windows, Steel Frames, Wood Panes, and Commercial Shopfronts" },
      { label: "Specialty Glass", value: "Solar Tinted Glass, Low-E Energy Glass, and Acoustic Soundproof Panes" },
      { label: "Service Response", value: "Fast Same-Day Emergency Response for Broken Windows & Doors" },
      { label: "Site Cleanliness", value: "Complete Safe Removal and Clean-Up of All Broken Glass Shards" }
    ]
  },
  features: [
    {
      id: "feat-fast-response",
      title: "Fast Response Time",
      description: "Quick dispatch to secure broken windows after accidents, storms, or break-in attempts.",
      icon: "flash-outline"
    },
    {
      id: "feat-safety-compliant",
      title: "Certified Safety Glass",
      description: "We install safety glass in doors and low windows that complies with all safety building codes.",
      icon: "shield-checkmark-outline"
    },
    {
      id: "feat-clean-service",
      title: "Full Glass Clean-Up",
      description: "We safely vacuum and remove all shattered glass pieces from your floor and garden.",
      icon: "trash-outline"
    }
  ],
  process: {
    sectionHeading: "4-Step Glass Replacement Process",
    steps: [
      {
        stepNumber: 1,
        title: "Call for Fast Assistance",
        description: "Tell us your location and rough window size for an immediate quote."
      },
      {
        stepNumber: 2,
        title: "Site Arrival & Safe Removal",
        description: "Our glazier arrives with mobile glass stock, removes broken glass shards, and cleans the frame bead."
      },
      {
        stepNumber: 3,
        title: "Precision Glass Cutting & Fitting",
        description: "New glass is cut to size, bedded into the frame with fresh rubber beads or silicone, and secured."
      },
      {
        stepNumber: 4,
        title: "Thorough Clean-Up & Warranty",
        description: "We polish the new glass pane, vacuum the area clean, and provide your invoice and guarantee."
      }
    ]
  },
  faqs: [
    {
      question: "What should I do while waiting for the glazier to arrive?",
      answer: "Keep children and pets away from the room, do not try to pull jagged shards out by hand, and if possible, cover the opening with cardboard from the inside."
    },
    {
      question: "Do low-level windows and doors require safety glass?",
      answer: "Yes, by law, glass in doors and windows within 300mm of floor level must be fitted with shatter-resistant safety glass."
    }
  ],
  relatedServices: [
    {
      serviceId: "srv-aluminium-repairs",
      title: "Aluminium Window & Door Repairs",
      slug: "aluminium-repairs",
      shortDescription: "Hardware repairs for sliding doors and windows.",
      thumbnailImage: "/images/window_repair.png"
    },
    {
      serviceId: "srv-aluminium-windows",
      title: "Aluminium Windows",
      slug: "aluminium-windows",
      shortDescription: "Complete custom window replacements.",
      thumbnailImage: "/images/real_images/products/windows/window_aluminium_one.jpeg"
    }
  ],
  seo: {
    titleTag: "Broken Glass Replacement & Glazier Services | South Africa",
    metaDescription: "Fast broken glass replacement for windows, doors, and shopfronts. Certified safety glass, fast mobile glazier service across South Africa.",
    keywords: ["broken glass replacement", "window glass repair", "emergency glazier", "safety glass replacement SA"],
    canonicalUrl: "https://example.com/services/glass-replacement",
    openGraphImage: "https://example.com/images/og/glass-replacement.jpg"
  },
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Broken Glass Replacement",
    "provider": {
      "@type": "Organization",
      "name": "Aluminium Windows & Doors SA"
    }
  }
};
