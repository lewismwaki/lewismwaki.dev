import React from "react";

import { Box, Text, Center, Flex } from "@chakra-ui/react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";


const CollapsedTitleStyle = styled.h1`
  font-family: Fira Mono;
  font-size: 22px;
  color: yellow;
  font-weight: 500;
`;

const CollapsedSubTitleStyle = styled.div`
  font-family: Fira Mono;
  font-size: 18px;
  color: rgb(255, 255, 0);
  font-weight: 500;
`;

const TextStyle = styled.h1`
  -webkit-text-stroke: 0.75px yellow;
  -webkit-text-fill-color: transparent;
`;

interface Company {
  where: string;
  when: string;
}

const CollapsedTitle = ({ where, when }: Company) => {
  return (
    <Flex  direction='row' alignItems='flex-start'>
    <Box mr='32px' mt='12px' width='16px' height='16px'>
        <StaticImage src='../../../images/dot.png' alt='' />
      </Box>

      <Flex direction='column'>
        <Flex direction='row'>
          <TextStyle>
            <Text fontFamily='Fira Mono' fontSize='26px' color='yellow'>
              {">"}
            </Text>
          </TextStyle>
          <Box width='32px'></Box>
          <CollapsedTitleStyle>{where}</CollapsedTitleStyle>
        </Flex>
        <Box pl='48px'>
          <CollapsedSubTitleStyle>{when}</CollapsedSubTitleStyle>
        </Box>
      </Flex>
    </Flex>
  );
};

export default CollapsedTitle;
