export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  features: string[];
  imagePath: string;
  iconName: string;
  featured?: boolean;
}

export const services: Service[] = [
  {
    id: "windows",
    title: "Aluminium Windows",
    slug: "/services/windows",
    shortDescription: "Windows built to let in more light, keep out the cold, and last for years without rusting.",
    longDescription: "Our aluminium windows look great and stay strong for decades. They are made from high-quality aluminium with tough safety glass, so they handle strong winds, keep your home warmer in winter and cooler in summer, and block out street noise. Perfect for homes, offices, and new developments.",
    features: [
      "Toughened or laminated safety glass options",
      "Double-glazed windows available to keep heat in and noise out",
      "Tight rubber seals that stop draughts and water leaks",
      "Available in Casement, Sliding, Folding, and Fixed styles",
      "Quality handles, locks, and fittings"
    ],
    imagePath: "/images/window_detail.png",
    iconName: "Grid",
    featured: true
  },
  {
    id: "doors",
    title: "Aluminium Doors",
    slug: "/services/doors",
    shortDescription: "Strong, weatherproof hinge and pivot doors that make a grand entrance.",
    longDescription: "Make a great first impression with our premium hinge and pivot doors. They are built to last a lifetime, with strong hinges and multi-point locks for extra security. Made to fit any doorway, these doors open smoothly and give your home a modern, stylish look.",
    features: [
      "Strong pivot hinges for large, heavy doors",
      "Multi-point locking for better security",
      "Fully weather-sealed frames",
      "Custom glass inserts (frosted, tinted, or clear)",
      "Stainless steel pull handles"
    ],
    imagePath: "/images/pivot_door.png",
    iconName: "DoorClosed",
    featured: true
  },
  {
    id: "sliding-stacking",
    title: "Sliding & Stacking Doors",
    slug: "/services/sliding-stacking",
    shortDescription: "Sliding and stacking doors that open your home up to the outdoors.",
    longDescription: "Open your living space to the garden or patio with our sliding and stacking doors. They glide smoothly on stainless steel rollers and fold away to create a wide, open entrance. Enjoy full views, plenty of daylight, and a great indoor-outdoor flow.",
    features: [
      "Smooth-gliding stainless steel rollers",
      "Up to 6 panels that stack together",
      "Interlocking panels that resist strong winds",
      "Optional step-free (flush) design for easy walking",
      "Keyed locks and security deadbolts"
    ],
    imagePath: "/images/sliding_doors.png",
    iconName: "Columns",
    featured: true
  },
  {
    id: "shopfronts",
    title: "Commercial Shopfronts",
    slug: "/services/shopfronts",
    shortDescription: "Secure glass and aluminium fronts for shops, showrooms, and offices.",
    longDescription: "Make your shop or office look professional and welcoming. Our shopfronts use strong glass and aluminium frames that handle heavy daily use, show off your products clearly, and keep your premises secure. We fit automatic or manual doors, overhead closers, and impact-resistant safety glass.",
    features: [
      "Strong commercial-grade aluminium frames",
      "Toughened safety glass up to 15mm or laminated security glass",
      "Frameless glass fronts for maximum visibility",
      "Automatic or manual entry doors",
      "Can be connected to access control systems"
    ],
    imagePath: "/images/shopfront_facade.png",
    iconName: "Store"
  },
  {
    id: "partitions",
    title: "Office Glass Partitions",
    slug: "/services/partitions",
    shortDescription: "Glass and aluminium divider walls that bring light into modern offices.",
    longDescription: "Create bright, open offices with our slimline glass partitions. They let daylight flow through your workspace while giving you privacy and cutting down noise. We offer framed and frameless styles, with matching glass doors and optional logos or frosted designs.",
    features: [
      "Slim, modern aluminium frames",
      "Laminated glass that reduces noise",
      "Frameless glass doors with minimal fittings",
      "Built-in channels for tidy cable management",
      "Custom logos or frosted patterns"
    ],
    imagePath: "/images/office_partitions.png",
    iconName: "Split"
  },
  {
    id: "enclosures",
    title: "Patio & Glass Enclosures",
    slug: "/services/enclosures",
    shortDescription: "Turn your patio, balcony, or veranda into a usable room all year round.",
    longDescription: "Make the most of your outdoor space by closing in your patio or balcony. We use powder-coated aluminium frames and weatherproof glass to create a comfortable room that blocks wind, dust, and rain — without losing the view. Enjoy your space in every season.",
    features: [
      "Built to handle wind and all weather",
      "Sliding, stacking, or folding door panels",
      "Powder-coated frames that never rust",
      "Glass options that help keep the room cool",
      "Full guttering and drainage fitted"
    ],
    imagePath: "/images/patio_enclosure.png",
    iconName: "Layers"
  },
  {
    id: "balustrades",
    title: "Aluminium Balustrades",
    slug: "/services/balustrades",
    shortDescription: "Modern glass and aluminium handrails for stairs, balconies, and pools.",
    longDescription: "Keep your home safe without hiding the view. Our aluminium and glass balustrades are built to meet strict safety standards, making them perfect for balconies, staircases, and pool areas. They look modern, never rust, and need almost no maintenance.",
    features: [
      "Built to comply with safety loading standards",
      "Toughened safety glass (10mm to 15mm)",
      "Rust-proof marine-grade aluminium",
      "Mounted on top, on the side, or recessed into the floor",
      "Minimalist look with no upright posts"
    ],
    imagePath: "/images/glass_balustrade.png",
    iconName: "Minimize"
  },
  {
    id: "showers",
    title: "Shower Doors & Enclosures",
    slug: "/services/showers",
    shortDescription: "Custom glass shower doors and enclosures to fit your bathroom.",
    longDescription: "Upgrade your bathroom with a custom glass shower enclosure. From simple frameless doors to sleek matte black framed styles, we build showers that fit your layout exactly. They are durable, easy to clean, and use quality brass fittings.",
    features: [
      "Toughened safety glass (8mm to 10mm)",
      "Minimalist frameless styles",
      "Easy-clean glass that resists limescale",
      "Magnetic seals that keep water in",
      "Quality brass hinges and bars in chrome or black"
    ],
    imagePath: "/images/shower_enclosure.png",
    iconName: "ShowerHead"
  },
  {
    id: "custom",
    title: "Custom Aluminium Fabrication",
    slug: "/services/custom",
    shortDescription: "Bespoke gates, louvres, frames, and structures built from scratch.",
    longDescription: "If you can imagine it, we can build it. Our team designs and makes custom aluminium products from scratch — from automated driveway gates and privacy louvres to feature walls and cladding. Whatever you need, we craft it to fit your space perfectly.",
    features: [
      "3D design drawings before we start building",
      "Precision cutting, milling, and welding",
      "Wide choice of powder-coated colours",
      "Great for feature walls and standout designs",
      "Full service from design to final installation"
    ],
    imagePath: "/images/slatted_gate.png",
    iconName: "Wrench",
    featured: true
  },
  {
    id: "repairs",
    title: "Repairs & Replacements",
    slug: "/services/repairs",
    shortDescription: "Fast repairs for sliding doors, locks, broken glass, and worn seals.",
    longDescription: "Get your windows and doors working like new again. We fix worn rollers, broken glass, stiff locks, and damaged seals for homes and businesses. A quick repair can add years of life to your existing frames — often for a fraction of the cost of replacement.",
    features: [
      "Emergency glass replacement for windows and shopfronts",
      "Replace worn sliding door rollers and repair tracks",
      "Upgrade to modern energy-saving glass",
      "Fix or replace locks and handles",
      "Replace worn weather seals and rubber gaskets"
    ],
    imagePath: "/images/window_repair.png",
    iconName: "Settings"
  },
  {
    id: "burglar-bars",
    title: "Burglar Bars & Security Screens",
    slug: "/services/burglar-bars",
    shortDescription: "Strong, stylish burglar bars and security screens that don't make your home look like a prison.",
    longDescription: "Keep your family safe with our aluminium burglar bars and security screens. Unlike old steel bars, they are rust-proof, light, and come in modern colours that blend in with your windows and doors. They meet insurance security requirements and keep your home looking good.",
    features: [
      "Powder-coated aluminium bars — no rust, no repainting",
      "Made to match your windows and doors",
      "Quick-release options for fire escape safety",
      "Available in Charcoal, White, and Satin Silver",
      "Strong tamper-proof fixings"
    ],
    imagePath: "/images/slatted_gate.png",
    iconName: "Shield",
    featured: true
  },
  {
    id: "trellis-doors",
    title: "Aluminium Trellis Security Doors",
    slug: "/services/trellis-doors",
    shortDescription: "Retractable aluminium trellis security doors for entrances, patios, and passageways.",
    longDescription: "Add an extra layer of security to your home without blocking air or light. Our aluminium trellis doors slide or fold open when you need them and lock securely to keep intruders out. Perfect for front doors, kitchen entrances, and passageways in complexes and estates.",
    features: [
      "Strong aluminium slats with anti-lift hinges",
      "Smooth-gliding track with locking mechanism",
      "Custom sizes to fit any doorway or passage",
      "Powder-coated to match your doors and frames",
      "Optional slam-lock and keyed-alike options"
    ],
    imagePath: "/images/sliding_doors.png",
    iconName: "Lock",
    featured: true
  },
  {
    id: "gutters",
    title: "Aluminium Gutters & Fascias",
    slug: "/services/gutters",
    shortDescription: "Seamless aluminium gutters, downpipes, and fascias — custom-cut on site for a perfect fit.",
    longDescription: "Protect your home from water damage with our seamless aluminium gutters. Unlike plastic gutters that crack in the sun or steel that rusts, our gutters are made on site to your exact measurements. Fewer joins means fewer leaks, and the powder-coated finish matches your roof for a clean look.",
    features: [
      "Seamless gutters with no joints — fewer leaks",
      "Powder-coated to match your roof and fascias",
      "Leaf guards and downpipe options available",
      "Rust-proof for coastal and Highveld conditions",
      "Full fascia board replacement service"
    ],
    imagePath: "/images/office_partitions.png",
    iconName: "CloudRain"
  },
  {
    id: "fly-screens",
    title: "Fly & Insect Screens",
    slug: "/services/fly-screens",
    shortDescription: "Custom insect screens for windows, doors, and patios — enjoy fresh air without the bugs.",
    longDescription: "Keep mosquitoes, flies, and insects out while letting fresh air into your home. Our aluminium-framed screens are made to fit your windows and doors perfectly. Choose from fixed, sliding, or retractable styles with durable mesh that lasts.",
    features: [
      "Light aluminium frames in several colours",
      "Fibreglass or stainless steel mesh (pet-resistant available)",
      "Fixed, sliding, and retractable screen styles",
      "Custom-made for any window or door",
      "Easy to clean and UV-resistant"
    ],
    imagePath: "/images/window_detail.png",
    iconName: "Sun"
  },
  {
    id: "pergolas",
    title: "Aluminium Pergolas & Carports",
    slug: "/services/pergolas",
    shortDescription: "Custom aluminium pergolas, louvre roofs, and carports for outdoor living.",
    longDescription: "Create the perfect outdoor entertainment area with our aluminium pergolas and carports. Whether you want shade over a braai area, a covered parking spot, or an outdoor lounge with an adjustable louvre roof, we build structures that last through Gauteng storms and summer heat.",
    features: [
      "Free-standing or attached to your house",
      "Adjustable louvre roofs (manual or motorized)",
      "Carports with guttering and drainage",
      "Powder-coated frames that never rust or warp",
      "Optional lighting, drop-down blinds, and side panels"
    ],
    imagePath: "/images/patio_enclosure.png",
    iconName: "Home"
  },
  {
    id: "skylights",
    title: "Skylights & Roof Windows",
    slug: "/services/skylights",
    shortDescription: "Aluminium-framed skylights and roof windows that bring natural light into dark rooms.",
    longDescription: "Brighten up dark hallways, bathrooms, and kitchens with our custom aluminium skylights. We supply and install fixed or opening skylights with energy-saving glass that keeps heat out in summer and warmth in during winter. Fully weather-sealed so you won't get leaks.",
    features: [
      "Fixed, manual, or electric opening skylights",
      "Double-glazed and heat-reflective glass available",
      "Frames designed to prevent condensation",
      "Fits tiled, slate, and metal roofs",
      "Optional remote-controlled blinds and rain sensors"
    ],
    imagePath: "/images/window_detail.png",
    iconName: "Sun"
  },
  {
    id: "frameless-glass",
    title: "Frameless Glass Systems",
    slug: "/services/frameless-glass",
    shortDescription: "Floor-to-ceiling frameless glass walls, doors, and balustrades for a clean modern look.",
    longDescription: "Get a truly minimal look with our frameless glass installations. From glass pivot doors and room dividers to glass balustrades and pool fencing, we use thick toughened safety glass with neat stainless steel fittings for a clean, uncluttered finish with uninterrupted views.",
    features: [
      "Thick toughened safety glass (12mm to 15mm)",
      "Neat stainless steel fittings",
      "Recessed or surface-mounted base channels",
      "Frameless glass doors with smooth floor springs",
      "Uninterrupted views with no upright posts"
    ],
    imagePath: "/images/glass_balustrade.png",
    iconName: "Layers"
  },
  {
    id: "garage-doors",
    title: "Aluminium Garage Doors",
    slug: "/services/garage-doors",
    shortDescription: "Modern aluminium garage doors — sectional, tilt-up, and roll-up styles for homes.",
    longDescription: "Give your home a smarter look with a premium aluminium garage door. Available in sectional, tilt-up, and roll-up styles, our doors are light yet strong, well insulated, and come in powder-coated colours to match your home. Can be automated with a remote control.",
    features: [
      "Insulated panels that keep the garage warm in winter",
      "Quiet remote-controlled automation with battery backup",
      "Sectional, tilt-up, and roll-up styles available",
      "Powder-coated colours to match your home",
      "Safety sensors and manual override for emergencies"
    ],
    imagePath: "/images/slatted_gate.png",
    iconName: "DoorClosed"
  },
  {
    id: "mirrors-glass",
    title: "Mirrors & Custom Glass",
    slug: "/services/mirrors-glass",
    shortDescription: "Custom-cut mirrors, glass splashbacks, tabletops, and decorative glass for homes and businesses.",
    longDescription: "From gym mirrors and wardrobe doors to kitchen splashbacks and glass table tops, we supply and install custom-cut glass and mirrors for any home or business. All edges are polished for safety, and we use only SABS-approved glass with optional tints, frosting, and digital printing.",
    features: [
      "Custom-cut mirrors for gyms, wardrobes, bathrooms",
      "Glass kitchen splashbacks that are easy to clean",
      "Glass table tops, shelves, and display cases",
      "Frosting, sandblasting, and printed designs",
      "All edges polished and beveled for safety"
    ],
    imagePath: "/images/shopfront_facade.png",
    iconName: "Sparkles"
  }
];
