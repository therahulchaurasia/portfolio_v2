import { Box, BoxProps, Image, keyframes } from "@chakra-ui/react"
import React, { useState } from "react"
import Header from "./Header"
import Footer from "./Footer"
import { useMotionValueEvent, useScroll } from "framer-motion"

interface Props extends BoxProps {
  children: React.ReactNode
}

const pointUpAnimation = keyframes`
	from {

	transform: none

	}
	to {
	
	transform: translateY(-15px)

	}
`

export default function MainLayout({ children, ...props }: Props) {
  const { scrollY } = useScroll()

  const pointUp = `${pointUpAnimation} 0.5s`
  const [showScrollToTopButton, setShowScrollToTopButton] = useState(0)
  const [hover, setHover] = useState(false)

  const scrollToTop = () => {
    return window.scrollTo(0, 0)
  }

  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowScrollToTopButton(latest)
  })

  console.log(showScrollToTopButton)

  return (
    <Box minHeight={"100vh"} position={"relative"} {...props}>
      <Header />
      <Box as="main">{children}</Box>
      <Image
        display={showScrollToTopButton > 300 ? "block" : "none"}
        src="/assets/pointing-up.png"
        alt="pointing up"
        width={7}
        position={"fixed"}
        right={5}
        bottom={5}
        cursor={"pointer"}
        animation={hover ? pointUp : ""}
        onMouseEnter={(e) => {
          setHover(true)
        }}
        onMouseLeave={(e) => {
          setHover(false)
        }}
        onClick={() => {
          scrollToTop()
        }}
        sx={{
          animationFillMode: "forwards",
        }}
      />
      <Footer />
    </Box>
  )
}
