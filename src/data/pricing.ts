export interface PricingProduct {
  name: string;
  size: string;
  framePrice: string;
  glazingPrice: string;
  totalFrom: string;
  note: string;
}

export const windowPricing: PricingProduct[] = [
  {
    name: "Casement Window (Standard)",
    size: "1200mm (W) x 1200mm (H)",
    framePrice: "R 1,800 - R 2,400",
    glazingPrice: "R 900 - R 1,500",
    totalFrom: "R 2,700",
    note: "Single or double glazed. Hinged side/top opening.",
  },
  {
    name: "Sliding Window",
    size: "1500mm (W) x 1200mm (H)",
    framePrice: "R 2,100 - R 2,800",
    glazingPrice: "R 1,100 - R 1,800",
    totalFrom: "R 3,200",
    note: "Horizontal sliding sash. Ideal for limited exterior space.",
  },
  {
    name: "3-Pane Casement Window",
    size: "2400mm (W) x 1500mm (H)",
    framePrice: "R 3,500 - R 4,800",
    glazingPrice: "R 1,800 - R 2,800",
    totalFrom: "R 5,300",
    note: "Three glazed panels. Fixed centre + two hinged sides.",
  },
  {
    name: "Fixed Picture Window",
    size: "1800mm (W) x 1200mm (H)",
    framePrice: "R 1,600 - R 2,200",
    glazingPrice: "R 800 - R 1,400",
    totalFrom: "R 2,400",
    note: "Non-opening pane for maximum daylight.",
  },
  {
    name: "Awning / Top-Hung Window",
    size: "900mm (W) x 600mm (H)",
    framePrice: "R 1,400 - R 1,900",
    glazingPrice: "R 700 - R 1,100",
    totalFrom: "R 2,100",
    note: "Hinged at top. Opens outward. Ideal for bathrooms.",
  },
  {
    name: "Folding Stacking Window",
    size: "3000mm (W) x 1500mm (H)",
    framePrice: "R 6,500 - R 9,000",
    glazingPrice: "R 3,000 - R 5,000",
    totalFrom: "R 9,500",
    note: "Multi-panel. Folds completely open to clear the opening.",
  },
];

export const doorPricing: PricingProduct[] = [
  {
    name: "Standard Hinge Door (Single)",
    size: "900mm (W) x 2100mm (H)",
    framePrice: "R 3,200 - R 4,500",
    glazingPrice: "R 1,400 - R 2,200",
    totalFrom: "R 4,600",
    note: "Single leaf. Multi-point locking. Weather-sealed.",
  },
  {
    name: "French Hinge Door (Double)",
    size: "1800mm (W) x 2100mm (H)",
    framePrice: "R 5,800 - R 8,000",
    glazingPrice: "R 2,800 - R 4,200",
    totalFrom: "R 8,600",
    note: "Two hinged leaves. Master + slave leaf with centre seal.",
  },
  {
    name: "Premium Pivot Entry Door",
    size: "1200mm (W) x 2400mm (H)",
    framePrice: "R 9,500 - R 14,000",
    glazingPrice: "R 3,500 - R 6,000",
    totalFrom: "R 13,000",
    note: "Oversized grand entrance. Heavy-duty pivot hinge. Hydraulic closer.",
  },
  {
    name: "Sliding Patio Door (2-Panel)",
    size: "2400mm (W) x 2100mm (H)",
    framePrice: "R 7,000 - R 10,000",
    glazingPrice: "R 3,200 - R 5,000",
    totalFrom: "R 10,200",
    note: "Stainless steel rollers. Smooth-glide track. Keyed lock.",
  },
  {
    name: "Vista Fold Stacking Door (3-Panel)",
    size: "3600mm (W) x 2100mm (H)",
    framePrice: "R 14,000 - R 20,000",
    glazingPrice: "R 5,500 - R 8,500",
    totalFrom: "R 19,500",
    note: "Folds fully open. Flush threshold option. Security deadbolts.",
  },
  {
    name: "Stacking Door (4-6 Panel)",
    size: "4800mm+ (W) x 2100mm (H)",
    framePrice: "R 18,000 - R 28,000",
    glazingPrice: "R 7,000 - R 12,000",
    totalFrom: "R 25,000",
    note: "Large-format opening. Up to 6 folding panels. Quote on measurement.",
  },
];
