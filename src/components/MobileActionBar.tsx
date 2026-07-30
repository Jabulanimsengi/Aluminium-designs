"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Hammer, Layers, Tag } from "lucide-react";

export default function MobileActionBar() {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/", icon: Home },
    { label: "Services", href: "/services", icon: Hammer },
    { label: "Gallery", href: "/gallery", icon: Layers },
    { label: "Prices", href: "/prices", icon: Tag },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center bg-surface border-t-2 border-outline-variant h-16 lg:hidden">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isExternal = item.href.startsWith("http");
        const isActive = !isExternal && pathname === item.href;
        const className = `flex flex-col items-center justify-center w-full h-full transition-all border-t-4 ${
          isActive
            ? "text-primary border-primary bg-surface-container-low font-bold"
            : "text-on-surface-variant border-transparent hover:text-primary hover:bg-surface-container-low"
        }`;

        const content = (
          <>
            <Icon className="w-5 h-5" />
            <span className="font-mono text-[9px] uppercase mt-1 tracking-wider">{item.label}</span>
          </>
        );

        if (isExternal) {
          return (
            <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className={className}>
              {content}
            </a>
          );
        }

        return (
          <Link key={item.label} href={item.href} className={className}>
            {content}
          </Link>
        );
      })}
    </nav>
  );
}
