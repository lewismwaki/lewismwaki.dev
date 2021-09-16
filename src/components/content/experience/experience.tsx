import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import { useToggle } from "react-use";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import SectionTitle from "./../../shared/section_title";
import { Box, Text, Center, Flex } from "@chakra-ui/react";
import styled from "styled-components";
import CollapsedTitle from "./collapsed_title";
import ExpandedTitle from "./expanded_title";

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
    "&$expanded": {},
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "black",
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
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
    backgroundColor: "black",
    paddingLeft: "96px",
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
  },
}))(MuiAccordionDetails);

export default function Experience() {
  const [expanded1, toggle1] = useToggle(true);
  const [expanded2, toggle2] = useToggle(false);
  const [expanded3, toggle3] = useToggle(false);
  return (
    <Center background='inherit'>
      <Box>
        <SectionTitle title={".experience()"}></SectionTitle>
        <Box height='32px'></Box>
        <Center>
          <Text color='#707070' fontSize='20' textAlign='center' width='500px'>
            Overview of some of the technologies I've worked with, highlighting
            how & where they've been used. A list that is ever-growing.
          </Text>
        </Center>
        <Box height='48px'></Box>
        <Flex direction='row' position='relative'>
          <Box position='relative' zIndex='10' left='9px'>
            {expanded2 === true && expanded1 === true && expanded3 === true ? (
              <Box backgroundColor='#4C00E8' height='760px' width='2px'></Box>
            ) : expanded2 === true && expanded3 === true ? (
              <Box backgroundColor='#4C00E8' height='600px' width='2px'></Box>
            ) : expanded1 === true && expanded3 === true ? (
              <Box backgroundColor='#4C00E8' height='600px' width='2px'></Box>
            ) : expanded2 === true && expanded1 === true ? (
              <Box backgroundColor='#4C00E8' height='600px' width='2px'></Box>
            ) : expanded1 === true ? (
              <Box backgroundColor='#4C00E8' height='400px' width='2px'></Box>
            ) : expanded2 === true ? (
              <Box backgroundColor='#4C00E8' height='440px' width='2px'></Box>
            ) : expanded3 === true ? (
              <Box backgroundColor='#4C00E8' height='440px' width='2px'></Box>
            ) : (
              <Box backgroundColor='#4C00E8' height='280px' width='2px'></Box>
            )}
          </Box>
          <Flex position='relative' direction='column'>
            {/* accordion 1 */}
            <Accordion square expanded={expanded1 === true} onChange={toggle1}>
              {/* title */}
              <AccordionSummary
                aria-controls='panel1d-content'
                id='panel1d-header'
              >
                {expanded1 === true ? (
                  <ExpandedTitle
                    where='Bytmatic Inc. - Texas, US'
                    when="July '21 - Present"
                  />
                ) : (
                  <CollapsedTitle
                    where='Bytmatic Inc. - Texas, US'
                    when="July '21 - Present"
                  />
                )}
              </AccordionSummary>
              <AccordionDetails>
                <Flex direction='column'>
                  <Center>
                    <Text color='#707070' fontSize='16' width='700px'>
                      Overview of some of the technologies I've worked with,
                      highlighting how & where they've been used. A list that is
                      ever-growing. Overview of some of the technologies I've
                      worked with, highlighting how & where they've been used. A
                      list that is ever-growing. Overview of some of the
                      technologies I've worked with, highlighting how & where
                      they've been used. A list that is ever-growing.
                    </Text>
                  </Center>
                </Flex>
              </AccordionDetails>
            </Accordion>
            {/* accordion 2 */}
            <Accordion square expanded={expanded2 === true} onChange={toggle2}>
              {/* title */}
              <AccordionSummary
                aria-controls='panel2d-content'
                id='panel2d-header'
              >
                {expanded2 === true ? (
                  <ExpandedTitle where='Giglab.io' when="Jan '21 - Present" />
                ) : (
                  <CollapsedTitle where='Giglab.io' when="Jan '21 - Present" />
                )}
              </AccordionSummary>
              <AccordionDetails>
                <Flex direction='column'>
                  <Center>
                    <Text color='#707070' fontSize='16' width='700px'>
                      Overview of some of the technologies I've worked with,
                      highlighting how & where they've been used. A list that is
                      ever-growing. Overview of some of the technologies I've
                      worked with, highlighting how & where they've been used. A
                      list that is ever-growing. Overview of some of the
                      technologies I've worked with, highlighting how & where
                      they've been used. A list that is ever-growing. Overview
                      of some of the technologies I've worked with, highlighting
                      how & where they've been used. A list that is
                      ever-growing.
                    </Text>
                  </Center>
                </Flex>
              </AccordionDetails>
            </Accordion>

            {/* accordion 3 */}
            <Accordion square expanded={expanded3 === true} onChange={toggle3}>
              {/* title */}
              <AccordionSummary
                aria-controls='panel3d-content'
                id='panel3d-header'
              >
                {expanded3 === true ? (
                  <ExpandedTitle where='Self' when="Aug '21 - Jan '21" />
                ) : (
                  <CollapsedTitle where='Self' when="Aug '21 - Jan '21" />
                )}
              </AccordionSummary>
              <AccordionDetails>
                <Flex direction='column'>
                  <Center>
                    <Text color='#707070' fontSize='16' width='700px'>
                      Overview of some of the technologies I've worked with,
                      highlighting how & where they've been used. A list that is
                      ever-growing. Overview of some of the technologies I've
                      worked with, highlighting how & where they've been used. A
                      list that is ever-growing. Overview of some of the
                      technologies I've worked with, highlighting how & where
                      they've been used. A list that is ever-growing. Overview
                      of some of the technologies I've worked with, highlighting
                      how & where they've been used. A list that is
                      ever-growing.
                    </Text>
                  </Center>
                </Flex>
              </AccordionDetails>
            </Accordion>
          </Flex>
        </Flex>
      </Box>
    </Center>
  );
}
