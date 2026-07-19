import type { Metadata } from "next";
import DestinationsPage from "@/components/DestinationsPage";
import type { Locale } from "@/types/index";

export const metadata: Metadata = {
  title: "Syria Destinations by Governorate",
  description: "Explore a high-resolution gallery of Syrian destinations organised by governorate, including a dedicated Syrian cuisine collection.",
  alternates: {
    canonical: "/en/destinations",
    languages: { en: "/en/destinations", de: "/de/reiseziele", ar: "/ar/destinations" },
  },
};

const pageLocale: Locale = "en";

export default function Page() {
  return <DestinationsPage locale={pageLocale} />;
}
