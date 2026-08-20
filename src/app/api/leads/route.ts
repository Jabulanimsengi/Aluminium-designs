import { NextResponse } from "next/server";
import { appendLead, type Lead } from "@/lib/leads";
import { extractClientIp } from "@/lib/monitoring";
import { getWhatsAppLeadUrl } from "@/lib/site";
import { BUDGET_OPTIONS } from "@/lib/lead-options";

export const runtime = "nodejs";

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 10;
const requestLog = new Map<string, number[]>();

function clean(value: unknown, maxLength = 160) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function isValidPhone(value: string) {
  return /^(\+27|0)[0-9\s-]{8,15}$/.test(value);
}

export async function POST(request: Request) {
  const ipAddress = extractClientIp(request.headers);

  if (ipAddress) {
    const now = Date.now();
    const recent = (requestLog.get(ipAddress) || []).filter(
      (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
    );
    if (recent.length >= RATE_LIMIT_MAX_REQUESTS) {
      return NextResponse.json(
        { ok: false, message: "Too many requests. Please try again shortly." },
        { status: 429 },
      );
    }
    recent.push(now);
    requestLog.set(ipAddress, recent);
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  const name = clean(body.name, 120);
  const phone = clean(body.phone, 40);
  const location = clean(body.location, 120);
  const budget = clean(body.budget, 40);
  const source = clean(body.source, 20);
  const page = clean(body.page, 200);
  const referrer = clean(body.referrer, 200);
  const sessionId = clean(body.sessionId, 80);
  const visitorId = clean(body.visitorId, 80);

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = "Enter your name.";
  if (!isValidPhone(phone)) errors.phone = "Enter a valid South African phone number.";
  if (location.length < 2) errors.location = "Enter your location or suburb.";
  if (!(BUDGET_OPTIONS as readonly string[]).includes(budget)) {
    errors.budget = "Select a budget range.";
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  const lead: Lead = {
    name,
    phone,
    location,
    budget,
    source: source || "whatsapp",
    page,
    referrer,
    ipAddress,
    sessionId,
    visitorId,
    timestamp: new Date().toISOString(),
  };

  try {
    await appendLead(lead);
  } catch (error) {
    console.error("Unable to store lead", error);
    return NextResponse.json(
      { ok: false, message: "Unable to save your details. Please try again." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true, redirectUrl: getWhatsAppLeadUrl(lead) });
}
