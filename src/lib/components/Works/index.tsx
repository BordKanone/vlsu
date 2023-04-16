import { Box, Grid, GridItem } from "@chakra-ui/react";
import type { FC } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useNavigate } from "react-router-dom";
import { animated, useTrail } from "react-spring";

import type { ClassBookCardProps } from "../ClassbookCard/types";
import { WorkCard } from "../WorkCard";

export const Works: FC = () => {
  const navigate = useNavigate();
  const cards: ClassBookCardProps[] = [
    {
      teacher: "Озерова",
      name: "АИСПД",
      complete: 12,
    },
    {
      teacher: "Озерова",
      name: "АИСПД",
      complete: 12,
    },
    {
      teacher: "Озерова",
      name: "АИСПД",
      complete: 12,
    },
    {
      teacher: "Озерова",
      name: "АИСПД",
      complete: 12,
    },
    {
      teacher: "Озерова",
      name: "АИСПД",
      complete: 12,
    },
    {
      teacher: "Озерова",
      name: "АИСПД",
      complete: 12,
    },
    {
      teacher: "Озерова",
      name: "АИСПД",
      complete: 12,
    },
    {
      teacher: "Озерова",
      name: "АИСПД",
      complete: 12,
    },
    {
      teacher: "Озерова",
      name: "АИСПД",
      complete: 12,
    },
    {
      teacher: "Озерова",
      name: "АИСПД",
      complete: 12,
    },
    {
      teacher: "Озерова",
      name: "АИСПД",
      complete: 12,
    },
    {
      teacher: "Озерова",
      name: "АИСПД",
      complete: 12,
    },
  ];

  const trail = useTrail(cards.length, {
    from: { opacity: 0, transform: "translate3d(0,-40px,0)" },
    to: { opacity: 1, transform: "translate3d(0,0px,0)" },
    delay: 500,
    config: {
      duration: 300,
    },
  });
  return (
    <Grid
      width="auto"
      gridTemplateColumns="repeat(4, 1fr)"
      columnGap="24px"
      rowGap="24px"
      padding="16px 16px 64px 16px"
      height="72vh"
      overflowY="scroll"
      scrollBehavior="smooth"
      sx={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {trail.map((style, index) => {
        const card = cards[index];
        return (
          <Box key={card.name}>
            <animated.div style={style}>
              <GridItem onClick={() => navigate("/works/1")}>
                <WorkCard
                  description="asdasd"
                  {...card}
                  tasks={[
                    {
                      code: "asd",
                      title: "dasdasd",
                      description: "sadasda",
                      status: "progress",
                    },
                  ]}
                />
              </GridItem>
            </animated.div>
          </Box>
        );
      })}
    </Grid>
  );
};
