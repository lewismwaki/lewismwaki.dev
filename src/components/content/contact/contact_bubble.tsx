import React from "react";

import { Flex, Text } from "@chakra-ui/layout";
import MediaQuery from "react-responsive";

const ContactBubble = ({ href, platform, index }) => {
  return (
    <Flex
            position='absolute'
            direction='column'
            alignItems='center'
            justifyContent='center'
            bottom={
              index == 0
                ? "280px"
                : index == 1
                ? "110px"
                : index == 2
                ? "450px"
                : index == 3
                ? "250px"
                : index == 4
                ? "40px"
                : "0px"
            }
            right={
              index == 0
                ? "260px"
                : index == 1
                ? "400px"
                : index == 2
                ? "90px"
                : index == 3
                ? "30px"
                : index == 4
                ? "130px"
                : "0px"
            }
            width={
              index == 0
                ? "140px"
                : index == 1
                ? "120px"
                : index == 2
                ? "120px"
                : index == 3
                ? "120px"
                : index == 4
                ? "180px"
                : "0px"
            }
            height={
              index == 0
                ? "140px"
                : index == 1
                ? "120px"
                : index == 2
                ? "120px"
                : index == 3
                ? "120px"
                : index == 4
                ? "180px"
                : "0px"
            }
            borderRadius='100'
            border='1px solid yellow'
            textColor='white'
            fontWeight='semibold'
            fontFamily='Fira Mono'
            fontSize='13px'
            transition='all 0.2s ease-in-out'
            _hover={{
              cursor: "pointer",
              border: "1px solid yellow",
              backgroundColor: "yellow",
              textColor: "black",
            }}
            onClick={() => {
              window.open(href, "_blank");
            }}
          >
            <Text>{"<>"}</Text>
            <Text>{platform}</Text>
            <Text>{"</>"}</Text>
          </Flex>
  );
};

export default ContactBubble;
