import { extendTheme, StyleFunctionProps } from '@chakra-ui/react'
import { Lato } from 'next/font/google'

const siteFont = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
})

const colors = {
  brand: {
    primary: '#007BFF', // Blue
    secondary: '#FFDC00', // Yellow
  },
}

const fonts = {
  heading: siteFont.style.fontFamily,
  body: siteFont.style.fontFamily,
}

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      // bg: "#0D172A",
      transitionProperty: 'opacity, transform, filter, background, color',
      transitionTimingFunction: 'ease-in-out',
      transitionDuration: '500ms',
    },
    '::-webkit-scrollbar': {
      width: '8px',
    },

    /* Track */
    '::-webkit-scrollbar-track': {
      background: 'transparent',
    },
    /* Handle */
    '::-webkit-scrollbar-thumb': {
      background: '#F5DEB7',
      borderRadius: '10px',
    },

    /* Handle on hover */
    '::-webkit-scrollbar-thumb:hover': {
      background: '#dcc7a4',
    },
  }),
}

export const theme = extendTheme({
  colors,
  fonts,
  styles,
})
