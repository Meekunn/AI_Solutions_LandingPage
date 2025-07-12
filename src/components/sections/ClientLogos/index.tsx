import { Text, VStack, Image, Box, HStack } from "@chakra-ui/react";
import RotaShow from "@/assets/images/rotashow.png";
import Velocity from "@/assets/images/velocity.png";
import Goldlines from "@/assets/images/goldlines.png";
import Waves from "@/assets/images/waves.png";
import Travelers from "@/assets/images/travelers.png";
// import Slider from "@/components/reusables/Slider";
import { scroll } from "@/theme/animation";

const ClientLogos = () => {
  const logos = [RotaShow, Waves, Travelers, Goldlines, Velocity];
  return (
    <VStack align="center" gap={6} mb="8.75rem">
      <Text data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
        Trusted by thousands from worldwide
      </Text>
      <Box
        w="80%"
        overflow="hidden"
        position="relative"
        maskImage="linear-gradient(to right,
          transparent 0%, black 12.5%,
          black 87.5%, transparent 100%)"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="400"
      >
        <HStack
          whiteSpace="nowrap"
          gap={8}
          animation={`${scroll} 20s linear infinite`}
          willChange="transform"
          //minW="max-content" /* keeps the row’s true width */
        >
          {/* 3️⃣  First copy + second copy */}
          {[...logos, ...logos].map((src, i) => (
            <Image key={i} h="64px" src={src} alt="" draggable={false} />
            // <Image
            //   key={i}
            //   h="64px"
            //   src={src}
            //   alt=""
            //   draggable={false}
            //   /* add 8 px margin *except* after each Velocity */
            //   mr={(i + 1) % logos.length === 0 ? 0 : 8}
            // />
          ))}
        </HStack>
        {/* <Slider images={logos} /> */}
      </Box>
    </VStack>
  );
};

export default ClientLogos;
