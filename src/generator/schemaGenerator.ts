import { ServiceObject, ServiceFAQ } from '../types/service';
import { SALocationObject } from '../types/location';
import { BreadcrumbItem } from '../types/page';

export class SchemaGenerator {
  private static baseUrl = 'https://aluminiumandsteelsa.co.za';

  /**
   * Generates complete Schema.org JSON-LD payload containing LocalBusiness, FAQPage, and BreadcrumbList schemas.
   */
  public static generatePageSchemas(
    service: ServiceObject,
    location: SALocationObject,
    areaName: string,
    canonicalUrl: string,
    breadcrumbs: BreadcrumbItem[],
    localizedFaqs: ServiceFAQ[]
  ): Record<string, any>[] {
    const localBusinessSchema = this.generateLocalBusinessSchema(service, location, areaName, canonicalUrl);
    const faqSchema = this.generateFaqSchema(localizedFaqs);
    const breadcrumbSchema = this.generateBreadcrumbSchema(breadcrumbs);

    return [localBusinessSchema, faqSchema, breadcrumbSchema];
  }

  private static generateLocalBusinessSchema(
    service: ServiceObject,
    location: SALocationObject,
    areaName: string,
    canonicalUrl: string
  ): Record<string, any> {
    const phone = `${location.dialingCode} 450 8899`;

    return {
      "@context": "https://schema.org",
      "@type": "HomeAndConstructionBusiness",
      "@id": `${canonicalUrl}#localbusiness`,
      "name": `${service.serviceName} ${areaName}`,
      "image": `${this.baseUrl}${service.hero.heroImage}`,
      "url": canonicalUrl,
      "telephone": phone,
      "priceRange": "R$",
      "currenciesAccepted": "ZAR",
      "paymentAccepted": "EFT, Credit Card, Cash",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": `${areaName} Central`,
        "addressLocality": areaName,
        "addressRegion": location.province,
        "postalCode": location.postalCodes[0] || "2000",
        "addressCountry": "ZA"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": location.coordinates.latitude,
        "longitude": location.coordinates.longitude
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": `${areaName}, ${location.province}`
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "07:30",
          "closes": "17:30"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "08:00",
          "closes": "13:00"
        }
      ],
      "makesOffer": {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.serviceName,
          "description": service.tagline
        }
      }
    };
  }

  private static generateFaqSchema(faqs: ServiceFAQ[]): Record<string, any> {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
  }

  private static generateBreadcrumbSchema(breadcrumbs: BreadcrumbItem[]): Record<string, any> {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map(item => ({
        "@type": "ListItem",
        "position": item.position,
        "name": item.name,
        "item": item.url
      }))
    };
  }
}
