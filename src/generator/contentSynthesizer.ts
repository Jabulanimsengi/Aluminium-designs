import { ServiceObject, ServiceFAQ } from '../types/service';
import { SALocationObject } from '../types/location';
import { LocalizedPageContent, BreadcrumbItem } from '../types/page';
import { SchemaGenerator } from './schemaGenerator';
import { InternalLinkingEngine } from './internalLinking';

export class ContentSynthesizer {
  private static siteDomain = 'https://aluminiumandsteelsa.co.za';

  /**
   * Helper to slugify any text to clean URL safe format.
   */
  public static slugify(text: string): string {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }

  /**
   * Identifies whether an area name represents a shopping centre / mall.
   */
  public static isShoppingCentre(name: string): boolean {
    const shoppingKeywords = [
      'mall', 'shopping', 'centre', 'center', 'square', 'plaza', 'galleries',
      'crossing', 'junction', 'boulevard', 'hyper', 'market'
    ];
    const lower = name.toLowerCase();
    return shoppingKeywords.some(kw => lower.includes(kw));
  }

  /**
   * Generates a fully localized, SEO-optimized page object for a city, suburb, township, or shopping centre.
   * STRICT SEO RULE: The URL slug strictly matches the H1: [service-slug]-in-[area-slug]
   */
  public static synthesizePage(
    service: ServiceObject,
    location: SALocationObject,
    suburb?: string
  ): LocalizedPageContent {
    const isSuburbPage = Boolean(suburb && suburb.trim().length > 0);
    const areaName = isSuburbPage ? suburb! : location.name;
    const areaSlug = this.slugify(areaName);
    const isMall = this.isShoppingCentre(areaName);

    // EXACT 1-to-1 URL and H1 Matching Pattern
    // Example: "Aluminium Windows in Katlehong" -> "/services/aluminium-windows-in-katlehong"
    const h1 = `${service.serviceName} in ${areaName}`;
    const pageSlug = `${service.slug}-in-${areaSlug}`;
    const urlPath = `/services/${pageSlug}`;
    const canonicalUrl = `${this.siteDomain}${urlPath}`;

    // Categorize Service Areas and Shopping Centres in this location
    const allAreas = location.suburbsOrAreas || [];
    const shoppingCentresCovered = allAreas.filter(a => this.isShoppingCentre(a));
    const residentialAreasCovered = allAreas.filter(a => !this.isShoppingCentre(a));

    // Breadcrumbs
    const breadcrumbs = this.generateBreadcrumbs(service, location, areaName, isSuburbPage, urlPath);

    // Meta Title (SERP Display: 40-65 chars)
    const metaTitle = isSuburbPage
      ? `${h1} | Quality Installation & Quotes`
      : `${h1}, Gauteng | Free Local Measuring & Quotes`;

    // Dynamic Meta Description (SERP: 130-160 chars)
    const metaDescription = this.generateMetaDescription(service, areaName, location, isMall);

    // Localized Hero Section (H1 strictly matches headline)
    const hero = {
      badge: isMall ? `Commercial & Retail ${service.serviceName}` : `Top-Rated ${service.serviceName} in ${areaName}`,
      headline: h1, // Exact match to URL
      subheadline: isMall
        ? `Professional custom ${service.serviceName.toLowerCase()} for retail stores, business units, and properties near ${areaName}.`
        : `Custom-manufactured ${service.serviceName.toLowerCase()} with friendly measuring, top security, and expert local installation in ${areaName}.`,
      primaryCtaText: 'Request Free Quote',
      primaryCtaAction: 'OPEN_QUOTE_MODAL' as const,
      secondaryCtaText: 'Chat on WhatsApp',
      secondaryCtaAction: 'OPEN_WHATSAPP_MODAL' as const,
      heroImage: service.hero.heroImage
    };

    // Overview Content with Shopping Centres & Service Areas Integration
    const overviewParagraphs = this.generateOverviewParagraphs(
      service,
      areaName,
      location,
      shoppingCentresCovered,
      residentialAreasCovered,
      isMall
    );

    // Localized FAQs
    const localizedFaqs = this.generateLocalizedFaqs(service.faqs, areaName, location, isMall);

    // Structured Data (JSON-LD)
    const structuredDataJsonLd = SchemaGenerator.generatePageSchemas(
      service,
      location,
      areaName,
      canonicalUrl,
      breadcrumbs,
      localizedFaqs
    );

    // Internal Linking Mesh
    const internalLinks = {
      parentCityHub: isSuburbPage
        ? {
            title: `${service.serviceName} in ${location.name}`,
            url: `/services/${service.slug}-in-${this.slugify(location.name)}`,
            badge: 'City Main Hub'
          }
        : undefined,
      suburbClusterLinks: InternalLinkingEngine.generateSuburbLinks(service, location, areaSlug, 8),
      relatedServicesInArea: InternalLinkingEngine.generateCrossServiceLinks(service, location, areaSlug, areaName, 4)
    };

    return {
      url: urlPath,
      h1,
      serviceSlug: service.slug,
      locationSlug: location.slug,
      suburbSlug: isSuburbPage ? areaSlug : undefined,
      areaName,
      isSuburbPage,
      breadcrumbs,
      metaTitle,
      metaDescription,
      canonicalUrl,
      keywords: [
        `${service.serviceName.toLowerCase()} in ${areaName.toLowerCase()}`,
        `custom ${service.serviceName.toLowerCase()} ${areaName.toLowerCase()}`,
        `${service.serviceName.toLowerCase()} ${location.name.toLowerCase()}`,
        `${service.serviceName.toLowerCase()} installers near me`
      ],
      openGraph: {
        title: metaTitle,
        description: metaDescription,
        image: `${this.siteDomain}${service.hero.heroImage}`,
        url: canonicalUrl,
        type: 'website'
      },
      hero,
      overview: {
        heading: `Custom ${service.serviceName} for Properties in ${areaName}`,
        paragraphs: overviewParagraphs,
        specifications: service.overview.specifications
      },
      serviceAreasCovered: residentialAreasCovered.length > 0 ? residentialAreasCovered : [areaName],
      shoppingCentresCovered: shoppingCentresCovered.length > 0 ? shoppingCentresCovered : [areaName],
      features: service.features,
      processSteps: service.process.steps,
      faqs: localizedFaqs,
      internalLinks,
      contact: {
        dialingCode: location.dialingCode,
        formattedPhone: `${location.dialingCode} 450 8899`,
        whatsappNumber: '+27 82 450 8899',
        serviceAreaName: `${areaName}, ${location.name}`,
        nearbyLandmarks: shoppingCentresCovered.slice(0, 4)
      },
      structuredDataJsonLd
    };
  }

  private static generateBreadcrumbs(
    service: ServiceObject,
    location: SALocationObject,
    areaName: string,
    isSuburbPage: boolean,
    urlPath: string
  ): BreadcrumbItem[] {
    const cityHubUrl = `/services/${service.slug}-in-${this.slugify(location.name)}`;

    const items: BreadcrumbItem[] = [
      { name: 'Home', url: '/', position: 1 },
      { name: 'Services', url: '/services', position: 2 },
      { name: `${service.serviceName} in ${location.name}`, url: cityHubUrl, position: 3 }
    ];

    if (isSuburbPage) {
      items.push({ name: `${service.serviceName} in ${areaName}`, url: urlPath, position: 4 });
    }

    return items;
  }

  private static generateMetaDescription(
    service: ServiceObject,
    areaName: string,
    location: SALocationObject,
    isMall: boolean
  ): string {
    const cat = service.category.toLowerCase();
    let actionHook = 'custom fabrication, friendly measuring & local installation';

    if (cat.includes('security')) {
      actionHook = 'solid steel security, tamper-proof locks & fast fitting';
    } else if (cat.includes('repairs')) {
      actionHook = 'mobile repair vans, roller replacement & same-day response';
    } else if (cat.includes('doors')) {
      actionHook = 'smooth sliding tracks, safety glass & custom sizing';
    }

    const contextPrefix = isMall ? `Serving retail shops and properties at ${areaName}` : `Get durable ${service.serviceName.toLowerCase()} in ${areaName}, ${location.name}`;
    const desc = `${contextPrefix}. Free on-site quotes, ${actionHook}. Call ${location.dialingCode} 450 8899 today!`;

    return desc.length > 160 ? `${desc.substring(0, 157)}...` : desc;
  }

  private static generateOverviewParagraphs(
    service: ServiceObject,
    areaName: string,
    location: SALocationObject,
    shoppingCentres: string[],
    residentialAreas: string[],
    isMall: boolean
  ): string[] {
    const mallMention = shoppingCentres.length > 0
      ? `We also provide dedicated commercial and residential service around major shopping complexes and retail centres including ${shoppingCentres.slice(0, 4).join(', ')}.`
      : '';

    const residentialMention = residentialAreas.length > 0
      ? `Our mobile installation teams operate daily across ${areaName} and nearby suburbs such as ${residentialAreas.slice(0, 5).join(', ')}.`
      : `Our mobile teams deliver prompt measuring and installation across all residential and commercial addresses in ${areaName}.`;

    if (isMall) {
      return [
        `Looking for professional ${service.serviceName.toLowerCase()} for your retail shop, showroom, or business premises at ${areaName}? We supply, fabricate, and install high-durability solutions tailored to high-traffic commercial and retail environments.`,
        `In addition to serving properties at ${areaName}, our service area covers surrounding ${location.name} neighborhoods and shopping centres. Every installation is backed by top safety ratings and our workmanship warranty.`
      ];
    }

    return [
      `Looking for reliable, top-quality ${service.serviceName.toLowerCase()} in ${areaName}? We build and install custom-fit solutions designed to withstand local Gauteng weather while enhancing the security, style, and value of your property.`,
      `${residentialMention} ${mallMention} Every project includes free on-site measuring, high-grade materials, and full guarantee.`
    ];
  }

  private static generateLocalizedFaqs(
    baseFaqs: ServiceFAQ[],
    areaName: string,
    location: SALocationObject,
    isMall: boolean
  ): ServiceFAQ[] {
    const localized = baseFaqs.map(faq => ({
      question: faq.question,
      answer: `${faq.answer} We offer direct measuring and installation for customers in ${areaName} and surrounding ${location.name} areas.`
    }));

    localized.push({
      question: isMall
        ? `Do you provide after-hours installation for retail shops at ${areaName}?`
        : `How do I request a free quote for ${areaName}?`,
      answer: isMall
        ? `Yes, we offer flexible evening and weekend fitting for retail stores and business units in and around ${areaName} to minimize trading disruptions.`
        : `Simply click "Request Free Quote" or chat with us on WhatsApp. Our local team will take down your requirements and schedule a free on-site measuring visit in ${areaName}.`
    });

    return localized;
  }
}
