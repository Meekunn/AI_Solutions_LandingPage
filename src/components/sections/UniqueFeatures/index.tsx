import {
  HStack,
  VStack,
  Heading,
  Text,
  Box,
  Button,
  Stack,
} from "@chakra-ui/react";
import UniqueFeature1 from "@/assets/svg/sentiment_analyzer.svg";
import UniqueFeature2 from "@/assets/svg/ai-content-mod-container.svg";
import UniqueFeatureBg from "@/assets/bgImages/unique-features-bg.png";
import { CheckboxGradientIcon } from "@/icons";

const UniqueFeatures = () => {
  return (
    <HStack>
      <VStack px={32} py={4} gap={10}>
        <VStack gap={6} align="center" w="60%">
          <Heading as="h2" size="h2" textAlign="center" data-aos="fade-up">
            Discover the Unique Special Features of Our AI Finance
          </Heading>
          <Text
            textAlign="center"
            px={16}
            data-aos="fade-up"
            data-aos-delay="50"
          >
            Discover the power of AI-driven financial solutions for smarter,
            faster, and more secure financial decision-making
          </Text>
        </VStack>
        <VStack gap={20}>
          <HStack gap={20} justify="center">
            <Stack
              position="relative"
              align="center"
              justify="center"
              w="575px"
              h="550px"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <Box
                w="575px"
                h="550px"
                bgColor="rgba(116, 116, 116, 0.07)"
                borderRadius="4xl"
                border="1.5px solid transparent"
                borderImageSource="linear-gradient(158.39deg, rgba(255, 255, 255, 0.06) 14.19%, rgba(255, 255, 255, 1.5e-05) 50.59%, rgba(255, 255, 255, 1.5e-05) 68.79%, rgba(255, 255, 255, 0.015) 105.18%)"
                backgroundImage={`url(${UniqueFeature1})`}
                backgroundSize="cover"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
              />
              <Box
                position="absolute"
                top="0"
                left="0"
                w="full"
                h="full"
                backgroundImage={`url(${UniqueFeatureBg})`}
                backgroundSize="cover"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                zIndex={10}
              />
            </Stack>
            <VStack gap={10} align="flex-start" w="50%">
              <Heading
                as="h3"
                fontSize="4xl"
                letterSpacing="-1px"
                lineHeight="140%"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                Predictive Analytics, Fraud Detection, and Smart Budgeting
                Solution
              </Heading>
              <VStack gap={4} align="flex-start">
                <HStack
                  gap={4}
                  align="center"
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  <CheckboxGradientIcon />
                  <Text>
                    Our platform ensures that all sensitive data is encrypted
                    both during transmission and while stored
                  </Text>
                </HStack>
                <HStack
                  gap={4}
                  align="center"
                  data-aos="fade-left"
                  data-aos-delay="300"
                >
                  <CheckboxGradientIcon />
                  <Text>
                    Implement role-based access controls (RBAC) and multi-factor
                    authentication (MFA).
                  </Text>
                </HStack>
                <HStack
                  gap={4}
                  align="center"
                  data-aos="fade-left"
                  data-aos-delay="400"
                >
                  <CheckboxGradientIcon />
                  <Text>
                    Regularly audit user access to sensitive information and
                    systems to ensure compliance with security policies
                  </Text>
                </HStack>
              </VStack>
              <Button
                variant="gradientBg"
                data-aos="fade-left"
                data-aos-delay="500"
              >
                Learn More
              </Button>
            </VStack>
          </HStack>
          <HStack gap={20} justify="center">
            <Stack
              position="relative"
              align="center"
              justify="center"
              w="575px"
              h="550px"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <Box
                w="575px"
                h="550px"
                bgColor="rgba(116, 116, 116, 0.07)"
                borderRadius="4xl"
                border="1.5px solid transparent"
                borderImageSource="linear-gradient(158.39deg, rgba(255, 255, 255, 0.06) 14.19%, rgba(255, 255, 255, 1.5e-05) 50.59%, rgba(255, 255, 255, 1.5e-05) 68.79%, rgba(255, 255, 255, 0.015) 105.18%)"
                backgroundImage={`url(${UniqueFeature2})`}
                backgroundSize="cover"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
              />
              <Box
                position="absolute"
                top="0"
                left="0"
                w="full"
                h="full"
                backgroundImage={`url(${UniqueFeatureBg})`}
                backgroundSize="cover"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                zIndex={10}
              />
            </Stack>

            <VStack gap={10} align="flex-start" w="50%">
              <Heading
                as="h3"
                fontSize="4xl"
                letterSpacing="-1px"
                lineHeight="140%"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                Discover the power of AI-driven financial solutions For your
                Finance
              </Heading>
              <Text lineHeight="170%" data-aos="fade-left" data-aos-delay="200">
                Leverage advanced AI to forecast financial trends and identify
                opportunities for growth and savings, ensuring you make
                proactive and informed f inancial decisions.
              </Text>
              <Button
                variant="gradientBg"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                Learn More
              </Button>
            </VStack>
          </HStack>
        </VStack>
      </VStack>
    </HStack>
  );
};

export default UniqueFeatures;
