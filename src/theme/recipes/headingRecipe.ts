import { defineRecipe } from "@chakra-ui/react";
import { colors } from "../colors";

const headingRecipe = defineRecipe({
  base: {
    fontWeight: "medium",
    color: colors.headingColor.value,
  },
  variants: {
    size: {
      h1: {
        fontSize: "4.25rem",
        letterSpacing: "-2.5px",
        lineHeight: "115%",
      },
      h2: {
        fontSize: "6xl",
        letterSpacing: "-1.5px",
        lineHeight: "120%",
      },
      h3: {
        fontSize: "2xl",
        letterSpacing: "-0.5px",
        lineHeight: "140%",
      },
    },
  },
});

export default headingRecipe;
