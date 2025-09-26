import { spacingLeft } from "@/util/style.util"
import { extendTheme, StyleFunctionProps } from "@chakra-ui/react"
import { Inconsolata, Lato } from "next/font/google"

const siteFont = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
})

const durationFont = Inconsolata({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
})

const myColors = {
  primaryBlue: "#007BFF", // Blue
  primaryRed: "#C6351C", // Red
  secondary: "#FFDC00", // Yellow
  tertiary: "#444452", // Gray
}

const semanticTokens = {
  colors: {
    "brand.primary": {
      default: myColors.primaryRed, // light mode
      _dark: myColors.primaryBlue, // dark mode
    },
  },
}
const fonts = {
  heading: siteFont.style.fontFamily,
  body: siteFont.style.fontFamily,
  incon: durationFont.style.fontFamily,
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
      sectionMd: {
        fontSize: ["md"],
        textTransform: "uppercase",
        letterSpacing: "2px",
        fontWeight: "bold",
        color: "brand.primary",
        minWidth: "200px",
        alignSelf: "flex-start",
        textAlign: { base: "start", md: "end" },
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
        fontSize: ["xl", "3xl", "4xl"],
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
      h6: {
        fontSize: ["sm", "md", "md"],
      },
    },
  },
  Stack: {
    variants: {
      sectionContentStack: {
        pl: spacingLeft,
        spacing: 4,
        fontWeight: "regular",
        width: "100%",
        maxW: "650px",
      },
    },
  },
}

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: props.colorMode === "dark" ? "#0D172A" : "#F6F2E9",
      transitionProperty: "opacity, transform, filter, background, color",
      transitionTimingFunction: "ease-in-out",
      transitionDuration: "500ms",
      color: props.colorMode === "dark" ? "white" : myColors.tertiary,
      lineHeight: "1.5",
    },
    "::selection": {
      background: myColors.secondary,
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
      background:
        props.colorMode === "dark" ? myColors.primaryBlue : myColors.primaryRed,
      borderRadius: "10px",
    },

    /* Handle on hover */
    "::-webkit-scrollbar-thumb:hover": {
      background:
        props.colorMode === "dark" ? myColors.primaryBlue : myColors.primaryRed,
    },
  }),
}

export const theme = extendTheme({
  colors: myColors,
  fonts,
  styles,
  components,
  semanticTokens,
})
