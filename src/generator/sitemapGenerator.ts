import { allCoreServices } from '../data/services/index';
import { allSouthAfricaLocations } from '../data/locations/index';

export interface SitemapFileResult {
  filename: string;
  xmlContent: string;
  urlCount: number;
}

export class SitemapGenerator {
  private static baseUrl = 'https://aluminiumandsteelsa.co.za';
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
    const today = new Date().toISOString().slice(0, 10);

    for (const service of allCoreServices) {
      for (const loc of allSouthAfricaLocations) {
        // 1. City / Main Hub Page (High Priority)
        const citySlug = this.slugify(loc.name);
        urls.push({
          loc: `${this.baseUrl}/services/${service.slug}-in-${citySlug}`,
          lastmod: today,
          changefreq: 'weekly',
          priority: '0.9'
        });

        // 2. Suburb / Area / Shopping Centre Pages
        if (loc.suburbsOrAreas && loc.suburbsOrAreas.length > 0) {
          for (const suburb of loc.suburbsOrAreas) {
            const suburbSlug = this.slugify(suburb);
            urls.push({
              loc: `${this.baseUrl}/services/${service.slug}-in-${suburbSlug}`,
              lastmod: today,
              changefreq: 'monthly',
              priority: '0.8'
            });
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
    const sitemapTags = sitemaps
      .map(
        s => `  <sitemap>
    <loc>${this.baseUrl}/${s.filename}</loc>
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
    return `User-agent: *
Allow: /

Sitemap: ${this.baseUrl}/sitemap-index.xml
`;
  }
}
