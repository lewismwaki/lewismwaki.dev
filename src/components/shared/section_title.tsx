import React from "react";
import { Center, Text } from "@chakra-ui/layout";

import { css } from "@emotion/react";
import styled from "styled-components";

const TextStyle = styled.h1`
  -webkit-text-stroke: 0.75px yellow;
  -webkit-text-fill-color: transparent;
`;

const SectionTitle = ({ title, id }) => {
  return (
    <Center py='10px'>
      <TextStyle>
        <Text fontFamily='Fira Mono' fontSize='96px' color='yellow' id={id}>
          {title}
        </Text>
      </TextStyle>
    </Center>
  );
};

export default SectionTitle;
