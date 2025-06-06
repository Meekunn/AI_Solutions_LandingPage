import { defineRecipe } from "@chakra-ui/react";

const inputRecipe = defineRecipe({
  variants: {
    variant: {
      roundInput: {
        borderRadius: "100px",
        background: "rgba(43, 43, 46, 0.2)",
        boxShadow: "0px 32px 24px -16px rgba(0, 0, 0, 0.4), 0px 0px 8px 0px rgba(248, 248, 248, 0.25) inset",
        backdropFilter: "blur(12px)",
        padding: 6,
        _placeholder: {
          color: "colors.textColor.value",
          fontSize: "1rem",
          letterSpacing: "0",
          fontWeight: "normal",
        },
        _focus: {
          boxShadow: "0px 32px 24px -16px rgba(0, 0, 0, 0.4), 0px 0px 8px 0px rgba(248, 248, 248, 0.6) inset",
        },
      },
    },
  },
});

export default inputRecipe;
