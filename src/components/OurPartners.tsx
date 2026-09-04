import React from "react";
import Image from "next/image";

interface Partner {
  name: string;
  logo: string;
  width: number;
  height: number;
  className: string;
  style?: React.CSSProperties;
}

const partners: Partner[] = [
  {
    name: "Alpeco",
    logo: "/images/partners/alpeco.png",
    width: 300,
    height: 100,
    className: "h-7 sm:h-9 w-auto object-contain",
  },
  {
    name: "Conways",
    logo: "/images/partners/conways.png",
    width: 1149,
    height: 239,
    className: "h-7 sm:h-8 w-auto object-contain",
  },
  {
    name: "H-System",
    logo: "/images/partners/logo-hsystem.png",
    width: 512,
    height: 512,
    className: "h-9 sm:h-11 w-auto object-contain brightness-0 [filter:brightness(0)]",
    style: { filter: "brightness(0)" },
  },
  {
    name: "AGW",
    logo: "/images/partners/agw.logo.jpg",
    width: 350,
    height: 232,
    className: "h-9 sm:h-11 w-auto object-contain mix-blend-multiply",
  },
];

export default function OurPartners() {
  return (
    <section className="border-b border-outline-variant bg-surface-container-lowest py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center font-mono text-[10px] font-bold uppercase tracking-widest text-secondary">
          Our Partners
        </p>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 items-center justify-items-center gap-8 sm:gap-10 lg:gap-16">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex h-12 sm:h-14 w-full items-center justify-center transition-transform duration-200 hover:scale-105"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={partner.width}
                height={partner.height}
                className={partner.className}
                style={partner.style}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
