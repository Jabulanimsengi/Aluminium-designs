import { ServiceObject } from '../../types/service';

export const aluminiumAwningsService: ServiceObject = {
  id: "srv-aluminium-awnings",
  slug: "aluminium-awnings",
  serviceName: "Aluminium Awnings",
  tagline: "Durable Sun and Rain Protection for Doors, Windows & Walkways",
  category: "Outdoor & Enclosures",
  hero: {
    badge: "Custom Door & Window Weather Canopies",
    headline: "Custom Aluminium Awnings & Canopies",
    subheadline: "Protect your doorways, windows, and walkways from harsh sun, heavy rain, and hail with strong, rustproof aluminium awnings.",
    primaryCtaText: "Get an Awning Quote",
    primaryCtaLink: "/contact",
    secondaryCtaText: "View Awning Designs",
    secondaryCtaLink: "#specs",
    heroImage: "/images/real_images/products/windows/window_aluminium_six.jpeg"
  },
  overview: {
    heading: "Weatherproof Aluminium Canopies & Overhangs",
    paragraphs: [
      "Our custom aluminium awnings and canopies shield your entryways and windows from direct sunlight, reducing heat inside your home while keeping entry steps dry in rainy weather.",
      "Unlike fabric awnings that tear, rot, or fade in the South African sun, aluminium awnings last for decades without peeling, rusting, or requiring canvas replacements."
    ],
    specifications: [
      { label: "Awning Types", value: "Fixed Cantilever Awnings, Louvred Canopies, and Polycarbonate Glass Overhangs" },
      { label: "Material", value: "High-Strength Powder Coated Aluminium Frame & Panels" },
      { label: "Finishes", value: "Charcoal, Matte Black, Pure White, Bronze, or Anodised Silver" },
      { label: "Water Drainage", value: "Integrated Front Gutters and Side Water Discharge Channels" },
      { label: "Wind & Hail Rating", value: "Engineered to Withstand High Coastal Winds and Heavy Summer Hail" },
      { label: "Mounting", value: "Heavy-Duty Wall Anchor Brackets Bolted Directly into Brickwork" }
    ]
  },
  features: [
    {
      id: "feat-sun-block",
      title: "Blocks Blistering Sun",
      description: "Shades windows to keep rooms significantly cooler during peak summer heat.",
      icon: "sunny-outline"
    },
    {
      id: "feat-rain-cover",
      title: "Dry Entryways",
      description: "Keeps your front door and porch completely dry when unlocking doors in the rain.",
      icon: "rainy-outline"
    },
    {
      id: "feat-hail-proof",
      title: "Hail & Storm Resistant",
      description: "Durable metal and polycarbonate panels withstand severe hail strikes without cracking.",
      icon: "shield-checkmark-outline"
    }
  ],
  process: {
    sectionHeading: "4-Step Awning Installation Process",
    steps: [
      {
        stepNumber: 1,
        title: "Measurement & Assessment",
        description: "We measure your door or window width, check wall type, and agree on projection depth."
      },
      {
        stepNumber: 2,
        title: "Workshop Assembly",
        description: "Awning frame brackets and canopy panels are cut and assembled to exact size."
      },
      {
        stepNumber: 3,
        title: "Wall Anchoring & Sealing",
        description: "Our installers anchor support brackets with expanding bolts and apply waterproof flashing."
      },
      {
        stepNumber: 4,
        title: "Waterflow Check & Handover",
        description: "We verify gutter drainage channels and hand over your product warranty."
      }
    ]
  },
  faqs: [
    {
      question: "Will aluminium awnings rust in coastal salt air?",
      answer: "No, our awnings are constructed from marine-grade aluminium and powder coated to prevent any rust or corrosion."
    },
    {
      question: "Can awnings be installed over commercial retail shop doors?",
      answer: "Yes, we install commercial door canopies and covered walkway awnings for businesses and retail stores."
    }
  ],
  relatedServices: [
    {
      serviceId: "srv-aluminium-pergolas",
      title: "Aluminium Pergolas",
      slug: "aluminium-pergolas",
      shortDescription: "Custom shaded pergolas and deck covers.",
      thumbnailImage: "/images/patio_enclosure.png"
    },
    {
      serviceId: "srv-steel-carports",
      title: "Steel Carports & Shadeports",
      slug: "steel-carports",
      shortDescription: "Heavy-duty vehicle shade and hail protection.",
      thumbnailImage: "/images/patio_enclosure.png"
    }
  ],
  seo: {
    titleTag: "Aluminium Awnings & Door Canopies | South Africa",
    metaDescription: "Custom aluminium awnings and door canopies. Hail-proof sun and rain protection for windows and doorways across South Africa.",
    keywords: ["aluminium awnings", "door canopies", "window awnings", "aluminium canopies SA"],
    canonicalUrl: "https://example.com/services/aluminium-awnings",
    openGraphImage: "https://example.com/images/og/aluminium-awnings.jpg"
  },
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Aluminium Awnings Installation",
    "provider": {
      "@type": "Organization",
      "name": "Aluminium Windows & Doors SA"
    }
  }
};
