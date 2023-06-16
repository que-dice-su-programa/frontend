import * as React from "react";
import { Flex, Heading, Switch, Link } from "@chakra-ui/react";

export const Header = () => (
  <Flex
    className="header"
    padding="16px 0"
    alignContent="center"
    justifyContent="space-between"
  >
    <Heading as="h1" fontSize={22}>
      <Link href="/">QUEDICESUPROGRAMA</Link>
    </Heading>
    {/* <Tooltip label="Ocultar los nombres de los partidos"> */}
    <Switch alignSelf="center" />
    {/* </Tooltip> */}
  </Flex>
);
