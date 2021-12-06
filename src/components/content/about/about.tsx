import { Box, Flex, Center } from "@chakra-ui/layout";
import React from "react";
import { Text } from "@chakra-ui/react";
import SectionTitle from "../../shared/section_title";
import LanguageItem from "../about/language_item";
import { StaticImage } from "gatsby-plugin-image";
import VisibilitySensor from "react-visibility-sensor";

const About = ({ onSectionChange }) => {
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

      <Center pl='96px' pr='80px' pt='40px' position='relative'>
        <Box width='384px' height='468px' zIndex='10'>
          <StaticImage src='../../../images/about_img.png' alt='' />
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
              inquisitive
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
              pro-cyclist
            </Text>
          </Flex>
        </Flex>

        <Box width='80px'></Box>

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
          >
            Mobile applications developer based in Nairobi, Kenya. Mobile Mobile
            applications developer based in Nairobi, Kenya. Mobile Mobile
            developer based in Nairobi, Kenya. developer based in Nairobi,
            Kenya. developer based in Nairobi, Kenya.
            <br />
            <br />
            developer based in Nairobi, Kenya. based in Nairobi, Kenya. Mobile
            applications developer based in Nairobi, Kenya. developer based in
            Nairobi, Kenya. 
          </Text>

          <Flex zIndex='30'>
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
                  {langItemsFirst.map((item) => (
                    <LanguageItem item={item} />
                  ))}
                </Flex>
                <Flex direction='column'>
                  {langItemsSecond.map((item) => (
                    <LanguageItem item={item} />
                  ))}
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
                  {langItemsThird.map((item) => (
                    <LanguageItem item={item} />
                  ))}
                </Flex>
                <Flex direction='column'>
                  {langItemsFourth.map((item) => (
                    <LanguageItem item={item} />
                  ))}
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Center>
    </Box>
  );
};

export default About;

const langItemsFirst: Array<String> = ["#flutter", "#gatsby"];

const langItemsSecond: Array<String> = ["#firebase", "#react"];

const langItemsThird: Array<String> = ["#kotlin", "#python"];

const langItemsFourth: Array<String> = ["#AR", "#solidity"];
