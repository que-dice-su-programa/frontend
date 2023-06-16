import * as React from "react";
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

export const SearchBox = ({ searchField, setSearchField, handleSubmit }) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      padding="16px 8px"
      position="fixed"
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
            placeholder="Qué dicen los partidos sobre..."
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
