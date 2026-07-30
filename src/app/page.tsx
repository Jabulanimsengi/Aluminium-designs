import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Check, Sparkles, Hammer, ChevronRight } from "lucide-react";
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
      title: "Zero-Maintenance Living",
      description:
        "Our powder-coated aluminium never rots, rusts, or needs painting. A simple wipe keeps frames looking new for decades.",
      icon: Sparkles,
      span: "md:col-span-2 bg-surface-container-lowest",
    },
    {
      title: "Weather & Noise Protection",
      description:
        "Fully sealed double-rubber joints and double glazing block drafts, retain winter heat, and reduce street noise significantly.",
      icon: ShieldCheck,
      span: "md:col-span-1 bg-surface-container-lowest",
    },
    {
      title: "Custom-Fit for Your Home",
      description:
        "Every product is fabricated to your exact measurements. No generic sizes forced onto your space.",
      icon: Hammer,
      span: "md:col-span-1 bg-surface-container-lowest",
    },
    {
      title: "Premium Colour Finishes",
      description:
        "Architectural powder-coat finishes in Matte Black, Charcoal, and Satin Silver that never fade or peel.",
      icon: Sparkles,
      span: "md:col-span-2 bg-primary text-on-primary",
    },
  ];

  const advantages = [
    "Clean-lined minimalist frame profiles that boost property value",
    "Durable architectural powder-coat finishes that never require painting",
    "Draft-free double gasket seals to keep your home warm and dust-free",
    "Sound-insulating glass systems to block street noise up to 34dB",
    "Secure multi-point locks integrated into every door panel",
    "Professional on-site measurements and clean installation crews",
  ];

  return (
    <div className="relative w-full bg-surface text-on-surface">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[60vh] md:min-h-[85vh] flex items-end pb-0 border-b border-outline-variant overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0 bg-surface-container-highest">
          <Image
            src="/images/hero_exterior.png"
            alt="Premium aluminium installation"
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
                Proudly South African | Premium Windows &amp; Doors
              </p>
            </div>
            <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold uppercase leading-[1.05] tracking-tight text-white">
              Transform Your Home With Beautiful Aluminium
            </h1>
            <p className="text-white/80 max-w-xl text-sm sm:text-base leading-relaxed bg-black/45 backdrop-blur-md p-4 border border-white/10">
              Elegant, rust-proof, and maintenance-free. We manufacture custom aluminium doors and
              windows built to withstand Cape wind, coastal air, and Highveld storms.
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
                Request Quote
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
                    !isDark ? "hover:border-primary" : ""
                  } transition-colors`}
                >
                  <div className={`rounded-2xl p-3 w-fit border border-outline-variant ${isDark ? "bg-primary-container border-on-primary-container/20" : "bg-surface-container"}`}>
                    <Icon className={`w-6 h-6 ${isDark ? "text-on-primary" : "text-primary"}`} />
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
              Our Specialities
            </span>
            <h2 className="mt-2 font-sans text-3xl sm:text-4xl font-bold uppercase tracking-tight text-primary">
              Architectural Aluminium Solutions
            </h2>
            <p className="mt-3 text-sm text-on-surface-variant max-w-xl leading-relaxed">
              Core product lines built for residential homes, office fit-outs, and commercial structures.
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
            <div className="lg:col-span-5 h-[320px] sm:h-[400px] border border-outline-variant overflow-hidden relative rounded-2xl">
              <Image
                src="/images/slatted_gate.png"
                alt="Custom aluminium fabrication"
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white font-mono text-[10px] font-bold uppercase tracking-widest px-3 py-1.5">
                Bespoke Slatted Gate
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 border border-outline-variant rounded-2xl p-3 flex justify-between text-[10px]">
                <span className="text-on-surface-variant">6063-T6 Alloy</span>
                <span className="font-sans font-bold text-primary">Sandton Residential</span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-sans text-3xl sm:text-4xl font-bold uppercase tracking-tight text-primary">
                Custom-Made From Engineering to Installation
              </h2>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                At Aluminium Designs, every window, door, and partition is manufactured entirely
                from scratch at our Sandton facility. We manage the entire cycle: initial site
                measurements, detailed structural drawings, precision fabrication, and professional
                installation.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Fully Sealed Corner Joints",
                  "Bespoke Powder Coating",
                  "Millimeter-Level Site Fitting",
                  "SANS 10137 Compliant Glass",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-on-surface">
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
              How We Work
            </span>
            <h2 className="mt-2 font-sans text-3xl sm:text-4xl font-bold uppercase tracking-tight text-primary">
              Our 7-Step Precision Process
            </h2>
            <p className="mt-3 text-sm text-on-surface-variant max-w-xl leading-relaxed">
              From initial inquiry to final sign-off, ensuring total quality at every stage.
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
                Our Installations
              </span>
              <h2 className="mt-2 font-sans text-3xl sm:text-4xl font-bold uppercase tracking-tight text-primary">
                Beautiful Homes We&apos;ve Upgraded
              </h2>
              <p className="mt-3 text-sm text-on-surface-variant max-w-xl leading-relaxed">
                Architectural installations for high-end homes and developments across Gauteng.
              </p>
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center px-5 py-3 border border-outline-variant hover:border-primary bg-surface font-mono text-[11px] font-bold uppercase tracking-widest text-primary hover:text-secondary transition-colors shrink-0 rounded-full"
            >
              View All Projects
              <ChevronRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project) => (
              <Link
                key={project.id}
                href="/gallery"
                className="group border border-outline-variant bg-surface-container-lowest rounded-2xl overflow-hidden flex flex-col hover:border-primary transition-colors"
              >
                <div className="relative h-48 w-full overflow-hidden border-b border-outline-variant bg-surface-container-high">
                  <Image
                    src={project.imagePath}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 font-mono text-[9px] font-bold uppercase tracking-widest bg-black/60 backdrop-blur-md text-white px-2.5 py-1">
                    {project.category}
                  </span>
                </div>
                <div className="p-5 flex flex-col justify-between flex-grow space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-center text-[10px] font-mono text-secondary uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 bg-on-tertiary-container mr-2" />
                      {project.location}
                    </div>
                    <h4 className="font-sans font-bold text-base text-primary uppercase tracking-tight group-hover:text-on-tertiary-container transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-xs text-on-surface-variant leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  <div className="border-t border-outline-variant pt-3 mt-auto flex items-center text-[11px] font-mono font-bold uppercase tracking-widest text-secondary">
                    View Projects
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
                  The Difference
                </span>
                <h2 className="mt-2 font-sans text-3xl sm:text-4xl font-bold uppercase tracking-tight text-primary">
                  Why Homeowners &amp; Builders Choose Us
                </h2>
                <p className="mt-3 text-sm text-on-surface-variant max-w-lg leading-relaxed">
                  One of Gauteng&apos;s most reliable aluminium and glass installation specialists.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {advantages.map((adv, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-on-surface-variant leading-relaxed">{adv}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="border border-outline-variant bg-surface rounded-2xl p-8 space-y-5">
                <h3 className="font-sans font-bold text-lg uppercase text-primary tracking-tight">
                  Engineering Commitments
                </h3>
                {[
                  { label: "Acoustic Privacy", detail: "Double-glazing optimized for sound dampening up to 38dB." },
                  { label: "Thermal Barriers", detail: "Insulated spacer bars and argon filling reduce heating and cooling loads." },
                  { label: "Wind & Water Tightness", detail: "Tested for severe thunderstorm gusts and heavy downpours." },
                ].map((item) => (
                  <div key={item.label} className="border-l-2 border-on-tertiary-container pl-4 space-y-0.5">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
                      {item.label}
                    </p>
                    <p className="text-xs text-on-surface-variant leading-relaxed">{item.detail}</p>
                  </div>
                ))}
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
              Client Feedback
            </span>
            <h2 className="mt-2 font-sans text-3xl sm:text-4xl font-bold uppercase tracking-tight text-primary">
              Trusted by Homeowners &amp; Professionals
            </h2>
            <p className="mt-3 text-sm text-on-surface-variant max-w-xl leading-relaxed">
              Feedback from property owners, architects, and developers across Gauteng.
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
              Lead times, warranties, safety certificates, and ordering details.
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
