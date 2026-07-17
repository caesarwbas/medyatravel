import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: 'سياسة الخصوصية' };

export default function Page() {
  return <LegalPage locale="ar" type="privacy" />;
}
