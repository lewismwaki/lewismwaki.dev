import React from "react";
import { Box } from "@chakra-ui/layout";
import { MdSend } from "@react-icons/all-files/md/Mdsend";
import { StaticImage } from "gatsby-plugin-image";
import SectionTitle from "../../shared/section_title";
import {
  Flex,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Textarea,
  IconButton,
  Icon,
} from "@chakra-ui/react";

const Contact = () => {
  return (
    <Box background='inherit'>
      <SectionTitle title='.getInTouch()' id='getInTouch' />
      <Box height='50px'></Box>
      <Flex pl='96px' alignItems='flex-start'>
        {/* contact form */}
        <Box width='431.3px' height='499.3px' position='relative'>
          {/* bkg */}
          <StaticImage src='../../../images/contact_form.png' alt='' />
          <Flex direction='row' alignItems='flex-start' background='red'>
            {/* form */}
            <Flex
              position='absolute'
              direction='column'
              top='62px'
              left='24.7px'
              right='32px'
              bottom='49.3px'
            >
              <FormControl id='email'>
                <FormLabel
                  fontSize='16px'
                  fontWeight='bold'
                  textColor='#4D00FF'
                  mb='8px'
                  width='309.3px'
                >
                  Email
                </FormLabel>
                <Input
                  color='#707070'
                  fontWeight='semibold'
                  type='email'
                  fontSize='14px'
                  borderColor='#F0F011'
                  borderRadius='4px'
                  background='#F0F011'
                  width='309.3px'
                  height='40px'
                  pl='10px'
                  mb='16px'
                  _hover={{
                    borderColor: "#4D00FF",
                    borderWidth: "2px",
                  }}
                  _focus={{
                    borderWidth: "2.5px",
                    borderColor: "#4D00FF",
                  }}
                  // _active= {{ borderWidth: "2.5px" }}
                ></Input>
                <FormHelperText></FormHelperText>
              </FormControl>

              {/* subject */}
              <FormControl id='subject'>
                <FormLabel
                  fontSize='16px'
                  fontWeight='bold'
                  textColor='#4D00FF'
                  mb='8px'
                  width='309.3px'
                >
                  Subject
                </FormLabel>
                <Input
                  color='#707070'
                  fontWeight='semibold'
                  fontSize='14px'
                  borderColor='#F0F011'
                  borderRadius='4px'
                  background='#F0F011'
                  width='309.3px'
                  height='40px'
                  pl='10px'
                  mb='16px'
                  _hover={{
                    borderColor: "#4D00FF",
                    borderWidth: "2px",
                  }}
                  _focus={{ borderWidth: "2.5px", borderColor: "#4D00FF" }}
                ></Input>
                <FormHelperText></FormHelperText>
              </FormControl>

              <FormControl id='message'>
                <FormLabel
                  fontSize='16px'
                  fontWeight='bold'
                  textColor='#4D00FF'
                  mb='8px'
                  width='309.3px'
                >
                  Message
                </FormLabel>
                <Textarea
                  resize='none'
                  color='#707070'
                  textAlign='start'
                  alignItems='flex-start'
                  verticalAlign='top'
                  fontWeight='semibold'
                  fontSize='14px'
                  borderColor='#F0F011'
                  borderRadius='4px'
                  background='#F0F011'
                  width='309.3px'
                  height='148.7px'
                  pl='10px'
                  mb='16px'
                  _hover={{
                    borderColor: "#4D00FF",
                    borderWidth: "2px",
                  }}
                  _focus={{ borderWidth: "2.5px", borderColor: "#4D00FF" }}
                ></Textarea>
                <FormHelperText></FormHelperText>
              </FormControl>
            </Flex>
            {/* send icon */}
            <IconButton
              aria-label='Send Message'
              fontSize='40px'
              color='#4D00FF'
              position='absolute'
              bottom='118px'
              right='32px'
              _focus={{ borderStyle: "none" }}
              icon={<Icon as={MdSend} />}
            />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Contact;
