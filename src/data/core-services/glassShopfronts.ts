import { ServiceObject } from '../../types/service';

export const glassShopfrontsService: ServiceObject = {
  id: "srv-glass-shopfronts",
  slug: "glass-shopfronts",
  serviceName: "Glass Shopfronts",
  tagline: "Modern Retail Display Windows and Commercial Glass Entrances",
  category: "Windows & Glass",
  hero: {
    badge: "Commercial Glass Entrances & Storefronts",
    headline: "Custom Glass Shopfronts",
    subheadline: "Attract more customers and showcase your retail products with crystal-clear commercial glass shopfronts and heavy-duty entrance doors.",
    primaryCtaText: "Get a Commercial Quote",
    primaryCtaLink: "/contact",
    secondaryCtaText: "Explore Shopfront Options",
    secondaryCtaLink: "#specs",
    heroImage: "/images/shopfront_facade.png"
  },
  overview: {
    heading: "Commercial Glass Shopfronts for Retail Stores & Offices",
    paragraphs: [
      "Your shopfront is the face of your business. Our custom aluminium and glass shopfront systems give retail stores, restaurants, showrooms, and commercial offices an inviting, professional look.",
      "Built with high-traffic automatic sliding doors, heavy-duty hinged entry doors, and impact-resistant laminated safety glass for maximum durability and retail security."
    ],
    specifications: [
      { label: "Shopfront Types", value: "Framed Aluminium Shopfronts, Frameless Glass Displays, and Automated Entry Doors" },
      { label: "Glass Options", value: "6.38mm to 12mm Laminated Safety Glass and Tinted UV-Filter Glass" },
      { label: "Frame Material", value: "Commercial Grade Heavy-Duty Powder Coated Aluminium" },
      { label: "Finishes", value: "Charcoal, Matte Black, Pure White, Silver Anodised, or Custom Brand Colors" },
      { label: "Entry Doors", value: "Single/Double Swing Glass Doors with Floor Springs, Sliding Doors, or Stacking Systems" },
      { label: "Security Locks", value: "Heavy-Duty Hook Locks, Keyed Euro Cylinders, and Electric Strike Locks" }
    ]
  },
  features: [
    {
      id: "feat-retail-display",
      title: "Crystal Clear Display",
      description: "Maximizes product visibility from the street to attract more foot traffic into your shop.",
      icon: "eye-outline"
    },
    {
      id: "feat-high-traffic",
      title: "Built for Heavy Traffic",
      description: "Heavy-duty floor springs and pivot hinges withstand thousands of daily customer openings.",
      icon: "people-outline"
    },
    {
      id: "feat-safety-security",
      title: "Impact Safety Glass",
      description: "Laminated glass holds together even if cracked, deterring forced entry and keeping goods safe.",
      icon: "shield-checkmark-outline"
    }
  ],
  process: {
    sectionHeading: "Our Commercial Shopfront Installation Process",
    steps: [
      {
        stepNumber: 1,
        title: "Site Measurement & Commercial Quote",
        description: "We assess the building facade, take opening measurements, and review door access requirements."
      },
      {
        stepNumber: 2,
        title: "Custom Manufacturing",
        description: "Commercial aluminium profiles, safety glass, and door hardware are assembled to exact size."
      },
      {
        stepNumber: 3,
        title: "Fast After-Hours Installation",
        description: "We install quickly with minimal disruption to your retail trading hours."
      },
      {
        stepNumber: 4,
        title: "Door Testing & Sign-Off",
        description: "We adjust floor springs, test lock engagement, and hand over commercial warranty."
      }
    ]
  },
  faqs: [
    {
      question: "Can you install shopfronts outside normal business hours?",
      answer: "Yes, we can arrange evening or weekend installations to minimize downtime and disruption for your customers and staff."
    },
    {
      question: "What type of glass is required for commercial shopfronts?",
      answer: "Commercial shopfronts require laminated safety glass or toughened glass to protect the public and comply with commercial safety standards."
    }
  ],
  relatedServices: [
    {
      serviceId: "srv-office-glass-partitions",
      title: "Office Glass Partitions",
      slug: "office-glass-partitions",
      shortDescription: "Interior glass office dividers and walls.",
      thumbnailImage: "/images/office_partitions.png"
    },
    {
      serviceId: "srv-aluminium-sliding-doors",
      title: "Aluminium Sliding Doors",
      slug: "aluminium-sliding-doors",
      shortDescription: "Commercial sliding doors and glass entrances.",
      thumbnailImage: "/images/sliding_doors.png"
    }
  ],
  seo: {
    titleTag: "Glass Shopfronts & Commercial Doors | South Africa",
    metaDescription: "Custom commercial glass shopfronts and retail entrance doors. Heavy-duty aluminium frames, laminated safety glass, and fast professional installation.",
    keywords: ["glass shopfronts", "commercial glass doors", "retail storefronts", "aluminium shopfronts SA"],
    canonicalUrl: "https://example.com/services/glass-shopfronts",
    openGraphImage: "https://example.com/images/og/glass-shopfronts.jpg"
  },
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Glass Shopfronts Installation",
    "provider": {
      "@type": "Organization",
      "name": "Aluminium Windows & Doors SA"
    }
  }
};
