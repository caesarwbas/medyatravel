import type { Metadata } from "next";
import SpainJourneyPage from "@/components/SpainJourneyPage";
export const metadata: Metadata = { title: "Essential Spain | MEDYA TRAVEL", description: "Six-day cultural journey through Barcelona, Zaragoza, Madrid, Córdoba, Seville, Granada and Valencia." };
export default function Page() { return <SpainJourneyPage locale="en" />; }
