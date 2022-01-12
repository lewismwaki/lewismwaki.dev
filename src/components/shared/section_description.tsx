import { Text } from "@chakra-ui/layout";
import { Center, Box } from "@chakra-ui/react";

import React from "react";
import MediaQuery from "react-responsive";

const SectionDescription = ({ description }) => {
  return (
    <MediaQuery maxWidth={769}>
      {(isMobile: boolean) =>
        isMobile ? (
          <Box position='relative' zIndex='30'>
            <Center py='10px'>
              <Text
                fontSize='14px'
                color='#cecece'
                fontFamily='CircularMedium'
                textAlign='center'
                width='300px'
              >
                {description}
              </Text>
            </Center>
          </Box>
        ) : (
          <Box position='relative' zIndex='30'>
            <Center py='20px'>
              <Text
                fontSize='16px'
                color='#cecece'
                fontFamily='CircularMedium'
                textAlign='center'
                width='450px'
              >
                {description}
              </Text>
            </Center>
          </Box>
        )
      }
    </MediaQuery>
  );
};

export default SectionDescription;
