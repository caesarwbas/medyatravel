import type { Metadata } from "next";
import JourneyPage from "@/components/JourneyPage";

export const metadata: Metadata = {
  title: "الرحلة الأولى إلى سوريا - 7 أيام / 6 ليالٍ",
  description: "برنامج سياحي لمدة سبعة أيام يشمل حلب وطرطوس ومشتى الحلو ودمشق ومعلولا والساحل السوري.",
  alternates: {
    canonical: "/ar/journeys/first-journey-to-syria",
    languages: { en: "/en/journeys/first-journey-to-syria", de: "/de/reisen/erste-syrienreise", ar: "/ar/journeys/first-journey-to-syria" },
  },
};

export default function Page() {
  return <JourneyPage locale="ar" />;
}
