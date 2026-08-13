"use client";

import React, { useState, useRef, useCallback, useEffect, useMemo } from "react";
import Image from "next/image";
import { projects } from "@/data/projects";
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from "lucide-react";

const INITIAL_PROJECT_COUNT = 12;
const PROJECT_BATCH_SIZE = 12;
const LIGHTBOX_THUMBNAIL_COUNT = 7;

export default function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [activeProject, setActiveProject] = useState<(typeof projects)[0] | null>(null);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [visibleCount, setVisibleCount] = useState(INITIAL_PROJECT_COUNT);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(() => new Set());
  const dragStart = useRef({ x: 0, y: 0 });
  const posStart = useRef({ x: 0, y: 0 });
  const preloadedImages = useRef(new Set<string>());
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const touchStart = useRef({ x: 0, y: 0 });
  const suppressClick = useRef(false);

  const preloadImage = useCallback((src: string) => {
    if (preloadedImages.current.has(src)) return;

    const image = new window.Image();
    image.src = src;
    preloadedImages.current.add(src);
  }, []);

  const openProject = useCallback(
    (project: (typeof projects)[0]) => {
      if (!returnFocusRef.current) {
        returnFocusRef.current = document.activeElement as HTMLElement | null;
      }
      preloadImage(project.imagePath);
      setActiveProject(project);
    },
    [preloadImage]
  );

  const resetZoom = useCallback(() => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  }, []);

  const closeLightbox = useCallback(() => {
    resetZoom();
    setActiveProject(null);
    window.requestAnimationFrame(() => {
      returnFocusRef.current?.focus();
      returnFocusRef.current = null;
    });
  }, [resetZoom]);

  const handleWheel = useCallback((event: React.WheelEvent) => {
    event.preventDefault();
    setZoom((currentZoom) =>
      Math.min(5, Math.max(0.5, currentZoom - event.deltaY * 0.005))
    );
  }, []);

  const toggleZoom = useCallback(() => {
    if (zoom > 1) {
      resetZoom();
    } else {
      setZoom(2);
      setPosition({ x: 0, y: 0 });
    }
  }, [zoom, resetZoom]);

  const handleMouseDown = useCallback(
    (event: React.MouseEvent) => {
      if (zoom <= 1) return;
      setDragging(true);
      dragStart.current = { x: event.clientX, y: event.clientY };
      posStart.current = { ...position };
    },
    [zoom, position]
  );

  const handleMouseMove = useCallback(
    (event: React.MouseEvent) => {
      if (!dragging) return;
      setPosition({
        x: posStart.current.x + event.clientX - dragStart.current.x,
        y: posStart.current.y + event.clientY - dragStart.current.y,
      });
    },
    [dragging]
  );

  const handleMouseUp = useCallback(() => setDragging(false), []);

  const categories = [
    { id: "all", name: "All" },
    { id: "windows", name: "Windows" },
    { id: "doors", name: "Doors" },
    { id: "gates", name: "Gates" },
    { id: "security", name: "Security" },
    { id: "shopfronts", name: "Shopfronts" },
    { id: "partitions", name: "Partitions" },
    { id: "enclosures", name: "Enclosures" },
    { id: "balustrades", name: "Balustrades" },
    { id: "custom", name: "Custom" },
  ];

  const filteredProjects = useMemo(
    () =>
      activeFilter === "all"
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter],
  );
  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const remainingProjectCount = Math.max(0, filteredProjects.length - visibleProjects.length);

  const setFilter = useCallback((filter: string) => {
    setActiveFilter(filter);
    setVisibleCount(INITIAL_PROJECT_COUNT);
  }, []);

  const markImageLoaded = useCallback((id: string) => {
    setLoadedImages((current) => {
      if (current.has(id)) return current;
      const next = new Set(current);
      next.add(id);
      return next;
    });
  }, []);

  const activeProjectIndex = activeProject
    ? filteredProjects.findIndex((project) => project.id === activeProject.id)
    : -1;
  const lightboxThumbnails = activeProjectIndex < 0
    ? []
    : Array.from(
        { length: Math.min(LIGHTBOX_THUMBNAIL_COUNT, filteredProjects.length) },
        (_, offset) => {
          const halfWindow = Math.floor(LIGHTBOX_THUMBNAIL_COUNT / 2);
          const index =
            (activeProjectIndex - halfWindow + offset + filteredProjects.length) %
            filteredProjects.length;
          return filteredProjects[index];
        },
      );

  const showProject = useCallback(
    (direction: number) => {
      if (!activeProject || filteredProjects.length === 0) return;

      const currentIndex = filteredProjects.findIndex(
        (project) => project.id === activeProject.id
      );
      const nextIndex =
        (currentIndex + direction + filteredProjects.length) % filteredProjects.length;

      resetZoom();
      openProject(filteredProjects[nextIndex]);
    },
    [activeProject, filteredProjects, openProject, resetZoom]
  );

  useEffect(() => {
    if (!activeProject) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") showProject(-1);
      if (event.key === "ArrowRight") showProject(1);
      if (event.key === "Escape") closeLightbox();
      if (event.key === "Tab") {
        const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
        );
        if (!focusable?.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeProject, closeLightbox, showProject]);

  useEffect(() => {
    if (!activeProject || filteredProjects.length < 2) return;

    const currentIndex = filteredProjects.findIndex(
      (project) => project.id === activeProject.id
    );
    const previousIndex =
      (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    const nextIndex = (currentIndex + 1) % filteredProjects.length;

    preloadImage(filteredProjects[previousIndex].imagePath);
    preloadImage(filteredProjects[nextIndex].imagePath);
  }, [activeProject, filteredProjects, preloadImage]);

  return (
    <div className="space-y-5 sm:space-y-10">
      <div className="sm:hidden">
        <label
          htmlFor="gallery-category"
          className="mb-2 block font-mono text-[10px] font-bold uppercase tracking-widest text-secondary"
        >
          Project category
        </label>
        <div className="relative">
          <select
            id="gallery-category"
            value={activeFilter}
            onChange={(event) => setFilter(event.target.value)}
            className="h-12 w-full appearance-none border border-outline-variant bg-surface-container-lowest px-4 pr-11 font-mono text-xs font-bold uppercase tracking-wider text-primary outline-none focus:border-primary focus:ring-2 focus:ring-primary/15"
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <ChevronRight className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 rotate-90 text-secondary" />
        </div>
      </div>

      <div className="hidden flex-wrap justify-center gap-2 border-b border-outline-variant pb-4 sm:flex">
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => setFilter(category.id)}
            aria-pressed={activeFilter === category.id}
            className={`shrink-0 rounded-full border px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-widest transition-colors ${
              activeFilter === category.id
                ? "border-primary bg-primary text-on-primary"
                : "border-outline-variant bg-surface text-secondary hover:bg-surface-container"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="font-mono text-[9px] font-bold uppercase tracking-widest text-secondary">
            Completed work
          </p>
          <p className="mt-1 text-sm font-bold text-primary">
            Showing {visibleProjects.length} of {filteredProjects.length}{" "}
            {filteredProjects.length === 1 ? "project" : "projects"}
          </p>
        </div>
        <p className="font-mono text-[9px] font-bold uppercase tracking-widest text-outline sm:text-[10px]">
          Tap to enlarge
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {visibleProjects.map((project, index) => {
          const isLoaded = loadedImages.has(project.id);

          return (
          <button
            key={project.id}
            type="button"
            onClick={() => openProject(project)}
            aria-label={`Open ${project.title}`}
            className={`group relative overflow-hidden bg-surface-container-high text-left ${
              index === 0 ? "col-span-2 aspect-[16/10]" : "aspect-square"
            } sm:col-span-1 sm:aspect-[4/3]`}
          >
            <span
              aria-hidden="true"
              className={`gallery-image-skeleton absolute inset-0 transition-opacity duration-500 ${
                isLoaded ? "opacity-0" : "opacity-100"
              }`}
            />
            <Image
              src={project.imagePath}
              alt={project.title}
              fill
              loading={index < 3 ? "eager" : "lazy"}
              sizes={index === 0
                ? "(max-width: 639px) calc(100vw - 24px), (max-width: 1023px) calc(50vw - 32px), calc(33vw - 32px)"
                : "(max-width: 639px) calc(50vw - 16px), (max-width: 1023px) calc(50vw - 32px), calc(33vw - 32px)"}
              onLoad={() => markImageLoaded(project.id)}
              className={`object-cover transition-[opacity,transform] duration-700 ${
                isLoaded ? "scale-100 opacity-100 group-hover:scale-105" : "scale-[1.02] opacity-0"
              }`}
            />
            <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 scale-90 items-center justify-center rounded-full bg-white text-primary opacity-0 shadow-lg transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
              <ZoomIn className="h-4 w-4" />
            </span>
          </button>
          );
        })}
      </div>

      {remainingProjectCount > 0 && (
        <div className="flex flex-col items-center gap-3 border-t border-outline-variant pt-8">
          <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-outline">
            {remainingProjectCount} more {remainingProjectCount === 1 ? "project" : "projects"}
          </p>
          <button
            type="button"
            onClick={() => setVisibleCount((current) => current + PROJECT_BATCH_SIZE)}
            className="inline-flex min-w-44 items-center justify-center rounded-full bg-primary px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Load more
          </button>
        </div>
      )}

      {filteredProjects.length === 0 && (
        <div className="border border-outline-variant py-20 text-center">
          <p className="font-mono text-xs uppercase tracking-wider text-outline">
            No images found in this category.
          </p>
        </div>
      )}

      {activeProject && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/95 p-0 animate-fade-in sm:bg-black/90 sm:p-4"
          onClick={closeLightbox}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={`${activeProject.title} image viewer`}
            className="relative h-[100dvh] w-full max-w-6xl overflow-hidden bg-black sm:h-[85vh]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeLightbox}
              aria-label="Close image viewer"
              className="absolute right-3 top-3 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/70 text-white transition-colors hover:bg-black sm:right-4 sm:top-4 sm:h-10 sm:w-10"
            >
              <X className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => showProject(-1)}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/70 text-white transition-colors hover:bg-black sm:left-5 sm:h-11 sm:w-11"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={() => showProject(1)}
              aria-label="Next image"
              className="absolute right-2 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/70 text-white transition-colors hover:bg-black sm:right-5 sm:h-11 sm:w-11"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div className="absolute left-3 top-3 z-20 flex items-center gap-2 rounded-full border border-white/30 bg-black/70 px-3 py-2 sm:left-1/2 sm:top-4 sm:-translate-x-1/2 sm:bg-black/60">
              <button
                type="button"
                aria-label="Zoom out"
                onClick={() => setZoom((currentZoom) => Math.max(0.5, currentZoom - 0.5))}
                className="p-1 text-white/80 hover:text-white"
              >
                <ZoomOut className="h-4 w-4" />
              </button>
              <span className="min-w-10 text-center font-mono text-[10px] text-white/70">
                {Math.round(zoom * 100)}%
              </span>
              <button
                type="button"
                aria-label="Zoom in"
                onClick={() => setZoom((currentZoom) => Math.min(5, currentZoom + 0.5))}
                className="p-1 text-white/80 hover:text-white"
              >
                <ZoomIn className="h-4 w-4" />
              </button>
            </div>

            <div className="scrollbar-hide absolute inset-x-0 bottom-0 z-20 flex gap-2 overflow-x-auto border-t border-white/20 bg-black/80 p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] sm:inset-x-auto sm:bottom-4 sm:left-1/2 sm:w-[calc(100%-2rem)] sm:max-w-3xl sm:-translate-x-1/2 sm:border sm:bg-black/70 sm:pb-2">
              {lightboxThumbnails.map((project) => {
                const isActive = project.id === activeProject.id;

                return (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => {
                      resetZoom();
                      openProject(project);
                    }}
                    aria-label={`View ${project.title}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative h-14 w-20 shrink-0 overflow-hidden border-2 transition-all ${
                      isActive
                        ? "border-white opacity-100"
                        : "border-transparent opacity-55 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={project.imagePath}
                      alt=""
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </button>
                );
              })}
            </div>

            <div
              className="flex h-full w-full items-center justify-center"
              style={{ cursor: zoom > 1 ? (dragging ? "grabbing" : "grab") : "zoom-in" }}
              onWheel={handleWheel}
              onClick={() => {
                if (suppressClick.current) {
                  suppressClick.current = false;
                  return;
                }
                toggleZoom();
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={(event) => {
                const touch = event.touches[0];
                touchStart.current = { x: touch.clientX, y: touch.clientY };
              }}
              onTouchEnd={(event) => {
                if (zoom > 1) return;
                const touch = event.changedTouches[0];
                const deltaX = touch.clientX - touchStart.current.x;
                const deltaY = touch.clientY - touchStart.current.y;

                if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
                  suppressClick.current = true;
                  showProject(deltaX < 0 ? 1 : -1);
                }
              }}
            >
              <Image
                src={activeProject.imagePath}
                alt={activeProject.title}
                width={1400}
                height={1050}
                loading="eager"
                unoptimized
                className="max-h-[calc(100dvh-5rem)] max-w-full select-none object-contain transition-transform duration-150 pointer-events-none sm:max-h-[85vh]"
                style={{
                  transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
                }}
                draggable={false}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
