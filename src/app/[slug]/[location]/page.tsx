import { Metadata } from "next";
import { notFound, permanentRedirect, RedirectType } from "next/navigation";
import { gautengLocations } from "@/data/locations";
import { getTaxonomyServiceBySlug } from "@/data/serviceTaxonomy";
import { services } from "@/data/services";
import { siteUrl, slugify } from "@/lib/site";

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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug: serviceSlug, location: locationSlug } = await params;
  const service = resolveService(serviceSlug);
  const location = gautengLocations.find(
    (l) => l.slug === locationSlug || l.id === locationSlug
  );

  if (!service || !location) {
    return { title: "Page Not Found" };
  }

  const sSlug = "slug" in service && service.slug ? service.slug : slugify((service as any).title);
  const locSlug = location.slug || location.id;
  const prep = locSlug.toLowerCase() === "katlehong" ? "in" : "near";
  const canonicalUrl = `${siteUrl}/${sSlug}-${prep}-${locSlug}`;

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

  const sSlug = "slug" in service && service.slug ? service.slug : slugify((service as any).title);
  const locSlug = location.slug || location.id;
  const prep = locSlug.toLowerCase() === "katlehong" ? "in" : "near";

  permanentRedirect(`/${sSlug}-${prep}-${locSlug}`, RedirectType.replace);
}
