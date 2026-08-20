import type { Service } from "@/data/services";
import type { ServicePageContent } from "@/data/service-pages";
import { siteUrl } from "@/lib/site";

export const service: Service = {
  id: "custom-welding",
  title: "Custom Welding & Fabrication",
  slug: "/services/custom-welding",
  shortDescription: "Expert on-site welding, steel cutting and custom metal fabrication for homes and businesses.",
  longDescription:
    "From structural steel beams and support posts to bespoke gates, balustrades and metal furniture, our boilermakers turn your sketches and blueprints into solid, precision-welded metalwork. We work with mild steel, stainless steel and aluminium using MIG, TIG and arc welding, with mobile generator rigs for repairs directly on your premises.",
  features: [
    "Mobile on-site welding rigs for repairs at your property",
    "Certified boilermakers with clean, deep-penetration welds",
    "MIG, TIG, arc and mobile generator welding processes",
    "CNC plasma cutting, oxy-acetylene cutting and tube bending",
    "Structural beams, columns, lintels, brackets and racks",
    "Hot-dip galvanizing, powder coating and epoxy primer finishes",
  ],
  imagePath: "/images/slatted_gate.png",
  iconName: "Flame",
  featured: true,
};

export const page: ServicePageContent = {
  id: "custom-welding",
  slug: "custom-welding",
  fullPageUrl: `${siteUrl}/services/custom-welding`,
  seo: {
    titleTag: "Custom Welding & Fabrication | On-Site Metalwork Gauteng",
    metaDescription:
      "Professional custom welding and steel fabrication across Gauteng. Mobile on-site welding, structural steel beams, bespoke gates and metal furniture built to your exact design.",
    keywords: [
      "custom welding",
      "steel fabrication gauteng",
      "mobile welder johannesburg",
      "metal fabrication",
      "structural steel beams",
      "on-site welding repairs",
    ],
    canonicalUrl: `${siteUrl}/services/custom-welding`,
    openGraphImage: `${siteUrl}/images/slatted_gate.png`,
  },
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Custom Welding & Fabrication Installation",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Aluminium Designs",
    },
  },
  hero: {
    headline: "Custom Welding & Steel Fabrication",
    subheadline:
      "From custom structural steel beams and support posts to bespoke metal furniture and on-site welding repairs, our boilermakers deliver quality metalwork.",
    badgeText: "Custom Steel Fabrication & On-Site Welding",
    primaryCtaText: "Get a Welding Quote",
    secondaryCtaText: "Explore Fabrication Work",
  },
  overview: {
    heading: "Precision Metal Fabrication & Mobile On-Site Welding",
    paragraphs: [
      "Have a unique steel project or need emergency on-site welding repairs? Our experienced welders and fabricators handle residential, agricultural and commercial metalwork projects.",
      "We work with mild steel, stainless steel and aluminium, offering MIG, TIG and arc welding, plasma cutting, metal bending and protective coatings.",
    ],
    keyFeaturesNotice:
      "Our mobile generator welding rigs come to you, so broken gate hinges, steel frames and trailers can be repaired directly on site.",
  },
  benefits: {
    title: "Why Choose Our Welding & Fabrication Team",
    items: [
      {
        icon: "Flame",
        title: "Expert Welding Processes",
        description:
          "MIG, TIG and arc welding delivered with deep penetration and clean, ground finishes for strong, lasting joints.",
      },
      {
        icon: "Wrench",
        title: "Certified Boilermakers",
        description:
          "Qualified tradesmen ensure strong joints, accurate measurements and neat, professional results on every job.",
      },
      {
        icon: "Compass",
        title: "Built to Your Exact Design",
        description:
          "We bring your sketches, blueprints and custom ideas to life in solid metal, from beams to bespoke furniture.",
      },
      {
        icon: "ShieldCheck",
        title: "Protective Finishes",
        description:
          "Hot-dip galvanizing, powder coating and epoxy primer protect your steelwork from rust for years to come.",
      },
    ],
  },
  productTypes: {
    title: "What We Can Fabricate & Weld for You",
    description:
      "Our workshop and mobile rigs cover a wide range of metalwork, from structural steel to decorative pieces.",
    items: [
      {
        name: "Structural Steel Fabrication",
        tagline: "Beams, columns and lintels for renovations",
        description:
          "We fabricate and install steel support beams, columns and lintels for wall removals, room additions and load-bearing changes.",
        idealFor: "Home renovations, builders and room additions.",
      },
      {
        name: "Custom Gates & Balustrades",
        tagline: "Bespoke steelwork for your property",
        description:
          "From driveway gates to steel balustrades, we cut, weld and finish metalwork built to fit your exact openings.",
        idealFor: "Homeowners upgrading security and safety features.",
      },
      {
        name: "Metal Furniture & Racks",
        tagline: "Made-to-order frames, tables and shelving",
        description:
          "Custom steel frames, tables, brackets, grids and storage racks fabricated to your dimensions and finish requirements.",
        idealFor: "Homes, workshops and commercial storage.",
      },
      {
        name: "On-Site Welding Repairs",
        tagline: "Mobile rig that comes to you",
        description:
          "Fully equipped welding vans repair broken gate hinges, steel frames, trailers and machinery directly on your premises.",
        idealFor: "Emergency repairs and properties without workshop access.",
      },
    ],
  },
  glazingOptions: {
    title: "Material & Finish Options",
    description:
      "The material and protective finish you choose determine strength, rust resistance and overall appearance.",
    options: [
      {
        name: "Mild Steel",
        description:
          "Economical and strong, ideal for structural beams, frames, brackets and general fabrication.",
      },
      {
        name: "Stainless Steel",
        description:
          "Naturally rust-resistant and easy to clean, perfect for balustrades, kitchen frames and outdoor fittings.",
      },
      {
        name: "Aluminium",
        description:
          "Lightweight and corrosion-resistant, ideal for frames, screens and decorative metalwork.",
      },
      {
        name: "Protective Coatings",
        description:
          "Hot-dip galvanizing, powder coating, sandblasting or epoxy primer to protect and colour your metalwork.",
      },
    ],
  },
  specifications: {
    title: "Technical Specifications & Capabilities",
    items: [
      { label: "Welding Processes", value: "MIG/CO2, TIG, stick/arc and mobile generator welding" },
      { label: "Materials Handled", value: "Mild steel (plates, beams, tubes), stainless steel and aluminium" },
      { label: "Capabilities", value: "Custom frameworks, structural support beams, brackets, grids and metal racks" },
      { label: "Cutting & Shaping", value: "CNC plasma cutting, oxy-acetylene cutting and hydraulic tube bending" },
      { label: "Protective Finishes", value: "Hot-dip galvanizing, powder coating, sandblasting or epoxy primer painting" },
      { label: "Service Mode", value: "Workshop fabrication and mobile on-site welding rig available" },
    ],
  },
  installationProcess: {
    title: "Our Simple 4-Step Fabrication Process",
    steps: [
      {
        stepNumber: "01",
        title: "Brief & Measurement",
        description:
          "Send us your project sketch or request an on-site visit for accurate dimension taking.",
      },
      {
        stepNumber: "02",
        title: "Material Prep & Cutting",
        description:
          "Steel tubes, plates and angle sections are cut and prepared for fabrication.",
      },
      {
        stepNumber: "03",
        title: "Welding & Surface Grinding",
        description:
          "Our welders assemble and weld the structure, followed by smooth weld grinding and priming.",
      },
      {
        stepNumber: "04",
        title: "Delivery or On-Site Fitting",
        description:
          "We transport the completed metalwork to your site and bolt or weld it securely into place.",
      },
    ],
  },
  reviews: [
    {
      authorName: "Sipho N.",
      location: "Homeowner, Kempton Park",
      rating: 5,
      date: "2025-11-10",
      comment:
        "They built a custom steel gate frame and welded it on site the same week. Neat welds and a perfect fit on our driveway.",
    },
    {
      authorName: "Megan D.",
      location: "Homeowner, Midrand",
      rating: 5,
      date: "2025-12-05",
      comment:
        "Excellent workmanship on our balcony balustrade. The team followed our design exactly and the powder coating looks great.",
    },
  ],
  faqs: [
    {
      question: "Can you come out to weld something broken at my house?",
      answer:
        "Yes, our mobile welding vans are fully equipped with power generators, welders and cutting tools to fix broken gate hinges, steel frames and trailers on site.",
    },
    {
      question: "Do you build structural steel support beams for home renovations?",
      answer:
        "Yes, we fabricate and install steel support beams, columns and lintels for wall removals and room additions.",
    },
    {
      question: "Which materials do you work with?",
      answer:
        "We work with mild steel, stainless steel and aluminium, and we can advise on the best material for your project based on strength and rust resistance.",
    },
    {
      question: "Do you provide rust protection for fabricated steel?",
      answer:
        "Yes, we offer hot-dip galvanizing, powder coating, sandblasting and epoxy primer painting to protect your metalwork from rust and weathering.",
    },
  ],
};
