import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: 'Imprint' };

export default function Page() {
  return <LegalPage locale="en" type="imprint" />;
}
