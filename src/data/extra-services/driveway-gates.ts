import type { Service } from "@/data/services";
import type { ServicePageContent } from "@/data/service-pages";
import { siteUrl } from "@/lib/site";

export const service: Service = {
  id: "driveway-gates",
  title: "Driveway Gates",
  slug: "/services/driveway-gates",
  shortDescription: "Custom steel sliding and swing driveway gates for homes and complexes.",
  longDescription:
    "Secure your property perimeter and enhance curb appeal with strong, custom-built steel driveway gates. Choose from sliding track, cantilever, and double swing designs welded from heavy-gauge square tubing, slatted panels, palisade bars, or decorative inserts, hot-dip galvanized and powder coated to endure harsh South African weather.",
  features: [
    "Heavy-duty steel box tubing framework that resists ramming and sagging",
    "Integrated anti-lift catch brackets to stop intruders lifting the gate",
    "Smooth sealed wheel bearings for effortless gliding",
    "Sliding track, cantilever, and double swing configurations",
    "Motor-ready with mounting plates and toothed steel racks",
    "Hot-dip galvanized with powder coated matte black, charcoal, or bronze finish",
  ],
  imagePath: "/images/real_images/products/gates/aluminium_gate_two.jpeg",
  iconName: "Home",
  featured: true,
};

export const page: ServicePageContent = {
  id: "driveway-gates",
  slug: "driveway-gates",
  fullPageUrl: `${siteUrl}/services/driveway-gates`,
  seo: {
    titleTag: "Steel Driveway Gates & Sliding Gates | Aluminium Designs Gauteng",
    metaDescription:
      "Custom steel sliding and swing driveway gates for homes and complexes. Heavy-duty construction, anti-lift security brackets, motor-ready, and expert installation across Gauteng.",
    keywords: [
      "driveway gates",
      "sliding gates",
      "steel driveway gates",
      "custom driveway gates",
      "cantilever gates gauteng",
      "swing driveway gates",
    ],
    canonicalUrl: `${siteUrl}/services/driveway-gates`,
    openGraphImage: `${siteUrl}/images/real_images/products/gates/aluminium_gate_two.jpeg`,
  },
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Driveway Gate Installation",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Aluminium Designs",
    },
  },
  hero: {
    headline: "Custom Steel Driveway Gates",
    subheadline:
      "Secure your property perimeter and enhance curb appeal with strong, custom-built steel sliding gates and double swing driveway entrances.",
    badgeText: "Custom Sliding & Swing Driveway Gates",
    primaryCtaText: "Get a Driveway Gate Quote",
    secondaryCtaText: "View Gate Designs",
  },
  overview: {
    heading: "Durable Steel Driveway Gates for Maximum Perimeter Security",
    paragraphs: [
      "Your driveway gate is your property's primary security barrier and entrance statement. Our custom steel driveway gates combine solid steel strength with modern styling.",
      "Every gate is welded from heavy-duty square tubing, slatted panels, palisade bars, or decorative inserts, then hot-dip galvanized and powder coated to endure harsh South African weather.",
    ],
    keyFeaturesNotice:
      "All driveway gates include anti-lift catch brackets, heavy-duty ground tracks, top guide rollers, and motor mounting plates with toothed steel racks.",
  },
  benefits: {
    title: "Why Choose Our Driveway Gates",
    items: [
      {
        icon: "ShieldCheck",
        title: "Heavy-Duty Steel Construction",
        description:
          "Rigid welded steel framework resists ramming, sagging, and forceful intrusion.",
      },
      {
        icon: "Lock",
        title: "Anti-Lift Security Brackets",
        description:
          "Integrated catch brackets prevent intruders from lifting the gate off its track.",
      },
      {
        icon: "Zap",
        title: "Motor-Ready Automation",
        description:
          "Pre-fitted mounting plates and toothed steel racks make automation quick and simple.",
      },
      {
        icon: "Sun",
        title: "Weather-Proof Finish",
        description:
          "Hot-dip galvanized and powder coated to resist Gauteng's sun, rain, and rust.",
      },
    ],
  },
  productTypes: {
    title: "Choose the Right Driveway Gate for Your Property",
    description:
      "Every driveway has different clearance and access needs. We build all major gate configurations to match your layout.",
    items: [
      {
        name: "Sliding Track Gate",
        tagline: "Smooth, space-saving, and secure",
        description:
          "A single panel that slides sideways on a steel ground track, ideal where there is side clearance.",
        idealFor: "Sloped driveways and properties with limited parking depth.",
      },
      {
        name: "Cantilever Gate",
        tagline: "No ground track to block or jam",
        description:
          "A self-supporting sliding gate that hangs above the driveway without a floor track.",
        idealFor: "Gravel or uneven driveways where a ground track would clog.",
      },
      {
        name: "Double Swing Gate",
        tagline: "Classic hinged entrance",
        description:
          "Two panels that swing open from centre-mounted hinges for a wide, grand entrance.",
        idealFor: "Properties with enough flat space for the panels to swing.",
      },
      {
        name: "Slatted & Palisade Gate",
        tagline: "Stylish privacy with security",
        description:
          "Steel slats, palisade bars, or laser-cut decorative panels built into a strong steel frame.",
        idealFor: "Homeowners wanting a modern or decorative entrance statement.",
      },
    ],
  },
  glazingOptions: {
    title: "Panel & Finish Options",
    description:
      "The panel insert and finish you select determine privacy, style, and durability.",
    options: [
      {
        name: "Steel Slats",
        description:
          "Horizontal or vertical steel slats that provide privacy while still allowing airflow.",
      },
      {
        name: "Palisade Bars",
        description:
          "Spiked steel bars that match palisade fencing for a cohesive perimeter look.",
      },
      {
        name: "Laser-Cut Decorative Panels",
        description:
          "Custom-cut steel designs that add a unique, modern feature to your entrance.",
      },
      {
        name: "Expanded Mesh",
        description:
          "A lightweight, open mesh that maintains visibility for cameras and security.",
      },
    ],
  },
  specifications: {
    title: "Technical Specifications & Hardware",
    items: [
      { label: "Gate Types", value: "Sliding track, cantilever, and double swing driveway gates" },
      { label: "Steel Material", value: "Heavy-gauge steel box tubing, channel framework, and solid steel bars" },
      { label: "Panel Inserts", value: "Steel slats, palisade spikes, laser-cut decorative panels, or expanded mesh" },
      { label: "Finishes", value: "Hot-dip galvanized and powder coated matte black, charcoal, or bronze" },
      { label: "Hardware Included", value: "Heavy-duty ground track, catch brackets, top guide rollers, and anti-lift brackets" },
      { label: "Motor Automation", value: "Ready for high-speed gate motor integration with battery backup" },
    ],
  },
  installationProcess: {
    title: "Our Simple 4-Step Driveway Gate Installation Process",
    steps: [
      {
        stepNumber: "01",
        title: "Site Survey & Driveway Levelling",
        description:
          "We measure your driveway opening, check ground slope, and inspect pillar foundation points.",
      },
      {
        stepNumber: "02",
        title: "Custom Welding & Galvanizing",
        description:
          "Your gate is built in our workshop, hot-dip galvanized, and powder coated to your finish.",
      },
      {
        stepNumber: "03",
        title: "Track Concreting & Gate Fitting",
        description:
          "We concrete the steel ground track level into the driveway and hang the gate on guide rollers.",
      },
      {
        stepNumber: "04",
        title: "Catch Alignment & Handover",
        description:
          "We set gate travel stops, align locking brackets, and demonstrate smooth operation.",
      },
    ],
  },
  reviews: [
    {
      authorName: "Sibusiso D.",
      location: "Homeowner, Centurion",
      rating: 5,
      date: "2025-11-10",
      comment:
        "Our new sliding driveway gate looks fantastic and glides effortlessly. The anti-lift brackets and heavy build give us real security.",
    },
    {
      authorName: "Riaan P.",
      location: "Homeowner, Kempton Park",
      rating: 5,
      date: "2025-12-03",
      comment:
        "The cantilever gate works perfectly on our gravel driveway with no track to clog. Great craftsmanship and a clean install.",
    },
  ],
  faqs: [
    {
      question: "Can I automate my driveway gate with an electric motor?",
      answer:
        "Yes, all our driveway gates come pre-fitted with motor mounting plates and toothed steel racks ready for Centurion or Hansa gate motors.",
    },
    {
      question: "What is better: a sliding gate or a swing gate?",
      answer:
        "Sliding gates are generally more secure and ideal for sloped driveways or properties with limited parking depth, while swing gates work best where there is no side clearance to slide.",
    },
    {
      question: "Do you offer cantilever gates for gravel driveways?",
      answer:
        "Yes. Cantilever gates hang above the driveway without a ground track, so gravel, sand, and debris cannot clog the mechanism.",
    },
    {
      question: "How long does a driveway gate take to build and install?",
      answer:
        "After site measurement, fabrication takes about 7 to 10 working days, and on-site installation with track concreting usually takes 1 to 2 days.",
    },
  ],
};
