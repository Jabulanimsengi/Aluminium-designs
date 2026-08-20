import type { Service } from "@/data/services";
import type { ServicePageContent } from "@/data/service-pages";
import { siteUrl } from "@/lib/site";

export const service: Service = {
  id: "palisade-fencing",
  title: "Palisade Fencing",
  slug: "/services/palisade-fencing",
  shortDescription: "High-security steel perimeter fencing for homes, schools, and businesses.",
  longDescription:
    "Secure your property boundary with durable steel palisade fencing featuring sharp spike deterrents, hot-dip galvanizing, and expert installation. Manufactured from hot-rolled angle iron posts and high-tensile steel pales with sharp spike tops, welded securely with anti-vandal shear nuts.",
  features: [
    "Sharp multi-spike tops that deter climbing and trespassing",
    "Hot-dip galvanized coating that resists rust for decades",
    "7-spike, 3-spike, and classic arrow point profiles",
    "Open visibility for guards and CCTV along the boundary",
    "High-security shear nuts that cannot be unscrewed",
    "Deep 600mm concrete post footings for rigidity",
  ],
  imagePath: "/images/slatted_gate.png",
  iconName: "ShieldAlert",
  featured: true,
};

export const page: ServicePageContent = {
  id: "palisade-fencing",
  slug: "palisade-fencing",
  fullPageUrl: `${siteUrl}/services/palisade-fencing`,
  seo: {
    titleTag: "Steel Palisade Fencing & Perimeter Security | Aluminium Designs Gauteng",
    metaDescription:
      "Professional steel palisade fencing installation. 7-spike and 3-spike options, hot-dip galvanizing, tamper-proof bolts, and expert boundary fencing across Gauteng.",
    keywords: [
      "palisade fencing",
      "steel palisade fencing",
      "perimeter security fencing",
      "palisade fencing installers",
      "palisade fencing gauteng",
      "7 spike palisade",
    ],
    canonicalUrl: `${siteUrl}/services/palisade-fencing`,
    openGraphImage: `${siteUrl}/images/slatted_gate.png`,
  },
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Palisade Fencing Installation",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Aluminium Designs",
    },
  },
  hero: {
    headline: "Custom Steel Palisade Fencing",
    subheadline:
      "Secure your property boundary with durable steel palisade fencing featuring sharp spike deterrents, hot-dip galvanizing, and expert installation.",
    badgeText: "Steel Palisade Perimeter Security",
    primaryCtaText: "Get a Fencing Quote",
    secondaryCtaText: "Explore Palisade Specs",
  },
  overview: {
    heading: "Strong Steel Palisade Boundaries Built to Deter Intruders",
    paragraphs: [
      "Steel palisade fencing is South Africa's proven perimeter barrier for residential houses, commercial business parks, industrial yards, and schools.",
      "Every panel is manufactured with hot-rolled angle iron posts and high-tensile steel pales with sharp 3-spike or 7-spike tops, welded securely with anti-vandal shear nuts.",
    ],
    keyFeaturesNotice:
      "All fencing includes high-security shear nuts and snap-off bolts, with steel posts concreted 600mm deep for lasting rigidity.",
  },
  benefits: {
    title: "Why Choose Our Palisade Fencing",
    items: [
      {
        icon: "ShieldAlert",
        title: "Strong Visual Deterrent",
        description:
          "Sharp multi-spike tops discourage climbing attempts and keep trespassers out.",
      },
      {
        icon: "Eye",
        title: "Open Visibility",
        description:
          "Clear sightlines along your boundary for security guards and CCTV cameras.",
      },
      {
        icon: "ShieldCheck",
        title: "Decades of Durability",
        description:
          "Hot-dip galvanized coating resists rust, rain, and soil moisture for 30+ years.",
      },
      {
        icon: "Wrench",
        title: "Tamper-Proof Fasteners",
        description:
          "Shear nuts and snap-off bolts cannot be unscrewed once the fence is installed.",
      },
    ],
  },
  productTypes: {
    title: "Choose the Right Palisade Fence for Your Boundary",
    description:
      "Every property has different height and security needs. We build palisade panels to match your perimeter requirements.",
    items: [
      {
        name: "Residential Palisade Fence",
        tagline: "Stylish security for homes",
        description:
          "Lighter palisade panels in standard heights that secure a home boundary without looking industrial.",
        idealFor: "Residential properties and estate perimeters.",
      },
      {
        name: "Commercial Palisade Fence",
        tagline: "Heavy-duty perimeter protection",
        description:
          "Heavier steel sections and taller panels built to protect business premises and parking areas.",
        idealFor: "Business parks, offices, and retail premises.",
      },
      {
        name: "Industrial Palisade Fence",
        tagline: "Maximum-height security barrier",
        description:
          "Tall, reinforced panels with heavy posts designed for factories, warehouses, and yards.",
        idealFor: "Industrial sites, depots, and high-risk facilities.",
      },
      {
        name: "School & Community Fence",
        tagline: "Safe, visible boundary protection",
        description:
          "Durable palisade panels with open visibility that secure school grounds while keeping sightlines clear.",
        idealFor: "Schools, sports grounds, and community facilities.",
      },
    ],
  },
  glazingOptions: {
    title: "Spike Profile & Finish Options",
    description:
      "The pale top and finish you choose determine the fence's deterrent level and appearance.",
    options: [
      {
        name: "7-Spike Spear Top",
        description:
          "The most secure anti-climb profile with seven sharp points per pale.",
      },
      {
        name: "3-Spike Devil's Fork",
        description:
          "A popular, formidable three-point pale top for strong security.",
      },
      {
        name: "Classic Arrow Point",
        description:
          "A single clean arrow point for a neat, traditional appearance.",
      },
      {
        name: "Hot-Dip Galvanized Finish",
        description:
          "A silver zinc coating that protects steel against rust for 30+ years.",
      },
    ],
  },
  specifications: {
    title: "Technical Specifications & Hardware",
    items: [
      { label: "Height Options", value: "1.2m, 1.5m, 1.8m, 2.0m, and 2.4m high fence panels" },
      { label: "Spike Profiles", value: "7-spike spear, 3-spike devil's fork, or classic arrow point" },
      { label: "Steel Material", value: "Cold-formed W-section or D-section high-tensile steel pales" },
      { label: "Rust Finishes", value: "Hot-dip galvanized (SANS 121) or anti-corrosion primer and epoxy paint" },
      { label: "Post Anchoring", value: "Solid steel I-beam or square posts concreted 600mm deep into ground" },
      { label: "Fasteners", value: "High-security shear nuts and snap-off bolts that cannot be unscrewed" },
    ],
  },
  installationProcess: {
    title: "Our Simple 4-Step Palisade Installation Process",
    steps: [
      {
        stepNumber: "01",
        title: "Perimeter Survey & Ground Staking",
        description:
          "We walk your boundary line, measure total metres, mark post holes, and note slope angles.",
      },
      {
        stepNumber: "02",
        title: "Post Hole Digging & Concreting",
        description:
          "We dig deep post holes and secure steel posts in high-strength concrete footings.",
      },
      {
        stepNumber: "03",
        title: "Cross-Runner & Pale Assembly",
        description:
          "We bolt angle iron runners and mount the sharp steel pales with security shear nuts.",
      },
      {
        stepNumber: "04",
        title: "Touch-Up & Final Inspection",
        description:
          "We apply anti-rust spray to weld joints and inspect the fence for rigidity.",
      },
    ],
  },
  reviews: [
    {
      authorName: "Thandi N.",
      location: "Homeowner, Boksburg",
      rating: 5,
      date: "2025-11-10",
      comment:
        "The palisade fence around our property looks neat and feels very secure. The team worked fast and left the site spotless.",
    },
    {
      authorName: "Werner B.",
      location: "Homeowner, Krugersdorp",
      rating: 5,
      date: "2025-12-07",
      comment:
        "Fitted a stepped palisade fence on our sloped boundary. The 7-spike tops are a real deterrent and the galvanized finish looks great.",
    },
  ],
  faqs: [
    {
      question: "Can palisade fencing be installed on sloped or uneven ground?",
      answer:
        "Yes, our palisade panels can be stepped or racked to follow the natural contours and slopes of your garden or yard.",
    },
    {
      question: "Which pale top is most secure: 3-spike or 7-spike?",
      answer:
        "The 7-spike spear provides maximum anti-climb protection, while the 3-spike devil's fork is also a popular and formidable security option.",
    },
    {
      question: "How long does palisade fencing last?",
      answer:
        "Hot-dip galvanized palisade fencing resists rust, rain, and soil moisture for 30 years or more with virtually no maintenance.",
    },
    {
      question: "How deep are the fence posts set?",
      answer:
        "We concrete solid steel posts 600mm deep into the ground to give the fence the rigidity to withstand wind and climbing attempts.",
    },
  ],
};
