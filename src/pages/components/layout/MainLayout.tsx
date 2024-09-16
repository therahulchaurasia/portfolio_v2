import { Box, BoxProps, Image } from "@chakra-ui/react"
import React from "react"
import Header from "./Header"
import Footer from "./Footer"

interface Props extends BoxProps {
  children: React.ReactNode
}

export default function MainLayout({ children, ...props }: Props) {
  return (
    <Box minHeight={"100vh"} position={"relative"} {...props}>
      <Header />
      <Box as="main">{children}</Box>
      <Image
        src="/assets/pointing-up.png"
        alt="pointing up"
        width={{ base: "20px", md: "28px" }}
        position={"fixed"}
        right={5}
        bottom={5}
      />
      <Footer />
    </Box>
  )
}
