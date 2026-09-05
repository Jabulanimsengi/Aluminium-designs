"use client";

import { useState, type FormEvent } from "react";
import { AlertCircle, LoaderCircle, MessageCircle } from "lucide-react";
import { BUDGET_OPTIONS } from "@/lib/lead-options";

type LeadCaptureFormProps = {
  source: "whatsapp" | "quote" | "phone" | "email";
  onCancel?: () => void;
  buttonLabel?: string;
};

const emptyForm = {
  name: "",
  phone: "",
  location: "",
  budget: "",
};

export default function LeadCaptureForm({ source, onCancel, buttonLabel }: LeadCaptureFormProps) {
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
        visitorId: window.localStorage.getItem("ad-monitoring-visitor") || "",
        sessionId: window.sessionStorage.getItem("ad-monitoring-session") || "",
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
    "w-full rounded-xl border border-outline-variant/80 bg-surface px-3.5 py-2.5 sm:py-3 text-sm text-primary placeholder:text-outline/70 font-sans focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 transition-all shadow-2xs";
  const selectClass =
    "w-full rounded-xl border border-outline-variant/80 bg-surface px-3.5 py-2.5 sm:py-3 text-sm text-primary font-sans focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 transition-all shadow-2xs cursor-pointer";
  const labelClass =
    "mb-1.5 block font-sans text-xs font-medium text-secondary";

  return (
    <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
        <div>
          <label htmlFor="name" className={labelClass}>Your Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoFocus
            value={form.name}
            onChange={handleChange}
            placeholder="e.g. Sipho Ndlovu"
            className={inputClass}
          />
          {fieldErrors.name ? <p className="mt-1 text-xs text-red-600 font-medium">{fieldErrors.name}</p> : null}
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="082 123 4567"
            className={inputClass}
          />
          {fieldErrors.phone ? <p className="mt-1 text-xs text-red-600 font-medium">{fieldErrors.phone}</p> : null}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
        <div>
          <label htmlFor="location" className={labelClass}>Location / Suburb</label>
          <input
            id="location"
            name="location"
            type="text"
            required
            value={form.location}
            onChange={handleChange}
            placeholder="e.g. Sandton, Pretoria"
            className={inputClass}
          />
          {fieldErrors.location ? <p className="mt-1 text-xs text-red-600 font-medium">{fieldErrors.location}</p> : null}
        </div>

        <div>
          <label htmlFor="budget" className={labelClass}>Estimated Budget</label>
          <select
            id="budget"
            name="budget"
            required
            value={form.budget}
            onChange={handleChange}
            className={selectClass}
          >
            <option value="" disabled>Select estimated budget...</option>
            {BUDGET_OPTIONS.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          {fieldErrors.budget ? <p className="mt-1 text-xs text-red-600 font-medium">{fieldErrors.budget}</p> : null}
        </div>
      </div>

      <label className="flex items-center gap-2.5 pt-0.5 text-left text-xs text-on-surface-variant cursor-pointer select-none">
        <input
          type="checkbox"
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
          className="h-4 w-4 rounded border-outline-variant text-accent focus:ring-accent accent-accent"
        />
        <span>I agree to be contacted regarding my inquiry.</span>
      </label>

      {message ? (
        <p role="alert" className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50/80 px-3.5 py-2.5 text-xs text-red-700">
          <AlertCircle className="h-4 w-4 shrink-0 text-red-600" />
          <span>{message}</span>
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] px-5 py-3 sm:py-3.5 font-sans text-sm font-semibold text-white shadow-sm transition-all hover:shadow-md active:scale-[0.99] disabled:cursor-wait disabled:opacity-70"
      >
        {isSubmitting ? (
          <LoaderCircle className="h-4 w-4 animate-spin" />
        ) : (
          <MessageCircle className="h-4 w-4" />
        )}
        {isSubmitting ? "Opening WhatsApp..." : buttonLabel || "Continue to WhatsApp"}
      </button>
    </form>
  );
}
