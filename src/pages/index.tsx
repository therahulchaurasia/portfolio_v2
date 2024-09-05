import Head from "next/head"
import Image from "next/image"
import { Inter } from "next/font/google"
import MyContainer, {
  MySmallerContainer,
} from "./components/layout/MyContainer"
import { Box, Heading, HStack, Stack, Text } from "@chakra-ui/react"
import { spacing10_20, spacing12_14 } from "@/util/style.util"

export default function Home() {
  return (
    <>
      <MyContainer>
        <Stack spacing={24}>
          <Heading as={"h1"} fontSize={"4xl"} fontWeight={"normal"}>
            Hello!
          </Heading>
          <MySmallerContainer ml={0} pl={0}>
            <Heading
              fontWeight={"normal"}
              letterSpacing={"2px"}
              lineHeight={"1.5"}
            >
              I&apos;m <Heading as={"span"}>Brittany Chiang</Heading>, a
              design-minded front-end software engineer focused on building
              beautiful interfaces & experiences
            </Heading>
          </MySmallerContainer>
          <HStack>
            <Text fontSize={"xl"}>Get in touch</Text>
          </HStack>
        </Stack>
      </MyContainer>
      <Box></Box>
    </>
  )
}
