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
  "projectDescription": "Cryptoboard is a mobile app for cryptocurrency data, prices, charts, and news that's built with Flutter & Firebase. Cryptoboard came along as a result of my deep interest in blockchain and crypto. Took inspiration from one Coinmarketcap for some parts of the UI"
}`;

const tradditDescription = `
{
  "projectDescription": "The only investment-focused Reddit client. Follow all of your favorite stocks and subreddits like wallstreetbets and Gamestop. When picking stocks, get a complete picture; see all Reddit posts mentioning a stock, Reddit trends, short interest, and much more."
}`;

const ssentialDescription = `
{
  "projectDescription": "Ssential Health is a B2C app where Doctors and Health Insurance Agents can communicate in-app with patients with the help of Chat Messaging and Live Video Calls. Users can purchase Health Insurances as well as get profeesional health advice directly from the app. It houses extensive, verified medical info for reference. It's an all-inclusive telemedicine app."
}`;

const ProjectsInfo = ({ projectTag }) => {
  const projectIntros = [tradditIntro, cryptoboardIntro, ssentialIntro];
  const projectDescriptions = [
    tradditDescription,
    cryptoboardDescription,
    ssentialDescription,
  ];

  return (
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
  );
};

export default ProjectsInfo;
