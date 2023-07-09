import * as React from "react";
import { useParams } from "react-router-dom";

import {
  Box,
  SimpleGrid,
  Skeleton,
  Link,
  Flex,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { ArrowUpIcon, ChatIcon } from "@chakra-ui/icons";
import { ProposalCard } from "./ProposalCard";
import { shuffle } from "../util";
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

const ENDPOINT =
  process.env.REACT_APP_ENV === "prod"
    ? "https://api.quedicesuprograma.es/api/ask"
    : "/api/ask";

const shareLink = (query) => {
  const path = `/sobre/${encodeURIComponent(query).replace(
    new RegExp("%20", "g"),
    "+"
  )}`;

  const tweetUrl = "https://twitter.com/intent/tweet?";
  var params = new URLSearchParams();
  params.append(
    "text",
    `¿Qué dicen los programas de los principales partidos sobre ${query}? 👇`
  );
  params.append("url", "https://quedicesuprograma.es" + path);

  return tweetUrl + params.toString();
};

export function Results() {
  const { query: rawQuery } = useParams();
  const query = rawQuery.replace(/\+/g, " ");
  const [results, setResults] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (query) {
      setIsLoading(true);
      axios
        .post(ENDPOINT, {
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
      <Flex alignItems="center" justify="space-around" flexWrap="wrap" marginBottom="50px">
        <Heading as="h1" textAlign="center">
          ¿Qué dice su programa sobre{" "}
          <Text as="span" textDecoration="underline">
            {query}
          </Text>
          ?
        </Heading>
        <Link href="/">
          <Button variant="ghost" leftIcon={<ChatIcon />}>
            Hacer otra pregunta
          </Button>
        </Link>
      </Flex>
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
            <Box w="100%" maxHeight={450}>
              <ProposalCard party={content.party} content={content.proposal} />
            </Box>
          ))
        )}
      </SimpleGrid>
      <Flex alignItems="center" justify="space-evenly" flexWrap="wrap">
        <Link href={shareLink(query)} target="_blank">
          <Button variant="ghost" leftIcon={<ArrowUpIcon />}>
            Compartir
          </Button>
        </Link>
      </Flex>
    </Box>
  );
}
