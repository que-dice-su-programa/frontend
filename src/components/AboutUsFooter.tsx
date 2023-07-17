import * as React from "react";
import { Box, Text, Link } from "@chakra-ui/react";
import KofiButton from "kofi-button";

export function AboutUsFooter() {
  return (
    <>
      <Text marginTop={8} marginBottom={2}>
        Ayúdanos a mantenerlo en marcha
      </Text>
      <KofiButton
        color="#0a9396"
        title="Haz una donación en Ko-fi"
        kofiID="L3L5N3U9K"
      />
      <Text
        fontSize="12px"
        marginTop="20px"
        lineHeight="1.5"
        color="blackAlpha.600"
      >
        <Link href="/quienes-somos">Si quieres saber más sobre este proyecto, haz click aquí</Link>
      </Text>
    </>
  );
}
