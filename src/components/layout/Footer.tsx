import { LogoTextIcon } from "@/icons";
import { For, HStack, Icon, Link, Text, VStack } from "@chakra-ui/react";
import NavLink from "../reusables/NavLink";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const socialMedia = [
    {
      icon: <CiFacebook />,
      link: "https://www.facebook.com",
    },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com",
    },
    {
      icon: <FaXTwitter />,
      link: "https://www.x.com",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com",
    },
  ];

  return (
    <VStack px={28} w="100%" pb={28} gap={10} mt={24}>
      <HStack gap={12} w="full" justifyContent="space-around" align="start">
        <VStack gap={8} align="start" w="352px">
          <LogoTextIcon />
          <Text>
            Discover the future of music production with SonifyAI. Effortlessly
            create, edit, and perfect your tracks.
          </Text>
          <HStack gap={6} align="center" justify="start">
            <For each={socialMedia}>
              {(item, index) => (
                <Link href={item.link} key={index} target="_blank">
                  <Icon size="lg" color="white">
                    {item.icon}
                  </Icon>
                </Link>
              )}
            </For>
          </HStack>
        </VStack>
        <VStack gap={8} align="start">
          <Text color="white" fontWeight="bold">
            Menu
          </Text>
          <VStack gap={6} align="start">
            <NavLink variant="footerNavlink" to="/">
              Home
            </NavLink>
            <NavLink variant="footerNavlink" to="/about">
              Features
            </NavLink>
            <NavLink variant="footerNavlink" to="/about">
              Pricing
            </NavLink>
            <NavLink variant="footerNavlink" to="/about">
              Contact Us
            </NavLink>
          </VStack>
        </VStack>
        <VStack gap={8} align="start">
          <Text color="white" fontWeight="bold">
            Info
          </Text>
          <VStack gap={6} align="start">
            <NavLink variant="footerNavlink" to="/about">
              Terms
            </NavLink>
            <NavLink variant="footerNavlink" to="/about">
              Privacy Policy
            </NavLink>
            <NavLink variant="footerNavlink" to="/about">
              Support
            </NavLink>
          </VStack>
        </VStack>
        <VStack gap={8} align="start">
          <Text color="white" fontWeight="bold">
            Resources
          </Text>
          <VStack gap={6} align="start">
            <NavLink variant="footerNavlink" to="/about">
              Blogs
            </NavLink>
            <NavLink variant="footerNavlink" to="/about">
              Testimonials
            </NavLink>
            <NavLink variant="footerNavlink" to="/about">
              Brand Guide
            </NavLink>
          </VStack>
        </VStack>
      </HStack>
      <Text w="full" textAlign="center">
        Copyright © 2024 InnovaAI. All Rights Reserved
      </Text>
    </VStack>
  );
};

export default Footer;
