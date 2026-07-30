export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "general" | "installation" | "pricing";
}

export const faqs: FAQItem[] = [
  {
    id: "faq-1",
    question: "Do you offer custom sizing, or are your products standard sizes?",
    answer: "Every single product we manufacture is custom-made from scratch. We perform precise on-site measurements to ensure every window, door, and shopfront fits your exact structural opening, eliminating gaps, draughts, and structural vulnerabilities.",
    category: "general"
  },
  {
    id: "faq-2",
    question: "How long does the design, fabrication, and installation process take?",
    answer: "Our standard lead time is 2 to 4 weeks from deposit payment and final architectural drawing approval. The timeline depends on the scale of the project, complexity of the designs, and whether custom powder coating colors are selected.",
    category: "installation"
  },
  {
    id: "faq-3",
    question: "Are your installations compliant with building and safety regulations?",
    answer: "Yes, fully. All glass installations utilize safety-toughened or laminated glass in strict compliance with SANS (South African National Standards) or local structural building codes. We engineer for wind loads, thermal barriers, and human impact safety.",
    category: "installation"
  },
  {
    id: "faq-4",
    question: "Do you provide free on-site measurements and quotations?",
    answer: "Absolutely. We provide free initial site measurements, consulting, and detailed itemized quotations for projects within our standard service area. For out-of-area commercial developments, we review architectural drawings to provide initial pricing.",
    category: "pricing"
  },
  {
    id: "faq-5",
    question: "What colors and finishes do you offer for the aluminium profiles?",
    answer: "Our standard finishes include Charcoal Grey, Satin Silver, White, and Matte Bronze. We can also custom powder coat your aluminium frames to match any official RAL color code to align with your building's design palette.",
    category: "general"
  },
  {
    id: "faq-6",
    question: "Can you install double glazing for soundproofing and climate control?",
    answer: "Yes, double glazing is highly recommended for modern developments. It features two panes of safety glass separated by a vacuum or argon-filled gap, which significantly reduces external noise and keeps interiors warmer in winter and cooler in summer.",
    category: "general"
  },
  {
    id: "faq-7",
    question: "What is the warranty on your aluminium and glass products?",
    answer: "We offer a 5-year structural warranty on our fabricated aluminium frames and profiles, and a 1-year warranty on moving hardware (rollers, locks, friction stays, hinges) and weather seals, subject to proper maintenance.",
    category: "pricing"
  },
  {
    id: "faq-8",
    question: "Do you handle the removal of old windows and doors?",
    answer: "Yes, we offer complete retrofitting services. Our team will carefully dismantle and remove existing wood or steel frames, prep the openings, install the new premium aluminium systems, and seal the joints for a clean, weather-tight finish.",
    category: "installation"
  },
  {
    id: "faq-9",
    question: "How much do aluminium windows and doors cost?",
    answer: "Prices vary based on size, glass type, and finish. As a guide: standard casement windows start from R 2,700, sliding patio doors from R 4,600, and grand pivot entrance doors from R 13,000. Visit our Prices page for a full breakdown, or request a free on-site quote for an exact figure.",
    category: "pricing"
  },
  {
    id: "faq-10",
    question: "Do you require a deposit? What are your payment terms?",
    answer: "We require a 50% deposit to begin fabrication after you approve the final quote and drawings. The remaining 50% is due upon completion and sign-off of the installation. We accept EFT and bank transfers.",
    category: "pricing"
  },
  {
    id: "faq-11",
    question: "Does the quoted price include installation?",
    answer: "Yes. All our quoted prices include full professional installation by our certified teams. This covers site preparation, fitting, weather sealing, and cleanup. The only items not included are VAT and any structural modifications to brickwork beyond standard openings.",
    category: "pricing"
  },
  {
    id: "faq-12",
    question: "Is there a price difference between powder-coated and anodized finishes?",
    answer: "Anodized finishes (silver, bronze) are our standard and included in the base price. Premium powder coating (charcoal, matte black) typically adds 5-10% to the frame cost. The exact difference is itemized in your quotation so there are no surprises.",
    category: "pricing"
  },
  {
    id: "faq-13",
    question: "Is there a consultation fee for on-site measurements?",
    answer: "Yes, we charge a small consultation fee to send a professional technician to your property for precise on-site measurements. The fee is R250 for areas within Johannesburg and R350 for areas outside Johannesburg (including Pretoria, East Rand, West Rand, and surrounding Gauteng regions). This fee is deducted from your final invoice if you proceed with the installation.",
    category: "pricing"
  }
];
