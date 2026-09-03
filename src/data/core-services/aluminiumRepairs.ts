import { ServiceObject } from '../../types/service';

export const aluminiumRepairsService: ServiceObject = {
  id: "srv-aluminium-repairs",
  slug: "aluminium-repairs",
  serviceName: "Aluminium Repairs",
  tagline: "Fix Stuck Sliding Doors, Broken Handles, Damaged Rollers & Hinges",
  category: "Repairs & Maintenance",
  hero: {
    badge: "Fast On-Site Window & Door Repairs",
    headline: "Aluminium Window & Door Repairs",
    subheadline: "Restore your sticking sliding patio doors, loose window hinges, broken handles, and worn locks without the cost of a full replacement.",
    primaryCtaText: "Book a Repair Technician",
    primaryCtaLink: "/contact",
    secondaryCtaText: "View Repair Services",
    secondaryCtaLink: "#specs",
    heroImage: "/images/services/aluminium-repairs-hero.webp"
  },
  overview: {
    heading: "Reliable Maintenance & Hardware Repairs for Aluminium Frames",
    paragraphs: [
      "When aluminium doors drag on their tracks, rattle in the wind, or fail to lock securely, you don't always need to buy a brand new door.",
      "Our mobile repair vans carry replacement heavy-duty stainless steel wheels, top-hung window friction stays, handles, lock cylinders, and rubber weather seals to fix your doors and windows on the spot."
    ],
    specifications: [
      { label: "Sliding Door Repairs", value: "Roller / Wheel Replacement, Track Realignment, and Height Balancing" },
      { label: "Window Repairs", value: "Friction Stay Hinges, Cam Handles, Window Pegs, and Wind Restrictors" },
      { label: "Lock Replacements", value: "Hook Locks, Flush Bolts, Euro Cylinders, and Stacking Door Locks" },
      { label: "Weather Sealing", value: "Worn Woolpile Replacement and Waterproof Rubber Gasket Sealing" },
      { label: "Service Turnaround", value: "Same-Day / Next-Day Mobile Service Across Major Metro Areas" },
      { label: "Parts Warranty", value: "Guaranteed Replacement Parts and Workmanship Warranty" }
    ]
  },
  features: [
    {
      id: "feat-save-money",
      title: "Save on Replacement",
      description: "Repairing existing frames costs a fraction of buying and installing brand new doors.",
      icon: "cash-outline"
    },
    {
      id: "feat-smooth-slide",
      title: "Glides Like New",
      description: "Replacing worn rollers restores effortless one-finger sliding operation.",
      icon: "arrow-forward-outline"
    },
    {
      id: "feat-tight-seals",
      title: "Stop Wind & Rattles",
      description: "Fresh weather seals eliminate annoying wind whistles, drafts, and water leaks.",
      icon: "shield-checkmark-outline"
    }
  ],
  process: {
    sectionHeading: "Our Easy Repair Service in 4 Steps",
    steps: [
      {
        stepNumber: 1,
        title: "Call or Message Us",
        description: "Describe the issue (e.g. stuck slider, broken handle) and book a convenient repair time."
      },
      {
        stepNumber: 2,
        title: "On-Site Diagnosis",
        description: "Our technician inspects the rollers, hinges, tracks, and locks and gives an upfront repair price."
      },
      {
        stepNumber: 3,
        title: "Part Replacement & Adjustment",
        description: "We lift out the door or sash, replace worn hardware with heavy-duty parts, and realign."
      },
      {
        stepNumber: 4,
        title: "Test & Demonstration",
        description: "We test smooth sliding and lock engagement with you before leaving."
      }
    ]
  },
  faqs: [
    {
      question: "Why is my aluminium sliding patio door so heavy and hard to push?",
      answer: "Over time, dust and sand wear down the bottom roller wheels, causing the metal frame to scrape against the track. Replacing the wheels immediately restores smooth, lightweight gliding."
    },
    {
      question: "Can you fix broken handles on old aluminium windows?",
      answer: "Yes, we stock standard and universal casement window handles, friction hinges, and locks that fit almost all aluminium window brands."
    }
  ],
  relatedServices: [
    {
      serviceId: "srv-glass-replacement",
      title: "Broken Glass Replacement",
      slug: "glass-replacement",
      shortDescription: "Fast emergency replacement for cracked window glass.",
      thumbnailImage: "/images/services/glass-thumb.webp"
    },
    {
      serviceId: "srv-aluminium-sliding-doors",
      title: "Aluminium Sliding Doors",
      slug: "aluminium-sliding-doors",
      shortDescription: "New custom sliding patio doors.",
      thumbnailImage: "/images/services/sliding-thumb.webp"
    }
  ],
  seo: {
    titleTag: "Aluminium Window & Door Repairs | South Africa",
    metaDescription: "Professional aluminium window and door repairs. Fix stuck sliding doors, broken rollers, worn hinges, and locks quickly across South Africa.",
    keywords: ["aluminium door repairs", "sliding door roller replacement", "aluminium window hinge repair", "door lock repair SA"],
    canonicalUrl: "https://www.aluminiumdesigns.co.za/services/aluminium-repairs",
    openGraphImage: "https://www.aluminiumdesigns.co.za/images/services/aluminium-repairs-hero.webp"
  },
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Aluminium Window & Door Repairs",
    "provider": {
      "@type": "Organization",
      "name": "Aluminium Designs"
    }
  }
};
