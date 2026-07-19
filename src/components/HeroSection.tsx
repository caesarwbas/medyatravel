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
import { useRef, useState, type PointerEvent } from "react";
import HeroVideo from "@/components/HeroVideo";
import { assets } from "@/data/assets";
import { destinationsPaths } from "@/data/routes";
import { siteTranslations } from "@/data/translations";
import type { Locale } from "@/types";

const particles = [
  { left: "8%", top: "18%", size: 3, delay: 0 },
  { left: "16%", top: "70%", size: 2, delay: 1.2 },
  { left: "27%", top: "30%", size: 3, delay: 0.5 },
  { left: "39%", top: "82%", size: 2, delay: 2 },
  { left: "63%", top: "72%", size: 3, delay: 0.8 },
  { left: "85%", top: "26%", size: 2, delay: 2.4 },
];

interface HeroSectionProps {
  locale: Locale;
}

export default function HeroSection({ locale }: HeroSectionProps) {
  const reduceMotion = useReducedMotion();
  const revealRef = useRef<HTMLDivElement>(null);
  const [showCursor, setShowCursor] = useState(false);
  const copy = siteTranslations[locale].hero;
  const isArabic = locale === "ar";

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

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
  const smoothCursorX = useSpring(cursorX, {
    stiffness: 260,
    damping: 28,
    mass: 0.35,
  });
  const smoothCursorY = useSpring(cursorY, {
    stiffness: 260,
    damping: 28,
    mass: 0.35,
  });

  const videoX = useTransform(smoothX, [-1, 1], [-12, 12]);
  const videoY = useTransform(smoothY, [-1, 1], [-8, 8]);
  const contentX = useTransform(smoothX, [-1, 1], [4, -4]);
  const contentY = useTransform(smoothY, [-1, 1], [3, -3]);
  const logoX = useTransform(smoothX, [-1, 1], [10, -10]);
  const logoY = useTransform(smoothY, [-1, 1], [7, -7]);
  const glowX = useTransform(smoothX, [-1, 1], [-22, 22]);
  const glowY = useTransform(smoothY, [-1, 1], [-14, 14]);

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (reduceMotion || event.pointerType !== "mouse") {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const localX = event.clientX - rect.left;
    const localY = event.clientY - rect.top;
    const normalizedX = (localX / rect.width) * 2 - 1;
    const normalizedY = (localY / rect.height) * 2 - 1;

    pointerX.set(normalizedX);
    pointerY.set(normalizedY);
    cursorX.set(localX);
    cursorY.set(localY);

    revealRef.current?.style.setProperty(
      "--reveal-x",
      `${(localX / rect.width) * 100}%`,
    );
    revealRef.current?.style.setProperty(
      "--reveal-y",
      `${(localY / rect.height) * 100}%`,
    );
    revealRef.current?.style.setProperty("--reveal-radius", "190px");
  };

  const handlePointerEnter = (event: PointerEvent<HTMLElement>) => {
    if (reduceMotion || event.pointerType !== "mouse") {
      return;
    }

    setShowCursor(true);
    handlePointerMove(event);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
    setShowCursor(false);
    revealRef.current?.style.setProperty("--reveal-radius", "0px");
  };

  return (
    <section
      id="home"
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      className="relative min-h-screen cursor-default overflow-hidden bg-brand"
      style={{ perspective: "1200px" }}
    >
      <motion.div
        aria-hidden="true"
        className="absolute -inset-4 will-change-transform"
        style={
          reduceMotion
            ? { scale: 1.025 }
            : {
                x: videoX,
                y: videoY,
                scale: 1.04,
              }
        }
        initial={reduceMotion ? false : { opacity: 0, scale: 1.015 }}
        animate={{ opacity: 1, scale: reduceMotion ? 1.025 : 1.04 }}
        transition={{ duration: 1.25, ease: [0.22, 1, 0.36, 1] }}
      >
        <HeroVideo />
      </motion.div>

      {/*
        This is the real mouse-hover reveal. The video remains underneath in full
        colour; this masked dark/sepia layer disappears around the pointer.
      */}
      <div
        ref={revealRef}
        aria-hidden="true"
        className="hero-video-reveal pointer-events-none absolute inset-0"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,7,0.94)_0%,rgba(8,8,7,0.82)_38%,rgba(8,8,7,0.28)_72%,rgba(8,8,7,0.12)_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand/80 via-transparent to-brand/35"
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-50"
        style={reduceMotion ? undefined : { x: glowX, y: glowY }}
      >
        <div className="absolute -right-24 top-[16%] h-80 w-80 rounded-full bg-gold/15 blur-[110px]" />
        <div className="absolute -left-28 bottom-[6%] h-72 w-72 rounded-full bg-white/5 blur-[120px]" />
      </motion.div>

      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {particles.map((particle) => (
          <motion.span
            key={`${particle.left}-${particle.top}`}
            className="absolute rounded-full bg-gold/70 shadow-[0_0_12px_rgba(199,156,89,0.8)]"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
            }}
            animate={
              reduceMotion
                ? undefined
                : { opacity: [0.15, 0.8, 0.15], y: [0, -12, 0] }
            }
            transition={{
              duration: 4,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {!reduceMotion && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute z-20 hidden h-[190px] w-[190px] rounded-full border border-gold/55 shadow-[0_0_45px_rgba(197,160,89,0.18)] lg:block"
          style={{
            x: smoothCursorX,
            y: smoothCursorY,
            marginLeft: -95,
            marginTop: -95,
            opacity: showCursor ? 1 : 0,
          }}
          transition={{ opacity: { duration: 0.2 } }}
        >
          <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold shadow-[0_0_14px_rgba(197,160,89,0.9)]" />
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap text-[8px] font-semibold uppercase tracking-[0.3em] text-white/70">
            Reveal Syria
          </span>
        </motion.div>
      )}

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
              className={`max-w-4xl text-white ${
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
              className={`mt-7 max-w-xl text-sm leading-7 text-light-gray sm:text-base sm:leading-8 ${
                isArabic ? "hero-arabic-copy" : ""
              }`}
            >
              {copy.description}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href={destinationsPaths[locale]}
                className={`inline-flex min-h-12 items-center justify-center border border-gold bg-gold px-7 text-xs font-semibold uppercase tracking-[0.22em] text-brand transition duration-300 hover:bg-transparent hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold ${isArabic ? "hero-arabic-button" : ""}`}
              >
                {copy.destinationsButton}
              </Link>

              <Link
                href="#catalogue"
                className={`inline-flex min-h-12 items-center justify-center border border-white/30 bg-white/5 px-7 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-md transition duration-300 hover:border-gold hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold ${isArabic ? "hero-arabic-button" : ""}`}
              >
                {copy.catalogueButton}
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white/55">
              <span className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_12px_rgba(199,156,89,0.9)]" />
              {copy.route}
            </div>
          </motion.div>

          <motion.div
            className="relative mx-auto hidden aspect-square w-full max-w-md items-center justify-center lg:flex"
            style={reduceMotion ? undefined : { x: logoX, y: logoY }}
            initial={reduceMotion ? false : { opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.3,
              delay: 0.38,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.div
              aria-hidden="true"
              className="absolute inset-[9%] rounded-full border border-gold/25"
              animate={reduceMotion ? undefined : { rotate: 360 }}
              transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              aria-hidden="true"
              className="absolute inset-[18%] rounded-full border border-dashed border-gold/30"
              animate={reduceMotion ? undefined : { rotate: -360 }}
              transition={{ duration: 27, repeat: Infinity, ease: "linear" }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-[23%] rounded-full bg-gold/15 blur-3xl"
            />

            <motion.div
              className="relative h-52 w-52 overflow-hidden rounded-full border border-gold/70 bg-brand/70 p-2 shadow-[0_0_70px_rgba(199,156,89,0.24)] backdrop-blur-xl"
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

            <div className="absolute bottom-[6%] left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-brand/60 px-5 py-2 text-[9px] uppercase tracking-[0.32em] text-white/70 backdrop-blur-xl">
              {copy.floatingLabel}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/45 to-transparent" />
    </section>
  );
}
