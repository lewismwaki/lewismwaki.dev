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
        left='-20px'
        pb='80px'
        pt='20px'
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
              <span style={{ color: "yellow" }}>.</span>
            </Text>
          </Box>

          <Flex py='20px'>
            <Text
              color='#d6d6d6'
              fontFamily='Fira Mono'
              fontSize='smaller'
              fontWeight='semibold'
              width='80px'
              lineHeight='1.2'
              p='4px'
              backgroundImage='linear-gradient(120deg, #cecece 100%, #cecece 100%)'
              backgroundRepeat='no-repeat'
              backgroundSize='100% 100%'
              backgroundPosition='100% 100%'
              transition='all 250ms ease-in-out'
              textColor='#000000'
              transition-property='height, width, background, font-size, background-size, font-color'
            >
              developer
            </Text>

            <Text
              color='#d6d6d6'
              fontFamily='Fira Mono'
              fontSize='smaller'
              fontWeight='semibold'
              width='74px'
              lineHeight='1.2'
              p='4px'
              ml='8px'
              backgroundImage='linear-gradient(120deg, #cecece 100%, #cecece 100%)'
              backgroundRepeat='no-repeat'
              backgroundSize='100% 100%'
              backgroundPosition='100% 100%'
              transition='all 250ms ease-in-out'
              textColor='#000000'
              transition-property='height, width, background, font-size, background-size, font-color'
            >
              designer
            </Text>
            <Text
              color='#d6d6d6'
              fontFamily='Fira Mono'
              fontSize='smaller'
              fontWeight='semibold'
              width='64px'
              lineHeight='1.2'
              p='4px'
              ml='8px'
              backgroundImage='linear-gradient(120deg, #cecece 100%, #cecece 100%)'
              backgroundRepeat='no-repeat'
              backgroundSize='100% 100%'
              backgroundPosition='100% 100%'
              transition='all 250ms ease-in-out'
              textColor='#000000'
              transition-property='height, width, background, font-size, background-size, font-color'
            >
              learner
            </Text>
          </Flex>

          <Text
            color='#d6d6d6'
            fontSize='17px'
            fontFamily='CircularBook'
            width='500px'
            lineHeight='1.2'
          >
            I thouroughly enjoy getting knee-deep in the conception, design,
            development and production phases of mobile applications.
          </Text>

          {/* cta */}
          <>
            <Flex
              mt='30px'
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
              onClick={() => {
                window.open(
                  "https://docs.google.com/document/d/1zxWzzW33wMQgQqamyp7083aGpDWgD2M6jLyjJNTAP7o/edit?usp=sharing",
                  "_blank"
                );
              }}
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

//  <Box
// position='absolute'
// height='100px'
// width='300px'
// zIndex='10'
// top='-20px'
// right='-18px'
// >
// <StaticImage src='../../../images/pointer.png' alt='' />
// </Box> */}

//  {/* <Flex direction='row' alignItems='center' pt='8px'> */
// <Text fontSize='16px' color='hsl(0, 0%, 80.7843137254902%)' fontFamily='Lucida'>
//     ˈlu(ː)ɪs mwaːkiː
//   </Text>
//   <Text
//     fontWeight='bold'
//     fontSize='15px'
//     color='#cecece'
//     fontFamily='Lucida'
//     pl='8px'
//   >
//     (n)
//   </Text>
// </Flex>
