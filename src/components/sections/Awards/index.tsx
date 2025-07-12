import { HStack, Icon, Image, Text, VStack } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import AwardsLeftSvg from "@/assets/svg/award-left.svg";
import AwardsRightSvg from "@/assets/svg/award-right.svg";
import AwardsBg from "@/assets/bgImages/awards-bg.png";

const Awards = () => {
  return (
    <HStack w="full">
      <VStack
        w="100%"
        h="650px"
        gap={12}
        backgroundImage={`url(${AwardsBg})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        align="center"
        justify="center"
      >
        <HStack>
          <Image
            src={AwardsLeftSvg}
            alt="Awards"
            data-aos-duration="600"
            data-aos="fade-right"
          />
          <VStack data-aos-duration="600" data-aos="zoom-in">
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
          <Image
            src={AwardsRightSvg}
            alt="Awards"
            data-aos-duration="600"
            data-aos="fade-left"
          />
        </HStack>
        <Text
          textAlign="center"
          w={{ base: "45%", lg: "35%" }}
          data-aos-duration="600"
          data-aos="fade-up"
        >
          Winner of the FinTech Excellence Award, our AI Finance platform sets a
          new industry standard with its AI-driven insights, advanced security,
          and automated financial planning and empowering.
        </Text>
      </VStack>
    </HStack>
  );
};

export default Awards;
