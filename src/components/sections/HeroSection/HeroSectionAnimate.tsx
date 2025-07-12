import { Flex, Icon, Text, VStack } from "@chakra-ui/react";
import "./hero-section.css";
import { FiPlus } from "react-icons/fi";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import "./hero-section.css";

const MotionFlex = motion.create(Flex);
const MotionText = motion.create(Text);

const HeroSectionAnimate = () => {
  const ballRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const [isBallMoving, setIsBallMoving] = useState(false);

  const isInView = useInView(ballRef, { once: true });

  return (
    <VStack className="hero-container">
      <Flex
        as="div"
        align="center"
        display="inline-flex"
        px={4}
        py={2}
        borderRadius="full"
        border="2px solid transparent"
        position="relative"
        w="285px"
        backgroundImage={`
      linear-gradient(#111827, #111827),   /* inner fill = page bg */
     linear-gradient(135deg, #DCC0DC 3.75%, #F8A8F9 26.75%, #7A86FA 66.75%, #024EEA 97.25%) /* outer gradient */
    `}
        boxShadow="0px 32px 24px -16px rgba(0, 0, 0, 0.4),
    inset 0px 0px 8px 0px rgba(248, 248, 248, 0.25);"
        backdropFilter="blur(12px)"
        css={{
          backgroundOrigin: "padding-box, border-box",
          backgroundClip: "padding-box, border-box",
          overflow: "hidden",
        }}
      >
        <MotionText
          ref={textRef}
          color="white"
          fontSize="sm"
          fontWeight="500"
          whiteSpace="nowrap"
          initial={false}
          animate={{
            opacity: isBallMoving ? 0 : 1,
            scale: isBallMoving ? 0.95 : 1,
            transition: { duration: 0.3 },
          }}
        >
          Start Your Journey with InnovaAI
        </MotionText>

        <MotionFlex
          ref={ballRef}
          left="16px"
          p={2}
          position="absolute"
          transform="translateY(-50%)"
          animate={{
            width: "1.5rem",
            height: "1.5rem",
            x: isInView ? [232, 0, 232] : 232,
            transition: {
              type: "tween",
              duration: 2.4,
              ease: "easeInOut",
              repeat: 1,
              // repeatType: "loop",
              // repeatDelay: 5,
            },
          }}
          onAnimationStart={() => setIsBallMoving(true)}
          onAnimationComplete={() => setIsBallMoving(false)}
          w={6}
          h={6}
          borderRadius="full"
          align="center"
          justify="center"
          bgGradient="linear-gradient(135deg, #DCC0DC 3.75%, #F8A8F9 26.75%, #7A86FA 66.75%, #024EEA 97.25%)"
        >
          <Icon as={FiPlus} w={3} h={3} color="white" />
        </MotionFlex>
      </Flex>
    </VStack>
  );
};

export default HeroSectionAnimate;
