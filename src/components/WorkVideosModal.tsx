"use client";

import React, { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { X, ArrowRight } from "lucide-react";
import { whatsappQuoteUrl } from "@/lib/site";

const DISMISSAL_KEY = "apex_work_videos_popup_dismissed";

const FEATURED_VIDEOS = [
  {
    id: "video-1",
    cdnUrl: "https://res.cloudinary.com/dw8dqd5tj/video/upload/v1788612367/apex-aluminium/videos/video-work-two.mp4",
    localUrl: "/videos/video-work-two.mp4",
    poster: "/images/real_images/products/doors/stackingdoors-installation-one.jpeg",
  },
  {
    id: "video-2",
    cdnUrl: "https://res.cloudinary.com/dw8dqd5tj/video/upload/v1788612279/apex-aluminium/videos/video-work-one.mp4",
    localUrl: "/videos/video-work-one.mp4",
    poster: "/images/real_images/products/doors/stackingdoors-installation-two.jpeg",
  },
];

export default function WorkVideosModal() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    // Never show on admin pages
    if (pathname.startsWith("/admin")) return;

    // Check if user has dismissed previously
    try {
      if (typeof window !== "undefined" && window.localStorage.getItem(DISMISSAL_KEY) === "true") {
        return;
      }
    } catch {
      // LocalStorage access restricted
    }

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, [pathname]);

  const handleCancelAndDismiss = useCallback(() => {
    try {
      if (typeof window !== "undefined") {
        window.localStorage.setItem(DISMISSAL_KEY, "true");
      }
    } catch {
      // ignore
    }
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleCancelAndDismiss();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleCancelAndDismiss]);

  if (!isOpen) return null;

  const currentVideo = FEATURED_VIDEOS[activeIdx] || FEATURED_VIDEOS[0];

  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center overflow-y-auto bg-black/80 backdrop-blur-sm p-3 sm:p-4 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Work video"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleCancelAndDismiss();
        }
      }}
    >
      <div className="relative w-full max-w-xs sm:max-w-sm max-h-[96dvh] rounded-2xl border border-white/15 bg-black/90 p-1.5 sm:p-2 shadow-2xl flex flex-col items-center backdrop-blur-md">
        {/* Video Player with Overlay Text & Cancel X */}
        <div className="relative w-full overflow-hidden rounded-xl bg-black border border-white/10 shadow-inner flex items-center justify-center">
          {/* 'Our Work' text overlaid on video */}
          <div className="absolute top-2.5 left-2.5 z-20 pointer-events-none inline-flex items-center gap-1.5 rounded-full bg-black/65 backdrop-blur-md px-2.5 py-1 font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-white border border-white/20 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            <span>Our Work</span>
          </div>

          {/* Cancel 'X' Button on top-right of video */}
          <button
            type="button"
            onClick={handleCancelAndDismiss}
            aria-label="Cancel and do not show again"
            className="absolute top-2.5 right-2.5 z-20 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-white hover:bg-black/90 hover:scale-105 transition-all shadow-md cursor-pointer"
          >
            <X className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </button>

          <video
            key={currentVideo.id}
            controls
            autoPlay
            muted
            playsInline
            preload="metadata"
            poster={currentVideo.poster}
            className="max-h-[64vh] sm:max-h-[70vh] w-auto max-w-full object-contain mx-auto rounded-lg"
            onEnded={() => {
              setActiveIdx((prev) => (prev + 1) % FEATURED_VIDEOS.length);
            }}
          >
            <source src={currentVideo.cdnUrl} type="video/mp4" />
            <source src={currentVideo.localUrl} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </div>

        {/* Action Buttons: Cancel and Get Quote for This in a slim bar */}
        <div className="mt-2 w-full flex items-center justify-between gap-2 px-0.5 pb-0.5">
          <button
            type="button"
            onClick={handleCancelAndDismiss}
            className="flex-1 rounded-xl border border-white/20 bg-white/5 py-2 px-2.5 font-mono text-[11px] font-semibold text-white/80 hover:bg-white/10 hover:text-white transition-colors text-center cursor-pointer"
          >
            Cancel
          </button>

          <a
            href={whatsappQuoteUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCancelAndDismiss}
            className="flex-[1.4] inline-flex items-center justify-center gap-1.5 rounded-xl bg-accent py-2 px-3 font-mono text-[11px] font-bold uppercase tracking-wider text-white hover:bg-accent-hover transition-colors shadow-xs text-center cursor-pointer"
          >
            <span>Get Quote for This</span>
            <ArrowRight className="h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
