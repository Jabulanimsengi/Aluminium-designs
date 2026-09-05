"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MessageCircle, X } from "lucide-react";
import LeadCaptureForm from "./LeadCaptureForm";

type GateSource = "whatsapp" | "quote" | "phone" | "email";

function classify(link: HTMLAnchorElement | null, element: Element): GateSource | null {
  if (!link) return null;
  const href = link.getAttribute("href") || "";

  // Fast-path attribute checks
  if (/wa\.me\/|whatsapp\.com/i.test(href)) return "whatsapp";
  if (/^\/quote(?:$|[?#])/i.test(href)) return "quote";
  if (/^tel:/i.test(href)) return "phone";
  if (/^mailto:/i.test(href)) return "email";

  // Internal navigation is never gated
  if (
    /^\/(services|locations|gallery|about|prices|faq|contact|steel-works|privacy)(?:$|\/|[?#])/i.test(href) ||
    href.startsWith("#") ||
    href === "/"
  ) {
    return null;
  }

  const label =
    element.getAttribute("aria-label") ||
    element.getAttribute("data-monitor-label") ||
    link.getAttribute("aria-label") ||
    "";

  if (/quote|quotation|estimate/i.test(label)) return "quote";
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
      className="fixed inset-0 z-[120] flex items-center justify-center overflow-y-auto bg-black/60 backdrop-blur-xs p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-gate-title"
      onClick={(event) => {
        if (event.target === event.currentTarget) close();
      }}
    >
      <div className="relative w-full max-w-md max-h-[92dvh] overflow-y-auto rounded-2xl border border-outline-variant/60 bg-surface-container-lowest p-6 shadow-2xl">
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-secondary transition-colors hover:bg-surface-container hover:text-primary"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-3 pr-8 mb-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366]/15 text-[#25D366]">
            <MessageCircle className="h-5 w-5 fill-[#25D366]/20" />
          </div>
          <div>
            <h2
              id="lead-gate-title"
              className="font-sans text-lg font-bold text-primary"
            >
              Chat on WhatsApp
            </h2>
            <p className="text-xs text-on-surface-variant">
              Direct connection with our workshop estimators
            </p>
          </div>
        </div>

        <LeadCaptureForm source={source} onCancel={close} />
      </div>
    </div>
  );
}
