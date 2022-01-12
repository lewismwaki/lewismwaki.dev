import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Slide, useScrollTrigger } from "@material-ui/core";
import { Flex, Text, Center, Link as ChakraLink, Box } from "@chakra-ui/react";
import { Link } from "gatsby";

import styled from "styled-components";

type Anchor = "top" | "left" | "bottom" | "right";

const LogoStyle = styled.h1`
  -webkit-text-stroke: 0.2px yellow;
  -webkit-text-fill-color: transparent;
`;

const GlassNav = styled.div`
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  background-color: rgba(0, 0, 0, 0.6);
  position: sticky;
  top: 0;
  z-index: 50;
  transition: all 0.6s;
`;

interface Props {
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

const Navbar = ({ indexSelectedBySection }) => {
 

  return (
    <HideOnScroll>
      <GlassNav>
        <Flex
          direction='row'
          position='sticky'
          top='0'
          zIndex='60'
          alignItems='center'
          justifyContent='space-between'
          py='32px'
          px='60px'
        >
          {/* logo */}
          <Link to='/'>
            <LogoStyle>
              <Text fontFamily='Fira Mono' color='yellow'>
                lewismwaki.dev
              </Text>
            </LogoStyle>
          </Link>

          {/* nav */}
          <Center>
            {NAV_ITEMS.map((item, index) => (
              <ScrollLink
                activeClass='active'
                to={item.href}
                spy={true}
                smooth='easeOutCubic'
              >
                <Box
                  mr={item.nav == "references" ? "0px" : "32px"}
                  px='2px'
                  fontFamily='Fira Mono'
                  fontSize='smaller'
                  fontWeight='semibold'
                  backgroundImage={
                    index == indexSelectedBySection
                      ? "linear-gradient(120deg, #ffff00 100%, #f5f5d8 100%)"
                      : "linear-gradient(120deg, #5B5B00 100%, #5B5B00 100%)"
                  }
                  backgroundRepeat='no-repeat'
                  backgroundSize={
                    index == indexSelectedBySection ? "100% 100%" : "100% 0.5em"
                  }
                  backgroundPosition='0 90%'
                  transition='all 250ms ease-in-out'
                  textColor={
                    index == indexSelectedBySection ? "#000000" : "#ffffff"
                  }
                  transition-property='height, width, background, font-size, background-size, font-color'
                  cursor='pointer'
                  _hover={{
                    backgroundSize: "100% 100%",
                    backgroundImage:
                      "linear-gradient(120deg, #ffff00 100%, #ffff00 100%)",
                    textColor: "#000000",
                  }}
                  _after={{
                    content: `""`,
                    backgroundSize: "100% 100%",
                    backgroundImage:
                      "linear-gradient(120deg, #ffff00 100%, #ffff00 100%)",
                    textColor: "#000000",
                  }}
                >
                  {item.nav}
                </Box>
              </ScrollLink>
            ))}
          </Center>

          {/* CTA */}
          <ScrollLink
            activeClass='active'
            to='getInTouch'
            spy={true}
            smooth='easeOutCubic'
          >
            <ChakraLink
              as='button'
              color='black'
              rounded='0'
              px='20px'
              height='32px'
              fontSize='smaller'
              textDecoration='none'
              fontWeight='semibold'
              fontFamily='Fira Mono'
              background='#FFFF00'
              _hover={{ textDecoration: "none" }}
              _focus={{ borderStyle: "none" }}
            >
              GET IN TOUCH
            </ChakraLink>
          </ScrollLink>
        </Flex>
      </GlassNav>
    </HideOnScroll>
  );
};

export default Navbar;

interface NavItem {
  nav: string;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    nav: "projects",
    href: "projects",
  },

  {
    nav: "experience",
    href: "experience",
  },

  {
    nav: "expertise",
    href: "expertise",
  },

  {
    nav: "references",
    href: "references",
  },
];
