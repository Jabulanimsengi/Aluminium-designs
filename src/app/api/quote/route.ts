import { NextResponse } from "next/server";

const MAX_FILE_SIZE = 10 * 1024 * 1024;

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
  const formData = await request.formData();

  if (field(formData, "companyWebsite")) {
    return NextResponse.json({ ok: true, reference: "APX-SPAM" });
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
  if (!isValidPhone(payload.phone)) errors.phone = "Enter a valid South African phone number.";
  if (!isValidEmail(payload.email)) errors.email = "Enter a valid email address.";
  if (payload.location.length < 2) errors.location = "Enter the project location.";
  if (!payload.serviceNeeded) errors.serviceNeeded = "Select a service.";
  if (!payload.description || payload.description.length < 20) {
    errors.description = "Add at least 20 characters about the project.";
  }

  const upload = formData.get("attachment");
  const file = upload instanceof File && upload.size > 0 ? upload : null;
  if (file && file.size > MAX_FILE_SIZE) {
    errors.attachment = "The attachment must be smaller than 10MB.";
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

    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      body: webhookFormData,
    });

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
