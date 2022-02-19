import { Text } from "@chakra-ui/layout";
import { Center, Box } from "@chakra-ui/react";
import React from "react";
import AosAnim from "./aos_anim";

const SectionDescription = ({ description }) => {
  return (
    <Box position='relative' zIndex='30'>
      <Center py='20px'>
        <AosAnim
          child={
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
          }
        />
      </Center>
    </Box>
  );
};

export default SectionDescription;
