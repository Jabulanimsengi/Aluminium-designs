"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import LeadCaptureForm from "./LeadCaptureForm";

type GateSource = "whatsapp" | "quote" | "phone" | "email";

function classify(link: HTMLAnchorElement | null, element: Element): GateSource | null {
  if (!link) return null;
  const href = link.getAttribute("href") || "";
  const label = (
    element.getAttribute("aria-label") ||
    element.getAttribute("data-monitor-label") ||
    link.getAttribute("aria-label") ||
    link.textContent ||
    ""
  ).replace(/\s+/g, " ").trim();

  const isQuote = /^\/quote(?:$|[?#])/i.test(href) || /quote|quotation|estimate/i.test(label);
  const isWhatsApp = /wa\.me\/|whatsapp\.com/i.test(href);
  const isPhone = /^tel:/i.test(href);
  const isEmail = /^mailto:/i.test(href);

  if (isQuote) return "quote";
  if (isWhatsApp) return "whatsapp";
  if (isPhone) return "phone";
  if (isEmail) return "email";
  return null;
}

export default function LeadGate() {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");
  const [open, setOpen] = useState(false);
  const [source, setSource] = useState<GateSource>("quote");

  useEffect(() => {
    if (isAdmin) return;

    function handleClick(event: MouseEvent) {
      if (event.defaultPrevented) return;
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const element = event.target instanceof Element ? event.target : null;
      if (!element) return;
      if (element.closest("[data-lead-gate='false']")) return;

      const link = element.closest("a[href]") as HTMLAnchorElement | null;
      const gateSource = classify(link, element);
      if (!gateSource) return;

      event.preventDefault();
      setSource(gateSource);
      setOpen(true);
    }

    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, [isAdmin]);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = useCallback(() => setOpen(false), []);

  if (!open || isAdmin) return null;

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center overflow-y-auto bg-black/60 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-gate-title"
      onClick={(event) => {
        if (event.target === event.currentTarget) close();
      }}
    >
      <div className="relative w-full max-w-md border border-outline-variant bg-surface-container-lowest p-6 shadow-2xl sm:p-7">
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-outline-variant text-secondary transition-colors hover:bg-surface-container hover:text-primary"
        >
          <X className="h-4 w-4" />
        </button>

        <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-secondary mb-1.5">
          Direct Estimator Dispatch
        </p>
        <h2
          id="lead-gate-title"
          className="pr-8 text-left font-sans text-2xl font-bold uppercase leading-tight tracking-tight text-primary"
        >
          Request Your Custom Quotation
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
          Share a few project details and connect directly with our technical team for instant sizing advice and pricing.
        </p>

        <div className="mt-5">
          <LeadCaptureForm source={source} onCancel={close} />
        </div>
      </div>
    </div>
  );
}
