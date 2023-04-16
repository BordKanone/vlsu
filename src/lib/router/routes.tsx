import type { PathRouteProps } from "react-router-dom";

import { Curses } from "../components/Curses";
import { ScreenCard } from "../components/ScreenCard";
import { Works } from "../components/Works";
import { WorkScreen } from "../components/WorkScreen";

export const routes: Array<PathRouteProps> = [
  {
    path: "/",
    element: (
      <ScreenCard>
        <Curses />
      </ScreenCard>
    ),
  },
  {
    path: "/works",
    element: (
      <ScreenCard>
        <Works />
      </ScreenCard>
    ),
  },
  {
    path: "/works/:id",
    element: (
      <ScreenCard>
        <WorkScreen />
      </ScreenCard>
    ),
  },
];

export const privateRoutes: Array<PathRouteProps> = [];
