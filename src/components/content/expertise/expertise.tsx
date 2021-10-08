import { Box, Center } from "@chakra-ui/layout";
import React from "react";
import { Text } from "@chakra-ui/react";
import SectionTitle from "../../shared/section_title";

const Expertise = () => {
  return (
    <Box height='115vh' background='inherit' >
      <SectionTitle title='.expertise()' id='expertise' />

      <Center>
        <Text color='#707070' fontSize='20' textAlign='center' width='500px'>
          Overview of some of the technologies I've worked with, highlighting
          how & where they've been used. A list that is ever-growing.
        </Text>
      </Center>
    </Box>
  );
};

export default Expertise;
