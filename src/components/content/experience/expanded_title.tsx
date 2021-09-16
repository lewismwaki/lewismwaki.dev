import React from "react";
import { Box, Text, Center, Flex } from "@chakra-ui/react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const TextStyle = styled.h1`
  -webkit-text-stroke: 0.75px yellow;
  -webkit-text-fill-color: transparent;
`;

const ExpandedTitleStyle = styled.h1`
  -webkit-text-stroke: 0.75px yellow;
  -webkit-text-fill-color: transparent;
  font-family: Fira Mono;
  font-size: 22px;
  font-weight: 500;
`;

const ExpandedSubTitleStyle = styled.h1`
  -webkit-text-stroke: 0.6px yellow;
  -webkit-text-fill-color: transparent;
  font-family: Fira Mono;
  font-size: 18px;
  font-weight: 500;
`;

interface Company {
  where: string;
  when: string;
}
const ExpandedTitle = ({ where, when }: Company) => {
  return (
    <Flex direction='row' alignItems='flex-start'>
      <Box mr='32px' mt='12px' width='16px' height='16px'>
        <StaticImage src='../../../images/dot.png' alt='' />
      </Box>

      <Flex direction='column'>
        <Flex direction='row'>
          <TextStyle>
            <Text
              transform='auto'
              rotate='90deg'
              fontFamily='Fira Mono'
              fontSize='26px'
              color='yellow'
            >
              {">"}
            </Text>
          </TextStyle>
          <Box width='32px'></Box>
          <ExpandedTitleStyle>{where}</ExpandedTitleStyle>
        </Flex>
        <Box pl='48px'>
          <ExpandedSubTitleStyle>{when}</ExpandedSubTitleStyle>
        </Box>
      </Flex>
    </Flex>
  );
};

export default ExpandedTitle;
