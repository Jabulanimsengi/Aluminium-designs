"use client";

import Link from "next/link";
import { Images } from "lucide-react";
import { usePathname } from "next/navigation";

export default function GalleryFloatingButton() {
  const pathname = usePathname();

  if (pathname === "/gallery" || pathname.startsWith("/admin")) return null;

  return (
    <Link
      href="/gallery"
      className="fixed bottom-4 left-1/2 z-40 inline-flex -translate-x-1/2 items-center gap-2 rounded-full bg-black px-5 py-3 font-mono text-[11px] font-bold uppercase tracking-widest text-white shadow-xl transition-transform active:scale-95 md:hidden"
      aria-label="View gallery"
    >
      <Images className="h-4 w-4" />
      View gallery
    </Link>
  );
}
