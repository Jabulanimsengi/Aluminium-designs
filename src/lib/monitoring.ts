import { open, stat } from "node:fs/promises";
import path from "node:path";

export type MonitoringEvent = {
  event: string;
  page: string;
  label: string;
  destination: string;
  timestamp: string;
  sessionId: string;
  visitorId: string;
  referrer: string;
  metric: string;
  value: number | null;
};

const MAX_READ_BYTES = 5 * 1024 * 1024;

export function getMonitoringEventsPath() {
  const eventsDirectory =
    process.env.MONITORING_EVENTS_PATH?.trim() || path.join(process.cwd(), "data");
  return path.join(eventsDirectory, "monitoring-events.ndjson");
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
              page: event.page || "(unknown)",
              label: event.label || "",
              destination: event.destination || "",
              timestamp: event.timestamp,
              sessionId: event.sessionId || "",
              visitorId: event.visitorId || "",
              referrer: event.referrer || "",
              metric: event.metric || "",
              value: typeof event.value === "number" ? event.value : null,
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
