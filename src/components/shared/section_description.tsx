import { Text } from "@chakra-ui/layout";
import { Center } from "@chakra-ui/react";
import React from "react";

const SectionDescription = ({ description }) => {
  return (
    <Center py="20px">
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
  );
};

export default SectionDescription;
