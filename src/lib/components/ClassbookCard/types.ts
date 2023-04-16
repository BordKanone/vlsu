import type { CardProps } from "@chakra-ui/react";
import type { ReactNode } from "react";

export interface ClassBookCardProps extends CardProps {
  teacher: string;
  name: string;
  complete: number;
  logo?: ReactNode;
}
