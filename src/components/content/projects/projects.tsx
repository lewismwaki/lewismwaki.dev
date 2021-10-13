import { Box, Center, Flex, Text } from "@chakra-ui/layout";
import React, { useEffect, useRef, useState, Component } from "react";
import SectionDescription from "../../shared/section_description";
import SectionTitle from "../../shared/section_title";
import { StaticImage } from "gatsby-plugin-image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowRight from "../../shared/arrow-right";
import ArrowLeft from "./../../shared/arrow-left";

const projectImagesProps = {
  dots: false,
  infinite: true,
  arrows: false,
};

const projectDetailsProps = {
  dots: false,
  infinite: true,
  arrows: true,
  prevArrow: <ArrowLeft />,
  nextArrow: <ArrowRight />,
};

const Projects = () => {
  const [nav1, setNav1] = React.useState(null);
  const [nav2, setNav2] = React.useState(null);
  let slider1: Slider;
  let slider2: Slider;

  React.useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, [slider1, slider2]);
  return (
    <Box background='inherit' pb='100px'>
      <SectionTitle title='.projects()' id='projects' />
      <SectionDescription description='A brief overview of some of my proudest works' />

      {/* projects images here*/}
      <Center>
        <Box width='700px' height='700px'>
          <Slider
            asNavFor={nav2}
            ref={(slider) => (slider1 = slider)}
            {...projectImagesProps}
          >
            <StaticImage src='../../../images/cryptoboard.png' alt='' />

            <Flex
              direction='row'
              backgroundColor='#8d1e8d'
              width='200px'
              height='100px'
            >
              <Text>ddd</Text>
            </Flex>
          </Slider>
        </Box>
      </Center>

      {/* projects controller */}
      <Box width="200px"height="200px">
        
        <StaticImage src="../../../images/peep_projects.png/"alt=""/>
      </Box>
      <Center>
        <Box width='978px' height='240px' position='relative'>
          
          {/* bkg */}
          <StaticImage src='../../../images/projects_controller.png' alt='' />

          {/* content */}
          <Box
            position='absolute'
            top='56px'
            left='37.3px'
            right='46.7px'
            bottom='31.3px'
            background='red'
            justifyContent='space-between'
          >
            <Slider
              asNavFor={nav1}
              ref={(slider) => (slider2 = slider)}
              {...projectDetailsProps}
            >
              <Box background='blue'>
                {/* section 1 */}
                <Text textColor='black'>text section 1</Text>
                {/* section 2 */}
                <Text textColor='black'>text section 2</Text>
                {/* section 3 */}
                <Text textColor='black'>text section 3</Text>
              </Box>
              <Box background='green'>
                {/* section 1 */}
                <Text textColor='black'>text section 1</Text>
                {/* section 2 */}
                <Text textColor='black'>text section 2</Text>
                {/* section 3 */}
                <Text textColor='black'>text section 3</Text>
              </Box>
            </Slider>
          </Box>
          {/* <Box position="absolute" right="32px" bottom="32px">
            <Flex direction="row">
              <ArrowLeft
                className="slick-arrow"
                cursor="pointer"
                onClick={() => nav2?.current?.slickPrev()}
              />
              <Box width="28px"></Box>
              <ArrowRight
                cursor="pointer"
                onClick={() => nav2?.current?.slickNext()}
              />
            </Flex>
          </Box> */}
        </Box>
      </Center>
    </Box>
  );
};

export default Projects;
