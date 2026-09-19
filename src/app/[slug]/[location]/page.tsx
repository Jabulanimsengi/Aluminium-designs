import { Metadata } from "next";
import { notFound, permanentRedirect, RedirectType } from "next/navigation";
import { gautengLocations, getHubForLocation } from "@/data/locations";
import { getTaxonomyServiceBySlug } from "@/data/serviceTaxonomy";
import { services } from "@/data/services";
import { siteUrl, slugify } from "@/lib/site";
import { getCanonicalServiceLocationSlug } from "@/lib/serviceLocationParser";
import { getServiceLocationSeoEligibility } from "@/lib/seoEligibility";

interface PageProps {
  params: Promise<{ slug: string; location: string }>;
}

export const dynamicParams = true;

function resolveService(serviceSlug: string) {
  return (
    getTaxonomyServiceBySlug(serviceSlug) ||
    services.find(
      (s) =>
        s.id === serviceSlug ||
        slugify(s.title) === serviceSlug ||
        s.slug.replace(/^\/services\//, "") === serviceSlug
    )
  );
}

function getCoreServiceSlug(service: ReturnType<typeof resolveService>): string | null {
  if (!service) return null;
  const resolvedSlug = service.slug.replace(/^\/services\//, "");
  return services.find((candidate) => candidate.id === resolvedSlug)?.id || resolvedSlug;
}

function getRedirectPath(
  service: NonNullable<ReturnType<typeof resolveService>>,
  location: (typeof gautengLocations)[number],
): string {
  const serviceSlug = getCoreServiceSlug(service);
  const coreService = services.find((candidate) => candidate.id === serviceSlug);
  if (!serviceSlug || !coreService) return "/services";

  const parentHub = getHubForLocation(location);
  const destinationLocation = location.isHub ? location : parentHub;
  if (
    destinationLocation &&
    getServiceLocationSeoEligibility(serviceSlug, destinationLocation).index
  ) {
    return `/${getCanonicalServiceLocationSlug(serviceSlug, destinationLocation.slug)}`;
  }

  return coreService.slug;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug: serviceSlug, location: locationSlug } = await params;
  const service = resolveService(serviceSlug);
  const location = gautengLocations.find(
    (l) => l.slug === locationSlug || l.id === locationSlug
  );

  if (!service || !location) {
    return { title: "Page Not Found" };
  }

  const canonicalUrl = `${siteUrl}${getRedirectPath(service, location)}`;

  return {
    alternates: { canonical: canonicalUrl },
    robots: { index: false, follow: true },
  };
}

export default async function ServiceLocationPage({ params }: PageProps) {
  const { slug: serviceSlug, location: locationSlug } = await params;
  const service = resolveService(serviceSlug);
  const location = gautengLocations.find(
    (l) => l.slug === locationSlug || l.id === locationSlug
  );

  if (!service || !location) {
    notFound();
  }

  permanentRedirect(getRedirectPath(service, location), RedirectType.replace);
}
