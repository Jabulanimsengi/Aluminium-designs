import { siteUrl } from "@/lib/site";
import { allCoreServices } from "@/data/core-services";
import type { ServiceObject } from "@/types/service";

export interface ServicePageSeo {
  titleTag: string;
  metaDescription: string;
  keywords: string[];
  canonicalUrl: string;
  openGraphImage: string;
}

export interface ServicePageHero {
  headline: string;
  subheadline: string;
  badgeText: string;
  primaryCtaText: string;
  secondaryCtaText: string;
}

export interface ServicePageOverview {
  heading: string;
  paragraphs: string[];
  keyFeaturesNotice: string;
}

export interface ServicePageBenefit {
  icon: string;
  title: string;
  description: string;
}

export interface ServicePageProductType {
  name: string;
  tagline: string;
  description: string;
  idealFor: string;
}

export interface ServicePageGlazingOption {
  name: string;
  description: string;
}

export interface ServicePageSpecItem {
  label: string;
  value: string;
}

export interface ServicePageStep {
  stepNumber: string;
  title: string;
  description: string;
}

export interface ServicePageReview {
  authorName: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
}

export interface ServicePageFaq {
  question: string;
  answer: string;
}

export interface ServicePageContent {
  id: string;
  slug: string;
  fullPageUrl: string;
  seo: ServicePageSeo;
  structuredDataJsonLd: Record<string, unknown>;
  hero: ServicePageHero;
  overview: ServicePageOverview;
  benefits: {
    title: string;
    items: ServicePageBenefit[];
  };
  productTypes: {
    title: string;
    description: string;
    items: ServicePageProductType[];
  };
  glazingOptions: {
    title: string;
    description: string;
    options: ServicePageGlazingOption[];
  };
  specifications: {
    title: string;
    items: ServicePageSpecItem[];
  };
  installationProcess: {
    title: string;
    steps: ServicePageStep[];
  };
  reviews: ServicePageReview[];
  faqs: ServicePageFaq[];
}

function convertServicePage(srv: ServiceObject): ServicePageContent {
  return {
    id: srv.slug,
    slug: srv.slug,
    fullPageUrl: `${siteUrl}/services/${srv.slug}`,
    seo: {
      titleTag: srv.seo.titleTag,
      metaDescription: srv.seo.metaDescription,
      keywords: srv.seo.keywords,
      canonicalUrl: `${siteUrl}/services/${srv.slug}`,
      openGraphImage: srv.seo.openGraphImage,
    },
    structuredDataJsonLd: srv.structuredDataJsonLd,
    hero: {
      headline: srv.hero.headline,
      subheadline: srv.hero.subheadline,
      badgeText: srv.hero.badge,
      primaryCtaText: srv.hero.primaryCtaText,
      secondaryCtaText: srv.hero.secondaryCtaText,
    },
    overview: {
      heading: srv.overview.heading,
      paragraphs: srv.overview.paragraphs,
      keyFeaturesNotice: "Custom manufactured to applicable SANS standards with free on-site measuring.",
    },
    benefits: {
      title: "Why Choose Us",
      items: srv.features.map((f) => ({ icon: f.icon, title: f.title, description: f.description })),
    },
    productTypes: {
      title: "Options & Styles",
      description: "Available configurations for this service.",
      items: [],
    },
    glazingOptions: {
      title: "Glass & Performance",
      description: "Glass and finish options available for this service.",
      options: [],
    },
    specifications: {
      title: "Built to Spec",
      items: srv.overview.specifications,
    },
    installationProcess: {
      title: srv.process.sectionHeading,
      steps: srv.process.steps.map((st) => ({
        stepNumber: String(st.stepNumber),
        title: st.title,
        description: st.description,
      })),
    },
    reviews: [],
    faqs: srv.faqs,
  };
}

export const servicePages: Record<string, ServicePageContent> = Object.fromEntries(
  allCoreServices.map((srv) => [srv.slug, convertServicePage(srv)]),
);
