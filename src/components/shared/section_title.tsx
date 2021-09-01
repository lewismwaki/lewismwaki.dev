import React from "react";
import { Center, Text } from "@chakra-ui/layout";

import { css } from "@emotion/react";
import  styled  from 'styled-components';

const TextStyle = styled.h1`
-webkit-text-stroke: 0.75px yellow;
-webkit-text-fill-color: transparent;
`

interface TitleText {
  title: string;
  id?: string;
}

const SectionTitle = (props: TitleText) => {
  return (
    <Center>
      <TextStyle>
        <Text
          fontFamily='Fira Mono'
          fontSize='96px'
          color='yellow'
          id={props.id}
        >
          {props.title}
        </Text>
      </TextStyle>
    </Center>
  );
};

export default SectionTitle;
