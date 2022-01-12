import React from "react";
import { Box, Flex } from "@chakra-ui/layout";
import SyntaxHighlighter from "react-syntax-highlighter";
import customStyle from "../projects/custom_prism";
import MediaQuery from "react-responsive";
const cryptoboardIntro = `
{
  "projectName": "Cryptoboard",
  "projectFeatures": [
      "Candlestick Charts", 
      "User Authentication", 
      "In-app Notifications",
      "API Intergration"
  ]
}`;

const ssentialIntro = `
{
  "projectName": "Ssential Health",
  "projectFeatures": [
      "Real-time Chat"
      "Live Video & Audio Chat", 
      "Payment Gateways",
      "Appointments"
  ]
}`;

const tradditIntro = `
{
  "projectName": "Traddit",
  "projectFeatures": [
      "Data Visualization", 
      "Premium Content", 
      "Social Profiles & Feeds",
      "User Authentication"
  ]
}`;

const cryptoboardDescription = `
{
  "projectDescription": "Cryptoboard is a mobile and blockchain as a technology so —. I made this  for Cryptoboard v0.0.1-alpha as a 'pixel-to- pixel' clone of the widely used CoinMarketCap App for a starting point.I made this  for Cryptoboard v0.0.1-alpha as a 'pixel-to- pixel' clone of the widely used CoinMarketCap App for a starting point."
}`;

const tradditDescription = `
{
  "projectDescription": "The only investment-focused Reddit client. Follow all of your favorite stocks and subreddits like wallstreetbets and Gamestop. When picking stocks, get a complete picture; see all Reddit posts mentioning a stock, Reddit trends, short interest, and much more."
}`;

const ssentialDescription = `
{
  "projectDescription": "The only investment-focused Reddit client. Follow all of your favorite stocks and subreddits like wallstreetbets and Gamestop. When picking stocks, get a complete picture; see all Reddit posts mentioning a stock, Reddit trends, short interest, and much more."
}`;

const ProjectsInfo = ({ projectTag }) => {
  const projectIntros = [tradditIntro, cryptoboardIntro, ssentialIntro];
  const projectDescriptions = [
    tradditDescription,
    cryptoboardDescription,
    ssentialDescription,
  ];

  return (
    <MediaQuery maxWidth={797}>
      {(isMobile: boolean) =>
        isMobile ? (
          <>
            <Box width='300px'>
              {/* description */}
              <SyntaxHighlighter
                language='json'
                style={customStyle}
                wrapLongLines
                wrapLines
                customStyle={{
                  backgroundColor: "transparent",
                  opacity: "1",
                  marginTop: "-10px",
                }}
                codeTagProps={{
                  style: {
                    fontSize: "9px",
                  },
                }}
              >
                {cryptoboardDescription}
              </SyntaxHighlighter>
            </Box>
          </>
        ) : (
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
                {projectIntros[projectTag]}
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
                }}
                codeTagProps={{
                  style: {
                    fontSize: "12px",
                  },
                }}
              >
                {projectDescriptions[projectTag]}
              </SyntaxHighlighter>
            </Box>
          </Flex>
        )
      }
    </MediaQuery>
  );
};

export default ProjectsInfo;
