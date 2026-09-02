import { ServiceObject } from '../../types/service';

export const trellisSecurityGatesService: ServiceObject = {
  id: "srv-trellis-doors",
  slug: "trellis-doors",
  serviceName: "Trellis Doors",
  tagline: "Retractable Expanding Trellis Doors and Instant Slamlock Security Gates",
  category: "Steel & Security",
  pricingGuide: {
    estimatedStartingPrice: "R2,200 - R4,800",
    priceUnit: "per standard single door opening",
    priceFactors: [
      "Standard doorway width vs wide sliding patio door openings",
      "Single slamlock vs multi-point central locking deadbolts",
      "Galvanized steel vs powder-coated aluminium flight tracks",
      "Top-hung rolling bearings and tamper-proof bottom guide rails"
    ]
  },
  hero: {
    badge: "Expanding Trellis & Retractable Gates",
    headline: "Custom Trellis Doors & Slamlock Retractable Security Gates",
    subheadline: "Instant slam-to-lock safety for your family. High-security expanding trellis barriers with smooth gliding tracks for front doors, passages, and sliding patio doors.",
    primaryCtaText: "Get Trellis Gate Quote",
    primaryCtaLink: "/contact",
    secondaryCtaText: "Explore Gate Options",
    secondaryCtaLink: "#specs",
    heroImage: "/images/services/trellis-gates-hero.webp"
  },
  overview: {
    heading: "Retractable Trellis Doors & Expanding Security Barriers for Doors and Windows",
    paragraphs: [
      "When personal safety is top priority, expanding trellis security doors provide an impenetrable physical barrier with instant emergency locking. Simply push the gate shut, and the heavy-duty slamlock automatically engages without needing a key.",
      "Manufactured with aircraft-grade cross-lattice uprights, steel bearings, and tamper-resistant enclosed top tracks. When unlocked, the gate folds neatly to less than 15% of the opening width, keeping doorways fully accessible."
    ],
    specifications: [
      { label: "Gate Mechanism", value: "Smooth-Glide Top Hung Bearings with Enclosed Bottom Guide Track" },
      { label: "Locking System", value: "Automatic Slamlock & Multi-Point Deadbolt with High-Security Keyway" },
      { label: "Construction", value: "Double Steel Uprights with Heavy-Duty Cross-Braced Lattice Links" },
      { label: "Finishes", value: "Epoxy Powder Coated in Matte Black, Charcoal, Pure White, or Bronze" },
      { label: "Applications", value: "Front Entrance Doors, Patio Sliding Doors, French Doors, and Bedroom Passages" },
      { label: "Corrosion Protection", value: "Electro-Galvanized Steel Sub-Core for Superior Weather Resistance" }
    ]
  },
  features: [
    {
      id: "feat-instant-slamlock",
      title: "Instant Slamlock Action",
      description: "Locks immediately upon contact when pushed shut — no key required in an emergency.",
      icon: "lock-closed-outline"
    },
    {
      id: "feat-smooth-retraction",
      title: "Compact Folding Stack",
      description: "Folds away tightly into a slim side stack to preserve wide walkway clearance and natural light.",
      icon: "resize-outline"
    },
    {
      id: "feat-tamper-proof-track",
      title: "Enclosed Anti-Lever Tracks",
      description: "Heavy-gauge steel tracks prevent crowbar lifting and jemmy leverage attacks from intruders.",
      icon: "shield-checkmark-outline"
    }
  ],
  process: {
    sectionHeading: "Our 4-Step Trellis Gate Installation",
    steps: [
      {
        stepNumber: 1,
        title: "Security Site Survey",
        description: "We measure doorway reveals and assess structural wall anchoring points for maximum strength."
      },
      {
        stepNumber: 2,
        title: "Custom Workshop Fabrication",
        description: "Lattice uprights, slamlock cartridges, and top-hung roller tracks are assembled to custom dimensions."
      },
      {
        stepNumber: 3,
        title: "Precision Wall Anchoring",
        description: "Tracks are secured with heavy-duty masonry anchors and one-way tamper-proof security fixings."
      },
      {
        stepNumber: 4,
        title: "Lock Testing & Key Handover",
        description: "We test the slamlock engagement and glide smoothness, providing your security keys and warranty."
      }
    ]
  },
  faqs: [
    {
      question: "How does a slamlock gate work in an emergency?",
      answer: "A slamlock features a spring-loaded latch that automatically locks the moment the door is pushed closed, securing your property instantly without having to search for keys."
    },
    {
      question: "Can trellis doors be fitted onto large sliding glass patio doors?",
      answer: "Yes, we custom-build multi-meter double-opening trellis gates that secure wide patio door spans and fold away smoothly when opening up your patio."
    },
    {
      question: "What is the difference between trellis doors and standard security gates?",
      answer: "Trellis doors retract horizontally and slide along tracks, taking up virtually zero swing space compared to traditional swinging steel security gates."
    }
  ],
  relatedServices: [
    {
      serviceId: "srv-security-gates",
      title: "Security Gates",
      slug: "security-gates",
      shortDescription: "Custom welded steel security swing gates.",
      thumbnailImage: "/images/services/gates-thumb.webp"
    },
    {
      serviceId: "srv-aluminium-sliding-doors",
      title: "Aluminium Sliding Doors",
      slug: "aluminium-sliding-doors",
      shortDescription: "Smooth sliding glass patio doors.",
      thumbnailImage: "/images/services/sliding-thumb.webp"
    }
  ],
  seo: {
    titleTag: "Trellis Doors & Slam Lock Security Gates | Gauteng & SA",
    metaDescription: "Custom expanding trellis doors and slam lock security gates for patio doors, front doors, and passages. Smooth sliding tracks, anti-crowbar steel, and fast installation.",
    keywords: [
      "trellis doors",
      "slam lock gates",
      "slamlock gates",
      "expanding trellis door",
      "retractable security gates",
      "sliding security gates for patio doors",
      "aluminium trellidor prices"
    ],
    canonicalUrl: "https://aluminiumandsteelsa.co.za/services/trellis-doors-security-gates",
    openGraphImage: "https://aluminiumandsteelsa.co.za/images/og/trellis-doors.jpg"
  },
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Trellis Security Gates Installation",
    "provider": {
      "@type": "Organization",
      "name": "Aluminium Designs SA"
    }
  }
};
