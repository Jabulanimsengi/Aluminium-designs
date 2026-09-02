import { ServiceObject } from '../../types/service';

export const burglarBarsService: ServiceObject = {
  id: "srv-burglar-bars",
  slug: "burglar-bars",
  serviceName: "Burglar Bars",
  tagline: "Solid Steel Window Bars & Security Grilles for Reliable Home Security",
  category: "Steel & Security",
  pricingGuide: {
    estimatedStartingPrice: "R350 - R650",
    priceUnit: "per window opening fitted",
    priceFactors: [
      "Solid 10mm-12mm square bar vs Spanish curved or cottage pane grid styles",
      "Internal reveal mounting vs exterior face brick anchored installation",
      "Hot-dip galvanizing vs double-coat anti-rust epoxy powder coating",
      "Total number of window units secured in property"
    ]
  },
  hero: {
    badge: "Custom Steel Window Security Bars",
    headline: "Custom Steel Burglar Bars",
    subheadline: "Protect your family and property with strong, custom-welded steel burglar bars designed to fit any window size and style securely.",
    primaryCtaText: "Get a Free Security Quote",
    primaryCtaLink: "/contact",
    secondaryCtaText: "View Burglar Bar Styles",
    secondaryCtaLink: "#specs",
    heroImage: "/images/services/burglar-bars-hero.webp"
  },
  overview: {
    heading: "Strong Steel Window Security Bars for Maximum Protection",
    paragraphs: [
      "Burglar bars provide a crucial first line of defense for South African homes, deterring intruders and preventing unauthorized entry through open or broken windows.",
      "Custom manufactured from solid solid square bar, tubular steel, or cottage pane patterns, and powder coated or epoxy painted to resist rust and match your window frames."
    ],
    specifications: [
      { label: "Bar Styles", value: "Cottage Pane Grids, Spanish Bars, Standard Upright Bars, and Clear Polycarbonate Bars" },
      { label: "Steel Material", value: "Solid 10mm-12mm Mild Steel Bar or Heavy-Duty Square Tubing" },
      { label: "Finishes", value: "Electroplated & Powder Coated White, Matte Black, Charcoal, or Bronze" },
      { label: "Mounting Options", value: "Directly Anchored into Brickwork with Tamper-Proof Snap-Off Security Bolts" },
      { label: "Rust Protection", value: "Hot-Dip Galvanized or Double-Coated Anti-Rust Primer" },
      { label: "Custom Fit", value: "Manufactured Locally to Fit Your Exact Window Opening Measurements" }
    ]
  },
  features: [
    {
      id: "feat-solid-steel",
      title: "Solid Steel Strength",
      description: "Welded from solid steel bars that resist cutting, bending, and crowbar leverage.",
      icon: "shield-checkmark-outline"
    },
    {
      id: "feat-tamper-proof",
      title: "Tamper-Proof Fasteners",
      description: "Mounted with shear-head security bolts that cannot be unscrewed from the outside.",
      icon: "lock-closed-outline"
    },
    {
      id: "feat-open-windows",
      title: "Sleep with Windows Open",
      description: "Enjoy cool night air while knowing your bedroom windows are completely secured.",
      icon: "leaf-outline"
    }
  ],
  process: {
    sectionHeading: "Our 4-Step Burglar Bar Installation",
    steps: [
      {
        stepNumber: 1,
        title: "Security Assessment & Measuring",
        description: "We measure all window openings and recommend the best bar style for each room."
      },
      {
        stepNumber: 2,
        title: "Custom Workshop Fabrication",
        description: "Bars are precision cut, fully welded, and treated with anti-rust powder coating."
      },
      {
        stepNumber: 3,
        title: "Heavy-Duty Wall Anchoring",
        description: "Our installers drill into solid brickwork and fasten the bars with security bolts."
      },
      {
        stepNumber: 4,
        title: "Inspection & Handover",
        description: "We check every anchor point for rock-solid stability and clean up all drilling dust."
      }
    ]
  },
  faqs: [
    {
      question: "Are burglar bars mounted inside or outside the window?",
      answer: "We can install them internally or externally depending on whether your windows open inwards or outwards and your personal aesthetic preference."
    },
    {
      question: "Will the burglar bars rust over time?",
      answer: "No, all our steel security bars receive an anti-corrosion primer and high-grade exterior powder coating to ensure lasting rust resistance."
    }
  ],
  relatedServices: [
    {
      serviceId: "srv-clear-burglar-bars",
      title: "Clear Burglar Bars",
      slug: "clear-burglar-bars",
      shortDescription: "Transparent polycarbonate bars for aluminium windows.",
      thumbnailImage: "/images/services/clear-bars-thumb.webp"
    },
    {
      serviceId: "srv-trellis-security-gates",
      title: "Trellis Doors & Slamlock Gates",
      slug: "trellis-doors-security-gates",
      shortDescription: "Expanding slamlock security gates for doors.",
      thumbnailImage: "/images/services/trellis-thumb.webp"
    }
  ],
  seo: {
    titleTag: "Steel Burglar Bars & Security Grilles | Gauteng & South Africa",
    metaDescription: "Custom solid steel burglar bars, Spanish bars, and cottage pane window security grilles. Anti-rust powder coating, tamper-proof bolts, and expert installation.",
    keywords: [
      "burglar bars",
      "steel window bars",
      "window security bars",
      "burglar proofing",
      "burglar guards for windows",
      "spanish burglar bars",
      "sliding burglar bars for windows",
      "diefwering"
    ],
    canonicalUrl: "https://aluminiumandsteelsa.co.za/services/burglar-bars",
    openGraphImage: "https://aluminiumandsteelsa.co.za/images/og/burglar-bars.jpg"
  },
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Burglar Bars Installation",
    "provider": {
      "@type": "Organization",
      "name": "Steel & Security Solutions SA"
    }
  }
};
