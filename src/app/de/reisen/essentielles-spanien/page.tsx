import type { Metadata } from "next";
import SpainJourneyPage from "@/components/SpainJourneyPage";
export const metadata: Metadata = { title: "Essentielles Spanien | MEDYA TRAVEL", description: "Sechstägige Kulturreise durch Barcelona, Zaragoza, Madrid, Córdoba, Sevilla, Granada und Valencia." };
export default function Page() { return <SpainJourneyPage locale="de" />; }
