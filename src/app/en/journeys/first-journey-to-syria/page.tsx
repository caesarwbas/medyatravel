import type { Metadata } from "next";
import JourneyPage from "@/components/JourneyPage";

export const metadata: Metadata = {
  title: "First Journey to Syria - 7 Days / 6 Nights",
  description: "A seven-day curated Syria journey through Aleppo, Tartus, Mashta Al Helou, Damascus, Maaloula and the Mediterranean coast.",
  alternates: {
    canonical: "/en/journeys/first-journey-to-syria",
    languages: { en: "/en/journeys/first-journey-to-syria", de: "/de/reisen/erste-syrienreise", ar: "/ar/journeys/first-journey-to-syria" },
  },
};

export default function Page() {
  return <JourneyPage locale="en" />;
}
