"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useEffect,
  useRef,
  useState,
} from "react";
import { assets } from "@/data/assets";
import { navLinks } from "@/data/navigation";
import { siteTranslations } from "@/data/translations";
import type { Locale } from "@/types";

interface NavbarProps {
  locale: Locale;
  languagePaths?: Partial<Record<Locale, string>>;
}

interface LanguageOption {
  code: Locale;
  shortLabel: string;
  label: string;
  defaultHref: string;
}

const languages: LanguageOption[] = [
  {
    code: "en",
    shortLabel: "EN",
    label: "English",
    defaultHref: "/",
  },
  {
    code: "de",
    shortLabel: "DE",
    label: "Deutsch",
    defaultHref: "/de",
  },
  {
    code: "ar",
    shortLabel: "AR",
    label: "العربية",
    defaultHref: "/ar",
  },
];

const bookingSubjects: Record<Locale, string> = {
  en: "Private Syria Journey Enquiry",
  de: "Anfrage für eine private Syrien-Reise",
  ar: "استفسار عن رحلة خاصة إلى سوريا",
};

export default function Navbar({
  locale,
  languagePaths,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] =
    useState(false);

  const [isMenuOpen, setIsMenuOpen] =
    useState(false);

  const [
    isLanguageMenuOpen,
    setIsLanguageMenuOpen,
  ] = useState(false);

  const languageMenuRef =
    useRef<HTMLDivElement>(null);

  const copy = siteTranslations[locale];

  const bookingLink = `mailto:booking@medyatravel.de?subject=${encodeURIComponent(
    bookingSubjects[locale],
  )}`;

  const currentLanguage =
    languages.find(
      (language) => language.code === locale,
    ) ?? languages[0];

  const getLanguageHref = (
    language: LanguageOption,
  ) => {
    return (
      languagePaths?.[language.code] ??
      language.defaultHref
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      },
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll,
      );
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow =
      isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handlePointerDown = (
      event: MouseEvent,
    ) => {
      const target = event.target as Node;

      if (
        languageMenuRef.current &&
        !languageMenuRef.current.contains(target)
      ) {
        setIsLanguageMenuOpen(false);
      }
    };

    const handleEscape = (
      event: KeyboardEvent,
    ) => {
      if (event.key === "Escape") {
        setIsLanguageMenuOpen(false);
        setIsMenuOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handlePointerDown,
    );

    document.addEventListener(
      "keydown",
      handleEscape,
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handlePointerDown,
      );

      document.removeEventListener(
        "keydown",
        handleEscape,
      );
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsLanguageMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen((open) => !open);
    setIsLanguageMenuOpen(false);
  };

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(
      (open) => !open,
    );
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled ||
        isMenuOpen ||
        isLanguageMenuOpen
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

            <span
              className={`block text-[8px] text-gold ${
                locale === "ar"
                  ? "font-arabic font-semibold tracking-normal"
                  : "uppercase tracking-[0.32em]"
              }`}
            >
              {copy.hero.route}
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative py-2 text-white/75 transition hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold ${
                locale === "ar"
                  ? "font-arabic text-sm font-semibold"
                  : "text-[11px] font-medium uppercase tracking-[0.18em]"
              }`}
            >
              {link.label[locale]}
            </Link>
          ))}

          <div
            ref={languageMenuRef}
            className="relative"
          >
            <button
              type="button"
              onClick={toggleLanguageMenu}
              aria-label={
                copy.languageSwitchLabel
              }
              aria-expanded={
                isLanguageMenuOpen
              }
              aria-haspopup="menu"
              aria-controls="desktop-language-menu"
              className="flex h-10 min-w-[62px] items-center justify-center gap-2 rounded-full border border-white/20 px-3 text-[10px] font-semibold tracking-[0.14em] text-white/80 transition hover:border-gold hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                />

                <path d="M3 12h18" />

                <path d="M12 3c2.5 2.5 4 5.6 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.6-4-9s1.5-6.5 4-9Z" />
              </svg>

              <span>
                {currentLanguage.shortLabel}
              </span>

              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                className={`h-3 w-3 transition-transform duration-300 ${
                  isLanguageMenuOpen
                    ? "rotate-180"
                    : ""
                }`}
                fill="currentColor"
              >
                <path d="m5.5 7.5 4.5 4.5 4.5-4.5" />
              </svg>
            </button>

            <div
              id="desktop-language-menu"
              role="menu"
              aria-hidden={
                !isLanguageMenuOpen
              }
              className={`absolute right-0 top-[calc(100%+12px)] min-w-[180px] overflow-hidden rounded-2xl border border-white/10 bg-brand/95 p-2 shadow-2xl backdrop-blur-2xl transition-all duration-300 ${
                isLanguageMenuOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-2 opacity-0"
              }`}
            >
              {languages.map(
                (language) => {
                  const isCurrent =
                    language.code === locale;

                  return (
                    <Link
                      key={language.code}
                      href={getLanguageHref(
                        language,
                      )}
                      role="menuitem"
                      onClick={closeMenu}
                      className={`flex min-h-11 items-center justify-between rounded-xl px-4 transition ${
                        isCurrent
                          ? "bg-gold text-brand"
                          : "text-white/80 hover:bg-white/5 hover:text-gold"
                      } ${
                        language.code === "ar"
                          ? "font-arabic text-sm font-semibold"
                          : "text-xs font-semibold tracking-[0.08em]"
                      }`}
                    >
                      <span>
                        {language.label}
                      </span>

                      <span className="text-[10px] font-bold">
                        {
                          language.shortLabel
                        }
                      </span>
                    </Link>
                  );
                },
              )}
            </div>
          </div>

          <Link
            href={bookingLink}
            className={`border border-gold bg-gold px-5 py-3 text-brand transition duration-300 hover:bg-transparent hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold ${
              locale === "ar"
                ? "font-arabic text-sm font-bold"
                : "text-[10px] font-semibold uppercase tracking-[0.2em]"
            }`}
          >
            {copy.common.bookNow}
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <div
            className="relative"
            ref={languageMenuRef}
          >
            <button
              type="button"
              onClick={toggleLanguageMenu}
              aria-label={
                copy.languageSwitchLabel
              }
              aria-expanded={
                isLanguageMenuOpen
              }
              aria-haspopup="menu"
              aria-controls="mobile-language-menu"
              className="flex h-11 min-w-[58px] items-center justify-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 text-[10px] font-semibold tracking-[0.12em] text-white backdrop-blur-md transition hover:border-gold hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                />

                <path d="M3 12h18" />

                <path d="M12 3c2.5 2.5 4 5.6 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.6-4-9s1.5-6.5 4-9Z" />
              </svg>

              <span>
                {currentLanguage.shortLabel}
              </span>
            </button>

            <div
              id="mobile-language-menu"
              role="menu"
              aria-hidden={
                !isLanguageMenuOpen
              }
              className={`absolute right-0 top-[calc(100%+10px)] min-w-[175px] overflow-hidden rounded-2xl border border-white/10 bg-brand/95 p-2 shadow-2xl backdrop-blur-2xl transition-all duration-300 ${
                isLanguageMenuOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-2 opacity-0"
              }`}
            >
              {languages.map(
                (language) => {
                  const isCurrent =
                    language.code === locale;

                  return (
                    <Link
                      key={language.code}
                      href={getLanguageHref(
                        language,
                      )}
                      role="menuitem"
                      onClick={closeMenu}
                      className={`flex min-h-11 items-center justify-between rounded-xl px-4 transition ${
                        isCurrent
                          ? "bg-gold text-brand"
                          : "text-white/80 hover:bg-white/5 hover:text-gold"
                      } ${
                        language.code === "ar"
                          ? "font-arabic text-sm font-semibold"
                          : "text-xs font-semibold tracking-[0.08em]"
                      }`}
                    >
                      <span>
                        {language.label}
                      </span>

                      <span className="text-[10px] font-bold">
                        {
                          language.shortLabel
                        }
                      </span>
                    </Link>
                  );
                },
              )}
            </div>
          </div>

          <button
            type="button"
            onClick={toggleMobileMenu}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-md transition hover:border-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            aria-label={
              isMenuOpen
                ? copy.common.closeMenu
                : copy.common.openMenu
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            <span
              className={`h-px w-5 bg-white transition duration-300 ${
                isMenuOpen
                  ? "translate-y-[7px] rotate-45"
                  : ""
              }`}
            />

            <span
              className={`h-px w-5 bg-white transition duration-300 ${
                isMenuOpen
                  ? "opacity-0"
                  : ""
              }`}
            />

            <span
              className={`h-px w-5 bg-white transition duration-300 ${
                isMenuOpen
                  ? "-translate-y-[7px] -rotate-45"
                  : ""
              }`}
            />
          </button>
        </div>
      </nav>

      <div
        id="mobile-navigation"
        aria-hidden={!isMenuOpen}
        className={`overflow-hidden border-t border-white/10 bg-brand/95 backdrop-blur-2xl transition-all duration-500 lg:hidden ${
          isMenuOpen
            ? "max-h-[620px] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl flex-col px-6 py-7 ${
            locale === "ar"
              ? "text-right"
              : "text-left"
          }`}
          dir={
            locale === "ar"
              ? "rtl"
              : "ltr"
          }
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              tabIndex={
                isMenuOpen ? 0 : -1
              }
              className={`border-b border-white/10 py-4 text-white/80 transition hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold ${
                locale === "ar"
                  ? "font-arabic text-base font-semibold"
                  : "text-sm uppercase tracking-[0.18em]"
              }`}
            >
              {link.label[locale]}
            </Link>
          ))}

          <div className="mt-6 grid grid-cols-3 gap-2">
            {languages.map(
              (language) => {
                const isCurrent =
                  language.code === locale;

                return (
                  <Link
                    key={language.code}
                    href={getLanguageHref(
                      language,
                    )}
                    onClick={closeMenu}
                    tabIndex={
                      isMenuOpen ? 0 : -1
                    }
                    className={`flex min-h-12 items-center justify-center rounded-xl border text-center transition ${
                      isCurrent
                        ? "border-gold bg-gold text-brand"
                        : "border-white/15 bg-white/5 text-white/75 hover:border-gold hover:text-gold"
                    } ${
                      language.code === "ar"
                        ? "font-arabic text-sm font-bold"
                        : "text-xs font-semibold tracking-[0.12em]"
                    }`}
                  >
                    {language.shortLabel}
                  </Link>
                );
              },
            )}
          </div>

          <Link
            href={bookingLink}
            onClick={closeMenu}
            tabIndex={
              isMenuOpen ? 0 : -1
            }
            className={`mt-6 inline-flex min-h-12 items-center justify-center bg-gold px-6 text-brand transition hover:bg-bronze focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold ${
              locale === "ar"
                ? "font-arabic text-base font-bold"
                : "text-xs font-semibold uppercase tracking-[0.2em]"
            }`}
          >
            {copy.common.bookNow}
          </Link>
        </div>
      </div>
    </header>
  );
}