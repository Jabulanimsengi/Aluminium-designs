import { services } from "../src/data/services";
import { slugify } from "../src/lib/site";

function isRepairService(serviceSlugOrTitle: string): boolean {
  const lower = serviceSlugOrTitle.toLowerCase();
  return (
    lower.includes("repair") ||
    lower.includes("replacement") ||
    lower === "glass-replacement"
  );
}

function toSingularServiceSlug(serviceSlugOrTitle: string): string {
  const slug = slugify(serviceSlugOrTitle);
  if (isRepairService(slug)) {
    return slug;
  }
  return slug
    .replace(/-windows$/, "-window")
    .replace(/-doors$/, "-door")
    .replace(/-gates$/, "-gate")
    .replace(/-motors$/, "-motor")
    .replace(/-bars$/, "-bar")
    .replace(/-carports$/, "-carport")
    .replace(/-balustrades$/, "-balustrade")
    .replace(/-staircases$/, "-staircase")
    .replace(/-sheds$/, "-shed")
    .replace(/-skylights$/, "-skylight")
    .replace(/-awnings$/, "-awning")
    .replace(/-pergolas$/, "-pergola")
    .replace(/-shopfronts$/, "-shopfront")
    .replace(/-gutters$/, "-gutter")
    .replace(/-partitions$/, "-partition")
    .replace(/-screens$/, "-screen")
    .replace(/-enclosures$/, "-enclosure")
    .replace(/-conversions$/, "-conversion")
    .replace(/-rooms-saunas$/, "-room")
    .replace(/-rooms$/, "-room");
}

function getCanonicalServiceLocationSlug(serviceSlugOrTitle: string, locationSlug: string): string {
  const locSlug = locationSlug.toLowerCase();
  const slug = slugify(serviceSlugOrTitle);

  if (isRepairService(slug)) {
    return `${slug}-near-${locSlug}`;
  }

  const singular = toSingularServiceSlug(slug);
  return `${singular}-installation-near-${locSlug}`;
}

console.log("Testing all 38 services with getCanonicalServiceLocationSlug for Sandton and Katlehong:\n");

for (const srv of services) {
  const sandtonSlug = getCanonicalServiceLocationSlug(srv.title, "sandton");
  const katlehongSlug = getCanonicalServiceLocationSlug(srv.title, "katlehong");
  const isRep = isRepairService(srv.title);
  console.log(`${srv.id} (${isRep ? "REPAIR" : "INSTALL"})`);
  console.log(`  Sandton:   ${sandtonSlug}`);
  console.log(`  Katlehong: ${katlehongSlug}\n`);
}
