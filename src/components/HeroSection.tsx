"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { PointerEvent } from "react";
import { assets } from "@/data/assets";
import { destinationsPaths } from "@/data/routes";
import { siteTranslations } from "@/data/translations";
import type { Locale } from "@/types";

interface HeroSectionProps {
  locale: Locale;
}

export default function HeroSection({ locale }: HeroSectionProps) {
  const reduceMotion = useReducedMotion();
  const copy = siteTranslations[locale].hero;
  const isArabic = locale === "ar";

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const smoothX = useSpring(pointerX, {
    stiffness: 95,
    damping: 26,
    mass: 0.65,
  });
  const smoothY = useSpring(pointerY, {
    stiffness: 95,
    damping: 26,
    mass: 0.65,
  });

  const contentX = useTransform(smoothX, [-1, 1], [5, -5]);
  const contentY = useTransform(smoothY, [-1, 1], [4, -4]);
  const logoX = useTransform(smoothX, [-1, 1], [10, -10]);
  const logoY = useTransform(smoothY, [-1, 1], [8, -8]);

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (reduceMotion || event.pointerType !== "mouse") {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const localX = event.clientX - rect.left;
    const localY = event.clientY - rect.top;

    pointerX.set((localX / rect.width) * 2 - 1);
    pointerY.set((localY / rect.height) * 2 - 1);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section
      id="home"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      className="relative min-h-screen overflow-hidden bg-black"
      style={{ perspective: "1200px" }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/images/zenobia-bronze-background.png')",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-16 pt-28 sm:px-8 lg:px-12">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            style={reduceMotion ? undefined : { x: contentX, y: contentY }}
            initial={reduceMotion ? false : { opacity: 0, y: 42 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-3xl drop-shadow-[0_6px_22px_rgba(0,0,0,0.95)]"
          >
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-gold" />
              <p
                className={`text-[10px] font-semibold uppercase tracking-[0.38em] text-gold sm:text-xs ${
                  isArabic ? "hero-arabic-eyebrow" : ""
                }`}
              >
                {copy.eyebrow}
              </p>
            </div>

            <h1
              className={`max-w-4xl text-white [text-shadow:0_4px_18px_rgba(0,0,0,0.95)] ${
                isArabic
                  ? "hero-arabic-heading font-sans"
                  : "font-serif text-5xl font-light leading-[0.92] sm:text-7xl lg:text-[92px]"
              }`}
            >
              {copy.headingLineOne}
              <span
                className={`block text-gold ${isArabic ? "mt-2" : "italic"}`}
              >
                {copy.headingLineTwo}
              </span>
            </h1>

            <p
              className={`mt-7 max-w-xl text-sm leading-7 text-white/90 [text-shadow:0_3px_14px_rgba(0,0,0,1)] sm:text-base sm:leading-8 ${
                isArabic ? "hero-arabic-copy" : ""
              }`}
            >
              {copy.description}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href={destinationsPaths[locale]}
                className={`inline-flex min-h-12 items-center justify-center border border-gold bg-gold px-7 text-xs font-semibold uppercase tracking-[0.22em] text-brand transition duration-300 hover:bg-black/70 hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold ${isArabic ? "hero-arabic-button" : ""}`}
              >
                {copy.destinationsButton}
              </Link>

              <Link
                href="#catalogue"
                className={`inline-flex min-h-12 items-center justify-center border border-white/60 bg-black/45 px-7 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-sm transition duration-300 hover:border-gold hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold ${isArabic ? "hero-arabic-button" : ""}`}
              >
                {copy.catalogueButton}
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white/80 [text-shadow:0_2px_10px_rgba(0,0,0,1)]">
              <span className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_12px_rgba(199,156,89,0.9)]" />
              {copy.route}
            </div>
          </motion.div>

          <motion.div
            className="relative mx-auto hidden aspect-square w-full max-w-md items-center justify-center lg:flex"
            style={reduceMotion ? undefined : { x: logoX, y: logoY }}
            initial={reduceMotion ? false : { opacity: 0, scale: 0.86 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.div
              aria-hidden="true"
              className="absolute inset-[9%] rounded-full border border-gold/35"
              animate={reduceMotion ? undefined : { rotate: 360 }}
              transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              aria-hidden="true"
              className="absolute inset-[18%] rounded-full border border-dashed border-gold/35"
              animate={reduceMotion ? undefined : { rotate: -360 }}
              transition={{ duration: 27, repeat: Infinity, ease: "linear" }}
            />

            <motion.div
              className="relative h-52 w-52 overflow-hidden rounded-full border border-gold/80 bg-black/70 p-2 shadow-[0_0_70px_rgba(199,156,89,0.24)] backdrop-blur-sm"
              animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative h-full w-full overflow-hidden rounded-full">
                <Image
                  src={assets.favicon}
                  alt="MEDYA TRAVEL"
                  fill
                  sizes="208px"
                  className="object-cover"
                />
              </div>
            </motion.div>

            <div className="absolute bottom-[6%] left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/20 bg-black/65 px-5 py-2 text-[9px] uppercase tracking-[0.32em] text-white/85 backdrop-blur-sm">
              {copy.floatingLabel}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/45 to-transparent" />
    </section>
  );
}
