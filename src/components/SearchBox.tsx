import * as React from "react";
import { useState } from "react";
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
import { shuffle } from "../util";

const proposals = shuffle([
  "la vivienda",
  "la violencia machista",
  "el feminismo",
  "la justicia fiscal",
  "los impuestos",
  "el sistema sanitario",
]);

export const SearchBox = ({
  searchField,
  setSearchField,
  handleSubmit,
  autoFocus,
}) => {
  const [proposalIndex, setProposalIndex] = useState(0);
  const [submitted, setSubmitted] = useState(null);
  const proposal = proposals[proposalIndex];
  const isInvalid = !searchField || searchField.length < 3;

  setTimeout(() => {
    proposalIndex < proposals.length - 1
      ? setProposalIndex(proposalIndex + 1)
      : setProposalIndex(0);
  }, 4000);

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      padding="16px 0"
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
            autoFocus={autoFocus}
            placeholder={proposal}
            height={55}
            value={searchField}
            onChange={(e) => setSearchField(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setSubmitted(true);
                !isInvalid && handleSubmit(searchField);
              }
            }}
            isInvalid={submitted && isInvalid}
          />
          <InputRightElement width="4.5rem" margin="auto" bottom="0">
            <IconButton
              aria-label="Buscar en los programas electorales"
              h="1.75rem"
              size="sm"
              onClick={() => {
                setSubmitted(true);
                !isInvalid && handleSubmit(searchField);
              }}
              icon={<ArrowForwardIcon />}
            />
          </InputRightElement>
        </InputGroup>
        {submitted && isInvalid && (
          <Text fontSize="sm" marginTop={3}>
            Tu pregunta es demasiado corta, intenta algo con al menos 3
            caracteres 🙂
          </Text>
        )}
      </Flex>
    </Flex>
  );
};
