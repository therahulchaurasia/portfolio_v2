import { Link } from "@chakra-ui/next-js"
import { Box, Flex, HStack, Icon, Text } from "@chakra-ui/react"
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6"
import { IoIosMail } from "react-icons/io"
import { CustomTextLink } from "../util/CustomLink"

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
          {/* <Text
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
          </Text> */}
          <CustomTextLink
            color={"brand.primary"}
            label={"Brittany Chiang v3"}
            href={"https://v3.brittanychiang.com/"}
            afterColor="brand.primary"
          />
        </Flex>
        <HStack>
          {socials.map((social, idx) => (
            <Link
              key={idx}
              target="_blank"
              href={social.href}
              _hover={{
                textDecoration: "none",
              }}
            >
              {/* <Text
                textTransform={"uppercase"}
                letterSpacing={"1px"}
                fontSize={"sm"}
                fontWeight={"bold"}
                color={"brand.primary"}
                alignSelf={"flex-start"}
                mx={5}
                hideBelow={"lg"}
                transition={"all 0.2s ease-in-out"}
                position={"relative"}
                _after={{
                  content: '""',
                  position: "absolute",
                  height: "2px",
                  width: "100%",
                  bg: "brand.primary",
                  right: "0",
                  bottom: 0,
                  opacity: 0,
                  transition: "all 0.2s ease-in-out",
                }}
                _hover={{
                  _after: {
                    opacity: 1,
                    bottom: "-5px",
                    height: "3px",
                    transition: "all 0.2s ease-in-out",
                  },
                }}
              >
                {social.label}
              </Text> */}
              <CustomTextLink
                textTransform={"uppercase"}
                letterSpacing={"1px"}
                fontSize={"sm"}
                fontWeight={"bold"}
                color={"brand.primary"}
                alignSelf={"flex-start"}
                mx={5}
                hideBelow={"lg"}
                transition={"all 0.2s ease-in-out"}
                label={social.label}
                href={social.href}
                afterColor={"brand.primary"}
              />
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
    href: "https://www.linkedin.com/in/therahulchaurasia/",
    icon: FaLinkedin,
  },
]
