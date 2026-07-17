import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = { title: 'إعدادات ملفات الارتباط' };

export default function Page() {
  return <LegalPage locale="ar" type="cookies" />;
}
