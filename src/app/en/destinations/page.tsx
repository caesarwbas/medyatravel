import type { Metadata } from "next";
import DestinationsPage from "@/components/DestinationsPage";

export const metadata: Metadata = {
  title: "Syria Destinations by Governorate",
  description: "Explore a high-resolution gallery of Syrian destinations organised by governorate, including a dedicated Syrian cuisine collection.",
  alternates: {
    canonical: "/en/destinations",
    languages: { en: "/en/destinations", de: "/de/reiseziele", ar: "/ar/destinations" },
  },
};

export default function Page() {
  return <DestinationsPage locale="en" />;
}
