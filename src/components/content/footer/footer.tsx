import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import styled from "styled-components";

const GlassNav = styled.div`
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.8);
  position: sticky;
  top: 0;
  z-index: 20;
  transition: top 0.6s;
`;
const Footer = () => {
  return (
    <GlassNav>
      <Flex
        direction='row'
        height='80px'
        justifyContent='space-evenly'
        color='white'
      >
        <Text>C Copyright Lewis Mwaki 2021</Text>
        <Text>C Copyright Lewis Mwaki 2021</Text>
        <Text>C Copyright Lewis Mwaki 2021</Text>
        <Text>C Copyright Lewis Mwaki 2021</Text>
      </Flex>
    </GlassNav>
  );
};

export default Footer;
