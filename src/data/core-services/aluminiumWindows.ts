import { ServiceObject } from '../../types/service';

export const aluminiumWindowsService: ServiceObject = {
  id: "srv-aluminium-windows",
  slug: "aluminium-windows",
  serviceName: "Aluminium Windows",
  tagline: "Sleek, Durable, and Energy-Saving Aluminium Windows",
  category: "Windows & Glass",
  hero: {
    badge: "Quality Custom Aluminium Windows & Doors",
    headline: "High-Quality Custom Aluminium Windows",
    subheadline: "Sleek modern frames, great heat insulation to lower electricity bills, and long-lasting durability for homes and businesses across South Africa.",
    primaryCtaText: "Request Free Quote",
    primaryCtaLink: "/contact",
    secondaryCtaText: "Explore Window Styles",
    secondaryCtaLink: "#specs",
    heroImage: "/images/services/aluminium-windows-hero.webp"
  },
  overview: {
    heading: "Custom Aluminium Windows for Homes & Businesses",
    paragraphs: [
      "Our custom aluminium windows feature slim modern frames that let in plenty of natural sunlight while keeping your home strong, safe, and secure.",
      "Designed with energy-saving insulation and strong multi-point safety locks, our windows keep your building comfortable in all seasons."
    ],
    specifications: [
      { label: "Frame Material", value: "Strong Premium-Grade Aluminium" },
      { label: "Finish Options", value: "Powder Coated, Matte Colors (Black, Charcoal, Silver), or Wood-Look" },
      { label: "Glass Options", value: "Single Glazing, Double Glazing, Safety Glass & Soundproofing" },
      { label: "Energy Savings", value: "Built-In Heat Insulation to Keep Your Home Warm or Cool" },
      { label: "Weather Proofing", value: "Strong Protection Against Heavy Winds & Rain" },
      { label: "Security Locks", value: "Multi-Point Safety Locking System" }
    ]
  },
  features: [
    {
      id: "feat-slim-frames",
      title: "Slim Modern Frames",
      description: "Gives you larger glass views and lets in up to 22% more natural sunlight.",
      icon: "eye-outline"
    },
    {
      id: "feat-corrosion",
      title: "Rust & Weather Resistant",
      description: "Durable surface finishes resist harsh sun, coastal salt air, and peeling.",
      icon: "shield-checkmark-outline"
    },
    {
      id: "feat-maintenance",
      title: "Low Maintenance",
      description: "Won't rust, rot, warp, or crack over decades of everyday use.",
      icon: "sparkles-outline"
    }
  ],
  process: {
    sectionHeading: "How We Install Your Windows in 4 Easy Steps",
    steps: [
      {
        stepNumber: 1,
        title: "Free On-Site Measuring",
        description: "Our team visits your home or building to measure your windows for an exact fit."
      },
      {
        stepNumber: 2,
        title: "Custom Window Manufacturing",
        description: "We make your aluminium frames locally to your exact required sizes."
      },
      {
        stepNumber: 3,
        title: "Professional Fitting & Installation",
        description: "We safely remove your old windows, fit your new aluminium frames, and seal against rain and wind."
      },
      {
        stepNumber: 4,
        title: "Final Inspection & Warranty",
        description: "We test all window locks and sliding handles with you and hand over your official warranty."
      }
    ]
  },
  faqs: [
    {
      question: "Are aluminium windows energy efficient?",
      answer: "Yes. Modern aluminium windows have built-in insulation barriers that keep heat inside in winter and block out hot sun in summer, keeping your home comfortable all year round."
    },
    {
      question: "How long do custom aluminium window frames last?",
      answer: "Quality aluminium window frames can last 45+ years with simple maintenance."
    }
  ],
  relatedServices: [
    {
      serviceId: "srv-aluminium-front-doors",
      title: "Aluminium Front Doors",
      slug: "aluminium-front-doors",
      shortDescription: "High-security aluminium front doors for your home.",
      thumbnailImage: "/images/services/doors-thumb.webp"
    },
    {
      serviceId: "srv-aluminium-sliding-doors",
      title: "Aluminium Sliding Doors",
      slug: "aluminium-sliding-doors",
      shortDescription: "Smooth sliding glass doors for patios and gardens.",
      thumbnailImage: "/images/services/sliding-thumb.webp"
    }
  ],
  seo: {
    titleTag: "Custom Aluminium Windows & Installation | South Africa",
    metaDescription: "Get durable custom aluminium windows for your home or office. Double glazing, heat insulation, slim frames, and expert installation across South Africa.",
    keywords: ["aluminium windows", "custom aluminium window frames", "double glazed aluminium windows", "aluminium window installers"],
    canonicalUrl: "https://example.com/services/aluminium-windows",
    openGraphImage: "https://example.com/images/og/aluminium-windows.jpg"
  },
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Aluminium Windows Installation",
    "provider": {
      "@type": "Organization",
      "name": "Aluminium Windows SA"
    }
  }
};
