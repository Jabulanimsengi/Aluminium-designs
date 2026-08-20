import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Info, Tag, ArrowRight } from 'lucide-react';
import { ActiveTab } from '../types';

interface ProductEstimate {
  id: string;
  name: string;
  category: string;
  basePrice: number; // in Rands
  popularSize: string;
  bestFor: string;
  description: string;
  clientBenefits: string[];
  features: string[];
}

const PRODUCTS_CATALOGUE: ProductEstimate[] = [
  // 1. Aluminium Doors
  {
    id: 'sliding-doors',
    name: 'Aluminium Sliding Doors',
    category: 'Aluminium Doors',
    basePrice: 7500,
    popularSize: '1800mm (W) x 2100mm (H) - 2 Panel',
    bestFor: 'Patios, lounges, braai rooms & backyard access',
    description: 'Smooth sliding patio doors with tough powder coating, heavy-duty bottom roller wheels, and double draft seals.',
    clientBenefits: [
      'Glides effortlessly on stainless steel tracks',
      'Weatherproof rubber seals keep rain & dust outside',
      'Keyed cylinder lock with deadbolt security'
    ],
    features: ['SABS Toughened Safety Glass', 'Double Draught Woolpile Seals', 'Charcoal, Bronze, White or Black']
  },
  {
    id: 'stacking-doors',
    name: 'Aluminium Stacking Doors (Fold-a-Side)',
    category: 'Aluminium Doors',
    basePrice: 19500,
    popularSize: '3000mm (W) x 2100mm (H) - 3 or 4 Panel',
    bestFor: 'Connecting living rooms to patios & braai areas',
    description: 'Multi-panel concertina folding doors that slide and stack flat against the wall, opening up your home completely.',
    clientBenefits: [
      'Opens up 90% of the wall opening for complete patio flow',
      'Heavy-duty top and bottom tracks for finger-touch glide',
      'Flush floor track option for zero tripping hazard'
    ],
    features: ['Multi-Point Flush Bolts', 'Heavy-Duty Stainless Steel Hinges', 'SABS 6.38mm Laminated Safety Glass']
  },
  {
    id: 'pivot-door',
    name: 'Aluminium Pivot Front Doors',
    category: 'Aluminium Doors',
    basePrice: 14500,
    popularSize: '1200mm (W) x 2100mm (H)',
    bestFor: 'Grand main front entrances for modern homes',
    description: 'An oversized, modern front entrance door that pivots on heavy-duty hidden floor and top pins.',
    clientBenefits: [
      'Dramatic curb appeal with oversized modern proportions',
      'Hydraulic floor spring option with smooth soft-close',
      'Multi-point latching locks for maximum front door security'
    ],
    features: ['High-Strength Pivot Bearing', 'Long Stainless Pull Handles', 'Frosted or Tinted Glass Panels']
  },
  {
    id: 'french-doors',
    name: 'Aluminium French Doors (Double Swing)',
    category: 'Aluminium Doors',
    basePrice: 8900,
    popularSize: '1500mm (W) x 2100mm (H)',
    bestFor: 'Bedrooms opening to gardens, verandahs, or offices',
    description: 'Classic double-opening swing doors with full-length safety glass and modern aluminium slim frames.',
    clientBenefits: [
      'Both doors open wide for full opening ventilation',
      'Rebate weather seals stop driving rain completely',
      'Keyed euro-profile deadlock for high security'
    ],
    features: ['Heavy-Duty Butt Hinges', 'Lever Handle with Key Lock', 'SABS Safety Glass Included']
  },
  {
    id: 'garage-doors',
    name: 'Aluminium Garage Doors',
    category: 'Aluminium Doors',
    basePrice: 16500,
    popularSize: 'Single (2440mm x 2130mm) / Double (4880mm x 2130mm)',
    bestFor: 'Modern garage openings requiring zero rust & maintenance',
    description: 'Lightweight, rust-free sectional overhead aluminium garage doors with optional glass vision inserts.',
    clientBenefits: [
      'Will never rot, warp, or rust like wood or thin steel',
      'Extremely light to operate, extending gate/garage motor life',
      'Whisper-quiet nylon rollers for smooth daily operation'
    ],
    features: ['Heavy-Duty Torsion Springs', 'Insulated Panel Options', 'Glass View Inserts Available']
  },

  // 2. Windows & Glass
  {
    id: 'aluminium-windows',
    name: 'Aluminium Casement Windows',
    category: 'Windows & Glass',
    basePrice: 2800,
    popularSize: '1200mm (W) x 1200mm (H) - Top / Side Hung',
    bestFor: 'Bedrooms, kitchens, bathrooms & living rooms',
    description: 'Outward opening casement windows with friction stays and key-locking cam handles.',
    clientBenefits: [
      'Zero maintenance – will never rot or need painting',
      'Wind & rain tight double bubble compression seals',
      'Opens wide to catch refreshing cross-ventilation'
    ],
    features: ['Stainless Steel Friction Stays', 'Keyed Cam Handles', 'Clear SABS Safety Glass']
  },
  {
    id: 'sliding-windows',
    name: 'Aluminium Horizontal Sliding Windows',
    category: 'Windows & Glass',
    basePrice: 2400,
    popularSize: '1500mm (W) x 900mm (H) - 2 Sash',
    bestFor: 'Kitchens over countertops, narrow walkways & patios',
    description: 'Smooth horizontal glide windows that never swing outwards into walkways or living areas.',
    clientBenefits: [
      'No protruding sashes outside on patios or walkways',
      'Easy to install fly screens / bug mesh',
      'Smooth brass or nylon roller glide'
    ],
    features: ['Spring Catch Safety Locks', 'Double Woolpile Draft Seals', 'Low-E Glazing Compatible']
  },
  {
    id: 'double-glazed-windows',
    name: 'Double Glazed Windows',
    category: 'Windows & Glass',
    basePrice: 4800,
    popularSize: '1200mm (W) x 1200mm (H)',
    bestFor: 'Thermal insulation in winter/summer & busy road noise reduction',
    description: 'Dual-pane glass with hermetically sealed argon gas space to stop heat loss and block street noise.',
    clientBenefits: [
      'Keeps homes warm in winter and cool during scorching summer',
      'Blocks up to 70% of outside street and traffic noise',
      'Significantly lowers electricity & heating bills'
    ],
    features: ['Sealed Argon Cavity', 'Low-E Thermal Coating', 'Sound Acoustic Rating']
  },
  {
    id: 'shopfronts',
    name: 'Commercial Glass Shopfronts',
    category: 'Windows & Glass',
    basePrice: 12500,
    popularSize: 'Per 3 Metre Commercial Opening',
    bestFor: 'Retail mall stores, showrooms, and commercial offices',
    description: 'Heavy-duty commercial glass and aluminium storefronts with center-pivot or automated sliding glass doors.',
    clientBenefits: [
      'High-impact laminated safety glass prevents break-ins',
      'Maximum product display visibility for retail shoppers',
      'Overhead concealed door closer with hold-open function'
    ],
    features: ['Heavy-Duty Commercial Frame', 'Thick Laminated Safety Glass', 'Panic Release Hardware Available']
  },
  {
    id: 'office-partitions',
    name: 'Office Glass Partitions',
    category: 'Windows & Glass',
    basePrice: 3500,
    popularSize: 'Per Linear Metre (Full Height)',
    bestFor: 'Boardrooms, executive suites, and modern office spaces',
    description: 'Acoustic glass partitioning walls with slimline aluminium framing and optional privacy frosted vinyl films.',
    clientBenefits: [
      'Maintains natural light while creating private meeting rooms',
      'High sound dampening keeps discussions confidential',
      'Quick demountable installation with zero brickwork dust'
    ],
    features: ['Acoustic Laminated Glass', 'Integrated Slimline Frame', 'Frosted Privacy Bands']
  },
  {
    id: 'fly-screens',
    name: 'Fly Screens & Bug Screens',
    category: 'Windows & Glass',
    basePrice: 750,
    popularSize: 'Standard Window Fitment',
    bestFor: 'Keeping mosquitoes, flies, and bugs out while windows are open',
    description: 'Custom-fitted aluminium framed fiberglass screens that attach neatly to your existing windows and doors.',
    clientBenefits: [
      'Sleep peacefully with windows wide open without mosquito bites',
      'High-visibility mesh does not block your outside view',
      'Removable for easy washing and cleaning'
    ],
    features: ['UV-Resistant Fiberglass Mesh', 'Slim Aluminium Frame', 'Easy-Clip Mounting System']
  },

  // 3. Steel Security
  {
    id: 'burglar-bars',
    name: 'Solid Steel Burglar Bars',
    category: 'Steel Security',
    basePrice: 850,
    popularSize: 'Per Window Opening (Up to 1200x900)',
    bestFor: 'Home window security against break-ins and intruders',
    description: 'Heavy-duty solid square steel bars, welded into a rigid frame and anchored with tamper-proof one-way security bolts.',
    clientBenefits: [
      'Solid steel construction cannot be snapped or bent by hand',
      'One-way tamper-proof security bolts prevent exterior removal',
      'Clean horizontal Spanish or Cottage pane styling'
    ],
    features: ['12mm or 16mm Solid Square Bar', 'Anti-Tamper Anchor Fixings', 'Electro-Galvanized Anti-Rust Coat']
  },
  {
    id: 'security-gates',
    name: 'Slam-Lock Security Gates & Trellis',
    category: 'Steel Security',
    basePrice: 3200,
    popularSize: 'Standard Single Door (900mm x 2100mm)',
    bestFor: 'Front doors, back doors, passage night barriers & patios',
    description: 'Expanding trellis sliding gates or heavy swing security gates with instant slam-lock mechanisms.',
    clientBenefits: [
      'Instant slam-lock allows fast protection in emergencies',
      'Smooth sliding retractable trellis folds neatly away',
      'Top-hung roller tracks cannot be easily kicked off floor'
    ],
    features: ['Instant Slam-Lock Technology', 'Double Upright Steel Posts', 'High-Security Cylinder Lock']
  },
  {
    id: 'driveway-gates',
    name: 'Steel Driveway Gates (Sliding & Swing)',
    category: 'Steel Security',
    basePrice: 11500,
    popularSize: '4000mm (W) x 1800mm (H) - Sliding',
    bestFor: 'Residential driveway entrances, complexes & business perimeters',
    description: 'Custom-fabricated steel driveway gates with solid square tubing, anti-lift brackets, and smooth gate guide rollers.',
    clientBenefits: [
      'Anti-lift security brackets prevent gate from being derailed',
      'Heavy-duty ground track with sealed bearing guide wheels',
      'Compatible with all Centurion and Nemtek gate automation'
    ],
    features: ['Welded RHS Steel Box Frame', 'Anti-Lift Safety Brackets', 'Anti-Rust Hot-Dip Galvanized / Epoxied']
  },
  {
    id: 'gate-motors',
    name: 'Centurion Gate Motors & Automation',
    category: 'Steel Security',
    basePrice: 5800,
    popularSize: 'D5 Evo / D5 Smart / D10 Smart Kits',
    bestFor: 'Automating sliding and swing driveway gates',
    description: 'High-speed automated gate motor installations complete with load-shedding battery backup, remote controls, and safety beams.',
    clientBenefits: [
      'Never get out of your car in the dark or rain to open the gate',
      'Continuous operation during load-shedding with backup batteries',
      'Anti-tamper theft bracket and siren alarm integration'
    ],
    features: ['Battery Backup Power', 'Anti-Theft Steel Enclosure', 'Infrared Anti-Crush Safety Beams']
  },
  {
    id: 'palisade-fencing',
    name: 'Steel Palisade Fencing',
    category: 'Steel Security',
    basePrice: 850,
    popularSize: 'Per Linear Metre (1.8m or 2.1m Height)',
    bestFor: 'Perimeter fencing for homes, estates, schools & factories',
    description: 'Hot-rolled 7-spike or 3-spike steel palisade fencing welded onto heavy square posts and securely grouted.',
    clientBenefits: [
      'Extremely formidable deterrent against climbing or intrusion',
      'Hot-dip galvanized options prevent rust for up to 20 years',
      'Maintains clear sightlines for CCTV and security guards'
    ],
    features: ['7-Spike or Devil-Fork Tops', 'Hot-Rolled Angle Iron', 'Heavy IPE or Square Steel Posts']
  },
  {
    id: 'mesh-fencing',
    name: 'High-Security Mesh Fencing (Clear-Vu Style)',
    category: 'Steel Security',
    basePrice: 1200,
    popularSize: 'Per Linear Metre (1.8m to 2.4m Height)',
    bestFor: 'Modern perimeter boundaries, gated estates & business parks',
    description: 'High-density anti-climb, anti-cut welded wire mesh panels that allow see-through visibility.',
    clientBenefits: [
      'Apertures are too narrow for fingers to climb or bolt cutters to cut',
      'Clean modern aesthetic that does not look like a prison wall',
      'Long-life PVC coated or Galfan anti-corrosion coating'
    ],
    features: ['Anti-Climb 76x12.7mm Mesh', 'Anti-Cut High Tensile Wire', 'Under-Dig Concrete Curb Compatible']
  },

  // 4. Outdoor & Enclosures
  {
    id: 'glass-balustrades',
    name: 'Glass Balustrades & Safety Railings',
    category: 'Outdoor & Enclosures',
    basePrice: 3800,
    popularSize: 'Per Linear Metre (1100mm Height)',
    bestFor: 'Balconies, staircases, decking & swimming pool safety',
    description: 'Frameless or post-mounted safety glass balustrades with hidden aluminium base shoes or stainless spigots.',
    clientBenefits: [
      'Unobstructed views of gardens, hills, and skylines',
      '12mm toughened safety glass withstands high impact',
      'Zero painting required and safe for children and pets'
    ],
    features: ['12mm Toughened SABS Safety Glass', 'Marine-Grade Base Channel', 'Slim Stainless Top Handrail Option']
  },
  {
    id: 'patio-enclosures',
    name: 'Patio Enclosures & Sunrooms',
    category: 'Outdoor & Enclosures',
    basePrice: 22000,
    popularSize: 'Custom Sized Enclosure',
    bestFor: 'Converting outdoor patios & braai areas into all-weather living rooms',
    description: 'Custom glass and aluminium enclosures that seal open verandahs and patios from wind, rain, and dust.',
    clientBenefits: [
      'Use your patio and braai area in rain, winter, and summer',
      'Adds significant interior square footage and property value',
      'Combines sliding or stacker doors with fixed picture glass'
    ],
    features: ['Custom Fit to Existing Roof/Columns', 'Full Weather Sealing', 'Integrated Lockable Entry Doors']
  },
  {
    id: 'awnings',
    name: 'Aluminium Awnings & Canopies',
    category: 'Outdoor & Enclosures',
    basePrice: 3400,
    popularSize: '1500mm (W) x 1000mm (Projection)',
    bestFor: 'Over front doors, windows, and outdoor walkways',
    description: 'Durable solid aluminium or polycarbonate awnings that shield doorways and windows from direct rain and harsh sun.',
    clientBenefits: [
      'Never get soaked while searching for your house keys at the front door',
      'Prevents sun heat and UV rays from fading interior curtains and floors',
      'Rust-proof aluminium brackets will not rot or decay'
    ],
    features: ['Heavy-Gauge Aluminium Louvres', 'Built-In Front Rain Gutter', 'UV-Proof Powder Coating']
  },
  {
    id: 'pergolas',
    name: 'Aluminium Pergolas & Louvred Roofs',
    category: 'Outdoor & Enclosures',
    basePrice: 28000,
    popularSize: '3000mm x 3000mm Freestanding / Attached',
    bestFor: 'Luxury garden patios, pool decks, and outdoor entertainment',
    description: 'Modern aluminium pergolas with adjustable louvres to let sun in or seal tight when rain starts.',
    clientBenefits: [
      'Rotate louvres open for winter sunshine or close for rain shelter',
      'Integrated hidden gutter downpipes channel rainwater away',
      'Zero maintenance compared to wooden pergolas that rot'
    ],
    features: ['Adjustable Aluminium Louvres', 'Internal Rain Drainage Columns', 'Optional LED Lighting Channels']
  },

  // 5. Steel Structures
  {
    id: 'steel-carports',
    name: 'Steel Carports & Shadeports',
    category: 'Steel Structures',
    basePrice: 9500,
    popularSize: 'Single (3m x 6m) / Double (6m x 6m)',
    bestFor: 'Protecting cars, bakkies, caravans & boats from sun and hail',
    description: 'Heavy steel post carports with IBR or corrugated galvanized roof sheeting and integrated rain gutters.',
    clientBenefits: [
      'Guaranteed 100% protection against devastating Highveld hail storms',
      'Stops vehicle paint from blistering and interior dashboards from cracking',
      'Solid concreted steel posts withstand strong gale force winds'
    ],
    features: ['Heavy-Duty RHS Steel Frame', '0.5mm IBR Roof Sheeting', 'Fascia Board & Gutter Included']
  },
  {
    id: 'steel-balustrades',
    name: 'Steel Balustrades & Handrails',
    category: 'Steel Structures',
    basePrice: 1850,
    popularSize: 'Per Linear Metre (1000mm Height)',
    bestFor: 'Staircases, balconies, walkways, and commercial ramps',
    description: 'Custom-welded steel balustrades with vertical pickets, laser-cut panels, or horizontal safety bars.',
    clientBenefits: [
      'Maximum structural rigidity for high-traffic steps and balconies',
      'Smooth ergonomic handrail for comfortable grip',
      'Epoxy powder-coated in any colour to match your home'
    ],
    features: ['Solid Tubular Steel', 'Smooth Ground Welds', 'Powder Coated or Galvanized']
  },
  {
    id: 'steel-staircases',
    name: 'Steel Staircases & Spiral Stairs',
    category: 'Steel Structures',
    basePrice: 16500,
    popularSize: 'Custom Straight / L-Shape / Spiral',
    bestFor: 'Loft access, double-storey exterior access & fire escapes',
    description: 'Bespoke steel staircases with non-slip checker plate treads or hardwood timber inserts.',
    clientBenefits: [
      'Engineered for heavy load capacities and decades of safe use',
      'Compact spiral staircase designs save massive floor space',
      'Non-slip treads prevent slipping in wet weather'
    ],
    features: ['Punched Non-Slip Tread Plates', 'Heavy Steel Stringer Beams', 'Integrated Safety Handrails']
  },
  {
    id: 'steel-sheds',
    name: 'Custom Steel Sheds & Storage Units',
    category: 'Steel Structures',
    basePrice: 14500,
    popularSize: '2.5m (W) x 3m (L) x 2.2m (H)',
    bestFor: 'Garden tool storage, workshops, generator rooms & pump houses',
    description: 'Secure, fireproof and rodent-proof steel storage sheds with lockable doors and waterproof steel sheeting.',
    clientBenefits: [
      'Keeps tools, lawnmowers, and garden equipment safe and dry',
      '100% fireproof and immune to termites or wood rot',
      'Bolted concrete floor anchor base prevents tilting in storms'
    ],
    features: ['Galvanized Steel Frame', 'Padlockable Steel Door', 'Ventilation Louvres']
  },

  // 6. Repairs & Maintenance
  {
    id: 'aluminium-repairs',
    name: 'Aluminium Window & Door Repairs',
    category: 'Repairs & Maintenance',
    basePrice: 950,
    popularSize: 'Per Callout & Service',
    bestFor: 'Stuck sliding doors, broken handles, worn rollers & draft leaks',
    description: 'Expert mobile repair service to replace worn-out rollers, broken handles, friction stays, and rubber weather seals.',
    clientBenefits: [
      'Make heavy sliding doors glide like brand new with one finger',
      'Fix draughty, whistling windows and replace worn hinges',
      'Save thousands of Rands by repairing instead of replacing'
    ],
    features: ['Heavy-Duty Replacement Rollers', 'New Keyed Handles & Latches', 'Fresh Rubber Woolpile Seals']
  },
  {
    id: 'glass-replacement',
    name: 'Broken Glass Replacement',
    category: 'Repairs & Maintenance',
    basePrice: 850,
    popularSize: 'Standard Window Pane',
    bestFor: 'Cracked, broken, or shattered window and door glass',
    description: 'Fast, clean on-site broken glass removal and reglazing with brand new SABS safety glass.',
    clientBenefits: [
      'Emergency response to make your home secure immediately',
      'Clean vacuum removal of dangerous broken glass shards',
      'Upgrades old glass to approved SABS safety glass'
    ],
    features: ['Clear, Frosted or Tinted Glass', 'Neat Silicone Glazing Beads', 'SABS Safety Glass Certificate']
  },
  {
    id: 'steel-repairs',
    name: 'Steel Gate & Fence Repairs',
    category: 'Repairs & Maintenance',
    basePrice: 1200,
    popularSize: 'Per Repair Job',
    bestFor: 'Sagging driveway gates, rusted posts, broken hinges & broken wheels',
    description: 'Mobile on-site welding and refurbishment of sagging steel gates, broken track wheels, and rusted fencing.',
    clientBenefits: [
      'Re-aligns dragging gates so gate motors stop straining',
      'Replaces noisy, seized wheel bearings with heavy-duty steel wheels',
      'On-site welding for immediate security fix'
    ],
    features: ['Solid Steel Wheel Replacements', 'On-Site Arc Welding', 'Anti-Rust Touchup Coat']
  },
  {
    id: 'custom-welding',
    name: 'Custom On-Site Welding & Fabrication',
    category: 'Repairs & Maintenance',
    basePrice: 1500,
    popularSize: 'Custom Job / Per Day Rate',
    bestFor: 'Custom steel brackets, modified security gates, pipe welding & modifications',
    description: 'Professional mobile MIG, TIG, and ARC welding service for custom metalwork and structural steel modifications.',
    clientBenefits: [
      'Fully equipped mobile welding van comes directly to your premises',
      'Clean, strong, defect-free structural welds',
      'Fast turnaround on bespoke metal fabrications'
    ],
    features: ['Mobile Generator for Off-Grid Work', 'High-Grade Steel Rods & Wire', 'Precision Cutting & Grinding']
  }
];

interface CatalogueViewProps {
  onNavigate?: (tab: ActiveTab) => void;
}

export default function CatalogueView({ onNavigate }: CatalogueViewProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'ALL PRODUCTS' },
    { id: 'Aluminium Doors', label: 'ALUMINIUM DOORS' },
    { id: 'Windows & Glass', label: 'WINDOWS & GLASS' },
    { id: 'Steel Security', label: 'STEEL SECURITY' },
    { id: 'Outdoor & Enclosures', label: 'OUTDOOR & PATIO' },
    { id: 'Steel Structures', label: 'STEEL STRUCTURES' },
    { id: 'Repairs & Maintenance', label: 'REPAIRS & SERVICES' }
  ];

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS_CATALOGUE
    : PRODUCTS_CATALOGUE.filter(p => p.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-12 py-12 pb-24 space-y-16">
      {/* Friendly Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 bg-primary/5 text-primary border border-primary/10 px-3.5 py-1 text-xs font-mono font-bold tracking-widest uppercase">
          <Tag className="w-3.5 h-3.5" />
          Transparent Pricing Guide
        </div>
        <h2 className="font-sans text-4xl md:text-5xl font-bold uppercase tracking-tight text-primary">
          Our Products & Estimated Costs
        </h2>
        <p className="text-on-surface-variant text-base">
          At Aluminium Designs, we believe in honest, upfront pricing. Explore our standard product rates calculated in South African Rands (ZAR). No confusing technical jargon—just high-grade aluminium and steel solutions made easy.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 border-b border-outline-variant pb-4">
        {categories.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveCategory(tab.id)}
            className={`px-4 py-2 text-xs font-mono font-bold tracking-wider rounded-none cursor-pointer border transition-all duration-150 ${
              activeCategory === tab.id
                ? 'bg-primary text-on-primary border-primary'
                : 'bg-surface hover:bg-surface-container border-outline-variant text-on-surface'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Product List with Costs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredProducts.map((prod) => (
          <div
            key={prod.id}
            className="border-2 border-outline-variant hover:border-primary transition-all duration-200 bg-surface-container-lowest p-6 md:p-8 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-6">
              {/* Top Meta */}
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-mono text-[10px] uppercase text-secondary font-bold tracking-widest bg-surface-container border border-outline-variant/60 px-2 py-0.5">
                    {prod.category}
                  </span>
                  <h3 className="font-sans text-2xl font-bold text-primary mt-2 uppercase tracking-tight">
                    {prod.name}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono text-secondary uppercase block tracking-wider">Estimated Base Price</span>
                  <span className="font-mono text-3xl font-extrabold text-primary">
                    R {prod.basePrice.toLocaleString()}
                  </span>
                  <span className="text-[10px] text-on-surface-variant font-medium block">
                    {prod.popularSize.includes('Per Linear') || prod.popularSize.includes('Per Metre')
                      ? 'per metre / standard fit'
                      : 'incl. standard frame & fitting'}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-3">
                <p className="text-sm text-on-surface font-sans leading-relaxed">
                  {prod.description}
                </p>
                <div className="text-xs bg-surface-container-low p-3 border-l-2 border-primary text-on-surface-variant">
                  <span className="font-mono font-bold uppercase text-secondary block text-[9px] tracking-wider">RECOMMENDED FOR:</span>
                  <p className="font-sans mt-0.5 text-primary">{prod.bestFor}</p>
                </div>
              </div>

              {/* Benefits (Normal customer language) */}
              <div className="space-y-3">
                <h4 className="font-mono text-[10px] uppercase font-bold text-secondary tracking-wider">
                  WHY CLIENTS CHOOSE THIS:
                </h4>
                <ul className="space-y-2">
                  {prod.clientBenefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs">
                      <div className="p-0.5 bg-emerald-100 text-emerald-800 rounded-none border border-emerald-300 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-on-surface-variant leading-tight">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Specs overview */}
            <div className="border-t border-outline-variant pt-5 space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="font-sans text-on-surface-variant">Popular Standard Spec:</span>
                <span className="font-mono font-bold text-primary">{prod.popularSize}</span>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {prod.features.map((feat, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-mono uppercase bg-surface border border-outline-variant/60 text-secondary px-2.5 py-0.5"
                  >
                    {feat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* SABS Quality & Education Guide */}
      <section className="bg-surface-container-low border border-outline-variant p-8 md:p-12 space-y-8">
        <div className="flex items-center gap-3 border-b border-outline-variant pb-4">
          <Info className="w-6 h-6 text-primary" />
          <h3 className="font-sans text-xl font-bold uppercase tracking-tight text-primary">
            Quality Assurance Guide: South African Standards
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border border-outline-variant bg-surface-container-lowest p-5 space-y-3">
            <h4 className="font-sans font-bold text-primary uppercase text-sm tracking-tight">
              Does Aluminium Rust?
            </h4>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              <strong>Never.</strong> Unlike raw steel, high-grade aluminium creates a natural oxide layer that makes it completely rust-proof, ideal for Highveld wet seasons and coastal areas.
            </p>
          </div>

          <div className="border border-outline-variant bg-surface-container-lowest p-5 space-y-3">
            <h4 className="font-sans font-bold text-primary uppercase text-sm tracking-tight">
              How are Steel Products Protected?
            </h4>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              All steel gates, burglar bars, and carports are hot-dip galvanized or coated in anti-rust primer and high-gloss enamel / powder coating to prevent corrosion for decades.
            </p>
          </div>

          <div className="border border-outline-variant bg-surface-container-lowest p-5 space-y-3">
            <h4 className="font-sans font-bold text-primary uppercase text-sm tracking-tight">
              SABS Approved Safety Glass
            </h4>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              We exclusively install toughened or laminated SABS approved safety glass that complies with South African building regulations (SANS 10400).
            </p>
          </div>

          <button
            onClick={() => onNavigate?.('inquiry')}
            className="border border-outline-variant bg-primary text-on-primary p-5 space-y-3 flex flex-col justify-between text-left hover:bg-secondary cursor-pointer transition-colors duration-150 rounded-none w-full group lg:col-span-3"
          >
            <div>
              <h4 className="font-sans font-bold text-white uppercase text-base tracking-tight">
                Ready for a Free On-Site Measurement & Custom Quote?
              </h4>
              <p className="text-white/90 leading-relaxed mt-2 text-xs">
                We design and manufacture custom sizes to fit your home's exact layout. Fill out our simple request form and our local Gauteng team will handle everything.
              </p>
            </div>
            <div className="pt-4 border-t border-white/20 mt-2 w-full">
              <span className="font-mono text-xs font-bold tracking-widest uppercase flex items-center justify-between text-white">
                Request Free Quotation
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </button>
        </div>
      </section>
    </div>
  );
}
