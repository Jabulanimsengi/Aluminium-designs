import { businessContact, siteUrl, whatsappQuoteUrl } from "@/lib/site";
import { allCoreServices } from "@/data/core-services";
import { getServicePresentation } from "@/data/servicePresentation";
import type { ServiceObject } from "@/types/service";

export interface ServicePageSeo {
  titleTag: string;
  metaDescription: string;
  keywords: string[];
  canonicalUrl: string;
  openGraphImage: string;
}

export interface ServicePageHero {
  headline: string;
  subheadline: string;
  badgeText: string;
  primaryCtaText: string;
  secondaryCtaText: string;
  secondaryCtaLink?: string;
}

export interface ServicePageOverview {
  heading: string;
  paragraphs: string[];
  keyFeaturesNotice: string;
}

export interface ServicePageBenefit {
  icon: string;
  title: string;
  description: string;
}

export interface ServicePageProductType {
  name: string;
  tagline: string;
  description: string;
  idealFor: string;
}

export interface ServicePageGlazingOption {
  name: string;
  description: string;
}

export interface ServicePageSpecItem {
  label: string;
  value: string;
}

export interface ServicePageStep {
  stepNumber: string;
  title: string;
  description: string;
}

export interface ServicePageReview {
  authorName: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
}

export interface ServicePageFaq {
  question: string;
  answer: string;
}

export interface ServicePageContent {
  id: string;
  slug: string;
  fullPageUrl: string;
  seo: ServicePageSeo;
  structuredDataJsonLd: Record<string, unknown>;
  hero: ServicePageHero;
  overview: ServicePageOverview;
  benefits: {
    title: string;
    items: ServicePageBenefit[];
  };
  productTypes: {
    title: string;
    description: string;
    items: ServicePageProductType[];
  };
  glazingOptions: {
    title: string;
    description: string;
    options: ServicePageGlazingOption[];
  };
  specifications: {
    title: string;
    items: ServicePageSpecItem[];
  };
  installationProcess: {
    title: string;
    steps: ServicePageStep[];
  };
  reviews: ServicePageReview[];
  faqs: ServicePageFaq[];
}

const supplementalFaqs: Record<string, ServicePageFaq[]> = {
  "aluminium-fly-screens": [
    {
      question: "Can fly screens be fitted to existing aluminium windows and sliding doors?",
      answer: "Yes. The screen frame is measured to the existing opening and can be made for common sliding, casement and door configurations. The survey confirms the track, handle clearance and whether a removable or sliding screen is the better fit.",
    },
    {
      question: "Which mesh is best for mosquitoes, pets and everyday ventilation?",
      answer: "Fine insect mesh is intended for flies and mosquitoes, while stronger pet-resistant mesh suits openings exposed to claws or frequent contact. We recommend the mesh after considering airflow, visibility and the way the opening is used.",
    },
    {
      question: "Can aluminium fly screens be removed for cleaning?",
      answer: "Removable screen panels can be lifted out for cleaning where the frame design permits it. Sliding and hinged door screens are cleaned in place with water, mild soap and a soft brush.",
    },
    {
      question: "Do fly screens reduce airflow or make a room darker?",
      answer: "All mesh reduces airflow and light slightly, but the effect depends on mesh density and colour. Standard insect mesh generally maintains good ventilation and visibility while blocking common flying insects.",
    },
  ],
  "frameless-shower-doors": [
    {
      question: "What glass thickness is used for frameless shower doors?",
      answer: "The appropriate toughened safety-glass thickness depends on panel size, support and door configuration. We confirm the glass and hardware specification after measuring the opening and checking how each panel will be restrained.",
    },
    {
      question: "Can a frameless shower door be fitted to an uneven wall or floor?",
      answer: "Minor variations can usually be accommodated with accurate glass sizing and suitable seals. Significant falls, bowed walls or loose tiles must be assessed before glass is ordered because toughened glass cannot be trimmed after manufacture.",
    },
    {
      question: "How do you stop water escaping from a frameless shower?",
      answer: "Panel overlap, door swing, floor fall, shower-head direction and clear seals all affect water control. Frameless systems are not completely watertight, but a well-planned layout greatly reduces splash outside the enclosure.",
    },
    {
      question: "Can I choose black, chrome or brass shower hardware?",
      answer: "Hardware finish options depend on the hinge, handle and support system selected. Available finishes are confirmed with the quotation so all visible fittings can be coordinated.",
    },
  ],
  "glass-patio-enclosures": [
    {
      question: "Do I need approval before enclosing a patio?",
      answer: "Approval requirements depend on the property, estate rules and whether the enclosure changes the building footprint or use of the room. Confirm municipal, body-corporate or homeowners-association requirements before fabrication begins.",
    },
    {
      question: "Can a glass patio enclosure keep out rain and winter drafts?",
      answer: "A correctly measured framed system with suitable drainage, seals and thresholds offers substantially better weather protection than an open patio. Performance depends on the existing roof, floor levels and exposure, which are checked during the survey.",
    },
    {
      question: "Should I choose sliding, stacking or fixed glass panels?",
      answer: "Sliding panels are practical where stacking space is limited; stacking systems open a larger portion of the patio; fixed panels suit areas that only need enclosure and light. The best layout depends on traffic flow, furniture and the available opening.",
    },
    {
      question: "Can you enclose a patio that already has a braai?",
      answer: "Potentially, but ventilation, heat clearances, smoke extraction and combustible materials must be assessed first. The enclosure should not proceed until the braai layout can be used safely and any approval requirements are understood.",
    },
  ],
  "sliding-door-repairs": [
    {
      question: "Why is my sliding door difficult to open or scraping on the track?",
      answer: "Common causes include worn rollers, dirt in the track, a damaged bottom rail, incorrect height adjustment or a frame that has moved out of square. A site inspection identifies the cause before parts are replaced.",
    },
    {
      question: "Can you replace sliding-door rollers without replacing the whole door?",
      answer: "Often, yes. If the frame, glass and track remain serviceable, the door can usually be removed so compatible rollers can be fitted and adjusted. Severe track or frame damage may require additional work.",
    },
    {
      question: "Can a damaged sliding-door track be repaired?",
      answer: "Minor damage may be corrected or covered with a suitable repair rail. A badly distorted, corroded or loose track may need partial or complete replacement after its dimensions and condition are checked.",
    },
    {
      question: "Do you repair sliding-door locks and handles?",
      answer: "Yes, subject to compatible parts being available. We identify the lock body, handle spacing and door profile before confirming whether the hardware can be serviced or should be replaced.",
    },
  ],
  "steel-to-aluminium-conversions": [
    {
      question: "Can old steel windows be replaced with aluminium without rebuilding the wall?",
      answer: "In many homes the steel frame can be carefully removed from the existing reveal and a made-to-measure aluminium frame installed. The survey checks the lintel, sill, plaster, tiles and fixing points before the removal method is confirmed.",
    },
    {
      question: "Will replacing steel windows damage plaster or bathroom tiles?",
      answer: "Careful cutting and staged removal can limit damage, but the condition of the embedded frame and surrounding finishes matters. The quotation should identify any likely plaster, paint or tile making-good before work starts.",
    },
    {
      question: "Is it better to replace all steel windows at once or room by room?",
      answer: "A full-house project can simplify colour matching and scheduling, while phased replacement spreads the cost. Openings are measured individually either way because dimensions often differ across an older property.",
    },
    {
      question: "What glass should I choose for replacement aluminium windows?",
      answer: "The choice depends on safety locations, opening size, privacy, heat and noise priorities. Safety glazing is specified where required, with laminated, toughened, tinted and double-glazed options considered for suitable openings.",
    },
  ],
};

function normalizedStartingPrice(srv: ServiceObject): string | undefined {
  return srv.pricingGuide?.estimatedStartingPrice?.replace(/^from\s+/i, "").trim();
}

function buildServiceTitleTag(pageTitle: string): string {
  const branded = `${pageTitle} Gauteng | Aluminium Designs`;
  return branded.length <= 60 ? branded : `${pageTitle} | Gauteng`;
}

function buildServiceMetaDescription(srv: ServiceObject, pageTitle: string): string {
  const raw = `${pageTitle}: ${srv.tagline} Custom measurement, written specifications, and quotes across Gauteng.`;
  if (raw.length <= 160) return raw;
  return `${raw.slice(0, 156).replace(/\s+\S*$/, "").replace(/[.,;:]$/, "")}…`;
}

function buildSharedIntentFaqs(srv: ServiceObject, serviceName: string): ServicePageFaq[] {
  const lowerName = serviceName.toLowerCase();
  const pluralSubject = /s$/i.test(serviceName);
  const doOrDoes = pluralSubject ? "do" : "does";
  const startPrice = normalizedStartingPrice(srv);
  const isRepair = /repair|replacement/.test(srv.slug);
  const isFence = /fencing/.test(srv.slug);
  const isGateOrSecurity = /gate|burglar-bar/.test(srv.slug);
  const isStructural = /carport|pergola|awning|skylight|staircase|balustrade|shed|welding|steel-works/.test(srv.slug);

  const priceAnswer = startPrice
    ? `Indicative pricing starts around ${startPrice} ${srv.pricingGuide?.priceUnit || ""}. The final price depends on measured dimensions, material specification, hardware, finish, access and any removal or preparation work. A written quotation confirms the full scope before work begins.`
    : `The price depends on measured dimensions, material specification, hardware, finish, access and any removal or preparation work. A written quotation confirms the full scope before work begins.`;

  const shared: ServicePageFaq[] = [
    {
      question: `How much ${doOrDoes} ${lowerName} cost in Gauteng?`,
      answer: priceAnswer,
    },
    {
      question: `What information do you need to quote ${lowerName}?`,
      answer: `Photos and approximate measurements help with an initial discussion, but a final quote may require an on-site assessment. We confirm dimensions, access, material and finish choices, existing damage, removal work and the installation address.`,
    },
    {
      question: `How long ${doOrDoes} ${lowerName} take?`,
      answer: isRepair
        ? `Timing depends on the fault, access and availability of compatible parts or glass. After assessment, the quotation confirms whether the work can be completed during one visit or requires parts to be ordered or fabricated.`
        : `Lead time depends on final measurements, material and hardware availability, finish selection and current workshop capacity. The expected manufacture and installation dates are confirmed in the written quotation rather than promised as a fixed universal timeframe.`,
    },
    {
      question: `What warranty applies to ${lowerName}?`,
      answer: `Warranty coverage varies by product, hardware, finish and type of work. The written quotation identifies the applicable manufacturer and workmanship coverage, exclusions and maintenance requirements before you approve the project.`,
    },
    {
      question: `Where in Gauteng do you provide ${lowerName}?`,
      answer: `We serve established hubs, suburbs and townships across Gauteng through scheduled site visits. Share the exact project address when enquiring so we can confirm coverage, access and appointment availability.`,
    },
    {
      question: `Do you provide ${lowerName} for homes and commercial properties?`,
      answer: `Yes. We assess houses, residential estates, complexes, shops, offices and other commercial properties. The design, specification and work plan are adapted to the property type, intended use and site-access requirements.`,
    },
  ];

  if (isRepair) {
    shared.push(
      {
        question: `Is ${lowerName} worth repairing or should it be replaced?`,
        answer: `Repair usually makes sense when the main frame or structure is sound and compatible parts are available. Replacement may be more economical when damage is extensive, repeated, unsafe or caused by a badly distorted frame. We explain both options after inspection.`,
      },
      {
        question: `Can you identify the required parts from a photo?`,
        answer: `A clear photo can help narrow down the likely component, but profiles, locks, rollers and seals often look similar. Measurements or an on-site inspection may still be needed before a compatible part can be confirmed.`,
      },
    );
  } else if (isFence || isGateOrSecurity) {
    shared.push(
      {
        question: `How do I choose the right security level for ${lowerName}?`,
        answer: `Start with the opening or boundary, likely attack points, visibility, everyday access and any estate requirements. Material thickness, spacing, locks, hinges, posts and anchoring should be specified as one system rather than judged by appearance alone.`,
      },
      {
        question: `Can ${lowerName} be made to match my property?`,
        answer: `Yes. Dimensions, layout, colour and finish can be coordinated with the property, subject to the security and structural requirements of the installation. Available options are documented with the quotation.`,
      },
    );
  } else if (isStructural) {
    shared.push(
      {
        question: `Does ${lowerName} require foundations or approval?`,
        answer: `That depends on the structure, loading, attachment method, property rules and local approval requirements. The site assessment identifies support conditions, drainage, clearances and any information that should be confirmed with the municipality, engineer or estate.`,
      },
      {
        question: `How is ${lowerName} protected from corrosion and weather?`,
        answer: `The appropriate preparation and finish depend on whether the installation is indoors, exposed outdoors or near aggressive moisture. The quotation should state the proposed material, surface preparation, coating and maintenance requirements.`,
      },
    );
  } else {
    shared.push(
      {
        question: `Can ${lowerName} be made for a non-standard opening?`,
        answer: `Yes. Each opening can be measured individually and the configuration adjusted for size, operation, glass or infill, hardware, drainage and surrounding finishes. Feasibility is confirmed before manufacture.`,
      },
      {
        question: `Can you remove the existing frame or fixture during installation?`,
        answer: `Removal can be included after the existing installation and surrounding plaster, tiles or brickwork are assessed. The quotation identifies removal, disposal and likely making-good so those items are not hidden surprises.`,
      },
    );
  }

  return shared;
}

function generateServiceIntentFaqs(srv: ServiceObject): ServicePageFaq[] {
  const presentation = getServicePresentation(srv.slug);
  const candidates = [
    ...(supplementalFaqs[srv.slug] || []),
    ...(Array.isArray(srv.faqs) ? srv.faqs : []),
    ...buildSharedIntentFaqs(srv, presentation.pageTitle),
  ];
  const seen = new Set<string>();

  return candidates
    .filter((faq) => {
      const key = faq.question.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .slice(0, 10);
}

function convertServicePage(srv: ServiceObject): ServicePageContent {
  const presentation = getServicePresentation(srv.slug);
  // Sanitize legacy placeholder domains — never leak example.com / old domain.
  const clean = (url: string) =>
    url
      .replaceAll("https://example.com", siteUrl)
      .replaceAll("http://example.com", siteUrl)
      .replaceAll("https://aluminiumandsteelsa.co.za", siteUrl)
      .replaceAll("http://aluminiumandsteelsa.co.za", siteUrl);
  // OG must always resolve to a real file (hero image), never /images/og/*.jpg.
  const ogImage = srv.hero.heroImage.startsWith("/images/services/")
    ? `${siteUrl}${srv.hero.heroImage}`
    : clean(srv.seo.openGraphImage);
  // Normalize brand in structured data.
  const rawLd = JSON.stringify(srv.structuredDataJsonLd).replaceAll(
    "Aluminium Windows SA",
    businessContact.name,
  );
  const structuredDataJsonLd = JSON.parse(
    clean(rawLd),
  ) as ServiceObject["structuredDataJsonLd"];
  return {
    id: srv.slug,
    slug: srv.slug,
    fullPageUrl: `${siteUrl}/services/${srv.slug}`,
    seo: {
      titleTag: buildServiceTitleTag(presentation.pageTitle),
      metaDescription: buildServiceMetaDescription(srv, presentation.pageTitle),
      keywords: Array.from(new Set([
        presentation.pageTitle.toLowerCase(),
        `${presentation.pageTitle.toLowerCase()} Gauteng`,
        ...srv.seo.keywords,
      ])),
      canonicalUrl: `${siteUrl}/services/${srv.slug}`,
      openGraphImage: ogImage,
    },
    structuredDataJsonLd,
    hero: {
      headline: presentation.pageTitle,
      subheadline: srv.hero.subheadline,
      badgeText: srv.hero.badge,
      primaryCtaText: srv.hero.primaryCtaText,
      secondaryCtaText: srv.hero.secondaryCtaText,
      secondaryCtaLink:
        srv.hero.secondaryCtaLink === "#whatsapp"
          ? whatsappQuoteUrl
          : srv.hero.secondaryCtaLink || "#specs",
    },
    overview: {
      heading: srv.overview.heading,
      paragraphs: srv.overview.paragraphs,
      keyFeaturesNotice: "Custom manufactured to applicable SANS standards with free on-site measuring.",
    },
    benefits: {
      title: "Why Choose Us",
      items: srv.features.map((f) => ({ icon: f.icon, title: f.title, description: f.description })),
    },
    productTypes: {
      title: "Options & Styles",
      description: "Available configurations for this service.",
      items: [],
    },
    glazingOptions: {
      title: "Glass & Performance",
      description: "Glass and finish options available for this service.",
      options: [],
    },
    specifications: {
      title: "Built to Spec",
      items: srv.overview.specifications,
    },
    installationProcess: {
      title: srv.process.sectionHeading,
      steps: srv.process.steps.map((st) => ({
        stepNumber: String(st.stepNumber),
        title: st.title,
        description: st.description,
      })),
    },
    reviews: [],
    faqs: generateServiceIntentFaqs(srv),
  };
}

export const servicePages: Record<string, ServicePageContent> = Object.fromEntries(
  allCoreServices.map((srv) => [srv.slug, convertServicePage(srv)]),
);
