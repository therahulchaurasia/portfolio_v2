import { extendTheme, StyleFunctionProps } from "@chakra-ui/react"
import {
  Cabin,
  Lato,
  Montserrat,
  Noto_Sans,
  Open_Sans,
  Poppins,
  Raleway,
  Roboto,
} from "next/font/google"

const siteFont = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
})

// const siteFont = Raleway({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// })

const colors = {
  brand: {
    primary: "#007BFF", // Blue
    secondary: "#FFDC00", // Yellow
    tertiary: "#444452", // Gray
  },
}

const fonts = {
  heading: siteFont.style.fontFamily,
  body: siteFont.style.fontFamily,
}

const components = {
  Text: {
    variants: {
      "hero-subtext": {
        fontSize: ["lg", "xl", "2xl"],
      },
      "2xl": {
        fontSize: ["lg", "xl", "2xl"],
      },
      xl: {
        fontSize: ["md", "lg", "xl"],
      },
      lg: {
        fontSize: ["base", "md", "lg"],
      },
      md: {
        fontSize: ["md"],
      },
    },
  },
  Heading: {
    variants: {
      hero: {
        fontSize: ["4xl", "5xl", "6xl"],
      },
      h1: {
        fontSize: ["3xl", "4xl", "5xl"],
      },
      h2: {
        fontSize: ["2xl", "3xl", "4xl"],
      },
      h3: {
        fontSize: ["xl", "2xl", "3xl"],
      },
      h4: {
        fontSize: ["lg", "xl", "2xl"],
      },
      h5: {
        fontSize: ["md", "lg", "xl"],
      },
    },
  },
}

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      // bg: "#0D172A",
      transitionProperty: "opacity, transform, filter, background, color",
      transitionTimingFunction: "ease-in-out",
      transitionDuration: "500ms",
      color: colors.brand.tertiary,
      lineHeight: "1.5",
    },

    "::-webkit-scrollbar": {
      width: "8px",
    },

    /* Track */
    "::-webkit-scrollbar-track": {
      background: "transparent",
    },
    /* Handle */
    "::-webkit-scrollbar-thumb": {
      background: "#F5DEB7",
      borderRadius: "10px",
    },

    /* Handle on hover */
    "::-webkit-scrollbar-thumb:hover": {
      background: "#dcc7a4",
    },
  }),
}

export const theme = extendTheme({
  colors,
  fonts,
  styles,
  components,
})
