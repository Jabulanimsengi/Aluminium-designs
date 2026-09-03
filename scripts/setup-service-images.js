const fs = require("fs");
const path = require("path");

const publicImages = path.join(process.cwd(), "public", "images");
const servicesDir = path.join(publicImages, "services");

if (!fs.existsSync(servicesDir)) {
  fs.mkdirSync(servicesDir, { recursive: true });
}

const map = {
  "aluminium-windows-hero.webp": "cards/card_aluminium_windows.jpg",
  "steel-to-aluminium-hero.webp": "cards/card_aluminium_windows.jpg",
  "aluminium-sliding-doors-hero.webp": "cards/card_aluminium_sliding_doors.jpg",
  "aluminium-stacking-doors-hero.webp": "cards/card_aluminium_stacking_doors.jpg",
  "aluminium-front-doors-hero.webp": "cards/card_aluminium_front_doors.jpg",
  "aluminium-french-doors-hero.webp": "cards/card_aluminium_french_doors.jpg",
  "aluminium-garage-doors-hero.webp": "cards/card_aluminium_garage_doors.jpg",
  "aluminium-sliding-windows-hero.webp": "real_images/products/windows/window_aluminium_seven.jpeg",
  "double-glazed-windows-hero.webp": "real_images/products/windows/window_aluminium_two.jpeg",
  "glass-balustrades-hero.webp": "glass_balustrade.png",
  "patio-enclosures-hero.webp": "patio_enclosure.png",
  "glass-patio-enclosures-hero.webp": "patio_enclosure.png",
  "aluminium-awnings-hero.webp": "real_images/products/windows/window_aluminium_six.jpeg",
  "aluminium-pergolas-hero.webp": "patio_enclosure.png",
  "aluminium-shopfronts-hero.webp": "shopfront_facade.png",
  "glass-shopfronts-hero.webp": "shopfront_facade.png",
  "aluminium-skylights-hero.webp": "window_detail.png",
  "glass-replacement-hero.webp": "window_detail.png",
  "seamless-gutters-hero.webp": "real_images/products/windows/window_aluminium_three.jpeg",
  "office-glass-partitions-hero.webp": "office_partitions.png",
  "frameless-shower-doors-hero.webp": "shower_enclosure.png",
  "fly-screens-hero.webp": "real_images/products/windows/window_aluminium_four.jpeg",
  "aluminium-fly-screens-hero.webp": "real_images/products/windows/window_aluminium_four.jpeg",
  "aluminium-repairs-hero.webp": "window_repair.png",
  "sliding-door-repairs-hero.webp": "cards/card_aluminium_sliding_doors.jpg",
  "steel-repairs-hero.webp": "window_repair.png",
  "burglar-bars-hero.webp": "real_images/products/security/security_burglar-doors_three.jpeg",
  "clear-burglar-bars-hero.webp": "real_images/products/security/security_burglar-doors_four.jpeg",
  "trellis-gates-hero.webp": "real_images/products/security/security_burglar-doors_five.jpeg",
  "security-gates-hero.webp": "real_images/products/security/security_burglar-doors_one.jpeg",
  "mesh-fencing-hero.webp": "real_images/products/security/security_burglar-doors_two.jpeg",
  "driveway-gates-hero.webp": "real_images/products/gates/aluminium_gate_two.jpeg",
  "gate-motors-hero.webp": "real_images/products/gates/aluminium_gate_three.jpeg",
  "palisade-fencing-hero.webp": "slatted_gate.png",
  "custom-welding-hero.webp": "slatted_gate.png",
  "steel-carports-hero.webp": "patio_enclosure.png",
  "steel-balustrades-hero.webp": "glass_balustrade.png",
  "steel-staircases-hero.webp": "glass_balustrade.png",
  "steel-sheds-hero.webp": "patio_enclosure.png",
  "sliding-thumb.webp": "cards/card_aluminium_sliding_doors.jpg",
  "windows-thumb.webp": "cards/card_aluminium_windows.jpg",
  "stacking-thumb.webp": "cards/card_aluminium_stacking_doors.jpg",
  "doors-thumb.webp": "cards/card_aluminium_front_doors.jpg",
  "front-doors-thumb.webp": "cards/card_aluminium_front_doors.jpg",
  "gates-thumb.webp": "slatted_gate.png",
  "motors-thumb.webp": "real_images/products/gates/aluminium_gate_three.jpeg",
  "driveway-thumb.webp": "real_images/products/gates/aluminium_gate_two.jpeg",
  "patio-thumb.webp": "patio_enclosure.png",
  "pergolas-thumb.webp": "patio_enclosure.png",
  "carports-thumb.webp": "patio_enclosure.png",
  "sheds-thumb.webp": "patio_enclosure.png",
  "glass-thumb.webp": "window_detail.png",
  "repairs-thumb.webp": "window_repair.png",
  "partitions-thumb.webp": "office_partitions.png",
  "shopfront-thumb.webp": "shopfront_facade.png",
  "balustrades-thumb.webp": "glass_balustrade.png",
  "glass-balustrades-thumb.webp": "glass_balustrade.png",
  "stairs-thumb.webp": "glass_balustrade.png",
  "welding-thumb.webp": "slatted_gate.png",
  "palisade-thumb.webp": "slatted_gate.png",
  "mesh-thumb.webp": "real_images/products/security/security_burglar-doors_two.jpeg",
  "bars-thumb.webp": "real_images/products/security/security_burglar-doors_three.jpeg",
  "burglar-bars-thumb.webp": "real_images/products/security/security_burglar-doors_three.jpeg",
  "clear-bars-thumb.webp": "real_images/products/security/security_burglar-doors_four.jpeg",
  "trellis-thumb.webp": "real_images/products/security/security_burglar-doors_five.jpeg",
  "screens-thumb.webp": "real_images/products/windows/window_aluminium_four.jpeg",
  "sliding-windows-thumb.webp": "real_images/products/windows/window_aluminium_seven.jpeg",
  "awnings-thumb.webp": "real_images/products/windows/window_aluminium_six.jpeg"
};

let count = 0;
for (const [target, src] of Object.entries(map)) {
  const srcPath = path.join(publicImages, src);
  const destPath = path.join(servicesDir, target);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    count++;
  } else {
    console.warn("Source missing:", srcPath);
  }
}
console.log(`Successfully created ${count} service image assets in public/images/services/`);
