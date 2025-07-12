import { defineRecipe } from "@chakra-ui/react";
import { jello } from "../animation";

const buttonRecipe = defineRecipe({
  base: {
    fontWeight: "medium",
    color: "white",
  },
  variants: {
    variant: {
      borderGradient: {
        borderRadius: "100px",
        bg: "rgba(33, 33, 43, 0.6)",
        borderWidth: "2px",
        borderStyle: "solid",
        borderImageSlice: 1,
        borderImageSource:
          "linear-gradient(90deg,#DCC0DC,#F8A8F9,#7A86FA,#024EEA)",
      },

      customGhost: {
        color: "white",
        background: "transparent",
        border: "1px solid transparent",
        borderRadius: "100px",
        outline: "none",
        transition: "all 0.3s ease-in-out",
        padding: "12px 24px",
        fontWeight: "semibold",
        letterSpacing: "0px",
        _hover: {
          background:
            "linear-gradient(90deg, #dcc0dc, #f8a8f9, #7a86fa, #024eea)",
          border: "1px solid white",
        },
      },
      gradientBg: {
        background:
          "linear-gradient(135deg, #DCC0DC 3.75%, #F8A8F9 26.75%, #7A86FA 66.75%, #024EEA 97.25%)",
        borderRadius: "100px",
        position: "relative",
        color: "white",
        border: "none",
        borderColor: "transparent",
        zIndex: 0,
        fontWeight: "bold",
        fontSize: "1rem",
        letterSpacing: "0px",
        padding: 6,
        transition: "all 0.3s ease-in-out",
        // boxShadow:
        //   "0px 10px 10px rgb(210, 187, 253) inset,  0px 5px 10px rgba(5, 5, 5, 0.212),  0px -10px 10px rgb(124, 54, 255) inset",
        _before: {
          content: '""',
          position: "absolute",
          top: "1.5px",
          right: "1.5px",
          bottom: "1.5px",
          left: "1.5px",
          borderRadius: "98.5px",
          // boxShadow:
          //   "0px 32px 24px -16px rgba(0, 0, 0, 0.4), inset 0px 0px 8px 0px rgba(248, 248, 248, 0.25)",
          backdropFilter: "blur(12px) ",
          zIndex: -1,
          background:
            "linear-gradient(135deg, #DCC0DC 3.75%, #F8A8F9 26.75%, #7A86FA 66.75%,#024eea 97.25%)",
          transition: "all 0.3s ease-in-out",
        },
        _after: {
          position: "relative",
          zIndex: 1,
          transition: "all 0.3s ease-in-out",
        },
        _hover: {
          animation: `${jello} 0.9s both`,
          // boxShadow:
          //   "4px 4px 6px 0 rgba(0,0,0,.5), -4px -4px 6px 0 rgba(0, 0, 0, 0.5),     inset -4px -4px 6px 0 rgba(0,0,0,.2),    inset 4px 4px 6px 0 rgba(0, 0, 0, .4)",
        },
      },
    },
  },
});

export default buttonRecipe;
