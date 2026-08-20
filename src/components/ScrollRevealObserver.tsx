"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const REVEAL_SELECTOR = "main section:not([data-reveal='none'])";

export default function ScrollRevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith("/admin")) return;

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR),
    );
    if (sections.length === 0) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    const animations = new Map<HTMLElement, Animation>();

    sections.forEach((section) => {
      const animation = section.animate(
        [
          { opacity: 0, transform: "translate3d(0, 22px, 0)" },
          { opacity: 1, transform: "translate3d(0, 0, 0)" },
        ],
        {
          duration: 650,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          fill: "both",
        },
      );
      animation.pause();
      animation.currentTime = 0;
      animations.set(section, animation);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          animations.get(entry.target as HTMLElement)?.play();
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    sections.forEach((section) => {
      const bounds = section.getBoundingClientRect();

      if (bounds.bottom <= 0) {
        animations.get(section)?.finish();
      } else if (bounds.top <= window.innerHeight * 0.92) {
        animations.get(section)?.play();
      } else {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
    };
  }, [pathname]);

  return null;
}
