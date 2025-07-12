import { CheckboxGradientIcon } from "@/icons";
import {
  HStack,
  VStack,
  Heading,
  Text,
  Stack,
  Button,
  Box,
} from "@chakra-ui/react";

const TailoredSolutions = () => {
  return (
    <HStack>
      <VStack px={32} py={36} gap={20}>
        <VStack gap={6} align="center" w="60%">
          <Heading as="h2" size="h2" textAlign="center" data-aos="fade-up">
            Tailored Solutions for Every Need
          </Heading>
          <Text
            textAlign="center"
            px={16}
            fontSize="lg"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            Discover the future of music production with SonifyAI. Effortlessly
            create, edit, and perfect your tracks.
          </Text>
        </VStack>
        <Stack direction="row" gap={10} justify="start">
          <VStack
            w="580px"
            borderRadius="4xl"
            border="1.5px solid transparent"
            bgColor="rgba(116, 116, 116, 0.07)"
            borderImageSource="linear-gradient(158.39deg, rgba(255, 255, 255, 0.06) 14.19%, rgba(255, 255, 255, 1.5e-05) 50.59%, rgba(255, 255, 255, 1.5e-05) 68.79%, rgba(255, 255, 255, 0.015) 105.18%)"
            backdropFilter="blur(100px)"
            boxShadow="2px 4px 16px 0px #F8F8F80F inset"
            p={9}
            gap={6}
            align="start"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <VStack gap={4} align="flex-start" w="65%" justify="start">
              <Heading
                as="h3"
                size="h3"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                Basic Plan
              </Heading>
              <Text data-aos="fade-up" data-aos-delay="200">
                The Basic Plan is designed for individuals and small businesses.
              </Text>
            </VStack>
            <HStack
              gap={2}
              justify="start"
              align="flex-end"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <Text
                fontSize="4xl"
                color="white"
                letterSpacing="-1px"
                lineHeight="140%"
                fontWeight="medium"
              >
                $ 29 USD
              </Text>
              <Text>per month</Text>
            </HStack>
            <VStack
              gap={4}
              borderRadius="2xl"
              align="flex-start"
              px={4}
              border="1.5px solid #F8F8F81A"
              w="full"
              py={6}
              background="linear-gradient(180deg, rgba(248, 248, 248, 0.01) 0%, rgba(248, 248, 248, 0.01) 100%);"
            >
              <HStack
                gap={4}
                align="center"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <CheckboxGradientIcon />
                <Text>Send up to 10,000 emails</Text>
              </HStack>
              <HStack
                gap={4}
                align="center"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <CheckboxGradientIcon />
                <Text>Send up to 5,000 SMS</Text>
              </HStack>
              <HStack
                gap={4}
                align="center"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <CheckboxGradientIcon />
                <Text>Send up to 3,000 WhatsApp messages per month</Text>
              </HStack>
              <HStack
                gap={4}
                align="center"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <CheckboxGradientIcon />
                <Text>Manage up to 2,000 contacts</Text>
              </HStack>
              <HStack
                gap={4}
                align="center"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <CheckboxGradientIcon />
                <Text>Basic analytics and reporting</Text>
              </HStack>
            </VStack>
            <Button
              variant="gradientBg"
              w="full"
              py={7}
              data-aos="zoom-in"
              data-aos-delay="750"
            >
              Select This Plan
            </Button>
          </VStack>
          <VStack
            w="580px"
            borderRadius="4xl"
            border="1.5px solid transparent"
            bgColor="rgba(116, 116, 116, 0.07)"
            borderImageSource="linear-gradient(158.39deg, rgba(255, 255, 255, 0.06) 14.19%, rgba(255, 255, 255, 1.5e-05) 50.59%, rgba(255, 255, 255, 1.5e-05) 68.79%, rgba(255, 255, 255, 0.015) 105.18%)"
            backdropFilter="blur(100px)"
            boxShadow="2px 4px 16px 0px #F8F8F80F inset"
            p={9}
            gap={6}
            align="start"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <VStack gap={4} align="flex-start" w="65%" justify="start">
              <HStack
                align="center"
                gap={2}
                data-aos="fade-up"
                data-aos-delay="150"
              >
                <Heading as="h3" size="h3">
                  Professional Plan
                </Heading>
                <Box bgColor="white" borderRadius="100px" px={3} py={0}>
                  <Text
                    background="linear-gradient(135deg, #DCC0DC 3.75%, #F8A8F9 26.75%, #7A86FA 66.75%, #024EEA 97.25%);"
                    bgClip="text"
                    fontSize="sm"
                    fontWeight="bold"
                  >
                    POPULAR
                  </Text>
                </Box>
              </HStack>
              <Text data-aos="fade-up" data-aos-delay="200">
                The Professional Plan is designed for individuals and small
                businesses.
              </Text>
            </VStack>
            <HStack
              gap={2}
              justify="start"
              align="flex-end"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <Text
                fontSize="4xl"
                color="white"
                letterSpacing="-1px"
                lineHeight="140%"
                fontWeight="medium"
              >
                $ 49 USD
              </Text>
              <Text>per month</Text>
            </HStack>
            <VStack
              w="full"
              gap={4}
              borderRadius="2xl"
              align="flex-start"
              px={4}
              border="1.5px solid #F8F8F81A"
              py={6}
              background="linear-gradient(180deg, rgba(248, 248, 248, 0.01) 0%, rgba(248, 248, 248, 0.01) 100%);"
            >
              <HStack
                gap={4}
                align="center"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <CheckboxGradientIcon />
                <Text>Send up to 10,000 emails</Text>
              </HStack>
              <HStack
                gap={4}
                align="center"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <CheckboxGradientIcon />
                <Text>Send up to 5,000 SMS</Text>
              </HStack>
              <HStack
                gap={4}
                align="center"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <CheckboxGradientIcon />
                <Text>Send up to 3,000 WhatsApp messages per month</Text>
              </HStack>
              <HStack
                gap={4}
                align="center"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <CheckboxGradientIcon />
                <Text>Manage up to 2,000 contacts</Text>
              </HStack>
              <HStack
                gap={4}
                align="center"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <CheckboxGradientIcon />
                <Text>Basic analytics and reporting</Text>
              </HStack>
            </VStack>
            <Button
              variant="gradientBg"
              w="full"
              py={7}
              data-aos="zoom-in"
              data-aos-delay="750"
            >
              Select This Plan
            </Button>
          </VStack>
        </Stack>
      </VStack>
    </HStack>
  );
};

export default TailoredSolutions;
