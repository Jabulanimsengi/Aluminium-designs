"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { projects } from "@/data/projects";
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from "lucide-react";

export default function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [activeProject, setActiveProject] = useState<(typeof projects)[0] | null>(null);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const posStart = useRef({ x: 0, y: 0 });
  const preloadedImages = useRef(new Set<string>());

  const preloadImage = useCallback((src: string) => {
    if (preloadedImages.current.has(src)) return;

    const image = new window.Image();
    image.src = src;
    preloadedImages.current.add(src);
  }, []);

  const openProject = useCallback(
    (project: (typeof projects)[0]) => {
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

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

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

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") showProject(-1);
      if (event.key === "ArrowRight") showProject(1);
      if (event.key === "Escape") closeLightbox();
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
    <div className="space-y-10">
      <div className="flex flex-wrap justify-center gap-2 border-b border-outline-variant pb-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveFilter(category.id)}
            className={`rounded-full border px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-widest transition-colors ${
              activeFilter === category.id
                ? "border-primary bg-primary text-on-primary"
                : "border-outline-variant bg-surface text-secondary hover:bg-surface-container"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <button
            key={project.id}
            type="button"
            onClick={() => openProject(project)}
            onMouseEnter={() => preloadImage(project.imagePath)}
            onFocus={() => preloadImage(project.imagePath)}
            onTouchStart={() => preloadImage(project.imagePath)}
            aria-label={`Open ${project.title}`}
            className="group relative aspect-[4/3] overflow-hidden bg-surface-container-high text-left"
          >
            <Image
              src={project.imagePath}
              alt={project.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
            <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 scale-90 items-center justify-center rounded-full bg-white text-primary opacity-0 shadow-lg transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
              <ZoomIn className="h-4 w-4" />
            </span>
          </button>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="border border-outline-variant py-20 text-center">
          <p className="font-mono text-xs uppercase tracking-wider text-outline">
            No images found in this category.
          </p>
        </div>
      )}

      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          <div
            className="relative h-[85vh] w-full max-w-6xl overflow-hidden bg-black"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Close image"
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/60 text-white transition-colors hover:bg-black"
            >
              <X className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => showProject(-1)}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/60 text-white transition-colors hover:bg-black sm:left-5"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={() => showProject(1)}
              aria-label="Next image"
              className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/60 text-white transition-colors hover:bg-black sm:right-5"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div className="absolute left-1/2 top-4 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/30 bg-black/60 px-3 py-2">
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

            <div className="scrollbar-hide absolute bottom-4 left-1/2 z-20 flex w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2 gap-2 overflow-x-auto rounded-xl border border-white/20 bg-black/70 p-2">
              {filteredProjects.map((project) => {
                const isActive = project.id === activeProject.id;

                return (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => {
                      resetZoom();
                      openProject(project);
                    }}
                    onMouseEnter={() => preloadImage(project.imagePath)}
                    onFocus={() => preloadImage(project.imagePath)}
                    onTouchStart={() => preloadImage(project.imagePath)}
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
              onClick={toggleZoom}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <Image
                src={activeProject.imagePath}
                alt={activeProject.title}
                width={1400}
                height={1050}
                loading="eager"
                unoptimized
                className="max-h-[85vh] max-w-full select-none object-contain transition-transform duration-150 pointer-events-none"
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
