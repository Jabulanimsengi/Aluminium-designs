import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, ChevronRight, Lock, Sun, VolumeX, Building2, House, MapPin, Paintbrush, Ruler, Gem } from "lucide-react";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import ServiceCard from "@/components/ServiceCard";
import ProcessSteps from "@/components/ProcessSteps";
import Testimonials from "@/components/Testimonials";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import PlanningTools from "@/components/PlanningTools";
import TrustedBy from "@/components/TrustedBy";
import BusinessLocationMap from "@/components/BusinessLocationMap";
import { whatsappQuoteUrl } from "@/lib/site";

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
          <div className="max-w-3xl mx-auto space-y-5 text-center">
            <div className="inline-block border-l-4 border-on-tertiary-container bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full">
              <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-white">
                Quality Windows, Doors &amp; Security Gates
              </p>
            </div>
            <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold uppercase leading-[1.05] tracking-tight text-white">
              Transform Your Home With Beautiful Aluminium
            </h1>
            <p className="text-white/80 max-w-xl mx-auto text-sm sm:text-base leading-relaxed bg-black/45 backdrop-blur-md p-4 border border-white/10">
              Clean, rust-proof, and maintenance-free. We manufacture custom aluminium doors,
              windows, and security gates designed to make your house look modern, smart, and safe.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
              <Link
                href="/gallery"
                className="flex items-center justify-center gap-2 rounded-full bg-on-tertiary-container hover:bg-primary text-white px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-widest transition-colors"
              >
                Explore Our Work
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={whatsappQuoteUrl}
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

      <TrustedBy />

      {/* 2. WHAT WE DO */}
      <section className="py-20 bg-surface border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7 text-center">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
                What We Do
              </span>
              <h2 className="mt-2 font-sans text-3xl sm:text-4xl font-bold uppercase tracking-tight text-primary max-w-3xl mx-auto">
                Aluminium Solutions, Made and Fitted for Your Property
              </h2>
              <p className="mt-5 text-sm text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
                Aluminium Designs measures, manufactures, and installs custom aluminium and glass solutions. From one replacement window to a complete home renovation or commercial fit-out, every product is made to suit the space and installed with care.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-outline-variant bg-surface-container-low px-4 py-2 text-xs font-medium text-primary">
                  <House className="w-4 h-4 text-secondary" /> Residential projects
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-outline-variant bg-surface-container-low px-4 py-2 text-xs font-medium text-primary">
                  <Building2 className="w-4 h-4 text-secondary" /> Commercial projects
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-outline-variant bg-surface-container-low px-4 py-2 text-xs font-medium text-primary">
                  <MapPin className="w-4 h-4 text-secondary" /> Gauteng and surrounds
                </span>
              </div>
            </div>
            <div className="lg:col-span-5 grid gap-3">
              {[
                ["01", "Measure", "We assess your opening, requirements, and preferred finish."],
                ["02", "Manufacture", "Your aluminium frames and glass are made to the required size."],
                ["03", "Install", "Our team fits, checks, and leaves your space neat and ready to use."],
              ].map(([number, title, detail]) => (
                <div key={number} className="flex gap-4 border border-outline-variant bg-surface-container-lowest p-5 shadow-sm">
                  <span className="font-mono text-xs font-bold text-secondary">{number}</span>
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
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
              Our Core Services
            </span>
            <h2 className="mt-2 font-sans text-3xl sm:text-4xl font-bold uppercase tracking-tight text-primary">
              Windows, Doors, Security &amp; Glass
            </h2>
            <p className="mt-3 text-sm text-on-surface-variant max-w-xl mx-auto leading-relaxed">
              Start with the services homeowners and businesses ask for most, then explore our complete custom aluminium range.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {services.filter((service) => service.featured).map((service) => (
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

      <PlanningTools />

      {/* 4. WHY ALUMINIUM */}
      <section className="py-20 bg-surface border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl mx-auto text-center">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">Built for Everyday Living</span>
            <h2 className="mt-2 font-sans text-3xl sm:text-4xl font-bold uppercase tracking-tight text-primary">Why Choose Aluminium?</h2>
            <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">A practical, modern finish for homes and commercial spaces that need to look good and perform for years.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-outline-variant bg-surface-container-lowest">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <article
                  key={benefit.title}
                  className="group min-h-[300px] border-r border-b border-outline-variant bg-surface-container-lowest p-7 sm:p-8 flex flex-col transition-colors duration-300 hover:bg-surface"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-secondary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-outline-variant bg-surface-container transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-on-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="mt-auto pt-12">
                    <span className="font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-secondary">
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
      <section className="py-20 bg-surface border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 h-[320px] sm:h-[400px] border border-outline-variant overflow-hidden relative shadow-sm">
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

            <div className="lg:col-span-7 space-y-6 text-center">
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

      {/* 6. PROCESS SECTION */}
      <section className="py-20 bg-surface-container-low border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
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
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
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
              className="inline-flex items-center px-5 py-3 border border-outline-variant hover:border-primary bg-surface font-mono text-[11px] font-bold uppercase tracking-widest text-primary hover:text-secondary transition-colors shrink-0 rounded-full"
            >
              View Full Gallery
              <ChevronRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.slice(0, 6).map((project) => (
              <Link
                key={project.id}
                href="/gallery"
                aria-label={`View ${project.title} in the gallery`}
                className="group relative aspect-[4/3] overflow-hidden bg-surface-container-high"
              >
                <Image
                  src={project.imagePath}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/15" />
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
              <div className="text-center">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
                  Why Work With Us
                </span>
                <h2 className="mt-2 font-sans text-3xl sm:text-4xl font-bold uppercase tracking-tight text-primary">
                  Why Homeowners Choose Aluminium Designs
                </h2>
                <p className="mt-3 text-sm text-on-surface-variant max-w-lg mx-auto leading-relaxed">
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
              <div className="border border-outline-variant bg-surface p-8 space-y-5 shadow-sm">
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

      {/* 9. TESTIMONIALS */}
      <section className="py-20 bg-surface border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
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
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
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
              className="inline-flex items-center text-xs font-mono font-bold uppercase tracking-widest text-primary hover:text-secondary transition-colors"
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
