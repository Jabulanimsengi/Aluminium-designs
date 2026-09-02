import { ServiceObject } from '../../types/service';

export const seamlessAluminiumGuttersService: ServiceObject = {
  id: "srv-seamless-aluminium-gutters",
  slug: "seamless-aluminium-gutters",
  serviceName: "Seamless Aluminium Gutters",
  tagline: "On-Site Roll-Formed Continuous Aluminium Gutters & Downpipes",
  category: "Rainwater & Roofing",
  pricingGuide: {
    estimatedStartingPrice: "R180 - R290",
    priceUnit: "per linear metre fitted",
    priceFactors: [
      "Total linear meterage of guttering run and roof perimeter",
      "Standard residential (125mm Ogee) vs high-capacity industrial (150mm Ogee) profile",
      "Number of aluminium downpipes, bends, and rainwater offset hoppers",
      "Fascia board and bargeboard replacement or capping requirements"
    ]
  },
  hero: {
    badge: "Continuous On-Site Roll-Formed Gutters",
    headline: "Continuous Seamless Aluminium Gutters & Downpipes",
    subheadline: "Stop leaks and roof rot forever. Custom roll-formed seamless aluminium guttering extruded on-site directly to your exact roof lengths across Gauteng and Pretoria.",
    primaryCtaText: "Get a Free Gutter Quote",
    primaryCtaLink: "/contact",
    secondaryCtaText: "Explore Gutter Profiles",
    secondaryCtaLink: "#specs",
    heroImage: "/images/services/seamless-gutters-hero.webp"
  },
  overview: {
    heading: "Seamless Aluminium Rainwater Systems & Downpipes for Homes and Industrial Buildings",
    paragraphs: [
      "Traditional sectional PVC or galvanized gutters have seams and joints every 3 meters that inevitably crack, sag, and leak over time. Our seamless aluminium gutters are mobile-extruded on-site in continuous, unbroken lengths straight from factory coils.",
      "Manufactured from high-grade architectural aluminium with double-baked silicone polyester enamel that never rusts, peels, or needs painting. We also supply and fit matching fluted aluminium downpipes, fascia boards, and bargeboards."
    ],
    specifications: [
      { label: "Gutter Profiles", value: "Domestic 125mm (5-inch) Ogee and Industrial/Commercial 150mm (6-inch) Ogee" },
      { label: "Material", value: "0.6mm-0.8mm Corrosion-Proof Architectural Grade Aluminium Coil" },
      { label: "Bracket System", value: "Internal Concealed Aluminium Hangers & Heavy-Duty Stainless Screws" },
      { label: "Finish Options", value: "Charcoal, Matte Black, Pure White, Marble White, Dark Brown, Forest Green" },
      { label: "Downpipes", value: "Round or Fluted Rectangular (75x50mm, 100x75mm, 150x100mm) with Rain Diverters" },
      { label: "Additional Services", value: "Fascia Board Capping, Bargeboard Replacement, and Rainwater Harvesting Connections" }
    ]
  },
  features: [
    {
      id: "feat-no-seams",
      title: "100% Seamless Construction",
      description: "Continuous runs without joints eliminate 98% of common gutter leaks and water stains.",
      icon: "water-outline"
    },
    {
      id: "feat-rust-free",
      title: "Corrosion-Proof Durability",
      description: "Baked enamel aluminium resists acid rain, coastal moisture, and harsh UV sunlight.",
      icon: "shield-checkmark-outline"
    },
    {
      id: "feat-concealed-hangers",
      title: "Clean Modern Aesthetics",
      description: "Internal concealed brackets provide sleek rooflines with zero visible exterior screws.",
      icon: "sparkles-outline"
    }
  ],
  process: {
    sectionHeading: "Our 4-Step Gutter Installation Process",
    steps: [
      {
        stepNumber: 1,
        title: "Roofline Survey & Measuring",
        description: "We calculate roof catchment areas, inspect fascia boards, and determine optimal downpipe placement."
      },
      {
        stepNumber: 2,
        title: "Mobile On-Site Roll Forming",
        description: "Our mobile factory vehicle extrudes seamless aluminium gutters to the exact millimetre on-site."
      },
      {
        stepNumber: 3,
        title: "Concealed Hanger Anchoring",
        description: "Gutters are pitched with laser levels for rapid drainage and fastened with hidden internal brackets."
      },
      {
        stepNumber: 4,
        title: "Waterflow Testing & Sign-Off",
        description: "We flush the gutters to verify smooth run-off and issue your comprehensive material warranty."
      }
    ]
  },
  faqs: [
    {
      question: "Why are seamless aluminium gutters better than plastic/PVC gutters?",
      answer: "PVC gutters expand and contract heavily under South African sun, leading to cracked joints and brittle sagging. Seamless aluminium gutters have no joints along the run and maintain structural integrity for over 30 years."
    },
    {
      question: "How long does a typical house gutter installation take?",
      answer: "Because we extrude the continuous gutters directly on-site from our mobile vehicles, most residential homes are completely fitted within 1 single day."
    },
    {
      question: "Can you replace rotten wooden fascia boards when installing new gutters?",
      answer: "Yes, our installation crews can replace old timber fascias with maintenance-free Nutec fibre-cement or aluminium capped fascia and bargeboards before fitting gutters."
    }
  ],
  relatedServices: [
    {
      serviceId: "srv-aluminium-awnings",
      title: "Aluminium Awnings",
      slug: "aluminium-awnings",
      shortDescription: "Custom door awnings and patio rain shields.",
      thumbnailImage: "/images/services/awnings-thumb.webp"
    },
    {
      serviceId: "srv-steel-carports",
      title: "Steel Carports",
      slug: "steel-carports",
      shortDescription: "Heavy-duty steel carports and patio covers.",
      thumbnailImage: "/images/services/carports-thumb.webp"
    }
  ],
  seo: {
    titleTag: "Seamless Aluminium Gutters & Downpipes | Pretoria, Gauteng & SA",
    metaDescription: "Continuous on-site roll-formed seamless aluminium gutters and downpipes in Pretoria & Gauteng. Leak-proof, zero rust, concealed hangers, and fast 1-day installation.",
    keywords: [
      "seamless gutters pretoria",
      "aluminium gutters pretoria",
      "gutter installation pretoria",
      "seamless gutters johannesburg",
      "aluminium guttering near me",
      "custom gutters pretoria",
      "fascia and gutter installers"
    ],
    canonicalUrl: "https://aluminiumandsteelsa.co.za/services/seamless-aluminium-gutters",
    openGraphImage: "https://aluminiumandsteelsa.co.za/images/og/seamless-gutters.jpg"
  },
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Seamless Aluminium Gutters Installation",
    "provider": {
      "@type": "Organization",
      "name": "Aluminium Designs SA"
    }
  }
};
