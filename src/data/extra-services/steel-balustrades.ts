import type { Service } from "@/data/services";
import type { ServicePageContent } from "@/data/service-pages";
import { siteUrl } from "@/lib/site";

export const service: Service = {
  id: "steel-balustrades",
  title: "Steel Balustrades",
  slug: "/services/steel-balustrades",
  shortDescription: "Strong, stylish steel safety railings for balconies, stairs & decks.",
  longDescription:
    "Ensure family safety and upgrade your staircase or balcony aesthetics with custom-welded steel balustrades and stainless steel wire railings. Built from heavy-gauge steel tubing, horizontal slats, wrought iron scrolls, or stainless steel cable infills, and finished with a durable powder coating.",
  features: [
    "Custom-welded steel posts and handrails for rock-solid support",
    "Horizontal slat, vertical picket, wrought iron & cable designs",
    "Anti-corrosion galvanising and powder coating for outdoor use",
    "Compliant 1.0m–1.2m safety heights",
    "Top-mounted base plates or side fascia mounting options",
    "Marine-grade stainless steel 304/316 available for coastal areas",
  ],
  imagePath: "/images/glass_balustrade.png",
  iconName: "Layers",
  featured: true,
};

export const page: ServicePageContent = {
  id: "steel-balustrades",
  slug: "steel-balustrades",
  fullPageUrl: `${siteUrl}/services/steel-balustrades`,
  seo: {
    titleTag: "Steel Balustrades & Stair Handrails | Gauteng",
    metaDescription:
      "Custom steel balustrades and handrails for stairs, balconies, and decks. Solid welded steel, modern powder coating, and professional installation across Gauteng.",
    keywords: [
      "steel balustrades",
      "stair handrails",
      "balcony steel railings",
      "wrought iron balustrades",
      "steel railings gauteng",
    ],
    canonicalUrl: `${siteUrl}/services/steel-balustrades`,
    openGraphImage: `${siteUrl}/images/glass_balustrade.png`,
  },
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Steel Balustrades Installation",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Aluminium Designs",
    },
  },
  hero: {
    headline: "Custom Steel Balustrades & Handrails",
    subheadline:
      "Ensure family safety and upgrade your staircase or balcony aesthetics with custom-welded steel balustrades and stainless steel wire railings.",
    badgeText: "Custom Steel Balustrades & Handrails",
    primaryCtaText: "Get a Balustrade Quote",
    secondaryCtaText: "Explore Steel Designs",
  },
  overview: {
    heading: "Sturdy Steel Railings & Handrails Built to Last",
    paragraphs: [
      "Whether for an internal loft staircase, an outdoor raised balcony, or a commercial ramp handrail, our steel balustrades deliver unmatched strength and modern design.",
      "Custom welded from tubular steel, horizontal square slats, wrought iron scrolls, or stainless steel tension cable infills, finished with durable powder coating.",
    ],
    keyFeaturesNotice:
      "All balustrades are electro-galvanised and powder coated, with mounting options to suit concrete, timber, or steel structures.",
  },
  benefits: {
    title: "Why Choose Our Steel Balustrades",
    items: [
      {
        icon: "ShieldCheck",
        title: "Solid Steel Safety",
        description:
          "Rigid welded steel posts and handrails provide firm, rock-solid support when leaned against.",
      },
      {
        icon: "Paintbrush",
        title: "Modern & Classic Styles",
        description:
          "Choose from minimalist horizontal black steel bars or decorative wrought iron patterns.",
      },
      {
        icon: "Droplets",
        title: "Outdoor Weather Resistance",
        description:
          "Treated with anti-corrosion primer and baked powder coating to prevent rust outdoors.",
      },
      {
        icon: "Wrench",
        title: "Heavy-Duty Mounting",
        description:
          "Anchored with expansion bolts or side fascia brackets for a secure, long-lasting fit.",
      },
    ],
  },
  productTypes: {
    title: "Choose the Right Steel Balustrade Style",
    description:
      "From sleek modern slats to classic scrollwork, we fabricate balustrades to match your home's architecture.",
    items: [
      {
        name: "Horizontal Slat Railings",
        tagline: "Modern, minimalist, and on-trend",
        description:
          "Clean horizontal square bars that frame views while keeping the space secure.",
        idealFor: "Contemporary homes, balconies, and staircases.",
      },
      {
        name: "Vertical Picket Rails",
        tagline: "Traditional protection with open sightlines",
        description:
          "Vertical steel pickets spaced to building code that suit both classic and modern builds.",
        idealFor: "Family homes with children and pets.",
      },
      {
        name: "Stainless Steel Cable Railings",
        tagline: "Near-invisible, coastal-grade infill",
        description:
          "Tensioned stainless steel cables with slim posts for an almost frameless look.",
        idealFor: "Coastal homes, decks, and view-front balconies.",
      },
      {
        name: "Wrought Iron Scrollwork",
        tagline: "Decorative, timeless elegance",
        description:
          "Hand-forged scroll patterns that add character and old-world charm.",
        idealFor: "Heritage homes, front entrances, and feature staircases.",
      },
    ],
  },
  glazingOptions: {
    title: "Material & Finish Options",
    description:
      "The material and finish you choose determine strength, rust resistance, and overall appearance.",
    options: [
      {
        name: "Mild Steel with Powder Coating",
        description:
          "Affordable, weldable steel finished in Matte Black, Charcoal, White, or Bronze.",
      },
      {
        name: "Hot-Dip Galvanised Steel",
        description:
          "Extra corrosion protection for exposed outdoor and coastal installations.",
      },
      {
        name: "Stainless Steel 304/316",
        description:
          "Marine-grade stainless steel cables and posts that never rust.",
      },
    ],
  },
  specifications: {
    title: "Technical Specifications & Hardware",
    items: [
      { label: "Balustrade Styles", value: "Horizontal slat railings, vertical picket rails, wrought iron, and stainless cable railings" },
      { label: "Material", value: "Heavy-gauge mild steel tubing, solid square bar, or stainless steel 304/316" },
      { label: "Height Standards", value: "Standard 1.0m to 1.2m safety heights compliant with building codes" },
      { label: "Finishes", value: "Electro-galvanised and powder coated in Matte Black, Charcoal, White, or Bronze" },
      { label: "Mounting Options", value: "Top mounted base plates or side fascia mounted brackets with heavy expansion bolts" },
      { label: "Applications", value: "Indoor & outdoor staircases, balconies, decks, ramps, and mezzanine floors" },
    ],
  },
  installationProcess: {
    title: "Our Simple 4-Step Balustrade Installation Process",
    steps: [
      {
        stepNumber: "01",
        title: "Measurement & Stair Angle Check",
        description:
          "We measure your staircase rise and run or balcony perimeter to ensure proper handrail height.",
      },
      {
        stepNumber: "02",
        title: "Workshop Fabrication",
        description:
          "Steel posts, infill bars, and top handrails are welded and ground smooth before coating.",
      },
      {
        stepNumber: "03",
        title: "On-Site Core Drilling & Bolting",
        description:
          "Our installers anchor base plates into concrete or timber stringers with heavy-duty fasteners.",
      },
      {
        stepNumber: "04",
        title: "Stiffness Check & Handover",
        description:
          "We stress test all post connections, clean up mounting points, and hand over your warranty.",
      },
    ],
  },
  reviews: [
    {
      authorName: "Sibusiso T.",
      location: "Homeowner, Boksburg",
      rating: 5,
      date: "2025-10-22",
      comment:
        "Our balcony balustrade is rock solid and looks fantastic. The matte black slats completely changed the look of our home.",
    },
    {
      authorName: "Adele P.",
      location: "Homeowner, Kempton Park",
      rating: 5,
      date: "2025-11-28",
      comment:
        "We had steel handrails fitted on a steep staircase. The workmanship is excellent and the rails feel incredibly sturdy.",
    },
  ],
  faqs: [
    {
      question: "Are steel balustrades suitable for coastal outdoor balconies?",
      answer:
        "Yes. For coastal areas we hot-dip galvanise the steel before powder coating, or use marine-grade stainless steel cables to prevent salt corrosion.",
    },
    {
      question: "Can you match the balustrades to my existing security gates?",
      answer:
        "Yes. We can fabricate matching steel designs and paint finishes to create a cohesive look across your whole home.",
    },
    {
      question: "What height must a balustrade be to comply with building codes?",
      answer:
        "Standard safety heights are between 1.0m and 1.2m depending on the drop height. We confirm the correct height for your specific staircase or balcony during the site measurement.",
    },
    {
      question: "How do I maintain my steel balustrade?",
      answer:
        "Simply wipe the frames with warm soapy water twice a year. The powder-coated finish needs no repainting and resists rust for decades.",
    },
  ],
};
