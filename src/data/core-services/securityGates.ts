import { ServiceObject } from '../../types/service';

export const securityGatesService: ServiceObject = {
  id: "srv-security-gates",
  slug: "security-gates",
  serviceName: "Security Gates",
  tagline: "Heavy-Duty Slamlock Swing & Trellis Security Gates for Doors",
  category: "Steel Security",
  hero: {
    badge: "Custom Steel Security & Slamlock Gates",
    headline: "Custom Steel Security Gates",
    subheadline: "Secure your front doors, patio sliding doors, and passage night-gates with heavy-duty slamlock retractable and swing steel security gates.",
    primaryCtaText: "Get a Free Gate Quote",
    primaryCtaLink: "/contact",
    secondaryCtaText: "Explore Gate Styles",
    secondaryCtaLink: "#specs",
    heroImage: "/images/services/security-gates-hero.jpg"
  },
  overview: {
    heading: "High-Security Steel Gates for Front Entrances & Patios",
    paragraphs: [
      "Securing doorway access points is essential for family safety. Our custom steel security gates provide a strong physical barrier against home invasions without blocking airflow or natural light.",
      "Available as traditional heavy-duty swing security gates or smooth-sliding expandable trellis barrier gates equipped with instant slamlock locking cylinders."
    ],
    specifications: [
      { label: "Gate Styles", value: "Slamlock Retractable Trellis Gates, Hinged Swing Gates, and Double French Door Gates" },
      { label: "Steel Construction", value: "Reinforced Cross-Flight Uprights with Top & Bottom Steel Tracks" },
      { label: "Lock Mechanisms", value: "Instant Slamlock Action with High-Security Star Cylinders & 3 Keys" },
      { label: "Color Finishes", value: "Powder Coated White, Bronze, Charcoal Grey, or Matte Black" },
      { label: "Corrosion Protection", value: "Galvanized Steel Core with UV-Stabilized Exterior Powder Coating" },
      { label: "Installation", value: "Heavy-Duty Wall Anchors and Enclosed Tamper-Proof Top/Bottom Tracks" }
    ]
  },
  features: [
    {
      id: "feat-slamlock",
      title: "Instant Slamlock Action",
      description: "Pushes closed and locks immediately without needing a key in emergency situations.",
      icon: "lock-closed-outline"
    },
    {
      id: "feat-smooth-slide",
      title: "Smooth Retractable Slide",
      description: "Expanding trellis gates glide effortlessly on sealed ball-bearing bottom rollers.",
      icon: "shuffle-outline"
    },
    {
      id: "feat-night-barrier",
      title: "Passage Night Gate Protection",
      description: "Creates a secure safe haven between living areas and family bedrooms at night.",
      icon: "shield-checkmark-outline"
    }
  ],
  process: {
    sectionHeading: "4-Step Security Gate Installation",
    steps: [
      {
        stepNumber: 1,
        title: "Measurement & Door Inspection",
        description: "We measure your door frame, check reveal depths, and discuss gate opening directions."
      },
      {
        stepNumber: 2,
        title: "Custom Steel Assembly",
        description: "Your gate is built to exact opening dimensions and powder coated in your color choice."
      },
      {
        stepNumber: 3,
        title: "Secure Wall Fitting",
        description: "Our technicians bolt the frame and guide tracks into solid brickwork with security anchors."
      },
      {
        stepNumber: 4,
        title: "Slamlock Testing & Keys",
        description: "We test the slamlock mechanism, provide smooth slide demonstration, and hand over keys."
      }
    ]
  },
  faqs: [
    {
      question: "What is a slamlock security gate?",
      answer: "A slamlock gate locks automatically the instant you slam it shut, giving you instant protection without having to search for keys during an emergency."
    },
    {
      question: "Can retractable security gates be fitted over aluminium sliding doors?",
      answer: "Yes, our trellis security gates are designed specifically to mount over aluminium sliding doors and stacking patio doors."
    }
  ],
  relatedServices: [
    {
      serviceId: "srv-burglar-bars",
      title: "Burglar Bars",
      slug: "burglar-bars",
      shortDescription: "Custom steel window security bars.",
      thumbnailImage: "/images/services/bars-thumb.webp"
    },
    {
      serviceId: "srv-driveway-gates",
      title: "Driveway Gates",
      slug: "driveway-gates",
      shortDescription: "Automated steel sliding driveway gates.",
      thumbnailImage: "/images/services/driveway-thumb.webp"
    }
  ],
  seo: {
    titleTag: "Steel Security Gates & Retractable Trellis Gates | South Africa",
    metaDescription: "Custom steel security gates and slamlock retractable trellis doors. Maximum home protection, durable powder coating, and professional local installation.",
    keywords: ["security gates", "trellis security gates", "slamlock gates", "steel security doors SA"],
    canonicalUrl: "https://www.aluminiumdesigns.co.za/services/security-gates",
    openGraphImage: "https://www.aluminiumdesigns.co.za/images/services/security-gates-hero.jpg"
  },
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Security Gates Installation",
    "provider": {
      "@type": "Organization",
      "name": "Aluminium Designs"
    }
  }
};
