import { Center, Flex, Text } from "@chakra-ui/react";
import MediaQuery from "react-responsive";

import React from "react";

const WorkDescription = ({ description }) => {
  return (
    <MediaQuery maxWidth={769}>
      {(isMobile: boolean) =>
        isMobile ? (
          <Center py='20px'>
            <Text
              fontSize='15px'
              width='260px'
              color='#cecece'
              fontFamily='CircularBook'
            >
              {description}
            </Text>
          </Center>
        ) : (
          <Flex direction='row' py='20px'>
            <Text
              fontSize='16px'
              width='700px'
              color='#cecece'
              fontFamily='CircularBook'
            >
              {description}
            </Text>
          </Flex>
        )
      }
    </MediaQuery>
  );
};

export default WorkDescription;
