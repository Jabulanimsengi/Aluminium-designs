import { mkdir, appendFile } from "node:fs/promises";
import { isIP } from "node:net";
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

function validIp(value: string | null) {
  if (!value) return "";
  const candidate = value.trim().replace(/^"|"$/g, "");
  if (isIP(candidate)) return candidate;

  const ipv4WithPort = candidate.match(/^(.+):(\d+)$/)?.[1] || "";
  return isIP(ipv4WithPort) === 4 ? ipv4WithPort : "";
}

function requestIp(request: NextRequest) {
  const realIp = validIp(request.headers.get("x-real-ip"));
  if (realIp) return realIp;

  const cloudflareIp = validIp(request.headers.get("cf-connecting-ip"));
  if (cloudflareIp) return cloudflareIp;

  const forwardedFor = request.headers.get("x-forwarded-for");
  return validIp(forwardedFor?.split(",")[0] || null);
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
  const ipAddress = requestIp(request);
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > MAX_EVENT_SIZE || !isAllowed(ipAddress || "unknown")) {
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

  const page = safeValue(body.page, 200);
  const destination = safeValue(body.destination, 200);
  if (isAdminPath(page) || isAdminPath(destination)) {
    return new NextResponse(null, { status: 204 });
  }

  const entry = {
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
