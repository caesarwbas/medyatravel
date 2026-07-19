"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { assets } from "@/data/assets";
import { navLinks } from "@/data/navigation";
import { siteTranslations } from "@/data/translations";
import type { Locale } from "@/types";

interface NavbarProps {
  locale: Locale;
}

export default function Navbar({ locale }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const copy = siteTranslations[locale];
  const languageHref = locale === "de" ? "/ar" : "/";
  const languageCode = locale === "de" ? "AR" : "DE";
  const bookingSubject =
    locale === "de"
      ? "Anfrage für eine private Syrien-Reise"
      : "استفسار عن رحلة خاصة إلى سوريا";
  const bookingLink = `mailto:booking@medyatravel.de?subject=${encodeURIComponent(
    bookingSubject,
  )}`;

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
        aria-label={copy.common.mainNavigation}
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10"
      >
        <Link
          href="#home"
          onClick={closeMenu}
          className="group flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          aria-label={`MEDYA TRAVEL – ${copy.common.home}`}
        >
          <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-gold/60 bg-brand shadow-[0_0_24px_rgba(199,156,89,0.18)] transition duration-300 group-hover:border-gold group-hover:shadow-[0_0_30px_rgba(199,156,89,0.35)]">
            <Image
              src={assets.favicon}
              alt="MEDYA TRAVEL"
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
              {copy.hero.route}
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
              {link.label[locale]}
            </Link>
          ))}

          <Link
            href={languageHref}
            aria-label={copy.languageSwitchLabel}
            className="flex h-10 min-w-10 items-center justify-center rounded-full border border-white/20 px-3 text-[10px] font-semibold tracking-[0.16em] text-white/75 transition hover:border-gold hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            {languageCode}
          </Link>

          <Link
            href={bookingLink}
            className="border border-gold bg-gold px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand transition duration-300 hover:bg-transparent hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            {copy.common.bookNow}
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href={languageHref}
            aria-label={copy.languageSwitchLabel}
            className="flex h-11 min-w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 px-3 text-[10px] font-semibold tracking-[0.14em] text-white backdrop-blur-md transition hover:border-gold hover:text-gold"
          >
            {languageCode}
          </Link>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-md lg:hidden"
            aria-label={
              isMenuOpen ? copy.common.closeMenu : copy.common.openMenu
            }
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
        </div>
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
              {link.label[locale]}
            </Link>
          ))}

          <Link
            href={bookingLink}
            onClick={closeMenu}
            className="mt-6 inline-flex min-h-12 items-center justify-center bg-gold px-6 text-xs font-semibold uppercase tracking-[0.2em] text-brand"
          >
            {copy.common.bookNow}
          </Link>
        </div>
      </div>
    </header>
  );
}
