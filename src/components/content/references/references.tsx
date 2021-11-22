import { StaticImage } from "gatsby-plugin-image";
import React, { useRef } from "react";
import SectionTitle from "../../shared/section_title";
import { Avatar, Flex, Box, Center, Text } from "@chakra-ui/react";
import ArrowRight from "../../shared/arrow-right";
import ArrowLeft from "../../shared/arrow-left";
import Slider from "react-slick";
import ReferenceDetails from "./reference_details";
import { ReferenceItem } from "./reference_details";
import ReferenceArrowLeft from "../../shared/reference_arrow_left";
import ReferenceArrowRight from "../../shared/reference_arrow_right";

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

      {/* reference box */}
      <Center position='relative' overflowX='clip' top='-100px'>
        <Box
          height='293.3px'
          width='544px'
          position='relative'
          right='-100px'
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

        <Box position='relative' width='1130px' height='1130px' right='-50px'>
          <Box
            filter='blur(80px)'
            position='absolute'
            width='1130px'
            height='1130px'
            transform='rotate(90deg)'
          >
            <StaticImage src='../../../images/rectangle_154.svg' alt='' />
          </Box>

          <Box position='absolute' width='1130px' height='1130px'>
            <StaticImage
              src='../../../images/group_194.svg'
              alt=''
            ></StaticImage>
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
