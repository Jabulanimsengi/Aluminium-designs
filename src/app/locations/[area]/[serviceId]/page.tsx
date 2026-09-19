import { Metadata } from "next";
import { notFound, permanentRedirect, RedirectType } from "next/navigation";
import { gautengLocations, getHubForLocation } from "@/data/locations";
import { services } from "@/data/services";
import { getCanonicalServiceLocationSlug } from "@/lib/serviceLocationParser";
import { getServiceLocationSeoEligibility } from "@/lib/seoEligibility";
import { siteUrl, slugify } from "@/lib/site";

interface PageProps {
  params: Promise<{ area: string; serviceId: string }>;
}

export const dynamicParams = true;

function resolveDestination(area: string, serviceId: string): string | null {
  const location = gautengLocations.find(
    (candidate) => candidate.slug === area || candidate.id === area,
  );
  const normalizedServiceId = slugify(serviceId).replace(/^services-/, "");
  const service = services.find(
    (candidate) =>
      candidate.id === normalizedServiceId ||
      candidate.slug.replace(/^\/services\//, "") === normalizedServiceId,
  );

  if (!location || !service) return null;

  const parentHub = getHubForLocation(location);
  const destinationLocation = location.isHub ? location : parentHub;
  if (
    destinationLocation &&
    getServiceLocationSeoEligibility(service.id, destinationLocation).index
  ) {
    return `/${getCanonicalServiceLocationSlug(service.id, destinationLocation.slug)}`;
  }

  return service.slug;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { area, serviceId } = await params;
  const destination = resolveDestination(area, serviceId);
  return {
    alternates: { canonical: `${siteUrl}${destination || "/services"}` },
    robots: { index: false, follow: true },
  };
}

export default async function LocationServicePage({ params }: PageProps) {
  const { area, serviceId } = await params;
  const destination = resolveDestination(area, serviceId);
  if (!destination) notFound();
  permanentRedirect(destination, RedirectType.replace);
}
