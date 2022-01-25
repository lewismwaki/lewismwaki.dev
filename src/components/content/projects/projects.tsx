import React, { useRef, useState } from "react";
import { Box, Center, Flex, Text } from "@chakra-ui/layout";
import ProjectsArrowRight from "./projects_arrow_right";
import SectionDescription from "../../shared/section_description";
import SectionTitle from "../../shared/section_title";
import DisabledProjectsArrowLeft from "../projects/disabled_projects_arrow_left";
import DisabledProjectsArrowRight from "../projects/disabled_projects_arrow_right";
import { StaticImage } from "gatsby-plugin-image";
import Slider from "react-slick";
import VisibilitySensor from "react-visibility-sensor";
import ProjectsArrowLeft from "./projects_arrow_left";
import ProjectsInfo from "./projects_info";
import BkgGradient from "../../../images/bkg_gradient_1.svg";
import ProjectLinks from "./project_links";

const settings = {
  dots: false,
  infinite: false,
  pauseOnHover: true,
  autoplay: false,
  arrows: false,
};

const Projects = ({ onSectionChange }) => {
  const slider = useRef(null);
  const [projectTag, setProjectTag] = useState(0);
  return (
    <VisibilitySensor
      partialVisibility={true}
      onChange={(val) => {
        val ? onSectionChange(0) : null;
      }}
    >
      <Box position='relative'>
        <Box position='relative' overflow='clip'>
          <Center>
            <Box zIndex='10'>
              <SectionTitle title='.projects()' id='projects' />
              <SectionDescription
                description={
                  "A showcase of some of my proudest works, also highlighting\n features I've enjoyed building. From live video-calling, payment gateways, chat messaging, to data visualization, and lots more!"
                }
              />
            </Box>
          </Center>

          <Flex
            position='relative'
            direction='column'
            alignItems='center'
            justifyContent='center'
            pt='20px'
          >
            <Box
              position='absolute'
              transform='rotate(315deg)'
              width='1200px'
              height='1200px'
              top='-350px'
            >
              <BkgGradient width='1200px' height='1200px' />
            </Box>
            {/* projects images here*/}
            <Center>
              <Box width='560px' zIndex='10'>
                <>
                  {projectTag == 0 ? (
                    <StaticImage src='../../../images/traddit.png/' alt='' />
                  ) : projectTag == 1 ? (
                    <StaticImage src='../../../images/cryptoboard.png' alt='' />
                  ) : projectTag == 2 ? (
                    <StaticImage src='../../../images/group_4003.png' alt='' />
                  ) : (
                    <StaticImage src='../../../images/cryptoboard.png' alt='' />
                  )}
                </>
              </Box>
            </Center>

            {/* links */}

            {projectTag == 0 ? (
              <ProjectLinks
                android='https://play.google.com/store/apps/details?id=com.bytmatic.traddit'
                ios='https://apps.apple.com/us/app/traddit-for-reddit/id1593956528'
                github=''
                landing='http://www.traddit.io/'
              />
            ) : projectTag == 1 ? (
              <ProjectLinks
                android='https://github.com/mwakicodes/Cryptoboard/releases/download/v0.0.1-alpha/Cryptoboard.v0.0.1-alpha.apk'
                ios=''
                github='https://github.com/mwakicodes/Cryptoboard/'
                landing='https://github.com/mwakicodes/Cryptoboard#readme'
              />
            ) : projectTag == 2 ? (
              <ProjectLinks android='' ios='' github='' landing='' />
            ) : projectTag == 3 ? (
              <ProjectLinks android='' ios='' github='' landing='' />
            ) : (
              <></>
            )}

            {/* projects  controller */}
            <Center>
              <Box width='978px' height='240px' position='relative' zIndex='10'>

                {/* bkg */}
                <StaticImage
                  src='../../../images/projects_controller.png'
                  alt=''
                />
                
                {/* content */}
                <Flex
                  position='absolute'
                  top='56px'
                  left='37.3px'
                  right='46.7px'
                  bottom='31.3px'
                  direction='row'
                  justifyContent='space-between'
                  alignItems='center'
                >
                  <Box width='700px'>
                    <Slider ref={slider} {...settings}>
                      <ProjectsInfo projectTag={projectTag} />
                      <ProjectsInfo projectTag={projectTag} />
                      <ProjectsInfo projectTag={projectTag} />
                    </Slider>
                  </Box>
                  <Box width='40px'></Box>
                  <Box>
                    <Flex direction='column' alignItems='center'>
                      <Flex direction='row'>
                        {projectTag == 0 ? (
                          <DisabledProjectsArrowLeft />
                        ) : (
                          <ProjectsArrowLeft
                            cursor='pointer'
                            onClick={() => {
                              slider?.current?.slickPrev();
                              setProjectTag(projectTag - 1);
                            }}
                          />
                        )}
                        <Box width='28px'></Box>
                        {projectTag == 2 ? (
                          <DisabledProjectsArrowRight />
                        ) : (
                          <ProjectsArrowRight
                            cursor='pointer'
                            onClick={() => {
                              slider?.current?.slickNext();
                              setProjectTag(projectTag + 1);
                              console.log(projectTag);
                            }}
                          />
                        )}
                      </Flex>
                      <Box height='8px'></Box>
                      {projectTag == 0 ? (
                        <Text
                          color='#4d00ff'
                          fontSize='15px'
                          fontWeight='600'
                          fontFamily='Fira Mono'
                        >
                          1 of 3
                        </Text>
                      ) : projectTag == 1 ? (
                        <Text
                          color='#4d00ff'
                          fontSize='15px'
                          fontWeight='600'
                          fontFamily='Fira Mono'
                        >
                          2 of 3
                        </Text>
                      ) : projectTag == 2 ? (
                        <Text
                          color='#4d00ff'
                          fontSize='15px'
                          fontWeight='600'
                          fontFamily='Fira Mono'
                        >
                          3 of 3
                        </Text>
                      ) : (
                        <Text></Text>
                      )}
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            </Center>

            <Box height='24px' />
          </Flex>
        </Box>
      </Box>
    </VisibilitySensor>
  );
};

export default Projects;
