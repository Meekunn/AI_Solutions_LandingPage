import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import FavoriteToolsImage from "@/assets/bgImages/favorite-tools.png";

const FavoriteTools = () => {
  return (
    <HStack w="full" justify="center">
      <VStack py={40} gap={4} w="80%">
        <VStack gap={6} align="center" w="60%">
          <Heading as="h2" size="h2" textAlign="center" data-aos="fade-up">
            Get Connected with Your Favorite Tools
          </Heading>
          <Text
            textAlign="center"
            px={16}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Discover the future of image production with InnovaAI. Effortlessly
            create, edit, and perfect your tracks.
          </Text>
        </VStack>
        <Box
          w="full"
          h="815px"
          position="relative"
          backgroundImage={`url(${FavoriteToolsImage})`}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-delay="300"
        >
          {/* <Image
            src={FavoriteAISecurity}
            alt="favorite-ai-security"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
          /> */}
        </Box>
      </VStack>
    </HStack>
  );
};

export default FavoriteTools;
