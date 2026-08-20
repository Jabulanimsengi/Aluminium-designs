import type { Service } from "@/data/services";
import type { ServicePageContent } from "@/data/service-pages";
import { siteUrl } from "@/lib/site";

export const service: Service = {
  id: "security-gates",
  title: "Security Gates",
  slug: "/services/security-gates",
  shortDescription: "Heavy-duty slamlock swing and retractable trellis security gates for doors, patios, and passages.",
  longDescription:
    "Secure your front doors, patio sliding doors, and passage night-gates with custom steel security gates. Available as traditional heavy-duty swing gates or smooth-sliding retractable trellis gates with instant slamlock cylinders, hot-dip galvanized and powder coated to endure harsh South African weather.",
  features: [
    "Instant slamlock action that locks without a key in emergencies",
    "Smooth retractable slide on sealed ball-bearing rollers",
    "Reinforced cross-flight uprights with top and bottom steel tracks",
    "High-security star cylinders supplied with 3 keys",
    "Hot-dip galvanized core with UV-stabilized powder coating",
    "Tamper-proof enclosed top and bottom guide tracks",
  ],
  imagePath: "/images/real_images/products/gates/aluminium_gate_one.jpeg",
  iconName: "Lock",
  featured: true,
};

export const page: ServicePageContent = {
  id: "security-gates",
  slug: "security-gates",
  fullPageUrl: `${siteUrl}/services/security-gates`,
  seo: {
    titleTag: "Steel Security Gates & Slamlock Trellis Gates | Aluminium Designs Gauteng",
    metaDescription:
      "Custom steel security gates and slamlock retractable trellis doors for front entrances, patios, and passages. Durable powder coating and professional installation across Gauteng.",
    keywords: [
      "security gates",
      "trellis security gates",
      "slamlock gates",
      "steel security doors",
      "security gates gauteng",
      "retractable security gates",
    ],
    canonicalUrl: `${siteUrl}/services/security-gates`,
    openGraphImage: `${siteUrl}/images/real_images/products/gates/aluminium_gate_one.jpeg`,
  },
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Security Gate Installation",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Aluminium Designs",
    },
  },
  hero: {
    headline: "Custom Steel Security Gates",
    subheadline:
      "Secure your front doors, patio sliding doors, and passage night-gates with heavy-duty slamlock retractable and swing steel security gates.",
    badgeText: "Slamlock & High-Security Steel Gates",
    primaryCtaText: "Get a Gate Quote",
    secondaryCtaText: "View Gate Styles",
  },
  overview: {
    heading: "High-Security Steel Gates for Front Entrances & Patios",
    paragraphs: [
      "Securing your doorway access points is essential for family safety. Our custom steel security gates provide a strong physical barrier against home invasions without blocking airflow or natural light.",
      "Every gate is available as a traditional heavy-duty swing security gate or a smooth-sliding expandable trellis barrier equipped with an instant slamlock cylinder, hot-dip galvanized and powder coated for lasting protection.",
    ],
    keyFeaturesNotice:
      "All security gates include reinforced cross-flight uprights, tamper-proof top and bottom tracks, and high-security star cylinders supplied with three keys.",
  },
  benefits: {
    title: "Why Choose Our Security Gates",
    items: [
      {
        icon: "Lock",
        title: "Instant Slamlock Action",
        description:
          "The gate locks automatically the moment it closes, giving you instant protection in an emergency.",
      },
      {
        icon: "ShieldCheck",
        title: "Strong Physical Barrier",
        description:
          "Reinforced steel uprights and tamper-proof tracks resist forced entry and tampering.",
      },
      {
        icon: "Eye",
        title: "Airflow & Visibility",
        description:
          "Expandable trellis designs keep fresh air and natural light flowing while securing your home.",
      },
      {
        icon: "Wrench",
        title: "Built for SA Weather",
        description:
          "Hot-dip galvanized cores with UV-stabilized powder coating resist rust, rain, and harsh sun.",
      },
    ],
  },
  productTypes: {
    title: "Choose the Right Security Gate for Your Doorway",
    description:
      "Every entrance has different access and space needs. We build all major security gate styles to match your layout.",
    items: [
      {
        name: "Slamlock Retractable Trellis Gate",
        tagline: "Expandable protection that slides out of the way",
        description:
          "A concertina steel gate that folds back neatly when not in use and locks instantly when closed.",
        idealFor: "Front doors, patio sliding doors, and stacking door openings.",
      },
      {
        name: "Hinged Swing Security Gate",
        tagline: "Traditional strength with a slamlock cylinder",
        description:
          "A heavy-duty swing gate mounted on strong hinges with an instant-locking cylinder and star keys.",
        idealFor: "Single doorways and passage entrances.",
      },
      {
        name: "Double French Door Gate",
        tagline: "Matching pair for wide openings",
        description:
          "Two swing gates that close together over wider double-door entrances for full-width protection.",
        idealFor: "Double doors, patios, and French door entrances.",
      },
      {
        name: "Passage Night Gate",
        tagline: "A secure safe haven at night",
        description:
          "A slim security gate fitted across a passage to create a locked barrier between living areas and bedrooms.",
        idealFor: "Homes wanting extra protection for family bedrooms at night.",
      },
    ],
  },
  glazingOptions: {
    title: "Coating & Finish Options",
    description:
      "The finish you choose determines rust resistance and how the gate blends with your home.",
    options: [
      {
        name: "Powder Coated White",
        description:
          "A clean, classic finish that suits most modern homes and aluminium window frames.",
      },
      {
        name: "Charcoal Grey",
        description:
          "A neutral dark finish that hides dust and blends with charcoal windows and doors.",
      },
      {
        name: "Matte Black",
        description:
          "A bold, modern finish that makes a strong security statement at your entrance.",
      },
      {
        name: "Bronze",
        description:
          "A warm metallic tone that complements brickwork and traditional architecture.",
      },
    ],
  },
  specifications: {
    title: "Technical Specifications & Hardware",
    items: [
      { label: "Gate Styles", value: "Slamlock retractable trellis, hinged swing, and double French door gates" },
      { label: "Steel Construction", value: "Reinforced cross-flight uprights with top and bottom steel tracks" },
      { label: "Lock Mechanisms", value: "Instant slamlock action with high-security star cylinders and 3 keys" },
      { label: "Finishes", value: "Powder coated white, bronze, charcoal grey, or matte black" },
      { label: "Corrosion Protection", value: "Galvanized steel core with UV-stabilized exterior powder coating" },
      { label: "Installation", value: "Heavy-duty wall anchors with enclosed tamper-proof top and bottom tracks" },
    ],
  },
  installationProcess: {
    title: "Our Simple 4-Step Security Gate Installation Process",
    steps: [
      {
        stepNumber: "01",
        title: "Measurement & Door Inspection",
        description:
          "We measure your door frame, check reveal depths, and confirm gate opening directions.",
      },
      {
        stepNumber: "02",
        title: "Custom Steel Assembly",
        description:
          "Your gate is built to exact opening dimensions and powder coated in your chosen colour.",
      },
      {
        stepNumber: "03",
        title: "Secure Wall Fitting",
        description:
          "Our technicians bolt the frame and guide tracks into solid brickwork with security anchors.",
      },
      {
        stepNumber: "04",
        title: "Slamlock Testing & Handover",
        description:
          "We test the slamlock mechanism, demonstrate the smooth slide, and hand over your keys.",
      },
    ],
  },
  reviews: [
    {
      authorName: "Naledi M.",
      location: "Homeowner, Midrand",
      rating: 5,
      date: "2025-11-10",
      comment:
        "The slamlock trellis gate over our patio door locks instantly and slides so smoothly. The charcoal finish matches our frames perfectly.",
    },
    {
      authorName: "Pieter V.",
      location: "Homeowner, Benoni",
      rating: 5,
      date: "2025-12-14",
      comment:
        "Fitted a passage night gate and it gives us real peace of mind while we sleep. Tidy installation and solid build quality.",
    },
  ],
  faqs: [
    {
      question: "What is a slamlock security gate?",
      answer:
        "A slamlock gate locks automatically the instant you shut it, giving you immediate protection without having to search for keys during an emergency.",
    },
    {
      question: "Can retractable security gates be fitted over aluminium sliding doors?",
      answer:
        "Yes, our trellis security gates are designed specifically to mount over aluminium sliding doors and stacking patio doors.",
    },
    {
      question: "Do security gates block airflow and natural light?",
      answer:
        "No. The open trellis design lets fresh air and daylight through while still providing a strong physical barrier against intruders.",
    },
    {
      question: "How long does a security gate take to install?",
      answer:
        "After measurement, fabrication takes around 5 to 7 working days, and on-site fitting usually takes a few hours for a standard doorway.",
    },
  ],
};
