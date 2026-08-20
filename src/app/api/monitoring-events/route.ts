import { NextRequest, NextResponse } from "next/server";
import {
  appendMonitoringEvent,
  extractClientIp,
  type MonitoringEvent,
} from "@/lib/monitoring";

export const runtime = "nodejs";

const MAX_EVENT_SIZE = 2_000;
const MAX_EVENTS_PER_MINUTE = 60;
const rateLimits = new Map<string, { count: number; resetAt: number }>();

type IncomingEvent = {
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
  detail?: string;
};

function safeValue(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function isAdminPath(value: string) {
  if (!value) return false;
  try {
    return new URL(value, "https://monitoring.invalid").pathname.startsWith("/admin");
  } catch {
    return value.startsWith("/admin");
  }
}

function isAllowed(clientId: string) {
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
  const ipAddress = extractClientIp(request.headers);
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > MAX_EVENT_SIZE || !isAllowed(ipAddress || "unknown")) {
    return new NextResponse(null, { status: 204 });
  }

  let body: IncomingEvent;
  try {
    body = await request.json();
  } catch {
    return new NextResponse(null, { status: 204 });
  }

  const event = safeValue(body.event, 80);
  if (!/^[a-z0-9_:-]+$/i.test(event)) {
    return new NextResponse(null, { status: 204 });
  }

  const page = safeValue(body.page, 200);
  const destination = safeValue(body.destination, 200);
  if (isAdminPath(page) || isAdminPath(destination)) {
    return new NextResponse(null, { status: 204 });
  }

  const entry: MonitoringEvent = {
    event,
    ipAddress,
    page,
    label: safeValue(body.label, 160),
    destination,
    timestamp: safeValue(body.timestamp, 40) || new Date().toISOString(),
    sessionId: safeValue(body.sessionId, 80),
    visitorId: safeValue(body.visitorId, 80),
    referrer: safeValue(body.referrer, 200),
    metric: safeValue(body.metric, 20),
    value:
      typeof body.value === "number" && Number.isFinite(body.value)
        ? Math.round(body.value * 100) / 100
        : null,
    detail: safeValue(body.detail, 2_000),
  };

  try {
    await appendMonitoringEvent(entry);
  } catch (error) {
    console.error("Unable to store monitoring event", error);
  }

  return new NextResponse(null, { status: 204 });
}
