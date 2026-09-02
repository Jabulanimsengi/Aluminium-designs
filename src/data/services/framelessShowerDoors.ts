import { ServiceObject } from '../../types/service';

export const framelessShowerDoorsService: ServiceObject = {
  id: 'srv-shw-01',
  slug: 'frameless-shower-doors',
  serviceName: 'Frameless Shower Doors',
  tagline: 'Custom Frameless Glass Shower Enclosures, Fluted Panels & Made-to-Order Mirrors',
  category: 'Bathroom Glass & Mirrors',
  pricingGuide: {
    estimatedStartingPrice: 'R4,200',
    priceUnit: 'per custom fitted shower enclosure',
    priceFactors: [
      'Enclosure configuration (Single Walk-in Panel, Corner Entry, Hinged Door)',
      'Glass type (10mm Toughened Clear, Fluted / Reeded, Frosted Privacy)',
      'Hardware finish (Matte Black, Brushed Brass/Gold, Chrome, Brushed Stainless)',
      'Custom wall cutouts and sloped ceiling reveals'
    ]
  },
  hero: {
    badge: 'Luxury Bathroom Glass & Shower Specialists',
    headline: 'Frameless Shower Doors',
    subheadline: 'Elevate your bathroom with custom-manufactured 10mm–12mm toughened frameless glass shower enclosures, contemporary fluted glass walk-ins, and precision-cut mirrors.',
    primaryCtaText: 'Request Shower Quote',
    primaryCtaLink: '#quote',
    secondaryCtaText: 'WhatsApp a Glazier',
    secondaryCtaLink: '#whatsapp',
    heroImage: '/images/services/frameless-shower-doors-hero.webp'
  },
  overview: {
    heading: 'Bespoke Frameless Glass Shower Doors & Bathroom Glazing',
    paragraphs: [
      'Upgrade your bathroom into a luxury five-star spa with our custom-engineered frameless glass shower doors and enclosures. Manufactured from heavy-duty 10mm or 12mm certified toughened safety glass with polished diamond-ground edges, our showers eliminate bulky aluminium frames and visual clutter to create a bright, spacious aesthetic.',
      'We supply and install single walk-in return panels, inline hinged shower doors, corner quadrant enclosures, and on-trend fluted / reeded architectural textured glass. We also manufacture custom-cut polished and LED backlit bathroom and gym mirrors custom-sized to your wall specifications.'
    ],
    specifications: [
      { label: 'Glass Specification', value: '10mm / 12mm Toughened Safety Glass (SANS 1263-1)' },
      { label: 'Glass Styles', value: 'Ultra-Clear Crystal, Fluted/Reeded, Frosted Privacy' },
      { label: 'Hardware Material', value: 'Solid Solid Brass & Marine Grade 304 Stainless Steel' },
      { label: 'Hardware Finishes', value: 'Matte Black, Brushed Brass, Rose Gold, Chrome' },
      { label: 'Seals & Thresholds', value: 'Anti-Mold Magnetic PVC Water Seals & Deflectors' }
    ]
  },
  features: [
    {
      id: 'f-shw-1',
      title: 'Seamless Spa Luxury',
      description: 'Ultra-clean minimalist glass design eliminates bulky frames and opens up bathroom spaces.',
      icon: 'sparkles-outline'
    },
    {
      id: 'f-shw-2',
      title: 'Easy-Clean Nano Coating',
      description: 'Optional hydrophobic treatment repels water drops, soap scum, and hard-water lime stains.',
      icon: 'water-outline'
    },
    {
      id: 'f-shw-3',
      title: 'Designer Hardware Finishes',
      description: 'Choose from Matte Black, Brushed Gold, Brushed Nickel, and Mirror Polished Chrome.',
      icon: 'color-palette-outline'
    },
    {
      id: 'f-shw-4',
      title: 'Precision Sizing for Any Layout',
      description: 'Custom cut for sloped ceiling lofts, hob steps, bathtub returns, and angled walls.',
      icon: 'cube-outline'
    }
  ],
  process: {
    sectionHeading: 'Our 4-Step Custom Shower Fitting Process',
    subheading: 'Precision laser templating for a flawless fit',
    steps: [
      {
        stepNumber: 1,
        title: 'Post-Tiling Laser Measuring',
        description: 'We measure your shower reveal with precision laser tools after tiling is complete.'
      },
      {
        stepNumber: 2,
        title: 'CNC Glass Cutting & Tempering',
        description: 'Glass panels are CNC-cut, polished, drilled for hinges, and heat-tempered for safety.'
      },
      {
        stepNumber: 3,
        title: 'Hardware Alignment & Fitting',
        description: 'Heavy-duty stainless steel hinges, stabilizer bars, and magnetic seals are fitted.'
      },
      {
        stepNumber: 4,
        title: 'Waterproof Silicone Curing',
        description: 'Perimeters are sealed with anti-fungal silicone, tested, and handed over ready for use.'
      }
    ]
  },
  faqs: [],
  relatedServices: [],
  seo: {
    titleTag: 'Frameless Glass Shower Doors | Custom Sizing & Luxury Finishes | Free Quotes',
    metaDescription: 'Custom 10mm toughened frameless glass shower doors, walk-in panels, and fluted glass enclosures. Matte black and gold hardware. Free measuring.',
    keywords: [
      'frameless glass shower doors near me',
      'custom shower cubicles',
      'custom mirrors cut to size near me',
      'fluted glass doors',
      'reeded glass partitions'
    ],
    canonicalUrl: '/services/frameless-shower-doors',
    openGraphImage: '/images/services/frameless-shower-doors-hero.webp'
  },
  structuredDataJsonLd: {}
};
