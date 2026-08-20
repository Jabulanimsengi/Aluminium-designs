import type { Service } from "@/data/services";
import type { ServicePageContent } from "@/data/service-pages";
import { siteUrl } from "@/lib/site";

export const service: Service = {
  id: "aluminium-french-doors",
  title: "Aluminium French Doors",
  slug: "/services/aluminium-french-doors",
  shortDescription: "Classic double glass doors with modern strength and weather sealing.",
  longDescription:
    "Add timeless charm to your patio, balcony or garden with double hinged aluminium glass doors designed for security and weather resistance. Built with heavy-duty hinges and secure flush bolts, they let in generous natural light while providing wide access and modern insulation.",
  features: [
    "Double opening hinged doors (inward or outward swing)",
    "Clear, frosted or double-glazed safety glass options",
    "Master keyed handle with slave door flush bolts",
    "Double gasket draft protection along all edges",
    "Rustproof aluminium that never needs repainting",
    "Secure multi-point cylinder locks and drop bolts",
  ],
  imagePath: "/images/real_images/products/doors/aluminium_door_two.jpeg",
  iconName: "Sparkles",
  featured: true,
};

export const page: ServicePageContent = {
  id: "aluminium-french-doors",
  slug: "aluminium-french-doors",
  fullPageUrl: `${siteUrl}/services/aluminium-french-doors`,
  seo: {
    titleTag: "Aluminium French Doors & Installation | Double Glass Doors Gauteng",
    metaDescription:
      "Custom aluminium French doors with double hinged glass panels, safety glass, durable weather seals and expert installation across Gauteng.",
    keywords: [
      "aluminium french doors",
      "double glass doors",
      "hinged patio doors",
      "aluminium double doors",
      "french door installation gauteng",
      "safety glass french doors",
    ],
    canonicalUrl: `${siteUrl}/services/aluminium-french-doors`,
    openGraphImage: `${siteUrl}/images/real_images/products/doors/aluminium_door_two.jpeg`,
  },
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Aluminium French Doors Installation",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Aluminium Designs",
    },
  },
  hero: {
    headline: "Custom Aluminium French Doors",
    subheadline:
      "Add timeless charm to your patio, balcony or garden with double hinged aluminium glass doors designed for security and weather resistance.",
    badgeText: "Custom Hinged Double Glass Doors",
    primaryCtaText: "Request a Free Quote",
    secondaryCtaText: "See Door Styles",
  },
  overview: {
    heading: "Timeless Aluminium French Doors for Homes & Verandas",
    paragraphs: [
      "Our aluminium French doors offer a classic double door opening that lets in generous natural light while providing convenient wide access to gardens and balconies.",
      "Built with heavy-duty hinges and secure double door flush bolts, they deliver modern insulation and reliable home security.",
    ],
    keyFeaturesNotice:
      "All French doors include safety glass, double gasket draft protection and secure multi-point cylinder locks with slave door flush bolts.",
  },
  benefits: {
    title: "Why Choose Our Aluminium French Doors",
    items: [
      {
        icon: "Home",
        title: "Wide Dual Opening",
        description:
          "Both door leaves open wide to make moving furniture or entertaining guests easy.",
      },
      {
        icon: "ShieldCheck",
        title: "Reliable Safety Locks",
        description:
          "Sturdy multi-point cylinder locks and internal drop bolts keep both doors firmly anchored.",
      },
      {
        icon: "Sun",
        title: "Generous Natural Light",
        description:
          "Large glass panels flood your room with daylight and open up views of your garden.",
      },
      {
        icon: "Paintbrush",
        title: "Zero Maintenance",
        description:
          "Rustproof aluminium frames never need repainting or sanding like wooden French doors.",
      },
    ],
  },
  productTypes: {
    title: "Choose the Right French Door Configuration",
    description:
      "From swing direction to glass style, we build French doors to suit your space and preferences.",
    items: [
      {
        name: "Inward-Swing French Doors",
        tagline: "Classic opening into your room",
        description:
          "Double doors that swing inwards, ideal for interiors and rooms opening onto a balcony.",
        idealFor: "Bedrooms, dining rooms and upstairs balconies.",
      },
      {
        name: "Outward-Swing Patio French Doors",
        tagline: "Open onto your patio or garden",
        description:
          "Doors that swing outwards, saving interior floor space and connecting directly to outdoor areas.",
        idealFor: "Patios, verandas and garden entrances.",
      },
      {
        name: "Cottage-Pane French Doors",
        tagline: "Traditional charm with glazing bars",
        description:
          "French doors with decorative glazing bars that divide the glass into classic cottage-style panes.",
        idealFor: "Traditional homes and period-style properties.",
      },
      {
        name: "Double-Glazed French Doors",
        tagline: "Extra insulation and noise control",
        description:
          "French doors fitted with double-glazed units for better temperature control and reduced outside noise.",
        idealFor: "Energy-conscious homes and busy streets.",
      },
    ],
  },
  glazingOptions: {
    title: "Glass & Glazing Options",
    description:
      "The glass you choose determines privacy, security and how much heat and noise enters your home.",
    options: [
      {
        name: "Clear Toughened Safety Glass",
        description:
          "Heat-treated safety glass that is strong and shatter-resistant, giving unobstructed views of your garden.",
      },
      {
        name: "Frosted Privacy Glazing",
        description:
          "Obscured glass that lets light through while keeping your interior private from neighbours.",
      },
      {
        name: "Double Glazed Units",
        description:
          "Two glass panes with an insulated air gap that reduces heat transfer and dampens outside noise.",
      },
      {
        name: "Solar-Control Glass",
        description:
          "Treated glass that reflects solar heat and blocks UV rays, protecting furniture from fading.",
      },
    ],
  },
  specifications: {
    title: "Technical Specifications & Hardware",
    items: [
      { label: "Opening Style", value: "Double opening hinged doors (inward or outward swing)" },
      { label: "Frame Material", value: "Durable powder-coated aluminium" },
      { label: "Finish Options", value: "White, charcoal grey, matte black, bronze or silver" },
      { label: "Glass Options", value: "Clear safety glass, frosted glazing or double glazing" },
      { label: "Locking System", value: "Master keyed handle with slave door top and bottom flush bolts" },
      { label: "Weather Sealing", value: "Double gasket draft protection along all edges" },
    ],
  },
  installationProcess: {
    title: "Our French Door Installation Process",
    steps: [
      {
        stepNumber: "01",
        title: "Exact Measurement",
        description:
          "We measure your door opening and confirm your preferred swing direction.",
      },
      {
        stepNumber: "02",
        title: "Workshop Fabrication",
        description:
          "Your aluminium French doors are built and fitted with safety glass and hinges.",
      },
      {
        stepNumber: "03",
        title: "On-Site Installation",
        description:
          "We fit the outer frame, hang both door leaves and adjust hinges for perfect alignment.",
      },
      {
        stepNumber: "04",
        title: "Testing & Sign-Off",
        description:
          "We test the double locking bolts, ensure a tight draft seal and hand over keys.",
      },
    ],
  },
  reviews: [
    {
      authorName: "Carla B.",
      location: "Homeowner, Fourways",
      rating: 5,
      date: "2025-11-08",
      comment:
        "The French doors open beautifully onto our garden and the double locks feel really secure. Lovely clean installation.",
    },
    {
      authorName: "Tumi R.",
      location: "Homeowner, Pretoria East",
      rating: 5,
      date: "2025-12-20",
      comment:
        "Great quality doors with frosted glass for privacy. The team measured perfectly and the draft seals work well.",
    },
  ],
  faqs: [
    {
      question: "Can aluminium French doors open outwards onto a patio?",
      answer:
        "Yes, we can manufacture your French doors to swing outwards onto your patio or inwards into your room based on your space requirements.",
    },
    {
      question: "Can I install burglar bars or security gates over French doors?",
      answer:
        "Yes, we also supply matching steel swing security gates and cottage pane bars that fit French doors.",
    },
    {
      question: "What glass is used in aluminium French doors?",
      answer:
        "We fit safety glass as standard, available in clear, frosted or double-glazed options, to meet South African safety requirements.",
    },
    {
      question: "Can I get double-glazed aluminium French doors?",
      answer:
        "Yes, double-glazed units are available for better insulation and noise reduction, ideal for energy-conscious homes.",
    },
  ],
};
