import { VStack } from "@chakra-ui/react";
import Navbar from "../components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ClientLogos from "@/components/sections/ClientLogos";
import HeroBackground from "@/assets/bgImages/bg_image.png";
import Awards from "@/components/sections/Awards";

const Home = () => {
  return (
    <VStack>
      <VStack
        w="100%"
        h="fit-content"
        backgroundImage={`url(${HeroBackground})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat">
        <Navbar />
        <HeroSection />
        <ClientLogos />
      </VStack>
      <Awards />
    </VStack>
  );
};

export default Home;
