import { theme } from "@/styles/theme.styles"
import { Box, ChakraProvider } from "@chakra-ui/react"
import type { AppProps } from "next/app"
import MainLayout from "../components/layout/MainLayout"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Box>
      <ChakraProvider theme={theme}>
        <MainLayout>
          <Analytics />
          <SpeedInsights />
          <Component {...pageProps} />
        </MainLayout>
      </ChakraProvider>
    </Box>
  )
}
