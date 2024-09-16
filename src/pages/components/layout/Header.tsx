import { Box, Button, Flex, HStack } from "@chakra-ui/react"
import React from "react"
import MyContainer from "./MyContainer"

type Props = {}

export default function Header({}: Props) {
  return (
    <>
      <Flex
        justifyContent={"end"}
        px={10}
        py={6}
        position={"absolute"}
        right={0}
      >
        <Button>Theme switcher</Button>
      </Flex>
    </>
  )
}
