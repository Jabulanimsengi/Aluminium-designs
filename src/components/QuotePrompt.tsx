"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";

const dismissalKey = "aluminium-designs-quote-prompt-dismissed";

export default function QuotePrompt() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem(dismissalKey)) {
      return;
    }

    const timeoutId = window.setTimeout(() => setIsOpen(true), 10_000);
    return () => window.clearTimeout(timeoutId);
  }, []);

  function closePrompt() {
    window.localStorage.setItem(dismissalKey, "true");
    setIsOpen(false);
  }

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-prompt-title"
    >
      <div className="relative w-full max-w-md bg-surface-container-lowest p-6 shadow-2xl sm:p-8">
        <button
          type="button"
          onClick={closePrompt}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-outline-variant text-secondary transition-colors hover:bg-surface-container hover:text-primary"
          aria-label="Close quotation prompt"
        >
          <X className="h-4 w-4" />
        </button>

        <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
          Custom Sizing &bull; Factory Direct Rates
        </p>
        <h2 id="quote-prompt-title" className="mt-3 pr-8 font-sans text-2xl font-bold uppercase leading-tight tracking-tight text-primary sm:text-3xl">
          Need Custom Windows, Doors, or Conversions?
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-on-surface-variant">
          Get an accurate, no-obligation estimate for your home or business. We measure, manufacture, and install across all of Gauteng.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/quote"
            onClick={closePrompt}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 font-mono text-[11px] font-bold uppercase tracking-widest text-on-primary transition-colors hover:bg-on-tertiary-container"
          >
            Get Free Estimate
            <ArrowRight className="h-4 w-4" />
          </Link>
          <button
            type="button"
            onClick={closePrompt}
            className="rounded-full border border-outline-variant px-5 py-3 font-mono text-[11px] font-bold uppercase tracking-widest text-primary transition-colors hover:bg-surface-container"
          >
            Continue Browsing
          </button>
        </div>
      </div>
    </div>
  );
}
