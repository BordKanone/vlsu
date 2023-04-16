import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import * as React from "react";
import "./lib/styles/theme/styles.css";
import ReactDOM from "react-dom/client";

// fonts
import "@fontsource/plus-jakarta-sans/latin.css";

import App from "./App";
import { theme } from "./lib/styles/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode="dark" />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
