import * as React from "react";

import { css } from "@emotion/react";

import { Box, Flex, Link, Text, Heading } from "@chakra-ui/react";
import { Header } from "./Header";

export function AboutUs() {
  return (
    <Box padding={12} margin="auto" css={css``}>
      <Header />
      <Flex
        w="100%"
        height="80vh"
        flexDirection="column"
        justifyContent="left"
        alignItems="center"
      >
        <Box maxWidth={800} paddingY={12}>
          <Text>
          Bienvenido/a a nuestro sitio web de comparación de programas políticos
          para las próximas elecciones. Queremos ofrecerte una herramienta que te
          ayude a obtener información sobre las posturas de los diferentes
          partidos políticos respecto a los temas que te interesan. Sin embargo,
          es importante tener en cuenta algunos aspectos sobre nuestro servicio.
          </Text>
          <Heading size="md" marginTop={4}>Independencia y sin ánimo de lucro</Heading>
          <Text>
          Queremos dejar en claro que este proyecto no está asociado con ningún
          partido político en particular. Somos una plataforma independiente y no
          tenemos ningún tipo de afiliación política. Nuestro objetivo principal
          es facilitar el acceso a la información sobre los programas electorales
          de los partidos, sin ningún interés económico de por medio.
          </Text>
          <Heading size="md" marginTop={4}>Independencia y sin ánimo de lucro</Heading>
          <Text>
          Si bien nos esforzamos por brindar información precisa y coherente, es
          importante tener en cuenta que la información proporcionada en nuestro
          sitio web puede no ser completamente precisa o actualizada. Esto puede
          deberse a diferentes factores, como datos incorrectos o limitaciones en
          la respuesta generada por la inteligencia artificial que utilizamos.
          </Text>
          <Heading size="md" marginTop={4}>Independencia y sin ánimo de lucro</Heading>
          <Text>
          Queremos recordarte que siempre es recomendable leer los programas
          electorales completos en los sitios web oficiales de los partidos
          políticos correspondientes. Estos documentos son la fuente principal y
          más confiable de información sobre las propuestas y posturas de cada
          partido. Nuestro servicio pretende ser un complemento útil, pero no
          sustituye la lectura directa de los programas electorales.
          </Text>
          <Heading size="md" marginTop={4}>Independencia y sin ánimo de lucro</Heading>
          <Text>
          No nos atribuimos la información generada. Nuestro servicio se basa en
          una inteligencia artificial que recopila y resume información sobre los
          programas políticos de los partidos. Recomendamos consultar siempre los
          programas electorales oficiales de los partidos para obtener información
          precisa y completa.
          </Text>
          <Heading size="md" marginTop={4}>Independencia y sin ánimo de lucro</Heading>
          <Text>
          Queremos enfatizar que nuestro servicio es totalmente gratuito. No
          cobramos ninguna tarifa por acceder a la información proporcionada o por
          realizar comparaciones en nuestro sitio web. Estamos comprometidos a
          facilitar el acceso a la información política de manera libre y gratuita
          para todos los usuarios interesados.
          </Text>
          <Heading size="md" marginTop={4}>Independencia y sin ánimo de lucro</Heading>
          <Text>
          Actualmente, asumimos los costes operativos de nuestro servicio. Sin
          embargo, es importante destacar que estos costes pueden aumentar con el
          tiempo. En caso de que los gastos se vuelvan insostenibles, nos
          reservamos el derecho de limitar el acceso o cerrar la página. Nuestro
          objetivo principal es seguir brindando este servicio de manera gratuita
          y accesible, y haremos todo lo posible para mantenerlo así.
          </Text>
          <Heading size="md" marginTop={4}>Independencia y sin ánimo de lucro</Heading>
          <Text>
          Aceptamos donaciones y patrocinios para ayudar a cubrir los gastos
          asociados con la operación y el desarrollo de nuestro servicio. Queremos
          dejar en claro que aceptamos donaciones y patrocinios sin condiciones,
          lo que significa que no afectarán la imparcialidad de nuestra plataforma
          ni influirán en la presentación de información imparcial y objetiva. Por
          lo cual, no podemos aceptar ninguna aportación por parte de entidades
          con vinculaciones o actividades políticas.
          </Text>
          <Heading size="md" marginTop={4}>Independencia y sin ánimo de lucro</Heading>
          <Text>
          En caso de que recibamos donaciones o patrocinios que superen los costes
          necesarios para mantener nuestro servicio, nos comprometemos a destinar
          los fondos adicionales a causas benéficas. Después de las elecciones
          detallaremos el coste del servicio, el total de las donaciones y, en el
          caso de que proceda, la donación a la Cruz Roja.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
