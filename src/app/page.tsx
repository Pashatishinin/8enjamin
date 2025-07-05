import AboutSection from "@/sections/AboutSection/AboutSection";
import BestsellersSection from "@/sections/BestsellersSection/BestsellersSection";
import FooterSection from "@/sections/FooterSection/FooterSection";
import GallerySection from "@/sections/GallerySection/GallerySection";
import HeaderSection from "@/sections/HeaderSection/HeaderSection";
import HeroSection from "@/sections/HeroSection/HeroSection";
import WorksSection from "@/sections/WorksSection/WorksSection";

export default function Home() {
  return (
    <div>
      <HeaderSection />
      <HeroSection />
      <AboutSection />
      <BestsellersSection />
      <WorksSection />
      <GallerySection />
      <FooterSection />
    </div>
  );
}
