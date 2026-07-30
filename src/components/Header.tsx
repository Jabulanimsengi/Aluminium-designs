"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown, ArrowRight, Grid } from "lucide-react";
import { services } from "@/data/services";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileServicesCount, setMobileServicesCount] = useState(5);
  const pathname = usePathname();
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Gallery", href: "/gallery" },
    { name: "Prices", href: "/prices" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface border-b border-outline-variant h-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Left: hamburger on mobile */}
            <button
              onClick={() => { setMobileServicesOpen(false); setMobileServicesCount(5); setMobileMenuOpen(!mobileMenuOpen); }}
              className="lg:hidden p-1.5 -ml-1.5 hover:bg-surface-container transition-colors text-primary rounded-lg"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>

          {/* Logo: centered on mobile, left-aligned on desktop */}
          <Link
            href="/"
            className="relative flex h-12 w-[148px] shrink-0 items-center overflow-hidden select-none sm:h-[52px] sm:w-[162px] lg:absolute lg:left-4"
          >
            <Image
              src="/images/real_images/logo/logo.png"
              alt="Aluminium Designs"
              fill
              sizes="(max-width: 640px) 148px, 162px"
              className="object-cover"
              unoptimized
              preload
            />
          </Link>

          {/* Right spacer: balances the hamburger to keep logo centered on mobile */}
          <div className="lg:hidden w-10" />

          <nav className="hidden lg:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button
                    className={`relative flex items-center gap-1 text-[11px] font-mono font-bold tracking-widest uppercase transition-colors pb-1 cursor-pointer ${
                      pathname.startsWith("/services")
                        ? "text-primary after:scale-x-100"
                        : "text-secondary hover:text-primary after:scale-x-0 hover:after:scale-x-100"
                    } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-on-tertiary-container after:transition-transform after:duration-300 after:ease-out`}
                  >
                    {link.name}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesDropdownOpen ? "rotate-180" : ""}`} />
                  </button>

                  <div
                    className={`absolute left-0 top-full w-72 bg-surface border border-outline-variant rounded-xl transition-all duration-200 origin-top-left ${
                      servicesDropdownOpen
                        ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                        : "opacity-0 -translate-y-1 scale-95 pointer-events-none"
                    }`}
                  >
                    <div className="p-2 flex flex-col gap-0.5">
                      <Link
                        href="/services"
                        className="flex items-center gap-3 p-3 hover:bg-surface-container transition-colors rounded-lg"
                      >
                        <Grid className="w-4 h-4 text-secondary" />
                        <div>
                          <p className="text-xs font-bold text-primary">All Services</p>
                          <p className="text-[10px] text-on-surface-variant">View our full product range</p>
                        </div>
                      </Link>
                      <div className="border-t border-outline-variant my-1" />
                      {services.slice(0, 6).map((s) => (
                        <Link
                          key={s.id}
                          href={s.slug}
                          className="flex items-center gap-3 p-3 hover:bg-surface-container transition-colors rounded-lg"
                        >
                          <span className="text-xs font-sans font-semibold text-primary">{s.title}</span>
                        </Link>
                      ))}
                      <div className="border-t border-outline-variant my-1" />
                      <Link
                        href="/services"
                        className="flex items-center justify-center gap-2 p-3 hover:bg-surface-container transition-colors rounded-lg text-xs font-mono font-bold uppercase tracking-wider text-secondary hover:text-primary"
                      >
                        View All {services.length} Services
                        <ChevronDown className="w-3.5 h-3.5 -rotate-90" />
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-[11px] font-mono font-bold tracking-widest uppercase transition-colors pb-1 ${
                    pathname === link.href
                      ? "text-primary after:scale-x-100"
                      : "text-secondary hover:text-primary after:scale-x-0 hover:after:scale-x-100"
                  } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-on-tertiary-container after:transition-transform after:duration-300 after:ease-out`}
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+27871234567"
              className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-mono text-[11px] font-medium tracking-wider">+27 87 123 4567</span>
            </a>
            <Link
              href="/quote"
              className="bg-primary hover:bg-secondary text-on-primary px-5 py-2 rounded-full font-mono text-[11px] font-bold tracking-widest uppercase transition-colors inline-flex items-center gap-1.5"
            >
              Free Quote
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] flex lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
          <div className="relative flex flex-col w-full max-w-xs bg-surface border-r border-outline-variant h-full p-6 space-y-6 shadow-xl rounded-r-2xl animate-slide-in-left">
            <div className="flex items-center justify-between pb-4 border-b border-outline-variant">
              <span className="font-sans text-sm font-black tracking-wider text-primary">MENU</span>
              <button onClick={() => setMobileMenuOpen(false)} className="p-1 hover:bg-surface-container text-primary rounded-lg">
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-1">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.name}>
                    <button
                      onClick={() => setMobileServicesOpen((o) => !o)}
                      className="flex w-full items-center justify-between px-4 py-3 text-xs font-bold uppercase tracking-wider text-secondary hover:bg-surface-container transition-colors rounded-lg"
                    >
                      {link.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                    </button>
                    {mobileServicesOpen && (
                      <div className="border-l-2 border-outline-variant ml-4 pl-4 space-y-0.5">
                        <Link
                          href="/services"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-3 py-2 rounded-lg text-xs font-medium text-on-surface-variant hover:text-primary hover:bg-surface-container"
                        >
                          All Services
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
                href="tel:+27871234567"
                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-outline-variant bg-surface-container-low text-sm font-mono font-medium text-primary"
              >
                <Phone className="w-4 h-4 text-secondary" />
                +27 87 123 4567
              </a>
              <Link
                href="/quote"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center w-full py-3.5 rounded-full bg-primary hover:bg-secondary text-on-primary font-mono text-xs font-bold uppercase tracking-widest transition-colors"
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
