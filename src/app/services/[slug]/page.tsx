import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { services } from "@/data/services";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import Link from "next/link";
import {
  Shield, Wind, GlassWater, PaintBucket, Lock, Wrench,
  Ruler, Sun, Sparkles, Drill, ArrowUpRight, type LucideIcon,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === `/services/${slug}`);
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} | Aluminium Designs`,
    description: service.shortDescription,
  };
}

const iconKeywords: [string[], LucideIcon][] = [
  [["glass", "glazing", "glazed"], GlassWater],
  [["lock", "security", "safety", "secure"], Lock],
  [["weather", "seal", "draft", "wind", "rain", "storm"], Wind],
  [["paint", "powder", "coating", "finish", "colour", "color", "anodized"], PaintBucket],
  [["repair", "maintenance", "replace", "upgrade", "retrofit"], Wrench],
  [["measure", "size", "dimension", "fit", "custom", "bespoke", "tailor"], Ruler],
  [["light", "sun", "daylight", "bright", "thermal", "energy", "insulation"], Sun],
  [["install", "fitting", "professional", "crew", "site"], Drill],
  [["design", "style", "modern", "clean", "elegant", "minimalist", "aesthetic"], Sparkles],
  [["hardware", "handle", "hinge", "roller", "track", "mechanism"], Shield],
];

function pickIcon(feature: string): LucideIcon {
  const lower = feature.toLowerCase();
  for (const [keywords, icon] of iconKeywords) {
    if (keywords.some((kw) => lower.includes(kw))) return icon;
  }
  return Sparkles;
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === `/services/${slug}`);

  if (!service) notFound();

  const otherServices = services.filter((s) => s.id !== service.id);

  return (
    <div className="relative bg-surface text-on-surface">
      {/* Hero image with title overlay */}
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
          <div className="max-w-4xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 px-3.5 py-1 font-mono text-[10px] font-bold tracking-widest uppercase rounded-full text-white">
              {service.title}
            </div>
            <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white leading-[1.1] max-w-2xl">
              {service.title}
            </h1>
            <p className="text-white/80 text-sm sm:text-base max-w-xl leading-relaxed">
              {service.longDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Feature cards grid */}
      <section className="py-24 bg-surface border-b border-outline-variant">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
              What You Get
            </span>
            <h2 className="mt-2 font-sans text-3xl sm:text-4xl font-bold uppercase tracking-tight text-primary">
              Features &amp; Key Highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {service.features.map((feat) => {
              const Icon = pickIcon(feat);
              return (
                <div
                  key={feat}
                  className="flex gap-4 border border-outline-variant bg-surface-container-lowest p-5 rounded-2xl hover:border-primary transition-colors shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl border border-outline-variant bg-surface-container flex items-center justify-center text-secondary shrink-0 mt-0.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-on-surface font-medium leading-relaxed">{feat}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="py-20 bg-surface-container-low border-b border-outline-variant overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
              More Aluminium Solutions
            </span>
            <h2 className="mt-2 font-sans text-3xl sm:text-4xl font-bold uppercase tracking-tight text-primary">
              Explore Other Products
            </h2>
            <p className="mt-3 max-w-xl mx-auto text-sm leading-relaxed text-on-surface-variant">
              Browse more made-to-measure products for residential and commercial properties.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {otherServices.slice(0, 4).map((s) => (
              <Link
                key={s.id}
                href={s.slug}
                className="group overflow-hidden border border-outline-variant bg-surface-container-lowest transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg"
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
                  <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary shadow-md transition-colors group-hover:bg-primary group-hover:text-on-primary">
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
              className="inline-flex items-center gap-2 rounded-full border border-outline-variant bg-surface px-5 py-3 font-mono text-[10px] font-bold uppercase tracking-widest text-primary transition-colors hover:border-primary hover:bg-primary hover:text-on-primary"
            >
              View All Products
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-surface-container-low border-b border-outline-variant">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
              Quick Answers
            </span>
            <h2 className="mt-2 font-sans text-3xl font-bold uppercase tracking-tight text-primary">
              Frequently Asked Questions
            </h2>
          </div>
          <FAQAccordion limit={4} category="general" />
        </div>
      </section>

      <CTASection />
    </div>
  );
}
