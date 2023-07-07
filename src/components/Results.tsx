import * as React from "react";

import { css } from "@emotion/react";

import { Box, SimpleGrid, Skeleton, Link, Flex, Heading, Text } from "@chakra-ui/react";
import { SearchBox } from "./SearchBox";
import { ProposalCard } from "./ProposalCard";

const normalizeResults = (results) => {
  if (results) {
    // get the keys of an object and return them as an array
    const keys = Object.keys(results);
    // iterate over the keys and return the values
    const values = keys.map((key) => ({
      party: key,
      proposal: results[key],
    }));
    return values;
  }
};

export function Results({
  query,
  searchField,
  setSearchField,
  handleSubmit,
  results,
  isLoading,
}) {
  return (
    <Box padding={12} margin="auto" maxWidth={1705}>
      <Heading as="h1" textAlign="center" marginBottom="50px">
        ¿Qué dice su programa sobre <Text as="span" textDecoration="underline">{query}</Text>?
      </Heading>
      <SimpleGrid
        minChildWidth="300px"
        spacing="40px"
        marginTop="24px"
        paddingBottom="150px"
      >
        {isLoading ? (
          <>
            <Box>
              <Skeleton w={375} height={375} />
            </Box>
            <Box>
              <Skeleton w={375} height={375} />
            </Box>
            <Box>
              <Skeleton w={375} height={375} />
            </Box>
            <Box>
              <Skeleton w={375} height={375} />
            </Box>
          </>
        ) : (
          normalizeResults(results).map((content) => (
            <Box w="100%">
              <ProposalCard party={content.party} content={content.proposal} />
            </Box>
          ))
        )}

        {/* <Box w="100%">
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
        </Box> */}
      </SimpleGrid>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Link href="/">Hacer otra búsqueda</Link>
      </Flex>
    </Box>
  );
}
