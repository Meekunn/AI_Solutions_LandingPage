import { Image } from "@chakra-ui/react";
// import { scroll } from "@/theme/animation";
import { useState } from "react";
import { motion, useAnimationFrame } from "framer-motion";

interface SliderProps {
  images: string[];
  speed?: number;
}

// const Slider: React.FC<SliderProps> = ({
//   images,
//   slideWidth = 64,
//   gap = 32,
//   duration = 5,
//   altTexts = [],
// }) => {
//   const [slides, setSlides] = useState<string[]>([]);
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     // Duplicate images to create seamless loop - need at least 3 sets
//     setSlides([...images, ...images, ...images, ...images, ...images]);
//   }, [images]);

//   // Calculate the translateX value for one complete set
//   const calculateTranslateX = () => {
//     const slideCount = images.length;
//     const totalSlideWidth = slideWidth + gap;
//     // Move exactly one set of slides
//     const translateX = -(slideCount * totalSlideWidth);

//     console.log("Slide count:", slideCount);
//     console.log("Total slide width:", totalSlideWidth);
//     console.log("TranslateX:", translateX);
//     return `${translateX}px`;
//   };

//   const animationKeyframes = `
//     @keyframes slide {
//       0% { transform: translateX(0); }
//       100% { transform: translateX(${calculateTranslateX()}); }
//     }
//   `;

//   return (
//     <Box
//       position="relative"
//       w="80%"
//       overflow="hidden"
//       maskImage={
//         "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)"
//       }
//     >
//       <style>{animationKeyframes}</style>
//       <HStack
//         ref={containerRef}
//         gap={`${gap}px`}
//         animation={`slide ${duration}s linear infinite`}
//       >
//         {slides.map((image, index) => (
//           <Image
//             key={`${image}-${index}`}
//             height={`${slideWidth}px`}
//             src={image}
//             alt={altTexts[index % altTexts.length] || `Slide ${index + 1}`}
//           />
//         ))}
//       </HStack>
//     </Box>
//   );
// };

// export default Slider;

const Slider = ({ images, speed = 0.05 }: SliderProps) => {
  const cardWidth = 167;
  const gap = 10;
  const totalWidth = images.length * (cardWidth + gap) + 100;

  const [offsetX, setOffsetX] = useState(0);

  useAnimationFrame((_, delta) => {
    setOffsetX((prev) => prev - delta * speed);
  });

  const translateX = offsetX % totalWidth;

  //   const animationKeyframes = `
  //     @keyframes slide {
  //       0% { transform: translateX(0); }
  //       100% { transform: translateX(${calculateTranslateX()}); }
  //     }
  //   `;

  return (
    // <Stack
    //   className="inner"
    //   position="relative"
    //   w="full"
    //   overflow="hidden"
    //   h="64px"
    // >
    //   <Flex position="absolute">
    //     <Flex animation={`${scroll} ${speed}s linear infinite`}>
    //       <For each={images}>
    //         {(image, index) => (
    //           <Image
    //             key={index}
    //             height="64px"
    //             src={image}
    //             css={{
    //               "&:last-of-type": {
    //                 paddingLeft: 0,
    //               },
    //             }}
    //             // alt={altTexts[index % altTexts.length] || `Slide ${index + 1}`}
    //           />
    //         )}
    //       </For>
    //     </Flex>
    //     <Flex animation={`${scroll} ${speed}s linear infinite`}>
    //       <For each={images}>
    //         {(image, index) => (
    //           <Image
    //             key={index}
    //             height="64px"
    //             src={image}
    //             css={{
    //               "&:last-of-type": {
    //                 paddingLeft: 0,
    //               },
    //             }}
    //             // alt={altTexts[index % altTexts.length] || `Slide ${index + 1}`}
    //           />
    //         )}
    //       </For>
    //     </Flex>
    //     <Flex animation={`${scroll} ${speed}s linear infinite`}>
    //       <For each={images}>
    //         {(image, index) => (
    //           <Image
    //             key={index}
    //             height="64px"
    //             src={image}
    //             css={{
    //               "&:last-of-type": {
    //                 paddingLeft: 0,
    //               },
    //             }}
    //             // alt={altTexts[index % altTexts.length] || `Slide ${index + 1}`}
    //           />
    //         )}
    //       </For>
    //     </Flex>
    //   </Flex>
    // </Stack>
    <div style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
      <motion.div
        style={{
          display: "flex",
          gap: `${gap}px`,
          transform: `translateX(${translateX}px)`,
        }}
      >
        {[...images, ...images].map((image, index) => (
          <Image key={index} height="64px" src={image} />
        ))}
      </motion.div>
    </div>
  );
};

export default Slider;
