import type { Service } from "@/data/services";
import type { ServicePageContent } from "@/data/service-pages";
import { siteUrl } from "@/lib/site";

export const service: Service = {
  id: "steel-carports",
  title: "Steel Carports",
  slug: "/services/steel-carports",
  shortDescription: "Solid steel vehicle shade and hail protection for cars, bakkies & caravans.",
  longDescription:
    "Protect your vehicles from blistering summer sun, severe hail storms, and heavy rain with custom-built steel carports and heavy-duty shadeports. Engineered from thick square steel tubing, hot-rolled lip channels, and IBR or Chromadek roofing, with professional concrete footings for maximum storm stability.",
  features: [
    "100% hail protection with solid IBR or Chromadek roof sheeting",
    "Heavy-gauge 76mm/100mm square tubing framework",
    "Cantilever (no-obstruction) post options for easy parking",
    "UV-blocking shade that keeps vehicle interiors cool",
    "Built-in seamless gutters and downpipes",
    "Deep high-strength concrete foundations",
  ],
  imagePath: "/images/patio_enclosure.png",
  iconName: "Car",
  featured: true,
};

export const page: ServicePageContent = {
  id: "steel-carports",
  slug: "steel-carports",
  fullPageUrl: `${siteUrl}/services/steel-carports`,
  seo: {
    titleTag: "Steel Carports & Shadeports | Custom Vehicle Protection Gauteng",
    metaDescription:
      "Custom steel carports and shadeports built to protect your vehicles from hail, sun and rain. Cantilever designs, IBR & Chromadek roofing, and expert installation across Gauteng.",
    keywords: [
      "steel carports",
      "cantilever carports",
      "shadeports gauteng",
      "carport builders",
      "steel carports johannesburg",
      "ibr chromadek carport",
    ],
    canonicalUrl: `${siteUrl}/services/steel-carports`,
    openGraphImage: `${siteUrl}/images/patio_enclosure.png`,
  },
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Steel Carport Installation",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Aluminium Designs",
    },
  },
  hero: {
    headline: "Custom Steel Carports & Shadeports",
    subheadline:
      "Protect your vehicles from blistering summer sun, severe hail storms, and heavy rain with custom-built steel carports and heavy-duty shadeports.",
    badgeText: "Hail-Proof & Storm-Rated Steel Structures",
    primaryCtaText: "Get a Carport Quote",
    secondaryCtaText: "View Carport Styles",
  },
  overview: {
    heading: "Durable Steel Carport Structures Built to Withstand All Weather",
    paragraphs: [
      "Hail storms and harsh sun can cause thousands of Rands in vehicle damage. Our heavy-duty steel carports and commercial shadeports provide dependable, long-lasting shelter for cars, bakkies, and caravans.",
      "Every structure is engineered with thick square steel tubing, hot-rolled lip channels, IBR or corrugated steel sheeting, and professional concrete ground footings for maximum storm stability.",
    ],
    keyFeaturesNotice:
      "All carports include built-in seamless gutters and PVC downpipes, with optional cantilever designs that keep poles on one side for easy parking.",
  },
  benefits: {
    title: "Why Choose Our Steel Carports",
    items: [
      {
        icon: "ShieldCheck",
        title: "100% Hail Protection",
        description:
          "Solid IBR steel roof sheeting blocks heavy hail stones from denting your car or cracking windshields.",
      },
      {
        icon: "Sun",
        title: "Cools Vehicle Interiors",
        description:
          "Blocks UV sun rays to prevent car paint fading and cracked dashboard leather.",
      },
      {
        icon: "Car",
        title: "Cantilever (No Obstruction) Posts",
        description:
          "Optional cantilever designs keep poles on one side for easy parking and opening car doors.",
      },
      {
        icon: "Wrench",
        title: "Storm-Rated Framework",
        description:
          "Heavy-gauge square tubing and deep concrete footings built to Gauteng storm standards.",
      },
    ],
  },
  productTypes: {
    title: "Choose the Right Carport Style for Your Driveway",
    description:
      "Every driveway has different clearance and access needs. We build all major carport configurations to match your layout.",
    items: [
      {
        name: "Single Carport (3m x 6m)",
        tagline: "Compact protection for one vehicle",
        description:
          "A single-bay steel carport with IBR or Chromadek roofing, ideal for a standard car or bakkie.",
        idealFor: "Standard driveways and single-vehicle households.",
      },
      {
        name: "Double Carport (6m x 6m)",
        tagline: "Side-by-side shelter for two vehicles",
        description:
          "A wider two-bay structure covering two cars with central or cantilever support options.",
        idealFor: "Families with two vehicles or a car plus trailer.",
      },
      {
        name: "Cantilever Carport",
        tagline: "No front posts in the way",
        description:
          "Curved support posts on one side only, making it easy to drive into tight parking spots.",
        idealFor: "Narrow driveways and homes needing unobstructed access.",
      },
      {
        name: "Commercial Shadeport",
        tagline: "Large-span vehicle and fleet shelter",
        description:
          "Heavy-duty multi-bay shadeports with shade cloth or steel roofing for fleets and parking areas.",
        idealFor: "Complexes, businesses, and fleet parking.",
      },
    ],
  },
  glazingOptions: {
    title: "Roofing & Finish Options",
    description:
      "The roofing and finish you select determine durability, heat reflection, and overall look.",
    options: [
      {
        name: "IBR Steel Sheeting",
        description:
          "Corrugated galvanised steel sheeting that is strong, economical, and fully hail-proof.",
      },
      {
        name: "Chromadek Color Sheeting",
        description:
          "Pre-painted steel sheeting available in a range of colours to match your roof and home.",
      },
      {
        name: "Polycarbonate Skylights",
        description:
          "Translucent panels that let natural light through while still blocking rain and hail.",
      },
    ],
  },
  specifications: {
    title: "Technical Specifications & Hardware",
    items: [
      { label: "Steel Framework", value: "Heavy-gauge 76mm/100mm square tubing with 150mm lip channel rafters" },
      { label: "Roofing Options", value: "IBR steel, Chromadek color sheets, polycarbonate skylights, or 95% shade cloth" },
      { label: "Finishes", value: "Anti-rust primer & industrial enamel or powder coated charcoal/black" },
      { label: "Gutters Included", value: "Built-in seamless steel gutters and PVC downpipes" },
      { label: "Footings", value: "Deep high-strength concrete foundations for storm stability" },
      { label: "Clearance", value: "Standard 2.4m to extra-height 3.5m for caravans and 4x4s" },
    ],
  },
  installationProcess: {
    title: "Our Simple 4-Step Carport Installation Process",
    steps: [
      {
        stepNumber: "01",
        title: "Site Survey & Driveway Layout",
        description:
          "We measure your driveway space, check vehicle height clearance, and plan post footings.",
      },
      {
        stepNumber: "02",
        title: "Workshop Steel Fabrication",
        description:
          "Beams and support posts are cut, welded with mounting gussets, and primed against rust.",
      },
      {
        stepNumber: "03",
        title: "Digging & Framework Erection",
        description:
          "We dig deep foundation holes, concrete support poles, and bolt the cross-rafter framework.",
      },
      {
        stepNumber: "04",
        title: "Roof Sheeting & Gutter Fitting",
        description:
          "We fasten IBR steel sheets with weatherproof self-drilling screws and fit rain gutters.",
      },
    ],
  },
  reviews: [
    {
      authorName: "Thabo K.",
      location: "Homeowner, Boksburg",
      rating: 5,
      date: "2026-01-18",
      comment:
        "Our double carport survived a massive hail storm without a scratch on the cars. The cantilever design gives us so much parking space.",
    },
    {
      authorName: "Lerato M.",
      location: "Homeowner, Centurion",
      rating: 5,
      date: "2025-12-02",
      comment:
        "Fast, tidy installation and the Chromadek roof matches our house perfectly. Highly recommended.",
    },
  ],
  faqs: [
    {
      question: "Can you build a high-clearance carport for a caravan or 4x4 with a rooftop tent?",
      answer:
        "Yes, we can build custom extra-height carports up to 3.5m clearance to easily accommodate caravans, boats, and lifted 4x4 vehicles.",
    },
    {
      question: "What is the difference between a cantilever carport and a 4-post carport?",
      answer:
        "A 4-post carport has support poles at all corners, while a cantilever carport has curved support posts on one side only, making it easier to drive into tight parking spots.",
    },
    {
      question: "How long does a steel carport take to build?",
      answer:
        "After site measurement, fabrication takes 5 to 7 working days, and on-site erection with concrete footings usually takes 1 to 2 days depending on size.",
    },
    {
      question: "Do steel carports rust?",
      answer:
        "No. We apply an anti-rust primer and industrial enamel or powder-coated finish to all steel, so the structure resists Gauteng's Highveld weather for decades.",
    },
  ],
};
