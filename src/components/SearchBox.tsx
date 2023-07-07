import * as React from "react";
import { useState } from 'react';
import {
  Flex,
  Text,
  Input,
  Link,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const shuffle = (array: string[]) => {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

const proposals = shuffle([
  "la vivienda",
  "la violencia machista",
  "el feminismo",
  "la justicia fiscal",
  "los impuestos",
  "el sistema sanitario"
])

export const SearchBox = ({ searchField, setSearchField, handleSubmit }) => {
  const [proposalIndex, setProposalIndex] = useState(0);
  const proposal = proposals[proposalIndex]

  setTimeout(() => {
    proposalIndex < proposals.length - 1 ? setProposalIndex(proposalIndex+1) : setProposalIndex(0)
  }, 4000)

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      padding="16px 8px"
      bottom="0"
      left="0"
      backgroundColor="white"
      width="100%"
    >
      <Flex
        width="100%"
        maxWidth={540}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <InputGroup>
          <Input
            placeholder={proposal}
            height={55}
            value={searchField}
            onChange={(e) => setSearchField(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit(searchField);
              }
            }}
          />
          <InputRightElement width="4.5rem" margin="auto" bottom="0">
            <IconButton
              aria-label="Buscar"
              h="1.75rem"
              size="sm"
              onClick={() => handleSubmit(searchField)}
              icon={<ArrowForwardIcon />}
            />
          </InputRightElement>
        </InputGroup>
        <Text fontSize="12px" lineHeight="10" color="blackAlpha.600">
          Si quieres saber más sobre este proyecto,{" "}
          <Link href="/about-us">haz click aquí</Link>
        </Text>
      </Flex>
    </Flex>
  );
};
