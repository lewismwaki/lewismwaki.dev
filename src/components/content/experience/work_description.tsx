import { Center, Flex, Text } from "@chakra-ui/react";
import MediaQuery from "react-responsive";

import React from "react";

const WorkDescription = ({ description }) => {
  return (
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
  );
};

export default WorkDescription;
