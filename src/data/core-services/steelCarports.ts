import { ServiceObject } from '../../types/service';

export const steelCarportsService: ServiceObject = {
  id: "srv-steel-carports",
  slug: "steel-carports",
  serviceName: "Steel Carports",
  tagline: "Solid Steel Vehicle Shade and Hail Protection for Cars, Bakkies & Caravans",
  category: "Steel Structures",
  hero: {
    badge: "Custom Steel Carports & Shadeports",
    headline: "Custom Steel Carports & Shadeports",
    subheadline: "Protect your vehicles from blistering summer sun, severe hail storms, and heavy rain with custom-built steel carports and heavy-duty shadeports.",
    primaryCtaText: "Get a Carport Quote",
    primaryCtaLink: "/contact",
    secondaryCtaText: "View Carport Styles",
    secondaryCtaLink: "#specs",
    heroImage: "/images/patio_enclosure.png"
  },
  overview: {
    heading: "Durable Steel Carport Structures Built to Withstand All Weather",
    paragraphs: [
      "Hail storms and harsh sun can cause thousands of Rands in vehicle damage. Our heavy-duty steel carports and commercial shadeports provide dependable, long-lasting shelter.",
      "Engineered with thick square steel tubing, hot-rolled lip channels, IBR or corrugated steel sheeting, and professional concrete ground footings."
    ],
    specifications: [
      { label: "Carport Styles", value: "Single (3m x 6m), Double (6m x 6m), Triple, Cantilever, and Custom Sizes" },
      { label: "Steel Framework", value: "Heavy-Gauge 76mm/100mm Square Tubing with 150mm Lip Channel Rafters" },
      { label: "Roofing Options", value: "IBR Steel Sheeting, Chromadek Color Sheets, Polycarbonate Skylights, or 95% Shade Cloth" },
      { label: "Finishes", value: "Anti-Rust Primer & Industrial Enamel or Powder Coated Charcoal/Black" },
      { label: "Gutters Included", value: "Built-In Seamless Steel Gutters and PVC Downpipes for Rain Drainage" },
      { label: "Footings", value: "Deep High-Strength Concrete Foundations for Maximum Storm Stability" }
    ]
  },
  features: [
    {
      id: "feat-hail-protection",
      title: "100% Hail Protection",
      description: "Solid IBR steel roof sheeting blocks heavy hail stones from denting your car or cracking windshields.",
      icon: "shield-checkmark-outline"
    },
    {
      id: "feat-sun-shade",
      title: "Cools Vehicle Interiors",
      description: "Blocks UV sun rays to prevent car paint fading and cracked dashboard leather.",
      icon: "sunny-outline"
    },
    {
      id: "feat-cantilever-option",
      title: "Cantilever (No Obstruction) Posts",
      description: "Optional cantilever designs keep poles on one side for easy parking and opening car doors.",
      icon: "car-outline"
    }
  ],
  process: {
    sectionHeading: "4-Step Carport Installation Process",
    steps: [
      {
        stepNumber: 1,
        title: "Site Survey & Driveway Layout",
        description: "We measure your driveway space, check vehicle height clearance, and plan post footings."
      },
      {
        stepNumber: 2,
        title: "Workshop Steel Fabrication",
        description: "Beams and support posts are cut, welded with mounting gussets, and primed against rust."
      },
      {
        stepNumber: 3,
        title: "Digging & Framework Erection",
        description: "We dig deep foundation holes, concrete support poles, and bolt the cross-rafter framework."
      },
      {
        stepNumber: 4,
        title: "Roof Sheeting & Gutter Fitting",
        description: "We fasten IBR steel sheets with weatherproof self-drilling screws and fit rain gutters."
      }
    ]
  },
  faqs: [
    {
      question: "Can you build a high-clearance carport for a caravan or 4x4 with a rooftop tent?",
      answer: "Yes, we can build custom extra-height carports up to 3.5m clearance to easily accommodate caravans, boats, and lifted 4x4 vehicles."
    },
    {
      question: "What is the difference between a cantilever carport and a 4-post carport?",
      answer: "A 4-post carport has support poles at all corners, while a cantilever carport has curved support posts on one side only, making it easier to drive into tight parking spots."
    }
  ],
  relatedServices: [
    {
      serviceId: "srv-aluminium-awnings",
      title: "Aluminium Awnings & Canopies",
      slug: "aluminium-awnings",
      shortDescription: "Custom door and walkway canopies.",
      thumbnailImage: "/images/real_images/products/windows/window_aluminium_six.jpeg"
    },
    {
      serviceId: "srv-steel-sheds",
      title: "Steel Sheds & Storage Units",
      slug: "steel-sheds",
      shortDescription: "Custom outdoor steel storage sheds.",
      thumbnailImage: "/images/patio_enclosure.png"
    }
  ],
  seo: {
    titleTag: "Steel Carports, Cantilever Ports & Shadeports | South Africa",
    metaDescription: "Custom steel carports and shadeports. Hail-proof IBR sheeting, Chromadek options, cantilever designs, and expert installation across South Africa.",
    keywords: ["steel carports", "cantilever carports", "shadeports", "carport builders SA"],
    canonicalUrl: "https://example.com/services/steel-carports",
    openGraphImage: "https://example.com/images/og/steel-carports.jpg"
  },
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Steel Carports Installation",
    "provider": {
      "@type": "Organization",
      "name": "Steel Structures SA"
    }
  }
};
