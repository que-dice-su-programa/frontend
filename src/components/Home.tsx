import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { Header } from "./Header";
import { SearchBox } from "./SearchBox";
import { AboutUsFooter } from "./AboutUsFooter";
const qs = require("qs");

export function Home() {
  const [searchField, setSearchField] = React.useState("");
  const navigate = useNavigate();

  function handleSubmit(value: string) {
    event.preventDefault();
    const query = value.toLowerCase().trim();
    navigate(
      `/sobre/${encodeURIComponent(query).replace(new RegExp("%20", "g"), "+")}`
    );
  }
  return (
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      maxWidth={540}
      minHeight="100vh"
      margin="0 auto"
      padding={12}
    >
      <Header>
        ¿Qué dice su programa sobre{" "}
        <Text as="u">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
        </Text>
        ?
      </Header>
      <Box maxWidth={540} height="100%">
        <SearchBox
          autoFocus
          searchField={searchField}
          setSearchField={setSearchField}
          handleSubmit={handleSubmit}
        />
        <Box marginTop={12}>
          <p>
            <b>quedicesuprograma.es</b> es un comparador de programas
            electorales para las Elecciones Generales del Estado Español del 23
            de Julio de 2023.
          </p>
          <br />
          <p>
            Los programas electorales no siempre son accesibles para la gente de
            a pie y creemos que es importante que la ciudadanía conozca las
            propuestas de los partidos. <em>QueDiceSuPrograma</em> utiliza una
            combinación de{" "}
            <Link
              color="teal.500"
              textDecoration="underline"
              href="https://es.wikipedia.org/wiki/Procesamiento_de_lenguajes_naturales"
            >
              Procesamiento del lenguaje natural
            </Link>{" "}
            sobre los programas electorales y{" "}
            <Link
              color="teal.500"
              textDecoration="underline"
              href="https://openai.com/"
            >
              ChatGPT
            </Link>{" "}
            para facilitar el acceso a esta información.
          </p>
          <br />
          <p>
            Para saber qué proponen los partidos políticos sobre un determinado
            tema, <b>completa la pregunta ¿qué dice su programa sobre ...?</b>{" "}
            utilizando la caja de texto de arriba.
          </p>
        </Box>
      </Box>
      <AboutUsFooter />
    </Flex>
  );
}
