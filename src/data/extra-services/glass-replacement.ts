import type { Service } from "@/data/services";
import type { ServicePageContent } from "@/data/service-pages";
import { siteUrl } from "@/lib/site";

export const service: Service = {
  id: "glass-replacement",
  title: "Glass Replacement",
  slug: "/services/glass-replacement",
  shortDescription: "Fast, safe glass replacement for cracked, shattered, or misted windows, doors, and shopfronts.",
  longDescription:
    "A cracked or broken window pane compromises your home security and creates a dangerous hazard for children and pets. Our mobile glaziers respond promptly to measure, supply, and install brand-new clear float, laminated safety, or double glazed units in aluminium, steel, and timber frames, with a full clean-up of every shard.",
  features: [
    "Fast same-day emergency response for broken windows and doors",
    "Certified safety glass that complies with building codes",
    "Glass cut and fitted for aluminium, steel, and timber frames",
    "Complete safe removal and clean-up of broken glass shards",
    "Solar tinted, Low-E, and acoustic glass options available",
    "Replacement of misted or failed double glazed units",
  ],
  imagePath: "/images/window_repair.png",
  iconName: "RefreshCw",
  featured: true,
};

export const page: ServicePageContent = {
  id: "glass-replacement",
  slug: "glass-replacement",
  fullPageUrl: `${siteUrl}/services/glass-replacement`,
  seo: {
    titleTag: "Glass Replacement | Broken Window & Door Glass Repairs Gauteng",
    metaDescription:
      "Fast broken glass replacement for windows, doors, and shopfronts. Certified safety glass and a rapid mobile glazing service across Gauteng.",
    keywords: [
      "broken glass replacement",
      "window glass repair",
      "emergency glazier",
      "glass replacement gauteng",
      "safety glass replacement",
      "shopfront glass repair",
    ],
    canonicalUrl: `${siteUrl}/services/glass-replacement`,
    openGraphImage: `${siteUrl}/images/window_repair.png`,
  },
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Glass Replacement Installation",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Aluminium Designs",
    },
  },
  hero: {
    headline: "Broken Glass Replacement",
    subheadline:
      "Restore security and safety with fast replacement of cracked, shattered, or misted glass panes for windows, doors, and shopfronts.",
    badgeText: "Fast On-Site Glazing & Glass Replacement",
    primaryCtaText: "Request Emergency Glazing",
    secondaryCtaText: "Explore Glass Types",
  },
  overview: {
    heading: "Emergency Glass Replacement for Windows & Doors",
    paragraphs: [
      "A cracked or broken window pane compromises your home security and creates a dangerous hazard for children and pets.",
      "Our qualified mobile glaziers respond promptly to measure, supply, and install brand-new clear float glass, laminated safety glass, or double glazed units in aluminium, steel, and timber frames.",
    ],
    keyFeaturesNotice:
      "Every job includes complete safe removal and vacuum clean-up of all broken glass shards, with same-day emergency response available.",
  },
  benefits: {
    title: "Why Choose Our Glass Replacement Service",
    items: [
      {
        icon: "Clock",
        title: "Fast Response Time",
        description:
          "Quick dispatch to secure broken windows after accidents, storms, or break-in attempts.",
      },
      {
        icon: "ShieldCheck",
        title: "Certified Safety Glass",
        description:
          "We install safety glass in doors and low windows that complies with all building safety codes.",
      },
      {
        icon: "Layers",
        title: "Full Glass Clean-Up",
        description:
          "We safely vacuum and remove all shattered glass pieces from your floor, frames, and garden.",
      },
      {
        icon: "RefreshCw",
        title: "Fits Any Frame",
        description:
          "We cut and fit replacement glass for aluminium, steel, and timber frames, plus commercial shopfronts.",
      },
    ],
  },
  productTypes: {
    title: "Choose the Right Glass Replacement Service",
    description:
      "Whether it's a small cracked pane or a shattered shopfront, we supply and fit the correct glass for every opening.",
    items: [
      {
        name: "Broken Window Pane Replacement",
        tagline: "Quick fix for cracked or shattered panes",
        description:
          "We measure, cut, and fit a new pane into your existing window frame, sealing it neatly against the weather.",
        idealFor: "Homes with cracked, chipped, or shattered window glass.",
      },
      {
        name: "Sliding Door Glass Replacement",
        tagline: "Safety glass for large door panels",
        description:
          "Replacement of cracked or fogged panels in sliding and patio doors using toughened or laminated safety glass.",
        idealFor: "Sliding patio doors and stacking door panels.",
      },
      {
        name: "Shopfront Glass Replacement",
        tagline: "Rapid repair for retail and offices",
        description:
          "Emergency replacement of display windows and glass entrances to secure your business and keep it trading.",
        idealFor: "Shops, showrooms, and office frontages.",
      },
      {
        name: "Misted Double Glazed Unit Replacement",
        tagline: "Clear failed units that have fogged up",
        description:
          "We replace failed sealed units that have misted between the panes with new hermetically sealed double glazing.",
        idealFor: "Double glazed windows that have lost their seal.",
      },
    ],
  },
  glazingOptions: {
    title: "Glass & Glazing Options",
    description:
      "The replacement glass you choose affects safety, noise, heat, and how much light enters the room.",
    options: [
      {
        name: "Clear Float Glass",
        description:
          "A standard economical glass that gives crisp, clear views and bright natural light.",
      },
      {
        name: "Toughened Safety Glass",
        description:
          "Heat-treated safety glass that is up to five times stronger than standard glass and shatters into safe, dull fragments.",
      },
      {
        name: "Laminated Safety Glass",
        description:
          "Two glass sheets bonded with a vinyl layer that holds together on impact for security and noise reduction.",
      },
      {
        name: "Solar-Control Tinted Glass",
        description:
          "Neutral grey or bronze tinting that cuts glare and blocks UV rays to protect furniture from fading.",
      },
    ],
  },
  specifications: {
    title: "Technical Specifications & Hardware",
    items: [
      { label: "Glass Options", value: "Clear float, obscure patterned, and laminated safety glass" },
      { label: "Safety Standards", value: "Impact-resistant laminated and toughened safety glazing" },
      { label: "Frame Compatibility", value: "Aluminium windows, steel frames, timber panes, and shopfronts" },
      { label: "Specialty Glass", value: "Solar tinted, Low-E energy, and acoustic soundproof panes" },
      { label: "Service Response", value: "Fast same-day emergency response for broken windows and doors" },
      { label: "Site Cleanliness", value: "Complete safe removal and clean-up of all broken glass shards" },
    ],
  },
  installationProcess: {
    title: "Our Simple 4-Step Glass Replacement Process",
    steps: [
      {
        stepNumber: "01",
        title: "Call for Fast Assistance",
        description:
          "Tell us your location and rough window size for an immediate, upfront quote.",
      },
      {
        stepNumber: "02",
        title: "Site Arrival & Safe Removal",
        description:
          "Our glazier arrives with mobile glass stock, removes broken shards safely, and cleans the frame bead.",
      },
      {
        stepNumber: "03",
        title: "Precision Glass Cutting & Fitting",
        description:
          "New glass is cut to size, bedded into the frame with fresh rubber beads or silicone, and secured.",
      },
      {
        stepNumber: "04",
        title: "Thorough Clean-Up & Warranty",
        description:
          "We polish the new glass pane, vacuum the area clean, and provide your invoice and guarantee.",
      },
    ],
  },
  reviews: [
    {
      authorName: "Riaan S.",
      location: "Homeowner, Boksburg",
      rating: 5,
      date: "2025-11-12",
      comment:
        "Our patio door shattered during a storm and they replaced it with safety glass the same day. Clean, fast, and professional.",
    },
    {
      authorName: "Thandi N.",
      location: "Homeowner, Pretoria",
      rating: 5,
      date: "2025-12-05",
      comment:
        "They replaced a misted double glazed unit and cleared up every bit of glass. The new pane looks brand new.",
    },
  ],
  faqs: [
    {
      question: "What should I do while waiting for the glazier to arrive?",
      answer:
        "Keep children and pets away from the room, do not try to pull jagged shards out by hand, and if possible, cover the opening with cardboard from the inside.",
    },
    {
      question: "Do low-level windows and doors require safety glass?",
      answer:
        "Yes. By law, glass in doors and windows within 300mm of floor level must be fitted with shatter-resistant safety glass.",
    },
    {
      question: "Can you replace the glass in a wooden or steel frame, or only aluminium?",
      answer:
        "We replace glass in aluminium, steel, and timber frames, as well as commercial shopfronts, so we can restore almost any broken window or door.",
    },
    {
      question: "How quickly can you attend to an emergency?",
      answer:
        "We offer a fast same-day emergency response across Gauteng for broken windows and doors, subject to availability and your location.",
    },
  ],
};
