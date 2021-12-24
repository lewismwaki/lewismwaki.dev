import React from "react";
import { Box, Text, Center, Flex } from "@chakra-ui/react";
import { IoGitCommit } from "react-icons/io5";

import MediaQuery from "react-responsive";
interface Role {
  role: string;
}
const Role = ({ role }: Role) => {
  return (
    <MediaQuery maxWidth={769}>
      {(isMobile: boolean) =>
        isMobile ? (
          <Flex
            position='relative'
            py='4px'
            alignItems='center'
            direction='row'
            left='-42px'
          >
            <Box bg='black' zIndex='2' mr='22px' border='0px'>
              <IoGitCommit size='18px' color='#4C00E8' />
            </Box>

            <Text
              color='#cecece'
              fontFamily='Fira Mono'
              fontSize='13px'
              fontWeight='500'
            >
              {role}
            </Text>
          </Flex>
        ) : (
          <Flex
            position='relative'
            py='4px'
            alignItems='center'
            direction='row'
            left='-52px'
          >
            <Box bg='black' zIndex='2' mr='32px' border='0px'>
              <IoGitCommit size='18px' color='#4C00E8' />
            </Box>

            <Text
              color='#cecece'
              fontFamily='Fira Mono'
              fontSize='13px'
              fontWeight='500'
            >
              {role}
            </Text>
          </Flex>
        )
      }
    </MediaQuery>
  );
};

export default Role;
