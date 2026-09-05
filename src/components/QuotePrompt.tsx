"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, X } from "lucide-react";

const dismissalKey = "aluminium-designs-quote-prompt-dismissed";

export default function QuotePrompt() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (pathname.startsWith("/quote") || pathname.startsWith("/contact") || pathname.startsWith("/admin")) {
      return;
    }
    if (window.localStorage.getItem(dismissalKey)) {
      return;
    }

    const timeoutId = window.setTimeout(() => setIsOpen(true), 25_000);
    return () => window.clearTimeout(timeoutId);
  }, [pathname]);

  function closePrompt() {
    window.localStorage.setItem(dismissalKey, "true");
    setIsOpen(false);
  }

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-black/60 backdrop-blur-xs p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-prompt-title"
    >
      <div className="relative w-full max-w-md max-h-[90dvh] overflow-y-auto rounded-2xl border border-outline-variant/60 bg-surface-container-lowest p-6 shadow-2xl sm:p-7">
        <button
          type="button"
          onClick={closePrompt}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-secondary transition-colors hover:bg-surface-container hover:text-primary"
          aria-label="Close quotation prompt"
        >
          <X className="h-4 w-4" />
        </button>

        <h2 id="quote-prompt-title" className="pr-8 font-sans text-xl font-bold text-primary sm:text-2xl">
          Need Custom Windows, Doors, or Conversions?
        </h2>
        <p className="mt-2.5 text-sm leading-relaxed text-on-surface-variant">
          Get an accurate, no-obligation estimate for your home or business. We measure, manufacture, and install across all of Gauteng.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/quote"
            onClick={closePrompt}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 font-sans text-sm font-semibold text-white shadow-sm transition-all hover:bg-accent-hover active:scale-[0.99]"
          >
            Get Free Estimate
            <ArrowRight className="h-4 w-4" />
          </Link>
          <button
            type="button"
            onClick={closePrompt}
            className="rounded-xl border border-outline-variant px-5 py-3 font-sans text-sm font-medium text-secondary transition-colors hover:bg-surface-container hover:text-primary"
          >
            Continue Browsing
          </button>
        </div>
      </div>
    </div>
  );
}
