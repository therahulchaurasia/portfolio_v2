import { Box, BoxProps } from '@chakra-ui/react'
import React from 'react'
import Header from './Header'
import Footer from './Footer'

interface Props extends BoxProps {
  children: React.ReactNode
}

export default function MainLayout({ children, ...props }: Props) {
  return (
    <Box minHeight={'100vh'} {...props}>
      <Header />
      <Box as="main">{children}</Box>
      <Footer />
    </Box>
  )
}
