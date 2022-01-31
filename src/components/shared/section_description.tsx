import { Text } from "@chakra-ui/layout";
import { Center, Box } from "@chakra-ui/react";

import React from "react";
import MediaQuery from "react-responsive";

const SectionDescription = ({ description }) => {
  return (
    <Box position='relative' zIndex='30'>
      <Center py='20px'>
        <Text
          fontSize='17px'
          color='#cecece'
          fontFamily='Futura'
          fontWeight='500'
          textAlign='center'
          width='450px'
        >
          {description}
        </Text>
      </Center>
    </Box>
  );
};

export default SectionDescription;
