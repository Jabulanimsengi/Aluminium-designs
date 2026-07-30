"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { projects } from "@/data/projects";
import { MapPin, Search, X, ZoomIn, ZoomOut } from "lucide-react";

export default function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [activeProject, setActiveProject] = useState<(typeof projects)[0] | null>(null);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const posStart = useRef({ x: 0, y: 0 });

  const resetZoom = useCallback(() => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  }, []);

  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    setZoom((z) => Math.min(5, Math.max(0.5, z - e.deltaY * 0.005)));
  }, []);

  const toggleZoom = useCallback(() => {
    if (zoom > 1) resetZoom();
    else { setZoom(2); setPosition({ x: 0, y: 0 }); }
  }, [zoom, resetZoom]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (zoom <= 1) return;
    setDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
    posStart.current = { ...position };
  }, [zoom, position]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!dragging) return;
    setPosition({ x: posStart.current.x + e.clientX - dragStart.current.x, y: posStart.current.y + e.clientY - dragStart.current.y });
  }, [dragging]);

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
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="space-y-12">
      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 border-b border-outline-variant pb-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveFilter(cat.id)}
            className={`px-4 py-2 font-mono text-[11px] font-bold tracking-widest uppercase border transition-colors cursor-pointer rounded-full ${
              activeFilter === cat.id
                ? "bg-primary text-on-primary border-primary"
                : "bg-surface hover:bg-surface-container border-outline-variant text-secondary"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setActiveProject(project)}
            className="group border border-outline-variant bg-surface-container-lowest flex flex-col hover:border-primary transition-colors cursor-pointer rounded-2xl overflow-hidden"
          >
            <div className="relative h-56 w-full overflow-hidden border-b border-outline-variant bg-surface-container-high">
              <Image
                src={project.imagePath}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute top-3 left-3 font-mono text-[9px] font-bold uppercase tracking-widest bg-black/60 backdrop-blur-md text-white px-2.5 py-1 rounded-full">
                {project.category}
              </span>
              <div className="absolute top-3 right-3 w-8 h-8 border border-outline-variant bg-surface flex items-center justify-center text-outline group-hover:text-on-tertiary-container transition-colors rounded-xl">
                <Search className="w-3.5 h-3.5" />
              </div>
            </div>

            <div className="p-5 flex flex-col justify-between flex-grow space-y-4">
              <div className="space-y-2">
                <div className="flex items-center font-mono text-[10px] text-secondary uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5 text-secondary mr-1.5 shrink-0" />
                  {project.location}
                </div>
                <h4 className="font-sans font-bold text-base uppercase text-primary tracking-tight group-hover:text-on-tertiary-container transition-colors">
                  {project.title}
                </h4>
                <p className="text-xs text-on-surface-variant leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>

              <div className="border-t border-outline-variant pt-3 flex items-center justify-end font-mono text-[10px] uppercase tracking-wider text-outline">
                <span className="text-secondary font-bold">View Detail</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-20 border border-outline-variant rounded-2xl">
          <p className="font-mono text-xs text-outline uppercase tracking-wider">
            No projects found in this category.
          </p>
        </div>
      )}

      {/* Lightbox */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 animate-fade-in" onClick={() => { resetZoom(); setActiveProject(null); }}>
          <div className="bg-surface border border-outline-variant max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden rounded-2xl relative" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full border-b border-outline-variant bg-black overflow-hidden" style={{ height: "50vh" }}>
              <button
                onClick={() => { resetZoom(); setActiveProject(null); }}
                className="absolute top-3 right-3 z-20 w-8 h-8 rounded-xl border border-white/30 bg-black/60 flex items-center justify-center text-white hover:bg-black/80 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              {/* Zoom controls */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1 rounded-full border border-white/30 bg-black/60 px-2 py-1">
                <button onClick={() => setZoom((z) => Math.max(0.5, z - 0.5))} className="p-1 text-white/80 hover:text-white">
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="font-mono text-[10px] text-white/70 min-w-[40px] text-center">{Math.round(zoom * 100)}%</span>
                <button onClick={() => setZoom((z) => Math.min(5, z + 0.5))} className="p-1 text-white/80 hover:text-white">
                  <ZoomIn className="w-4 h-4" />
                </button>
              </div>
              <div
                className="w-full h-full flex items-center justify-center"
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
                  width={800}
                  height={600}
                  className="object-contain transition-transform duration-150 select-none pointer-events-none"
                  style={{ transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`, maxHeight: "50vh", maxWidth: "100%" }}
                  draggable={false}
                />
              </div>
            </div>
            <div className="p-6 sm:p-8 space-y-4 overflow-y-auto">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] font-bold uppercase tracking-widest bg-surface-container border border-outline-variant px-2.5 py-1 text-secondary rounded-full">
                  {activeProject.category}
                </span>
                <span className="font-mono text-[10px] text-outline uppercase tracking-wider flex items-center">
                  <MapPin className="w-3.5 h-3.5 text-secondary mr-1.5" />
                  {activeProject.location}
                </span>
              </div>
              <h3 className="font-sans font-bold text-xl uppercase text-primary tracking-tight">
                {activeProject.title}
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {activeProject.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
