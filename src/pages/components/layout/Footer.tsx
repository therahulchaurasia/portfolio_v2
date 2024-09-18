import { Link } from "@chakra-ui/next-js"
import { Box, Flex, HStack, Icon, Text } from "@chakra-ui/react"
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6"
import { IoIosMail } from "react-icons/io"

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
          whiteSpace={"nowrap"}
        >
          <Text>Refrenced by</Text>
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
            Brittany Chiang v3{" "}
          </Text>
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
    href: "https://x.com/rahul_develops",
    icon: FaXTwitter,
  },
  {
    label: "Github",
    href: "https://github.com/therahulchaurasia",
    icon: FaGithub,
  },
  {
    label: "Linkedin",
    href: "#",
    icon: FaLinkedin,
  },
]
