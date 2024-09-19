import { Link, LinkProps } from "@chakra-ui/next-js"
import {
  Heading,
  HeadingProps,
  HStack,
  Icon,
  IconProps,
  StackProps,
  Text,
  TextProps,
} from "@chakra-ui/react"
import React from "react"
import { FaArrowRight } from "react-icons/fa6"

interface ProjectLinkProps extends StackProps {
  label: string
  href: string
  headingProps?: HeadingProps
  iconProps?: IconProps
}

export function ProjectLink({
  label: textValue,
  href,
  headingProps,
  iconProps,
  ...props
}: ProjectLinkProps) {
  return (
    <HStack
      as={Link}
      target="_blank"
      href={href}
      role="group"
      cursor={"pointer"}
      _hover={{ textDecoration: "none" }}
      {...props}
    >
      <Heading variant={"h5"} {...headingProps}>
        {textValue}
      </Heading>
      <Icon
        as={FaArrowRight}
        color={"brand.primary"}
        transition={"all 0.3s ease"}
        _groupHover={{
          transform: "translateX(10px)",
        }}
        {...iconProps}
      />
    </HStack>
  )
}

interface CustomTextLinkProps extends TextProps {
  label: string
  href: string
  afterColor: string
}

export function CustomTextLink({
  label,
  href,
  afterColor,
  ...props
}: CustomTextLinkProps) {
  return (
    <Text
      as={Link}
      href={href}
      target="_blank"
      position={"relative"}
      _after={{
        content: '""',
        position: "absolute",
        height: "2px",
        width: "100%",
        bg: afterColor,
        right: "0",
        bottom: 0,
        opacity: 0,
        transition: "all 0.2s ease-in-out",
      }}
      _hover={{
        textDecoration: "none",
        _after: {
          opacity: 1,
          bottom: "-5px",
          height: "3px",
          transition: "all 0.2s ease-in-out",
        },
      }}
      {...props}
    >
      {label}
    </Text>
  )
}
