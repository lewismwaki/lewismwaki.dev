import React from "react"
import { Avatar, Flex, Text } from "@chakra-ui/react"

export interface ReferenceItem {
  refereeName: string
  refereeTitle: string
  refereeAvi: string
  referenceText: string
}


const ReferenceDetails = (props: ReferenceItem) => {
  return (
    <Flex direction="column">
      <Flex direction="row" alignItems="center">
        <Avatar
          name={props.refereeName}
          src={props.refereeAvi}
          h="53.3px"
          w="53.3px"
        />
        <Flex direction="column" alignItems="flex-start" pl="8px">
          <Text textColor="#442882" fontWeight="semibold" fontSize="12px">
            {props.refereeName}
          </Text>
          <Text textColor="#4D00FF" fontWeight="bold" fontSize="13px">
            {props.refereeTitle}
          </Text>
        </Flex>
      </Flex>

      <Text fontWeight="semibold" textColor="#707070" pt="13.3px" noOfLines={4}>
        {props.referenceText}
      </Text>
    </Flex>
  )
}

export default ReferenceDetails
