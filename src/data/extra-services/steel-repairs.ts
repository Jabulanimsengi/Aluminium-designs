import type { Service } from "@/data/services";
import type { ServicePageContent } from "@/data/service-pages";
import { siteUrl } from "@/lib/site";

export const service: Service = {
  id: "steel-repairs",
  title: "Steel Repairs",
  slug: "/services/steel-repairs",
  shortDescription: "Fast on-site repairs for sagging gates, broken wheels, hinges and rusted steelwork.",
  longDescription:
    "A broken gate wheel or snapped hinge leaves your property vulnerable and puts severe strain on electric gate motors. Our mobile repair service replaces worn gate wheels and bearings, re-aligns bent ground tracks, re-welds snapped hinges and applies rust-converter treatments to weathered steel — restoring security and smooth operation fast.",
  features: [
    "Same-day emergency mobile welding for off-track or jammed gates",
    "Sliding gate wheel and V-groove bearing replacement",
    "Broken hinge re-welding and post re-concreting",
    "Bent ground track and gear rack straightening",
    "Rust-converter primers and enamel repainting",
    "Protects gate motors from expensive burnout",
  ],
  imagePath: "/images/window_repair.png",
  iconName: "Wrench",
  featured: true,
};

export const page: ServicePageContent = {
  id: "steel-repairs",
  slug: "steel-repairs",
  fullPageUrl: `${siteUrl}/services/steel-repairs`,
  seo: {
    titleTag: "Steel Gate & Fence Repairs | Mobile Welder Gauteng",
    metaDescription:
      "Fast steel gate and fence repairs across Gauteng. Sliding gate wheel replacement, broken hinge welding, rust treatment and same-day mobile welding.",
    keywords: [
      "steel gate repairs",
      "sliding gate wheel replacement",
      "gate welding repairs",
      "fence repair welder",
      "rust treatment gauteng",
      "same day gate repairs",
    ],
    canonicalUrl: `${siteUrl}/services/steel-repairs`,
    openGraphImage: `${siteUrl}/images/window_repair.png`,
  },
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Steel Repairs Installation",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Aluminium Designs",
    },
  },
  hero: {
    headline: "Steel Gate & Fence Repairs",
    subheadline:
      "Restore security and smooth operation with fast welding repairs for broken gate tracks, stuck sliding wheels, loose hinges and rusted fencing.",
    badgeText: "Fast On-Site Steel & Gate Repairs",
    primaryCtaText: "Book a Repair Welder",
    secondaryCtaText: "View Repair Services",
  },
  overview: {
    heading: "Emergency Steel Repairs, Rust Treatment & Re-Welding",
    paragraphs: [
      "A broken gate wheel or snapped hinge leaves your property vulnerable and puts severe strain on electric gate motors. Don't risk motor burnout or break-ins.",
      "Our mobile repair service specialises in replacing worn gate wheels and bearings, re-aligning bent ground tracks, re-welding snapped hinges and applying rust-converter treatments to weathered steel.",
    ],
    keyFeaturesNotice:
      "All repairs use heavy-duty replacement parts, with strong welds guaranteed and an anti-rust primer applied before handover.",
  },
  benefits: {
    title: "Why Choose Our Steel Repair Service",
    items: [
      {
        icon: "ShieldCheck",
        title: "Restores Your Security",
        description:
          "Snapped hinges and off-track gates are fixed quickly so your property is secure again without delay.",
      },
      {
        icon: "Zap",
        title: "Same-Day Mobile Response",
        description:
          "Fast arrival when driveway gates come off track or security gates get jammed, often on the same day.",
      },
      {
        icon: "RefreshCw",
        title: "Protects Gate Motors",
        description:
          "Replacing stiff, grinding wheels prevents expensive electric gate motor burnout and extends motor life.",
      },
      {
        icon: "PiggyBank",
        title: "Avoids Costly Replacements",
        description:
          "Targeted welding and part replacement repair your steelwork for a fraction of the cost of a full replacement.",
      },
    ],
  },
  productTypes: {
    title: "Steel Repair Services We Offer",
    description:
      "From driveway gates to palisade fencing, we repair and restore all common steelwork problems.",
    items: [
      {
        name: "Sliding Gate Repairs",
        tagline: "Wheels, tracks and anti-lift brackets",
        description:
          "We replace worn sliding gate wheels and bearings, re-align bent ground tracks and fit anti-lift brackets and top roller guides.",
        idealFor: "Driveway gates that jump, jam or grind.",
      },
      {
        name: "Hinge & Post Re-Welding",
        tagline: "Snapped hinges and loose posts fixed",
        description:
          "Broken or worn hinges are re-welded and loose steel posts re-concreted for a solid, secure hold.",
        idealFor: "Swing gates and pedestrian gates with sagging or broken hinges.",
      },
      {
        name: "Palisade Fence Repairs",
        tagline: "Pale re-welding and mesh fixing",
        description:
          "Individual rusted pales and loose cross-runners are cut out and replaced, and mesh panel fasteners re-secured.",
        idealFor: "Boundary fences and security perimeters.",
      },
      {
        name: "Rust Restoration & Repainting",
        tagline: "Stop corrosion in its tracks",
        description:
          "We wire-brush rusted steel, apply rust-converter primer and repaint with exterior enamel to prevent structural collapse.",
        idealFor: "Weathered gates, posts and fencing.",
      },
    ],
  },
  glazingOptions: {
    title: "Material & Finish Options",
    description:
      "The replacement parts and protective finishes we use determine how long your repair lasts.",
    options: [
      {
        name: "Heavy-Duty V-Groove Bearing Wheels",
        description:
          "High-load steel bearing wheels that glide smoothly and handle heavy driveway gates without jamming.",
      },
      {
        name: "Galvanised Steel Sections",
        description:
          "Fresh galvanised pales, cross-runners and brackets that resist rust far better than untreated steel.",
      },
      {
        name: "Rust-Converter Primers",
        description:
          "Chemical primers that neutralise existing rust and seal the steel surface before repainting.",
      },
      {
        name: "Exterior Enamel Finishes",
        description:
          "Weather-resistant enamel paint applied after priming to protect steel and match your existing colour.",
      },
    ],
  },
  specifications: {
    title: "Technical Specifications & Repair Capabilities",
    items: [
      { label: "Gate Repairs", value: "Sliding gate wheel replacement, anti-lift brackets, top roller guides and hinges" },
      { label: "Fence Repairs", value: "Palisade pale re-welding, mesh panel fastener replacement and post re-concreting" },
      { label: "Rust Restoration", value: "Wire brushing, rust-converter primers and exterior enamel repainting" },
      { label: "Motor Drive Rail", value: "Straightening and re-bolting bent steel gear racks" },
      { label: "Emergency Service", value: "Same-day emergency mobile welding for inoperable or off-track gates" },
      { label: "Workmanship", value: "Strong welds guaranteed with heavy-duty replacement parts" },
    ],
  },
  installationProcess: {
    title: "Our Simple 4-Step Steel Repair Process",
    steps: [
      {
        stepNumber: "01",
        title: "Call for Fast Service",
        description:
          "Describe the issue, such as a gate stuck off track or a rusted hinge, and share your location.",
      },
      {
        stepNumber: "02",
        title: "On-Site Inspection",
        description:
          "Our mobile welder inspects the wheels, track level and weld points and gives an instant quote.",
      },
      {
        stepNumber: "03",
        title: "Cutting, Welding & Part Replacement",
        description:
          "We weld new hinges, fit heavy-duty steel bearing wheels or straighten bent tracks as needed.",
      },
      {
        stepNumber: "04",
        title: "Testing & Anti-Rust Coating",
        description:
          "We test smooth manual gliding and motor operation, apply anti-rust primer and sign off.",
      },
    ],
  },
  reviews: [
    {
      authorName: "Thabo K.",
      location: "Homeowner, Benoni",
      rating: 5,
      date: "2025-11-18",
      comment:
        "Our sliding gate kept jumping off the track. They replaced the wheels the same day and it now glides silently.",
    },
    {
      authorName: "Nomsa P.",
      location: "Homeowner, Centurion",
      rating: 5,
      date: "2025-12-09",
      comment:
        "Fast and professional service. They re-welded our broken gate hinge and treated the rust, and the gate is solid again.",
    },
  ],
  faqs: [
    {
      question: "Why is my sliding driveway gate jumping off its track?",
      answer:
        "This is usually caused by worn wheel bearings, a bent ground track or stones lodged in the rail. We replace damaged wheels with heavy-duty V-groove bearing wheels and straighten the track.",
    },
    {
      question: "Can rusted steel palisade pales be welded without replacing the whole fence?",
      answer:
        "Yes, we can cut out individual rusted pales or loose cross-runners and weld fresh galvanised steel sections into place.",
    },
    {
      question: "Do you offer same-day emergency gate repairs?",
      answer:
        "Yes, our mobile welding rigs provide same-day emergency service for inoperable or off-track gates to restore your security quickly.",
    },
    {
      question: "Will the repaired area match the rest of my gate or fence?",
      answer:
        "Yes, after welding we apply anti-rust primer and exterior enamel paint matched to your existing colour, so the repair blends in neatly.",
    },
  ],
};
