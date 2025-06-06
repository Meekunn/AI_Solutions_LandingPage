import {
  Box,
  Button,
  Flex,
  Group,
  Heading,
  HStack,
  Icon,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";
import HeroReviewers from "@/assets/images/hero-reviewers.png";

import "./hero-section.css";

const HeroSection = () => {
  return (
    <VStack
      bg="rgba(13, 13, 13, 0.1)"
      py={20}
      px={{ base: 6, md: 20, xl: 56, "2xl": 96 }}
      gap={6}
      align="center">
      <Box className="container" m={6}>
        <Text ml={2}>Start Your Journey with InnovaAI</Text>
        <Flex
          ml={2}
          w={6}
          h={6}
          borderRadius="full"
          align="center"
          justify="center"
          backgroundImage="linear-gradient(135deg, #DCC0DC 3.75%, #F8A8F9 26.75%, #7A86FA 66.75%, #024EEA 97.25%)">
          <Icon as={FiPlus} w={3} h={3} color="white" fontWeight="bold" />
        </Flex>
      </Box>
      <Heading as="h1" size="h1" px={32} textAlign="center">
        AI Solutions for Personal and Business Finance
      </Heading>
      <Text px={60} textAlign="center">
        Discover the power of AI-driven financial solutions for smarter, faster,
        and more secure financial decision-making
      </Text>
      <HStack w="full" justify="center">
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
            zIndex={1}>
            Get 14 Days Free Trial
          </Button>
        </Group>
      </HStack>
      <HStack my={6} w="full" justify="center">
        <Image src={HeroReviewers} alt="Hero Reviewers" />
        <Flex direction="column" gap={1}>
          <Text>Well reviewed</Text>
          <Text>by 500K+ customers</Text>
        </Flex>
      </HStack>
    </VStack>
  );
};

export default HeroSection;
