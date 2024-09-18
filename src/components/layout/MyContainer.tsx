import { sectionPaddingX, sectionPaddingY, spacingLeft } from "@/util/style.util"
import { BoxProps, Container, ContainerProps, Flex, Stack, StackProps, Text } from "@chakra-ui/react"
import { cardVariants, MotionBox } from "../util/MotionHelper"
interface Props extends ContainerProps {
  boxProps?: BoxProps
  children: React.ReactNode
}

interface SectionProps extends Props {
  sectionText: string
  stackProps?: StackProps
}

export default function MyContainer({ children, boxProps, ...props }: Props) {
  return (
    <Container mx={"auto"} {...props}>
      {children}
    </Container>
  )
}
export const MySmallerContainer = ({ children, boxProps, ...props }: Props) => {
  return (
    <Container maxW={{ lg: "container.md" }} {...props}>
      {children}
    </Container>
  )
}

export const SectionContainer = ({ children, sectionText,stackProps,boxProps, ...props }: SectionProps) => {
  return (
    <MotionBox
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariants}
    >
      <Flex
        justifyContent={"center"}
        gap={{ base: 14 }}
        direction={{ base: "column", md: "row" }}
        px={{ base: 0, md: 10, xl: 32 }}
        paddingY={sectionPaddingY}
        paddingX={sectionPaddingX}
      >
         <Text variant={"sectionMd"}>{sectionText}</Text>
      <Stack
        pl={spacingLeft}
        spacing={4}
        fontWeight={"regular"}
        width={"100%"}
        maxW={"650px"}
        {...stackProps}
      >

        {children}
      </Stack>
      </Flex>
    </MotionBox>
  )
}
