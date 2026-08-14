import type { Metadata } from "next";
import { Fragment } from "react";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import {
  Activity,
  ArrowUpRight,
  ChevronDown,
  Gauge,
  LogOut,
  Mail,
  MessageCircle,
  MousePointerClick,
  Search,
  Users,
} from "lucide-react";
import { ADMIN_SESSION_COOKIE, verifyAdminSessionToken } from "@/lib/admin-auth";
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

function countBy(events: MonitoringEvent[], key: "page" | "event" | "referrer" | "destination" | "ipAddress") {
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

const activityDateFormatter = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Africa/Johannesburg",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

function activityDateKey(timestamp: string) {
  return activityDateFormatter.format(new Date(timestamp));
}

function activityDateLabel(dateKey: string, todayKey: string, yesterdayKey: string) {
  if (dateKey === todayKey) return "Today";
  if (dateKey === yesterdayKey) return "Yesterday";
  return new Intl.DateTimeFormat("en-ZA", {
    timeZone: "Africa/Johannesburg",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${dateKey}T12:00:00+02:00`));
}

function groupActivityByDate(events: MonitoringEvent[]) {
  const groups = new Map<string, MonitoringEvent[]>();
  for (const event of events) {
    const dateKey = activityDateKey(event.timestamp);
    groups.set(dateKey, [...(groups.get(dateKey) || []), event]);
  }
  return groups;
}

function isAdminPath(value: string) {
  if (!value) return false;
  try {
    return new URL(value, "https://monitoring.invalid").pathname.startsWith("/admin");
  } catch {
    return value.startsWith("/admin");
  }
}

export default async function AdminMonitoringPage({
  searchParams,
}: {
  searchParams: Promise<{ range?: string }>;
}) {
  const session = (await cookies()).get(ADMIN_SESSION_COOKIE)?.value;
  if (!verifyAdminSessionToken(session)) redirect("/admin/login");

  const params = await searchParams;
  const requestedRange = params.range as RangeKey | undefined;
  const range = requestedRange && requestedRange in ranges ? requestedRange : "7d";
  const cutoff = monitoringWindowStart(ranges[range].milliseconds);
  const allEvents = await readMonitoringEvents();
  const events = allEvents
    .filter((event) => range === "all" || new Date(event.timestamp).getTime() >= cutoff)
    .filter((event) => !isAdminPath(event.page) && !isAdminPath(event.destination))
    .sort((a, b) => Date.parse(b.timestamp) - Date.parse(a.timestamp));
  const pageViews = events.filter((event) => event.event === "page_view");
  const conversions = events.filter((event) => conversionEvents.has(event.event));
  const clickEvents = events.filter((event) => event.event.endsWith("_click"));
  const whatsappEvents = events.filter((event) => event.event === "whatsapp_click");
  const emailEvents = events.filter((event) => event.event === "email_click");
  const uniqueSessions = new Set(events.map((event) => event.sessionId).filter(Boolean)).size;
  const uniqueVisitors = new Set(
    events
      .map((event) => event.visitorId || (event.sessionId ? `legacy:${event.sessionId}` : ""))
      .filter(Boolean),
  ).size;
  const uniqueEngagedIps = new Set(conversions.map((event) => event.ipAddress).filter(Boolean)).size;
  const engagedIps = countBy(
    conversions.filter((event) => event.ipAddress),
    "ipAddress",
  ).slice(0, 10);
  const whatsappSessions = new Set(whatsappEvents.map((event) => event.sessionId).filter(Boolean)).size;
  const emailSessions = new Set(emailEvents.map((event) => event.sessionId).filter(Boolean)).size;
  const conversionRate = pageViews.length ? (conversions.length / pageViews.length) * 100 : 0;
  const topPages = countBy(pageViews, "page").slice(0, 8);
  const topReferrers = countBy(pageViews, "referrer").slice(0, 8);
  const topActions = countBy(conversions, "event").slice(0, 8);
  const topClickedDestinations = countBy(
    clickEvents.filter((event) => event.destination),
    "destination",
  ).slice(0, 8);
  const whatsappPages = countBy(whatsappEvents, "page").slice(0, 3);
  const latestWhatsappEvent = whatsappEvents[0];
  const emailPages = countBy(emailEvents, "page").slice(0, 3);
  const latestEmailEvent = emailEvents[0];
  const now = new Date();
  const todayKey = activityDateKey(now.toISOString());
  const yesterday = new Date(now.getTime() - 86_400_000);
  const yesterdayKey = activityDateKey(yesterday.toISOString());
  const activityGroups = new Map<string, MonitoringEvent[]>();
  for (const event of events) {
    const ipAddress = event.ipAddress || "Unknown";
    activityGroups.set(ipAddress, [...(activityGroups.get(ipAddress) || []), event]);
  }
  const metricGroups = new Map<string, number[]>();
  const journeyMap = new Map<string, {
    sessionId: string;
    visitorId: string;
    ipAddress: string;
    startedAt: string;
    endedAt: string;
    pages: string[];
    pageViews: number;
    clicks: number;
    outcomes: string[];
  }>();

  for (const event of [...events].reverse()) {
    if (!event.sessionId) continue;
    const journey = journeyMap.get(event.sessionId) || {
      sessionId: event.sessionId,
      visitorId: event.visitorId,
      ipAddress: event.ipAddress,
      startedAt: event.timestamp,
      endedAt: event.timestamp,
      pages: [],
      pageViews: 0,
      clicks: 0,
      outcomes: [],
    };
    journey.endedAt = event.timestamp;
    if (!journey.visitorId && event.visitorId) journey.visitorId = event.visitorId;
    if (!journey.ipAddress && event.ipAddress) journey.ipAddress = event.ipAddress;
    if (event.event === "page_view") {
      journey.pageViews += 1;
      if (event.page && journey.pages.at(-1) !== event.page) journey.pages.push(event.page);
    }
    if (event.event.endsWith("_click")) journey.clicks += 1;
    if (conversionEvents.has(event.event) && !journey.outcomes.includes(event.event)) {
      journey.outcomes.push(event.event);
    }
    journeyMap.set(event.sessionId, journey);
  }

  const recentJourneys = [...journeyMap.values()]
    .sort((a, b) => Date.parse(b.endedAt) - Date.parse(a.endedAt))
    .slice(0, 10);

  for (const event of events) {
    if (event.event !== "web_vital" || !event.metric || event.value === null) continue;
    metricGroups.set(event.metric, [...(metricGroups.get(event.metric) || []), event.value]);
  }

  const metrics = [...metricGroups.entries()].map(([name, values]) => ({
    name,
    average: values.reduce((sum, value) => sum + value, 0) / values.length,
    samples: values.length,
  }));
  const sitemapCount = 9 + services.length + gautengLocations.length + getAllLocationServiceRoutes().length;

  return (
    <div className="min-h-screen bg-surface-container-low py-10 sm:py-16">
      <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-5 border border-outline-variant bg-surface-container-lowest p-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">Private dashboard</p>
            <h1 className="mt-2 text-left font-sans text-3xl font-bold uppercase tracking-tight text-primary">Site monitoring</h1>
            <p className="mt-2 text-sm text-on-surface-variant">Traffic, enquiries, visitor actions, and real-user page speed.</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {(Object.keys(ranges) as RangeKey[]).map((key) => (
              <Link
                key={key}
                href={`/admin?range=${key}`}
                className={`rounded-full border px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-wider ${range === key ? "border-primary bg-primary text-white" : "border-outline-variant bg-white text-secondary"}`}
              >
                {ranges[key].label}
              </Link>
            ))}
            <form action="/api/admin/logout" method="post">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full border border-outline-variant bg-white px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-wider text-secondary"
              >
                <LogOut className="h-3.5 w-3.5" /> Log out
              </button>
            </form>
          </div>
        </header>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {[
            ["Page views", pageViews.length.toLocaleString(), Activity],
            ["Visitors", uniqueVisitors.toLocaleString(), Users],
            ["Sessions", uniqueSessions.toLocaleString(), Users],
            ["Engaged IPs", uniqueEngagedIps.toLocaleString(), MousePointerClick],
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

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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

          <div className="border border-outline-variant bg-white p-6">
            <h2 className="text-left text-lg font-bold uppercase tracking-tight text-primary">Most clicked destinations</h2>
            <div className="mt-5 space-y-3">
              {topClickedDestinations.length ? topClickedDestinations.map(([destination, count]) => (
                <div key={destination} className="flex items-center justify-between gap-4 border-b border-outline-variant pb-3 text-sm">
                  <span className="truncate text-on-surface-variant">{destination}</span>
                  <span className="font-mono font-bold text-primary">{count}</span>
                </div>
              )) : <p className="text-sm text-on-surface-variant">Clicked links and page destinations will appear here.</p>}
            </div>
          </div>

          <div className="border border-outline-variant bg-white p-6">
            <h2 className="text-left text-lg font-bold uppercase tracking-tight text-primary">Traffic sources</h2>
            <div className="mt-5 space-y-3">
              {topReferrers.length ? topReferrers.map(([referrer, count]) => (
                <div key={referrer} className="flex items-center justify-between gap-4 border-b border-outline-variant pb-3 text-sm">
                  <span className="truncate text-on-surface-variant">{referrer}</span>
                  <span className="font-mono font-bold text-primary">{count}</span>
                </div>
              )) : <p className="text-sm text-on-surface-variant">Visitor sources will appear here.</p>}
            </div>
          </div>
        </section>

        <section className="overflow-hidden border border-outline-variant bg-white">
          <div className="border-b border-outline-variant p-5 sm:p-6">
            <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">End-to-end behaviour</p>
            <h2 className="mt-2 text-left text-lg font-bold uppercase tracking-tight text-primary">Recent visitor journeys</h2>
            <p className="mt-1 text-xs text-on-surface-variant">Anonymous session paths from entry page through clicks and enquiry actions.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px] text-left text-xs">
              <thead className="bg-surface-container text-[10px] uppercase tracking-wider text-secondary">
                <tr><th className="p-3">Visitor</th><th className="p-3">IP address</th><th className="p-3">Started</th><th className="p-3">Page journey</th><th className="p-3">Views</th><th className="p-3">Clicks</th><th className="p-3">Outcome</th></tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {recentJourneys.length ? recentJourneys.map((journey) => (
                  <tr key={journey.sessionId}>
                    <td className="p-3 font-mono font-bold text-primary">{journey.visitorId ? journey.visitorId.slice(0, 8) : "Legacy"}</td>
                    <td className="whitespace-nowrap p-3 font-mono text-on-surface-variant">{journey.ipAddress || "Unknown"}</td>
                    <td className="whitespace-nowrap p-3 text-outline">{new Date(journey.startedAt).toLocaleString("en-ZA")}</td>
                    <td className="max-w-md p-3 text-on-surface-variant">{journey.pages.length ? journey.pages.join(" > ") : "No page view recorded"}</td>
                    <td className="p-3 font-mono font-bold text-primary">{journey.pageViews}</td>
                    <td className="p-3 font-mono font-bold text-primary">{journey.clicks}</td>
                    <td className="p-3 text-on-surface-variant">{journey.outcomes.length ? journey.outcomes.map((outcome) => outcome.replaceAll("_", " ")).join(", ") : "Browsing"}</td>
                  </tr>
                )) : (
                  <tr><td colSpan={7} className="p-6 text-center text-on-surface-variant">Visitor journeys will appear after public-site activity is recorded.</td></tr>
                )}
              </tbody>
            </table>
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

        <section className="grid items-start gap-6 lg:grid-cols-[minmax(16rem,0.85fr)_minmax(0,2fr)]">
          <div className="space-y-6">
            <div className="self-start border border-outline-variant bg-primary p-6 text-white">
              <Search className="h-6 w-6" />
              <h2 className="mt-4 text-left text-xl font-bold uppercase">Search indexing</h2>
              <p className="mt-3 text-sm text-white/70">{sitemapCount.toLocaleString()} canonical public URLs are listed in one sitemap.</p>
              <a href={absoluteUrl("/sitemap.xml")} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider underline">
                Open sitemap <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="self-start border border-outline-variant bg-white p-6 shadow-sm">
              <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">Conversion monitoring</p>
              <h2 className="mt-2 text-left text-xl font-bold uppercase tracking-tight text-primary">Engaged IP addresses</h2>
              <p className="mt-2 text-xs leading-relaxed text-on-surface-variant">Raw server-observed IPs for WhatsApp, phone, email, quote, and directions clicks.</p>
              <div className="mt-5 space-y-3">
                {engagedIps.length ? engagedIps.map(([ipAddress, count]) => (
                  <div key={ipAddress} className="flex items-center justify-between gap-4 border-b border-outline-variant pb-3 text-xs">
                    <span className="font-mono text-primary">{ipAddress}</span>
                    <span className="font-mono font-bold text-secondary">{count} {count === 1 ? "action" : "actions"}</span>
                  </div>
                )) : <p className="text-xs text-on-surface-variant">IP addresses will appear after visitors use an enquiry button.</p>}
              </div>
            </div>

            <div className="self-start border border-outline-variant bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">Conversion tracking</p>
                  <h2 className="mt-2 text-left text-xl font-bold uppercase tracking-tight text-primary">WhatsApp monitoring</h2>
                </div>
                <MessageCircle className="h-6 w-6 shrink-0 text-emerald-600" />
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3 border-y border-outline-variant py-4">
                <div>
                  <p className="font-mono text-[9px] font-bold uppercase tracking-wider text-outline">Clicks</p>
                  <p className="mt-1 text-2xl font-bold text-primary">{whatsappEvents.length.toLocaleString()}</p>
                </div>
                <div>
                  <p className="font-mono text-[9px] font-bold uppercase tracking-wider text-outline">Sessions</p>
                  <p className="mt-1 text-2xl font-bold text-primary">{whatsappSessions.toLocaleString()}</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="font-mono text-[9px] font-bold uppercase tracking-wider text-outline">Where visitors clicked</p>
                <div className="mt-2 space-y-2">
                  {whatsappPages.length ? whatsappPages.map(([page, count]) => (
                    <div key={page} className="flex items-center justify-between gap-3 text-xs">
                      <span className="truncate text-on-surface-variant">{page}</span>
                      <span className="font-mono font-bold text-primary">{count}</span>
                    </div>
                  )) : <p className="text-xs leading-relaxed text-on-surface-variant">WhatsApp clicks will appear here after visitors use a WhatsApp button.</p>}
                </div>
              </div>
              {latestWhatsappEvent ? (
                <p className="mt-4 border-t border-outline-variant pt-3 text-[10px] text-outline">
                  Latest click: {new Date(latestWhatsappEvent.timestamp).toLocaleString("en-ZA")} · IP: {latestWhatsappEvent.ipAddress || "Unknown"}
                </p>
              ) : null}
            </div>

            <div className="self-start border border-outline-variant bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">Conversion tracking</p>
                  <h2 className="mt-2 text-left text-xl font-bold uppercase tracking-tight text-primary">Email monitoring</h2>
                </div>
                <Mail className="h-6 w-6 shrink-0 text-secondary" />
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3 border-y border-outline-variant py-4">
                <div>
                  <p className="font-mono text-[9px] font-bold uppercase tracking-wider text-outline">Clicks</p>
                  <p className="mt-1 text-2xl font-bold text-primary">{emailEvents.length.toLocaleString()}</p>
                </div>
                <div>
                  <p className="font-mono text-[9px] font-bold uppercase tracking-wider text-outline">Sessions</p>
                  <p className="mt-1 text-2xl font-bold text-primary">{emailSessions.toLocaleString()}</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="font-mono text-[9px] font-bold uppercase tracking-wider text-outline">Where visitors clicked</p>
                <div className="mt-2 space-y-2">
                  {emailPages.length ? emailPages.map(([page, count]) => (
                    <div key={page} className="flex items-center justify-between gap-3 text-xs">
                      <span className="truncate text-on-surface-variant">{page}</span>
                      <span className="font-mono font-bold text-primary">{count}</span>
                    </div>
                  )) : <p className="text-xs leading-relaxed text-on-surface-variant">Email clicks will appear here after visitors use an email link.</p>}
                </div>
              </div>
              {latestEmailEvent ? (
                <p className="mt-4 border-t border-outline-variant pt-3 text-[10px] text-outline">
                  Latest click: {new Date(latestEmailEvent.timestamp).toLocaleString("en-ZA")} · IP: {latestEmailEvent.ipAddress || "Unknown"}
                </p>
              ) : null}
            </div>
          </div>

          <div className="overflow-hidden border border-outline-variant bg-white">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-outline-variant p-5">
              <div>
                <h2 className="text-left text-lg font-bold uppercase tracking-tight text-primary">Recent activity</h2>
                <p className="mt-1 text-xs text-on-surface-variant">
                  Showing all {activityGroups.size} IP {activityGroups.size === 1 ? "address" : "addresses"} and {events.length} recorded {events.length === 1 ? "event" : "events"}.
                </p>
              </div>
            </div>
            <div className="divide-y divide-outline-variant">
              {[...activityGroups.entries()].map(([ipAddress, activity]) => {
                const dateGroups = groupActivityByDate(activity);
                const sessionCount = new Set(activity.map((event) => event.sessionId).filter(Boolean)).size;
                const latestEvent = activity[0];

                return (
                  <details key={ipAddress} className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 bg-white px-4 py-4 transition-colors hover:bg-surface-container-low [&::-webkit-details-marker]:hidden">
                      <div className="min-w-0">
                        <p className="break-all font-mono text-xs font-bold text-primary">{ipAddress}</p>
                        <p className="mt-1 text-[10px] text-outline">
                          Latest activity: {latestEvent ? new Date(latestEvent.timestamp).toLocaleString("en-ZA", { timeZone: "Africa/Johannesburg" }) : "Unknown"}
                        </p>
                      </div>
                      <div className="flex shrink-0 items-center gap-3">
                        <div className="text-right font-mono text-[9px] font-bold uppercase tracking-wider text-outline">
                          <p>{activity.length} {activity.length === 1 ? "event" : "events"}</p>
                          <p>{sessionCount} {sessionCount === 1 ? "session" : "sessions"}</p>
                        </div>
                        <ChevronDown className="h-4 w-4 text-secondary transition-transform group-open:rotate-180" aria-hidden="true" />
                      </div>
                    </summary>
                    <div className="overflow-x-auto border-t border-outline-variant">
                      <table className="w-full min-w-[760px] text-left text-xs">
                        <thead className="bg-surface-container text-[10px] uppercase tracking-wider text-secondary">
                          <tr><th className="p-3">Time</th><th className="p-3">Event</th><th className="p-3">Page</th><th className="p-3">Detail</th></tr>
                        </thead>
                        <tbody>
                          {[...dateGroups.entries()].map(([dateKey, datedActivity]) => (
                            <Fragment key={dateKey}>
                              <tr className="border-y border-outline-variant bg-surface-container-low">
                                <th colSpan={4} className="px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
                                  {activityDateLabel(dateKey, todayKey, yesterdayKey)}
                                </th>
                              </tr>
                              {datedActivity.map((event, index) => (
                                <tr key={`${event.timestamp}-${index}`} className="border-b border-outline-variant last:border-b-0">
                                  <td className="whitespace-nowrap p-3 text-outline">{new Date(event.timestamp).toLocaleTimeString("en-ZA", { timeZone: "Africa/Johannesburg", hour: "2-digit", minute: "2-digit", second: "2-digit" })}</td>
                                  <td className="p-3 font-mono font-bold text-primary">{event.event}</td>
                                  <td className="max-w-52 truncate p-3 text-on-surface-variant">{event.page}</td>
                                  <td className="max-w-64 truncate p-3 text-on-surface-variant">{event.metric ? `${event.metric}: ${event.value}` : event.label || event.destination || "—"}</td>
                                </tr>
                              ))}
                            </Fragment>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </details>
                );
              })}
              {!activityGroups.size ? (
                <p className="p-6 text-center text-xs text-on-surface-variant">No activity was recorded in this period.</p>
              ) : null}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
