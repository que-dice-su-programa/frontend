import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Box, SimpleGrid, Link } from "@chakra-ui/react";
import { Header } from "./Header";
import { SearchBox } from "./SearchBox";
const qs = require("qs");

export function Home() {
  const [searchField, setSearchField] = React.useState("");
  const navigate = useNavigate();

  function handleSubmit(value: string) {
    event.preventDefault();
    // The serialize function here would be responsible for
    // creating an object of { key: value } pairs from the
    // fields in the form that make up the query.
    navigate(`/sobre/${encodeURIComponent(value).replace(new RegExp("%20", 'g'), "+")}`)
  }
  return (
    <Box padding={12} margin="auto" maxWidth={1650}>
      <Header />
      <SimpleGrid
        templateRows="3fr 1fr 3fr"
        templateColumns="1fr"
        gap={4}
        maxWidth={540}
        margin="100px auto"
        height="calc(100vh - 150px)"
      >
        <div style={{textAlign: "justify"}}>
        <p>
          <b>quedicesuprograma.es</b> es un comparador de programas electorales para
          las Elecciones Generales del Estado Español del 23 de Julio de 2023.
        </p>
        <br />
        <p>
          Utilizamos una combinación de analisis de texto de
          los <Link>programas electorales</Link> y <Link href="https://openai.com/">ChatGPT</Link> para
          intentar entender qué proponen los partidos politicos sobre los problemas que preocupan a la ciudadanía.
        </p>
        <br />
        <p>
          Para saber qué proponen los partidos políticos sobre un determinado tema, utiliza la caja de búsqueda debajo 👇
        </p>
        </div>
        <SearchBox
          autoFocus
          searchField={searchField}
          setSearchField={setSearchField}
          handleSubmit={handleSubmit}
        />
      </SimpleGrid>
    </Box>
  );
}
