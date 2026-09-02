import { ServiceObject } from '../../types/service';

export const glassPatioEnclosuresService: ServiceObject = {
  id: 'srv-enc-01',
  slug: 'glass-patio-enclosures',
  serviceName: 'Glass Patio Enclosures',
  tagline: 'Custom Sunrooms, Glass Veranda Enclosures & Frameless Stacking Patio Curtains',
  category: 'Patio Enclosures & Sunrooms',
  pricingGuide: {
    estimatedStartingPrice: 'R3,800',
    priceUnit: 'per m² custom glazed enclosure',
    priceFactors: [
      'Total square meterage and structural span',
      'System type (Frameless Glass Curtains vs Framed Folding Stacking Doors)',
      'Glass specification (6.38mm Laminated vs Double Glazed Low-E Solar Shield)',
      'Roof structure integration (Glass Skylight Roof vs Solid Insulated Panel)'
    ]
  },
  hero: {
    badge: 'Custom Sunroom & Patio Enclosure Specialists',
    headline: 'Glass Patio Enclosures',
    subheadline: 'Transform open verandas, stoeps, and braai patios into all-weather luxury living spaces with custom aluminium folding doors, glass roof sunrooms, and frameless patio curtains.',
    primaryCtaText: 'Request Enclosure Quote',
    primaryCtaLink: '#quote',
    secondaryCtaText: 'Chat on WhatsApp',
    secondaryCtaLink: '#whatsapp',
    heroImage: '/images/services/glass-patio-enclosures-hero.webp'
  },
  overview: {
    heading: 'All-Weather Glass Patio Enclosures & Sunrooms',
    paragraphs: [
      'Make the most of your outdoor entertainment space 365 days a year with a custom-engineered glass patio enclosure. Whether you want to enclose a covered braai veranda with sliding stacking glass doors or build a freestanding architectural glass sunroom, we design and manufacture bespoke solutions that seamlessly connect your home to the garden.',
      'Our enclosures feature heavy-duty extruded aluminium frames, certified safety glass, and smooth multi-track sliding or folding systems that slide completely out of the way when the weather is warm and seal airtight against cold winter winds, dust, and heavy Highveld thunderstorms.'
    ],
    specifications: [
      { label: 'System Options', value: 'Frameless Glass Stacking / Heavy-Duty Vista Fold' },
      { label: 'Roof Glazing', value: 'Low-E Solar Deflection Glass / Polycarbonate' },
      { label: 'Weatherseals', value: 'Double EPDM Fin-Seals & Integrated Drain Sills' },
      { label: 'Track Finishes', value: 'Matte Charcoal, Black, White, Bronze, Silver' },
      { label: 'Load Compliance', value: 'SANS 10160 Wind & Structural Barrier Load Certified' }
    ]
  },
  features: [
    {
      id: 'f-enc-1',
      title: 'Year-Round Entertaining',
      description: 'Dine and braai outdoors in total comfort regardless of sudden rain, wind, or winter cold.',
      icon: 'sunny-outline'
    },
    {
      id: 'f-enc-2',
      title: 'Unobstructed Panoramic Views',
      description: 'Slimline and frameless glass designs keep your garden, pool, and sunset views 100% visible.',
      icon: 'eye-outline'
    },
    {
      id: 'f-enc-3',
      title: 'Added Living Space & Value',
      description: 'Adds valuable indoor floor square meterage and significantly increases residential property value.',
      icon: 'home-outline'
    },
    {
      id: 'f-enc-4',
      title: 'Solar & Thermal Control',
      description: 'High-performance Low-E solar glass keeps your enclosed patio cool in summer and warm in winter.',
      icon: 'thermometer-outline'
    }
  ],
  process: {
    sectionHeading: 'Our Enclosure Design & Installation Process',
    subheading: 'Engineered for seamless architectural integration',
    steps: [
      {
        stepNumber: 1,
        title: 'On-Site Architectural Consultation',
        description: 'We assess your patio structure, floor levels, roof lines, and drainage requirements.'
      },
      {
        stepNumber: 2,
        title: '3D CAD & Itemized Quotation',
        description: 'We generate exact panel configurations, glass specifications, and transparent cost estimates.'
      },
      {
        stepNumber: 3,
        title: 'Custom Workshop Fabrication',
        description: 'Every frame, track, and glass panel is precision-fabricated to exact structural tolerances.'
      },
      {
        stepNumber: 4,
        title: 'Professional On-Site Installation',
        description: 'Our certified glazing team installs tracks, fits panels, and seals perimeter flashings.'
      }
    ]
  },
  faqs: [],
  relatedServices: [],
  seo: {
    titleTag: 'Glass Patio Enclosures & Sunroom Builders | Custom Sizing | Free Quotes',
    metaDescription: 'Transform your patio or veranda into an all-weather luxury sunroom with custom glass enclosures and folding stacking doors. Free on-site measuring.',
    keywords: [
      'glass patio enclosures near me',
      'sunroom builders near me',
      'sunroom suppliers gauteng',
      'frameless glass stacking curtains for balcony',
      'patio glass roof veranda enclosures'
    ],
    canonicalUrl: '/services/glass-patio-enclosures',
    openGraphImage: '/images/services/glass-patio-enclosures-hero.webp'
  },
  structuredDataJsonLd: {}
};
