import * as React from "react";
import { useSearchParams } from "react-router-dom";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { Results } from "./Results";
import { Header } from "./Header";
import { SearchBox } from "./SearchBox";
import { DefaultContent } from "./DefaultContent";
import axios from "axios";

const qs = require("qs");
const ENDPOINT = "https://qdsp-xizgzxurha-no.a.run.app/api/ask";

export function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchField, setSearchField] = React.useState(searchParams.get("q"));
  const [query, setQuery] = React.useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );

  React.useEffect(() => {
    if (query) {
      axios
        .post(ENDPOINT, {
          q: query,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [query]);

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
      />
    );
  }

  return (
    <Box padding={12} margin="auto" maxWidth={1650}>
      <Header />
      <SimpleGrid
        templateRows="4fr 1fr 1fr"
        templateColumns="1fr"
        gap={4}
        maxWidth={540}
        margin="0 auto"
        height="calc(100vh - 150px)"
      >
        <DefaultContent />
        <SearchBox
          searchField={searchField}
          setSearchField={setSearchField}
          handleSubmit={handleSubmit}
        />
      </SimpleGrid>
    </Box>
  );
}
