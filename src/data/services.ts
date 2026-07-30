export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  features: string[];
  imagePath: string;
  iconName: string;
}

export const services: Service[] = [
  {
    id: "windows",
    title: "Aluminium Windows",
    slug: "/services/windows",
    shortDescription: "Tailored window systems for maximum natural light, thermal insulation, and structural durability.",
    longDescription: "Our aluminium windows combine architectural aesthetics with structural integrity. Fabricated from high-grade architectural alloys and paired with premium glazing, they withstand severe wind loads while delivering superior thermal and acoustic performance. Ideal for luxury homes, offices, and multi-unit developments.",
    features: [
      "Toughened or laminated safety glass options",
      "Double glazing available for extreme thermal efficiency",
      "Double-rub seal systems to eliminate draughts and water leaks",
      "Available in Casement, Sliding, Folding, and Fixed formats",
      "Premium hardware, locks, and friction stays"
    ],
    imagePath: "/images/window_detail.png",
    iconName: "Grid"
  },
  {
    id: "doors",
    title: "Aluminium Doors",
    slug: "/services/doors",
    shortDescription: "Secure, weatherproof hinge and pivot doors designed for striking architectural entrances.",
    longDescription: "Create a memorable entrance with our premium hinge and pivot doors. Engineered for lifelong durability, these doors feature heavy-duty pivot mechanisms and multi-point locking. Custom-built for any architectural opening with seamless operation and a bold modern aesthetic.",
    features: [
      "Heavy-duty pivot hinges for oversized doors",
      "Multi-point safety locking systems",
      "Fully weather-sealed frames",
      "Custom glass inserts (frosted, tinted, or clear)",
      "Premium pull handles in brushed stainless steel"
    ],
    imagePath: "/images/pivot_door.png",
    iconName: "DoorClosed"
  },
  {
    id: "sliding-stacking",
    title: "Sliding & Stacking Doors",
    slug: "/services/sliding-stacking",
    shortDescription: "Smooth-gliding sliding and multi-panel stacking doors that open living spaces to the outdoors.",
    longDescription: "Transform your living area with our sliding and multi-panel stacking doors. Engineered with stainless-steel rollers, these large-format glass systems glide effortlessly to merge indoor and outdoor spaces, offering panoramic views and abundant daylight.",
    features: [
      "Smooth-glide stainless steel roller tracks",
      "Multi-panel stacking configuration (up to 6 panels)",
      "Interlocking stiles for high wind resistance",
      "Flush threshold options for seamless flooring transitions",
      "Keyed locks and security deadbolts"
    ],
    imagePath: "/images/sliding_doors.png",
    iconName: "Columns"
  },
  {
    id: "shopfronts",
    title: "Commercial Shopfronts",
    slug: "/services/shopfronts",
    shortDescription: "High-impact, secure glass and aluminium facade systems for retail stores, showrooms, and offices.",
    longDescription: "Make a powerful first impression with our commercial-grade shopfront and facade systems. Designed to withstand heavy foot traffic and offer maximum product visibility, our shopfronts integrate heavy-duty automated or manual double-entry doors, robust overhead closers, and impact-resistant safety glass.",
    features: [
      "Heavy-duty commercial-grade framing profiles",
      "Toughened safety glass up to 15mm or laminated security glass",
      "Frameless glass facades for maximum transparency",
      "Transom-mounted door closers and panic hardware",
      "Custom integration with access control systems"
    ],
    imagePath: "/images/shopfront_facade.png",
    iconName: "Store"
  },
  {
    id: "partitions",
    title: "Office Glass Partitions",
    slug: "/services/partitions",
    shortDescription: "Acoustically insulated glass and aluminium divider walls for modern corporate offices.",
    longDescription: "Create productive, well-lit spaces with our slimline aluminium and glass partitions. They allow daylight to flood through your offices while providing physical separation and acoustic privacy. We offer framed and frameless styles, integrated glass doors, and custom manifestation vinyl wrapping.",
    features: [
      "Slimline architectural aluminium profiles",
      "Acoustic PVB laminated glass for sound reduction",
      "Frameless glass doors with patch fittings",
      "Integrated cable management channels",
      "Custom manifestation vinyl (logos, frosted designs)"
    ],
    imagePath: "/images/office_partitions.png",
    iconName: "Split"
  },
  {
    id: "enclosures",
    title: "Patio & Glass Enclosures",
    slug: "/services/enclosures",
    shortDescription: "Turn your patio, balcony, or veranda into a weatherproof, beautiful year-round living area.",
    longDescription: "Maximize your property's footprint by enclosing outdoor verandas and balconies. Using high-grade powder-coated aluminium frames and weatherproof glass pane arrays, we convert exposed patios into insulated, cozy rooms that block wind, dust, and rain without sacrificing the views.",
    features: [
      "Fully weather-resistant and wind-tested structures",
      "Integrated sliding, stacking, or folding door panels",
      "Durable powder-coated frames (rust & corrosion-proof)",
      "Solar-control glass options to regulate temperature",
      "Full guttering and drainage integration"
    ],
    imagePath: "/images/patio_enclosure.png",
    iconName: "Layers"
  },
  {
    id: "balustrades",
    title: "Aluminium Balustrades",
    slug: "/services/balustrades",
    shortDescription: "Safe, structurally sound, and modern glass-and-aluminium handrails for stairs and balconies.",
    longDescription: "Ensure safety without compromising on style. Our custom aluminium and glass balustrades are engineered to meet strict structural loads. Perfect for balconies, staircases, and pool enclosures, they provide safety and architectural sophistication with zero-maintenance frames.",
    features: [
      "Complies with structural loading safety codes",
      "Toughened safety glass panels (10mm to 15mm)",
      "Corrosion-free marine-grade powder-coated aluminium",
      "Top-mounted, side-mounted, or floor-recessed channels",
      "Minimalist design with no vertical posts options"
    ],
    imagePath: "/images/glass_balustrade.png",
    iconName: "Minimize"
  },
  {
    id: "showers",
    title: "Shower Doors & Enclosures",
    slug: "/services/showers",
    shortDescription: "Frameless and framed luxury glass shower enclosures tailored to fit your bathroom layout.",
    longDescription: "Upgrade your bathroom with custom glass shower enclosures. From minimalist frameless pivot screens to sleek matte black framed sliders, we design and install durable, easy-to-clean showers that fit your layout. Uses water-repelling coatings and premium solid-brass hardware.",
    features: [
      "Toughened safety glass (8mm to 10mm)",
      "Minimalist frameless configurations",
      "Anti-limescale easy-clean glass coatings",
      "Magnetic water-tight seals",
      "Premium brass hinges and support bars in chrome or black"
    ],
    imagePath: "/images/shower_enclosure.png",
    iconName: "ShowerHead"
  },
  {
    id: "custom",
    title: "Custom Aluminium Fabrication",
    slug: "/services/custom",
    shortDescription: "Bespoke architectural structures, louvres, frames, and gates designed and built from scratch.",
    longDescription: "If you can imagine it, we can build it. Our engineering team designs and manufactures bespoke aluminium products from scratch. From automated driveway gates and privacy louvres to custom cladding structures, we specialize in high-end, tailormade engineering projects.",
    features: [
      "Custom 3D CAD design and structural modeling",
      "Precision CNC cutting, milling, and TIG/MIG welding",
      "Wide choice of architectural powder coatings",
      "Ideal for architectural focal points and feature walls",
      "Turnkey solutions from concept design to final site fit"
    ],
    imagePath: "/images/slatted_gate.png",
    iconName: "Wrench"
  },
  {
    id: "repairs",
    title: "Repairs & Replacements",
    slug: "/services/repairs",
    shortDescription: "Rapid service for sliding door rollers, locks, broken glass pane replacements, and seal upgrades.",
    longDescription: "Restore security and functionality to your windows and doors. We offer a full maintenance service for residential and commercial clients. We replace worn-out rollers, broken glass panels, stiff locks, and damaged rubber seals, extending the lifespan of your original installations.",
    features: [
      "Emergency glass replacement for broken windows and shopfronts",
      "Replacement of worn sliding door rollers and track repairs",
      "Upgrade to modern energy-efficient glass",
      "Repair or replacement of high-security locks and handles",
      "Replacement of degraded weather seals and rubber gaskets"
    ],
    imagePath: "/images/window_repair.png",
    iconName: "Settings"
  },
  {
    id: "burglar-bars",
    title: "Burglar Bars & Security Screens",
    slug: "/services/burglar-bars",
    shortDescription: "Strong, stylish aluminium burglar bars and security screens that protect without making your home look like a prison.",
    longDescription: "Keep your family safe with our custom aluminium burglar bars and security screens. Unlike old-fashioned steel bars, our aluminium systems are rust-proof, lightweight, and available in modern powder-coated finishes that blend seamlessly with your windows and doors. Compliant with insurance security requirements.",
    features: [
      "Powder-coated aluminium bars (no rust, no repainting)",
      "Custom-designed to match your window and door profiles",
      "Quick-release options for fire escape compliance",
      "Available in Charcoal, White, and Satin Silver finishes",
      "SABS-approved mounting anchors and tamper-proof fixings"
    ],
    imagePath: "/images/slatted_gate.png",
    iconName: "Shield"
  },
  {
    id: "trellis-doors",
    title: "Aluminium Trellis Security Doors",
    slug: "/services/trellis-doors",
    shortDescription: "Retractable aluminium trellis security doors for front entrances, patios, and passageways.",
    longDescription: "Add an extra layer of security to your home without sacrificing airflow or visibility. Our aluminium trellis doors slide or fold open when not needed and lock securely to prevent unauthorized access. Perfect for front doors, kitchen entrances, and passageways in complexes and estates.",
    features: [
      "Heavy-duty aluminium slats with anti-lift hinges",
      "Smooth-glide track system with locking mechanism",
      "Custom sizes to fit any doorway or passage",
      "Powder-coated to match your existing doors and frames",
      "Optional slam-lock and keyed-alike cylinder options"
    ],
    imagePath: "/images/sliding_doors.png",
    iconName: "Lock"
  },
  {
    id: "gutters",
    title: "Aluminium Gutters & Fascias",
    slug: "/services/gutters",
    shortDescription: "Seamless aluminium gutters, downpipes, and fascia boards — custom-cut on site for a perfect fit.",
    longDescription: "Protect your property from water damage with our seamless aluminium guttering systems. Unlike plastic gutters that crack in the sun or steel that rusts, our aluminium gutters are roll-formed on site to your exact measurements. Zero joins means zero leaks, and the powder-coated finish matches your roof profile for a clean look.",
    features: [
      "Seamless roll-formed gutters — no joints, no leaks",
      "Custom powder-coated to match roof and fascia colours",
      "Integrated leaf guards and downpipe solutions",
      "Corrosion-proof for coastal and Highveld conditions",
      "Full fascia board replacement and barge board services"
    ],
    imagePath: "/images/office_partitions.png",
    iconName: "CloudRain"
  },
  {
    id: "fly-screens",
    title: "Fly & Insect Screens",
    slug: "/services/fly-screens",
    shortDescription: "Custom aluminium-framed insect screens for windows, doors, and patios — enjoy fresh air without the bugs.",
    longDescription: "Keep mosquitoes, flies, and insects out while letting fresh air flow through your home. Our aluminium-framed fly screens are custom-made to fit your existing windows and doors perfectly. Available in fixed, sliding, and retractable configurations with durable fibreglass or stainless steel mesh.",
    features: [
      "Lightweight aluminium frames in multiple colour options",
      "Fibreglass or stainless steel mesh (pet-resistant available)",
      "Fixed, sliding, and magnetic retractable screen options",
      "Custom-sized for any window or door opening",
      "Easy to clean and UV-resistant for long outdoor life"
    ],
    imagePath: "/images/window_detail.png",
    iconName: "Sun"
  },
  {
    id: "pergolas",
    title: "Aluminium Pergolas & Carports",
    slug: "/services/pergolas",
    shortDescription: "Custom-designed aluminium pergolas, louvre roofs, and carports for luxury outdoor living.",
    longDescription: "Create the ultimate outdoor entertainment area with our bespoke aluminium pergolas and carports. Whether you want a shaded braai area, a covered parking space, or a full outdoor lounge with an adjustable louvre roof, we design and build structures that are engineered to last through Gauteng storms and summer heat.",
    features: [
      "Free-standing or attached aluminium pergola structures",
      "Adjustable louvre roof systems (manual or motorized)",
      "Carports with integrated guttering and drainage",
      "Powder-coated frames that never rust or warp",
      "Optional integrated lighting, drop-down blinds, and side panels"
    ],
    imagePath: "/images/patio_enclosure.png",
    iconName: "Home"
  },
  {
    id: "skylights",
    title: "Skylights & Roof Windows",
    slug: "/services/skylights",
    shortDescription: "Aluminium-framed skylights and roof windows that flood dark rooms with natural daylight.",
    longDescription: "Transform dark hallways, bathrooms, and kitchens with natural light using our custom aluminium skylights and roof window systems. We supply and install fixed, vented, and opening skylights with energy-efficient glazing that keeps heat out in summer and warmth in during winter. Fully weather-sealed and leak-proof.",
    features: [
      "Fixed, manual, and electric opening skylight options",
      "Double-glazed and solar-control glass available",
      "Thermally broken aluminium frames to prevent condensation",
      "Integrated flashing kits for tiled, slate, and metal roofs",
      "Remote-controlled blinds and rain sensors (optional)"
    ],
    imagePath: "/images/window_detail.png",
    iconName: "Sun"
  },
  {
    id: "frameless-glass",
    title: "Frameless Glass Systems",
    slug: "/services/frameless-glass",
    shortDescription: "Floor-to-ceiling frameless glass walls, doors, and balustrades for a seamless modern look.",
    longDescription: "Achieve a truly minimalist architectural look with our frameless glass installations. From frameless glass pivot doors and room dividers to frameless glass balustrades and pool fencing, we use thick toughened safety glass panels with discreet stainless steel patch fittings and minimalist base channels for a clean, uncluttered aesthetic.",
    features: [
      "12mm to 15mm toughened safety glass panels",
      "Minimalist patch fittings in brushed stainless steel",
      "Floor-recessed and surface-mounted channel options",
      "Frameless glass doors with hydraulic floor springs",
      "100% uninterrupted views with no vertical posts"
    ],
    imagePath: "/images/glass_balustrade.png",
    iconName: "Layers"
  },
  {
    id: "garage-doors",
    title: "Aluminium Garage Doors",
    slug: "/services/garage-doors",
    shortDescription: "Modern aluminium garage doors — sectional, tilt-up, and roll-up styles for residential homes.",
    longDescription: "Upgrade your home's curb appeal with a premium aluminium garage door. Available in sectional, tilt-up, and roll-up configurations, our doors are lightweight yet strong, fully insulated, and available in a range of powder-coated colours to match your windows and front door. Automated with remote-controlled motors.",
    features: [
      "Insulated double-skinned aluminium panels for thermal efficiency",
      "Quiet belt-drive automation with battery backup",
      "Sectional, tilt-up, and roll-up styles available",
      "Custom powder-coated colours to match your home's exterior",
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
    longDescription: "From gym mirrors and wardrobe doors to kitchen splashbacks and glass table tops, we supply and install custom-cut glass and mirrors for any residential or commercial application. All edges are polished for safety, and we use only SABS-approved glass with optional tints, frosting, and digital printing.",
    features: [
      "Custom-cut mirrors — gyms, wardrobes, bathrooms, dance studios",
      "Glass kitchen splashbacks with heat-resistant backing",
      "Glass table tops, shelves, and display cases",
      "Decorative sandblasting, frosting, and digital print options",
      "All edges polished and beveled for safety and finish"
    ],
    imagePath: "/images/shopfront_facade.png",
    iconName: "Sparkles"
  }
];
