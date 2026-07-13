"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { assets } from "@/data/assets";
import { navLinks } from "@/data/navigation";

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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-luxury ${
        isScrolled || isMenuOpen
          ? "border-b border-white/5 bg-brand/95 shadow-lg shadow-black/20 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-10">
        <Link href="/" className="relative h-10 w-36 shrink-0 sm:h-12 sm:w-44">
          <Image
            src={assets.logoSlogan}
            alt="MEDYA TRAVEL"
            fill
            sizes="(max-width: 640px) 144px, 176px"
            className="object-contain object-left"
            priority
          />
        </Link>

        <div className="hidden items-center gap-8 lg:flex xl:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-medium uppercase tracking-luxury text-light-gray transition-colors duration-300 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            href="#book"
            className="hidden border border-gold px-5 py-2 text-xs font-medium uppercase tracking-luxury text-gold transition-all duration-300 hover:bg-gold hover:text-brand sm:inline-block"
          >
            Book Now
          </Link>

          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span
              className={`block h-px w-5 bg-white transition-all duration-300 ${
                isMenuOpen ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-white transition-all duration-300 ${
                isMenuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden border-t border-white/5 bg-brand/98 transition-all duration-300 lg:hidden ${
          isMenuOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-4 py-4 sm:px-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="rounded-sm px-3 py-3 text-sm font-medium uppercase tracking-luxury text-light-gray transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#book"
            onClick={closeMenu}
            className="mt-2 border border-gold px-3 py-3 text-center text-sm font-medium uppercase tracking-luxury text-gold transition-all hover:bg-gold hover:text-brand"
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}
