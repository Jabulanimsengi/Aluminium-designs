import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Layers } from "lucide-react";
import { getWhatsAppQuoteUrl } from "@/lib/site";

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
  const quoteUrl = getWhatsAppQuoteUrl(
    `Hi Aluminium Designs, I would like to request a quotation for ${title}.`
  );

  return (
    <div
      className="group grid min-h-[280px] grid-cols-1 overflow-hidden border border-outline-variant bg-surface-container-lowest transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg sm:grid-cols-[44%_56%]"
    >
      <Link
        href={slug}
        data-lead-gate="false"
        aria-label={`View ${title} specifications`}
        className="relative block min-h-56 overflow-hidden border-b border-outline-variant bg-surface-container-high sm:min-h-full sm:border-b-0 sm:border-r"
      >
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
              <ShieldCheck className="h-3 w-3 text-accent" />
            ) : (
              <Layers className="h-3 w-3 text-accent" />
            )}
            {isSteel ? "Steel Security" : "Aluminium & Glass"}
          </div>
        )}

        {startingPrice && (
          <div className="absolute bottom-3 right-3 z-10 rounded-full bg-white/95 px-2.5 py-1 font-mono text-[10px] font-bold text-primary shadow-xs border border-outline-variant/60">
            From {startingPrice}
          </div>
        )}
      </Link>

      <div className="flex flex-col p-6 sm:p-7 justify-between">
        <div>
          <Link
            href={slug}
            data-lead-gate="false"
            className="block"
          >
            <h3 className="font-sans text-lg font-bold uppercase leading-tight tracking-tight text-primary transition-colors hover:text-accent group-hover:text-accent">
              {title}
            </h3>
          </Link>
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

        <div className="mt-5 pt-4 border-t border-outline-variant/50 flex items-center justify-between gap-3">
          <Link
            href={slug}
            data-lead-gate="false"
            aria-label={`Explore specs for ${title}`}
            className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary hover:text-accent transition-colors inline-flex items-center gap-1.5 py-1"
          >
            <span>Explore Specs</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href={quoteUrl}
            aria-label={`Request quotation for ${title}`}
            className="rounded-full bg-surface-container border border-outline-variant/70 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-primary hover:bg-accent hover:text-white hover:border-accent transition-all inline-flex items-center gap-1 shadow-xs cursor-pointer"
          >
            Quote &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
