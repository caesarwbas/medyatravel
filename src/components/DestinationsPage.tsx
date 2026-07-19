import Image from "next/image";
import Link from "next/link";
import DocumentLocale from "@/components/DocumentLocale";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SocialDock from "@/components/SocialDock";
import { destinationsPageCopy } from "@/data/new-copy";
import { destinationsPaths, homePaths } from "@/data/routes";
import {
  destinationFeatureImages,
  syriaPhotoCategories,
} from "@/data/syria-gallery";
import type { Locale } from "@/types/index";

interface DestinationsPageProps {
  locale: Locale;
}

export default function DestinationsPage({ locale }: DestinationsPageProps) {
  const copy = destinationsPageCopy[locale];
  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <div lang={locale} dir={direction} className={`site-${locale}`}>
      <DocumentLocale locale={locale} />
      <Navbar locale={locale} languagePaths={destinationsPaths} />

      <main>
        <header className="relative flex min-h-[72vh] items-end overflow-hidden bg-brand pb-16 pt-32 sm:pb-20">
          <Image
            src={destinationFeatureImages.pageHero.src}
            alt={locale === "ar" ? "العلم السوري الجديد" : locale === "de" ? "Die neue syrische Flagge" : "The new Syrian flag"}
            fill
            priority
            quality={92}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand via-brand/80 to-brand/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand via-transparent to-brand/65" />

          <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">{copy.eyebrow}</p>
            <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-tight text-white sm:text-6xl lg:text-7xl">{copy.title}</h1>
            <p className="mt-6 max-w-2xl text-sm leading-8 text-white/70 sm:text-base">{copy.description}</p>
            <Link href={homePaths[locale]} className="mt-8 inline-flex border-b border-gold pb-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold transition hover:text-white">
              {copy.backHome}
            </Link>
          </div>
        </header>

        <section className="sticky top-20 z-30 border-y border-white/10 bg-brand/95 py-4 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">{copy.sectionLabel}</p>
            <nav className="flex gap-2 overflow-x-auto pb-1" aria-label={copy.sectionLabel}>
              {syriaPhotoCategories.map((category) => (
                <a key={category.id} href={`#${category.id}`} className="shrink-0 rounded-full border border-white/15 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/65 transition hover:border-gold hover:text-gold">
                  {category.name[locale]}
                </a>
              ))}
            </nav>
          </div>
        </section>

        <div className="bg-brand">
          {syriaPhotoCategories.map((category, categoryIndex) => (
            <section key={category.id} id={category.id} className={`scroll-mt-40 py-20 sm:py-24 ${categoryIndex % 2 ? "bg-charcoal" : "bg-brand"}`}>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
                <div className="mb-10 max-w-3xl sm:mb-14">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-semibold tracking-[0.22em] text-gold">{String(categoryIndex + 1).padStart(2, "0")}</span>
                    <span className="h-px flex-1 bg-white/10" />
                  </div>
                  <h2 className="mt-5 font-serif text-4xl text-white sm:text-5xl">{category.name[locale]}</h2>
                  <p className="mt-4 max-w-2xl text-sm leading-8 text-light-gray sm:text-base">{category.description[locale]}</p>
                </div>

                <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
                  {category.photos.map((photo) => (
                    <figure key={photo.id} className="group mb-5 break-inside-avoid overflow-hidden border border-white/10 bg-charcoal shadow-xl">
                      <div className="relative overflow-hidden bg-black">
                        <Image
                          src={photo.src}
                          alt={photo.title[locale]}
                          width={photo.width}
                          height={photo.height}
                          quality={90}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="h-auto w-full transition duration-700 ease-out group-hover:scale-[1.025]"
                        />
                        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" />
                      </div>
                      <figcaption className="border-t border-white/10 px-5 py-4 text-sm font-medium text-white/80">{photo.title[locale]}</figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>

      <Footer locale={locale} />
      <SocialDock locale={locale} />
    </div>
  );
}
