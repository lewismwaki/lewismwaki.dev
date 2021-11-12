import React, { LegacyRef } from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import { useToggle } from "react-use";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import VisibilitySensor from "react-visibility-sensor";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import SectionTitle from "./../../shared/section_title";
import { Box, Text, Center, Flex } from "@chakra-ui/react";
import SectionDescription from "../../shared/section_description";
import CollapsedTitle from "./collapsed_title";
import Role from "./role";
import Duration from "./duration";
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
      margin: "8px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    color: "#cecece",
    width: 800,
    backgroundColor: "black",
    paddingLeft: "64px",
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
  },
}))(MuiAccordionDetails);

export default function Experience({ onSectionChange }) {
  const [expanded1, toggle1] = useToggle(true);
  const [expanded2, toggle2] = useToggle(false);
  const [expanded3, toggle3] = useToggle(false);
  return (
    <Center background='inherit'>
      <Box>
        <VisibilitySensor
          partialVisibility={true}
          onChange={(val) => {
            val ? onSectionChange(1) : null;
          }}
        >
          <SectionTitle title='.experience()' id='experience'></SectionTitle>
        </VisibilitySensor>

        <Box height='32px'></Box>
        <SectionDescription description="Overview of some of the technologies I've worked with, highlighting how & where they've been used. A list that is ever-growing." />
        <Box height='48px'></Box>
        <Flex direction='row' position='relative'>
          <Box position='relative' zIndex='1' left='23px'>
            {expanded2 === true && expanded1 === true && expanded3 === true ? (
              <Box backgroundColor='#4C00E8' height='1040px' width='2px'></Box>
            ) : expanded2 === true && expanded3 === true ? (
              <Box backgroundColor='#4C00E8' height='800px' width='2px'></Box>
            ) : expanded1 === true && expanded3 === true ? (
              <Box backgroundColor='#4C00E8' height='800px' width='2px'></Box>
            ) : expanded2 === true && expanded1 === true ? (
              <Box backgroundColor='#4C00E8' height='800px' width='2px'></Box>
            ) : expanded1 === true ? (
              <Box backgroundColor='#4C00E8' height='500px' width='2px'></Box>
            ) : expanded2 === true ? (
              <Box backgroundColor='#4C00E8' height='520px' width='2px'></Box>
            ) : expanded3 === true ? (
              <Box backgroundColor='#4C00E8' height='540px' width='2px'></Box>
            ) : (
              <Box backgroundColor='#4C00E8' height='240px' width='2px'></Box>
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
                    title='Mobile Apps Developer'
                  />
                ) : (
                  <CollapsedTitle
                    where='Bytmatic Inc. - Texas, US'
                    title='Mobile Apps Developer'
                  />
                )}
              </AccordionSummary>
              <AccordionDetails>
                <Flex direction='column'>
                  <Duration date=' 📆 Jul 25th 2021 - Present' />
                  <Box height='16px'></Box>
                  <Center>
                    <Text color='#7c7c80' fontSize='15px' width='700px'>
                      Overview of some of the technologies I've worked with,
                      highlighting how & where they've been used. A list that is
                      ever-growing. Overview of some of the technologies I've
                      worked with, highlighting how & where they've been used. A
                      list that is ever-growing. Overview of some of the
                      technologies I've worked with, highlighting how & where
                      they've been used. A list that is ever-growing.
                    </Text>
                  </Center>

                  <Box height='16px'></Box>

                  <Role role='Leading architectural & design patterns' />
                  <Role role='Leading architectural & design patterns' />
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
                  <ExpandedTitle
                    where='Giglab.io - Nairobi, KE'
                    title='Mobile Apps Developer'
                  />
                ) : (
                  <CollapsedTitle
                    where='Giglab.io - Nairobi, KE'
                    title='Mobile Apps Developer'
                  />
                )}
              </AccordionSummary>
              <AccordionDetails>
                <Flex direction='column'>
                  <Duration date=' 📆 Jul 25th 2021 - Present' />
                  <Box height='16px'></Box>
                  <Center>
                    <Text color='#707070' fontSize='16px' width='700px'>
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

                  <Box height='16px'></Box>

                  <Role role='Leading architectural & design patterns' />
                  <Role role='Leading architectural & design patterns' />
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
                  <ExpandedTitle where='Self' title="Aug '21 - Jan '21" />
                ) : (
                  <CollapsedTitle where='Self' title="Aug '21 - Jan '21" />
                )}
              </AccordionSummary>
              <AccordionDetails>
                <Flex direction='column'>
                  <Duration date=' 📆 Jul 25th 2021 - Present' />
                  <Box height='16px'></Box>
                  <Center>
                    <Text color='#707070' fontSize='16px' width='700px'>
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

                  <Box height='16px'></Box>

                  <Role role='Leading architectural & design patterns' />
                  <Role role='Leading architectural & design patterns' />
                </Flex>
              </AccordionDetails>
            </Accordion>
          </Flex>
        </Flex>
      </Box>
    </Center>
  );
}
