import { Heading, VStack } from "@chakra-ui/react";
import Navbar from "../components/layout/Navbar";
const Home = () => {
  return (
    <VStack w="100vw" h="100vh">
      <Navbar />
      <Heading as="h1" size="h1">
        Home
      </Heading>
    </VStack>
  );
};

export default Home;
