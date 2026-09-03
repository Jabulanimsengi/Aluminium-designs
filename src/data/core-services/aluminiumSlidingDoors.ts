import { ServiceObject } from '../../types/service';

export const aluminiumSlidingDoorsService: ServiceObject = {
  id: "srv-aluminium-sliding-doors",
  slug: "aluminium-sliding-doors",
  serviceName: "Aluminium Sliding Doors",
  tagline: "Smooth, Secure, and Weather-Tight Patio Sliding Doors",
  category: "Aluminium Doors",
  hero: {
    badge: "Custom Sliding Glass Patio Doors",
    headline: "High-Quality Aluminium Sliding Doors",
    subheadline: "Smooth-gliding glass patio doors that let in maximum light, keep out wind and rain, and enhance security for South African homes.",
    primaryCtaText: "Request Free Quote",
    primaryCtaLink: "/contact",
    secondaryCtaText: "View Door Options",
    secondaryCtaLink: "#specs",
    heroImage: "/images/services/aluminium-sliding-doors-hero.webp"
  },
  overview: {
    heading: "Custom Aluminium Sliding Doors for Patios & Living Spaces",
    paragraphs: [
      "Our aluminium sliding doors give you an effortless connection between your indoor living space and outdoor garden or patio.",
      "Built with heavy-duty rollers and reliable safety locks, they slide smoothly with minimal effort while providing top security and weather protection."
    ],
    specifications: [
      { label: "Frame Material", value: "Premium Strong Aluminium" },
      { label: "Configurations", value: "2-Panel, 3-Panel Multi-Slider, and 4-Panel Double Sliders" },
      { label: "Finish Options", value: "Powder Coated Charcoal, Matte Black, White, Bronze, or Silver" },
      { label: "Glass Options", value: "Toughened Safety Glass, Double Glazing & Tinted Sun-Block Glass" },
      { label: "Weather Proofing", value: "Heavy-Duty Woolpile & Rubber Weather Seals" },
      { label: "Security Locks", value: "Multi-Point Hook Locks and Keyed Handles" }
    ]
  },
  features: [
    {
      id: "feat-smooth-slide",
      title: "Effortless Gliding",
      description: "High-grade stainless steel rollers ensure smooth, whisper-quiet operation every time.",
      icon: "arrow-forward-outline"
    },
    {
      id: "feat-safety-glass",
      title: "Toughened Safety Glass",
      description: "Fitted with impact-resistant safety glass for total peace of mind for your family.",
      icon: "shield-checkmark-outline"
    },
    {
      id: "feat-weather-seal",
      title: "Draft & Rain Proof",
      description: "Tight perimeter seals prevent water leaks and block out cold winter drafts.",
      icon: "water-outline"
    }
  ],
  process: {
    sectionHeading: "How We Install Your Sliding Doors in 4 Simple Steps",
    steps: [
      {
        stepNumber: 1,
        title: "Free On-Site Measuring",
        description: "We measure your door opening accurately to ensure an exact custom fit."
      },
      {
        stepNumber: 2,
        title: "Custom Manufacturing",
        description: "Your sliding doors are crafted locally using durable aluminium frames and safety glass."
      },
      {
        stepNumber: 3,
        title: "Expert Installation",
        description: "Our trained technicians fit the track, hang the sliding panels, and seal the frame."
      },
      {
        stepNumber: 4,
        title: "Smooth Check & Handover",
        description: "We test the slide action, lock mechanism, and provide your product warranty."
      }
    ]
  },
  faqs: [
    {
      question: "Can aluminium sliding doors be fitted with safety locks?",
      answer: "Yes, all our sliding doors include sturdy multi-point locking mechanisms and key-operated handles for strong security."
    },
    {
      question: "Are sliding patio doors waterproof against heavy rain?",
      answer: "Yes. Our doors feature built-in drainage channels in the bottom track and tight weather seals to prevent any water ingress."
    }
  ],
  relatedServices: [
    {
      serviceId: "srv-aluminium-stacking-doors",
      title: "Aluminium Stacking Doors",
      slug: "aluminium-stacking-doors",
      shortDescription: "Folding glass doors that open up entire wall spaces.",
      thumbnailImage: "/images/services/stacking-thumb.webp"
    },
    {
      serviceId: "srv-aluminium-windows",
      title: "Aluminium Windows",
      slug: "aluminium-windows",
      shortDescription: "Custom energy-saving aluminium windows.",
      thumbnailImage: "/images/services/windows-thumb.webp"
    }
  ],
  seo: {
    titleTag: "Aluminium Sliding Doors & Installation | South Africa",
    metaDescription: "Get premium aluminium sliding patio doors. Custom 2, 3, and 4 panel configurations, safety glass, smooth rollers, and expert installation across South Africa.",
    keywords: ["aluminium sliding doors", "sliding patio doors", "glass sliding doors", "custom aluminium doors"],
    canonicalUrl: "https://www.aluminiumdesigns.co.za/services/aluminium-sliding-doors",
    openGraphImage: "https://www.aluminiumdesigns.co.za/images/services/aluminium-sliding-doors-hero.webp"
  },
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Aluminium Sliding Doors Installation",
    "provider": {
      "@type": "Organization",
      "name": "Aluminium Designs"
    }
  }
};
