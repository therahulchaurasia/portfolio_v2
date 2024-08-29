import Head from "next/head"
import Image from "next/image"
import { Inter } from "next/font/google"
import MyContainer, {
  MySmallerContainer,
} from "./components/layout/MyContainer"
import { Heading, HStack, Stack, Text } from "@chakra-ui/react"

export default function Home() {
  return (
    <>
      <MyContainer>
        <Stack spacing={24}>
          <Heading as={"h1"} fontSize={"4xl"} fontWeight={"light"}>
            Hello!
          </Heading>
          <MySmallerContainer ml={0} pl={0}>
            <Heading fontWeight={"light"}>
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
    </>
  )
}
