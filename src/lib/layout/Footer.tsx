import { Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      as="footer"
      position="fixed"
      height="10vh"
      bottom={0}
      width="full"
      align="center"
      alignSelf="flex-end"
      justifyContent="center"
    >
      <Text fontSize="xs">{new Date().getFullYear()} - </Text>
    </Flex>
  );
};

export default Footer;
