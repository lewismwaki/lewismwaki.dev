import { Text } from "@chakra-ui/layout"
import {  Center} from "@chakra-ui/react"
import React from "react"

interface SectionDescription {
  description: string
}
const SectionDescription = (props: SectionDescription) => {
  return (
    <Center>
      <Text>{props.description}</Text>
    </Center>
  )
}

export default SectionDescription
