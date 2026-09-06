import { metadata as homeMetadata } from "../src/app/page";
import { metadata as aboutMetadata } from "../src/app/about/page";
import { metadata as contactMetadata } from "../src/app/contact/page";
import { metadata as pricingMetadata } from "../src/app/pricing/page";
import { metadata as servicesMetadata } from "../src/app/services/page";
import { metadata as steelWorksMetadata } from "../src/app/steel-works/page";
import { metadata as locationsMetadata } from "../src/app/locations/page";
import { generateMetadata as generateLocationMetadata } from "../src/app/locations/[area]/page";
import { generateMetadata as generateServiceMetadata } from "../src/app/services/[slug]/page";
import { generateMetadata as generateFlatMetadata } from "../src/app/[slug]/page";

console.log("===============================================================");
console.log("             METADATA TITLE AUDIT (DOUBLE-BRANDING CHECK)      ");
console.log("===============================================================");

// From src/app/layout.tsx: template: "%s | Aluminium Designs"
const template = "%s | Aluminium Designs";
console.log(`Layout template: "${template}"\n`);

function resolveTitle(titleConfig: any): string {
  if (!titleConfig) return "";
  if (typeof titleConfig === "string") {
    // If it's a string, Next.js layout applies template
    return template.replace("%s", titleConfig);
  }
  if (typeof titleConfig === "object") {
    if (titleConfig.absolute) {
      // absolute overrides template completely
      return titleConfig.absolute;
    }
    if (titleConfig.default) {
      return titleConfig.default;
    }
  }
  return String(titleConfig);
}

function checkTitle(pageName: string, titleConfig: any) {
  const finalTitle = resolveTitle(titleConfig);
  const isDoubleBranded =
    finalTitle.includes("Aluminium Designs | Aluminium Designs") ||
    finalTitle.includes("Aluminium Designs Gauteng | Aluminium Designs") ||
    finalTitle.includes("Aluminium Designs South Africa | Aluminium Designs");

  const status = isDoubleBranded ? "❌ DOUBLE BRANDED" : "✓ OK";
  console.log(`[${status}] ${pageName}`);
  console.log(`  Raw:   ${JSON.stringify(titleConfig)}`);
  console.log(`  Final: "${finalTitle}"\n`);

  if (isDoubleBranded) {
    console.error(`ERROR: ${pageName} is double-branded!`);
    process.exit(1);
  }
}

async function runAudit() {
  checkTitle("Home (src/app/page.tsx)", homeMetadata.title);
  checkTitle("About (src/app/about/page.tsx)", aboutMetadata.title);
  checkTitle("Contact (src/app/contact/page.tsx)", contactMetadata.title);
  checkTitle("Pricing (src/app/pricing/page.tsx)", pricingMetadata.title);
  checkTitle("Services Hub (src/app/services/page.tsx)", servicesMetadata.title);
  checkTitle("Steel Works (src/app/steel-works/page.tsx)", steelWorksMetadata.title);
  checkTitle("Locations Hub (src/app/locations/page.tsx)", locationsMetadata.title);

  const locSandtonMeta = await generateLocationMetadata({ params: Promise.resolve({ area: "sandton" }) });
  checkTitle("Location: Sandton", locSandtonMeta.title);

  const locKatlehongMeta = await generateLocationMetadata({ params: Promise.resolve({ area: "katlehong" }) });
  checkTitle("Location: Katlehong", locKatlehongMeta.title);

  const srvWindowsMeta = await generateServiceMetadata({ params: Promise.resolve({ slug: "aluminium-windows" }) });
  checkTitle("Service: Aluminium Windows", srvWindowsMeta.title);

  const flatSandtonMeta = await generateFlatMetadata({ params: Promise.resolve({ slug: "aluminium-window-installation-near-sandton" }) });
  checkTitle("Flat Route: aluminium-window-installation-near-sandton", flatSandtonMeta.title);

  const flatKatlehongMeta = await generateFlatMetadata({ params: Promise.resolve({ slug: "aluminium-window-installation-in-katlehong" }) });
  checkTitle("Flat Route: aluminium-window-installation-in-katlehong", flatKatlehongMeta.title);

  const flatRepairSandton = await generateFlatMetadata({ params: Promise.resolve({ slug: "aluminium-repairs-near-sandton" }) });
  checkTitle("Flat Route: aluminium-repairs-near-sandton", flatRepairSandton.title);

  const flatRepairKatlehong = await generateFlatMetadata({ params: Promise.resolve({ slug: "aluminium-repairs-in-katlehong" }) });
  checkTitle("Flat Route: aluminium-repairs-in-katlehong", flatRepairKatlehong.title);

  console.log("===============================================================");
  console.log("ALL METADATA TITLES CLEAN & FREE OF DOUBLE-BRANDING!");
  console.log("===============================================================");
}

runAudit();
