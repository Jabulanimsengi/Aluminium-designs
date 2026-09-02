import { ServiceFAQ } from '../../types/service';

export interface RawServiceFAQTemplate {
  question: string;
  answerTemplate: string;
}

export class ServiceFaqRegistry {
  /**
   * Comprehensive FAQ repository organized by service slug or service category.
   */
  private static faqMap: Record<string, RawServiceFAQTemplate[]> = {
    // 1. Aluminium Windows
    'aluminium-windows': [
      {
        question: 'What is the difference between standard 28mm and heavy-duty 38mm aluminium window profiles?',
        answerTemplate: 'The 28mm casing is the standard residential profile ideal for small to medium openings (up to 1.5m), offering sleek sightlines and reliable everyday durability. The 38mm architectural system is engineered for large glass spans, multi-story buildings, and high-wind zones near {areaName}, supporting heavier laminated safety glass and double-glazed units without profile deflection.'
      },
      {
        question: 'Can you replace old steel window frames with aluminium without damaging interior wall tiles or plaster near {areaName}?',
        answerTemplate: 'Yes. Our specialized conversion teams carefully cut away old steel frames from the inside of the brick reveal without chiseling into your wall plaster or damaging bathroom and kitchen tiles. The new custom-built aluminium frame is sealed with structural fixings and high-grade perimeter waterproofing silicone for a clean, maintenance-free finish.'
      },
      {
        question: 'What safety glass is legally required under SANS 10400 building regulations for windows?',
        answerTemplate: 'Under SANS 10400-N, any window within 300mm of the finished floor level, any window in a bathroom or wet area, and any large glass panel exceeding specific area thresholds must be glazed with 6.38mm laminated safety glass or toughened safety glass. We ensure 100% compliance with South African national building standards on all installations near {areaName}.'
      },
      {
        question: 'How do double-glazed aluminium windows improve indoor thermal comfort during winter?',
        answerTemplate: 'Double-glazed windows feature two panes of glass separated by a hermetically sealed air or argon gas cavity. This creates a thermal barrier that reduces winter heat loss through your glass by up to 64% and blocks harsh summer solar radiation, maintaining comfortable interior temperatures in {areaName} while lowering heating and cooling electricity costs.'
      },
      {
        question: 'How do I clean and maintain aluminium window sliding tracks and friction stays?',
        answerTemplate: 'Aluminium frames require minimal maintenance. Simply vacuum dust and debris from the bottom sliding tracks every few months and wipe the powder-coated frames with mild soapy water. Spray silicone-based lubricant on stainless steel friction stays and window latches once a year to maintain effortless, whisper-quiet operation.'
      },
      {
        question: 'What is the estimated turnaround time from on-site measuring to final window installation near {areaName}?',
        answerTemplate: 'Standard custom-sized aluminium windows are typically fabricated in our workshop within 5 to 7 working days following precise on-site measuring. Our mobile installation team can fit an average residential home (6 to 10 windows) in just 1 to 2 days with minimal disruption to your daily routine.'
      }
    ],

    // 2. Steel to Aluminium Conversions
    'steel-to-aluminium-conversions': [
      {
        question: 'How does the steel-to-aluminium window conversion process work without breaking wall plaster near {areaName}?',
        answerTemplate: 'Our experienced conversion technicians cut the old steel frame out from the inside of the reveal using specialized reciprocating tools. The brickwork, interior wall plaster, and surrounding tiles remain intact. The custom-manufactured aluminium frame is then anchored into the reveal and sealed with waterproof structural silicone.'
      },
      {
        question: 'Can you convert old wooden window frames to aluminium near {areaName}?',
        answerTemplate: 'Yes. We routinely remove swollen, warped, or rotting wooden window and door frames and replace them with custom powder-coated aluminium frames that never rot, swell, or require sanding and varnishing.'
      },
      {
        question: 'What happens to the old steel and glass after removal?',
        answerTemplate: 'Our installation teams safely remove, transport, and responsibly dispose of or recycle all old steel frames and broken glass from your property near {areaName} at no extra charge.'
      },
      {
        question: 'How much does it cost to convert a house from steel to aluminium windows near {areaName}?',
        answerTemplate: 'Individual window conversions start from R1,850 per opening. Full house conversion packages (6 to 12 windows) range from R14,500 to R38,000 depending on dimensions, opening styles, and safety glass choices.'
      },
      {
        question: 'Do aluminium replacement windows improve home security compared to old steel frames?',
        answerTemplate: 'Yes. Modern aluminium windows feature multi-point safety latches, heavy-duty friction stays that cannot be forced from outside, and impact-resistant 6.38mm laminated safety glass that resists smash-and-grab attempts near {areaName}.'
      },
      {
        question: 'How long does a full home window conversion take in {areaName}?',
        answerTemplate: 'An average home conversion of 8 to 12 windows is typically completed in 1 to 2 working days, leaving your home secure, clean, and fully sealed at the end of each work day.'
      }
    ],

    // 3. Aluminium Doors (Sliding, Stacking, Pivot, French)
    'aluminium-doors': [
      {
        question: 'How many panels can be configured for aluminium folding stacking doors?',
        answerTemplate: 'Aluminium stacking doors (vista fold systems) can be configured with anywhere from 3 up to 10 folding leaves, spanning openings from 2.1 metres up to 9 metres wide near {areaName}. Panels can fold to one side or split and fold to both sides, opening up 90% of your wall space for seamless indoor-outdoor living.'
      },
      {
        question: 'Are aluminium patio sliding doors completely weatherproof against heavy Highveld summer storms?',
        answerTemplate: 'Yes. Our aluminium sliding doors feature deep bottom drainage channels, double-finned weather wool-pile seals, and UV-resistant EPDM rubber gaskets that prevent water ingress and wind drafts during severe storms in {areaName}.'
      },
      {
        question: 'What type of locks and security hardware are fitted to exterior aluminium doors?',
        answerTemplate: 'We fit multi-point hook locks, heavy-duty deadbolts, and tamper-resistant stainless steel cylinders. For double and French doors, concealed flush bolts secure the slave leaf. All glass fitted in doors is 6.38mm laminated safety glass to prevent smash-and-grab entry.'
      },
      {
        question: 'Can an aluminium pivot entrance door be custom-manufactured for an extra-wide opening near {areaName}?',
        answerTemplate: 'Absolutely. We custom manufacture grand pivot entrance doors up to 1.5 metres wide and 2.7 metres high. Pivot doors operate on heavy-duty top and bottom pivot hinges and can include matching side-lights and horizontal slatted or full-glass architectural designs.'
      },
      {
        question: 'What is the lifespan and warranty on sliding door rollers and bottom tracks?',
        answerTemplate: 'We use heavy-duty stainless steel and nylon ball-bearing rollers designed for over 100,000 smooth sliding cycles. All sliding and stacking door mechanisms installed near {areaName} come with our comprehensive manufacturer warranty and easy roller replacement support.'
      },
      {
        question: 'How much do custom aluminium sliding and stacking doors cost near {areaName}?',
        answerTemplate: 'A standard 2-panel patio sliding door (1800x2100mm) starts from R5,800 fitted, while 3-panel stacking doors (2400x2100mm) start from R14,500. We provide free on-site measuring and itemized written quotations across {areaName}.'
      }
    ],

    // 4. Glass Patio Enclosures & Sunrooms
    'glass-patio-enclosures': [
      {
        question: 'What is the difference between frameless glass patio curtains and framed stacking doors near {areaName}?',
        answerTemplate: 'Frameless glass patio curtains use heavy 10mm or 12mm toughened glass panels without vertical aluminium frames, providing a 100% unobstructed panoramic view. Framed folding stacking doors use robust architectural aluminium profiles with double-weather seals, offering maximum thermal insulation and airtight storm resistance.'
      },
      {
        question: 'Do I need municipal plans to enclose an existing covered patio or braai veranda in {areaName}?',
        answerTemplate: 'Enclosing an existing covered patio with glass doors or windows generally does not alter the structural roof footprint of the house. We build all enclosures strictly compliant with SANS 10400 safety glazing regulations and can provide structural engineer certificates where required.'
      },
      {
        question: 'How do you prevent an enclosed glass patio from overheating in summer?',
        answerTemplate: 'We install Low-E solar performance glass and tinted solar laminates that reflect up to 80% of heat radiation while allowing clear natural daylight into your living space near {areaName}.'
      },
      {
        question: 'Can folding glass patio doors slide and fold around corners?',
        answerTemplate: 'Yes. Our specialized multi-track systems can be engineered to slide around 90-degree corner pillars, leaving the entire corner of your veranda completely open without a fixed center post.'
      },
      {
        question: 'What is the price per square metre for a custom glass patio enclosure near {areaName}?',
        answerTemplate: 'Patio enclosures range from R3,800 to R6,500 per m² depending on whether you choose framed vista-fold systems or frameless glass curtains, glass solar specifications, and custom roof integrations.'
      },
      {
        question: 'How long does fabrication and on-site installation take for a patio sunroom near {areaName}?',
        answerTemplate: 'Custom fabrication takes 7 to 10 working days following final laser measurements. On-site installation is typically completed in 2 to 4 working days with full weatherproofing and silicone curing.'
      }
    ],

    // 5. Frameless Shower Doors & Custom Mirrors
    'frameless-shower-doors': [
      {
        question: 'What safety glass is used for custom frameless shower doors near {areaName}?',
        answerTemplate: 'All our frameless shower panels and doors are fabricated from certified 10mm or 12mm high-impact toughened safety glass conforming to SANS 1263-1, with diamond-polished flat ground edges.'
      },
      {
        question: 'How do you prevent water leaks from a frameless glass shower enclosure?',
        answerTemplate: 'We install anti-microbial translucent magnetic PVC door seals, bottom water deflector sweeps, and slimline aluminium or acrylic water dam thresholds that channel shower spray back into the shower tray or floor drain near {areaName}.'
      },
      {
        question: 'Can you supply fluted, reeded, or frosted privacy glass shower panels in {areaName}?',
        answerTemplate: 'Yes. We supply on-trend architectural fluted (reeded) glass, acid-etched frosted privacy panels, and ultra-clear low-iron crystal glass paired with matte black, brushed brass, or chrome hardware.'
      },
      {
        question: 'Can you cut and fit custom mirrors for bathrooms and home gyms near {areaName}?',
        answerTemplate: 'Yes. We custom cut, polish, bevel, and install 5mm and 6mm distortion-free silver float mirrors for bathroom vanities, walk-in closets, home gyms, and dance studios across {areaName}.'
      },
      {
        question: 'What is the starting price for a custom frameless shower door near {areaName}?',
        answerTemplate: 'Single walk-in return panels start from R3,200 fitted, while complete inline hinged shower doors and corner quadrant enclosures range from R4,200 to R8,900 including heavy-duty solid brass hardware.'
      },
      {
        question: 'When should final shower measurements be taken during a bathroom renovation in {areaName}?',
        answerTemplate: 'Final laser measurements must be taken after all wall and floor tiling is 100% complete to ensure millimeter-accurate custom glass fabrication.'
      }
    ],

    // 6. Aluminium Fly Screens & Insect Mesh
    'aluminium-fly-screens': [
      {
        question: 'How do aluminium fly screens attach to existing windows and sliding doors near {areaName}?',
        answerTemplate: 'For windows, screens clip neatly into the outer window reveal with magnetic catches or stainless steel spring clips. For patio sliding doors, we install slimline top and bottom guide tracks allowing the fly screen door to slide smoothly alongside your glass doors.'
      },
      {
        question: 'What is claw-proof pet mesh and how does it protect against dogs and cats?',
        answerTemplate: 'Pet mesh is heavy-gauge vinyl-coated polyester mesh that is 7 times stronger than traditional fiberglass insect mesh. It resists scratching, clawing, and pushing from dogs and cats without tearing or fraying near {areaName}.'
      },
      {
        question: 'Will insect fly screens block fresh air circulation or obscure my view?',
        answerTemplate: 'No. Our high-transparency fiberglass and stainless steel mesh allows over 85% natural airflow and daylight while blocking mosquitoes, flies, moths, and gnats.'
      },
      {
        question: 'Can fly screens be custom color-matched to my existing window frames in {areaName}?',
        answerTemplate: 'Yes. We powder-coat the slimline aluminium screen frames in Matte Charcoal (VP7049), Matte Black, Pure White, Bronze, or Natural Silver to match your window and door frames perfectly.'
      },
      {
        question: 'What is the cost of custom aluminium fly screens near {areaName}?',
        answerTemplate: 'Standard window fly screens start from R650 to R950 fitted. Retractable roll-up door screens and sliding patio pet-screen doors range from R1,850 to R3,800.'
      },
      {
        question: 'How do you clean and maintain insect screens in highveld dust conditions?',
        answerTemplate: 'Simply unclip the lightweight screens and rinse with a hose and mild soapy water or vacuum the mesh with a soft brush attachment.'
      }
    ],

    // 7. Sliding Door Repairs & Roller Replacement
    'sliding-door-repairs': [
      {
        question: 'Why is my aluminium sliding door heavy to push or scraping along the floor in {areaName}?',
        answerTemplate: 'Heavy sliding doors are almost always caused by worn, collapsed, or seized nylon rollers, or a pitted, grooved bottom track. Replacing the rollers with heavy-duty double-tandem ball-bearing carriages and installing a stainless steel track cover restores effortless one-finger sliding.'
      },
      {
        question: 'What is stainless steel track capping and how does it fix damaged sliding rails?',
        answerTemplate: 'Instead of replacing the entire expensive bottom frame, we machine away grooves and fit a precision mirror-smooth stainless steel cap over the aluminium rail, creating a permanent, corrosion-proof running surface for the new rollers near {areaName}.'
      },
      {
        question: 'Can you replace shattered glass in my aluminium sliding door or window near {areaName}?',
        answerTemplate: 'Yes. Our mobile repair vans carry certified SANS 10400 6.38mm laminated safety glass to reglaze broken sliding doors, windows, and shopfronts on-site.'
      },
      {
        question: 'Can you fix or replace a sliding door hook lock that won’t latch or lock properly in {areaName}?',
        answerTemplate: 'Yes. We carry replacement multi-point hook locks, flush mortice handles, and euro-profile key cylinders to restore full security to your patio doors.'
      },
      {
        question: 'How much does a sliding door roller replacement service cost near {areaName}?',
        answerTemplate: 'A complete on-site sliding door service including heavy-duty roller replacement, track cleaning, and height alignment starts from R850 to R1,450.'
      },
      {
        question: 'How quickly can a mobile repair technician visit my property near {areaName}?',
        answerTemplate: 'Our mobile repair vans operate daily across {areaName}. We can typically dispatch a technician for same-day or 24-48h repair bookings.'
      }
    ],

    // 8. Clear Burglar Bars (Polycarbonate Transparent Security)
    'clear-burglar-bars': [
      {
        question: 'Can clear polycarbonate burglar bars be cut with a knife, saw, or hand tools?',
        answerTemplate: 'No. Our transparent security bars are extruded from 100% virgin high-tensile optical polycarbonate, the same impact-resistant material used in police riot shields and aircraft windshields. They cannot be cut with a utility knife, hacksaw, or household hand tools and withstand extreme blunt force impacts exceeding 3,000 kg without shattering.'
      },
      {
        question: 'Will transparent clear burglar bars turn yellow or turn brittle in the South African sun?',
        answerTemplate: 'Our clear bars feature dual-sided UV protective co-extrusion technology designed specifically for the intense African sun. They are guaranteed against UV degradation, clouding, yellowing, or becoming brittle for 10 years when installed on properties near {areaName}.'
      },
      {
        question: 'Are clear burglar bars approved by South African short-term home insurance companies?',
        answerTemplate: 'Yes. Major South African home insurers accept certified polycarbonate clear burglar bars as an approved physical security barrier, provided they are fastened directly into the window frame at standard insurance-approved spacing (typically 100mm to 120mm intervals).'
      },
      {
        question: 'How are clear security bars fastened to aluminium vs wooden vs steel window frames?',
        answerTemplate: 'On aluminium frames, bars are secured into the internal frame reveal using high-tensile pop rivets or tamper-proof one-way security screws with specialized nylon spacers that prevent rattling. On timber and steel frames, heavy-duty anti-tamper security fasteners are countersunk for a neat finish.'
      },
      {
        question: 'Do clear burglar bars prevent baboons and monkeys from entering opening windows?',
        answerTemplate: 'Yes. Because the bars are installed across the opening vents at close spacing, they form a solid, rigid barrier that completely blocks baboons, monkeys, and domestic pets while allowing you to leave your windows open for fresh air near {areaName}.'
      },
      {
        question: 'What is the price of clear burglar bar installation per window near {areaName}?',
        answerTemplate: 'Clear bars start from R280 to R380 per bar including professional fitting. A typical bedroom window (3 to 4 bars) averages R1,200 to R1,800. We offer discounted full-house security packages across {areaName}.'
      }
    ],

    // 9. Trellis Security Doors & Slamlock Gates
    'trellis-doors': [
      {
        question: 'How does the emergency slamlock mechanism work on expanding security gates?',
        answerTemplate: 'The slamlock feature allows you to slide and slam the gate shut in a split second without needing a key. The internal spring-loaded deadbolts automatically lock instantly into the vertical upright, providing immediate physical protection against home invasions near {areaName}.'
      },
      {
        question: 'What is the difference between top-hung and bottom-rolling expanding security gates?',
        answerTemplate: 'Top-hung gates suspend the door weight from the top track, ensuring effortless glide and keeping the bottom floor channel slim to prevent tripping hazards. Bottom-rolling gates distribute heavy weight across the floor and are ideal for wide patio spans and industrial security barriers.'
      },
      {
        question: 'Are expanding trellis doors corrosion-resistant for exterior patio installations in Gauteng?',
        answerTemplate: 'Yes. Our trellis gates are fabricated from double-upright electro-galvanized steel flight lattices and finished with multi-stage architectural polyester powder coating. This prevents rust, peeling, and corrosion even when exposed to outdoor weather conditions near {areaName}.'
      },
      {
        question: 'Can multiple trellis security gates be keyed-alike for my home near {areaName}?',
        answerTemplate: 'Yes. We can key-alike all expanding gates, passage doors, and front entrance barriers in your property so that a single master key opens every security gate in your home, eliminating the need to carry bulky keychains.'
      },
      {
        question: 'Do your trellis security doors comply with short-term insurance Category 1 requirements?',
        answerTemplate: 'Yes. Our expanding trellis barriers feature double steel uprights, cross-lattice reinforcing links, and tamper-resistant concealed slamlocks that exceed South African insurance underwriting standards for residential and commercial physical security.'
      },
      {
        question: 'How quickly can a custom trellis security gate be manufactured and installed near {areaName}?',
        answerTemplate: 'Standard custom sizes are manufactured and installed within 3 to 5 working days. Emergency security replacements following a break-in can often be expedited within 24 to 48 hours across {areaName}.'
      }
    ],

    // 10. Aluminium Skylights & Glass Roofs
    'aluminium-skylights': [
      {
        question: 'Are glass skylights safe and impact-resistant against severe Gauteng hailstorms?',
        answerTemplate: 'Yes. All our glass skylights and rooflights are glazed with certified high-impact toughened safety glass or double-laminated solar glass. They are engineered to withstand extreme highveld hail impacts and heavy wind loads near {areaName}.'
      },
      {
        question: 'How do you prevent heat buildup and glare under a sunroom or skylight during summer?',
        answerTemplate: 'We use solar-control Low-E performance glass and tinted reflective laminates that block up to 82% of direct solar heat and 99% of damaging UV rays, keeping your interior cool in summer and warm in winter near {areaName}.'
      },
      {
        question: 'How is the perimeter flashing sealed to prevent roof leaks on tile or metal roofs?',
        answerTemplate: 'Every skylight installation includes custom-bent aluminium or galvanized lead-free flashing that integrates under your roof tiles or IBR sheeting, backed by industrial-grade polyurethane waterproofing membranes to ensure a 100% leak-free seal.'
      },
      {
        question: 'Can an aluminium skylight be opened for natural roof ventilation?',
        answerTemplate: 'Yes. We offer both fixed glass rooflights and manual or electric motorized opening skylights equipped with rain sensors that automatically close the roof vent when rain is detected near {areaName}.'
      },
      {
        question: 'What is the price of custom aluminium skylight installation near {areaName}?',
        answerTemplate: 'Fixed flat glass skylights start from R4,500 to R6,800 fitted, while 4-sided pyramid skylights and large patio sunroom glazing systems range from R8,500 to R24,000 depending on dimensions and glass specification.'
      },
      {
        question: 'What maintenance is required for residential glass skylights?',
        answerTemplate: 'Self-cleaning hydrophilic glass coatings allow normal rainwater to wash away surface dust. We recommend checking roof flashing and wiping glass surfaces once or twice a year to keep maximum natural daylight entering your property.'
      }
    ],

    // 11. Seamless Aluminium Gutters
    'seamless-aluminium-gutters': [
      {
        question: 'Why are seamless aluminium gutters superior to traditional PVC or segmented steel gutters?',
        answerTemplate: 'Traditional gutters have glued joints every 2 to 3 metres that eventually crack, sag, and leak. Seamless aluminium gutters are extruded in continuous lengths directly from our mobile factory vehicle on-site at your property near {areaName}, resulting in zero seams, zero leaks, and an ultra-clean roofline.'
      },
      {
        question: 'How are continuous seamless gutters manufactured on-site near {areaName}?',
        answerTemplate: 'Our specialized mobile roll-forming vehicle arrives at your address with pre-painted aluminium coils. The machine roll-forms continuous gutter lengths custom-measured to the exact millimeter of each roof edge in a single piece.'
      },
      {
        question: 'What profile sizes are available for residential houses vs large commercial roofs?',
        answerTemplate: 'We provide 125mm Domestic Ogee gutters for standard houses and townhouses, and high-capacity 150mm Industrial Box gutters for large roof areas, commercial buildings, and properties with steep roof pitches in {areaName}.'
      },
      {
        question: 'Do seamless aluminium gutters rust or require painting over time?',
        answerTemplate: 'No. Aluminium naturally resists corrosion and will never rust, flake, or peel. Our gutter coils are factory-coated with a durable multi-coat baked enamel finish that resists UV fading and comes with a 15-year material guarantee.'
      },
      {
        question: 'Can you replace or cap damaged wooden fascia boards during gutter installation?',
        answerTemplate: 'Yes. We inspect your existing timber fascia boards and can replace rotted timber or install pre-painted aluminium fascia cladding over your timber to create a completely maintenance-free, waterproof roof edge near {areaName}.'
      },
      {
        question: 'What is the average cost per linear metre for seamless guttering near {areaName}?',
        answerTemplate: 'Standard 125mm seamless gutters average R180 to R240 per linear metre including internal brackets, stop-ends, and professional fitting. Fluted aluminium downpipes range from R450 to R650 per 3-metre drop.'
      }
    ],

    // 12. Aluminium Shopfronts & Commercial Glazing
    'aluminium-shopfronts': [
      {
        question: 'What safety glass thickness is legally required for commercial retail shopfronts?',
        answerTemplate: 'Under SANS 10400-N safety regulations, public commercial shopfronts and retail display windows must be glazed with a minimum of 6.38mm or 8.38mm laminated safety glass, or 10mm to 12mm toughened safety glass for frameless display spans in high-traffic shopping centres near {areaName}.'
      },
      {
        question: 'Do you offer after-hours or weekend installation for shopping malls near {areaName}?',
        answerTemplate: 'Yes. We frequently execute commercial retail fitouts during night shifts and weekend hours to avoid disrupting normal trading hours, adhering to all shopping centre centre-management and health and safety requirements.'
      },
      {
        question: 'Can commercial shopfronts accommodate automated motion-sensor sliding doors?',
        answerTemplate: 'Yes. We build shopfronts fully integrated with commercial automatic sliding door operators, motion radar sensors, push-button key switches, and emergency battery fail-safe systems for retail supermarkets, medical centers, and corporate lobbies near {areaName}.'
      },
      {
        question: 'What warranty is provided on commercial heavy-duty pivot door floor springs?',
        answerTemplate: 'We install premium hydraulic floor springs (Dorma / Geze / Yale) tested for over 500,000 operating cycles, backed by comprehensive commercial warranties and adjustable closing speed and latching action controls.'
      },
      {
        question: 'Do you supply Glazing Certificates of Compliance (Form 4) for council occupancy sign-off?',
        answerTemplate: 'Yes. Upon completion of every commercial shopfront and architectural glazing installation near {areaName}, we issue a certified SANS 10400 Form 4 Glazing Compliance Certificate required for municipal occupancy approval and commercial building insurance.'
      },
      {
        question: 'What is the turnaround time for retail store shopfront fitouts near {areaName}?',
        answerTemplate: 'Standard commercial retail shopfronts are fabricated within 5 to 8 working days. Urgent glass replacement and damaged storefront repairs can be mobilized rapidly to secure your business premises near {areaName}.'
      }
    ],

    // 13. Glass Balustrades & Partitions
    'glass-balustrades': [
      {
        question: 'Are frameless glass balustrades safe for elevated balconies and staircases?',
        answerTemplate: 'Yes. Frameless balustrades are engineered using 12mm or 15mm toughened safety glass or double-laminated glass, anchored by heavy-duty grade 316 stainless steel spigots or base clamping channels. They meet SANS 10160 barrier load ratings of up to 1.5 kN/m for full fall-arrest safety near {areaName}.'
      },
      {
        question: 'What is the difference between side-mounted (pin/spigot) and floor-channel glass balustrades?',
        answerTemplate: 'Side-mounted pin balustrades fix to the external face of a concrete slab or staircase stringer, maximizing usable floor space. Floor-channel systems embed the glass into a slim aluminium base track on top of your tiles or timber decking for an ultra-clean minimalist finish.'
      },
      {
        question: 'Can glass balustrades be installed around swimming pools in Gauteng estates?',
        answerTemplate: 'Yes. Frameless glass pool fencing complies with South African municipal swimming pool safety bylaws, featuring self-closing magnetic latching gates and a 1.2m height barrier that keeps children safe without blocking pool and garden views near {areaName}.'
      },
      {
        question: 'How do you clean and prevent water spots on exterior glass balustrades?',
        answerTemplate: 'We apply optional hydrophobic nano-coatings that repel rainwater, lime deposits, and dust. Routine cleaning with a squeegee and mild soap keeps the glass crystal clear with minimal maintenance.'
      },
      {
        question: 'What is the cost per linear metre for glass balustrade installation near {areaName}?',
        answerTemplate: 'Semi-frameless glass systems start from R1,850 to R2,600 per linear metre, while premium frameless 12mm toughened glass balustrades range from R2,800 to R4,500 per metre including stainless steel hardware and installation.'
      },
      {
        question: 'Do your balustrades require a continuous stainless steel top handrail?',
        answerTemplate: 'Depending on SANS 10400 safety height requirements and glass thickness, frameless balustrades can be installed with a slimline top channel handrail or completely frameless with rounded polished glass edges for a modern infinity view.'
      }
    ]
  };

  /**
   * Universal fallback template for any service not explicitly matched above.
   */
  private static defaultFaqTemplate: RawServiceFAQTemplate[] = [
    {
      question: 'What makes custom {serviceName} superior to off-the-shelf units near {areaName}?',
      answerTemplate: 'Custom-manufactured {serviceName} is built to the exact millimeter of your opening reveals, eliminating unsightly filler gaps, structural drafts, and plaster chipping. Every unit uses premium architectural-grade materials engineered for long-term durability in {areaName}.'
    },
    {
      question: 'Are your {serviceName} installations compliant with South African SANS building standards?',
      answerTemplate: 'Yes. Every project conforms strictly with SANS 10400 building and safety regulations, utilizing certified safety glass, corrosion-resistant hardware, and professional workmanship guaranteed near {areaName}.'
    },
    {
      question: 'How do I obtain a free on-site measuring and written quotation near {areaName}?',
      answerTemplate: 'Simply click "Request Free Quote" or message us directly on WhatsApp. Our local mobile team will arrange a convenient time to visit your property near {areaName}, take exact opening measurements, and deliver a detailed, no-obligation quote.'
    },
    {
      question: 'What warranty and after-sales support is provided on {serviceName} near {areaName}?',
      answerTemplate: 'All our products carry comprehensive manufacturer warranties on structural profiles, hardware, and powder-coat finishes, backed by local repair and maintenance support across {areaName}.'
    },
    {
      question: 'What is the typical manufacturing and installation lead time near {areaName}?',
      answerTemplate: 'Most custom orders are completed in our workshop within 5 to 7 working days, followed by prompt, clean on-site installation by our experienced fitting technicians near {areaName}.'
    },
    {
      question: 'How do I care for and maintain {serviceName} in local Gauteng weather conditions?',
      answerTemplate: 'Our products are designed for low maintenance. A simple periodic wipe-down with mild soapy water and light lubrication of moving tracks or locks once a year will preserve smooth operation and aesthetic beauty for decades.'
    }
  ];

  /**
   * Retrieves and formats localized FAQs for a specific service and area.
   */
  public static getFaqsForService(
    serviceSlug: string,
    serviceName: string,
    areaName: string,
    locationName: string,
    province: string
  ): ServiceFAQ[] {
    // Determine the closest template key
    let templates = this.faqMap[serviceSlug];

    if (!templates) {
      // Find category match
      const matchingKey = Object.keys(this.faqMap).find(k => serviceSlug.includes(k) || k.includes(serviceSlug));
      templates = matchingKey ? this.faqMap[matchingKey] : this.defaultFaqTemplate;
    }

    return templates.map(t => {
      const q = t.question
        .replace(/\{serviceName\}/g, serviceName)
        .replace(/\{areaName\}/g, areaName)
        .replace(/\{locationName\}/g, locationName)
        .replace(/\{province\}/g, province);

      const a = t.answerTemplate
        .replace(/\{serviceName\}/g, serviceName.toLowerCase())
        .replace(/\{areaName\}/g, areaName)
        .replace(/\{locationName\}/g, locationName)
        .replace(/\{province\}/g, province);

      return { question: q, answer: a };
    });
  }
}
