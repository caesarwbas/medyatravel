import AboutSection from "@/components/AboutSection";
import CatalogueSection from "@/components/CatalogueSection";
import DestinationHighlights from "@/components/DestinationHighlights";
import DocumentLocale from "@/components/DocumentLocale";
import ExperiencesGallery from "@/components/ExperiencesGallery";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import SocialDock from "@/components/SocialDock";
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
        <DestinationHighlights locale={locale} />
        <ExperiencesGallery locale={locale} />
        <CatalogueSection locale={locale} />
        <AboutSection locale={locale} />
      </main>

      <Footer locale={locale} />
      <SocialDock locale={locale} />
    </div>
  );
}
