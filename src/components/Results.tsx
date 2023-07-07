import * as React from "react";
import { useParams } from 'react-router-dom';

import { Box, SimpleGrid, Skeleton, Link, Flex, Heading, Text } from "@chakra-ui/react";
import { ProposalCard } from "./ProposalCard";
import { shuffle } from "../util"
import axios from "axios";

const normalizeResults = (results) => {
  if (results) {
    // get the keys of an object and return them as an array
    const keys = Object.keys(results);
    // iterate over the keys and return the values
    const values = keys.map((key) => ({
      party: key,
      proposal: results[key],
    }));

    return shuffle(values);
  }
};

const ENDPOINT = "https://qdsp-xizgzxurha-no.a.run.app/api/ask";
const ENDPOINT_DEV = "/api/ask";

export function Results() {
  const { query: rawQuery } = useParams()
  const query = rawQuery.replace(/\+/g, ' ')
  const [results, setResults] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (query) {
      setIsLoading(true);
      axios
        .post(ENDPOINT_DEV, {
          q: query,
        })
        .then(function (response) {
          console.log(response);
          setResults(normalizeResults(response.data));
          setIsLoading(false);
        })
        .catch(function (error) {
          console.log(error);
          setIsLoading(false);
        });
    }
  }, [query]);

  React.useEffect(() => {
    console.log("isLoading", isLoading);
  }, [isLoading]);
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
            <Skeleton maxW="md" height={375} />
            <Skeleton maxW="md" height={375} />
            <Skeleton maxW="md" height={375} />
            <Skeleton maxW="md" height={375} />
          </>
        ) : (
          results.map((content) => (
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
