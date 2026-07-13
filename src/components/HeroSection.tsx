"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { assets } from "@/data/assets";

const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.4,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-brand">
      <Image
        src={assets.backgrounds.primary}
        alt="MEDYA TRAVEL luxury travel background"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand/70 via-brand/50 to-brand" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0D0D0D_80%)]" />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 pt-20 text-center sm:px-6 sm:pt-24">
        <motion.h1
          custom={0.2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-serif text-3xl leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Reisen wie es{" "}
          <span className="text-gold italic">sein sollte</span>
        </motion.h1>

        <motion.p
          custom={0.45}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-light-gray sm:mt-8 sm:text-base md:text-lg"
        >
          Bespoke itineraries crafted for discerning travelers who seek
          authenticity, elegance, and the extraordinary across Syria.
        </motion.p>

        <motion.div
          custom={0.7}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-12 sm:flex-row sm:items-center sm:gap-4"
        >
          <Link
            href="#destinations"
            className="bg-gold px-8 py-3.5 text-center text-xs font-medium uppercase tracking-luxury text-brand transition-all duration-300 hover:bg-bronze sm:px-10 sm:py-4"
          >
            Explore Destinations
          </Link>
          <Link
            href="#catalogue"
            className="border border-white/20 px-8 py-3.5 text-center text-xs font-medium uppercase tracking-luxury text-white transition-all duration-300 hover:border-gold hover:text-gold sm:px-10 sm:py-4"
          >
            View Catalogue
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1.2 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:bottom-10 sm:block"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-2 w-0.5 rounded-full bg-gold"
          />
        </div>
      </motion.div>
    </section>
  );
}
