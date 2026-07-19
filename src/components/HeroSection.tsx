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
import { siteTranslations } from "@/data/translations";
import type { Locale } from "@/types";

const particles = [
  { left: "8%", top: "18%", size: 3, delay: 0 },
  { left: "16%", top: "70%", size: 2, delay: 1.2 },
  { left: "26%", top: "30%", size: 4, delay: 0.5 },
  { left: "38%", top: "82%", size: 2, delay: 2 },
  { left: "51%", top: "15%", size: 3, delay: 1.6 },
  { left: "62%", top: "72%", size: 4, delay: 0.8 },
  { left: "74%", top: "25%", size: 2, delay: 2.4 },
  { left: "86%", top: "60%", size: 3, delay: 1 },
  { left: "92%", top: "18%", size: 2, delay: 2.8 },
];

interface HeroSectionProps {
  locale: Locale;
}

export default function HeroSection({ locale }: HeroSectionProps) {
  const reduceMotion = useReducedMotion();
  const copy = siteTranslations[locale].hero;

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const smoothX = useSpring(pointerX, {
    stiffness: 80,
    damping: 25,
    mass: 0.7,
  });

  const smoothY = useSpring(pointerY, {
    stiffness: 80,
    damping: 25,
    mass: 0.7,
  });

  const rotateY = useTransform(smoothX, [-1, 1], [-5, 5]);
  const rotateX = useTransform(smoothY, [-1, 1], [4, -4]);
  const backgroundX = useTransform(smoothX, [-1, 1], [-18, 18]);
  const backgroundY = useTransform(smoothY, [-1, 1], [-12, 12]);
  const logoX = useTransform(smoothX, [-1, 1], [-12, 12]);
  const logoY = useTransform(smoothY, [-1, 1], [-8, 8]);
  const contentX = useTransform(smoothX, [-1, 1], [-5, 5]);
  const contentY = useTransform(smoothY, [-1, 1], [-4, 4]);

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (reduceMotion || event.pointerType !== "mouse") {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const normalizedX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const normalizedY = ((event.clientY - rect.top) / rect.height) * 2 - 1;

    pointerX.set(normalizedX);
    pointerY.set(normalizedY);
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
      className="relative min-h-screen overflow-hidden bg-brand"
      style={{ perspective: "1200px" }}
    >
      <motion.div
        aria-hidden="true"
        className="absolute -inset-8"
        style={
          reduceMotion
            ? undefined
            : {
                x: backgroundX,
                y: backgroundY,
                scale: 1.06,
              }
        }
        initial={reduceMotion ? false : { scale: 1.14, opacity: 0 }}
        animate={{ scale: 1.06, opacity: 1 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={assets.backgrounds.primary}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-r from-brand via-brand/80 to-brand/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand via-transparent to-brand/45" />

      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 70% 42%, rgba(199,156,89,0.24), transparent 28%), radial-gradient(circle at 18% 80%, rgba(199,156,89,0.10), transparent 24%)",
        }}
      />

      <div aria-hidden="true" className="absolute inset-0">
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
                : {
                    opacity: [0.15, 0.8, 0.15],
                    y: [0, -14, 0],
                  }
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

      <motion.div
        className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-16 pt-28 sm:px-8 lg:px-12"
        style={
          reduceMotion
            ? undefined
            : {
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }
        }
      >
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            style={
              reduceMotion
                ? undefined
                : {
                    x: contentX,
                    y: contentY,
                    transform: "translateZ(60px)",
                  }
            }
            initial={reduceMotion ? false : { opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-gold" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.38em] text-gold sm:text-xs">
                {copy.eyebrow}
              </p>
            </div>

            <h1 className="max-w-4xl font-serif text-5xl font-light leading-[0.92] text-white sm:text-7xl lg:text-[92px]">
              {copy.headingLineOne}
              <span className="block italic text-gold">
                {copy.headingLineTwo}
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-7 text-light-gray sm:text-base sm:leading-8">
              {copy.description}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#destinations"
                className="inline-flex min-h-12 items-center justify-center border border-gold bg-gold px-7 text-xs font-semibold uppercase tracking-[0.22em] text-brand transition duration-300 hover:bg-transparent hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                {copy.destinationsButton}
              </Link>

              <Link
                href="#catalogue"
                className="inline-flex min-h-12 items-center justify-center border border-white/30 bg-white/5 px-7 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-md transition duration-300 hover:border-gold hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
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
            style={
              reduceMotion
                ? undefined
                : {
                    x: logoX,
                    y: logoY,
                    transformStyle: "preserve-3d",
                    transform: "translateZ(100px)",
                  }
            }
            initial={reduceMotion ? false : { opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.5,
              delay: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.div
              aria-hidden="true"
              className="absolute inset-[5%] rounded-full border border-gold/25"
              animate={reduceMotion ? undefined : { rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />

            <motion.div
              aria-hidden="true"
              className="absolute inset-[14%] rounded-full border border-dashed border-gold/35"
              animate={reduceMotion ? undefined : { rotate: -360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            />

            <div
              aria-hidden="true"
              className="absolute inset-[20%] rounded-full bg-gold/15 blur-3xl"
            />

            <motion.div
              className="relative h-60 w-60 overflow-hidden rounded-full border border-gold/70 bg-brand/70 p-2 shadow-[0_0_80px_rgba(199,156,89,0.28)] backdrop-blur-xl"
              animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative h-full w-full overflow-hidden rounded-full">
                <Image
                  src={assets.favicon}
                  alt="MEDYA TRAVEL"
                  fill
                  sizes="240px"
                  className="object-cover"
                />
              </div>
            </motion.div>

            <div className="absolute bottom-[3%] left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-brand/55 px-5 py-2 text-[9px] uppercase tracking-[0.32em] text-white/70 backdrop-blur-xl">
              {copy.floatingLabel}
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/45 to-transparent" />
    </section>
  );
}
