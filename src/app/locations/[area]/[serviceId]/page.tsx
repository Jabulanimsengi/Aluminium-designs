import React from "react";
import { gautengLocations } from "@/data/locations";
import { services } from "@/data/services";
import {
  getLocationServicePage,
  getPrerenderLocationServiceRoutes,
} from "@/data/location-service-pages";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Phone, Mail, Star, CheckCircle2 } from "lucide-react";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import { whatsappQuoteUrl, slugify } from "@/lib/site";

export const dynamicParams = true;

export async function generateStaticParams() {
  return getPrerenderLocationServiceRoutes();
}

export async function generateMetadata({ params }: { params: Promise<{ area: string; serviceId: string }> }) {
  const { area, serviceId } = await params;
  const content = getLocationServicePage(area, serviceId);

  if (!content) return { title: "Not Found" };

  return {
    title: content.seo.titleTag,
    description: content.seo.metaDescription,
    keywords: content.seo.keywords,
    alternates: { canonical: content.seo.canonicalUrl },
    robots: { index: true, follow: true },
    openGraph: {
      title: content.seo.titleTag,
      description: content.seo.metaDescription,
      type: "website",
      images: [{ url: content.seo.openGraphImage }],
    },
  };
}

export default async function LocationServicePage({ params }: { params: Promise<{ area: string; serviceId: string }> }) {
  const { area, serviceId } = await params;
  const content = getLocationServicePage(area, serviceId);

  if (!content) notFound();

  const location = gautengLocations.find((loc) => loc.id === content.locationSlug) ?? {
    id: content.locationSlug,
    name: content.locationSlug,
    type: "suburb" as const,
    municipality: "Gauteng",
  };
  const service = services.find((s) => s.id === content.serviceId) ?? {
    id: content.serviceId,
    title: content.hero.headline.replace(/^Architectural /, "").replace(/ in .*$/, ""),
    slug: `/services/${content.serviceId}`,
    shortDescription: content.hero.subheadline,
    longDescription: content.localizedStory.uniqueParagraphs[0] ?? "",
    features: [],
    imagePath: "/images/window_detail.png",
    iconName: "Sparkles",
  };

  const relatedAreas = gautengLocations
    .filter((l) => (l.type === "city" || l.type === "town") && l.id !== location.id)
    .slice(0, 4);

  return (
    <div className="bg-surface text-on-surface">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(content.structuredDataJsonLd) }}
      />

      {/* 1. HERO SECTION */}
      <section className="relative pt-20 pb-16 lg:pt-24 lg:pb-20 overflow-hidden bg-surface-container-low border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-surface-container border border-outline-variant px-3.5 py-1.5 rounded-full">
                <MapPin className="w-4 h-4 text-on-tertiary-container" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-on-tertiary-container">
                  {content.localNAP.servicedSuburbs.length} suburbs serviced near {location.name}
                </span>
              </div>

              <h1 className="font-sans font-bold uppercase tracking-tight text-4xl sm:text-5xl lg:text-6xl text-primary leading-[1.1]">
                {content.hero.headline}
              </h1>

              <div className="inline-flex items-center space-x-2 bg-surface-container-lowest border border-outline-variant px-3.5 py-1.5 rounded-full">
                <CheckCircle2 className="w-4 h-4 text-on-tertiary-container" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-on-tertiary-container">
                  {content.hero.localBadgeText}
                </span>
              </div>

              <p className="font-sans text-on-surface-variant text-lg leading-relaxed max-w-xl">
                {content.hero.subheadline}
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4">
                <Link
                  href={whatsappQuoteUrl}
                  className="flex items-center justify-center gap-2 bg-on-tertiary-container hover:bg-primary text-white px-6 py-3.5 font-mono text-[11px] font-bold uppercase tracking-widest transition-colors w-full sm:w-auto rounded-full"
                >
                  Request a Quote in {location.name}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href={`/locations/${location.id}`}
                  className="flex items-center justify-center gap-2 bg-surface text-secondary px-6 py-3.5 font-mono text-[11px] font-bold uppercase tracking-widest rounded-full border border-outline-variant hover:border-primary hover:bg-surface-container transition-colors w-full sm:w-auto"
                >
                  View All {location.name} Services
                </Link>
              </div>
            </div>

            {/* Feature Image */}
            <div className="relative h-[400px] lg:h-[500px] w-full overflow-hidden border border-outline-variant">
              <Image
                src={service.imagePath}
                alt={`${service.title} in ${location.name}`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. LOCALIZED STORY */}
      <section className="py-24 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
              Local Expertise
            </span>
            <h2 className="mt-2 font-sans text-3xl sm:text-4xl font-bold uppercase tracking-tight text-primary">
              {content.localizedStory.heading}
            </h2>
          </div>

          <div className="space-y-4">
            {content.localizedStory.uniqueParagraphs.map((paragraph, i) => (
              <p key={i} className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 border border-outline-variant bg-surface-container-low p-5 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
            <p className="text-sm text-on-surface font-medium leading-relaxed">
              {content.localizedStory.localClimateNotice}
            </p>
          </div>
        </div>
      </section>

      {/* 3. SERVICE AREA / NAP */}
      <section className="py-24 bg-surface-container-low border-t border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
                Service Area
              </span>
              <h2 className="font-sans font-bold uppercase tracking-tight text-3xl sm:text-4xl text-primary">
                Servicing {location.name} &amp; Surrounding Areas
              </h2>
              <p className="font-sans text-on-surface-variant text-base leading-relaxed">
                Our installation team serves {location.name} from our Katlehong workshop, with
                project scheduling available for residential and commercial work throughout {location.municipality}.
              </p>

              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4">
                {content.localNAP.servicedSuburbs.map((suburb) => (
                  <li
                    key={suburb}
                    className="flex items-center gap-2 border border-outline-variant bg-surface-container-lowest px-3 py-2 text-xs font-medium text-on-surface"
                  >
                    <MapPin className="w-3.5 h-3.5 text-secondary shrink-0" />
                    {suburb}
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <a
                  href={`tel:${content.localNAP.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 border border-outline-variant bg-surface-container-lowest p-4 hover:border-primary transition-colors"
                >
                  <Phone className="w-5 h-5 text-secondary shrink-0" />
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-wider text-secondary">Call us</p>
                    <p className="text-sm font-bold text-primary">{content.localNAP.phone}</p>
                  </div>
                </a>
                <a
                  href={`mailto:${content.localNAP.email}`}
                  className="flex items-center gap-3 border border-outline-variant bg-surface-container-lowest p-4 hover:border-primary transition-colors"
                >
                  <Mail className="w-5 h-5 text-secondary shrink-0" />
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-wider text-secondary">Email us</p>
                    <p className="text-sm font-bold text-primary truncate">{content.localNAP.email}</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-8 lg:p-12 border border-outline-variant relative overflow-hidden">
              <div className="relative z-10 space-y-6">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
                  Branch
                </span>
                <h3 className="font-sans font-bold text-2xl text-primary">
                  {content.localNAP.branchOrServiceArea}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {content.localNAP.addressString}
                </p>
                {content.localProjects.length > 0 && (
                  <div className="border-t border-outline-variant pt-6">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
                    Nearby Projects
                  </span>
                  <ul className="mt-4 space-y-4">
                    {content.localProjects.map((project, i) => (
                      <li key={i} className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-on-tertiary-container text-white flex items-center justify-center font-bold text-sm shrink-0">
                          {i + 1}
                        </div>
                        <div>
                          <h4 className="font-bold text-primary text-sm">{project.title}</h4>
                          <p className="text-on-surface-variant text-xs mt-1">
                            {project.neighborhood} &middot; {project.completionDate}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {content.localProjects.length > 0 && (
        <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
              Local Case Studies
            </span>
            <h2 className="font-sans font-bold uppercase tracking-tight text-3xl sm:text-4xl text-primary">
              Recent {service.title} Projects in {location.name}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.localProjects.map((project, i) => (
              <div
                key={i}
                className="border border-outline-variant bg-surface-container-lowest overflow-hidden hover:border-primary transition-colors"
              >
                <div className="relative h-56 w-full overflow-hidden bg-surface-container-high">
                  <Image
                    src={project.imageUrls[0] ?? service.imagePath}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-widest text-primary rounded-full">
                    {project.completionDate}
                  </div>
                </div>
                <div className="p-7 space-y-4">
                  <h3 className="font-sans font-bold text-xl text-primary">{project.title}</h3>
                  <p className="text-xs font-mono text-secondary uppercase tracking-wider">
                    {project.neighborhood}
                  </p>
                  <div className="space-y-3">
                    <div>
                      <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-secondary">
                        The Challenge
                      </p>
                      <p className="text-sm text-on-surface-variant leading-relaxed mt-1">
                        {project.challengeDescription}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-secondary">
                        Our Solution
                      </p>
                      <p className="text-sm text-on-surface-variant leading-relaxed mt-1">
                        {project.solutionProvided}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </section>
      )}

      {content.localReviews.length > 0 && (
        <section className="py-24 bg-surface-container-low border-t border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
              Local Reviews
            </span>
            <h2 className="font-sans font-bold uppercase tracking-tight text-3xl sm:text-4xl text-primary">
              What Homeowners in {location.name} Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.localReviews.map((review, i) => (
              <div
                key={i}
                className="border border-outline-variant bg-surface-container-lowest p-6 sm:p-8 flex flex-col justify-between hover:border-primary transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-on-surface-variant leading-relaxed italic">
                    &quot;{review.comment}&quot;
                  </p>
                </div>
                <div className="border-t border-outline-variant pt-4 mt-5">
                  <h4 className="font-sans font-bold text-xs text-primary">{review.authorName}</h4>
                  <p className="text-[10px] font-mono text-secondary uppercase tracking-wider mt-0.5">
                    {review.suburb} &middot; {review.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </section>
      )}

      {/* 6. LOCAL FAQ */}
      <section className="py-24 bg-surface border-t border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
              Quick Answers
            </span>
            <h2 className="font-sans font-bold uppercase tracking-tight text-3xl sm:text-4xl text-primary">
              Frequently Asked Questions
            </h2>
          </div>
          <FAQAccordion items={content.localFaqs} />
        </div>
      </section>

      {/* EXPLORE MORE */}
      <section className="py-20 bg-surface-container-low border-t border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
              Explore More
            </span>
            <h2 className="mt-2 font-sans font-bold uppercase tracking-tight text-3xl sm:text-4xl text-primary">
              More {service.title} &amp; Service Areas
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href={service.slug}
              className="group flex items-center justify-between gap-3 border border-outline-variant bg-surface-container-lowest px-5 py-4 transition-colors hover:border-primary"
            >
              <div>
                <p className="font-mono text-[9px] font-bold uppercase tracking-widest text-secondary">All Products</p>
                <p className="mt-1 text-sm font-bold text-primary">{service.title}</p>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0 text-secondary transition-colors group-hover:text-primary" />
            </Link>

            <Link
              href={`/locations/${location.id}`}
              className="group flex items-center justify-between gap-3 border border-outline-variant bg-surface-container-lowest px-5 py-4 transition-colors hover:border-primary"
            >
              <div>
                <p className="font-mono text-[9px] font-bold uppercase tracking-widest text-secondary">All Services</p>
                <p className="mt-1 text-sm font-bold text-primary">{location.name}</p>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0 text-secondary transition-colors group-hover:text-primary" />
            </Link>

            {relatedAreas.map((area) => (
              <Link
                key={area.id}
                href={`/locations/${area.id}/${slugify(service.title)}-in-${area.id}`}
                className="group flex items-center justify-between gap-3 border border-outline-variant bg-surface-container-lowest px-5 py-4 transition-colors hover:border-primary"
              >
                <div>
                  <p className="font-mono text-[9px] font-bold uppercase tracking-widest text-secondary">Also in</p>
                  <p className="mt-1 text-sm font-bold text-primary">{service.title} in {area.name}</p>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-secondary transition-colors group-hover:text-primary" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
