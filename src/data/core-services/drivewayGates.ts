import { ServiceObject } from '../../types/service';

export const drivewayGatesService: ServiceObject = {
  id: "srv-driveway-gates",
  slug: "driveway-gates",
  serviceName: "Driveway Gates",
  tagline: "Custom Steel Sliding and Swing Driveway Gates for Homes and Complexes",
  category: "Steel Security",
  hero: {
    badge: "Custom Sliding & Swing Driveway Gates",
    headline: "Custom Steel Driveway Gates",
    subheadline: "Secure your property perimeter and enhance curb appeal with strong, custom-built steel sliding gates and double swing driveway entrances.",
    primaryCtaText: "Get a Driveway Gate Quote",
    primaryCtaLink: "/contact",
    secondaryCtaText: "View Gate Designs",
    secondaryCtaLink: "#specs",
    heroImage: "/images/services/driveway-gates-hero.jpg"
  },
  overview: {
    heading: "Durable Steel Driveway Gates for Maximum Perimeter Security",
    paragraphs: [
      "Your driveway gate is your property's primary security barrier and entrance statement. Our custom steel driveway gates combine solid steel strength with modern styling.",
      "Custom welded from heavy-duty square tubing, slatted panels, palisade bars, or decorative wrought iron, hot-dip galvanized and powder coated to endure harsh South African weather."
    ],
    specifications: [
      { label: "Gate Types", value: "Sliding Track Gates, Cantilever Gates, and Double Swing Driveway Gates" },
      { label: "Steel Material", value: "Heavy-Gauge Steel Box Tubing, Channel Framework, and Solid Steel Bars" },
      { label: "Panel Inserts", value: "Steel Slats, Palisade Spikes, Laser-Cut Decorative Panels, or Expanded Mesh" },
      { label: "Finishes", value: "Hot-Dip Galvanized and Powder Coated Matte Black, Charcoal, or Bronze" },
      { label: "Hardware Included", value: "Heavy-Duty Ground Track, Catch Brackets, Top Guide Rollers, and Anti-Lift Brackets" },
      { label: "Motor Automation", value: "Ready for High-Speed Gate Motor Integration with Battery Backup" }
    ]
  },
  features: [
    {
      id: "feat-heavy-steel",
      title: "Heavy-Duty Steel Construction",
      description: "Rigid welded steel framework resists ramming, sagging, and forceful intrusion.",
      icon: "shield-checkmark-outline"
    },
    {
      id: "feat-anti-lift",
      title: "Anti-Lift Security Brackets",
      description: "Integrated anti-lift catch brackets prevent intruders from lifting the gate off its track.",
      icon: "lock-closed-outline"
    },
    {
      id: "feat-smooth-rolling",
      title: "Smooth Wheel Bearings",
      description: "Heavy-duty steel wheels with sealed bearings ensure effortless gliding for gate motors.",
      icon: "arrow-forward-outline"
    }
  ],
  process: {
    sectionHeading: "Our 4-Step Driveway Gate Installation",
    steps: [
      {
        stepNumber: 1,
        title: "Site Survey & Driveway Levelling",
        description: "We measure your driveway opening, check ground slope, and inspect pillar foundation points."
      },
      {
        stepNumber: 2,
        title: "Custom Welding & Galvanizing",
        description: "Your gate is built in our workshop, hot-dip galvanized, and powder coated."
      },
      {
        stepNumber: 3,
        title: "Track Concreting & Gate Fitting",
        description: "We concrete the steel ground track level into the driveway and hang the gate on guide rollers."
      },
      {
        stepNumber: 4,
        title: "Catch Alignment & Handover",
        description: "We set gate travel stops, lock alignment brackets, and demonstrate smooth operation."
      }
    ]
  },
  faqs: [
    {
      question: "Can I automate my driveway gate with an electric motor?",
      answer: "Yes, all our driveway gates come pre-fitted with motor mounting plates and toothed steel racks ready for Centurion or Hansa gate motors."
    },
    {
      question: "What is better: a sliding gate or a swing gate?",
      answer: "Sliding gates are generally more secure and ideal for sloped driveways or properties with limited parking depth, while swing gates work best where there is no side clearance to slide."
    }
  ],
  relatedServices: [
    {
      serviceId: "srv-gate-motors",
      title: "Gate Motor Installation & Repairs",
      slug: "gate-motors",
      shortDescription: "Electric gate motors with battery backup.",
      thumbnailImage: "/images/services/motors-thumb.webp"
    },
    {
      serviceId: "srv-palisade-fencing",
      title: "Palisade Fencing",
      slug: "palisade-fencing",
      shortDescription: "Matching steel palisade perimeter security fencing.",
      thumbnailImage: "/images/services/palisade-thumb.webp"
    }
  ],
  seo: {
    titleTag: "Steel Driveway Gates & Sliding Gates | South Africa",
    metaDescription: "Custom steel sliding and swing driveway gates. Heavy-duty construction, anti-lift security brackets, motor-ready, and expert installation across South Africa.",
    keywords: ["driveway gates", "sliding gates", "steel driveway gates", "custom driveway gates SA"],
    canonicalUrl: "https://www.aluminiumdesigns.co.za/services/driveway-gates",
    openGraphImage: "https://www.aluminiumdesigns.co.za/images/services/driveway-gates-hero.jpg"
  },
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Driveway Gates Installation",
    "provider": {
      "@type": "Organization",
      "name": "Aluminium Designs"
    }
  }
};
