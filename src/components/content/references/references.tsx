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
import MediaQuery from "react-responsive";

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
    <MediaQuery maxWidth={769}>
      {(isMobile: boolean) =>
        isMobile ? (
          <Box background='inherit'>
            <SectionTitle title='.references()' id='references' />
            <SectionDescription description="Overview of some of the technologies I've worked with, highlighting how & where they've been used. A list that is ever-growing." />
            <Center
              position='relative'
              py='40px'
              overflowX='clip'
              transition='all 0.3s'
            >
              {/* reference box */}
              <Box
                height='174px'
                width='340px'
                position='relative'
                transition='all 0.3s'
                zIndex='10'
              >
                {/* background img */}
                <Box transition='all 0.3s' height='174px' width='340px'>
                  <StaticImage
                    src='../../../images/references_img_bkg.png'
                    alt=''
                  />
                </Box>

                {/* content*/}
                <Box
                  transition='all 0.3s'
                  position='absolute'
                  top='16px'
                  left='6.7px'
                  right='10.7px'
                  bottom='10px'
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
                <Box
                  position='absolute'
                  right='10px'
                  bottom='10px'
                  transition='all 0.3s'
                >
                  <Flex direction='row'>
                    <ReferenceArrowLeft
                      cursor='pointer'
                      onClick={() => slider?.current?.slickPrev()}
                    />
                    <Box width='10px'></Box>
                    <ReferenceArrowRight
                      cursor='pointer'
                      onClick={() => slider?.current?.slickNext()}
                    />
                  </Flex>
                </Box>
              </Box>
            </Center>
          </Box>
        ) : (
          <Box background='inherit'>
            <SectionTitle title='.references()' id='references' />

            <SectionDescription description="Overview of some of the technologies I've worked with, highlighting how & where they've been used. A list that is ever-growing." />

            <Center
              position='relative'
              overflowX='clip'
              transition='all 0.3s'
              top={{ md: "-100px", lg: "-150px" }}
            >
              {/* reference box */}
              <Box
                height={{ md: "194px", lg: "293px" }}
                width={{ md: "362px", lg: "544px" }}
                position='relative'
                transition='all 0.3s'
                right={{ sm: "-100px", md: "-200px", lg: "-300px" }}
                zIndex='10'
              >
                {/* background img */}
                <Box
                  transition='all 0.3s'
                  height={{ md: "194px", lg: "293px" }}
                  width={{ md: "362px", lg: "544px" }}
                >
                  <StaticImage
                    src='../../../images/references_img_bkg.png'
                    alt=''
                  />
                </Box>

                {/* content*/}
                <Box
                  transition='all 0.3s'
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
                <Box
                  position='absolute'
                  right='32px'
                  bottom='32px'
                  transition='all 0.3s'
                >
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
              <Box
                position='relative'
                transition='all 0.3s'
                right={{ md: "-100px", lg: "-250px" }}
              >
                <Box
                  position='absolute'
                  width={{ md: "1000px", lg: "1300px" }}
                  transition='all 0.3s'
                  transform='rotate(90deg)'
                  height={{ md: "1000px", lg: "1300px" }}
                >
                  <BkgGradient
                    width={{ md: "1000px", lg: "1300px" }}
                    height={{ md: "1000px", lg: "1300px" }}
                  />
                </Box>

                <Box
                  position='relative'
                  transition='all 0.3s'
                  width={{ md: "900px", lg: "1100px" }}
                  height={{ md: "900px", lg: "1100px" }}
                >
                  <ReferencesGroup
                    width={{ md: "900px", lg: "1100px" }}
                    height={{ md: "900px", lg: "1100px" }}
                  />
                </Box>
              </Box>
            </Center>
          </Box>
        )
      }
    </MediaQuery>
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
