import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Text,
} from "@chakra-ui/react";
import type { FC } from "react";

import type { ClassBookCardProps } from "./types";

export const ClassbookCard: FC<ClassBookCardProps> = (props) => {
  const { name, teacher, complete, logo, variant } = props;
  return (
    <Card variant={variant}>
      <CardHeader>{name}</CardHeader>
      <Flex justifyContent="center" alignItems="center">
        {logo}
      </Flex>
      <CardBody>
        <Flex>
          <Text>Преподаватель: {teacher}</Text>
        </Flex>
      </CardBody>
      <CardFooter>Выполнено работ: {complete}</CardFooter>
    </Card>
  );
};
