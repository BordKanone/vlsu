import { Flex, Text } from "@chakra-ui/react";

// import VLSULogo from "../../../assets/vlsu.png";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <Flex
      position="fixed"
      left={0}
      top={0}
      zIndex={9999}
      as="header"
      height="10vh"
      width="full"
      align="center"
      alignSelf="flex-start"
      justifyContent="center"
      gridGap={2}
      bg="headerPrimary"
      p="8px"
    >
      <Flex
        w="100%"
        p="4px"
        borderRadius={5}
        marginLeft="auto"
        justifyContent="space-between"
      >
        <Flex alignItems="center">
          {/* <Avatar src={VLSULogo} w="56px" h="56px" /> */}
          <Flex ml="12px" flexDirection="column">
            <Text textStyle="h2" color="typographyPrimary">
              ВлГУ
            </Text>
            <Text textStyle="body14regular" color="typographySecondary">
              Лабораторные работы
            </Text>
          </Flex>
        </Flex>
        <ThemeToggle />
      </Flex>
    </Flex>
  );
};

export default Header;
