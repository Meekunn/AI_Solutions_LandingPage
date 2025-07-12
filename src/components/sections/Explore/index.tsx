import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import ExploreCard1 from "@/assets/svg/explore-section/commands_center.svg";
import ExploreCard2 from "@/assets/svg/explore-section/expense_tracking.svg";
import ExploreCard3 from "@/assets/svg/explore-section/ai_security.svg";
import ExploreCard4 from "@/assets/svg/explore-section/financial_analysis.svg";
import ExploreBg from "@/assets/bgImages/explore-bg.png";

const Explore = () => {
  return (
    <HStack>
      <VStack px={32} py={10} gap={6}>
        <VStack gap={6} align="center" w="60%">
          <Heading as="h2" size="h2" textAlign="center" data-aos="fade-up">
            Explore the Robust Features of Our AI Finance Platform
          </Heading>
          <Text
            textAlign="center"
            px={16}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Discover the power of AI-driven financial solutions for smarter,
            faster, and more secure financial decision-making
          </Text>
        </VStack>
        <Grid
          templateColumns="repeat(3, 1fr)"
          templateRows="repeat(2, 1fr)"
          gap="6"
          w="full"
          position="relative"
        >
          <Box
            position="absolute"
            top="0"
            left="0"
            w="full"
            h="full"
            backgroundImage={`url(${ExploreBg})`}
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            // zIndex={10}
          />

          <GridItem colSpan={1} data-aos="fade-right" data-aos-delay="300">
            <Box
              h="580px"
              bgColor="rgba(116, 116, 116, 0.07)"
              border="1.5px solid transparent"
              borderImageSource="linear-gradient(158.39deg, rgba(255, 255, 255, 0.06) 14.19%, rgba(255, 255, 255, 1.5e-05) 50.59%, rgba(255, 255, 255, 1.5e-05) 68.79%, rgba(255, 255, 255, 0.015) 105.18%)"
              borderRadius="4xl"
              backdropFilter="blur(100px)"
              boxShadow="2px 4px 16px 0px #F8F8F80F inset"
              backgroundImage={`url(${ExploreCard1})`}
              backgroundSize="auto"
              backgroundPosition="top"
              backgroundRepeat="no-repeat"
              position="relative"
            >
              <VStack
                gap={2}
                py={4}
                px={12}
                align="flex-start"
                position="absolute"
                bottom={0}
              >
                <Heading as="h3" size="h3" color="white">
                  Personalized Financial Plan
                </Heading>
                <Text fontSize="lg">
                  Receive customized financial plans based on your unique goals,
                  spending habits, and investment.
                </Text>
                <Button variant="gradientBg" my={4}>
                  Learn More
                </Button>
              </VStack>
            </Box>
          </GridItem>
          <GridItem colSpan={2} data-aos="fade-left" data-aos-delay="500">
            <Box
              h="580px"
              bgColor="rgba(116, 116, 116, 0.07)"
              border="1.5px solid transparent"
              borderImageSource="linear-gradient(158.39deg, rgba(255, 255, 255, 0.06) 14.19%, rgba(255, 255, 255, 1.5e-05) 50.59%, rgba(255, 255, 255, 1.5e-05) 68.79%, rgba(255, 255, 255, 0.015) 105.18%)"
              borderRadius="4xl"
              backdropFilter="blur(100px)"
              boxShadow="2px 4px 16px 0px #F8F8F80F inset"
              backgroundImage={`url(${ExploreCard2})`}
              backgroundSize="contain"
              backgroundPosition="top"
              backgroundRepeat="no-repeat"
              position="relative"
            >
              <VStack
                gap={2}
                py={4}
                px={12}
                align="flex-start"
                position="absolute"
                bottom={0}
              >
                <Heading as="h3" size="h3" color="white">
                  Automated Expense Tracking
                </Heading>
                <Text fontSize="lg">
                  Automatically categorize and track your expenses, providing
                  detailed reports and insights on your spending patterns to
                  help you stay on top of your financial health.
                </Text>
                <Button variant="gradientBg" my={4}>
                  Learn More
                </Button>
              </VStack>
            </Box>
          </GridItem>
          <GridItem colSpan={2} data-aos="fade-right" data-aos-delay="300">
            <Box
              h="580px"
              bgColor="rgba(116, 116, 116, 0.07)"
              border="1.5px solid transparent"
              borderImageSource="linear-gradient(158.39deg, rgba(255, 255, 255, 0.06) 14.19%, rgba(255, 255, 255, 1.5e-05) 50.59%, rgba(255, 255, 255, 1.5e-05) 68.79%, rgba(255, 255, 255, 0.015) 105.18%)"
              borderRadius="4xl"
              backdropFilter="blur(100px)"
              boxShadow="2px 4px 16px 0px #F8F8F80F inset"
              backgroundImage={`url(${ExploreCard3})`}
              backgroundSize="auto"
              backgroundPosition="top"
              backgroundRepeat="no-repeat"
              position="relative"
            >
              <VStack
                gap={2}
                py={4}
                px={12}
                align="flex-start"
                position="absolute"
                bottom={0}
              >
                <Heading as="h3" size="h3" color="white">
                  Risk Management
                </Heading>
                <Text fontSize="lg">
                  Utilize AI-powered tools to assess and manage financial risks,
                  offering strategies to mitigate potential losses and protect
                  your investments.
                </Text>
                <Button variant="gradientBg" my={4}>
                  Learn More
                </Button>
              </VStack>
            </Box>
          </GridItem>
          <GridItem colSpan={1} data-aos="fade-left" data-aos-delay="500">
            <Box
              h="580px"
              bgColor="rgba(116, 116, 116, 0.07)"
              border="1.5px solid transparent"
              borderImageSource="linear-gradient(158.39deg, rgba(255, 255, 255, 0.06) 14.19%, rgba(255, 255, 255, 1.5e-05) 50.59%, rgba(255, 255, 255, 1.5e-05) 68.79%, rgba(255, 255, 255, 0.015) 105.18%)"
              borderRadius="4xl"
              backdropFilter="blur(100px)"
              boxShadow="2px 4px 16px 0px #F8F8F80F inset"
              backgroundImage={`url(${ExploreCard4})`}
              backgroundSize="auto"
              backgroundPosition="top"
              backgroundRepeat="no-repeat"
              position="relative"
            >
              <VStack
                gap={2}
                py={4}
                px={12}
                align="flex-start"
                position="absolute"
                bottom={0}
              >
                <Heading as="h3" size="h3" color="white">
                  Real-Time Market Analysis
                </Heading>
                <Text fontSize="lg">
                  Access up-to-the-minute market data and analysis to make
                  informed investment decisions.
                </Text>
                <Button variant="gradientBg" my={4}>
                  Learn More
                </Button>
              </VStack>
            </Box>
          </GridItem>
        </Grid>
      </VStack>
    </HStack>
  );
};

export default Explore;

// border-image-source: linear-gradient(158.39deg, rgba(255, 255, 255, 0.06) 14.19%, rgba(255, 255, 255, 1.5e-05) 50.59%, rgba(255, 255, 255, 1.5e-05) 68.79%, rgba(255, 255, 255, 0.015) 105.18%);
