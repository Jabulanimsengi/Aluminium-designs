import { ServiceObject } from '../../types/service';

export const steelWorksService: ServiceObject = {
  id: "srv-steel-works",
  slug: "steel-works",
  serviceName: "Steel Works",
  tagline: "Custom Steel Security Gates, Burglar Bars, Driveway Gates, Carports & Palisades",
  category: "Steel & Security",
  pricingGuide: {
    estimatedStartingPrice: "from R280",
    priceUnit: "per custom steel security fixture",
    priceFactors: [
      "Product category (Window Burglar Bars, Swing Gates, Sliding Driveway Gates, Carports, Palisades)",
      "Steel specification (Solid 10mm-12mm square bar vs heavy-duty structural rectangular tubing)",
      "Corrosion finish (Hot-dip galvanizing vs anti-rust primer and UV epoxy powder coating)",
      "Site opening dimensions and manual vs automated operation"
    ]
  },
  hero: {
    badge: "Custom Steel Works & Security Fabrication",
    headline: "Custom Steel Works & Security",
    subheadline: "Heavy-duty steel security gates, burglar bars, automated driveway gates, palisade fencing, and steel carports custom manufactured and installed across Gauteng.",
    primaryCtaText: "Get a Free Steel Quote",
    primaryCtaLink: "/contact",
    secondaryCtaText: "Explore Steel Products",
    secondaryCtaLink: "#specs",
    heroImage: "/images/services/security-gates-hero.webp"
  },
  overview: {
    heading: "Precision Steel Fabrication & Security Solutions in Gauteng",
    paragraphs: [
      "Our Katlehong steel workshop designs, welds, and installs bespoke steel security fixtures and structures for residential and commercial properties throughout Gauteng.",
      "From high-security slamlock trellis gates and solid steel window bars to motorized driveway gates, palisade fencing, and protective carports, every installation is engineered to withstand forced entry and harsh Highveld weather."
    ],
    specifications: [
      { label: "Steel Material", value: "Solid Mild Steel Square Bar & Structural Steel Tubing" },
      { label: "Corrosion Finish", value: "Hot-Dip Galvanized & High-Bake Exterior Epoxy Powder Coating" },
      { label: "Color Options", value: "Matte Black, Charcoal Grey, Pure White, Bronze, and Silver" },
      { label: "Fasteners", value: "Tamper-Proof Shear-Head Snap-Off Steel Wall Bolts" },
      { label: "Lock Mechanisms", value: "Instant Slamlock Cylinders & High-Security 5-Lever Deadlocks" },
      { label: "Quality Compliance", value: "Manufactured to SANS Building & Physical Security Standards" }
    ]
  },
  features: [
    {
      id: "feat-high-tensile",
      title: "Break-In Resistance",
      description: "Welded from solid steel bars and structural tubing that resist crowbars, hacksaws, and mechanical leverage.",
      icon: "shield-checkmark-outline"
    },
    {
      id: "feat-anti-rust",
      title: "Rust & Weather Shield",
      description: "Treated with anti-rust zinc phosphate primers and baked powder coating to prevent corrosion.",
      icon: "layers-outline"
    },
    {
      id: "feat-custom-fit",
      title: "Bespoke Site Fabrication",
      description: "Measured and custom-welded specifically for your exact doorway, window reveal, or driveway perimeter.",
      icon: "hammer-outline"
    }
  ],
  process: {
    sectionHeading: "Our 4-Step Steel Fabrication & Installation Process",
    steps: [
      {
        stepNumber: 1,
        title: "On-Site Laser Measurement",
        description: "Our technician visits your property to take precise measurements, inspect wall reveals, and assess security requirements."
      },
      {
        stepNumber: 2,
        title: "Workshop Welding & Anti-Rust Coating",
        description: "Your steel gate, bars, or carport are precision cut, MIG-welded, galvanized, and powder coated in our workshop."
      },
      {
        stepNumber: 3,
        title: "Anchored Security Installation",
        description: "Our certified installation team securely fastens the steel fixtures into solid brickwork with tamper-proof bolts."
      },
      {
        stepNumber: 4,
        title: "Operation Check & Handover",
        description: "We test smooth sliding, slamlock operation, and alignment, leaving your home spotless and secure."
      }
    ]
  },
  faqs: [
    {
      question: "Do you offer custom steel works near me in Gauteng?",
      answer: "Yes. Our mobile measurement and installation teams service all major Gauteng areas, including Sandton, Johannesburg, Randburg, Centurion, Midrand, Pretoria, Alberton, Katlehong, and the East & West Rand."
    },
    {
      question: "How do you protect your steel products against rust?",
      answer: "All steel components are treated with high-grade anti-rust zinc primers and baked epoxy powder coating. For outdoor gates and carports, we also offer complete hot-dip galvanizing for maximum weather protection."
    },
    {
      question: "Can you automate my existing driveway gate?",
      answer: "Yes. We install Centurion D5 Smart, D10, and Gemini gate motors complete with remote controls, backup batteries, and anti-crush safety beams."
    },
    {
      question: "How long does manufacturing and installation take?",
      answer: "Custom steel fabrication typically takes 7 to 14 working days from final site measurement, with installation completed in 1 to 2 days."
    }
  ],
  relatedServices: [
    {
      serviceId: "srv-security-gates",
      title: "Security Gates",
      slug: "security-gates",
      shortDescription: "Custom slamlock & swing steel security gates.",
      thumbnailImage: "/images/services/security-gates-hero.webp"
    },
    {
      serviceId: "srv-burglar-bars",
      title: "Burglar Bars",
      slug: "burglar-bars",
      shortDescription: "Solid steel window burglar bars.",
      thumbnailImage: "/images/services/burglar-bars-hero.webp"
    },
    {
      serviceId: "srv-driveway-gates",
      title: "Driveway Gates",
      slug: "driveway-gates",
      shortDescription: "Automated sliding & swing driveway gates.",
      thumbnailImage: "/images/services/driveway-gates-hero.webp"
    }
  ],
  seo: {
    titleTag: "Custom Steel Works & Security Fabrication Gauteng | Gates, Bars & Carports",
    metaDescription: "Professional steel fabrication near you in Gauteng. Custom steel security gates, burglar bars, automated driveway gates, palisades & carports with free quotes.",
    keywords: [
      "steel works near me",
      "steel gates near me",
      "burglar bars near me",
      "steel fabricators Gauteng",
      "driveway gates near me",
      "custom welding services near me",
      "steel carports near me",
      "palisade fencing near me"
    ],
    canonicalUrl: "https://www.aluminiumdesigns.co.za/services/steel-works",
    openGraphImage: "/images/services/security-gates-hero.webp"
  },
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Custom Steel Works & Security Fabrication",
    "description": "Custom steel security gates, burglar bars, driveway gates, palisade fencing, and carports across Gauteng.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Aluminium & Steel Designs"
    }
  }
};
