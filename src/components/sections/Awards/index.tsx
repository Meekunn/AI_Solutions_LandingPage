import { HStack, Icon, Image, Text, VStack } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import AwardsLeftSvg from "@/assets/svg/award-left.svg";
import AwardsRightSvg from "@/assets/svg/award-right.svg";
import AwardsBg from "@/assets/bgImages/stars-bg.png";

const Awards = () => {
  return (
    <HStack>
      <VStack
        w="100%"
        h="fit-content"
        gap={12}
        mb={4}
        mx={36}
        backgroundImage={`url(${AwardsBg})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat">
        <HStack>
          <Image src={AwardsLeftSvg} alt="Awards" />
          <VStack>
            <Text fontWeight="semibold" color="white">
              BEST AI TOOL IN 2024
            </Text>
            <HStack>
              <Icon size="lg" color="#FFC107">
                <FaStar />
              </Icon>
              <Icon size="lg" color="#FFC107">
                <FaStar />
              </Icon>
              <Icon size="lg" color="#FFC107">
                <FaStar />
              </Icon>
              <Icon size="lg" color="#FFC107">
                <FaStar />
              </Icon>
              <Icon size="lg" color="#FFC107">
                <FaStar />
              </Icon>
            </HStack>
          </VStack>
          <Image src={AwardsRightSvg} alt="Awards" />
        </HStack>
        <Text textAlign="center">
          Winner of the FinTech Excellence Award, our AI Finance platform sets a
          new industry standard with its AI-driven insights, advanced security,
          and automated financial planning and empowering.
        </Text>
      </VStack>
    </HStack>
  );
};

export default Awards;
