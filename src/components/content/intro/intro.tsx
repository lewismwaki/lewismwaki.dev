import { Box, Center, Flex } from "@chakra-ui/layout";
import React from "react";
import { Text } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import styled, { keyframes } from "styled-components";

const TextStyle = styled.h1`
  -webkit-text-stroke: 0.75px #cecece;
  -webkit-text-fill-color: transparent;
`;

const scrollDownAnimation = keyframes`
  0% { opacity: 0; transform: translate(0, 0); }
  40% { opacity: 1; }
  80% { opacity: 0; transform: translate(0, 20px); }
  100% { opacity: 0; }
`;

const ScrollDown = styled.div`
  border: 2px solid #fff;
  border-radius: 20px;
  bottom: 30px;
  height: 50px;
  left: 0;
  margin: 0 auto;
  position: absolute;
  right: 0;
  width: 30px;
  cursor: pointer;

  &:before {
    animation: ${scrollDownAnimation} 2s infinite;
    background-color: #fff;
    border-radius: 100%;
    content: "";
    height: 6px;
    left: 0;
    margin: 0 auto;
    position: absolute;
    right: 0;
    top: 10px;
    width: 6px;
  }
`;

const Intro = () => {
  return (
    <Center>
      <Flex
        direction='row'
        left='-28px'
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
              fontSize='88px'
              fontFamily='Futura'
              lineHeight='1.0'
            >
              Hello,
            </Text>
          </TextStyle>

          <Box position='relative'>
            <Text
              color='#cecece'
              fontSize='92px'
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
              width='fit-content'
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
              software engineer
            </Text>
            <Text
              color='#d6d6d6'
              fontFamily='Fira Mono'
              fontSize='smaller'
              fontWeight='semibold'
              width='fit-content'
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
              ui/ux designer
            </Text>
            <Text
              color='#d6d6d6'
              fontFamily='Fira Mono'
              fontSize='smaller'
              fontWeight='semibold'
              width='fit-content'
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
            fontSize='16.5px'
            fontFamily='CircularBook'
            width='530px'
            lineHeight='1.2'
          >
            Absolutely love helping companies, start-ups and individuals
            leverage the extensive capabilities of modern technologies to build
            immersive, innovative, and future-proof experiences for the next
            generation of the internet.
          </Text>

          {/* cta */}
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
                "https://github.com/mwakicodes/lewismwaki.dev/files/8680615/Lewis_Mwaki-Resume.pdf",
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
        </Flex>

        <ScrollDown
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight + 40,
              behavior: "smooth",
            });
          }}
        />

        <Box
          position='relative'
          top='-20px'
          width='460px'
          height='416px'
          right='-30px'
        >
          <StaticImage
            src='../../../images/intro_img.png'
            alt=''
            placeholder='tracedSVG'
          />
        </Box>
      </Flex>
    </Center>
  );
};

export default Intro;
