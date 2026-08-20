import Link from "next/link";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  shortDescription: string;
  slug: string;
  imagePath: string;
}

export default function ServiceCard({ title, shortDescription, slug, imagePath }: ServiceCardProps) {
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
