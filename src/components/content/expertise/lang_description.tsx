import React from "react";
import { Text, Box } from "@chakra-ui/react";

const LangDescription = ({ lang }) => {
  return (
    <Box position='relative' top='16px'>
      <Text
        width='584px'
        px='20px'
        pb='60px'
        fontWeight='semibold'
        textColor='#707070'
        noOfLines={4}
        fontSize="14.5px"
      >
        {lang}
        I have worked in teams to architecture and ship Android & iOSapps,
        with a focus on high performance and great user experience. AppsI've
        built, embrace legacy architectural patterns & state managementsolutions
        with a final goal of highly scalable, apps, with a focus onhigh
        performance and great user experience. management ilt,
      </Text>
    </Box>
  );
};

export default LangDescription;
