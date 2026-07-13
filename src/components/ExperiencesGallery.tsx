import Image from "next/image";
import { assets } from "@/data/assets";
import { galleryImages } from "@/data/gallery";
import GalleryCard from "@/components/GalleryCard";

export default function ExperiencesGallery() {
  return (
    <section id="experiences" className="relative overflow-hidden bg-brand py-20 sm:py-24 lg:py-32">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: `url('${assets.backgrounds.secondary}')` }}
      />
      <div className="absolute inset-0 bg-brand/90" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mb-12 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-wide text-gold sm:mb-4">
              Experiences
            </p>
            <h2 className="font-serif text-3xl text-white sm:text-4xl md:text-5xl">
              Syria, Unveiled
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-light-gray">
            From sacred heritage sites to refined coastal escapes — every
            journey is composed with the eye of a curator and the care of a
            private concierge.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {galleryImages.map((image) => (
            <GalleryCard key={image.id} image={image} />
          ))}
        </div>

        <div className="mt-12 flex justify-center sm:mt-16">
          <div className="relative aspect-[16/7] w-full max-w-3xl overflow-hidden rounded-sm border border-white/10">
            <Image
              src={assets.airplane}
              alt="Luxury business travel — airplane in flight at sunset"
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand/80 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10">
              <p className="text-[10px] font-medium uppercase tracking-wide text-gold">
                Seamless Arrival
              </p>
              <p className="mt-2 max-w-xs font-serif text-xl text-white sm:text-2xl">
                Private aviation &amp; white-glove transfers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
