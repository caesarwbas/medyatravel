import AboutSection from "@/components/AboutSection";
import CatalogueSection from "@/components/CatalogueSection";
import DestinationsPortal from "@/components/DestinationsPortal";
import DocumentLocale from "@/components/DocumentLocale";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import RequestForm from "@/components/RequestForm";
import SocialDock from "@/components/SocialDock";
import TrustSection from "@/components/TrustSection";
import type { Locale } from "@/types";

interface SitePageProps {
  locale: Locale;
}

export default function SitePage({ locale }: SitePageProps) {
  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <div lang={locale} dir={direction} className={`site-${locale}`}>
      <DocumentLocale locale={locale} />
      <Navbar locale={locale} />

      <main>
        <HeroSection locale={locale} />
        <DestinationsPortal locale={locale} />
        <TrustSection locale={locale} />
        <CatalogueSection locale={locale} />
        <AboutSection locale={locale} />
        <RequestForm locale={locale} />
      </main>

      <Footer locale={locale} />
      <SocialDock locale={locale} />
    </div>
  );
}
