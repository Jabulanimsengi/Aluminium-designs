"use client";

import React, { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { X, Play, ArrowRight, Video } from "lucide-react";
import { whatsappQuoteUrl } from "@/lib/site";

const DISMISSAL_KEY = "apex_work_videos_popup_dismissed";

interface WorkVideo {
  id: string;
  title: string;
  badge: string;
  location: string;
  description: string;
  cdnUrl: string;
  localUrl: string;
  poster: string;
  duration: string;
}

const WORK_VIDEOS: WorkVideo[] = [
  {
    id: "video-stacking-5panel",
    title: "5-Panel Patio Stacking Door Installation",
    badge: "Patio Enclosure",
    location: "Johannesburg, Gauteng",
    description: "Custom bronze aluminium folding stacking doors installed with low-profile sill track for seamless indoor-outdoor patio flow.",
    cdnUrl: "https://res.cloudinary.com/dw8dqd5tj/video/upload/v1788612367/apex-aluminium/videos/video-work-two.mp4",
    localUrl: "/videos/video-work-two.mp4",
    poster: "/images/real_images/products/doors/stackingdoors-installation-one.jpeg",
    duration: "0:27",
  },
  {
    id: "video-folding-3panel",
    title: "3-Panel Folding Stacking Door Operation",
    badge: "Residential Fitting",
    location: "Centurion, Gauteng",
    description: "Live operation video showcasing effortless folding glide, flush handle mechanism, and clean sill alignment on bronze stacking doors.",
    cdnUrl: "https://res.cloudinary.com/dw8dqd5tj/video/upload/v1788612279/apex-aluminium/videos/video-work-one.mp4",
    localUrl: "/videos/video-work-one.mp4",
    poster: "/images/real_images/products/doors/stackingdoors-installation-two.jpeg",
    duration: "0:12",
  },
];

export default function WorkVideosModal() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    // Never show on admin pages
    if (pathname.startsWith("/admin")) return;

    // Check if user has clicked Cancel previously
    try {
      if (typeof window !== "undefined" && window.localStorage.getItem(DISMISSAL_KEY) === "true") {
        return;
      }
    } catch {
      // LocalStorage access restricted
    }

    // Gentle delay after initial mount so the page is ready
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

  const currentVideo = WORK_VIDEOS[activeIdx] || WORK_VIDEOS[0];

  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center overflow-y-auto bg-black/80 backdrop-blur-sm p-3 sm:p-4 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="work-videos-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleCancelAndDismiss();
        }
      }}
    >
      <div className="relative w-full max-w-lg md:max-w-xl max-h-[92dvh] overflow-y-auto rounded-2xl border border-white/20 bg-surface-container-lowest p-5 sm:p-6 shadow-2xl flex flex-col justify-between">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-3 border-b border-outline-variant/60">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-2.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-accent">
              <Video className="h-3 w-3" />
              <span>Real Installations</span>
            </div>
            <h2 id="work-videos-title" className="mt-1 font-sans text-lg sm:text-xl font-bold uppercase tracking-tight text-primary">
              Watch Our Work in Action
            </h2>
            <p className="text-xs text-on-surface-variant">
              Manufactured &amp; fitted by Aluminium Designs across Gauteng
            </p>
          </div>

          <button
            type="button"
            onClick={handleCancelAndDismiss}
            aria-label="Cancel and do not show again"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-secondary transition-colors hover:bg-surface-container hover:text-primary cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Video Tabs */}
        <div className="mt-3.5 flex gap-2">
          {WORK_VIDEOS.map((vid, i) => {
            const isActive = i === activeIdx;
            return (
              <button
                key={vid.id}
                type="button"
                onClick={() => setActiveIdx(i)}
                className={`flex-1 flex items-center justify-center gap-1.5 rounded-lg px-2.5 py-2 text-left font-mono text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer border ${
                  isActive
                    ? "bg-primary text-white border-primary shadow-xs ring-1 ring-accent/40"
                    : "bg-surface-container border-outline-variant/70 text-secondary hover:bg-surface-container-high hover:text-primary"
                }`}
              >
                <Play className={`h-2.5 w-2.5 ${isActive ? "fill-accent text-accent" : ""}`} />
                <span className="truncate">{i === 0 ? "5-Panel Stacker" : "3-Panel Stacker"}</span>
                <span className="text-[9px] opacity-70">({vid.duration})</span>
              </button>
            );
          })}
        </div>

        {/* Video Player Container */}
        <div className="mt-3.5 relative flex items-center justify-center rounded-xl bg-black border border-outline-variant/70 overflow-hidden shadow-inner">
          <video
            key={currentVideo.id}
            controls
            autoPlay
            muted
            playsInline
            preload="metadata"
            poster={currentVideo.poster}
            className="max-h-[46vh] sm:max-h-[50vh] w-auto max-w-full object-contain mx-auto"
          >
            <source src={currentVideo.cdnUrl} type="video/mp4" />
            <source src={currentVideo.localUrl} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </div>

        {/* Video Metadata */}
        <div className="mt-3 rounded-lg bg-surface-container p-3">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-sans text-xs sm:text-sm font-bold text-primary">
              {currentVideo.title}
            </h3>
            <span className="shrink-0 font-mono text-[9px] font-semibold text-secondary">
              {currentVideo.location}
            </span>
          </div>
          <p className="mt-1 text-[11px] leading-relaxed text-on-surface-variant">
            {currentVideo.description}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 pt-3 border-t border-outline-variant/60 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
          <button
            type="button"
            onClick={handleCancelAndDismiss}
            className="rounded-xl border border-outline-variant px-4 py-2.5 font-mono text-[11px] font-bold uppercase tracking-wider text-secondary hover:bg-surface-container hover:text-primary transition-colors text-center cursor-pointer order-2 sm:order-1"
          >
            Cancel &amp; Don&apos;t Show Again
          </button>

          <a
            href={whatsappQuoteUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCancelAndDismiss}
            className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-accent px-5 py-2.5 font-mono text-[11px] font-bold uppercase tracking-widest text-white hover:bg-accent-hover transition-colors shadow-xs text-center cursor-pointer order-1 sm:order-2"
          >
            Get a Quote for This &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
