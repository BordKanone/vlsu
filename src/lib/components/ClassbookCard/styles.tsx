// eslint-disable-next-line import/no-extraneous-dependencies
import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  cardAnatomy.keys
);

const ClassBookCardStyles = defineMultiStyleConfig({
  baseStyle: {
    container: {
      padding: "12px",
      width: "100%",
      maxWidth: "320px",
      border: "1px solid black.100",
      cursor: "pointer",
      transition: "all 0.4s ease",
      bg: "cardBackground",
      _hover: {
        bg: "cardBackgroundHover",
        borderColor: "borderPrimaryHover",
      },
    },
  },
  variants: {
    list: {
      container: {
        w: "100%",
        maxWidth: "600px",
      },
    },
  },
});

export default ClassBookCardStyles;
