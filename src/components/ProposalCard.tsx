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
  Button,
  Link,
} from "@chakra-ui/react";
import { QuestionOutlineIcon } from '@chakra-ui/icons'

const colors = {
  pp: "#16589d",
  psoe: "#f31a11",
  sumar: "#e51c55",
  vox: "#66bc2a",
};

const BACKEND =
  process.env.REACT_APP_ENV === "prod"
    ? "https://api.quedicesuprograma.es"
    : "http://localhost:4000";

const Context = ({party, context}) => (
  <Box padding={4}>
    <Text marginBottom={4}>
      Este es el texto original extraído del programa de <Text as="span" fontWeight="bold" color={colors[party]}>{party.toUpperCase()}</Text> en
      el que se basa la respuesta<span role="img" aria-hidden="true">👇</span>
    </Text>

    {context.map((text) => (
      <Box paddingLeft={4} marginBottom={4} borderLeft="4px solid grey">
        <blockquote>...<Text fontSize={16} fontWeight="light" as="span">{text}</Text>...</blockquote>
      </Box>
    ))}

    <Text marginBottom={4} fontSize={14} fontWeight="light">
      * Hacemos lo mejor que podemos para mostrar el contenido relacionado aquí,
      pero no siempre es tarea fácil. Es texto plano, por lo que títulos y párrafos
      pueden estar entremezclados. Si ves algo muy raro, por favor háznoslo saber.
    </Text>

    <Text>
      Puedes descargar el programa de {party.toUpperCase()} <Link color='teal.500' target="_blank" href={`${BACKEND}/programas/${party}.pdf`}>aquí</Link>.
    </Text>
  </Box>
)

const DefaultResult = () => (<Text color="gray.500">No se mencionan medidas específicas sobre este tema en su programa.</Text>)

export const ProposalCard = ({ party, content }) => {
  const logoPath = `/logos/${party}.png`;
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Card maxW="md" height="100%" key={party}>
      <CardHeader>
        <Flex justify="space-between" alignItems="center">
          <Heading size="lg">{party.toUpperCase()}</Heading>
          {
            content.context.length > 0 && (
              <>
              <Button width={12} variant="ghost" onClick={onOpen}>
                <QuestionOutlineIcon aria-label="Ver Fuente" />
              </Button>
              <Modal isOpen={isOpen} onClose={onClose} size="xl" scrollBehavior="inside">
                <ModalOverlay />
                <ModalContent>
                  <ModalCloseButton />
                  <ModalBody>
                    <Context party={party} context={content.context} />
                  </ModalBody>
                </ModalContent>
              </Modal>
              </>
            )
          }
        </Flex>
      <Box height={2} backgroundColor={colors[party]} />
      </CardHeader>
      <CardBody overflowY="auto">
        {content.result ? <Text>{content.result}</Text> : <DefaultResult /> }
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
