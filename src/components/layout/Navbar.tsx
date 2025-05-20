import {
  Button,
  HStack,
  IconButton,
  Image,
  Drawer,
  Portal,
  CloseButton,
  VStack,
} from "@chakra-ui/react";
import Logo from "@/assets/svg/logo.svg";
import GradientBorderButton from "../reusables/GradientBorderButton";
import NavLink from "../reusables/NavLink";
import { RiMenu3Line } from "react-icons/ri";
import { useRef, useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);

  return (
    <HStack
      py={{ base: 6, xl: 8 }}
      px={{ base: 4, md: 14, xl: 24 }}
      justifyContent="space-between"
      w="full">
      <Image src={Logo} alt="Logo" />
      <HStack gap={10} display={{ base: "none", lg: "flex" }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">Features</NavLink>
        <NavLink to="/about">Pricing</NavLink>
        <NavLink to="/about">About Us</NavLink>
      </HStack>
      <HStack gap={{ base: 2, xl: 4 }} display={{ base: "none", lg: "flex" }}>
        <Button variant="customGhost" fontSize="md">
          Log in
        </Button>
        <GradientBorderButton text="Get Started" />
      </HStack>

      {/* Small Screens */}

      <Drawer.Root
        open={open}
        onOpenChange={(e) => setOpen(e.open)}
        initialFocusEl={() => ref.current}>
        <Drawer.Trigger asChild>
          <IconButton
            aria-label="Open Sidebar Menu"
            variant="ghost"
            color="white"
            size="lg"
            display={{ base: "inline-flex", lg: "none" }}>
            <RiMenu3Line />
          </IconButton>
        </Drawer.Trigger>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content
              boxShadow="-6px 0px 10px 3px rgba(255, 255, 255, 0.2)"
              backdropFilter="blur(8px)">
              <Drawer.Header></Drawer.Header>
              <Drawer.Body>
                <VStack gap={10} align="start" pt={6}>
                  <NavLink fontSize="lg" to="/">
                    Home
                  </NavLink>
                  <NavLink fontSize="lg" to="/about">
                    Features
                  </NavLink>
                  <NavLink fontSize="lg" to="/about">
                    Pricing
                  </NavLink>
                  <NavLink fontSize="lg" to="/about">
                    About Us
                  </NavLink>
                </VStack>
              </Drawer.Body>
              <Drawer.Footer flexDirection="column" gap={2}>
                <Button
                  ref={ref}
                  variant="outline"
                  fontSize="md"
                  w="full"
                  py={6}
                  color="white"
                  borderColor="white">
                  Log in
                </Button>
                <Button
                  bgImage="linear-gradient(90deg, #dcc0dc, #f8a8f9, #7a86fa, #024eea)"
                  w="full"
                  color="white"
                  fontSize="md"
                  py={6}>
                  Get Started
                </Button>
              </Drawer.Footer>
              <Drawer.CloseTrigger asChild>
                <CloseButton size="lg" />
              </Drawer.CloseTrigger>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </HStack>
  );
};

export default Navbar;
