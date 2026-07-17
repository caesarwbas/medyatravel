import Image from "next/image";
import Link from "next/link";
import { destinationFeatureImages } from "@/data/syria-gallery";
import { destinationPortalCopy } from "@/data/new-copy";
import { destinationsPaths } from "@/data/routes";
import type { Locale } from "@/types";

interface DestinationsPortalProps {
  locale: Locale;
}

export default function DestinationsPortal({ locale }: DestinationsPortalProps) {
  const copy = destinationPortalCopy[locale];

  return (
    <section id="destinations" className="relative overflow-hidden bg-brand py-20 sm:py-24 lg:py-32">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">{copy.eyebrow}</p>
          <h2 className="mt-4 font-serif text-4xl font-medium text-white sm:text-5xl lg:text-6xl">{copy.title}</h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-light-gray sm:text-base">{copy.description}</p>
        </div>

        <div dir="ltr" className="relative mx-auto mt-12 grid max-w-6xl grid-cols-[0.82fr_1.28fr_0.82fr] items-center gap-2 sm:mt-16 sm:gap-4 lg:gap-6">
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-white/10 bg-charcoal shadow-2xl">
            <Image
              src={destinationFeatureImages.currency.src}
              alt={copy.currencyAlt}
              fill
              sizes="(max-width: 640px) 25vw, 28vw"
              quality={92}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand/40 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 aspect-[3/4] -translate-y-2 overflow-hidden rounded-sm border border-gold/45 bg-charcoal shadow-[0_24px_70px_rgba(0,0,0,0.55)] sm:-translate-y-4">
            <Image
              src={destinationFeatureImages.love.src}
              alt={copy.loveAlt}
              fill
              sizes="(max-width: 640px) 48vw, 42vw"
              quality={94}
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
          </div>

          <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-white/10 bg-charcoal shadow-2xl">
            <Image
              src={destinationFeatureImages.flag.src}
              alt={copy.flagAlt}
              fill
              sizes="(max-width: 640px) 25vw, 28vw"
              quality={92}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand/35 via-transparent to-transparent" />
          </div>
        </div>

        <div className="mt-10 flex justify-center sm:mt-12">
          <Link
            href={destinationsPaths[locale]}
            className="inline-flex min-h-13 items-center justify-center border border-gold bg-gold px-8 text-xs font-semibold uppercase tracking-[0.2em] text-brand transition duration-300 hover:bg-transparent hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            {copy.button}
          </Link>
        </div>
      </div>
    </section>
  );
}
