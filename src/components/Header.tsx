"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown, ArrowRight, Hammer, Sparkles } from "lucide-react";
import { services, aluminiumServices, steelServices } from "@/data/services";
import { whatsappQuoteUrl } from "@/lib/site";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileServicesCount, setMobileServicesCount] = useState(5);
  const pathname = usePathname();
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  const mobilePanelRef = useRef<HTMLDivElement>(null);
  const servicesMenuRef = useRef<HTMLDivElement>(null);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);

  const handleDropdownEnter = () => {
    if (dropdownTimer.current) {
      clearTimeout(dropdownTimer.current);
      dropdownTimer.current = null;
    }
    setServicesDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimer.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
    };
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const menuButton = mobileMenuButtonRef.current;
    document.body.style.overflow = "hidden";

    const panel = mobilePanelRef.current;
    const focusableSelector =
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const focusableElements = panel?.querySelectorAll<HTMLElement>(focusableSelector);
    focusableElements?.[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        return;
      }

      if (event.key !== "Tab" || !focusableElements?.length) return;
      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      menuButton?.focus();
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!servicesDropdownOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!servicesMenuRef.current?.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setServicesDropdownOpen(false);
        servicesButtonRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [servicesDropdownOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Prices", href: "/prices" },
    { name: "Gallery", href: "/gallery" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface border-b border-outline-variant h-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="relative flex items-center justify-between h-full lg:grid lg:grid-cols-[154px_minmax(0,1fr)_auto]">
          {/* Left: hamburger on mobile */}
            <button
              ref={mobileMenuButtonRef}
              type="button"
              onClick={() => { setMobileServicesOpen(false); setMobileServicesCount(5); setMobileMenuOpen(!mobileMenuOpen); }}
              className="lg:hidden p-1.5 -ml-1.5 hover:bg-surface-container transition-colors text-primary rounded-lg"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>

          {/* Logo: aligned to the page content edge on desktop */}
          <Link
            href="/"
            aria-label="Aluminium Designs — home"
            className="relative flex h-12 w-[124px] shrink-0 items-center overflow-hidden select-none sm:h-[52px] sm:w-[134px] lg:h-12 lg:w-[124px] lg:justify-self-start"
          >
            <Image
              src="/images/real_images/logo/logo.png"
              alt="Aluminium Designs"
              fill
              sizes="(max-width: 640px) 124px, 134px"
              className="object-contain"
              unoptimized
              preload
            />
          </Link>

          {/* Right spacer: balances the hamburger to keep logo centered on mobile */}
          <div className="lg:hidden w-10" />

          <nav className="hidden lg:flex items-center justify-self-center gap-3.5 xl:gap-5">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  ref={servicesMenuRef}
                  key={link.name}
                  className="relative"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button
                    ref={servicesButtonRef}
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={servicesDropdownOpen}
                    aria-controls="desktop-services-menu"
                    onClick={() => setServicesDropdownOpen((isOpen) => !isOpen)}
                    className={`relative flex items-center gap-1 text-[12px] font-sans font-semibold tracking-wide uppercase transition-colors pb-1 cursor-pointer ${
                      pathname.startsWith("/services")
                        ? "text-primary after:scale-x-100"
                        : "text-secondary hover:text-primary after:scale-x-0 hover:after:scale-x-100"
                    } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-on-tertiary-container after:transition-transform after:duration-300 after:ease-out`}
                  >
                    {link.name}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesDropdownOpen ? "rotate-180" : ""}`} />
                  </button>

                  <div
                    id="desktop-services-menu"
                    aria-hidden={!servicesDropdownOpen}
                    className={`absolute -left-16 top-full w-[560px] rounded-xl bg-surface border border-outline-variant shadow-2xl transition-all duration-200 origin-top-left ${
                      servicesDropdownOpen
                        ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                        : "opacity-0 -translate-y-1 scale-95 pointer-events-none"
                    }`}
                  >
                    <div className="p-4 grid grid-cols-2 gap-4">
                      {/* Column 1: Aluminium & Glass */}
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5 pb-2 border-b border-outline-variant text-[10px] font-mono font-bold uppercase tracking-widest text-secondary">
                          <Sparkles className="w-3 h-3 text-accent" />
                          Aluminium &amp; Glass
                        </div>
                        <div className="pt-1 flex flex-col gap-1">
                          {aluminiumServices.slice(0, 5).map((s) => (
                            <Link
                              key={s.id}
                              href={s.slug}
                              tabIndex={servicesDropdownOpen ? 0 : -1}
                              className="group rounded-lg p-2.5 transition-colors hover:bg-surface-container hover:shadow-sm focus-visible:outline-2 focus-visible:outline-accent"
                            >
                              <span className="block truncate text-[13px] font-sans font-semibold text-primary group-hover:text-accent">
                                {s.title}
                              </span>
                              <span className="mt-0.5 block truncate text-[11px] leading-snug text-on-surface-variant">
                                {s.shortDescription}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Column 2: Steel & Security */}
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5 pb-2 border-b border-outline-variant text-[10px] font-mono font-bold uppercase tracking-widest text-secondary">
                          <Hammer className="w-3 h-3 text-accent" />
                          Steel Works &amp; Security
                        </div>
                        <div className="pt-1 flex flex-col gap-1">
                          {steelServices.slice(0, 5).map((s) => (
                            <Link
                              key={s.id}
                              href={s.slug}
                              tabIndex={servicesDropdownOpen ? 0 : -1}
                              className="group rounded-lg p-2.5 transition-colors hover:bg-surface-container hover:shadow-sm focus-visible:outline-2 focus-visible:outline-accent"
                            >
                              <span className="block truncate text-[13px] font-sans font-semibold text-primary group-hover:text-accent">
                                {s.title}
                              </span>
                              <span className="mt-0.5 block truncate text-[11px] leading-snug text-on-surface-variant">
                                {s.shortDescription}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-outline-variant bg-surface-container-low rounded-b-xl px-4 py-3 flex items-center justify-between text-[11px] font-sans font-semibold uppercase tracking-wide">
                      <Link
                        href="/services"
                        tabIndex={servicesDropdownOpen ? 0 : -1}
                        className="text-secondary hover:text-accent transition-colors flex items-center gap-1 px-2 py-1.5 rounded-md focus-visible:outline-2 focus-visible:outline-accent"
                      >
                        All {services.length} Products &rarr;
                      </Link>
                      <Link
                        href="/steel-works"
                        tabIndex={servicesDropdownOpen ? 0 : -1}
                        className="text-accent hover:text-accent-hover font-bold transition-colors flex items-center gap-1 px-2 py-1.5 rounded-md focus-visible:outline-2 focus-visible:outline-accent"
                      >
                        Steel Works Hub &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-[12px] font-sans font-semibold tracking-wide uppercase transition-colors pb-1 ${
                    pathname === link.href
                      ? "text-primary after:scale-x-100"
                      : "text-secondary hover:text-primary after:scale-x-0 hover:after:scale-x-100"
                  } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 after:ease-out`}
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center justify-self-end gap-4">
            <a
              href="tel:+27716122439"
              className="hidden 2xl:flex items-center gap-2 text-secondary hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-mono text-[11px] font-medium tracking-wider">071 612 2439</span>
            </a>
            <Link
              href={whatsappQuoteUrl}
              className="bg-accent hover:bg-accent-hover text-white px-5 py-2 rounded-full font-sans text-[12px] font-semibold tracking-wide uppercase transition-all shadow-sm hover:shadow inline-flex items-center gap-1.5"
            >
              Free Quote
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] flex lg:hidden">
          <button
            type="button"
            className="fixed inset-0 bg-black/50"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close navigation menu"
            tabIndex={-1}
          />
          <div
            ref={mobilePanelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Main navigation"
            className="relative flex h-full w-full max-w-xs flex-col space-y-6 overflow-y-auto border-r border-outline-variant bg-surface p-6 shadow-xl animate-slide-in-left"
          >
            <div className="flex items-center justify-between pb-4 border-b border-outline-variant">
              <span className="font-sans text-sm font-black tracking-wider text-primary">MENU</span>
              <button type="button" aria-label="Close menu" onClick={() => setMobileMenuOpen(false)} className="p-1 hover:bg-surface-container text-primary rounded-lg">
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-1">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.name}>
                    <button
                      type="button"
                      aria-expanded={mobileServicesOpen}
                      aria-controls="mobile-services-menu"
                      onClick={() => setMobileServicesOpen((o) => !o)}
                      className="flex w-full items-center justify-between px-4 py-3 text-xs font-bold uppercase tracking-wider text-secondary hover:bg-surface-container transition-colors rounded-lg"
                    >
                      {link.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                    </button>
                    {mobileServicesOpen && (
                      <div id="mobile-services-menu" className="border-l-2 border-outline-variant ml-4 pl-4 space-y-0.5">
                        <Link
                          href="/steel-works"
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-bold text-primary bg-surface-container-low hover:bg-surface-container mb-1 border border-outline-variant/60"
                        >
                          <Hammer className="w-3.5 h-3.5 text-secondary" />
                          Steel Works Division Hub
                        </Link>
                        <Link
                          href="/services"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-3 py-2 rounded-lg text-xs font-medium text-on-surface-variant hover:text-primary hover:bg-surface-container"
                        >
                          All 38 Services
                        </Link>
                        {services.slice(0, mobileServicesCount).map((s) => (
                          <Link
                            key={s.id}
                            href={s.slug}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-3 py-2 rounded-lg text-[11px] text-on-surface-variant hover:text-primary hover:bg-surface-container"
                          >
                            {s.title}
                          </Link>
                        ))}
                        {mobileServicesCount < services.length && (
                          <button
                            type="button"
                            onClick={() => setMobileServicesCount((c) => c + 5)}
                            className="w-full px-3 py-2 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider text-secondary hover:text-primary hover:bg-surface-container transition-colors text-center"
                          >
                            View More Services ({services.length - mobileServicesCount} remaining)
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 text-xs font-bold uppercase tracking-wider transition-colors border-l-2 rounded-r-lg ${
                      pathname === link.href
                        ? "text-primary border-primary bg-surface-container"
                        : "text-secondary border-transparent hover:bg-surface-container"
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              )}
            </nav>

            <div className="border-t border-outline-variant pt-6 space-y-4">
              <a
                href="tel:+27716122439"
                className="flex items-center gap-3 px-4 py-3 border border-outline-variant bg-surface-container-low text-sm font-mono font-medium text-primary"
              >
                <Phone className="w-4 h-4 text-secondary" />
                071 612 2439
              </a>
              <Link
                href={whatsappQuoteUrl}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center w-full py-3.5 rounded-full bg-accent hover:bg-accent-hover text-white font-sans text-xs font-semibold uppercase tracking-wide transition-all shadow-sm"
              >
                Request Free Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
