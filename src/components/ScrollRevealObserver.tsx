"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Exclude hero and first section to preserve instant LCP and avoid hiding content on hydration
const REVEAL_SELECTOR = "main section:not(#hero):not(:first-of-type):not([data-reveal='none'])";

export default function ScrollRevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith("/admin")) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR),
    );
    if (sections.length === 0) return;

    const animations = new Map<HTMLElement, Animation>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          let anim = animations.get(el);
          if (!anim) {
            anim = el.animate(
              [
                { opacity: 0, transform: "translate3d(0, 16px, 0)" },
                { opacity: 1, transform: "translate3d(0, 0, 0)" },
              ],
              {
                duration: 400,
                easing: "cubic-bezier(0.16, 1, 0.3, 1)",
                fill: "both",
              },
            );
            animations.set(el, anim);
          } else {
            anim.play();
          }
          observer.unobserve(el);
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px 50px 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
    };
  }, [pathname]);

  return null;
}
