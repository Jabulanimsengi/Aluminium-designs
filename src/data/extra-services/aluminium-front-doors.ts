import type { Service } from "@/data/services";
import type { ServicePageContent } from "@/data/service-pages";
import { siteUrl } from "@/lib/site";

export const service: Service = {
  id: "aluminium-front-doors",
  title: "Aluminium Front Doors",
  slug: "/services/aluminium-front-doors",
  shortDescription: "Bold, secure and elegant aluminium entrance doors for modern homes.",
  longDescription:
    "Create a striking first impression with custom aluminium pivot and hinged entrance doors built for top security and lasting beauty. Engineered to withstand harsh sun, wind and rain without warping, swelling or rotting like traditional wooden doors, they combine modern aesthetics with high-strength multi-point locking.",
  features: [
    "Modern pivot and heavy-duty hinged entrance doors",
    "Stainless steel long pull handles with multi-point locks",
    "Powder-coated charcoal, matte black, white or wood-grain finishes",
    "Frosted, tinted or clear safety glass inserts",
    "Heavy-duty perimeter rubber draft seals",
    "Aluminium that never warps, swells or rots",
  ],
  imagePath: "/images/real_images/products/doors/aluminium_door_one.jpeg",
  iconName: "Lock",
  featured: true,
};

export const page: ServicePageContent = {
  id: "aluminium-front-doors",
  slug: "aluminium-front-doors",
  fullPageUrl: `${siteUrl}/services/aluminium-front-doors`,
  seo: {
    titleTag: "Aluminium Front Doors & Pivot Doors | Custom Entrances Gauteng",
    metaDescription:
      "Upgrade to modern aluminium front doors and pivot doors. Custom designs, stainless steel pull handles, multi-point security locks and expert installation across Gauteng.",
    keywords: [
      "aluminium front doors",
      "aluminium pivot doors",
      "modern entrance doors",
      "front door installation gauteng",
      "custom aluminium doors",
      "security front doors",
    ],
    canonicalUrl: `${siteUrl}/services/aluminium-front-doors`,
    openGraphImage: `${siteUrl}/images/real_images/products/doors/aluminium_door_one.jpeg`,
  },
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Aluminium Front Doors Installation",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Aluminium Designs",
    },
  },
  hero: {
    headline: "Custom Aluminium Front Doors",
    subheadline:
      "Create a striking first impression with custom aluminium pivot and hinged entrance doors built for top security and lasting beauty.",
    badgeText: "Custom Front Entrance & Pivot Doors",
    primaryCtaText: "Get a Free Quote",
    secondaryCtaText: "Explore Front Door Designs",
  },
  overview: {
    heading: "Grand Aluminium Entrance Doors Built for Security & Style",
    paragraphs: [
      "Your front door sets the tone for your entire home. Our custom aluminium front doors and oversized pivot doors combine modern aesthetics with high-strength security.",
      "Engineered to withstand harsh sun, wind and rain without warping, swelling or rotting like traditional wooden doors.",
    ],
    keyFeaturesNotice:
      "All front doors include stainless steel pull handles, multi-point security locks and heavy-duty perimeter draft seals as standard.",
  },
  benefits: {
    title: "Why Choose Our Aluminium Front Doors",
    items: [
      {
        icon: "Lock",
        title: "High-Security Locking",
        description:
          "Fitted with multi-point slam locks and deadbolts for maximum protection of your home.",
      },
      {
        icon: "Sun",
        title: "Weather & Sun Resistant",
        description:
          "Unlike timber, aluminium never warps, shrinks or needs endless repainting in harsh sun and rain.",
      },
      {
        icon: "Layers",
        title: "Striking First Impression",
        description:
          "Sleek pivot and hinged designs with glass inserts create a modern, elegant entrance.",
      },
      {
        icon: "ShieldCheck",
        title: "Built to Last",
        description:
          "Reinforced high-grade aluminium frames and cores deliver lasting strength and low maintenance.",
      },
    ],
  },
  productTypes: {
    title: "Choose the Right Front Door for Your Home",
    description:
      "Every entrance has its own style and size needs. We build all major front door configurations to suit your facade.",
    items: [
      {
        name: "Pivot Entrance Doors",
        tagline: "A modern statement entrance",
        description:
          "Large, elegant doors that rotate on a central pivot hinge, carrying wide oversized panels with effortless balance.",
        idealFor: "Modern facades and grand main entrances.",
      },
      {
        name: "Hinged Front Doors",
        tagline: "Classic operation with modern strength",
        description:
          "Heavy-duty hinged doors fitted with multi-point locks and stainless steel pull handles for dependable daily use.",
        idealFor: "Standard entrance frames and family homes.",
      },
      {
        name: "Glass Panel Insert Doors",
        tagline: "Light-filled entrances with privacy",
        description:
          "Front doors featuring frosted, tinted or clear safety glass strips that brighten your entrance.",
        idealFor: "Entrances needing natural light and privacy.",
      },
      {
        name: "Double Entrance Doors",
        tagline: "Wide, impressive double doorways",
        description:
          "Double aluminium entrance doors that open wide for moving furniture and entertaining guests.",
        idealFor: "Grand entrances and wider doorways.",
      },
    ],
  },
  glazingOptions: {
    title: "Glass & Glazing Options",
    description:
      "The glass in your front door controls privacy, security and how much light enters your home.",
    options: [
      {
        name: "Clear Toughened Safety Glass",
        description:
          "Heat-treated safety glass that is strong and shatter-resistant, letting maximum light into your entrance.",
      },
      {
        name: "Frosted Privacy Glass",
        description:
          "Obscured glass that lets light through while keeping your interior private from the street.",
      },
      {
        name: "Tinted Solar-Control Glass",
        description:
          "Treated glass that reduces glare and heat build-up while adding a sleek, modern finish.",
      },
      {
        name: "Laminated Security Glass",
        description:
          "Two bonded glass layers that hold together on impact, making forced entry far more difficult.",
      },
    ],
  },
  specifications: {
    title: "Technical Specifications & Hardware",
    items: [
      { label: "Door Types", value: "Modern pivot doors, heavy-duty hinged doors and glass panel inserts" },
      { label: "Material", value: "Reinforced high-grade aluminium frame and core" },
      { label: "Finish Options", value: "Powder-coated charcoal, matte black, white or wood-grain look" },
      { label: "Handles & Locks", value: "Stainless steel long pull handles with multi-point security locks" },
      { label: "Glass Inserts", value: "Frosted, tinted or clear safety glass strips" },
      { label: "Weather Sealing", value: "Heavy-duty perimeter rubber draft seals" },
    ],
  },
  installationProcess: {
    title: "How We Build & Install Your Front Door",
    steps: [
      {
        stepNumber: "01",
        title: "Design Consultation & Measuring",
        description:
          "We help you select styles, handles and glass inserts, and take exact measurements of your entrance.",
      },
      {
        stepNumber: "02",
        title: "Custom Fabrication",
        description:
          "Your entrance door is built in our workshop with high-strength corner joints and quality hardware.",
      },
      {
        stepNumber: "03",
        title: "Removal & Secure Fitting",
        description:
          "We take out your old door, securely anchor the new frame and fit the door panel.",
      },
      {
        stepNumber: "04",
        title: "Lock Testing & Handover",
        description:
          "We check lock alignment, test handle operation and provide keys and warranty.",
      },
    ],
  },
  reviews: [
    {
      authorName: "Pieter S.",
      location: "Homeowner, Randburg",
      rating: 5,
      date: "2025-11-25",
      comment:
        "Our new pivot front door completely changed the look of the house. The lock feels solid and the door swings perfectly.",
    },
    {
      authorName: "Zanele M.",
      location: "Homeowner, Sandton",
      rating: 5,
      date: "2025-12-14",
      comment:
        "Beautiful matte black aluminium door with frosted glass. Installed neatly and the draft seals keep the entrance warm.",
    },
  ],
  faqs: [
    {
      question: "Are aluminium front doors more durable than wooden doors?",
      answer:
        "Yes, aluminium doors do not rot, swell during rainy seasons or crack in intense summer sun, making them far easier to maintain than wood.",
    },
    {
      question: "Can I choose custom handles and frosted glass panels?",
      answer:
        "Absolutely. You can customise handle lengths, lock setups and frosted or tinted safety glass inserts to match your style.",
    },
    {
      question: "Do you supply double aluminium front doors?",
      answer:
        "Yes, we manufacture double entrance doors that open wide for moving furniture and entertaining, fitted with secure multi-point locks.",
    },
    {
      question: "Can the front door be fitted with a security gate or extra locks?",
      answer:
        "Yes, we can supply matching steel security gates and upgrade to multi-point deadbolt locks for added protection.",
    },
  ],
};
