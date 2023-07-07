import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Home } from "./components/Home";
import { Results } from "./components/Results";
import { AboutUs } from "./components/AboutUs";
import "./styles.css";
import "@fontsource/bebas-neue";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sobre/:query",
    element: <Results />,
  },
  {
    path: "/quienes-somos",
    element: <AboutUs />,
  },
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'Bebas Neue'`,
    body: `sans-serif`,
  },
})

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
