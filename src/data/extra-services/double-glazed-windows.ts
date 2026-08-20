import type { Service } from "@/data/services";
import type { ServicePageContent } from "@/data/service-pages";
import { siteUrl } from "@/lib/site";

export const service: Service = {
  id: "double-glazed-windows",
  title: "Double Glazed Windows",
  slug: "/services/double-glazed-windows",
  shortDescription: "Insulated double glazing that cuts electricity bills, blocks street noise, and keeps rooms comfortable all year.",
  longDescription:
    "Double glazed windows use two panes of sealed glass separated by an insulating air or argon gap to dramatically reduce heat transfer and block annoying street noise. By keeping indoor temperatures stable through every season, double glazing lowers your heating and air-conditioning costs while making your home calmer and quieter.",
  features: [
    "Two sealed glass panes with an insulating air or argon gap",
    "Reduces heat transfer to keep rooms cooler in summer and warmer in winter",
    "Blocks up to 60-70% of outside traffic and street noise",
    "Reduces condensation and fogging on the inner pane",
    "Available with toughened or acoustic laminated safety glass",
    "Lowers heating and air-conditioning electricity costs",
  ],
  imagePath: "/images/window_detail.png",
  iconName: "Thermometer",
  featured: true,
};

export const page: ServicePageContent = {
  id: "double-glazed-windows",
  slug: "double-glazed-windows",
  fullPageUrl: `${siteUrl}/services/double-glazed-windows`,
  seo: {
    titleTag: "Double Glazed Windows | Energy-Saving & Noise Reduction Gauteng",
    metaDescription:
      "Install energy-saving double glazed aluminium windows. Superior soundproofing, lower electricity bills, and professional installation across Gauteng.",
    keywords: [
      "double glazed windows",
      "soundproof windows",
      "energy efficient windows",
      "insulated glass gauteng",
      "double glazing installation",
      "noise reduction windows",
    ],
    canonicalUrl: `${siteUrl}/services/double-glazed-windows`,
    openGraphImage: `${siteUrl}/images/window_detail.png`,
  },
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Double Glazed Windows Installation",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Aluminium Designs",
    },
  },
  hero: {
    headline: "Custom Double Glazed Windows",
    subheadline:
      "Keep your home warm in winter, cool in summer, and peacefully quiet with high-performance double insulated glass windows.",
    badgeText: "Energy-Saving & Noise-Reducing Windows",
    primaryCtaText: "Get an Energy Quote",
    secondaryCtaText: "Explore Glass Benefits",
  },
  overview: {
    heading: "Energy-Efficient Double Glazing for South African Homes",
    paragraphs: [
      "Double glazed windows use two panes of sealed glass separated by an insulating air gap to dramatically reduce heat transfer and block annoying street noise.",
      "By keeping indoor temperatures stable throughout all four seasons, double glazing significantly cuts your heating and air-conditioning electricity costs.",
    ],
    keyFeaturesNotice:
      "All double glazed units are hermetically sealed in our workshop to prevent internal fogging, and are backed by a comprehensive seal integrity guarantee.",
  },
  benefits: {
    title: "Why Choose Our Double Glazed Windows",
    items: [
      {
        icon: "PiggyBank",
        title: "Lower Power Bills",
        description:
          "Traps indoor warmth during chilly winters and deflects blistering summer sun, so you run heaters and air-con far less.",
      },
      {
        icon: "VolumeX",
        title: "Peaceful & Quiet",
        description:
          "Dual glass layers effectively muffle neighbourhood noise, barking dogs, and street traffic for a calmer home.",
      },
      {
        icon: "Thermometer",
        title: "Stable Indoor Temperatures",
        description:
          "The insulated air gap acts like a thermal blanket, keeping rooms comfortable in every season.",
      },
      {
        icon: "Droplets",
        title: "Reduces Condensation",
        description:
          "The inner pane stays closer to room temperature, preventing water droplets and mould from forming on the glass.",
      },
    ],
  },
  productTypes: {
    title: "Choose the Right Double Glazed Unit for Your Home",
    description:
      "Different rooms have different noise, heat, and safety needs. We build double glazed units to match each opening exactly.",
    items: [
      {
        name: "Standard Double Glazed Units (24mm)",
        tagline: "Everyday comfort and energy savings",
        description:
          "Two clear glass panes separated by a sealed dry air gap for reliable insulation at an affordable price.",
        idealFor: "Living rooms and bedrooms needing general thermal comfort.",
      },
      {
        name: "Acoustic Laminated Double Glazing",
        tagline: "Maximum noise reduction",
        description:
          "Combines a laminated acoustic pane with a second glass layer to dramatically cut traffic, sirens, and neighbour noise.",
        idealFor: "Bedrooms and studies facing busy roads.",
      },
      {
        name: "Low-E Double Glazing",
        tagline: "Reflects heat while letting light through",
        description:
          "A near-invisible low-emissivity coating reflects solar heat in summer and holds warmth inside during winter.",
        idealFor: "North- and west-facing rooms that overheat in summer.",
      },
      {
        name: "Argon-Filled Double Glazing",
        tagline: "Top-tier thermal performance",
        description:
          "The air gap is filled with argon gas, which insulates even better than dry air for superior energy efficiency.",
        idealFor: "Large glazed areas and homes targeting lower electricity bills.",
      },
    ],
  },
  glazingOptions: {
    title: "Glass & Glazing Options",
    description:
      "The glass you select determines how quiet, cool, and safe your home feels.",
    options: [
      {
        name: "Clear Float Double Glazing",
        description:
          "Two clear panes with an insulated air gap for a bright, comfortable, cost-effective upgrade.",
      },
      {
        name: "Toughened Safety Glass",
        description:
          "Heat-treated safety glass that is up to five times stronger than standard glass and ideal for low-level openings.",
      },
      {
        name: "Acoustic Laminated Glass",
        description:
          "A bonded vinyl interlayer that stays intact on impact and significantly reduces outside noise.",
      },
      {
        name: "Low-E Solar-Control Glass",
        description:
          "A transparent coating that reflects solar heat and blocks harmful UV rays from fading furniture and flooring.",
      },
    ],
  },
  specifications: {
    title: "Technical Specifications & Hardware",
    items: [
      { label: "Glass Construction", value: "Dual glass panes with a sealed argon or dry air gap" },
      { label: "Frame Material", value: "Deep-pocket aluminium frame with insulated seals" },
      { label: "Noise Reduction", value: "Blocks up to 60-70% of outside traffic and street noise" },
      { label: "Finishes", value: "Matte Black, Charcoal, Pure White, Bronze, or Anodised Silver" },
      { label: "Safety Glass", value: "Toughened safety glass or acoustic laminated glass" },
      { label: "Warranty", value: "Comprehensive seal integrity and installation guarantee" },
    ],
  },
  installationProcess: {
    title: "Our Simple 4-Step Double Glazing Installation",
    steps: [
      {
        stepNumber: "01",
        title: "Energy & Sound Assessment",
        description:
          "We evaluate your window locations, sun exposure, and noise levels to recommend the right glass thickness.",
      },
      {
        stepNumber: "02",
        title: "Factory-Sealed Manufacturing",
        description:
          "Your double glazed units are sealed hermetically to prevent any internal fogging or moisture build-up.",
      },
      {
        stepNumber: "03",
        title: "Clean Window Fitting",
        description:
          "We install the deep frame profiles, fit the insulated glass units, and seal thoroughly against draughts.",
      },
      {
        stepNumber: "04",
        title: "Quality Check & Handover",
        description:
          "We inspect all perimeter seals, test the handles, and provide your energy warranty certificate.",
      },
    ],
  },
  reviews: [
    {
      authorName: "Kevin D.",
      location: "Homeowner, Midrand",
      rating: 5,
      date: "2025-11-18",
      comment:
        "Our bedroom faces a busy road and the difference is amazing. The double glazing cut the traffic noise right down.",
    },
    {
      authorName: "Annelie B.",
      location: "Homeowner, Centurion",
      rating: 5,
      date: "2025-12-09",
      comment:
        "The house stays noticeably warmer in winter and the electricity bill has dropped. Very happy with the neat installation.",
    },
  ],
  faqs: [
    {
      question: "Will double glazed windows reduce traffic noise in my bedroom?",
      answer:
        "Yes. Double glazing can reduce intrusive outside street and traffic noise by up to 70%, creating a much quieter sleeping environment.",
    },
    {
      question: "Do double glazed windows really help lower electricity costs?",
      answer:
        "Yes. By preventing heat from escaping in winter and keeping hot sun out in summer, you run air conditioners and heaters much less, which lowers your monthly bill.",
    },
    {
      question: "Can double glazed units be fitted into my existing aluminium frames?",
      answer:
        "In many cases we can retrofit double glazing into suitably deep frames. Our team will inspect your current windows and advise whether a new deep-pocket frame is required.",
    },
    {
      question: "Why do some double glazed units mist up on the inside?",
      answer:
        "Internal misting means the seal has failed and moisture has entered the air gap. We replace failed units with new hermetically sealed ones covered by our seal integrity guarantee.",
    },
  ],
};
