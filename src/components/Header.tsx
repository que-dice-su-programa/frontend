import * as React from "react";
import { Heading, Link, useMediaQuery } from "@chakra-ui/react";

export const Header = ({ children }) => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  return (
    <Heading
      as="h1"
      fontSize={isLargerThan800 ? 48 : "9vw"}
      textAlign="center"
      margin="45px auto"
    >
      <Link href="/">{ children }</Link>
    </Heading>
  );
};
