import * as React from "react";
import { useSearchParams } from "react-router-dom";
import { Box, SimpleGrid, Link } from "@chakra-ui/react";
import { Results } from "./Results";
import { Header } from "./Header";
import { SearchBox } from "./SearchBox";
import { DefaultContent } from "./DefaultContent";
import axios from "axios";

const qs = require("qs");
const ENDPOINT = "https://qdsp-xizgzxurha-no.a.run.app/api/ask";
const ENDPOINT_DEV = "/api/ask";

export function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchField, setSearchField] = React.useState(searchParams.get("q"));
  const [query, setQuery] = React.useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  const [results, setResults] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (query) {
      setIsLoading(true);
      axios
        .post(ENDPOINT_DEV, {
          q: query,
        })
        .then(function (response) {
          console.log(response);
          setResults(response.data);
          setIsLoading(false);
        })
        .catch(function (error) {
          console.log(error);
          setIsLoading(false);
        });
    }
  }, [query]);

  React.useEffect(() => {
    console.log("isLoading", isLoading);
  }, [isLoading]);

  function handleSubmit(value) {
    event.preventDefault();
    // The serialize function here would be responsible for
    // creating an object of { key: value } pairs from the
    // fields in the form that make up the query.
    let params = qs.stringify({ q: value });
    setQuery(value);
    setSearchParams(params);
  }

  if (searchParams.get("q")) {
    return (
      <Results
        query={query}
        handleSubmit={handleSubmit}
        searchField={searchField}
        setSearchField={setSearchField}
        results={results}
        isLoading={isLoading}
      />
    );
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
          las elecciones generales del estado español del 23 de Julio de 2023.
        </p>
        <br />
        <p>
          Utilizamos una combinación de analisis de texto de
          los <Link>programas electorales</Link> y <Link href="https://openai.com/">ChatGPT</Link> para
          intentar entender qué porponen los partidos politicos sobre los problemas que preocupan a la ciudadanía.
        </p>
        <br />
        <p>
          Para saber qué proponen los partidos políticos sobre determinados temas, utiliza la caja de búsqueda debajo 👇
        </p>
        </div>
        <SearchBox
          searchField={searchField}
          setSearchField={setSearchField}
          handleSubmit={handleSubmit}
        />
      </SimpleGrid>
    </Box>
  );
}
