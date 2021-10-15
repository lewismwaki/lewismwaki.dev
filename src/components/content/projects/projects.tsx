import { Box, Center, Flex, Text } from "@chakra-ui/layout";
import React, { useEffect, useRef, useState, Component } from "react";
import ProjectsArrowRight from "./projects_arrow_right";

import SectionDescription from "../../shared/section_description";
import SectionTitle from "../../shared/section_title";
import DisabledProjectsArrowLeft from "../projects/disabled_projects_arrow_left";
import DisabledProjectsArrowRight from "../projects/disabled_projects_arrow_right";
import { StaticImage } from "gatsby-plugin-image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AnimateOnChange } from "react-animation";
import ProjectsArrowLeft from "./projects_arrow_left";

const settings = {
  dots: false,
  infinite: false,
  pauseOnHover: true,
  autoplay: false,
  arrows: false,
};

const Projects = () => {
  const slider = useRef(null);
  const [projectTag, setProjectTag] = useState(0);

  console.log("tag " + projectTag);

  return (
    <Box background='inherit' pb='100px'>
      <SectionTitle title='.projects()' id='projects' />
      <SectionDescription description='A brief overview of some of my proudest works' />

      {/* projects images here*/}
      <Center>
        <Box width='600px' height='600px'>
          <AnimateOnChange>
            {projectTag == 0 ? (
              <StaticImage src='../../../images/cryptoboard.png' alt='' />
            ) : projectTag == 1 ? (
              <StaticImage src='../../../images/image_13.png' alt='' />
            ) : projectTag == 2 ? (
              <StaticImage src='../../../images/cryptoboard.png' alt='' />
            ) : (
              <StaticImage src='../../../images/s.png' alt='' />
            )}
          </AnimateOnChange>
        </Box>
      </Center>

      {/* projects controller */}

      <Center>
        <Box width='978px' height='240px' position='relative'>
          <Box
            width='200px'
            height='200px'
            position='absolute'
            left='0px'
            top='-202px'
            zIndex='1'
          >
            <StaticImage src='../../../images/peep_projects.png/' alt='' />
          </Box>
          {/* bkg */}
          <StaticImage src='../../../images/projects_controller.png' alt='' />

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
            // backgroundColor='red'
          >
            <Box width='700px'>
              <Slider ref={slider} {...settings}>
                <>
                  <Flex direction='row' height='150px'>
                    <Box width='220px' height='150px' backgroundColor='#0000fa'>
                      1--------- name + features
                    </Box>

                    <Box width='40px'></Box>

                    <Box width='440px' height='150px' backgroundColor='#00eb1f'>
                      description
                    </Box>
                  </Flex>
                </>
                <>
                  <Flex direction='row' height='150px'>
                    <Box width='220px' height='150px' backgroundColor='#923434'>
                      2--------- name + features
                    </Box>

                    <Box width='40px'></Box>

                    <Box width='440px' height='150px' backgroundColor='#ff00c8'>
                      description
                    </Box>
                  </Flex>
                </>
                <>
                  <Flex direction='row' height='150px'>
                    <Box width='220px' height='150px' backgroundColor='#00faed'>
                      3--------- name + features
                    </Box>

                    <Box width='40px'></Box>

                    <Box width='440px' height='150px' backgroundColor='#0b4a4d'>
                      description
                    </Box>
                  </Flex>
                </>
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
    </Box>
  );
};

export default Projects;
