import {
  Button,
  Flex,
  Group,
  Heading,
  HStack,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import HeroReviewers from "@/assets/images/hero-reviewers.png";
import "./hero-section.css";
import HeroSectionAnimate from "./HeroSectionAnimate";

const HeroSection = () => {
  return (
    <VStack
      bg="rgba(13, 13, 13, 0.1)"
      // pos="relative"
      // top="115px"
      py={20}
      px={{ base: 6, md: 20, xl: 56, "2xl": 96 }}
      gap={6}
      align="center"
    >
      <HeroSectionAnimate />
      {/* <Box className="container hero-container" m={6}>
        <Text ml={2}>Start Your Journey with InnovaAI</Text>
        <Flex
          ml={2}
          w={6}
          h={6}
          borderRadius="full"
          align="center"
          justify="center"
          backgroundImage="linear-gradient(135deg, #DCC0DC 3.75%, #F8A8F9 26.75%, #7A86FA 66.75%, #024EEA 97.25%)"
        >
          <Icon as={FiPlus} w={3} h={3} color="white" fontWeight="bold" />
        </Flex>
      </Box> */}
      <Heading
        as="h1"
        size="h1"
        px={{ base: 4, md: 16, lg: 32 }}
        textAlign="center"
        className="hero-heading"
        bg="linear-gradient(to right, hsl(0, 0%, 50%) 0, hsl(0, 0%, 100%) 15%, hsl(0, 0%, 50%) 30%)"
        backgroundClip="text"
      >
        AI Solutions for Personal and Business Finance
      </Heading>
      <Text
        px={{ base: 4, md: 20, lg: 60 }}
        textAlign="center"
        fontSize={{ base: "md", md: "lg" }}
        lineHeight="tall"
        className="hero-text"
      >
        Discover the power of AI-driven financial solutions for smarter, faster,
        and more secure financial decision-making
      </Text>
      <HStack w="full" justify="center" className="hero-input-group">
        <Group w="full" maxW="sm">
          <Input
            flex="1"
            placeholder="Enter your email here"
            variant="roundInput"
            zIndex={0}
          />
          <Button
            variant="gradientBg"
            position="absolute"
            right="-100px"
            zIndex={1}
          >
            Get 14 Days Free Trial
          </Button>
        </Group>
      </HStack>
      <HStack my={6} w="full" justify="center">
        <Image
          src={HeroReviewers}
          alt="Hero Reviewers"
          className="hero-reviewers"
        />
        <Flex direction="column" gap={1} className="hero-review-text">
          <Text>Well reviewed</Text>
          <Text>by 500K+ customers</Text>
        </Flex>
      </HStack>
    </VStack>
  );
};

export default HeroSection;
