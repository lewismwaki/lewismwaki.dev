import { Center, Flex, Box } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import AppStore from "../../../images/download-on-the-app-store.svg";

const ProjectLinks = ({ android, ios, github, landing }) => {
  return (
    <Center py='40px' zIndex='30'>
      <Flex direction='row'>
        {android != "" ? (
          <Box
            px='6px'
            cursor='pointer'
            onClick={() => {
              window.open(ios, "_blank");
            }}
          >
            <StaticImage
              src='../../../images/get-it-on-play-store.png'
              alt=''
              height={41.5}
            />
          </Box>
        ) : (
          <></>
        )}

        {github != "" ? (
          <Box
            pl='6px'
            cursor='pointer'
            onClick={() => {
              window.open(github, "_blank");
            }}
          >
            <StaticImage
              src='../../../images/get-it-on-github.png'
              alt=''
              height={41.5}
            />
          </Box>
        ) : (
          <></>
        )}

        {ios != "" ? (
          <Box
            pt='7px'
            cursor='pointer'
            onClick={() => {
              window.open(ios, "_blank");
            }}
          >
            <AppStore height={27.5} />
          </Box>
        ) : (
          <></>
        )}

        {landing != "" ? (
          <Flex alignItems='center' direction='row' pl='6px'>
            <Box
              px='4px'
              width='fit-content'
              fontFamily='Fira Mono'
              fontSize='14px'
              fontWeight='semibold'
              backgroundRepeat='no-repeat'
              backgroundSize='100% 0.5em'
              backgroundPosition='0 90%'
              transition='all 250ms ease-in-out'
              transition-property='height, width, background, font-size, background-size, font-color'
              textColor='#ffffff'
              backgroundImage='linear-gradient(120deg, #5B5B00 100%, #5B5B00 100%)'
              _hover={{
                backgroundSize: "100% 100%",
                textColor: "#000000",
                backgroundImage:
                  "linear-gradient(120deg, #ffff00 100%, #ffff00 100%)",
              }}
              cursor='pointer'
              onClick={() => {
                window.open(landing, "_blank");
              }}
            >
              {landing}
            </Box>
          </Flex>
        ) : (
          <></>
        )}
      </Flex>
    </Center>
  );
};

export default ProjectLinks;
