import { ServiceObject } from '../../types/service';

export const meshFencingService: ServiceObject = {
  id: "srv-mesh-fencing",
  slug: "mesh-fencing",
  serviceName: "Mesh Fencing",
  tagline: "High-Security Anti-Cut, Anti-Climb See-Through Wire Mesh Fencing",
  category: "Steel Security",
  hero: {
    badge: "Anti-Climb High-Security Wire Mesh",
    headline: "Custom Mesh Security Fencing",
    subheadline: "Protect your perimeter with anti-climb, anti-cut wire mesh fencing (ClearVu style) that provides maximum security with clean, open visibility.",
    primaryCtaText: "Get a Mesh Fence Quote",
    primaryCtaLink: "/contact",
    secondaryCtaText: "Explore Mesh Specs",
    secondaryCtaLink: "#specs",
    heroImage: "/images/real_images/products/security/security_burglar-doors_two.jpeg"
  },
  overview: {
    heading: "Anti-Climb & Anti-Cut High-Security Steel Mesh Fencing",
    paragraphs: [
      "Mesh security fencing offers an attractive, highly formidable barrier for residential estates, corporate office parks, and commercial properties.",
      "The tight aperture wire mesh prevents fingers or toes from getting a foothold for climbing and resists cutting with standard bolt cutters, all while allowing clear CCTV camera surveillance."
    ],
    specifications: [
      { label: "Mesh Types", value: "High-Density Anti-Climb (76mm x 12.7mm aperture) and Medium-Security Panels" },
      { label: "Wire Diameter", value: "3mm to 4mm High-Tensile Galvanized Steel Wire" },
      { label: "Panel Heights", value: "1.8m, 2.0m, 2.4m, and 3.0m High Panels with Rigid V-Bend Reinforcement" },
      { label: "Coatings", value: "Fusion Bonded PVC / Polyester Powder Coated Anthracite, Black, or Green" },
      { label: "Topping Options", value: "Razor Wire, Flatwrap Coils, or Electric Fence Bracket Extensions" },
      { label: "Post & Clamp System", value: "Heavy-Duty Steel Flanged Posts with Tamper-Proof Anti-Vandal Bolts" }
    ]
  },
  features: [
    {
      id: "feat-anti-climb",
      title: "Anti-Climb Aperture",
      description: "Narrow mesh openings prevent intruders from gaining toeholds or finger grips.",
      icon: "shield-checkmark-outline"
    },
    {
      id: "feat-anti-cut",
      title: "Anti-Cut High Tensile Wire",
      description: "Dense wire spacing prevents conventional hand bolt-cutters from biting into wires.",
      icon: "cut-outline"
    },
    {
      id: "feat-cctv-friendly",
      title: "CCTV Friendly Visibility",
      description: "See-through design maintains clear visibility for perimeter cameras and guards.",
      icon: "videocam-outline"
    }
  ],
  process: {
    sectionHeading: "4 Steps to Your High-Security Mesh Fence",
    steps: [
      {
        stepNumber: 1,
        title: "Perimeter Measurement & Soil Check",
        description: "We survey your boundary line, calculate panel runs, and check ground conditions."
      },
      {
        stepNumber: 2,
        title: "Post Concreting & Foundation",
        description: "Heavy-duty square posts are concreted securely in deep footings along the perimeter."
      },
      {
        stepNumber: 3,
        title: "Panel Clamping & Bolting",
        description: "Mesh panels are fixed to posts using full-length steel clamp bars and shear bolts."
      },
      {
        stepNumber: 4,
        title: "Topping Add-ons & Handover",
        description: "We fit optional electric fence or razor wire toppings and inspect all fasteners."
      }
    ]
  },
  faqs: [
    {
      question: "Is mesh security fencing more secure than palisade fencing?",
      answer: "Mesh security fencing offers superior anti-climb properties and cannot be pried apart with crowbars, making it the preferred choice for gated estates and high-security sites."
    },
    {
      question: "Will the wire fence peel or corrode in rain?",
      answer: "No, our panels are dual-coated with galvanized zinc and thermoset powder coating to prevent corrosion for decades."
    }
  ],
  relatedServices: [
    {
      serviceId: "srv-palisade-fencing",
      title: "Palisade Fencing",
      slug: "palisade-fencing",
      shortDescription: "Traditional steel palisade fencing.",
      thumbnailImage: "/images/slatted_gate.png"
    },
    {
      serviceId: "srv-driveway-gates",
      title: "Driveway Gates",
      slug: "driveway-gates",
      shortDescription: "Matching mesh and steel driveway gates.",
      thumbnailImage: "/images/real_images/products/gates/aluminium_gate_two.jpeg"
    }
  ],
  seo: {
    titleTag: "Mesh Security Fencing & ClearVu Style Fencing | South Africa",
    metaDescription: "Anti-climb and anti-cut mesh security fencing. High-tensile steel wire, powder coated finish, and professional installation across South Africa.",
    keywords: ["mesh security fencing", "anti climb fencing", "see through fencing", "ClearVu style fencing SA"],
    canonicalUrl: "https://example.com/services/mesh-fencing",
    openGraphImage: "https://example.com/images/og/mesh-fencing.jpg"
  },
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mesh Security Fencing Installation",
    "provider": {
      "@type": "Organization",
      "name": "Steel & Security Solutions SA"
    }
  }
};
