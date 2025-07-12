import {
  HStack,
  VStack,
  Heading,
  Text,
  Grid,
  For,
  Box,
} from "@chakra-ui/react";
import user1 from "@/assets/images/user-reviews/user1.png";
import user2 from "@/assets/images/user-reviews/user2.png";
import user3 from "@/assets/images/user-reviews/user3.png";
import user4 from "@/assets/images/user-reviews/user4.png";
import user5 from "@/assets/images/user-reviews/user5.png";
import user6 from "@/assets/images/user-reviews/user6.png";
import UserExperiencesBg from "@/assets/bgImages/experience-bg.png";
import type { IExperienceCard } from "./ExperienceCard";
import ExperienceCard from "./ExperienceCard";

const UserExperiences = () => {
  const userExperiences: IExperienceCard[] = [
    {
      review:
        '"AI Finance has transformed the way I manage my finances. The personalized insights and automated features have saved me so much time and effort."',
      image: user1,
      role: "Software Engineer",
      name: "Sarah White",
    },
    {
      review:
        '"Thanks to AI Finance, I feel more confident in my investment decisions. The real-time analysis and predictive analytics are game-changers."',
      image: user2,
      role: "Software Engineer",
      name: "Sarah White",
    },
    {
      review:
        '"AI Finance has completely transformed my financial management. The personalized insights and automated features save me so much time."',
      image: user3,
      role: "Software Engineer",
      name: "Sarah White",
    },
    {
      review:
        '"Thanks to AI Finance, I feel more confident in my investment decisions. The real-time analysis and predictive analytics are game-changers."',
      image: user4,
      role: "Software Engineer",
      name: "Sarah White",
    },
    {
      review:
        '"The fraud detection feature gives me peace of mind, knowing my financial in my investment decisions data is secure and protected."',
      image: user5,
      role: "Software Engineer",
      name: "Sarah White",
    },
    {
      review:
        '"AI Finance\'s budgeting tools have helped me stay on track with my financial goals. The AI adapts to my changing financial situation effortlessly."',
      image: user6,
      role: "Software Engineer",
      name: "Sarah White",
    },
  ];
  return (
    <HStack>
      <VStack px={32} py={10} gap={20}>
        <VStack gap={6} align="center" w="60%">
          <Heading as="h2" size="h2" textAlign="center" data-aos="fade-up">
            Real Experiences from Our Users
          </Heading>
          <Text
            textAlign="center"
            px={16}
            fontSize="lg"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            Discover the power of AI-driven financial solutions for smarter,
            faster, and more secure financial decision-making
          </Text>
        </VStack>
        <Grid
          templateColumns="repeat(3, 1fr)"
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
            backgroundImage={`url(${UserExperiencesBg})`}
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            zIndex={10}
            data-aos="zoom-in"
          />
          <For each={userExperiences}>
            {(item, index) => (
              <ExperienceCard
                key={index}
                review={item.review}
                image={item.image}
                role={item.role}
                name={item.name}
              />
            )}
          </For>
        </Grid>
      </VStack>
    </HStack>
  );
};

export default UserExperiences;
