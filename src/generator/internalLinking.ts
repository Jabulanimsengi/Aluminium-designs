import { ServiceObject } from '../types/service';
import { SALocationObject } from '../types/location';
import { InternalLinkItem } from '../types/page';
import { allCoreServices } from '../data/services/index';

export class InternalLinkingEngine {
  private static slugify(text: string): string {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }

  /**
   * Generates the province main hub link for any page.
   */
  public static generateProvinceHubLink(
    service: ServiceObject,
    provinceName: string = 'Gauteng'
  ): InternalLinkItem {
    const slug = this.slugify(provinceName);
    return {
      title: `${service.serviceName} Near ${provinceName}`,
      url: `/services/${service.slug}-near-${slug}`,
      badge: 'Province Main Hub'
    };
  }

  /**
   * Generates the regional hub link (e.g. East Rand, West Rand, Vaal) if applicable.
   */
  public static generateRegionalHubLink(
    service: ServiceObject,
    location: SALocationObject
  ): InternalLinkItem | undefined {
    const metro = (location.metroOrDistrict || '').toLowerCase();
    let regionSlug: string | undefined;
    let regionName: string | undefined;

    if (metro.includes('ekurhuleni') || metro.includes('east rand')) {
      regionSlug = 'east-rand';
      regionName = 'East Rand';
    } else if (metro.includes('west rand')) {
      regionSlug = 'west-rand';
      regionName = 'West Rand';
    } else if (metro.includes('sedibeng') || metro.includes('vaal')) {
      regionSlug = 'vaal';
      regionName = 'Vaal Triangle';
    }

    if (regionSlug && regionName && location.slug !== regionSlug) {
      return {
        title: `${service.serviceName} Near ${regionName}`,
        url: `/services/${service.slug}-near-${regionSlug}`,
        badge: 'Regional Hub'
      };
    }

    return undefined;
  }

  /**
   * Generates the parent city hub link for a suburb page.
   */
  public static generateParentCityLink(
    service: ServiceObject,
    location: SALocationObject
  ): InternalLinkItem {
    return {
      title: `${service.serviceName} Near ${location.name}`,
      url: `/services/${service.slug}-near-${this.slugify(location.name)}`,
      badge: 'Main City Hub'
    };
  }

  /**
   * Generates localized suburb and shopping centre links for a location.
   */
  public static generateSuburbLinks(
    service: ServiceObject,
    location: SALocationObject,
    currentAreaSlug?: string,
    limit: number = 8
  ): InternalLinkItem[] {
    if (!location.suburbsOrAreas || location.suburbsOrAreas.length === 0) {
      return [];
    }

    return location.suburbsOrAreas
      .map(suburb => {
        const slug = this.slugify(suburb);
        return {
          title: `${service.serviceName} Near ${suburb}`,
          url: `/services/${service.slug}-near-${slug}`,
          slug
        };
      })
      .filter(item => !currentAreaSlug || item.slug !== currentAreaSlug)
      .slice(0, limit)
      .map(({ title, url }) => ({ title, url }));
  }

  /**
   * Generates cross-service recommendations in the exact same location/suburb.
   */
  public static generateCrossServiceLinks(
    currentService: ServiceObject,
    location: SALocationObject,
    areaSlug?: string,
    areaName?: string,
    limit: number = 4
  ): InternalLinkItem[] {
    const targetAreaName = areaName || location.name;
    const targetAreaSlug = areaSlug || this.slugify(location.name);

    return allCoreServices
      .filter(srv => srv.slug !== currentService.slug)
      .slice(0, limit)
      .map(srv => ({
        title: `${srv.serviceName} Near ${targetAreaName}`,
        url: `/services/${srv.slug}-near-${targetAreaSlug}`,
        badge: srv.category
      }));
  }
}
