import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  ShieldCheck,
  Wrench,
  Lock,
  ArrowRight,
  Phone,
  Layers,
  CheckCircle2,
  Hammer,
  Truck,
  Sparkles,
  MapPin,
} from "lucide-react";
import { absoluteUrl, siteUrl, whatsappQuoteUrl } from "@/lib/site";
import CTASection from "@/components/CTASection";
import SteelCatalogueFilter from "@/components/SteelCatalogueFilter";

export const metadata: Metadata = {
  title: "Custom Steel Works, Security Gates, Burglar Bars & Carports Gauteng",
  description:
    "Professional steel fabrication & security installation in Gauteng. Heavy-duty steel gates, burglar bars, automated driveway gates, palisade fencing, steel carports & mobile welding.",
  alternates: { canonical: `${siteUrl}/steel-works` },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: `${siteUrl}/steel-works`,
    siteName: "Aluminium Designs",
    title: "Custom Steel Works, Security Gates, Burglar Bars & Carports Gauteng",
    description:
      "Professional steel fabrication & security installation in Gauteng. Heavy-duty steel gates, burglar bars, automated driveway gates, palisade fencing, steel carports & mobile welding.",
    images: [
      {
        url: absoluteUrl("/images/services/steel-works-hero.jpg"),
        width: 1200,
        height: 630,
        alt: "Aluminium Designs Steel Works Division",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Steel Works, Security Gates, Burglar Bars & Carports Gauteng",
    description:
      "Professional steel fabrication & security installation in Gauteng. Heavy-duty steel gates, burglar bars, automated driveway gates, palisade fencing, steel carports & mobile welding.",
    images: [absoluteUrl("/images/services/steel-works-hero.jpg")],
  },
};

const steelPricingGuide = [
  {
    product: "Clear Polycarbonate Burglar Bars",
    scope: "Per window pane",
    price: "from R 280",
    note: "UV-resistant high-tensile transparent bars with tamper-proof fixings.",
  },
  {
    product: "Solid Steel Window Burglar Bars",
    scope: "Per window opening",
    price: "from R 350",
    note: "10mm–12mm solid square bar or cottage pane patterns. Epoxy powder coated.",
  },
  {
    product: "Single Swing Security Gate",
    scope: "Standard 900×2050mm door",
    price: "from R 2,100",
    note: "Heavy-duty mild steel with 5-lever deadlock and anti-jemmy guard plates.",
  },
  {
    product: "Expanding Trellis Slamlock Gate",
    scope: "Standard 900×2100mm door",
    price: "from R 2,400",
    note: "Galvanized slamlock retractable barrier with smooth-glide bottom track.",
  },
  {
    product: "Sliding Driveway Gate (Custom)",
    scope: "Per 3m–5m span",
    price: "from R 7,500",
    note: "Heavy steel framing with anti-lift brackets and ground roller track.",
  },
  {
    product: "Centurion Gate Motor Automation",
    scope: "D5 Smart motor package",
    price: "from R 4,800",
    note: "Includes motor, backup battery, 2 remotes, steel rack, and installation.",
  },
  {
    product: "Steel Palisade Perimeter Fencing",
    scope: "Per linear metre (1.8m high)",
    price: "from R 380",
    note: "7-spike or 3-spike cold-rolled steel pale with hot-dip galvanizing option.",
  },
  {
    product: "Residential Steel Carport",
    scope: "Single or double vehicle span",
    price: "from R 6,500",
    note: "Galvanized IBR / Corrugated sheeting with sturdy square post uprights.",
  },
  {
    product: "On-Site Mobile Welding & Repairs",
    scope: "Per service visit",
    price: "from R 850",
    note: "Gate hinge re-welding, wheel replacement, track realignment, and rust repair.",
  },
];

const steelFaqs = [
  {
    question: "How do you protect your steel gates and burglar bars from rusting in Gauteng?",
    answer:
      "All our steel products receive multi-stage corrosion protection. We apply high-adhesion anti-rust zinc phosphate primers followed by high-temperature industrial epoxy powder coating in Matte Black, Charcoal Grey, Bronze, or White. For outdoor applications exposed to moisture or coastal proximity, we offer full hot-dip galvanizing.",
  },
  {
    question: "Can you manufacture custom gate and burglar bar designs to match my home?",
    answer:
      "Yes. Every steel gate, fence, and burglar bar unit is custom manufactured in our Katlehong fabrication workshop to your exact dimensions. Whether you prefer clean modern horizontal slat designs, classic wrought iron scrollwork, or minimalist square tubing, our welders fabricate to your specifications.",
  },
  {
    question: "Do your security gates feature slamlock locking mechanisms?",
    answer:
      "Yes. Our expanding trellis gates and security barriers are equipped with instant slamlock technology. In an emergency, simply pulling the gate shut engages the hardened steel deadlock cylinder without needing to insert a key.",
  },
  {
    question: "Do you automate existing manual driveway gates?",
    answer:
      "Yes. We supply, fit, and program industry-leading Centurion (D5 Smart, D10) and Gemini gate motor systems, complete with battery backup, safety anti-crush infrared beams, and multi-channel remotes.",
  },
  {
    question: "How does your quoting and measurement process work?",
    answer:
      "You can send us your approximate dimensions via WhatsApp for an immediate baseline estimate. For confirmed orders, our technician conducts a professional on-site measurement (consultation fee R250 in Johannesburg / R350 outside Johannesburg, credited back 100% against your invoice).",
  },
];

export default function SteelWorksPage() {
  return (
    <div className="relative bg-surface text-on-surface">
      {/* Hero Section */}
      <section className="py-20 sm:py-24 bg-surface-container-low border-b border-outline-variant">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-surface border border-outline-variant px-3.5 py-1 font-mono text-[10px] font-bold tracking-widest uppercase rounded-full">
            <Hammer className="w-3.5 h-3.5 text-accent" />
            <span className="text-accent">Custom Steel Fabrication &bull; Gauteng Workshop</span>
          </div>

          <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-primary">
            Custom Steel Works &amp; Security
          </h1>

          <p className="text-on-surface-variant text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Heavy-duty steel security gates, burglar bars, automated driveway gates, palisade fencing, and steel carports.
            Custom welded and installed to secure your residential or commercial property across Gauteng.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href={whatsappQuoteUrl}
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white border border-accent hover:border-accent-hover px-6 py-3.5 font-mono text-[11px] font-bold uppercase tracking-widest transition-colors rounded-full shadow-sm"
            >
              Request Free Steel Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+27716122439"
              className="inline-flex items-center gap-2 border border-outline-variant bg-surface hover:bg-surface-container px-6 py-3.5 font-mono text-[11px] font-bold uppercase tracking-widest text-secondary transition-colors rounded-full"
            >
              <Phone className="w-4 h-4" />
              071 612 2439
            </a>
          </div>
        </div>
      </section>

      {/* Trust & Engineering Highlights */}
      <section className="py-12 bg-surface border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-outline-variant bg-surface-container-lowest p-6 space-y-3 shadow-xs">
              <div className="w-10 h-10 border border-outline-variant bg-surface-container flex items-center justify-center text-accent">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-sans font-bold text-base uppercase text-primary">High-Tensile Steel</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Fabricated with solid square bar, structural tubing, and reinforced uprights for uncompromising break-in resistance.
              </p>
            </div>

            <div className="border border-outline-variant bg-surface-container-lowest p-6 space-y-3 shadow-xs">
              <div className="w-10 h-10 border border-outline-variant bg-surface-container flex items-center justify-center text-accent">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-sans font-bold text-base uppercase text-primary">Anti-Rust Finishes</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Hot-dip galvanizing, electroplating, and baked exterior powder coating in Matte Black, Charcoal, Bronze, and White.
              </p>
            </div>

            <div className="border border-outline-variant bg-surface-container-lowest p-6 space-y-3 shadow-xs">
              <div className="w-10 h-10 border border-outline-variant bg-surface-container flex items-center justify-center text-accent">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="font-sans font-bold text-base uppercase text-primary">Slamlock &amp; Tamper Proof</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Equipped with instant slamlock cylinders, anti-jemmy track protection, and tamper-proof snap-off wall fasteners.
              </p>
            </div>

            <div className="border border-outline-variant bg-surface-container-lowest p-6 space-y-3 shadow-xs">
              <div className="w-10 h-10 border border-outline-variant bg-surface-container flex items-center justify-center text-accent">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="font-sans font-bold text-base uppercase text-primary">On-Site Measurement</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Our technicians visit your property for precise laser measurements, credited back in full against your installation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Steel Products & Services Catalogue */}
      <section className="py-20 bg-surface border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
              Product Catalogue
            </span>
            <h2 className="mt-2 font-sans text-3xl sm:text-4xl font-bold uppercase tracking-tight text-primary">
              Our Custom Steel Services
            </h2>
            <p className="mt-3 text-sm text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
              Explore our complete range of custom steel security products. Every gate, burglar bar, and carport is measured and welded to protect your property and fitted with care.
            </p>
          </div>

          <SteelCatalogueFilter />
        </div>
      </section>

      {/* Steel Pricing Guide Table */}
      <section className="py-20 bg-surface-container-low border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl mx-auto text-center">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
              Transparent Pricing
            </span>
            <h2 className="mt-2 font-sans text-3xl sm:text-4xl font-bold uppercase tracking-tight text-primary">
              Steel Works Price Guide
            </h2>
            <p className="mt-3 text-sm text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
              All prices represent starting guide figures in South African Rands (ZAR). Includes custom welding, anti-rust coating, and professional installation.
            </p>
          </div>

          {/* Desktop Pricing Table */}
          <div className="hidden md:block border border-outline-variant bg-surface-container-lowest overflow-hidden shadow-sm">
            <div className="grid grid-cols-5 gap-0 bg-surface-container border-b border-outline-variant p-4 font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
              <div className="col-span-2">Steel Product / Service</div>
              <div>Scope / Size</div>
              <div className="text-right">Starting From</div>
              <div className="pl-6">Specification Detail</div>
            </div>
            {steelPricingGuide.map((item, index) => (
              <div
                key={item.product}
                className={`grid grid-cols-5 gap-0 p-4 items-center text-xs ${
                  index < steelPricingGuide.length - 1 ? "border-b border-outline-variant" : ""
                }`}
              >
                <div className="col-span-2 font-sans font-bold text-sm text-primary">
                  {item.product}
                </div>
                <div className="font-mono text-on-surface-variant">{item.scope}</div>
                <div className="font-mono font-bold text-primary text-right text-sm">{item.price}</div>
                <div className="font-mono text-[11px] text-outline pl-6">{item.note}</div>
              </div>
            ))}
          </div>

          {/* Mobile Pricing Cards */}
          <div className="md:hidden space-y-3.5">
            {steelPricingGuide.map((item) => (
              <div key={item.product} className="border border-outline-variant bg-surface-container-lowest p-4 space-y-2.5 shadow-xs">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-sans font-bold text-sm uppercase text-primary">{item.product}</h3>
                  <span className="font-mono font-bold text-primary text-sm shrink-0">{item.price}</span>
                </div>
                <p className="font-mono text-[10px] text-outline uppercase">{item.scope}</p>
                <p className="text-xs text-on-surface-variant leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 bg-surface border-b border-outline-variant">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
              Security Answers
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-bold uppercase tracking-tight text-primary">
              Steel Works FAQs
            </h2>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Common questions about materials, anti-rust treatments, locking mechanisms, and installation timelines.
            </p>
          </div>

          <div className="space-y-4">
            {steelFaqs.map((faq) => (
              <details
                key={faq.question}
                className="group border border-outline-variant bg-surface-container-lowest p-5 transition-colors hover:border-accent shadow-xs"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between font-sans font-bold text-sm uppercase text-primary [&::-webkit-details-marker]:hidden">
                  <span>{faq.question}</span>
                  <span className="ml-4 flex h-6 w-6 items-center justify-center rounded-full border border-outline-variant text-secondary transition-transform group-open:rotate-180">
                    &darr;
                  </span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-on-surface-variant leading-relaxed border-t border-outline-variant/60 pt-3">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Localized Steel Services Directory (Service Near Location) */}
      <section className="py-20 bg-surface-container-low border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3 max-w-3xl mx-auto">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent">
              Gauteng Service Coverage
            </span>
            <h2 className="font-sans text-3xl sm:text-4xl font-bold uppercase tracking-tight text-primary">
              Steel Works Near You in Gauteng
            </h2>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              We manufacture and install custom steel gates, burglar bars, and carports across all major Gauteng regions. Select your area for local service details and fast quotations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Region 1: Johannesburg Central & North */}
            <div className="border border-outline-variant bg-surface-container-lowest p-5 space-y-3 shadow-xs">
              <h3 className="font-sans font-bold text-sm uppercase text-primary border-b border-outline-variant pb-2 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                Johannesburg &amp; North
              </h3>
              <ul className="space-y-2 text-xs font-mono">
                <li>
                  <Link href="/locations/sandton/steel-works-near-sandton" className="text-secondary hover:text-accent transition-colors flex items-center justify-between">
                    <span>Steel Works Near Sandton</span>
                    <span>&rarr;</span>
                  </Link>
                </li>
                <li>
                  <Link href="/locations/sandton/security-gates-near-sandton" className="text-secondary hover:text-accent transition-colors flex items-center justify-between">
                    <span>Security Gates Near Sandton</span>
                    <span>&rarr;</span>
                  </Link>
                </li>
                <li>
                  <Link href="/locations/johannesburg/burglar-bars-near-johannesburg" className="text-secondary hover:text-accent transition-colors flex items-center justify-between">
                    <span>Burglar Bars Near JHB CBD</span>
                    <span>&rarr;</span>
                  </Link>
                </li>
                <li>
                  <Link href="/locations/randburg/driveway-gates-near-randburg" className="text-secondary hover:text-accent transition-colors flex items-center justify-between">
                    <span>Driveway Gates Near Randburg</span>
                    <span>&rarr;</span>
                  </Link>
                </li>
                <li>
                  <Link href="/locations/fourways/steel-carports-near-fourways" className="text-secondary hover:text-accent transition-colors flex items-center justify-between">
                    <span>Steel Carports Near Fourways</span>
                    <span>&rarr;</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Region 2: East Rand & Ekurhuleni */}
            <div className="border border-outline-variant bg-surface-container-lowest p-5 space-y-3 shadow-xs">
              <h3 className="font-sans font-bold text-sm uppercase text-primary border-b border-outline-variant pb-2 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                East Rand &amp; Ekurhuleni
              </h3>
              <ul className="space-y-2 text-xs font-mono">
                <li>
                  <Link href="/locations/katlehong/steel-works-near-katlehong" className="text-secondary hover:text-accent transition-colors flex items-center justify-between">
                    <span>Steel Works Near Katlehong</span>
                    <span>&rarr;</span>
                  </Link>
                </li>
                <li>
                  <Link href="/locations/alberton/security-gates-near-alberton" className="text-secondary hover:text-accent transition-colors flex items-center justify-between">
                    <span>Security Gates Near Alberton</span>
                    <span>&rarr;</span>
                  </Link>
                </li>
                <li>
                  <Link href="/locations/germiston/burglar-bars-near-germiston" className="text-secondary hover:text-accent transition-colors flex items-center justify-between">
                    <span>Burglar Bars Near Germiston</span>
                    <span>&rarr;</span>
                  </Link>
                </li>
                <li>
                  <Link href="/locations/bedfordview/trellis-security-gates-near-bedfordview" className="text-secondary hover:text-accent transition-colors flex items-center justify-between">
                    <span>Trellis Gates Near Bedfordview</span>
                    <span>&rarr;</span>
                  </Link>
                </li>
                <li>
                  <Link href="/locations/boksburg/palisade-fencing-near-boksburg" className="text-secondary hover:text-accent transition-colors flex items-center justify-between">
                    <span>Palisade Fencing Near Boksburg</span>
                    <span>&rarr;</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Region 3: Pretoria & Centurion */}
            <div className="border border-outline-variant bg-surface-container-lowest p-5 space-y-3 shadow-xs">
              <h3 className="font-sans font-bold text-sm uppercase text-primary border-b border-outline-variant pb-2 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                Pretoria &amp; Centurion
              </h3>
              <ul className="space-y-2 text-xs font-mono">
                <li>
                  <Link href="/locations/centurion/steel-works-near-centurion" className="text-secondary hover:text-accent transition-colors flex items-center justify-between">
                    <span>Steel Works Near Centurion</span>
                    <span>&rarr;</span>
                  </Link>
                </li>
                <li>
                  <Link href="/locations/centurion/driveway-gates-near-centurion" className="text-secondary hover:text-accent transition-colors flex items-center justify-between">
                    <span>Driveway Gates Near Centurion</span>
                    <span>&rarr;</span>
                  </Link>
                </li>
                <li>
                  <Link href="/locations/pretoria/security-gates-near-pretoria" className="text-secondary hover:text-accent transition-colors flex items-center justify-between">
                    <span>Security Gates Near Pretoria</span>
                    <span>&rarr;</span>
                  </Link>
                </li>
                <li>
                  <Link href="/locations/midrand/steel-carports-near-midrand" className="text-secondary hover:text-accent transition-colors flex items-center justify-between">
                    <span>Steel Carports Near Midrand</span>
                    <span>&rarr;</span>
                  </Link>
                </li>
                <li>
                  <Link href="/locations/midrand/palisade-fencing-near-midrand" className="text-secondary hover:text-accent transition-colors flex items-center justify-between">
                    <span>Palisade Fencing Near Midrand</span>
                    <span>&rarr;</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Region 4: West Rand & South */}
            <div className="border border-outline-variant bg-surface-container-lowest p-5 space-y-3 shadow-xs">
              <h3 className="font-sans font-bold text-sm uppercase text-primary border-b border-outline-variant pb-2 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                West Rand &amp; South
              </h3>
              <ul className="space-y-2 text-xs font-mono">
                <li>
                  <Link href="/locations/roodepoort/steel-works-near-roodepoort" className="text-secondary hover:text-accent transition-colors flex items-center justify-between">
                    <span>Steel Works Near Roodepoort</span>
                    <span>&rarr;</span>
                  </Link>
                </li>
                <li>
                  <Link href="/locations/roodepoort/security-gates-near-roodepoort" className="text-secondary hover:text-accent transition-colors flex items-center justify-between">
                    <span>Security Gates Near Roodepoort</span>
                    <span>&rarr;</span>
                  </Link>
                </li>
                <li>
                  <Link href="/locations/krugersdorp/burglar-bars-near-krugersdorp" className="text-secondary hover:text-accent transition-colors flex items-center justify-between">
                    <span>Burglar Bars Near Krugersdorp</span>
                    <span>&rarr;</span>
                  </Link>
                </li>
                <li>
                  <Link href="/locations/soweto/driveway-gates-near-soweto" className="text-secondary hover:text-accent transition-colors flex items-center justify-between">
                    <span>Driveway Gates Near Soweto</span>
                    <span>&rarr;</span>
                  </Link>
                </li>
                <li>
                  <Link href="/locations/alberton/custom-welding-near-alberton" className="text-secondary hover:text-accent transition-colors flex items-center justify-between">
                    <span>Welding Services Near Alberton</span>
                    <span>&rarr;</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <CTASection />
    </div>
  );
}
