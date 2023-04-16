import type { ChakraTheme } from "@chakra-ui/theme/dist/theme.types";

const semantic = {
  colors: {
    headerPrimary: {
      _light: "gray.200",
      _dark: "gray.900",
    },
    typographyPrimary: {
      _light: "gray.900",
      _dark: "gray.200",
    },
    typographySecondary: {
      _light: "gray.700",
      _dark: "gray.400",
    },
    bodyPrimary: {
      _light: "gray.100",
      _dark: "gray.800",
    },
    borderPrimaryHover: {
      _light: "gray.700",
      _dark: "gray.100",
    },
    cardBackground: {
      _light: "gray.300",
      _dark: "whiteAlpha.200",
    },
    cardBackgroundHover: {
      _light: "gray.400",
      _dark: "whiteAlpha.50",
    },
    screenCard: {
      _light: "gray.200",
      _dark: "gray.900",
    },
  },
} as ChakraTheme["semanticTokens"];

export default semantic;
