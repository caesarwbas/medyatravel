import type { Metadata } from "next";
import DestinationsPage from "@/components/DestinationsPage";

export const metadata: Metadata = {
  title: "Reiseziele in Syrien nach Regionen",
  description: "Entdecken Sie Syrien in einer hochauflösenden Bildergalerie, nach Regionen geordnet und ergänzt um die syrische Küche.",
  alternates: {
    canonical: "/de/reiseziele",
    languages: { en: "/en/destinations", de: "/de/reiseziele", ar: "/ar/destinations" },
  },
};

export default function Page() {
  return <DestinationsPage locale="de" />;
}
