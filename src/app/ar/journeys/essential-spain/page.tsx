import type { Metadata } from "next";
import SpainJourneyPage from "@/components/SpainJourneyPage";
export const metadata: Metadata = { title: "إسبانيا الأساسية | MEDYA TRAVEL", description: "رحلة ثقافية لمدة ستة أيام عبر برشلونة وسرقسطة ومدريد وقرطبة وإشبيلية وغرناطة وفالنسيا." };
export default function Page() { return <SpainJourneyPage locale="ar" />; }
