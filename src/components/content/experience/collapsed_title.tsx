import React from "react";
import { Box, Text, Center, Flex } from "@chakra-ui/react";
import styled from "styled-components";
import { BiBriefcaseAlt2 } from "react-icons/bi";
import MediaQuery from "react-responsive";

const CollapsedTitleStyle = styled.h1`
  font-family: Fira Mono;
  font-size: 22px;
  color: yellow;
  font-weight: 500;
`;

const CollapsedSubTitleStyle = styled.h1`
  font-family: Fira Mono;
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5);
`;

const RegularTextStyle = styled.h1`
  -webkit-text-stroke: 0.75px yellow;
  -webkit-text-fill-color: transparent;
`;

interface Company {
  where: string;
  title: string;
}

const CollapsedTitle = ({ where, title }: Company) => {
  return (
    <MediaQuery maxWidth={769}>
      {(isMobile: boolean) =>
        isMobile ? (
          <Flex direction='row' alignItems='flex-start' ml='10px' mr='30px'>
            <Box
              width='45px'
              height='45px'
              zIndex='2'
              mr='10px'
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
              width='260px'
              alignItems='center'
              justify='space-between'
            >
              <Flex direction='column'>
                <CollapsedSubTitleStyle
                  style={{
                    fontSize: "12px",
                  }}
                >
                  {title}
                </CollapsedSubTitleStyle>
                <CollapsedTitleStyle
                  style={{
                    fontSize: "20px",
                  }}
                >
                  {where}
                </CollapsedTitleStyle>
              </Flex>

              <RegularTextStyle>
                <Text fontFamily='Fira Mono' fontSize='24px' color='yellow'>
                  {"+"}
                </Text>
              </RegularTextStyle>
            </Flex>
          </Flex>
        ) : (
          <Flex direction='row' alignItems='flex-start'>
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
                <CollapsedSubTitleStyle>{title}</CollapsedSubTitleStyle>
                <CollapsedTitleStyle>{where}</CollapsedTitleStyle>
              </Flex>

              <RegularTextStyle>
                <Text fontFamily='Fira Mono' fontSize='26px' color='yellow'>
                  {"+"}
                </Text>
              </RegularTextStyle>
            </Flex>
          </Flex>
        )
      }
    </MediaQuery>
  );
};

export default CollapsedTitle;
