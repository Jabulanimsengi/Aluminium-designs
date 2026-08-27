import { ServiceObject } from '../../types/service';

export const aluminiumPergolasService: ServiceObject = {
  id: "srv-aluminium-pergolas",
  slug: "aluminium-pergolas",
  serviceName: "Aluminium Pergolas",
  tagline: "Modern Shaded Pergolas and Opening Louvred Roof Covers",
  category: "Outdoor & Enclosures",
  hero: {
    badge: "Custom Modern Pergolas & Deck Covers",
    headline: "Custom Aluminium Pergolas",
    subheadline: "Elevate your garden, poolside, or outdoor entertainment area with sleek, maintenance-free aluminium pergolas and adjustable louvred roofs.",
    primaryCtaText: "Get a Pergola Quote",
    primaryCtaLink: "/contact",
    secondaryCtaText: "View Pergola Options",
    secondaryCtaLink: "#specs",
    heroImage: "/images/patio_enclosure.png"
  },
  overview: {
    heading: "Sleek, Rustproof Aluminium Pergolas for Outdoor Living",
    paragraphs: [
      "Our custom aluminium pergolas provide modern shaded luxury for gardens, pool patios, and outdoor entertainment zones without the ongoing sanding, oiling, and rotting of timber pergolas.",
      "Choose from fixed shaded beam designs, waterproof panel coverings, or motorized louvred roofs that open for sunshine and rotate closed to block rain."
    ],
    specifications: [
      { label: "Pergola Types", value: "Fixed Beam Pergolas, Louvred Opening Roofs, and Freestanding Gazebos" },
      { label: "Material", value: "Heavy-Duty Powder Coated Aluminium Frame & Support Posts" },
      { label: "Color Finishes", value: "Matte Black, Charcoal, Pure White, Bronze, or Wood-Look Coating" },
      { label: "Roof Options", value: "Adjustable Louvres, Polycarbonate Tinted Sheets, or Shaded Metal Slats" },
      { label: "Footing & Anchoring", value: "Solid Base Plates Bolted onto Concrete Foundations or Decking" },
      { label: "Optional Add-ons", value: "Integrated LED Strip Lights, Rain Sensors, and Side Drop Blinds" }
    ]
  },
  features: [
    {
      id: "feat-no-maintenance",
      title: "Zero Maintenance",
      description: "Will never rot, warp, crack, or suffer from termite damage unlike wooden pergolas.",
      icon: "sparkles-outline"
    },
    {
      id: "feat-sun-control",
      title: "Flexible Sun & Shade",
      description: "Louvred roofs rotate to let in morning winter sun or provide full cool shade at midday.",
      icon: "sunny-outline"
    },
    {
      id: "feat-rainproof",
      title: "100% Rainproof When Closed",
      description: "Interlocking louvre blades channel rainwater into hidden post downpipes.",
      icon: "water-outline"
    }
  ],
  process: {
    sectionHeading: "4 Simple Steps to Your New Pergola",
    steps: [
      {
        stepNumber: 1,
        title: "Site Consultation & Design",
        description: "We measure your patio or garden space, determine post positions, and confirm roof style."
      },
      {
        stepNumber: 2,
        title: "Custom Workshop Fabrication",
        description: "Frame beams, louvre blades, and support posts are manufactured to exact dimensions."
      },
      {
        stepNumber: 3,
        title: "Precision Assembly & Anchoring",
        description: "Our team bolts support posts to the slab and secures the overhead beam structure."
      },
      {
        stepNumber: 4,
        title: "Operation Check & Handover",
        description: "We test louvre rotation, check rain drainage, and explain remote controls and warranty."
      }
    ]
  },
  faqs: [
    {
      question: "Can an aluminium pergola be attached to the side of my house?",
      answer: "Yes, we can build wall-mounted pergolas attached securely to your house brickwork or freestanding pergolas in your garden."
    },
    {
      question: "Are opening louvre pergolas waterproof when it rains?",
      answer: "Yes, when closed, the louvres seal tightly together and direct all rainwater into built-in internal gutter channels."
    }
  ],
  relatedServices: [
    {
      serviceId: "srv-patio-enclosures",
      title: "Patio Enclosures & Sunrooms",
      slug: "patio-enclosures",
      shortDescription: "Custom glass and aluminium patio enclosures.",
      thumbnailImage: "/images/patio_enclosure.png"
    },
    {
      serviceId: "srv-aluminium-awnings",
      title: "Aluminium Awnings & Canopies",
      slug: "aluminium-awnings",
      shortDescription: "Door and window sun canopies.",
      thumbnailImage: "/images/real_images/products/windows/window_aluminium_six.jpeg"
    }
  ],
  seo: {
    titleTag: "Aluminium Pergolas & Louvred Roofs | South Africa",
    metaDescription: "Custom modern aluminium pergolas and adjustable louvred patio roofs. Zero maintenance outdoor living structures across South Africa.",
    keywords: ["aluminium pergolas", "louvred patio roofs", "modern garden pergolas", "aluminium deck covers SA"],
    canonicalUrl: "https://example.com/services/aluminium-pergolas",
    openGraphImage: "https://example.com/images/og/aluminium-pergolas.jpg"
  },
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Aluminium Pergolas Installation",
    "provider": {
      "@type": "Organization",
      "name": "Aluminium Windows & Doors SA"
    }
  }
};
