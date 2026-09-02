import { ServiceObject } from '../../types/service';

export const slidingDoorRepairsService: ServiceObject = {
  id: 'srv-rep-02',
  slug: 'sliding-door-repairs',
  serviceName: 'Sliding Door Repairs',
  tagline: 'Urgent Roller Replacement, Stainless Track Capping, Lock Repairs & Glass Replacement',
  category: 'Repairs & Maintenance',
  pricingGuide: {
    estimatedStartingPrice: 'R850',
    priceUnit: 'per sliding door service & roller replacement',
    priceFactors: [
      'Roller mechanism type (Heavy-Duty Double Tandem vs Single Wheel)',
      'Bottom track condition (Stainless steel track capping required vs cleaning/realignment)',
      'Lock replacement (Hook bolt cylinder vs multi-point mechanism)',
      'Shattered glass pane replacement (6.38mm Laminated Safety Glass)'
    ]
  },
  hero: {
    badge: 'Mobile 24-48h Repair Van Service',
    headline: 'Sliding Door Repairs',
    subheadline: 'Restore hard-to-slide, jammed, or scraping patio doors with professional heavy-duty roller replacement, stainless steel track repair, lock fixes, and safety glass replacement.',
    primaryCtaText: 'Book Mobile Repair Van',
    primaryCtaLink: '#quote',
    secondaryCtaText: 'Emergency WhatsApp',
    secondaryCtaLink: '#whatsapp',
    heroImage: '/images/services/sliding-door-repairs-hero.webp'
  },
  overview: {
    heading: 'Professional Aluminium Sliding Door Repairs & Roller Replacement',
    paragraphs: [
      'Is your aluminium patio sliding door heavy to push, scraping along the floor, jumping off its track, or refusing to lock? You do not need to replace the entire expensive door system. Our mobile repair vans carry all universal replacement parts to restore your sliding door to effortless one-finger operation on the same day.',
      'We replace worn, flattened, or seized nylon and stainless steel rollers with commercial-grade double-tandem ball-bearing carriages, install precision stainless steel track capping over pitted aluminium sills, adjust door height and alignment, replace faulty hook locks, and replace shattered safety glass.'
    ],
    specifications: [
      { label: 'Roller Specifications', value: 'Heavy-Duty Double Tandem Stainless & Nylon Rollers' },
      { label: 'Track Restoration', value: 'Precision Mirrored Stainless Steel Track Capping' },
      { label: 'Lock Hardware', value: 'High-Security Multi-Point Hook Locks & Cylinders' },
      { label: 'Glass Replacement', value: 'SANS 10400 Certified 6.38mm Laminated Safety Glass' },
      { label: 'Response Guarantee', value: 'Same-Day / 24-48h Mobile Van Dispatch' }
    ]
  },
  features: [
    {
      id: 'f-rep-1',
      title: 'Effortless One-Finger Glide',
      description: 'New precision ball-bearing rollers glide smoothly and silently across restored tracks.',
      icon: 'sparkles-outline'
    },
    {
      id: 'f-rep-2',
      title: 'Stainless Track Capping',
      description: 'Covers damaged, grooved, and pitted bottom rails with smooth, permanent stainless steel.',
      icon: 'construct-outline'
    },
    {
      id: 'f-rep-3',
      title: 'Fully Stocked Mobile Vans',
      description: 'Our mobile technicians carry all standard rollers, locks, weather-strips, and tools on-board.',
      icon: 'car-outline'
    },
    {
      id: 'f-rep-4',
      title: 'Fraction of Replacement Cost',
      description: 'Save thousands of rands by servicing and repairing your existing door rather than buying new.',
      icon: 'wallet-outline'
    }
  ],
  process: {
    sectionHeading: 'Our Mobile Repair & Servicing Process',
    subheading: 'Fast on-site turnaround in under 90 minutes',
    steps: [
      {
        stepNumber: 1,
        title: 'Diagnostic Inspection',
        description: 'Our technician unhangs the door panel and inspects the wheels, bearings, and track rails.'
      },
      {
        stepNumber: 2,
        title: 'Track Machining & Capping',
        description: 'We clean out debris, deburr grooves, and fit a mirrored stainless steel track cover if needed.'
      },
      {
        stepNumber: 3,
        title: 'New Roller Installation',
        description: 'We fit heavy-duty double-tandem rollers matched specifically to your door profile weight.'
      },
      {
        stepNumber: 4,
        title: 'Re-hanging, Leveling & Lock Tuning',
        description: 'The door is re-hung, adjusted for squareness and weatherseal contact, and lock latching tested.'
      }
    ]
  },
  faqs: [],
  relatedServices: [],
  seo: {
    titleTag: 'Sliding Door Repairs & Roller Replacement | Mobile Vans | Free Quotes',
    metaDescription: 'Urgent mobile sliding door repairs, roller replacement, track capping, and lock fixes. Same-day mobile repair vans with guaranteed workmanship.',
    keywords: [
      'sliding door roller replacement near me',
      'sliding door track repair near me',
      'sliding door repair gauteng',
      'emergency glass replacement near me',
      'sliding door lock repair'
    ],
    canonicalUrl: '/services/sliding-door-repairs',
    openGraphImage: '/images/services/sliding-door-repairs-hero.webp'
  },
  structuredDataJsonLd: {}
};
