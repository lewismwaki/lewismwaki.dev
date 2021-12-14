import React from "react";

import { Box } from "@chakra-ui/layout";

const Underliner = ({ text, fontSize }) => {
  return (
    <Box
      display='inline-block'
      px='4px'
      width='fit-content'
      fontFamily='Fira Mono'
      fontSize={fontSize}
      fontWeight='semibold'
      backgroundImage='linear-gradient(120deg, #707070 100%, #707070 100%)'
      backgroundRepeat='no-repeat'
      backgroundSize='100% 0.5em'
      backgroundPosition='0 90%'
      transition='all 250ms ease-in-out'
      transition-property='height, width, background, font-size, background-size, font-color'
      textColor='#ffffff'
      _hover={{
        backgroundSize: "100% 100%",
        backgroundImage: "linear-gradient(120deg, #c7c7c7 100%, #c7c7c7 100%)",
        textColor: "#000000",
      }}
    >
      {text}
    </Box>
  );
};

export default Underliner;
