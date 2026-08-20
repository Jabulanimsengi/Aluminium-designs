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
   * Generates the parent city hub link for a suburb page.
   */
  public static generateParentCityLink(
    service: ServiceObject,
    location: SALocationObject
  ): InternalLinkItem {
    return {
      title: `${service.serviceName} in ${location.name}`,
      url: `/services/${service.slug}-in-${this.slugify(location.name)}`,
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
          title: `${service.serviceName} in ${suburb}`,
          url: `/services/${service.slug}-in-${slug}`,
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
        title: `${srv.serviceName} in ${targetAreaName}`,
        url: `/services/${srv.slug}-in-${targetAreaSlug}`,
        badge: srv.category
      }));
  }
}
