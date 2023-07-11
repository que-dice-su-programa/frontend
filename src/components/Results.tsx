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

  return (
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      padding={12}
      margin="auto"
      maxWidth={1705}
      minHeight="100vh"
    >
      <Heading as="h1" textAlign="center" marginBottom="50px">
        ¿Qué dice su programa sobre{" "}
        <Text as="span" textDecoration="underline">
          {query}
        </Text>
        ?
      </Heading>
      {isLoading && (
        <Text textAlign="center">
          Los 🤖 están recopilando información, a veces tardan unos segundos...
        </Text>
      )}
      <SimpleGrid minChildWidth="300px" spacing="40px" marginY="24px">
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
      <Flex
        alignItems="center"
        flexDirection="column"
        width="100%"
        justifyContent="space-between"
      >
        <Text fontSize="sm" textAlign="center" maxWidth={800} marginBottom={12}>
          ¿No encuentras lo que buscas? Puedes probar a reformular tu pregunta.
          El lenguaje más natural suele funcionar mejor, por ejemplo poner "el
          paro" en lugar de solamente "paro".
        </Text>
        <Flex
          alignItems="center"
          justify="space-evenly"
          flexWrap="wrap"
          flexDirection="row"
          width="100%"
        >
          <Link href={shareLink(query)} target="_blank">
            <Button variant="ghost" leftIcon={<ArrowUpIcon />} width={210}>
              Compartir
            </Button>
          </Link>
          <Link href="/">
            <Button variant="ghost" leftIcon={<ChatIcon />} width={210}>
              Hacer otra pregunta
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
