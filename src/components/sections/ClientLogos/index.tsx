import { HStack, Image, Text, VStack } from "@chakra-ui/react";
import RotaShow from "@/assets/images/rotashow.png";
import Velocity from "@/assets/images/velocity.png";
import Goldlines from "@/assets/images/goldlines.png";
import Waves from "@/assets/images/waves.png";
import Travelers from "@/assets/images/travelers.png";

const ClientLogos = () => {
  return (
    <VStack align="center" gap={6} mb="8.75rem">
      <Text>Trusted by thousands from worldwide</Text>
      <HStack wrap="wrap" gap={4}>
        <Image height="64px" src={RotaShow} alt="RotaShow Logo" />
        <Image height="64px" src={Waves} alt="Waves Logo" />
        <Image height="64px" src={RotaShow} alt="RotaShow Logo" />
        <Image height="64px" src={Travelers} alt="Travelers Logo" />
        <Image height="64px" src={Goldlines} alt="Goldlines Logo" />
        <Image height="64px" src={Velocity} alt="Velocity Logo" />
      </HStack>
    </VStack>
  );
};

export default ClientLogos;
