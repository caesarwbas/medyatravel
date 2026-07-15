import AboutSection from "@/components/AboutSection";
import CatalogueSection from "@/components/CatalogueSection";
import DestinationHighlights from "@/components/DestinationHighlights";
import ExperiencesGallery from "@/components/ExperiencesGallery";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import SocialDock from "@/components/SocialDock";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <DestinationHighlights />
        <ExperiencesGallery />
        <CatalogueSection />
        <AboutSection />
      </main>

      <Footer />
      <SocialDock />
    </>
  );
}