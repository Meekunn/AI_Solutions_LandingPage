import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { colors } from "./colors";
import headingRecipe from "./recipes/headingRecipe";

const config = defineConfig({
  globalCss: {
    "html, body": {
      margin: 0,
      padding: 0,
      fontFamily: "'Be Vietnam Pro', sans-serif",
      bg: colors.primary.value,
      color: colors.textColor.value,
    },
  },
  theme: {
    tokens: {
      colors: colors,
      fonts: {
        body: { value: "Be Vietnam Pro, sans-serif" },
        heading: { value: "Be Vietnam Pro, sans-serif" },
      },
    },
    recipes: { heading: headingRecipe },
  }
})

const system = createSystem(defaultConfig, config);
export default system;