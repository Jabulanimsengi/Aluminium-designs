import { ServiceObject } from '../../types/service';

export const aluminiumStackingDoorsService: ServiceObject = {
  id: "srv-aluminium-stacking-doors",
  slug: "aluminium-stacking-doors",
  serviceName: "Aluminium Stacking Doors",
  tagline: "Fold Away Doors That Open Up Your Entire Living Space",
  category: "Aluminium Doors",
  hero: {
    badge: "Custom Folding & Stacking Glass Doors",
    headline: "Custom Aluminium Stacking Doors",
    subheadline: "Transform your home by opening up full walls to your garden, patio, or braai area with smooth folding glass doors.",
    primaryCtaText: "Get a Free Quote",
    primaryCtaLink: "/contact",
    secondaryCtaText: "View Folding Options",
    secondaryCtaLink: "#specs",
    heroImage: "/images/services/aluminium-stacking-doors-hero.webp"
  },
  overview: {
    heading: "Custom Folding Stacking Doors for Seamless Indoor-Outdoor Living",
    paragraphs: [
      "Aluminium stacking doors (also called bifold or folding patio doors) fold neatly against the wall to give you an open, unobstructed view and easy access to your outdoor entertainment area.",
      "Manufactured with durable rollers and strong safety glass, our folding doors glide smoothly and lock securely against wind, weather, and intruders."
    ],
    specifications: [
      { label: "Frame Material", value: "Heavy-Duty Corrosion-Resistant Aluminium" },
      { label: "Panel Configurations", value: "3-Panel, 4-Panel, 5-Panel, and 6-Panel Folding Layouts" },
      { label: "Finish Options", value: "Matte Black, Charcoal Grey, Pure White, Bronze, or Silver" },
      { label: "Glass Options", value: "Safety Toughened Glass, Laminated Glass, or Double Glazing" },
      { label: "Threshold", value: "Low-Profile Weatherproof Floor Track for Easy Stepping" },
      { label: "Security Locks", value: "Multi-Point Top and Bottom Shoot Bolt Locks" }
    ]
  },
  features: [
    {
      id: "feat-wide-opening",
      title: "100% Clear Openings",
      description: "Panels fold completely out of the way, giving you uninterrupted indoor-outdoor flow.",
      icon: "expand-outline"
    },
    {
      id: "feat-effortless-glide",
      title: "Smooth Rolling Action",
      description: "Heavy-duty top and bottom guide rollers make folding large glass panels light and simple.",
      icon: "shuffle-outline"
    },
    {
      id: "feat-secure-locking",
      title: "Strong Safety Locking",
      description: "Internal shoot bolts and sturdy key locks protect your home when closed.",
      icon: "lock-closed-outline"
    }
  ],
  process: {
    sectionHeading: "Our Easy 4-Step Stacking Door Installation",
    steps: [
      {
        stepNumber: 1,
        title: "Site Assessment & Measurement",
        description: "We visit your property to measure your opening and discuss panel folding directions."
      },
      {
        stepNumber: 2,
        title: "Precision Custom Building",
        description: "Each door panel is custom built to exact sizes in our local workshop."
      },
      {
        stepNumber: 3,
        title: "Fitting & Track Alignment",
        description: "Our installers fit the outer frame, align tracks, hang panels, and seal against rain."
      },
      {
        stepNumber: 4,
        title: "Testing & Handover",
        description: "We verify smooth folding movement and hand over your care guide and warranty."
      }
    ]
  },
  faqs: [
    {
      question: "Which way do aluminium stacking doors fold?",
      answer: "We can build your doors to fold to the left, to the right, or split both ways depending on your space and layout."
    },
    {
      question: "Can I open just one door panel for everyday use?",
      answer: "Yes, our designs include a lead access door that opens just like a normal hinged door for quick everyday entry without folding all panels."
    }
  ],
  relatedServices: [
    {
      serviceId: "srv-aluminium-sliding-doors",
      title: "Aluminium Sliding Doors",
      slug: "aluminium-sliding-doors",
      shortDescription: "Smooth sliding glass patio doors.",
      thumbnailImage: "/images/services/sliding-thumb.webp"
    },
    {
      serviceId: "srv-patio-enclosures",
      title: "Patio Enclosures & Sunrooms",
      slug: "patio-enclosures",
      shortDescription: "Custom glass and aluminium patio enclosures.",
      thumbnailImage: "/images/services/patio-thumb.webp"
    }
  ],
  seo: {
    titleTag: "Aluminium Stacking Doors & Bifold Installation | South Africa",
    metaDescription: "Custom aluminium stacking doors and folding patio doors. Seamless indoor-outdoor flow, safety glass, smooth rollers, and professional installation.",
    keywords: ["aluminium stacking doors", "folding glass doors", "bifold patio doors", "folding stacking doors SA"],
    canonicalUrl: "https://www.aluminiumdesigns.co.za/services/aluminium-stacking-doors",
    openGraphImage: "https://www.aluminiumdesigns.co.za/images/services/aluminium-stacking-doors-hero.webp"
  },
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Aluminium Stacking Doors Installation",
    "provider": {
      "@type": "Organization",
      "name": "Aluminium Designs"
    }
  }
};
