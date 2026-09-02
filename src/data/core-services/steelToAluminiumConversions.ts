import { ServiceObject } from '../../types/service';

export const steelToAluminiumConversionsService: ServiceObject = {
  id: 'srv-conv-01',
  slug: 'steel-to-aluminium-conversions',
  serviceName: 'Steel to Aluminium Conversions',
  tagline: 'Replace Old Steel & Wooden Windows with Modern Aluminium Without Damaging Wall Plaster',
  category: 'Window & Door Conversions',
  pricingGuide: {
    estimatedStartingPrice: 'R1,850',
    priceUnit: 'per window opening converted',
    priceFactors: [
      'Window opening dimensions and panel configuration',
      'Glass specification (6.38mm laminated vs Double Glazed Low-E)',
      'Frame finish (VP7049 Matte Charcoal, Black, White, Bronze)',
      'Removal and eco-friendly disposal of old steel or timber frames'
    ]
  },
  hero: {
    badge: 'Specialized Conversion & Plaster-Safe Installation',
    headline: 'Steel to Aluminium Conversions',
    subheadline: 'Upgrade outdated rusted steel and rotting wooden window frames to custom-built, maintenance-free aluminium without breaking interior wall tiles or plaster.',
    primaryCtaText: 'Request Free Conversion Quote',
    primaryCtaLink: '#quote',
    secondaryCtaText: 'WhatsApp a Specialist',
    secondaryCtaLink: '#whatsapp',
    heroImage: '/images/services/steel-to-aluminium-hero.webp'
  },
  overview: {
    heading: 'Professional Steel to Aluminium Window Conversions',
    paragraphs: [
      'Are you tired of sanding, scraping, and repainting rusted steel window frames or swollen wooden windows every winter? Our specialized steel-to-aluminium conversion process replaces old frames with modern, airtight architectural aluminium without damaging your interior wall plaster, wallpaper, or bathroom tiles.',
      'Our technicians neatly cut old steel frames from the inside brick reveal, anchor new custom-sized aluminium frames into the existing structural opening, and seal every joint with industrial-grade perimeter weatherproofing silicone. The result is an instant aesthetic transformation, smooth sliding operation, and superior thermal insulation.'
    ],
    specifications: [
      { label: 'Profile Material', value: 'Extruded Architectural Aluminium (6063-T6)' },
      { label: 'Conversion Method', value: 'Plaster-Safe Cutout & Reveal Anchoring' },
      { label: 'Safety Glazing', value: '6.38mm Laminated Safety Glass / Double Glazed' },
      { label: 'Standard Finishes', value: 'Matte Charcoal, Matte Black, Pure White, Bronze' },
      { label: 'Building Compliance', value: '100% SANS 10400-N Safety Standard' }
    ]
  },
  features: [
    {
      id: 'f-conv-1',
      title: 'Zero Wall & Plaster Damage',
      description: 'Precision cutout technique preserves interior tiles, bathroom finishes, and exterior plasterwork.',
      icon: 'shield-checkmark-outline'
    },
    {
      id: 'f-conv-2',
      title: 'Zero Maintenance',
      description: 'Powder-coated aluminium never rusts, rots, warps, or requires annual sanding and painting.',
      icon: 'construct-outline'
    },
    {
      id: 'f-conv-3',
      title: 'Thermal & Acoustic Insulation',
      description: 'Airtight rubber EPDM seals eliminate winter drafts and reduce external street noise.',
      icon: 'volume-mute-outline'
    },
    {
      id: 'f-conv-4',
      title: 'Enhanced Home Value',
      description: 'Modern slimline frames dramatically elevate property curb appeal and market resale value.',
      icon: 'trending-up-outline'
    }
  ],
  process: {
    sectionHeading: 'Our 4-Step Window Conversion Process',
    subheading: 'Clean, fast, and professional turnaround',
    steps: [
      {
        stepNumber: 1,
        title: 'On-Site Precision Measuring',
        description: 'Our mobile van visits your property to measure every existing steel opening to the exact millimeter.'
      },
      {
        stepNumber: 2,
        title: 'Custom Workshop Fabrication',
        description: 'We build your custom aluminium frames in our central workshop with SANS 10400 safety glazing.'
      },
      {
        stepNumber: 3,
        title: 'Neat Steel Frame Removal',
        description: 'Technicians carefully unfasten and cut out old steel frames without chipping surrounding wall plaster.'
      },
      {
        stepNumber: 4,
        title: 'Anchoring & Waterproof Sealing',
        description: 'New aluminium frames are securely anchored, leveled, and sealed with high-grade silicone.'
      }
    ]
  },
  faqs: [],
  relatedServices: [],
  seo: {
    titleTag: 'Steel to Aluminium Window Conversions | Plaster-Safe Fitting | Free Quotes',
    metaDescription: 'Convert old rusted steel windows to custom modern aluminium without damaging wall plaster or tiles. Free on-site measuring and guaranteed installation.',
    keywords: [
      'convert steel windows to aluminium',
      'steel to aluminium window conversions',
      'replace wooden window frames with aluminium',
      'window replacement without plaster damage',
      'steel to aluminium conversion cost south africa'
    ],
    canonicalUrl: '/services/steel-to-aluminium-conversions',
    openGraphImage: '/images/services/steel-to-aluminium-hero.webp'
  },
  structuredDataJsonLd: {}
};
