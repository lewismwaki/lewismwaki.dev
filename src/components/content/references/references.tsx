import { StaticImage } from "gatsby-plugin-image";
import React, { useRef } from "react";
import SectionTitle from "../../shared/section_title";
import { Flex, Box, Center } from "@chakra-ui/react";
import Slider from "react-slick";
import ReferenceDetails from "./reference_details";
import { ReferenceItem } from "./reference_details";
import ReferenceArrowLeft from "../../shared/reference_arrow_left";
import ReferenceArrowRight from "../../shared/reference_arrow_right";
import SectionDescription from "./../../shared/section_description";
import BkgGradient from "../../../images/bkg_gradient_1.svg";
import ReferencesGroup from "../../../images/references_group.svg";


const settings = {
  dots: false,
  infinite: true,
  pauseOnHover: true,
  autoplaySpeed: 6000,
  autoplay: true,
  arrows: false,
};

const References = () => {
  const slider = useRef(null);
  return (
    <Box background='inherit'>
      <SectionTitle title='.references()' id='references' />

      <SectionDescription description="Overview of some of the technologies I've worked with, highlighting how & where they've been used. A list that is ever-growing." />

      <Center position='relative' overflowX='clip' top='-150px'>
        
        {/* reference box */}
        <Box
          height='293.3px'
          width='544px'
          position='relative'
          right='-300px'
          zIndex='10'
        >
          {/* background img */}
          <Box height='293.3px' width='544px'>
            <StaticImage src='../../../images/references_img_bkg.png' alt='' />
          </Box>

          {/* content*/}
          <Box
            position='absolute'
            top='50px'
            left='18.7px'
            right='30.7px'
            bottom='32px'
          >
            <Slider ref={slider} {...settings}>
              {ReferenceItems.map((ref) => (
                <ReferenceDetails
                  refereeName={ref.refereeName}
                  refereeAvi={ref.refereeAvi}
                  refereeTitle={ref.refereeTitle}
                  referenceText={ref.referenceText}
                />
              ))}
            </Slider>
          </Box>

          {/* buttons */}
          <Box position='absolute' right='32px' bottom='32px'>
            <Flex direction='row'>
              <ReferenceArrowLeft
                cursor='pointer'
                onClick={() => slider?.current?.slickPrev()}
              />
              <Box width='28px'></Box>
              <ReferenceArrowRight
                cursor='pointer'
                onClick={() => slider?.current?.slickNext()}
              />
            </Flex>
          </Box>
        </Box>

        {/* references graphic */}
        <Box position='relative' right='-250px'>
          <Box
            position='absolute'
            width='1300px'
            transform='rotate(90deg)'
            height='1300px'
          >
            <BkgGradient width='1300px' height='1300px' />
          </Box>

          <Box position='relative' width='1100px' height='1100px'>
            <ReferencesGroup width='1100px' height='1100px' />
          </Box>
        </Box>
      </Center>
    </Box>
  );
};

const ReferenceItems: Array<ReferenceItem> = [
  {
    refereeName: "Andrew Zyu",
    refereeAvi: "https://bit.ly/kent-c-dodds",
    refereeTitle: "Software Engineer at Spotify",
    referenceText:
      "What people are saying. What people are saying. What people are saying. What people are saying. What people are saying.",
  },

  {
    refereeName: "Lewis Mwaki",
    refereeAvi: "https://bit.ly/kent-c-dodds",
    refereeTitle: "Android Lead at Giglab.io",
    referenceText:
      "What people are saying. What people are saying. What people are saying. What people are saying. What people are saying. What people are saying. What people are saying. What people are saying. What people are saying. What people are saying. ",
  },
];

export default References;
