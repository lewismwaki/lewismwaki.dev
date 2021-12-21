import React from "react";
import { Box, Text, Center, Flex } from "@chakra-ui/react";
import styled from "styled-components";
import { BiBriefcaseAlt2 } from "react-icons/bi";

const RegularTextStyle = styled.h1`
  -webkit-text-stroke: 0.75px yellow;
  -webkit-text-fill-color: transparent;
`;



const ExpandedTitleStyle = styled.h1`
  -webkit-text-stroke: 0.75px yellow;
  -webkit-text-fill-color: transparent;
  font-family: Fira Mono;
  font-size: 22px;
  font-weight: 500;
`;

const ExpandedSubTitleStyle = styled.h1`
  font-family: Fira Mono;
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5);
`;

interface Company {
  where: string;
  title: string;
}
const ExpandedTitle = ({ where, title }: Company) => {
  return (
    <Flex
      direction='row'
      alignItems='flex-start'
    >
      <Box
        width='45px'
        height='45px'
        zIndex='2'
        mr='20px'
        borderRadius='100px'
        bg='#160044'
        border='2.5px solid black'
        p='6px'
      >
        <Center>
          <BiBriefcaseAlt2
            style={{
              width: "28px",
              height: "28px",
              color: "#4C00E8",
            }}
          />
        </Center>
      </Box>

      <Flex
        direction='row'
        width='700px'
        alignItems='center'
        justify='space-between'
      >
        <Flex direction='column'>
          <ExpandedSubTitleStyle>{title}</ExpandedSubTitleStyle>
          <Flex>
            <ExpandedTitleStyle>{where}</ExpandedTitleStyle>
          </Flex>
        </Flex>

        <RegularTextStyle>
          <Text fontFamily='Fira Mono' fontSize='26px' color='yellow'>
            {"-"}
          </Text>
        </RegularTextStyle>
      </Flex>
    </Flex>
  );
};

export default ExpandedTitle;
