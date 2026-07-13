import { destinations } from "@/data/destinations";
import DestinationCard from "@/components/DestinationCard";

export default function DestinationHighlights() {
  return (
    <section id="destinations" className="bg-charcoal py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 lg:mb-16 lg:flex-row lg:items-end">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-wide text-gold">
              Destinations
            </p>
            <h2 className="font-serif text-3xl text-white sm:text-4xl md:text-5xl">
              Extraordinary Places
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-light-gray">
            From ancient capitals to sun-drenched coastlines, discover Syria&apos;s
            most captivating destinations through the lens of luxury travel.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {destinations.map((destination, index) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
