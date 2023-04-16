import { Box } from "@chakra-ui/react";
import { Route, Routes, useLocation } from "react-router-dom";
import { animated, useTransition } from "react-spring";

import RequireAuth from "../components/auth/RequireAuth";
import Page404 from "../pages/404";

import { privateRoutes, routes } from "./routes";

export const Routings = () => {
  const location = useLocation();

  const transitions = useTransition(location, {
    from: {
      opacity: 0,
      width: "100%",
      transform: `translateX(200%)`,
    },
    enter: {
      opacity: 1,
      transform: "translateX(0%)",
    },
    leave: {
      opacity: 0,
      transform: `translateX(-200%)`,
    },
    config: {
      duration: 500,
      mass: 10,
      tension: 170,
      friction: 26,
    },
  });

  return (
    <>
      {transitions((style) => (
        <Box
          position="absolute"
          width="100%"
          height="100%"
          transition="transform 3s ease-in-out"
        >
          <animated.div style={style}>
            <Routes>
              {routes.map((routeProps) => (
                <Route {...routeProps} key={routeProps.path as string} />
              ))}
              {privateRoutes.map(({ element, ...privateRouteProps }) => (
                <Route
                  element={
                    <RequireAuth
                      redirectTo={`/login?redirectTo=${privateRouteProps.path}`}
                    >
                      {element}
                    </RequireAuth>
                  }
                  {...privateRouteProps}
                  key={`privateRoute-${privateRouteProps.path}`}
                />
              ))}
              <Route path="*" element={<Page404 />} />
            </Routes>
          </animated.div>
        </Box>
      ))}
    </>
  );
};

// import { useContext } from "react";
// import { __RouterContext, Route } from "react-router-dom";
// import { useTransition } from "react-spring";
//
// import RequireAuth from "lib/components/auth/RequireAuth";
// import Page404 from "lib/pages/404";
//
// import { privateRoutes, routes } from "./routes";
//
// function useRouter() {
//   return useContext(__RouterContext);
// }
//
// const Routings = () => {
//   const { location } = useRouter();
//   const transitions = useTransition(location, (location) => location.key, {
//     from: {
//       opacity: 0,
//       position: "absolute",
//       width: "100%",
//       transform: `translate3d(100%, 0, 0)`,
//     },
//     enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
//     leave: {
//       opacity: 0,
//       transform: `translate3d(-50%, 0, 0)`,
//     },
//   });
//
//   return (
//     <Routes>
//       {routes.map((routeProps) => (
//         <Route {...routeProps} key={routeProps.path as string} />
//       ))}
//       {privateRoutes.map(({ element, ...privateRouteProps }) => (
//         <Route
//           element={
//             <RequireAuth
//               redirectTo={`/login?redirectTo=${privateRouteProps.path}`}
//             >
//               {element}
//             </RequireAuth>
//           }
//           {...privateRouteProps}
//           key={`privateRoute-${privateRouteProps.path}`}
//         />
//       ))}
//       <Route path="*" element={<Page404 />} />
//     </Routes>
//   );
// };
//
// export default Routings;
