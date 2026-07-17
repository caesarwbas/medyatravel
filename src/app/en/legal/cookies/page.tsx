import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: 'Cookie Settings' };

export default function Page() {
  return <LegalPage locale="en" type="cookies" />;
}
