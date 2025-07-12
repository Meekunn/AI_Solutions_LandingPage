import { GridItem, Avatar, HStack, VStack, Text } from "@chakra-ui/react";

export interface IExperienceCard {
  review: string;
  image: string;
  role: string;
  name: string;
}

const ExperienceCard = ({ review, image, role, name }: IExperienceCard) => {
  return (
    <GridItem data-aos="fade-up" data-aos-delay="100">
      <VStack
        gap={10}
        align="start"
        h="288px"
        width="384px"
        py={9}
        px={6}
        borderRadius="4xl"
        bgColor="background: #74747412"
        border="1.5px solid"
        borderImageSource="linear-gradient(158.39deg, rgba(255, 255, 255, 0.06) 14.19%, rgba(255, 255, 255, 1.5e-05) 50.59%, rgba(255, 255, 255, 1.5e-05) 68.79%, rgba(255, 255, 255, 0.015) 105.18%)"
        backdropFilter="blur(100px)"
        boxShadow="2px 4px 16px 0px #F8F8F80F inset"
      >
        <Text>{review}</Text>
        <HStack gap={4}>
          <Avatar.Root size="2xl">
            <Avatar.Fallback name={name} />
            <Avatar.Image src={image} />
          </Avatar.Root>
          <VStack gap={1} align="start">
            <Text color="white" fontWeight="bold">
              {name}
            </Text>
            <Text>{role}</Text>
          </VStack>
        </HStack>
      </VStack>
    </GridItem>
  );
};

export default ExperienceCard;
