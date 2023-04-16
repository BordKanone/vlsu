import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Text,
} from "@chakra-ui/react";
import type { FC } from "react";

import type { ILessonCard } from "./types";

export const WorkCard: FC<ILessonCard> = (props) => {
  const { name, description, teacher, title, tasks, logo } = props;
  return (
    <Card variant="list">
      <CardHeader padding="8px" display="flex" w="100%">
        <Flex h="48px" w="48px">
          {logo}
        </Flex>
        <Flex
          justifyContent="center"
          w="100%"
          flexDirection="column"
          gap="4px"
          ml="8px"
        >
          <Text pb="5px" textStyle="h4">
            {name}
          </Text>
        </Flex>
      </CardHeader>
      <CardBody padding="8px" display="flex" flexDirection="column">
        <Text textStyle="h3" color="typographyPrimary" mb="8px">
          {title}
        </Text>
        <Text textStyle="body16medium" color="typographySecondary">
          {description}
        </Text>
      </CardBody>
      <CardFooter padding="8px" display="flex" justifyContent="space-between">
        <Text
          textStyle="body16regular"
          color="typographySecondary"
        >{`Выполнено заданий: ${
          tasks.filter((task) => task.status === "completed").length
        } / ${tasks.length} `}</Text>

        <Text textStyle="body16medium">{`Преподаватель: ${teacher}`}</Text>
      </CardFooter>
    </Card>
  );
};
