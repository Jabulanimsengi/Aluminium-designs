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
  Ruler, Sun, Sparkles, Drill, type LucideIcon,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === `/services/${slug}`);
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} | Premium Aluminium`,
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
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
              Features &amp; Benefits
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {service.features.map((feat) => {
              const Icon = pickIcon(feat);
              return (
                <div
                  key={feat}
                  className="flex gap-4 border border-outline-variant bg-surface-container-lowest p-5 rounded-2xl hover:border-primary transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl border border-outline-variant bg-surface-container flex items-center justify-center text-secondary shrink-0 mt-0.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-on-surface leading-relaxed">{feat}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="py-16 bg-surface-container-low border-b border-outline-variant">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-outline mb-4">
            Explore Other Services
          </p>
          <div className="flex flex-wrap gap-2">
            {otherServices.map((s) => (
              <Link
                key={s.id}
                href={s.slug}
                className="rounded-full border border-outline-variant bg-surface hover:bg-surface-container hover:border-primary px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-wider text-secondary hover:text-primary transition-colors"
              >
                {s.title}
              </Link>
            ))}
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
          <FAQAccordion limit={4} category="pricing" />
        </div>
      </section>

      <CTASection />
    </div>
  );
}
