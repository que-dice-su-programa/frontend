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

export const ProposalCard = () => {
  return (
    <Card maxW="md">
      <CardHeader>
        <Flex flex="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
            <Box>
              <Heading size="sm">Segun Adebayo</Heading>
              <Text>Creator, Chakra UI</Text>
            </Box>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>
          With Chakra UI, I wanted to sync the speed of development with the
          speed of design. I wanted the developer to be just as excited as the
          designer to create a screen. With Chakra UI, I wanted to sync the
          speed of development with the speed of design. I wanted the developer
          to be just as excited as the designer to create a screen. With Chakra
          UI, I wanted to.
        </Text>
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
