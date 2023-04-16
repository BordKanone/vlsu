import { Flex } from "@chakra-ui/react";
import type { FC } from "react";
import { useNavigate } from "react-router-dom";

export const WorkScreen: FC = () => {
  const navigate = useNavigate();
  return (
    <Flex
      onClick={() => {
        navigate("/");
      }}
      w="100%"
      justifyContent="center"
      alignItems="center"
      bg="green"
      width="100%"
      height="100%"
    >
      Work
    </Flex>
  );
};
