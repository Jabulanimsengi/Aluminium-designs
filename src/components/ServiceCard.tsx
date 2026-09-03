import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

interface ServiceCardProps {
  title: string;
  shortDescription: string;
  slug: string;
  imagePath: string;
  category?: "aluminium" | "steel" | string;
  startingPrice?: string;
  features?: string[];
}

export default function ServiceCard({
  title,
  shortDescription,
  slug,
  imagePath,
  category,
  startingPrice,
  features,
}: ServiceCardProps) {
  const isSteel = category === "steel";

  return (
    <Link
      href={slug}
      data-lead-gate="false"
      aria-label={`View ${title} specifications`}
      className="group grid min-h-[280px] grid-cols-1 overflow-hidden border border-outline-variant bg-surface-container-lowest transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg sm:grid-cols-[44%_56%]"
    >
      <div className="relative min-h-56 overflow-hidden border-b border-outline-variant bg-surface-container-high sm:min-h-full sm:border-b-0 sm:border-r">
        <Image
          src={imagePath}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 44vw, 22vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent sm:bg-gradient-to-r" />

        {category && (
          <div
            className={`absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-wider backdrop-blur-md border ${
              isSteel
                ? "bg-black/80 text-white border-white/20"
                : "bg-primary/80 text-white border-white/20"
            }`}
          >
            {isSteel ? (
              <ShieldCheck className="h-3 w-3 text-emerald-400" />
            ) : (
              <Sparkles className="h-3 w-3 text-cyan-300" />
            )}
            {isSteel ? "Steel Security" : "Aluminium & Glass"}
          </div>
        )}

        {startingPrice && (
          <div className="absolute bottom-3 right-3 z-10 rounded-full bg-white/95 px-2.5 py-1 font-mono text-[10px] font-bold text-primary shadow-xs border border-outline-variant/60">
            From {startingPrice}
          </div>
        )}
      </div>

      <div className="flex flex-col p-6 sm:p-7 justify-between">
        <div>
          <h3 className="font-sans text-lg font-bold uppercase leading-tight tracking-tight text-primary transition-colors group-hover:text-secondary">
            {title}
          </h3>
          <p className="mt-2.5 text-xs leading-relaxed text-on-surface-variant line-clamp-2">
            {shortDescription}
          </p>

          {features && features.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {features.slice(0, 2).map((feat, i) => (
                <span
                  key={i}
                  className="rounded-sm bg-surface-container px-2 py-0.5 font-mono text-[9px] font-medium text-secondary"
                >
                  {feat}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="mt-5 pt-4 border-t border-outline-variant/50 flex items-center justify-between">
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary group-hover:text-secondary transition-colors inline-flex items-center gap-1">
            Explore Specs
            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
          </span>
          <span className="rounded-full bg-surface-container px-2.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-secondary group-hover:bg-primary group-hover:text-white transition-colors">
            Quote &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}
