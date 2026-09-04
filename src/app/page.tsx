import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, ChevronRight, Lock, Sun, VolumeX, Building2, House, MapPin, Paintbrush, Ruler, Gem } from "lucide-react";
import { projects } from "@/data/projects";
import HomeServicesShowcase from "@/components/HomeServicesShowcase";
import ProcessSteps from "@/components/ProcessSteps";
import Testimonials from "@/components/Testimonials";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import PlanningTools from "@/components/PlanningTools";
import OurPartners from "@/components/OurPartners";
import BusinessLocationMap from "@/components/BusinessLocationMap";
import { absoluteUrl, siteUrl, whatsappQuoteUrl } from "@/lib/site";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Custom Aluminium Doors, Windows & Steel Works Gauteng | Aluminium Designs",
  description:
    "SABS certified custom aluminium windows, sliding doors, folding stackers, security gates & steel carports across Johannesburg, Pretoria & Gauteng. Request a free quote.",
  alternates: { canonical: siteUrl || "/" },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: siteUrl || "https://www.aluminiumdesigns.co.za",
    siteName: "Aluminium Designs",
    title: "Custom Aluminium Doors, Windows & Steel Works Gauteng | Aluminium Designs",
    description:
      "SABS certified custom aluminium windows, sliding doors, folding stackers, security gates & steel carports across Johannesburg, Pretoria & Gauteng.",
    images: [
      {
        url: absoluteUrl("/images/hero_exterior.png"),
        width: 1200,
        height: 630,
        alt: "Aluminium Designs - Custom Windows, Doors & Steel Security Gauteng",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Aluminium Doors, Windows & Steel Works Gauteng | Aluminium Designs",
    description:
      "SABS certified custom aluminium windows, sliding doors, folding stackers, security gates & steel carports across Johannesburg, Pretoria & Gauteng.",
    images: [absoluteUrl("/images/hero_exterior.png")],
  },
};

export default function Home() {
  const benefits = [
    {
      title: "Zero Maintenance",
      description:
        "Our aluminium frames never rot, rust, or need painting. A quick wipe keeps them looking brand new for years.",
      icon: Paintbrush,
      tag: "No Painting Needed",
    },
    {
      title: "Warm & Quiet Rooms",
      description:
        "Sealed glass and rubber joints block cold winter drafts, keep heat inside, and reduce noisy street sounds.",
      icon: VolumeX,
      tag: "Draft & Noise Shield",
    },
    {
      title: "Made to Fit Your Space",
      description:
        "Every window and door is built from scratch to fit your exact wall openings. No generic sizes or ugly gaps.",
      icon: Ruler,
      tag: "100% Custom Fit",
    },
    {
      title: "Sleek Modern Finishes",
      description:
        "Durable, non-peeling colours in Matte Black, Charcoal Grey, and Satin Silver that instantly boost your home's curb appeal.",
      icon: Gem,
      tag: "Stylish & Modern",
    },
  ];

  const advantages = [
    "Sleek, modern frames that instantly boost your home's look and property value",
    "Long-lasting paint finish that never needs painting, sanding, or varnishing",
    "Tight rubber seals that block cold wind, rain, and dust from entering your rooms",
    "Thick safety glass that keeps your house quiet, cozy, and energy-efficient",
    "Strong security locks built directly into every door and window frame",
    "Polite, clean installation crews who protect your home and clean up after",
  ];

  return (
    <div className="relative w-full bg-surface text-on-surface">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": `${siteUrl}#website`,
              url: siteUrl,
              name: "Aluminium Designs",
              publisher: {
                "@id": `${siteUrl}#business`,
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.slice(0, 4).map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            },
          ]),
        }}
      />
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[65vh] md:min-h-[80vh] flex items-center justify-center border-b border-outline-variant overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0 bg-surface-container-highest">
          <Image
            src="/images/hero_exterior.png"
            alt="Beautiful home aluminium installation"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/35" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-16 sm:py-20 md:py-24 flex items-center justify-center">
          <div className="max-w-3xl mx-auto space-y-5 text-center flex flex-col items-center">
            {/* Clean Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-4 py-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-white/90 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Custom Aluminium &amp; Steel Works
            </div>

            <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold uppercase leading-[1.05] tracking-tight text-white">
              Custom Aluminium Doors, Windows &amp; Steel
            </h1>
            <p className="text-white/90 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
              SABS-certified custom aluminium windows, folding doors, security gates, and steel carports. Measured, manufactured, and neatly installed across Johannesburg, Pretoria &amp; Gauteng.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3 w-full sm:w-auto">
              <Link
                href={whatsappQuoteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-white hover:bg-white/90 text-primary px-7 py-3.5 font-sans text-xs font-bold uppercase tracking-wider transition-all shadow-lg hover:scale-105 active:scale-95 w-full sm:w-auto"
              >
                Request Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/gallery"
                className="flex items-center justify-center gap-2 rounded-full bg-white/15 hover:bg-white/25 text-white border border-white/40 px-6 py-3.5 font-sans text-xs font-semibold uppercase tracking-wide transition-colors backdrop-blur-md w-full sm:w-auto"
              >
                Explore Installations
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <OurPartners />

      {/* STATS BAND — dark break in the rhythm */}
      <section className="bg-brand text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              ["500+", "Installations across Gauteng"],
              ["4.9/5", "Average homeowner rating"],
              ["35km", "Workshop service radius"],
              ["SABS", "Certified materials & glass"],
            ].map(([value, label]) => (
              <div key={label} className="space-y-1">
                <dt className="sr-only">{label}</dt>
                <dd className="font-sans text-3xl sm:text-4xl font-bold tracking-tight text-accent">{value}</dd>
                <dd className="text-[11px] font-sans font-medium uppercase tracking-wide text-white/70">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 2. WHAT WE DO */}
      <section className="py-20 bg-surface border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7 text-left">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
                What We Do
              </span>
              <h2 className="mt-2 font-sans text-3xl sm:text-4xl font-bold uppercase tracking-tight text-primary max-w-3xl">
                Custom Windows &amp; Doors, Built to Fit Your Home Perfectly
              </h2>
              <p className="mt-5 text-sm text-on-surface-variant max-w-2xl leading-relaxed">
                Aluminium Designs measures, makes, and installs custom aluminium windows, doors, and security barriers. From replacing a single drafty window to upgrading your entire home with modern sliding patio doors, everything is custom-made to fit your space and fitted cleanly.
              </p>
              <div className="mt-7 flex flex-col items-start gap-2 sm:flex-row sm:flex-wrap sm:gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-outline-variant bg-surface-container-low px-3 py-1.5 text-[11px] font-medium text-primary sm:gap-2 sm:px-4 sm:py-2 sm:text-xs">
                  <House className="h-3.5 w-3.5 text-accent sm:h-4 sm:w-4" /> Homes &amp; Renovations
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-outline-variant bg-surface-container-low px-3 py-1.5 text-[11px] font-medium text-primary sm:gap-2 sm:px-4 sm:py-2 sm:text-xs">
                  <Building2 className="h-3.5 w-3.5 text-accent sm:h-4 sm:w-4" /> Offices &amp; Shops
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-outline-variant bg-surface-container-low px-3 py-1.5 text-[11px] font-medium text-primary sm:gap-2 sm:px-4 sm:py-2 sm:text-xs">
                  <MapPin className="h-3.5 w-3.5 text-accent sm:h-4 sm:w-4" /> All Gauteng Areas
                </span>
              </div>
            </div>
            <div className="lg:col-span-5 grid gap-3">
              {[
                ["01", "Free Home Measure", "We visit your home to check your openings and discuss your preferred colours and styles."],
                ["02", "Precision Fabrication", "Your aluminium frames and safety glass are custom-built to your exact millimeter dimensions."],
                ["03", "Neat Installation", "Our clean, polite fitting crews install your doors and windows and leave your home spotless."],
              ].map(([number, title, detail]) => (
                <div key={number} className="flex gap-4 border border-outline-variant rounded-xl bg-surface-container-lowest p-5 shadow-sm hover:shadow-md hover:border-accent transition-all">
                  <span className="font-mono text-xs font-bold text-accent">{number}</span>
                  <div>
                    <h3 className="font-sans text-sm font-bold uppercase tracking-tight text-primary">{title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-on-surface-variant">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section className="py-20 bg-surface-container-low border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
              Product Catalogue
            </span>
            <h2 className="mt-2 font-sans text-3xl sm:text-4xl font-bold uppercase tracking-tight text-primary">
              Aluminium &amp; Steel Works
            </h2>
            <p className="mt-3 text-sm text-on-surface-variant max-w-xl mx-auto leading-relaxed">
              Choose from low-maintenance aluminium windows and sliding doors, or heavy-duty steel security gates and carports.
            </p>
          </div>

          <HomeServicesShowcase />
        </div>
      </section>

      <PlanningTools />

      {/* 4. WHY ALUMINIUM */}
      <section className="py-20 bg-surface border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl mx-auto text-center">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent">Built for Everyday Living</span>
            <h2 className="mt-2 font-sans text-3xl sm:text-4xl font-bold uppercase tracking-tight text-primary">Why Choose Aluminium?</h2>
            <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">A practical, modern finish for homes and commercial spaces that need to look good and perform for years.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-outline-variant bg-surface-container-lowest">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <article
                  key={benefit.title}
                  className="group min-h-[300px] border-r border-b border-outline-variant bg-surface-container-lowest p-7 sm:p-8 flex flex-col transition-all duration-300 hover:bg-surface hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-outline-variant bg-surface-container transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="mt-auto pt-12">
                    <span className="font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-accent">
                      {benefit.tag}
                    </span>
                    <h3 className="mt-3 font-sans text-lg font-bold uppercase tracking-tight text-primary">
                      {benefit.title}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-on-surface-variant">
                      {benefit.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. CUSTOM FABRICATION */}
      <section className="py-20 bg-surface-container-lowest border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 h-[320px] sm:h-[400px] border border-outline-variant rounded-2xl overflow-hidden relative shadow-md">
              <Image
                src="/images/slatted_gate.png"
                alt="Custom aluminium gate installation"
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white font-mono text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                Custom Slatted Gate
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 border border-outline-variant p-3 flex justify-between text-[10px]">
                <span className="text-on-surface-variant font-medium">Powder-Coated Finish</span>
                <span className="font-sans font-bold text-primary">Sandton Residence</span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
                Tailored Manufacturing
              </span>
              <h2 className="font-sans text-3xl sm:text-4xl font-bold uppercase tracking-tight text-primary">
                Custom Made For Your Home Layout
              </h2>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Every window, door, and security gate is manufactured from scratch to match your exact home dimensions.
                We handle the entire process smoothly: measuring your space, custom crafting the frames in our factory,
                and fitting them cleanly without damaging your home.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Draft-Proof Rubber Seals",
                  "Non-Fading Powder Finish",
                  "Millimeter-Accurate Fitting",
                  "Toughened Safety Glass",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-on-surface font-medium">
                    <Check className="w-4 h-4 text-accent shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PROCESS SECTION */}
      <section className="py-20 bg-surface-container-low border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
              Easy Steps
            </span>
            <h2 className="mt-2 font-sans text-3xl sm:text-4xl font-bold uppercase tracking-tight text-primary">
              Our Simple 3-Step Process
            </h2>
            <p className="mt-3 text-sm text-on-surface-variant max-w-xl mx-auto leading-relaxed">
              From our first chat to the final check, we make upgrading your home easy and hassle-free.
            </p>
          </div>
          <ProcessSteps />
        </div>
      </section>

      {/* 7. GALLERY PREVIEW */}
      <section className="py-20 bg-surface border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6 mb-12 text-center">
            <div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
                Real Home Transformations
              </span>
              <h2 className="mt-2 font-sans text-3xl sm:text-4xl font-bold uppercase tracking-tight text-primary">
                Beautiful Homes We&apos;ve Upgraded
              </h2>
              <p className="mt-3 text-sm text-on-surface-variant max-w-xl mx-auto leading-relaxed">
                Take a look at recent window, door, and gate installations across Gauteng.
              </p>
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center px-5 py-3 border border-outline-variant hover:border-accent bg-surface font-mono text-[11px] font-bold uppercase tracking-widest text-primary hover:text-accent transition-colors shrink-0 rounded-full"
            >
              View Full Gallery
              <ChevronRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <p className="mb-3 text-center font-mono text-[9px] font-bold uppercase tracking-widest text-accent sm:hidden">
            Swipe to browse projects
          </p>

          <div className="scrollbar-hide -mx-4 flex touch-pan-x snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-3 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0 sm:snap-none lg:grid-cols-3">
            {projects.slice(0, 6).map((project) => (
              <Link
                key={project.id}
                href="/gallery"
                aria-label={`View ${project.title} in the gallery`}
                className="group relative aspect-[4/3] w-[82vw] shrink-0 snap-start overflow-hidden rounded-xl bg-surface-container-highest sm:w-auto sm:snap-none shadow-sm hover:shadow-md transition-shadow"
              >
                <Image
                  src={project.imagePath}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute bottom-3 left-3 right-3 translate-y-2 text-left opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="block font-sans text-xs font-bold uppercase tracking-wide text-white">{project.title}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WHY CHOOSE US */}
      <section className="py-20 bg-surface-container-low border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div className="text-left">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
                  Why Work With Us
                </span>
                <h2 className="mt-2 font-sans text-3xl sm:text-4xl font-bold uppercase tracking-tight text-primary">
                  Why Homeowners Choose Aluminium Designs
                </h2>
                <p className="mt-3 text-sm text-on-surface-variant max-w-lg leading-relaxed">
                  We make upgrading your windows, doors, and gates simple, neat, and stress-free.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {advantages.map((adv, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-on-surface-variant leading-relaxed font-medium">{adv}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="border border-outline-variant rounded-2xl bg-surface p-8 space-y-5 shadow-md">
                <h3 className="font-sans font-bold text-lg uppercase text-primary tracking-tight">
                  Our Homeowner Promises
                </h3>
                {[
                  {
                    icon: VolumeX,
                    label: "Quiet & Cozy Living",
                    detail: "Double glass options that block noisy street sounds and keep warmth inside.",
                  },
                  {
                    icon: Sun,
                    label: "All-Weather Durability",
                    detail: "Tested to withstand highveld rain, heavy winds, and harsh sun without fading.",
                  },
                  {
                    icon: Lock,
                    label: "Clean & Secure Fit",
                    detail: "We measure accurately, fit neatly, and install strong security locks.",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="border-l-2 border-accent pl-4 space-y-1">
                      <div className="flex items-center gap-2">
                        <Icon className="w-3.5 h-3.5 text-accent" />
                        <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
                          {item.label}
                        </p>
                      </div>
                      <p className="text-xs text-on-surface-variant leading-relaxed">{item.detail}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS */}
      <section className="py-20 bg-surface border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
              Client Reviews
            </span>
            <h2 className="mt-2 font-sans text-3xl sm:text-4xl font-bold uppercase tracking-tight text-primary">
              Trusted By Homeowners Across Gauteng
            </h2>
            <p className="mt-3 text-sm text-on-surface-variant max-w-xl mx-auto leading-relaxed">
              Read what happy property owners say about our work and clean installations.
            </p>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="py-20 bg-surface-container-low border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
              Quick Answers
            </span>
            <h2 className="mt-2 font-sans text-3xl sm:text-4xl font-bold uppercase tracking-tight text-primary">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-sm text-on-surface-variant max-w-xl mx-auto leading-relaxed">
              Have questions about prices, delivery times, or guarantees? Find quick answers below.
            </p>
          </div>
          <FAQAccordion limit={4} />
          <div className="mt-10">
            <Link
              href="/faq"
              className="inline-flex items-center text-xs font-mono font-bold uppercase tracking-widest text-accent hover:text-accent-hover transition-colors"
            >
              View All FAQs
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* 11. CTA */}
      <BusinessLocationMap />

      <CTASection />
    </div>
  );
}
