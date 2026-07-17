import type { Metadata } from "next";
import JourneyPage from "@/components/JourneyPage";

export const metadata: Metadata = {
  title: "Erste Syrienreise - 7 Tage / 6 Übernachtungen",
  description: "Eine siebentägige Syrienreise durch Aleppo, Tartus, Mashta Al Helou, Damaskus, Maaloula und entlang der Mittelmeerküste.",
  alternates: {
    canonical: "/de/reisen/erste-syrienreise",
    languages: { en: "/en/journeys/first-journey-to-syria", de: "/de/reisen/erste-syrienreise", ar: "/ar/journeys/first-journey-to-syria" },
  },
};

export default function Page() {
  return <JourneyPage locale="de" />;
}
