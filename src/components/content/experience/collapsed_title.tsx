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

const CollapsedSubTitleStyle = styled.h1`
  font-family: Fira Mono;
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5);
`;

const RegularTextStyle = styled.h1`
  -webkit-text-stroke: 0.75px yellow;
  -webkit-text-fill-color: transparent;
`;

interface Company {
  where: string;
  title: string;
}

const CollapsedTitle = ({ where, title }: Company) => {
  return (
    <Flex direction='row' alignItems='flex-start'>
      <Box width='45px' height='45px' zIndex='2' mr='20px'>
        <StaticImage src='../../../images/company_img.png' alt='' />
      </Box>

      <Flex
        direction='row'
        width='760px'
        alignItems='center'
        justify='space-between'
      >
        <Flex direction='column'>
          <CollapsedSubTitleStyle>{title}</CollapsedSubTitleStyle>
          <CollapsedTitleStyle>{where}</CollapsedTitleStyle>
        </Flex>

        <RegularTextStyle>
          <Text fontFamily='Fira Mono' fontSize='26px' color='yellow'>
            {"+"}
          </Text>
        </RegularTextStyle>
      </Flex>
    </Flex>
  );
};

export default CollapsedTitle;
