import Image from "next/image";
import Link from "next/link";
import { assets } from "@/data/assets";
import { brochurePaths, journeyPaths } from "@/data/routes";
import { siteTranslations } from "@/data/translations";
import type { Locale } from "@/types";

interface CatalogueSectionProps {
  locale: Locale;
}

export default function CatalogueSection({ locale }: CatalogueSectionProps) {
  const copy = siteTranslations[locale].catalogue;

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
