import sitemap from "../src/app/sitemap";
import { parseServiceLocationSlug } from "../src/lib/serviceLocationParser";
import { getTaxonomyServiceBySlug } from "../src/data/serviceTaxonomy";

console.log("==================================================");
console.log("RUNNING COMPREHENSIVE SEO INTEGRITY VERIFICATION");
console.log("==================================================");

// 1. Sitemap Limits and Health
console.log("\n[1] Verifying Sitemap:");
const sm = sitemap();
console.log(`✓ Total sitemap URLs: ${sm.length}`);

if (sm.length > 50000) {
  console.error(`❌ FAILED: Sitemap exceeds 50,000 URLs limit (found: ${sm.length})`);
  process.exit(1);
} else {
  console.log(`✓ Sitemap comfortably within Google limit of 50,000 URLs`);
}

const pricesEntry = sm.find((e) => e.url.endsWith("/prices"));
if (pricesEntry) {
  console.error(`❌ FAILED: Sitemap contains non-canonical 301 route: ${pricesEntry.url}`);
  process.exit(1);
} else {
  console.log(`✓ Sitemap contains no non-canonical /prices route (only /pricing)`);
}

const nearKatlehongRoutes = sm.filter((e) => e.url.includes("near-katlehong"));
if (nearKatlehongRoutes.length > 0) {
  console.error(`❌ FAILED: Found ${nearKatlehongRoutes.length} 'near-katlehong' routes in sitemap!`);
  process.exit(1);
} else {
  console.log(`✓ Zero 'near-katlehong' routes in sitemap (strict factory location rule enforced)`);
}

// 2. Slug Parser & New Geo Nodes
console.log("\n[2] Verifying Parser on Geo Nodes & Aliases:");
const bryanstonParsed = parseServiceLocationSlug("aluminium-front-doors-near-bryanston");
if (!bryanstonParsed || bryanstonParsed.locationSlug !== "bryanston") {
  console.error("❌ FAILED: Could not parse bryanston slug");
  process.exit(1);
}
console.log(`✓ Bryanston geo node parsed correctly: ${bryanstonParsed.serviceTitle} near ${bryanstonParsed.locationName}`);

const waterfallParsed = parseServiceLocationSlug("aluminium-windows-near-waterfall");
if (!waterfallParsed || waterfallParsed.locationSlug !== "waterfall") {
  console.error("❌ FAILED: Could not parse waterfall slug");
  process.exit(1);
}
console.log(`✓ Waterfall geo node parsed correctly: ${waterfallParsed.serviceTitle} near ${waterfallParsed.locationName}`);

const katlehongParsed = parseServiceLocationSlug("security-gates-in-katlehong");
if (!katlehongParsed || katlehongParsed.preposition !== "in") {
  console.error("❌ FAILED: Katlehong did not enforce 'in' preposition");
  process.exit(1);
}
console.log(`✓ Katlehong enforced preposition: ${katlehongParsed.preposition}`);

// 3. Taxonomy & Pricing Data Sanity
console.log("\n[3] Verifying Taxonomy Fixes:");
const balustrade = getTaxonomyServiceBySlug("steel-balustrades");
if (!balustrade || balustrade.startingPriceDisplay !== "From R1,450") {
  console.error(`❌ FAILED: steel-balustrades price is not 'From R1,450' (found: ${balustrade?.startingPriceDisplay})`);
  process.exit(1);
}
console.log(`✓ steel-balustrades pricing typo corrected: ${balustrade.startingPriceDisplay}`);

const trellis = getTaxonomyServiceBySlug("trellis-doors");
if (!trellis || trellis.slug !== "trellis-doors") {
  console.error(`❌ FAILED: trellis-doors slug mismatch`);
  process.exit(1);
}
console.log(`✓ trellis-doors canonical slug verified: ${trellis.slug}`);

console.log("\n==================================================");
console.log("ALL SEO INTEGRITY VERIFICATIONS PASSED 100%!");
console.log("==================================================");
