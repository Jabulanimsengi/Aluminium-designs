import { ServiceObject } from '../../types/service';

export const palisadeFencingService: ServiceObject = {
  id: "srv-palisade-fencing",
  slug: "palisade-fencing",
  serviceName: "Palisade Fencing",
  tagline: "High-Security Steel Perimeter Fencing for Homes, Schools & Businesses",
  category: "Steel Security",
  hero: {
    badge: "Steel Palisade Perimeter Security",
    headline: "Custom Steel Palisade Fencing",
    subheadline: "Secure your property boundary with durable steel palisade fencing featuring sharp spike deterrents, hot-dip galvanizing, and expert installation.",
    primaryCtaText: "Get a Fencing Quote",
    primaryCtaLink: "/contact",
    secondaryCtaText: "Explore Palisade Specs",
    secondaryCtaLink: "#specs",
    heroImage: "/images/slatted_gate.png"
  },
  overview: {
    heading: "Strong Steel Palisade Boundaries Built to Deter Intruders",
    paragraphs: [
      "Steel palisade fencing is South Africa's proven perimeter barrier for residential houses, commercial business parks, industrial yards, and schools.",
      "Manufactured with hot-rolled angle iron posts, high-tensile steel pales with sharp 3-spike or 7-spike tops, and welded securely with anti-vandal shear nuts."
    ],
    specifications: [
      { label: "Height Options", value: "1.2m, 1.5m, 1.8m, 2.0m, and 2.4m High Fence Panels" },
      { label: "Spike Profiles", value: "7-Spike Spear, 3-Spike Devil's Fork, or Classic Arrow Point" },
      { label: "Steel Material", value: "Cold-Formed W-Section or D-Section High-Tensile Steel Pales" },
      { label: "Rust Finishes", value: "Hot-Dip Galvanized (SANS 121) or Anti-Corrosion Primer & Epoxy Paint" },
      { label: "Post Anchoring", value: "Solid Steel I-Beam / Square Posts Concreted 600mm Deep into Ground" },
      { label: "Fasteners", value: "High-Security Shear Nuts & Snap-Off Bolts (Cannot Be Unscrewed)" }
    ]
  },
  features: [
    {
      id: "feat-visual-deterrent",
      title: "Strong Visual Deterrent",
      description: "Sharp metal multi-spike tops discourage climbing attempts and keep trespassers out.",
      icon: "shield-checkmark-outline"
    },
    {
      id: "feat-clear-view",
      title: "Open Visibility",
      description: "Allows clear visibility along your property boundary for security guards and CCTV cameras.",
      icon: "eye-outline"
    },
    {
      id: "feat-galvanized-life",
      title: "Decades of Durability",
      description: "Hot-dip galvanized coating protects the steel against rust, rain, and soil moisture for 30+ years.",
      icon: "infinite-outline"
    }
  ],
  process: {
    sectionHeading: "Our 4-Step Palisade Installation Process",
    steps: [
      {
        stepNumber: 1,
        title: "Perimeter Survey & Ground Staking",
        description: "We walk your boundary line, measure total meters, mark post holes, and note slope angles."
      },
      {
        stepNumber: 2,
        title: "Post Hole Digging & Concreting",
        description: "We dig deep post holes and secure steel posts in high-strength concrete footings."
      },
      {
        stepNumber: 3,
        title: "Cross-Runner & Pale Assembly",
        description: "We bolt or weld angle iron runners and mount the sharp steel pales with security shear nuts."
      },
      {
        stepNumber: 4,
        title: "Touch-Up & Final Inspection",
        description: "We apply cold-galvanize anti-rust spray to weld joints and inspect total fence rigidity."
      }
    ]
  },
  faqs: [
    {
      question: "Can palisade fencing be installed on sloped or uneven ground?",
      answer: "Yes, our palisade panels can be stepped or racked to follow the natural contours and slopes of your garden or yard."
    },
    {
      question: "Which pale top is most secure: 3-spike or 7-spike?",
      answer: "The 7-spike spear provides maximum anti-climb protection, while the 3-spike devil's fork is also a popular and formidable security option."
    }
  ],
  relatedServices: [
    {
      serviceId: "srv-driveway-gates",
      title: "Driveway Gates",
      slug: "driveway-gates",
      shortDescription: "Matching steel sliding and swing driveway gates.",
      thumbnailImage: "/images/real_images/products/gates/aluminium_gate_two.jpeg"
    },
    {
      serviceId: "srv-mesh-fencing",
      title: "Mesh Security Fencing",
      slug: "mesh-fencing",
      shortDescription: "Anti-climb ClearVu wire mesh perimeter fencing.",
      thumbnailImage: "/images/real_images/products/security/security_burglar-doors_two.jpeg"
    }
  ],
  seo: {
    titleTag: "Steel Palisade Fencing & Security Barriers | South Africa",
    metaDescription: "Professional steel palisade fencing installation. 7-spike & 3-spike options, hot-dip galvanizing, tamper-proof bolts, and expert boundary fencing across South Africa.",
    keywords: ["palisade fencing", "steel palisade gates", "perimeter security fencing", "palisade fencing installers SA"],
    canonicalUrl: "https://example.com/services/palisade-fencing",
    openGraphImage: "https://example.com/images/og/palisade-fencing.jpg"
  },
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Palisade Fencing Installation",
    "provider": {
      "@type": "Organization",
      "name": "Steel & Security Solutions SA"
    }
  }
};
