import { ServiceObject } from '../../types/service';

export const aluminiumGarageDoorsService: ServiceObject = {
  id: "srv-aluminium-garage-doors",
  slug: "aluminium-garage-doors",
  serviceName: "Aluminium Garage Doors",
  tagline: "Lightweight, Rustproof, and Automated Sectional Garage Doors",
  category: "Aluminium Doors",
  hero: {
    badge: "Custom Sectional & Roll-Up Garage Doors",
    headline: "Custom Aluminium Garage Doors",
    subheadline: "Upgrade your home exterior with sleek, corrosion-proof aluminium sectional garage doors paired with quiet, smart automated motors.",
    primaryCtaText: "Get a Free Garage Quote",
    primaryCtaLink: "/contact",
    secondaryCtaText: "View Panel Styles",
    secondaryCtaLink: "#specs",
    heroImage: "/images/services/aluminium-garage-doors-hero.webp"
  },
  overview: {
    heading: "Lightweight & Long-Lasting Aluminium Garage Doors",
    paragraphs: [
      "Aluminium garage doors offer modern curb appeal without the heavy maintenance, rust, or rotting issues associated with steel or wooden garage doors.",
      "Because aluminium is naturally lightweight, it places less strain on garage motors and spring systems, extending the lifespan of your automated garage door system."
    ],
    specifications: [
      { label: "Door Style", value: "Sectional Overhead Panels and Slatted Roll-Up Doors" },
      { label: "Size Options", value: "Single Garage (2.44m), Double Garage (4.88m), and Custom Sizing" },
      { label: "Finishes", value: "Powder Coated Charcoal, Matte Black, Pure White, Bronze, or Wood-Look" },
      { label: "Window Inserts", value: "Optional Modern Frosted or Tinted Glass Panel Inserts" },
      { label: "Automation", value: "Quiet Electric Garage Motor with Battery Backup and 2x Remote Controls" },
      { label: "Safety Features", value: "Auto-Reverse Obstacle Sensors and Manual Emergency Release" }
    ]
  },
  features: [
    {
      id: "feat-rustproof",
      title: "100% Rust & Corrosion Proof",
      description: "Ideal for coastal and rainy areas where steel garage doors tend to rust quickly.",
      icon: "shield-checkmark-outline"
    },
    {
      id: "feat-motor-life",
      title: "Less Strain on Motors",
      description: "Lightweight panels reduce motor wear and ensure longer spring and battery backup life.",
      icon: "hardware-chip-outline"
    },
    {
      id: "feat-quiet-operation",
      title: "Whisper Quiet",
      description: "Nylon rollers and rubber track dampeners deliver smooth, low-noise opening and closing.",
      icon: "volume-mute-outline"
    }
  ],
  process: {
    sectionHeading: "Our Garage Door Installation Steps",
    steps: [
      {
        stepNumber: 1,
        title: "Site Check & Measurement",
        description: "We inspect your garage opening, check lintel height, and take accurate measurements."
      },
      {
        stepNumber: 2,
        title: "Custom Manufacturing",
        description: "We manufacture your sectional aluminium door panels and prepare the track hardware."
      },
      {
        stepNumber: 3,
        title: "Track Fitting & Panel Assembly",
        description: "Our team mounts the side tracks, balances the torsion spring, and stacks panels."
      },
      {
        stepNumber: 4,
        title: "Motor Setup & Safety Testing",
        description: "We connect the electric motor, program your remotes, and test the auto-stop safety sensors."
      }
    ]
  },
  faqs: [
    {
      question: "Do aluminium garage doors work during load shedding?",
      answer: "Yes, our automated garage door motors include a rechargeable battery backup so your door operates normally during power outages."
    },
    {
      question: "Can I get glass inserts in my garage door panels?",
      answer: "Yes, you can add modern frosted or tinted glass panel strips across one side or the top row of your garage door for natural light."
    }
  ],
  relatedServices: [
    {
      serviceId: "srv-gate-motors",
      title: "Gate Motor Installation & Repairs",
      slug: "gate-motors",
      shortDescription: "Automated gate motors with battery backup.",
      thumbnailImage: "/images/services/motors-thumb.webp"
    },
    {
      serviceId: "srv-aluminium-front-doors",
      title: "Aluminium Front Doors",
      slug: "aluminium-front-doors",
      shortDescription: "Matching modern aluminium entrance doors.",
      thumbnailImage: "/images/services/front-doors-thumb.webp"
    }
  ],
  seo: {
    titleTag: "Aluminium Garage Doors & Automation | South Africa",
    metaDescription: "Custom sectional aluminium garage doors. Rustproof, lightweight, automated with battery backup, and installed professionally across South Africa.",
    keywords: ["aluminium garage doors", "sectional garage doors", "automated garage doors", "custom garage doors SA"],
    canonicalUrl: "https://www.aluminiumdesigns.co.za/services/aluminium-garage-doors",
    openGraphImage: "https://www.aluminiumdesigns.co.za/images/services/aluminium-garage-doors-hero.webp"
  },
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Aluminium Garage Doors Installation",
    "provider": {
      "@type": "Organization",
      "name": "Aluminium Designs"
    }
  }
};
