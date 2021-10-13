import { Text } from "@chakra-ui/layout";
import { Center } from "@chakra-ui/react";
import React from "react";

interface SectionDescription {
  description: string;
}
const SectionDescription = (props: SectionDescription) => {
  return (
    <Center>
      <Text
        fontSize='16px'
        color='#cecece'
        fontWeight='600'
        textAlign='center'
        width='500px'
      >
        {props.description}
      </Text>
    </Center>
  );
};

export default SectionDescription;
