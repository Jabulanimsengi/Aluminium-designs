import { ServiceObject } from '../../types/service';

export const officeGlassPartitionsService: ServiceObject = {
  id: "srv-office-glass-partitions",
  slug: "office-glass-partitions",
  serviceName: "Office Glass Partitions",
  tagline: "Modern Frameless and Slim Aluminium Glass Dividing Walls for Offices",
  category: "Windows & Glass",
  hero: {
    badge: "Commercial Office Glass Dividers",
    headline: "Custom Office Glass Partitions",
    subheadline: "Create bright, professional, and quiet office work spaces with frameless glass dividing walls, boardrooms, and aluminium partition systems.",
    primaryCtaText: "Get an Office Fitout Quote",
    primaryCtaLink: "/contact",
    secondaryCtaText: "View Partition Options",
    secondaryCtaLink: "#specs",
    heroImage: "/images/services/office-glass-partitions-hero.webp"
  },
  overview: {
    heading: "Sleek Glass Office Dividers & Boardroom Walls",
    paragraphs: [
      "Glass partitions transform dark, cluttered office spaces into bright, modern, and productive environments by allowing natural light to flow between departments.",
      "Available in fully frameless glass designs or slim aluminium framing with integrated acoustic seals and privacy manifestation frosting or company logos."
    ],
    specifications: [
      { label: "Partition Styles", value: "Frameless Glass Walls, Slimline Aluminium Partitions, and Glass Cubicles" },
      { label: "Glass Options", value: "10mm to 12mm Toughened Safety Glass or Acoustic Laminated Glass" },
      { label: "Doors Included", value: "Frameless Glass Pivot Doors, Sliding Glass Doors, or Timber Veneer Doors" },
      { label: "Privacy Films", value: "Frosted Vinyl Strips, Full Privacy Frosting, or Custom Printed Brand Logos" },
      { label: "Acoustic Rating", value: "Acoustic Seals for Soundproof Boardroom and Executive Meeting Rooms" },
      { label: "Frame Finishes", value: "Matte Black, Charcoal Grey, Pure White, or Anodised Silver" }
    ]
  },
  features: [
    {
      id: "feat-natural-light",
      title: "Maximizes Natural Light",
      description: "Floods internal office spaces with sunlight, reducing artificial lighting costs.",
      icon: "sunny-outline"
    },
    {
      id: "feat-acoustic-privacy",
      title: "Sound Privacy for Meetings",
      description: "Acoustic glass panels and perimeter drop seals prevent confidential meeting sound leaks.",
      icon: "volume-mute-outline"
    },
    {
      id: "feat-quick-install",
      title: "Fast, Clean Installation",
      description: "Dry-glaze channel systems install quickly without messy drywall plastering or painting.",
      icon: "flash-outline"
    }
  ],
  process: {
    sectionHeading: "4 Steps to Your New Office Layout",
    steps: [
      {
        stepNumber: 1,
        title: "Floorplan & Site Survey",
        description: "We measure your office floor to ceiling, review door swings, and plan track channels."
      },
      {
        stepNumber: 2,
        title: "Glass Cutting & Toughening",
        description: "Toughened safety glass panels are cut with polished edges and door hinge cutouts."
      },
      {
        stepNumber: 3,
        title: "Track Mounting & Glazing",
        description: "We anchor slim ceiling and floor channels, set glass panels, and install doors."
      },
      {
        stepNumber: 4,
        title: "Frosting Film & Handover",
        description: "We apply required safety frosting vinyl strips, test locks, and hand over the room."
      }
    ]
  },
  faqs: [
    {
      question: "Can we add frosted company branding or privacy strips to the glass?",
      answer: "Yes, we supply and apply custom frosted vinyl stripes, dots, or full company logos to meet safety manifestation regulations and enhance privacy."
    },
    {
      question: "Are glass partitions soundproof enough for executive boardrooms?",
      answer: "Yes, by using acoustic laminated glass and sound-dampening perimeter seals, our boardroom partitions keep conversations private."
    }
  ],
  relatedServices: [
    {
      serviceId: "srv-glass-shopfronts",
      title: "Glass Shopfronts",
      slug: "glass-shopfronts",
      shortDescription: "Retail storefronts and commercial entrance doors.",
      thumbnailImage: "/images/services/shopfront-thumb.webp"
    },
    {
      serviceId: "srv-glass-balustrades",
      title: "Glass Balustrades",
      slug: "glass-balustrades",
      shortDescription: "Modern glass balustrades for office stairs and balconies.",
      thumbnailImage: "/images/services/balustrades-thumb.webp"
    }
  ],
  seo: {
    titleTag: "Office Glass Partitions & Dividers | South Africa",
    metaDescription: "Custom office glass partitions, boardroom dividers, and frameless glass walls. Fast fitouts, acoustic glass, and expert installation across South Africa.",
    keywords: ["office glass partitions", "glass boardroom walls", "frameless glass dividers", "office fitouts SA"],
    canonicalUrl: "https://example.com/services/office-glass-partitions",
    openGraphImage: "https://example.com/images/og/office-glass-partitions.jpg"
  },
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Office Glass Partitions Installation",
    "provider": {
      "@type": "Organization",
      "name": "Aluminium Windows & Doors SA"
    }
  }
};
