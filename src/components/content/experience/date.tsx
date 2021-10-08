import React from "react";
import { Box, Text, Center, Flex } from "@chakra-ui/react";

interface Date {
  date: string;
}
const Date = ({date}:Date) => {
  return (
    <Text
      color='#808080'
      fontFamily='Fira Mono'
      fontSize='12px'
      fontWeight='400'
    >
     {date}
    </Text>
  );
};

export default Date;
