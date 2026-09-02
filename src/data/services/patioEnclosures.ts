import { ServiceObject } from '../../types/service';

export const patioEnclosuresService: ServiceObject = {
  id: "srv-patio-enclosures",
  slug: "patio-enclosures",
  serviceName: "Patio Enclosures",
  tagline: "Turn Open Patios and Braai Areas Into Year-Round Living Spaces",
  category: "Outdoor & Enclosures",
  hero: {
    badge: "Custom Glass Patio & Sunroom Enclosures",
    headline: "Custom Patio Enclosures & Sunrooms",
    subheadline: "Enclose your outdoor veranda, braai area, or patio with custom aluminium and glass enclosures to enjoy entertaining in any weather.",
    primaryCtaText: "Get an Enclosure Quote",
    primaryCtaLink: "/contact",
    secondaryCtaText: "Explore Enclosure Ideas",
    secondaryCtaLink: "#specs",
    heroImage: "/images/services/patio-enclosures-hero.webp"
  },
  overview: {
    heading: "All-Weather Glass Patio Enclosures for South African Homes",
    paragraphs: [
      "Don't let wind, rain, winter chill, or dust ruin your outdoor braai and relaxation time. Our custom glass and aluminium patio enclosures enclose your open patio into a bright, protected sunroom.",
      "We combine sliding windows, folding stacking doors, fixed glass panels, and insulated roof coverings tailored to your exact patio dimensions."
    ],
    specifications: [
      { label: "Enclosure Systems", value: "Sliding Glass Walls, Stacking Doors, and Fixed Window Panes" },
      { label: "Frame Material", value: "Corrosion-Proof Heavy-Duty Aluminium" },
      { label: "Color Finishes", value: "Powder Coated Charcoal, Matte Black, Pure White, or Bronze" },
      { label: "Glass Options", value: "Clear Safety Glass, Solar Tinted Glass, or Low-E Double Glazing" },
      { label: "Roof Integration", value: "Compatible with Existing Concrete Slabs, IBR Roofing, or Glass Skylights" },
      { label: "Weather Sealing", value: "Full Perimeter Rubber and Woolpile Draft Seals" }
    ]
  },
  features: [
    {
      id: "feat-all-weather",
      title: "All-Weather Entertaining",
      description: "Host family braais and dinners comfortably without worrying about sudden rain or wind.",
      icon: "partly-sunny-outline"
    },
    {
      id: "feat-added-space",
      title: "Expands Living Space",
      description: "Adds an entire extra room to your home for relaxing, working, or dining.",
      icon: "home-outline"
    },
    {
      id: "feat-flexible-opening",
      title: "Open Up When Sunny",
      description: "Stack or slide door panels fully open on warm days to enjoy the fresh outdoor air.",
      icon: "expand-outline"
    }
  ],
  process: {
    sectionHeading: "How We Enclose Your Patio",
    steps: [
      {
        stepNumber: 1,
        title: "On-Site Consultation",
        description: "We inspect your patio, discuss door styles and roof connections, and take exact measurements."
      },
      {
        stepNumber: 2,
        title: "Custom Frame Manufacturing",
        description: "Aluminium frames, sliding panels, and safety glass are built in our workshop."
      },
      {
        stepNumber: 3,
        title: "Structural Installation",
        description: "Our installers anchor posts, fit tracks, hang glass panels, and waterproof all joins."
      },
      {
        stepNumber: 4,
        title: "Final Check & Warranty",
        description: "We test all sliding/stacking actions, inspect seals, and provide your warranty."
      }
    ]
  },
  faqs: [
    {
      question: "Can I enclose a patio with an existing braai area?",
      answer: "Yes, we design patio enclosures around built-in braais and include sliding windows or louvres for proper smoke ventilation."
    },
    {
      question: "Do glass patio enclosures keep out cold winter air?",
      answer: "Yes, our tightly sealed aluminium frames and thick safety glass create a warm sunroom effect, keeping winter chills outside."
    }
  ],
  relatedServices: [
    {
      serviceId: "srv-aluminium-stacking-doors",
      title: "Aluminium Stacking Doors",
      slug: "aluminium-stacking-doors",
      shortDescription: "Folding doors for seamless patio openings.",
      thumbnailImage: "/images/services/stacking-thumb.webp"
    },
    {
      serviceId: "srv-aluminium-pergolas",
      title: "Aluminium Pergolas",
      slug: "aluminium-pergolas",
      shortDescription: "Modern shaded pergolas and deck covers.",
      thumbnailImage: "/images/services/pergolas-thumb.webp"
    }
  ],
  seo: {
    titleTag: "Patio Enclosures & Sunrooms | South Africa",
    metaDescription: "Transform your outdoor space with custom aluminium and glass patio enclosures. All-weather braai rooms, sunrooms, and expert local installation.",
    keywords: ["patio enclosures", "glass sunrooms", "braai room enclosures", "aluminium patio enclosures"],
    canonicalUrl: "https://example.com/services/patio-enclosures",
    openGraphImage: "https://example.com/images/og/patio-enclosures.jpg"
  },
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Patio Enclosures Installation",
    "provider": {
      "@type": "Organization",
      "name": "Aluminium Windows & Doors SA"
    }
  }
};
