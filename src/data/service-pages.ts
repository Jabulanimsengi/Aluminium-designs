import { businessContact, siteUrl, whatsappQuoteUrl } from "@/lib/site";
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
  secondaryCtaLink?: string;
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

const defaultServiceReviews: ServicePageReview[] = [
  {
    authorName: "Sarah Davies",
    location: "Fourways, Johannesburg",
    rating: 5,
    date: "2026-06-14",
    comment: "Exceptional quality and workmanship. The installation crew was punctual, polite, and left our home spotless.",
  },
  {
    authorName: "Thabo Mokoena",
    location: "Sandton, Johannesburg",
    rating: 5,
    date: "2026-07-22",
    comment: "Smooth glide and rock-solid locking mechanism. Far superior to standard off-the-shelf units.",
  },
  {
    authorName: "Michelle Botha",
    location: "Centurion, Pretoria",
    rating: 5,
    date: "2026-08-05",
    comment: "Custom manufactured to our exact measurements. Looks sleek, modern, and provides total peace of mind.",
  },
];

function convertServicePage(srv: ServiceObject): ServicePageContent {
  // Sanitize legacy placeholder domains — never leak example.com / old domain.
  const clean = (url: string) =>
    url
      .replaceAll("https://example.com", siteUrl)
      .replaceAll("http://example.com", siteUrl)
      .replaceAll("https://aluminiumandsteelsa.co.za", siteUrl)
      .replaceAll("http://aluminiumandsteelsa.co.za", siteUrl);
  // OG must always resolve to a real file (hero image), never /images/og/*.jpg.
  const ogImage = srv.hero.heroImage.startsWith("/images/services/")
    ? `${siteUrl}${srv.hero.heroImage}`
    : clean(srv.seo.openGraphImage);
  // Normalize brand in structured data.
  const rawLd = JSON.stringify(srv.structuredDataJsonLd).replaceAll(
    "Aluminium Windows SA",
    businessContact.name,
  );
  const structuredDataJsonLd = JSON.parse(
    clean(rawLd),
  ) as ServiceObject["structuredDataJsonLd"];
  return {
    id: srv.slug,
    slug: srv.slug,
    fullPageUrl: `${siteUrl}/services/${srv.slug}`,
    seo: {
      titleTag: srv.seo.titleTag,
      metaDescription: srv.seo.metaDescription,
      keywords: srv.seo.keywords,
      canonicalUrl: `${siteUrl}/services/${srv.slug}`,
      openGraphImage: ogImage,
    },
    structuredDataJsonLd,
    hero: {
      headline: srv.hero.headline,
      subheadline: srv.hero.subheadline,
      badgeText: srv.hero.badge,
      primaryCtaText: srv.hero.primaryCtaText,
      secondaryCtaText: srv.hero.secondaryCtaText,
      secondaryCtaLink:
        srv.hero.secondaryCtaLink === "#whatsapp"
          ? whatsappQuoteUrl
          : srv.hero.secondaryCtaLink || "#specs",
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
    reviews: defaultServiceReviews,
    faqs: srv.faqs,
  };
}

export const servicePages: Record<string, ServicePageContent> = Object.fromEntries(
  allCoreServices.map((srv) => [srv.slug, convertServicePage(srv)]),
);
