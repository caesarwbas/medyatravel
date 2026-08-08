import Image from "next/image";
import Link from "next/link";
import { assets } from "@/data/assets";
import { brochurePaths, journeyPaths, spainJourneyPaths } from "@/data/routes";
import { siteTranslations } from "@/data/translations";
import type { Locale } from "@/types";

interface CatalogueSectionProps {
  locale: Locale;
}

interface SpainBrochure {
  code: string;
  title: Record<Locale, string>;
  href: Record<Locale, string>;
  cover: Record<Locale, string>;
}

const spainBrochureCopy: Record<Locale, { title: string; action: string }> = {
  en: { title: "Spain Brochures", action: "Open brochure" },
  de: { title: "Spanien-Broschüren", action: "Broschüre öffnen" },
  ar: { title: "بروشورات إسبانيا", action: "فتح البروشور" },
};

const spainBrochures: SpainBrochure[] = [
  {
    code: "M-101",
    title: { en: "Essential Spain", de: "Spanien kompakt", ar: "إسبانيا الأساسية" },
    href: {
      en: "/brochures/medya-travel-essential-spain-en.pdf",
      de: "/brochures/medya-travel-essential-spain-de.pdf",
      ar: "/brochures/medya-travel-essential-spain-ar.pdf",
    },
    cover: {
      en: "/brochures/covers/m101-en.webp",
      de: "/brochures/covers/m101-de.webp",
      ar: "/brochures/covers/m101-ar.webp",
    },
  },
  {
    code: "M-102",
    title: { en: "Andalusian Highlights", de: "Höhepunkte Andalusiens", ar: "أبرز معالم الأندلس" },
    href: {
      en: "/brochures/medya-travel-andalusian-highlights-en.pdf",
      de: "/brochures/medya-travel-andalusian-highlights-de.pdf",
      ar: "/brochures/medya-travel-andalusian-highlights-ar.pdf",
    },
    cover: {
      en: "/brochures/covers/m102-en.webp",
      de: "/brochures/covers/m102-de.webp",
      ar: "/brochures/covers/m102-ar.webp",
    },
  },
  {
    code: "M-103",
    title: { en: "Southern Spain & Coast", de: "Südspanien und Küste", ar: "جنوب إسبانيا والساحل" },
    href: {
      en: "/brochures/medya-travel-southern-spain-coast-en.pdf",
      de: "/brochures/medya-travel-southern-spain-coast-de.pdf",
      ar: "/brochures/medya-travel-southern-spain-coast-ar.pdf",
    },
    cover: {
      en: "/brochures/covers/m103-en.webp",
      de: "/brochures/covers/m103-de.webp",
      ar: "/brochures/covers/m103-ar.webp",
    },
  },
];

export default function CatalogueSection({ locale }: CatalogueSectionProps) {
  const copy = siteTranslations[locale].catalogue;
  const brochureCopy = spainBrochureCopy[locale];

  return (
    <section id="catalogue" className="relative overflow-hidden bg-brand py-20 sm:py-24 lg:py-32">
      <div aria-hidden="true" className="absolute -left-48 top-10 h-96 w-96 rounded-full bg-gold/10 blur-[130px]" />
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-wide text-gold sm:mb-4">{copy.eyebrow}</p>
          <h2 className="font-serif text-3xl text-white sm:text-4xl md:text-5xl">{copy.title}</h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-light-gray sm:mt-6 sm:text-base">{copy.description}</p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <a href={brochurePaths[locale]} target="_blank" rel="noopener noreferrer" className="w-full bg-gold px-8 py-3.5 text-center text-xs font-medium uppercase tracking-luxury text-brand transition-all duration-300 hover:bg-bronze sm:w-auto sm:px-10 sm:py-4">
              {copy.downloadButton}
            </a>
            <Link href={journeyPaths[locale]} className="w-full border border-white/20 px-8 py-3.5 text-center text-xs font-medium uppercase tracking-luxury text-white transition-all duration-300 hover:border-gold hover:text-gold sm:w-auto sm:px-10 sm:py-4">
              {copy.itinerariesButton}
            </Link>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Link href={journeyPaths[locale]} className="group overflow-hidden border border-white/10 bg-charcoal">
            <div className="relative min-h-72 overflow-hidden">
              <Image src="/syria/palmyra-columns.webp" alt={locale === "ar" ? "الرحلة الأولى إلى سوريا" : locale === "de" ? "Erste Syrienreise" : "First Journey to Syria"} fill quality={92} sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition duration-700 group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand via-brand/15 to-transparent" />
              <div className="absolute right-5 top-5 h-16 w-32">
                <Image src={assets.logoSlogan} alt="MEDYA TRAVEL" fill sizes="128px" className="object-contain drop-shadow-[0_3px_8px_rgba(0,0,0,0.75)]" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">{locale === "ar" ? "الرحلات الحالية" : locale === "de" ? "Aktuelle Reise" : "Current journey"}</p>
                <h3 className="mt-3 font-serif text-3xl text-white">{locale === "ar" ? "الرحلة الأولى إلى سوريا" : locale === "de" ? "Erste Syrienreise" : "First Journey to Syria"}</h3>
                <p className="mt-3 text-sm text-white/70">{locale === "ar" ? "7 أيام / 6 ليالٍ" : locale === "de" ? "7 Tage / 6 Nächte" : "7 Days / 6 Nights"}</p>
              </div>
            </div>
          </Link>

          <Link href={spainJourneyPaths[locale]} className="group overflow-hidden border border-white/10 bg-charcoal">
            <div className="relative min-h-72 overflow-hidden">
              <Image src="https://iberica-travel.com/files/travel%20packages%202018/3.%20Andalusia%20and%20Levante/CityofArtsandSciencesValenciaTitle.jpg" alt={locale === "ar" ? "إسبانيا الأساسية" : locale === "de" ? "Essentielles Spanien" : "Essential Spain"} fill quality={92} sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition duration-700 group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand via-brand/15 to-transparent" />
              <div className="absolute right-5 top-5 h-16 w-32">
                <Image src={assets.logoSlogan} alt="MEDYA TRAVEL" fill sizes="128px" className="object-contain drop-shadow-[0_3px_8px_rgba(0,0,0,0.75)]" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">{locale === "ar" ? "الرحلات الحالية" : locale === "de" ? "Aktuelle Reise" : "Current journey"}</p>
                <h3 className="mt-3 font-serif text-3xl text-white">{locale === "ar" ? "إسبانيا الأساسية" : locale === "de" ? "Essentielles Spanien" : "Essential Spain"}</h3>
                <p className="mt-3 text-sm text-white/70">{locale === "ar" ? "6 أيام / 5 ليالٍ" : locale === "de" ? "6 Tage / 5 Nächte" : "6 Days / 5 Nights"}</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="mt-12 border-t border-white/10 pt-10 sm:mt-16 sm:pt-12">
          <h3 className="text-center font-serif text-3xl text-white sm:text-4xl">{brochureCopy.title}</h3>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {spainBrochures.map((brochure) => (
              <a
                key={brochure.code}
                href={brochure.href[locale]}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden border border-white/10 bg-charcoal/80 transition duration-300 hover:-translate-y-1 hover:border-gold/60"
              >
                <div className="relative aspect-square overflow-hidden bg-black/30">
                  <Image
                    src={brochure.cover[locale]}
                    alt={`${brochure.title[locale]} — ${brochure.code}`}
                    fill
                    sizes="(max-width: 767px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.035]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand/55 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">{brochure.code}</p>
                  <h4 className="mt-3 font-serif text-2xl text-white">{brochure.title[locale]}</h4>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-white/60 transition group-hover:text-gold">{brochureCopy.action}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-12 flex max-w-lg flex-col items-center gap-6 rounded-sm border border-white/10 bg-charcoal/70 p-6 backdrop-blur-sm sm:mt-16 sm:flex-row sm:gap-8 sm:p-8">
          <div className="relative h-16 w-40 shrink-0 sm:h-20 sm:w-48">
            <Image src={assets.partnerLogo} alt={copy.partnerAlt} fill sizes="192px" className="object-contain" />
          </div>
          <p className="text-center text-sm leading-relaxed text-light-gray sm:text-start">{copy.partnerDescription}</p>
        </div>
      </div>
    </section>
  );
}
