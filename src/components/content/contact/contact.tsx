import React from "react";

import { MdSend, MdOpenInNew } from "react-icons/md";
import { StaticImage } from "gatsby-plugin-image";
import SectionTitle from "../../shared/section_title";
import ContactBubble from "./contact_bubble";

import {
  Flex,
  Input,
  FormControl,
  FormLabel,
  Box,
  Center,
  Text,
  FormHelperText,
  Textarea,
  IconButton,
  Icon,
} from "@chakra-ui/react";

const Contact = () => {
  return (
    <Box background='inherit'>
      <SectionTitle title='.getInTouch()' id='getInTouch' />
      <Center position='relative' overflowX='clip' overflowY='clip'>
        {/* contact form */}
        <Box position='relative' right='30px' zIndex='10'>
          {/* bkg */}
          <Box width='500px'>
            <StaticImage src='../../../images/contact_box.png' alt='' />
          </Box>
          <Flex direction='row' alignItems='flex-start' background='red'>
            {/* form */}
            <Flex
              position='absolute'
              direction='column'
              top='40px'
              left='202px'
            >
              <FormControl id='email'>
                <FormLabel
                  fontSize='13px'
                  fontWeight='bold'
                  textColor='#4D00FF'
                  mb='8px'
                >
                  Email
                </FormLabel>
                <Input
                  color='#707070'
                  fontWeight='semibold'
                  type='email'
                  fontSize='13px'
                  borderColor='#F0F011'
                  borderRadius='4px'
                  backgroundColor='#F0F011'
                  background='#F0F011'
                  width='278px'
                  height='38px'
                  pl='10px'
                  mb='8px'
                  _hover={{
                    borderColor: "#4D00FF",
                    borderWidth: "2px",
                  }}
                  _focus={{
                    borderWidth: "2.5px",
                    borderColor: "#4D00FF",
                  }}
                ></Input>
                <FormHelperText></FormHelperText>
              </FormControl>

              {/* subject */}
              <FormControl id='subject'>
                <FormLabel
                  fontSize='13px'
                  fontWeight='bold'
                  textColor='#4D00FF'
                  mb='8px'
                >
                  Subject
                </FormLabel>
                <Input
                  color='#707070'
                  fontWeight='semibold'
                  fontSize='13px'
                  borderColor='#F0F011'
                  borderRadius='4px'
                  background='#F0F011'
                  backgroundColor='#F0F011'
                  width='278px'
                  height='38px'
                  pl='10px'
                  mb='8px'
                  _hover={{
                    borderColor: "#4D00FF",
                    borderWidth: "2px",
                  }}
                  _focus={{
                    borderWidth: "2.5px",
                    borderColor: "#4D00FF",
                  }}
                ></Input>
                <FormHelperText></FormHelperText>
              </FormControl>

              <FormControl id='message'>
                <Flex direction='row' alignItems='center' mb='8px'>
                  <FormLabel
                    fontSize='13px'
                    fontWeight='bold'
                    textColor='#4D00FF'
                    m='0px'
                  >
                    Message
                  </FormLabel>
                  <Text
                    color='#707070'
                    fontWeight='semibold'
                    fontSize='11px'
                    ml='4px'
                  >
                    // unlimited characters
                  </Text>
                </Flex>
                <Textarea
                  resize='none'
                  color='#707070'
                  textAlign='start'
                  alignItems='flex-start'
                  verticalAlign='top'
                  fontWeight='semibold'
                  fontSize='13px'
                  backgroundColor='#F0F011'
                  borderColor='#F0F011'
                  borderRadius='4px'
                  background='#F0F011'
                  width='278px'
                  height='150px'
                  pl='12px'
                  pb='40px'
                  mb='16px'
                  m='0px'
                  _hover={{
                    borderColor: "#4D00FF",
                    borderWidth: "2px",
                  }}
                  _focus={{
                    borderWidth: "2.5px",
                    borderColor: "#4D00FF",
                  }}
                ></Textarea>
                <FormHelperText></FormHelperText>
              </FormControl>
            </Flex>
            {/* actions */}
            <Flex
              direction='row'
              alignItems='center'
              position='absolute'
              bottom='24px'
              right='24px'
            >
              {/* gmail */}
              <Flex
                direction='row'
                alignItems='center'
                position='relative'
                bottom='0px'
                right='20px'
              >
                <Text
                  color='#707070'
                  fontWeight='semibold'
                  fontSize='11px'
                  cursor='pointer'
                >
                  Use Gmail?
                </Text>

                <IconButton
                  m='0px'
                  p='0px'
                  position='absolute'
                  top='-14px'
                  right='-27px'
                  icon={<Icon as={MdOpenInNew} />}
                  aria-label='Send Message'
                  fontSize='11px'
                  iconSize='11px'
                  color='#707070'
                  backgroundColor='rgba(0, 0, 0, 0)'
                  _hover={{
                    borderStyle: "none",
                    margin: "0px",
                    padding: "0px",
                    color: "#707070",
                  }}
                />
              </Flex>
              <Box
                backgroundColor='#4C00E8'
                borderRadius='100'
                height='10px'
                width='2px'
                mx='6px'
              ></Box>
              {/* send */}
              <Icon
                position='relative'
                bottom='0px'
                right='0px'
                icon={<Icon as={MdSend} />}
                aria-label='Send Message'
                size='sm'
                color='#4D00FF'
                _hover={{
                  borderStyle: "none",
                  margin: "0px",
                  padding: "0px",
                  color: "#4D00FF",
                }}
                backgroundColor='rgba(0, 0, 0, 0)'
              />
            </Flex>
          </Flex>
        </Box>

        {/* contact bubbles */}
        <Box position='relative' right='50px'>
          <Box
            filter='blur(80px)'
            position='absolute'
            width='1100px'
            height='1100px'
            top='100px'
            transform='rotate(120deg)'
          >
            <StaticImage src='../../../images/rectangle_154.svg' alt='' />
          </Box>

          <Box position='relative' width='700px' height='700px'>
            <Text
              position='absolute'
              left='170px'
              textColor='#ffff04'
              fontWeight='bold'
              fontFamily='Fira Mono'
            >
              {"//TODO: Connect"}
            </Text>

            {ContactBubbleList.map((contactBubble, index) => (
              <ContactBubble
                href={contactBubble.href}
                platform={contactBubble.platform}
                index={index}
              />
            ))}
          </Box>
        </Box>
      </Center>
    </Box>
  );
};

interface ContactBubbleProps {
  href: string;
  platform: string;
}

const ContactBubbleList: Array<ContactBubbleProps> = [
  {
    href: "https://mailto:mwakicodes@gmail.com",
    platform: "Mail",
  },
  {
    href: "https://www.linkedin.com/in/mwakicodes/",
    platform: "LinkedIn",
  },

  {
    href: "https://twitter.com/lewymwaki",
    platform: "Twitter",
  },

  {
    href: "https://wa.me/254745943954",
    platform: "Whatsapp",
  },
  {
    href: "https://www.github.com/mwakicodes/",
    platform: "Github",
  },
];

export default Contact;
