import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: 'Cookie-Einstellungen' };

export default function Page() {
  return <LegalPage locale="de" type="cookies" />;
}
