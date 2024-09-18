import { chakra } from "@chakra-ui/react"
import { motion, Variants } from "framer-motion"

export const MotionBox = motion(chakra.div)
export const cardVariants: Variants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      y: 0,
  
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 1,
      },
    },
  }
  