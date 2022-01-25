import React from "react";
import { Text, Box } from "@chakra-ui/react";

const LangDescription = ({ lang }) => {
  return (
    <Box position='relative' top='16px'>
      <Text
        width='584px'
        pl='16px'
        pr='28px'
        pb='60px'
        fontWeight='500'
        textColor='#666666'
        noOfLines={6}
        fontSize='15px'
        fontFamily='CircularBook'
      >
        {lang == "#flutter"
          ? "Dart + Flutter continue to be my preffered tool for building performant, feature-packed apps. I've got a wide experience spanning over 2 years, working with tools, libraries, SDKs, mini-frameworks in the Flutter ecosystem. Always embrace legacy architectural patterns & state management solutions like Riverpod, BLoC, Redux etc. with a focus on scalabiliy."
          : lang == "#react"
          ? "React has proven to be one of the robust frameworks. I've enjoyed building sites with React + Typescript + Gatsby, including this very website."
          : " "}
      </Text>
    </Box>
  );
};

export default LangDescription;
