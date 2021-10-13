import { Box, Center, Flex } from "@chakra-ui/layout";
import React from "react";
import { Stack, Text } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import GlobalFonts from "../../../fonts/fonts";
const Intro = () => {
  return (
    <Flex direction='row' position='relative'>
      <GlobalFonts />

      <Flex
        pl='80px'
        background='inherit'
        direction='column'
        justifyContent='center'
        pb='55px'
        pt='20px'
      >
        <Text color='#7c7c80' fontSize='32px'>
          Hello, I'm
        </Text>
        <Box position='relative'>
          <Text color='#7c7c80' fontSize='80px'>
            Lewis Mwaki
          </Text>

          <Box
            position='absolute'
            height='100px'
            width='300px'
            zIndex='10'
            top='-10px'
            right='8px'
          >
            <StaticImage src='../../../images/pointer.png' alt='' />
          </Box>
        </Box>

        <Flex direction='row'  alignItems="center" pt="8px">
          <Text fontSize='16px' color='#7c7c80' fontFamily='Font Name'>
            ˈlu(ː)ɪs mwaːkiː
          </Text>

          <Text
            fontWeight='bold'
            fontSize='15px'
            color='#7c7c80'
            fontFamily='Font Name'
            pl='8px'
          >
            (n)
          </Text>
        </Flex>

        <Box height='14px'></Box>
        <Text color='#7c7c80' fontSize='18px' width='500px'>
          I exist purposely to \build quality software\ I enjoy getting
          knee-deep in the conception, design, development and production
          phases.
        </Text>
      </Flex>

      <Box width='200px'></Box>
      <Box height='300px' width='300px' zIndex='10'>
        {/* <StaticImage src='../../../images/about_img.png' alt='' /> */}
      </Box>

      <Box
        position='absolute'
        height='70px'
        width='60px'
        right='90px'
        bottom='65px'
      >
        <StaticImage src='../../../images/shapes_1.png' alt='' />
      </Box>
    </Flex>
  );
};

export default Intro;
