import { Metadata } from "next";
import { permanentRedirect, RedirectType } from "next/navigation";
import { siteUrl } from "@/lib/site";

export const dynamicParams = true;

export async function generateMetadata({ params }: { params: Promise<{ area: string; serviceId: string }> }): Promise<Metadata> {
  const { serviceId } = await params;
  return {
    alternates: { canonical: `${siteUrl}/${serviceId}` },
    robots: { index: false, follow: true },
  };
}

export default async function LocationServicePage({ params }: { params: Promise<{ area: string; serviceId: string }> }) {
  const { serviceId } = await params;
  permanentRedirect(`/${serviceId}`, RedirectType.replace);
}
