import Image from "next/image";
import type { Destination } from "@/types";

interface DestinationCardProps {
  destination: Destination;
  index: number;
}

export default function DestinationCard({
  destination,
  index,
}: DestinationCardProps) {
  return (
    <article className="group relative aspect-[3/4] overflow-hidden bg-charcoal">
      <Image
        src={destination.image}
        alt={destination.imageAlt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        priority={index < 2}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-brand via-brand/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />

      <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
        <span className="mb-2 text-[10px] font-medium uppercase tracking-wide text-gold">
          0{index + 1}
        </span>
        <h3 className="font-serif text-2xl text-white transition-colors duration-300 group-hover:text-gold lg:text-3xl">
          {destination.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-light-gray">
          {destination.tagline}
        </p>
        <div className="mt-4 h-px w-0 bg-gold transition-all duration-500 group-hover:w-12" />
      </div>
    </article>
  );
}
