import { Box, Center, Flex } from "@chakra-ui/layout";
import React from "react";
import { Text } from "@chakra-ui/react";
import SectionTitle from "../../shared/section_title";
import SectionDescription from "../../shared/section_description";
import { StaticImage } from "gatsby-plugin-image";

const Expertise = () => {
  return (
    <Box background='inherit' pb='100px'>
      <SectionTitle title='.expertise()' id='expertise' />

      {/* <SectionDescription
        description="Overview of some of the technologies I've worked with, highlighting how
      & where they've been used. A list that is ever-growing."
      /> */}

      <Center>
        <Flex direction='row' pt='48px' alignItems='center'>
          <Flex direction='column'>
            <Flex direction='row' alignItems='flex-end'>
              <Box width='40px' height='48px'>
                <StaticImage src='../../../images/flutter_logo.png' alt='' />
              </Box>

              <Box width='40px'></Box>

              {LANG_ITEMS.map((item) => (
                <Box
                  mr='32px'
                  px='2px'
                  fontFamily='Fira Mono'
                  fontSize='smaller'
                  fontWeight='semibold'
                  backgroundImage={
                    item.lang == "#flutter"
                      ? "linear-gradient(120deg, #194954 100%, #194954 100%)"
                      : item.lang == "#gatsby"
                      ? "linear-gradient(120deg, #29143D 100%, #29143D 100%)"
                      : item.lang == "#react"
                      ? "linear-gradient(120deg, #1D424C 100%, #1D424C 100%)"
                      : item.lang == "#firebase"
                      ? "linear-gradient(120deg, #4A2709 100%, #4A2709 100%)"
                      : "linear-gradient(120deg, #5B5B00 100%, #5B5B00 100%)"
                  }
                  backgroundRepeat='no-repeat'
                  backgroundSize='100% 0.5em'
                  backgroundPosition='0 90%'
                  transition='all 250ms ease-in-out'
                  transition-property='height, width, background, font-size, background-size, font-color'
                  cursor='pointer'
                  _hover={{
                    backgroundSize: "100% 100%",
                    backgroundImage:
                      item.lang == "#flutter"
                        ? "linear-gradient(120deg, #3FB6D3 100%, #3FB6D3 100%)"
                        : item.lang == "#gatsby"
                        ? "linear-gradient(120deg, #663399 100%, #663399 100%)"
                        : item.lang == "#react"
                        ? "linear-gradient(120deg, #61DAFB 100%, #61DAFB 100%)"
                        : item.lang == "#firebase"
                        ? "linear-gradient(120deg, #F58220 100%, #F58220 100%)"
                        : "linear-gradient(120deg, #66399 100%, #63399 100%)",
                    textColor: item.lang == "#gatsby" ? "#ffffff" : "#000000",
                  }}
                  _after={{
                    content: `""`,
                    backgroundSize: "100% 100%",
                    backgroundImage:
                      item.lang == "#flutter"
                        ? "linear-gradient(120deg, #3FB6D3 100%, #3FB6D3 100%)"
                        : item.lang == "#gatsby"
                        ? "linear-gradient(120deg, #663399 100%, #663399 100%)"
                        : item.lang == "#react"
                        ? "linear-gradient(120deg, #61DAFB 100%, #61DAFB 100%)"
                        : item.lang == "#firebase"
                        ? "linear-gradient(120deg, #F58220 100%, #F58220 100%)"
                        : "linear-gradient(120deg, #66399 100%, #63399 100%)",
                    textColor: item.lang == "#gatsby" ? "#ffffff" : "#000000",
                  }}
                >
                  {item.lang}
                </Box>
              ))}
            </Flex>

            <Box height='28px'></Box>

            <Text width='524px' fontSize='16px' color='#7c7c80'>
              I have worked in teams to architecture and ship Android & iOS
              apps, with a focus on high performance and great user experience.
              Apps I've built, embrace legacy architectural patterns & state
              management solutions with a final goal of highly scalable,
              apps, with a focus on high performance and great user experience.
              management  ilt, embrace legacy architectural patterns & state
            </Text>
          </Flex>

          <Box width='160px'></Box>
          <Box width='200px' height='200px'py="20px">
            <StaticImage src='../../../images/flutter_graphic.png' alt='' />
          </Box>
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
