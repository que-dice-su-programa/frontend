import * as React from "react";
import { Flex, SimpleGrid, Heading, Switch, Link } from "@chakra-ui/react";

export const Header = () => (
    <Heading as="h1" fontSize={48} textAlign="center" margin="50px auto">
      <Link href="/">¿Qué dice su programa?</Link>
    </Heading>
);
