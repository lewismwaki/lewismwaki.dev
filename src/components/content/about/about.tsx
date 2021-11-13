import { Box, Flex } from "@chakra-ui/layout";
import React from "react";
import { Text } from "@chakra-ui/react";
import SectionTitle from "../../shared/section_title";
import { StaticImage } from "gatsby-plugin-image";
import VisibilitySensor from "react-visibility-sensor";

const About = ({ onSectionChange }) => {
  return (
    <Box  background='inherit'>
      <VisibilitySensor
        partialVisibility={true}
        onChange={(val) => {
          val ? onSectionChange(0) : null;
        }}
      >
        <SectionTitle title='.aboutMe()' id='about' />
      </VisibilitySensor>

      <Flex
        direction='row'
        justify='center'
        pl='96px'
        pt='40px'
        position='relative'
      >
        <Box width={384} height={468} zIndex='10'>
          <StaticImage src='../../../images/about_img.png' alt='' />
        </Box>

        <Flex
          direction='column'
          justify='center'
          position='relative'
          left='-10px'
        >
          <Flex direction='row'>
            <Box width='85px' pt='5px'>
              <StaticImage src='../../../images/group_9.png' alt='' />
            </Box>

            <Text
              px='2px'
              py='1px'
              ml='5px'
              height='18px'
              fontFamily='Fira Mono'
              fontSize='11px'
              fontWeight='semibold'
              backgroundColor='#FFFF00'
              color='#000000'
            >
              prolific
            </Text>
          </Flex>

          <Box height='80px'></Box>

          <Flex direction='row' alignItems='flex-end'>
            <Box width='85px'>
              <StaticImage src='../../../images/arrow_1.png' alt='' />
            </Box>

            <Text
              px='2px'
              py='1px'
              ml='5px'
              mb='10px'
              height='18px'
              fontFamily='Fira Mono'
              fontSize='11px'
              fontWeight='semibold'
              backgroundColor='#FFFF00'
              color='#000000'
            >
              inquisitive
            </Text>
          </Flex>

          <Box height='80px'></Box>

          <Flex direction='row'>
            <Box width='85px' pt='5px'>
              <StaticImage src='../../../images/group_42.png' alt='' />
            </Box>

            <Text
              px='2px'
              py='1px'
              ml='5px'
              height='18px'
              fontFamily='Fira Mono'
              fontSize='11px'
              fontWeight='semibold'
              backgroundColor='#FFFF00'
              color='#000000'
            >
              pro-cyclist
            </Text>
          </Flex>
        </Flex>

        <Box width='100px'></Box>

        <Flex direction='column' mt='20px'>
          <Box height="10px"></Box>
          <Text fontFamily='Fira Mono' color='#FFFF04' fontSize='23px'>
            // meet lewis
          </Text>

          <Box height="10px"></Box>
          <Text
            color='#cecece'
            fontSize='16px'
            fontFamily='CircularBook'
            width='500px'
          >
            Mobile applications developer based in Nairobi, Kenya. Mobile Mobile
            applications developer based in Nairobi, Kenya. Mobile Mobile
            applications developer based in Nairobi, Kenya. Mobile applications
            developer based in Nairobi, Kenya. developer based in Nairobi,
            Kenya. developer based in Nairobi, Kenya. developer based in
            Nairobi, Kenya.
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default About;
