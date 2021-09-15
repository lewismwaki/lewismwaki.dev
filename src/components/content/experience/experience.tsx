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
import ExpandedTitle from "./expanded_title";

const TextStyle = styled.h1`
  -webkit-text-stroke: 0.75px yellow;
  -webkit-text-fill-color: transparent;
`;
const Accordion = withStyles({
  root: {
    backgroundColor: "#000",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "#0A0A00",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    color: "#cecece",
    width: 800,
    backgroundColor: "#0A0A00",
    paddingLeft: "64px",
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
  },
}))(MuiAccordionDetails);

export default function Experience() {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange = (panel: string) => (
    event: React.ChangeEvent<{}>,
    newExpanded: boolean
  ) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Center background='inherit'>
      <Box>
        <SectionTitle title={".experience()"}></SectionTitle>

        <Center>
          <Text color='#707070' fontSize='20' textAlign='center' width='500px'>
            Overview of some of the technologies I've worked with, highlighting
            how & where they've been used. A list that is ever-growing.
          </Text>
        </Center>

        <Accordion
          square
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          {/* title */}
          <AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
            {expanded === "panel1" ? <ExpandedTitle /> : <CollapsedTitle />}
          </AccordionSummary>
          <AccordionDetails>
            <Flex direction='column'>
              <Center>
                <Text color='#707070' fontSize='16' width='750px'>
                  Overview of some of the technologies I've worked with,
                  highlighting how & where they've been used. A list that is
                  ever-growing. Overview of some of the technologies I've worked
                  with, highlighting how & where they've been used. A list that
                  is ever-growing. Overview of some of the technologies I've
                  worked with, highlighting how & where they've been used. A
                  list that is ever-growing.
                </Text>
              </Center>
            </Flex>
          </AccordionDetails>
        </Accordion>

        <Accordion
          square
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          {/* title */}
          <AccordionSummary aria-controls='panel2d-content' id='panel2d-header'>
            {expanded === "panel2" ? <ExpandedTitle /> : <CollapsedTitle />}
          </AccordionSummary>
          <AccordionDetails>
            <Flex direction='column'>
              <Center>
                <Text color='#707070' fontSize='16' width='750px'>
                  Overview of some of the technologies I've worked with,
                  highlighting how & where they've been used. A list that is
                  ever-growing. Overview of some of the technologies I've worked
                  with, highlighting how & where they've been used. A list that
                  is ever-growing. Overview of some of the technologies I've
                  worked with, highlighting how & where they've been used. A
                  list that is ever-growing. Overview of some of the
                  technologies I've worked with, highlighting how & where
                  they've been used. A list that is ever-growing.
                </Text>
              </Center>
            </Flex>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Center>
  );
}
