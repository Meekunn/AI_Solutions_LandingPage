import { defineRecipe } from "@chakra-ui/react";
import { shake } from "../animation";

const linkRecipe = defineRecipe({
  base: {
    fontWeight: "normal",
    color: "white",
  },
  variants: {
    variant: {
      navlink: {
        fontSize: "1rem",
        letterSpacing: "0",
        transition: "all 0.2s ease-in-out",
        _hover: {
          animation: `${shake} 0.5s ease-in-out`,
          background: "linear-gradient(90deg,  #dcc0dc, #f8a8f9, #7a86fa, #024eea)",
          bgClip: "text",
          textFillColor: "transparent",
        },
      },
      activeNavlink: {
        border: "none",
        background: "linear-gradient(90deg,#dcc0dc, #f8a8f9, #7a86fa, #024eea)",
        bgClip: "text",
        color: "transparent",
        fontSize: "1rem",
        letterSpacing: "0",
        _hover: {
          animation: `${shake} 0.5s ease-in-out`,
          background: "linear-gradient(90deg,  #dcc0dc, #f8a8f9, #7a86fa, #024eea)",
          bgClip: "text",
          textFillColor: "transparent",
        },
      }
    },
  },
})

export default linkRecipe