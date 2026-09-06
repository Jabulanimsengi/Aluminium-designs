"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  ArrowRight,
  Layers,
  Flame,
  Lock,
  ShieldCheck,
  Wrench,
  Tag,
} from "lucide-react";
import { rawServiceTaxonomy, allTaxonomyServices } from "@/data/serviceTaxonomy";
import { whatsappQuoteUrl } from "@/lib/site";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  const mobilePanelRef = useRef<HTMLDivElement>(null);
  const servicesMenuRef = useRef<HTMLDivElement>(null);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);

  // Automatically close dropdowns on route changes
  useEffect(() => {
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/" || pathname === "") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleMobileDrawerLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setMobileMenuOpen(false);
    if (pathname === "/" || pathname === "") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

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
    { name: "Pricing", href: "/pricing" },
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
              onClick={() => { setMobileServicesOpen(false); setMobileMenuOpen(!mobileMenuOpen); }}
              className="lg:hidden flex h-11 w-11 items-center justify-center -ml-2 rounded-lg text-primary transition-colors hover:bg-surface-container active:bg-surface-container-high touch-manipulation"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          {/* Logo: aligned to the page content edge on desktop */}
          <Link
            href="/#hero"
            onClick={handleLogoClick}
            aria-label="Aluminium Designs — home"
            className="flex shrink-0 items-center select-none lg:justify-self-start cursor-pointer"
          >
            <Image
              src="/images/real_images/logo/logo.png"
              alt="Aluminium Designs"
              width={160}
              height={64}
              priority
              className="h-12 sm:h-12 md:h-13 w-auto object-contain"
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
                >
                  <button
                    ref={servicesButtonRef}
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={servicesDropdownOpen}
                    aria-controls="desktop-services-menu"
                    onClick={(e) => {
                      e.stopPropagation();
                      setServicesDropdownOpen((isOpen) => !isOpen);
                    }}
                    className={`relative flex items-center gap-1.5 text-[12px] font-sans font-semibold tracking-wide uppercase transition-colors pb-1 cursor-pointer select-none ${
                      pathname.startsWith("/services") || servicesDropdownOpen
                        ? "text-primary after:scale-x-100"
                        : "text-secondary hover:text-primary after:scale-x-0"
                    } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 after:ease-out`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        servicesDropdownOpen ? "rotate-180 text-accent" : ""
                      }`}
                    />
                  </button>

                  <div
                    id="desktop-services-menu"
                    aria-hidden={!servicesDropdownOpen}
                    className={`absolute -left-28 top-full w-[780px] xl:w-[860px] rounded-xl bg-surface border border-outline-variant shadow-2xl transition-all duration-200 origin-top-left z-50 ${
                      servicesDropdownOpen
                        ? "opacity-100 translate-y-2 scale-100 pointer-events-auto"
                        : "opacity-0 translate-y-0 scale-95 pointer-events-none"
                    }`}
                  >
                    <div className="p-5 grid grid-cols-3 gap-5">
                      {/* Column 1: Aluminium & Doors */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-1.5 pb-2 border-b border-outline-variant text-[10px] font-mono font-bold uppercase tracking-widest text-accent">
                          <Layers className="w-3.5 h-3.5 text-accent" />
                          Aluminium &amp; Doors
                        </div>
                        <div className="flex flex-col gap-1">
                          {allTaxonomyServices
                            .filter((s) => s.category === "Aluminium & Doors")
                            .slice(0, 5)
                            .map((s) => (
                              <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                onClick={() => setServicesDropdownOpen(false)}
                                tabIndex={servicesDropdownOpen ? 0 : -1}
                                className="group rounded-md p-1.5 transition-colors hover:bg-surface-container focus-visible:outline-2 focus-visible:outline-accent"
                              >
                                <span className="block truncate text-xs font-sans font-semibold text-primary group-hover:text-accent">
                                  {s.name}
                                </span>
                                <span className="block text-[10px] text-on-surface-variant font-mono">
                                  {s.startingPriceDisplay}
                                </span>
                              </Link>
                            ))}
                        </div>
                      </div>

                      {/* Column 2: Glass & Enclosures + Maintenance */}
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-1.5 pb-2 border-b border-outline-variant text-[10px] font-mono font-bold uppercase tracking-widest text-accent">
                            <Flame className="w-3.5 h-3.5 text-accent" />
                            Glass &amp; Enclosures
                          </div>
                          <div className="flex flex-col gap-1">
                            {allTaxonomyServices
                              .filter((s) => s.category === "Glass & Enclosures")
                              .slice(0, 4)
                              .map((s) => (
                                <Link
                                  key={s.slug}
                                  href={`/services/${s.slug}`}
                                  onClick={() => setServicesDropdownOpen(false)}
                                  tabIndex={servicesDropdownOpen ? 0 : -1}
                                  className="group rounded-md p-1.5 transition-colors hover:bg-surface-container focus-visible:outline-2 focus-visible:outline-accent"
                                >
                                  <span className="block truncate text-xs font-sans font-semibold text-primary group-hover:text-accent">
                                    {s.name}
                                  </span>
                                  <span className="block text-[10px] text-on-surface-variant font-mono">
                                    {s.startingPriceDisplay}
                                  </span>
                                </Link>
                              ))}
                          </div>
                        </div>

                        <div className="space-y-2 pt-2 border-t border-outline-variant/60">
                          <div className="flex items-center gap-1.5 pb-1 text-[10px] font-mono font-bold uppercase tracking-widest text-accent">
                            <Wrench className="w-3.5 h-3.5 text-accent" />
                            Maintenance &amp; Repairs
                          </div>
                          <div className="flex flex-col gap-1">
                            {allTaxonomyServices
                              .filter((s) => s.category === "Maintenance & Repairs")
                              .slice(0, 3)
                              .map((s) => (
                                <Link
                                  key={s.slug}
                                  href={`/services/${s.slug}`}
                                  onClick={() => setServicesDropdownOpen(false)}
                                  tabIndex={servicesDropdownOpen ? 0 : -1}
                                  className="group rounded-md p-1.5 transition-colors hover:bg-surface-container focus-visible:outline-2 focus-visible:outline-accent"
                                >
                                  <span className="block truncate text-xs font-sans font-semibold text-primary group-hover:text-accent">
                                    {s.name}
                                  </span>
                                  <span className="block text-[10px] text-on-surface-variant font-mono">
                                    {s.startingPriceDisplay}
                                  </span>
                                </Link>
                              ))}
                          </div>
                        </div>
                      </div>

                      {/* Column 3: Security & Fencing + Steel Works */}
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-1.5 pb-2 border-b border-outline-variant text-[10px] font-mono font-bold uppercase tracking-widest text-accent">
                            <Lock className="w-3.5 h-3.5 text-accent" />
                            Security &amp; Fencing
                          </div>
                          <div className="flex flex-col gap-1">
                            {allTaxonomyServices
                              .filter((s) => s.category === "Security & Fencing")
                              .slice(0, 4)
                              .map((s) => (
                                <Link
                                  key={s.slug}
                                  href={`/services/${s.slug}`}
                                  onClick={() => setServicesDropdownOpen(false)}
                                  tabIndex={servicesDropdownOpen ? 0 : -1}
                                  className="group rounded-md p-1.5 transition-colors hover:bg-surface-container focus-visible:outline-2 focus-visible:outline-accent"
                                >
                                  <span className="block truncate text-xs font-sans font-semibold text-primary group-hover:text-accent">
                                    {s.name}
                                  </span>
                                  <span className="block text-[10px] text-on-surface-variant font-mono">
                                    {s.startingPriceDisplay}
                                  </span>
                                </Link>
                              ))}
                          </div>
                        </div>

                        <div className="space-y-2 pt-2 border-t border-outline-variant/60">
                          <div className="flex items-center gap-1.5 pb-1 text-[10px] font-mono font-bold uppercase tracking-widest text-accent">
                            <ShieldCheck className="w-3.5 h-3.5 text-accent" />
                            Steel &amp; Custom Works
                          </div>
                          <div className="flex flex-col gap-1">
                            {allTaxonomyServices
                              .filter((s) => s.category === "Steel & Custom Works")
                              .slice(0, 3)
                              .map((s) => (
                                <Link
                                  key={s.slug}
                                  href={`/services/${s.slug}`}
                                  onClick={() => setServicesDropdownOpen(false)}
                                  tabIndex={servicesDropdownOpen ? 0 : -1}
                                  className="group rounded-md p-1.5 transition-colors hover:bg-surface-container focus-visible:outline-2 focus-visible:outline-accent"
                                >
                                  <span className="block truncate text-xs font-sans font-semibold text-primary group-hover:text-accent">
                                    {s.name}
                                  </span>
                                  <span className="block text-[10px] text-on-surface-variant font-mono">
                                    {s.startingPriceDisplay}
                                  </span>
                                </Link>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-outline-variant bg-surface-container-low rounded-b-xl px-5 py-3 flex items-center justify-between text-[11px] font-sans font-semibold uppercase tracking-wide">
                      <Link
                        href="/services"
                        onClick={() => setServicesDropdownOpen(false)}
                        tabIndex={servicesDropdownOpen ? 0 : -1}
                        className="text-primary hover:text-accent font-bold transition-colors flex items-center gap-1.5 px-2.5 py-1.5 rounded-md hover:bg-surface-container"
                      >
                        Browse All 38 Services &rarr;
                      </Link>
                      <Link
                        href="/pricing"
                        onClick={() => setServicesDropdownOpen(false)}
                        tabIndex={servicesDropdownOpen ? 0 : -1}
                        className="text-accent hover:text-accent-hover font-bold transition-colors flex items-center gap-1.5 px-2.5 py-1.5 rounded-md hover:bg-surface-container"
                      >
                        <Tag className="w-3.5 h-3.5 text-accent" />
                        Central Pricing Hub &rarr;
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
              <Link
                href="/#hero"
                onClick={handleMobileDrawerLogoClick}
                className="flex shrink-0 items-center select-none cursor-pointer"
                aria-label="Aluminium Designs — home"
              >
                <Image
                  src="/images/real_images/logo/logo.png"
                  alt="Aluminium Designs"
                  width={150}
                  height={60}
                  priority
                  className="h-11 sm:h-12 w-auto object-contain"
                />
              </Link>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMobileMenuOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-primary transition-colors hover:bg-surface-container active:bg-surface-container-high"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-1">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.name} className="space-y-1">
                    <button
                      type="button"
                      aria-expanded={mobileServicesOpen}
                      aria-controls="mobile-services-menu"
                      onClick={() => setMobileServicesOpen((o) => !o)}
                      className="flex w-full items-center justify-between px-4 py-3 text-xs font-bold uppercase tracking-wider text-secondary hover:text-primary hover:bg-surface-container transition-colors rounded-lg cursor-pointer"
                    >
                      <span className="flex items-center gap-2">
                        <Layers className="w-4 h-4 text-accent" />
                        {link.name}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          mobileServicesOpen ? "rotate-180 text-accent" : ""
                        }`}
                      />
                    </button>

                    {/* Contents strictly only show on user click */}
                    {mobileServicesOpen && (
                      <div
                        id="mobile-services-menu"
                        className="border-l-2 border-accent ml-4 pl-3.5 space-y-3 py-2 animate-in fade-in slide-in-from-top-2 duration-200"
                      >
                        {/* All Services Link */}
                        <div className="pb-2 border-b border-outline-variant">
                          <Link
                            href="/services"
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setMobileServicesOpen(false);
                            }}
                            className="flex items-center justify-center gap-1 px-3 py-2 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider text-white bg-primary hover:bg-primary/90 transition-colors text-center w-full"
                          >
                            Browse All 38 Services &rarr;
                          </Link>
                        </div>

                        {/* 5 Categories grouped */}
                        {rawServiceTaxonomy.map((group) => {
                          const groupServices = allTaxonomyServices.filter(
                            (s) => s.category === group.category
                          );
                          return (
                            <div key={group.category} className="space-y-1">
                              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-accent flex items-center gap-1 pt-1">
                                {group.category}
                              </div>
                              <div className="space-y-0.5">
                                {groupServices.slice(0, 3).map((s) => (
                                  <Link
                                    key={s.slug}
                                    href={`/services/${s.slug}`}
                                    onClick={() => {
                                      setMobileMenuOpen(false);
                                      setMobileServicesOpen(false);
                                    }}
                                    className="block px-2.5 py-1 rounded-md text-xs text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors"
                                  >
                                    {s.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          );
                        })}
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
