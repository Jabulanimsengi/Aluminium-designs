import { ServiceObject } from '../../types/service';

export const flyScreensService: ServiceObject = {
  id: "srv-fly-screens",
  slug: "fly-screens",
  serviceName: "Fly Screens",
  tagline: "Keep Flies, Mosquitoes, and Bugs Out While Enjoying Fresh Air",
  category: "Windows & Glass",
  hero: {
    badge: "Custom Mesh Insect & Mosquito Screens",
    headline: "Custom Fly Screens & Bug Screens",
    subheadline: "Enjoy cool evening breezes without unwanted mosquitoes, flies, bugs, and pests entering your home with custom aluminium fly screens.",
    primaryCtaText: "Get a Fly Screen Quote",
    primaryCtaLink: "/contact",
    secondaryCtaText: "Explore Screen Types",
    secondaryCtaLink: "#specs",
    heroImage: "/images/real_images/products/windows/window_aluminium_four.jpeg"
  },
  overview: {
    heading: "Durable Insect & Mosquito Screens for Windows and Doors",
    paragraphs: [
      "Our custom fly screens let you keep your windows and patio doors wide open for healthy natural ventilation while creating an impenetrable barrier against mosquitoes, flies, and moths.",
      "Built with corrosion-proof aluminium sub-frames and heavy-duty fibreglass, pet-resistant mesh, or stainless steel safety mesh tailored to fit any window or door opening."
    ],
    specifications: [
      { label: "Screen Types", value: "Fixed Window Screens, Sliding Door Fly Screens, and Retractable Roll-Up Screens" },
      { label: "Frame Material", value: "Slimline Powder Coated Aluminium Frame" },
      { label: "Mesh Options", value: "Heavy-Duty Fibreglass Mesh, Claw-Proof Pet Mesh, or Stainless Steel Wire Mesh" },
      { label: "Frame Colors", value: "Charcoal, Matte Black, Pure White, Bronze, or Silver Anodised" },
      { label: "Mounting", value: "Magnetic Clips, Turn-Button Fasteners, or Sliding Channel Tracks" },
      { label: "Cleaning", value: "Easily Removable and Washable with Warm Water and Soap" }
    ]
  },
  features: [
    {
      id: "feat-pest-free",
      title: "100% Pest Protection",
      description: "Keeps mosquitoes, flies, and night bugs out of bedrooms and living areas.",
      icon: "shield-checkmark-outline"
    },
    {
      id: "feat-fresh-air",
      title: "Maximum Fresh Airflow",
      description: "Enjoy natural evening breezes without worrying about insect bites.",
      icon: "leaf-outline"
    },
    {
      id: "feat-pet-mesh",
      title: "Pet Resistant Options",
      description: "Tough heavy-gauge mesh stands up to curious cats and dogs scratching at doors.",
      icon: "paw-outline"
    }
  ],
  process: {
    sectionHeading: "Our 4-Step Screen Fitting Process",
    steps: [
      {
        stepNumber: 1,
        title: "Window & Door Measuring",
        description: "We measure every window and sliding door opening for a tight insect seal."
      },
      {
        stepNumber: 2,
        title: "Custom Frame Assembly",
        description: "Aluminium sub-frames are cut, splined with tight mesh, and fitted with latches."
      },
      {
        stepNumber: 3,
        title: "Quick On-Site Fitting",
        description: "We clip or slide screens neatly into your existing aluminium window and door tracks."
      },
      {
        stepNumber: 4,
        title: "Fit Check & Care Instructions",
        description: "We show you how to remove and wash your screens and hand over your warranty."
      }
    ]
  },
  faqs: [
    {
      question: "Can fly screens be installed on large sliding patio doors?",
      answer: "Yes, we build matching sliding screen door panels that glide along the existing door track right behind your glass patio doors."
    },
    {
      question: "Can I take the screens out to clean the windows?",
      answer: "Yes, our window screens are designed with quick-release clips or magnetic fasteners so you can pop them out easily for window cleaning."
    }
  ],
  relatedServices: [
    {
      serviceId: "srv-aluminium-sliding-windows",
      title: "Aluminium Sliding Windows",
      slug: "aluminium-sliding-windows",
      shortDescription: "Custom horizontal sliding windows.",
      thumbnailImage: "/images/real_images/products/windows/window_aluminium_seven.jpeg"
    },
    {
      serviceId: "srv-aluminium-sliding-doors",
      title: "Aluminium Sliding Doors",
      slug: "aluminium-sliding-doors",
      shortDescription: "Patio sliding doors with matching screen doors.",
      thumbnailImage: "/images/sliding_doors.png"
    }
  ],
  seo: {
    titleTag: "Fly Screens & Bug Screens for Windows and Doors | South Africa",
    metaDescription: "Custom aluminium fly screens and mosquito screens for windows and sliding patio doors. Pet mesh options, easy cleaning, and expert installation.",
    keywords: ["fly screens", "mosquito screens", "insect screens for windows", "sliding fly screen doors SA"],
    canonicalUrl: "https://example.com/services/fly-screens",
    openGraphImage: "https://example.com/images/og/fly-screens.jpg"
  },
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Fly Screens Installation",
    "provider": {
      "@type": "Organization",
      "name": "Aluminium Windows & Doors SA"
    }
  }
};
