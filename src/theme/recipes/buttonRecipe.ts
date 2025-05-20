import { defineRecipe } from "@chakra-ui/react";

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
          background: "linear-gradient(90deg, #dcc0dc, #f8a8f9, #7a86fa, #024eea)",
          border: "1px solid white",
        },
      },

    },
  },
})

export default buttonRecipe;