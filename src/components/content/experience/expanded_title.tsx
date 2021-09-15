import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import SectionTitle from "./../../shared/section_title";
import { Box, Text, Center, Flex } from "@chakra-ui/react";
import styled from "styled-components";
import CollapsedTitle from "./collapsed_title";

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
const ExpandedTitle = () => {
    return (
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
          <Box width='8'></Box>
          <ExpandedTitleStyle>Bytmatic Inc. - Texas, US</ExpandedTitleStyle>
        </Flex>

        <Box pl='48px'>
          <ExpandedSubTitleStyle>July '21 - Present</ExpandedSubTitleStyle>
        </Box>
      </Flex>
    )
}

export default ExpandedTitle
