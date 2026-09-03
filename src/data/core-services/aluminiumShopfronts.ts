import { ServiceObject } from '../../types/service';

export const aluminiumShopfrontsService: ServiceObject = {
  id: "srv-aluminium-shopfronts",
  slug: "aluminium-shopfronts",
  serviceName: "Aluminium Shopfronts",
  tagline: "Commercial Aluminium Storefronts, Retail Display Windows & Automated Entrances",
  category: "Windows & Glass",
  isCommercialOnly: true,
  isCommercial: true,
  pricingGuide: {
    estimatedStartingPrice: "R3,200 - R6,500",
    priceUnit: "per m² / entrance opening",
    priceFactors: [
      "Framed aluminium profiles vs frameless toughened glass panels",
      "Manual heavy-duty floor-spring pivot doors vs automated motion sensor sliding doors",
      "Laminated safety glass thickness (6.38mm to 12mm) and acoustic/solar tinting",
      "After-hours and weekend shopping mall retail installation requirements"
    ]
  },
  hero: {
    badge: "Commercial Aluminium Shopfronts & Glazing",
    headline: "Commercial Aluminium Shopfronts & Storefront Glazing",
    subheadline: "Maximize retail visibility and customer foot traffic. High-durability custom aluminium shopfronts, frameless glass displays, and heavy-duty entrance systems across Gauteng.",
    primaryCtaText: "Get Commercial Quote",
    primaryCtaLink: "/contact",
    secondaryCtaText: "Explore Shopfront Systems",
    secondaryCtaLink: "#specs",
    heroImage: "/images/services/aluminium-shopfronts-hero.webp"
  },
  overview: {
    heading: "Commercial Aluminium Shopfronts for Retail Stores, Malls & Office Parks",
    paragraphs: [
      "Your commercial shopfront is the direct architectural face of your business. Our custom aluminium and glass storefront systems give retail boutiques, showrooms, restaurants, dealerships, and office buildings a sleek, welcoming, and ultra-secure facade.",
      "Manufactured with heavy-duty commercial-grade aluminium profiles, SANS 10400 safety-certified laminated or toughened safety glass, and heavy-traffic pivot floor springs or automated sliding doors engineered for tens of thousands of customer cycles."
    ],
    specifications: [
      { label: "Shopfront Systems", value: "Flush Glazed Commercial Aluminium, Frameless 12mm Glass, Curtain Wall Facades" },
      { label: "Glass Options", value: "6.38mm to 12mm Laminated Safety Glass, Toughened Safety Glass, UV & Solar Tint" },
      { label: "Frame Construction", value: "Heavy-Duty Powder Coated Commercial Extruded Aluminium Profiles" },
      { label: "Finishes", value: "Matte Black, Charcoal, Pure White, Natural Anodised, or Custom Corporate Brand Colours" },
      { label: "Door Hardware", value: "Commercial Floor Springs, Overhead Transom Closers, Hook Deadlocks & Panic Escape Hardware" },
      { label: "Safety Compliance", value: "100% Certified with SANS 10400-N Building Regulations & Glazing Standards" }
    ]
  },
  features: [
    {
      id: "feat-retail-display",
      title: "Crystal Clear Product Display",
      description: "Maximizes showcase transparency and street visibility to pull more customers into your store.",
      icon: "eye-outline"
    },
    {
      id: "feat-heavy-traffic",
      title: "Engineered for Extreme Traffic",
      description: "Heavy-duty commercial floor springs withstand over 500,000 opening and closing cycles without sagging.",
      icon: "people-outline"
    },
    {
      id: "feat-safety-security",
      title: "High-Impact Laminated Glass",
      description: "SANS 10400 safety glass holds together under forced impact, protecting inventory and the public.",
      icon: "shield-checkmark-outline"
    }
  ],
  process: {
    sectionHeading: "Our Commercial Glazing & Shopfront Process",
    steps: [
      {
        stepNumber: 1,
        title: "Site Survey & Architectural Specs",
        description: "We review mall tenant guidelines, architectural drawings, and take laser measurements on-site."
      },
      {
        stepNumber: 2,
        title: "Commercial Workshop Fabrication",
        description: "Aluminium frames, safety glass, and commercial entrance hardware are pre-assembled in our factory."
      },
      {
        stepNumber: 3,
        title: "After-Hours Mall Installation",
        description: "Our certified installation crews work outside shopping trading hours to prevent business interruption."
      },
      {
        stepNumber: 4,
        title: "Hardware Calibration & Sign-Off",
        description: "We calibrate door closer speeds, inspect lock throws, and issue SANS 10400 glazing compliance certificates."
      }
    ]
  },
  faqs: [
    {
      question: "Do you offer after-hours shopfront installation for shopping malls?",
      answer: "Yes, our commercial installation teams work night shifts and weekends across all major Gauteng shopping centres and retail malls to comply with centre management and avoid trading downtime."
    },
    {
      question: "What glass is required by law for commercial shopfronts in South Africa?",
      answer: "Under SANS 10400-N regulations, commercial public shopfronts must use laminated safety glass (minimum 6.38mm) or toughened safety glass to safeguard against human impact injury and forced entry."
    },
    {
      question: "Can you incorporate automated motion-sensor sliding doors?",
      answer: "Yes, we integrate heavy-duty automated sliding door motors, infrared motion sensors, and fail-safe battery backups into our custom aluminium shopfronts."
    }
  ],
  relatedServices: [
    {
      serviceId: "srv-office-glass-partitions",
      title: "Office Glass Partitions",
      slug: "office-glass-partitions",
      shortDescription: "Interior glass office dividers and walls.",
      thumbnailImage: "/images/services/partitions-thumb.webp"
    },
    {
      serviceId: "srv-aluminium-sliding-doors",
      title: "Aluminium Sliding Doors",
      slug: "aluminium-sliding-doors",
      shortDescription: "Commercial sliding doors and entrances.",
      thumbnailImage: "/images/services/sliding-thumb.webp"
    }
  ],
  seo: {
    titleTag: "Aluminium Shopfronts & Commercial Glazing | Gauteng & SA",
    metaDescription: "Commercial aluminium shopfronts, retail display windows, and glass storefront doors in Gauteng. SANS 10400 safety compliant, heavy-duty hardware, and after-hours fitting.",
    keywords: [
      "aluminium shopfronts gauteng",
      "commercial glazing gauteng",
      "aluminium and glass shopfronts",
      "aluminium store fronts",
      "commercial storefront glass",
      "shop fronts pretoria",
      "shopfronts cape town"
    ],
    canonicalUrl: "https://www.aluminiumdesigns.co.za/services/aluminium-shopfronts",
    openGraphImage: "https://www.aluminiumdesigns.co.za/images/services/aluminium-shopfronts-hero.webp"
  },
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Aluminium Shopfronts & Commercial Glazing Installation",
    "provider": {
      "@type": "Organization",
      "name": "Aluminium Designs"
    }
  }
};
