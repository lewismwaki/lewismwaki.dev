import React from "react";
import { Center, Text } from "@chakra-ui/layout";

import MediaQuery from "react-responsive";
import styled from "styled-components";

const TextStyle = styled.h1`
  -webkit-text-stroke: 0.75px yellow;
  -webkit-text-fill-color: transparent;
`;

const SectionTitle = ({ title, id }) => {
  return (
    <MediaQuery maxWidth={769}>
      {(isMobile: boolean) =>
        isMobile ? (
          <Center py='10px'>
            <TextStyle>
              <Text
                fontFamily='Fira Mono'
                fontSize='52px'
                color='yellow'
                id={id}
              >
                {title}
              </Text>
            </TextStyle>
          </Center>
        ) : (
          <Center py='10px'>
            <TextStyle>
              <Text
                fontFamily='Fira Mono'
                fontSize='96px'
                color='yellow'
                id={id}
              >
                {title}
              </Text>
            </TextStyle>
          </Center>
        )
      }
    </MediaQuery>
  );
};

export default SectionTitle;
