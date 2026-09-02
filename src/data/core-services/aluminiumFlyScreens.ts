import { ServiceObject } from '../../types/service';

export const aluminiumFlyScreensService: ServiceObject = {
  id: 'srv-fly-01',
  slug: 'aluminium-fly-screens',
  serviceName: 'Aluminium Fly Screens',
  tagline: 'Custom Window Insect Screens, Retractable Patio Door Screens & Pet-Proof Mesh',
  category: 'Insect Screens & Pet Protection',
  pricingGuide: {
    estimatedStartingPrice: 'R650',
    priceUnit: 'per custom fitted window screen',
    priceFactors: [
      'Screen mechanism (Fixed Clip-on, Horizontal Sliding, Retractable Cassette)',
      'Mesh type (UV-resistant Fiberglass, Stainless Steel, Pet-Resistant Heavy Mesh)',
      'Frame powder-coat finish matching your existing window frames',
      'Door vs window opening dimensions'
    ]
  },
  hero: {
    badge: 'Custom Insect & Pet Screen Specialists',
    headline: 'Aluminium Fly Screens',
    subheadline: 'Enjoy fresh air and natural ventilation without mosquitoes, flies, and pests with custom-manufactured aluminium insect screens for windows, sliding doors, and patios.',
    primaryCtaText: 'Request Fly Screen Quote',
    primaryCtaLink: '#quote',
    secondaryCtaText: 'Chat on WhatsApp',
    secondaryCtaLink: '#whatsapp',
    heroImage: '/images/services/aluminium-fly-screens-hero.webp'
  },
  overview: {
    heading: 'Custom Aluminium Insect Screens & Fly Screens',
    paragraphs: [
      'Keep mosquitoes, flies, moths, and insects out of your home while enjoying continuous cool breezes. Our custom-manufactured aluminium fly screens are custom-built to clip, slide, or roll over your existing aluminium, steel, or wooden windows and sliding patio doors.',
      'We supply fixed magnetic clip-on window screens, horizontal sliding window screens, retractable roll-up cassette screens for folding doors, and heavy-duty claw-proof pet mesh screen doors with integrated dog and cat access flaps.'
    ],
    specifications: [
      { label: 'Frame Profile', value: 'Extruded Slimline Architectural Aluminium' },
      { label: 'Mesh Types', value: 'High-Visibility Fiberglass / 304 Stainless / Pet Mesh' },
      { label: 'Screen Types', value: 'Magnetic Clip-On / Sliding / Spring Retractable' },
      { label: 'Frame Colors', value: 'Charcoal, Matte Black, Pure White, Bronze, Natural' },
      { label: 'UV Resistance', value: '100% UV-Stabilized Anti-Fraying Mesh' }
    ]
  },
  features: [
    {
      id: 'f-fly-1',
      title: '100% Pest Protection',
      description: 'Ultra-fine mesh keeps out mosquitoes, gnats, flies, and creepy-crawlies all summer.',
      icon: 'shield-outline'
    },
    {
      id: 'f-fly-2',
      title: 'High-Visibility Mesh',
      description: 'Engineered with transparent weave technology that allows maximum airflow and view clarity.',
      icon: 'eye-outline'
    },
    {
      id: 'f-fly-3',
      title: 'Claw-Proof Pet Mesh',
      description: 'Heavy-duty vinyl-coated polyester mesh resists tearing and scratching from dogs and cats.',
      icon: 'paw-outline'
    },
    {
      id: 'f-fly-4',
      title: 'Smooth Retractable Roller',
      description: 'Discreet cassette mechanism rolls the screen out of sight into a compact top casing when not in use.',
      icon: 'swap-horizontal-outline'
    }
  ],
  process: {
    sectionHeading: 'Our 4-Step Screen Fitting Process',
    subheading: 'Custom fitment for any window or door style',
    steps: [
      {
        stepNumber: 1,
        title: 'On-Site Opening Assessment',
        description: 'We measure each window vent and door opening and match your frame color.'
      },
      {
        stepNumber: 2,
        title: 'Custom Screen Assembly',
        description: 'Aluminium profiles are mitred and high-tensile insect mesh is spline-locked.'
      },
      {
        stepNumber: 3,
        title: 'Track & Clip Installation',
        description: 'Guide rails, magnetic catches, or mounting clips are fastened to your frames.'
      },
      {
        stepNumber: 4,
        title: 'Tension Testing & Handover',
        description: 'We test sliding glide and retractable spring tension to ensure smooth operation.'
      }
    ]
  },
  faqs: [],
  relatedServices: [],
  seo: {
    titleTag: 'Aluminium Fly Screens for Windows & Doors | Custom Sizing | Free Quotes',
    metaDescription: 'Custom insect fly screens, retractable patio door screens, and pet-proof mesh for windows and doors. Free on-site measuring and fast local installation.',
    keywords: [
      'aluminium fly screens for windows near me',
      'window mosquito net installation near me',
      'retractable insect screens for patio doors',
      'pet friendly security mesh',
      'insect screen doors gauteng'
    ],
    canonicalUrl: '/services/aluminium-fly-screens',
    openGraphImage: '/images/services/aluminium-fly-screens-hero.webp'
  },
  structuredDataJsonLd: {}
};
