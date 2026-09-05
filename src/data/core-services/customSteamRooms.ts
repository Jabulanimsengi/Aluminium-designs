import { ServiceObject } from '../../types/service';

export const customSteamRoomsService: ServiceObject = {
  id: 'srv-custom-steam-rooms',
  slug: 'custom-steam-rooms',
  serviceName: 'Custom Steam Rooms & Saunas',
  tagline: 'Luxury Frameless Glass Steam Rooms, Timber Saunas & Wellness Enclosures',
  category: 'Custom Wellness & Glazing',
  pricingGuide: {
    estimatedStartingPrice: 'R18,500',
    priceUnit: 'per custom steam room or sauna enclosure',
    priceFactors: [
      'Room dimensions and cubic volume requirements',
      'Enclosure style (Frameless Toughened Glass vs Freestanding Timber Cabin)',
      'Steam generator capacity (kW) and commercial-grade sauna rock heater model',
      'Timber selection (Treated Scandinavian Pine, Cedar, or Thermo-Wood)',
      'Integrated mood LED lighting and digital wall-mounted thermostatic touch controls',
    ],
  },
  hero: {
    badge: 'Luxury Wellness & Glass Enclosure Specialists',
    headline: 'Custom Steam Rooms & Saunas',
    subheadline:
      'Transform your master bathroom, gym, or covered patio into a five-star private sanctuary with custom-built steam rooms, frameless glass sauna enclosures, and handcrafted timber cabins.',
    primaryCtaText: 'Request Steam Room Quote',
    primaryCtaLink: '/contact',
    secondaryCtaText: 'WhatsApp a Specialist',
    secondaryCtaLink: '#whatsapp',
    heroImage: '/images/real_images/products/steaming/steaming-image-one.jpeg',
  },
  overview: {
    heading: 'Bespoke Steam Rooms, Sauna Cabins & Architectural Glass Enclosures',
    paragraphs: [
      'Indulge in the ultimate home wellness experience with custom-designed steam rooms and thermal saunas. Combining heavy-duty 10mm–12mm SABS-certified toughened glass with kiln-dried, splinter-free thermal timber, our team engineers bespoke steam cabins tailored to your exact floor plan and lifestyle.',
      'From compact frameless glass steam showers in residential en-suites to spacious commercial Finnish dry saunas with tiered benching and rock heaters, every unit is precision-sealed against moisture, perfectly ventilated, and equipped with smart thermostatic temperature controls for effortless relaxation.',
    ],
    specifications: [
      { label: 'Glass Specification', value: '10mm / 12mm SABS Toughened Safety Glass with Diamond-Polished Edges' },
      { label: 'Hardware Material', value: 'Marine Grade 304 / 316 Stainless Steel Hinges, Brackets & Handles' },
      { label: 'Timber Construction', value: 'Knot-Free Thermal Hemlock, Scandinavian Pine & Western Red Cedar' },
      { label: 'Heating & Steam', value: 'Rapid-Heating Steam Generators & Heavy-Duty Sauna Rock Heaters' },
      { label: 'Sealing Technology', value: 'High-Temperature Anti-Mold Silicone & Translucent Magnetic Steam Gaskets' },
      { label: 'Control Systems', value: 'Digital Touchpad Thermostats with Timer and Mood LED Integration' },
    ],
  },
  features: [
    {
      id: 'f-steam-1',
      title: 'Steam-Tight Thermal Containment',
      description: 'Precision-fitted magnetic gaskets and floor deflectors ensure 100% steam retention with zero condensation leaks.',
      icon: 'droplets',
    },
    {
      id: 'f-steam-2',
      title: 'Ergonomic Timber Benching',
      description: 'Handcrafted slatted timber seating designed to stay cool to the touch while maximizing airflow and heat circulation.',
      icon: 'layers',
    },
    {
      id: 'f-steam-3',
      title: 'Commercial Sauna Rock Heaters',
      description: 'High-output rock stoves that produce soft, deeply penetrating radiant heat and authentic steam when splashed with water.',
      icon: 'flame',
    },
    {
      id: 'f-steam-4',
      title: 'Precision Sizing for Any Space',
      description: 'Custom manufactured to fit seamlessly into master en-suites, garage conversions, garden cabanas, or commercial wellness spas.',
      icon: 'maximize-2',
    },
  ],
  process: {
    sectionHeading: 'Our 4-Step Steam Room Installation Process',
    subheading: 'Precision engineering from initial design to final steam test',
    steps: [
      {
        stepNumber: 1,
        title: 'Site Assessment & Measurement',
        description: 'We survey your room, verify plumbing and electrical connections, and calculate the exact cubic capacity for proper heating.',
      },
      {
        stepNumber: 2,
        title: 'Custom Glass & Timber Fabrication',
        description: 'Glass panels are precision-cut and toughened, while timber wall panels, slatted benches, and heater guards are custom-crafted.',
      },
      {
        stepNumber: 3,
        title: 'Steam-Tight Fitting & Glazing',
        description: 'Our certified installers mount the glass, install stainless steel hardware, fit thermal timber lining, and apply high-temp steam seals.',
      },
      {
        stepNumber: 4,
        title: 'Heater Calibration & Handover',
        description: 'We connect the heating elements, calibrate digital temperature controls, conduct a live steam test, and walk you through system operation.',
      },
    ],
  },
  faqs: [
    {
      question: 'What is the difference between a steam room and a traditional dry sauna?',
      answer: 'A steam room operates at around 40°C to 50°C with 100% humidity powered by an external steam generator, creating a warm, misty tropical environment. A traditional sauna operates at higher temperatures (70°C to 90°C) with dry heat generated by volcanic rocks on an electric stove. We manufacture and install both styles across Gauteng.',
    },
    {
      question: 'Can you install a custom steam room inside an existing bathroom or shower?',
      answer: 'Yes. We frequently convert existing shower recesses into luxury steam showers by enclosing the opening up to the ceiling with 10mm toughened steam-rated glass, adding steam-tight perimeter seals, and plumbing in a compact concealed steam generator.',
    },
    {
      question: 'What electrical and plumbing supplies are needed for a steam room?',
      answer: 'Steam generators typically require a dedicated 220V/380V electrical breaker (depending on kW rating), a cold water inlet line, and a floor waste drain with proper fall. Our technical team coordinates with your electrician and plumber or handles the complete turnkey installation.',
    },
    {
      question: 'How do you prevent steam and moisture from damaging surrounding rooms?',
      answer: 'Our installations utilize non-porous moisture-barrier membranes, commercial-grade anti-mold silicone, airtight magnetic door seals, and dedicated ventilation dampers to ensure moisture remains safely contained within the cabin.',
    },
    {
      question: 'Do you offer free on-site consultations and quotes across Gauteng?',
      answer: 'Yes. We provide free on-site technical measurements, 3D design layout advice, and detailed itemized quotes for homeowners, architects, and commercial developers throughout Johannesburg, Pretoria, Sandton, and all Gauteng areas.',
    },
  ],
  relatedServices: [
    {
      serviceId: 'srv-shw-01',
      title: 'Frameless Shower Doors',
      slug: 'frameless-shower-doors',
      shortDescription: 'Custom 10mm toughened glass walk-in enclosures.',
      thumbnailImage: '/images/services/frameless-shower-doors-hero.webp',
    },
    {
      serviceId: 'srv-patio-enclosures',
      title: 'Glass Patio Enclosures',
      slug: 'glass-patio-enclosures',
      shortDescription: 'All-weather architectural glass sunrooms and patio rooms.',
      thumbnailImage: '/images/services/glass-patio-enclosures-hero.webp',
    },
  ],
  seo: {
    titleTag: 'Custom Steam Rooms & Sauna Installation Gauteng | Aluminium Designs',
    metaDescription: 'Luxury custom steam rooms, frameless glass sauna cabins & wellness enclosures built across Johannesburg, Pretoria & Gauteng. SABS toughened glass & free quotes.',
    keywords: [
      'custom steam rooms Gauteng',
      'sauna installation Johannesburg',
      'frameless glass steam room doors',
      'timber sauna cabin builder Pretoria',
      'home steam room installation',
      'steam shower glass enclosure',
    ],
    canonicalUrl: 'https://www.aluminiumdesigns.co.za/services/custom-steam-rooms',
    openGraphImage: 'https://www.aluminiumdesigns.co.za/images/real_images/products/steaming/steaming-image-one.jpeg',
  },
  structuredDataJsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Custom Steam Room & Sauna Installation',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Aluminium Designs',
      telephone: '+27716122439',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Katlehong',
        addressRegion: 'Gauteng',
        addressCountry: 'ZA',
      },
    },
    description: 'Custom steam rooms, frameless glass sauna cabins, and luxury wellness enclosures manufactured and installed across Gauteng.',
  },
};
