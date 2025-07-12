import {
  Button,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Box,
} from "@chakra-ui/react";
import imageEditBg from "@/assets/svg/image-edit-bg.svg";
import imageEdit from "@/assets/svg/image-edit.svg";

const ImageEdit = () => {
  return (
    <HStack justify="center" py={20}>
      <HStack
        px={14}
        background="#74747412"
        borderRadius="4xl"
        border="1.5px solid"
        borderImageSource="linear-gradient(158.39deg, rgba(255, 255, 255, 0.06) 14.19%, rgba(255, 255, 255, 1.5e-05) 50.59%, rgba(255, 255, 255, 1.5e-05) 68.79%, rgba(255, 255, 255, 0.015) 105.18%)"
        backdropFilter="blur(100px)"
        boxShadow="2px 4px 16px 0px #F8F8F80F inset"
        backgroundImage={`url(${imageEditBg})`}
        backgroundRepeat="no-repeat"
        position="relative"
        backgroundPosition="center"
        backgroundSize="contain"
        w="75%"
        data-aos="zoom-in"
        data-aos-delay="100"
        data-aos-duration="1500"
      >
        <VStack align="start" gap={10} w="60%">
          <VStack gap={4} align="start">
            <Heading as="h2" size="h2" fontSize="5xl">
              Unlock Your Image Editing Potential with AI
            </Heading>
            <Text>
              Start Your Journey with and Revolutionize Your Creative Process
            </Text>
          </VStack>
          <Button variant="gradientBg">Book a Demo</Button>
        </VStack>
        <Box>
          <Image src={imageEdit} alt="image-edit-bg" />
        </Box>
      </HStack>
    </HStack>
  );
};

export default ImageEdit;
