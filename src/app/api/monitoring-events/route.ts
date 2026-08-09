import { mkdir, appendFile } from "node:fs/promises";
import path from "node:path";
import { NextRequest, NextResponse } from "next/server";

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
  };

  try {
    const eventsDirectory =
      process.env.MONITORING_EVENTS_PATH?.trim() || path.join(process.cwd(), "data");
    await mkdir(eventsDirectory, { recursive: true });
    await appendFile(
      path.join(eventsDirectory, "monitoring-events.ndjson"),
      `${JSON.stringify(entry)}\n`,
      "utf8",
    );
  } catch (error) {
    console.error("Unable to store monitoring event", error);
  }

  return new NextResponse(null, { status: 204 });
}
