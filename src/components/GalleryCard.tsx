import Image from "next/image";
import type { GalleryImage } from "@/types";

interface GalleryCardProps {
  image: GalleryImage;
}

export default function GalleryCard({ image }: GalleryCardProps) {
  return (
    <article className="group relative aspect-[4/5] overflow-hidden bg-charcoal sm:aspect-[3/4]">
      <Image
        src={image.image}
        alt={image.imageAlt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand via-transparent to-transparent opacity-90" />
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <p className="text-[10px] font-medium uppercase tracking-wide text-gold">
          {image.location}
        </p>
        <h3 className="mt-1 font-serif text-lg text-white sm:text-xl">
          {image.title}
        </h3>
      </div>
    </article>
  );
}
