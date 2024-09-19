import { socials } from "@/data/socials.data"
import { Box, Flex, HStack, Icon, Text } from "@chakra-ui/react"
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

          <CustomTextLink
            color={"brand.primary"}
            label={"Brittany Chiang v3"}
            href={"https://v3.brittanychiang.com/"}
            afterColor="brand.primary"
          />
        </Flex>
        <HStack>
          {socials.map((social, idx) => (
            <Box key={idx}>
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
            </Box>
          ))}
        </HStack>
      </Flex>
    </Box>
  )
}
