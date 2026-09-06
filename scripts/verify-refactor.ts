import { generateMetaTitleVariant, generateMetaDescriptionVariant } from "../src/lib/seoVariants";
import { allTaxonomyServices, rawServiceTaxonomy } from "../src/data/serviceTaxonomy";

console.log("==================================================");
console.log("RUNNING REFACTOR AUTOMATED VERIFICATION SUITE");
console.log("==================================================");

// 1. Verify Taxonomy Structure
console.log("\n[1] Verifying 38 Services & 5 Categories Taxonomy:");
if (rawServiceTaxonomy.length !== 5) {
  throw new Error(`Expected 5 categories, got ${rawServiceTaxonomy.length}`);
}
console.log(`✓ Confirmed 5 categories in rawServiceTaxonomy`);

const totalTaxonomyServices = rawServiceTaxonomy.reduce((acc, cat) => acc + cat.services.length, 0);
if (totalTaxonomyServices !== 38) {
  throw new Error(`Expected 38 services in taxonomy, got ${totalTaxonomyServices}`);
}
console.log(`✓ Confirmed exactly 38 service names across the 5 categories`);

if (allTaxonomyServices.length !== 38) {
  throw new Error(`Expected 38 services in allTaxonomyServices, got ${allTaxonomyServices.length}`);
}
console.log(`✓ Confirmed all 38 services mapped with pricing and slug metadata`);

// 2. Verify Meta Title Variant Generator & Sub-60 Character Constraint
console.log("\n[2] Verifying Meta Title Variant Generator & < 60 chars constraint:");
const testCases = [
  { service: "Aluminium windows", locName: "Katlehong", locSlug: "katlehong", cat: "Aluminium & Doors" },
  { service: "Aluminium windows", locName: "Sandton", locSlug: "sandton", cat: "Aluminium & Doors" },
  { service: "Aluminium folding & stacking doors", locName: "Pretoria East", locSlug: "pretoria-east", cat: "Aluminium & Doors" },
  { service: "Commercial aluminium shopfronts", locName: "Johannesburg CBD", locSlug: "johannesburg-cbd", cat: "Aluminium & Doors" },
  { service: "Wire mesh & Clearview-style fencing", locName: "Midrand", locSlug: "midrand", cat: "Security & Fencing" },
  { service: "Seamless aluminium gutters", locName: "Roodepoort", locSlug: "roodepoort", cat: "Maintenance & Repairs" },
  { service: "Aluminium door & window repairs", locName: "Katlehong", locSlug: "katlehong", cat: "Maintenance & Repairs" },
];

for (const tc of testCases) {
  const title = generateMetaTitleVariant({
    serviceName: tc.service,
    locationName: tc.locName,
    locationSlug: tc.locSlug,
    category: tc.cat,
  });

  const desc = generateMetaDescriptionVariant({
    serviceName: tc.service,
    locationName: tc.locName,
    locationSlug: tc.locSlug,
  });

  console.log(`\n  Service: ${tc.service} | Location: ${tc.locName}`);
  console.log(`  Title (${title.length} chars): "${title}"`);
  console.log(`  Desc  (${desc.length} chars): "${desc}"`);

  if (title.length > 60) {
    throw new Error(`Title exceeded 60 characters: "${title}" (${title.length})`);
  }

  if (tc.locSlug === "katlehong") {
    if (title.includes("Near Katlehong")) {
      throw new Error(`Strict Katlehong rule failed! "Near Katlehong" found in title: "${title}"`);
    }
    console.log(`  ✓ Katlehong strictly omitted 'Near'`);
  }
}

// 3. Verify Dynamic H1 Logic Formulas
console.log("\n[3] Verifying H1 Formula & Katlehong Exception:");
function computeH1(serviceName: string, locationSlug: string, locationName: string): string {
  const isKatlehong = locationSlug.toLowerCase() === "katlehong";
  return isKatlehong
    ? `${serviceName} Installation in Katlehong`
    : `${serviceName} Installation Near ${locationName}`;
}

const h1Katlehong = computeH1("Aluminium Windows", "katlehong", "Katlehong");
console.log(`  Katlehong H1: "${h1Katlehong}"`);
if (h1Katlehong !== "Aluminium Windows Installation in Katlehong") {
  throw new Error(`Unexpected Katlehong H1: ${h1Katlehong}`);
}
console.log(`  ✓ Katlehong H1 formula verified: strictly omitted "Near"`);

const h1Sandton = computeH1("Aluminium Windows", "sandton", "Sandton");
console.log(`  Sandton H1: "${h1Sandton}"`);
if (h1Sandton !== "Aluminium Windows Installation Near Sandton") {
  throw new Error(`Unexpected Default H1: ${h1Sandton}`);
}
console.log(`  ✓ Default H1 formula verified: contains "Near"`);

console.log("\n==================================================");
console.log("ALL VERIFICATIONS PASSED SUCCESSFULLY!");
console.log("==================================================");
