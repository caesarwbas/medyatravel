import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: 'Terms and Conditions' };

export default function Page() {
  return <LegalPage locale="en" type="terms" />;
}
