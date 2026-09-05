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

function generateTenServiceFaqs(srv: ServiceObject): ServicePageFaq[] {
  const existingFaqs = Array.isArray(srv.faqs) ? srv.faqs : [];
  const faqs: ServicePageFaq[] = [...existingFaqs];

  const isSteel =
    srv.category.toLowerCase().includes("steel") ||
    /gate|carport|burglar|fencing|staircase|shed|welding|repair/i.test(srv.serviceName);

  const fallbackQuestions: ServicePageFaq[] = [
    {
      question: `Can ${srv.serviceName} be custom-manufactured for non-standard openings?`,
      answer: `Yes. Every ${srv.serviceName.toLowerCase()} unit is manufactured to order according to your exact on-site measurements. Whether your space features unconventional architectural dimensions or specific structural tolerances, we fabricate frames that fit perfectly with zero gaps.`,
    },
    {
      question: `How much does ${srv.serviceName} cost and do you provide free on-site quotes?`,
      answer: `${
        srv.pricingGuide?.estimatedStartingPrice
          ? `Pricing starts from around ${srv.pricingGuide.estimatedStartingPrice} ${
              srv.pricingGuide.priceUnit || "fitted"
            }, influenced by custom dimensions, material profile grade, and hardware.`
          : `Pricing is determined by opening size, structural specifications, and chosen hardware.`
      } We provide 100% free on-site measuring and itemized written quotations across Johannesburg, Pretoria, and the greater Gauteng region.`,
    },
    {
      question: `Does ${srv.serviceName} comply with South African building regulations (SANS)?`,
      answer: `Yes. All our ${srv.serviceName.toLowerCase()} installations adhere strictly to South African National Standards (${
        isSteel
          ? "SABS structural steelwork standards and high-tensile security engineering"
          : "SANS 10400-N safety glazing and SANS 10400-XA thermal building regulations"
      }). We issue compliance documentation where required for municipal sign-off.`,
    },
    {
      question: `What powder coating colors and finishes are available for ${srv.serviceName}?`,
      answer: `Our ${srv.serviceName.toLowerCase()} frames are available in durable architectural powder-coated finishes including Matte Charcoal, Jet Black, Pure White, Bronze, and Natural Anodized Silver. Custom UV-stable RAL colors are also available upon request to match your home or office palette.`,
    },
    {
      question: `What is the expected turnaround time from measurement to completed installation?`,
      answer: `From initial site measurement and quote sign-off, custom manufacturing in our workshop typically takes 5 to 7 working days. Fitting is carried out cleanly and efficiently in 1 to 2 days by our background-checked, insured installation specialists.`,
    },
    {
      question: `How weatherproof is ${srv.serviceName} during heavy Highveld thunderstorms?`,
      answer: `${srv.serviceName} is engineered with UV-resistant EPDM perimeter gaskets, deep drainage channels, and silicone structural seals that prevent water ingress and wind drafts even during severe Gauteng storms and high-wind weather.`,
    },
    {
      question: `What security features and locks are integrated into ${srv.serviceName}?`,
      answer: `We fit heavy-duty multi-point latching locks, tamper-resistant cylinders, and structural frame fixings. For glazed units, shatter-resistant 6.38mm laminated safety glass is standard, providing an effective barrier against forced entry.`,
    },
    {
      question: `Does ${srv.serviceName} offer acoustic soundproofing and energy efficiency?`,
      answer: `Yes. Tight perimeter compression seals together with high-performance glass units or solid insulated panels significantly reduce exterior street noise, traffic rumble, and heat transfer—keeping your indoor environment quiet and energy efficient all year round.`,
    },
    {
      question: `What maintenance is required to keep ${srv.serviceName} in prime condition?`,
      answer: `Maintenance is remarkably low. Simply wipe powder-coated surfaces with mild soapy water and a soft microfiber cloth every few months. Keep sliding tracks clean of grit and apply a light silicone lubricant to moving locks and rollers once a year.`,
    },
    {
      question: `What warranty and workmanship guarantee do you provide on ${srv.serviceName}?`,
      answer: `All our ${srv.serviceName.toLowerCase()} products come with a comprehensive workmanship installation guarantee alongside manufacturer warranties on hardware mechanisms and architectural powder coating against peeling or UV discoloration.`,
    },
    {
      question: `Can you remove and replace old existing fixtures when installing ${srv.serviceName}?`,
      answer: `Yes. Our technicians carefully remove old, damaged, or outdated frames and fixtures without damaging your existing brickwork, plaster, or tile surrounds, safely hauling away all old materials from your property upon completion.`,
    },
    {
      question: `How do I book a free site consultation for ${srv.serviceName}?`,
      answer: `You can request a site visit directly through our website, message our team on WhatsApp at 071 612 2439, or submit a request on our contact page. A technical assessor will arrange a convenient time to take precise measurements and discuss your design preferences.`,
    },
  ];

  for (const item of fallbackQuestions) {
    if (faqs.length >= 10) break;
    const topicKeywords = item.question
      .toLowerCase()
      .replace(/[^a-z0-9 ]/g, "")
      .split(" ")
      .filter((w) => w.length > 4);
    const isDuplicate = faqs.some((existing) => {
      const existingText = (existing.question + " " + existing.answer).toLowerCase();
      const matchCount = topicKeywords.filter((k) => existingText.includes(k)).length;
      return matchCount >= 3;
    });

    if (!isDuplicate) {
      faqs.push(item);
    }
  }

  let fallbackIndex = 0;
  while (faqs.length < 10 && fallbackIndex < fallbackQuestions.length) {
    const candidate = fallbackQuestions[fallbackIndex++];
    if (!faqs.some((f) => f.question === candidate.question)) {
      faqs.push(candidate);
    }
  }

  return faqs.slice(0, 10);
}

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
    faqs: generateTenServiceFaqs(srv),
  };
}

export const servicePages: Record<string, ServicePageContent> = Object.fromEntries(
  allCoreServices.map((srv) => [srv.slug, convertServicePage(srv)]),
);
