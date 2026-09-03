export interface PricingProduct {
  name: string;
  size: string;
  framePrice: string;
  glazingPrice: string;
  totalFrom: string;
  note: string;
}

export interface SpecialtyPricingProduct {
  name: string;
  unitOrScope: string;
  totalFrom: string;
  note: string;
}

export const windowPricing: PricingProduct[] = [
  {
    name: "Casement Window (Standard)",
    size: "1200mm (W) x 1200mm (H)",
    framePrice: "from R 1,800",
    glazingPrice: "from R 900",
    totalFrom: "from R 2,700",
    note: "Single or double glazed. Hinged side/top opening.",
  },
  {
    name: "Sliding Window",
    size: "1500mm (W) x 1200mm (H)",
    framePrice: "from R 2,100",
    glazingPrice: "from R 1,100",
    totalFrom: "from R 3,200",
    note: "Horizontal sliding sash. Ideal for limited exterior space.",
  },
  {
    name: "3-Pane Casement Window",
    size: "2400mm (W) x 1500mm (H)",
    framePrice: "from R 3,500",
    glazingPrice: "from R 1,800",
    totalFrom: "from R 5,300",
    note: "Three glazed panels. Fixed centre + two hinged sides.",
  },
  {
    name: "Fixed Picture Window",
    size: "1800mm (W) x 1200mm (H)",
    framePrice: "from R 1,600",
    glazingPrice: "from R 800",
    totalFrom: "from R 2,400",
    note: "Non-opening pane for maximum daylight.",
  },
  {
    name: "Awning / Top-Hung Window",
    size: "900mm (W) x 600mm (H)",
    framePrice: "from R 1,400",
    glazingPrice: "from R 700",
    totalFrom: "from R 2,100",
    note: "Hinged at top. Opens outward. Ideal for bathrooms.",
  },
  {
    name: "Folding Stacking Window",
    size: "3000mm (W) x 1500mm (H)",
    framePrice: "from R 6,500",
    glazingPrice: "from R 3,000",
    totalFrom: "from R 9,500",
    note: "Multi-panel. Folds completely open to clear the opening.",
  },
];

export const doorPricing: PricingProduct[] = [
  {
    name: "Standard Hinge Door (Single)",
    size: "900mm (W) x 2100mm (H)",
    framePrice: "from R 3,200",
    glazingPrice: "from R 1,400",
    totalFrom: "from R 4,600",
    note: "Single leaf. Multi-point locking. Weather-sealed.",
  },
  {
    name: "French Hinge Door (Double)",
    size: "1800mm (W) x 2100mm (H)",
    framePrice: "from R 5,800",
    glazingPrice: "from R 2,800",
    totalFrom: "from R 8,600",
    note: "Two hinged leaves. Master + slave leaf with centre seal.",
  },
  {
    name: "Premium Pivot Entry Door",
    size: "1200mm (W) x 2400mm (H)",
    framePrice: "from R 9,500",
    glazingPrice: "from R 3,500",
    totalFrom: "from R 13,000",
    note: "Oversized grand entrance. Heavy-duty pivot hinge. Hydraulic closer.",
  },
  {
    name: "Sliding Patio Door (2-Panel)",
    size: "2400mm (W) x 2100mm (H)",
    framePrice: "from R 7,000",
    glazingPrice: "from R 3,200",
    totalFrom: "from R 10,200",
    note: "Stainless steel rollers. Smooth-glide track. Keyed lock.",
  },
  {
    name: "Vista Fold Stacking Door (3-Panel)",
    size: "3600mm (W) x 2100mm (H)",
    framePrice: "from R 14,000",
    glazingPrice: "from R 5,500",
    totalFrom: "from R 19,500",
    note: "Folds fully open. Flush threshold option. Security deadbolts.",
  },
  {
    name: "Stacking Door (4-6 Panel)",
    size: "4800mm+ (W) x 2100mm (H)",
    framePrice: "from R 18,000",
    glazingPrice: "from R 7,000",
    totalFrom: "from R 25,000",
    note: "Large-format opening. Up to 6 folding panels. Quote on measurement.",
  },
];

export const specialtyPricing: SpecialtyPricingProduct[] = [
  {
    name: "Steel-to-Aluminium Window Conversion",
    unitOrScope: "Per window opening",
    totalFrom: "from R 1,850",
    note: "Preserves plaster & internal paintwork. Complies with SANS 10400 safety glazing.",
  },
  {
    name: "Glass Patio & Balcony Enclosures",
    unitOrScope: "Per m² custom span",
    totalFrom: "from R 3,800",
    note: "Low-E energy-saving safety glass or frameless glass stacking curtains.",
  },
  {
    name: "Frameless Glass Shower Doors & Cubicles",
    unitOrScope: "Per custom enclosure",
    totalFrom: "from R 4,200",
    note: "10mm–12mm toughened safety glass with architectural brass/stainless fittings.",
  },
  {
    name: "Aluminium Fly Screens & Insect Mesh",
    unitOrScope: "Per screen panel",
    totalFrom: "from R 650",
    note: "Durable aluminium framing with standard or pet-friendly reinforced mesh.",
  },
  {
    name: "Sliding Door Roller & Track Repairs",
    unitOrScope: "Per service visit",
    totalFrom: "from R 850",
    note: "Heavy-duty roller replacement, stainless track realignment, and lock servicing.",
  },
  {
    name: "Clear Polycarbonate Burglar Bars",
    unitOrScope: "Per fitted bar",
    totalFrom: "from R 280",
    note: "High-tensile UV-resistant clear security bars with tamper-proof fixings.",
  },
  {
    name: "Expanding Trellis Security Gates",
    unitOrScope: "Per 900×2100mm door",
    totalFrom: "from R 2,400",
    note: "Galvanized slamlock expanding steel barrier with anti-jemmy track protection.",
  },
];
