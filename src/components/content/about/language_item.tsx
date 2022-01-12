import { Box } from "@chakra-ui/layout";
import React from "react";

const LanguageItem = ({ item }) => {
  return (
    <Box
      px='2px'
      mb='10px'
      width='fit-content'
      fontFamily='Fira Mono'
      fontSize='11px'
      fontWeight='semibold'
      backgroundImage={
        item == "#flutter"
          ? "linear-gradient(120deg, #194954 100%, #194954 100%)"
          : item == "#react"
          ? "linear-gradient(120deg, #1D424C 100%, #1D424C 100%)"
          : item == "#typescript"
          ? "linear-gradient(120deg, #61dafb86 100%, #61dafb86 100%)"
          : item == "#firebase"
          ? "linear-gradient(120deg, #4A2709 100%, #4A2709 100%)"
          : item == "#python"
          ? "linear-gradient(120deg, #2c5f8ac7 100%, #2c5f8ac7 100%)"
          : item == "#kotlin"
          ? "linear-gradient(120deg, #704ad8ca 100%, #704ad8ca 100%)"
          : "linear-gradient(120deg, #707070 100%, #707070 100%)"
      }
      backgroundRepeat='no-repeat'
      backgroundSize='100% 0.5em'
      backgroundPosition='0 90%'
      transition='all 250ms ease-in-out'
      transition-property='height, width, background, font-size, background-size, font-color'
      textColor='#ffffff'
      _hover={{
        backgroundSize: "100% 100%",
        backgroundImage:
          item == "#flutter"
            ? "linear-gradient(120deg, #3FB6D3 100%, #3FB6D3 100%)"
            : item == "#react"
            ? "linear-gradient(120deg, #61DAFB 100%, #61DAFB 100%)"
            : item == "#typescript"
            ? "linear-gradient(120deg, #3178C6 100%, #3178C6 100%)"
            : item == "#firebase"
            ? "linear-gradient(120deg, #F58220 100%, #F58220 100%)"
            : item == "#python"
            ? "linear-gradient(120deg, #175385 100%, #175385 100%)"
            : item == "#kotlin"
            ? "linear-gradient(120deg, #7F52FF 100%, #7F52FF 100%)"
            : "linear-gradient(120deg, #c7c7c7 100%, #c7c7c7 100%)",
        textColor:
          item == "#typescript" || item == "#kotlin"
            ? "#ffffff"
            : item == "#python"
            ? "#FFD640"
            : "#000000",
      }}
    >
      {item}
    </Box>
  );
};

export default LanguageItem;
