import type { CardProps } from "@chakra-ui/react";
import type { ReactNode } from "react";

import type { Task } from "../../types";

export interface ILessonCard extends CardProps {
  name: string;
  teacher: string;
  description: string;
  tasks: Task[];
  logo?: ReactNode;
}
