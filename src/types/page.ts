import {
  ServiceObject,
  ServiceFAQ,
  ServiceFeature,
  ServiceSpec,
  ServicePriceMatrixItem,
  GlassSpecItem,
  FinishOption,
  UseCaseScenario
} from './service';

export interface BreadcrumbItem {
  name: string;
  url: string;
  position: number;
}

export interface InternalLinkItem {
  title: string;
  url: string;
  badge?: string;
}

export interface LocalGeoContext {
  archetypeTitle: string;
  architecturalInsight: string;
  climateInsight: string;
}

export interface LocalizedPageContent {
  url: string;
  h1: string; // Exact match to URL: [service-name]-near-[area-name]
  serviceSlug: string;
  locationSlug: string;
  suburbSlug?: string;
  areaName: string;
  isSuburbPage: boolean;
  
  // Navigation & Hierarchy
  breadcrumbs: BreadcrumbItem[];
  
  // SEO Metadata
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  keywords: string[];
  openGraph: {
    title: string;
    description: string;
    image: string;
    url: string;
    type: string;
  };
  
  // Hero Section
  hero: {
    badge: string;
    headline: string; // H1 match: e.g. "Aluminium Windows Near Katlehong"
    subheadline: string;
    primaryCtaText: string;
    primaryCtaAction: 'OPEN_QUOTE_MODAL';
    secondaryCtaText: string;
    secondaryCtaAction: 'OPEN_WHATSAPP_MODAL';
    heroImage: string;
  };
  
  // Localized Body Copy & Geo-Intelligence
  localGeoContext: LocalGeoContext;

  overview: {
    heading: string;
    paragraphs: string[];
    specifications: ServiceSpec[];
  };
  
  // Pricing & Estimation Guide
  pricingGuide?: {
    heading: string;
    estimatedStartingPrice: string;
    priceUnit: string;
    factors: string[];
    description: string;
  };

  // Structured Price Matrix (ZAR Estimates)
  priceMatrix: ServicePriceMatrixItem[];

  // Technical Glass & Material Performance Comparison Matrix
  glassSpecs: GlassSpecItem[];

  // Architectural Colors & Finishes Grid
  finishOptions: FinishOption[];

  // Localized Use Case Scenarios
  useCases: UseCaseScenario[];

  // B2B & Quality Compliance (SANS 10400 / Architectural)
  b2bCompliance?: {
    heading: string;
    points: string[];
  };

  // Service Areas & Shopping Centres Coverage
  serviceAreasCovered: string[];
  shoppingCentresCovered: string[];
  
  // Localized Features & Process
  features: ServiceFeature[];
  processSteps: { stepNumber: number; title: string; description: string }[];
  
  // Localized FAQs
  faqs: ServiceFAQ[];
  
  // Internal Linking Mesh
  internalLinks: {
    parentProvinceHub?: InternalLinkItem;
    parentRegionHub?: InternalLinkItem;
    parentCityHub?: InternalLinkItem;
    suburbClusterLinks: InternalLinkItem[];
    relatedServicesInArea: InternalLinkItem[];
  };
  
  // Local Business & Dialing Contact
  contact: {
    dialingCode: string;
    formattedPhone: string;
    whatsappNumber: string;
    serviceAreaName: string;
    nearbyLandmarks: string[];
  };
  
  // Structured Data (JSON-LD)
  structuredDataJsonLd: Record<string, any>[];
}
