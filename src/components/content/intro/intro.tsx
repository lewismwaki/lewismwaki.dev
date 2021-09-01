import { Box, Center, Flex } from "@chakra-ui/layout";
import React from "react";
import { Stack, Text } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
const Intro = () => {
  return (
    <Flex direction='row' position='relative'>
      <Flex
        height='75vh'
        pl='40'
        background='inherit'
        direction='column'
        justifyContent='center'
        pb='55'
      >
        <Text color='#707070' fontSize='20'>
          Hi my name is
        </Text>
        <Text color='#707070' fontSize='80px'>
          Lewis Mwaki
        </Text>
        <Text color='#707070' fontSize='20' width='500px'>
          Mobile applications developer based in Nairobi, Kenya. Mobile
          applications developer based in Nairobi, Kenya.
        </Text>
      </Flex>

      <Box width='200px'></Box>
      <Box height='300px' width='300px' zIndex='10'>
        <StaticImage src='../../../images/about_img.png' alt='' />
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
