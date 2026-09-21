const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.aluminiumdesigns.co.za")
  .trim()
  .replace(/\/$/, "");
const INDEXNOW_KEY = "2dd5bed102f767224668a7ca8d8ba216";
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";
const KEY_LOCATION = `${SITE_URL}/${INDEXNOW_KEY}.txt`;
const MAX_URLS_PER_REQUEST = 10_000;

function sitemapUrls(xml) {
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/gs)].map((match) =>
    match[1]
      .replaceAll("&amp;", "&")
      .replaceAll("&lt;", "<")
      .replaceAll("&gt;", ">")
      .trim(),
  );
}

function validateUrls(urls) {
  const expectedHost = new URL(SITE_URL).host;
  const unique = [...new Set(urls)];

  if (unique.length === 0) {
    throw new Error("No canonical URLs were found in the sitemap.");
  }
  if (unique.length > MAX_URLS_PER_REQUEST) {
    throw new Error(`IndexNow accepts at most ${MAX_URLS_PER_REQUEST} URLs per request.`);
  }
  for (const value of unique) {
    const url = new URL(value);
    if (url.protocol !== "https:" || url.host !== expectedHost) {
      throw new Error(`Sitemap URL is outside the configured HTTPS host: ${url.host}`);
    }
  }

  return unique;
}

async function main() {
  const dryRun = process.argv.includes("--dry-run");
  const sitemapResponse = await fetch(`${SITE_URL}/sitemap.xml`, {
    headers: { "user-agent": "AluminiumDesigns-IndexNow/1.0" },
  });
  if (!sitemapResponse.ok) {
    throw new Error(`Unable to read the sitemap (HTTP ${sitemapResponse.status}).`);
  }

  const urls = validateUrls(sitemapUrls(await sitemapResponse.text()));
  if (dryRun) {
    console.log(`IndexNow dry run passed for ${urls.length} canonical URLs.`);
    return;
  }

  const keyResponse = await fetch(KEY_LOCATION, { cache: "no-store" });
  const hostedKey = keyResponse.ok ? (await keyResponse.text()).trim() : "";
  if (hostedKey !== INDEXNOW_KEY) {
    throw new Error(`IndexNow key verification failed (HTTP ${keyResponse.status}).`);
  }

  const response = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "content-type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: new URL(SITE_URL).host,
      key: INDEXNOW_KEY,
      keyLocation: KEY_LOCATION,
      urlList: urls,
    }),
  });

  if (![200, 202].includes(response.status)) {
    throw new Error(`IndexNow submission failed (HTTP ${response.status}).`);
  }

  console.log(`IndexNow accepted ${urls.length} canonical URLs (HTTP ${response.status}).`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});
