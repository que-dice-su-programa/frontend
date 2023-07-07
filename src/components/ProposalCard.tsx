import * as React from "react";
import {
  Flex,
  Avatar,
  Box,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Button,
} from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";

const politicalSpectre = {
  pp: "Centro-derecha",
  psoe: "Centro-izquierda",
  sumar: "Izquierda",
  vox: "Derecha",
  bildu: "Izquierda",
  pnv: "Centro-derecha",
  erc: "Izquierda",
  junts: "Derecha",
  upn: "Centro-derecha",
  bng: "Izquierda",
  cc: "Centro",
};

const colors = {
  pp: "#16589d",
  psoe: "#f31a11",
  sumar: "#e51c55",
  vox: "#66bc2a",
};

export const ProposalCard = ({ party, content }) => {
  const logoPath = `/logos/${party}.png`;
  return (
    <Card maxW="md" height={375} key={party}>
      <Box height={2} backgroundColor={colors[party]} />
      <CardHeader>
        <Flex flex="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar name={party} src={logoPath} objectFit="contain" />
            <Box>
              <Heading size="sm">{party.toUpperCase()}</Heading>
              <Text>{politicalSpectre[party]}</Text>
            </Box>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>{content.result}</Text>
      </CardBody>

      <CardFooter
        justify="space-between"
        flexWrap="wrap"
        sx={{
          "& > button": {
            minW: "136px",
          },
        }}
      >
        <Button flex="1" variant="ghost" leftIcon={<ArrowUpIcon />}>
          Share
        </Button>
      </CardFooter>
    </Card>
  );
};
