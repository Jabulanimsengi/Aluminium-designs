"use client";

import { useState, type FormEvent } from "react";
import { AlertCircle, LoaderCircle, MessageCircle, Send } from "lucide-react";
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
    "w-full border border-outline-variant bg-surface px-3 py-2 sm:py-2.5 text-base sm:text-sm text-primary placeholder-outline font-sans focus:outline-none focus:border-accent transition-colors rounded-none";
  const labelClass =
    "mb-1 block font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-outline";

  return (
    <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3">
      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        <div>
          <label htmlFor="name" className={labelClass}>Name <span className="text-accent">*</span></label>
          <input id="name" name="name" type="text" required autoFocus
            value={form.name} onChange={handleChange} placeholder="Full name"
            className={inputClass} />
          {fieldErrors.name ? <p className="mt-0.5 text-[11px] text-red-700">{fieldErrors.name}</p> : null}
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>Phone <span className="text-accent">*</span></label>
          <input id="phone" name="phone" type="tel" required
            value={form.phone} onChange={handleChange} placeholder="082 123 4567"
            className={inputClass} />
          {fieldErrors.phone ? <p className="mt-0.5 text-[11px] text-red-700">{fieldErrors.phone}</p> : null}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        <div>
          <label htmlFor="location" className={labelClass}>Location <span className="text-accent">*</span></label>
          <input id="location" name="location" type="text" required
            value={form.location} onChange={handleChange} placeholder="e.g. Sandton"
            className={inputClass} />
          {fieldErrors.location ? <p className="mt-0.5 text-[11px] text-red-700">{fieldErrors.location}</p> : null}
        </div>

        <div>
          <label htmlFor="budget" className={labelClass}>Budget <span className="text-accent">*</span></label>
          <select id="budget" name="budget" required value={form.budget} onChange={handleChange}
            className={`${inputClass} cursor-pointer`}>
            <option value="" disabled>Select budget...</option>
            {BUDGET_OPTIONS.map((option) => <option key={option} value={option}>{option}</option>)}
          </select>
          {fieldErrors.budget ? <p className="mt-0.5 text-[11px] text-red-700">{fieldErrors.budget}</p> : null}
        </div>
      </div>

      <label className="flex items-start sm:items-center gap-2 text-left text-[11px] sm:text-xs text-on-surface-variant">
        <input type="checkbox" checked={consent} onChange={(event) => setConsent(event.target.checked)}
          className="mt-0.5 sm:mt-0 h-3.5 w-3.5 shrink-0 accent-accent" />
        <span>I agree to be contacted regarding my project inquiry.</span>
      </label>

      {message ? (
        <p role="alert" className="flex items-start gap-1.5 border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700">
          <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" /> <span>{message}</span>
        </p>
      ) : null}

      {(() => {
        const isQuoteAction = source === "quote" || source === "phone" || source === "email";
        const defaultText = isQuoteAction ? "Send Quote Request" : "Connect on WhatsApp";
        const label = buttonLabel || defaultText;
        return (
          <button
            type="submit"
            disabled={isSubmitting}
            className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-2.5 sm:py-3 font-mono text-[11px] font-bold uppercase tracking-widest text-white transition-colors disabled:cursor-wait disabled:opacity-70 ${
              isQuoteAction
                ? "bg-accent hover:bg-accent-hover shadow-sm"
                : "bg-[#25D366] hover:bg-[#20ba5a]"
            }`}
          >
            {isSubmitting ? (
              <LoaderCircle className="h-4 w-4 animate-spin" />
            ) : isQuoteAction ? (
              <Send className="h-3.5 w-3.5" />
            ) : (
              <MessageCircle className="h-4 w-4" />
            )}
            {isSubmitting
              ? (isQuoteAction ? "Sending Quote Request..." : "Connecting...")
              : label}
          </button>
        );
      })()}

      {onCancel ? (
        <button type="button" onClick={onCancel} className="w-full text-center font-mono text-[10px] uppercase tracking-wider text-secondary transition-colors hover:text-accent">
          Cancel
        </button>
      ) : null}
    </form>
  );
}
