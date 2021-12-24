import React, { useState } from "react";

import { Box, Center, Flex } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import SectionTitle from "../../shared/section_title";
import SectionDescription from "../../shared/section_description";
import { StaticImage } from "gatsby-plugin-image";
import VisibilitySensor from "react-visibility-sensor";
import LangDescription from "./lang_description";
import MediaQuery from "react-responsive";
export default function Expertise({ onSectionChange }) {
  const [lang, setLang] = useState("#flutter");

  return (
    <MediaQuery maxWidth={769}>
      {(isMobile: boolean) =>
        isMobile ? (
          <Box background='inherit' pb='100px'>
            <VisibilitySensor
              partialVisibility={true}
              onChange={(val) => {
                val ? onSectionChange(3) : null;
              }}
            >
              <SectionTitle title='.expertise()' id='expertise' />
            </VisibilitySensor>

            <SectionDescription
              description="Overview of some of the technologies I've worked with, highlighting how
      & where they've been used. A list that is ever-growing."
            />

            <Center>
              <Flex
                direction='row'
                pt={{ sm: "16px", md: "32px", lg: "48px" }}
                alignItems='center'
              >
                {/* lang */}

                <Box position='relative'>
                  <Box width='340px'>
                    <StaticImage
                      src='../../../images/expertise_bkg.png'
                      alt=''
                    />
                  </Box>

                  <Flex direction='column' position='absolute' top='20px'>
                    {/* lang */}
                    <Flex direction='row' alignItems='flex-end' px='10px'>
                      <Box width='40px' mr='10px'>
                        {lang == "#flutter" ? (
                          <StaticImage
                            alt=''
                            src='../../../images/flutter_logo.png'
                          />
                        ) : lang == "#react" ? (
                          <StaticImage
                            alt=''
                            src='../../../images/react_logo.png'
                          />
                        ) : lang == "#firebase" ? (
                          <StaticImage
                            alt=''
                            src='../../../images/firebase_logo.png'
                          />
                        ) : lang == "#gatsby" ? (
                          <StaticImage
                            alt=''
                            src='../../../images/gatsby_logo.png'
                          />
                        ) : (
                          <StaticImage
                            alt=''
                            src='../../../images/gatsby_logo.png'
                          />
                        )}
                      </Box>
                      {LANG_ITEMS.map((item) => (
                        <Box
                          mr='12px'
                          px='4px'
                          mb='2px'
                          fontFamily='Fira Mono'
                          fontSize='10.5px'
                          fontWeight='semibold'
                          backgroundImage={
                            item.lang == "#flutter"
                              ? lang == item.lang
                                ? "linear-gradient(120deg, #3FB6D3 100%, #3FB6D3 100%)"
                                : "linear-gradient(120deg, #3fb5d384 100%, #3fb5d384 100%)"
                              : item.lang == "#react"
                              ? lang == item.lang
                                ? "linear-gradient(120deg, #61DAFB 100%, #61DAFB 100%)"
                                : "linear-gradient(120deg, #61dafb86 100%, #61dafb86 100%)"
                              : item.lang == "#gatsby"
                              ? lang == item.lang
                                ? "linear-gradient(120deg, #663399 100%, #663399 100%)"
                                : "linear-gradient(120deg, #66339981 100%, #66339981 100%)"
                              : item.lang == "#firebase"
                              ? lang == item.lang
                                ? "linear-gradient(120deg, #F58220 100%, #F58220 100%)"
                                : "linear-gradient(120deg, #f5832088 100%, #f5832088 100%)"
                              : "linear-gradient(120deg, #000000 100%, #000000 100%)"
                          }
                          backgroundRepeat='no-repeat'
                          backgroundSize={
                            lang == item.lang ? "100% 100%" : "100% 0.5em"
                          }
                          backgroundPosition='0 80%'
                          transition='all 250ms ease-in-out'
                          transition-property='height, width, background, font-size, background-size, font-color'
                          cursor='pointer'
                          textColor={
                            lang == item.lang
                              ? lang == "#gatsby"
                                ? "#ffffff"
                                : "#000000"
                              : "#4D00FF"
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
                            textColor:
                              item.lang == "#gatsby" ? "#ffffff" : "#000000",
                          }}
                          onClick={() => setLang(item.lang)}
                        >
                          {item.lang}
                        </Box>
                      ))}
                    </Flex>

                    {/* description */}
                    <LangDescription  lang={lang} />
                  </Flex>
                </Box>
              </Flex>
            </Center>

            <Box height='24px' />
          </Box>
        ) : (
          <Box background='inherit' pb='100px'>
            <VisibilitySensor
              partialVisibility={true}
              onChange={(val) => {
                val ? onSectionChange(3) : null;
              }}
            >
              <SectionTitle title='.expertise()' id='expertise' />
            </VisibilitySensor>

            <SectionDescription
              description="Overview of some of the technologies I've worked with, highlighting how
      & where they've been used. A list that is ever-growing."
            />

            <Center>
              <Flex direction='row' pt='48px' alignItems='center'>
                {/* lang */}

                <Box position='relative'>
                  <Box width='584px'>
                    <StaticImage
                      src='../../../images/expertise_bkg.png'
                      alt=''
                    />
                  </Box>

                  <Flex direction='column' position='absolute' top='40px'>
                    {/* lang */}
                    <Flex direction='row' alignItems='flex-end' px='20px'>
                      <Box width='56px' mr='10px'>
                        {lang == "#flutter" ? (
                          <StaticImage
                            alt=''
                            src='../../../images/flutter_logo.png'
                          />
                        ) : lang == "#react" ? (
                          <StaticImage
                            alt=''
                            src='../../../images/react_logo.png'
                          />
                        ) : lang == "#firebase" ? (
                          <StaticImage
                            alt=''
                            src='../../../images/firebase_logo.png'
                          />
                        ) : lang == "#gatsby" ? (
                          <StaticImage
                            alt=''
                            src='../../../images/gatsby_logo.png'
                          />
                        ) : (
                          <StaticImage
                            alt=''
                            src='../../../images/gatsby_logo.png'
                          />
                        )}
                      </Box>
                      {LANG_ITEMS.map((item) => (
                        <Box
                          mr='24px'
                          px='4px'
                          mb='2px'
                          fontFamily='Fira Mono'
                          fontSize='12.5px'
                          fontWeight='semibold'
                          backgroundImage={
                            item.lang == "#flutter"
                              ? lang == item.lang
                                ? "linear-gradient(120deg, #3FB6D3 100%, #3FB6D3 100%)"
                                : "linear-gradient(120deg, #3fb5d384 100%, #3fb5d384 100%)"
                              : item.lang == "#react"
                              ? lang == item.lang
                                ? "linear-gradient(120deg, #61DAFB 100%, #61DAFB 100%)"
                                : "linear-gradient(120deg, #61dafb86 100%, #61dafb86 100%)"
                              : item.lang == "#gatsby"
                              ? lang == item.lang
                                ? "linear-gradient(120deg, #663399 100%, #663399 100%)"
                                : "linear-gradient(120deg, #66339981 100%, #66339981 100%)"
                              : item.lang == "#firebase"
                              ? lang == item.lang
                                ? "linear-gradient(120deg, #F58220 100%, #F58220 100%)"
                                : "linear-gradient(120deg, #f5832088 100%, #f5832088 100%)"
                              : "linear-gradient(120deg, #000000 100%, #000000 100%)"
                          }
                          backgroundRepeat='no-repeat'
                          backgroundSize={
                            lang == item.lang ? "100% 100%" : "100% 0.5em"
                          }
                          backgroundPosition='0 80%'
                          transition='all 250ms ease-in-out'
                          transition-property='height, width, background, font-size, background-size, font-color'
                          cursor='pointer'
                          textColor={
                            lang == item.lang
                              ? lang == "#gatsby"
                                ? "#ffffff"
                                : "#000000"
                              : "#4D00FF"
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
                            textColor:
                              item.lang == "#gatsby" ? "#ffffff" : "#000000",
                          }}
                          onClick={() => setLang(item.lang)}
                        >
                          {item.lang}
                        </Box>
                      ))}
                    </Flex>

                    {/* description */}
                    <LangDescription lang={lang} />
                  </Flex>
                </Box>

                <Box width='160px'></Box>

                {/* graphic */}
                <Box width='200px' height='200px'>
                  <StaticImage
                    src='../../../images/flutter_graphic.png'
                    alt=''
                  />
                </Box>
              </Flex>
            </Center>

            <Box height='24px' />
          </Box>
        )
      }
    </MediaQuery>
  );
}

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
