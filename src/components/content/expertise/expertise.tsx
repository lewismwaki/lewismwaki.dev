import { Box, Center, Flex } from "@chakra-ui/layout";
import React, { useState } from "react";
import { Text } from "@chakra-ui/react";
import SectionTitle from "../../shared/section_title";
import { AnimateOnChange } from "react-animation";
import SectionDescription from "../../shared/section_description";
import { StaticImage } from "gatsby-plugin-image";

const Expertise = () => {
  const [lang, setLang] = useState("#flutter");

  return (
    <Box background='inherit' pb='100px'>
      <SectionTitle title='.expertise()' id='expertise' />

      <SectionDescription
        description="Overview of some of the technologies I've worked with, highlighting how
      & where they've been used. A list that is ever-growing."
      />

      <Center>
        <Flex direction='row' pt='48px' alignItems='center'>
          <Flex direction='column' position='relative'>
            <Flex direction='row' alignItems='flex-end'>
              <AnimateOnChange>
                <Box width='62px' height='56px'>
                  {lang == "#flutter" ? (
                    <StaticImage
                      alt=''
                      src='../../../images/flutter_logo.png'
                    />
                  ) : lang == "#react" ? (
                    <StaticImage alt='' src='../../../images/react_logo.png' />
                  ) : lang == "#firebase" ? (
                    <StaticImage
                      alt=''
                      src='../../../images/firebase_logo.png'
                    />
                  ) : lang == "#gatsby" ? (
                    <StaticImage alt='' src='../../../images/gatsby_logo.png' />
                  ) : (
                    <StaticImage alt='' src='../../../images/gatsby_logo.png' />
                  )}
                </Box>
              </AnimateOnChange>

              <Box width='20px'></Box>

              {LANG_ITEMS.map((item) => (
                <Box
                  mr='32px'
                  px='2px'
                  mb='4px'
                  fontFamily='Fira Mono'
                  fontSize='smaller'
                  fontWeight='semibold'
                  backgroundImage={
                    item.lang == "#flutter"
                      ? lang == item.lang
                        ? "linear-gradient(120deg, #3FB6D3 100%, #3FB6D3 100%)"
                        : "linear-gradient(120deg, #194954 100%, #194954 100%)"
                      : item.lang == "#react"
                      ? lang == item.lang
                        ? "linear-gradient(120deg, #61DAFB 100%, #61DAFB 100%)"
                        : "linear-gradient(120deg, #1D424C 100%, #1D424C 100%)"
                      : item.lang == "#gatsby"
                      ? lang == item.lang
                        ? "linear-gradient(120deg, #663399 100%, #663399 100%)"
                        : "linear-gradient(120deg, #29143D 100%, #29143D 100%)"
                      : item.lang == "#firebase"
                      ? lang == item.lang
                        ? "linear-gradient(120deg, #F58220 100%, #F58220 100%)"
                        : "linear-gradient(120deg, #4A2709 100%, #4A2709 100%)"
                      : "linear-gradient(120deg, #000000 100%, #000000 100%)"
                  }
                  backgroundRepeat='no-repeat'
                  backgroundSize={
                    lang == item.lang ? "100% 100%" : "100% 0.5em"
                  }
                  backgroundPosition='0 90%'
                  transition='all 250ms ease-in-out'
                  transition-property='height, width, background, font-size, background-size, font-color'
                  cursor='pointer'
                  textColor={
                    lang == item.lang
                      ? lang == "#gatsby"
                        ? "#ffffff"
                        : "#000000"
                      : "#ffffff"
                  }
                  _hover={{
                    backgroundSize: "100% 100%",
                    backgroundImage:
                      item.lang == "#flutter"
                        ? "linear-gradient(120deg, #3FB6D3 100%, #3FB6D3 100%)"
                        : item.lang == "#react"
                        ? "linear-gradient(120deg, #61DAFB 100%, #61DAFB 100%)"
                        : item.lang == "#gatsby"
                        ? "linear-gradient(120deg, #663399 100%, #663399 100%)"
                        : item.lang == "#firebase"
                        ? "linear-gradient(120deg, #F58220 100%, #F58220 100%)"
                        : "linear-gradient(120deg, #000000 100%, #000000 100%)",
                    textColor: item.lang == "#gatsby" ? "#ffffff" : "#000000",
                  }}
                  onClick={() => setLang(item.lang)}
                >
                  {item.lang}
                </Box>
              ))}
            </Flex>

            <Box height='10px'></Box>
            <Box position='relative' left='-28px' top='16px'>
              <AnimateOnChange>
                {lang == "#flutter" ? (
                  <Text
                    width='640px'
                    backgroundImage='linear-gradient( black, #19495445)'
                    backgroundSize='100% 50%'
                    backgroundPosition='0 90%'
                    backgroundRepeat='no-repeat'
                    fontSize='16px'
                    px='40px'
                    pb='60px'
                    color='#7c7c80'
                  >
                    Flutter I have worked in teams to architecture and ship
                    Android & iOS apps, with a focus on high performance and
                    great user experience. Apps I've built, embrace legacy
                    architectural patterns & state management solutions with a
                    final goal of highly scalable, apps, with a focus on high
                    performance and great user experience. management ilt,
                    embrace legacy architectural patterns & state
                  </Text>
                ) : lang == "#react" ? (
                  <Text
                    width='640px'
                    backgroundImage='linear-gradient( black, #19495445)'
                    backgroundSize='100% 50%'
                    backgroundPosition='0 90%'
                    backgroundRepeat='no-repeat'
                    fontSize='16px'
                    px='40px'
                    pb='60px'
                    color='#7c7c80'
                  >
                    React I have worked in teams to architecture and ship
                    Android & iOS apps, with a focus on high performance and
                    great user experience. Apps I've built, embrace legacy
                    architectural patterns & state management solutions with a
                    final goal of highly scalable, apps, with a focus on high
                    performance and great user experience. management ilt,
                    embrace legacy architectural patterns & state
                  </Text>
                ) : lang == "#gatsby" ? (
                  <Text
                    width='600px'
                    backgroundImage='linear-gradient( black, #19495445)'
                    backgroundSize='100% 50%'
                    backgroundPosition='0 90%'
                    backgroundRepeat='no-repeat'
                    fontSize='16px'
                    px='40px'
                    pb='60px'
                    color='#7c7c80'
                  >
                    Gatsby I have worked in teams to architecture and ship
                    Android & iOS apps, with a focus on high performance and
                    great user experience. Apps I've built, embrace legacy
                    architectural patterns & state management solutions with a
                    final goal of highly scalable, apps, with a focus on high
                    performance and great user experience. management ilt,
                    embrace legacy architectural patterns & state
                  </Text>
                ) : lang == "#firebase" ? (
                  <Box
                    width='600px'
                    backgroundImage='linear-gradient(black, #F58220, #F58220)'
                    backgroundSize='100% 80%'
                    backgroundPosition='0 100%'
                    borderRadius='16'
                    backgroundRepeat='no-repeat'
                    fontSize='16px'
                    position='relative'
                    px='6px'
                    pt='15px'
                    color='#7c7c80'
                  >
                    <Text
                      width='640px'
                      position='relative'
                      top='8px'
                      backgroundImage='linear-gradient( black, black,black, #28180B)'
                      backgroundSize='100% 90%'
                      backgroundPosition='0 100%'
                      borderRadius='16'
                      backgroundRepeat='no-repeat'
                      fontSize='16px'
                      pl='24px'
                      pr='40px'
                      pt='60px'
                      pb='28px'
                      color='#7c7c80'
                    >
                      Firebase I have worked in teams to architecture and ship
                      Android & iOS apps, with a focus on high performance and
                      great user experience. Apps I've built, embrace legacy
                      architectural patterns & state management solutions with a
                      final goal of highly scalable, apps, with a focus on high
                      performance and great user experience. management ilt,
                      embrace legacy architectural patterns & state
                    </Text>
                  </Box>
                ) : (
                  <Text width='524px' fontSize='16px' color='#7c7c80'>
                    Others anagement ilt, embrace legacy architectural pI have
                    worked in teams to architecture and ship Android & iOS
                    apps,ence. matterns & state embrace legent solutions with a
                    final goal of highly scalable, appacy architectural patterns
                    & state managems, with a focus on high performance and great
                    user experi
                  </Text>
                )}
              </AnimateOnChange>
            </Box>
          </Flex>

          <Box width='120px'></Box>
          <AnimateOnChange>
            <Box width='200px' height='200px' py='20px'>
              <StaticImage src='../../../images/flutter_graphic.png' alt='' />
            </Box>
          </AnimateOnChange>
        </Flex>
      </Center>
    </Box>
  );
};

interface Lang {
  lang: string;
  tagNo: string;
}

const LANG_ITEMS: Array<Lang> = [
  {
    lang: "#flutter",
    tagNo: "tag0",
  },

  {
    lang: "#react",
    tagNo: "tag1",
  },
  {
    lang: "#gatsby",
    tagNo: "tag2",
  },

  {
    lang: "#firebase",
    tagNo: "tag4",
  },
];
export default Expertise;
