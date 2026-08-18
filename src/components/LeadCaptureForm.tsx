"use client";

import { useState, type FormEvent } from "react";
import { AlertCircle, LoaderCircle, MessageCircle } from "lucide-react";
import { BUDGET_OPTIONS } from "@/lib/lead-options";

type LeadCaptureFormProps = {
  source: "whatsapp" | "quote";
  variant?: "modal" | "page";
  onCancel?: () => void;
};

const emptyForm = {
  firstName: "",
  surname: "",
  phone: "",
  email: "",
  location: "",
  budget: "",
};

export default function LeadCaptureForm({ source, variant = "modal", onCancel }: LeadCaptureFormProps) {
  const [form, setForm] = useState(emptyForm);
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function monitoringIds() {
    try {
      return {
        visitorId: window.localStorage.getItem("apex-monitoring-visitor") || "",
        sessionId: window.sessionStorage.getItem("apex-monitoring-session") || "",
      };
    } catch {
      return { visitorId: "", sessionId: "" };
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    setFieldErrors({});
    if (!consent) {
      setMessage("Please confirm you are happy for us to contact you.");
      return;
    }
    setIsSubmitting(true);

    try {
      const { visitorId, sessionId } = monitoringIds();
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          source,
          page: window.location.pathname,
          referrer: document.referrer || "",
          visitorId,
          sessionId,
        }),
      });
      const result = (await response.json()) as {
        ok?: boolean;
        redirectUrl?: string;
        message?: string;
        errors?: Record<string, string>;
      };

      if (!response.ok || !result.ok) {
        setMessage(result.message || "Please check the details and try again.");
        if (result.errors) setFieldErrors(result.errors);
        return;
      }

      if (result.redirectUrl) {
        window.location.href = result.redirectUrl;
      }
    } catch {
      setMessage("Could not submit from this browser. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const inputClass =
    "w-full border border-outline-variant bg-surface px-4 py-3 text-sm text-primary placeholder-outline font-sans focus:outline-none focus:border-primary transition-colors rounded-none";
  const labelClass =
    "mb-2 block font-mono text-[10px] font-bold uppercase tracking-widest text-outline";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className={labelClass}>First name <span className="text-on-tertiary-container">*</span></label>
          <input id="firstName" name="firstName" type="text" required autoFocus
            value={form.firstName} onChange={handleChange} placeholder="Your name"
            className={inputClass} />
          {fieldErrors.firstName ? <p className="mt-1 text-xs text-red-700">{fieldErrors.firstName}</p> : null}
        </div>
        <div>
          <label htmlFor="surname" className={labelClass}>Surname <span className="text-on-tertiary-container">*</span></label>
          <input id="surname" name="surname" type="text" required
            value={form.surname} onChange={handleChange} placeholder="Your surname"
            className={inputClass} />
          {fieldErrors.surname ? <p className="mt-1 text-xs text-red-700">{fieldErrors.surname}</p> : null}
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>Phone number <span className="text-on-tertiary-container">*</span></label>
          <input id="phone" name="phone" type="tel" required
            value={form.phone} onChange={handleChange} placeholder="082 123 4567"
            className={inputClass} />
          {fieldErrors.phone ? <p className="mt-1 text-xs text-red-700">{fieldErrors.phone}</p> : null}
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Email (optional)</label>
          <input id="email" name="email" type="email"
            value={form.email} onChange={handleChange} placeholder="john@example.com"
            className={inputClass} />
          {fieldErrors.email ? <p className="mt-1 text-xs text-red-700">{fieldErrors.email}</p> : null}
        </div>
        <div>
          <label htmlFor="location" className={labelClass}>Location / suburb <span className="text-on-tertiary-container">*</span></label>
          <input id="location" name="location" type="text" required
            value={form.location} onChange={handleChange} placeholder="e.g. Sandton, Johannesburg"
            className={inputClass} />
          {fieldErrors.location ? <p className="mt-1 text-xs text-red-700">{fieldErrors.location}</p> : null}
        </div>
        <div>
          <label htmlFor="budget" className={labelClass}>Budget <span className="text-on-tertiary-container">*</span></label>
          <select id="budget" name="budget" required value={form.budget} onChange={handleChange}
            className={`${inputClass} cursor-pointer`}>
            <option value="" disabled>Select a budget range...</option>
            {BUDGET_OPTIONS.map((option) => <option key={option} value={option}>{option}</option>)}
          </select>
          {fieldErrors.budget ? <p className="mt-1 text-xs text-red-700">{fieldErrors.budget}</p> : null}
        </div>
      </div>

      <label className="flex items-start gap-2.5 text-left text-xs text-on-surface-variant">
        <input type="checkbox" checked={consent} onChange={(event) => setConsent(event.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 accent-primary" />
        <span>I agree for Aluminium Designs to contact me about my project. <span className="text-on-tertiary-container">*</span></span>
      </label>

      {message ? (
        <p role="alert" className="flex items-start gap-2 border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" /> {message}
        </p>
      ) : null}

      <div className={variant === "modal" ? "flex flex-col gap-3 sm:flex-row" : "flex flex-col items-center gap-4 sm:flex-row sm:justify-between"}>
        {onCancel ? (
          <button
            type="button"
            onClick={onCancel}
            className="inline-flex items-center justify-center rounded-full border border-outline-variant px-6 py-3 font-mono text-[11px] font-bold uppercase tracking-widest text-secondary transition-colors hover:bg-surface-container"
          >
            Cancel
          </button>
        ) : null}
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-mono text-[11px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#20ba5a] disabled:cursor-wait disabled:opacity-70"
        >
          {isSubmitting ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <MessageCircle className="h-4 w-4" />}
          {isSubmitting ? "Sending..." : "Continue on WhatsApp"}
        </button>
      </div>

      <p className="text-center text-[11px] text-outline">
        Your details are used only to prepare your quotation and are never shared.
      </p>
    </form>
  );
}
