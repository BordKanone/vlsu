import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

import Footer from "./Footer";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Box
        width="100%"
        height="80vh"
        mt="12vh"
        as="main"
        position="relative"
        overflow="hidden"
      >
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
