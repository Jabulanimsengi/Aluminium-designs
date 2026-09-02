import { ServiceObject } from '../../types/service';

export const steelRepairsService: ServiceObject = {
  id: "srv-steel-repairs",
  slug: "steel-repairs",
  serviceName: "Steel Repairs",
  tagline: "Fix Sagging Gates, Broken Wheels, Broken Hinges & Rusted Steelwork",
  category: "Steel Fabrication & Repairs",
  hero: {
    badge: "Fast On-Site Steel & Gate Repairs",
    headline: "Steel Gate & Fence Repairs",
    subheadline: "Restore security and smooth operation with fast welding repairs for broken gate tracks, stuck sliding wheels, loose hinges, and rusted fencing.",
    primaryCtaText: "Book a Repair Welder",
    primaryCtaLink: "/contact",
    secondaryCtaText: "View Repair Services",
    secondaryCtaLink: "#specs",
    heroImage: "/images/services/steel-repairs-hero.webp"
  },
  overview: {
    heading: "Emergency Steel Repairs, Rust Treatment & Re-Welding",
    paragraphs: [
      "A broken gate wheel or snapped hinge leaves your property vulnerable and puts severe strain on electric gate motors. Don't risk motor burnout or break-ins.",
      "Our mobile repair service specializes in replacing worn gate wheels and bearings, re-aligning bent ground tracks, re-welding snapped hinges, and applying rust-converter treatments to weathered steel."
    ],
    specifications: [
      { label: "Gate Repairs", value: "Sliding Gate Wheel Replacement, Anti-Lift Brackets, Top Roller Guides, and Hinges" },
      { label: "Fence Repairs", value: "Palisade Pale Re-Welding, Mesh Panel Fastener Replacement, and Post Re-Concreting" },
      { label: "Rust Restoration", value: "Wire Brushing, Rust-Converter Primers, and Exterior Enamel Repainting" },
      { label: "Motor Drive Rail", value: "Straightening and Re-Bolting Bent Steel Gear Racks" },
      { label: "Emergency Service", value: "Same-Day Emergency Mobile Welding for Inoperable or Off-Track Gates" },
      { label: "Workmanship", value: "Strong Welds Guaranteed with Heavy-Duty Replacement Parts" }
    ]
  },
  features: [
    {
      id: "feat-prevent-burnout",
      title: "Protects Gate Motors",
      description: "Replacing stiff, grinding wheels prevents expensive electric gate motor burnout.",
      icon: "hardware-chip-outline"
    },
    {
      id: "feat-fast-emergency",
      title: "Same-Day Mobile Response",
      description: "Fast arrival when driveway gates come off track or security gates get jammed.",
      icon: "flash-outline"
    },
    {
      id: "feat-rust-treatment",
      title: "Stops Rust in Its Tracks",
      description: "Treats and repaints rusted steel bases to prevent structural collapse.",
      icon: "shield-checkmark-outline"
    }
  ],
  process: {
    sectionHeading: "4-Step Steel Repair Process",
    steps: [
      {
        stepNumber: 1,
        title: "Call for Fast Service",
        description: "Describe the issue (e.g. gate stuck off track, rusted hinge) and share your location."
      },
      {
        stepNumber: 2,
        title: "On-Site Inspection",
        description: "Our mobile welder inspects wheels, track level, and weld points and gives an instant quote."
      },
      {
        stepNumber: 3,
        title: "Cutting, Welding & Part Replacement",
        description: "We weld new hinges, fit heavy-duty steel bearing wheels, or straighten bent tracks."
      },
      {
        stepNumber: 4,
        title: "Testing & Anti-Rust Coating",
        description: "We test smooth manual gliding and motor operation, apply anti-rust primer, and sign off."
      }
    ]
  },
  faqs: [
    {
      question: "Why is my sliding driveway gate jumping off its track?",
      answer: "This is usually caused by worn wheel bearings, a bent ground track, or stones lodged in the rail. We replace the damaged wheels with heavy-duty V-groove bearing wheels and straighten the track."
    },
    {
      question: "Can rusted steel palisade pales be welded without replacing the whole fence?",
      answer: "Yes, we can cut out individual rusted pales or loose cross-runners and weld fresh galvanized steel sections into place."
    }
  ],
  relatedServices: [
    {
      serviceId: "srv-gate-motors",
      title: "Gate Motor Installation & Repairs",
      slug: "gate-motors",
      shortDescription: "Electric gate motor servicing and battery fixes.",
      thumbnailImage: "/images/services/motors-thumb.webp"
    },
    {
      serviceId: "srv-custom-welding",
      title: "Custom Welding & Steel Fabrication",
      slug: "custom-welding",
      shortDescription: "Custom steel fabrication and mobile welding.",
      thumbnailImage: "/images/services/welding-thumb.webp"
    }
  ],
  seo: {
    titleTag: "Steel Gate & Fence Repairs | Mobile Welder South Africa",
    metaDescription: "Fast steel gate and fence repairs. Sliding gate wheel replacement, broken hinge welding, rust treatment, and mobile welding across South Africa.",
    keywords: ["steel gate repairs", "sliding gate wheel replacement", "gate welding repairs", "fence repair welder SA"],
    canonicalUrl: "https://example.com/services/steel-repairs",
    openGraphImage: "https://example.com/images/og/steel-repairs.jpg"
  },
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Steel Gate & Fence Repairs",
    "provider": {
      "@type": "Organization",
      "name": "Steel & Welding Services SA"
    }
  }
};
