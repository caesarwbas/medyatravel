import Image from "next/image";
import { assets } from "@/data/assets";
import { siteTranslations } from "@/data/translations";
import type { Locale } from "@/types";

interface AboutSectionProps {
  locale: Locale;
}

export default function AboutSection({ locale }: AboutSectionProps) {
  const copy = siteTranslations[locale].about;

  return (
    <section id="about" className="bg-charcoal py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-full border-2 border-gold/30 sm:max-w-md">
            <Image
              src={assets.profilePicture}
              alt={copy.founderAlt}
              fill
              sizes="(max-width: 1024px) 384px, 448px"
              className="object-cover"
              priority
            />
          </div>

          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-wide text-gold sm:mb-4">
              {copy.eyebrow}
            </p>
            <h2 className="font-serif text-3xl text-white sm:text-4xl md:text-5xl">
              {copy.title}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-light-gray sm:mt-6 sm:text-base">
              {copy.paragraphOne}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-light-gray sm:text-base">
              {copy.paragraphTwo}
            </p>

            <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:gap-8">
              <div className="relative flex h-16 w-16 shrink-0 overflow-hidden rounded-full border border-gold/30">
                <Image
                  src={assets.partnerLogo}
                  alt={copy.partnerAlt}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <p className="text-xs uppercase tracking-luxury text-light-gray">
                {copy.partnerLabel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
