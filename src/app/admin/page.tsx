import type { Metadata } from "next";
import { Fragment, type ReactNode } from "react";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Clock,
  Download,
  FileText,
  Gauge,
  Globe,
  LogOut,
  Mail,
  MapPin,
  MessageCircle,
  MonitorSmartphone,
  MousePointerClick,
  Phone,
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
import { readLeads } from "@/lib/leads";
import { RefreshControls } from "@/components/admin/RefreshControls";

export const metadata: Metadata = {
  title: "Site Monitoring",
  robots: { index: false, follow: false, noarchive: true },
};

type RangeKey = "24h" | "7d" | "30d" | "all";
type ViewKey = "overview" | "whatsapp" | "quotes" | "leads" | "errors" | "activity" | "performance";

const ranges: Record<RangeKey, { label: string; shortLabel: string; milliseconds: number }> = {
  "24h": { label: "24 hours", shortLabel: "24h", milliseconds: 86_400_000 },
  "7d": { label: "7 days", shortLabel: "7d", milliseconds: 7 * 86_400_000 },
  "30d": { label: "30 days", shortLabel: "30d", milliseconds: 30 * 86_400_000 },
  all: { label: "All time", shortLabel: "All", milliseconds: Number.POSITIVE_INFINITY },
};

const views: Record<ViewKey, string> = {
  overview: "Overview",
  leads: "Leads",
  whatsapp: "WhatsApp",
  quotes: "Quotes",
  activity: "Activity",
  performance: "Speed",
  errors: "Errors",
};

const LEADS_PAGE_SIZE = 25;

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

function groupByIp(events: MonitoringEvent[]) {
  const groups = new Map<string, MonitoringEvent[]>();
  for (const event of events) {
    const key = event.ipAddress || "Unknown";
    groups.set(key, [...(groups.get(key) || []), event]);
  }
  return [...groups.entries()].sort(
    (a, b) => Date.parse(b[1][0].timestamp) - Date.parse(a[1][0].timestamp),
  );
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

function zaDateTime(timestamp: string) {
  return new Date(timestamp).toLocaleString("en-ZA", { timeZone: "Africa/Johannesburg" });
}

function zaTime(timestamp: string) {
  return new Date(timestamp).toLocaleTimeString("en-ZA", {
    timeZone: "Africa/Johannesburg",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

function isAdminPath(value: string) {
  if (!value) return false;
  try {
    return new URL(value, "https://monitoring.invalid").pathname.startsWith("/admin");
  } catch {
    return value.startsWith("/admin");
  }
}

function phoneToWhatsAppUrl(phone: string, name: string) {
  const digits = phone.replace(/\D/g, "");
  const e164 = digits.startsWith("0") ? `27${digits.slice(1)}` : digits;
  const message = `Hi ${name}, thank you for contacting Aluminium Designs regarding your quotation.`;
  return `https://wa.me/${e164}?text=${encodeURIComponent(message)}`;
}

function StatCard({ label, value, icon: Icon }: { label: string; value: string; icon: LucideIcon }) {
  return (
    <article className="border border-outline-variant bg-white p-3.5 sm:p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-center justify-between text-secondary">
        <p className="font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-wider sm:tracking-widest truncate">{label}</p>
        <Icon className="h-3.5 sm:h-4 w-3.5 sm:w-4 shrink-0" />
      </div>
      <p className="mt-2 sm:mt-4 text-2xl sm:text-3xl font-bold text-primary truncate">{value}</p>
    </article>
  );
}

function sourceBadgeClass(source: string) {
  switch (source) {
    case "quote":
      return "bg-surface-container text-secondary";
    case "phone":
      return "bg-blue-50 text-blue-700";
    case "email":
      return "bg-amber-50 text-amber-700";
    default:
      return "bg-emerald-50 text-emerald-700";
  }
}

function SectionHeading({
  icon: Icon,
  title,
  hint,
  action,
}: {
  icon: LucideIcon;
  title: string;
  hint?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 border-b border-outline-variant p-4 sm:p-6">
      <div>
        <div className="flex items-center gap-2">
          <Icon className="h-4 sm:h-5 w-4 sm:w-5 text-secondary shrink-0" />
          <h2 className="text-left text-base sm:text-lg font-bold uppercase tracking-tight text-primary">{title}</h2>
        </div>
        {hint ? <p className="mt-1 text-xs text-on-surface-variant leading-relaxed">{hint}</p> : null}
      </div>
      {action ? <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">{action}</div> : null}
    </div>
  );
}

const hourFormatter = new Intl.DateTimeFormat("en-ZA", {
  timeZone: "Africa/Johannesburg",
  hour: "2-digit",
  minute: "2-digit",
});

const dayFormatter = new Intl.DateTimeFormat("en-ZA", {
  timeZone: "Africa/Johannesburg",
  day: "numeric",
  month: "short",
});

type TrendBucket = { label: string; views: number; conversions: number };

function buildTrend(range: RangeKey, pageViewEvents: MonitoringEvent[], conversionEventsList: MonitoringEvent[]): TrendBucket[] | null {
  const HOUR = 3_600_000;
  const DAY = 86_400_000;
  const now = Date.now();

  let bucketMilliseconds = DAY;
  let bucketCount = range === "7d" ? 7 : range === "30d" ? 30 : 90;

  if (range === "24h") {
    bucketMilliseconds = HOUR;
    bucketCount = 24;
  } else if (range === "all") {
    const timestamps = [...pageViewEvents, ...conversionEventsList].map((event) =>
      Date.parse(event.timestamp),
    );
    if (!timestamps.length) return null;
    const earliest = Math.min(...timestamps);
    bucketCount = Math.min(90, Math.max(1, Math.ceil((now - earliest) / DAY)));
  }

  const windowStart =
    range === "24h"
      ? Math.floor(now / HOUR) * HOUR - (bucketCount - 1) * HOUR
      : Math.floor(now / DAY) * DAY - (bucketCount - 1) * DAY;

  const buckets: TrendBucket[] = Array.from({ length: bucketCount }, (_, index) => ({
    label:
      bucketMilliseconds === HOUR
        ? hourFormatter.format(windowStart + index * HOUR)
        : dayFormatter.format(windowStart + index * DAY),
    views: 0,
    conversions: 0,
  }));

  for (const event of pageViewEvents) {
    const index = Math.floor((Date.parse(event.timestamp) - windowStart) / bucketMilliseconds);
    if (index >= 0 && index < bucketCount) buckets[index].views += 1;
  }
  for (const event of conversionEventsList) {
    const index = Math.floor((Date.parse(event.timestamp) - windowStart) / bucketMilliseconds);
    if (index >= 0 && index < bucketCount) buckets[index].conversions += 1;
  }

  return buckets;
}

function TrendChart({ buckets }: { buckets: TrendBucket[] }) {
  const max = Math.max(1, ...buckets.map((bucket) => Math.max(bucket.views, bucket.conversions)));

  return (
    <div className="p-4 sm:p-6">
      <div className="flex items-end gap-[2px] sm:gap-[3px] overflow-x-auto pb-1">
        {buckets.map((bucket, index) => (
          <div
            key={index}
            title={`${bucket.label} · ${bucket.views} ${bucket.views === 1 ? "view" : "views"} · ${bucket.conversions} ${bucket.conversions === 1 ? "action" : "actions"}`}
            className="flex h-32 sm:h-44 flex-1 min-w-[8px] items-end justify-center gap-[1px] sm:gap-[2px]"
          >
            <div
              className="w-full max-w-7 rounded-t bg-primary"
              style={{ height: `${Math.max(bucket.views ? 2 : 0, (bucket.views / max) * 100)}%` }}
            />
            <div
              className="w-full max-w-7 rounded-t bg-emerald-500"
              style={{
                height: `${Math.max(bucket.conversions ? 2 : 0, (bucket.conversions / max) * 100)}%`,
              }}
            />
          </div>
        ))}
      </div>
      <div className="mt-3 flex justify-between font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-outline">
        <span>{buckets[0]?.label}</span>
        <span>{buckets[Math.floor(buckets.length / 2)]?.label}</span>
        <span>{buckets.at(-1)?.label}</span>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-3 sm:gap-5 border-t border-outline-variant pt-3 font-mono text-[9px] font-bold uppercase tracking-wider text-secondary">
        <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-sm bg-primary" /> Page views</span>
        <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-sm bg-emerald-500" /> Enquiry actions</span>
      </div>
    </div>
  );
}

export default async function AdminMonitoringPage({
  searchParams,
}: {
  searchParams: Promise<{ range?: string; view?: string; q?: string; page?: string }>;
}) {
  const session = (await cookies()).get(ADMIN_SESSION_COOKIE)?.value;
  if (!verifyAdminSessionToken(session)) redirect("/admin/login");

  const params = await searchParams;
  const requestedRange = params.range as RangeKey | undefined;
  const range = requestedRange && requestedRange in ranges ? requestedRange : "7d";
  const requestedView = params.view as ViewKey | undefined;
  const view = requestedView && requestedView in views ? requestedView : "overview";
  const leadQuery = (params.q || "").trim();
  const leadQueryLower = leadQuery.toLowerCase();

  const cutoff = monitoringWindowStart(ranges[range].milliseconds);
  const allEvents = await readMonitoringEvents();
  const events = allEvents
    .filter((event) => range === "all" || new Date(event.timestamp).getTime() >= cutoff)
    .filter((event) => !isAdminPath(event.page) && !isAdminPath(event.destination))
    .sort((a, b) => Date.parse(b.timestamp) - Date.parse(a.timestamp));

  const humanEvents = events.filter((event) => !event.isBot);
  const botEventCount = events.length - humanEvents.length;

  const pageViews = humanEvents.filter((event) => event.event === "page_view");
  const conversions = humanEvents.filter((event) => conversionEvents.has(event.event));
  const clickEvents = humanEvents.filter((event) => event.event.endsWith("_click"));
  const whatsappEvents = humanEvents.filter((event) => event.event === "whatsapp_click");
  const emailEvents = humanEvents.filter((event) => event.event === "email_click");
  const quoteClickEvents = humanEvents.filter((event) => event.event === "quote_request_click");
  const errorEvents = humanEvents.filter((event) => event.event === "js_error");

  const uniqueSessions = new Set(humanEvents.map((event) => event.sessionId).filter(Boolean)).size;
  const uniqueVisitors = new Set(
    humanEvents
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

  const deviceSessions = new Map<string, Set<string>>();
  for (const event of humanEvents) {
    if (!event.sessionId) continue;
    const key = event.deviceType || "unknown";
    const sessions = deviceSessions.get(key) || new Set<string>();
    sessions.add(event.sessionId);
    deviceSessions.set(key, sessions);
  }
  const deviceBreakdown = [...deviceSessions.entries()]
    .map(([device, sessions]) => ({ device, count: sessions.size }))
    .sort((a, b) => b.count - a.count);

  const errorGroups = new Map<string, {
    message: string;
    page: string;
    count: number;
    firstSeen: string;
    lastSeen: string;
    sample: string;
  }>();
  for (const event of [...errorEvents].reverse()) {
    const key = `${event.label}|${event.page}`;
    const group = errorGroups.get(key) || {
      message: event.label || "(no message)",
      page: event.page,
      count: 0,
      firstSeen: event.timestamp,
      lastSeen: event.timestamp,
      sample: "",
    };
    group.count += 1;
    group.lastSeen = event.timestamp;
    if (!group.sample && event.detail) group.sample = event.detail;
    errorGroups.set(key, group);
  }
  const topErrors = [...errorGroups.values()].sort((a, b) => b.count - a.count).slice(0, 20);
  const recentErrors = errorEvents.slice(0, 50);
  const errorSessions = new Set(errorEvents.map((event) => event.sessionId).filter(Boolean)).size;

  const whatsappByIp = groupByIp(whatsappEvents);
  const whatsappUniqueIps = new Set(whatsappEvents.map((event) => event.ipAddress).filter(Boolean)).size;
  const quoteByIp = groupByIp(quoteClickEvents);
  const quoteUniqueIps = new Set(quoteClickEvents.map((event) => event.ipAddress).filter(Boolean)).size;

  const allLeads = await readLeads();
  const searchedLeads = leadQueryLower
    ? allLeads.filter((lead) =>
        [lead.name, lead.phone, lead.location, lead.budget, lead.source].some((value) =>
          value.toLowerCase().includes(leadQueryLower),
        ),
      )
    : allLeads;
  const leads = searchedLeads
    .filter((lead) => range === "all" || new Date(lead.timestamp).getTime() >= cutoff)
    .sort((a, b) => Date.parse(b.timestamp) - Date.parse(a.timestamp));
  const leadsTotalPages = Math.max(1, Math.ceil(leads.length / LEADS_PAGE_SIZE));
  const leadsCurrentPage = Math.min(Math.max(1, Number(params.page) || 1), leadsTotalPages);
  const visibleLeads = leads.slice(
    (leadsCurrentPage - 1) * LEADS_PAGE_SIZE,
    leadsCurrentPage * LEADS_PAGE_SIZE,
  );
  const leadsHref = (page: number) =>
    `/admin?view=leads&range=${range}&page=${page}${leadQuery ? `&q=${encodeURIComponent(leadQuery)}` : ""}`;
  const leadsUniqueIps = new Set(leads.map((lead) => lead.ipAddress).filter(Boolean)).size;
  const whatsappLeads = leads.filter((lead) => lead.source === "whatsapp").length;
  const quoteLeads = leads.filter((lead) => lead.source === "quote").length;

  const emailPages = countBy(emailEvents, "page").slice(0, 3);
  const latestEmailEvent = emailEvents[0];

  const now = new Date();
  const todayKey = activityDateKey(now.toISOString());
  const yesterday = new Date(now.getTime() - 86_400_000);
  const yesterdayKey = activityDateKey(yesterday.toISOString());
  const activityGroups = new Map<string, MonitoringEvent[]>();
  for (const event of humanEvents) {
    const ipAddress = event.ipAddress || "Unknown";
    activityGroups.set(ipAddress, [...(activityGroups.get(ipAddress) || []), event]);
  }

  const trendBuckets = buildTrend(range, pageViews, conversions);

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

  for (const event of humanEvents) {
    if (event.event !== "web_vital" || !event.metric || event.value === null) continue;
    metricGroups.set(event.metric, [...(metricGroups.get(event.metric) || []), event.value]);
  }

  const metrics = [...metricGroups.entries()].map(([name, values]) => ({
    name,
    average: values.reduce((sum, value) => sum + value, 0) / values.length,
    samples: values.length,
  }));
  const sitemapCount = 10 + services.length + gautengLocations.length + getAllLocationServiceRoutes().length;

  const latestWhatsappEvent = whatsappEvents[0];
  const latestQuoteClick = quoteClickEvents[0];

  return (
    <div className="min-h-screen bg-surface-container-low py-6 sm:py-12">
      <div className="mx-auto max-w-7xl space-y-5 sm:space-y-8 px-3.5 sm:px-6 lg:px-8">
        
        {/* Top Header Card */}
        <header className="border border-outline-variant bg-surface-container-lowest p-4 sm:p-6 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex items-center justify-between sm:justify-start gap-2">
                <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  Private Dashboard
                </span>
                <form action="/api/admin/logout" method="post" className="sm:hidden">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 rounded-full border border-outline-variant bg-white px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-wider text-secondary hover:text-primary transition-colors"
                  >
                    <LogOut className="h-3 w-3" /> Log out
                  </button>
                </form>
              </div>
              <h1 className="mt-2 text-left font-sans text-2xl sm:text-3xl font-bold uppercase tracking-tight text-primary">
                Site Monitoring
              </h1>
              <p className="mt-1 text-xs sm:text-sm text-on-surface-variant">
                Real-time traffic, client leads, conversion clicks, and mobile speed.
              </p>
              {botEventCount > 0 ? (
                <p className="mt-1 font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-outline">
                  {botEventCount.toLocaleString()} bot requests filtered
                </p>
              ) : null}
            </div>

            <div className="hidden sm:flex items-center gap-2">
              <form action="/api/admin/logout" method="post">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full border border-outline-variant bg-white px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-wider text-secondary hover:text-primary transition-colors shadow-sm"
                >
                  <LogOut className="h-3.5 w-3.5" /> Log out
                </button>
              </form>
            </div>
          </div>

          {/* Time Range Filter Bar */}
          <div className="mt-4 pt-3 border-t border-outline-variant flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 no-scrollbar">
              <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-outline mr-1 shrink-0">
                Range:
              </span>
              {(Object.keys(ranges) as RangeKey[]).map((key) => (
                <Link
                  key={key}
                  href={`/admin?range=${key}&view=${view}`}
                  className={`rounded-full border px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-wider shrink-0 transition-colors ${
                    range === key
                      ? "border-primary bg-primary text-white shadow-xs"
                      : "border-outline-variant bg-white text-secondary hover:border-primary"
                  }`}
                >
                  <span className="sm:hidden">{ranges[key].shortLabel}</span>
                  <span className="hidden sm:inline">{ranges[key].label}</span>
                </Link>
              ))}
            </div>

            <div className="shrink-0 flex items-center justify-end">
              <RefreshControls />
            </div>
          </div>
        </header>

        {/* Scrollable Mobile Tabs Navigation */}
        <nav className="flex items-center gap-1.5 overflow-x-auto no-scrollbar scroll-smooth whitespace-nowrap border-b border-outline-variant pb-1 -mx-3.5 px-3.5 sm:mx-0 sm:px-0 sm:flex-wrap">
          {(Object.keys(views) as ViewKey[]).map((key) => (
            <Link
              key={key}
              href={`/admin?range=${range}&view=${key}`}
              className={`rounded-full sm:rounded-none border-b-0 sm:border-b-2 px-4 py-2 font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider transition-colors shrink-0 ${
                view === key
                  ? "bg-primary text-white sm:bg-transparent sm:border-primary sm:text-primary shadow-xs sm:shadow-none"
                  : "bg-white sm:bg-transparent border border-outline-variant sm:border-transparent text-secondary hover:text-primary"
              }`}
            >
              {views[key]}
              {key === "leads" && leads.length > 0 ? (
                <span className={`ml-1.5 rounded-full px-1.5 py-0.5 text-[9px] ${view === key ? "bg-white/20 text-white sm:bg-primary/10 sm:text-primary" : "bg-surface-container text-secondary"}`}>
                  {leads.length}
                </span>
              ) : null}
            </Link>
          ))}
        </nav>

        {/* VIEW: OVERVIEW */}
        {view === "overview" ? (
          <>
            <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-4">
              <StatCard label="Page views" value={pageViews.length.toLocaleString()} icon={Activity} />
              <StatCard label="Visitors" value={uniqueVisitors.toLocaleString()} icon={Users} />
              <StatCard label="Sessions" value={uniqueSessions.toLocaleString()} icon={Users} />
              <StatCard label="Engaged IPs" value={uniqueEngagedIps.toLocaleString()} icon={MousePointerClick} />
              <StatCard label="Enquiries" value={conversions.length.toLocaleString()} icon={MousePointerClick} />
              <StatCard label="Action rate" value={`${conversionRate.toFixed(1)}%`} icon={Gauge} />
            </section>

            {trendBuckets ? (
              <section className="overflow-hidden border border-outline-variant bg-white shadow-sm">
                <SectionHeading
                  icon={Activity}
                  title="Traffic trend"
                  hint={range === "24h" ? "Page views and enquiry actions per hour." : "Page views and enquiry actions per day."}
                />
                <TrendChart buckets={trendBuckets} />
              </section>
            ) : null}

            <section className="grid gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
              <div className="border border-outline-variant bg-white p-4 sm:p-6 shadow-sm">
                <h2 className="text-left text-base sm:text-lg font-bold uppercase tracking-tight text-primary">Most viewed pages</h2>
                <div className="mt-4 space-y-2.5 sm:space-y-3">
                  {topPages.length ? topPages.map(([page, count]) => (
                    <div key={page} className="flex items-center justify-between gap-3 border-b border-outline-variant pb-2.5 text-xs sm:text-sm">
                      <span className="truncate text-on-surface-variant font-mono text-xs">{page}</span>
                      <span className="font-mono font-bold text-primary shrink-0">{count}</span>
                    </div>
                  )) : <p className="text-xs text-on-surface-variant">No page views recorded in this period.</p>}
                </div>
              </div>

              <div className="border border-outline-variant bg-white p-4 sm:p-6 shadow-sm">
                <h2 className="text-left text-base sm:text-lg font-bold uppercase tracking-tight text-primary">Enquiry actions</h2>
                <div className="mt-4 space-y-2.5 sm:space-y-3">
                  {topActions.length ? topActions.map(([event, count]) => (
                    <div key={event} className="flex items-center justify-between gap-3 border-b border-outline-variant pb-2.5 text-xs sm:text-sm">
                      <span className="text-on-surface-variant capitalize">{event.replaceAll("_", " ")}</span>
                      <span className="font-mono font-bold text-primary shrink-0">{count}</span>
                    </div>
                  )) : <p className="text-xs text-on-surface-variant">No enquiry actions recorded in this period.</p>}
                </div>
              </div>

              <div className="border border-outline-variant bg-white p-4 sm:p-6 shadow-sm">
                <h2 className="text-left text-base sm:text-lg font-bold uppercase tracking-tight text-primary">Clicked links</h2>
                <div className="mt-4 space-y-2.5 sm:space-y-3">
                  {topClickedDestinations.length ? topClickedDestinations.map(([destination, count]) => (
                    <div key={destination} className="flex items-center justify-between gap-3 border-b border-outline-variant pb-2.5 text-xs sm:text-sm">
                      <span className="truncate text-on-surface-variant font-mono text-xs">{destination}</span>
                      <span className="font-mono font-bold text-primary shrink-0">{count}</span>
                    </div>
                  )) : <p className="text-xs text-on-surface-variant">Clicked links will appear here.</p>}
                </div>
              </div>

              <div className="border border-outline-variant bg-white p-4 sm:p-6 shadow-sm">
                <div className="flex items-center gap-2">
                  <MonitorSmartphone className="h-4 sm:h-5 w-4 sm:w-5 text-secondary" />
                  <h2 className="text-left text-base sm:text-lg font-bold uppercase tracking-tight text-primary">Devices</h2>
                </div>
                <div className="mt-4 space-y-2.5 sm:space-y-3">
                  {deviceBreakdown.length ? deviceBreakdown.map(({ device, count }) => (
                    <div key={device} className="flex items-center justify-between gap-3 border-b border-outline-variant pb-2.5 text-xs sm:text-sm">
                      <span className="capitalize text-on-surface-variant">{device}</span>
                      <span className="font-mono font-bold text-primary shrink-0">{count}</span>
                    </div>
                  )) : <p className="text-xs text-on-surface-variant">Device breakdown will appear once recorded.</p>}
                  <p className="pt-1 text-[10px] text-outline">Unique sessions per device type.</p>
                </div>
              </div>
            </section>

            {/* Recent Visitor Journeys */}
            <section className="overflow-hidden border border-outline-variant bg-white shadow-sm">
              <SectionHeading icon={Users} title="Recent visitor journeys" hint="Anonymous session paths from entry through to quote enquiry actions." />
              
              {/* Mobile Journey Cards */}
              <div className="md:hidden divide-y divide-outline-variant">
                {recentJourneys.length ? recentJourneys.map((journey) => (
                  <div key={journey.sessionId} className="p-4 space-y-2.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono font-bold text-primary">
                        ID: {journey.visitorId ? journey.visitorId.slice(0, 8) : "Legacy"}
                      </span>
                      <span className="font-mono text-[10px] text-outline">{zaTime(journey.startedAt)}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-1 text-[11px] font-mono text-on-surface-variant bg-surface-container-low p-2 rounded">
                      {journey.pages.length ? journey.pages.map((p, idx) => (
                        <Fragment key={idx}>
                          {idx > 0 && <span className="text-outline">&rarr;</span>}
                          <span className="truncate max-w-[140px]">{p}</span>
                        </Fragment>
                      )) : "Direct session"}
                    </div>
                    <div className="flex items-center justify-between pt-1 text-xs">
                      <div className="flex items-center gap-3 font-mono text-[10px] text-outline">
                        <span>{journey.pageViews} views</span>
                        <span>{journey.clicks} clicks</span>
                      </div>
                      <span className="rounded-full bg-emerald-50 px-2 py-0.5 font-mono text-[9px] font-bold uppercase text-emerald-700">
                        {journey.outcomes.length ? journey.outcomes.map((o) => o.replaceAll("_", " ")).join(", ") : "Browsing"}
                      </span>
                    </div>
                  </div>
                )) : (
                  <p className="p-6 text-center text-xs text-on-surface-variant">Visitor journeys will appear here.</p>
                )}
              </div>

              {/* Desktop Journey Table */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full min-w-[900px] text-left text-xs">
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
          </>
        ) : null}

        {/* VIEW: LEADS (MOBILE-OPTIMIZED CRM VIEW) */}
        {view === "leads" ? (
          <>
            <section className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4">
              <StatCard label="Total leads" value={leads.length.toLocaleString()} icon={Users} />
              <StatCard label="Unique IPs" value={leadsUniqueIps.toLocaleString()} icon={Globe} />
              <StatCard label="From WhatsApp" value={whatsappLeads.toLocaleString()} icon={MessageCircle} />
              <StatCard label="From Quote Form" value={quoteLeads.toLocaleString()} icon={FileText} />
            </section>

            <section className="overflow-hidden border border-outline-variant bg-white shadow-sm">
              <SectionHeading
                icon={FileText}
                title="Client details"
                hint="Captured contact and project details from visitors requesting quotes. Stored privately."
                action={(
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto">
                    <form action="/admin" className="flex items-center gap-1.5 w-full sm:w-auto">
                      <input type="hidden" name="view" value="leads" />
                      <input type="hidden" name="range" value={range} />
                      <div className="relative flex-1 sm:w-60">
                        <input
                          type="search"
                          name="q"
                          defaultValue={leadQuery}
                          placeholder="Search name, phone, area…"
                          aria-label="Search leads"
                          className="w-full border border-outline-variant bg-white px-3 py-2 text-xs text-primary placeholder:text-outline focus:border-secondary focus:outline-none rounded-none"
                        />
                      </div>
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-1 rounded-full border border-outline-variant bg-white px-3.5 py-2 font-mono text-[10px] font-bold uppercase tracking-wider text-secondary hover:text-primary transition-colors shrink-0"
                      >
                        <Search className="h-3 w-3" />
                      </button>
                      {leadQuery ? (
                        <Link
                          href={`/admin?view=leads&range=${range}`}
                          className="rounded-full border border-outline-variant bg-white px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-wider text-secondary shrink-0"
                        >
                          Clear
                        </Link>
                      ) : null}
                    </form>
                    <a
                      href="/api/admin/leads/export"
                      className="inline-flex items-center justify-center gap-1.5 rounded-full border border-outline-variant bg-white px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-wider text-secondary hover:text-primary transition-colors shrink-0 shadow-xs"
                    >
                      <Download className="h-3 w-3" /> Export CSV
                    </a>
                  </div>
                )}
              />

              {leads.length ? (
                <>
                  {/* MOBILE LEADS CARDS (Native CRM Experience on Phones) */}
                  <div className="md:hidden divide-y divide-outline-variant">
                    {visibleLeads.map((lead, index) => (
                      <article key={`${lead.timestamp}-${index}`} className="p-4 space-y-3 bg-white hover:bg-surface-container-low transition-colors">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h3 className="font-sans text-base font-bold text-primary">{lead.name}</h3>
                            <p className="font-mono text-[10px] text-outline mt-0.5">{zaDateTime(lead.timestamp)}</p>
                          </div>
                          <span className={`rounded-full px-2 py-0.5 font-mono text-[9px] font-bold uppercase shrink-0 ${sourceBadgeClass(lead.source)}`}>
                            {lead.source}
                          </span>
                        </div>

                        {/* Location & Budget Row */}
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="flex items-center gap-1.5 text-on-surface-variant bg-surface-container-lowest border border-outline-variant/60 p-2 rounded">
                            <MapPin className="h-3.5 w-3.5 text-secondary shrink-0" />
                            <span className="truncate">{lead.location || "Location not given"}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-primary font-semibold bg-surface-container-lowest border border-outline-variant/60 p-2 rounded">
                            <span className="text-[10px] font-mono text-outline uppercase shrink-0">Budget:</span>
                            <span className="truncate">{lead.budget || "Standard"}</span>
                          </div>
                        </div>

                        {/* Direct Action Buttons for Mobile Phone */}
                        <div className="flex items-center gap-2 pt-1">
                          <a
                            href={`tel:${lead.phone}`}
                            className="flex-1 inline-flex items-center justify-center gap-1.5 border border-outline-variant bg-surface hover:bg-surface-container py-2 px-3 rounded-full font-mono text-[10px] font-bold uppercase tracking-wider text-secondary transition-colors"
                          >
                            <Phone className="h-3.5 w-3.5 text-secondary" />
                            Call Client
                          </a>
                          <a
                            href={phoneToWhatsAppUrl(lead.phone, lead.name)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-white py-2 px-3 rounded-full font-mono text-[10px] font-bold uppercase tracking-wider transition-colors shadow-xs"
                          >
                            <MessageCircle className="h-3.5 w-3.5 fill-white" />
                            WhatsApp
                          </a>
                        </div>
                      </article>
                    ))}
                  </div>

                  {/* DESKTOP LEADS TABLE */}
                  <div className="hidden md:block overflow-x-auto">
                    <table className="w-full min-w-[860px] text-left text-xs">
                      <thead className="bg-surface-container text-[10px] uppercase tracking-wider text-secondary">
                        <tr>
                          <th className="p-3">Date</th>
                          <th className="p-3">Name</th>
                          <th className="p-3">Phone</th>
                          <th className="p-3">Location</th>
                          <th className="p-3">Budget</th>
                          <th className="p-3">Source</th>
                          <th className="p-3">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-outline-variant">
                        {visibleLeads.map((lead, index) => (
                          <tr key={`${lead.timestamp}-${index}`} className="hover:bg-surface-container-low transition-colors">
                            <td className="whitespace-nowrap p-3 text-outline">{zaDateTime(lead.timestamp)}</td>
                            <td className="p-3 font-bold text-primary">{lead.name}</td>
                            <td className="whitespace-nowrap p-3 font-mono text-on-surface-variant">{lead.phone}</td>
                            <td className="p-3 text-on-surface-variant">{lead.location}</td>
                            <td className="p-3 text-on-surface-variant">{lead.budget}</td>
                            <td className="p-3">
                              <span className={`rounded-full px-2 py-1 font-mono text-[9px] font-bold uppercase ${sourceBadgeClass(lead.source)}`}>
                                {lead.source}
                              </span>
                            </td>
                            <td className="whitespace-nowrap p-3">
                              <div className="flex items-center gap-2">
                                <a
                                  href={`tel:${lead.phone}`}
                                  className="inline-flex items-center gap-1 rounded-full border border-outline-variant bg-white px-2.5 py-1 font-mono text-[9px] font-bold uppercase text-secondary hover:text-primary transition-colors"
                                >
                                  <Phone className="h-3 w-3" /> Call
                                </a>
                                <a
                                  href={phoneToWhatsAppUrl(lead.phone, lead.name)}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 rounded-full bg-[#25D366] px-2.5 py-1 font-mono text-[9px] font-bold uppercase text-white hover:bg-[#20ba5a] transition-colors"
                                >
                                  <MessageCircle className="h-3 w-3" /> Chat
                                </a>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Pagination Bar */}
                  {leadsTotalPages > 1 ? (
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-outline-variant px-4 py-3 text-xs">
                      <span className="text-on-surface-variant text-center sm:text-left">
                        Page {leadsCurrentPage} of {leadsTotalPages} · {leads.length.toLocaleString()} matching {leads.length === 1 ? "lead" : "leads"}
                      </span>
                      <div className="flex items-center gap-2">
                        {leadsCurrentPage > 1 ? (
                          <Link href={leadsHref(leadsCurrentPage - 1)} className="rounded-full border border-outline-variant bg-white px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-wider text-secondary hover:text-primary">
                            Previous
                          </Link>
                        ) : null}
                        {leadsCurrentPage < leadsTotalPages ? (
                          <Link href={leadsHref(leadsCurrentPage + 1)} className="rounded-full border border-outline-variant bg-white px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-wider text-secondary hover:text-primary">
                            Next
                          </Link>
                        ) : null}
                      </div>
                    </div>
                  ) : null}
                </>
              ) : (
                <p className="p-8 text-center text-xs text-on-surface-variant">
                  {leadQuery ? "No client details match this search." : "Client details will appear here after visitors complete the quote form."}
                </p>
              )}
            </section>
          </>
        ) : null}

        {/* VIEW: WHATSAPP */}
        {view === "whatsapp" ? (
          <>
            <section className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4">
              <StatCard label="WhatsApp clicks" value={whatsappEvents.length.toLocaleString()} icon={MessageCircle} />
              <StatCard label="Unique IPs" value={whatsappUniqueIps.toLocaleString()} icon={Globe} />
              <StatCard label="Sessions" value={whatsappSessions.toLocaleString()} icon={Users} />
              <StatCard label="Latest click" value={latestWhatsappEvent ? zaDateTime(latestWhatsappEvent.timestamp) : "—"} icon={Clock} />
            </section>

            <section className="overflow-hidden border border-outline-variant bg-white shadow-sm">
              <SectionHeading
                icon={MessageCircle}
                title="WhatsApp monitoring"
                hint={`${whatsappByIp.length} IP ${whatsappByIp.length === 1 ? "address" : "addresses"} with ${whatsappEvents.length} click${whatsappEvents.length === 1 ? "" : "s"}. Expand an entry for click logs.`}
              />
              {whatsappByIp.length ? (
                <div className="divide-y divide-outline-variant">
                  {whatsappByIp.map(([ip, list]) => {
                    const latest = list[0];
                    const pageCount = new Set(list.map((event) => event.page).filter(Boolean)).size;
                    return (
                      <details key={ip} className="group">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-3.5 transition-colors hover:bg-surface-container-low [&::-webkit-details-marker]:hidden">
                          <div className="min-w-0">
                            <p className="break-all font-mono text-xs font-bold text-primary">{ip}</p>
                            <p className="mt-0.5 text-[10px] text-outline">
                              Latest: {zaDateTime(latest.timestamp)}
                            </p>
                          </div>
                          <div className="flex shrink-0 items-center gap-3">
                            <div className="text-right font-mono text-[9px] font-bold uppercase tracking-wider text-outline">
                              <p>{pageCount} {pageCount === 1 ? "page" : "pages"}</p>
                              <p>{list.length} {list.length === 1 ? "click" : "clicks"}</p>
                            </div>
                            <ChevronDown className="h-4 w-4 text-secondary transition-transform group-open:rotate-180" aria-hidden="true" />
                          </div>
                        </summary>

                        {/* Mobile Details List */}
                        <div className="md:hidden divide-y divide-outline-variant border-t border-outline-variant bg-surface-container-lowest">
                          {list.map((event, index) => (
                            <div key={`${event.timestamp}-${index}`} className="p-3 text-xs space-y-1">
                              <div className="flex items-center justify-between text-[10px] text-outline">
                                <span>{zaTime(event.timestamp)}</span>
                                <span className="truncate max-w-[150px]">{event.referrer || "Direct"}</span>
                              </div>
                              <p className="font-semibold text-primary">{event.label || event.destination || "WhatsApp Button"}</p>
                              <p className="font-mono text-[10px] text-on-surface-variant truncate">{event.page}</p>
                            </div>
                          ))}
                        </div>

                        {/* Desktop Table */}
                        <div className="hidden md:block overflow-x-auto border-t border-outline-variant">
                          <table className="w-full min-w-[720px] text-left text-xs">
                            <thead className="bg-surface-container text-[10px] uppercase tracking-wider text-secondary">
                              <tr><th className="p-3">Time</th><th className="p-3">Page</th><th className="p-3">Clicked</th><th className="p-3">Referrer</th></tr>
                            </thead>
                            <tbody className="divide-y divide-outline-variant">
                              {list.map((event, index) => (
                                <tr key={`${event.timestamp}-${index}`}>
                                  <td className="whitespace-nowrap p-3 text-outline">{zaTime(event.timestamp)}</td>
                                  <td className="max-w-52 truncate p-3 text-on-surface-variant">{event.page}</td>
                                  <td className="max-w-64 truncate p-3 text-primary">{event.label || event.destination || "—"}</td>
                                  <td className="max-w-52 truncate p-3 text-on-surface-variant">{event.referrer || "—"}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </details>
                    );
                  })}
                </div>
              ) : (
                <p className="p-6 text-center text-xs text-on-surface-variant">WhatsApp clicks will appear here after visitors use a WhatsApp button.</p>
              )}
            </section>
          </>
        ) : null}

        {/* VIEW: QUOTES */}
        {view === "quotes" ? (
          <>
            <section className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4">
              <StatCard label="Quote clicks" value={quoteClickEvents.length.toLocaleString()} icon={MousePointerClick} />
              <StatCard label="Unique IPs" value={quoteUniqueIps.toLocaleString()} icon={Globe} />
              <StatCard label="Latest request" value={latestQuoteClick ? zaDateTime(latestQuoteClick.timestamp) : "—"} icon={Clock} />
              <StatCard label="Captured leads" value={quoteLeads.toLocaleString()} icon={FileText} />
            </section>

            <section className="overflow-hidden border border-outline-variant bg-white shadow-sm">
              <SectionHeading
                icon={FileText}
                title="Quote monitoring"
                hint={`${quoteByIp.length} IP addresses across ${quoteClickEvents.length} quote requests. Contact details are shown under the Leads tab.`}
              />
              {quoteByIp.length ? (
                <div className="divide-y divide-outline-variant">
                  {quoteByIp.map(([ip, list]) => {
                    const latest = list[0];
                    const pageCount = new Set(list.map((event) => event.page).filter(Boolean)).size;
                    return (
                      <details key={ip} className="group">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-3.5 transition-colors hover:bg-surface-container-low [&::-webkit-details-marker]:hidden">
                          <div className="min-w-0">
                            <p className="break-all font-mono text-xs font-bold text-primary">{ip}</p>
                            <p className="mt-0.5 text-[10px] text-outline">
                              Latest: {zaDateTime(latest.timestamp)}
                            </p>
                          </div>
                          <div className="flex shrink-0 items-center gap-3">
                            <div className="text-right font-mono text-[9px] font-bold uppercase tracking-wider text-outline">
                              <p>{pageCount} {pageCount === 1 ? "page" : "pages"}</p>
                              <p>{list.length} {list.length === 1 ? "request" : "requests"}</p>
                            </div>
                            <ChevronDown className="h-4 w-4 text-secondary transition-transform group-open:rotate-180" aria-hidden="true" />
                          </div>
                        </summary>

                        {/* Mobile Details List */}
                        <div className="md:hidden divide-y divide-outline-variant border-t border-outline-variant bg-surface-container-lowest">
                          {list.map((event, index) => (
                            <div key={`${event.timestamp}-${index}`} className="p-3 text-xs space-y-1">
                              <div className="flex items-center justify-between text-[10px] text-outline">
                                <span>{zaTime(event.timestamp)}</span>
                                <span className="truncate max-w-[150px]">{event.referrer || "Direct"}</span>
                              </div>
                              <p className="font-semibold text-primary">{event.label || event.destination || "Quote Button"}</p>
                              <p className="font-mono text-[10px] text-on-surface-variant truncate">{event.page}</p>
                            </div>
                          ))}
                        </div>

                        {/* Desktop Table */}
                        <div className="hidden md:block overflow-x-auto border-t border-outline-variant">
                          <table className="w-full min-w-[720px] text-left text-xs">
                            <thead className="bg-surface-container text-[10px] uppercase tracking-wider text-secondary">
                              <tr><th className="p-3">Time</th><th className="p-3">Page</th><th className="p-3">Clicked</th><th className="p-3">Referrer</th></tr>
                            </thead>
                            <tbody className="divide-y divide-outline-variant">
                              {list.map((event, index) => (
                                <tr key={`${event.timestamp}-${index}`}>
                                  <td className="whitespace-nowrap p-3 text-outline">{zaTime(event.timestamp)}</td>
                                  <td className="max-w-52 truncate p-3 text-on-surface-variant">{event.page}</td>
                                  <td className="max-w-64 truncate p-3 text-primary">{event.label || event.destination || "—"}</td>
                                  <td className="max-w-52 truncate p-3 text-on-surface-variant">{event.referrer || "—"}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </details>
                    );
                  })}
                </div>
              ) : (
                <p className="p-6 text-center text-xs text-on-surface-variant">Quote activity will appear here after visitors request a quotation.</p>
              )}
            </section>
          </>
        ) : null}

        {/* VIEW: ACTIVITY */}
        {view === "activity" ? (
          <section className="grid items-start gap-4 sm:gap-6 lg:grid-cols-[minmax(16rem,0.85fr)_minmax(0,2fr)]">
            <div className="space-y-4 sm:space-y-6">
              <div className="border border-outline-variant bg-white p-4 sm:p-6 shadow-sm">
                <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">Conversion monitoring</p>
                <h2 className="mt-1 text-left text-lg sm:text-xl font-bold uppercase tracking-tight text-primary">Engaged IP addresses</h2>
                <div className="mt-4 space-y-2.5">
                  {engagedIps.length ? engagedIps.map(([ipAddress, count]) => (
                    <div key={ipAddress} className="flex items-center justify-between gap-4 border-b border-outline-variant pb-2 text-xs">
                      <span className="font-mono text-primary truncate">{ipAddress}</span>
                      <span className="font-mono font-bold text-secondary shrink-0">{count} {count === 1 ? "action" : "actions"}</span>
                    </div>
                  )) : <p className="text-xs text-on-surface-variant">IP addresses will appear after visitor enquiries.</p>}
                </div>
              </div>

              <div className="border border-outline-variant bg-white p-4 sm:p-6 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">Conversion tracking</p>
                    <h2 className="mt-1 text-left text-lg sm:text-xl font-bold uppercase tracking-tight text-primary">Email monitoring</h2>
                  </div>
                  <Mail className="h-5 w-5 shrink-0 text-secondary" />
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3 border-y border-outline-variant py-3">
                  <div>
                    <p className="font-mono text-[9px] font-bold uppercase tracking-wider text-outline">Clicks</p>
                    <p className="mt-1 text-xl sm:text-2xl font-bold text-primary">{emailEvents.length.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[9px] font-bold uppercase tracking-wider text-outline">Sessions</p>
                    <p className="mt-1 text-xl sm:text-2xl font-bold text-primary">{emailSessions.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden border border-outline-variant bg-white shadow-sm">
              <SectionHeading
                icon={Activity}
                title="Recent activity"
                hint={`Showing all ${activityGroups.size} IP addresses and ${humanEvents.length.toLocaleString()} events.`}
              />
              <div className="divide-y divide-outline-variant">
                {[...activityGroups.entries()].map(([ipAddress, activity]) => {
                  const dateGroups = groupActivityByDate(activity);
                  const sessionCount = new Set(activity.map((event) => event.sessionId).filter(Boolean)).size;
                  const latestEvent = activity[0];

                  return (
                    <details key={ipAddress} className="group">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 bg-white px-4 py-3.5 transition-colors hover:bg-surface-container-low [&::-webkit-details-marker]:hidden">
                        <div className="min-w-0">
                          <p className="break-all font-mono text-xs font-bold text-primary">{ipAddress}</p>
                          <p className="mt-0.5 text-[10px] text-outline">
                            Latest: {latestEvent ? zaDateTime(latestEvent.timestamp) : "Unknown"}
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

                      {/* Mobile Activity List */}
                      <div className="md:hidden divide-y divide-outline-variant border-t border-outline-variant bg-surface-container-lowest">
                        {[...dateGroups.entries()].map(([dateKey, datedActivity]) => (
                          <div key={dateKey}>
                            <div className="bg-surface-container-low px-3 py-1.5 font-mono text-[10px] font-bold uppercase text-secondary">
                              {activityDateLabel(dateKey, todayKey, yesterdayKey)}
                            </div>
                            {datedActivity.map((event, index) => (
                              <div key={`${event.timestamp}-${index}`} className="p-3 text-xs space-y-1">
                                <div className="flex items-center justify-between text-[10px]">
                                  <span className="font-mono text-outline">{zaTime(event.timestamp)}</span>
                                  <span className="font-mono font-bold text-primary">{event.event}</span>
                                </div>
                                <p className="font-mono text-[10px] text-on-surface-variant truncate">{event.page}</p>
                                {(event.label || event.destination || event.metric) && (
                                  <p className="text-[10px] text-outline truncate">{event.metric ? `${event.metric}: ${event.value}` : event.label || event.destination}</p>
                                )}
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>

                      {/* Desktop Table */}
                      <div className="hidden md:block overflow-x-auto border-t border-outline-variant">
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
                                    <td className="whitespace-nowrap p-3 text-outline">{zaTime(event.timestamp)}</td>
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
              </div>
            </div>
          </section>
        ) : null}

        {/* VIEW: PERFORMANCE / SPEED */}
        {view === "performance" ? (
          <>
            <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-4">
              {metrics.length ? metrics.map((metric) => {
                const rating = metricRating(metric.name, metric.average);
                return (
                  <article key={metric.name} className="border border-outline-variant bg-white p-3.5 sm:p-4 shadow-sm">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-xs font-bold text-primary">{metric.name}</span>
                      <span className={`rounded-full px-2 py-0.5 text-[9px] font-bold uppercase ${rating.className}`}>{rating.label}</span>
                    </div>
                    <p className="mt-2 text-lg sm:text-xl font-bold text-primary">{formatMetric(metric.name, metric.average)}</p>
                    <p className="mt-0.5 text-[10px] text-outline">{metric.samples} samples</p>
                  </article>
                );
              }) : <p className="text-sm text-on-surface-variant">Performance data will appear after visitors load the site.</p>}
            </section>

            <section className="grid items-start gap-4 sm:gap-6 md:grid-cols-2">
              <div className="border border-outline-variant bg-primary p-5 sm:p-6 text-white shadow-sm">
                <Search className="h-5 w-5 sm:h-6 sm:w-6" />
                <h2 className="mt-3 text-left text-lg sm:text-xl font-bold uppercase">Search indexing</h2>
                <p className="mt-2 text-xs sm:text-sm text-white/70">{sitemapCount.toLocaleString()} canonical public URLs are partitioned in XML sitemaps.</p>
                <a href={absoluteUrl("/sitemap.xml")} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider underline">
                  Open sitemap <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
              <div className="border border-outline-variant bg-white p-5 sm:p-6 shadow-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-secondary" />
                  <h2 className="text-left text-base sm:text-lg font-bold uppercase tracking-tight text-primary">Coverage &amp; Security</h2>
                </div>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-on-surface-variant">
                  Monitoring is served with a private, authenticated session. Contact actions and lead phone numbers remain strictly visible to administrators only.
                </p>
              </div>
            </section>
          </>
        ) : null}

        {/* VIEW: ERRORS */}
        {view === "errors" ? (
          <>
            <section className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4">
              <StatCard label="JS errors" value={errorEvents.length.toLocaleString()} icon={AlertTriangle} />
              <StatCard label="Distinct issues" value={errorGroups.size.toLocaleString()} icon={Activity} />
              <StatCard label="Affected sessions" value={errorSessions.toLocaleString()} icon={Users} />
              <StatCard label="Latest error" value={errorEvents[0] ? zaDateTime(errorEvents[0].timestamp) : "—"} icon={Clock} />
            </section>

            <section className="overflow-hidden border border-outline-variant bg-white shadow-sm">
              <SectionHeading
                icon={AlertTriangle}
                title="Top issues"
                hint="Client-side JavaScript errors grouped by message and page."
              />
              {topErrors.length ? (
                <>
                  {/* Mobile Errors Cards */}
                  <div className="md:hidden divide-y divide-outline-variant">
                    {topErrors.map((group) => (
                      <div key={`${group.message}-${group.page}`} className="p-4 space-y-1.5 text-xs">
                        <div className="flex items-start justify-between gap-2">
                          <p className="font-mono font-bold text-red-700 break-all">{group.message}</p>
                          <span className="rounded-full bg-red-50 px-2 py-0.5 font-mono text-[9px] font-bold text-red-700 shrink-0">
                            {group.count}x
                          </span>
                        </div>
                        <p className="font-mono text-[10px] text-on-surface-variant truncate">{group.page}</p>
                        <p className="text-[10px] text-outline">Last seen: {zaDateTime(group.lastSeen)}</p>
                      </div>
                    ))}
                  </div>

                  {/* Desktop Errors Table */}
                  <div className="hidden md:block overflow-x-auto">
                    <table className="w-full min-w-[760px] text-left text-xs">
                      <thead className="bg-surface-container text-[10px] uppercase tracking-wider text-secondary">
                        <tr><th className="p-3">Error</th><th className="p-3">Page</th><th className="p-3">Count</th><th className="p-3">First seen</th><th className="p-3">Last seen</th></tr>
                      </thead>
                      <tbody className="divide-y divide-outline-variant">
                        {topErrors.map((group) => (
                          <tr key={`${group.message}-${group.page}`}>
                            <td className="max-w-md p-3 font-mono font-bold text-primary">{group.message}</td>
                            <td className="max-w-52 truncate p-3 text-on-surface-variant">{group.page}</td>
                            <td className="p-3 font-mono font-bold text-primary">{group.count}</td>
                            <td className="whitespace-nowrap p-3 text-outline">{zaDateTime(group.firstSeen)}</td>
                            <td className="whitespace-nowrap p-3 text-outline">{zaDateTime(group.lastSeen)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              ) : (
                <p className="p-6 text-center text-xs text-on-surface-variant">No JavaScript errors were recorded in this period.</p>
              )}
            </section>
          </>
        ) : null}

      </div>
    </div>
  );
}
