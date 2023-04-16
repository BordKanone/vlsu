import { Box, Flex } from "@chakra-ui/react";
import type { FC, ReactNode } from "react"; // eslint-disable-next-line import/no-extraneous-dependencies
// eslint-disable-next-line import/no-extraneous-dependencies

export const ScreenCard: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Flex
      bg="transparent"
      justifyContent="center"
      alignItems="center"
      padding="50px"
      height="82vh"
      width="100%"
      overflow="hidden"
    >
      <Box
        padding="24px"
        border="1px solid black"
        borderRadius="12px"
        bg="screenCard"
        height="72vh"
        width="100%"
        overflow="hidden"
      >
        {children}
      </Box>
    </Flex>
  );
};
