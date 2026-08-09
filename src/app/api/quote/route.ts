import { NextResponse } from "next/server";

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const MAX_REQUEST_SIZE = 12 * 1024 * 1024;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 10;
const ALLOWED_FILE_EXTENSIONS = new Set(["pdf", "png", "jpg", "jpeg", "dwg"]);
const requestLog = new Map<string, number[]>();

function field(formData: FormData, name: string) {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidPhone(value: string) {
  return /^(\+27|0)[0-9\s-]{8,15}$/.test(value);
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > MAX_REQUEST_SIZE) {
    return NextResponse.json(
      { ok: false, message: "The quote request is too large. Attach a file smaller than 10MB." },
      { status: 413 },
    );
  }

  const formData = await request.formData();

  if (field(formData, "companyWebsite")) {
    return NextResponse.json({ ok: true, reference: "APX-SPAM" });
  }

  const clientIp =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip")?.trim();

  if (clientIp) {
    const now = Date.now();
    const recentRequests = (requestLog.get(clientIp) || []).filter(
      (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
    );

    if (recentRequests.length >= RATE_LIMIT_MAX_REQUESTS) {
      return NextResponse.json(
        { ok: false, message: "Too many quote requests. Please try again in a few minutes." },
        { status: 429, headers: { "Retry-After": "900" } },
      );
    }

    recentRequests.push(now);
    requestLog.set(clientIp, recentRequests);
  }

  const payload = {
    fullName: field(formData, "fullName"),
    phone: field(formData, "phone"),
    email: field(formData, "email"),
    location: field(formData, "location"),
    serviceNeeded: field(formData, "serviceNeeded"),
    projectType: field(formData, "projectType"),
    description: field(formData, "description"),
    contactMethod: field(formData, "contactMethod"),
  };

  const errors: Record<string, string> = {};

  if (payload.fullName.length < 2) errors.fullName = "Enter your full name.";
  if (payload.fullName.length > 120) errors.fullName = "Keep your name under 120 characters.";
  if (!isValidPhone(payload.phone)) errors.phone = "Enter a valid South African phone number.";
  if (!isValidEmail(payload.email)) errors.email = "Enter a valid email address.";
  if (payload.location.length < 2) errors.location = "Enter the project location.";
  if (payload.location.length > 160) errors.location = "Keep the location under 160 characters.";
  if (!payload.serviceNeeded) errors.serviceNeeded = "Select a service.";
  if (!payload.description || payload.description.length < 20) {
    errors.description = "Add at least 20 characters about the project.";
  }
  if (payload.description.length > 5000) {
    errors.description = "Keep the project description under 5,000 characters.";
  }

  const upload = formData.get("attachment");
  const file = upload instanceof File && upload.size > 0 ? upload : null;
  if (file && file.size > MAX_FILE_SIZE) {
    errors.attachment = "The attachment must be smaller than 10MB.";
  }
  if (file) {
    const extension = file.name.split(".").pop()?.toLowerCase() || "";
    if (!ALLOWED_FILE_EXTENSIONS.has(extension)) {
      errors.attachment = "Attach a PDF, DWG, JPG, JPEG, or PNG file.";
    }
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  const reference = `APX-${Date.now().toString(36).toUpperCase()}`;
  const webhookUrl = process.env.APEX_QUOTE_WEBHOOK_URL;

  if (webhookUrl) {
    const webhookFormData = new FormData();
    Object.entries(payload).forEach(([key, value]) => webhookFormData.set(key, value));
    webhookFormData.set("reference", reference);
    if (file) webhookFormData.set("attachment", file, file.name);

    let webhookResponse: Response;

    try {
      webhookResponse = await fetch(webhookUrl, {
        method: "POST",
        body: webhookFormData,
        cache: "no-store",
        signal: AbortSignal.timeout(12_000),
      });
    } catch {
      return NextResponse.json(
        {
          ok: false,
          message: "We could not deliver the request automatically. Please use the WhatsApp or email fallback.",
          reference,
          delivery: "failed",
        },
        { status: 502 },
      );
    }

    if (!webhookResponse.ok) {
      return NextResponse.json(
        {
          ok: false,
          message: "We could not deliver the request automatically. Please use the WhatsApp or email fallback.",
          reference,
          delivery: "failed",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, reference, delivery: "webhook" });
  }

  return NextResponse.json({
    ok: true,
    reference,
    delivery: "fallback_required",
    message: "Quote details validated. Configure APEX_QUOTE_WEBHOOK_URL to deliver these automatically.",
  });
}
