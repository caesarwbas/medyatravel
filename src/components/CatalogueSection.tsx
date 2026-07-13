import Image from "next/image";
import Link from "next/link";

export default function CatalogueSection() {
  return (
    <section id="catalogue" className="relative overflow-hidden py-20 sm:py-24 lg:py-32">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/catalogue-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-brand/85" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-wide text-gold sm:mb-4">
            Catalogue
          </p>
          <h2 className="font-serif text-3xl text-white sm:text-4xl md:text-5xl">
            MEDYA TRAVEL Catalogue
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-light-gray sm:mt-6 sm:text-base">
            Explore our luxury journeys
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <a
              href="/catalogue.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gold px-8 py-3.5 text-center text-xs font-medium uppercase tracking-luxury text-brand transition-all duration-300 hover:bg-bronze sm:w-auto sm:px-10 sm:py-4"
            >
              Download Brochure
            </a>
            <Link
              href="#destinations"
              className="w-full border border-white/20 px-8 py-3.5 text-center text-xs font-medium uppercase tracking-luxury text-white transition-all duration-300 hover:border-gold hover:text-gold sm:w-auto sm:px-10 sm:py-4"
            >
              Explore Itineraries
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-12 flex max-w-lg flex-col items-center gap-6 rounded-sm border border-white/10 bg-charcoal/60 p-6 backdrop-blur-sm sm:mt-16 sm:flex-row sm:gap-8 sm:p-8">
          <div className="relative h-16 w-40 shrink-0 sm:h-20 sm:w-48">
            <Image
              src="/images/partner-logo.png"
              alt="Syrian travel partner logo"
              fill
              sizes="192px"
              className="object-contain"
            />
          </div>
          <p className="text-center text-sm leading-relaxed text-light-gray sm:text-left">
            Crafted in partnership with trusted local experts to ensure every
            detail of your Syrian journey meets the highest standards of luxury
            and authenticity.
          </p>
        </div>
      </div>
    </section>
  );
}