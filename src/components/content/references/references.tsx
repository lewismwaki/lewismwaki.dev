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
import VisibilitySensor from "react-visibility-sensor";
import BkgGradient from "../../../images/bkg_gradient_1.svg";
import ReferencesGroup from "../../../images/references_group.svg";
import ReferencesHoriz from "../../../images/references_horiz.svg";

const settings = {
  dots: false,
  infinite: true,
  pauseOnHover: true,
  autoplaySpeed: 6000,
  autoplay: true,
  arrows: false,
};

const References = ({ onSectionChange }) => {
  const slider = useRef(null);
  return (
    <VisibilitySensor
      partialVisibility={true}
      onChange={(val) => {
        val ? onSectionChange(3) : null;
      }}
    >
      <Box background='inherit'>
        <SectionTitle title='.references()' id='references' />

        <SectionDescription description="What people are saying... You're in good company :)" />

        <div>
          <Center
            position='relative'
            overflowX='clip'
            transition='all 0.3s'
            top={{ md: "-100px", lg: "-150px" }}
          >
            <Box
              width='200px'
              height='200px'
              position='absolute'
              left='100px'
              top='201.5px'
              zIndex='1'
            >
              <StaticImage src='../../../images/peep_projects.png/' alt='' />
            </Box>

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
                top='45px'
                left='17px'
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
                bottom='28px'
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
        </div>
      </Box>
    </VisibilitySensor>
  );
};

const ReferenceItems: Array<ReferenceItem> = [
  {
    refereeName: "Andrew Zyu",
    refereeAvi: "https://bit.ly/kent-c-dodds",
    refereeTitle: "CTO at Spotify",
    referenceText:
      "What people are saying. What people are saying. What people are saying. What people are saying. What people are saying. What people are saying. What people are saying. What people are saying. What people are saying. What people are saying. What people are saying. What people are saying.",
  },

  {
    refereeName: "Lewis Mwaki",
    refereeAvi: "https://bit.ly/kent-c-dodds",
    refereeTitle: "Android Lead at Giglab.io",
    referenceText:
      "What people are saying. What people are saying. What people are saying. What people are saying. What people are saying. What people are saying. What people are saying. What people are saying. What people are saying. What people are saying. ",
  },

  {
    refereeName: "Jake Rogers",
    refereeAvi: "https://bit.ly/kent-c-dodds",
    refereeTitle: "CEO at Bytmatic Inc.",
    referenceText:
      "Lewis is an extremely talented mobile developer with great eye for UX/UI design. He's one of the hardest working and intelligent people I’ve ever met. His work ethic continues to blow me away with how fast he's able to complete tasks without sacrificing quality. Traddit is lucky to work with him and anyone who works with him will also be lucky.",
  },
];

export default References;
