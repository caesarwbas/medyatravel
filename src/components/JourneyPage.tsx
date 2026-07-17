import Image from "next/image";
import Link from "next/link";
import DocumentLocale from "@/components/DocumentLocale";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import RequestForm from "@/components/RequestForm";
import SocialDock from "@/components/SocialDock";
import TrustSection from "@/components/TrustSection";
import {
  excludedServices,
  includedServices,
  journeyDays,
  journeySummary,
} from "@/data/journey";
import { brochurePaths, journeyPaths } from "@/data/routes";
import type { Locale } from "@/types";

interface JourneyPageProps {
  locale: Locale;
}

const copy = {
  en: {
    eyebrow: "Signature itinerary",
    itinerary: "Day-by-day itinerary",
    included: "Package includes",
    excluded: "Not included",
    download: "Download English brochure",
    request: "Request this journey",
  },
  de: {
    eyebrow: "Ausgewählte Reiseroute",
    itinerary: "Reiseverlauf Tag für Tag",
    included: "Im Reisepreis enthalten",
    excluded: "Nicht im Reisepreis enthalten",
    download: "Deutsche Broschüre herunterladen",
    request: "Diese Reise anfragen",
  },
  ar: {
    eyebrow: "برنامج مختار بعناية",
    itinerary: "البرنامج يومًا بيوم",
    included: "تشمل الباقة",
    excluded: "لا يشمل السعر",
    download: "تحميل البروشور العربي",
    request: "اطلب هذه الرحلة",
  },
} as const;

export default function JourneyPage({ locale }: JourneyPageProps) {
  const text = copy[locale];
  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <div lang={locale} dir={direction} className={`site-${locale}`}>
      <DocumentLocale locale={locale} />
      <Navbar locale={locale} languagePaths={journeyPaths} />

      <main>
        <header className="relative flex min-h-screen items-end overflow-hidden bg-brand pb-16 pt-32 sm:pb-20">
          <Image
            src="/syria/palmyra-columns.webp"
            alt={journeySummary.title[locale]}
            fill
            priority
            quality={94}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand via-brand/75 to-brand/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand via-transparent to-brand/55" />

          <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">{text.eyebrow}</p>
            <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-tight text-white sm:text-6xl lg:text-8xl">{journeySummary.title[locale]}</h1>
            <p className="mt-6 max-w-2xl text-sm leading-8 text-white/75 sm:text-lg">{journeySummary.subtitle[locale]}</p>

            <div className="mt-9 flex flex-wrap gap-3">
              <span className="border border-white/20 bg-brand/55 px-5 py-3 text-xs font-semibold text-white backdrop-blur-md">{journeySummary.duration[locale]}</span>
              <span className="border border-gold bg-gold px-5 py-3 text-xs font-semibold text-brand">{journeySummary.price[locale]}</span>
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={brochurePaths[locale]} target="_blank" rel="noreferrer" className="inline-flex min-h-13 items-center justify-center bg-gold px-7 text-xs font-semibold uppercase tracking-[0.18em] text-brand transition hover:bg-bronze">
                {text.download}
              </a>
              <Link href="#request" className="inline-flex min-h-13 items-center justify-center border border-white/30 bg-white/5 px-7 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md transition hover:border-gold hover:text-gold">
                {text.request}
              </Link>
            </div>
          </div>
        </header>

        <TrustSection locale={locale} />

        <section className="bg-brand py-20 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">{text.itinerary}</p>
            <div className="mt-10 space-y-6">
              {journeyDays.map((day, index) => (
                <article key={day.day} className="grid overflow-hidden border border-white/10 bg-charcoal lg:grid-cols-[0.8fr_1.2fr]">
                  <div className={`relative min-h-72 lg:min-h-[420px] ${index % 2 ? "lg:order-2" : ""}`}>
                    <Image src={day.image} alt={day.title[locale]} fill quality={92} sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand/55 via-transparent to-transparent" />
                  </div>
                  <div className={`flex flex-col justify-center p-7 sm:p-10 lg:p-14 ${index % 2 ? "lg:order-1" : ""}`}>
                    <span className="text-xs font-semibold tracking-[0.24em] text-gold">{String(day.day).padStart(2, "0")}</span>
                    <h2 className="mt-4 font-serif text-3xl text-white sm:text-4xl">{day.title[locale]}</h2>
                    <p className="mt-5 text-sm leading-8 text-light-gray sm:text-base">{day.description[locale]}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-charcoal py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-10">
            <article className="border border-white/10 bg-brand p-7 sm:p-10">
              <h2 className="font-serif text-3xl text-white">{text.included}</h2>
              <p className="mt-3 text-sm leading-7 text-light-gray">{journeySummary.landPackage[locale]}</p>
              <ul className="mt-7 space-y-4">
                {includedServices.map((item) => (
                  <li key={item.en} className="flex gap-3 text-sm leading-6 text-white/75">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {item[locale]}
                  </li>
                ))}
              </ul>
            </article>

            <article className="border border-white/10 bg-brand p-7 sm:p-10">
              <h2 className="font-serif text-3xl text-white">{text.excluded}</h2>
              <ul className="mt-7 space-y-4">
                {excludedServices.map((item) => (
                  <li key={item.en} className="flex gap-3 text-sm leading-6 text-white/75">
                    <span className="mt-1 text-gold">×</span>
                    {item[locale]}
                  </li>
                ))}
              </ul>
              <div className="mt-10 border-t border-white/10 pt-8">
                <p className="text-4xl font-semibold text-gold">{journeySummary.price[locale]}</p>
                <p className="mt-3 text-sm leading-7 text-light-gray">{journeySummary.landPackage[locale]}</p>
              </div>
            </article>
          </div>
        </section>

        <RequestForm locale={locale} />
      </main>

      <Footer locale={locale} />
      <SocialDock locale={locale} />
    </div>
  );
}
