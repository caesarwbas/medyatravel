"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HeroMouseReveal from "@/components/HeroMouseReveal";
import { assets } from "@/data/assets";

type Language = "en" | "de" | "ar";

interface HeroContent {
  eyebrow: string;
  titleFirst: string;
  titleSecond: string;
  description: string;
  destinationsButton: string;
  catalogueButton: string;
  location: string;
  badge: string;
  destinationsHref: string;
  catalogueHref: string;
}

const heroContent: Record<
  Language,
  HeroContent
> = {
  en: {
    eyebrow: "CURATED JOURNEYS TO SYRIA",
    titleFirst: "Travel as it",
    titleSecond: "should be",
    description:
      "Bespoke journeys through Syria, created for travelers who value authenticity, culture, comfort, and unforgettable human encounters.",
    destinationsButton:
      "Explore Destinations",
    catalogueButton: "View Itinerary",
    location: "GERMANY · SYRIA",
    badge: "PRIVATE CULTURAL JOURNEYS",
    destinationsHref: "/en/destinations",
    catalogueHref:
      "/en/journeys/first-journey-to-syria",
  },

  de: {
    eyebrow:
      "KURATIERTE REISEN NACH SYRIEN",
    titleFirst: "Reisen wie es",
    titleSecond: "sein sollte",
    description:
      "Maßgeschneiderte Reisen durch Syrien für Gäste, die Authentizität, Kultur, Komfort und unvergessliche Begegnungen schätzen.",
    destinationsButton:
      "Reiseziele entdecken",
    catalogueButton:
      "Reiseprogramm ansehen",
    location: "DEUTSCHLAND · SYRIEN",
    badge: "PRIVATE KULTURREISEN",
    destinationsHref: "/de/reiseziele",
    catalogueHref:
      "/de/reisen/erste-syrienreise",
  },

  ar: {
    eyebrow:
      "رحلات مختارة بعناية إلى سوريا",
    titleFirst: "سافر كما",
    titleSecond: "يليق بك",
    description:
      "رحلات مصممة بعناية في سوريا للمسافرين الباحثين عن الأصالة والثقافة والراحة واللقاءات الإنسانية التي لا تُنسى.",
    destinationsButton:
      "اطّلع على الوجهات",
    catalogueButton:
      "عرض برنامج الرحلة",
    location: "ألمانيا · سوريا",
    badge: "رحلات ثقافية خاصة",
    destinationsHref: "/ar/destinations",
    catalogueHref:
      "/ar/journeys/first-journey-to-syria",
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: (delay: number) => ({
    opacity: 1,
    y: 0,

    transition: {
      duration: 1.15,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

function getLanguage(
  pathname: string,
): Language {
  if (
    pathname === "/ar" ||
    pathname.startsWith("/ar/")
  ) {
    return "ar";
  }

  if (
    pathname === "/de" ||
    pathname.startsWith("/de/")
  ) {
    return "de";
  }

  return "en";
}

export default function HeroSection() {
  const pathname = usePathname();
  const language = getLanguage(pathname);
  const content = heroContent[language];
  const isArabic = language === "ar";

  return (
    <section
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-brand"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <HeroMouseReveal />

      <div className="relative z-10 mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-10 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[minmax(0,1fr)_480px] lg:gap-16 lg:px-14 lg:pb-20 lg:pt-32 xl:px-20">
        <div
          className={
            isArabic
              ? "max-w-4xl text-right"
              : "max-w-4xl text-left"
          }
        >
          <motion.div
            custom={0.1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className={`mb-7 flex items-center gap-5 ${
              isArabic
                ? "justify-start"
                : "justify-start"
            }`}
          >
            <span className="h-px w-12 bg-gold sm:w-16" />

            <span
              className={`text-[10px] font-semibold uppercase tracking-[0.35em] text-gold sm:text-xs ${
                isArabic
                  ? "font-arabic normal-case tracking-normal sm:text-sm"
                  : ""
              }`}
            >
              {content.eyebrow}
            </span>
          </motion.div>

          <motion.h1
            custom={0.2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className={`max-w-4xl text-white ${
              isArabic
                ? "font-arabic text-5xl font-bold leading-[1.35] sm:text-6xl md:text-7xl lg:text-8xl"
                : "font-serif text-5xl leading-[0.98] sm:text-6xl md:text-7xl lg:text-[5.8rem] xl:text-[6.6rem]"
            }`}
          >
            <span className="block drop-shadow-[0_4px_15px_rgba(0,0,0,0.9)]">
              {content.titleFirst}
            </span>

            <span
              className={`mt-2 block text-gold drop-shadow-[0_4px_15px_rgba(0,0,0,0.9)] ${
                isArabic
                  ? "font-arabic not-italic"
                  : "italic"
              }`}
            >
              {content.titleSecond}
            </span>
          </motion.h1>

          <motion.p
            custom={0.4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className={`mt-8 max-w-3xl text-white drop-shadow-[0_3px_12px_rgba(0,0,0,1)] ${
              isArabic
                ? "font-arabic text-lg font-medium leading-9 sm:text-xl sm:leading-10"
                : "text-base leading-8 sm:text-lg sm:leading-9"
            }`}
          >
            {content.description}
          </motion.p>

          <motion.div
            custom={0.6}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Link
              href={content.destinationsHref}
              className={`inline-flex min-h-14 items-center justify-center bg-gold px-8 text-center text-brand transition duration-300 hover:bg-bronze focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold ${
                isArabic
                  ? "font-arabic text-base font-bold"
                  : "text-xs font-semibold uppercase tracking-[0.25em]"
              }`}
            >
              {content.destinationsButton}
            </Link>

            <Link
              href={content.catalogueHref}
              className={`inline-flex min-h-14 items-center justify-center border border-white/50 bg-black/20 px-8 text-center text-white backdrop-blur-[2px] transition duration-300 hover:border-gold hover:bg-black/40 hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold ${
                isArabic
                  ? "font-arabic text-base font-bold"
                  : "text-xs font-semibold uppercase tracking-[0.25em]"
              }`}
            >
              {content.catalogueButton}
            </Link>
          </motion.div>

          <motion.div
            custom={0.8}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className={`mt-12 flex items-center gap-4 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,1)] ${
              isArabic
                ? "font-arabic text-sm font-semibold"
                : "text-[10px] font-semibold uppercase tracking-[0.3em]"
            }`}
          >
            <span className="h-2 w-2 rounded-full bg-gold shadow-[0_0_15px_rgba(207,169,88,0.9)]" />

            <span>{content.location}</span>
          </motion.div>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.88,
            y: 25,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 1.3,
            delay: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="hidden items-center justify-center lg:flex"
        >
          <div className="relative flex h-[430px] w-[430px] items-center justify-center xl:h-[470px] xl:w-[470px]">
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 38,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-full border border-gold/30"
            />

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 52,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[48px] rounded-full border border-dashed border-gold/25"
            />

            <div className="absolute inset-[86px] rounded-full border border-gold/35 shadow-[0_0_80px_rgba(198,151,55,0.18)]" />

            <div className="relative h-[270px] w-[270px] overflow-hidden rounded-full border border-gold bg-black shadow-[0_25px_70px_rgba(0,0,0,0.75)] xl:h-[300px] xl:w-[300px]">
              <Image
                src={assets.favicon}
                alt="MEDYA TRAVEL"
                fill
                priority
                sizes="300px"
                className="object-cover"
              />
            </div>

            <div
              className={`absolute -bottom-4 rounded-full border border-white/20 bg-black/75 px-8 py-3 text-white backdrop-blur-md ${
                isArabic
                  ? "font-arabic text-sm font-semibold"
                  : "text-[10px] font-semibold uppercase tracking-[0.3em]"
              }`}
            >
              {content.badge}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
          delay: 1.2,
        }}
        className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 sm:block"
      >
        <div className="flex h-11 w-7 items-start justify-center rounded-full border border-white/40 bg-black/20 p-2 shadow-[0_3px_12px_rgba(0,0,0,0.8)] backdrop-blur-sm">
          <motion.div
            animate={{
              y: [0, 9, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-2 w-0.5 rounded-full bg-gold"
          />
        </div>
      </motion.div>
    </section>
  );
}