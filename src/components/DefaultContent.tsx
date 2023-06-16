import * as React from "react";
import { Stack, Link } from "@chakra-ui/react";

export const DefaultContent = () => (
  <Stack direction="column" justifyContent="center">
    <Link href="/?q=vivienda">Qué dicen sobre vivienda</Link>
    <Link href="/?q=listas+de+espera">
      Muéstrame lo que proponen sobre las listas de espera
    </Link>
    <Link href="/?q=tauromaquia">¿Van a legislar sobre la tauromaquia?</Link>
  </Stack>
);
