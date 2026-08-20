import type { Service } from "@/data/services";
import type { ServicePageContent } from "@/data/service-pages";
import { siteUrl } from "@/lib/site";

export const service: Service = {
  id: "mesh-fencing",
  title: "Mesh & Steel Fencing",
  slug: "/services/mesh-fencing",
  shortDescription: "Anti-climb, anti-cut steel mesh fencing that keeps your perimeter secure without blocking visibility.",
  longDescription:
    "Protect your perimeter with anti-climb, anti-cut wire mesh fencing (ClearVu style) that delivers maximum security with clean, open visibility. Manufactured from high-tensile galvanised steel wire and heavy-duty flanged posts, finished with a durable powder coating for years of low-maintenance protection.",
  features: [
    "Anti-climb mesh apertures with no footholds or finger grips",
    "Anti-cut high-tensile galvanised steel wire (3mm–4mm)",
    "See-through panels keep CCTV and guard sightlines clear",
    "Powder-coated finish in Anthracite, Black, or Green",
    "Heavy-duty steel posts with tamper-proof anti-vandal bolts",
    "Optional razor wire, flatwrap coil, or electric fence toppings",
  ],
  imagePath: "/images/real_images/products/security/security_burglar-doors_one.jpeg",
  iconName: "ShieldCheck",
  featured: true,
};

export const page: ServicePageContent = {
  id: "mesh-fencing",
  slug: "mesh-fencing",
  fullPageUrl: `${siteUrl}/services/mesh-fencing`,
  seo: {
    titleTag: "Mesh & Steel Fencing | Anti-Climb Security Fencing Gauteng",
    metaDescription:
      "Anti-climb, anti-cut steel mesh security fencing (ClearVu style) with powder-coated finish and professional installation across Gauteng. See-through panels keep CCTV sightlines clear.",
    keywords: [
      "mesh security fencing",
      "anti climb fencing",
      "clearview fencing",
      "steel mesh fencing",
      "security fencing gauteng",
      "anti cut fencing",
    ],
    canonicalUrl: `${siteUrl}/services/mesh-fencing`,
    openGraphImage: `${siteUrl}/images/real_images/products/security/security_burglar-doors_one.jpeg`,
  },
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mesh & Steel Fencing Installation",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Aluminium Designs",
    },
  },
  hero: {
    headline: "Custom Mesh Security Fencing",
    subheadline:
      "Protect your perimeter with anti-climb, anti-cut wire mesh fencing that provides maximum security with clean, open visibility.",
    badgeText: "Anti-Climb High-Security Wire Mesh",
    primaryCtaText: "Get a Mesh Fence Quote",
    secondaryCtaText: "Explore Mesh Specs",
  },
  overview: {
    heading: "Anti-Climb & Anti-Cut High-Security Steel Mesh Fencing",
    paragraphs: [
      "Mesh security fencing offers an attractive, highly formidable barrier for residential estates, corporate office parks, and commercial properties.",
      "The tight aperture wire mesh prevents fingers or toes from finding a foothold for climbing and resists cutting with standard bolt cutters, all while allowing clear CCTV camera surveillance.",
    ],
    keyFeaturesNotice:
      "All mesh fences are built with heavy-duty steel flanged posts, tamper-proof anti-vandal bolts, and optional razor wire or electric fence toppings.",
  },
  benefits: {
    title: "Why Choose Our Mesh & Steel Fencing",
    items: [
      {
        icon: "ShieldCheck",
        title: "Anti-Climb Aperture",
        description:
          "Narrow mesh openings deny intruders toeholds and finger grips, making the fence nearly impossible to scale.",
      },
      {
        icon: "Lock",
        title: "Anti-Cut High-Tensile Wire",
        description:
          "Dense 3mm–4mm galvanised wire spacing stops conventional bolt cutters from biting into the strands.",
      },
      {
        icon: "Eye",
        title: "CCTV-Friendly Visibility",
        description:
          "The see-through design keeps your perimeter cameras and guards with a clear, uninterrupted view.",
      },
      {
        icon: "Wrench",
        title: "Heavy-Duty Steel Framework",
        description:
          "Flanged steel posts and full-length clamp bars lock every panel rigidly in place.",
      },
    ],
  },
  productTypes: {
    title: "Choose the Right Mesh Fence for Your Property",
    description:
      "Every perimeter has different security and visibility needs. We build the full range of mesh configurations to match your site.",
    items: [
      {
        name: "High-Security Anti-Climb Mesh",
        tagline: "Maximum perimeter protection",
        description:
          "Fine 76mm x 12.7mm aperture panels with V-bend reinforcement that resist climbing and cutting.",
        idealFor: "Gated estates, data centres, and high-risk sites.",
      },
      {
        name: "Medium-Security Mesh Panels",
        tagline: "Balanced security and value",
        description:
          "Strong mesh panels offering solid protection at a more economical price point.",
        idealFor: "Residential homes, complexes, and small business premises.",
      },
      {
        name: "Mesh Fence with Razor Wire Topping",
        tagline: "Extra deterrent for exposed perimeters",
        description:
          "Anti-climb mesh combined with razor wire or flatwrap coils along the top line.",
        idealFor: "Industrial parks, warehouses, and long boundary walls.",
      },
      {
        name: "Matching Steel & Mesh Gates",
        tagline: "Lockable access for full coverage",
        description:
          "Custom steel or mesh driveway and pedestrian gates built to match your fence line.",
        idealFor: "Entrances requiring secure, keyed or automated access.",
      },
    ],
  },
  glazingOptions: {
    title: "Coating & Finish Options",
    description:
      "The coating you select determines corrosion resistance, colour, and the overall look of your perimeter.",
    options: [
      {
        name: "Galvanised Zinc Coating",
        description:
          "A base zinc layer that protects the steel wire from rust in wet and humid conditions.",
      },
      {
        name: "Fusion Bonded PVC / Powder Coating",
        description:
          "A durable thermoset finish available in Anthracite, Black, or Green to suit your estate or property.",
      },
      {
        name: "Razor Wire & Electric Toppings",
        description:
          "Optional security add-ons fitted along the top of panels for an added deterrent.",
      },
    ],
  },
  specifications: {
    title: "Technical Specifications & Hardware",
    items: [
      { label: "Mesh Types", value: "High-density anti-climb (76mm x 12.7mm aperture) and medium-security panels" },
      { label: "Wire Diameter", value: "3mm to 4mm high-tensile galvanised steel wire" },
      { label: "Panel Heights", value: "1.8m, 2.0m, 2.4m, and 3.0m panels with rigid V-bend reinforcement" },
      { label: "Coatings", value: "Fusion bonded PVC / polyester powder coat in Anthracite, Black, or Green" },
      { label: "Topping Options", value: "Razor wire, flatwrap coils, or electric fence bracket extensions" },
      { label: "Post & Clamp System", value: "Heavy-duty steel flanged posts with tamper-proof anti-vandal bolts" },
    ],
  },
  installationProcess: {
    title: "Our Simple 4-Step Mesh Fence Installation Process",
    steps: [
      {
        stepNumber: "01",
        title: "Perimeter Measurement & Soil Check",
        description:
          "We survey your boundary line, calculate panel runs, and check ground conditions.",
      },
      {
        stepNumber: "02",
        title: "Post Concreting & Foundation",
        description:
          "Heavy-duty square posts are concreted securely into deep footings along the perimeter.",
      },
      {
        stepNumber: "03",
        title: "Panel Clamping & Bolting",
        description:
          "Mesh panels are fixed to posts using full-length steel clamp bars and shear bolts.",
      },
      {
        stepNumber: "04",
        title: "Topping Add-ons & Handover",
        description:
          "We fit optional electric fence or razor wire toppings and inspect all fasteners.",
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
        "The mesh fence gives us total peace of mind without making the property look like a prison. We can still see right through to the street, and it feels incredibly solid.",
    },
    {
      authorName: "Pieter V.",
      location: "Estate Manager, Centurion",
      rating: 5,
      date: "2025-12-04",
      comment:
        "We fenced the entire estate boundary with anti-climb mesh. The installation crew was fast and tidy, and the powder-coated finish still looks brand new.",
    },
  ],
  faqs: [
    {
      question: "Is mesh security fencing more secure than palisade fencing?",
      answer:
        "Mesh security fencing offers superior anti-climb properties and cannot be pried apart with crowbars, making it the preferred choice for gated estates and high-security sites.",
    },
    {
      question: "Will the wire fence peel or corrode in rain?",
      answer:
        "No. Our panels are dual-coated with galvanised zinc and a thermoset powder coating to prevent corrosion for decades.",
    },
    {
      question: "Can CCTV cameras still see through mesh fencing?",
      answer:
        "Yes. The open weave of the mesh keeps sightlines clear for cameras and security guards, which is one of its biggest advantages over solid walls.",
    },
    {
      question: "How long does a mesh fence take to install?",
      answer:
        "Most residential perimeters are completed within 2 to 4 working days depending on length, ground conditions, and any optional toppings.",
    },
  ],
};
