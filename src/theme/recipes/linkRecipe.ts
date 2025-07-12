import { defineRecipe } from "@chakra-ui/react";
import { shake } from "../animation";
import { colors } from "../colors";

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
          background:
            "linear-gradient(135deg, #DCC0DC 3.75%, #F8A8F9 26.75%, #7A86FA 66.75%, #024EEA 97.25%)",
          bgClip: "text",
          textFillColor: "transparent",
        },
      },
      activeNavlink: {
        border: "none",
        color: "#F8A8F9",
        // background: "linear-gradient(135deg, #DCC0DC 3.75%, #F8A8F9 26.75%, #7A86FA 66.75%, #024EEA 97.25%)",
        // bgClip: "text",
        // color: "transparent",
        fontSize: "1rem",
        letterSpacing: "0",
        _hover: {
          animation: `${shake} 0.5s ease-in-out`,
          background:
            "linear-gradient(135deg, #DCC0DC 3.75%, #F8A8F9 26.75%, #7A86FA 66.75%, #024EEA 97.25%)",
          bgClip: "text",
          textFillColor: "transparent",
        },
      },
      footerNavlink: {
        fontSize: "1rem",
        letterSpacing: "0",
        transition: "all 0.2s ease-in-out",
        color: colors.textColor.value,
        _hover: {
          animation: `${shake} 0.5s ease-in-out`,
          background:
            "linear-gradient(135deg, #DCC0DC 3.75%, #F8A8F9 26.75%, #7A86FA 66.75%, #024EEA 97.25%)",
          bgClip: "text",
          textFillColor: "transparent",
        },
      },
      activeFooterNavlink: {
        border: "none",
        color: "#F8A8F9",
        // background: "linear-gradient(135deg, #DCC0DC 3.75%, #F8A8F9 26.75%, #7A86FA 66.75%, #024EEA 97.25%)",
        // bgClip: "text",
        // color: "transparent",
        fontSize: "1rem",
        letterSpacing: "0",
        _hover: {
          animation: `${shake} 0.5s ease-in-out`,
          background:
            "linear-gradient(135deg, #DCC0DC 3.75%, #F8A8F9 26.75%, #7A86FA 66.75%, #024EEA 97.25%)",
          bgClip: "text",
          textFillColor: "transparent",
        },
      },
    },
  },
});

export default linkRecipe;
