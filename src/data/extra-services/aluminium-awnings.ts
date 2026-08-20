import type { Service } from "@/data/services";
import type { ServicePageContent } from "@/data/service-pages";
import { siteUrl } from "@/lib/site";

export const service: Service = {
  id: "aluminium-awnings",
  title: "Aluminium Awnings & Canopies",
  slug: "/services/aluminium-awnings",
  shortDescription: "Durable, rust-proof aluminium awnings that shield doors, windows, and walkways from harsh sun, rain, and hail.",
  longDescription:
    "Protect your doorways, windows, and walkways from harsh sun, heavy rain, and hail with strong, rust-proof aluminium awnings. Unlike fabric awnings that tear, rot, and fade in the South African sun, our powder-coated aluminium canopies last for decades without peeling, rusting, or needing canvas replacements.",
  features: [
    "Blocks blistering summer sun to keep rooms cooler",
    "Keeps doorways and porches dry when unlocking doors in the rain",
    "Hail and storm resistant aluminium and polycarbonate panels",
    "Rust-proof marine-grade aluminium with powder-coated finishes",
    "Integrated front gutters and side water drainage channels",
    "Heavy-duty wall anchor brackets bolted into brickwork",
  ],
  imagePath: "/images/patio_enclosure.png",
  iconName: "Sun",
  featured: true,
};

export const page: ServicePageContent = {
  id: "aluminium-awnings",
  slug: "aluminium-awnings",
  fullPageUrl: `${siteUrl}/services/aluminium-awnings`,
  seo: {
    titleTag: "Aluminium Awnings & Canopies | Door & Window Weather Protection",
    metaDescription:
      "Custom aluminium awnings and door canopies. Hail-proof sun and rain protection for windows and doorways, expertly installed across Gauteng.",
    keywords: [
      "aluminium awnings",
      "door canopies",
      "window awnings",
      "aluminium canopies gauteng",
      "louvred canopies",
      "doorway weather protection",
    ],
    canonicalUrl: `${siteUrl}/services/aluminium-awnings`,
    openGraphImage: `${siteUrl}/images/patio_enclosure.png`,
  },
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Aluminium Awnings & Canopies Installation",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Aluminium Designs",
    },
  },
  hero: {
    headline: "Custom Aluminium Awnings & Canopies",
    subheadline:
      "Protect your doorways, windows, and walkways from harsh sun, heavy rain, and hail with strong, rust-proof aluminium awnings.",
    badgeText: "Custom Door & Window Weather Canopies",
    primaryCtaText: "Get an Awning Quote",
    secondaryCtaText: "View Awning Designs",
  },
  overview: {
    heading: "Weatherproof Aluminium Canopies & Overhangs",
    paragraphs: [
      "Our custom aluminium awnings and canopies shield your entryways and windows from direct sunlight, reducing heat inside your home while keeping entry steps dry in rainy weather.",
      "Unlike fabric awnings that tear, rot, or fade in the South African sun, aluminium awnings last for decades without peeling, rusting, or requiring canvas replacements.",
    ],
    keyFeaturesNotice:
      "All awnings include integrated front gutters and side water discharge channels, and are anchored to brickwork with heavy-duty expanding bolts.",
  },
  benefits: {
    title: "Why Choose Our Aluminium Awnings",
    items: [
      {
        icon: "Sun",
        title: "Blocks Blistering Sun",
        description:
          "Shades windows and doorways to keep rooms significantly cooler during peak summer heat.",
      },
      {
        icon: "Droplets",
        title: "Dry Entryways",
        description:
          "Keeps your front door and porch completely dry while you unlock the door in the rain.",
      },
      {
        icon: "ShieldCheck",
        title: "Hail & Storm Resistant",
        description:
          "Durable aluminium and polycarbonate panels withstand severe hail strikes without cracking.",
      },
      {
        icon: "Paintbrush",
        title: "Powder-Coated & Rust-Proof",
        description:
          "Marine-grade aluminium with a UV-resistant powder coat that never rusts, peels, or needs repainting.",
      },
    ],
  },
  productTypes: {
    title: "Choose the Right Awning or Canopy Style",
    description:
      "Every doorway and window has different projection and clearance needs. We build all major awning configurations to suit your home.",
    items: [
      {
        name: "Fixed Cantilever Awnings",
        tagline: "Simple, strong overhead shade",
        description:
          "A fixed angled canopy that projects over a door or window with no front posts in the way.",
        idealFor: "Front doors, side entrances, and standard windows.",
      },
      {
        name: "Louvred Canopies",
        tagline: "Adjustable shade and airflow",
        description:
          "Adjustable aluminium blades that let you control how much sun and air passes through.",
        idealFor: "Patios and entertainment areas wanting flexible shade.",
      },
      {
        name: "Polycarbonate Overhangs",
        tagline: "Translucent cover that lets light through",
        description:
          "Clear or tinted polycarbonate panels that block rain and hail while still letting natural light reach the doorway.",
        idealFor: "Entrances that need cover without darkening the area.",
      },
      {
        name: "Commercial Door Canopies",
        tagline: "Branded shelter for shop entrances",
        description:
          "Heavy-duty covered walkway awnings and door canopies built for retail stores and office entrances.",
        idealFor: "Shops, offices, and commercial buildings.",
      },
    ],
  },
  glazingOptions: {
    title: "Canopy & Finish Options",
    description:
      "The canopy material and finish you select determine durability, light, and overall appearance.",
    options: [
      {
        name: "Solid Aluminium Panels",
        description:
          "Fully opaque panels that provide maximum shade and complete rain protection in a clean, modern look.",
      },
      {
        name: "Polycarbonate Panels",
        description:
          "Tough translucent panels that block weather while letting soft natural light through to the doorway below.",
      },
      {
        name: "Louvred Aluminium Blades",
        description:
          "Adjustable blades that let you balance shade, airflow, and rain protection throughout the day.",
      },
      {
        name: "Powder-Coated Finishes",
        description:
          "Durable UV-resistant coatings in Charcoal, Matte Black, Pure White, or Bronze to match your home.",
      },
    ],
  },
  specifications: {
    title: "Technical Specifications & Hardware",
    items: [
      { label: "Awning Types", value: "Fixed cantilever awnings, louvred canopies, and polycarbonate overhangs" },
      { label: "Material", value: "High-strength powder-coated aluminium frame and panels" },
      { label: "Finishes", value: "Charcoal, Matte Black, Pure White, Bronze, or Anodised Silver" },
      { label: "Water Drainage", value: "Integrated front gutters and side water discharge channels" },
      { label: "Wind & Hail Rating", value: "Engineered to withstand high winds and heavy summer hail" },
      { label: "Mounting", value: "Heavy-duty wall anchor brackets bolted directly into brickwork" },
    ],
  },
  installationProcess: {
    title: "Our Simple 4-Step Awning Installation",
    steps: [
      {
        stepNumber: "01",
        title: "Measurement & Assessment",
        description:
          "We measure your door or window width, check the wall type, and agree on the projection depth.",
      },
      {
        stepNumber: "02",
        title: "Workshop Assembly",
        description:
          "Awning frame brackets and canopy panels are cut and assembled to your exact size.",
      },
      {
        stepNumber: "03",
        title: "Wall Anchoring & Sealing",
        description:
          "Our installers anchor the support brackets with expanding bolts and apply waterproof flashing.",
      },
      {
        stepNumber: "04",
        title: "Waterflow Check & Handover",
        description:
          "We verify the gutter drainage channels and hand over your product warranty.",
      },
    ],
  },
  reviews: [
    {
      authorName: "Marius E.",
      location: "Homeowner, Benoni",
      rating: 5,
      date: "2025-11-06",
      comment:
        "The awning over our front door keeps us dry in the rain and the porch is much cooler in the afternoon. Solid, neat work.",
    },
    {
      authorName: "Zanele M.",
      location: "Homeowner, Roodepoort",
      rating: 5,
      date: "2025-12-14",
      comment:
        "Our west-facing windows were baking in the afternoon sun. The awnings made a huge difference to the temperature inside.",
    },
  ],
  faqs: [
    {
      question: "Will aluminium awnings rust in coastal salt air?",
      answer:
        "No. Our awnings are constructed from marine-grade aluminium and powder coated to prevent any rust or corrosion, even in coastal conditions.",
    },
    {
      question: "Can awnings be installed over commercial retail shop doors?",
      answer:
        "Yes. We install commercial door canopies and covered walkway awnings for businesses and retail stores, tailored to your entrance size and branding.",
    },
    {
      question: "Do aluminium awnings need much maintenance?",
      answer:
        "Very little. A simple wash with warm soapy water once or twice a year keeps the powder-coated finish looking new, with no painting or rust treatment required.",
    },
    {
      question: "Can you match the awning colour to my existing windows and doors?",
      answer:
        "Yes. We offer a range of powder-coated colours including Charcoal, Matte Black, Pure White, and Bronze, so your awning blends seamlessly with the rest of your home.",
    },
  ],
};
