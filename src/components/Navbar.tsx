"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { assets } from "@/data/assets";
import { navLinks } from "@/data/navigation";

const bookingLink =
  "mailto:booking@medyatravel.de?subject=Private%20Syria%20Journey%20Enquiry";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled || isMenuOpen
          ? "border-b border-white/10 bg-brand/90 shadow-2xl backdrop-blur-xl"
          : "bg-gradient-to-b from-brand/80 to-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10"
      >
        <Link
          href="#home"
          onClick={closeMenu}
          className="group flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          aria-label="MEDYA TRAVEL home"
        >
          <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-gold/60 bg-brand shadow-[0_0_24px_rgba(199,156,89,0.18)] transition duration-300 group-hover:border-gold group-hover:shadow-[0_0_30px_rgba(199,156,89,0.35)]">
            <Image
              src={assets.favicon}
              alt="MEDYA TRAVEL logo"
              fill
              sizes="48px"
              className="object-cover"
              priority
            />
          </span>

          <span className="hidden sm:block">
            <span className="block font-serif text-lg tracking-[0.12em] text-white">
              MEDYA TRAVEL
            </span>
            <span className="block text-[8px] uppercase tracking-[0.32em] text-gold">
              Germany · Syria
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-white/75 transition hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href={bookingLink}
            className="border border-gold bg-gold px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand transition duration-300 hover:bg-transparent hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            Book Now
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-md lg:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          <span
            className={`h-px w-5 bg-white transition duration-300 ${
              isMenuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-5 bg-white transition duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-px w-5 bg-white transition duration-300 ${
              isMenuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-white/10 bg-brand/95 backdrop-blur-2xl transition-all duration-500 lg:hidden ${
          isMenuOpen
            ? "max-h-[520px] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col px-6 py-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="border-b border-white/10 py-4 text-sm uppercase tracking-[0.18em] text-white/80 transition hover:text-gold"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href={bookingLink}
            onClick={closeMenu}
            className="mt-6 inline-flex min-h-12 items-center justify-center bg-gold px-6 text-xs font-semibold uppercase tracking-[0.2em] text-brand"
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}