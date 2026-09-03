"use client";

import Link from "next/link";
import { Images, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import { whatsappQuoteUrl } from "@/lib/site";
import WhatsAppIcon from "./WhatsAppIcon";

export default function GalleryFloatingButton() {
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-outline-variant bg-surface/95 backdrop-blur-md md:hidden pb-[env(safe-area-inset-bottom)]">
      <div className="grid grid-cols-3 divide-x divide-outline-variant">
        <a
          href="tel:+27716122439"
          aria-label="Call Aluminium Designs"
          className="flex items-center justify-center gap-2 py-3.5 font-sans text-xs font-semibold uppercase tracking-wide text-primary active:bg-surface-container"
        >
          <Phone className="h-4 w-4" />
          Call
        </a>
        <Link
          href="/gallery"
          aria-label="View gallery"
          className="flex items-center justify-center gap-2 py-3.5 font-sans text-xs font-semibold uppercase tracking-wide text-primary active:bg-surface-container"
        >
          <Images className="h-4 w-4" />
          Gallery
        </Link>
        <Link
          href={whatsappQuoteUrl}
          aria-label="Get WhatsApp quote"
          className="flex items-center justify-center gap-2 bg-[#25D366] py-3.5 font-sans text-xs font-bold uppercase tracking-wide text-black active:bg-[#20bd5a]"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Quote
        </Link>
      </div>
    </div>
  );
}
