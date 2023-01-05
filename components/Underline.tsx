import { Box } from "@chakra-ui/react"
import { motion } from "framer-motion"

const Underline = () => (
  <Box
    as={motion.div}
    pos="absolute"
    bottom={-1}
    left={0}
    right={0}
    height={1}
    bgGradient="linear(to-r, blue.700, pink.500, red.500) "
    layoutId="underline"
    layout
  />
)

export default Underline