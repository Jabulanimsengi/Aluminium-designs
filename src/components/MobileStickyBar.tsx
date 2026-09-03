"use client";

import React from "react";
import { Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import { businessContact, whatsappQuoteUrl } from "@/lib/site";
import WhatsAppIcon from "./WhatsAppIcon";

export default function MobileStickyBar() {
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) return null;

  return (
    <div
      aria-label="Quick contact bar"
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-outline-variant/80 bg-surface-container-lowest/95 p-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-[0_-8px_20px_rgba(0,0,0,0.08)] backdrop-blur-md sm:hidden"
    >
      <div className="flex items-center gap-2">
        <a
          href={`tel:${businessContact.phone.replace(/\s+/g, "")}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-md border border-outline-variant bg-surface py-2.5 px-3 font-mono text-xs font-bold uppercase tracking-wider text-primary transition-colors active:bg-surface-container"
        >
          <Phone className="h-4 w-4 shrink-0 text-primary" />
          <span>Call Now</span>
        </a>

        <a
          href={whatsappQuoteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-md bg-[#25D366] py-2.5 px-3 font-mono text-xs font-bold uppercase tracking-wider text-black shadow-xs transition-colors hover:bg-[#20bd5a] active:opacity-90"
        >
          <WhatsAppIcon className="h-4 w-4 shrink-0" />
          <span>WhatsApp Quote</span>
        </a>
      </div>
    </div>
  );
}
