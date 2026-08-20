import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  DoorOpen,
  DraftingCompass,
  Factory,
  GlassWater,
  Hammer,
  House,
  MapPin,
  Ruler,
  ShieldCheck,
  Store,
  Wrench,
} from "lucide-react";
import CTASection from "@/components/CTASection";
import { businessContact, whatsappQuoteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Aluminium Designs | Gauteng Aluminium Specialists",
  description:
    "Meet Aluminium Designs, a Gauteng team measuring, manufacturing, installing, and repairing custom aluminium windows, doors, glass systems, shopfronts, security products, and outdoor structures.",
  alternates: { canonical: "/about" },
};

const serviceGroups = [
  {
    title: "Windows & Doors",
    description:
      "Custom aluminium windows, hinged and pivot doors, sliding systems, and stacking doors made to suit new builds, renovations, and replacements.",
    items: ["Aluminium windows", "Entrance and patio doors", "Sliding and stacking systems"],
    icon: DoorOpen,
    href: "/services/windows",
  },
  {
    title: "Glass & Interior Systems",
    description:
      "Practical glass solutions that bring in light, divide spaces, improve bathrooms, and create clean modern finishes.",
    items: ["Office glass partitions", "Shower enclosures", "Frameless glass and mirrors"],
    icon: GlassWater,
    href: "/services/partitions",
  },
  {
    title: "Commercial Solutions",
    description:
      "Durable aluminium and glass installations designed for shops, offices, showrooms, developments, and other high-use spaces.",
    items: ["Commercial shopfronts", "Office fit-outs", "Custom entrances and glazing"],
    icon: Store,
    href: "/services/shopfronts",
  },
  {
    title: "Security & Custom Work",
    description:
      "Made-to-measure security and fabrication work that complements the property instead of looking like an afterthought.",
    items: ["Burglar bars and trellis doors", "Gates, louvres, and screens", "Custom aluminium fabrication"],
    icon: ShieldCheck,
    href: "/services/custom",
  },
  {
    title: "Outdoor Living",
    description:
      "Weather-ready aluminium and glass systems for patios, balconies, entrances, parking, and entertainment areas.",
    items: ["Patio and glass enclosures", "Pergolas and carports", "Balustrades and skylights"],
    icon: House,
    href: "/services/enclosures",
  },
  {
    title: "Repairs & Replacements",
    description:
      "Targeted repairs and replacement work to restore existing windows, doors, glass, locks, rollers, tracks, and seals.",
    items: ["Glass replacement", "Roller, lock, and track repairs", "Weather-seal replacement"],
    icon: Wrench,
    href: "/services/repairs",
  },
] as const;

const process = [
  {
    number: "01",
    title: "Understand the requirement",
    description:
      "We discuss the property, the problem you want to solve, the look you prefer, and how the finished installation needs to perform.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Measure and plan",
    description:
      "We confirm dimensions, opening directions, glass requirements, finishes, access, and the practical details that shape the quotation.",
    icon: Ruler,
  },
  {
    number: "03",
    title: "Manufacture to fit",
    description:
      "The aluminium frames and selected glass are prepared for the actual opening rather than forcing a generic product into the space.",
    icon: Factory,
  },
  {
    number: "04",
    title: "Install and check",
    description:
      "Our team fits the system, checks operation and alignment, completes the finishing details, and leaves the work area neat.",
    icon: Hammer,
  },
] as const;

const principles = [
  {
    title: "Solutions that fit the property",
    description:
      "Every project starts with the actual opening, use case, and finish required for that home or business.",
    icon: DraftingCompass,
  },
  {
    title: "One team from quote to installation",
    description:
      "Measurement, product planning, manufacturing, fitting, and final checks stay connected throughout the job.",
    icon: Building2,
  },
  {
    title: "Clear, practical recommendations",
    description:
      "We help clients choose configurations, glass, finishes, and hardware based on how the space will actually be used.",
    icon: CheckCircle2,
  },
  {
    title: "Neat workmanship and finishing",
    description:
      "Alignment, sealing, smooth operation, clean edges, and a tidy handover are treated as part of the installation.",
    icon: ShieldCheck,
  },
] as const;

export default function AboutPage() {
  return (
    <div className="bg-surface text-on-surface">
      <section className="relative flex min-h-[680px] items-center overflow-hidden border-b border-outline-variant sm:min-h-[720px]">
        <Image
          src="/images/sliding_doors.png"
          alt="Modern aluminium sliding doors installed at a residential property"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/45" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-4 py-20 text-center sm:px-6 lg:px-8">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/35 px-3.5 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md">
              <Hammer className="h-3.5 w-3.5" />
              About Aluminium Designs
            </div>
            <h1 className="max-w-4xl font-sans text-4xl font-bold uppercase leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Made for your space. Built for everyday use.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85">
              Aluminium Designs measures, manufactures, installs, and repairs custom aluminium and glass solutions for homes, businesses, and property developments across Gauteng.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70">
              From a single replacement window to sliding doors, a commercial shopfront, office partitions, security products, or a complete custom installation, we manage the practical details from the first measurement to the final fit.
            </p>
            <div className="mt-8 flex w-full max-w-md flex-col justify-center gap-3 sm:w-auto sm:max-w-none sm:flex-row">
              <Link
                href={whatsappQuoteUrl}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-widest text-primary transition-colors hover:bg-secondary hover:text-white"
              >
                Request a quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/gallery"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-black/25 px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm transition-colors hover:bg-white/15"
              >
                View our work
              </Link>
            </div>
            <div className="mt-12 grid w-full max-w-3xl grid-cols-3 border border-white/20 bg-black/45 text-white backdrop-blur-md">
              {[
                ["Custom", "Made to measure"],
                ["Complete", "Supply and fit"],
                ["Gauteng", "Homes and businesses"],
              ].map(([title, detail]) => (
                <div key={title} className="border-r border-white/20 p-3 last:border-r-0 sm:p-4">
                  <p className="font-sans text-xs font-bold uppercase sm:text-sm">{title}</p>
                  <p className="mt-1 text-[9px] leading-snug text-white/70 sm:text-[10px]">{detail}</p>
                </div>
              ))}
            </div>
        </div>
      </section>

      <section className="border-b border-outline-variant bg-surface py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
              Who we are
            </span>
            <h2 className="mt-2 font-sans text-3xl font-bold uppercase tracking-tight text-primary sm:text-4xl">
              An aluminium partner for the whole property
            </h2>
          </div>
          <div className="mx-auto mt-10 max-w-4xl space-y-5 text-center">
            <p className="text-base leading-relaxed text-on-surface-variant">
              We are not limited to one type of window or door. Our work covers the aluminium, glass, security, and outdoor systems that make a property more useful, secure, weather-ready, and visually complete.
            </p>
            <p className="text-sm leading-relaxed text-on-surface-variant">
              Homeowners call us for renovations, replacements, patio upgrades, security, bathrooms, and outdoor living projects. Businesses and property teams work with us on shopfronts, office partitions, entrances, glazing, repairs, and custom fabrication.
            </p>
            <p className="text-sm leading-relaxed text-on-surface-variant">
              Because each opening and project is different, we focus on accurate site information, suitable product choices, and a finished installation that works properly in the real space.
            </p>
            <div className="grid gap-3 pt-4 sm:grid-cols-2">
              <div className="flex items-center justify-center gap-3 border border-outline-variant bg-surface-container-low p-4">
                <House className="h-5 w-5 shrink-0 text-secondary" />
                <span className="text-xs font-bold uppercase tracking-wide text-primary">Residential projects</span>
              </div>
              <div className="flex items-center justify-center gap-3 border border-outline-variant bg-surface-container-low p-4">
                <Building2 className="h-5 w-5 shrink-0 text-secondary" />
                <span className="text-xs font-bold uppercase tracking-wide text-primary">Commercial projects</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-outline-variant bg-surface-container-low py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
              What we offer
            </span>
            <h2 className="mt-2 font-sans text-3xl font-bold uppercase tracking-tight text-primary sm:text-4xl">
              More than windows and doors
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-on-surface-variant">
              Our range supports renovations, new builds, commercial spaces, security upgrades, repairs, and custom projects.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {serviceGroups.map((group) => {
              const Icon = group.icon;
              return (
                <article key={group.title} className="flex min-h-[330px] flex-col border border-outline-variant bg-surface p-6 shadow-sm sm:p-7">
                  <div className="flex h-11 w-11 items-center justify-center border border-outline-variant bg-surface-container text-secondary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-sans text-lg font-bold uppercase tracking-tight text-primary">{group.title}</h3>
                  <p className="mt-3 text-xs leading-relaxed text-on-surface-variant">{group.description}</p>
                  <ul className="mt-5 space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-on-surface-variant">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-secondary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href={group.href} className="mt-auto inline-flex items-center gap-2 pt-6 font-mono text-[10px] font-bold uppercase tracking-widest text-primary hover:text-secondary">
                    Explore service <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </article>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link href="/services" className="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest text-primary transition-colors hover:bg-primary hover:text-white">
              View all products and services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-outline-variant bg-surface py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">How we work</span>
              <h2 className="mt-2 font-sans text-3xl font-bold uppercase tracking-tight text-primary sm:text-4xl">
                One process from idea to installation
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-on-surface-variant">
                Keeping each stage connected helps prevent incorrect sizing, unsuitable configurations, and finishing details being missed.
              </p>
            </div>
            <div className="grid gap-px overflow-hidden border border-outline-variant bg-outline-variant sm:grid-cols-2 lg:grid-cols-4">
              {process.map((step) => {
                const Icon = step.icon;
                return (
                  <article key={step.number} className="bg-surface-container-lowest p-6 sm:p-7">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-outline">{step.number}</span>
                      <Icon className="h-5 w-5 text-secondary" />
                    </div>
                    <h3 className="mt-8 font-sans text-sm font-bold uppercase tracking-tight text-primary">{step.title}</h3>
                    <p className="mt-3 text-xs leading-relaxed text-on-surface-variant">{step.description}</p>
                  </article>
                );
              })}
            </div>
        </div>
      </section>

      <section className="border-b border-outline-variant bg-surface py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">Our approach</span>
            <h2 className="mt-2 font-sans text-3xl font-bold uppercase tracking-tight text-primary sm:text-4xl">
              What clients can expect from us
            </h2>
          </div>
          <div className="grid border-l border-t border-outline-variant sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle) => {
              const Icon = principle.icon;
              return (
                <article key={principle.title} className="min-h-[250px] border-b border-r border-outline-variant p-6 sm:p-7">
                  <Icon className="h-6 w-6 text-secondary" />
                  <h3 className="mt-8 font-sans text-sm font-bold uppercase tracking-tight text-primary">{principle.title}</h3>
                  <p className="mt-3 text-xs leading-relaxed text-on-surface-variant">{principle.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-outline-variant bg-surface-container-low py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">Where we work</span>
            <h2 className="mt-2 font-sans text-3xl font-bold uppercase tracking-tight text-primary">Based in Gauteng, ready for your project</h2>
            <p className="mt-4 text-sm leading-relaxed text-on-surface-variant">
              We serve residential and commercial clients across Gauteng and surrounding areas. Site measurements are available by appointment so we can assess the actual space before finalising the work.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-3xl border border-outline-variant bg-surface p-6 text-center shadow-sm sm:p-8">
            <div className="flex flex-col items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="font-sans text-sm font-bold uppercase text-primary">{businessContact.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">{businessContact.fullAddress}</p>
                <Link href="/contact" className="mt-4 inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-primary hover:text-secondary">
                  Contact our team <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
