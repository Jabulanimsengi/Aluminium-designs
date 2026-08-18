import { appendFile, mkdir, open, stat } from "node:fs/promises";
import { isIP } from "node:net";
import path from "node:path";

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
};

const MAX_READ_BYTES = 5 * 1024 * 1024;

export function getDataDir() {
  return process.env.MONITORING_EVENTS_PATH?.trim() || path.join(process.cwd(), "data");
}

export function getMonitoringEventsPath() {
  return path.join(getDataDir(), "monitoring-events.ndjson");
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
}
