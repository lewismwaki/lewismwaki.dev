import React from "react";
import { Link as ScrollLink } from "react-scroll";

import "@fontsource/fira-mono";
import { Flex, Text, Center, Link as ChakraLink, Box } from "@chakra-ui/react";
import { Link } from "gatsby";
import styled from "styled-components";

const LogoStyle = styled.h1`
  -webkit-text-stroke: 0.2px yellow;
  -webkit-text-fill-color: transparent;
`;

const Navbar = () => {
  return (
    <Flex
      direction='row'
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
        {NAV_ITEMS.map((item) => (
          <ScrollLink
            activeClass='active'
            to={item.href}
            spy={true}
            smooth={true}
          >
            <Box
              mr={item.nav == "references" ? "0px" : "32px"}
              px='2px'
              fontFamily='Fira Mono'
              fontSize='smaller'
              fontWeight='semibold'
              backgroundImage='linear-gradient(120deg, #5B5B00 100%, #5B5B00 100%)'
              backgroundRepeat='no-repeat'
              backgroundSize='100% 0.5em'
              backgroundPosition='0 90%'
              transition='all 250ms ease-in-out'
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

      <ScrollLink activeClass='active' to='getInTouch' spy={true} smooth={true}>
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
          _hover={{
            textDecoration: "none",
          }}
          _focus={{ borderStyle: "none" }}
        >
          GET IN TOUCH
        </ChakraLink>
      </ScrollLink>
    </Flex>
  );
};

export default Navbar;

interface NavItem {
  nav: string;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    nav: "about",
    href: "about",
  },

  {
    nav: "expertise",
    href: "expertise",
  },
  {
    nav: "projects",
    href: "projects",
  },
  {
    nav: "references",
    href: "references",
  },
];
