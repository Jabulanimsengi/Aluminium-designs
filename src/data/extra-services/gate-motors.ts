import type { Service } from "@/data/services";
import type { ServicePageContent } from "@/data/service-pages";
import { siteUrl } from "@/lib/site";

export const service: Service = {
  id: "gate-motors",
  title: "Gate Motors & Automation",
  slug: "/services/gate-motors",
  shortDescription: "Fast, reliable automated gate motors with load-shedding battery backup.",
  longDescription:
    "Upgrade to fast, reliable automated gate motors from top brands like Centurion and ET Nice, complete with heavy-duty battery backups for load shedding. We supply, install, service, and repair sliding and swing gate motors with anti-theft cages, infrared safety beams, and long-range remote controls.",
  features: [
    "Works during load shedding with powerful backup batteries",
    "Centurion, ET Nice, Hansa, and Gemini motor support",
    "Anti-theft steel motor cages with discus padlocks",
    "High-speed opening up to 36m/min with turbo mode",
    "Infrared safety beams and anti-crush sensors",
    "Long-range encrypted remotes and mobile app control",
  ],
  imagePath: "/images/real_images/products/gates/aluminium_gate_three.jpeg",
  iconName: "Zap",
  featured: true,
};

export const page: ServicePageContent = {
  id: "gate-motors",
  slug: "gate-motors",
  fullPageUrl: `${siteUrl}/services/gate-motors`,
  seo: {
    titleTag: "Gate Motor Installation & Repairs | Aluminium Designs Gauteng",
    metaDescription:
      "Professional gate motor installation and repairs. Centurion D5 Smart motors, battery backup, anti-theft cages, and reliable service across Gauteng.",
    keywords: [
      "gate motor installation",
      "gate motor repairs",
      "centurion d5 smart",
      "electric gate repairs",
      "gate automation gauteng",
      "gate motor battery backup",
    ],
    canonicalUrl: `${siteUrl}/services/gate-motors`,
    openGraphImage: `${siteUrl}/images/real_images/products/gates/aluminium_gate_three.jpeg`,
  },
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Gate Motor & Automation Installation",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Aluminium Designs",
    },
  },
  hero: {
    headline: "Gate Motor Installation & Repairs",
    subheadline:
      "Upgrade to fast, reliable automated gate motors from top brands like Centurion and ET Nice, complete with heavy-duty battery backups for load shedding.",
    badgeText: "Gate Motor Automation & Repairs",
    primaryCtaText: "Book a Gate Motor Tech",
    secondaryCtaText: "Explore Motor Options",
  },
  overview: {
    heading: "Electric Gate Motor Automation, Servicing & Emergency Fixes",
    paragraphs: [
      "An automated driveway gate gives you safe, convenient access without having to step out of your vehicle at night or in the rain.",
      "We supply, install, service, and repair high-speed sliding and swing gate motors equipped with anti-theft brackets, infrared safety beams, and reliable battery backups.",
    ],
    keyFeaturesNotice:
      "All installations include solid steel anti-theft motor cages, wireless safety beams, anti-crush sensors, and long-range encrypted remote controls.",
  },
  benefits: {
    title: "Why Choose Our Gate Motor Automation",
    items: [
      {
        icon: "BatteryCharging",
        title: "Works During Load Shedding",
        description:
          "Powerful backup batteries keep your gate opening smoothly even during prolonged power cuts.",
      },
      {
        icon: "ShieldAlert",
        title: "Anti-Theft Protection",
        description:
          "Heavy-duty steel cages and brackets protect your gate motor from theft and tampering.",
      },
      {
        icon: "Zap",
        title: "High-Speed Opening",
        description:
          "Turbo speed modes open your gate up to 36m/min so you are never left waiting.",
      },
      {
        icon: "Users",
        title: "Long-Range Remote Access",
        description:
          "Encrypted roll-code remotes and optional mobile app control for the whole family.",
      },
    ],
  },
  productTypes: {
    title: "Choose the Right Motor for Your Gate",
    description:
      "Sliding and swing gates need different drive systems. We supply and install motors to match your gate type and daily usage.",
    items: [
      {
        name: "Sliding Gate Motor",
        tagline: "The standard for sliding driveway gates",
        description:
          "A gear-driven motor that runs a toothed steel rack along a sliding gate for smooth, reliable operation.",
        idealFor: "Sliding and cantilever driveway gates up to heavy commercial sizes.",
      },
      {
        name: "Swing Gate Motor",
        tagline: "Articulated arm for hinged gates",
        description:
          "A motorized arm that opens single or double swing gates, available in underground or surface-mounted styles.",
        idealFor: "Hinged swing and double swing driveway entrances.",
      },
      {
        name: "Smart App-Controlled Motor",
        tagline: "Control your gate from your phone",
        description:
          "Wi-Fi and GSM-enabled motors that let you open, close, and monitor your gate remotely from a mobile app.",
        idealFor: "Homeowners wanting remote access and real-time gate alerts.",
      },
      {
        name: "Battery Backup Unit",
        tagline: "Keep working through power cuts",
        description:
          "High-capacity lithium or AGM batteries that power your gate motor during load shedding.",
        idealFor: "Every automated gate in load-shedding areas.",
      },
    ],
  },
  glazingOptions: {
    title: "Power & Backup Options",
    description:
      "The power and backup setup you choose determines how reliably your gate works during outages.",
    options: [
      {
        name: "24V Lithium Battery Backup",
        description:
          "A high-capacity lithium battery that delivers more cycles and faster charging than lead-acid.",
      },
      {
        name: "AGM Battery Backup",
        description:
          "A dependable sealed battery option that powers your gate through most load-shedding slots.",
      },
      {
        name: "Solar-Charging Kit",
        description:
          "A solar panel that keeps your backup battery topped up for extended outages.",
      },
      {
        name: "Mains with Surge Protection",
        description:
          "Protected mains wiring that guards your motor against power-surge damage.",
      },
    ],
  },
  specifications: {
    title: "Technical Specifications & Hardware",
    items: [
      { label: "Supported Brands", value: "Centurion (D5 Evo, D5 Smart, D10 Smart), ET Nice, Hansa, and Gemini" },
      { label: "Gate Types", value: "Sliding driveway gates, single swing gates, and double swing gates" },
      { label: "Power & Backup", value: "24V high-capacity lithium or AGM battery backup for load shedding" },
      { label: "Speed & Duty", value: "High-speed opening (up to 36m/min) with turbo speed mode" },
      { label: "Safety Accessories", value: "Wireless safety beams, anti-crush sensors, and warning strobe lights" },
      { label: "Theft Protection", value: "Solid steel anti-theft motor cage with heavy-duty discus padlock" },
    ],
  },
  installationProcess: {
    title: "Our Simple 4-Step Gate Motor Installation Process",
    steps: [
      {
        stepNumber: "01",
        title: "Gate Balance & Motor Inspection",
        description:
          "We inspect your gate wheels, track level, and bracket alignment to ensure effortless manual travel.",
      },
      {
        stepNumber: "02",
        title: "Base Plate Mounting & Wiring",
        description:
          "We bolt the steel base plate, mount the motor unit, and wire mains power and battery cables.",
      },
      {
        stepNumber: "03",
        title: "Steel Rack & Beam Setup",
        description:
          "We secure the toothed steel gear rack along the gate and align infrared safety beams.",
      },
      {
        stepNumber: "04",
        title: "Programming & Remote Handover",
        description:
          "We program gate travel limits, pair your remotes, and test auto-close safety.",
      },
    ],
  },
  reviews: [
    {
      authorName: "Kagiso T.",
      location: "Homeowner, Germiston",
      rating: 5,
      date: "2025-11-10",
      comment:
        "Our gate now opens smoothly through every load-shedding slot. The technician was quick, tidy, and explained the remotes clearly.",
    },
    {
      authorName: "Anel D.",
      location: "Homeowner, Alberton",
      rating: 5,
      date: "2025-12-19",
      comment:
        "The Centurion motor and anti-theft cage were fitted in a morning. The app control is a bonus I use every day.",
    },
  ],
  faqs: [
    {
      question: "How many times can a gate motor open during load shedding?",
      answer:
        "With a healthy standard battery, modern smart gate motors can perform between 30 and 100 opening cycles during power outages.",
    },
    {
      question: "Why has my gate motor stopped working suddenly?",
      answer:
        "Common causes include dead backup batteries, dirt on optical safety beams, worn motor brushes, or blown fuses after power surges. Our technicians can diagnose and fix this on the spot.",
    },
    {
      question: "Can you automate an existing manual gate?",
      answer:
        "Yes. We can fit a motor to most existing sliding or swing gates, provided the gate runs smoothly and has mounting space for the drive system and rack.",
    },
    {
      question: "Do you service and repair gate motors you did not install?",
      answer:
        "Yes. We service and repair all major brands including Centurion, ET Nice, Hansa, and Gemini, regardless of who did the original installation.",
    },
  ],
};
