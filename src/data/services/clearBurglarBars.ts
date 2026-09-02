import { ServiceObject } from '../../types/service';

export const clearBurglarBarsService: ServiceObject = {
  id: "srv-clear-burglar-bars",
  slug: "clear-burglar-bars",
  serviceName: "Clear Burglar Bars",
  tagline: "Transparent Polycarbonate Security Bars for Modern Aluminium Windows",
  category: "Steel & Security",
  pricingGuide: {
    estimatedStartingPrice: "R280 - R450",
    priceUnit: "per window bar strip / opening",
    priceFactors: [
      "Window frame dimensions and number of transparent bars required",
      "Direct aluminium frame rivet mounting vs masonry wall mounting",
      "Standard 5mm vs heavy-duty 6mm high-impact polycarbonate strips",
      "Full home installation package discounts"
    ]
  },
  hero: {
    badge: "Transparent Polycarbonate Window Bars",
    headline: "Transparent Clear Burglar Bars for Aluminium Windows",
    subheadline: "Protect your family without feeling caged in. High-tensile clear polycarbonate security bars provide unobstructed views, zero rust, and unbeatable impact strength.",
    primaryCtaText: "Request Clear Bars Quote",
    primaryCtaLink: "/contact",
    secondaryCtaText: "View Bar Specifications",
    secondaryCtaLink: "#specs",
    heroImage: "/images/services/clear-burglar-bars-hero.webp"
  },
  overview: {
    heading: "Clear Polycarbonate Window Security Bars for Clear Garden Views",
    paragraphs: [
      "Enjoy uninterrupted outdoor scenery and natural light without compromising home security. Our clear burglar bars are manufactured from 100% virgin optical-grade polycarbonate — the exact same material used in riot shields and bullet-resistant cockpit glass.",
      "Custom-fitted directly into your aluminium window frames using tamper-proof stainless steel pop-rivets or one-way security screws. Also known in South Africa as transparent diefwering, they never rust, peel, or block emergency egress views."
    ],
    specifications: [
      { label: "Material", value: "High-Tensile 5mm-6mm Virgin Optical Polycarbonate" },
      { label: "Impact Resistance", value: "Can Withstand Over 3,000 kg of Direct Hammer Force" },
      { label: "UV Protection", value: "Double-Sided UV-Stabilized Layer (Will Not Yellow or Turn Brittle)" },
      { label: "Mounting System", value: "Recessed Stainless Steel Blind Rivets or Tamper-Proof Safety Fasteners" },
      { label: "Spacing Gap", value: "Compliant with 100mm-120mm South African Security Spacing Regulations" },
      { label: "Compatibility", value: "Engineered Specifically for Aluminium, Wooden, and Steel Window Frames" }
    ]
  },
  features: [
    {
      id: "feat-crystal-clear",
      title: "100% Unobstructed Views",
      description: "Crystal clear transparency gives you uninterrupted views of your garden, pool, and surroundings.",
      icon: "eye-outline"
    },
    {
      id: "feat-unbreakable",
      title: "Riot Shield Strength",
      description: "Virtually unbreakable under sledgehammer strikes, crowbars, and blunt forced entry attempts.",
      icon: "shield-checkmark-outline"
    },
    {
      id: "feat-no-rust",
      title: "Zero Rust & Peeling",
      description: "Unlike steel bars, clear polycarbonate never rusts, requires zero painting, and resists harsh weather.",
      icon: "sparkles-outline"
    }
  ],
  process: {
    sectionHeading: "Our 4-Step Clear Burglar Bar Fitting",
    steps: [
      {
        stepNumber: 1,
        title: "Window Survey & Bar Layout",
        description: "We measure your window openings and calculate exact bar spacings compliant with security regulations."
      },
      {
        stepNumber: 2,
        title: "Precision Strip Cutting",
        description: "High-grade UV-coated polycarbonate strips are machine-cut to fit the inner frame rebates precisely."
      },
      {
        stepNumber: 3,
        title: "Tamper-Proof Installation",
        description: "Strips are anchored directly into your aluminium window frames with heavy-duty stainless steel rivets."
      },
      {
        stepNumber: 4,
        title: "Tension Testing & Handover",
        description: "Every bar is stress-tested for rigid hold, and we hand over your 10-year UV and material warranty."
      }
    ]
  },
  faqs: [
    {
      question: "Can intruders cut through clear polycarbonate burglar bars?",
      answer: "Polycarbonate cannot be cut with standard hand tools, wire cutters, or hacksaws quickly. It absorbs heavy blunt shock without shattering and bends under extreme force while retaining its anchorage."
    },
    {
      question: "Do clear burglar bars yellow or become cloudy in the hot sun?",
      answer: "No, our polycarbonate bars are double-sided UV stabilized with a 10-year warranty against sun discolouration, fogging, and embrittlement."
    },
    {
      question: "Can clear burglar bars be fitted on existing aluminium sliding windows?",
      answer: "Yes, they are custom-mounted flush inside the aluminium frame sash so that sliding and top-hung window panes open and close smoothly."
    }
  ],
  relatedServices: [
    {
      serviceId: "srv-aluminium-windows",
      title: "Aluminium Windows",
      slug: "aluminium-windows",
      shortDescription: "Custom energy-saving aluminium windows.",
      thumbnailImage: "/images/services/windows-thumb.webp"
    },
    {
      serviceId: "srv-burglar-bars",
      title: "Steel Burglar Bars",
      slug: "burglar-bars",
      shortDescription: "Traditional welded solid steel security bars.",
      thumbnailImage: "/images/services/burglar-bars-thumb.webp"
    }
  ],
  seo: {
    titleTag: "Clear Burglar Bars for Aluminium Windows | Polycarbonate Security SA",
    metaDescription: "Transparent polycarbonate clear burglar bars for aluminium windows. Unbreakable riot-shield strength, zero rust, crystal clear garden views, and expert installation.",
    keywords: [
      "clear burglar bars",
      "polycarbonate burglar bars",
      "transparent burglar bars",
      "clear bars for aluminium windows",
      "clearview burglar bars",
      "see through security bars",
      "diefwering vir aluminium vensters"
    ],
    canonicalUrl: "https://aluminiumandsteelsa.co.za/services/clear-burglar-bars",
    openGraphImage: "https://aluminiumandsteelsa.co.za/images/og/clear-burglar-bars.jpg"
  },
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Clear Burglar Bars Installation",
    "provider": {
      "@type": "Organization",
      "name": "Aluminium Designs SA"
    }
  }
};
