export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "general" | "installation" | "pricing";
}

export const faqs: FAQItem[] = [
  {
    id: "faq-1",
    question: "Do you make custom sizes, or do you only sell standard sizes?",
    answer: "Everything we make is custom-built from scratch. We measure your openings on site so every window and door fits your home perfectly — no gaps, no draughts, no awkward sizes.",
    category: "general"
  },
  {
    id: "faq-2",
    question: "How long does the whole process take?",
    answer: "Most projects take about 2 to 4 weeks from when you pay the deposit to final installation. The exact time depends on how big the job is and whether you choose a special powder-coated colour.",
    category: "installation"
  },
  {
    id: "faq-3",
    question: "Are your installations safe and legal?",
    answer: "Yes. We only use toughened or laminated safety glass that meets South African safety standards. Every window and door is built to handle strong winds and is fitted safely.",
    category: "installation"
  },
  {
    id: "faq-4",
    question: "How does the on-site consultation and measurement work?",
    answer: "We send a professional technician to your property to take precise measurements. There is a small consultation fee of R250 for Johannesburg areas and R350 for areas outside Johannesburg, which covers the site visit and travel. This fee is fully credited back against your final invoice if you proceed with the installation, so the measurement is effectively free when you go ahead.",
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
    question: "What warranty do you give on your products?",
    answer: "We give a 5-year warranty on the aluminium frames and a 1-year warranty on moving parts like rollers, locks, and hinges, provided they are looked after properly.",
    category: "pricing"
  },
  {
    id: "faq-8",
    question: "Do you remove the old windows and doors first?",
    answer: "Yes. We carefully take out your old wood or steel frames, prepare the opening, install your new aluminium frames, and seal everything up for a clean, weather-tight finish.",
    category: "installation"
  },
  {
    id: "faq-9",
    question: "How much do aluminium windows and doors cost?",
    answer: "Prices depend on size, glass, and finish. As a guide: standard windows start from R 2,700, sliding patio doors from R 4,600, and grand pivot doors from R 13,000. See our Prices page for a full list, or ask us for an exact quote.",
    category: "pricing"
  },
  {
    id: "faq-10",
    question: "Do you need a deposit? How do payments work?",
    answer: "Yes, we ask for a 50% deposit to start making your order once you approve the quote and drawings. The remaining 50% is due when the installation is finished. We accept EFT and bank transfers.",
    category: "pricing"
  },
  {
    id: "faq-11",
    question: "Is installation included in the price?",
    answer: "Yes. All our prices include full installation by our team, covering site prep, fitting, weather sealing, and cleanup. The only extras are VAT and any major changes to your brickwork beyond normal openings.",
    category: "pricing"
  },
  {
    id: "faq-12",
    question: "Is there a price difference between standard and premium finishes?",
    answer: "Anodized finishes (silver, bronze) are our standard and included in the base price. Premium powder coating (charcoal, matte black) usually adds about 5-10% to the frame cost. Your quote shows the exact difference so there are no surprises.",
    category: "pricing"
  },
  {
    id: "faq-13",
    question: "Is there a consultation fee for on-site measurements?",
    answer: "Yes, we charge a small consultation fee to send a professional technician to your property for precise on-site measurements. The fee is R250 for areas within Johannesburg and R350 for areas outside Johannesburg (including Pretoria, East Rand, West Rand, and surrounding Gauteng regions). This fee is deducted from your final invoice if you proceed with the installation.",
    category: "pricing"
  }
];
