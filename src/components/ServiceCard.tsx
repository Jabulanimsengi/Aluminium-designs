import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Grid,
  DoorClosed,
  Columns,
  Store,
  Split,
  Layers,
  Minimize,
  ShowerHead,
  Wrench,
  Settings,
  Shield,
  Lock,
  CloudRain,
  Sun,
  Home,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Grid,
  DoorClosed,
  Columns,
  Store,
  Split,
  Layers,
  Minimize,
  ShowerHead,
  Wrench,
  Settings,
  Shield,
  Lock,
  CloudRain,
  Sun,
  Home,
  Sparkles,
};

interface ServiceCardProps {
  title: string;
  shortDescription: string;
  slug: string;
  iconName: string;
  imagePath: string;
}

export default function ServiceCard({ title, shortDescription, slug, iconName, imagePath }: ServiceCardProps) {
  const Icon = iconMap[iconName];

  return (
    <Link
      href={slug}
      className="group grid min-h-[270px] grid-cols-1 overflow-hidden border border-outline-variant bg-surface-container-lowest transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg sm:grid-cols-[42%_58%]"
    >
      <div className="relative min-h-56 overflow-hidden border-b border-outline-variant bg-surface-container-high sm:min-h-full sm:border-b-0 sm:border-r">
        <Image
          src={imagePath}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 42vw, 21vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent sm:bg-gradient-to-r" />
      </div>
      <div className="flex flex-col p-6 sm:p-7">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-outline-variant bg-surface-container">
              {Icon && <Icon className="w-4 h-4 text-secondary" />}
            </div>
            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-secondary">
              Made to measure
            </span>
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-outline-variant text-primary transition-colors group-hover:bg-primary group-hover:text-on-primary">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        <div className="my-6 h-px bg-outline-variant" />

        <div className="flex flex-1 flex-col">
          <h3 className="font-sans text-lg font-bold uppercase leading-tight tracking-tight text-primary transition-colors group-hover:text-on-tertiary-container">
            {title}
          </h3>
          <p className="mt-3 text-xs leading-relaxed text-on-surface-variant">
            {shortDescription}
          </p>
          <span className="mt-auto pt-6 font-mono text-[10px] font-bold uppercase tracking-widest text-primary">
            Explore service
          </span>
        </div>
      </div>
    </Link>
  );
}
