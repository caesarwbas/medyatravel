import { trustCopy, trustPoints } from "@/data/new-copy";
import type { Locale } from "@/types";

interface TrustSectionProps {
  locale: Locale;
}

export default function TrustSection({ locale }: TrustSectionProps) {
  const copy = trustCopy[locale];

  return (
    <section className="border-y border-white/10 bg-charcoal py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">{copy.eyebrow}</p>
          <h2 className="mt-3 font-serif text-3xl text-white sm:text-4xl">{copy.title}</h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point, index) => (
            <article key={point.id} className="relative min-h-44 bg-brand p-7 sm:p-8">
              <span className="text-xs font-semibold tracking-[0.24em] text-gold">0{index + 1}</span>
              <h3 className="mt-8 text-lg font-semibold leading-7 text-white">{point.title[locale]}</h3>
              <div className="absolute bottom-0 start-0 h-px w-16 bg-gold" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
