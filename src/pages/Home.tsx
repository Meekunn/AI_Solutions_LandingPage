import { useEffect } from "react";
import { VStack } from "@chakra-ui/react";
import Navbar from "../components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ClientLogos from "@/components/sections/ClientLogos";
import HeroBackground from "@/assets/bgImages/hero-area.png";
import Awards from "@/components/sections/Awards";
import Explore from "@/components/sections/Explore";
import FavoriteTools from "@/components/sections/FavoriteTools";
import UniqueFeatures from "@/components/sections/UniqueFeatures";
import TailoredSolutions from "@/components/sections/TailoredSolutions";
import UserExperiences from "@/components/sections/UserExperiences";
import ImageEdit from "@/components/sections/ImageEdit";
import Footer from "@/components/layout/Footer";
import "aos/dist/aos.css";
import AOS from "aos";

const Home = () => {
  useEffect(() => {
    AOS.init({
      // duration: 1000,
      easing: "ease-in-out",
      offset: 100,
      mirror: true,
    });

    // Refresh AOS after a short delay to ensure all elements are rendered
    const timer = setTimeout(() => {
      AOS.refresh();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <VStack w="full">
      <VStack
        w="100%"
        h="fit-content"
        backgroundImage={`url(${HeroBackground})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      >
        <Navbar />
        <HeroSection />
        <ClientLogos />
      </VStack>
      <Awards />
      <Explore />
      <FavoriteTools />
      <UniqueFeatures />
      <TailoredSolutions />
      <UserExperiences />
      <ImageEdit />
      <Footer />
    </VStack>
  );
};

export default Home;
