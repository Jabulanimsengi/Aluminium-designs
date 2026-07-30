"use client";

import React, { useState, useRef, useEffect } from "react";
import { X, ChevronRight, Clock, ShieldCheck, ArrowUpRight } from "lucide-react";

const PHONE = "27871234567";

const quickReplies = [
  { label: "Get a free quote", message: "Hi Aluminium Designs, I'd like a quote for aluminium installation at my property." },
  { label: "Check service area", message: "Hi Aluminium Designs, I'm checking if you cover my area. My suburb is: " },
  { label: "Report a repair", message: "Hi Aluminium Designs, I need a repair for a sliding door / window. The issue is: " },
  { label: "General enquiry", message: "Hi Aluminium Designs, I have a question about your services." },
];

export default function WhatsAppChatWidget() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open]);

  function buildUrl(message: string) {
    return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
  }

  return (
    <div className="fixed bottom-20 right-4 z-40 flex flex-col items-end gap-3 md:bottom-6 md:right-6">
      {open && (
        <div
          ref={panelRef}
          className="w-[320px] max-w-[calc(100vw-2rem)] animate-fade-in-up border border-outline-variant bg-surface shadow-xl overflow-hidden rounded-2xl"
        >
          {/* Header */}
          <div className="flex items-center gap-3 bg-[#075e54] px-4 py-3.5 text-white">
            <div className="relative shrink-0">
              <div className="flex h-9 w-9 items-center justify-center border border-white/20 bg-white/10 font-sans text-sm font-bold">
                AD
              </div>
              <span className="absolute -right-0.5 bottom-0 h-2.5 w-2.5 rounded-full border-2 border-[#075e54] bg-green-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-sans text-sm font-bold uppercase tracking-tight">Aluminium Designs</p>
              <p className="flex items-center gap-1 font-mono text-[10px] text-white/70 uppercase tracking-wider">
                <span className="inline-block h-1.5 w-1.5 bg-green-400" />
                Online &middot; replies within minutes
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="flex h-7 w-7 items-center justify-center text-white/80 hover:bg-white/10 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Body */}
          <div className="relative bg-[#efeae2] px-4 py-4 space-y-3">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <svg width="100%" height="100%">
                <defs>
                  <pattern id="wp-bg-dots" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="2" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#wp-bg-dots)" />
              </svg>
            </div>

            <div className="relative z-10 flex items-start gap-2">
              <div className="max-w-[85%] space-y-1.5 border border-outline-variant bg-white px-4 py-3 rounded-2xl">
                <p className="text-sm leading-relaxed text-on-surface">
                  Hi there! Welcome to Aluminium Designs. How can we help you today?
                </p>
                <div className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-wider text-outline">
                  <Clock className="h-3 w-3" />
                  Just now
                </div>
              </div>
            </div>

            <div className="relative z-10 space-y-2 mt-3">
              <p className="font-mono text-[9px] font-bold uppercase tracking-widest text-outline px-1">
                Choose a topic
              </p>
              {quickReplies.map((qr) => (
                <a
                  key={qr.label}
                  href={buildUrl(qr.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-between border border-outline-variant bg-white px-4 py-3 text-left text-xs font-sans font-medium text-primary hover:border-primary hover:bg-surface-container-lowest transition-colors rounded-full"
                >
                  <span>{qr.label}</span>
                  <ChevronRight className="h-4 w-4 text-secondary shrink-0" />
                </a>
              ))}
            </div>

            <div className="relative z-10 flex items-center justify-center gap-2 pt-2 font-mono text-[9px] uppercase tracking-wider text-outline">
              <ShieldCheck className="h-3 w-3" />
              SANS compliant &middot; insured team
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex items-center gap-3 border-t border-outline-variant bg-surface px-4 py-3">
            <div className="flex-1 border border-outline-variant bg-surface-container px-3 py-2 font-mono text-[10px] text-outline uppercase tracking-wider rounded-xl">
              Continue on WhatsApp...
            </div>
            <a
              href={buildUrl("Hi Aluminium Designs, I'm visiting your website.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center bg-[#25D366] text-white hover:bg-[#20ba5a] transition-colors rounded-full"
              aria-label="Open WhatsApp"
            >
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] hover:bg-[#20ba5a] transition-colors active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#25D366]/30"
        aria-label={open ? "Close WhatsApp chat" : "Open WhatsApp chat"}
        title="Chat with us on WhatsApp"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/30" />

        <span className="absolute right-full mr-3 hidden w-auto whitespace-nowrap border border-outline-variant bg-surface p-2 font-mono text-[10px] font-bold uppercase tracking-widest text-primary shadow-sm group-hover:block pointer-events-none rounded-xl">
          Chat with us
        </span>

        {open ? (
          <X className="h-7 w-7 text-white" />
        ) : (
          <svg className="h-8 w-8 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        )}

        {!open && (
          <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full border-2 border-white bg-on-tertiary-container" />
        )}
      </button>
    </div>
  );
}
