import { ServiceObject } from '../../types/service';

export const gateMotorsService: ServiceObject = {
  id: "srv-gate-motors",
  slug: "gate-motors",
  serviceName: "Gate Motors",
  tagline: "Fast, Reliable Automated Gate Motors with Load-Shedding Battery Backup",
  category: "Steel Security",
  hero: {
    badge: "Gate Motor Automation & Repairs",
    headline: "Gate Motor Installation & Repairs",
    subheadline: "Upgrade to fast, reliable automated gate motors from top brands like Centurion and ET Nice, complete with heavy-duty battery backups for load shedding.",
    primaryCtaText: "Book a Gate Motor Tech",
    primaryCtaLink: "/contact",
    secondaryCtaText: "Explore Motor Options",
    secondaryCtaLink: "#specs",
    heroImage: "/images/services/gate-motors-hero.webp"
  },
  overview: {
    heading: "Electric Gate Motor Automation, Servicing & Emergency Fixes",
    paragraphs: [
      "An automated driveway gate gives you safe, convenient access without having to step out of your vehicle at night or in the rain.",
      "We supply, install, service, and repair high-speed sliding and swing gate motors equipped with anti-theft brackets, infrared safety beams, and reliable battery backups."
    ],
    specifications: [
      { label: "Supported Brands", value: "Centurion (D5 Evo, D5 Smart, D10 Smart), ET Nice, Hansa, and Gemini" },
      { label: "Gate Types", value: "Sliding Driveway Gates, Single Swing Gates, and Double Swing Gates" },
      { label: "Power & Backup", value: "24V High-Capacity Lithium or AGM Battery Backup for Load Shedding" },
      { label: "Speed & Duty", value: "High-Speed Opening (up to 36m/min) with Turbo Speed Mode" },
      { label: "Safety Accessories", value: "Wireless Safety Beams, Anti-Crush Sensors, and Warning Strobe Lights" },
      { label: "Theft Protection", value: "Solid Steel Anti-Theft Motor Cage with Heavy-Duty Discus Padlock" }
    ]
  },
  features: [
    {
      id: "feat-load-shedding",
      title: "Works During Load Shedding",
      description: "Powerful backup batteries keep your gate opening smoothly even during prolonged power cuts.",
      icon: "battery-charging-outline"
    },
    {
      id: "feat-anti-theft",
      title: "Anti-Theft Motor Cages",
      description: "Heavy-duty steel security cages and brackets protect your gate motor from theft and tampering.",
      icon: "shield-checkmark-outline"
    },
    {
      id: "feat-remote-access",
      title: "Long-Range Remotes & Mobile App",
      description: "Open your gate from your car or smartphone with encrypted, roll-code remote controls.",
      icon: "key-outline"
    }
  ],
  process: {
    sectionHeading: "Our 4-Step Gate Motor Installation & Repair",
    steps: [
      {
        stepNumber: 1,
        title: "Gate Balance & Motor Inspection",
        description: "We inspect your gate wheels, track level, and bracket alignment to ensure effortless manual travel."
      },
      {
        stepNumber: 2,
        title: "Base Plate Mounting & Wiring",
        description: "We bolt the steel base plate, mount the motor unit, and wire mains power and battery cables."
      },
      {
        stepNumber: 3,
        title: "Steel Rack & Beam Setup",
        description: "We secure the toothed steel gear rack along the gate and align infrared safety beams."
      },
      {
        stepNumber: 4,
        title: "Programming & Remote Handover",
        description: "We program your gate travel limits, pair your remote controls, and test auto-close safety."
      }
    ]
  },
  faqs: [
    {
      question: "How many times can a gate motor open during load shedding?",
      answer: "With a healthy standard battery, modern smart gate motors can perform between 30 and 100 opening cycles during power outages."
    },
    {
      question: "Why has my gate motor stopped working suddenly?",
      answer: "Common causes include dead backup batteries, dirt on optical safety beams, worn motor brushes, or blown fuses after power surges. Our mobile technicians can diagnose and fix this on the spot."
    }
  ],
  relatedServices: [
    {
      serviceId: "srv-driveway-gates",
      title: "Driveway Gates",
      slug: "driveway-gates",
      shortDescription: "Custom steel sliding and swing driveway gates.",
      thumbnailImage: "/images/services/driveway-thumb.webp"
    },
    {
      serviceId: "srv-steel-repairs",
      title: "Steel Gate & Fence Repairs",
      slug: "steel-repairs",
      shortDescription: "Track wheel replacement and gate welding fixes.",
      thumbnailImage: "/images/services/repairs-thumb.webp"
    }
  ],
  seo: {
    titleTag: "Gate Motor Installation, Repairs & Centurion Motors | South Africa",
    metaDescription: "Professional gate motor installation and repairs. Centurion D5 Smart motors, battery backup, anti-theft cages, and same-day service across South Africa.",
    keywords: ["gate motor installation", "gate motor repairs", "Centurion D5 Smart", "electric gate repairs SA"],
    canonicalUrl: "https://www.aluminiumdesigns.co.za/services/gate-motors",
    openGraphImage: "https://www.aluminiumdesigns.co.za/images/services/gate-motors-hero.webp"
  },
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Gate Motor Installation & Repairs",
    "provider": {
      "@type": "Organization",
      "name": "Aluminium Designs"
    }
  }
};
