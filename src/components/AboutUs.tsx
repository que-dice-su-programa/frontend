import * as React from "react";

import { css } from "@emotion/react";

import { Box, Flex, Link } from "@chakra-ui/react";
import { Header } from "./Header";
import { SearchBox } from "./SearchBox";

export function AboutUs() {
  return (
    <Box padding={12} margin="auto" css={css``}>
      <Header />

      <Flex
        w="100%"
        height="80vh"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        This is a project brought to you by
        <Link href="https://twitter.com/unai">@unai</Link>
        <Link href="https://twitter.com/nestor">@nestor</Link>
        <Link href="https://twitter.com/jose">@jose</Link>
      </Flex>
    </Box>
  );
}
