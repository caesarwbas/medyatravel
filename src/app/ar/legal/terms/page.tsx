import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: 'الشروط والأحكام العامة' };

export default function Page() {
  return <LegalPage locale="ar" type="terms" />;
}
