import React from "react";
import { Box, Flex } from "@chakra-ui/layout";
import SyntaxHighlighter from "react-syntax-highlighter";
import customStyle from "../projects/custom_prism";
const introString = `
{
  "projectName": "Cryptoboard",
  "projectFeatures": [
      "Candlestick Charts", 
      "User Authentication", 
      "Notifications",
      "API Intergration"
  ]
}`;

const descriptionString = `
{
  "projectDescription": "Cryptoboard is a mobile and blockchain as a technology so —. I made this  for Cryptoboard v0.0.1-alpha as a 'pixel-to- pixel' clone of the widely used CoinMarketCap App for a starting point.I made this  for Cryptoboard v0.0.1-alpha as a 'pixel-to- pixel' clone of the widely used CoinMarketCap App for a starting point."
}`;

const ProjectsInfo = () => {
  return (
    <>
      <Flex direction='row' height='150px'>
        <Box width='70vw' height='150px' zIndex='30'>
          {/* name */}
          <SyntaxHighlighter
            language='json'
            style={customStyle}
            wrapLongLines
            customStyle={{
              backgroundColor: "transparent",
              opacity: "1",
              marginTop: "-14px",
            }}
            codeTagProps={{
              style: {
                fontSize: "12px",
              },
            }}
          >
            {introString}
          </SyntaxHighlighter>
        </Box>

        <Box width='40px'></Box>

        <Box width='130vw' height='150px'>
          {/* description */}
          <SyntaxHighlighter
            language='json'
            style={customStyle}
            wrapLongLines
            wrapLines
            customStyle={{
              backgroundColor: "transparent",
              opacity: "1",
              marginTop: "-14px",
              // marginLeft: "-10px",
            }}
            codeTagProps={{
              style: {
                fontSize: "12px",
              },
            }}
          >
            {descriptionString}
          </SyntaxHighlighter>
        </Box>
      </Flex>
    </>
  );
};

export default ProjectsInfo;
