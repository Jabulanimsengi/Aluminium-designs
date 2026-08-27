import { appendFile, mkdir, open, readFile, rename, stat, writeFile } from "node:fs/promises";
import { isIP } from "node:net";
import path from "node:path";

export type DeviceType = "desktop" | "mobile" | "tablet" | "unknown";

export type MonitoringEvent = {
  event: string;
  ipAddress: string;
  page: string;
  label: string;
  destination: string;
  timestamp: string;
  sessionId: string;
  visitorId: string;
  referrer: string;
  metric: string;
  value: number | null;
  detail: string;
  isBot: boolean;
  deviceType: DeviceType;
};

const MAX_READ_BYTES = 32 * 1024 * 1024;
const PRUNE_THRESHOLD_BYTES = 24 * 1024 * 1024;
const DEFAULT_RETENTION_DAYS = 180;

const pruningInFlight = new Set<string>();

const BOT_SIGNATURES = [
  "bot",
  "crawler",
  "spider",
  "slurp",
  "curl",
  "wget",
  "python-requests",
  "python-urllib",
  "httpclient",
  "java/",
  "go-http-client",
  "headlesschrome",
  "lighthouse",
  "pagespeed",
  "gtmetrix",
  "pingdom",
  "uptimerobot",
  "site24x7",
  "semrush",
  "ahrefs",
  "mj12",
  "dotbot",
  "petalbot",
  "applebot",
  "bingpreview",
  "duckduckbot",
  "googlebot",
  "yandex",
  "baidu",
  "sogou",
  "facebookexternalhit",
  "twitterbot",
  "linkedinbot",
  "whatsapp",
  "telegrambot",
  "embedly",
  "quora link preview",
  "outbrain",
  "vkshare",
  "validator",
  "monitoring",
  "archiver",
  "fetcher",
];

export function getDataDir() {
  return process.env.MONITORING_EVENTS_PATH?.trim() || path.join(process.cwd(), "data");
}

export function getMonitoringEventsPath() {
  return path.join(getDataDir(), "monitoring-events.ndjson");
}

export function retentionMilliseconds() {
  const days = Number(process.env.MONITORING_RETENTION_DAYS);
  if (Number.isFinite(days) && days > 0) return days * 86_400_000;
  return DEFAULT_RETENTION_DAYS * 86_400_000;
}

export function classifyUserAgent(userAgent: string | null): {
  isBot: boolean;
  deviceType: DeviceType;
} {
  const ua = (userAgent || "").slice(0, 300).toLowerCase();
  if (!ua) return { isBot: false, deviceType: "unknown" };

  const isBot = BOT_SIGNATURES.some((signature) => ua.includes(signature));
  const isTablet =
    /ipad|tablet|playbook|silk|kindle/.test(ua) || (/android/.test(ua) && !/mobile/.test(ua));
  const isMobile = /mobi|iphone|ipod|windows phone|android/.test(ua);

  const deviceType: DeviceType = isTablet ? "tablet" : isMobile ? "mobile" : "desktop";
  return { isBot, deviceType };
}

function timestampOf(line: string) {
  try {
    const parsed = JSON.parse(line) as { timestamp?: unknown };
    if (typeof parsed.timestamp !== "string") return null;
    const time = Date.parse(parsed.timestamp);
    return Number.isFinite(time) ? time : null;
  } catch {
    return null;
  }
}

async function pruneNdjson(filePath: string) {
  if (pruningInFlight.has(filePath)) return;
  pruningInFlight.add(filePath);

  try {
    const content = await readFile(filePath, "utf8");
    const cutoff = Date.now() - retentionMilliseconds();
    const kept = content
      .split("\n")
      .filter(Boolean)
      .filter((line) => {
        const time = timestampOf(line);
        return time === null || time >= cutoff;
      });
    const tempPath = `${filePath}.tmp`;
    await writeFile(tempPath, kept.length ? `${kept.join("\n")}\n` : "", "utf8");
    await rename(tempPath, filePath);
  } catch (error) {
    console.warn("Unable to prune monitoring data file", error);
  } finally {
    pruningInFlight.delete(filePath);
  }
}

async function maybePruneNdjson(filePath: string) {
  try {
    const fileStat = await stat(filePath);
    if (fileStat.size > PRUNE_THRESHOLD_BYTES) void pruneNdjson(filePath);
  } catch {
    // Nothing to prune for a missing file.
  }
}

export function monitoringWindowStart(milliseconds: number) {
  return Date.now() - milliseconds;
}

export async function readMonitoringEvents(): Promise<MonitoringEvent[]> {
  const filePath = getMonitoringEventsPath();

  try {
    const fileStat = await stat(filePath);
    const start = Math.max(0, fileStat.size - MAX_READ_BYTES);
    const length = fileStat.size - start;
    const handle = await open(filePath, "r");

    try {
      const buffer = Buffer.alloc(length);
      await handle.read(buffer, 0, length, start);
      let content = buffer.toString("utf8");
      if (start > 0) content = content.slice(content.indexOf("\n") + 1);

      return content
        .split("\n")
        .filter(Boolean)
        .flatMap((line) => {
          try {
            const event = JSON.parse(line) as Partial<MonitoringEvent>;
            if (!event.event || !event.timestamp) return [];
            return [{
              event: event.event,
              ipAddress: event.ipAddress || "",
              page: event.page || "(unknown)",
              label: event.label || "",
              destination: event.destination || "",
              timestamp: event.timestamp,
              sessionId: event.sessionId || "",
              visitorId: event.visitorId || "",
              referrer: event.referrer || "",
              metric: event.metric || "",
              value: typeof event.value === "number" ? event.value : null,
              detail: event.detail || "",
              isBot: event.isBot === true,
              deviceType: (event.deviceType as DeviceType) || "unknown",
            }];
          } catch {
            return [];
          }
        });
    } finally {
      await handle.close();
    }
  } catch (error) {
    const code = error instanceof Error && "code" in error ? error.code : undefined;
    if (code === "ENOENT") return [];
    console.error("Unable to read monitoring events", error);
    return [];
  }
}

function validIp(value: string | null) {
  if (!value) return "";
  const candidate = value.trim().replace(/^"|"$/g, "");
  if (isIP(candidate)) return candidate;

  const ipv4WithPort = candidate.match(/^(.+):(\d+)$/)?.[1] || "";
  return isIP(ipv4WithPort) === 4 ? ipv4WithPort : "";
}

export function extractClientIp(headers: Headers) {
  const realIp = validIp(headers.get("x-real-ip"));
  if (realIp) return realIp;

  const cloudflareIp = validIp(headers.get("cf-connecting-ip"));
  if (cloudflareIp) return cloudflareIp;

  const forwardedFor = headers.get("x-forwarded-for");
  return validIp(forwardedFor?.split(",")[0] || null);
}

export async function appendMonitoringEvent(event: MonitoringEvent) {
  const eventsPath = getMonitoringEventsPath();
  await mkdir(path.dirname(eventsPath), { recursive: true });
  await appendFile(eventsPath, `${JSON.stringify(event)}\n`, "utf8");
  await maybePruneNdjson(eventsPath);
}

export async function appendNdjsonLine(filePath: string, line: string) {
  await mkdir(path.dirname(filePath), { recursive: true });
  await appendFile(filePath, line, "utf8");
  await maybePruneNdjson(filePath);
}
