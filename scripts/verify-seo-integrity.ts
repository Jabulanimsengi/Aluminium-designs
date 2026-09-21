import sitemap from "../src/app/sitemap";
import { getLocationServicePage } from "../src/data/location-service-pages";
import { servicePages } from "../src/data/service-pages";
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
const inKatlehongRoutes = sm.filter((e) => e.url.includes("-in-katlehong"));
if (nearKatlehongRoutes.length === 0 || inKatlehongRoutes.length > 0) {
  console.error("❌ FAILED: Katlehong sitemap routes are not consistently targeting 'near'.");
  process.exit(1);
} else {
  console.log(`✓ ${nearKatlehongRoutes.length} Katlehong routes consistently target 'near'`);
}

const localServiceEntries = sm.flatMap((entry) => {
  const slug = new URL(entry.url).pathname.split("/").filter(Boolean).at(-1) || "";
  const parsed = parseServiceLocationSlug(slug);
  return parsed ? [{ entry, parsed }] : [];
});

for (const { parsed } of localServiceEntries) {
  if (!parsed.canonicalSlug.includes("-near-") || !parsed.h1.includes(" Near ")) {
    console.error(`❌ FAILED: Near intent is missing from ${parsed.canonicalSlug}`);
    process.exit(1);
  }

  const page = getLocationServicePage(parsed.locationSlug, parsed.canonicalSlug);
  if (!page || page.localFaqs.length < 8) {
    console.error(`❌ FAILED: ${parsed.canonicalSlug} has fewer than 8 FAQs`);
    process.exit(1);
  }
  if (page.hero.headline !== parsed.h1 || page.seo.titleTag !== parsed.h1) {
    console.error(`❌ FAILED: H1/title mismatch for ${parsed.canonicalSlug}`);
    process.exit(1);
  }
  if (!page.seo.metaDescription.startsWith(`${parsed.h1}:`)) {
    console.error(`❌ FAILED: Meta description is not aligned with the H1 for ${parsed.canonicalSlug}`);
    process.exit(1);
  }
  if (page.localFaqs.some((faq) => !faq.question.toLowerCase().includes(parsed.locationName.toLowerCase()))) {
    console.error(`❌ FAILED: A FAQ does not support the local intent for ${parsed.canonicalSlug}`);
    process.exit(1);
  }
}
console.log(`✓ ${localServiceEntries.length} local service pages align URL, H1, title, meta description, and 8+ FAQs`);

for (const page of Object.values(servicePages)) {
  if (page.faqs.length < 8) {
    console.error(`❌ FAILED: Core service page ${page.slug} has fewer than 8 FAQs`);
    process.exit(1);
  }
  if (!page.seo.titleTag.startsWith(page.hero.headline)) {
    console.error(`❌ FAILED: Core service title is not aligned with its H1 for ${page.slug}`);
    process.exit(1);
  }
  if (!page.seo.metaDescription.startsWith(`${page.hero.headline}:`)) {
    console.error(`❌ FAILED: Core service meta description is not aligned with its H1 for ${page.slug}`);
    process.exit(1);
  }
}
console.log(`✓ ${Object.keys(servicePages).length} core service pages align H1, title, meta description, and 8+ FAQs`);

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

const katlehongParsed = parseServiceLocationSlug("security-gates-near-katlehong");
if (!katlehongParsed || katlehongParsed.preposition !== "near") {
  console.error("❌ FAILED: Katlehong did not retain the 'near' preposition");
  process.exit(1);
}
console.log(`✓ Katlehong preposition verified: ${katlehongParsed.preposition}`);

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
