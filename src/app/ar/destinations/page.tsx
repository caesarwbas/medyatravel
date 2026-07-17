import type { Metadata } from "next";
import DestinationsPage from "@/components/DestinationsPage";

export const metadata: Metadata = {
  title: "وجهات سوريا حسب المحافظات",
  description: "اكتشف سوريا عبر معرض صور عالي الدقة مرتب حسب المحافظات، مع قسم مستقل للمطبخ السوري.",
  alternates: {
    canonical: "/ar/destinations",
    languages: { en: "/en/destinations", de: "/de/reiseziele", ar: "/ar/destinations" },
  },
};

export default function Page() {
  return <DestinationsPage locale="ar" />;
}
