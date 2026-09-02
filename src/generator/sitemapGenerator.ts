import { allCoreServices } from '../data/services/index';
import { allSouthAfricaLocations } from '../data/locations/index';
import { ContentSynthesizer } from './contentSynthesizer';

export interface SitemapFileResult {
  filename: string;
  xmlContent: string;
  urlCount: number;
}

export class SitemapGenerator {
  public static getBaseUrl(): string {
    const host = process.env.INDEXNOW_HOST || 'www.aluminiumdesigns.co.za';
    return host.startsWith('http') ? host : `https://${host}`;
  }
  private static maxUrlsPerSitemap = 5000;

  private static slugify(text: string): string {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }

  /**
   * Generates complete partitioned XML sitemaps, sitemap-index.xml, and robots.txt.
   */
  public static generateAllSitemaps(): {
    sitemaps: SitemapFileResult[];
    sitemapIndexXml: string;
    robotsTxt: string;
    totalUrls: number;
  } {
    const urls: { loc: string; lastmod: string; changefreq: string; priority: string }[] = [];
    const seenUrls = new Set<string>();
    const today = new Date().toISOString().slice(0, 10);
    const baseUrl = this.getBaseUrl();

    for (const service of allCoreServices) {
      for (const loc of allSouthAfricaLocations) {
        // 1. Province / Regional / City Main Hub Page
        const hubSlug = this.slugify(loc.name);
        const hubLocUrl = `${baseUrl}/services/${service.slug}-near-${hubSlug}`;
        
        const priority = loc.type === 'province' || loc.type === 'region'
          ? '1.0'
          : '0.9';

        if (!seenUrls.has(hubLocUrl)) {
          seenUrls.add(hubLocUrl);
          urls.push({
            loc: hubLocUrl,
            lastmod: today,
            changefreq: 'weekly',
            priority
          });
        }

        // 2. Suburb / Area Pages
        if (loc.suburbsOrAreas && loc.suburbsOrAreas.length > 0) {
          for (const suburb of loc.suburbsOrAreas) {
            const isMall = ContentSynthesizer.isShoppingCentre(suburb);
            
            // SEO RULE: Only generate standalone shopping centre pages for commercial services
            if (isMall && !service.isCommercial && !service.isCommercialOnly) {
              continue;
            }

            const suburbSlug = this.slugify(suburb);
            const suburbUrl = `${baseUrl}/services/${service.slug}-near-${suburbSlug}`;

            if (!seenUrls.has(suburbUrl)) {
              seenUrls.add(suburbUrl);
              urls.push({
                loc: suburbUrl,
                lastmod: today,
                changefreq: 'monthly',
                priority: '0.8'
              });
            }
          }
        }
      }
    }

    const sitemaps: SitemapFileResult[] = [];
    const totalPartitions = Math.ceil(urls.length / this.maxUrlsPerSitemap);

    for (let i = 0; i < totalPartitions; i++) {
      const chunk = urls.slice(i * this.maxUrlsPerSitemap, (i + 1) * this.maxUrlsPerSitemap);
      const filename = `sitemap-gauteng-${i + 1}.xml`;
      const xmlContent = this.renderSitemapXml(chunk);

      sitemaps.push({
        filename,
        xmlContent,
        urlCount: chunk.length
      });
    }

    const sitemapIndexXml = this.renderSitemapIndexXml(sitemaps, today);
    const robotsTxt = this.renderRobotsTxt();

    return {
      sitemaps,
      sitemapIndexXml,
      robotsTxt,
      totalUrls: urls.length
    };
  }

  private static renderSitemapXml(
    urls: { loc: string; lastmod: string; changefreq: string; priority: string }[]
  ): string {
    const urlTags = urls
      .map(
        u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
      )
      .join('\n');

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlTags}
</urlset>`;
  }

  private static renderSitemapIndexXml(sitemaps: SitemapFileResult[], today: string): string {
    const baseUrl = this.getBaseUrl();
    const sitemapTags = sitemaps
      .map(
        s => `  <sitemap>
    <loc>${baseUrl}/${s.filename}</loc>
    <lastmod>${today}</lastmod>
  </sitemap>`
      )
      .join('\n');

    return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapTags}
</sitemapindex>`;
  }

  private static renderRobotsTxt(): string {
    const baseUrl = this.getBaseUrl();
    return `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap-index.xml
`;
  }
}
