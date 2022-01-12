import { Box, Flex, Center } from "@chakra-ui/layout";
import React from "react";
import { Text } from "@chakra-ui/react";
import SectionTitle from "../../shared/section_title";
import LanguageItem from "../about/language_item";
import { StaticImage } from "gatsby-plugin-image";
import VisibilitySensor from "react-visibility-sensor";
import MediaQuery from "react-responsive";

const About = ({ onSectionChange }) => {
  return (
    <Box background='inherit'>
      <VisibilitySensor
        partialVisibility={true}
        onChange={(val) => {
          val ? onSectionChange(-1) : null;
        }}
      >
        <SectionTitle title='.aboutMe()' id='about' />
      </VisibilitySensor>

      <MediaQuery maxWidth={769}>
        {(isMobile: boolean) =>
          isMobile ? (
            <Center px='32px' position='relative'>
              <Flex direction='column' alignItems='center' mt='20px'>
                <Text
                  textColor='#ffff04'
                  fontWeight='bold'
                  textAlign='center'
                  fontFamily='Fira Mono'
                  pt='10px'
                >
                  {"//TODO: Meet-Lewis"}
                </Text>

                <Text
                  color='#cecece'
                  fontSize='16px'
                  fontFamily='CircularBook'
                  width='300px'
                  textAlign='center'
                  pt='20px'
                  zIndex='20'
                >
                  Mobile applications developer based in Nairobi, Kenya. Mobile
                  Mobile applications developer based in Nairobi, Kenya. Mobile
                  Mobile developer based in Nairobi, Kenya. developer based in
                  Nairobi, Kenya. developer based in Nairobi, Kenya.
                  <br />
                  <br />
                  developer based in Nairobi, Nairobi, Kenya. Mobile
                  applications developer based in Nairobi, Kenya. developer
                  based in Nairobi, Kenya.
                </Text>

                <div
                  style={{
                    display: "flex",
                    zIndex: 20,
                  }}
                >
                  {/* active */}
                  <Flex direction='column'>
                    <Text
                      pt='20px'
                      pb='10px'
                      fontFamily='Fira Mono'
                      fontSize='11.5px'
                      fontWeight='500'
                      color='#858689'
                    >
                      🟢 Actively working with
                    </Text>

                    <Flex justifyContent='space-between'>
                      <Flex direction='column'>
                        <div>
                          {langItemsFirst.map((item) => (
                            <LanguageItem item={item} />
                          ))}
                        </div>
                      </Flex>
                      <Flex direction='column'>
                        <div>
                          {langItemsSecond.map((item) => (
                            <LanguageItem item={item} />
                          ))}
                        </div>
                      </Flex>
                    </Flex>
                  </Flex>

                  <Box width='40px' />
                  {/* interested */}
                  <Flex direction='column'>
                    <Text
                      pt='20px'
                      pb='10px'
                      fontFamily='Fira Mono'
                      fontSize='11.5px'
                      fontWeight='500'
                      color='#858689'
                    >
                      ⚪ Learning/Interested in
                    </Text>

                    <Flex justifyContent='space-between'>
                      <Flex direction='column'>
                        <div>
                          {langItemsThird.map((item) => (
                            <LanguageItem item={item} />
                          ))}
                        </div>
                      </Flex>
                      <Flex direction='column'>
                        <div>
                          {langItemsFourth.map((item) => (
                            <LanguageItem item={item} />
                          ))}
                        </div>
                      </Flex>
                    </Flex>
                  </Flex>
                </div>
              </Flex>
            </Center>
          ) : (
            <Center pl='96px' pr='80px' py='40px' position='relative'>
              <Box position='relative'>
                <Box
                  position='absolute'
                  top='42px'
                  objectFit='cover'
                  maxWidth='auto'
                  left='10px'
                  right='17px'
                  bottom='14px'
                  zIndex='11'
                >
                  <StaticImage src='../../../images/life.png' alt='' />
                </Box>

                <Box
                  width='384px'
                  height='468px'
                  zIndex='10'
                  position='relative'
                >
                  <StaticImage src='../../../images/about_img.png' alt='' />
                </Box>
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
                    pro-active
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
                    curious
                  </Text>
                </Flex>
              </Flex>

              <Box width='40px' />

              <Flex direction='column' mt='20px'>
                <Text
                  textColor='#ffff04'
                  fontWeight='bold'
                  fontFamily='Fira Mono'
                  pt='10px'
                >
                  {"//TODO: Meet-Lewis"}
                </Text>

                <Text
                  color='#cecece'
                  fontSize='16px'
                  fontFamily='CircularBook'
                  width='470px'
                  pt='20px'
                  zIndex='20'
                >
                  I'm a pro-active Software Engineer adept in delivering robust
                  mobile applications that scale seamlessly as needs & wants
                  evolve. I've worked in agile and continuous integration
                  environments using modern-day tech stacks and task management
                  tools to build world-class products. <br />
                  Currently pursuing my Bachelor's Degree in Computer Science at
                  Africa Nazarene University
                  <br />
                  <br />I enjoy cycling during my off-screen time.
                  {/* <Underliner text={"male"} fontSize='13px' /> Kenya. based in */}
                </Text>

                <div
                  style={{
                    display: "flex",
                    zIndex: 20,
                  }}
                >
                  {/* active */}
                  <Flex direction='column'>
                    <Text
                      pt='20px'
                      pb='10px'
                      fontFamily='Fira Mono'
                      fontSize='11.5px'
                      fontWeight='500'
                      color='#858689'
                    >
                      🟢 Actively working with
                    </Text>

                    <Flex justifyContent='space-between'>
                      <Flex direction='column'>
                        <div>
                          {langItemsFirst.map((item) => (
                            <LanguageItem item={item} />
                          ))}
                        </div>
                      </Flex>
                      <Flex direction='column'>
                        <div>
                          {langItemsSecond.map((item) => (
                            <LanguageItem item={item} />
                          ))}
                        </div>
                      </Flex>
                    </Flex>
                  </Flex>

                  <Box width='40px' />
                  {/* interested */}
                  <Flex direction='column'>
                    <Text
                      pt='20px'
                      pb='10px'
                      fontFamily='Fira Mono'
                      fontSize='11.5px'
                      fontWeight='500'
                      color='#858689'
                    >
                      ⚪ Learning/Interested in
                    </Text>

                    <Flex justifyContent='space-between'>
                      <Flex direction='column'>
                        <div>
                          {langItemsThird.map((item) => (
                            <LanguageItem item={item} />
                          ))}
                        </div>
                      </Flex>
                      <Flex direction='column'>
                        <div>
                          {langItemsFourth.map((item) => (
                            <LanguageItem item={item} />
                          ))}
                        </div>
                      </Flex>
                    </Flex>
                  </Flex>
                </div>
              </Flex>
            </Center>
          )
        }
      </MediaQuery>
    </Box>
  );
};

export default About;

const langItemsFirst: Array<String> = ["#flutter", "#typescript"];

const langItemsSecond: Array<String> = ["#firebase", "#react"];

const langItemsThird: Array<String> = ["#kotlin", "#python"];

const langItemsFourth: Array<String> = ["#AR", "#solidity"];
