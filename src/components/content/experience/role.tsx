import React from "react";
import { Box, Text, Center, Flex } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";

interface Role {
  role: string;
}
const Role = ({ role }: Role) => {
  return (
    <Flex
      position='relative'
      py='4px'
      alignItems='center'
      direction='row'
      left='-50px'
    >
      <Box pt='2px' width='16px' height='15px' zIndex='2' mr='34px'>
        <StaticImage src='../../../images/roles_img.png' alt='' />
      </Box>

      <Text
        color='#808080'
        fontFamily='Fira Mono'
        fontSize='13px'
        fontWeight='500'
      >
        {role}
      </Text>
    </Flex>
  );
};

export default Role;
