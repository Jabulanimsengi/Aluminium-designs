import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  ArrowUpRight,
  Gauge,
  MousePointerClick,
  Search,
  Users,
} from "lucide-react";
import { getAllLocationServiceRoutes } from "@/data/location-service-pages";
import { gautengLocations } from "@/data/locations";
import { services } from "@/data/services";
import {
  monitoringWindowStart,
  readMonitoringEvents,
  type MonitoringEvent,
} from "@/lib/monitoring";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Site Monitoring",
  robots: { index: false, follow: false, noarchive: true },
};

type RangeKey = "24h" | "7d" | "30d" | "all";

const ranges: Record<RangeKey, { label: string; milliseconds: number }> = {
  "24h": { label: "24 hours", milliseconds: 86_400_000 },
  "7d": { label: "7 days", milliseconds: 7 * 86_400_000 },
  "30d": { label: "30 days", milliseconds: 30 * 86_400_000 },
  all: { label: "All time", milliseconds: Number.POSITIVE_INFINITY },
};

const conversionEvents = new Set([
  "quote_request_click",
  "whatsapp_click",
  "phone_call_click",
  "email_click",
  "maps_directions_click",
]);

function countBy(events: MonitoringEvent[], key: "page" | "event" | "referrer") {
  const counts = new Map<string, number>();
  for (const event of events) {
    const value = event[key] || "(direct / unknown)";
    counts.set(value, (counts.get(value) || 0) + 1);
  }
  return [...counts.entries()].sort((a, b) => b[1] - a[1]);
}

function formatMetric(metric: string, value: number) {
  return metric === "CLS" ? value.toFixed(3) : `${Math.round(value).toLocaleString()} ms`;
}

function metricRating(metric: string, value: number) {
  const thresholds: Record<string, [number, number]> = {
    LCP: [2500, 4000],
    FCP: [1800, 3000],
    TTFB: [800, 1800],
    CLS: [0.1, 0.25],
    LOAD: [3000, 5000],
  };
  const [good, poor] = thresholds[metric] || [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY];
  if (value <= good) return { label: "Good", className: "text-emerald-700 bg-emerald-50" };
  if (value <= poor) return { label: "Needs work", className: "text-amber-700 bg-amber-50" };
  return { label: "Poor", className: "text-red-700 bg-red-50" };
}

export default async function AdminMonitoringPage({
  searchParams,
}: {
  searchParams: Promise<{ range?: string }>;
}) {
  const requestedRange = (await searchParams).range as RangeKey | undefined;
  const range = requestedRange && requestedRange in ranges ? requestedRange : "7d";
  const cutoff = monitoringWindowStart(ranges[range].milliseconds);
  const allEvents = await readMonitoringEvents();
  const events = allEvents
    .filter((event) => range === "all" || new Date(event.timestamp).getTime() >= cutoff)
    .sort((a, b) => Date.parse(b.timestamp) - Date.parse(a.timestamp));
  const pageViews = events.filter((event) => event.event === "page_view");
  const conversions = events.filter((event) => conversionEvents.has(event.event));
  const uniqueSessions = new Set(events.map((event) => event.sessionId).filter(Boolean)).size;
  const conversionRate = pageViews.length ? (conversions.length / pageViews.length) * 100 : 0;
  const topPages = countBy(pageViews, "page").slice(0, 8);
  const topActions = countBy(conversions, "event").slice(0, 8);
  const metricGroups = new Map<string, number[]>();

  for (const event of events) {
    if (event.event !== "web_vital" || !event.metric || event.value === null) continue;
    metricGroups.set(event.metric, [...(metricGroups.get(event.metric) || []), event.value]);
  }

  const metrics = [...metricGroups.entries()].map(([name, values]) => ({
    name,
    average: values.reduce((sum, value) => sum + value, 0) / values.length,
    samples: values.length,
  }));
  const sitemapCount = 8 + services.length + gautengLocations.length + getAllLocationServiceRoutes().length;

  return (
    <div className="min-h-screen bg-surface-container-low py-10 sm:py-16">
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-5 border border-outline-variant bg-surface-container-lowest p-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">Private dashboard</p>
            <h1 className="mt-2 text-left font-sans text-3xl font-bold uppercase tracking-tight text-primary">Site monitoring</h1>
            <p className="mt-2 text-sm text-on-surface-variant">Traffic, enquiries, visitor actions, and real-user page speed.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {(Object.keys(ranges) as RangeKey[]).map((key) => (
              <Link
                key={key}
                href={`/admin?range=${key}`}
                className={`rounded-full border px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-wider ${range === key ? "border-primary bg-primary text-white" : "border-outline-variant bg-white text-secondary"}`}
              >
                {ranges[key].label}
              </Link>
            ))}
          </div>
        </header>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Page views", pageViews.length.toLocaleString(), Activity],
            ["Visitor sessions", uniqueSessions.toLocaleString(), Users],
            ["Enquiry actions", conversions.length.toLocaleString(), MousePointerClick],
            ["Action rate", `${conversionRate.toFixed(1)}%`, Gauge],
          ].map(([label, value, Icon]) => (
            <article key={String(label)} className="border border-outline-variant bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between text-secondary">
                <p className="font-mono text-[10px] font-bold uppercase tracking-widest">{String(label)}</p>
                <Icon className="h-4 w-4" />
              </div>
              <p className="mt-4 text-3xl font-bold text-primary">{String(value)}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="border border-outline-variant bg-white p-6">
            <h2 className="text-left text-lg font-bold uppercase tracking-tight text-primary">Most viewed pages</h2>
            <div className="mt-5 space-y-3">
              {topPages.length ? topPages.map(([page, count]) => (
                <div key={page} className="flex items-center justify-between gap-4 border-b border-outline-variant pb-3 text-sm">
                  <span className="truncate text-on-surface-variant">{page}</span>
                  <span className="font-mono font-bold text-primary">{count}</span>
                </div>
              )) : <p className="text-sm text-on-surface-variant">No page views recorded in this period.</p>}
            </div>
          </div>

          <div className="border border-outline-variant bg-white p-6">
            <h2 className="text-left text-lg font-bold uppercase tracking-tight text-primary">Enquiry actions</h2>
            <div className="mt-5 space-y-3">
              {topActions.length ? topActions.map(([event, count]) => (
                <div key={event} className="flex items-center justify-between gap-4 border-b border-outline-variant pb-3 text-sm">
                  <span className="text-on-surface-variant">{event.replaceAll("_", " ")}</span>
                  <span className="font-mono font-bold text-primary">{count}</span>
                </div>
              )) : <p className="text-sm text-on-surface-variant">No enquiry actions recorded in this period.</p>}
            </div>
          </div>
        </section>

        <section className="border border-outline-variant bg-white p-6">
          <div className="flex items-center gap-2">
            <Gauge className="h-5 w-5 text-secondary" />
            <h2 className="text-left text-lg font-bold uppercase tracking-tight text-primary">Page performance</h2>
          </div>
          <p className="mt-1 text-xs text-on-surface-variant">Average real-user measurements for the selected period.</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {metrics.length ? metrics.map((metric) => {
              const rating = metricRating(metric.name, metric.average);
              return (
                <article key={metric.name} className="border border-outline-variant p-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs font-bold text-primary">{metric.name}</span>
                    <span className={`rounded-full px-2 py-1 text-[9px] font-bold uppercase ${rating.className}`}>{rating.label}</span>
                  </div>
                  <p className="mt-3 text-xl font-bold text-primary">{formatMetric(metric.name, metric.average)}</p>
                  <p className="mt-1 text-[10px] text-outline">{metric.samples} samples</p>
                </article>
              );
            }) : <p className="text-sm text-on-surface-variant">Performance data will appear after visitors load the updated site.</p>}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_2fr]">
          <div className="border border-outline-variant bg-primary p-6 text-white">
            <Search className="h-6 w-6" />
            <h2 className="mt-4 text-left text-xl font-bold uppercase">Search indexing</h2>
            <p className="mt-3 text-sm text-white/70">{sitemapCount.toLocaleString()} canonical public URLs are listed in one sitemap.</p>
            <a href={absoluteUrl("/sitemap.xml")} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider underline">
              Open sitemap <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="overflow-hidden border border-outline-variant bg-white">
            <div className="border-b border-outline-variant p-5">
              <h2 className="text-left text-lg font-bold uppercase tracking-tight text-primary">Recent activity</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px] text-left text-xs">
                <thead className="bg-surface-container text-[10px] uppercase tracking-wider text-secondary">
                  <tr><th className="p-3">Time</th><th className="p-3">Event</th><th className="p-3">Page</th><th className="p-3">Detail</th></tr>
                </thead>
                <tbody className="divide-y divide-outline-variant">
                  {events.slice(0, 50).map((event, index) => (
                    <tr key={`${event.timestamp}-${index}`}>
                      <td className="whitespace-nowrap p-3 text-outline">{new Date(event.timestamp).toLocaleString("en-ZA")}</td>
                      <td className="p-3 font-mono font-bold text-primary">{event.event}</td>
                      <td className="max-w-52 truncate p-3 text-on-surface-variant">{event.page}</td>
                      <td className="max-w-64 truncate p-3 text-on-surface-variant">{event.metric ? `${event.metric}: ${event.value}` : event.label || event.destination || "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
