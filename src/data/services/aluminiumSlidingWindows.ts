import { ServiceObject } from '../../types/service';

export const aluminiumSlidingWindowsService: ServiceObject = {
  id: "srv-aluminium-sliding-windows",
  slug: "aluminium-sliding-windows",
  serviceName: "Aluminium Sliding Windows",
  tagline: "Smooth Horizontal Sliding Windows for Maximum Light and Air",
  category: "Windows & Glass",
  hero: {
    badge: "Custom Horizontal Sliding Windows",
    headline: "Custom Aluminium Sliding Windows",
    subheadline: "Space-saving horizontal sliding windows that glide smoothly, open up wide ventilation, and keep your rooms bright and breezy.",
    primaryCtaText: "Request Free Quote",
    primaryCtaLink: "/contact",
    secondaryCtaText: "Explore Window Sizes",
    secondaryCtaLink: "#specs",
    heroImage: "/images/services/aluminium-sliding-windows-hero.webp"
  },
  overview: {
    heading: "Smooth Gliding Horizontal Aluminium Windows",
    paragraphs: [
      "Aluminium sliding windows are an ideal choice for rooms with limited exterior clearance, walkways, and patios where outward opening window panes would be in the way.",
      "Engineered with durable nylon guide wheels, built-in drainage weep holes, and key-locking cam handles, they deliver seamless day-to-day operation."
    ],
    specifications: [
      { label: "Window Configurations", value: "2-Panel (OX or XO), 3-Panel, and 4-Panel (OXXO) Sliding Windows" },
      { label: "Frame Material", value: "Strong Lightweight Aluminium" },
      { label: "Finishes", value: "Charcoal, Matte Black, Pure White, Bronze, or Anodised Silver" },
      { label: "Glass Options", value: "Clear Float Glass, Laminated Safety Glass, or Tinted Glazing" },
      { label: "Locking Mechanism", value: "Self-Latching Cam Lock and Optional Key Locks" },
      { label: "Weather Proofing", value: "High-Density Brush Pile and Silicone Draft Seals" }
    ]
  },
  features: [
    {
      id: "feat-space-saver",
      title: "Space-Saving Design",
      description: "Slides neatly within its own track without protruding into walkways, balconies, or verandas.",
      icon: "resize-outline"
    },
    {
      id: "feat-easy-cleaning",
      title: "Easy To Clean & Use",
      description: "Panels slide smoothly on durable tracks and can be lifted out easily for deep cleaning.",
      icon: "sparkles-outline"
    },
    {
      id: "feat-ventilation",
      title: "Adjustable Airflow",
      description: "Open the window a fraction for gentle breeze or slide it fully open for maximum fresh air.",
      icon: "leaf-outline"
    }
  ],
  process: {
    sectionHeading: "4-Step Sliding Window Installation",
    steps: [
      {
        stepNumber: 1,
        title: "Measurement & Quote",
        description: "We visit your property to measure each window opening and provide an upfront price."
      },
      {
        stepNumber: 2,
        title: "Workshop Build",
        description: "Your window frames are built, fitted with glass and rollers, and quality checked."
      },
      {
        stepNumber: 3,
        title: "Neat Installation",
        description: "We remove old frames, anchor the sliding window securely, and seal against rain."
      },
      {
        stepNumber: 4,
        title: "Smooth Test & Sign-Off",
        description: "We demonstrate smooth sliding, test the latching lock, and provide your warranty."
      }
    ]
  },
  faqs: [
    {
      question: "Can I add mosquito fly screens to sliding windows?",
      answer: "Yes, we custom build matching aluminium fly screen inserts that clip directly into the window frame track."
    },
    {
      question: "Do aluminium sliding windows rattle in high winds?",
      answer: "No, our sliding windows use heavy-duty brush pile seals and tight guide blocks to prevent any rattling during stormy weather."
    }
  ],
  relatedServices: [
    {
      serviceId: "srv-aluminium-windows",
      title: "Aluminium Windows",
      slug: "aluminium-windows",
      shortDescription: "Custom top-hung and side-hung aluminium windows.",
      thumbnailImage: "/images/services/windows-thumb.webp"
    },
    {
      serviceId: "srv-fly-screens",
      title: "Fly Screens & Bug Screens",
      slug: "fly-screens",
      shortDescription: "Custom mesh screens for windows and doors.",
      thumbnailImage: "/images/services/screens-thumb.webp"
    }
  ],
  seo: {
    titleTag: "Aluminium Sliding Windows & Installation | South Africa",
    metaDescription: "Custom aluminium sliding windows. Space-saving horizontal sliders, safety glass, smooth rollers, and expert installation across South Africa.",
    keywords: ["aluminium sliding windows", "horizontal sliding windows", "sliding window frames", "aluminium window installers"],
    canonicalUrl: "https://example.com/services/aluminium-sliding-windows",
    openGraphImage: "https://example.com/images/og/aluminium-sliding-windows.jpg"
  },
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Aluminium Sliding Windows Installation",
    "provider": {
      "@type": "Organization",
      "name": "Aluminium Windows & Doors SA"
    }
  }
};
