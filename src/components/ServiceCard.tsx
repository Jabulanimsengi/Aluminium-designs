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
      className="group border border-outline-variant bg-surface-container-lowest flex flex-col hover:border-primary transition-colors rounded-2xl overflow-hidden"
    >
      <div className="relative h-48 w-full overflow-hidden border-b border-outline-variant bg-surface-container-high">
        <Image
          src={imagePath}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            {Icon && (
                <div className="p-1.5 border border-outline-variant bg-surface-container rounded-xl">
                <Icon className="w-3.5 h-3.5 text-secondary" />
              </div>
            )}
            <h3 className="font-sans font-bold text-sm uppercase tracking-tight text-primary group-hover:text-on-tertiary-container transition-colors">
              {title}
            </h3>
          </div>
          <p className="text-xs text-on-surface-variant leading-relaxed">{shortDescription}</p>
        </div>
        <div className="flex items-center gap-2 pt-2 border-t border-outline-variant text-[10px] font-mono font-bold uppercase tracking-widest text-secondary">
          View Details
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </Link>
  );
}
