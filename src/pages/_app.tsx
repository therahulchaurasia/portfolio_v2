import { theme } from '@/styles/theme.styles'
import { Box, ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import MainLayout from './components/layout/MainLayout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Box>
      <ChakraProvider theme={theme}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ChakraProvider>
    </Box>
  )
}
