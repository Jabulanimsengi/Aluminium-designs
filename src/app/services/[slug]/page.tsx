import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  BatteryCharging,
  Building,
  Car,
  CheckCircle,
  Clock,
  Compass,
  Dog,
  Droplets,
  Eye,
  EyeOff,
  Feather,
  Flame,
  Home,
  Layers,
  Lock,
  Maximize2,
  Paintbrush,
  PiggyBank,
  RefreshCw,
  Repeat,
  ShieldAlert,
  ShieldCheck,
  Sliders,
  Sparkles,
  Store,
  Sun,
  Thermometer,
  Users,
  VolumeX,
  Wind,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/data/services";
import { servicePages } from "@/data/service-pages";
import { allCoreServices } from "@/data/core-services";
import { gautengLocations } from "@/data/locations";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import ServicePricingAndFinishes from "@/components/ServicePricingAndFinishes";
import { absoluteUrl, siteUrl, slugify, whatsappQuoteUrl } from "@/lib/site";

interface Props {
  params: Promise<{ slug: string }>;
}

const benefitIcons: Record<string, LucideIcon> = {
  BatteryCharging,
  Building,
  Car,
  CheckCircle,
  Clock,
  Compass,
  Dog,
  Droplets,
  Eye,
  EyeOff,
  Feather,
  Flame,
  Home,
  Layers,
  Lock,
  Maximize2,
  Paintbrush,
  PiggyBank,
  RefreshCw,
  Repeat,
  ShieldAlert,
  ShieldCheck,
  Sliders,
  Sparkles,
  Store,
  Sun,
  Thermometer,
  Users,
  VolumeX,
  Wind,
  Wrench,
  Zap,
};

function BenefitIcon({ name }: { name: string }) {
  const Icon = benefitIcons[name] ?? CheckCircle2;
  return <Icon className="w-5 h-5" />;
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug.replace("/services/", "") }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === `/services/${slug}`);
  if (!service) return { title: "Service Not Found" };

  const content = servicePages[service.id];
  if (!content) {
    return {
      title: service.title,
      description: service.shortDescription,
    };
  }

  const canonicalUrl = siteUrl ? `${siteUrl}/services/${slug}` : content.seo.canonicalUrl;

  return {
    title: content.seo.titleTag,
    description: content.seo.metaDescription,
    keywords: content.seo.keywords,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: content.seo.titleTag,
      description: content.seo.metaDescription,
      type: "website",
      images: [{ url: absoluteUrl(service.imagePath) }],
    },
  };
}

const defaultGlazingOptions = [
  {
    name: "Toughened Safety Glass",
    description:
      "Heat-treated for 4-5x impact strength. Complies with SANS 10400 safety regulations for low-level windows and doors.",
  },
  {
    name: "Double-Glazed Sealed Units (Low-E)",
    description:
      "Dual panes with argon gas thermal break. Drastically reduces winter heat loss, summer heat gain, and street noise.",
  },
  {
    name: "Laminated Acoustic Safety Glass",
    description:
      "High-grade PVB interlayer absorbs exterior vibration, blocks UV rays by 99%, and prevents break-ins.",
  },
  {
    name: "Solar-Control Tinted Glass",
    description:
      "Reflective tint technology that reduces Highveld solar heat and harsh glare while maintaining clear interior light.",
  },
];

const processStepImages = [
  "/images/sections/process_step1_measure.jpg",
  "/images/sections/process_step2_manufacture.jpg",
  "/images/sections/process_step3_install.jpg",
  "/images/sections/process_step4_inspect.jpg",
];

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === `/services/${slug}`);

  if (!service) notFound();

  const content = servicePages[service.id];
  if (!content) notFound();

  const otherServices = services.filter((s) => s.id !== service.id);
  const coreSrv = allCoreServices.find((s) => s.slug === slug || s.slug === service.id);
  const majorAreas = gautengLocations
    .filter((location) => location.type === "city" || location.type === "suburb")
    .slice(0, 12);

  const rawServiceLd = content.structuredDataJsonLd;
  const serviceSchema = {
    ...rawServiceLd,
    "@id": `${siteUrl}/services/${slug}#service`,
    url: `${siteUrl}/services/${slug}`,
    image: absoluteUrl(service.imagePath),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: String(content.reviews.length),
      bestRating: "5",
      worstRating: "1",
    },
    review: content.reviews.map((r) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: r.authorName,
      },
      datePublished: r.date,
      reviewBody: r.comment,
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(r.rating),
        bestRating: "5",
        worstRating: "1",
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${siteUrl}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `${siteUrl}/services/${slug}`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="relative bg-surface text-on-surface">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([serviceSchema, breadcrumbSchema, faqSchema])
            .replaceAll("https://example.com", siteUrl)
            .replaceAll("http://example.com", siteUrl)
            .replaceAll("https://aluminiumandsteelsa.co.za", siteUrl)
            .replaceAll("http://aluminiumandsteelsa.co.za", siteUrl)
            .replaceAll("Aluminium Windows SA", "Aluminium Designs"),
        }}
      />

      {/* HERO */}
      <section className="relative w-full h-[50vh] sm:h-[60vh] overflow-hidden border-b border-outline-variant">
        <Image
          src={service.imagePath}
          alt={service.title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/20" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-12">
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 px-3.5 py-1 font-mono text-[10px] font-bold tracking-widest uppercase rounded-full text-white">
              {content.hero.badgeText}
            </div>
            <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white leading-[1.1] max-w-3xl">
              {content.hero.headline}
            </h1>
            <p className="text-white/80 text-sm sm:text-base max-w-2xl leading-relaxed">
              {content.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-2">
              <Link
                href={whatsappQuoteUrl}
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-6 py-3 font-mono text-[11px] font-bold uppercase tracking-widest transition-colors hover:bg-surface-container-low rounded-full"
              >
                {content.hero.primaryCtaText}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={content.hero.secondaryCtaLink || "#specs"}
                className="inline-flex items-center justify-center gap-2 border border-white/25 bg-white/10 text-white px-6 py-3 font-mono text-[11px] font-bold uppercase tracking-widest transition-colors hover:bg-white/20 rounded-full"
              >
                {content.hero.secondaryCtaText}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-20 bg-surface border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
                  About This Service
                </span>
                <h2 className="mt-2 font-sans text-3xl sm:text-4xl font-bold uppercase tracking-tight text-primary">
                  {content.overview.heading}
                </h2>
              </div>
              <div className="space-y-4">
                {content.overview.paragraphs.map((paragraph, i) => (
                  <p key={i} className="text-sm sm:text-base text-on-surface-variant leading-relaxed text-left">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="border border-outline-variant bg-surface-container-low p-5 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <p className="text-sm text-on-surface font-medium leading-relaxed">
                  {content.overview.keyFeaturesNotice}
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden border border-outline-variant bg-surface-container shadow-sm group">
                <Image
                  src="/images/sections/overview_craftsmanship.jpg"
                  alt={`${service.title} precision craftsmanship and joinery`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 450px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="inline-block bg-black/70 backdrop-blur-md px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-white border border-white/20 rounded-full">
                    Precision Fit &amp; Weather Seals
                  </span>
                  <span className="font-mono text-[10px] text-white/80 uppercase">
                    SANS 10400
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING & FINISHES */}
      <ServicePricingAndFinishes
        serviceTitle={service.title}
        startingPrice={coreSrv?.pricingGuide?.estimatedStartingPrice}
        priceUnit={coreSrv?.pricingGuide?.priceUnit}
        priceFactors={coreSrv?.pricingGuide?.priceFactors}
      />

      {/* BENEFITS */}
      <section className="py-20 bg-surface-container-low border-b border-outline-variant">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
              Why Choose Us
            </span>
            <h2 className="mt-2 font-sans text-3xl sm:text-4xl font-bold uppercase tracking-tight text-primary">
              {content.benefits.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {content.benefits.items.map((benefit) => (
              <div
                key={benefit.title}
                className="flex gap-4 border border-outline-variant bg-surface-container-lowest p-5 hover:border-accent transition-colors shadow-sm"
              >
                <div className="w-10 h-10 border border-outline-variant bg-surface-container flex items-center justify-center text-accent shrink-0 mt-0.5">
                  <BenefitIcon name={benefit.icon} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-sans text-sm font-bold uppercase tracking-tight text-primary">
                    {benefit.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-on-surface-variant leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT TYPES */}
      <section className="py-20 bg-surface border-b border-outline-variant">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
              Options &amp; Styles
            </span>
            <h2 className="mt-2 font-sans text-3xl sm:text-4xl font-bold uppercase tracking-tight text-primary">
              {content.productTypes.title}
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-sm text-on-surface-variant leading-relaxed">
              {content.productTypes.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {content.productTypes.items.map((type) => (
              <div
                key={type.name}
                className="border border-outline-variant bg-surface-container-lowest p-6 hover:border-accent transition-colors flex flex-col"
              >
                <span className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-secondary">
                  {type.tagline}
                </span>
                <h3 className="mt-2 font-sans text-lg font-bold uppercase tracking-tight text-primary">
                  {type.name}
                </h3>
                <p className="mt-3 text-xs text-on-surface-variant leading-relaxed">
                  {type.description}
                </p>
                <p className="mt-4 border-t border-outline-variant pt-3 text-[11px] font-medium text-on-surface">
                  <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-secondary">
                    Ideal for:{" "}
                  </span>
                  {type.idealFor}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GLAZING OPTIONS */}
      <section className="py-20 bg-surface-container-low border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
              Glass &amp; Performance
            </span>
            <h2 className="mt-2 font-sans text-3xl sm:text-4xl font-bold uppercase tracking-tight text-primary">
              {content.glazingOptions.title}
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-sm text-on-surface-variant leading-relaxed">
              {content.glazingOptions.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden border border-outline-variant bg-surface-container shadow-sm group">
                <Image
                  src="/images/sections/glazing_technology.jpg"
                  alt="Double glazing thermal insulation and soundproof safety glass"
                  fill
                  sizes="(max-width: 1024px) 100vw, 450px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-black/70 backdrop-blur-md px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-white border border-white/20 rounded-full">
                    Double-Glazing &amp; Thermal Break
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {(content.glazingOptions.options.length > 0
                ? content.glazingOptions.options
                : defaultGlazingOptions
              ).map((option) => (
                <div
                  key={option.name}
                  className="border border-outline-variant bg-surface-container-lowest p-5 flex gap-4 hover:border-accent transition-colors shadow-sm"
                >
                  <div className="w-8 h-8 border border-outline-variant bg-surface-container flex items-center justify-center text-accent shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-sans text-sm font-bold text-primary">{option.name}</h3>
                    <p className="mt-1 text-xs text-on-surface-variant leading-relaxed">
                      {option.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SPECIFICATIONS */}
      <section id="specs" className="py-20 bg-surface border-b border-outline-variant scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
              Built to Spec
            </span>
            <h2 className="mt-2 font-sans text-3xl sm:text-4xl font-bold uppercase tracking-tight text-primary">
              {content.specifications.title}
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-sm text-on-surface-variant leading-relaxed">
              Custom built with durable aluminium frames, long-lasting powder-coated colours, and secure deadbolt locks.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 border border-outline-variant bg-surface-container-lowest divide-y divide-outline-variant shadow-sm">
              {content.specifications.items.map((spec) => (
                <div
                  key={spec.label}
                  className="grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-1 sm:gap-6 p-4 sm:p-5"
                >
                  <dt className="font-mono text-[10px] font-bold uppercase tracking-widest text-secondary pt-0.5">
                    {spec.label}
                  </dt>
                  <dd className="text-sm text-on-surface leading-relaxed font-medium">{spec.value}</dd>
                </div>
              ))}
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="relative aspect-[16/9] w-full overflow-hidden border border-outline-variant bg-surface-container shadow-sm group">
                <Image
                  src="/images/sections/finishes_hardware.jpg"
                  alt="Durable powder-coated colour finishes and multi-point security locks"
                  fill
                  sizes="(max-width: 1024px) 100vw, 450px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-black/70 backdrop-blur-md px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-white border border-white/20 rounded-full">
                    Durable Finishes &amp; Hardware
                  </span>
                </div>
              </div>
              <div className="border border-outline-variant bg-surface-container-low p-4 text-xs text-on-surface-variant leading-relaxed">
                <span className="font-mono font-bold uppercase tracking-wider text-primary block mb-1">Standard Finishes:</span>
                Available in Matte Black, Charcoal Grey, Satin Silver, and Bronze powder coat with 15-year UV color fastness warranty.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INSTALLATION PROCESS */}
      <section className="py-20 bg-surface-container-low border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
              How It Works
            </span>
            <h2 className="mt-2 font-sans text-3xl sm:text-4xl font-bold uppercase tracking-tight text-primary">
              {content.installationProcess.title}
            </h2>
            <p className="mt-3 text-sm text-on-surface-variant max-w-xl mx-auto leading-relaxed">
              From free on-site measuring to factory fabrication and spotless installation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.installationProcess.steps.map((step, index) => {
              const stepImage = processStepImages[index % processStepImages.length];
              return (
                <div
                  key={step.stepNumber}
                  className="border border-outline-variant bg-surface-container-lowest overflow-hidden flex flex-col hover:border-accent transition-all duration-300 shadow-sm group"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-container">
                    <Image
                      src={stepImage}
                      alt={step.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 bg-accent text-white font-mono text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full shadow-md">
                      {step.stepNumber}
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="font-sans font-bold text-base text-primary uppercase tracking-tight">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-xs text-on-surface-variant leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 bg-surface border-b border-outline-variant">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
              Customer Reviews
            </span>
            <h2 className="mt-2 font-sans text-3xl sm:text-4xl font-bold uppercase tracking-tight text-primary">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {content.reviews.map((review) => (
              <div
                key={review.authorName}
                className="border border-outline-variant bg-surface-container-lowest p-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-sm text-on-surface-variant leading-relaxed italic">
                    &quot;{review.comment}&quot;
                  </p>
                </div>
                <div className="border-t border-outline-variant pt-4 mt-5">
                  <h4 className="font-sans font-bold text-xs text-primary">{review.authorName}</h4>
                  <p className="text-[10px] font-mono text-secondary uppercase tracking-wider mt-0.5">
                    {review.location} &middot; {review.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-surface-container-low border-b border-outline-variant">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
              Quick Answers
            </span>
            <h2 className="mt-2 font-sans text-3xl font-bold uppercase tracking-tight text-primary">
              Frequently Asked Questions
            </h2>
          </div>
          <FAQAccordion items={content.faqs} />
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="py-20 bg-surface border-b border-outline-variant overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
              More Aluminium Solutions
            </span>
            <h2 className="mt-2 font-sans text-3xl sm:text-4xl font-bold uppercase tracking-tight text-primary">
              Explore Other Products
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {otherServices.slice(0, 4).map((s) => (
              <Link
                key={s.id}
                href={s.slug}
                className="group overflow-hidden border border-outline-variant bg-surface-container-lowest transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-surface-container-high">
                  <Image
                    src={s.imagePath}
                    alt={s.title}
                    fill
                    sizes="320px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                  <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary shadow-md transition-colors group-hover:bg-accent group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
                <div className="p-5">
                  <span className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-secondary">
                    Custom manufactured
                  </span>
                  <h3 className="mt-2 font-sans text-base font-bold uppercase tracking-tight text-primary">
                    {s.title}
                  </h3>
                  <p className="mt-3 line-clamp-2 text-xs leading-relaxed text-on-surface-variant">
                    {s.shortDescription}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-outline-variant bg-surface px-5 py-3 font-mono text-[10px] font-bold uppercase tracking-widest text-primary transition-colors hover:border-accent hover:bg-accent hover:text-white"
            >
              View All Products
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* AREAS WE SERVE */}
      <section className="py-20 bg-surface-container-low border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
              Local Service Areas
            </span>
            <h2 className="mt-2 font-sans text-3xl sm:text-4xl font-bold uppercase tracking-tight text-primary">
              {service.title} Across Gauteng
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-sm text-on-surface-variant leading-relaxed">
              We manufacture and install in every major Gauteng area. Select your area for local details.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {majorAreas.map((area) => (
              <Link
                key={area.id}
                href={`/locations/${area.id}/${slugify(service.title)}-in-${area.id}`}
                className="group flex items-center justify-between gap-2 border border-outline-variant bg-surface-container-lowest px-4 py-3 text-xs font-medium text-on-surface transition-colors hover:border-accent"
              >
                <span className="truncate">{service.title} in {area.name}</span>
                <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-secondary transition-colors group-hover:text-accent" />
              </Link>
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 rounded-full border border-outline-variant bg-surface px-5 py-3 font-mono text-[10px] font-bold uppercase tracking-widest text-primary transition-colors hover:border-accent hover:bg-accent hover:text-white"
            >
              View All Service Areas
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
