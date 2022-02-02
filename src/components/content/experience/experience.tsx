import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";

import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import VisibilitySensor from "react-visibility-sensor";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import SectionTitle from "./../../shared/section_title";
import { Box, Center, Flex } from "@chakra-ui/react";
import SectionDescription from "../../shared/section_description";
import CollapsedTitle from "./collapsed_title";
import Role from "./role";
import Duration from "./duration";
import ExpandedTitle from "./expanded_title";
import { RiGitBranchLine } from "react-icons/ri";
import WorkDescription from "./work_description";
import BkgGradient from "../../../images/bkg_gradient_1.svg";
import CircleGradientYellow from "../../../images/ellipse_122_yellow.svg";

const Accordion = withStyles({
  root: {
    backgroundColor: "transparent",
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
    backgroundColor: "transparent",
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    "&:not(:last-child)": {
      paddingTop: "20px",
    },
  },
  content: {
    margin: "0px",
    "&$expanded": {
      marginBottom: "8px",
      marginTop: "0px",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    color: "#cecece",
    backgroundColor: "transparent",
    paddingLeft: "64px",
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
  },
}))(MuiAccordionDetails);

export default function Experience({ onSectionChange }) {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange = (panel: string) => () => {
    setExpanded(panel);
  };

  return (
    <VisibilitySensor
      partialVisibility={true}
      onChange={(val) => {
        val ? onSectionChange(1) : null;
      }}
    >
      <Center position='relative' overflowX='clip' background='inherit'>
        <Box position='relative'>
          <SectionTitle title='.experience()' id='experience' />
          <Box pt='12px' pb='24px'>
            <SectionDescription description="Where I've been priviledged to work, my impact and general involvement there." />
          </Box>

          <div>
            <Box width='min-content'>
              <Flex
                border='1.5px solid #4C00E8'
                borderRadius='6px'
                textColor='#cecece'
                fontFamily='Fira Mono'
                px='12px'
                py='6px'
                bg='#160044'
                alignItems='center'
                justifyContent='center'
                fontSize='12px'
                fontWeight='600'
              >
                <RiGitBranchLine size='14px' /> <Box width='4px' />
                main
              </Flex>
            </Box>

            <Flex direction='row' position='relative'>
              <Box
                position='absolute'
                transform='rotate(45deg)'
                width='900px'
                height='900px'
                top='-200px'
              >
                <BkgGradient width='900px' height='900px' />
              </Box>

              <Box position='relative' left='23px'>
                <Box
                  backgroundColor='#4C00E8'
                  height='568px'
                  width='2px'
                  borderBottomRadius='100px'
                />
              </Box>
              <Flex position='relative' direction='column'>
                {/* accordion 1 */}
                <Accordion
                  square
                  expanded={expanded === "panel1"}
                  onChange={
                    expanded === "panel1"
                      ? handleChange("panel2")
                      : handleChange("panel1")
                  }
                >
                  {/* title */}
                  <AccordionSummary
                    aria-controls='panel1d-content'
                    id='panel1d-header'
                  >
                    {expanded === "panel1" ? (
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
                      <Duration date=' 📆 Jul 3rd 2021 - Present' />

                      <WorkDescription description="Worked with the great team at Bytmatic Inc. to build Traddit to an evergrowing userbase that we're all proud of. Here, I mastered collaboration across different time zones, as well as task management. I was tasked with the following:" />

                      <Role role='Onboarded the team to sturdier architectural & design patterns that helped us scale seamlessly.' />
                      <Role role='Helped in the conception and development of 3 premium features.' />
                      <Role role='Implemented user feedback to ensure best possible UX, backed with an average rating of 4.5 stars.' />
                      <Role role='Translated 3 different iterations of mock-ups to UI, with adherence to Material Design & iOS HIG.' />
                    </Flex>
                  </AccordionDetails>
                </Accordion>
                {/* accordion 2 */}
                <Accordion
                  square
                  expanded={expanded === "panel2"}
                  onChange={
                    expanded === "panel2"
                      ? handleChange("panel3")
                      : handleChange("panel2")
                  }
                >
                  {/* title */}
                  <AccordionSummary
                    aria-controls='panel2d-content'
                    id='panel2d-header'
                  >
                    {expanded === "panel2" ? (
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
                      <Duration date=' 📆 Feb 20th 2021 - Present' />

                      <WorkDescription description='Took a developer role at Giglab as we built apps from scratch to production for multiple clients. ' />

                      <Role role='Architected codebases with the aim of allowing apps to scale seamlessly' />
                      <Role role='Expanded test coverage to ensure reliability of code.' />
                      <Role role='Maintained and upgraded fairly large existing codebases.' />
                      <Role role='Continuously fixed time and financially critical bugs' />
                      <Role role='Helped 3 clients begin generating revenue from their applications' />
                    </Flex>
                  </AccordionDetails>
                </Accordion>

                {/* accordion 3 */}
                <Accordion
                  square
                  expanded={expanded === "panel3"}
                  onChange={
                    expanded === "panel3"
                      ? handleChange("panel2")
                      : handleChange("panel3")
                  }
                >
                  {/* title */}
                  <AccordionSummary
                    aria-controls='panel3d-content'
                    id='panel3d-header'
                  >
                    {expanded === "panel3" ? (
                      <ExpandedTitle
                        where='Indipendent'
                        title='UI/UX Designer, Developer'
                      />
                    ) : (
                      <CollapsedTitle
                        where='Indipendent'
                        title='UI/UX Designer, Developer'
                      />
                    )}
                  </AccordionSummary>
                  <AccordionDetails>
                    <Flex direction='column'>
                      <Duration date=' 📆 Apr 25th 2020 - Dec 31st 2020' />
                      <WorkDescription description='Enjoyed my freelance days when I doubled up as developer, and UI/UX designer.' />

                      <Role role='Translated designs to frontend code for both web & mobile' />
                      <Role role='UI/UX Design from ideas and wireframes to prototypes' />
                      <Role role='Consulted and drafted roadmaps for startups' />
                      <Role role='Graphic Design' />
                    </Flex>
                  </AccordionDetails>
                </Accordion>
              </Flex>
            </Flex>

            <Box height='24px' />
          </div>
        </Box>
      </Center>
    </VisibilitySensor>
  );
}
