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
          ? "Absolutely love the static and declarative nature of Dart & Flutter and that's a reason they continue to be my 'preffered' tools for building feature-packed apps, fast. I've got experience spanning over 2 years, working with libraries, SDKs, APIs, and mini-frameworks in this ecosystem. I always embrace legacy architectural patterns & state management solutions that by like MVVM, MVC, Riverpod, BLoC, GetX etc. with a main focus on scalability."
          : lang == "#react"
          ? "I like to combine React with Typescript's typing system, & SSGs like Gatsby to reduce development and debugging times when building for the web. Been building websites since God knows when, but React's + Typescript's robust nature has recently compelled me begin building fully-fledged apps that live on the web."
          : lang == "#typescript"
          ? "By now you might have noticed I like my developer experienced served right 🍜 :) Typescript surely helps with that and has been a great experience while building for the web, and sometimes when writing cloud functions."
          : lang == "#firebase"
          ? "The go-to when building MVPs"
          : " "}
      </Text>
    </Box>
  );
};

export default LangDescription;
