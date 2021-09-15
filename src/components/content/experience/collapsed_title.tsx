import React from "react";

import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import SectionTitle from "./../../shared/section_title";
import { Box, Text, Center, Flex } from "@chakra-ui/react";
import styled from "styled-components";
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
const CollapsedTitle = () => {
  return (
    <Flex direction='column'>
      <Flex direction='row'>
        <TextStyle>
          <Text fontFamily='Fira Mono' fontSize='26px' color='yellow'>
            {">"}
          </Text>
        </TextStyle>
        <Box width='8'></Box>
        <CollapsedTitleStyle>Bytmatic Inc. - Texas, US</CollapsedTitleStyle>
      </Flex>
      <Box pl='48px'>
        <CollapsedSubTitleStyle>July '21 - Present</CollapsedSubTitleStyle>
      </Box>
    </Flex>
  );
};

export default CollapsedTitle;
