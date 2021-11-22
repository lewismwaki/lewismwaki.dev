import { Box, Center, Flex } from "@chakra-ui/layout";
import React from "react";
import { Text } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

const TextStyle = styled.h1`
  -webkit-text-stroke: 0.75px #cecece;
  -webkit-text-fill-color: transparent;
`;
const Intro = () => {
  return (
    <Center>
      <Flex
        direction='row'
        left='-40px'
        pb='80px'
        pt='40px'
        position='relative'
      >
        <Flex
          background='inherit'
          position='relative'
          direction='column'
          justifyContent='center'
        >
          <TextStyle>
            <Text
              color='#cecece'
              fontSize='72px'
              fontFamily='Futura'
              lineHeight='1.0'
            >
              Hello,
            </Text>
          </TextStyle>
          <Box position='relative'>
            <Text
              color='#cecece'
              fontSize='88px'
              fontFamily='Futura'
              lineHeight='1.2'
            >
              <span>I'm Lewis Mwaki</span>
              <span style={{ color: "#4400ff" }}>.</span>
            </Text>
            <Box
              position='absolute'
              height='100px'
              width='300px'
              zIndex='10'
              top='-20px'
              right='-18px'
            >
              <StaticImage src='../../../images/pointer.png' alt='' />
            </Box>
          </Box>
          {/* <Flex direction='row' alignItems='center' pt='8px'> */}
          {/* <Text fontSize='16px' color='#cecece' fontFamily='Lucida'>
              ˈlu(ː)ɪs mwaːkiː
            </Text>
            <Text
              fontWeight='bold'
              fontSize='15px'
              color='#cecece'
              fontFamily='Lucida'
              pl='8px'
            >
              (n)
            </Text>
          </Flex> */}
          <Box height='14px'></Box>
          <Text
            color='#7c7c80'
            fontSize='18px'
            fontFamily='CircularBook'
            width='500px'
            lineHeight='1.2'
          >
            I exist purposely to <span style={{ color: "#ffff00" }}>{"{"}</span>{" "}
            build quality software{" "}
            <span style={{ color: "#ffff00" }}>{"}"}</span>. I enjoy getting
            knee-deep in the conception, design, development and production
            phases. Enjoy getting knee-deep in the conception, design,
            development and
          </Text>
          <Box height='40px'></Box>
          {/* cta */}
          <>
            <Flex
              backgroundColor='#4400ff'
              borderRadius='100'
              width='40px'
              position='relative'
              direction='column'
              justifyContent='center'
              height='40px'
              transition='all 0.3s ease-in-out'
              cursor='pointer'
              transition-property='width'
              _hover={{
                width: "110px",
              }}
              onClick={() => {}}
            >
              <>
                <Text
                  position='absolute'
                  left='15px'
                  fontSize='13px'
                  width='80px'
                  color='#cecece'
                  fontFamily='CircularBook'
                  fontWeight='600'
                >
                  View Resume
                </Text>
              </>
            </Flex>
          </>
          {/* <Flex>Jump to Projects </Flex> */}
        </Flex>
        <Box
          position='relative'
          top='-60px'
          width='460px'
          height='416px'
          right='-90px'
          bottom='65px'
        >
          <StaticImage src='../../../images/intro_img.png' alt='' />
        </Box>
      </Flex>
    </Center>
  );
};

export default Intro;
