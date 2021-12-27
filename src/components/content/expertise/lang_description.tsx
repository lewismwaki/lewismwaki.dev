import React from "react";
import { Text, Box } from "@chakra-ui/react";
import MediaQuery from "react-responsive";

const LangDescription = ({ lang }) => {
  return (
    <MediaQuery maxWidth={797}>
      {(isMobile: boolean) =>
        isMobile ? (
          <Box position='relative' top='8px'>
            <Text
              width='320px'
              px='10px'
              pb='20px'
              fontWeight='semibold'
              textColor='#707070'
              noOfLines={3}
              fontSize='11.5px'
            >
              {lang}I have worked in teams to architecture and ship Android &
              iOSapps, with a focus on high performance and great user
              experience. AppsI've built, embrace legacy architectural patterns
              & state managementsolutions with a final goal of highly scalable,
              apps, with a focus onhigh performance and great user experience.
              management ilt,
            </Text>
          </Box>
        ) : (
          <Box position='relative' top='16px'>
            <Text
              width='584px'
              px='20px'
              pb='60px'
              fontWeight='semibold'
              textColor='#707070'
              noOfLines={4}
              fontSize='14.5px'
            >
              {lang}I have worked in teams to architecture and ship Android &
              iOSapps, with a focus on high performance and great user
              experience. AppsI've built, embrace legacy architectural patterns
              & state managementsolutions with a final goal of highly scalable,
              apps, with a focus onhigh performance and great user experience.
              management ilt,
            </Text>
          </Box>
        )
      }
    </MediaQuery>
  );
};

export default LangDescription;
