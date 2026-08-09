"use client";

import { usePathname } from "next/navigation";

export default function NavigationLoader() {
  const pathname = usePathname();

  return (
    <div
      key={pathname}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 right-0 z-[300] h-0.5 bg-surface animate-navigation-progress"
    >
      <div className="h-full w-2/5 animate-pulse bg-on-tertiary-container" />
    </div>
  );
}
