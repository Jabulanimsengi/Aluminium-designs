import { ServiceObject } from '../../types/service';

export const customWeldingService: ServiceObject = {
  id: "srv-custom-welding",
  slug: "custom-welding",
  serviceName: "Custom Welding",
  tagline: "Expert On-Site Welding, Steel Cutting, and Custom Metal Fabrication",
  category: "Steel Fabrication & Repairs",
  hero: {
    badge: "Custom Steel Fabrication & On-Site Welding",
    headline: "Custom Welding & Steel Fabrication",
    subheadline: "From custom structural steel beams and support posts to bespoke metal furniture and on-site welding repairs, our boilermakers deliver quality metalwork.",
    primaryCtaText: "Get a Welding Quote",
    primaryCtaLink: "/contact",
    secondaryCtaText: "Explore Fabrication Work",
    secondaryCtaLink: "#specs",
    heroImage: "/images/slatted_gate.png"
  },
  overview: {
    heading: "Precision Metal Fabrication & Mobile On-Site Welding",
    paragraphs: [
      "Have a unique steel project or need emergency on-site welding repairs? Our experienced welders and fabricators handle residential, agricultural, and commercial metalwork projects.",
      "We work with mild steel, stainless steel, and aluminium, offering MIG, TIG, and arc welding, plasma cutting, metal bending, and protective coatings."
    ],
    specifications: [
      { label: "Welding Processes", value: "MIG / CO2 Welding, TIG Welding, Stick / Arc Welding, and Mobile Generator Welding" },
      { label: "Materials Handled", value: "Mild Steel (Plates, Beams, Tubes), Stainless Steel, and Aluminium" },
      { label: "Capabilities", value: "Custom Frameworks, Structural Support Beams, Brackets, Grids, and Metal Racks" },
      { label: "Cutting & Shaping", value: "CNC Plasma Cutting, Oxy-Acetylene Cutting, and Hydraulic Tube Bending" },
      { label: "Protective Finishes", value: "Hot-Dip Galvanizing, Powder Coating, Sandblasting, or Epoxy Primer Painting" },
      { label: "Service Mode", value: "Workshop Fabrication and Mobile On-Site Welding Rig Available" }
    ]
  },
  features: [
    {
      id: "feat-mobile-rig",
      title: "Mobile On-Site Welding",
      description: "Equipped with mobile generator welding rigs to carry out repairs directly on your premises.",
      icon: "flash-outline"
    },
    {
      id: "feat-skilled-welders",
      title: "Certified Boilermakers",
      description: "Qualified tradesmen ensure deep weld penetration, strong joints, and clean grind finishes.",
      icon: "construct-outline"
    },
    {
      id: "feat-custom-built",
      title: "Built to Your Exact Design",
      description: "We bring your sketches, blueprints, or custom ideas to life in solid metal.",
      icon: "color-palette-outline"
    }
  ],
  process: {
    sectionHeading: "4 Steps to Your Custom Metal Project",
    steps: [
      {
        stepNumber: 1,
        title: "Brief & Measurement",
        description: "Send us your project sketch or request an on-site visit for accurate dimension taking."
      },
      {
        stepNumber: 2,
        title: "Material Prep & Cutting",
        description: "Steel tubes, plates, and angle sections are cut and prepared for fabrication."
      },
      {
        stepNumber: 3,
        title: "Welding & Surface Grinding",
        description: "Our welders assemble and weld the structure, followed by smooth weld grinding and priming."
      },
      {
        stepNumber: 4,
        title: "Delivery or On-Site Fitting",
        description: "We transport the completed metalwork to your site and bolt/weld into place securely."
      }
    ]
  },
  faqs: [
    {
      question: "Can you come out to weld something broken at my house?",
      answer: "Yes, our mobile welding vans are fully equipped with power generators, welders, and cutting tools to fix broken gate hinges, steel frames, and trailers on-site."
    },
    {
      question: "Do you build structural steel support beams for home renovations?",
      answer: "Yes, we fabricate and install steel support beams, columns, and lintels for wall removals and room additions."
    }
  ],
  relatedServices: [
    {
      serviceId: "srv-steel-repairs",
      title: "Steel Gate & Fence Repairs",
      slug: "steel-repairs",
      shortDescription: "On-site rust treatment and welding fixes.",
      thumbnailImage: "/images/window_repair.png"
    },
    {
      serviceId: "srv-driveway-gates",
      title: "Driveway Gates",
      slug: "driveway-gates",
      shortDescription: "Custom fabricated steel driveway gates.",
      thumbnailImage: "/images/real_images/products/gates/aluminium_gate_two.jpeg"
    }
  ],
  seo: {
    titleTag: "Custom Welding & Steel Fabrication | South Africa",
    metaDescription: "Professional custom welding and steel fabrication services. Mobile on-site welding, structural steel beams, custom metalwork across South Africa.",
    keywords: ["custom welding", "steel fabrication", "mobile welder", "metal fabrication SA"],
    canonicalUrl: "https://example.com/services/custom-welding",
    openGraphImage: "https://example.com/images/og/custom-welding.jpg"
  },
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Custom Welding & Steel Fabrication",
    "provider": {
      "@type": "Organization",
      "name": "Steel & Welding Services SA"
    }
  }
};
