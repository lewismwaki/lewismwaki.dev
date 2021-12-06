import { Center, Text } from "@chakra-ui/react";
import React from "react";

const WorkDescription = ({ description }) => {
  return (
    <Center py='20px'>
      <Text
        fontSize='16px'
        width='700px'
        color='#cecece'
        fontFamily='CircularBook'
      >
        {description}
      </Text>
    </Center>
  );
};

export default WorkDescription;
