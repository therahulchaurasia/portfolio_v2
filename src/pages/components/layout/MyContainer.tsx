import { BoxProps, Container, ContainerProps } from "@chakra-ui/react"
interface Props extends ContainerProps {
  boxProps?: BoxProps
  children: React.ReactNode
}
export default function MyContainer({ children, boxProps, ...props }: Props) {
  return (
    <Container
      py={"100px"}
      px={{ base: "50px", md: "80px", lg: '50px', xl:'80px' }}
      maxW={{
        lg: "container.xl",
        xl: "container.2xl",
      }}
      mx={"auto"}
      {...props}
    >
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
