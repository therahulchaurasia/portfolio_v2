import { Link } from "@chakra-ui/next-js"
import { Box, Flex, HStack, Icon, Image, Text } from "@chakra-ui/react"
import React from "react"
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6"
import { IoIosMail } from "react-icons/io"
import { TiMail } from "react-icons/ti"

type Props = {}

export default function Footer({}: Props) {
  return (
    <Box padding="50px">
      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={5}
      >
        <Flex
          direction={{ base: "row", md: "column" }}
          gap={{ base: 1, md: 0 }}
          fontWeight={"semibold"}
        >
          <Text>Refrenced by</Text>
          <Flex gap={1} alignItems={"center"}>
            <Text
              as={Link}
              href={"https://v3.brittanychiang.com/"}
              target="_blank"
              color={"brand.primary"}
              _hover={{
                textDecoration: "none",
              }}
              display={"inline"}
            >
              Brittany Chiang v3
            </Text>
          </Flex>
        </Flex>
        <HStack>
          {socials.map((social, idx) => (
            <Link key={idx} href={social.href}>
              <Text
                textTransform={"uppercase"}
                letterSpacing={"1px"}
                fontSize={"sm"}
                fontWeight={"bold"}
                color={"brand.primary"}
                alignSelf={"flex-start"}
                mx={5}
                hideBelow={"lg"}
              >
                {social.label}
              </Text>
              <Icon
                as={social.icon}
                boxSize={"22px"}
                color={"brand.primary"}
                hideFrom={"lg"}
                mx={{ base: 1, md: 3 }}
              />
            </Link>
          ))}
        </HStack>
      </Flex>
    </Box>
  )
}

const socials = [
  {
    label: "Email",
    href: "mailto:(therahulchaurasia@gmail.com)",
    icon: IoIosMail,
  },
  {
    label: "Twitter",
    href: "#",
    icon: FaXTwitter,
  },
  {
    label: "Instagram",
    href: "#",
    icon: FaInstagram,
  },
  {
    label: "Github",
    href: "#",
    icon: FaGithub,
  },
  {
    label: "Linkedin",
    href: "#",
    icon: FaLinkedin,
  },
]
