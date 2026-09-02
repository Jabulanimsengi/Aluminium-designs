import { ServiceObject } from '../../types/service';

export const aluminiumFrenchDoorsService: ServiceObject = {
  id: "srv-aluminium-french-doors",
  slug: "aluminium-french-doors",
  serviceName: "Aluminium French Doors",
  tagline: "Classic Double Glass Doors with Modern Strength and Weather Sealing",
  category: "Aluminium Doors",
  hero: {
    badge: "Custom Hinged Double Glass Doors",
    headline: "Custom Aluminium French Doors",
    subheadline: "Add timeless charm to your patio, balcony, or garden with double hinged aluminium glass doors designed for security and weather resistance.",
    primaryCtaText: "Request a Free Quote",
    primaryCtaLink: "/contact",
    secondaryCtaText: "See Door Styles",
    secondaryCtaLink: "#specs",
    heroImage: "/images/services/aluminium-french-doors-hero.webp"
  },
  overview: {
    heading: "Timeless Aluminium French Doors for Homes & Verandas",
    paragraphs: [
      "Our aluminium French doors offer a classic double door opening that lets in generous natural light while providing convenient wide access to gardens and balconies.",
      "Built with heavy-duty hinges and secure double door flush bolts, they deliver modern insulation and reliable home security."
    ],
    specifications: [
      { label: "Opening Style", value: "Double Opening Hinged Doors (Inward or Outward Swing)" },
      { label: "Frame Material", value: "Durable Powder Coated Aluminium" },
      { label: "Finish Options", value: "White, Charcoal Grey, Matte Black, Bronze, or Silver" },
      { label: "Glass Options", value: "Clear Safety Glass, Frosted Glazing, or Double Glazing" },
      { label: "Locking System", value: "Master Keyed Handle with Slave Door Top & Bottom Flush Bolts" },
      { label: "Weather Sealing", value: "Double Gasket Draft Protection Along All Edges" }
    ]
  },
  features: [
    {
      id: "feat-wide-access",
      title: "Wide Dual Opening",
      description: "Both door leaves open wide to make moving furniture or entertaining guests easy.",
      icon: "open-outline"
    },
    {
      id: "feat-durability",
      title: "Zero Maintenance",
      description: "Rustproof aluminium frames never need repainting or sanding like wooden French doors.",
      icon: "sparkles-outline"
    },
    {
      id: "feat-security",
      title: "Reliable Safety Locks",
      description: "Sturdy multi-point cylinder locks and internal drop bolts keep both doors firmly anchored.",
      icon: "lock-closed-outline"
    }
  ],
  process: {
    sectionHeading: "Our French Door Installation Process",
    steps: [
      {
        stepNumber: 1,
        title: "Exact Measurement",
        description: "We measure your door opening and confirm your preferred swing direction."
      },
      {
        stepNumber: 2,
        title: "Workshop Fabrication",
        description: "Your aluminium French doors are built and fitted with safety glass and hinges."
      },
      {
        stepNumber: 3,
        title: "On-Site Installation",
        description: "We fit the outer frame, hang both door leaves, and adjust hinges for perfect alignment."
      },
      {
        stepNumber: 4,
        title: "Testing & Sign-Off",
        description: "We test the double locking bolts, ensure a tight draft seal, and hand over keys."
      }
    ]
  },
  faqs: [
    {
      question: "Can aluminium French doors open outwards onto a patio?",
      answer: "Yes, we can manufacture your French doors to swing outwards onto your patio or inwards into your room based on your space requirements."
    },
    {
      question: "Can I install burglar bars or security gates over French doors?",
      answer: "Yes, we also supply matching steel swing security gates and cottage pane bars that fit French doors."
    }
  ],
  relatedServices: [
    {
      serviceId: "srv-aluminium-sliding-doors",
      title: "Aluminium Sliding Doors",
      slug: "aluminium-sliding-doors",
      shortDescription: "Smooth sliding patio doors.",
      thumbnailImage: "/images/services/sliding-thumb.webp"
    },
    {
      serviceId: "srv-security-gates",
      title: "Security Gates",
      slug: "security-gates",
      shortDescription: "Matching steel security gates for double doors.",
      thumbnailImage: "/images/services/gates-thumb.webp"
    }
  ],
  seo: {
    titleTag: "Aluminium French Doors & Installation | South Africa",
    metaDescription: "Get custom aluminium French doors. Double hinged glass doors, safety glass, durable weather seals, and expert installation across South Africa.",
    keywords: ["aluminium french doors", "double glass doors", "hinged patio doors", "aluminium double doors"],
    canonicalUrl: "https://example.com/services/aluminium-french-doors",
    openGraphImage: "https://example.com/images/og/aluminium-french-doors.jpg"
  },
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Aluminium French Doors Installation",
    "provider": {
      "@type": "Organization",
      "name": "Aluminium Windows & Doors SA"
    }
  }
};
