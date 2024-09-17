import { BoxProps, Container, ContainerProps } from "@chakra-ui/react"
interface Props extends ContainerProps {
  boxProps?: BoxProps
  children: React.ReactNode
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
