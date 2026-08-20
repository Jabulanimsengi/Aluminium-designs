import { ServiceObject, ServiceFAQ, ServiceFeature, ServiceSpec } from './service';

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

export interface LocalizedPageContent {
  url: string;
  h1: string; // Exact match to URL: [service-name]-in-[area-name]
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
    headline: string; // H1 match: e.g. "Aluminium Windows in Katlehong"
    subheadline: string;
    primaryCtaText: string;
    primaryCtaAction: 'OPEN_QUOTE_MODAL';
    secondaryCtaText: string;
    secondaryCtaAction: 'OPEN_WHATSAPP_MODAL';
    heroImage: string;
  };
  
  // Localized Body Copy
  overview: {
    heading: string;
    paragraphs: string[];
    specifications: ServiceSpec[];
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
