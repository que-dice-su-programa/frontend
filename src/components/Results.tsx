import * as React from "react";

import { css } from "@emotion/react";

import { Box, SimpleGrid } from "@chakra-ui/react";
import { Header } from "./Header";
import { SearchBox } from "./SearchBox";
import { ProposalCard } from "./ProposalCard";

export function Results({ query, searchField, setSearchField, handleSubmit }) {
  return (
    <Box padding={12} margin="auto" maxWidth={1705}>
      <Header />
      <SimpleGrid
        minChildWidth="300px"
        spacing="40px"
        marginTop="24px"
        paddingBottom="150px"
      >
        <Box w="100%">
          <ProposalCard />
        </Box>
        <Box w="100%">
          <ProposalCard />
        </Box>
        <Box w="100%">
          <ProposalCard />
        </Box>
        <Box w="100%">
          <ProposalCard />
        </Box>
        <Box w="100%">
          <ProposalCard />
        </Box>
        <Box w="100%">
          <ProposalCard />
        </Box>
        <Box w="100%">
          <ProposalCard />
        </Box>
        <Box w="100%">
          <ProposalCard />
        </Box>
      </SimpleGrid>
      <SearchBox
        searchField={searchField}
        setSearchField={setSearchField}
        handleSubmit={handleSubmit}
      />
    </Box>
  );
}
