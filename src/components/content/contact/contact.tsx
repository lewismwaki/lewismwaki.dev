import React from "react";

import { MdOpenInNew } from "react-icons/md";
import { StaticImage } from "gatsby-plugin-image";
import SectionTitle from "../../shared/section_title";
import SectionDescription from "../../shared/section_description";
import ContactBubble from "./contact_bubble";
import emailjs from "@emailjs/browser";
import { Fade, Tooltip } from "@material-ui/core";
import VisibilitySensor from "react-visibility-sensor";
import BkgGradient from "../../../images/bkg_gradient_1.svg";

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
  AbsoluteCenter,
  Icon,
} from "@chakra-ui/react";
import AosAnim from "../../shared/aos_anim";

const Contact = ({ onSectionChange }) => {
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
    <VisibilitySensor
      partialVisibility={true}
      onChange={(val) => {
        val ? onSectionChange(4) : null;
      }}
    >
      <Box position='relative' top='-150px'>
        <SectionTitle title='.getInTouch()' id='getInTouch' />
        <SectionDescription description="Let's get building! Tell me more about your project. Or maybe talk about the genius of Ye, formerly Kanye Omari West. :)" />

        <Center position='relative' overflow='clip'>
          {/* contact form */}
          <Box
            position='relative'
            transition='all 0.5s ease-in-out'
            zIndex='10'
          >
            <AosAnim
              animation='fade-down-right'
              child={
                <Box
                  position='relative'
                  right={{ lg: "-10px", xl: "30px" }}
                  transition='all 0.5s ease-in-out'
                  zIndex='10'
                >
                  {/* bkg */}
                  <Box
                    width={{ lg: "490px", xl: "545px" }}
                    transition='all 0.5s ease-in-out'
                  >
                    <StaticImage src='../../../images/group_3920.png' alt='' />
                  </Box>
                  {/* form */}
                  <Flex direction='column'>
                    {/* fields */}
                    <Flex
                      position='absolute'
                      direction='column'
                      top={{ lg: "42px", xl: "48px" }}
                      left={{ lg: "195px", xl: "220px" }}
                      transition='all 0.5s ease-in-out'
                    >
                      {/* email */}
                      <FormControl
                        id='email'
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
                          width={{ lg: "280px", xl: "304px" }}
                          height='38px'
                          transition='all 0.5s ease-in-out'
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
                          width={{ lg: "280px", xl: "304px" }}
                          height='38px'
                          transition='all 0.5s ease-in-out'
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
                              aria-label='Use-Gmail'
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
                          width={{ lg: "280px", xl: "304px" }}
                          height={{ lg: "130px", xl: "155px" }}
                          pl='12px'
                          pb={{ lg: "32px", xl: "40px" }}
                          transition='all 0.5s ease-in-out'
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
                        subject.length == 0 &&
                        message.length == 0 &&
                        email.length == 0
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
                        bottom={{ lg: "28px", xl: "36px" }}
                        left={{ lg: "195px", xl: "220px" }}
                        height='40px'
                        borderRadius='6px'
                        width={{ lg: "280px", xl: "304px" }}
                        textAlign='center'
                        alignItems='center'
                        justifyContent='center'
                        transition='all 0.5s ease-in-out'
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
              }
            />
          </Box>

          {/* contact bubbles */}
          <AosAnim
            animation='fade-left'
            offset={200}
            child={
              <Box position='relative' right={{ lg: "100px", xl: "60px" }}>
                <Box
                  position='absolute'
                  transform='rotate(45deg)'
                  width='900px'
                  height='900px'
                  top='-100px'
                >
                  <BkgGradient width='900px' height='900px' overflow='clip' />
                </Box>

                <Box
                  position='relative'
                  width='700px'
                  height='700px'
                  top='-30px'
                >
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
            }
          />
        </Center>
      </Box>
    </VisibilitySensor>
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
    platform: "Phone",
  },
  {
    href: "https://www.github.com/mwakicodes/",
    platform: "Github",
  },
];

export default Contact;
