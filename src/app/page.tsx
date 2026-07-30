import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Check, Sparkles, Hammer, ChevronRight, Lock, Sun, VolumeX } from "lucide-react";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import ServiceCard from "@/components/ServiceCard";
import ProcessSteps from "@/components/ProcessSteps";
import Testimonials from "@/components/Testimonials";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";

export default function Home() {
  const benefits = [
    {
      title: "Zero Maintenance",
      description:
        "Our aluminium frames never rot, rust, or need painting. A quick wipe keeps them looking brand new for years.",
      icon: Sparkles,
      tag: "No Painting Needed",
      span: "md:col-span-2 bg-surface-container-lowest",
    },
    {
      title: "Warm & Quiet Rooms",
      description:
        "Sealed glass and rubber joints block cold winter drafts, keep heat inside, and reduce noisy street sounds.",
      icon: ShieldCheck,
      tag: "Draft & Noise Shield",
      span: "md:col-span-1 bg-surface-container-lowest",
    },
    {
      title: "Made to Fit Your Space",
      description:
        "Every window and door is built from scratch to fit your exact wall openings. No generic sizes or ugly gaps.",
      icon: Hammer,
      tag: "100% Custom Fit",
      span: "md:col-span-1 bg-surface-container-lowest",
    },
    {
      title: "Sleek Modern Finishes",
      description:
        "Durable, non-peeling colours in Matte Black, Charcoal Grey, and Satin Silver that instantly boost your home's curb appeal.",
      icon: Sparkles,
      tag: "Stylish & Modern",
      span: "md:col-span-2 bg-primary text-on-primary",
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
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[60vh] md:min-h-[85vh] flex items-end pb-0 border-b border-outline-variant overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pb-12 md:pb-20">
          <div className="max-w-3xl space-y-5">
            <div className="inline-block border-l-4 border-on-tertiary-container bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full">
              <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-white">
                Quality Windows, Doors &amp; Security Gates
              </p>
            </div>
            <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold uppercase leading-[1.05] tracking-tight text-white">
              Transform Your Home With Beautiful Aluminium
            </h1>
            <p className="text-white/80 max-w-xl text-sm sm:text-base leading-relaxed bg-black/45 backdrop-blur-md p-4 border border-white/10 rounded-xl">
              Clean, rust-proof, and maintenance-free. We manufacture custom aluminium doors,
              windows, and security gates designed to make your house look modern, smart, and safe.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="/gallery"
                className="flex items-center justify-center gap-2 rounded-full bg-on-tertiary-container hover:bg-[#92400e] text-white px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-widest transition-colors"
              >
                Explore Our Work
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/quote"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-widest transition-colors rounded-full"
              >
                Request Free Quote
              </Link>
            </div>
          </div>

          {/* Scroll-down indicator */}
          <div className="hidden md:flex justify-center mt-10 animate-bounce">
            <span className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center text-white/60">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </div>
        </div>
      </section>

      {/* 2. BENEFITS GRID */}
      <section className="py-20 bg-surface border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              const isDark = benefit.span.includes("bg-primary");
              return (
                <div
                  key={benefit.title}
                  className={`border border-outline-variant rounded-2xl p-8 flex flex-col justify-between gap-6 ${benefit.span} ${
                    !isDark ? "hover:border-primary hover:shadow-sm" : ""
                  } transition-all duration-300`}
                >
                  <div className="flex items-center justify-between">
                    <div className={`rounded-2xl p-3 w-fit border border-outline-variant ${isDark ? "bg-primary-container border-on-primary-container/20" : "bg-surface-container"}`}>
                      <Icon className={`w-6 h-6 ${isDark ? "text-on-primary" : "text-primary"}`} />
                    </div>
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${isDark ? "bg-white/10 text-white border-white/20" : "bg-surface-container border-outline-variant text-secondary"}`}>
                      {benefit.tag}
                    </span>
                  </div>
                  <div>
                    <h3 className={`font-sans text-lg font-bold uppercase mb-2 tracking-tight ${isDark ? "text-on-primary" : "text-primary"}`}>
                      {benefit.title}
                    </h3>
                    <p className={`text-xs leading-relaxed ${isDark ? "text-on-primary-container" : "text-on-surface-variant"}`}>
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section className="py-20 bg-surface-container-low border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
              What We Make
            </span>
            <h2 className="mt-2 font-sans text-3xl sm:text-4xl font-bold uppercase tracking-tight text-primary">
              Custom Windows, Doors &amp; Gates
            </h2>
            <p className="mt-3 text-sm text-on-surface-variant max-w-xl leading-relaxed">
              Explore our range of clean, stylish aluminium products built for homes and properties across Gauteng.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                shortDescription={service.shortDescription}
                slug={service.slug}
                iconName={service.iconName}
                imagePath={service.imagePath}
              />
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/services"
              className="inline-flex items-center text-xs font-mono font-bold uppercase tracking-widest text-primary hover:text-secondary transition-colors"
            >
              View All Products
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. CUSTOM FABRICATION */}
      <section className="py-20 bg-surface border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 h-[320px] sm:h-[400px] border border-outline-variant overflow-hidden relative rounded-2xl shadow-sm">
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
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 border border-outline-variant rounded-2xl p-3 flex justify-between text-[10px]">
                <span className="text-on-surface-variant font-medium">Powder-Coated Finish</span>
                <span className="font-sans font-bold text-primary">Sandton Residence</span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
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
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROCESS SECTION */}
      <section className="py-20 bg-surface-container-low border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
              Easy Steps
            </span>
            <h2 className="mt-2 font-sans text-3xl sm:text-4xl font-bold uppercase tracking-tight text-primary">
              Our Simple 6-Step Process
            </h2>
            <p className="mt-3 text-sm text-on-surface-variant max-w-xl leading-relaxed">
              From our first chat to the final check, we make upgrading your home easy and hassle-free.
            </p>
          </div>
          <ProcessSteps />
        </div>
      </section>

      {/* 6. GALLERY PREVIEW */}
      <section className="py-20 bg-surface border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
                Real Home Transformations
              </span>
              <h2 className="mt-2 font-sans text-3xl sm:text-4xl font-bold uppercase tracking-tight text-primary">
                Beautiful Homes We&apos;ve Upgraded
              </h2>
              <p className="mt-3 text-sm text-on-surface-variant max-w-xl leading-relaxed">
                Take a look at recent window, door, and gate installations across Gauteng.
              </p>
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center px-5 py-3 border border-outline-variant hover:border-primary bg-surface font-mono text-[11px] font-bold uppercase tracking-widest text-primary hover:text-secondary transition-colors shrink-0 rounded-full"
            >
              View Full Gallery
              <ChevronRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project) => (
              <Link
                key={project.id}
                href="/gallery"
                className="group border border-outline-variant bg-surface-container-lowest rounded-2xl overflow-hidden flex flex-col hover:border-primary transition-colors shadow-sm"
              >
                <div className="relative h-48 w-full overflow-hidden border-b border-outline-variant bg-surface-container-high">
                  <Image
                    src={project.imagePath}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 font-mono text-[9px] font-bold uppercase tracking-widest bg-black/60 backdrop-blur-md text-white px-2.5 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <div className="p-5 flex flex-col justify-between flex-grow space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-center text-[10px] font-mono text-secondary uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 bg-on-tertiary-container mr-2 rounded-full" />
                      {project.location}
                    </div>
                    <h4 className="font-sans font-bold text-base text-primary uppercase tracking-tight group-hover:text-on-tertiary-container transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-xs text-on-surface-variant leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Aesthetic tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-outline-variant">
                    <span className="text-[9px] font-mono bg-surface-container border border-outline-variant px-2 py-0.5 rounded-full text-secondary">
                      {project.finish}
                    </span>
                    <span className="text-[9px] font-mono bg-surface-container border border-outline-variant px-2 py-0.5 rounded-full text-secondary">
                      {project.aesthetic}
                    </span>
                  </div>

                  <div className="pt-2 flex items-center text-[11px] font-mono font-bold uppercase tracking-widest text-secondary">
                    View Project
                    <ChevronRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE US */}
      <section className="py-20 bg-surface-container-low border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
                  Why Work With Us
                </span>
                <h2 className="mt-2 font-sans text-3xl sm:text-4xl font-bold uppercase tracking-tight text-primary">
                  Why Homeowners Choose Apex Aluminium
                </h2>
                <p className="mt-3 text-sm text-on-surface-variant max-w-lg leading-relaxed">
                  We make upgrading your windows, doors, and gates simple, neat, and stress-free.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {advantages.map((adv, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-on-surface-variant leading-relaxed font-medium">{adv}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="border border-outline-variant bg-surface rounded-2xl p-8 space-y-5 shadow-sm">
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
                    <div key={item.label} className="border-l-2 border-on-tertiary-container pl-4 space-y-1">
                      <div className="flex items-center gap-2">
                        <Icon className="w-3.5 h-3.5 text-secondary" />
                        <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
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

      {/* 8. TESTIMONIALS */}
      <section className="py-20 bg-surface border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
              Client Reviews
            </span>
            <h2 className="mt-2 font-sans text-3xl sm:text-4xl font-bold uppercase tracking-tight text-primary">
              Trusted By Homeowners Across Gauteng
            </h2>
            <p className="mt-3 text-sm text-on-surface-variant max-w-xl leading-relaxed">
              Read what happy property owners say about our work and clean installations.
            </p>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="py-20 bg-surface-container-low border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
              Quick Answers
            </span>
            <h2 className="mt-2 font-sans text-3xl sm:text-4xl font-bold uppercase tracking-tight text-primary">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-sm text-on-surface-variant max-w-xl leading-relaxed">
              Have questions about prices, delivery times, or guarantees? Find quick answers below.
            </p>
          </div>
          <FAQAccordion limit={4} />
          <div className="mt-10">
            <Link
              href="/faq"
              className="inline-flex items-center text-xs font-mono font-bold uppercase tracking-widest text-primary hover:text-secondary transition-colors"
            >
              View All FAQs
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. CTA */}
      <CTASection />
    </div>
  );
}
