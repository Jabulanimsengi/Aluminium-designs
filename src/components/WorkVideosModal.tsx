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
      <div className="relative w-full max-w-sm sm:max-w-md max-h-[96dvh] rounded-2xl border border-white/20 bg-surface-container-lowest p-3 sm:p-4 shadow-2xl flex flex-col items-center">
        {/* Cancel 'X' button */}
        <button
          type="button"
          onClick={handleCancelAndDismiss}
          aria-label="Cancel and do not show again"
          className="absolute -top-3 -right-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-surface-container-high border border-outline-variant text-primary shadow-lg transition-transform hover:scale-105 hover:bg-surface-container-highest cursor-pointer"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Video Player */}
        <div className="relative w-full overflow-hidden rounded-xl bg-black border border-outline-variant/60 shadow-inner flex items-center justify-center">
          <video
            key={currentVideo.id}
            controls
            autoPlay
            muted
            playsInline
            preload="metadata"
            poster={currentVideo.poster}
            className="max-h-[62vh] sm:max-h-[68vh] w-auto max-w-full object-contain mx-auto"
            onEnded={() => {
              // Automatically transition to next work video if available
              setActiveIdx((prev) => (prev + 1) % FEATURED_VIDEOS.length);
            }}
          >
            <source src={currentVideo.cdnUrl} type="video/mp4" />
            <source src={currentVideo.localUrl} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </div>

        {/* Action Buttons: Cancel and Get Quote for This */}
        <div className="mt-3.5 w-full flex items-center justify-between gap-2.5">
          <button
            type="button"
            onClick={handleCancelAndDismiss}
            className="flex-1 rounded-xl border border-outline-variant px-3 py-2.5 font-mono text-xs font-semibold text-secondary hover:bg-surface-container hover:text-primary transition-colors text-center cursor-pointer"
          >
            Cancel
          </button>

          <a
            href={whatsappQuoteUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCancelAndDismiss}
            className="flex-[1.4] inline-flex items-center justify-center gap-1.5 rounded-xl bg-accent px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-white hover:bg-accent-hover transition-colors shadow-xs text-center cursor-pointer"
          >
            <span>Get Quote for This</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
