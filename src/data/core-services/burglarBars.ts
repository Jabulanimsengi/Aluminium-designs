import { ServiceObject } from '../../types/service';

export const burglarBarsService: ServiceObject = {
  id: "srv-burglar-bars",
  slug: "burglar-bars",
  serviceName: "Burglar Bars",
  tagline: "Solid Steel Window Bars & Grilles for Reliable Home Security",
  category: "Steel Security",
  hero: {
    badge: "Custom Steel Window Security Bars",
    headline: "Custom Steel Burglar Bars",
    subheadline: "Protect your family and property with strong, custom-welded steel burglar bars designed to fit any window size and style securely.",
    primaryCtaText: "Get a Free Security Quote",
    primaryCtaLink: "/contact",
    secondaryCtaText: "View Burglar Bar Styles",
    secondaryCtaLink: "#specs",
    heroImage: "/images/real_images/products/security/security_burglar-doors_three.jpeg"
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
      serviceId: "srv-security-gates",
      title: "Security Gates",
      slug: "security-gates",
      shortDescription: "Heavy-duty steel security gates for doors.",
      thumbnailImage: "/images/real_images/products/gates/aluminium_gate_one.jpeg"
    },
    {
      serviceId: "srv-aluminium-windows",
      title: "Aluminium Windows",
      slug: "aluminium-windows",
      shortDescription: "Custom energy-saving aluminium windows.",
      thumbnailImage: "/images/real_images/products/windows/window_aluminium_one.jpeg"
    }
  ],
  seo: {
    titleTag: "Steel Burglar Bars & Window Security | South Africa",
    metaDescription: "Custom steel burglar bars and window safety grilles. Solid steel construction, tamper-proof security bolts, and professional installation across South Africa.",
    keywords: ["burglar bars", "steel window bars", "window security grilles", "burglar bars installation SA"],
    canonicalUrl: "https://example.com/services/burglar-bars",
    openGraphImage: "https://example.com/images/og/burglar-bars.jpg"
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
