import { BoxProps, Container, ContainerProps } from "@chakra-ui/react"
interface Props extends ContainerProps {
  boxProps?: BoxProps
  children: React.ReactNode
}
export default function MyContainer({ children, boxProps, ...props }: Props) {
  return (
    <Container
      px={{ base: 4, md: 8 }}
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
    <Container maxW={{ lg: "container.sm" }}  {...props}>
      {children}
    </Container>
  )
}
