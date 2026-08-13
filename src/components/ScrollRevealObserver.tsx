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
    if (reducedMotion.matches) {
      sections.forEach((section) => section.classList.add("site-reveal-complete"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("site-reveal-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    const frame = window.requestAnimationFrame(() => {
      sections.forEach((section) => {
        section.classList.add("site-reveal");

        if (section.getBoundingClientRect().top <= window.innerHeight * 0.92) {
          window.requestAnimationFrame(() => {
            section.classList.add("site-reveal-visible");
          });
          return;
        }

        observer.observe(section);
      });
    });

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
