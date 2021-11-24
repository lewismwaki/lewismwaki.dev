import React from "react";

import { MdOpenInNew } from "react-icons/md";
import { StaticImage } from "gatsby-plugin-image";
import SectionTitle from "../../shared/section_title";
import SectionDescription from "../../shared/section_description";
import ContactBubble from "./contact_bubble";
import emailjs from "emailjs-com";
import { Fade, Tooltip } from "@material-ui/core";
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
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [sentStatus, setSentStatus] = React.useState("initial");

  function isFormValid(): boolean {
    const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailBool = emailRegEx.test(String(email).toLowerCase());
    const messageBool = message.length > 0;
    const subjectBool = subject.length > 0;
    return emailBool && messageBool && subjectBool;
  }

  return (
    <Box position='relative' top='-200px'>
      <SectionTitle title='.getInTouch()' id='getInTouch' />
      
      <SectionDescription description="Overview of some of the technologies I've worked with, highlighting how & where they've been used. A list that is ever-growing."/>
      <Center position='relative' overflow='clip'>
        {/* contact form */}
        <Box position='relative' right='30px' zIndex='10'>
          {/* bkg */}
          <Box width='545px'>
            <StaticImage src='../../../images/group_3920.png' alt='' />
          </Box>
          {/* form */}
          <Flex direction='column'>
            {/* fields */}
            <Flex
              position='absolute'
              direction='column'
              top='48px'
              left='220px'
            >
              {/* email */}
              <FormControl
                id='email'
                isRequired
                onChange={(e) => {
                  setEmail((e.target as HTMLInputElement).value);
                }}
              >
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
                  width='304px'
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
              <FormControl
                id='subject'
                isRequired
                onChange={(e) => {
                  setSubject((e.target as HTMLInputElement).value);
                }}
              >
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
                  width='304px'
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
              {/* message */}
              <FormControl
                id='message'
                isRequired
                onChange={(e) => {
                  setMessage((e.target as HTMLInputElement).value);
                }}
              >
                <Flex
                  direction='row'
                  justifyContent='space-between'
                  alignItems='center'
                  mb='8px'
                >
                  <FormLabel
                    fontSize='13px'
                    fontWeight='bold'
                    textColor='#4D00FF'
                    m='0px'
                  >
                    Message
                  </FormLabel>
                  <Flex
                    direction='row'
                    alignItems='center'
                    position='relative'
                    bottom='0px'
                    right='14px'
                    onClick={() => {
                      window.open(
                        "https://mail.google.com/mail/u/0/?fs=1&to=mwakicodes@gmail.com" +
                          "&su=" +
                          subject +
                          "&body=" +
                          message +
                          "&tf=cm",
                        "_blank"
                      );
                    }}
                  >
                    <Text
                      color='#707070'
                      fontWeight='semibold'
                      fontSize='10px'
                      cursor='pointer'
                    >
                      Use Gmail?
                    </Text>
                    <IconButton
                      m='0px'
                      p='0px'
                      position='absolute'
                      top='-14px'
                      right='-28px'
                      icon={<Icon as={MdOpenInNew} />}
                      aria-label='Send Message'
                      fontSize='11px'
                      iconSize='11px'
                      color='#707070'
                      backgroundColor='rgba(0, 0, 0, 0)'
                      _hover={{ textDecoration: "none" }}
                      _focus={{ borderStyle: "none" }}
                    />
                  </Flex>
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
                  width='304px'
                  height='155px'
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
              </FormControl>
            </Flex>
            {/* submit */}
            <Tooltip
              title={
                subject.length == 0 && message.length == 0 && email.length == 0
                  ? "Please enter all the required fields to proceed"
                  : subject.length == 0
                  ? "Please enter subject text"
                  : message.length == 0
                  ? "Please enter message"
                  : "Please input a valid email address"
              }
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 300 }}
              disableHoverListener={isFormValid()}
            >
              <Flex
                position='absolute'
                bottom='36px'
                left='220px'
                height='40px'
                borderRadius='6px'
                width='304px'
                textAlign='center'
                alignItems='center'
                justifyContent='center'
                transition='all 0.3s ease-in-out'
                fontSize='14px'
                fontFamily='Futura'
                disabled={!isFormValid()}
                bg={
                  sentStatus == "initial"
                    ? isFormValid()
                      ? "#4D00FF"
                      : "#e2e213"
                    : "green"
                }
                color={
                  sentStatus == "initial"
                    ? isFormValid()
                      ? "yellow"
                      : "#4D00FF"
                    : "white"
                }
                cursor={
                  sentStatus == "initial"
                    ? isFormValid()
                      ? "pointer"
                      : "default"
                    : "default"
                }
                onClick={
                  sentStatus != "initial"
                    ? (e) => {}
                    : (e) => {
                        if (isFormValid()) {
                          setSentStatus("loading");
                          e.preventDefault();
                          emailjs
                            .send(
                              "service_1yqu5y5",
                              "template_lqyz8nq",
                              {
                                email: email,
                                subject: subject,
                                message: message,
                              },
                              "user_yquw9FSILqZGY1yq3R8Xh"
                            )
                            .then((res) => {
                              if (res.status == 200) {
                                setSentStatus("success");
                              } else {
                                setSentStatus("failure");
                              }
                              setTimeout(function () {
                                setSentStatus("initial");
                              }, 5000);
                            })
                            .catch(() => {
                              setSentStatus("failure");
                              setTimeout(function () {
                                setSentStatus("initial");
                              }, 5000);
                            });
                        }
                      }
                }
              >
                {sentStatus == "success"
                  ? "Success!"
                  : sentStatus == "loading"
                  ? "Sending..."
                  : "Send Message"}
              </Flex>
            </Tooltip>
          </Flex>
        </Box>

        {/* contact bubbles */}
        <Box position='relative' right='60px'>
          <Box
            filter='blur(80px)'
            position='absolute'
            width='1100px'
            height='1100px'
            top='140px'
            transform='rotate(120deg)'
          >
            <StaticImage src='../../../images/rectangle_154.svg' alt='' />
          </Box>

          <Box position='relative' width='700px' height='700px' top='-30px'>
            <Text
              position='absolute'
              left='170px'
              top='180px'
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
    href:
      "https://mail.google.com/mail/u/0/?fs=1&to=mwakicodes@gmail.com&tf=cm",
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
