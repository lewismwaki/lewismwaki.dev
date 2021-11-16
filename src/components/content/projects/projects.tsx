import React, { useRef, useState } from "react";
import { Box, Center, Flex, Text } from "@chakra-ui/layout";
import ProjectsArrowRight from "./projects_arrow_right";
import SectionDescription from "../../shared/section_description";
import SectionTitle from "../../shared/section_title";
import DisabledProjectsArrowLeft from "../projects/disabled_projects_arrow_left";
import DisabledProjectsArrowRight from "../projects/disabled_projects_arrow_right";
import { StaticImage } from "gatsby-plugin-image";
import Slider from "react-slick";
import svg from "../../../images/rectangle_1752.svg";
import VisibilitySensor from "react-visibility-sensor";
import ProjectsArrowLeft from "./projects_arrow_left";
import ProjectsInfo from "./projects_info";

import MeshProjects from "./../../shared/mesh_projects";

import styled from "styled-components";
// import RectangleComponent from "../../../images/RectangleComponent";


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
    <Box position='relative' backgroundImage='url(${svg})'>
      <Box position='relative'>
        <Center>
          <Box zIndex='10'>
            <VisibilitySensor
              partialVisibility={true}
              onChange={(val) => {
                val ? onSectionChange(2) : null;
              }}
            >
              <SectionTitle title='.projects()' id='projects' />
            </VisibilitySensor>
            <SectionDescription description='A brief overview of some of my proudest works' />
          </Box>
        </Center>

        {/* projects images here*/}
        <Center>
          <Box width='430px' height='452px' zIndex='10'>
            <>
              {projectTag == 0 ? (
                <StaticImage
                  src='../../../images/group_3910.png/'
                  alt=''
                  width={430}
                  height={452}
                />
              ) : projectTag == 1 ? (
                <StaticImage src='../../../images/image_13.png' alt='' />
              ) : projectTag == 2 ? (
                <StaticImage src='../../../images/cryptoboard.png' alt='' />
              ) : (
                <StaticImage src='../../../images/image_13.png' alt='' />
              )}
            </>
          </Box>
        </Center>
        {/* projects controller */}
        <Center>
          <Box width='978px' height='240px' position='relative' zIndex='10'>
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
            >
              <Box width='700px'>
                <Slider ref={slider} {...settings}>
                  <ProjectsInfo />
                  <ProjectsInfo />
                  <ProjectsInfo />
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
    </Box>
  );
};

export default Projects;
