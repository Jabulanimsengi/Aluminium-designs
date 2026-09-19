import fs from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const appOutput = path.join(projectRoot, ".next", "server", "app");
const sitemapPath = path.join(appOutput, "sitemap.xml.body");
const canonicalOrigin = "https://www.aluminiumdesigns.co.za";

if (!fs.existsSync(sitemapPath)) {
  console.error("Missing .next sitemap output. Run npm run build first.");
  process.exit(1);
}

const sitemapXml = fs.readFileSync(sitemapPath, "utf8");
const sitemapPaths = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => {
  const url = new URL(match[1]);
  return normalizePath(url.pathname);
});
const sitemapSet = new Set(sitemapPaths);

const redirectSources = new Set([
  "/prices",
  "/services/trellis-doors-security-gates",
  "/services/trellis-security-gates",
  "/services/windows",
  "/services/partitions",
  "/services/shopfronts",
  "/services/custom",
  "/services/enclosures",
  "/services/repairs",
  "/services/patio-enclosures",
  "/services/fly-screens",
]);

function normalizePath(value) {
  const withoutQuery = value.split("#")[0].split("?")[0] || "/";
  if (withoutQuery === "/") return "/";
  return withoutQuery.replace(/\/+$/, "");
}

function htmlPathFor(urlPath) {
  if (urlPath === "/") return path.join(appOutput, "index.html");
  return path.join(appOutput, `${urlPath.replace(/^\//, "")}.html`);
}

function normalizeHref(rawHref) {
  const href = rawHref.replaceAll("&amp;", "&").trim();
  if (
    !href ||
    href.startsWith("#") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("javascript:")
  ) {
    return null;
  }

  try {
    const url = href.startsWith("http")
      ? new URL(href)
      : new URL(href, canonicalOrigin);
    if (url.origin !== canonicalOrigin) return null;
    return normalizePath(url.pathname);
  } catch {
    return null;
  }
}

const graph = new Map();
const inbound = new Map(sitemapPaths.map((urlPath) => [urlPath, new Set()]));
const missingOutputs = [];
const redirectLinks = [];
const brokenLinks = [];

for (const sourcePath of sitemapPaths) {
  const htmlPath = htmlPathFor(sourcePath);
  if (!fs.existsSync(htmlPath)) {
    missingOutputs.push(sourcePath);
    graph.set(sourcePath, new Set());
    continue;
  }

  const html = fs.readFileSync(htmlPath, "utf8");
  const targets = new Set(
    [...html.matchAll(/href=["']([^"']+)["']/g)]
      .map((match) => normalizeHref(match[1]))
      .filter(Boolean),
  );
  graph.set(sourcePath, targets);

  for (const targetPath of targets) {
    const isGeneratedRedirect =
      !sitemapSet.has(targetPath) &&
      (targetPath.startsWith("/locations/") ||
        targetPath.includes("-near-") ||
        targetPath.includes("-in-"));
    if (redirectSources.has(targetPath) || isGeneratedRedirect) {
      redirectLinks.push(`${sourcePath} -> ${targetPath}`);
      continue;
    }
    if (sitemapSet.has(targetPath)) {
      inbound.get(targetPath).add(sourcePath);
      continue;
    }

    if (
      targetPath.startsWith("/api/") ||
      targetPath.startsWith("/_next/") ||
      targetPath.startsWith("/images/") ||
      targetPath.startsWith("/admin") ||
      targetPath === "/manifest.webmanifest" ||
      /\.(?:png|jpg|jpeg|webp|avif|svg|ico|css|js|woff2?)$/i.test(targetPath)
    ) {
      continue;
    }

    if (!fs.existsSync(htmlPathFor(targetPath)) && !redirectSources.has(targetPath)) {
      brokenLinks.push(`${sourcePath} -> ${targetPath}`);
    }
  }
}

const orphaned = sitemapPaths.filter(
  (urlPath) => urlPath !== "/" && (inbound.get(urlPath)?.size || 0) === 0,
);
const localServicePaths = sitemapPaths.filter(
  (urlPath) =>
    !urlPath.startsWith("/services/") &&
    !urlPath.startsWith("/locations/") &&
    (urlPath.includes("-near-") || urlPath.includes("-in-")),
);
const weakLocalPages = localServicePaths.filter(
  (urlPath) => (inbound.get(urlPath)?.size || 0) < 2,
);

const depths = new Map([["/", 0]]);
const queue = ["/"];
while (queue.length) {
  const sourcePath = queue.shift();
  const nextDepth = depths.get(sourcePath) + 1;
  for (const targetPath of graph.get(sourcePath) || []) {
    if (!sitemapSet.has(targetPath) || depths.has(targetPath)) continue;
    depths.set(targetPath, nextDepth);
    queue.push(targetPath);
  }
}
const unreachable = sitemapPaths.filter((urlPath) => !depths.has(urlPath));
const maxDepth = Math.max(...depths.values());

console.log(`Sitemap pages: ${sitemapPaths.length}`);
console.log(`Internal edges between sitemap pages: ${[...graph.values()].reduce((sum, links) => sum + [...links].filter((target) => sitemapSet.has(target)).length, 0)}`);
console.log(`Orphaned sitemap pages: ${orphaned.length}`);
console.log(`Local pages with fewer than two distinct inbound sources: ${weakLocalPages.length}`);
console.log(`Maximum click depth from home: ${maxDepth}`);
console.log(`Redirecting internal links: ${redirectLinks.length}`);
console.log(`Broken internal links: ${brokenLinks.length}`);

const failures = [
  ["Missing static outputs", missingOutputs],
  ["Orphaned sitemap pages", orphaned],
  ["Weak local pages", weakLocalPages],
  ["Unreachable sitemap pages", unreachable],
  ["Redirecting internal links", redirectLinks],
  ["Broken internal links", brokenLinks],
].filter(([, items]) => items.length > 0);

if (maxDepth > 3) {
  failures.push(["Click depth exceeds 3", [`maximum depth: ${maxDepth}`]]);
}

if (failures.length) {
  for (const [label, items] of failures) {
    console.error(`\n${label} (${items.length})`);
    for (const item of items.slice(0, 25)) console.error(`- ${item}`);
  }
  process.exit(1);
}

console.log("Internal-link audit passed.");
