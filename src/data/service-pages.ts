import { siteUrl } from "@/lib/site";

export interface ServicePageSeo {
  titleTag: string;
  metaDescription: string;
  keywords: string[];
  canonicalUrl: string;
  openGraphImage: string;
}

export interface ServicePageHero {
  headline: string;
  subheadline: string;
  badgeText: string;
  primaryCtaText: string;
  secondaryCtaText: string;
}

export interface ServicePageOverview {
  heading: string;
  paragraphs: string[];
  keyFeaturesNotice: string;
}

export interface ServicePageBenefit {
  icon: string;
  title: string;
  description: string;
}

export interface ServicePageProductType {
  name: string;
  tagline: string;
  description: string;
  idealFor: string;
}

export interface ServicePageGlazingOption {
  name: string;
  description: string;
}

export interface ServicePageSpecItem {
  label: string;
  value: string;
}

export interface ServicePageStep {
  stepNumber: string;
  title: string;
  description: string;
}

export interface ServicePageReview {
  authorName: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
}

export interface ServicePageFaq {
  question: string;
  answer: string;
}

export interface ServicePageContent {
  id: string;
  slug: string;
  fullPageUrl: string;
  seo: ServicePageSeo;
  structuredDataJsonLd: Record<string, unknown>;
  hero: ServicePageHero;
  overview: ServicePageOverview;
  benefits: {
    title: string;
    items: ServicePageBenefit[];
  };
  productTypes: {
    title: string;
    description: string;
    items: ServicePageProductType[];
  };
  glazingOptions: {
    title: string;
    description: string;
    options: ServicePageGlazingOption[];
  };
  specifications: {
    title: string;
    items: ServicePageSpecItem[];
  };
  installationProcess: {
    title: string;
    steps: ServicePageStep[];
  };
  reviews: ServicePageReview[];
  faqs: ServicePageFaq[];
}

export const aluminiumWindows = {
  id: "srv-aluminium-windows",
  slug: "aluminium-windows",
  fullPageUrl: "https://example.com/services/aluminium-windows",

  // --- SEO & META TAGS ---
  seo: {
    titleTag: "Custom Aluminium Windows | Double Glazed & Energy Efficient Frames",
    metaDescription: "Premium custom aluminium windows engineered for strength, security, and noise reduction. Top-hung, side-hung, and sliding windows fitted with safety glass.",
    keywords: [
      "aluminium windows",
      "custom aluminium window frames",
      "double glazed aluminium windows",
      "top hung casement windows",
      "sliding aluminium windows",
      "energy efficient windows",
      "aluminium window replacement",
      "low maintenance windows",
      "SANS 10400 compliant windows"
    ],
    canonicalUrl: "https://example.com/services/aluminium-windows",
    openGraphImage: "https://example.com/images/og/aluminium-windows-hero.jpg"
  },

  // --- STRUCTURED DATA (SCHEMA.ORG JSON-LD) ---
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Custom Aluminium Windows",
    "description": "High-performance, custom-made aluminium window frames with options for single, double, and acoustic safety glass.",
    "brand": {
      "@type": "Brand",
      "name": "Aluminium Architectural Systems"
    },
    "category": "Building Materials > Windows",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "ZAR",
      "price": "1500.00",
      "highPrice": "12000.00",
      "offerCount": "10",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "128"
    }
  },

  // --- HERO SECTION ---
  hero: {
    headline: "Custom Aluminium Windows Built for Strength, Style & Comfort",
    subheadline: "Upgrade your property with strong, stylish, and rust-proof aluminium window frames designed to keep cold drafts out, reduce outside noise, and lower your energy bills.",
    badgeText: "SANS 10400 & Energy Safety Certified",
    primaryCtaText: "Get a Free Instant Quote",
    secondaryCtaText: "Explore Window Styles"
  },

  // --- OVERVIEW / VALUE PROPOSITION ---
  overview: {
    heading: "The Perfect Balance of Modern Looks and Everyday Durability",
    paragraphs: [
      "Choosing the right windows for your home or business isn't just about good looks—it's about long-term comfort, security, and saving money on heating and cooling.",
      "Our custom aluminium windows are crafted from premium rust-proof frames that will never warp, rot, swell, or peel, even in harsh sunshine or heavy rain. Their slim profiles let in maximum natural sunlight while maintaining exceptional structural strength.",
      "Whether you are building a new modern home, renovating an old property, or replacing draughty timber frames, our window systems offer airtight weather sealing, smooth operation, and built-in multi-point safety locks."
    ],
    keyFeaturesNotice: "All installations include heavy-duty stainless-steel friction hinges, double rubber weather seals, and toughened safety glass as standard."
  },

  // --- CORE BENEFITS (WHY CHOOSE ALUMINIUM) ---
  benefits: {
    title: "Why Homeowners & Builders Prefer Our Aluminium Windows",
    items: [
      {
        icon: "ShieldCheck",
        title: "Rust-Proof & Low Maintenance",
        description: "Unlike wooden or steel frames, aluminium will never rot, rust, or swell. A simple wipe with warm soapy water keeps them looking new for decades."
      },
      {
        icon: "Sun",
        title: "Energy & Thermal Efficiency",
        description: "Fitted with high-performance glass and double-sealing technology that keeps winter cold and summer heat outside where it belongs."
      },
      {
        icon: "VolumeX",
        title: "Noise Reduction",
        description: "Block out traffic, noisy neighbors, and barking dogs with our acoustic double-glazed glass configurations."
      },
      {
        icon: "Lock",
        title: "Enhanced Home Security",
        description: "Built with thick-walled aluminium extrusions, multi-point locking channels, and impact-resistant safety glass."
      },
      {
        icon: "Paintbrush",
        title: "Custom Colors & Finishes",
        description: "Choose from durable powder-coated colors like Matte Black, Charcoal, Bronze, and White, or elegant woodgrain finishes."
      },
      {
        icon: "Sparkles",
        title: "Slim Frames, Bigger Views",
        description: "Enjoy clean sightlines and larger glass panes that brighten up indoor rooms without weakening the structure."
      }
    ]
  },

  // --- PRODUCT TYPES / STYLES ---
  productTypes: {
    title: "Choose the Right Window Style for Your Space",
    description: "Every opening in your home has different ventilation and space needs. We manufacture all major window configurations to match your exact layout.",
    items: [
      {
        name: "Top-Hung Casement Windows",
        tagline: "The most popular choice for modern homes",
        description: "Top-hung windows hinge at the top and push outward from the bottom. They let fresh air circulate while shedding light rain away from your interiors.",
        idealFor: "Bedrooms, living rooms, and areas where subtle ventilation is needed during light rain."
      },
      {
        name: "Side-Hung Casement Windows",
        tagline: "Maximum airflow and wide views",
        description: "Side-hung windows open outward to the left or right like a mini door. They swing open fully to catch side breezes and direct fresh air straight into your room.",
        idealFor: "Kitchens, home offices, and rooms requiring full ventilation."
      },
      {
        name: "Horizontal Sliding Windows",
        tagline: "Space-saving and easy to operate",
        description: "Sliding window sashes glide smoothly back and forth on stainless-steel tracks. Because they don't swing inward or outward, they save valuable space.",
        idealFor: "Patios, walkways, narrow corridors, and over kitchen counters."
      },
      {
        name: "Fixed Light / Picture Windows",
        tagline: "Unbroken views and pure natural light",
        description: "Fixed windows do not open. They feature a solid pane of safety glass framed in slim aluminium, designed to frame scenic outdoor views and brighten dark rooms.",
        idealFor: "High walls, staircases, living room feature walls, and shopfront displays."
      }
    ]
  },

  // --- GLASS & GLAZING OPTIONS ---
  glazingOptions: {
    title: "Performance Glass Options tailored to Your Needs",
    description: "The glass you select determines how quiet, cool, and safe your home feels.",
    options: [
      {
        name: "Clear Toughened Safety Glass (4mm - 6.38mm)",
        description: "Heat-treated safety glass that is up to five times stronger than standard glass. If broken, it crumbles into small, dull fragments instead of sharp pieces."
      },
      {
        name: "Laminated Acoustic Safety Glass",
        description: "Consists of two glass sheets bonded with a tough, clear vinyl middle layer. It stays intact upon impact for maximum security and cuts outside noise down significantly."
      },
      {
        name: "Double Glazed Sealed Units (SIGU)",
        description: "Two panes of glass separated by a hermetically sealed air gap. Acts like a thermal blanket, reducing heat transfer by up to 60% and lowering electricity bills."
      },
      {
        name: "Solar-Control Tinted Glass",
        description: "Treated glass (available in neutral grey, bronze, or green) that blocks harsh solar glare and harmful UV rays, protecting furniture from fading."
      }
    ]
  },

  // --- TECHNICAL SPECIFICATIONS & COMPLIANCE ---
  specifications: {
    title: "Technical Specifications & Hardware",
    items: [
      { label: "Frame Material", value: "High-grade architectural aluminium alloy (6063-T6)" },
      { label: "Powder Coating", value: "Durable 60–80 micron Qualicoat powder finish (UV & fade resistant)" },
      { label: "Standard Colors", value: "Matte Black, Charcoal Grey, Bronze, Pure White, Natural Anodized" },
      { label: "Hardware & Hinges", value: "Grade 304 stainless-steel heavy-duty friction stays" },
      { label: "Handles & Locks", value: "Key-lockable casement handles and multi-point sliding latches" },
      { label: "Weather Proofing", value: "Continuous EPDM rubber seals & pile weatherstripping" },
      { label: "Safety Standards", value: "Fully compliant with SANS 10400-XA (Energy) and SANS 10137 (Glazing)" }
    ]
  },

  // --- INSTALLATION PROCESS ---
  installationProcess: {
    title: "Our Simple 4-Step Installation Process",
    steps: [
      {
        stepNumber: "01",
        title: "Free Onsite Measurement & Advice",
        description: "We visit your property to take precise measurements, inspect existing openings, and help you choose the best window styles and glass type."
      },
      {
        stepNumber: "02",
        title: "Custom Offsite Manufacturing",
        description: "Your window frames are custom-cut, assembled, powder-coated, and quality-tested in our factory for a exact fit."
      },
      {
        stepNumber: "03",
        title: "Clean & Professional Fitting",
        description: "Our trained installation team safely removes old frames, fits the new aluminium windows, anchors them securely, and applies weatherproofing sealants."
      },
      {
        stepNumber: "04",
        title: "Final Inspection & Sign-off",
        description: "We test every handle and hinge, clean up all working areas thoroughly, and issue your official fenestration safety compliance certificate."
      }
    ]
  },

  // --- CUSTOMER REVIEWS & TESTIMONIALS ---
  reviews: [
    {
      authorName: "Gareth M.",
      location: "Homeowner",
      rating: 5,
      date: "2026-02-10",
      comment: "We replaced our old leaky wooden window frames with charcoal aluminium casement windows. The installation team was fast and tidy, and the noise reduction from the road is incredible."
    },
    {
      authorName: "Karin V.",
      location: "Property Developer",
      rating: 5,
      date: "2026-01-22",
      comment: "Top quality frames and double glazing. The windows fitted perfectly on site and passed all SANS safety inspections with zero issues. Will definitely use them again."
    },
    {
      authorName: "Sipho N.",
      location: "Home Owner",
      rating: 5,
      date: "2025-11-15",
      comment: "The team converted our old steel sliding window into a modern matte black top-hung frame. It completely changed the look of our living room."
    }
  ],

  // --- FREQUENTLY ASKED QUESTIONS (SEO FAQ SCHEMA READY) ---
  faqs: [
    {
      question: "Are aluminium windows better than wooden or steel windows?",
      answer: "Yes. Aluminium does not rust like steel, and unlike wood, it will never rot, warp, or swell when exposed to moisture and heat. It requires almost zero maintenance and provides a much longer lifespan."
    },
    {
      question: "What is the difference between top-hung and side-hung windows?",
      answer: "Top-hung windows swing outward from the bottom, allowing you to leave them open during light rain. Side-hung windows open outward like a door from the side, providing maximum airflow."
    },
    {
      question: "How do double-glazed windows help save money on electricity?",
      answer: "Double-glazed windows feature two panes of glass with a sealed air gap in between. This gap acts as an insulator, keeping warmth inside during winter and stopping sun heat from entering in summer, so you use less air-con and heating."
    },
    {
      question: "Can I replace my old timber or steel windows without damaging my walls?",
      answer: "Yes. Our professional installers carefully remove old timber or steel frames to protect surrounding plaster and brickwork before fitting the new custom-made aluminium frames."
    },
    {
      question: "How long does it take to manufacture and install aluminium windows?",
      answer: "Once final measurements are approved, manufacturing typically takes 7 to 14 working days. Installation for an average house usually takes 1 to 2 days."
    },
    {
      question: "Do your windows come with a warranty?",
      answer: "Yes. We provide a long-term structural warranty on all aluminium extrusions, a manufacturer warranty on hardware and powder coating, and a full guarantee on installation workmanship."
    }
  ]
};

export const aluminiumDoors = {
  id: "srv-aluminium-doors",
  slug: "aluminium-doors",
  fullPageUrl: "https://example.com/services/aluminium-doors",

  // --- SEO & META TAGS ---
  seo: {
    titleTag: "Custom Aluminium Doors | Sliding, Stacking & Pivot Entrance Doors",
    metaDescription: "High-security custom aluminium doors for homes and businesses. Sliding patio doors, multi-panel stacking doors, and grand pivot front doors with safety glass.",
    keywords: [
      "aluminium doors",
      "custom aluminium door frames",
      "sliding aluminium doors",
      "sliding folding doors",
      "stacking patio doors",
      "aluminium pivot doors",
      "high security patio doors",
      "double glazed doors",
      "SANS 10400 compliant doors"
    ],
    canonicalUrl: "https://example.com/services/aluminium-doors",
    openGraphImage: "https://example.com/images/og/aluminium-doors-hero.jpg"
  },

  // --- STRUCTURED DATA (SCHEMA.ORG JSON-LD) ---
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Custom Aluminium Doors",
    "description": "High-security, custom-made aluminium doors including sliding, folding-stacking, pivot, and French door systems with safety glass.",
    "brand": {
      "@type": "Brand",
      "name": "Aluminium Architectural Systems"
    },
    "category": "Building Materials > Doors",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "ZAR",
      "price": "3500.00",
      "highPrice": "35000.00",
      "offerCount": "12",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "142"
    }
  },

  // --- HERO SECTION ---
  hero: {
    headline: "Custom Aluminium Doors Built for Security, Style & Seamless Flow",
    subheadline: "Transform your home with strong, smooth-gliding, and weather-sealed aluminium doors designed to connect indoor and outdoor spaces while keeping your property safe.",
    badgeText: "High-Security Multipoint Locks & Safety Glass Included",
    primaryCtaText: "Get a Free Instant Quote",
    secondaryCtaText: "Explore Door Styles"
  },

  // --- OVERVIEW / VALUE PROPOSITION ---
  overview: {
    heading: "Merge Indoor Living with Outdoor Comfort",
    paragraphs: [
      "A great door system does more than just secure your home—it opens up your living space, lets in abundant natural light, and creates a seamless flow to your patio or garden.",
      "Our custom aluminium doors are built using thick-walled, rust-proof frames and stainless-steel track rollers that glide effortlessly without sticking, jumping, or sagging over time.",
      "Whether you need wide multi-panel stacking doors for entertaining, space-saving sliding patio doors, or a striking front pivot door, our products feature heavy-duty locks, draught-proof rubber seals, and impact-resistant safety glass."
    ],
    keyFeaturesNotice: "All door installations include toughened safety glass, heavy-duty deadbolts, integrated water drainage tracks, and flush floor threshold options as standard."
  },

  // --- CORE BENEFITS (WHY CHOOSE ALUMINIUM DOORS) ---
  benefits: {
    title: "Why Homeowners & Builders Prefer Our Aluminium Doors",
    items: [
      {
        icon: "ShieldCheck",
        title: "Built-In High Security",
        description: "Equipped with multi-point locking hooks, anti-lift pins, and heavy-duty frame extrusions designed to keep your family completely safe."
      },
      {
        icon: "Sliders",
        title: "Effortless Glide Operation",
        description: "Mounted on high-grade stainless-steel tandem rollers for smooth, whisper-quiet opening even on massive glass panels."
      },
      {
        icon: "Sun",
        title: "Weather & Draft Proofing",
        description: "Double rubber perimeter seals and smart sub-sill drainage tracks keep driving rain and cold wind out during storms."
      },
      {
        icon: "Sparkles",
        title: "Flush Floor Thresholds",
        description: "Recessed track options allow indoor and outdoor flooring to sit level, eliminating trip hazards for children and elderly family members."
      },
      {
        icon: "Paintbrush",
        title: "Durable Powder-Coated Finishes",
        description: "Available in UV-resistant finishes like Matte Black, Charcoal, Bronze, White, and Natural Silver that never require painting."
      },
      {
        icon: "VolumeX",
        title: "Acoustic & Thermal Comfort",
        description: "Fitted with thick laminated safety glass or double glazing to block outside noise and keep interior temperatures comfortable."
      }
    ]
  },

  // --- PRODUCT TYPES / STYLES ---
  productTypes: {
    title: "Choose the Perfect Door Style for Your Home",
    description: "Every doorway serves a unique purpose. We design and build all primary door configurations tailored to your space.",
    items: [
      {
        name: "Sliding Folding (Stacking) Doors",
        tagline: "The ultimate patio door for entertainment spaces",
        description: "Multiple door panels fold and slide neatly to the side, opening an entire wall to your garden, patio, or braai area.",
        idealFor: "Main patio areas, entertainment rooms, and balconies with wide openings."
      },
      {
        name: "Horizontal Sliding Patio Doors",
        tagline: "Sleek, space-saving, and easy to open",
        description: "Two, three, or four panel systems where glass doors slide horizontally on tracks. Because they do not open inward or outward, they maximize floor space.",
        idealFor: "Smaller patios, dining areas, and bedrooms leading onto balconies."
      },
      {
        name: "Grand Front Pivot Doors",
        tagline: "A modern statement for main entrances",
        description: "Large, elegant entrance doors that rotate on a central pivot hinge instead of side hinges. Fitted with statement long pull handles and heavy-duty locks.",
        idealFor: "Main front entrances, grand foyers, and modern home facades."
      },
      {
        name: "Hinged French Doors",
        tagline: "Classic elegance with modern durability",
        description: "Single or double hinged doors that swing inward or outward. They offer wide access and classic styling while retaining modern security features.",
        idealFor: "Side entrances, office access, verandahs, and traditional room divisions."
      }
    ]
  },

  // --- GLASS & GLAZING OPTIONS ---
  glazingOptions: {
    title: "Safety & Energy Glass Options",
    description: "Door glass must meet strict safety regulations while protecting your home from heat, noise, and break-ins.",
    options: [
      {
        name: "6.38mm Laminated Safety Glass",
        description: "Two sheets of glass bonded with a vinyl layer. Holds together if impacted, making forced entry extremely difficult while providing basic soundproofing."
      },
      {
        name: "Toughened Safety Glass (6mm - 10mm)",
        description: "Heat-treated safety glass engineered to withstand high wind loads and physical impacts. Ideal for large glass panels on stacking and pivot doors."
      },
      {
        name: "Double Glazed Sealed Units (24mm SIGU)",
        description: "Two safety glass panes separated by an insulated air gap. Drastically reduces indoor heat build-up in summer and keeps warmth inside during winter."
      },
      {
        name: "Low-E Solar Control Glass",
        description: "Special transparent coating applied to the glass to reflect solar heat and block damaging UV rays from fading interior furniture and flooring."
      }
    ]
  },

  // --- TECHNICAL SPECIFICATIONS & COMPLIANCE ---
  specifications: {
    title: "Technical Specifications & Hardware",
    items: [
      { label: "Frame Material", value: "Heavy-duty architectural aluminium alloy (6063-T6)" },
      { label: "Track System", value: "Grade 304 stainless-steel track profiles and heavy-duty rollers" },
      { label: "Locking Hardware", value: "3-point or 5-point key-operated deadbolts with anti-lift safety pins" },
      { label: "Powder Coating", value: "Qualicoat marine-grade finish (60–80 microns thick)" },
      { label: "Standard Colors", value: "Matte Black, Charcoal Grey, Bronze, Pure White, Natural Anodized" },
      { label: "Weather Seals", value: "Double-perimeter EPDM rubber gaskets and wool pile weatherstripping" },
      { label: "Safety Standards", value: "100% compliant with SANS 10400-N (Glazing) and SANS 204 (Energy)" }
    ]
  },

  // --- INSTALLATION PROCESS ---
  installationProcess: {
    title: "Our Simple 4-Step Installation Process",
    steps: [
      {
        stepNumber: "01",
        title: "Onsite Consultation & Measurements",
        description: "We visit your property to measure openings, assess track sill requirements, and help you select the ideal door design and glass configuration."
      },
      {
        stepNumber: "02",
        title: "Precision Factory Manufacturing",
        description: "Your custom doors are engineered, cut, assembled, and powder-coated offsite in our controlled factory environment for a perfect fit."
      },
      {
        stepNumber: "03",
        title: "Professional Onsite Fitting",
        description: "Our certified installation team removes old frames, aligns the track system accurately, fits the door panels, and applies weatherproof seals."
      },
      {
        stepNumber: "04",
        title: "Testing & Handover",
        description: "We test every lock and roller mechanism for smooth operation, clean the site thoroughly, and issue your official safety compliance certificate."
      }
    ]
  },

  // --- CUSTOMER REVIEWS & TESTIMONIALS ---
  reviews: [
    {
      authorName: "Sarah T.",
      location: "Homeowner",
      rating: 5,
      date: "2026-01-18",
      comment: "Our 5-panel sliding folding door completely transformed our living area. It slides so easily that our kids can open it, and when closed it seals tightly against storm winds."
    },
    {
      authorName: "Mark S.",
      location: "Home Owner",
      rating: 5,
      date: "2026-02-02",
      comment: "Replaced old wooden patio sliders with matte black double-glazed aluminium sliding doors. The security locks feel super sturdy and the house stays much warmer at night."
    },
    {
      authorName: "David K.",
      location: "Architect",
      rating: 5,
      date: "2025-12-10",
      comment: "Installed a custom pivot door for a client's front entry. Excellent frame finish, precision alignment, and passed all building safety checks without a hitch."
    }
  ],

  // --- FREQUENTLY ASKED QUESTIONS (SEO FAQ SCHEMA READY) ---
  faqs: [
    {
      question: "Are sliding folding (stacking) doors waterproof during heavy rain?",
      answer: "Yes. When closed and locked, full rubber weather seals compress tightly along every panel joint. Our doors also feature integrated sub-sill tracks that direct rainwater outside and away from your interior floor."
    },
    {
      question: "Can sliding door tracks be set level with the floor?",
      answer: "Yes. We offer flush-track installation options where the bottom track is recessed into the floor. This eliminates step hazards between your indoor floor and outdoor patio."
    },
    {
      question: "Are aluminium doors secure against forced entry?",
      answer: "Extremely secure. Our doors feature structural-grade aluminium frames, anti-lift pins to prevent doors from being levered off their tracks, multi-point hook locks, and toughened or laminated safety glass."
    },
    {
      question: "What glass is legally required for patio and entrance doors?",
      answer: "Under South African safety standards (SANS 10137), all doors extending to floor level must be fitted with safety glass (toughened or laminated glass at least 6.38mm thick) to prevent injury upon severe impact."
    },
    {
      question: "How do I maintain my aluminium doors?",
      answer: "Aluminium requires minimal maintenance. Keep the bottom roller tracks free of dirt and grit using a vacuum or damp cloth, and wash the frames twice a year with warm, soapy water."
    },
    {
      question: "How long does manufacturing and installation take?",
      answer: "Manufacturing typically takes 7 to 14 working days from final measurement sign-off. Onsite installation usually takes 1 day for standard doors or 2 days for larger multi-panel stacking systems."
    }
  ]
};

export const slidingAndStackingDoors = {
  id: "srv-sliding-stacking-doors",
  slug: "sliding-stacking-doors",
  fullPageUrl: "https://example.com/services/sliding-stacking-doors",

  // --- SEO & META TAGS ---
  seo: {
    titleTag: "Aluminium Sliding & Stacking Doors | Folding Patio Doors",
    metaDescription: "Custom aluminium sliding and multi-panel stacking doors for seamless indoor-outdoor living. Smooth-glide rollers, high-security multi-point locks, and safety glass.",
    keywords: [
      "sliding and stacking doors",
      "aluminium stacking doors",
      "sliding folding patio doors",
      "multi panel sliding doors",
      "bifold aluminium doors",
      "patio stacker doors",
      "double glazed stacking doors",
      "flush track sliding doors",
      "SANS compliant glass doors"
    ],
    canonicalUrl: "https://example.com/services/sliding-stacking-doors",
    openGraphImage: "https://example.com/images/og/sliding-stacking-doors-hero.jpg"
  },

  // --- STRUCTURED DATA (SCHEMA.ORG JSON-LD) ---
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Custom Aluminium Sliding and Stacking Doors",
    "description": "High-performance aluminium sliding and multi-panel folding-stacking door systems engineered for indoor-outdoor patio spaces with safety glass.",
    "brand": {
      "@type": "Brand",
      "name": "Aluminium Architectural Systems"
    },
    "category": "Building Materials > Doors",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "ZAR",
      "price": "4500.00",
      "highPrice": "42000.00",
      "offerCount": "8",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "156"
    }
  },

  // --- HERO SECTION ---
  hero: {
    headline: "Custom Sliding & Stacking Aluminium Doors for Wide Open Living",
    subheadline: "Open up your home with smooth-gliding patio doors that fold or slide away effortlessly, turning your living area into an open-air entertainment space.",
    badgeText: "High-Security Anti-Lift Locks & Safety Glass Included",
    primaryCtaText: "Get a Free Instant Quote",
    secondaryCtaText: "Compare Stacking vs Sliding"
  },

  // --- OVERVIEW / VALUE PROPOSITION ---
  overview: {
    heading: "The Ultimate Way to Connect Your Living Space to the Outdoors",
    paragraphs: [
      "Sliding and stacking door systems are designed to maximize wide architectural openings, flooding your interiors with natural light and giving you unobstructed views of your garden or patio.",
      "Our multi-panel stacking systems fold neatly against the side walls, opening up up to 90% of your doorway span. If floor space is tight, our multi-track horizontal sliding doors give you expansive glass areas without swinging into your room.",
      "Engineered with thick-walled aluminium extrusions, rust-proof stainless-steel roller tracks, and continuous rubber weather seals, these doors glide smoothly and lock down tightly against wind, driving rain, and forced entry."
    ],
    keyFeaturesNotice: "All sliding and stacking installations feature grade 304 stainless-steel tandem rollers, heavy-duty deadbolts, sub-sill drainage, and options for flush-level floor tracks."
  },

  // --- CORE BENEFITS (WHY CHOOSE SLIDING & STACKING DOORS) ---
  benefits: {
    title: "Why Homeowners & Builders Love Our Sliding & Stacking Doors",
    items: [
      {
        icon: "Maximize2",
        title: "Maximum Wide Openings",
        description: "Stacking doors fold completely out of the way, converting your living room and patio into one large continuous entertainment space."
      },
      {
        icon: "Sliders",
        title: "Whisper-Quiet Smooth Glide",
        description: "Heavy-duty stainless-steel tandem rollers allow even giant double-glazed door panels to open and close effortlessly with one hand."
      },
      {
        icon: "ShieldCheck",
        title: "Built-In High Security",
        description: "Fitted with multi-point hook deadbolts, anti-lift security pins, and thick safety glass to protect your family day and night."
      },
      {
        icon: "Sparkles",
        title: "Flush Floor Threshold Options",
        description: "Sink the bottom track flush into the floor to create a seamless, level transition between indoor tile and outdoor decking."
      },
      {
        icon: "Sun",
        title: "Weather & Storm Sealing",
        description: "Continuous EPDM rubber gaskets and deep sub-sill drainage tracks prevent wind drafts and water ingress during heavy rain."
      },
      {
        icon: "VolumeX",
        title: "Noise & Temperature Insulation",
        description: "Available with double glazing or acoustic safety glass to block out street noise and keep indoor temperatures comfortable."
      }
    ]
  },

  // --- PRODUCT TYPES / STYLES ---
  productTypes: {
    title: "Explore Our Sliding & Stacking Door Configurations",
    description: "Whether you have a massive wall opening or a compact patio space, we manufacture the exact layout to suit your architectural needs.",
    items: [
      {
        name: "3-Panel to 8-Panel Stacking Doors",
        tagline: "Fold-aside panels for maximum open space",
        description: "Panels slide along a track and stack neatly at a 90-degree angle on one or both sides of the opening.",
        idealFor: "Main patio areas, braai rooms, verandas, and outdoor entertainment hubs."
      },
      {
        name: "Multi-Track Horizontal Sliding Doors",
        tagline: "Sleek, space-saving, and effortless",
        description: "Panels slide horizontally on double or triple tracks. Because they don't fold inward or outward, you keep 100% of your indoor and outdoor floor space.",
        idealFor: "Patios with tight furniture layouts, bedrooms opening onto balconies, and high-wind areas."
      },
      {
        name: "Cavity Pocket Sliding Doors",
        tagline: "Disappearing glass walls",
        description: "Door panels slide directly into a built-in wall cavity, completely hiding the doors inside the wall when fully open.",
        idealFor: "Modern luxury builds and open-plan living rooms seeking a completely frameless opening."
      },
      {
        name: "Corner Stacking Door Systems",
        tagline: "Post-free 90-degree open corners",
        description: "Two sets of stacking doors meet at a corner without a structural corner post, completely opening up house corners to garden views.",
        idealFor: "Contemporary architectural homes and corner patio enclosures."
      }
    ]
  },

  // --- GLASS & GLAZING OPTIONS ---
  glazingOptions: {
    title: "Safety & Performance Glass Configurations",
    description: "Large glass panels must meet strict national safety regulations while protecting your home from solar heat and cold winds.",
    options: [
      {
        name: "6.38mm Laminated Safety Glass",
        description: "Two sheets of glass bonded with a tough vinyl interlayer. If impacted, the glass stays glued together to prevent injury and deter break-ins."
      },
      {
        name: "Toughened Safety Glass (6mm - 10mm)",
        description: "Heat-treated glass that is up to five times stronger than standard glass. Perfect for large, heavy door panels exposed to strong winds."
      },
      {
        name: "Double Glazed Sealed Units (24mm SIGU)",
        description: "Two glass panes separated by an insulated air gap. Acts like a thermal blanket, keeping room temperatures stable and cutting air-con costs."
      },
      {
        name: "Low-E Solar Control Glass",
        description: "A clear coating that reflects solar heat away in summer and holds indoor warmth inside during winter, while protecting furniture from UV fading."
      }
    ]
  },

  // --- TECHNICAL SPECIFICATIONS & COMPLIANCE ---
  specifications: {
    title: "Technical Specifications & Hardware",
    items: [
      { label: "Frame Material", value: "Heavy-duty architectural aluminium alloy (6063-T6)" },
      { label: "Roller Hardware", value: "Grade 304 stainless-steel tandem wheel rollers with nylon wheels" },
      { label: "Locking System", value: "Multi-point hook deadbolts with eurocylinder key locks & anti-lift pins" },
      { label: "Powder Coating", value: "UV-resistant Qualicoat finish (60–80 microns thick)" },
      { label: "Standard Colors", value: "Matte Black, Charcoal Grey, Bronze, Pure White, Natural Anodized" },
      { label: "Weather Proofing", value: "Double-perimeter EPDM rubber seals & wool pile weatherstripping" },
      { label: "Safety Standards", value: "100% compliant with SANS 10400-N (Glazing) and SANS 204 (Energy)" }
    ]
  },

  // --- INSTALLATION PROCESS ---
  installationProcess: {
    title: "Our Simple 4-Step Installation Process",
    steps: [
      {
        stepNumber: "01",
        title: "Onsite Assessment & Track Planning",
        description: "We visit your home to take accurate measurements, check structural lintels, and determine if recessed flush tracks can be installed."
      },
      {
        stepNumber: "02",
        title: "Precision Factory Manufacturing",
        description: "Your sliding or stacking doors are custom-cut, powder-coated, fitted with high-spec hardware, and quality-tested in our factory."
      },
      {
        stepNumber: "03",
        title: "Clean & Expert Fitting",
        description: "Our certified installation team removes old doors, aligns tracks perfectly level, fits the door panels, and applies waterproof perimeter silicone."
      },
      {
        stepNumber: "04",
        title: "Testing & Handover",
        description: "We test every roller and lock mechanism for smooth movement, clean all glass panels, and issue your official safety compliance certificate."
      }
    ]
  },

  // --- CUSTOMER REVIEWS & TESTIMONIALS ---
  reviews: [
    {
      authorName: "Sarah T.",
      location: "Homeowner",
      rating: 5,
      date: "2026-01-18",
      comment: "Our 5-panel folding stacking door completely changed how we use our patio in summer. It glides so easily that our kids can open it, and when closed it seals tightly against storm winds."
    },
    {
      authorName: "Mark S.",
      location: "Homeowner",
      rating: 5,
      date: "2026-02-02",
      comment: "Replaced old wooden patio sliders with matte black double-glazed aluminium sliding doors. The security locks feel super sturdy and the house stays much warmer at night."
    },
    {
      authorName: "Brendan L.",
      location: "Renovator",
      rating: 5,
      date: "2025-11-28",
      comment: "The flush floor track was a game changer for our stoep. No tripping when walking out with drinks, and the tracking system glides effortlessly."
    }
  ],

  // --- FREQUENTLY ASKED QUESTIONS (SEO FAQ SCHEMA READY) ---
  faqs: [
    {
      question: "What is the main difference between sliding doors and stacking doors?",
      answer: "Sliding doors move horizontally on parallel tracks and remain within the door frame. Stacking doors (or folding-stacking doors) slide along a track and fold away at a 90-degree angle, opening up almost the entire wall space."
    },
    {
      question: "Are sliding and stacking doors waterproof during heavy rainstorms?",
      answer: "Yes. When closed and locked, full rubber weather seals compress tightly along every panel joint. Our systems also include sub-sill drainage channels that channel water outside and away from your floor."
    },
    {
      question: "Can sliding door tracks be recessed level with the indoor floor?",
      answer: "Yes. We offer flush-track installation where the bottom track is sunken into the floor. This creates a flat transition between indoor tiles and outdoor decking, eliminating tripping hazards."
    },
    {
      question: "Are stacking doors easy to open and close?",
      answer: "Very easy. We use heavy-duty stainless-steel tandem rollers designed to carry heavy safety glass panels smoothly. A multi-panel stacking door can easily be glided open with one hand."
    },
    {
      question: "What safety glass is legally required for patio doors?",
      answer: "Under South African safety standards (SANS 10137), all glass doors reaching floor level must use safety glass (toughened glass or laminated safety glass at least 6.38mm thick) to prevent injury upon severe impact."
    },
    {
      question: "How do I keep my sliding door tracks working smoothly?",
      answer: "Keep the bottom track clean by removing sand, dirt, and pet hair with a vacuum or damp cloth. Avoid heavy grease lubricants that attract dust; a light silicone spray once a year is all that is needed."
    }
  ]
};

export const commercialShopfronts = {
  id: "srv-commercial-shopfronts",
  slug: "commercial-shopfronts",
  fullPageUrl: "https://example.com/services/commercial-shopfronts",

  // --- SEO & META TAGS ---
  seo: {
    titleTag: "Commercial Aluminium Shopfronts & Glass Storefront Systems",
    metaDescription: "Durable commercial aluminium shopfronts, glass entrances, and office partitions. Built for high foot traffic, heavy security, and modern store appeal.",
    keywords: [
      "commercial shopfronts",
      "aluminium storefronts",
      "retail shopfront doors",
      "commercial glass entrance",
      "automatic glass sliding doors",
      "flush glazed shopfronts",
      "office glass partitions",
      "laminated commercial safety glass",
      "SANS compliant shopfronts"
    ],
    canonicalUrl: "https://example.com/services/commercial-shopfronts",
    openGraphImage: "https://example.com/images/og/commercial-shopfronts-hero.jpg"
  },

  // --- STRUCTURED DATA (SCHEMA.ORG JSON-LD) ---
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Commercial Aluminium Shopfronts",
    "description": "Heavy-duty commercial aluminium shopfronts, glass entrance doors, and corporate partition walls built for high-traffic environments.",
    "brand": {
      "@type": "Brand",
      "name": "Aluminium Architectural Systems"
    },
    "category": "Building Materials > Doors & Windows",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "ZAR",
      "price": "6500.00",
      "highPrice": "65000.00",
      "offerCount": "6",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "98"
    }
  },

  // --- HERO SECTION ---
  hero: {
    headline: "Commercial Aluminium Shopfronts Built for High Traffic & Security",
    subheadline: "Make a strong first impression with sleek, durable glass storefronts, automatic entrance doors, and office partitions built to handle heavy daily use.",
    badgeText: "High-Traffic Commercial & Fire Safety Certified",
    primaryCtaText: "Request a Business Quote",
    secondaryCtaText: "Explore Commercial Systems"
  },

  // --- OVERVIEW / VALUE PROPOSITION ---
  overview: {
    heading: "Sleek Retail Visibility Meets Commercial Structural Strength",
    paragraphs: [
      "Your store or office entrance is the first thing customers see. A clean, modern glass shopfront invites shoppers inside while showcasing your products in bright, natural light.",
      "Our commercial aluminium shopfronts are engineered from thick-walled, heavy-duty aluminium profiles fitted with hydraulic door closers, panic exit bars, and shatter-resistant safety glass designed specifically for high-traffic environments.",
      "Whether you are fitting out a new retail store in a shopping mall, updating an auto showroom display wall, or dividing corporate office spaces with soundproof glass partitions, we deliver precision manufacturing and fast onsite installation."
    ],
    keyFeaturesNotice: "Includes heavy-duty hydraulic floor springs, automatic motion-sensor sliders, multi-point deadbolts, and emergency exit push-bars as standard options."
  },

  // --- CORE BENEFITS (WHY CHOOSE COMMERCIAL ALUMINIUM) ---
  benefits: {
    title: "Why Businesses & Contractors Choose Our Commercial Shopfronts",
    items: [
      {
        icon: "Store",
        title: "Maximum Retail Display",
        description: "Large, frameless or slim-framed glass panes give your store maximum display visibility to attract passing foot traffic."
      },
      {
        icon: "ShieldAlert",
        title: "Forced-Entry Protection",
        description: "Built with heavy laminated safety glass and reinforced aluminium frames to withstand impact and protect your stock against break-ins."
      },
      {
        icon: "Repeat",
        title: "Built for Heavy Daily Use",
        description: "Fitted with commercial-grade hydraulic floor springs and heavy hinges tested for hundreds of openings and closings every day."
      },
      {
        icon: "Zap",
        title: "Automatic & Motion Options",
        description: "Integrates smoothly with automatic sensor door openers for touchless access and full wheelchair accessibility."
      },
      {
        icon: "Building",
        title: "Custom Corporate Colors",
        description: "Match your store branding with custom powder-coated frame colors including Matte Black, Charcoal, Silver, White, or custom corporate codes."
      },
      {
        icon: "VolumeX",
        title: "Acoustic Office Partitions",
        description: "Create quiet, private meeting rooms and executive offices without cutting off natural light or losing open-plan aesthetic appeal."
      }
    ]
  },

  // --- PRODUCT TYPES / STYLES ---
  productTypes: {
    title: "Commercial Shopfront & Partition Solutions",
    description: "From shopping mall retail fronts to high-rise corporate office interiors, we manufacture systems tailored to your commercial space.",
    items: [
      {
        name: "Flush-Glazed Retail Shopfronts",
        tagline: "Maximum glass visibility with hidden structural frames",
        description: "A modern, continuous glass look where frames sit flush behind the glass. Perfect for showcasing products and window displays in malls and high streets.",
        idealFor: "Fashion boutiques, car dealerships, jewelry stores, and shopping centers."
      },
      {
        name: "Automatic Sensor Sliding Doors",
        tagline: "Touchless, smooth entrance for high foot traffic",
        description: "Motorized glass sliding doors equipped with motion sensors for touch-free access, keeping air conditioning inside while welcoming shoppers.",
        idealFor: "Supermarkets, hotel lobbies, hospitals, and busy corporate entrances."
      },
      {
        name: "Framed Commercial Swing Doors",
        tagline: "Rugged double or single glass entrance doors",
        description: "Heavy-duty aluminium swing doors fitted with double-action hydraulic floor springs, stainless-steel pull handles, and commercial deadlocks.",
        idealFor: "Restaurants, banks, street-level retail shops, and office buildings."
      },
      {
        name: "Indoor Office Glass Partitions",
        tagline: "Sleek acoustic room dividers for modern workplaces",
        description: "Frameless or slim aluminium glass walls that divide open-plan office spaces into private boardrooms and executive offices while letting natural light pass through.",
        idealFor: "Corporate offices, law firms, agency workspaces, and medical suites."
      }
    ]
  },

  // --- GLASS & GLAZING OPTIONS ---
  glazingOptions: {
    title: "Commercial Glass & Safety Configurations",
    description: "Commercial glass must meet strict national building standards to keep staff and shoppers safe from accidental impacts or break-ins.",
    options: [
      {
        name: "6.38mm to 10.38mm Laminated Safety Glass",
        description: "Two sheets of glass bonded with a thick vinyl interlayer. If shattered, the glass stays firmly stuck together, preventing injury and stopping forced entry."
      },
      {
        name: "Toughened Safety Glass (8mm - 12mm)",
        description: "Heat-treated glass that withstands heavy physical impacts and strong wind pressure. Required by law for frameless doors and large display panes."
      },
      {
        name: "Anti-Glare & Solar Control Tinted Glass",
        description: "Special glass coatings that reduce glare on computer screens and lower indoor heat build-up, cutting commercial air conditioning expenses."
      },
      {
        name: "Acoustic Laminated Glass",
        description: "Specially formulated sound-dampening glass ideal for boardroom walls, keeping confidential meetings private from outside office noise."
      }
    ]
  },

  // --- TECHNICAL SPECIFICATIONS & COMPLIANCE ---
  specifications: {
    title: "Technical Specifications & Hardware",
    items: [
      { label: "Frame Material", value: "Heavy-duty architectural commercial aluminium alloy (6063-T6)" },
      { label: "Door Closers", value: "Heavy-duty hydraulic floor springs and overhead transom closers" },
      { label: "Locking Systems", value: "Commercial hook deadbolts, keypad/card access, and emergency push bars" },
      { label: "Powder Coating", value: "Durable Qualicoat commercial finish (60–80 microns thick)" },
      { label: "Standard Colors", value: "Matte Black, Charcoal Grey, Natural Anodized, Pure White, Custom RAL" },
      { label: "Safety Seals", value: "High-grade silicone weather sealing and heavy-duty brush pile seals" },
      { label: "Safety Compliance", value: "Fully compliant with SANS 10400-N (Glazing) and SANS 10137 codes" }
    ]
  },

  // --- INSTALLATION PROCESS ---
  installationProcess: {
    title: "Our Fast 4-Step Commercial Installation Process",
    steps: [
      {
        stepNumber: "01",
        title: "Onsite Consultation & Plan Review",
        description: "We review your architectural plans, inspect the opening onsite, and calculate glass loads and safety requirements for your approval."
      },
      {
        stepNumber: "02",
        title: "Precision Factory Fabrication",
        description: "Your shopfront frames and safety glass panes are custom-machined offsite to ensure seamless, rapid fitting on installation day."
      },
      {
        stepNumber: "03",
        title: "Fast After-Hours Onsite Fitting",
        description: "Our certified installation team fits the shopfront quickly—offering after-hours or weekend work to minimize interruption to your trading hours."
      },
      {
        stepNumber: "04",
        title: "Safety Testing & Sign-off",
        description: "We align all hydraulic closers, test security locks and sensor doors, clean all glass surfaces, and issue your safety compliance certificate."
      }
    ]
  },

  // --- CUSTOMER REVIEWS & TESTIMONIALS ---
  reviews: [
    {
      authorName: "Johan V.",
      location: "Retail Store Owner",
      rating: 5,
      date: "2026-02-28",
      comment: "The new glass shopfront completely modernized our store entrance. The double doors handle hundreds of customers daily without sticking, and the display glass looks incredible."
    },
    {
      authorName: "Patricia M.",
      location: "Office Operations Manager",
      rating: 5,
      date: "2026-01-14",
      comment: "We had glass partitions installed for our executive boardrooms. The sound insulation is excellent and the team completed the entire job over the weekend with zero disruption."
    },
    {
      authorName: "Farai K.",
      location: "Commercial Developer",
      rating: 5,
      date: "2025-11-30",
      comment: "Solid commercial frames, clean powder coating, and passed all building inspector safety checks on the first try. Top team for commercial fit-outs."
    }
  ],

  // --- FREQUENTLY ASKED QUESTIONS (SEO FAQ SCHEMA READY) ---
  faqs: [
    {
      question: "Can you install a commercial shopfront after normal business hours?",
      answer: "Yes. We offer after-hours and weekend installation services for retail stores and offices so that your business operations and sales are not disrupted during normal trading hours."
    },
    {
      question: "What glass is legally required for commercial shopfronts?",
      answer: "By law (SANS 10137), all public-access glass doors and lower wall panels must be fitted with safety glass—either toughened safety glass or laminated safety glass—to prevent injury upon impact."
    },
    {
      question: "How long does a shopfront installation take?",
      answer: "Once factory fabrication is complete, most standard shopfront installations are finished in 1 to 2 days onsite. Larger mall fit-outs or multi-floor office partitions take slightly longer depending on scale."
    },
    {
      question: "Are glass shopfronts secure against break-ins?",
      answer: "Yes. We use thick laminated safety glass that holds together even if struck, paired with heavy-duty commercial deadbolts and reinforced aluminium frames that make forced entry extremely difficult."
    },
    {
      question: "Can automatic sensor sliding doors be installed on existing openings?",
      answer: "Yes. We can fit automatic motion-sensor sliding door systems to existing shopfront openings or build them as part of a brand-new storefront entry."
    },
    {
      question: "What maintenance do commercial hydraulic floor springs need?",
      answer: "Hydraulic floor springs require very little maintenance. Adjusting door closing speed screws and inspecting floor pivot oil levels once a year ensures smooth, quiet door closing for years."
    }
  ]
};

export const officePartitions = {
  id: "srv-office-partitions",
  slug: "office-partitions",
  fullPageUrl: "https://example.com/services/office-partitions",

  // --- SEO & META TAGS ---
  seo: {
    titleTag: "Commercial Office Glass Partitions | Soundproof Glass Walls",
    metaDescription: "Custom glass office partitions and aluminium wall systems. Create quiet, modern meeting rooms and executive offices while keeping natural light flowing.",
    keywords: [
      "office partitions",
      "glass office partitions",
      "aluminium office walls",
      "soundproof boardroom glass",
      "frameless glass office walls",
      "demountable office partitions",
      "acoustic office divider walls",
      "commercial office glass dividers",
      "SANS compliant glass partitions"
    ],
    canonicalUrl: "https://example.com/services/office-partitions",
    openGraphImage: "https://example.com/images/og/office-partitions-hero.jpg"
  },

  // --- STRUCTURED DATA (SCHEMA.ORG JSON-LD) ---
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Custom Glass Office Partitions",
    "description": "High-performance aluminium and glass office divider walls designed for sound insulation, natural lighting, and modern workspace privacy.",
    "brand": {
      "@type": "Brand",
      "name": "Aluminium Architectural Systems"
    },
    "category": "Building Materials > Wall Panels",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "ZAR",
      "price": "5500.00",
      "highPrice": "55000.00",
      "offerCount": "8",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "112"
    }
  },

  // --- HERO SECTION ---
  hero: {
    headline: "Modern Glass Office Partitions for Quiet, Bright Workspaces",
    subheadline: "Transform open-plan floors into stylish executive offices and private boardrooms with acoustic glass walls that block noise without cutting off natural light.",
    badgeText: "Acoustic Noise Control & Safety Glass Certified",
    primaryCtaText: "Request a Floor Plan Quote",
    secondaryCtaText: "Explore Partition Styles"
  },

  // --- OVERVIEW / VALUE PROPOSITION ---
  overview: {
    heading: "The Smart Balance Between Open-Plan Design and Private Workspaces",
    paragraphs: [
      "Modern workplaces thrive on natural light and open collaboration, but confidential meetings, executive calls, and focused work require private, quiet spaces.",
      "Our aluminium and glass office partition systems allow you to divide large floor plans into functional boardrooms, quiet cubicles, and executive suites while maintaining an airy, modern atmosphere.",
      "Built with slim, powder-coated aluminium channels and thick acoustic safety glass, our partitions reduce room-to-room noise transfer, feature integrated locks or magnetic latches, and fit seamlessly into drop ceilings or concrete floors."
    ],
    keyFeaturesNotice: "Includes sound-dampening acoustic glass options, dry-glazed rubber joints for clean re-configuration, and integrated frosted privacy vinyl designs."
  },

  // --- CORE BENEFITS (WHY CHOOSE GLASS OFFICE PARTITIONS) ---
  benefits: {
    title: "Why Businesses & Office Designers Choose Our Partitions",
    items: [
      {
        icon: "VolumeX",
        title: "Acoustic Noise Reduction",
        description: "Special sound-dampening laminated glass blocks office chatter, phone calls, and machinery noise from entering boardrooms."
      },
      {
        icon: "Sun",
        title: "Maximized Natural Sunlight",
        description: "Pass natural light deep into interior floor spaces, cutting daytime lighting costs and creating a healthier work environment."
      },
      {
        icon: "EyeOff",
        title: "Custom Privacy Vinyls",
        description: "Add custom frosted window film, company logos, or patterned privacy bands to keep sensitive work hidden from passing staff."
      },
      {
        icon: "Layers",
        title: "Clean & Fast Installation",
        description: "Dry-glazed aluminium partition channels are fitted quickly with minimal dust, avoiding noisy drywall construction disruptions."
      },
      {
        icon: "RefreshCw",
        title: "Reconfigurable & Demountable",
        description: "If your business moves or expands, our modular aluminium channels can be unbolted and reinstalled in your new floor layout."
      },
      {
        icon: "ShieldCheck",
        title: "Certified Safety Standard",
        description: "Fitted exclusively with thick toughened or acoustic laminated safety glass to protect staff against accidental impacts."
      }
    ]
  },

  // --- PRODUCT TYPES / STYLES ---
  productTypes: {
    title: "Choose the Ideal Partition Style for Your Office Layout",
    description: "From seamless glass walls to hybrid aluminium-and-wood designs, we build systems tailored to your corporate aesthetic.",
    items: [
      {
        name: "Frameless Glass Partitions",
        tagline: "Unbroken sightlines for a modern, open aesthetic",
        description: "Floor-to-ceiling glass panels connected with clear, hidden joints. Gives your workspace an elegant, spacious feel while keeping sound insulated.",
        idealFor: "Executive boardrooms, modern tech offices, and front reception areas."
      },
      {
        name: "Slimline Aluminium-Framed Partitions",
        tagline: "Sleek metallic frames for strong structural support",
        description: "Narrow powder-coated aluminium perimeter frames enclosing glass panels. Provides extra structural rigidity and clean architectural lines.",
        idealFor: "High-traffic office corridors, medical suites, and commercial bank branches."
      },
      {
        name: "Double-Glazed Acoustic Walls",
        tagline: "Maximum soundproofing for sensitive boardrooms",
        description: "Two parallel panes of safety glass with an insulated air gap. Cuts noise transmission drastically for total meeting confidentiality.",
        idealFor: "Legal boardrooms, HR interview rooms, and executive corner offices."
      },
      {
        name: "Solid & Hybrid Partition Systems",
        tagline: "Combined wood, gypsum, and glass for full privacy",
        description: "Combines solid lower wall panels with glass upper windows. Ideal when electrical outlets and cabling need to run inside the lower wall.",
        idealFor: "Private offices, server rooms, filing rooms, and staff break areas."
      }
    ]
  },

  // --- GLASS & GLAZING OPTIONS ---
  glazingOptions: {
    title: "Acoustic & Safety Glass Configurations",
    description: "Select the correct glass thickness to achieve your desired privacy and soundproofing levels.",
    options: [
      {
        name: "10mm - 12mm Toughened Safety Glass",
        description: "Heat-treated safety glass that is highly resistant to impacts. The standard choice for strong, clear frameless glass walls."
      },
      {
        name: "6.38mm - 10.38mm Acoustic Laminated Glass",
        description: "Features a specialized sound-dampening interlayer sandwiched between two glass sheets. Drastically reduces speech and phone noise."
      },
      {
        name: "Double Glazed Acoustic Glass Units",
        description: "Twin-pane glass systems providing up to 45dB of noise isolation, ensuring complete privacy during confidential meetings."
      },
      {
        name: "Frosted & Decorative Privacy Film",
        description: "Sandblasted or vinyl-coated glass finishes that diffuse light while preventing outsiders from viewing screens or paperwork."
      }
    ]
  },

  // --- TECHNICAL SPECIFICATIONS & COMPLIANCE ---
  specifications: {
    title: "Technical Specifications & Hardware",
    items: [
      { label: "Frame Material", value: "Precision architectural aluminium channels (6063-T6)" },
      { label: "Door Options", value: "Frameless glass swing doors, sliding glass doors, or solid timber doors" },
      { label: "Handles & Locks", value: "Stainless-steel patch locks, lever handles, and key-card latch options" },
      { label: "Acoustic Rating", value: "Sound reduction performance ranging from 32dB up to 45dB (double glazed)" },
      { label: "Standard Finishes", value: "Matte Black, Anodized Silver, Charcoal Grey, Pure White, Custom RAL" },
      { label: "Glazing Seals", value: "Dry-glazed EPDM rubber gaskets & clear UV-resistant joint strips" },
      { label: "Safety Standards", value: "100% compliant with SANS 10400-N (Glazing) and national safety codes" }
    ]
  },

  // --- INSTALLATION PROCESS ---
  installationProcess: {
    title: "Our Fast 4-Step Office Installation Process",
    steps: [
      {
        stepNumber: "01",
        title: "Onsite Floor Assessment & CAD Design",
        description: "We measure your office floor layout, check ceiling grid heights, and produce detailed layout plans for your sign-off."
      },
      {
        stepNumber: "02",
        title: "Precision Offsite Factory Cutting",
        description: "Aluminium channels and safety glass panels are custom-machined offsite, minimizing dust, noise, and fitting time in your office."
      },
      {
        stepNumber: "03",
        title: "Rapid Onsite Installation",
        description: "Our professional fitting team installs perimeter channels, positions glass panels, seals joints, and fits doors—available after-hours or on weekends."
      },
      {
        stepNumber: "04",
        title: "Testing & Clean Handover",
        description: "We test all door hinges and locks, apply any requested privacy film, thoroughly clean all glass surfaces, and issue your safety certificate."
      }
    ]
  },

  // --- CUSTOMER REVIEWS & TESTIMONIALS ---
  reviews: [
    {
      authorName: "Patricia M.",
      location: "Operations Director",
      rating: 5,
      date: "2026-03-02",
      comment: "We installed frameless glass partitions for three executive boardrooms. The sound insulation is fantastic—our teams can present without distracting the open-plan floor."
    },
    {
      authorName: "David L.",
      location: "Office Architect",
      rating: 5,
      date: "2026-01-19",
      comment: "Matte black aluminium channels with acoustic laminated glass turned out beautiful. The installation crew completed the job over a single weekend."
    },
    {
      authorName: "Thabo K.",
      location: "Facility Manager",
      rating: 5,
      date: "2025-11-22",
      comment: "Clean fitting with zero dust mess in our active office. The frosted privacy vinyl bands give our HR room complete privacy while keeping the hall bright."
    }
  ],

  // --- FREQUENTLY ASKED QUESTIONS (SEO FAQ SCHEMA READY) ---
  faqs: [
    {
      question: "Are glass office partitions soundproof enough for confidential meetings?",
      answer: "Yes. By using acoustic laminated glass or double-glazed partition systems with perimeter rubber seals, our walls reduce room-to-room speech noise by up to 45dB, keeping meetings completely private."
    },
    {
      question: "Can glass partitions be installed without interrupting our workday?",
      answer: "Yes. Most frame cutting and glass sizing is done offsite in our factory. We also offer after-hours and weekend installation services so your team can work without noise or dust interruptions."
    },
    {
      question: "What happens to the partitions if our company moves to a new building?",
      answer: "Our aluminium channel systems are modular and demountable. Unlike fixed drywall, the aluminium frames can be unbolted and re-erected in your new office layout."
    },
    {
      question: "How do you add privacy to transparent glass walls?",
      answer: "We apply custom frosted vinyl film directly to the glass. This can be fitted as full privacy bands, decorative stripes, or die-cut with your company logo and brand motifs."
    },
    {
      question: "Can doors be fitted into glass partition walls?",
      answer: "Yes. You can choose frameless glass swing doors on hydraulic floor pivots, sliding glass doors to save floor space, or solid timber doors fitted into aluminium door frames."
    },
    {
      question: "Do glass office walls meet safety building codes?",
      answer: "By law (SANS 10137), all full-height internal glass partitions are fitted with safety glass—either toughened safety glass or laminated safety glass—ensuring staff protection against accidental impact."
    }
  ]
};

export const patioAndGlassEnclosures = {
  id: "srv-patio-glass-enclosures",
  slug: "patio-glass-enclosures",
  fullPageUrl: "https://example.com/services/patio-glass-enclosures",

  // --- SEO & META TAGS ---
  seo: {
    titleTag: "Patio & Glass Enclosures | Sunrooms & Frameless Stoep Glass",
    metaDescription: "Custom aluminium and glass patio enclosures, stoep glass systems, and sunrooms. Convert outdoor stoeps into all-weather, secure living spaces.",
    keywords: [
      "patio glass enclosures",
      "glass stoep enclosures",
      "frameless glass patio enclosure",
      "aluminium sunroom enclosures",
      "glass patio walls",
      "patio glass stacking doors",
      "weatherproof patio enclosures",
      "balcony glass enclosures",
      "SANS compliant glass enclosures"
    ],
    canonicalUrl: "https://example.com/services/patio-glass-enclosures",
    openGraphImage: "https://example.com/images/og/patio-glass-enclosures-hero.jpg"
  },

  // --- STRUCTURED DATA (SCHEMA.ORG JSON-LD) ---
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Custom Patio and Glass Enclosures",
    "description": "Premium custom aluminium and glass patio enclosures, frameless glass walls, and sunroom extensions designed for all-weather outdoor living.",
    "brand": {
      "@type": "Brand",
      "name": "Aluminium Architectural Systems"
    },
    "category": "Building Materials > Patio & Garden Structures",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "ZAR",
      "price": "8500.00",
      "highPrice": "75000.00",
      "offerCount": "10",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "134"
    }
  },

  // --- HERO SECTION ---
  hero: {
    headline: "Custom Patio & Glass Enclosures for Year-Round Outdoor Living",
    subheadline: "Turn your open patio, stoep, or balcony into an elegant, weatherproof entertainment room that keeps out wind, cold rain, and dust without blocking your view.",
    badgeText: "SANS 10400 Certified Safety Glass & Weatherproofing",
    primaryCtaText: "Get a Free Instant Quote",
    secondaryCtaText: "Explore Enclosure Styles"
  },

  // --- OVERVIEW / VALUE PROPOSITION ---
  overview: {
    heading: "Enjoy Outdoor Living in Any Weather, 365 Days a Year",
    paragraphs: [
      "Open patios and stoeps are perfect for sunny days, but cold winter winds, sudden rainstorms, and dust often force you back indoors and leave patio furniture dirty.",
      "Our custom aluminium and glass patio enclosures allow you to close off your outdoor areas when bad weather hits, creating a warm, quiet extra room that still gives you uninterrupted garden views.",
      "Whether you prefer slim framed sliding-folding doors, totally frameless stacking glass panels for 100% open views, or a complete glass sunroom extension, our enclosures feature rust-proof frames, toughened safety glass, and heavy-duty weather seals."
    ],
    keyFeaturesNotice: "All patio enclosures include heavy-duty 304 stainless-steel hardware, UV-stabilized rubber weather seals, toughened safety glass, and built-in drainage channels."
  },

  // --- CORE BENEFITS (WHY CHOOSE GLASS PATIO ENCLOSURES) ---
  benefits: {
    title: "Why Homeowners Love Our Glass Patio Enclosures",
    items: [
      {
        icon: "Sun",
        title: "All-Weather Entertainment Space",
        description: "Host braais, dinners, and family gatherings comfortably all year round regardless of rain, wind, or winter cold."
      },
      {
        icon: "ShieldCheck",
        title: "Patio Furniture & Cushion Protection",
        description: "Keep expensive outdoor couches, braais, and decor completely safe from rain, harsh direct sunlight fading, and dust accumulation."
      },
      {
        icon: "Eye",
        title: "Unobstructed Outdoor Views",
        description: "Enjoy clear, wide-open views of your garden, pool, or mountains with clear safety glass and ultra-thin or frameless profiles."
      },
      {
        icon: "Lock",
        title: "Added Home Security",
        description: "Enclosing your stoep creates an extra layer of lockable security, protecting rear entrance doors and ground-floor windows against intruders."
      },
      {
        icon: "Home",
        title: "Increases Property Value",
        description: "Converting an unused open patio into a functional enclosed sunroom adds valuable living square meters to your home."
      },
      {
        icon: "Wind",
        title: "Wind & Noise Blocking",
        description: "Thick safety glass sheets eliminate heavy gale-force winds and cut down outside traffic noise for peaceful relaxation."
      }
    ]
  },

  // --- PRODUCT TYPES / STYLES ---
  productTypes: {
    title: "Choose the Ideal Enclosure Style for Your Patio",
    description: "Every stoep and balcony layout is unique. We manufacture systems tailored specifically to your home's architecture.",
    items: [
      {
        name: "Frameless Glass Stacking Enclosures",
        tagline: "Pure glass walls with 100% panoramic views",
        description: "Clear toughened glass panels with no vertical aluminium frames. Panels slide along top and bottom tracks and fold away neatly to open up your entire stoep.",
        idealFor: "Scenic stoeps, oceanfront balconies, and modern patios where view preservation is top priority."
      },
      {
        name: "Framed Aluminium Sliding-Folding (Stacking) Enclosures",
        tagline: "Maximum strength and heavy-duty weather sealing",
        description: "Multi-panel doors with slim aluminium frames that stack against side walls. Provides exceptional structural rigidity against strong coastal wind and driving rain.",
        idealFor: "Large verandas, high-wind areas, braai rooms, and ground-floor patio extensions."
      },
      {
        name: "Horizontal Sliding Glass Patio Walls",
        tagline: "Sleek, space-saving, and windproof",
        description: "Multi-track glass sliding doors that glide horizontally. Because panels do not swing open, you keep 100% of your indoor and patio furniture floor space.",
        idealFor: "Compact stoeps, narrow verandas, and upper-floor balconies."
      },
      {
        name: "Glass Sunroom & Roof Extensions",
        tagline: "Complete indoor-outdoor glass rooms",
        description: "Encloses both the side walls and roof using a combination of aluminium structure, glass skylights, or insulated roof panels to create a brand-new living room.",
        idealFor: "Open slabs without existing roofs, courtyard enclosures, and sunroom additions."
      }
    ]
  },

  // --- GLASS & GLAZING OPTIONS ---
  glazingOptions: {
    title: "Safety & Weather Glass Configurations",
    description: "Patio enclosure glass must withstand high wind pressure and accidental impacts while controlling heat and glare.",
    options: [
      {
        name: "8mm to 12mm Toughened Safety Glass",
        description: "Heat-treated safety glass that is up to five times stronger than standard glass. Standard choice for frameless glass walls due to its high impact resistance."
      },
      {
        name: "6.38mm to 8.38mm Laminated Safety Glass",
        description: "Two sheets of glass bonded with a clear vinyl interlayer. If impacted, the glass stays glued together, preventing dangerous broken pieces and stopping break-ins."
      },
      {
        name: "Solar-Control Tinted Safety Glass",
        description: "Treated safety glass (available in neutral grey or bronze) that cuts down direct sun glare and keeps enclosed stoeps cool during hot summer afternoons."
      },
      {
        name: "Double Glazed Sealed Units (SIGU)",
        description: "Two safety glass panes separated by an insulated air gap. Drastically cuts indoor heat loss in winter and keeps your enclosed sunroom warm."
      }
    ]
  },

  // --- TECHNICAL SPECIFICATIONS & COMPLIANCE ---
  specifications: {
    title: "Technical Specifications & Hardware",
    items: [
      { label: "Frame Material", value: "High-grade architectural aluminium alloy (6063-T6)" },
      { label: "Track System", value: "Grade 316 marine-grade stainless-steel guide tracks and tandem rollers" },
      { label: "Glass Joint Seals", value: "Clear UV-resistant plastic weather seals between glass panels" },
      { label: "Powder Coating", value: "Qualicoat marine-grade finish (60–80 microns thick) that resists fading" },
      { label: "Standard Colors", value: "Matte Black, Charcoal Grey, Bronze, Pure White, Natural Anodized" },
      { label: "Locking Systems", value: "Internal multi-point key locks, floor latches, and child-safety locks" },
      { label: "Safety Standards", value: "100% compliant with SANS 10400-N (Glazing) and national wind-load codes" }
    ]
  },

  // --- INSTALLATION PROCESS ---
  installationProcess: {
    title: "Our Simple 4-Step Installation Process",
    steps: [
      {
        stepNumber: "01",
        title: "Onsite Measurement & Layout Assessment",
        description: "We inspect your stoep roof lintels, check floor levelness, measure openings accurately, and help you select the best glass system."
      },
      {
        stepNumber: "02",
        title: "Custom Factory Manufacturing",
        description: "Your aluminium frames, stainless-steel tracks, and toughened glass panels are custom-cut, polished, and quality-tested in our factory."
      },
      {
        stepNumber: "03",
        title: "Clean & Precise Fitting",
        description: "Our experienced installation crew sets top and bottom tracks level, fits glass panels, seals frame joints, and applies weatherproof perimeter silicone."
      },
      {
        stepNumber: "04",
        title: "Testing & Handover",
        description: "We test all gliding and locking mechanisms for smooth operation, thoroughly clean every glass panel, and issue your safety compliance certificate."
      }
    ]
  },

  // --- CUSTOMER REVIEWS & TESTIMONIALS ---
  reviews: [
    {
      authorName: "Claire D.",
      location: "Homeowner",
      rating: 5,
      date: "2026-03-14",
      comment: "Enclosing our stoep with frameless glass was the best home improvement we've made. We can now sit outside on cold winter mornings with coffee and enjoy 100% uninterrupted garden views."
    },
    {
      authorName: "Wayne B.",
      location: "Home Owner",
      rating: 5,
      date: "2026-02-18",
      comment: "We went with matte black aluminium stacking doors to enclose our braai patio. The rain and wind used to ruin our weekend braais, but now it seals completely watertight."
    },
    {
      authorName: "Stefan K.",
      location: "Property Developer",
      rating: 5,
      date: "2025-12-05",
      comment: "Solid engineering, flush floor track integration turned out perfect, and the frameless glass stacking panels operate smoothly with one hand."
    }
  ],

  // --- FREQUENTLY ASKED QUESTIONS (SEO FAQ SCHEMA READY) ---
  faqs: [
    {
      question: "Are frameless glass patio enclosures completely wind and rainproof?",
      answer: "Yes. Clear, UV-stabilized weather seals clip between each glass panel. When closed and locked, these seals compress together to block out driving rain, strong wind drafts, and outdoor dust."
    },
    {
      question: "Can patio glass tracks be set level with my floor?",
      answer: "Yes. We offer flush-track options where the bottom track is sunken into your patio tile or decking. This creates a flat, level floor transition with zero tripping hazard."
    },
    {
      question: "Do I need planning permission to enclose my patio with glass?",
      answer: "In most cases, non-structural glass enclosures added under an existing patio roof are considered minor building work. However, if you are building a new roof structure or live in an estate with strict HOA rules, we assist with compliant plans."
    },
    {
      question: "Will a glass enclosure make my stoep too hot in summer?",
      answer: "Because frameless and stacking glass panels open up completely (opening up to 90–100% of the space), you get full natural airflow in hot weather. We also offer solar-tinted glass to block direct summer sun glare."
    },
    {
      question: "Is the glass used in patio enclosures safe against breakages?",
      answer: "By law (SANS 10137), all full-height patio glass panels are made from heavy-duty toughened safety glass (8mm to 12mm thick) or laminated safety glass that resists heavy impacts and high wind pressure."
    },
    {
      question: "How do I clean frameless glass patio panels?",
      answer: "Frameless glass panels swing inward when stacked, allowing you to easily clean both the inside and outside surfaces of the glass from inside your patio without using ladders."
    }
  ]
};

export const aluminiumBalustrades = {
  id: "srv-aluminium-balustrades",
  slug: "aluminium-balustrades",
  fullPageUrl: "https://example.com/services/aluminium-balustrades",

  // --- SEO & META TAGS ---
  seo: {
    titleTag: "Aluminium & Glass Balustrades | Modern Balcony Railings",
    metaDescription: "Custom aluminium and glass balustrades for balconies, staircases, and pools. Rust-proof, stylish, and built to strictly comply with SANS safety regulations.",
    keywords: [
      "aluminium balustrades",
      "glass balustrades",
      "balcony railings",
      "aluminium staircase balustrades",
      "frameless glass balustrades",
      "pool safety railings",
      "coastal aluminium balustrades",
      "SANS compliant balustrades",
      "rust proof railings"
    ],
    canonicalUrl: "https://example.com/services/aluminium-balustrades",
    openGraphImage: "https://example.com/images/og/aluminium-balustrades-hero.jpg"
  },

  // --- STRUCTURED DATA (SCHEMA.ORG JSON-LD) ---
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Custom Aluminium and Glass Balustrades",
    "description": "High-safety aluminium and glass balustrades engineered for balconies, staircases, and pool enclosures with SANS safety compliance.",
    "brand": {
      "@type": "Brand",
      "name": "Aluminium Architectural Systems"
    },
    "category": "Building Materials > Handrails & Balustrades",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "ZAR",
      "price": "1800.00",
      "highPrice": "15000.00",
      "offerCount": "8",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "118"
    }
  },

  // --- HERO SECTION ---
  hero: {
    headline: "Custom Aluminium & Glass Balustrades for Safety and Style",
    subheadline: "Protect elevated balconies, staircases, and pool areas with strong, rust-proof aluminium railings and sleek safety glass barriers.",
    badgeText: "SANS 10160 & SANS 10400 Structural Impact Safety Certified",
    primaryCtaText: "Get a Free Instant Quote",
    secondaryCtaText: "Explore Balustrade Styles"
  },

  // --- OVERVIEW / VALUE PROPOSITION ---
  overview: {
    heading: "Uncompromising Safety Married to Clean Architectural Lines",
    paragraphs: [
      "Balustrades play a crucial safety role in any building, protecting family, guests, and staff from falls on elevated balconies, staircases, and decking.",
      "Traditional steel railings rust quickly when exposed to coastal air, while timber requires continuous sanding and varnishing. Our aluminium and glass balustrades offer a permanent, rust-free alternative that maintains its clean look with virtually zero maintenance.",
      "Whether you want modern frameless glass for unobstructed views, sleek horizontal post systems, or secure pool fencing, all our balustrade systems are custom-engineered and installed to withstand strict load-bearing and wind-pressure safety standards."
    ],
    keyFeaturesNotice: "All balustrades are engineered with grade 316 stainless-steel anchors, thick toughened safety glass, and heavy-duty structural posts."
  },

  // --- CORE BENEFITS (WHY CHOOSE ALUMINIUM BALUSTRADES) ---
  benefits: {
    title: "Why Property Owners Choose Our Aluminium Balustrades",
    items: [
      {
        icon: "ShieldCheck",
        title: "100% Rust-Proof & Weather-Resistant",
        description: "Made from heavy-duty architectural aluminium that will never rust, peel, or rot, making it ideal for harsh coastal environments."
      },
      {
        icon: "Lock",
        title: "Certified Structural Safety",
        description: "Built to pass strict occupancy line-load tests, ensuring the railings won't flex or give way under heavy push pressure."
      },
      {
        icon: "Eye",
        title: "Unbroken Panoramic Views",
        description: "Glass balustrade options keep balconies safe without blocking scenic mountain, garden, or ocean views."
      },
      {
        icon: "Wrench",
        title: "Zero Ongoing Maintenance",
        description: "No painting, sanding, or rust treatment needed. A simple rinse with fresh water keeps the powder-coated finish spotless."
      },
      {
        icon: "Paintbrush",
        title: "Custom Colors & Designs",
        description: "Choose from UV-resistant powder-coated shades including Matte Black, Charcoal Grey, Bronze, White, and Anodized Silver."
      },
      {
        icon: "Home",
        title: "Versatile Indoor & Outdoor Use",
        description: "Complements modern residential balconies, interior staircases, mezzanine floors, and commercial stairwells."
      }
    ]
  },

  // --- PRODUCT TYPES / STYLES ---
  productTypes: {
    title: "Choose the Perfect Balustrade Style for Your Property",
    description: "We manufacture a range of glass and aluminium post configurations to match your home's aesthetic and safety requirements.",
    items: [
      {
        name: "Frameless Glass Balustrades",
        tagline: "Pure glass walls with zero vertical posts",
        description: "Thick toughened glass panels anchored at the floor level using continuous aluminium spigots or base tracks for completely clear views.",
        idealFor: "Modern luxury balconies, oceanfront decks, and open staircase voids."
      },
      {
        name: "Post & Glass Panel Balustrades",
        tagline: "Sleek aluminium posts framing clear glass",
        description: "Sturdy aluminium posts holding toughened glass panels topped with a continuous aluminium handrail for added hand support.",
        idealFor: "Residential balconies, commercial walkways, and apartment developments."
      },
      {
        name: "Horizontal / Vertical Slatted Balustrades",
        tagline: "Modern metallic privacy and safety railings",
        description: "Clean aluminium slatted bars arranged horizontally or vertically. Offers a modern architectural feel with added privacy.",
        idealFor: "Boundary walls, privacy screens, exterior staircases, and modern facades."
      },
      {
        name: "Pool Safety Railings & Gates",
        tagline: "Rust-proof, child-safe glass pool enclosures",
        description: "Self-closing glass or aluminium barrier fences with child-proof magnetic latches to keep pool areas completely safe for young children.",
        idealFor: "Swimming pools, garden water features, and patio pool decks."
      }
    ]
  },

  // --- GLASS & GLAZING OPTIONS ---
  glazingOptions: {
    title: "Safety Glass & Post Specifications",
    description: "Balustrade glass must meet strict impact and line-load regulations to ensure total fall protection.",
    options: [
      {
        name: "12mm to 15mm Toughened Safety Glass",
        description: "Extra-thick heat-treated safety glass required for frameless glass systems to withstand heavy wind loads and direct physical impacts."
      },
      {
        name: "10.38mm to 13.52mm Toughened Laminated Glass",
        description: "Two toughened glass sheets bonded with a structural vinyl interlayer. If shattered, the panel remains standing intact, maintaining safety."
      },
      {
        name: "Satin Frosted Privacy Glass",
        description: "Opaque glass finishes that provide safety while blocking line-of-sight from neighboring properties."
      },
      {
        name: "Continuous Top Rail Handrails",
        description: "Slim aluminium handrail channels mounted on top of glass panels for extra grip and alignment."
      }
    ]
  },

  // --- TECHNICAL SPECIFICATIONS & COMPLIANCE ---
  specifications: {
    title: "Technical Specifications & Hardware",
    items: [
      { label: "Frame Material", value: "High-tensile structural aluminium alloy (6063-T6)" },
      { label: "Glass Options", value: "10mm to 15mm Toughened Safety Glass or Laminated Glass" },
      { label: "Fixings & Anchors", value: "Grade 316 stainless-steel heavy-duty chemical anchor bolts" },
      { label: "Powder Coating", value: "Qualicoat UV-stabilized exterior finish (60–80 microns thick)" },
      { label: "Standard Colors", value: "Matte Black, Charcoal Grey, Bronze, Pure White, Natural Anodized" },
      { label: "Height Standards", value: "Standard 1000mm (Balconies) and 1200mm (Pool Safety Gates)" },
      { label: "Safety Compliance", value: "100% compliant with SANS 10160 (Wind/Line Loads) & SANS 10400-B" }
    ]
  },

  // --- INSTALLATION PROCESS ---
  installationProcess: {
    title: "Our Simple 4-Step Installation Process",
    steps: [
      {
        stepNumber: "01",
        title: "Onsite Structural Survey & Floor Check",
        description: "We inspect the concrete substrate or steel beams, take precise site measurements, and select appropriate chemical anchor fittings."
      },
      {
        stepNumber: "02",
        title: "Precision Offsite Manufacturing",
        description: "Aluminium posts and safety glass panels are custom-cut, polished, and quality-tested in our factory."
      },
      {
        stepNumber: "03",
        title: "Clean & Secure Onsite Fitting",
        description: "Our certified installation team anchors the base posts or channels securely, sets the glass panels level, and fits top handrails."
      },
      {
        stepNumber: "04",
        title: "Load Testing & Safety Sign-off",
        description: "We perform push and line-load alignment tests on every rail, clean all glass surfaces, and issue your official safety compliance certificate."
      }
    ]
  },

  // --- CUSTOMER REVIEWS & TESTIMONIALS ---
  reviews: [
    {
      authorName: "Andrew P.",
      location: "Homeowner",
      rating: 5,
      date: "2026-03-10",
      comment: "Installed frameless glass balustrades on our top balcony. The glass is super thick, extremely sturdy, and turned out completely seamless."
    },
    {
      authorName: "Michelle K.",
      location: "Home Owner",
      rating: 5,
      date: "2026-02-04",
      comment: "We replaced rusted steel pool fencing with matte black aluminium and glass balustrades. It looks modern, the self-closing gate works perfectly, and no more rust stains!"
    },
    {
      authorName: "David L.",
      location: "Building Contractor",
      rating: 5,
      date: "2025-11-18",
      comment: "Top-notch anchoring system and clean powder-coating finish. Passed the engineer's line-load safety inspection with flying colors."
    }
  ],

  // --- FREQUENTLY ASKED QUESTIONS (SEO FAQ SCHEMA READY) ---
  faqs: [
    {
      question: "What height is legally required for balcony balustrades in South Africa?",
      answer: "Under SANS 10400-B, all balustrades installed on elevated floors (over 1 meter high) must be at least 1000mm (1 meter) high from finished floor level to prevent accidental falls."
    },
    {
      question: "Are frameless glass balustrades strong enough to lean against?",
      answer: "Yes. Frameless glass balustrades use heavy 12mm to 15mm toughened safety glass anchored securely with chemical anchors. They are engineered to comfortably withstand heavy line-loads and push pressure."
    },
    {
      question: "Will aluminium balustrades rust near coastal ocean air?",
      answer: "No. Aluminium does not rust. We apply a durable marine-grade powder coating and use grade 316 stainless-steel base bolts to ensure long-term resistance to salt-air corrosion."
    },
    {
      question: "What glass is required for pool safety fencing?",
      answer: "Pool safety fencing requires toughened safety glass (minimum 10mm to 12mm thick) fitted with self-closing hinges and a magnetic latch that young children cannot open."
    },
    {
      question: "Can balustrades be installed on wooden decking?",
      answer: "Yes. However, the wooden deck support structure underneath must be reinforced to handle the leverage and line-loads required by national safety standards."
    },
    {
      question: "How do I care for aluminium and glass balustrades?",
      answer: "Simply wash the glass and aluminium posts with warm, soapy water twice a year (or quarterly near coastal beaches) to remove salt dust and maintain a clean appearance."
    }
  ]
};

export const showerDoorsAndEnclosures = {
  id: "srv-shower-doors-enclosures",
  slug: "shower-doors-enclosures",
  fullPageUrl: "https://example.com/services/shower-doors-enclosures",

  // --- SEO & META TAGS ---
  seo: {
    titleTag: "Custom Shower Doors & Glass Enclosures | Frameless & Sliding",
    metaDescription: "Custom glass shower doors and enclosures. Frameless, semi-frameless, and sliding shower screens fitted with toughened safety glass and rust-proof fittings.",
    keywords: [
      "shower doors and enclosures",
      "frameless glass shower doors",
      "custom shower enclosures",
      "sliding glass shower doors",
      "walk in shower glass panels",
      "black frame shower enclosures",
      "toughened glass shower doors",
      "bathroom glass partitions",
      "SANS compliant shower glass"
    ],
    canonicalUrl: "https://example.com/services/shower-doors-enclosures",
    openGraphImage: "https://example.com/images/og/shower-doors-enclosures-hero.jpg"
  },

  // --- STRUCTURED DATA (SCHEMA.ORG JSON-LD) ---
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Custom Glass Shower Doors and Enclosures",
    "description": "High-quality glass shower doors, walk-in screens, and custom shower enclosures built with toughened safety glass and rust-proof hardware.",
    "brand": {
      "@type": "Brand",
      "name": "Aluminium Architectural Systems"
    },
    "category": "Home & Garden > Bathroom Hardware > Shower Doors",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "ZAR",
      "price": "1800.00",
      "highPrice": "18000.00",
      "offerCount": "10",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "126"
    }
  },

  // --- HERO SECTION ---
  hero: {
    headline: "Custom Glass Shower Doors & Enclosures for Modern Bathrooms",
    subheadline: "Transform your bathroom with sleek frameless glass shower doors, walk-in screens, and space-saving sliding enclosures built with certified safety glass.",
    badgeText: "Toughened Safety Glass & Rust-Proof Hardware Guaranteed",
    primaryCtaText: "Get a Free Instant Quote",
    secondaryCtaText: "Explore Shower Styles"
  },

  // --- OVERVIEW / VALUE PROPOSITION ---
  overview: {
    heading: "Sleek, Clean Bathroom Design Built for Daily Moisture",
    paragraphs: [
      "Your shower is one of the most frequently used areas in your home, demanding materials that resist soap scum buildup, water leaks, and constant steam exposure.",
      "Our custom shower doors and enclosures give your bathroom a spacious, hotel-luxury feel while keeping water contained exactly where it belongs.",
      "Whether you want a totally frameless glass walk-in panel, a modern matte black framed door, or a smooth sliding corner enclosure for compact bathrooms, we custom-cut toughened safety glass to fit your exact tile openings."
    ],
    keyFeaturesNotice: "All shower glass uses heat-treated toughened safety glass fitted with magnetic water-seal strips and Grade 304/316 stainless-steel or brass hinges."
  },

  // --- CORE BENEFITS (WHY CHOOSE GLASS SHOWER DOORS) ---
  benefits: {
    title: "Why Homeowners & Renovators Choose Our Shower Enclosures",
    items: [
      {
        icon: "Sparkles",
        title: "Sleek & Spacious Look",
        description: "Clear glass panels eliminate dark plastic curtains, instantly making small bathrooms feel larger, brighter, and more open."
      },
      {
        icon: "ShieldCheck",
        title: "Toughened Safety Glass",
        description: "Built with heavy-duty safety glass engineered to withstand high thermal expansion and accidental physical impacts."
      },
      {
        icon: "Droplets",
        title: "Watertight Seal Technology",
        description: "Fitted with clear magnetic door strips and plastic splash fins that stop water from spraying onto dry bathroom floors."
      },
      {
        icon: "Wrench",
        title: "Rust-Proof Metal Fittings",
        description: "All hinges, handles, and support bars are made from high-grade solid brass or stainless steel to prevent rust and corrosion."
      },
      {
        icon: "Paintbrush",
        title: "Custom Hardware Finishes",
        description: "Match your taps and bathroom fixtures with hardware finishes like Matte Black, Polished Chrome, Satin Nickel, and Brushed Gold."
      },
      {
        icon: "Layers",
        title: "Custom Cut for Any Space",
        description: "Glass panels are custom-cut to fit around shower benches, half walls, step-ups, and sloped ceilings perfectly."
      }
    ]
  },

  // --- PRODUCT TYPES / STYLES ---
  productTypes: {
    title: "Choose the Perfect Shower Enclosure Style",
    description: "From open walk-in wet rooms to fully enclosed corner cubicles, we build custom shower doors for every bathroom layout.",
    items: [
      {
        name: "Frameless Glass Shower Enclosures",
        tagline: "Pure glass luxury with zero bulky metal frames",
        description: "Heavy-duty glass panels secured with small wall clamps and sleek hinges for a clean, seamless, easy-to-clean shower space.",
        idealFor: "Modern master bathroom suites, luxury renovations, and spacious wet rooms."
      },
      {
        name: "Fixed Walk-In Glass Screens",
        tagline: "Simple, elegant, and barrier-free walk-in showers",
        description: "A single stationary glass panel anchored to the wall and floor using a stabilizer bar, creating a simple walk-in shower layout.",
        idealFor: "Level-deck walk-in showers, wet rooms, and minimalist bathroom designs."
      },
      {
        name: "Sliding Glass Shower Doors",
        tagline: "Space-saving designs for compact bathrooms",
        description: "Glass doors that glide smoothly horizontally along top stainless-steel roller tracks without swinging outward into bathroom walkways.",
        idealFor: "Smaller bathrooms, en-suites, and showers located near vanities or toilets."
      },
      {
        name: "Corner & Neo-Angle Glass Enclosures",
        tagline: "Custom multi-panel enclosures for corner showers",
        description: "Two-panel or three-panel glass setups fitted at 90-degree or 135-degree angles to turn corner shower bases into bright glass cubicles.",
        idealFor: "Corner shower trays, guest bathrooms, and compact en-suite layouts."
      }
    ]
  },

  // --- GLASS & GLAZING OPTIONS ---
  glazingOptions: {
    title: "Glass Thickness & Privacy Options",
    description: "Select from crystal-clear, frosted, or easy-clean glass treatments to suit your bathroom style.",
    options: [
      {
        name: "8mm to 10mm Toughened Safety Glass",
        description: "Thick, heat-treated safety glass that provides solid structural weight and impact resistance without needing heavy perimeter frames."
      },
      {
        name: "Clear Opti-White Low-Iron Glass",
        description: "Ultra-clear glass that removes the natural green tint found in standard glass, letting white tiles and stone marble look crisp."
      },
      {
        name: "Satin Frosted & Privacy Band Glass",
        description: "Opaque or middle-band frosted finishes that diffuse light while providing complete privacy inside the shower."
      },
      {
        name: "Water-Repellent Easy-Clean Coating",
        description: "A protective nano-coating that repels soap scum and hard water deposits, making glass wiping quick and effortless."
      }
    ]
  },

  // --- TECHNICAL SPECIFICATIONS & COMPLIANCE ---
  specifications: {
    title: "Technical Specifications & Hardware",
    items: [
      { label: "Glass Material", value: "8mm or 10mm Toughened Safety Glass (BS 6206 / SANS certified)" },
      { label: "Hardware Metal", value: "Solid forged brass and Grade 304/316 stainless-steel fittings" },
      { label: "Finishes", value: "Matte Black, Polished Chrome, Satin Stainless Steel, Brushed Gold" },
      { label: "Water Seals", value: "Anti-UV clear plastic fins and magnetic door closure strips" },
      { label: "Stabilizer Bars", value: "Heavy-duty 19mm/25mm stainless-steel wall-to-glass support arms" },
      { label: "Standard Heights", value: "1950mm to 2100mm standard (Custom ceiling-height available)" },
      { label: "Safety Compliance", value: "100% compliant with SANS 10400-N safety glazing regulations" }
    ]
  },

  // --- INSTALLATION PROCESS ---
  installationProcess: {
    title: "Our Simple 4-Step Installation Process",
    steps: [
      {
        stepNumber: "01",
        title: "Onsite Laser Measurement",
        description: "We visit after your tiling is complete to take precise laser measurements, checking for out-of-plumb walls and floor slopes."
      },
      {
        stepNumber: "02",
        title: "Precision Glass Fabrication & Toughening",
        description: "Your glass panels are custom-cut, edge-polished, drilled for handles, and heat-toughened in our factory for exact sizing."
      },
      {
        stepNumber: "03",
        title: "Clean & Watertight Onsite Fitting",
        description: "Our fitting team anchors wall clamps level, fits hinges and glass panels, aligns magnetic seals, and applies mildew-resistant silicone."
      },
      {
        stepNumber: "04",
        title: "Quality Check & Handover",
        description: "We test door swing alignment and seal tightness, clean all glass surfaces, and provide care instructions for your new shower."
      }
    ]
  },

  // --- CUSTOMER REVIEWS & TESTIMONIALS ---
  reviews: [
    {
      authorName: "Jessica V.",
      location: "Homeowner",
      rating: 5,
      date: "2026-03-01",
      comment: "We replaced our old framed shower door with a matte black frameless walk-in glass screen. It transformed our bathroom into a modern spa."
    },
    {
      authorName: "Liam R.",
      location: "Interior Renovator",
      rating: 5,
      date: "2026-01-28",
      comment: "Precise measurements and clean installation. The glass panels fit around our custom shower bench perfectly, with zero water leaks onto the floor."
    },
    {
      authorName: "Nomsa D.",
      location: "Home Owner",
      rating: 5,
      date: "2025-11-19",
      comment: "The sliding glass door glides smoothly, and the magnetic seals keep the bathroom floor completely dry. Very happy with the quality."
    }
  ],

  // --- FREQUENTLY ASKED QUESTIONS (SEO FAQ SCHEMA READY) ---
  faqs: [
    {
      question: "What is the difference between frameless and semi-frameless shower doors?",
      answer: "Frameless shower doors use thick 8mm or 10mm glass held by small wall clamps and hinges with no perimeter metal frame. Semi-frameless doors use thinner glass supported by a slim metal frame around the outer edge."
    },
    {
      question: "Are frameless glass shower doors safe if bumped?",
      answer: "Yes. All our shower panels use toughened safety glass that is heat-treated to withstand heavy impacts. In the rare event of severe breakage, it crumbles into harmless small granules rather than sharp shards."
    },
    {
      question: "How do frameless shower doors keep water from leaking out?",
      answer: "We fit clear, flexible rubber seals and magnetic plastic strips along door edges, combined with subtle floor water-bar strips beneath the door panel to keep water contained inside the shower."
    },
    {
      question: "When should measurements be taken for a custom shower door?",
      answer: "Final measurements should always be taken after all wall tiling, floor sloping, and shower base installations are 100% complete so the glass can be cut to fit the exact finished space."
    },
    {
      question: "How do I prevent hard water stains on my shower glass?",
      answer: "Wipe down the glass with a squeegee or microfiber cloth after showering. Applying an easy-clean protective coating during manufacturing also repels soap scum and water spots."
    },
    {
      question: "Can shower doors be installed over underfloor heating?",
      answer: "Yes. Our installation team uses specialized non-invasive floor anchors or silicone bonding methods near shower thresholds to avoid damaging buried heating cables."
    }
  ]
};

export const customAluminiumFabrication = {
  id: "srv-custom-aluminium-fabrication",
  slug: "custom-aluminium-fabrication",
  fullPageUrl: "https://example.com/services/custom-aluminium-fabrication",

  // --- SEO & META TAGS ---
  seo: {
    titleTag: "Custom Aluminium Fabrication & Architectural Metalwork",
    metaDescription: "Tailor-made aluminium fabrication services. Custom architectural features, gates, sun louvres, cladding, and specialized residential and commercial metalwork.",
    keywords: [
      "custom aluminium fabrication",
      "architectural aluminium metalwork",
      "custom aluminium gates",
      "aluminium wall cladding",
      "bespoke aluminium features",
      "aluminium sun louvres",
      "custom aluminium screens",
      "precision aluminium cutting",
      "SANS compliant fabrication"
    ],
    canonicalUrl: "https://example.com/services/custom-aluminium-fabrication",
    openGraphImage: "https://example.com/images/og/custom-aluminium-fabrication-hero.jpg"
  },

  // --- STRUCTURED DATA (SCHEMA.ORG JSON-LD) ---
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Custom Aluminium Fabrication Services",
    "description": "Bespoke architectural aluminium fabrication, custom metalwork, louvres, gates, and specialized cladding engineered for residential and commercial projects.",
    "brand": {
      "@type": "Brand",
      "name": "Aluminium Architectural Systems"
    },
    "category": "Manufacturing > Fabrication Services",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "ZAR",
      "price": "2500.00",
      "highPrice": "150000.00",
      "offerCount": "15",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "89"
    }
  },

  // --- HERO SECTION ---
  hero: {
    headline: "Custom Aluminium Fabrication & Architectural Metalwork",
    subheadline: "Turn unique architectural concepts into reality with tailor-made aluminium solutions, including custom gates, privacy screens, wall cladding, and specialized structural frames.",
    badgeText: "Precision Engineering & Quality Certified",
    primaryCtaText: "Discuss Your Custom Project",
    secondaryCtaText: "Explore Custom Capabilities"
  },

  // --- OVERVIEW / VALUE PROPOSITION ---
  overview: {
    heading: "Bespoke Metal Fabrication Engineered to Your Exact Specifications",
    paragraphs: [
      "Standard off-the-shelf doors and windows don't always fit unique architectural layouts, modern building designs, or specialized commercial requirements.",
      "Our custom aluminium fabrication service brings bespoke designs to life—combining advanced CNC cutting, precision welding, and expert hand-finishing to produce high-strength, lightweight metalwork tailored to your exact drawings.",
      "From sleek motorized pedestrian and driveway gates to decorative facade screens, custom pergolas, and specialized industrial enclosures, our fabrication division works closely with architects, builders, and homeowners from initial design sketch through to final installation."
    ],
    keyFeaturesNotice: "All custom fabrication uses high-grade architectural alloys, marine-quality powder coating, and stainless-steel hardware for long-lasting durability."
  },

  // --- CORE BENEFITS (WHY CHOOSE CUSTOM FABRICATION) ---
  benefits: {
    title: "Why Work With Our Custom Fabrication Division",
    items: [
      {
        icon: "Compass",
        title: "100% Tailored Designs",
        description: "No limitations on dimensions, shapes, or configurations. We build custom metalwork to match your exact CAD plans or architectural sketches."
      },
      {
        icon: "Feather",
        title: "Lightweight & Structural Strength",
        description: "Aluminium provides a high strength-to-weight ratio, allowing for massive custom structures that place less stress on building foundations."
      },
      {
        icon: "ShieldCheck",
        title: "Rust & Corrosion Free",
        description: "Unlike steel, custom aluminium features won't rust or stain surrounding brickwork, making them ideal for exterior facades and coastal areas."
      },
      {
        icon: "Layers",
        title: "Advanced Manufacturing",
        description: "Utilizing precision CNC routing, TIG welding, and automated bending to achieve clean joints, smooth edges, and exact tolerances."
      },
      {
        icon: "Paintbrush",
        title: "Endless Color & Texture Finishes",
        description: "Finish your custom project with UV-resistant powder coating in any RAL color, textured anodizing, or realistic woodgrain FX finishes."
      },
      {
        icon: "Users",
        title: "Full Turnkey Service",
        description: "We handle the entire journey—onsite laser measuring, structural CAD drafting, factory fabrication, powder coating, and final onsite fitting."
      }
    ]
  },

  // --- PRODUCT TYPES / STYLES ---
  productTypes: {
    title: "Capabilities & Custom Fabrication Services",
    description: "Discover the range of custom architectural and functional aluminium items engineered in our workshop.",
    items: [
      {
        name: "Custom Gates & Entrance Barriers",
        tagline: "Sleek, rust-proof pedestrian and driveway gates",
        description: "Bespoke motorized driveway sliding gates, slatted pedestrian gates, and security barriers built with heavy-duty internal bracing and concealed lock boxes.",
        idealFor: "Modern residential driveways, luxury estate entrances, and commercial access points."
      },
      {
        name: "Decorative Privacy Screens & Cladding",
        tagline: "Laser-cut architectural panels and exterior wall facade cladding",
        description: "Custom laser-cut aluminium screens, slatted wall features, and Composite Cladding (ACP) panels that elevate exterior aesthetics while providing shade and privacy.",
        idealFor: "Building facades, outdoor patio privacy walls, air-con screen covers, and courtyard features."
      },
      {
        name: "Architectural Pergolas & Sun Louvres",
        tagline: "Custom shade structures and adjustable louvre systems",
        description: "Heavy-duty outdoor pergola structures, fixed sun-shading fins, and adjustable louvre panels that shade large glass areas and keep buildings cool.",
        idealFor: "Patio shade roofs, office window sun-shading, and outdoor entertainment spaces."
      },
      {
        name: "Specialized Enclosures & Oversized Frames",
        tagline: "Non-standard architectural glass and metal structures",
        description: "Custom-built shopfront displays, courtyard skylight frames, industrial equipment enclosures, and non-standard glass wall extrusions.",
        idealFor: "Commercial fit-outs, unique residential architecture, and specialized industrial applications."
      }
    ]
  },

  // --- FINISHES & MATERIAL SPECIFICATIONS ---
  glazingOptions: {
    title: "Aluminium Grades & Surface Finishes",
    description: "Selecting the right alloy grade and surface treatment ensures your custom creation lasts for decades.",
    options: [
      {
        name: "Architectural Alloy (6063-T6 & 6082-T6)",
        description: "High-tensile structural alloys offering superior extrusion strength, excellent weldability, and clean surface finishes."
      },
      {
        name: "Qualicoat Marine-Grade Powder Coating",
        description: "A 60 to 80-micron thick powder finish baked at high heat. Resists UV fading, chipping, scratching, and salt-air corrosion."
      },
      {
        name: "Anodized Surface Protection (15–25 Microns)",
        description: "An electrochemical treatment that thickens the natural oxide layer on aluminium, producing a metallic sheen with maximum hardness."
      },
      {
        name: "Sublimated Woodgrain FX Finish",
        description: "Combines the natural warmth and beauty of real timber with the rust-proof, zero-maintenance benefits of structural aluminium."
      }
    ]
  },

  // --- TECHNICAL SPECIFICATIONS & COMPLIANCE ---
  specifications: {
    title: "Technical Specifications & Manufacturing Standards",
    items: [
      { label: "Material Grades", value: "6063-T6, 6082-T6, and 5052-H32 sheet aluminium" },
      { label: "Joining Methods", value: "Precision TIG/MIG welding, mechanical corner cleats, stainless fasteners" },
      { label: "Cutting Tolerances", value: "Precision CNC routing and automated saw cutting to +/- 0.5mm accuracy" },
      { label: "Surface Finishes", value: "Powder coating (RAL spectrum), Anodizing (Silver, Bronze, Black), Woodgrain FX" },
      { label: "Structural Engineering", value: "Custom load calculations and sign-offs for commercial/large-scale features" },
      { label: "Hardware Integration", value: "Pre-machined for motor automation, electric drop-bolts, and access control" },
      { label: "Safety Compliance", value: "Fabricated in strict accordance with national building and structural codes" }
    ]
  },

  // --- INSTALLATION PROCESS ---
  installationProcess: {
    title: "Our 4-Step Custom Project Process",
    steps: [
      {
        stepNumber: "01",
        title: "Concept Review & Site Measurement",
        description: "We review your design ideas, inspect the site, take accurate laser measurements, and discuss material and finish choices."
      },
      {
        stepNumber: "02",
        title: "CAD Drafting & Engineering",
        description: "Our technical team produces detailed CAD manufacturing drawings and 3D models for your sign-off before cutting begins."
      },
      {
        stepNumber: "03",
        title: "Precision Factory Fabrication",
        description: "Materials are CNC-cut, welded, pre-assembled, and quality-inspected before heading to powder coating for a durable finish."
      },
      {
        stepNumber: "04",
        title: "Onsite Fitting & Sign-off",
        description: "Our expert installation crew anchors the custom metalwork securely, connects any automated components, and conducts final quality tests."
      }
    ]
  },

  // --- CUSTOMER REVIEWS & TESTIMONIALS ---
  reviews: [
    {
      authorName: "Marcus V.",
      location: "Architect",
      rating: 5,
      date: "2026-03-05",
      comment: "We needed custom laser-cut facade screens for a luxury residential build. The CAD detailing, powder-coat quality, and installation precision were outstanding."
    },
    {
      authorName: "Craig B.",
      location: "Homeowner",
      rating: 5,
      date: "2026-02-12",
      comment: "They built a custom slatted driveway gate and matching pedestrian gate in matte black. The welding is seamless, it glides silently on its track, and looks incredible."
    },
    {
      authorName: "Lindiwe M.",
      location: "Commercial Developer",
      rating: 5,
      date: "2025-12-01",
      comment: "Great custom work on an oversized entrance pergola and sun-shading fins for our office park development. Completed on schedule and strictly on budget."
    }
  ],

  // --- FREQUENTLY ASKED QUESTIONS (SEO FAQ SCHEMA READY) ---
  faqs: [
    {
      question: "Can you fabricate custom aluminium items from a simple sketch or photo?",
      answer: "Yes. While technical CAD drawings are ideal, our team can work from simple design sketches, photos, or architect concepts to produce precise manufacturing plans for your approval."
    },
    {
      question: "Is custom aluminium fabrication more expensive than standard steel?",
      answer: "Aluminium has a higher upfront raw material cost than mild steel, but it requires zero ongoing rust maintenance, painting, or anti-corrosion treatments. Over time, custom aluminium is significantly more cost-effective."
    },
    {
      question: "How long does a custom aluminium fabrication project take?",
      answer: "Project timelines depend on complexity. Simple custom gates or louvres take approximately 7 to 14 working days from drawing sign-off, while larger commercial facades may take longer."
    },
    {
      question: "Can custom aluminium gates be motorized and automated?",
      answer: "Yes. We pre-machine custom driveway and pedestrian gates with internal cable conduits, lock boxes, and mounting brackets ready for gate motors, electric strikes, and intercom systems."
    },
    {
      question: "What color choices are available for custom aluminium metalwork?",
      answer: "We offer the complete architectural powder-coating spectrum, including standard shades like Matte Black, Charcoal, White, and Bronze, as well as custom RAL codes, anodized metallic sheens, and woodgrain finishes."
    },
    {
      question: "Will custom aluminium structures withstand heavy coastal wind?",
      answer: "Yes. Our team performs structural calculations for large custom screens, pergolas, and gates, incorporating internal steel or heavy aluminium reinforcement where necessary to meet local wind-load regulations."
    }
  ]
};

export const repairsAndReplacement = {
  id: "srv-repairs-and-replacement",
  slug: "repairs-and-replacement",
  fullPageUrl: "https://example.com/services/repairs-and-replacement",

  // --- SEO & META TAGS ---
  seo: {
    titleTag: "Aluminium Door & Window Repairs | Fast Glass Replacement",
    metaDescription: "Professional aluminium window and door repairs, glass replacement, lock fixes, and track replacements. Fast service for homes and businesses.",
    keywords: [
      "aluminium window repairs",
      "aluminium door repairs",
      "sliding door roller replacement",
      "broken glass replacement",
      "stacking door track repair",
      "window handle replacement",
      "door lock replacement",
      "emergency glass repair",
      "SANS compliant glass repair"
    ],
    canonicalUrl: "https://example.com/services/repairs-and-replacement",
    openGraphImage: "https://example.com/images/og/repairs-and-replacement-hero.jpg"
  },

  // --- STRUCTURED DATA (SCHEMA.ORG JSON-LD) ---
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Aluminium Window and Door Repair Services",
    "description": "Comprehensive repair and replacement services for aluminium windows, sliding doors, stacking doors, broken glass, locks, and worn hardware.",
    "brand": {
      "@type": "Brand",
      "name": "Aluminium Architectural Systems"
    },
    "category": "Home Services > Repair & Maintenance",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "ZAR",
      "price": "650.00",
      "highPrice": "12000.00",
      "offerCount": "10",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "164"
    }
  },

  // --- HERO SECTION ---
  hero: {
    headline: "Fast & Reliable Aluminium Window & Door Repairs",
    subheadline: "Restore your windows and doors to like-new condition. We fix sticking sliding doors, broken glass, worn rollers, faulty locks, and leaking window seals.",
    badgeText: "Certified Glaziers & Quality Replacement Parts",
    primaryCtaText: "Book a Repair Technician",
    secondaryCtaText: "Explore Common Repair Services"
  },

  // --- OVERVIEW / VALUE PROPOSITION ---
  overview: {
    heading: "Don't Replace the Whole Frame When You Can Repair It",
    paragraphs: [
      "Sticking sliding doors, noisy rollers, loose handles, or broken glass panes don't always mean you need expensive new window or door systems.",
      "Our specialized maintenance and repair division restores existing aluminium doors, windows, and shopfronts back to smooth, secure working order at a fraction of the cost of a full replacement.",
      "From swapping out worn nylon wheels for stainless-steel tandem rollers to replacing cracked safety glass, fixing multi-point locks, and upgrading single glazing to double glazing, our mobile technicians carry high-quality replacement parts for all standard aluminium profiles."
    ],
    keyFeaturesNotice: "All glass replacements are fitted strictly to SANS 10400 safety standards using toughened or laminated safety glass."
  },

  // --- CORE BENEFITS (WHY CHOOSE REPAIR & REPLACEMENT) ---
  benefits: {
    title: "Why Property Owners Trust Our Repair & Maintenance Team",
    items: [
      {
        icon: "PiggyBank",
        title: "Cost-Effective Solution",
        description: "Repairing worn rollers, tracks, or locks saves you up to 70% compared to removing and replacing complete frame assemblies."
      },
      {
        icon: "Sliders",
        title: "Restores Smooth Gliding",
        description: "Say goodbye to heavy, jamming sliding doors. New heavy-duty wheels and track inserts make doors slide effortlessly with one hand."
      },
      {
        icon: "ShieldCheck",
        title: "Restores Home Security",
        description: "We repair broken latches, faulty multi-point hook deadbolts, and worn hinges so your property stays completely secure."
      },
      {
        icon: "Droplets",
        title: "Stops Drafts & Water Leaks",
        description: "Replacing degraded rubber seals, worn wool pile, and perished perimeter silicone keeps rain and cold winter winds out."
      },
      {
        icon: "Clock",
        title: "Fast Response Times",
        description: "Our fully equipped mobile team carries standard rollers, hinges, and handles to complete most repairs on the same day."
      },
      {
        icon: "CheckCircle",
        title: "SANS Safety Glass Compliant",
        description: "Cracked or shattered glass is replaced with certified toughened or laminated safety glass complete with safety certificates."
      }
    ]
  },

  // --- PRODUCT TYPES / STYLES ---
  productTypes: {
    title: "Our Maintenance & Replacement Services",
    description: "Explore the full range of repair solutions we offer for residential, commercial, and retail properties.",
    items: [
      {
        name: "Sliding & Stacking Door Wheel Replacement",
        tagline: "Smooth, effortless gliding for heavy patio doors",
        description: "Removal of worn, flat-spotted nylon wheels and fitting heavy-duty stainless-steel tandem rollers, along with track smoothing or stainless-steel track capping.",
        idealFor: "Patio sliding doors, multi-panel stacking doors, and heavy glass balcony sliders."
      },
      {
        name: "Broken Glass & Double Glazing Replacement",
        tagline: "Safe, fast glass pane swap-outs",
        description: "Removal of cracked, chipped, or shattered single glass panes, fogged double-glazed units, or old float glass, replacing them with certified safety glass.",
        idealFor: "Broken window panes, shattered patio door glass, and damaged shopfront display windows."
      },
      {
        name: "Lock, Handle & Hinge Repairs",
        tagline: "Fix faulty hardware and restore home security",
        description: "Replacement of broken casement window handles, rusted friction hinges, worn door cylinders, flush bolts, and multi-point security hook locks.",
        idealFor: "Windows that won't stay open, doors that won't lock, and loose or broken handles."
      },
      {
        name: "Rubber Seal, Wool Pile & Leak Restoration",
        tagline: "Draft-proofing and waterproofing existing frames",
        description: "Stripping out perished rubber gaskets, upgrading wool pile weatherstripping, and applying fresh marine-grade silicone weather seals.",
        idealFor: "Leaking windows during rainstorms, whistling wind drafts, and noisy, rattling glass panes."
      }
    ]
  },

  // --- HARDWARE & REPLACEMENT PARTS ---
  glazingOptions: {
    title: "Quality Replacement Components & Hardware",
    description: "We use high-grade, corrosion-resistant parts engineered to extend the life of your existing aluminium systems.",
    options: [
      {
        name: "Grade 304 Stainless-Steel Tandem Rollers",
        description: "Rust-proof roller assemblies with precision ball bearings designed to carry heavy safety glass door panels effortlessly."
      },
      {
        name: "Heavy-Duty Stainless Friction Hinge Stays",
        description: "Sturdy window hinges that allow top-hung and side-hung casement windows to open smoothly and hold their position against wind."
      },
      {
        name: "Multi-Point Hook & Cylinder Locksets",
        description: "High-security replacement door lock mechanisms featuring key-operated deadbolts and anti-lift safety pins."
      },
      {
        name: "UV-Stabilized EPDM Rubber Gaskets & Seals",
        description: "Durable perimeter rubber seals that resist drying out, cracking, or shrinking under harsh direct sunlight."
      }
    ]
  },

  // --- TECHNICAL SPECIFICATIONS & COMPLIANCE ---
  specifications: {
    title: "Technical Capabilities & Compliance Standards",
    items: [
      { label: "Glass Compliance", value: "6.38mm Laminated or Toughened Safety Glass (SANS 10400-N certified)" },
      { label: "Hardware Quality", value: "Grade 304 stainless steel, solid brass, and UV-stabilized nylon components" },
      { label: "Track Repairs", value: "Stainless-steel track capping, rail realignments, and sub-sill clearing" },
      { label: "Compatibility", value: "Fits all major standard aluminium profiles (Vista, Curalam, Sheerline, etc.)" },
      { label: "Sealant Materials", value: "Neutral cure marine-grade structural silicone and anti-fungal gaskets" },
      { label: "Safety Certificates", value: "Official Fenestration Safety Compliance certificates issued for glass swaps" },
      { label: "Workmanship Warranty", value: "Full guarantee on all replacement hardware and installation labor" }
    ]
  },

  // --- INSTALLATION / REPAIR PROCESS ---
  installationProcess: {
    title: "Our Simple 4-Step Repair Process",
    steps: [
      {
        stepNumber: "01",
        title: "Onsite Inspection & Fault Diagnosis",
        description: "Our technician inspects your door or window, identifies the broken hardware or glass failure, and provides a clear upfront quote."
      },
      {
        stepNumber: "02",
        title: "Part Sizing & Preparation",
        description: "We select matching heavy-duty hardware from our stock or custom-cut new safety glass to the exact millimetre dimensions."
      },
      {
        stepNumber: "03",
        title: "Professional Removal & Fitting",
        description: "We carefully unhinge or un-track the sash, remove old broken parts, clean out debris, and fit the new hardware or glass."
      },
      {
        stepNumber: "04",
        title: "Testing & Smooth Operation Check",
        description: "We adjust roller height, realign locks, test door gliding and latching, and clean up the work area thoroughly."
      }
    ]
  },

  // --- CUSTOMER REVIEWS & TESTIMONIALS ---
  reviews: [
    {
      authorName: "Richard H.",
      location: "Homeowner",
      rating: 5,
      date: "2026-03-12",
      comment: "Our 4-panel stacking patio door was sticking badly and almost impossible to open. The team replaced the rollers and capped the track in under two hours—it now glides with one finger!"
    },
    {
      authorName: "Amanda P.",
      location: "Property Manager",
      rating: 5,
      date: "2026-02-19",
      comment: "Replaced a shattered glass pane on our commercial office front door. Fast arrival, fitted proper laminated safety glass, and issued a safety certificate on the spot."
    },
    {
      authorName: "Klaus M.",
      location: "Home Owner",
      rating: 5,
      date: "2025-12-08",
      comment: "Fixed four draughty window casements and swapped out rusted hinges and broken handles. Saved us a fortune compared to buying new window frames."
    }
  ],

  // --- FREQUENTLY ASKED QUESTIONS (SEO FAQ SCHEMA READY) ---
  faqs: [
    {
      question: "Why does my aluminium sliding door jump or drag on its track?",
      answer: "Dragging or jumping is usually caused by worn, flat-spotted roller wheels or dirt build-up in the track. Replacing the bottom rollers with heavy-duty stainless-steel tandem wheels restores smooth, effortless sliding."
    },
    {
      question: "Can you replace broken glass without replacing the entire aluminium frame?",
      answer: "Yes. In almost all cases, the aluminium beads holding the glass in place can be unclipped, allowing us to remove the broken pane and fit a brand-new safety glass pane into the existing frame."
    },
    {
      question: "What glass is required by law when replacing broken patio door glass?",
      answer: "Under South African safety standards (SANS 10137 / SANS 10400-N), all glass installed in doors or low-level windows must be certified safety glass (either toughened glass or laminated safety glass at least 6.38mm thick)."
    },
    {
      question: "Do you repair broken multi-point locks and window handles?",
      answer: "Yes. We stock a wide range of replacement casement window handles, friction stay hinges, sliding door latches, flush bolts, and multi-point security eurocylinder locksets."
    },
    {
      question: "How do I know if my sliding door track needs to be replaced?",
      answer: "If the bottom aluminium track rail is dented, grooved, or pitted from years of running on broken wheels, we can install a stainless-steel track cover cap over the existing rail, creating a smooth, rust-proof surface for new rollers."
    },
    {
      question: "How long does a typical window or door repair take?",
      answer: "Most standard repairs—such as wheel replacements, hinge swaps, handle fixes, or standard glass replacements—are completed within 1 to 2 hours onsite."
    }
  ]
};

export const burglarBarsAndSecurityScreens = {
  id: "srv-burglar-bars-security-screens",
  slug: "burglar-bars-security-screens",
  fullPageUrl: "https://example.com/services/burglar-bars-security-screens",

  // --- SEO & META TAGS ---
  seo: {
    titleTag: "Aluminium Burglar Bars & Clear Security Screens | Home Security",
    metaDescription: "Custom aluminium burglar bars, clear polycarbonate bars, and woven stainless steel mesh security screens. High-security window and door protection for homes.",
    keywords: [
      "aluminium burglar bars",
      "clear burglar bars",
      "mesh security screens",
      "security window screens",
      "polycarbonate burglar bars",
      "transparent burglar bars",
      "aluminium security barriers",
      "window security grilles",
      "SANS compliant security barrier"
    ],
    canonicalUrl: "https://example.com/services/burglar-bars-security-screens",
    openGraphImage: "https://example.com/images/og/burglar-bars-security-screens-hero.jpg"
  },

  // --- STRUCTURED DATA (SCHEMA.ORG JSON-LD) ---
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Aluminium Burglar Bars and Security Screens",
    "description": "High-security aluminium burglar bars, clear polycarbonate bars, and high-tensile stainless steel mesh security screens for windows and patio doors.",
    "brand": {
      "@type": "Brand",
      "name": "Aluminium Architectural Systems"
    },
    "category": "Home & Garden > Home Security > Security Barriers",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "ZAR",
      "price": "850.00",
      "highPrice": "18000.00",
      "offerCount": "12",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "148"
    }
  },

  // --- HERO SECTION ---
  hero: {
    headline: "Custom Aluminium Burglar Bars & Invisible Security Screens",
    subheadline: "Protect your family and property without feeling caged in. Upgrade to sleek aluminium bars, clear polycarbonate strips, or woven stainless steel mesh screens.",
    badgeText: "High-Security Impact Tested & Rust-Proof Guaranteed",
    primaryCtaText: "Get a Free Security Assessment",
    secondaryCtaText: "Explore Security Barrier Options"
  },

  // --- OVERVIEW / VALUE PROPOSITION ---
  overview: {
    heading: "Uncompromised Home Protection That Complements Your Architecture",
    paragraphs: [
      "Traditional steel burglar bars rust, peel, and leave ugly paint stains down your exterior walls—all while making your home feel like a prison.",
      "Our modern security barrier range combines robust forced-entry resistance with clean architectural aesthetics. Whether you prefer color-matched aluminium bars that integrate into your window frame, transparent polycarbonate strips that preserve your view, or high-tensile stainless steel mesh screens that double as insect protection, we offer custom solutions for every opening.",
      "Engineered with tamper-proof fixings, structural frame anchoring, and corrosion-resistant materials, our burglar bars and security screens deliver real peace of mind without sacrificing natural light or open views."
    ],
    keyFeaturesNotice: "All security installations feature tamper-resistant shear-nut anchors, UV-stabilized clear polymers, and grade 304/316 stainless steel security mesh."
  },

  // --- CORE BENEFITS (WHY CHOOSE ALUMINIUM & MESH SECURITY) ---
  benefits: {
    title: "Why Homeowners Prefer Our Modern Security Barriers",
    items: [
      {
        icon: "ShieldCheck",
        title: "100% Rust-Proof & Maintenance-Free",
        description: "Made from architectural aluminium and high-tensile stainless steel that will never rust, peel, or stain brickwork."
      },
      {
        icon: "Eye",
        title: "Unobstructed Light & Scenic Views",
        description: "Transparent polycarbonate bars and woven security screens keep outdoor views open while maintaining a strong physical barrier."
      },
      {
        icon: "Lock",
        title: "Tamper-Proof Anchoring",
        description: "Secured directly into window frames or brickwork using high-strength fasteners and tamper-proof shear nuts that cannot be unscrewed."
      },
      {
        icon: "Wind",
        title: "Fresh Air with Total Security",
        description: "Leave windows open overnight for natural cooling while keeping intruder access and flying insects completely blocked."
      },
      {
        icon: "Paintbrush",
        title: "Frame-Matched Colors",
        description: "Powder-coated to match your existing window and door frames in Matte Black, Charcoal, White, Bronze, or Anodized Silver."
      },
      {
        icon: "Flame",
        title: "Emergency Escape Access",
        description: "Optional key-lockable hinged barrier configurations allow rapid fire emergency evacuation from bedrooms when needed."
      }
    ]
  },

  // --- PRODUCT TYPES / STYLES ---
  productTypes: {
    title: "Choose the Ideal Security Barrier for Your Home",
    description: "From completely clear window strips to heavy-duty woven mesh patio doors, we manufacture custom protection for every opening.",
    items: [
      {
        name: "Clear Polycarbonate Burglar Bars",
        tagline: "Virtually invisible protection for scenic windows",
        description: "High-impact, UV-treated clear polycarbonate strips mounted individually or in a framed grid to keep views completely unobstructed.",
        idealFor: "Scenic living room windows, estate properties with strict architectural aesthetic rules, and bedrooms."
      },
      {
        name: "Aluminium Frame-Integrated Burglar Bars",
        tagline: "Sleek, color-matched architectural bar grilles",
        description: "Solid or tubular aluminium bars built into a dedicated sub-frame that fastens directly into the window channel for a built-in look.",
        idealFor: "Casement windows, sliding windows, and side-hung bedroom openings requiring strong physical deterrence."
      },
      {
        name: "High-Tensile Woven Mesh Security Screens",
        tagline: "Unbreakable woven mesh for windows and patio doors",
        description: "Marine-grade 304/316 woven stainless steel mesh enclosed in a heavy aluminium frame. Acts as a transparent, cut-resistant barrier and insect screen.",
        idealFor: "Patio sliding doors, front doors, wide window openings, and ground-floor entertainment areas."
      },
      {
        name: "Hinged & Lockable Security Barriers",
        tagline: "Opening security gates for emergency escape",
        description: "Custom hinged security screens and bar panels fitted with multi-point key locks that open easily from the inside for cleaning or emergency exit.",
        idealFor: "Fire escape windows, bedroom exit passages, and indoor passage security barriers."
      }
    ]
  },

  // --- MATERIAL SPECIFICATIONS & STRENGTH ---
  glazingOptions: {
    title: "High-Performance Security Materials",
    description: "Every material option is selected for high tensile strength, impact resistance, and weather resistance.",
    options: [
      {
        name: "High-Impact Clear Polycarbonate (6mm - 8mm)",
        description: "Lightweight, flexible polymer strips engineered to absorb heavy hammer or crowbar blows without shattering or snapping."
      },
      {
        name: "Grade 304/316 Woven Stainless Steel Mesh",
        description: "High-tensile steel wire woven into a dense mesh screen that resists knife shear, crowbar impact, and forced levering."
      },
      {
        name: "Architectural Grade Aluminium Bar Extrusions",
        description: "Thick-walled 6063-T6 alloy tubing or solid aluminium bars reinforced with internal steel pins for high cut resistance."
      },
      {
        name: "UV-Stabilized Powder Coating",
        description: "Exterior-grade 60–80 micron powder coat that prevents surface scratching, UV yellowing, and salt-air corrosion."
      }
    ]
  },

  // --- TECHNICAL SPECIFICATIONS & COMPLIANCE ---
  specifications: {
    title: "Technical Specifications & Hardware",
    items: [
      { label: "Frame Material", value: "Heavy-duty structural aluminium alloy (6063-T6)" },
      { label: "Mesh Specification", value: "0.8mm-0.9mm Grade 304/316 high-tensile stainless steel woven mesh" },
      { label: "Polycarbonate Grade", value: "UV2-protected optical-grade clear polycarbonate strips" },
      { label: "Fasteners & Rivets", value: "Tamper-proof stainless steel shear fasteners and structural blind rivets" },
      { label: "Powder Coating", value: "Qualicoat marine-grade finish (60–80 microns thick)" },
      { label: "Standard Colors", value: "Matte Black, Charcoal Grey, Bronze, Pure White, Natural Anodized" },
      { label: "Safety Standards", value: "Tested for dynamic impact, knife shear, and jam-lever forced entry resistance" }
    ]
  },

  // --- INSTALLATION PROCESS ---
  installationProcess: {
    title: "Our Simple 4-Step Security Installation Process",
    steps: [
      {
        stepNumber: "01",
        title: "Onsite Security Assessment & Measurement",
        description: "We evaluate opening risks, measure window and door reveals accurately, and help you choose the best barrier style for each opening."
      },
      {
        stepNumber: "02",
        title: "Custom Factory Manufacturing",
        description: "Security bars, polycarbonate strips, or mesh screens are precision-cut, powder-coated, and assembled offsite in our factory."
      },
      {
        stepNumber: "03",
        title: "Clean & Tamper-Proof Onsite Fitting",
        description: "Our certified installation team anchors the barrier frames securely into brickwork or aluminium frames using tamper-proof shear anchors."
      },
      {
        stepNumber: "04",
        title: "Quality Check & Handover",
        description: "We test all hinged locks, verify structural rigidity, clean all glass and screen surfaces, and provide key operation instructions."
      }
    ]
  },

  // --- CUSTOMER REVIEWS & TESTIMONIALS ---
  reviews: [
    {
      authorName: "Gavin C.",
      location: "Homeowner",
      rating: 5,
      date: "2026-03-08",
      comment: "We replaced our old rusted steel bars with clear polycarbonate strips. You can barely see them from the garden, but they feel rock solid. Huge difference!"
    },
    {
      authorName: "Anneri L.",
      location: "Home Owner",
      rating: 5,
      date: "2026-02-14",
      comment: "The stainless steel mesh security doors on our patio sliders are fantastic. We leave the main doors wide open for breeze at night knowing no insects or intruders can get in."
    },
    {
      authorName: "Devan N.",
      location: "Estate Resident",
      rating: 5,
      date: "2025-11-25",
      comment: "Our HOA has strict rules against ugly steel bars. These matte black frame-integrated aluminium bars were approved instantly and look like part of the original window."
    }
  ],

  // --- FREQUENTLY ASKED QUESTIONS (SEO FAQ SCHEMA READY) ---
  faqs: [
    {
      question: "Are clear polycarbonate burglar bars really strong enough to stop intruders?",
      answer: "Yes. High-grade polycarbonate is the same material used in riot shields. When installed with individual frame anchors or enclosed sub-frames, clear bars absorb intense hammer impacts and crowbar leverage without snapping."
    },
    {
      question: "Will clear polycarbonate bars yellow or turn cloudy in hot sun?",
      answer: "No. We use exclusively UV-stabilized, optical-grade polycarbonate that resists UV degradation, yellowing, and clouding caused by harsh sunlight exposure."
    },
    {
      question: "What is the advantage of stainless steel mesh security screens over traditional bars?",
      answer: "Stainless steel mesh screens act as a solid cut-resistant security barrier while also functioning as a fine insect screen. They don't look like bars, allowing clear, shadow-free views outdoors."
    },
    {
      question: "Can security screens be installed on sliding patio doors?",
      answer: "Yes. We manufacture sliding mesh security doors that run on parallel tracks alongside your glass sliding doors, locking securely into place with multi-point deadbolts."
    },
    {
      question: "Can burglar bars be opened in an emergency like a house fire?",
      answer: "Yes. We offer hinged security barriers equipped with internal key-operated locks or quick-release latches for bedroom windows, ensuring a safe emergency exit route."
    },
    {
      question: "Will installing aluminium burglar bars damage my existing window frames?",
      answer: "No. Our technicians use custom mounting brackets and color-matched rivets or shear screws designed specifically for aluminium window channels, preserving weather seals and frame integrity."
    }
  ]
};

export const aluminiumTrellisSecurityDoors = {
  id: "srv-aluminium-trellis-security-doors",
  slug: "aluminium-trellis-security-doors",
  fullPageUrl: "https://example.com/services/aluminium-trellis-security-doors",

  // --- SEO & META TAGS ---
  seo: {
    titleTag: "Retractable Aluminium Trellis Security Doors | Expandable Gates",
    metaDescription: "Custom expandable aluminium trellis security doors & concertina gates. Heavy-duty multi-point locking, smooth glide tracks, and 100% rust-proof home security.",
    keywords: [
      "aluminium trellis security doors",
      "retractable security gates",
      "expandable security doors",
      "trellis door security",
      "concertina security gates",
      "rust proof security gates",
      "patio trellis doors",
      "slam lock security gates",
      "SANS compliant security barriers"
    ],
    canonicalUrl: "https://example.com/services/aluminium-trellis-security-doors",
    openGraphImage: "https://example.com/images/og/aluminium-trellis-security-doors-hero.jpg"
  },

  // --- STRUCTURED DATA (SCHEMA.ORG JSON-LD) ---
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Retractable Aluminium Trellis Security Doors",
    "description": "Heavy-duty expandable aluminium trellis security doors and retractable gates engineered for doors, patio sliders, and commercial shopfront protection.",
    "brand": {
      "@type": "Brand",
      "name": "Aluminium Architectural Systems"
    },
    "category": "Home & Garden > Home Security > Security Barriers",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "ZAR",
      "price": "2200.00",
      "highPrice": "24000.00",
      "offerCount": "10",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "152"
    }
  },

  // --- HERO SECTION ---
  hero: {
    headline: "Retractable Aluminium Trellis Security Doors & Expandable Gates",
    subheadline: "Protect your patio doors, front entrances, and commercial shopfronts with smooth-sliding, high-security trellis doors that fold away neatly when not in use.",
    badgeText: "Slam-Lock Technology & 100% Rust-Proof Aluminium Certified",
    primaryCtaText: "Get a Free Security Assessment",
    secondaryCtaText: "Explore Trellis Options"
  },

  // --- OVERVIEW / VALUE PROPOSITION ---
  overview: {
    heading: "High-Security Protection That Slides Out of Sight",
    paragraphs: [
      "Securing large patio doorways, French doors, or commercial entrances shouldn't force you to live behind permanently fixed steel bars.",
      "Our retractable aluminium trellis security doors stack neatly to the side when open, leaving your doorways clear and open to natural sunlight and airflow. When locked, they form an impenetrable, cross-braced barrier across your entire opening.",
      "Manufactured from heavy-duty structural aluminium with stainless-steel rivets and double uprights, these doors glide silently on sealed bearing rollers. Unlike traditional steel expandable gates that rust and jam, our aluminium trellis doors remain smooth, light to operate, and completely rust-free for life."
    ],
    keyFeaturesNotice: "Includes rapid-engage slam-locks, anti-lever steel hook deadbolts, top and bottom steel-reinforced guide tracks, and bottom lift-up track options."
  },

  // --- CORE BENEFITS (WHY CHOOSE ALUMINIUM TRELLIS DOORS) ---
  benefits: {
    title: "Why Homeowners & Businesses Choose Our Trellis Doors",
    items: [
      {
        icon: "ShieldAlert",
        title: "Instant Slam-Lock Protection",
        description: "Equipped with rapid-locking slam locks that lock automatically when pushed shut, giving you instant protection during an emergency."
      },
      {
        icon: "ShieldCheck",
        title: "100% Rust-Proof Construction",
        description: "Made entirely from architectural aluminium and stainless-steel rivets that won't rust, bleed paint stains, or jam near coastal salt air."
      },
      {
        icon: "Maximize2",
        title: "Folds Away Compactly",
        description: "The expandable lattice design stacks tightly against side walls, keeping doorways wide, open, and easy to walk through."
      },
      {
        icon: "Sliders",
        title: "Whisper-Quiet Smooth Operation",
        description: "Sealed top-hung bearing rollers allow even wide double-leaf patio gates to slide open and shut effortlessly with one hand."
      },
      {
        icon: "Sparkles",
        title: "Hinged & Lift-Up Track Options",
        description: "Bottom tracks can be fitted with swing-away hinges or lift-up sections to keep floor doorways 100% step-free and level."
      },
      {
        icon: "Paintbrush",
        title: "Color-Matched Finishes",
        description: "Powder-coated to match your existing door and window frames in Matte Black, Charcoal Grey, Pure White, Bronze, or Silver."
      }
    ]
  },

  // --- PRODUCT TYPES / STYLES ---
  productTypes: {
    title: "Choose the Perfect Retractable Security Gate Layout",
    description: "From single doorway entrance gates to wide multi-panel patio stackers, we build custom trellis barriers for every opening.",
    items: [
      {
        name: "Single-Leaf Retractable Trellis Doors",
        tagline: "Ideal for standard front doors and kitchen entrances",
        description: "A single expandable gate that slides across from one side and locks securely into a heavy-duty side wall receiver channel.",
        idealFor: "Front entrance doors, kitchen back doors, passage security barriers, and office access doors."
      },
      {
        name: "Double-Leaf Center-Locking Trellis Doors",
        tagline: "Perfect for wide patio sliding and stacking doors",
        description: "Two trellis gate panels that pull together from both sides and lock securely in the middle, splitting the stack width evenly.",
        idealFor: "Wide patio sliding doors, multi-panel stacking glass doors, and residential verandas."
      },
      {
        name: "Lift-Up & Swing-Away Track Systems",
        tagline: "Barrier-free access for clean floor transitions",
        description: "Features a bottom guide track that pivots upward or swings flush against the wall when open, eliminating tripping hazards.",
        idealFor: "Wheelchair-accessible doors, high-foot-traffic doorways, and commercial shopfront entries."
      },
      {
        name: "Commercial Shopfront & Window Trellis Grilles",
        tagline: "Heavy-duty retractable protection for retail spaces",
        description: "Custom-height retractable grilles fitted behind glass display windows or store entrances to prevent forced break-ins and ram raids.",
        idealFor: "Retail stores, shopping mall shopfronts, pharmacy counters, and office windows."
      }
    ]
  },

  // --- MATERIAL SPECIFICATIONS & SECURITY STRENGTH ---
  glazingOptions: {
    title: "High-Security Material & Lock Specifications",
    description: "Every component is engineered for maximum lever resistance, cut protection, and smooth movement.",
    options: [
      {
        name: "Double Aircraft-Grade Aluminium Uprights",
        description: "Twin vertical aluminium extrusion bars enclosing internal steel pins to resist cutting tools and crowbar leverage."
      },
      {
        name: "Solid Stainless-Steel Cross-Brace Lattice",
        description: "Heavy-duty cross-pattern lattice links constructed with stainless-steel rivets that reinforce the gate against pushing and pulling."
      },
      {
        name: "Multi-Point Hook Deadbolt Locksets",
        description: "Heavy-duty key-operated deadbolts featuring hook latches that anchor deeply into side channels, preventing doors from being levered off."
      },
      {
        name: "Top-Hung Sealed Bearing Rollers",
        description: "Dust-sealed roller bearings running inside a heavy top track, keeping the weight off the floor and ensuring smooth sliding."
      }
    ]
  },

  // --- TECHNICAL SPECIFICATIONS & COMPLIANCE ---
  specifications: {
    title: "Technical Specifications & Hardware",
    items: [
      { label: "Frame Material", value: "Heavy-duty architectural aluminium alloy (6063-T6)" },
      { label: "Lattice Rivets", value: "Grade 304 stainless-steel solid structural rivets" },
      { label: "Lock Mechanism", value: "Slam-lock or standard key-operated multi-point hook deadbolt" },
      { label: "Guide Tracks", value: "Enclosed top and bottom aluminium channels with stainless-steel floor pins" },
      { label: "Powder Coating", value: "Qualicoat marine-grade finish (60–80 microns thick)" },
      { label: "Standard Colors", value: "Matte Black, Charcoal Grey, Bronze, Pure White, Natural Anodized" },
      { label: "Safety Standards", value: "Tested for high lateral force resistance, crowbar leverage, and impact protection" }
    ]
  },

  // --- INSTALLATION PROCESS ---
  installationProcess: {
    title: "Our Simple 4-Step Installation Process",
    steps: [
      {
        stepNumber: "01",
        title: "Onsite Security Assessment & Measurement",
        description: "We evaluate your doorway reveal, measure exact width and height clearances, and check bottom track threshold options."
      },
      {
        stepNumber: "02",
        title: "Custom Factory Manufacturing",
        description: "Your retractable trellis gate is custom-built, powder-coated, fitted with locksets, and quality-inspected offsite in our factory."
      },
      {
        stepNumber: "03",
        title: "Clean & Secure Onsite Installation",
        description: "Our certified installation team anchors the top and side receiver tracks securely into brickwork or sub-framing using tamper-proof fixings."
      },
      {
        stepNumber: "04",
        title: "Lock Testing & Smooth Sliding Check",
        description: "We test the slam-lock mechanism, verify smooth sliding alignment across the full span, clean up the area, and hand over your keys."
      }
    ]
  },

  // --- CUSTOMER REVIEWS & TESTIMONIALS ---
  reviews: [
    {
      authorName: "Kobus P.",
      location: "Homeowner",
      rating: 5,
      date: "2026-03-11",
      comment: "Replaced our old steel expandable gate with a matte black aluminium trellis door for our main patio slider. It glides so quietly and doesn't leave rust marks when it rains."
    },
    {
      authorName: "Sipho M.",
      location: "Retail Store Owner",
      rating: 5,
      date: "2026-02-18",
      comment: "Installed retractable trellis grilles behind our shopfront glass windows. The slam lock gives us complete peace of mind when closing up shop at night."
    },
    {
      authorName: "Tracey W.",
      location: "Home Owner",
      rating: 5,
      date: "2025-12-14",
      comment: "The lift-up bottom track option was a lifesaver for our back patio. When open, there is zero lip to trip over when carrying food outside!"
    }
  ],

  // --- FREQUENTLY ASKED QUESTIONS (SEO FAQ SCHEMA READY) ---
  faqs: [
    {
      question: "What is the difference between a slam lock and a standard lock on a trellis door?",
      answer: "A slam lock engages and locks automatically as soon as you push the door shut—no key needed—giving you instant security during an emergency. A standard lock requires you to manually turn a key to engage the deadbolt."
    },
    {
      question: "Will aluminium trellis doors rust near coastal ocean air?",
      answer: "No. Unlike steel expandable gates that corrode, flake paint, and jam, aluminium is 100% rust-proof. We also use solid stainless-steel rivets and marine-grade powder coating to prevent corrosion."
    },
    {
      question: "How much space does a trellis door take up when folded open?",
      answer: "When fully pushed open (retracted), the stacked gate panel takes up approximately 15% to 20% of the total opening width, folding neatly to the side."
    },
    {
      question: "Can bottom tracks be installed without creating a tripping hazard?",
      answer: "Yes. We offer hinged lift-up bottom tracks or swing-away bottom rail designs that allow the track to be lifted or swung clear when the gate is open, keeping floor doorways flat and step-free."
    },
    {
      question: "Can retractable trellis doors be fitted to glass sliding patio doors?",
      answer: "Yes. Retractable trellis doors are designed to install neatly inside the reveal directly in front of or behind glass sliding doors, stacking glass doors, or French doors."
    },
    {
      question: "How do I care for my retractable security gate?",
      answer: "Keep top and bottom guide tracks clean of grit and dust with a vacuum or cloth. A quick spray of dry silicone lubricant on the top rollers once a year keeps the gate sliding silently."
    }
  ]
};

export const aluminiumGuttersAndFascias = {
  id: "srv-aluminium-gutters-fascias",
  slug: "aluminium-gutters-fascias",
  fullPageUrl: "https://example.com/services/aluminium-gutters-fascias",

  // --- SEO & META TAGS ---
  seo: {
    titleTag: "Seamless Aluminium Gutters & Fascia Boards | Roof Drainage",
    metaDescription: "Seamless aluminium gutters, downpipes, and fascia board replacements. Rust-proof, leak-free, custom-extruded roof rainwater drainage systems for homes & businesses.",
    keywords: [
      "seamless aluminium gutters",
      "aluminium gutter installation",
      "aluminium fascia boards",
      "aluminium downpipes",
      "rainwater drainage systems",
      "rust proof gutters",
      "box gutters aluminium",
      "gutter replacement services",
      "SANS compliant roof drainage"
    ],
    canonicalUrl: "https://example.com/services/aluminium-gutters-fascias",
    openGraphImage: "https://example.com/images/og/aluminium-gutters-fascias-hero.jpg"
  },

  // --- STRUCTURED DATA (SCHEMA.ORG JSON-LD) ---
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Seamless Aluminium Gutters and Fascia Boards",
    "description": "Continuous seamless aluminium gutters, downpipes, and low-maintenance fascia board cladding systems engineered for roof rainwater management.",
    "brand": {
      "@type": "Brand",
      "name": "Aluminium Architectural Systems"
    },
    "category": "Home & Garden > Lawn & Garden > Watering & Irrigation > Gutters",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "ZAR",
      "price": "1200.00",
      "highPrice": "28000.00",
      "offerCount": "8",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "138"
    }
  },

  // --- HERO SECTION ---
  hero: {
    headline: "Seamless Aluminium Gutters, Downpipes & Fascia Boards",
    subheadline: "Protect your roof, exterior walls, and foundation from rainwater damage with custom-extruded, leak-free seamless aluminium gutters and durable fascia cladding.",
    badgeText: "Continuous Seamless Roll-Formed & Rust-Proof Guaranteed",
    primaryCtaText: "Get a Free Roof Drainage Quote",
    secondaryCtaText: "Explore Gutter Profiles"
  },

  // --- OVERVIEW / VALUE PROPOSITION ---
  overview: {
    heading: "Leak-Free Rainwater Management Built to Outlast the Elements",
    paragraphs: [
      "Leaking joints, rusted steel gutters, and rotting wooden fascia boards cause severe structural water damage to roof trusses, interior ceilings, and building foundations.",
      "Our continuous seamless aluminium gutters are custom-extruded directly on your site to the exact lengths of your roofline. Because there are no seam joins along the straight runs, leaks, sagging, and rust weak-points are completely eliminated.",
      "Paired with matching aluminium downpipes and weather-resistant aluminium fascia capping, our rainwater systems keep water moving safely away from your building while giving your roofline a crisp, modern finish that never requires painting."
    ],
    keyFeaturesNotice: "All gutter installations feature internal heavy-duty aluminum brackets, factory-molded corner mitres, and UV-stabilized silicone sealants."
  },

  // --- CORE BENEFITS (WHY CHOOSE SEAMLESS ALUMINIUM GUTTERS) ---
  benefits: {
    title: "Why Homeowners & Builders Choose Our Aluminium Gutters",
    items: [
      {
        icon: "Droplets",
        title: "100% Seamless & Leak-Free",
        description: "Roll-formed on site in single continuous lengths, eliminating mid-section joints where standard gutters leak and fail."
      },
      {
        icon: "ShieldCheck",
        title: "100% Rust-Proof Material",
        description: "Constructed from high-grade pre-painted aluminium coil that will never rust, flake, or corrode, even in coastal salt air."
      },
      {
        icon: "Wrench",
        title: "Zero Painting Maintenance",
        description: "Finished with a durable factory-baked silicone enamel coat that resists UV fading, chalking, and peeling for decades."
      },
      {
        icon: "Eye",
        title: "Concealed Internal Brackets",
        description: "Fixed using heavy-duty internal brackets that hold gutters firmly to fascia boards without ugly external support straps."
      },
      {
        icon: "Home",
        title: "Fascia & Barge Board Protection",
        description: "Aluminium fascia capping encases timber roof boards, sealing them permanently against rot, termites, and weather decay."
      },
      {
        icon: "Paintbrush",
        title: "Color-Matched Roof Finishes",
        description: "Available in popular architectural shades including Matte Black, Charcoal Grey, Bronze, Pure White, and Dove Grey."
      }
    ]
  },

  // --- PRODUCT TYPES / STYLES ---
  productTypes: {
    title: "Choose the Ideal Roof Drainage & Fascia System",
    description: "From classic residential Ogee gutters to high-capacity commercial box gutters, we manufacture solutions for any roofline.",
    items: [
      {
        name: "Domestic Ogee Seamless Gutters (125mm)",
        tagline: "The standard architectural choice for residential homes",
        description: "A classic decorative crown-molding profile that channels rainwater efficiently while adding a neat, traditional finish to home rooflines.",
        idealFor: "Residential houses, townhouse complexes, and domestic roof extensions."
      },
      {
        name: "Commercial Ogee & Box Gutters (150mm)",
        tagline: "High-capacity drainage for large roof surface areas",
        description: "Oversized seamless profiles designed to handle extreme volume during heavy torrential downpours, preventing roof trough overflows.",
        idealFor: "Commercial buildings, industrial warehouses, schools, and large residential estates."
      },
      {
        name: "Aluminium Downpipes & Fluted Rainwater Pipes",
        tagline: "Sleek, crush-resistant water discharge pipes",
        description: "Rectangular or round aluminium downpipes fitted with custom offsets and wall brackets to direct water smoothly into drains or rainwater tanks.",
        idealFor: "Rainwater harvesting systems, wall drainage, and rainwater tank connections."
      },
      {
        name: "Aluminium Fascia & Barge Board Cladding",
        tagline: "Maintenance-free encasement for timber roof edges",
        description: "Custom-fitted aluminium cladding that covers wooden fascia and barge boards, protecting roof structures from rot without replacing trusses.",
        idealFor: "Older homes with rotting timber fascias, modern roof edges, and low-maintenance renovations."
      }
    ]
  },

  // --- MATERIAL SPECIFICATIONS & COATINGS ---
  glazingOptions: {
    title: "High-Performance Aluminium Coil & Finish Standards",
    description: "Every section is formed from specialized structural alloys designed to withstand UV rays and heavy water weight.",
    options: [
      {
        name: "Pre-Painted Structural Aluminium Alloy (0.6mm - 0.8mm)",
        description: "High-tensile, corrosion-resistant aluminium coil engineered specifically for seamless roll-forming machine fabrication."
      },
      {
        name: "Factory-Baked Polymer Color Finish",
        description: "A dual-coat thermosetting enamel finish baked onto the aluminium coil at high heat, offering extreme UV and scratch resistance."
      },
      {
        name: "Heavy-Duty Internal Aluminium Fixing Brackets",
        description: "Structural internal hanger brackets placed every 600mm to ensure gutters won't sag or pull away under heavy water load."
      },
      {
        name: "Factory-Molded End Caps & Corner Mitres",
        description: "Precision-stamped corner mitres sealed with marine-grade structural silicone for completely watertight corner joints."
      }
    ]
  },

  // --- TECHNICAL SPECIFICATIONS & COMPLIANCE ---
  specifications: {
    title: "Technical Specifications & Hardware",
    items: [
      { label: "Gutter Profiles", value: "125mm (5-inch) Domestic Ogee & 150mm (6-inch) Commercial Ogee/Box" },
      { label: "Downpipe Sizes", value: "75mm x 50mm, 100mm x 75mm, and 80mm round aluminium pipes" },
      { label: "Bracket Spacing", value: "Heavy-duty internal aluminium brackets spaced at maximum 600mm intervals" },
      { label: "Surface Coating", value: "Factory-baked silicone-modified polyester enamel finish" },
      { label: "Standard Colors", value: "Matte Black, Charcoal Grey, Bronze, Pure White, Dove Grey" },
      { label: "Fasteners", value: "Grade 304 stainless-steel screws and structural blind rivets" },
      { label: "Compliance Standards", value: "100% compliant with SANS 10400-R roof drainage and rainfall capacity codes" }
    ]
  },

  // --- INSTALLATION PROCESS ---
  installationProcess: {
    title: "Our Simple 4-Step Installation Process",
    steps: [
      {
        stepNumber: "01",
        title: "Onsite Roofline Inspection & Assessment",
        description: "We inspect your roof pitch, measure fascia lines, calculate rainwater discharge volumes, and select correct downpipe drop points."
      },
      {
        stepNumber: "02",
        title: "Onsite Roll-Forming Fabrication",
        description: "Our mobile factory unit arrives at your property to roll-form continuous seamless gutters directly to the exact length of your roof."
      },
      {
        stepNumber: "03",
        title: "Precision Fitting & Slope Alignment",
        description: "Our certified installation crew anchors internal brackets level, sets the fall slope for optimal drainage, and fits corner mitres."
      },
      {
        stepNumber: "04",
        title: "Water Testing & Clean Handover",
        description: "We run a water flow test along the entire gutter run to verify drainage, clean up all debris, and issue your installation warranty."
      }
    ]
  },

  // --- CUSTOMER REVIEWS & TESTIMONIALS ---
  reviews: [
    {
      authorName: "Heinrich K.",
      location: "Homeowner",
      rating: 5,
      date: "2026-03-04",
      comment: "The mobile roll-forming machine made custom seamless gutters right in our driveway! No seams along the entire front roofline, and the charcoal color matches our tiles perfectly."
    },
    {
      authorName: "Sarah M.",
      location: "Home Owner",
      rating: 5,
      date: "2026-01-22",
      comment: "We replaced rotting wooden fascia boards with aluminium fascia cladding and seamless gutters. It completely modernized the exterior of our house with zero maintenance needed."
    },
    {
      authorName: "Theba L.",
      location: "Building Contractor",
      rating: 5,
      date: "2025-11-29",
      comment: "Top commercial 150mm gutter installation on our warehouse project. Handled severe summer rainstorms without a single overflow or drop leak."
    }
  ],

  // --- FREQUENTLY ASKED QUESTIONS (SEO FAQ SCHEMA READY) ---
  faqs: [
    {
      question: "What is the main advantage of seamless gutters over traditional sectional gutters?",
      answer: "Traditional plastic or steel gutters come in short 3-meter sections joined together with connectors. Over time, these joints expand, contract, and leak. Seamless gutters are extruded in one single continuous piece onsite, eliminating leaky joins along straight runs."
    },
    {
      question: "How long do seamless aluminium gutters last?",
      answer: "Aluminium does not rust. Combined with factory-baked enamel coatings, seamless aluminium gutters routinely last over 30 years with minimal maintenance."
    },
    {
      question: "Can aluminium fascia cladding be installed over existing timber fascia boards?",
      answer: "Yes. If the underlying timber fascia board is still structurally sound, we encase it in pre-painted aluminium cladding. This seals the wood permanently against rain and sun, eliminating the need to ever paint it again."
    },
    {
      question: "Will aluminium gutters rust near coastal salt air?",
      answer: "No. Aluminium is completely rust-proof. Unlike galvanized steel gutters that corrode and peel along coastal beaches, aluminium gutters remain unaffected by marine salt spray."
    },
    {
      question: "How do you ensure rainwater drains properly without pooling in the gutter?",
      answer: "Our technicians use precision spirit levels during installation to set a subtle, invisible slope (fall) toward your downpipe outlets, ensuring water drains completely without standing pool water."
    },
    {
      question: "How do I maintain my seamless aluminium gutters?",
      answer: "Aluminium gutters require very little maintenance. Simply clear out fallen tree leaves and twigs from the gutter trough twice a year (or fit leaf guards) to keep water flowing freely."
    }
  ]
};

export const fliesAndInsectScreens = {
  id: "srv-flies-insect-screens",
  slug: "flies-insect-screens",
  fullPageUrl: "https://example.com/services/flies-insect-screens",

  // --- SEO & META TAGS ---
  seo: {
    titleTag: "Custom Fly & Insect Screens | Window & Patio Mesh Screens",
    metaDescription: "Custom aluminium fly and insect screens for windows, sliding doors, and patio openings. Keep flies, mosquitoes, and bugs out while enjoying fresh natural air.",
    keywords: [
      "fly screens for windows",
      "insect screens for doors",
      "sliding fly screens",
      "retractable insect screens",
      "aluminium fly screen frames",
      "mosquito screens for patio doors",
      "custom insect mesh",
      "pet resistant mesh screens",
      "SANS compliant insect barrier"
    ],
    canonicalUrl: "https://example.com/services/flies-insect-screens",
    openGraphImage: "https://example.com/images/og/flies-insect-screens-hero.jpg"
  },

  // --- STRUCTURED DATA (SCHEMA.ORG JSON-LD) ---
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Custom Fly and Insect Screens",
    "description": "High-quality aluminium framed fly screens, retractable mesh screens, and sliding insect barriers designed for residential windows and patio doors.",
    "brand": {
      "@type": "Brand",
      "name": "Aluminium Architectural Systems"
    },
    "category": "Home & Garden > Household Supplies > Pest Control",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "ZAR",
      "price": "450.00",
      "highPrice": "8500.00",
      "offerCount": "10",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "124"
    }
  },

  // --- HERO SECTION ---
  hero: {
    headline: "Custom Fly & Insect Screens for Windows & Doors",
    subheadline: "Enjoy cool breezes and open views without pesky flies, mosquitoes, and insects invading your home. Custom-fitted aluminium mesh screens for every opening.",
    badgeText: "Durable Fiberglass Mesh & Rust-Proof Frames Included",
    primaryCtaText: "Get a Free Instant Quote",
    secondaryCtaText: "Explore Insect Screen Styles"
  },

  // --- OVERVIEW / VALUE PROPOSITION ---
  overview: {
    heading: "Breathe Fresh Air Without Letting Bugs Inside",
    paragraphs: [
      "Leaving windows and patio doors open during warm summer days and nights is essential for natural ventilation, but it often invites flies, mosquitoes, moths, and creepy-crawlies into your living spaces.",
      "Our custom fly and insect screen systems fit seamlessly onto existing aluminium, timber, or PVC window and door frames, providing an invisible barrier that allows 100% natural airflow while keeping insects strictly outside.",
      "From fixed clips-on window screens to roll-up retractable cassettes, smooth sliding patio screen doors, and heavy-duty pet-resistant mesh, we manufacture durable insect protection tailored to your exact window dimensions."
    ],
    keyFeaturesNotice: "All insect screens are built using UV-stabilized fiberglass or stainless steel mesh fitted into rust-proof, color-matched aluminium frames."
  },

  // --- CORE BENEFITS (WHY CHOOSE ALUMINIUM INSECT SCREENS) ---
  benefits: {
    title: "Why Homeowners & Restaurants Choose Our Insect Screens",
    items: [
      {
        icon: "Wind",
        title: "100% Natural Fresh Air Flow",
        description: "Keep doors and windows wide open for natural cooling day and night without relying constantly on air conditioning."
      },
      {
        icon: "ShieldCheck",
        title: "Effective Bug & Mosquito Defense",
        description: "Micro-mesh weave keeps out disease-carrying mosquitoes, house flies, midges, moths, and spiders."
      },
      {
        icon: "Eye",
        title: "Transparent & Near-Invisible Mesh",
        description: "High-visibility charcoal fiberglass mesh allows natural sunlight through without distorting or dimming outdoor garden views."
      },
      {
        icon: "Wrench",
        title: "Rust-Proof & UV-Resistant",
        description: "Powder-coated aluminium frames and UV-treated mesh won't rust, rot, or sag when exposed to direct rain and hot sunlight."
      },
      {
        icon: "Dog",
        title: "Pet-Resistant Mesh Options",
        description: "Heavy-duty vinyl-coated polyester mesh designed to withstand clawing and scratching from dogs and cats."
      },
      {
        icon: "Paintbrush",
        title: "Frame-Matched Finishes",
        description: "Powder-coated to match your existing window frames in Matte Black, Charcoal Grey, Pure White, Bronze, or Anodized Silver."
      }
    ]
  },

  // --- PRODUCT TYPES / STYLES ---
  productTypes: {
    title: "Choose the Ideal Insect Screen System for Your Space",
    description: "From fixed window frames to retractable cassette screens for wide patio doors, we build solutions for every architectural opening.",
    items: [
      {
        name: "Fixed & Removable Frame Window Screens",
        tagline: "Simple, effective protection for standard windows",
        description: "Slim powder-coated aluminium frames that clip neatly onto existing casement or sliding window frames, easily removable for cleaning.",
        idealFor: "Bedrooms, kitchens, bathrooms, and side-hung or top-hung casement windows."
      },
      {
        name: "Retractable (Roll-Up) Mesh Screens",
        tagline: "Rolls neatly into an aluminium cassette when not in use",
        description: "Spring-loaded insect screens that pull down or slide across when needed and retract smoothly back into a discreet wall-mounted cassette.",
        idealFor: "Pass-through kitchen windows, French doors, and main front entrance doors."
      },
      {
        name: "Horizontal Sliding Patio Door Screens",
        tagline: "Smooth-gliding screens for large patio doors",
        description: "Sliding insect screen panels running on parallel tracks alongside glass sliding doors, allowing easy access to patios while keeping bugs out.",
        idealFor: "Patio sliding doors, multi-panel stacking glass doors, and verandas."
      },
      {
        name: "Pleated (Concertina) Insect Doors",
        tagline: "Space-saving folding screens for wide openings",
        description: "Accordion-style pleated mesh screens that fold neatly to the side with low-profile bottom floor tracks, taking up minimal space when retracted.",
        idealFor: "Wide sliding-folding (stacking) doors, bi-fold patio doors, and large alfresco spaces."
      }
    ]
  },

  // --- MATERIAL SPECIFICATIONS & MESH TYPES ---
  glazingOptions: {
    title: "High-Performance Mesh Options",
    description: "Select the ideal mesh type based on visibility, insect size, and durability requirements.",
    options: [
      {
        name: "Standard Charcoal Fiberglass Mesh",
        description: "Pliable, UV-stabilized fiberglass weave that offers excellent transparency, high airflow, and long-term resistance to sun damage."
      },
      {
        name: "Heavy-Duty Pet Mesh (TuffScreen)",
        description: "Thick vinyl-coated polyester thread mesh that is seven times stronger than standard screen mesh, resisting tears from pets."
      },
      {
        name: "Grade 304 Stainless Steel Micro-Mesh",
        description: "Rigid steel wire mesh that combines pest protection with high cut resistance and superior durability against heavy wind."
      },
      {
        name: "Extra-Fine No-See-Um Mesh",
        description: "Densely woven mesh designed specifically to block tiny biting midges, gnats, and small fruit flies near coastal or wetland areas."
      }
    ]
  },

  // --- TECHNICAL SPECIFICATIONS & COMPLIANCE ---
  specifications: {
    title: "Technical Specifications & Hardware",
    items: [
      { label: "Frame Material", value: "Lightweight architectural grade aluminium extrusions (6063-T6)" },
      { label: "Mesh Material", value: "UV-treated fiberglass, vinyl-coated polyester, or Grade 304 stainless steel" },
      { label: "Frame Finishes", value: "Durable Qualicoat powder coating (60–80 microns thick)" },
      { label: "Standard Colors", value: "Matte Black, Charcoal Grey, Bronze, Pure White, Natural Anodized" },
      { label: "Fasteners & Hardware", value: "Stainless-steel corner keys, tension springs, and magnetic catch strips" },
      { label: "Screen Sizes", value: "Custom-manufactured to exact millimetre dimensions for a gap-free seal" },
      { label: "Care & Cleaning", value: "100% washable — easily cleaned with a soft brush or gentle water spray" }
    ]
  },

  // --- INSTALLATION PROCESS ---
  installationProcess: {
    title: "Our Simple 4-Step Installation Process",
    steps: [
      {
        stepNumber: "01",
        title: "Onsite Measurement & System Selection",
        description: "We inspect your window and door handles, measure frame reveals accurately, and help you choose the best screen style."
      },
      {
        stepNumber: "02",
        title: "Custom Offsite Manufacturing",
        description: "Aluminium frames are custom-cut, powder-coated, fitted with high-tension mesh, and quality-inspected in our factory."
      },
      {
        stepNumber: "03",
        title: "Clean & Precise Fitting",
        description: "Our certified installation team fits the screens flush against your openings using discreet magnetic latches, clips, or guide tracks."
      },
      {
        stepNumber: "04",
        title: "Testing & Handover",
        description: "We test roll-up tension and sliding tracks for smooth, gap-free operation, clean all mesh surfaces, and provide easy care tips."
      }
    ]
  },

  // --- CUSTOMER REVIEWS & TESTIMONIALS ---
  reviews: [
    {
      authorName: "Nadine B.",
      location: "Homeowner",
      rating: 5,
      date: "2026-03-02",
      comment: "We installed retractable roll-down fly screens in our bedrooms. We can now sleep with the windows wide open during hot summer nights without a single mosquito buzzing around!"
    },
    {
      authorName: "Peter S.",
      location: "Restaurant Owner",
      rating: 5,
      date: "2026-01-20",
      comment: "Fitted custom sliding mesh doors to our kitchen patio entrance. Keeps flies out of our food prep area while letting fresh air flow through."
    },
    {
      authorName: "Zinzi M.",
      location: "Home Owner",
      rating: 5,
      date: "2025-11-28",
      comment: "The heavy-duty pet mesh on our patio sliding door is fantastic. Our two dogs jump against it when excited and it hasn't stretched or torn at all."
    }
  ],

  // --- FREQUENTLY ASKED QUESTIONS (SEO FAQ SCHEMA READY) ---
  faqs: [
    {
      question: "Do fly screens block sunlight or darken interior rooms?",
      answer: "No. Our high-visibility charcoal fiberglass mesh is designed to absorb glare while allowing up to 85% of natural light to pass through, keeping indoor rooms bright and clear."
    },
    {
      question: "Can insect screens be installed on casement windows with handles that stick out?",
      answer: "Yes. We use offset sub-frames or retractable cassette systems that fit around outward-projecting window handles without interfering with opening and closing."
    },
    {
      question: "Will insect screens keep small pets inside?",
      answer: "Standard fiberglass mesh is designed for bug defense, not pet containment. However, our heavy-duty Pet Mesh (TuffScreen) is built with thick vinyl-coated polyester thread that withstands pet scratching and pushing."
    },
    {
      question: "How do I clean my aluminium fly screens?",
      answer: "Fixed clip-on frames can be unclipped and rinsed with warm soapy water. Retractable or sliding screens can be vacuumed gently with a soft brush attachment or wiped with a damp cloth."
    },
    {
      question: "Can retractable insect screens be installed on wide sliding patio doors?",
      answer: "Yes. Pleated (concertina) insect screens and double-sliding screen doors can span openings up to 6 meters wide, retracting neatly into side cassettes when not in use."
    },
    {
      question: "Are aluminium insect screens rust-proof near coastal beaches?",
      answer: "Yes. All our screen frames are extruded from architectural aluminium and finished with marine-grade powder coating, fitted with fiberglass or stainless steel mesh that won't rust in salt air."
    }
  ]
};

export const aluminiumPergolasAndCarports = {
  id: "srv-aluminium-pergolas-carports",
  slug: "aluminium-pergolas-carports",
  fullPageUrl: "https://example.com/services/aluminium-pergolas-carports",

  // --- SEO & META TAGS ---
  seo: {
    titleTag: "Aluminium Pergolas & Carports | Louvred Roof Shade Systems",
    metaDescription: "Custom aluminium pergolas, carports, and adjustable louvre roof structures. Rust-proof, low-maintenance shade, weather protection, and vehicle covers.",
    keywords: [
      "aluminium pergolas",
      "aluminium carports",
      "adjustable louvre roof pergolas",
      "motorized aluminium pergolas",
      "modern vehicle carports",
      "patio shade structures",
      "rust proof carports",
      "cantilever aluminium carports",
      "SANS compliant shade structures"
    ],
    canonicalUrl: "https://example.com/services/aluminium-pergolas-carports",
    openGraphImage: "https://example.com/images/og/aluminium-pergolas-carports-hero.jpg"
  },

  // --- STRUCTURED DATA (SCHEMA.ORG JSON-LD) ---
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Custom Aluminium Pergolas and Carports",
    "description": "High-durability aluminium pergolas, louvred roof shade systems, and vehicle carports engineered for all-weather outdoor protection.",
    "brand": {
      "@type": "Brand",
      "name": "Aluminium Architectural Systems"
    },
    "category": "Home & Garden > Yard, Garden & Outdoor Living > Outdoor Structures > Canopies & Gazebos",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "ZAR",
      "price": "8500.00",
      "highPrice": "120000.00",
      "offerCount": "10",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "116"
    }
  },

  // --- HERO SECTION ---
  hero: {
    headline: "Custom Aluminium Pergolas, Louvred Roofs & Carports",
    subheadline: "Elevate your outdoor living area and protect your vehicles with sleek, rust-proof aluminium pergolas, motorized louvred shade roofs, and heavy-duty carports.",
    badgeText: "100% Rust-Proof & SANS Wind-Load Certified",
    primaryCtaText: "Get a Free Instant Quote",
    secondaryCtaText: "Explore Pergola & Carport Styles"
  },

  // --- OVERVIEW / VALUE PROPOSITION ---
  overview: {
    heading: "All-Weather Outdoor Shade & Vehicle Protection Built to Last",
    paragraphs: [
      "Wooden pergolas rot, warp, and require constant sanding and painting, while traditional steel carports rust quickly and stain paved driveways. Our aluminium pergolas and carports deliver a permanent, modern alternative that requires virtually zero maintenance.",
      "Engineered from high-tensile structural aluminium extrusions with stainless-steel fasteners, our shade structures withstand harsh summer heat, heavy rainstorms, and gale-force winds without fading, rusting, or sagging.",
      "Whether you want an adjustable louvred roof pergola that tilts to control sunlight and seal out rain, a modern cantilever carport for your vehicles, or an architectural patio shade frame, we custom-build every system to match your property's dimensions."
    ],
    keyFeaturesNotice: "All pergolas and carports feature concealed internal gutter drainage, structural anchor plates, and UV-stabilized powder-coated finishes."
  },

  // --- CORE BENEFITS (WHY CHOOSE ALUMINIUM PERGOLAS & CARPORTS) ---
  benefits: {
    title: "Why Homeowners & Businesses Choose Our Shade Structures",
    items: [
      {
        icon: "ShieldCheck",
        title: "100% Rust-Proof & Maintenance-Free",
        description: "Constructed entirely from high-grade structural aluminium that will never rust, rot, peel, or warp, even in harsh coastal salt air."
      },
      {
        icon: "Sun",
        title: "Adjustable Sun & Rain Control",
        description: "Louvred roof systems allow you to rotate roof blades up to 180 degrees to catch sun breezes or close them completely flat against rain."
      },
      {
        icon: "Droplets",
        title: "Integrated Hidden Gutter Drainage",
        description: "Rainwater channels away through concealed internal roof beams and down downpipe support posts, keeping ground areas dry."
      },
      {
        icon: "Car",
        title: "Vehicle & Paint Protection",
        description: "Shield cars, caravans, and boats from direct UV paint damage, hail impact, bird droppings, and tree sap."
      },
      {
        icon: "Home",
        title: "Increases Property Value",
        description: "Modern architectural shade structures instantly upgrade curb appeal and add functional covered square meters to your home."
      },
      {
        icon: "Paintbrush",
        title: "Frame-Matched Finishes",
        description: "Available in powder-coated shades including Matte Black, Charcoal Grey, Pure White, Bronze, or natural woodgrain FX finishes."
      }
    ]
  },

  // --- PRODUCT TYPES / STYLES ---
  productTypes: {
    title: "Choose the Ideal Pergola or Carport Configuration",
    description: "From motorized open-and-close patio roofs to heavy-duty double carports, we design structures tailored to your outdoor layout.",
    items: [
      {
        name: "Adjustable Louvred Roof Pergolas (Bioclimatic)",
        tagline: "Motorized or manual louvred roofs for all-weather patios",
        description: "Rotating aluminium roof blades that tilt to let in sunlight or interlock tightly flat to form a 100% waterproof roof during rain.",
        idealFor: "Main entertainment patios, outdoor dining stoeps, pool decks, and restaurant verandas."
      },
      {
        name: "Fixed Slat & Polycarbonate Pergolas",
        tagline: "Modern architectural shade with continuous light",
        description: "A combination of structural aluminium framing with fixed slatted sun-shading fins or clear/tinted UV polyblock sheeting for permanent cover.",
        idealFor: "Walkways, courtyard entrances, braai areas, and side stoeps."
      },
      {
        name: "Single, Double & Cantilever Carports",
        tagline: "Sleek, rust-proof vehicle protection covers",
        description: "Heavy-duty aluminium carports featuring clear spans or post-free cantilever designs with IBR or corrugated aluminium/polycarbonate roofing.",
        idealFor: "Residential driveways, apartment parking bays, office parks, and caravan covers."
      },
      {
        name: "Freestanding & Attached Patio Structures",
        tagline: "Custom shade pavilions anchored to walls or lawn slabs",
        description: "Versatile shade frames built attached to exterior house walls or anchored as independent freestanding garden pavilions.",
        idealFor: "Garden entertainment hubs, poolside pavilions, and terrace shade structures."
      }
    ]
  },

  // --- MATERIAL SPECIFICATIONS & ROOFING OPTIONS ---
  glazingOptions: {
    title: "High-Performance Materials & Finishes",
    description: "Every component is selected for high tensile load capacity, weatherproofing, and UV resistance.",
    options: [
      {
        name: "Structural Alloy Extrusions (6063-T6 & 6082-T6)",
        description: "High-tensile structural aluminium beams and posts capable of spanning wide openings without central support columns."
      },
      {
        name: "Interlocking Waterproof Louvre Blades",
        description: "Extruded aluminium roof louvres equipped with rubber weather seals that channel rain directly into concealed perimeter gutters."
      },
      {
        name: "Qualicoat Marine-Grade Powder Coating",
        description: "Durable 60 to 80-micron powder-coat finish baked at high heat to resist UV fading, chipping, scratching, and salt corrosion."
      },
      {
        name: "Sublimated Woodgrain FX Finish",
        description: "Combines the natural visual warmth of timber with the zero-maintenance, rust-proof benefits of structural aluminium."
      }
    ]
  },

  // --- TECHNICAL SPECIFICATIONS & COMPLIANCE ---
  specifications: {
    title: "Technical Specifications & Hardware",
    items: [
      { label: "Frame Material", value: "Heavy-duty architectural structural aluminium (6063-T6 / 6082-T6)" },
      { label: "Fasteners & Anchors", value: "Grade 316 stainless-steel bolts, brackets, and chemical concrete anchors" },
      { label: "Louvre Automation", value: "Somfy motorized remote-control drives or manual hand-crank gearboxes" },
      { label: "Powder Coating", value: "Qualicoat marine-grade finish (60–80 microns thick)" },
      { label: "Standard Colors", value: "Matte Black, Charcoal Grey, Bronze, Pure White, Woodgrain FX" },
      { label: "Gutter System", value: "Integrated perimeter beam gutters with downpipes concealed inside posts" },
      { label: "Safety Standards", value: "Engineered in strict accordance with SANS 10160 wind and live load standards" }
    ]
  },

  // --- INSTALLATION PROCESS ---
  installationProcess: {
    title: "Our Simple 4-Step Installation Process",
    steps: [
      {
        stepNumber: "01",
        title: "Onsite Assessment & Structural Survey",
        description: "We inspect your patio ground slab or driveway foundation, measure dimensions accurately, and select structural anchor points."
      },
      {
        stepNumber: "02",
        title: "Precision Factory Fabrication",
        description: "Structural posts, support beams, and louvre blades are custom-machined offsite in our factory for exact sizing and clean joins."
      },
      {
        stepNumber: "03",
        title: "Clean Onsite Assembly & Anchoring",
        description: "Our certified installation team anchors main support posts securely, mounts roof framing, fits louvres, and connects drainage."
      },
      {
        stepNumber: "04",
        title: "Testing & Handover",
        description: "We test louvre rotation motors or gearboxes, run a water drainage test, clean all surfaces, and issue your structural guarantee."
      }
    ]
  },

  // --- CUSTOMER REVIEWS & TESTIMONIALS ---
  reviews: [
    {
      authorName: "Etienne R.",
      location: "Homeowner",
      rating: 5,
      date: "2026-03-08",
      comment: "Our motorized louvred roof pergola completely changed how we use our patio. We open the blades for summer sunshine and close them tight when it rains!"
    },
    {
      authorName: "Gary S.",
      location: "Home Owner",
      rating: 5,
      date: "2026-02-15",
      comment: "Installed a matte black double aluminium carport over our paved driveway. Super clean finish, very sturdy in heavy wind, and zero rust worries."
    },
    {
      authorName: "Monique V.",
      location: "Restaurant Manager",
      rating: 5,
      date: "2025-12-02",
      comment: "We added a wide aluminium pergolas system to our outdoor dining deck. Guests love the shade control and it keeps our deck trading during light rain."
    }
  ],

  // --- FREQUENTLY ASKED QUESTIONS (SEO FAQ SCHEMA READY) ---
  faqs: [
    {
      question: "Are louvred aluminium pergolas 100% waterproof when closed?",
      answer: "Yes. When closed, the louvre blades interlock with double rubber seals to form a solid waterproof roof surface. Rainwater channels into internal beam gutters and down through hidden post downpipes."
    },
    {
      question: "Do aluminium pergolas and carports rust near coastal beaches?",
      answer: "No. Aluminium is completely rust-proof. Combined with grade 316 stainless-steel anchors and marine-grade powder coating, our structures remain unaffected by salt-air corrosion."
    },
    {
      question: "Can pergolas be motorized and controlled via remote?",
      answer: "Yes. We offer motorized bioclimatic louvred pergolas powered by quiet Somfy tubular motors with handheld remotes, wall switches, or automated rain sensors that close the roof automatically during sudden downpours."
    },
    {
      question: "Do I need planning approval to build an aluminium carport or pergola?",
      answer: "Requirements vary by municipality and estate HOA rules. Because aluminium pergolas and carports are lightweight structures, approvals are straightforward, and we assist with compliant plans where needed."
    },
    {
      question: "How do aluminium carports compare to traditional steel or shade-cloth carports?",
      answer: "Aluminium carports never rust, peel paint, or stain paving like steel, and they won't tear or sag in heavy storm winds like fabric shade cloth. They offer a permanent, maintenance-free solution."
    },
    {
      question: "How do I maintain my aluminium pergola or carport?",
      answer: "Maintenance is minimal. Simply clear leaves from roof gutters twice a year and rinse the powder-coated posts and beams with warm, soapy water to keep them looking fresh."
    }
  ]
};

export const skylightsAndRoofWindows = {
  id: "srv-skylights-roof-windows",
  slug: "skylights-roof-windows",
  fullPageUrl: "https://example.com/services/skylights-roof-windows",

  // --- SEO & META TAGS ---
  seo: {
    titleTag: "Aluminium Skylights & Roof Windows | Natural Roof Glazing",
    metaDescription: "Custom aluminium skylights, opening roof windows, and architectural glass roofs. Watertight, energy-efficient roof glazing fitted with high-performance safety glass.",
    keywords: [
      "aluminium skylights",
      "roof windows",
      "custom glass skylights",
      "opening roof windows",
      "flat roof skylights",
      "pitched roof windows",
      "double glazed skylights",
      "frameless roof glazing",
      "SANS compliant skylights"
    ],
    canonicalUrl: "https://example.com/services/skylights-roof-windows",
    openGraphImage: "https://example.com/images/og/skylights-roof-windows-hero.jpg"
  },

  // --- STRUCTURED DATA (SCHEMA.ORG JSON-LD) ---
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Custom Aluminium Skylights and Roof Windows",
    "description": "High-performance aluminium skylights, opening roof windows, and architectural glass roofs engineered with double glazing and leak-proof flashing systems.",
    "brand": {
      "@type": "Brand",
      "name": "Aluminium Architectural Systems"
    },
    "category": "Building Materials > Windows > Skylights",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "ZAR",
      "price": "3500.00",
      "highPrice": "45000.00",
      "offerCount": "8",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "108"
    }
  },

  // --- HERO SECTION ---
  hero: {
    headline: "Custom Aluminium Skylights & Opening Roof Windows",
    subheadline: "Flood dark interior spaces with natural sunlight and fresh air using leak-proof, energy-efficient aluminium skylights and architectural roof windows.",
    badgeText: "Watertight Flashing & Thermal Safety Glass Certified",
    primaryCtaText: "Get a Free Instant Quote",
    secondaryCtaText: "Explore Skylight Styles"
  },

  // --- OVERVIEW / VALUE PROPOSITION ---
  overview: {
    heading: "Brighten Dark Interior Rooms with Superior Overhead Sunlight",
    paragraphs: [
      "Deep interior hallways, staircases, kitchens, and open-plan living areas often lack access to natural side-wall sunlight, leaving rooms dark and dependent on artificial electric lighting.",
      "Our custom aluminium skylights and roof windows channel bright, natural overhead sunlight straight into your home, transforming dim spaces while cutting daytime electricity consumption.",
      "Engineered with thick-walled, rust-proof aluminium frames, specialized perimeter flashing kits, and solar-control safety glass, our roof glazing systems guarantee 100% watertight protection against heavy driving rain, UV degradation, and excessive heat build-up."
    ],
    keyFeaturesNotice: "All skylights feature laminated overhead safety glass, thermal-break aluminium extrusions, and custom-formed aluminium flashing kits."
  },

  // --- CORE BENEFITS (WHY CHOOSE ALUMINIUM SKYLIGHTS) ---
  benefits: {
    title: "Why Homeowners & Architects Choose Our Skylights",
    items: [
      {
        icon: "Sun",
        title: "Maximized Overhead Sunlight",
        description: "Overhead skylights provide up to three times more natural illumination than standard vertical side-wall windows."
      },
      {
        icon: "Droplets",
        title: "100% Leak-Proof Flashing Seals",
        description: "Custom aluminium flashing kits direct torrential rain away from roof tiles and sheeting, preventing ceiling dampness."
      },
      {
        icon: "ShieldCheck",
        title: "Overhead Safety Glass Standards",
        description: "Fitted exclusively with toughened and laminated safety glass that stays intact even upon severe hail impact."
      },
      {
        icon: "Thermometer",
        title: "Solar Heat & UV Control",
        description: "Double glazing and Low-E glass tints block harsh solar heat and harmful UV rays from overheating indoor rooms."
      },
      {
        icon: "Wind",
        title: "Natural Stack Ventilation",
        description: "Opening roof windows allow trapped hot indoor air to escape naturally through the roof, cooling your home efficiently."
      },
      {
        icon: "Paintbrush",
        title: "Frame-Matched Finishes",
        description: "Powder-coated to blend seamlessly with your existing roof sheeting or interior ceiling in Black, Charcoal, White, or Bronze."
      }
    ]
  },

  // --- PRODUCT TYPES / STYLES ---
  productTypes: {
    title: "Choose the Ideal Skylight or Roof Window Configuration",
    description: "From fixed skylights over dark stairwells to electric opening roof windows, we manufacture systems for flat and pitched roofs.",
    items: [
      {
        name: "Fixed Architectural Glass Skylights",
        tagline: "Sleek, low-profile glass skylights for pure sunlight",
        description: "Non-opening glass skylight units mounted on concrete upstands or pitched roofs to flood dark interior rooms with natural daylight.",
        idealFor: "Dark hallways, staircases, kitchens, living rooms, and covered patio roofs."
      },
      {
        name: "Manual & Electric Opening Roof Windows",
        tagline: "Sunlight paired with powerful natural ventilation",
        description: "Top-hinged or center-pivoting roof windows opened manually with a control rod or motorized with wall switches and rain sensors.",
        idealFor: "Loft conversions, attic rooms, bathrooms, and high-ceiling cathedral rooms."
      },
      {
        name: "Pyramid & Lantern Glass Skylights",
        tagline: "3D architectural glass features for flat roofs",
        description: "Multi-panel pitched glass pyramids mounted on flat roof upstands, creating a striking focal feature that catches sun from all angles.",
        idealFor: "Entrance foyers, luxury kitchen islands, hotel lobbies, and office courtyards."
      },
      {
        name: "Walk-On Glass Skylight Roofs",
        tagline: "Heavy-duty structural glass for roof decks and balconies",
        description: "Extra-thick multi-laminated glass panels flush-mounted into outdoor terrace decks, letting sunlight reach subterranean levels below.",
        idealFor: "Basement rooms, underground wine cellars, and rooftop terrace decks."
      }
    ]
  },

  // --- GLASS & GLAZING OPTIONS ---
  glazingOptions: {
    title: "High-Performance Overhead Safety Glass Options",
    description: "Overhead glass must meet strict safety regulations while insulating against heat build-up and outside rain noise.",
    options: [
      {
        name: "6.38mm to 10.38mm Laminated Safety Glass",
        description: "Consists of two glass panes bonded with a tough vinyl interlayer. Required by law for overhead glazing so glass remains standing if cracked."
      },
      {
        name: "Double Glazed Sealed Units (SIGU)",
        description: "Two safety glass panes separated by an insulated air gap. Drastically cuts indoor heat build-up in summer and keeps warmth inside in winter."
      },
      {
        name: "Low-E Solar Control Tinted Glass",
        description: "Special transparent coatings (available in neutral, bronze, or grey) that reflect up to 70% of direct solar heat gain while preserving light."
      },
      {
        name: "Self-Cleaning & Hail-Resistant Toughened Glass",
        description: "Outer toughened glass pane engineered to withstand heavy hail impact, treated with a photo-catalytic coating that breaks down dirt."
      }
    ]
  },

  // --- TECHNICAL SPECIFICATIONS & COMPLIANCE ---
  specifications: {
    title: "Technical Specifications & Hardware",
    items: [
      { label: "Frame Material", value: "Heavy-duty architectural structural aluminium (6063-T6)" },
      { label: "Flashing System", value: "Custom-formed seamless aluminium flashing kits for tile, IBR, and concrete roofs" },
      { label: "Glass Specification", value: "Overhead Laminated or Double Glazed Safety Glass (SANS 10400-N certified)" },
      { label: "Automation", value: "Somfy 230V electric chain actuators with wireless remotes and automatic rain sensors" },
      { label: "Powder Coating", value: "Qualicoat marine-grade finish (60–80 microns thick)" },
      { label: "Standard Colors", value: "Matte Black, Charcoal Grey, Bronze, Pure White, Natural Anodized" },
      { label: "Safety Compliance", value: "100% compliant with SANS 10400-XA (Energy) and SANS 10137 (Glazing) codes" }
    ]
  },

  // --- INSTALLATION PROCESS ---
  installationProcess: {
    title: "Our Simple 4-Step Installation Process",
    steps: [
      {
        stepNumber: "01",
        title: "Onsite Roof Survey & Opening Inspection",
        description: "We inspect your roof truss layout, pitch angle, tile type, and ceiling joists to determine exact structural positioning."
      },
      {
        stepNumber: "02",
        title: "Precision Factory Fabrication",
        description: "Aluminium skylight frames, flashing kits, and overhead safety glass units are custom-built and sealed offsite in our factory."
      },
      {
        stepNumber: "03",
        title: "Clean & Watertight Roof Fitting",
        description: "Our certified installation team cuts the roof opening cleanly, anchors the upstand, fits flashing kits, and applies weatherproof silicone."
      },
      {
        stepNumber: "04",
        title: "Water Testing & Handover",
        description: "We run a water hose test across the roof flashing to verify 100% watertight sealing, clean all glass surfaces, and issue your certificate."
      }
    ]
  },

  // --- CUSTOMER REVIEWS & TESTIMONIALS ---
  reviews: [
    {
      authorName: "Julian M.",
      location: "Homeowner",
      rating: 5,
      date: "2026-03-01",
      comment: "Installing two fixed glass skylights transformed our dark kitchen completely. We don't turn on electric lights until sunset anymore, and the double glazing keeps heat out."
    },
    {
      authorName: "Anneri B.",
      location: "Architect",
      rating: 5,
      date: "2026-01-28",
      comment: "We specified electric opening roof windows for a loft conversion project. Precision flashing alignment, zero rain leaks during summer downpours, and passed SANS safety checks easily."
    },
    {
      authorName: "Thabo S.",
      location: "Home Owner",
      rating: 5,
      date: "2025-11-14",
      comment: "Great quality pyramid glass skylight installed over our main staircase. It added a real luxury feel to the house and was fitted in a single day."
    }
  ],

  // --- FREQUENTLY ASKED QUESTIONS (SEO FAQ SCHEMA READY) ---
  faqs: [
    {
      question: "Will installing a skylight cause roof leaks during heavy rain?",
      answer: "No. Leaks occur only when skylights use inferior sealant methods. We manufacture custom aluminium flashing kits specifically designed for your roof profile (tile, corrugated, or concrete slab) that direct water around the skylight."
    },
    {
      question: "Will a glass skylight make my room too hot in summer?",
      answer: "Not when fitted with the correct glass. We use double glazing combined with Low-E solar-control tinted glass that reflects up to 70% of direct solar heat while allowing bright daylight into the room."
    },
    {
      question: "What glass is legally required for overhead skylights?",
      answer: "Under South African safety standards (SANS 10137), all overhead glass must be certified safety glass (laminated glass or double glazing with a laminated inner pane) so that if impacted, the glass stays bound together without falling."
    },
    {
      question: "Can skylights be installed on flat roofs?",
      answer: "Yes. For flat roofs, we build a raised aluminium upstand (curb) with a slight 5-degree slope. This ensures rainwater sheds off the glass naturally instead of pooling on top."
    },
    {
      question: "Do opening roof windows close automatically when it rains?",
      answer: "Yes. Our motorized electric roof windows can be fitted with automatic rain sensors that detect water droplets and close the roof window automatically, even if you are away from home."
    },
    {
      question: "How do I clean overhead skylight glass?",
      answer: "Exterior skylight glass can be treated with a factory-applied self-cleaning nano-coating that uses sunlight and rain to break down dirt, or cleaned during routine roof inspections."
    }
  ]
};

export const framelessGlassSystems = {
  id: "srv-frameless-glass-systems",
  slug: "frameless-glass-systems",
  fullPageUrl: "https://example.com/services/frameless-glass-systems",

  // --- SEO & META TAGS ---
  seo: {
    titleTag: "Frameless Glass Systems | Patio Enclosures, Doors & Balustrades",
    metaDescription: "Custom frameless glass systems for patio enclosures, stacking doors, balustrades, and wine cellars. Enjoy 100% unobstructed views with certified toughened safety glass.",
    keywords: [
      "frameless glass systems",
      "frameless glass stacking doors",
      "frameless patio enclosures",
      "frameless glass balustrades",
      "walk in frameless showers",
      "frameless wine cellar glass",
      "heavy duty toughened glass",
      "frameless glass partitions",
      "SANS compliant glass systems"
    ],
    canonicalUrl: "https://example.com/services/frameless-glass-systems",
    openGraphImage: "https://example.com/images/og/frameless-glass-systems-hero.jpg"
  },

  // --- STRUCTURED DATA (SCHEMA.ORG JSON-LD) ---
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Custom Frameless Glass Systems",
    "description": "High-end frameless glass stacking doors, patio enclosures, balustrades, and internal glass partitions engineered with heavy-duty toughened safety glass.",
    "brand": {
      "@type": "Brand",
      "name": "Aluminium Architectural Systems"
    },
    "category": "Building Materials > Glass Systems",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "ZAR",
      "price": "4500.00",
      "highPrice": "85000.00",
      "offerCount": "12",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "142"
    }
  },

  // --- HERO SECTION ---
  hero: {
    headline: "Custom Frameless Glass Systems for Unobstructed Views",
    subheadline: "Transform your home or commercial space with seamless frameless glass stacking doors, patio enclosures, wine cellars, and balustrades that deliver 100% panoramic views.",
    badgeText: "Toughened Safety Glass & Grade 316 Stainless Steel Certified",
    primaryCtaText: "Get a Free Instant Quote",
    secondaryCtaText: "Explore Frameless Options"
  },

  // --- OVERVIEW / VALUE PROPOSITION ---
  overview: {
    heading: "Pure Architectural Elegance Without Bulky Frame Lines",
    paragraphs: [
      "Traditional aluminium frames provide strong support, but vertical metal profiles can block scenic mountain, garden, or ocean views and disrupt open-plan living spaces.",
      "Our frameless glass systems utilize extra-thick, heat-treated toughened safety glass held securely by slim top and bottom aluminium guide channels and heavy-duty stainless-steel fittings. This gives you a crystal-clear, continuous glass wall that feels light, open, and luxurious.",
      "Whether you are enclosing a patio to create an all-weather entertainment room, fitting a frameless glass balustrade around a balcony deck, or building a modern temperature-controlled wine cellar display, every panel is custom-engineered to withstand heavy wind loads and daily use."
    ],
    keyFeaturesNotice: "All frameless systems use 8mm, 10mm, or 12mm certified toughened safety glass with clear UV-resistant inter-panel weather seals."
  },

  // --- CORE BENEFITS (WHY CHOOSE FRAMELESS GLASS) ---
  benefits: {
    title: "Why Homeowners & Architects Choose Frameless Glass",
    items: [
      {
        icon: "Eye",
        title: "100% Unobstructed Views",
        description: "Eliminates vertical metal frames completely, preserving your garden, pool, or mountain backdrop."
      },
      {
        icon: "ShieldCheck",
        title: "Heavy-Duty Toughened Safety Glass",
        description: "Engineered with thick 10mm or 12mm safety glass that is up to five times stronger than standard float glass."
      },
      {
        icon: "Wind",
        title: "All-Weather Protection",
        description: "Clear inter-panel weather seals prevent wind, cold air, rain, and dust from entering enclosed patio spaces."
      },
      {
        icon: "Maximize2",
        title: "Folds Away Completely",
        description: "Frameless stacking doors glide along tracks and fold away neatly to open up 90% to 100% of your doorway span."
      },
      {
        icon: "Sparkles",
        title: "Flush Floor Threshold Options",
        description: "Bottom channels can be recessed flush into tile or decking, creating a seamless, step-free floor transition."
      },
      {
        icon: "Wrench",
        title: "Rust-Proof Marine Hardware",
        description: "Fitted with Grade 316 stainless-steel guides, locks, and handles that will never rust or corrode in coastal air."
      }
    ]
  },

  // --- PRODUCT TYPES / STYLES ---
  productTypes: {
    title: "Choose the Perfect Frameless Glass Solution",
    description: "Discover our range of custom frameless applications engineered for residential and commercial properties.",
    items: [
      {
        name: "Frameless Glass Stacking Doors & Enclosures",
        tagline: "Individual glass panels that slide and fold neatly to the side",
        description: "Panels slide independently along top and bottom tracks, pivoting 90 degrees at the end to stack neatly out of the way.",
        idealFor: "Patio enclosures, stoeps, balconies, and indoor room dividers."
      },
      {
        name: "Frameless Glass Balustrades",
        tagline: "Unbroken glass barriers for balconies and staircases",
        description: "Thick glass panels mounted into continuous floor channels or secured with stainless-steel spigots for pure panoramic views.",
        idealFor: "Elevated balconies, poolside safety barriers, and open staircase voids."
      },
      {
        name: "Frameless Glass Wine Cellars & Displays",
        tagline: "Showcase wine collections in climate-controlled glass rooms",
        description: "Floor-to-ceiling clear glass walls with magnetic door seals designed to maintain internal temperature and humidity controls.",
        idealFor: "Luxury home wine cellars, restaurant displays, and tasting rooms."
      },
      {
        name: "Internal Frameless Glass Partitions & Doors",
        tagline: "Sleek acoustic room dividers for modern interiors",
        description: "Frameless glass walls and swing/sliding doors fitted with patch fittings or hydraulic floor springs for quiet room divisions.",
        idealFor: "Executive offices, boardroom walls, en-suite bathroom dividers, and home studies."
      }
    ]
  },

  // --- GLASS & HARDWARE SPECIFICATIONS ---
  glazingOptions: {
    title: "Safety Glass & Hardware Specifications",
    description: "Frameless systems rely entirely on the strength of the glass and precision hardware components.",
    options: [
      {
        name: "10mm to 12mm Toughened Safety Glass (EN 12150 / SANS certified)",
        description: "Heat-treated glass that withstands high wind pressure, heavy physical impacts, and sudden thermal changes."
      },
      {
        name: "Grade 316 Marine-Grade Stainless Steel Hardware",
        description: "Heavy-duty rollers, patch fittings, floor pivots, and lock sets that offer maximum corrosion resistance near the ocean."
      },
      {
        name: "Clear UV-Resistant H-Gasket & Magnetic Seals",
        description: "Clear poly-carbonate joint strips that snap onto glass edges to form a tight wind and water barrier when doors are closed."
      },
      {
        name: "Low-Iron Extra Clear Opti-White Glass",
        description: "Premium glass that removes the natural green tint of standard glass, producing crystal-clear transparency."
      }
    ]
  },

  // --- TECHNICAL SPECIFICATIONS & COMPLIANCE ---
  specifications: {
    title: "Technical Specifications & Hardware",
    items: [
      { label: "Glass Thickness", value: "8mm, 10mm, or 12mm Toughened Safety Glass (SANS 10400-N certified)" },
      { label: "Track Extrusions", value: "Heavy-duty structural aluminium top and bottom guide channels" },
      { label: "Finishes", value: "Matte Black, Anodized Silver, Polished Chrome, Brushed Stainless Steel, Bronze" },
      { label: "Locking Systems", value: "Stainless-steel floor deadbolts, patch locks, and child-proof internal latches" },
      { label: "Max Panel Height", value: "Up to 3000mm high (Engineered wind-load profile dependent)" },
      { label: "Max Panel Width", value: "Standard 650mm to 850mm width per glass sash" },
      { label: "Safety Standards", value: "100% compliant with SANS 10160 (Wind Loads) and SANS 10137 (Glazing) codes" }
    ]
  },

  // --- INSTALLATION PROCESS ---
  installationProcess: {
    title: "Our Simple 4-Step Installation Process",
    steps: [
      {
        stepNumber: "01",
        title: "Onsite Measurement & Structural Survey",
        description: "We inspect top lintels for load-bearing capacity, check floor levelness accurately, and take laser site measurements."
      },
      {
        stepNumber: "02",
        title: "Precision Glass Cutting & Heat Toughening",
        description: "Glass panels are custom-cut, edge-polished, drilled for lock fittings, and heat-toughened in our factory."
      },
      {
        stepNumber: "03",
        title: "Clean & Precise Onsite Assembly",
        description: "Our experienced installation team anchors top and bottom guide tracks, fits glass panels level, aligns seals, and sets locks."
      },
      {
        stepNumber: "04",
        title: "Testing & Handover",
        description: "We test panel sliding, pivoting, and locking alignment across the full span, clean all glass surfaces, and issue your safety certificate."
      }
    ]
  },

  // --- CUSTOMER REVIEWS & TESTIMONIALS ---
  reviews: [
    {
      authorName: "Ruan D.",
      location: "Homeowner",
      rating: 5,
      date: "2026-03-02",
      comment: "Enclosing our stoep with frameless stacking glass was the best decision. We can sit outside during cold winter days with unbroken garden views, and it glides smoothly."
    },
    {
      authorName: "Tessa M.",
      location: "Architect",
      rating: 5,
      date: "2026-01-19",
      comment: "We specified frameless glass balustrades and a custom wine cellar enclosure for a luxury home. The hardware quality, precision alignment, and site work were top class."
    },
    {
      authorName: "Gareth S.",
      location: "Restaurant Owner",
      rating: 5,
      date: "2025-11-24",
      comment: "Installed frameless glass stacking walls on our sea-facing dining deck. Keeps wind out on stormy days without spoiling the view for our guests."
    }
  ],

  // --- FREQUENTLY ASKED QUESTIONS (SEO FAQ SCHEMA READY) ---
  faqs: [
    {
      question: "Are frameless glass stacking systems completely waterproof during heavy rain?",
      answer: "Yes. Clear, UV-resistant plastic weather seals snap between every glass panel. When closed and locked, these seals compress together to block out driving rain, wind drafts, and dust."
    },
    {
      question: "Can bottom tracks be installed level with my interior tile or outdoor decking?",
      answer: "Yes. We offer flush-track options where the bottom aluminium guide channel is recessed into the floor, creating a completely flat transition with zero tripping hazard."
    },
    {
      question: "Is frameless glass strong enough to handle strong coastal wind?",
      answer: "Yes. We use heavy-duty 10mm or 12mm toughened safety glass that is heat-treated to withstand high wind pressure and direct physical impacts without flexing or breaking."
    },
    {
      question: "How do frameless glass stacking doors open and stack?",
      answer: "The primary door panel opens inward or outward like a standard door. The remaining panels then slide along the top and bottom tracks toward the main panel, pivoting 90 degrees to stack neatly against the wall."
    },
    {
      question: "Can frameless glass doors be locked securely?",
      answer: "Yes. Frameless glass doors feature internal floor and ceiling deadbolts, key-operated patch locks, and child-safety latches constructed from heavy-duty stainless steel."
    },
    {
      question: "How do I clean frameless glass stacking panels?",
      answer: "Because every panel pivots inward as it stacks, you can easily clean both the inside and outside glass surfaces while standing comfortably inside your room."
    }
  ]
};

export const aluminiumGarageDoors = {
  id: "srv-aluminium-garage-doors",
  slug: "aluminium-garage-doors",
  fullPageUrl: "https://example.com/services/aluminium-garage-doors",

  // --- SEO & META TAGS ---
  seo: {
    titleTag: "Aluminium Garage Doors | Sectional, Glass & Automated Doors",
    metaDescription: "Custom aluminium garage doors, sectional slatted panels, and full-view glass garage doors. Rust-proof, automated, high-security, and low maintenance.",
    keywords: [
      "aluminium garage doors",
      "sectional aluminium garage doors",
      "glass aluminium garage doors",
      "automated garage doors",
      "custom garage doors",
      "double aluminium garage doors",
      "single aluminium garage doors",
      "rust proof garage doors",
      "SANS compliant garage doors"
    ],
    canonicalUrl: "https://example.com/services/aluminium-garage-doors",
    openGraphImage: "https://example.com/images/og/aluminium-garage-doors-hero.jpg"
  },

  // --- STRUCTURED DATA (SCHEMA.ORG JSON-LD) ---
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Custom Aluminium Garage Doors",
    "description": "Premium automated aluminium sectional and glass garage doors engineered for high security, smooth operation, and weather resistance.",
    "brand": {
      "@type": "Brand",
      "name": "Aluminium Architectural Systems"
    },
    "category": "Home & Garden > Building Materials > Doors > Garage Doors",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "ZAR",
      "price": "12500.00",
      "highPrice": "65000.00",
      "offerCount": "10",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "135"
    }
  },

  // --- HERO SECTION ---
  hero: {
    headline: "Custom Aluminium Garage Doors & Smart Automation",
    subheadline: "Upgrade your home's curb appeal with strong, rust-proof, and whisper-quiet aluminium garage doors. Available in slatted sectional panels and modern full-view glass designs.",
    badgeText: "100% Rust-Proof & Smart Automation Certified",
    primaryCtaText: "Get a Free Instant Quote",
    secondaryCtaText: "Explore Garage Door Styles"
  },

  // --- OVERVIEW / VALUE PROPOSITION ---
  overview: {
    heading: "Sleek Architectural Style Built for Modern Home Security",
    paragraphs: [
      "Your garage door makes up a large portion of your home's front view, so choosing the right design instantly boosts your property's overall curb appeal and value.",
      "Traditional timber garage doors rot, warp, and require constant painting, while steel doors rust quickly near coastal areas and place heavy wear on electric motor drives. Our custom aluminium garage doors provide a lightweight, rust-free alternative that operates smoothly for decades.",
      "Engineered with thick-walled aluminium extrusions, heavy-duty torsion springs, and smart automation systems with battery backup, our garage doors combine high security with whisper-quiet movement and weatherproofing."
    ],
    keyFeaturesNotice: "All garage doors include heavy-duty tracks, safety auto-reverse sensors, battery backup automation, and weather-seal bottom rubber gaskets."
  },

  // --- CORE BENEFITS (WHY CHOOSE ALUMINIUM GARAGE DOORS) ---
  benefits: {
    title: "Why Homeowners Prefer Our Aluminium Garage Doors",
    items: [
      {
        icon: "ShieldCheck",
        title: "100% Rust-Proof & Durable",
        description: "Constructed from architectural aluminium that will never rust, warp, swell, or peel, making it ideal for coastal and high-humidity areas."
      },
      {
        icon: "Feather",
        title: "Lightweight & Smooth Motion",
        description: "Lighter than timber or heavy steel, putting significantly less strain on electric motor drives and extending hardware life."
      },
      {
        icon: "Lock",
        title: "High Security & Auto-Locking",
        description: "Reinforced section joints, heavy-duty side tracks, and automatic motor lockouts protect your garage and home against forced entry."
      },
      {
        icon: "BatteryCharging",
        title: "Smart Automation with Battery Backup",
        description: "Equipped with reliable motor drives and backup batteries so your door opens effortlessly even during power outages."
      },
      {
        icon: "Wrench",
        title: "Zero Ongoing Painting Maintenance",
        description: "Finished with UV-resistant powder coating that requires no sanding, painting, or varnishing—just a quick wash with soapy water."
      },
      {
        icon: "Paintbrush",
        title: "Custom Colors & Finishes",
        description: "Available in powder-coated finishes including Matte Black, Charcoal Grey, Pure White, Bronze, or natural woodgrain FX."
      }
    ]
  },

  // --- PRODUCT TYPES / STYLES ---
  productTypes: {
    title: "Choose the Ideal Garage Door Style for Your Home",
    description: "From modern horizontal slatted panels to luxurious glass-enclosed showroom designs, we manufacture single, double, and custom sizes.",
    items: [
      {
        name: "Horizontal Slatted Aluminium Sectional Doors",
        tagline: "The modern architectural choice for elegant homes",
        description: "Interlocking slatted aluminium panels that lift vertically and curve neatly onto overhead tracks along the garage ceiling.",
        idealFor: "Modern residential homes, luxury estates, and replacement of old timber or steel doors."
      },
      {
        name: "Full-View Glass & Aluminium Doors",
        tagline: "Showroom-style glass panels for high-end modern facades",
        description: "Strong aluminium grid frames fitted with safety glass panes (clear, frosted, or tinted) to flood your garage space with natural sunlight.",
        idealFor: "Contemporary luxury homes, car enthusiast garages, and modern architectural builds."
      },
      {
        name: "Insulated Aluminium Sectional Doors",
        tagline: "Thermal and acoustic protection for home workshops",
        description: "Double-walled aluminium panels packed with dense insulation material to keep indoor garage temperatures stable and block outside noise.",
        idealFor: "Garages connected to main living areas, home gyms, and internal workshops."
      },
      {
        name: "Custom Sized Double & Single Doors",
        tagline: "Tailor-made dimensions for non-standard openings",
        description: "Custom-manufactured door widths and heights engineered to fit extra-tall SUV openings, double carports, or narrow arched entrances.",
        idealFor: "High-clearance vehicles, boats, caravans, and unique building renovations."
      }
    ]
  },

  // --- GLASS & FINISH SPECIFICATIONS ---
  glazingOptions: {
    title: "Panel Finishes & Safety Glass Specifications",
    description: "Select the ideal panel finish or safety glass configuration to match your building facade.",
    options: [
      {
        name: "Qualicoat Marine-Grade Powder Coating",
        description: "A 60 to 80-micron thick baked finish that resists UV fading, chipping, scratching, and coastal salt-air corrosion."
      },
      {
        name: "6.38mm Laminated Safety Glass (For Glass Doors)",
        description: "Two glass sheets bonded with a vinyl interlayer. If impacted, the glass stays glued together to prevent injury and deter break-ins."
      },
      {
        name: "Toughened Safety Glass (Frosted or Tinted)",
        description: "Heat-treated safety glass that is up to five times stronger than standard glass, offering complete privacy while letting light in."
      },
      {
        name: "Sublimated Woodgrain FX Finish",
        description: "Combines the warm aesthetic of real timber with the zero-maintenance, rust-proof benefits of structural aluminium."
      }
    ]
  },

  // --- TECHNICAL SPECIFICATIONS & COMPLIANCE ---
  specifications: {
    title: "Technical Specifications & Hardware",
    items: [
      { label: "Frame & Panel Material", value: "Heavy-duty structural architectural aluminium alloy (6063-T6)" },
      { label: "Track Hardware", value: "Galvanized or stainless-steel side tracks with nylon-bearing rollers" },
      { label: "Spring System", value: "High-cycle oil-tempered counter-balance torsion springs" },
      { label: "Automation Motor", value: "24V DC smart belt/chain drive motor with dual remotes & battery backup" },
      { label: "Weather Sealing", value: "Heavy-duty bottom rubber seal and perimeter side weatherstripping" },
      { label: "Standard Colors", value: "Matte Black, Charcoal Grey, Bronze, Pure White, Woodgrain FX" },
      { label: "Safety Features", value: "Auto-reverse safety obstacle sensing and manual emergency release cable" }
    ]
  },

  // --- INSTALLATION PROCESS ---
  installationProcess: {
    title: "Our Simple 4-Step Installation Process",
    steps: [
      {
        stepNumber: "01",
        title: "Onsite Opening Assessment & Measurement",
        description: "We measure your garage opening width, height, side-room clearances, and headroom for track and motor positioning."
      },
      {
        stepNumber: "02",
        title: "Precision Factory Manufacturing",
        description: "Aluminium panels, tracks, and hardware are custom-machined and assembled offsite in our factory for exact sizing."
      },
      {
        stepNumber: "03",
        title: "Clean Onsite Fitting & Motor Setup",
        description: "Our certified installation team fits track channels, mounts section panels, tension torsion springs, and sets up automation motors."
      },
      {
        stepNumber: "04",
        title: "Safety Testing & Handover",
        description: "We test auto-reverse safety sensors, balance spring tension, program remote controls, and instruct you on manual release operation."
      }
    ]
  },

  // --- CUSTOMER REVIEWS & TESTIMONIALS ---
  reviews: [
    {
      authorName: "Riaan S.",
      location: "Homeowner",
      rating: 5,
      date: "2026-03-01",
      comment: "We replaced our heavy, rusted steel double garage door with a charcoal slatted aluminium door. The motor runs so quietly now, and it looks incredible from the street."
    },
    {
      authorName: "Chantal M.",
      location: "Home Owner",
      rating: 5,
      date: "2026-01-22",
      comment: "The frosted glass and matte black aluminium garage door completely modernized our front facade. Great team, installed in one day with zero hassle."
    },
    {
      authorName: "Thabo B.",
      location: "Building Renovator",
      rating: 5,
      date: "2025-11-28",
      comment: "High quality panels and precise track alignment. The battery backup motor works seamlessly during power cuts. Highly recommended."
    }
  ],

  // --- FREQUENTLY ASKED QUESTIONS (SEO FAQ SCHEMA READY) ---
  faqs: [
    {
      question: "Why are aluminium garage doors better than steel or wooden garage doors?",
      answer: "Aluminium garage doors never rust, warp, swell, or rot like steel or wood. They are significantly lighter, putting much less strain on the automation motor and torsion springs, and require zero painting maintenance."
    },
    {
      question: "Will the garage door open during a power outage or load shedding?",
      answer: "Yes. All our automated garage door motor systems come standard with a built-in 24V battery backup power system, allowing you to open and close your door during power failures."
    },
    {
      question: "Is glass in full-view aluminium garage doors safe and private?",
      answer: "Yes. Full-view glass doors use certified safety glass (laminated or toughened). You can choose frosted or solar-tinted glass to enjoy natural daylight inside while keeping outsiders from seeing inside your garage."
    },
    {
      question: "How do I maintain my aluminium garage door?",
      answer: "Aluminium garage doors require minimal maintenance. Wash the powder-coated panels with warm, soapy water twice a year, and apply a light silicone spray to the side tracks and rollers annually."
    },
    {
      question: "Can an existing garage door opening be converted to a custom size?",
      answer: "Yes. We custom-manufacture all our garage doors to fit non-standard widths and heights, making them ideal for home renovations and high-clearance 4x4 vehicles."
    },
    {
      question: "What safety mechanisms protect against the door crushing objects?",
      answer: "Our automated motors feature electronic obstacle-sensing technology that automatically stops and reverses the door if it touches an object. Additional infrared safety beam sensors are also available."
    }
  ]
};

export const mirrorsAndCustomGlass = {
  id: "srv-mirrors-custom-glass",
  slug: "mirrors-custom-glass",
  fullPageUrl: "https://example.com/services/mirrors-custom-glass",

  // --- SEO & META TAGS ---
  seo: {
    titleTag: "Custom Mirrors & Architectural Glass | Cut to Size & Beveled",
    metaDescription: "Custom framed and frameless mirrors, LED bathroom mirrors, colored glass splashbacks, tabletop glass, and specialized architectural glass cut to exact size.",
    keywords: [
      "custom mirrors",
      "cut to size mirrors",
      "frameless bathroom mirrors",
      "LED backlit mirrors",
      "glass splashbacks",
      "glass tabletops",
      "beveled edge mirrors",
      "tinted decorative mirrors",
      "SANS compliant safety glass"
    ],
    canonicalUrl: "https://example.com/services/mirrors-custom-glass",
    openGraphImage: "https://example.com/images/og/mirrors-custom-glass-hero.jpg"
  },

  // --- STRUCTURED DATA (SCHEMA.ORG JSON-LD) ---
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Custom Mirrors and Architectural Glass",
    "description": "High-definition custom mirrors, LED bathroom mirrors, glass splashbacks, and custom-cut architectural safety glass for homes and commercial interiors.",
    "brand": {
      "@type": "Brand",
      "name": "Aluminium Architectural Systems"
    },
    "category": "Home & Garden > Decor > Mirrors",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "ZAR",
      "price": "450.00",
      "highPrice": "22000.00",
      "offerCount": "12",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "119"
    }
  },

  // --- HERO SECTION ---
  hero: {
    headline: "Custom Mirrors & Architectural Glass Cut to Size",
    subheadline: "Elevate your interior spaces with high-definition custom mirrors, LED backlit bathroom mirrors, vibrant kitchen glass splashbacks, and precision tabletop glass.",
    badgeText: "High-Definition Moisture-Proof & Safety Backed Certified",
    primaryCtaText: "Get a Free Instant Quote",
    secondaryCtaText: "Explore Mirror & Glass Options"
  },

  // --- OVERVIEW / VALUE PROPOSITION ---
  overview: {
    heading: "Precision-Cut Glass & Mirror Solutions for Modern Interiors",
    paragraphs: [
      "Mirrors and custom glass features do more than just reflect images—they open up compact rooms, reflect natural light into dark hallways, and add a luxury finish to bathrooms, kitchens, and commercial feature walls.",
      "Our custom mirror and glass processing division cuts, polishes, bevels, and drills high-definition glass to your exact millimetre measurements, ensuring a flawless fit around light switches, taps, and wall reveals.",
      "Using copper-free, moisture-resistant silvering that prevents black edge corrosion, along with toughened safety glass options, we supply and fit premium glass products built to withstand humid bathroom environments and daily domestic use."
    ],
    keyFeaturesNotice: "All wall mirrors and custom glass panels feature polished or beveled safety edges, moisture-proof backing, and shatter-resistant safety film options."
  },

  // --- CORE BENEFITS (WHY CHOOSE CUSTOM MIRRORS & GLASS) ---
  benefits: {
    title: "Why Homeowners & Interior Designers Choose Our Custom Glass",
    items: [
      {
        icon: "Sparkles",
        title: "High-Definition Distortion-Free Clarity",
        description: "Crafted from optical-grade float glass with premium silver backing that delivers crisp, clear reflections without wave distortion."
      },
      {
        icon: "ShieldCheck",
        title: "Moisture-Proof Black Edge Protection",
        description: "Copper-free silver backing protects mirrors against humidity oxidation, preventing black edge decay in steaming bathrooms."
      },
      {
        icon: "Maximize2",
        title: "Enhances Space & Sunlight",
        description: "Strategic placement of floor-to-ceiling or wall mirrors doubles the visual size of small rooms and brightens dark interior spaces."
      },
      {
        icon: "Droplets",
        title: "Hygienic & Easy to Clean",
        description: "Seamless glass splashbacks and tabletop covers eliminate dirty tile grout lines, providing a smooth surface that wipes clean easily."
      },
      {
        icon: "Flame",
        title: "Heat-Resistant Toughened Glass",
        description: "Kitchen glass splashbacks are heat-toughened to withstand high temperatures behind gas stoves and electric hobs."
      },
      {
        icon: "Paintbrush",
        title: "Custom Edge Finishes & Tints",
        description: "Choose from flat polished edges, elegant bevels, bronze or grey mirror tints, and custom painted splashback colors."
      }
    ]
  },

  // --- PRODUCT TYPES / STYLES ---
  productTypes: {
    title: "Choose the Perfect Custom Mirror or Glass Product",
    description: "Discover our full range of custom mirror and architectural glass products cut to fit your interior design concept.",
    items: [
      {
        name: "Custom Bathroom Mirrors & LED Backlit Mirrors",
        tagline: "Frameless, bevel-edged, or illuminated touch-sensor mirrors",
        description: "High-definition mirrors cut to fit vanities perfectly, available with built-in LED ambient lighting, touch sensors, and demister pads.",
        idealFor: "Bathroom vanities, en-suite master rooms, powder rooms, and hotel suites."
      },
      {
        name: "Feature Wall & Gym Mirrors",
        tagline: "Large-format wall mirrors for home gyms and living spaces",
        description: "Shatter-backed large glass mirror sheets installed flush against walls to create expansive reflecting feature walls.",
        idealFor: "Home gyms, dance studios, fitness centers, entrance halls, and dining rooms."
      },
      {
        name: "Colored Glass Kitchen & Bathroom Splashbacks",
        tagline: "Sleek, joint-free alternative to traditional wall tiles",
        description: "Toughened 6mm glass painted on the reverse side in any custom color code, providing a seamless, heat-resistant kitchen wall cover.",
        idealFor: "Kitchen walls behind stoves/hobs, bathroom feature walls, and reception counters."
      },
      {
        name: "Glass Tabletops & Furniture Protectors",
        tagline: "Custom-cut safety glass to protect fine wooden furniture",
        description: "Clear, frosted, or tinted safety glass tops custom-shaped with polished edges to shield wooden dining tables and desks from scratches.",
        idealFor: "Dining tables, coffee tables, office desks, boardroom tables, and patio furniture."
      }
    ]
  },

  // --- GLASS & FINISH SPECIFICATIONS ---
  glazingOptions: {
    title: "Glass Types, Tints & Edge Finishing Options",
    description: "Tailor your custom glass or mirror with specialized edge profiles, safety backings, and decorative tints.",
    options: [
      {
        name: "4mm to 6mm Copper-Free High-Definition Mirror Glass",
        description: "Environmentally friendly, corrosion-resistant silver mirror glass engineered for high reflection quality and damp-room longevity."
      },
      {
        name: "Bronze, Grey & Antique Decorative Mirror Tints",
        description: "Stylized tinted mirror glass options that add warm, moody interior accent tones to dining rooms, bars, and hotel lobbies."
      },
      {
        name: "Flat Diamond-Polished & Beveled Edges",
        description: "Precision-ground glass edges available in flat smooth polish or 10mm–35mm decorative angled bevels for an elegant border."
      },
      {
        name: "6mm Toughened Color-Matched Splashback Glass",
        description: "Heat-treated safety glass rear-coated with specialized glass paint matching any custom architectural color scheme."
      }
    ]
  },

  // --- TECHNICAL SPECIFICATIONS & COMPLIANCE ---
  specifications: {
    title: "Technical Specifications & Processing Standards",
    items: [
      { label: "Mirror Thickness", value: "4mm, 5mm, or 6mm High-Definition Silvering (Copper-free)" },
      { label: "Glass Processing", value: "CNC shape cutting, waterjet cutouts for sockets, diamond edge polishing, beveling" },
      { label: "Safety Specifications", value: "Vinyl safety backing film (Class A) to prevent shattering glass fall-out" },
      { label: "Splashback Heat Rating", value: "Toughened to withstand temperature spikes up to 250°C behind cooking hobs" },
      { label: "Mounting Systems", value: "Neutral cure mirror adhesive, concealed wall Z-brackets, or decorative chrome caps" },
      { label: "Tints & Finishes", value: "Silver/Clear, Bronze, Grey, Frosted, and custom painted RAL colors" },
      { label: "Safety Compliance", value: "100% compliant with SANS 1263 impact safety glazing regulations" }
    ]
  },

  // --- INSTALLATION PROCESS ---
  installationProcess: {
    title: "Our Simple 4-Step Custom Process",
    steps: [
      {
        stepNumber: "01",
        title: "Onsite Template & Measurement",
        description: "We visit your property to measure openings, template irregular shapes, and mark positions for electrical plugs and taps."
      },
      {
        stepNumber: "02",
        title: "Precision Factory Cutting & Edging",
        description: "Glass and mirrors are cut using CNC precision machinery, edge-polished, drilled for cutouts, and safety-backed."
      },
      {
        stepNumber: "03",
        title: "Clean Onsite Fitting",
        description: "Our specialist installation team mounts the mirror or splashback level using non-corrosive mirror adhesives or hidden wall brackets."
      },
      {
        stepNumber: "04",
        title: "Polishing & Inspection",
        description: "We seal edges with anti-fungal silicone where required, polish all glass surfaces spotless, and perform a final quality check."
      }
    ]
  },

  // --- CUSTOMER REVIEWS & TESTIMONIALS ---
  reviews: [
    {
      authorName: "Anneri K.",
      location: "Interior Designer",
      rating: 5,
      date: "2026-03-05",
      comment: "We ordered a custom LED backlit bathroom mirror and a charcoal glass kitchen splashback. The cuts around the plug points were exact to the millimeter."
    },
    {
      authorName: "Klaus V.",
      location: "Homeowner",
      rating: 5,
      date: "2026-01-20",
      comment: "The floor-to-ceiling mirror wall installed in our home gym turned out fantastic. Crisp, clear reflection with zero wave distortion."
    },
    {
      authorName: "Sipho D.",
      location: "Home Owner",
      rating: 5,
      date: "2025-11-30",
      comment: "Replaced old chipped bathroom mirrors with bevel-edged mirrors glued flush to the tile. Neat, professional work and clean fitting."
    }
  ],

  // --- FREQUENTLY ASKED QUESTIONS (SEO FAQ SCHEMA READY) ---
  faqs: [
    {
      question: "Why do bathroom mirrors develop black spot corrosion around the edges?",
      answer: "Black spots occur when moisture and bathroom cleaning chemicals oxidize the copper layer in standard cheap mirrors. We use copper-free silvering that resists humidity oxidation, keeping edges clean."
    },
    {
      question: "Can a glass splashback be installed directly behind a gas stove?",
      answer: "Yes. All our kitchen splashbacks use 6mm toughened safety glass that is heat-treated to withstand temperatures up to 250°C without cracking from heat exposure."
    },
    {
      question: "How are large wall mirrors safely attached to bathroom tiles or walls?",
      answer: "We use non-corrosive, neutral-cure mirror adhesives that bond directly to tiles or painted plaster without damaging the silver backing, combined with concealed Z-brackets for heavy mirrors."
    },
    {
      question: "Can holes be drilled into mirrors for light fixtures or electrical sockets?",
      answer: "Yes. All socket cutouts, tap holes, and mounting holes are precision-drilled in our factory using CNC waterjet cutting before the glass or mirror is installed."
    },
    {
      question: "What is safety backed mirror glass?",
      answer: "Safety backed mirrors have a tough vinyl backing film applied to the rear silver surface. If the mirror ever breaks from severe impact, the shattered glass pieces remain stuck to the film rather than falling off."
    },
    {
      question: "How do I clean and care for custom mirrors and glass splashbacks?",
      answer: "Clean with a soft microfiber cloth and a mild glass cleaner or a mixture of warm water and vinegar. Avoid harsh abrasive pads or ammonia-based cleaners along unsealed mirror edges."
    }
  ]
};

function publishServicePage(route: string, content: ServicePageContent): ServicePageContent {
  return {
    ...content,
    fullPageUrl: `${siteUrl}/services/${route}`,
    seo: {
      ...content.seo,
      canonicalUrl: `${siteUrl}/services/${route}`,
      openGraphImage: `${siteUrl}/images/hero_exterior.png`,
    },
  };
}

export const servicePages: Record<string, ServicePageContent> = {
  "windows": publishServicePage("windows", aluminiumWindows),
  "doors": publishServicePage("doors", aluminiumDoors),
  "sliding-stacking": publishServicePage("sliding-stacking", slidingAndStackingDoors),
  "shopfronts": publishServicePage("shopfronts", commercialShopfronts),
  "partitions": publishServicePage("partitions", officePartitions),
  "enclosures": publishServicePage("enclosures", patioAndGlassEnclosures),
  "balustrades": publishServicePage("balustrades", aluminiumBalustrades),
  "showers": publishServicePage("showers", showerDoorsAndEnclosures),
  "custom": publishServicePage("custom", customAluminiumFabrication),
  "repairs": publishServicePage("repairs", repairsAndReplacement),
  "burglar-bars": publishServicePage("burglar-bars", burglarBarsAndSecurityScreens),
  "trellis-doors": publishServicePage("trellis-doors", aluminiumTrellisSecurityDoors),
  "gutters": publishServicePage("gutters", aluminiumGuttersAndFascias),
  "fly-screens": publishServicePage("fly-screens", fliesAndInsectScreens),
  "pergolas": publishServicePage("pergolas", aluminiumPergolasAndCarports),
  "skylights": publishServicePage("skylights", skylightsAndRoofWindows),
  "frameless-glass": publishServicePage("frameless-glass", framelessGlassSystems),
  "garage-doors": publishServicePage("garage-doors", aluminiumGarageDoors),
  "mirrors-glass": publishServicePage("mirrors-glass", mirrorsAndCustomGlass),
};

