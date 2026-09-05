import type { Service } from "@/data/services";
import type { ServicePageContent } from "@/data/service-pages";
import { siteUrl } from "@/lib/site";

export const service: Service = {
  id: "aluminium-sliding-windows",
  title: "Aluminium Sliding Windows",
  slug: "/services/aluminium-sliding-windows",
  shortDescription: "Space-saving horizontal sliding windows that glide smoothly for wide-open ventilation and easy cleaning.",
  longDescription:
    "Our aluminium sliding windows combine slim, modern frames with smooth-gliding panels that never protrude into walkways, balconies, or verandas. They are the ideal choice for rooms with limited exterior clearance, fitted with durable nylon rollers, key-locking cam handles, and built-in drainage so they stay effortless to use for decades.",
  features: [
    "Smooth horizontal sliding on durable nylon guide rollers",
    "Space-saving design with no outward-protruding sashes",
    "Adjustable ventilation from a small gap to fully open",
    "Built-in drainage weep holes for rain protection",
    "Self-latching cam locks with optional key locks",
    "Available in 2-, 3-, and 4-panel configurations",
  ],
  imagePath: "/images/real_images/products/windows/window_aluminium_one.jpeg",
  iconName: "Wind",
  featured: true,
};

export const page: ServicePageContent = {
  id: "aluminium-sliding-windows",
  slug: "aluminium-sliding-windows",
  fullPageUrl: `${siteUrl}/services/aluminium-sliding-windows`,
  seo: {
    titleTag: "Aluminium Sliding Windows | Smooth Horizontal Sliders Gauteng",
    metaDescription:
      "Custom aluminium sliding windows built for smooth, space-saving operation. Horizontal sliders with safety glass, key locks, and expert installation across Gauteng.",
    keywords: [
      "aluminium sliding windows",
      "horizontal sliding windows",
      "sliding window frames",
      "aluminium sliders gauteng",
      "sliding window installation",
      "aluminium windows johannesburg",
    ],
    canonicalUrl: `${siteUrl}/services/aluminium-sliding-windows`,
    openGraphImage: `${siteUrl}/images/real_images/products/windows/window_aluminium_one.jpeg`,
  },
  structuredDataJsonLd: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Aluminium Sliding Windows Installation",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Aluminium Designs",
    },
  },
  hero: {
    headline: "Custom Aluminium Sliding Windows",
    subheadline:
      "Space-saving horizontal sliding windows that glide smoothly, open up wide ventilation, and keep your rooms bright and breezy.",
    badgeText: "Smooth Horizontal Sliding Windows",
    primaryCtaText: "Get a Sliding Window Quote",
    secondaryCtaText: "Explore Window Configurations",
  },
  overview: {
    heading: "Smooth-Gliding Horizontal Aluminium Windows",
    paragraphs: [
      "Aluminium sliding windows are the perfect choice for rooms with limited exterior clearance, walkways, and patios where outward-opening panes would get in the way.",
      "Engineered with durable nylon guide rollers, built-in drainage weep holes, and key-locking cam handles, they deliver seamless day-to-day operation with very little maintenance.",
    ],
    keyFeaturesNotice:
      "All sliding windows include high-density brush pile and silicone draught seals, with optional matching aluminium fly screens that clip straight into the track.",
  },
  benefits: {
    title: "Why Choose Our Aluminium Sliding Windows",
    items: [
      {
        icon: "Layers",
        title: "Space-Saving Design",
        description:
          "Panels slide within their own track instead of swinging outward, so they never crowd walkways or balconies.",
      },
      {
        icon: "Wind",
        title: "Adjustable Airflow",
        description:
          "Open the sash a crack for a gentle breeze or slide it fully open to flood the room with fresh air.",
      },
      {
        icon: "Sliders",
        title: "Easy to Clean & Use",
        description:
          "Panels glide smoothly on durable rollers and can be lifted out for quick, thorough cleaning.",
      },
      {
        icon: "Lock",
        title: "Secure Locking",
        description:
          "Self-latching cam locks hold the sash shut, with optional keyed locks for extra peace of mind.",
      },
    ],
  },
  productTypes: {
    title: "Choose the Right Sliding Window Configuration",
    description:
      "Every opening has different ventilation and access needs. We manufacture all major sliding configurations to match your layout.",
    items: [
      {
        name: "2-Panel Sliding Window (OX / XO)",
        tagline: "The classic space-saving slider",
        description:
          "Two panels where one or both sashes slide horizontally along a smooth track for everyday ventilation.",
        idealFor: "Bedrooms, kitchens, and standard window openings.",
      },
      {
        name: "3-Panel Sliding Window",
        tagline: "Wider openings with more glass",
        description:
          "Three interlocking panels that slide to open up to two-thirds of the frame for generous airflow and light.",
        idealFor: "Living rooms and wider exterior walls.",
      },
      {
        name: "4-Panel Sliding Window (OXXO)",
        tagline: "Maximum ventilation on wide spans",
        description:
          "Four panels with sliding outer sashes and fixed centre panes, opening up large spans for expansive views.",
        idealFor: "Patios, entertainment areas, and large openings.",
      },
      {
        name: "Sliding Window with Fly Screen",
        tagline: "Fresh air without the bugs",
        description:
          "A matching aluminium fly screen that clips into the track, keeping mosquitoes out while the window stays open.",
        idealFor: "Bedrooms and kitchens during summer evenings.",
      },
    ],
  },
  glazingOptions: {
    title: "Glass & Glazing Options",
    description:
      "The glass you choose affects safety, heat, and how much light enters the room.",
    options: [
      {
        name: "Clear Float Glass",
        description:
          "An economical standard glass that gives crisp, clear views and bright natural light.",
      },
      {
        name: "Toughened Safety Glass",
        description:
          "Heat-treated glass that is up to five times stronger than standard glass and shatters into safe, dull fragments.",
      },
      {
        name: "Laminated Safety Glass",
        description:
          "Two glass sheets bonded with a vinyl layer that holds together on impact for extra security and noise reduction.",
      },
      {
        name: "Tinted Solar-Control Glass",
        description:
          "Neutral grey or bronze tinting that cuts harsh glare and blocks UV rays to protect furniture from fading.",
      },
    ],
  },
  specifications: {
    title: "Technical Specifications & Hardware",
    items: [
      { label: "Window Configurations", value: "2-Panel (OX/XO), 3-Panel, and 4-Panel (OXXO) sliding windows" },
      { label: "Frame Material", value: "Strong, lightweight architectural aluminium" },
      { label: "Rollers & Track", value: "Durable nylon guide wheels on smooth aluminium tracks" },
      { label: "Finishes", value: "Charcoal, Matte Black, Pure White, Bronze, or Anodised Silver" },
      { label: "Locking Mechanism", value: "Self-latching cam lock with optional keyed locks" },
      { label: "Weather Proofing", value: "High-density brush pile and silicone draught seals" },
    ],
  },
  installationProcess: {
    title: "Our Simple 4-Step Sliding Window Installation",
    steps: [
      {
        stepNumber: "01",
        title: "Measurement & Quote",
        description:
          "We visit your property to measure each window opening and provide an upfront, itemised price.",
      },
      {
        stepNumber: "02",
        title: "Workshop Build",
        description:
          "Your frames are cut and assembled, then fitted with glass, rollers, and locks and quality checked.",
      },
      {
        stepNumber: "03",
        title: "Neat Installation",
        description:
          "We remove old frames, anchor the sliding window securely, and seal it against rain and draughts.",
      },
      {
        stepNumber: "04",
        title: "Smooth Test & Sign-Off",
        description:
          "We demonstrate smooth sliding, test the latching lock, and hand over your warranty.",
      },
    ],
  },
  reviews: [
    {
      authorName: "Nomsa P.",
      location: "Homeowner, Randburg",
      rating: 5,
      date: "2025-11-10",
      comment:
        "The sliding windows glide beautifully and we no longer have sashes banging in the wind. Installation was neat and quick.",
    },
    {
      authorName: "Pieter V.",
      location: "Homeowner, Kempton Park",
      rating: 5,
      date: "2025-12-02",
      comment:
        "Great quality frames and the fly screens clip in perfectly. The whole house feels cooler now.",
    },
  ],
  faqs: [
    {
      question: "Can I add mosquito fly screens to sliding windows?",
      answer:
        "Yes. We custom build matching aluminium fly screen inserts that clip directly into the window frame track, so you can enjoy fresh air without insects.",
    },
    {
      question: "Do aluminium sliding windows rattle in high winds?",
      answer:
        "No. Our sliding windows use heavy-duty brush pile seals and tight guide blocks that prevent rattling, even during stormy Gauteng weather.",
    },
    {
      question: "Can sliding windows be fitted with safety glass?",
      answer:
        "Absolutely. We offer toughened or laminated safety glass for all sliding windows, which is especially important for low-level openings near floors and walkways.",
    },
    {
      question: "How do I clean the tracks of my sliding window?",
      answer:
        "Simply vacuum out dust and grit from the bottom track, then wipe it with a damp cloth. The sashes can also be lifted out for a thorough deep clean.",
    },
  ],
};
