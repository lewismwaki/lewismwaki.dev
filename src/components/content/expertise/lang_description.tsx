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
          ? "Absolutely love the static and declarative nature of Dart & Flutter and that's a reason they continue to be my 'preffered' tools for delivering intuitive, feature-packed apps, fast. I've got experience spanning over 2 years, working with libraries, SDKs, and mini-frameworks in this ecosystem. I always embrace legacy architectural patterns & state management solutions that by like MVVM, MVC, Riverpod, BLoC, GetX etc. with a main focus on scalability."
          : lang == "#react"
          ? "I like to combine React with Typescript's typing system, & SSGs like Gatsby to reduce development and debugging times when building for the web. Always loved building simple websites since my first line of code, but I've recently began to leverage React's + Typescript's robust nature to building fully-fledged apps that live on the web."
          : lang == "#typescript"
          ? "By now you might have noticed I like my developer experienced served right :) Typescript's addition of static typing to JS has greatly helped with that, and has been a great experience while building for the web. With the growth of its typing system, Typescript has proved to always cut down on the amount of debugging and development time needed to ship solid and bug-free software."
          : lang == "#firebase"
          ? "Garnered vast experience in the serveless ecosystem of Firebase while writing cloud functions, structuring non-relational databases, tracking crashlytics, and setting up hosting. Firebase has exposed a great pathway to building scalable databases without the worry of managing servers. I've been able to build auto-scaling systems in cloud platforms using serverless architecture."
          : " "}
      </Text>
    </Box>
  );
};

export default LangDescription;
