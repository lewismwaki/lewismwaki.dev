import { Box, Flex, Center } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";
import SectionTitle from "../../shared/section_title";
import LanguageItem from "../about/language_item";
import { StaticImage } from "gatsby-plugin-image";
import VisibilitySensor from "react-visibility-sensor";
import AosAnim from "../../shared/aos_anim";

const About = ({ onSectionChange }) => {
  const images = [
    <AosAnim
      animation='fade'
      duration={250}
      once={false}
      child={
        <StaticImage
          src='../../../images/life.png'
          placeholder='blurred'
          alt=''
        />
      }
    />,
    <AosAnim
      animation='fade'
      duration={250}
      once={false}
      child={
        <Box pt='24px'>
          <StaticImage
            src='../../../images/football.png'
            placeholder='blurred'
            alt=''
          />
        </Box>
      }
    />,
    <AosAnim
      animation='fade'
      duration={250}
      once={false}
      child={
        <StaticImage
          src='../../../images/math.png'
          placeholder='blurred'
          alt=''
        />
      }
    />,
  ];

  const [image, setImage] = useState(images[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomImage = images[Math.floor(Math.random() * images.length)];
      setImage(randomImage);
    }, 5000);
    return () => clearInterval(interval);
  }, [image]);

  return (
    <Box background='inherit'>
      <VisibilitySensor
        partialVisibility={true}
        onChange={(val) => {
          val ? onSectionChange(0) : null;
        }}
      >
        <SectionTitle title='.aboutMe()' id='about' />
      </VisibilitySensor>

      <Center pl='96px' pr='80px' py='40px' position='relative'>
        <AosAnim
          animation='fade-right'
          child={
            <Center position='relative'>
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
                  {image}
                </Box>
                <Box
                  width='384px'
                  height='468px'
                  zIndex='10'
                  position='relative'
                >
                  <StaticImage
                    src='../../../images/about_img.png'
                    alt=''
                    placeholder='tracedSVG'
                  />
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
                    <StaticImage
                      src='../../../images/group_9.png'
                      alt=''
                      placeholder='tracedSVG'
                    />
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
                    <StaticImage
                      src='../../../images/arrow_1.png'
                      alt=''
                      placeholder='tracedSVG'
                    />
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
                    <StaticImage
                      src='../../../images/group_42.png'
                      alt=''
                      placeholder='tracedSVG'
                    />
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
            </Center>
          }
        />

        <Box width='40px' />

        <Flex direction='column' mt='20px'>
          <AosAnim
            child={
              <Text
                textColor='#ffff04'
                fontWeight='bold'
                fontFamily='Fira Mono'
                pt='10px'
              >
                {"//TODO: Meet-Lewis"}
              </Text>
            }
          />

          <AosAnim
            child={
              <Text
                color='#cecece'
                fontSize='16px'
                fontFamily='CircularBook'
                width='470px'
                pt='20px'
                zIndex='20'
              >
                I'm a Software Engineer with a 2-year track record in delivering
                solid software solutions across industries such as finance,
                health-care, blockchain, sports, and more. I enjoy getting
                heavily involved right from conception and design, to the
                development and deployment phases of applications.
                <br />
                <br />
                Currently pursuing my Bachelor's Degree of Science in Computer
                Science at Africa Nazarene University. I enjoy cycling, playing
                table tennis and football during my off-screen time.
              </Text>
            }
          />

          <AosAnim
            child={
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
            }
          />
        </Flex>
      </Center>
    </Box>
  );
};

export default About;

const langItemsFirst: Array<String> = ["#flutter", "#typescript"];

const langItemsSecond: Array<String> = ["#firebase", "#react"];

const langItemsThird: Array<String> = ["#AR", "#solidity"];

const langItemsFourth: Array<String> = ["#kotlin", "#python"];
