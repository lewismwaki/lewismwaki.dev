import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";

import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import VisibilitySensor from "react-visibility-sensor";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import SectionTitle from "./../../shared/section_title";
import { Box, Center, Flex } from "@chakra-ui/react";
import SectionDescription from "../../shared/section_description";
import MediaQuery from "react-responsive";
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
            <SectionDescription description="Where I've been priviledged to work, roles I performed and my general involvement there." />
          </Box>

          <MediaQuery maxWidth={769}>
            {(isMobile: boolean) =>
              isMobile ? (
                <div>
                  <Box
                    position='absolute'
                    height='800px'
                    top='-600px'
                    right='200px'
                    zIndex='10'
                    width='800px'
                  >
                    <CircleGradientYellow
                      filter='blur(40px)'
                      height='800px'
                      width='800px'
                    />
                  </Box>

                  <Box width='min-content'>
                    <Flex
                      border='1.5px solid #4C00E8'
                      borderRadius='6px'
                      textColor='#cecece'
                      fontFamily='Fira Mono'
                      px='12px'
                      py='6px'
                      ml='10px'
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
                      top='-150px'
                    >
                      <BkgGradient width='900px' height='900px' />
                    </Box>

                    <Box position='relative' zIndex='1' left='33px'>
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
                        <AccordionDetails
                          style={{
                            width: 260,
                          }}
                        >
                          <Flex direction='column'>
                            <Duration date=' 📆 Jul 25th 2021 - Present' />
                            <WorkDescription
                              description="Overview of some of the technologies I've worked with,
                      highlighting how & where they've been used. A list that is
                      ever-growing. Overview of some of the technologies I've
                      worked with, highlighting how & where they've been used. A
                      list that is ever-growing. Overview of some of the
                      technologies I've worked with, highlighting how & where
                      they've been used. A list that is ever-growing. Overview
                      of some of the technologies I've worked with, highlighting
                      how & where they've been used. A list that is
                      ever-growing."
                            />

                            <Role role='Leading architectural & design patterns' />
                            <Role role='Leading architectural & design patterns' />
                            <Role role='Leading architectural & design patterns' />
                            <Role role='Leading architectural & design patterns' />
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
                        <AccordionDetails
                          style={{
                            width: 260,
                          }}
                        >
                          <Flex direction='column'>
                            <Duration date=' 📆 Jul 25th 2021 - Present' />

                            <WorkDescription
                              description="Overview of some of the technologies I've worked with,
                      highlighting how & where they've been used. A list that is
                      ever-growing. Overview of some of the technologies I've
                      worked with, highlighting how & where they've been used. A
                      list that is ever-growing. Overview of some of the
                      technologies I've worked with, highlighting how & where
                      they've been used. A list that is ever-growing. Overview
                      of some of the technologies I've worked with, highlighting
                      how & where they've been used. A list that is
                      ever-growing."
                            />

                            <Role role='Leading architectural & design patterns' />
                            <Role role='Leading architectural & design patterns' />
                            <Role role='Leading architectural & design patterns' />
                            <Role role='Leading architectural & design patterns' />
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
                              where='Self'
                              title="Aug '21 - Jan '21"
                            />
                          ) : (
                            <CollapsedTitle
                              where='Self'
                              title="Aug '21 - Jan '21"
                            />
                          )}
                        </AccordionSummary>
                        <AccordionDetails
                          style={{
                            width: 260,
                          }}
                        >
                          <Flex direction='column'>
                            <Duration date=' 📆 Jul 25th 2021 - Present' />
                            <WorkDescription
                              description="Overview of some of the technologies I've worked with,
                      highlighting how & where they've been used. A list that is
                      ever-growing. Overview of some of the technologies I've
                      worked with, highlighting how & where they've been used. A
                      list that is ever-growing. Overview of some of the
                      technologies I've worked with, highlighting how & where
                      they've been used. A list that is ever-growing. Overview
                      of some of the technologies I've worked with, highlighting
                      how & where they've been used. A list that is
                      ever-growing."
                            />

                            <Role role='Leading architectural & design patterns' />
                            <Role role='Leading architectural & design patterns' />
                            <Role role='Leading architectural & design patterns' />
                            <Role role='Leading architectural & design patterns' />
                          </Flex>
                        </AccordionDetails>
                      </Accordion>
                    </Flex>
                  </Flex>

                  <Box height='24px' />
                </div>
              ) : (
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

                            <Role role='Developing architectural & design patterns for scalability' />
                            <Role role='Regularly implementing user feedback to ensure top-notch user experience.' />
                            <Role role='Supporting the life-cycle by code reviews, design, and conception of new ideas.' />
                            <Role role='Translating in-house designed mock-ups to UI while adhering to Material.io & iOS HIG' />
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
                          {/* /this is smooth tpesssssmssmooooooooooooooomm */}
                        </AccordionSummary>
                        <AccordionDetails>
                          <Flex direction='column'>
                            <Duration date=' 📆 Feb 20th 2021 - Present' />

                            <WorkDescription description='Took a developer role at Giglab as we built Ssential and Sported. I was tasked with the following:' />

                            <Role role='Architecting apps with the aim of allowing apps to scale seamlessly' />
                            <Role role='Continuously developing new time-critical features ' />
                            <Role role='Implementing animations & theming to ensure the best possible user experience' />
                            <Role role='Continuously fixing time and financially critical bugs' />
                            <Role role='Writing tests to ensure reliability of code' />
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
                              where='Freelance'
                              title='Designer & Consultant'
                            />
                          ) : (
                            <CollapsedTitle
                              where='Freelance'
                              title='Designer & Consultant'
                            />
                          )}
                        </AccordionSummary>
                        <AccordionDetails>
                          <Flex direction='column'>
                            <Duration date=' 📆 Apr 25th 2020 - Dec 31st 2020' />
                            <WorkDescription description='Enjoyed my freelance days when I doubled up as developer, UI/UX designer, graphic designer.' />

                            <Role role='Translating designs to frontend code for both web & mobile' />
                            <Role role='Consulting for startups' />
                            <Role role='UI/UX Design for startups' />
                            <Role role='Graphic Design' />
                          </Flex>
                        </AccordionDetails>
                      </Accordion>
                    </Flex>
                  </Flex>

                  <Box height='24px' />
                </div>
              )
            }
          </MediaQuery>
        </Box>
      </Center>
    </VisibilitySensor>
  );
}
