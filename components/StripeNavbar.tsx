import { Box, Text } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { useState } from "react"
import Underline from "./Underline"
import { Hashicon } from "@emeraldpay/hashicon-react"

const MenuItemVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const Menu = () => {
  return (
    <Box w="100%" p={20}>
      <Box
        as={motion.div}
        p={10}
        borderWidth={1}
        display="flex"
        justifyItems="center"
      >
        <MenuItem text={"Home"}>
          <SubItem title={"Product"} text="A SaaS for e-commerce" />
          <SubItem title={"Blog"} text="Latest posts" />
          <SubItem title={"Contact"} text="Get in touch" />
        </MenuItem>
        <MenuItem text={"About Us"} sx={{ minWidth: "400" }}>
          {" "}
          <SubItem title={"The Team"} text="Get to know us better" />
          <SubItem title={"Blog"} text="Since 1998" />
          <SubItem
            title={"Our Mission"}
            text="Increase the GDP of the internet"
          />
        </MenuItem>
        <MenuItem text={"Products"} sx={{ minWidth: "400" }}>
          {" "}
          <SubItem
            title={"Ecommerce"}
            text="Unify online and in-person payments"
          />
          <SubItem
            title={"Marketplace"}
            text="Pay out globally and facilitate multiparty payments"
          />
          <SubItem
            title={"Platforms "}
            text="Let customers accept payments within your platform"
          />
        </MenuItem>
      </Box>
    </Box>
  )
}

const MenuItem = ({ text, children, ...props }: any) => {
  const [isBeingHovered, setIsBeingHovered] = useState(false)
  return (
    <Box
      as={motion.div}
      paddingX={10}
      pos="relative"
      cursor="pointer"
      onHoverStart={() => setIsBeingHovered(true)}
      onHoverEnd={() => setIsBeingHovered(false)}
    >
      <Box as="span" sx={{ position: "relative" }}>
        {text}
        {isBeingHovered && <Underline />}
      </Box>
      {/* {isBeingHovered && <SubItemsContainer>{children}</SubItemsContainer>} */}
      {isBeingHovered && (
        <Box
          as={motion.div}
          {...props}
          layoutId="menu"
          position="absolute"
          borderWidth={1}
          bg="white"
          paddingY={10}
          paddingX={10}
          shadow="lg"
          borderRadius="md"
          left="50%"
          sx={{ minWidth: "400" }}
          animate="visible"
          initial="hidden"
          variants={MenuItemVariants}
        >
          {children}
        </Box>
      )}
    </Box>
  )
}

const SubItem = ({ title, text }: any) => {
  return (
    <Box as={motion.div} layout marginY={2} cursor="pointer" minW="max-content">
      <Box display="flex" justifyItems="center" gap={4}></Box>
      <Hashicon value={title} size={25} />
      <Box>
        <Text
          fontSize={"md"}
          fontWeight={"bold"}
          color="gray.800"
          _hover={{
            color: "blue.900",
          }}
        >
          {title}
        </Text>
        <Box
          as={"span"}
          fontWeight={"bold"}
          color="gray.400"
          _hover={{
            color: "blue.400",
          }}
          fontSize={"sm"}
        >
          {text}
        </Box>
      </Box>
    </Box>
  )
}
export default Menu
