import { extendTheme } from "@chakra-ui/react";

import ClassBookCardStyles from "../../components/ClassbookCard/styles";

import breakpoints from "./breakpoints";
import foundations from "./foundations";
import semantic from "./semantic";

export const theme = extendTheme({
  ...foundations,
  semanticTokens: semantic,
  components: {
    Card: ClassBookCardStyles,
  },
  breakpoints,
  fonts: {
    heading: "Marmelad, sans-serif",
    body: "Marmelad, sans-serif",
  },
  config: {
    initialColorMode: "dark",
  },
  fontSizes: {
    xs: "10px",
    sm: "12px",
    md: "14px",
    lg: "16px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "32px",
    xxl: "36px",
  },
  fontWeights: {
    regular: 400,
    medium: 500,
  },
});
