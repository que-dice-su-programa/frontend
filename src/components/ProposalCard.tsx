import * as React from "react";
import {
  Flex,
  Box,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Button
} from "@chakra-ui/react";
import { QuestionOutlineIcon } from '@chakra-ui/icons'

const colors = {
  pp: "#16589d",
  psoe: "#f31a11",
  sumar: "#e51c55",
  vox: "#66bc2a",
};

const Context = ({context}) => (
  <Box padding={4}>
    <Text marginBottom={4}>Texto original en el programa 👇</Text>

    {context.map((text) => (
      <Box paddingLeft={4} marginBottom={4} borderLeft="4px solid grey">
        <blockquote>...<Text fontSize={14} fontWeight="bold" as="span">{text}</Text>...</blockquote>
      </Box>
    ))}

    <Text marginBottom={4} fontSize={12}>
      * Hacemos lo mejor que podemos para mostrar el contenido relacionado aquí,
      pero no siempre es tarea fácil. Es texto plano, por lo que títulos y parrafos
      pueden estar entremezclados. Si ves algo muy raro, por favor háznoslo saber.
    </Text>
  </Box>
)

export const ProposalCard = ({ party, content }) => {
  const logoPath = `/logos/${party}.png`;
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Card maxW="md" height="100%" key={party}>
      <CardHeader>
        <Flex justify="space-between" alignItems="center">
          <Heading size="lg">{party.toUpperCase()}</Heading>
          <Button width={12} variant="ghost" onClick={onOpen}>
            <QuestionOutlineIcon />
          </Button>
          <Modal isOpen={isOpen} onClose={onClose} size="xl" scrollBehavior="inside">
            <ModalOverlay />
            <ModalContent>
              <ModalCloseButton />
              <ModalBody>
                <Context context={content.context} />
              </ModalBody>
            </ModalContent>
          </Modal>
        </Flex>
      <Box height={2} backgroundColor={colors[party]} />
      </CardHeader>
      <CardBody overflow="scroll">
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
      </CardFooter>
    </Card>
  );
};
