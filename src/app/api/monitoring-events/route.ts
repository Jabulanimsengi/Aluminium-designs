import { mkdir, appendFile } from "node:fs/promises";
import path from "node:path";
import { NextRequest, NextResponse } from "next/server";
import { getMonitoringEventsPath } from "@/lib/monitoring";

export const runtime = "nodejs";

const MAX_EVENT_SIZE = 2_000;
const MAX_EVENTS_PER_MINUTE = 60;
const rateLimits = new Map<string, { count: number; resetAt: number }>();

type MonitoringEvent = {
  event: string;
  page?: string;
  label?: string;
  destination?: string;
  timestamp?: string;
  sessionId?: string;
  visitorId?: string;
  referrer?: string;
  metric?: string;
  value?: number;
};

function safeValue(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function isAllowed(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const clientId = forwardedFor?.split(",")[0]?.trim() || "unknown";
  const now = Date.now();
  const current = rateLimits.get(clientId);

  if (!current || current.resetAt <= now) {
    rateLimits.set(clientId, { count: 1, resetAt: now + 60_000 });
    return true;
  }

  if (current.count >= MAX_EVENTS_PER_MINUTE) return false;
  current.count += 1;
  return true;
}

export async function POST(request: NextRequest) {
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > MAX_EVENT_SIZE || !isAllowed(request)) {
    return new NextResponse(null, { status: 204 });
  }

  let body: MonitoringEvent;
  try {
    body = await request.json();
  } catch {
    return new NextResponse(null, { status: 204 });
  }

  const event = safeValue(body.event, 80);
  if (!/^[a-z0-9_:-]+$/i.test(event)) {
    return new NextResponse(null, { status: 204 });
  }

  const entry = {
    event,
    page: safeValue(body.page, 200),
    label: safeValue(body.label, 160),
    destination: safeValue(body.destination, 200),
    timestamp: safeValue(body.timestamp, 40) || new Date().toISOString(),
    sessionId: safeValue(body.sessionId, 80),
    visitorId: safeValue(body.visitorId, 80),
    referrer: safeValue(body.referrer, 200),
    metric: safeValue(body.metric, 20),
    value:
      typeof body.value === "number" && Number.isFinite(body.value)
        ? Math.round(body.value * 100) / 100
        : null,
  };

  try {
    const eventsPath = getMonitoringEventsPath();
    await mkdir(path.dirname(eventsPath), { recursive: true });
    await appendFile(
      eventsPath,
      `${JSON.stringify(entry)}\n`,
      "utf8",
    );
  } catch (error) {
    console.error("Unable to store monitoring event", error);
  }

  return new NextResponse(null, { status: 204 });
}
