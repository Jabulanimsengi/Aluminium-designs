import {
  ServiceObject,
  ServiceFAQ,
  ServicePriceMatrixItem,
  GlassSpecItem,
  FinishOption,
  UseCaseScenario
} from '../types/service';
import { SALocationObject, LocationArchetype } from '../types/location';
import { LocalizedPageContent, BreadcrumbItem, LocalGeoContext } from '../types/page';
import { SchemaGenerator } from './schemaGenerator';
import { InternalLinkingEngine } from './internalLinking';
import { ServiceFaqRegistry } from '../data/faqs/serviceFaqRegistry';

export class ContentSynthesizer {
  public static getSiteDomain(): string {
    const host = process.env.INDEXNOW_HOST || 'www.aluminiumdesigns.co.za';
    return host.startsWith('http') ? host : `https://${host}`;
  }

  /**
   * Helper to slugify any text to clean URL safe format.
   */
  public static slugify(text: string): string {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }

  /**
   * Identifies whether an area name represents a shopping centre / mall.
   */
  public static isShoppingCentre(name: string): boolean {
    const shoppingKeywords = [
      'mall', 'shopping', 'centre', 'center', 'square', 'plaza', 'galleries',
      'crossing', 'junction', 'boulevard', 'hyper', 'market'
    ];
    const lower = name.toLowerCase();
    return shoppingKeywords.some(kw => lower.includes(kw));
  }

  /**
   * Resolves the location archetype for hyper-localized geo-intelligence.
   */
  public static resolveArchetype(areaName: string, location: SALocationObject): LocationArchetype {
    if (location.archetype) {
      return location.archetype;
    }
    const lower = areaName.toLowerCase();
    
    // Luxury Estates & Golf Developments
    if (
      lower.includes('estate') || lower.includes('dainfern') || lower.includes('silver lakes') ||
      lower.includes('ebotse') || lower.includes('midstream') || lower.includes('steyn city') ||
      lower.includes('waterfall') || lower.includes('mooikloof') || lower.includes('woodhill') ||
      lower.includes('helderfontein') || lower.includes('blue hills') || lower.includes('cedar lakes') ||
      lower.includes('meyersdal') || lower.includes('serengeti') || lower.includes('copperleaf')
    ) {
      return 'luxury-estate';
    }

    // Heritage & Established Suburbs
    if (
      lower.includes('kensington') || lower.includes('melville') || lower.includes('brooklyn') ||
      lower.includes('waterkloof') || lower.includes('parkhurst') || lower.includes('greenside') ||
      lower.includes('westcliff') || lower.includes('observatory') || lower.includes('parkview') ||
      lower.includes('arcadia') || lower.includes('groenkloof') || lower.includes('craighall')
    ) {
      return 'heritage-suburb';
    }

    // Commercial & Retail Hubs
    if (
      this.isShoppingCentre(areaName) || lower.includes('sandton') || lower.includes('rosebank') ||
      lower.includes('menlyn') || lower.includes('braamfontein') || lower.includes('cbd') ||
      lower.includes('fourways') || lower.includes('bedfordview') || lower.includes('umhlanga')
    ) {
      return 'commercial-hub';
    }

    // Industrial & Logistics Nodes
    if (
      lower.includes('isando') || lower.includes('jet park') || lower.includes('spartan') ||
      lower.includes('alrode') || lower.includes('wadeville') || lower.includes('silvertondale') ||
      lower.includes('industrial') || lower.includes('chloorkop') || lower.includes('roodekop')
    ) {
      return 'industrial-node';
    }

    return 'general-residential';
  }

  /**
   * Generates rich location-aware geo-intelligence.
   */
  private static generateGeoContext(
    service: ServiceObject,
    areaName: string,
    location: SALocationObject,
    archetype: LocationArchetype
  ): LocalGeoContext {
    const climate = location.climateZone || 'Highveld Inland';

    switch (archetype) {
      case 'luxury-estate':
        return {
          archetypeTitle: `Residential Estate & HOA Architectural Standards`,
          architecturalInsight: `Properties in ${areaName} frequently adhere to strict Homeowners Association (HOA) design manuals requiring uniform powder-coat profiles (standard Charcoal VP7049 or Matte Black) and compliant double-glazed acoustic glass to meet SANS 204 energy efficiency standards.`,
          climateInsight: `Highveld summer hail storms and cold winter mornings near ${areaName} demand high-performance thermal barriers and impact-resistant laminated safety glass.`
        };
      case 'heritage-suburb':
        return {
          archetypeTitle: `Heritage Architecture & Steel-to-Aluminium Conversions`,
          architecturalInsight: `Homes in established areas like ${areaName} often feature classic steel or timber window frames. Our specialized conversion process replaces rusted steel reveals with slimline aluminium frames without chipping or damaging surrounding interior plaster or heritage brickwork.`,
          climateInsight: `Dry winters and sudden seasonal downpours in ${areaName} require precision EPDM weather-seals and waterproof perimeter silicone joints to prevent damp ingress.`
        };
      case 'commercial-hub':
        return {
          archetypeTitle: `Commercial Retail & High-Traffic Corporate Standards`,
          architecturalInsight: `Retail stores, corporate showrooms, and office developments near ${areaName} require commercial-grade extruded aluminium profiles with heavy-duty pivot floor springs rated for hundreds of thousands of customer cycles and SANS 10400 safety compliance.`,
          climateInsight: `Acoustic soundproofing laminated glass reduces traffic noise from major arterial roads while solar control tints reduce summer air conditioning loads.`
        };
      case 'industrial-node':
        return {
          archetypeTitle: `Industrial Logistics & Heavy-Duty Security Specifications`,
          architecturalInsight: `Warehouses, manufacturing plants, and distribution centers near ${areaName} rely on reinforced structural steel, anti-lever security tracks, and heavy-gauge industrial frames built for extreme physical resilience.`,
          climateInsight: `Corrosion-resistant epoxy primers and electrostatic powder coating prevent premature deterioration from industrial emissions and environmental moisture.`
        };
      default:
        return {
          archetypeTitle: `Residential Building & Home Modernization Guidelines`,
          architecturalInsight: `Homeowners near ${areaName} benefit from custom-sized aluminium and steel solutions that elevate modern curb appeal while incorporating multi-point safety locks and maintenance-free finishes that never rot, warp, or require annual painting.`,
          climateInsight: `Engineered specifically for local ${location.province} weather patterns, providing reliable thermal comfort, leak-free rain channels, and durable UV resistance.`
        };
    }
  }

  /**
   * Generates a structured price matrix in ZAR.
   */
  private static generatePriceMatrix(service: ServiceObject, areaName: string): ServicePriceMatrixItem[] {
    const slug = service.slug;

    if (slug.includes('window')) {
      return [
        { itemName: `Standard Top-Hung Window (Single Opener)`, standardDimensions: `600mm x 900mm`, estimatedPriceRange: `R1,450 - R2,100`, idealFor: `Bathrooms, kitchens, and smaller bedrooms` },
        { itemName: `Horizontal 2-Pane Sliding Window`, standardDimensions: `1200mm x 900mm`, estimatedPriceRange: `R1,850 - R2,850`, idealFor: `Living rooms, bedrooms, and home offices` },
        { itemName: `Large 3-Pane Sliding / Stacking Window`, standardDimensions: `1800mm x 1200mm`, estimatedPriceRange: `R3,400 - R5,200`, idealFor: `Open-plan living areas and dining rooms` },
        { itemName: `Double Glazed Energy-Saver Window`, standardDimensions: `1500mm x 1200mm`, estimatedPriceRange: `R4,200 - R6,800`, idealFor: `Estate homes, noise reduction, and thermal control` }
      ];
    }

    if (slug.includes('sliding-door') || slug.includes('stacking-door') || slug.includes('french-door') || slug.includes('front-door')) {
      return [
        { itemName: `Standard 2-Panel Patio Sliding Door`, standardDimensions: `1800mm x 2100mm`, estimatedPriceRange: `R5,800 - R8,500`, idealFor: `Patio exits, bedrooms, and balcony access` },
        { itemName: `3-Panel Sliding Glass Door`, standardDimensions: `2400mm x 2100mm`, estimatedPriceRange: `R8,500 - R12,800`, idealFor: `Wide patio views and entertainment verandas` },
        { itemName: `3-Leaf Folding Stacking Vista Door`, standardDimensions: `2400mm x 2100mm`, estimatedPriceRange: `R14,500 - R21,000`, idealFor: `Seamless indoor-outdoor garden entertainment` },
        { itemName: `Custom Pivot Front Entrance Door`, standardDimensions: `1200mm x 2100mm`, estimatedPriceRange: `R7,500 - R15,500`, idealFor: `Grand modern residential entryways` }
      ];
    }

    if (slug.includes('clear-burglar-bars')) {
      return [
        { itemName: `Polycarbonate Clear Bar (Single Pane)`, standardDimensions: `500mm - 700mm width`, estimatedPriceRange: `R280 - R380 / bar`, idealFor: `Standard aluminium cottage & top-hung panes` },
        { itemName: `High-Tensile 6mm Bar for Large Windows`, standardDimensions: `800mm - 1200mm width`, estimatedPriceRange: `R380 - R490 / bar`, idealFor: `Large master bedroom & lounge sliding windows` },
        { itemName: `Full Bedroom Window Security Kit (4 Bars)`, standardDimensions: `900mm x 1200mm reveal`, estimatedPriceRange: `R1,200 - R1,800 fitted`, idealFor: `Complete window opening protection` },
        { itemName: `Whole Home Security Bundle (8-12 Windows)`, standardDimensions: `Custom property fitment`, estimatedPriceRange: `R8,500 - R16,000`, idealFor: `Full residential property view-preserving security` }
      ];
    }

    if (slug.includes('trellis') || slug.includes('security-gate')) {
      return [
        { itemName: `Single Slamlock Expanding Trellis Door`, standardDimensions: `900mm x 2100mm`, estimatedPriceRange: `R2,400 - R3,800`, idealFor: `Front entrance, back kitchen doors, and passages` },
        { itemName: `Double Patio Trellis Security Barrier`, standardDimensions: `1800mm x 2100mm`, estimatedPriceRange: `R4,800 - R7,500`, idealFor: `Glass patio sliding and French doors` },
        { itemName: `Window Trellis Fixture (Sliding Grille)`, standardDimensions: `1200mm x 900mm`, estimatedPriceRange: `R1,800 - R2,900`, idealFor: `Ground floor bedroom and study windows` },
        { itemName: `Heavy-Duty Galvanized Swing Security Gate`, standardDimensions: `900mm x 2050mm`, estimatedPriceRange: `R2,100 - R3,600`, idealFor: `Exterior security gates and courtyard entry` }
      ];
    }

    if (slug.includes('skylight')) {
      return [
        { itemName: `Fixed Flat Glass Roof Skylight`, standardDimensions: `600mm x 600mm`, estimatedPriceRange: `R4,500 - R6,800`, idealFor: `Bathrooms, dark hallways, and walk-in closets` },
        { itemName: `Pyramid 4-Sided Glass Skylight`, standardDimensions: `1000mm x 1000mm`, estimatedPriceRange: `R8,500 - R14,500`, idealFor: `Kitchen islands, living rooms, and entrance halls` },
        { itemName: `Ventilating / Manual Opening Roof Window`, standardDimensions: `800mm x 1200mm`, estimatedPriceRange: `R7,800 - R12,500`, idealFor: `Loft rooms, attics, and kitchen heat extraction` },
        { itemName: `Custom Sunroom Roof Glazing System`, standardDimensions: `Per m² custom span`, estimatedPriceRange: `R3,800 - R6,200 / m²`, idealFor: `Glass patio enclosures and covered verandas` }
      ];
    }

    if (slug.includes('gutter')) {
      return [
        { itemName: `125mm Domestic Ogee Seamless Gutter`, standardDimensions: `Per linear metre`, estimatedPriceRange: `R180 - R240 / m`, idealFor: `Residential houses, townhouses, and granny flats` },
        { itemName: `150mm Industrial High-Volume Gutter`, standardDimensions: `Per linear metre`, estimatedPriceRange: `R240 - R310 / m`, idealFor: `Large residential estates, factories, and warehouses` },
        { itemName: `Fluted Aluminium Downpipe (75x50mm)`, standardDimensions: `Per 3m length fitted`, estimatedPriceRange: `R450 - R650 / pipe`, idealFor: `Clean roofline rainwater drainage` },
        { itemName: `Fascia & Bargeboard Cladding Package`, standardDimensions: `Per linear metre`, estimatedPriceRange: `R160 - R260 / m`, idealFor: `Protecting and capping timber roof edges` }
      ];
    }

    if (slug.includes('shopfront')) {
      return [
        { itemName: `Standard Framed Retail Display Window`, standardDimensions: `Per m² glazed span`, estimatedPriceRange: `R2,800 - R4,200 / m²`, idealFor: `Shopping centre stores and boutique facades` },
        { itemName: `Commercial Single Pivot Door with Floor Spring`, standardDimensions: `900mm x 2100mm`, estimatedPriceRange: `R7,500 - R12,500`, idealFor: `Retail entrances, restaurants, and office lobbies` },
        { itemName: `Double Commercial Glass Entrance System`, standardDimensions: `1800mm x 2100mm`, estimatedPriceRange: `R14,000 - R24,000`, idealFor: `High-traffic retail malls and corporate buildings` },
        { itemName: `Automated Motion-Sensor Sliding Shopfront`, standardDimensions: `2400mm x 2100mm`, estimatedPriceRange: `R28,000 - R48,000`, idealFor: `Supermarkets, medical suites, and modern malls` }
      ];
    }

    if (slug.includes('steel-to-aluminium-conversion')) {
      return [
        { itemName: `Single Standard Window Conversion (No Plaster Damage)`, standardDimensions: `Up to 1200mm x 900mm reveal`, estimatedPriceRange: `R1,850 - R2,650`, idealFor: `Bathrooms, kitchens, and bedrooms` },
        { itemName: `Large Master / Lounge Window Conversion`, standardDimensions: `Up to 1800mm x 1500mm reveal`, estimatedPriceRange: `R3,600 - R5,800`, idealFor: `Living rooms and master suites` },
        { itemName: `Steel French Door to Aluminium Vista Conversion`, standardDimensions: `1800mm x 2100mm opening`, estimatedPriceRange: `R8,500 - R14,500`, idealFor: `Patio and dining room exits` },
        { itemName: `Whole-House Conversion Package (8-12 Windows)`, standardDimensions: `Full home retrofit`, estimatedPriceRange: `R18,500 - R38,000`, idealFor: `Complete residential modernizations` }
      ];
    }

    if (slug.includes('glass-patio-enclosure') || slug.includes('patio-enclosure')) {
      return [
        { itemName: `Framed Aluminium Stacking Patio Enclosure`, standardDimensions: `Per m² custom span`, estimatedPriceRange: `R3,800 - R5,200 / m²`, idealFor: `All-weather braai patios and verandas` },
        { itemName: `Frameless Glass Balcony Curtains System`, standardDimensions: `10mm Toughened per m²`, estimatedPriceRange: `R4,200 - R6,500 / m²`, idealFor: `Unobstructed panoramic garden & golf views` },
        { itemName: `Glass Sunroom Roof & Wall Extension`, standardDimensions: `Custom engineered enclosure`, estimatedPriceRange: `R28,000 - R65,000`, idealFor: `Luxury indoor-outdoor entertainment rooms` },
        { itemName: `Motorized Drop Blind & Glass Combination`, standardDimensions: `Per opening module`, estimatedPriceRange: `R6,500 - R12,000`, idealFor: `Wind and sun glare control` }
      ];
    }

    if (slug.includes('frameless-shower')) {
      return [
        { itemName: `Frameless Walk-in Glass Return Panel`, standardDimensions: `900mm - 1200mm x 2000mm`, estimatedPriceRange: `R3,200 - R4,600`, idealFor: `Modern walk-in open showers` },
        { itemName: `Corner Entry Frameless Shower Enclosure`, standardDimensions: `900mm x 900mm x 2000mm`, estimatedPriceRange: `R5,800 - R8,500`, idealFor: `Compact luxury bathroom layouts` },
        { itemName: `Fluted / Reeded Architectural Shower Panel`, standardDimensions: `1000mm x 2000mm`, estimatedPriceRange: `R4,800 - R7,200`, idealFor: `Designer textured bathroom privacy` },
        { itemName: `Custom Beveled & Backlit Bathroom Mirror`, standardDimensions: `Custom laser cut sizing`, estimatedPriceRange: `R1,450 - R3,800`, idealFor: `Vanities, dressing rooms, and home gyms` }
      ];
    }

    if (slug.includes('fly-screen')) {
      return [
        { itemName: `Magnetic Clip-on Window Insect Screen`, standardDimensions: `Up to 900mm x 1200mm`, estimatedPriceRange: `R650 - R950`, idealFor: `Standard aluminium and timber windows` },
        { itemName: `Horizontal Sliding Fly Screen for Windows`, standardDimensions: `1200mm x 900mm opening`, estimatedPriceRange: `R950 - R1,450`, idealFor: `Kitchen and bedroom sliding windows` },
        { itemName: `Sliding Patio Door Insect Screen`, standardDimensions: `900mm - 1800mm x 2100mm`, estimatedPriceRange: `R1,850 - R2,850`, idealFor: `Sliding patio and balcony doors` },
        { itemName: `Claw-Proof Pet Mesh Security Screen Door`, standardDimensions: `900mm x 2100mm with pet flap`, estimatedPriceRange: `R2,600 - R3,900`, idealFor: `Dog and cat friendly home protection` }
      ];
    }

    if (slug.includes('sliding-door-repair')) {
      return [
        { itemName: `Full Patio Door Service & Roller Replacement`, standardDimensions: `Standard 2-panel door`, estimatedPriceRange: `R850 - R1,350`, idealFor: `Heavy, jammed, or scraping sliding doors` },
        { itemName: `Stainless Steel Track Capping & Roller Kit`, standardDimensions: `Up to 3m track span`, estimatedPriceRange: `R1,450 - R2,200`, idealFor: `Pitted, dented, and grooved bottom tracks` },
        { itemName: `Sliding Door Hook Lock & Handle Replacement`, standardDimensions: `Universal mortice lock`, estimatedPriceRange: `R750 - R1,250`, idealFor: `Broken latches and unaligned locks` },
        { itemName: `Shattered Glass Replacement (Safety Laminated)`, standardDimensions: `Standard patio glass panel`, estimatedPriceRange: `R1,850 - R3,200`, idealFor: `Emergency cracked glass restoration` }
      ];
    }

    // Default universal matrix
    return [
      { itemName: `Standard Custom Residential Unit`, standardDimensions: `Custom measurement`, estimatedPriceRange: `R1,850 - R4,500`, idealFor: `Home renovations and replacements` },
      { itemName: `Heavy-Duty Architectural Specification`, standardDimensions: `Custom opening span`, estimatedPriceRange: `R4,500 - R9,800`, idealFor: `Estates and luxury residential properties` },
      { itemName: `Commercial Grade System`, standardDimensions: `High-traffic sizing`, estimatedPriceRange: `R8,500 - R18,000`, idealFor: `Business premises, retail, and office parks` }
    ];
  }

  /**
   * Generates technical glass & material comparison specifications.
   */
  private static generateGlassSpecs(): GlassSpecItem[] {
    return [
      {
        materialName: `6.38mm Laminated Safety Glass`,
        securityRating: `4/5 (Impact & shatter resistant)`,
        soundReduction: `28 - 32 dB (Moderate noise reduction)`,
        thermalControl: `99% UV radiation block`,
        recommendedUse: `Standard residential windows, sliding doors, and shopfronts`
      },
      {
        materialName: `Double Glazing (Low-E Air Cavity)`,
        securityRating: `5/5 (Dual pane barrier)`,
        soundReduction: `38 - 44 dB (High acoustic dampening)`,
        thermalControl: `Up to 80% solar heat deflection & winter heat retention`,
        recommendedUse: `Golf estate homes, busy street facades, and luxury sunrooms`
      },
      {
        materialName: `High-Tensile Optical Polycarbonate (5mm-6mm)`,
        securityRating: `5/5 (Riot-shield impact strength)`,
        soundReduction: `N/A`,
        thermalControl: `100% UV-stabilized (anti-yellowing)`,
        recommendedUse: `Clear burglar bars preserving unobstructed garden & pool views`
      },
      {
        materialName: `10mm - 12mm Toughened Safety Glass`,
        securityRating: `5/5 (5x stronger than regular float glass)`,
        soundReduction: `34 - 36 dB`,
        thermalControl: `High thermal shock resistance`,
        recommendedUse: `Frameless glass balustrades, commercial entrances, and office partitions`
      }
    ];
  }

  /**
   * Generates architectural finishes and color swatches.
   */
  private static generateFinishOptions(): FinishOption[] {
    return [
      { code: `VP7049`, name: `Matte Charcoal`, finishType: `Architectural Powder Coat`, description: `The #1 requested modern color in Gauteng secure estates and contemporary architectural homes.` },
      { code: `VP9005`, name: `Matte Black`, finishType: `Architectural Powder Coat`, description: `Bold industrial statement finish popular for modern renovations, French doors, and retail showrooms.` },
      { code: `VP9010`, name: `Pure White`, finishType: `Architectural Powder Coat`, description: `Timeless, clean finish matching traditional interiors, coastal architectural palettes, and bright spaces.` },
      { code: `AN-BRZ`, name: `Bronze Anodised`, finishType: `Electro-Chemical Anodising`, description: `Deep metallic tone with exceptional scratch resistance and long-term surface hardness.` },
      { code: `AN-SLV`, name: `Natural Silver Anodised`, finishType: `Electro-Chemical Anodising`, description: `Sleek metallic aluminium sheen ideal for commercial storefronts, offices, and industrial builds.` },
      { code: `WD-OAK`, name: `Light Oak Woodgrain`, finishType: `Sublimation Heat-Transfer`, description: `The warm aesthetic of natural wood grain with all the maintenance-free benefits of durable aluminium.` }
    ];
  }

  /**
   * Generates 3 localized use-case scenarios.
   */
  private static generateUseCases(service: ServiceObject, areaName: string): UseCaseScenario[] {
    return [
      {
        title: `Home Renovation & Aesthetic Modernization`,
        subtitle: `Enhancing property value and energy performance`,
        description: `Upgrade dated steel or decaying wooden frames to sleek aluminium near ${areaName}. Enjoy effortless gliding tracks, airtight weather seals, and up to 22% more natural light penetration.`,
        icon: `home-outline`
      },
      {
        title: `Security Hardening Without Caging`,
        subtitle: `Physical deterrents engineered for peace of mind`,
        description: `Protect ground-floor entry points near ${areaName} with transparent polycarbonate bars or slamlock expanding gates that allow fresh air flow while maintaining physical barrier strength.`,
        icon: `shield-checkmark-outline`
      },
      {
        title: `All-Weather Indoor-Outdoor Living`,
        subtitle: `Transforming verandas and patio entertainment areas`,
        description: `Enclose your outdoor entertainment space near ${areaName} with folding stacking doors or seamless gutters, creating a comfortable year-round living area protected from rain and cold winds.`,
        icon: `sunny-outline`
      }
    ];
  }

  /**
   * Generates fully localized, rich SEO page object targeting "Near [Location]" search intent.
   * STRICT SEO RULE: The URL slug strictly matches the H1: [service-slug]-near-[area-slug]
   */
  public static synthesizePage(
    service: ServiceObject,
    location: SALocationObject,
    suburb?: string
  ): LocalizedPageContent {
    const isSuburbPage = Boolean(suburb && suburb.trim().length > 0);
    const areaName = isSuburbPage ? suburb! : location.name;
    const areaSlug = this.slugify(areaName);
    const isMall = this.isShoppingCentre(areaName);
    const isProvince = location.type === 'province' && !isSuburbPage;
    const isRegion = location.type === 'region' && !isSuburbPage;

    // Resolve location archetype
    const archetype = this.resolveArchetype(areaName, location);

    // EXACT 1-to-1 URL and H1 Matching Pattern (Near Strategy)
    const h1 = `${service.serviceName} Near ${areaName}`;
    const pageSlug = `${service.slug}-near-${areaSlug}`;
    const urlPath = `/services/${pageSlug}`;
    const canonicalUrl = `${this.getSiteDomain()}${urlPath}`;

    // Categorize Service Areas and Shopping Centres in this location
    const allAreas = location.suburbsOrAreas || [];
    const shoppingCentresCovered = allAreas.filter(a => this.isShoppingCentre(a));
    const residentialAreasCovered = allAreas.filter(a => !this.isShoppingCentre(a));

    // Breadcrumbs Hierarchy
    const breadcrumbs = this.generateBreadcrumbs(service, location, areaName, isSuburbPage, isProvince, isRegion, urlPath);

    // Meta Title (SERP Display: 45-65 chars)
    const metaTitle = this.generateMetaTitle(service, areaName, isProvince, isRegion, isMall);

    // Dynamic Meta Description (SERP: 135-160 chars)
    const metaDescription = this.generateMetaDescription(service, areaName, location, isMall, isProvince, isRegion);

    // Localized Hero Section (H1 strictly matches headline)
    const heroBadge = isProvince
      ? `Gauteng Wide Manufacturers & Installers`
      : isRegion
      ? `${areaName} Regional Factory Direct Supply`
      : isMall
      ? `Commercial & Retail ${service.serviceName}`
      : `Top-Rated ${service.serviceName} Near ${areaName}`;

    const heroSubheadline = isProvince
      ? `Premier custom ${service.serviceName.toLowerCase()} manufactured factory-direct with on-site measuring, SANS 10400 compliance, and expert installation across all areas near Gauteng.`
      : isRegion
      ? `Professional custom ${service.serviceName.toLowerCase()} with fast mobile measuring vans, factory direct pricing, and guaranteed fitting near the ${areaName}.`
      : isMall
      ? `Heavy-duty commercial ${service.serviceName.toLowerCase()} for retail stores, showrooms, and business premises near ${areaName}.`
      : `Custom-manufactured ${service.serviceName.toLowerCase()} with friendly measuring, robust security, and expert local installation near ${areaName}.`;

    const hero = {
      badge: heroBadge,
      headline: h1, // Exact match to URL
      subheadline: heroSubheadline,
      primaryCtaText: 'Request Free Quote',
      primaryCtaAction: 'OPEN_QUOTE_MODAL' as const,
      secondaryCtaText: 'Chat on WhatsApp',
      secondaryCtaAction: 'OPEN_WHATSAPP_MODAL' as const,
      heroImage: service.hero.heroImage
    };

    // Geo-Intelligence Context
    const localGeoContext = this.generateGeoContext(service, areaName, location, archetype);

    // Overview Content with Shopping Centres & Service Areas Integration
    const overviewParagraphs = this.generateOverviewParagraphs(
      service,
      areaName,
      location,
      shoppingCentresCovered,
      residentialAreasCovered,
      isMall,
      isProvince,
      isRegion,
      localGeoContext
    );

    // Pricing Guide & Estimation Matrix
    const pricingGuide = service.pricingGuide
      ? {
          heading: `Estimated ${service.serviceName} Prices & Cost Guide Near ${areaName}`,
          estimatedStartingPrice: service.pricingGuide.estimatedStartingPrice,
          priceUnit: service.pricingGuide.priceUnit,
          factors: service.pricingGuide.priceFactors,
          description: `Actual costs for ${service.serviceName.toLowerCase()} near ${areaName} vary based on exact opening measurements, glass specifications, and custom finishes. We provide free on-site measuring and itemized quotes.`
        }
      : undefined;

    const priceMatrix = this.generatePriceMatrix(service, areaName);
    const glassSpecs = this.generateGlassSpecs();
    const finishOptions = this.generateFinishOptions();
    const useCases = this.generateUseCases(service, areaName);

    // B2B & Quality Compliance Block
    const b2bCompliance = {
      heading: `Quality Manufacturing & SANS 10400 Safety Standards`,
      points: [
        `100% compliant with SANS 10400-N safety glazing and building regulations`,
        `Extruded architectural-grade aluminium profiles with premium powder coating`,
        `Custom workshop fabrication for residential homes, estates, and commercial developments`,
        `Comprehensive workmanship and material warranty on all installations`
      ]
    };

    // Localized FAQs (Service-Specific Bank + Geo Context)
    const localizedFaqs = this.generateLocalizedFaqs(service, areaName, location, isMall, isProvince, isRegion, archetype);

    // Structured Data (JSON-LD)
    const structuredDataJsonLd = SchemaGenerator.generatePageSchemas(
      service,
      location,
      areaName,
      canonicalUrl,
      breadcrumbs,
      localizedFaqs
    );

    // Internal Linking Mesh
    const internalLinks = {
      parentProvinceHub: !isProvince
        ? InternalLinkingEngine.generateProvinceHubLink(service, location.province)
        : undefined,
      parentRegionHub: !isRegion && !isProvince
        ? InternalLinkingEngine.generateRegionalHubLink(service, location)
        : undefined,
      parentCityHub: isSuburbPage && location.type !== 'region' && location.type !== 'province'
        ? {
            title: `${service.serviceName} Near ${location.name}`,
            url: `/services/${service.slug}-near-${this.slugify(location.name)}`,
            badge: 'City Main Hub'
          }
        : undefined,
      suburbClusterLinks: InternalLinkingEngine.generateSuburbLinks(service, location, areaSlug, 8),
      relatedServicesInArea: InternalLinkingEngine.generateCrossServiceLinks(service, location, areaSlug, areaName, 4)
    };

    // Afrikaans Bilingual Search Query Keywords for Gauteng Hubs
    const afrikaansKeywords: string[] = [];
    const lowerArea = areaName.toLowerCase();
    const isAfrikaansRegion = [
      'pretoria', 'centurion', 'alberton', 'boksburg', 'krugersdorp',
      'brakpan', 'springs', 'vanderbijlpark', 'vereeniging', 'meyerton',
      'heidelberg', 'midstream', 'moot', 'montana', 'sinoville', 'kempton park'
    ].some(city => lowerArea.includes(city) || location.name.toLowerCase().includes(city));

    if (isAfrikaansRegion) {
      if (service.slug.includes('burglar') || service.slug.includes('trellis')) {
        afrikaansKeywords.push(`diefwering vir aluminium vensters ${areaName.toLowerCase()}`);
        afrikaansKeywords.push(`deursigtige diefwering pryse ${areaName.toLowerCase()}`);
        afrikaansKeywords.push(`trellie hekke en diefwering ${areaName.toLowerCase()}`);
      } else if (service.slug.includes('door')) {
        afrikaansKeywords.push(`aluminium skuifdeure pryse ${areaName.toLowerCase()}`);
        afrikaansKeywords.push(`stapeldeure ${areaName.toLowerCase()}`);
      } else if (service.slug.includes('window')) {
        afrikaansKeywords.push(`aluminium vensters pryse ${areaName.toLowerCase()}`);
        afrikaansKeywords.push(`venster vervanging sonder pleister skade`);
      }
    }

    return {
      url: urlPath,
      h1,
      serviceSlug: service.slug,
      locationSlug: location.slug,
      suburbSlug: isSuburbPage ? areaSlug : undefined,
      areaName,
      isSuburbPage,
      breadcrumbs,
      metaTitle,
      metaDescription,
      canonicalUrl,
      keywords: [
        `${service.serviceName.toLowerCase()} near ${areaName.toLowerCase()}`,
        `${service.serviceName.toLowerCase()} near me`,
        `custom ${service.serviceName.toLowerCase()} near ${areaName.toLowerCase()}`,
        `${service.serviceName.toLowerCase()} installers near ${areaName.toLowerCase()}`,
        `${service.serviceName.toLowerCase()} suppliers near me`,
        ...afrikaansKeywords
      ],
      openGraph: {
        title: metaTitle,
        description: metaDescription,
        image: `${this.getSiteDomain()}${service.hero.heroImage}`,
        url: canonicalUrl,
        type: 'website'
      },
      hero,
      localGeoContext,
      overview: {
        heading: `Custom ${service.serviceName} Near ${areaName}`,
        paragraphs: overviewParagraphs,
        specifications: service.overview.specifications
      },
      pricingGuide,
      priceMatrix,
      glassSpecs,
      finishOptions,
      useCases,
      b2bCompliance,
      serviceAreasCovered: residentialAreasCovered.length > 0 ? residentialAreasCovered : [areaName],
      shoppingCentresCovered: shoppingCentresCovered.length > 0 ? shoppingCentresCovered : [areaName],
      features: service.features,
      processSteps: service.process.steps,
      faqs: localizedFaqs,
      internalLinks,
      contact: {
        dialingCode: location.dialingCode,
        formattedPhone: `${location.dialingCode} 450 8899`,
        whatsappNumber: '+27 82 450 8899',
        serviceAreaName: `${areaName}, ${location.name}`,
        nearbyLandmarks: shoppingCentresCovered.slice(0, 4)
      },
      structuredDataJsonLd
    };
  }

  private static generateBreadcrumbs(
    service: ServiceObject,
    location: SALocationObject,
    areaName: string,
    isSuburbPage: boolean,
    isProvince: boolean,
    isRegion: boolean,
    urlPath: string
  ): BreadcrumbItem[] {
    const provinceHubUrl = `/services/${service.slug}-near-${this.slugify(location.province)}`;
    const cityHubUrl = `/services/${service.slug}-near-${this.slugify(location.name)}`;

    const items: BreadcrumbItem[] = [
      { name: 'Home', url: '/', position: 1 },
      { name: 'Services', url: '/services', position: 2 }
    ];

    if (isProvince) {
      items.push({ name: `${service.serviceName} Near ${location.province}`, url: urlPath, position: 3 });
      return items;
    }

    // Include Province Hub in breadcrumbs
    items.push({ name: `${service.serviceName} Near ${location.province}`, url: provinceHubUrl, position: 3 });

    if (isRegion) {
      items.push({ name: `${service.serviceName} Near ${location.name}`, url: urlPath, position: 4 });
      return items;
    }

    items.push({ name: `${service.serviceName} Near ${location.name}`, url: cityHubUrl, position: 4 });

    if (isSuburbPage) {
      items.push({ name: `${service.serviceName} Near ${areaName}`, url: urlPath, position: 5 });
    }

    return items;
  }

  private static generateMetaTitle(
    service: ServiceObject,
    areaName: string,
    isProvince: boolean,
    isRegion: boolean,
    isMall: boolean
  ): string {
    const h1 = `${service.serviceName} Near ${areaName}`;
    if (isProvince) {
      return `${h1} | Manufacturers & Installers | Free Quotes`;
    }
    if (isRegion) {
      return `${h1} | Factory Direct & Local Fitting | Quotes`;
    }
    if (isMall) {
      return `${h1} | Commercial Storefronts & Fitting`;
    }
    return `${h1} | Custom Sizing & Instant Quotes`;
  }

  private static generateMetaDescription(
    service: ServiceObject,
    areaName: string,
    location: SALocationObject,
    isMall: boolean,
    isProvince: boolean,
    isRegion: boolean
  ): string {
    const cat = service.category.toLowerCase();
    let actionHook = 'custom fabrication, friendly measuring & local installation';

    if (cat.includes('security')) {
      actionHook = 'solid security, tamper-proof locks & fast fitting';
    } else if (cat.includes('repairs')) {
      actionHook = 'mobile repair vans, roller replacement & same-day response';
    } else if (cat.includes('doors')) {
      actionHook = 'smooth sliding tracks, safety glass & custom sizing';
    } else if (cat.includes('rainwater')) {
      actionHook = 'continuous roll-formed gutters, leak-free seals & fast fitting';
    }

    let contextPrefix = `Looking for top-rated ${service.serviceName.toLowerCase()} near ${areaName}, ${location.province}?`;
    if (isProvince) {
      contextPrefix = `Direct manufacturers and installers of custom ${service.serviceName.toLowerCase()} near Gauteng`;
    } else if (isRegion) {
      contextPrefix = `Reliable custom ${service.serviceName.toLowerCase()} near the ${areaName}`;
    } else if (isMall) {
      contextPrefix = `Commercial ${service.serviceName.toLowerCase()} for retail stores near ${areaName}`;
    }

    const desc = `${contextPrefix} Free on-site quotes, ${actionHook}. Call ${location.dialingCode} 450 8899 today!`;
    return desc.length > 160 ? `${desc.substring(0, 157)}...` : desc;
  }

  private static generateOverviewParagraphs(
    service: ServiceObject,
    areaName: string,
    location: SALocationObject,
    shoppingCentres: string[],
    residentialAreas: string[],
    isMall: boolean,
    isProvince: boolean,
    isRegion: boolean,
    geoContext: LocalGeoContext
  ): string[] {
    const mallMention = shoppingCentres.length > 0
      ? `We also provide dedicated commercial and residential service around major retail hubs near ${shoppingCentres.slice(0, 4).join(', ')}.`
      : '';

    const residentialMention = residentialAreas.length > 0
      ? `Our mobile installation teams operate daily near ${areaName} and surrounding suburbs such as ${residentialAreas.slice(0, 5).join(', ')}.`
      : `Our mobile teams deliver prompt measuring and installation across all residential and commercial addresses near ${areaName}.`;

    if (isProvince) {
      return [
        `Looking for trusted manufacturers and certified installers of ${service.serviceName.toLowerCase()} near Gauteng? We fabricate custom-engineered solutions for residential homes, architectural projects, office parks, and commercial properties throughout Johannesburg, Pretoria, the East Rand, West Rand, and the Vaal Triangle.`,
        `${geoContext.architecturalInsight} Every installation conforms with SANS 10400 safety building regulations, utilizing premium corrosion-resistant materials, precision hardware, and comprehensive warranty coverage.`
      ];
    }

    if (isRegion) {
      return [
        `Looking for reliable, factory-direct ${service.serviceName.toLowerCase()} near the ${areaName}? We supply, manufacture, and install custom-fit solutions engineered to withstand local conditions while enhancing property security, thermal comfort, and value.`,
        `${geoContext.architecturalInsight} ${residentialMention} ${mallMention} Enjoy quick turnaround times, competitive per-unit pricing, and expert on-site fitting with full guarantee.`
      ];
    }

    if (isMall) {
      return [
        `Looking for professional ${service.serviceName.toLowerCase()} for your retail shop, showroom, or business premises near ${areaName}? We supply, fabricate, and install high-durability solutions tailored to high-traffic commercial and retail environments.`,
        `${geoContext.architecturalInsight} In addition to serving properties near ${areaName}, our service area covers surrounding ${location.name} neighborhoods. Every installation is backed by top safety ratings and our workmanship warranty.`
      ];
    }

    return [
      `Looking for reliable, top-quality ${service.serviceName.toLowerCase()} near ${areaName}? We build and install custom-fit solutions designed to withstand local weather while enhancing the security, style, and value of your property.`,
      `${geoContext.architecturalInsight} ${residentialMention} ${mallMention} Every project includes free on-site measuring, high-grade materials, and full guarantee.`
    ];
  }

  private static generateLocalizedFaqs(
    service: ServiceObject,
    areaName: string,
    location: SALocationObject,
    isMall: boolean,
    isProvince: boolean,
    isRegion: boolean,
    archetype: LocationArchetype
  ): ServiceFAQ[] {
    // 1. Fetch 6 deep service-specific FAQs from the registry
    const serviceSpecificFaqs = ServiceFaqRegistry.getFaqsForService(
      service.slug,
      service.serviceName,
      areaName,
      location.name,
      location.province
    );

    const localized = [...serviceSpecificFaqs];

    // 2. Hyper-localized FAQs addressing specific buyer dilemmas
    if (archetype === 'luxury-estate') {
      localized.push({
        question: `Do your installations comply with ${areaName} estate HOA architectural rules?`,
        answer: `Yes, our profiles, powder-coat color choices (standard Charcoal VP7049 and Matte Black), and glass specifications are fully engineered to comply with residential estate and golf estate design manuals near ${areaName}.`
      });
    } else if (archetype === 'heritage-suburb') {
      localized.push({
        question: `Can you replace old steel frames without breaking interior plaster near ${areaName}?`,
        answer: `Yes, our specialized conversion teams cut out old steel frames neatly from the brick reveals, securing new aluminium frames without damaging interior wall tiles, plaster, or heritage sills near ${areaName}.`
      });
    }

    // 3. Mobile measuring and quotation turnaround FAQ
    localized.push({
      question: `How quickly can a mobile measuring team visit my property near ${areaName}?`,
      answer: `Our mobile quotation vans operate daily across ${areaName}. We can typically schedule a free on-site measuring and technical consultation within 24 to 48 hours of your request.`
    });

    // 4. Commercial mall or general quotation FAQ
    localized.push({
      question: isMall
        ? `Do you provide after-hours installation for retail shops near ${areaName}?`
        : `How do I request a free quote near ${areaName}?`,
      answer: isMall
        ? `Yes, we offer flexible evening and weekend fitting for retail stores and business units near ${areaName} to minimize trading disruptions.`
        : `Simply click "Request Free Quote" or chat with us on WhatsApp. Our local team will take down your requirements and schedule a free on-site measuring visit near ${areaName}.`
    });

    return localized;
  }
}

