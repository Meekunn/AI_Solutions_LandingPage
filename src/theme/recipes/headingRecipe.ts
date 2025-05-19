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
      },
      h2: {
        fontSize: "6xl",
        letterSpacing: "-1.5px",
      },
    },
  }
})

export default headingRecipe
