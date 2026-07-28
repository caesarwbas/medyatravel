import Image from "next/image";
import Link from "next/link";
import DocumentLocale from "@/components/DocumentLocale";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import RequestForm from "@/components/RequestForm";
import SocialDock from "@/components/SocialDock";
import TrustSection from "@/components/TrustSection";
import { assets } from "@/data/assets";
import { spainIncludedServices, spainJourneyDays, spainJourneyGallery, spainJourneyMapUrl, spainJourneySummary } from "@/data/spain-journey";
import { spainJourneyPaths } from "@/data/routes";
import type { Locale } from "@/types";

interface Props { locale: Locale; }

const copy = {
  en: { eyebrow: "Current journey", overview: "Journey overview", itinerary: "Day-by-day itinerary", included: "Package includes", request: "Request this journey", map: "View route map", gallery: "Journey gallery" },
  de: { eyebrow: "Aktuelle Reise", overview: "Reiseübersicht", itinerary: "Reiseverlauf Tag für Tag", included: "Im Paket enthalten", request: "Diese Reise anfragen", map: "Reiseroute ansehen", gallery: "Reisegalerie" },
  ar: { eyebrow: "الرحلات الحالية", overview: "نظرة عامة على الرحلة", itinerary: "البرنامج يومًا بيوم", included: "تشمل الباقة", request: "اطلب هذه الرحلة", map: "عرض خريطة مسار الرحلة", gallery: "ألبوم الرحلة" },
} as const;

function BrandedImage({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  return (
    <>
      <Image src={src} alt={alt} fill priority={priority} unoptimized sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
      <div className="pointer-events-none absolute right-4 top-4 h-16 w-32 sm:right-6 sm:top-6 sm:h-20 sm:w-40">
        <Image src={assets.logoSlogan} alt="MEDYA TRAVEL" fill unoptimized sizes="160px" className="object-contain drop-shadow-[0_3px_8px_rgba(0,0,0,0.7)]" />
      </div>
    </>
  );
}

export default function SpainJourneyPage({ locale }: Props) {
  const text = copy[locale];
  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <div lang={locale} dir={direction} className={`site-${locale}`}>
      <DocumentLocale locale={locale} />
      <Navbar locale={locale} languagePaths={spainJourneyPaths} />
      <main>
        <header className="relative flex min-h-screen items-end overflow-hidden bg-brand pb-16 pt-32 sm:pb-20">
          <BrandedImage src={spainJourneyDays[4].image} alt={spainJourneySummary.title[locale]} priority />
          <div className="absolute inset-0 bg-gradient-to-r from-brand via-brand/75 to-brand/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand via-transparent to-brand/55" />
          <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">{text.eyebrow}</p>
            <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-tight text-white sm:text-6xl lg:text-8xl">{spainJourneySummary.title[locale]}</h1>
            <p className="mt-6 max-w-2xl text-sm leading-8 text-white/75 sm:text-lg">{spainJourneySummary.subtitle[locale]}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <span className="border border-white/20 bg-brand/55 px-5 py-3 text-xs font-semibold text-white backdrop-blur-md">{spainJourneySummary.duration[locale]}</span>
              <span className="border border-gold/60 bg-brand/55 px-5 py-3 text-xs font-semibold text-gold backdrop-blur-md">{spainJourneySummary.departure[locale]}</span>
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="#request" className="inline-flex min-h-13 items-center justify-center bg-gold px-7 text-xs font-semibold uppercase tracking-[0.18em] text-brand transition hover:bg-bronze">{text.request}</Link>
              <a href={spainJourneyMapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-13 items-center justify-center border border-gold/70 bg-brand/55 px-7 text-xs font-semibold uppercase tracking-[0.18em] text-gold backdrop-blur-md transition hover:bg-gold hover:text-brand">{text.map}</a>
            </div>
          </div>
        </header>

        <TrustSection locale={locale} />

        <section className="border-b border-white/10 bg-charcoal py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">{text.overview}</p>
            <p className="mt-6 font-serif text-2xl leading-relaxed text-white sm:text-3xl">{spainJourneySummary.overview[locale]}</p>
          </div>
        </section>

        <section className="border-b border-white/10 bg-brand py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="flex flex-wrap items-end justify-between gap-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">{text.gallery}</p>
                <h2 className="mt-4 font-serif text-4xl text-white sm:text-5xl">{spainJourneySummary.title[locale]}</h2>
              </div>
              <a href={spainJourneyMapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center border border-gold/60 px-6 text-xs font-semibold uppercase tracking-[0.16em] text-gold transition hover:bg-gold hover:text-brand">{text.map}</a>
            </div>

            <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
              {spainJourneyGallery.map((src, index) => (
                <figure key={src} className="group relative mb-5 break-inside-avoid overflow-hidden border border-white/10 bg-charcoal">
                  <div className="relative min-h-[260px] sm:min-h-[320px]">
                    <BrandedImage src={src} alt={`${spainJourneySummary.title[locale]} ${index + 1}`} />
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/5" />
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand py-20 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">{text.itinerary}</p>
            <div className="mt-10 space-y-6">
              {spainJourneyDays.map((day, index) => (
                <article key={day.day} className="grid overflow-hidden border border-white/10 bg-charcoal lg:grid-cols-[0.8fr_1.2fr]">
                  <div className={`relative min-h-72 lg:min-h-[420px] ${index % 2 ? "lg:order-2" : ""}`}>
                    <BrandedImage src={day.image} alt={day.title[locale]} />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand/45 via-transparent to-transparent" />
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
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-10">
            <article className="border border-white/10 bg-brand p-7 sm:p-10">
              <h2 className="font-serif text-3xl text-white">{text.included}</h2>
              <ul className="mt-7 grid gap-4 sm:grid-cols-2">
                {spainIncludedServices.map((item) => (
                  <li key={item.en} className="flex gap-3 text-sm leading-6 text-white/75"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />{item[locale]}</li>
                ))}
              </ul>
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