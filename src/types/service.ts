export interface ServiceSpec {
  label: string;
  value: string;
}

export interface ServiceFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ServiceProcessStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface RelatedServiceLink {
  serviceId: string;
  title: string;
  slug: string;
  shortDescription: string;
  thumbnailImage: string;
}

export interface ServiceSEO {
  titleTag: string;
  metaDescription: string;
  keywords: string[];
  canonicalUrl: string;
  openGraphImage: string;
}

export interface ServiceObject {
  id: string;
  slug: string;
  serviceName: string;
  tagline: string;
  category: string;
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    primaryCtaText: string;
    primaryCtaLink: string;
    secondaryCtaText: string;
    secondaryCtaLink: string;
    heroImage: string;
  };
  overview: {
    heading: string;
    paragraphs: string[];
    specifications: ServiceSpec[];
  };
  features: ServiceFeature[];
  process: {
    sectionHeading: string;
    subheading?: string;
    steps: ServiceProcessStep[];
  };
  faqs: ServiceFAQ[];
  relatedServices: RelatedServiceLink[];
  seo: ServiceSEO;
  structuredDataJsonLd: Record<string, any>;
}
